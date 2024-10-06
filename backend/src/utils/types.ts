export interface PlanetInfo {
    name: string;
    description: string;
    distanceFromSun: string;
    dayLength: string;
}

export interface Session {
    planet: string;
    history: string;
}

export interface Env {
    openAiApiKey: string;
}
