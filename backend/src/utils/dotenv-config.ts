import dotenv from "dotenv";
import { Env } from "./types";

const { OPENAI_API_KEY } = dotenv.config({}) as Record<string, unknown>;

export default {
    openAiApiKey: OPENAI_API_KEY,
} as Env;
