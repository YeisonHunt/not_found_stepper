
export enum StepState {
    Ready = "ready",
    Completed = "completed"
}

export type Step = {
    type: string
    state: "ready" | "completed";
}

export const stepsPerPage = 5;