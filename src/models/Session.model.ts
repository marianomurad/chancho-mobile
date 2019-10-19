import {Exercise} from "./Exercise.model";

export const Session = (
    name: string,
    order: number,
    // exercises: typeof Exercise[]
) => (
    {
        name,
        order,
        // exercises
    });
