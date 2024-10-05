import { Session } from "./types";

// In-memory session store
export const sessions: Record<string, Session> = {};

export const OPEN_AI_MODEL = "gpt-4o-mini";
