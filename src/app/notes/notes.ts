import { console } from "inspector";

export interface Note {
    id: number;
    title: string;
    text: string;
}

export const NOTES: Note[] = []

export function addNote(id: number, title: string, text: string): void {
    const newNote: Note = {
        id: id,
        title: title,
        text: text
    };

    NOTES.push(newNote); // Add the new note to the NOTES array
}

export let COUNT = 0;
export function incrementAndGetCount(): number {
    COUNT++;
    return COUNT;
}

export function decrementCount() {
    COUNT--;
}

// Example usage
addNote(incrementAndGetCount(), "Shopping List", "Buy milk and bread");
addNote(incrementAndGetCount(), "Workout Plan", "Run 5 miles and do 20 pushups");