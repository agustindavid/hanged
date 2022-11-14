import { writable } from "svelte/store";

export const word = writable([]);
export const wordString = writable('');
export const notValidLetters = writable([]);
export const currentLetter = writable('');
export const validLetters = writable([]);
export const attempts = writable(0);