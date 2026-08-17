import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { environment } from "@vicinae/api";
import { Schedule, Session, State } from "./types";

const EMPTY: State = { version: 1, session: null, schedules: [] };

function statePath(): string {
  const dir = environment.supportPath;
  mkdirSync(dir, { recursive: true });
  return join(dir, "state.json");
}

export function readState(): State {
  try {
    const raw = readFileSync(statePath(), "utf8");
    const parsed = JSON.parse(raw) as Partial<State>;
    if (parsed.version !== 1) return { ...EMPTY };
    return {
      version: 1,
      session: isSession(parsed.session) ? parsed.session : null,
      schedules: Array.isArray(parsed.schedules) ? parsed.schedules.filter(isSchedule) : [],
    };
  } catch {
    return { ...EMPTY };
  }
}

export function writeState(state: State): void {
  const path = statePath();
  const tmp = `${path}.tmp`;
  writeFileSync(tmp, JSON.stringify(state, null, 2));
  renameSync(tmp, path);
}

export function updateState(mutator: (state: State) => void): State {
  const state = readState();
  mutator(state);
  writeState(state);
  return state;
}

function isSession(value: unknown): value is Session {
  if (!value || typeof value !== "object") return false;
  const session = value as Session;
  return typeof session.pid === "number" && typeof session.mode === "string";
}

function isSchedule(value: unknown): value is Schedule {
  if (!value || typeof value !== "object") return false;
  const schedule = value as Schedule;
  return (
    typeof schedule.id === "string" &&
    Array.isArray(schedule.days) &&
    typeof schedule.from === "string" &&
    typeof schedule.to === "string"
  );
}
