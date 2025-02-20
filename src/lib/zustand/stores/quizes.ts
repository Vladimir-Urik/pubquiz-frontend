import type { Avatar, Quiz, User } from '$lib/api/types';
import { createStore } from 'zustand/vanilla';
import zustandToSvelte from '$lib/zustand/zustandToSvelte';

export interface QuizesStore {
	quizes: Quiz[];
}

export const quizStore = zustandToSvelte(createStore<QuizesStore>((set) => ({
	quizes: [],
	setQuizes: (quizes: Quiz[]) => set({ quizes }),
})));