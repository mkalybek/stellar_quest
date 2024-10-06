import path from "path";
import express, { Request, Response } from "express";
import { OpenAI } from "openai";
import crypto from "crypto";

// Utils
import env from "./utils/dotenv-config";
import { OPEN_AI_MODEL, sessions } from "./utils/constants";

// Initialize Express
const app = express();
app.use(express.json());

app.use("/planets", express.static(__dirname + "/planets"));

const openai = new OpenAI({
    apiKey: env.openAiApiKey,
});

// Function to create a new session ID
const generateSessionId = (): string => {
    return crypto.randomBytes(16).toString("hex");
};

// Route for Dialog with a Planet
app.post("/dialog", async (req, res) => {
    try {
        const { planetName, userQuestion, sessionId } = req.body;

        let currentSessionId = sessionId;

        // Check if session exists or create a new one
        if (!currentSessionId || !sessions[currentSessionId]) {
            if (!planetName) {
                res.status(400).json({
                    error: "Please provide a planetName for the first request.",
                });
                return;
            }
            // Create a new session
            currentSessionId = generateSessionId();
            sessions[currentSessionId] = {
                planet: planetName.toLowerCase(),
                history: "",
            };
        }

        const session = sessions[currentSessionId];

        // Append the new question to the session history
        session.history += `\nUser: ${userQuestion}\nPlanet ${planetName}:`;

        try {
            // Get a response from OpenAI
            const response = await openai.chat.completions.create({
                model: OPEN_AI_MODEL,
                messages: [
                    {
                        role: "system",
                        content: `
                        You are the exo-planet ${planetName} respond in character as the planet`,
                    },
                    {
                        role: "user",
                        content: `Based on the ongoing dialog ${session.history}`,
                    },
                ],
            });

            const planetResponse = response.choices[0].message.content;

            // Update the session history with the planet's response
            session.history += ` ${planetResponse}`;

            res.json({ response: planetResponse, sessionId: currentSessionId });
            return;
        } catch (error) {
            console.error("Error communicating with OpenAI:", error);
            res.json({
                error: String(error),
            });
        }
    } catch (error) {
        console.error(error);
        res.json({
            error: String(error),
        });
    }
});

app.post("/generate_planet", async (req, res) => {
    const { planetType, mass, temperature, distanceToStar, elements } =
        req.body;

    let runPy = () =>
        new Promise<Buffer>(function (success, nosuccess) {
            const { spawn } = require("child_process");
            const pyprog = spawn("python3.8", [
                path.join(__dirname, "./generate-planet-cli.py"),
                "--planetType",
                planetType,
                "--mass",
                mass,
                "--temperature",
                temperature,
                "--distanceToStar",
                distanceToStar,
                "--elements",
                JSON.stringify(elements),
            ]);

            pyprog.stdout.on("data", function (data: Buffer) {
                success(data);
            });

            pyprog.stderr.on("data", (data: Buffer) => {
                nosuccess(data);
            });
        });

    console.log(req.body);
    try {
        const resultBuffer = await runPy();
        const json = JSON.parse(resultBuffer.toString());
        res.json(json);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: true,
        });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
