import type { Avatar, Quiz, User } from '$lib/api/types';
import { createStore } from 'zustand/vanilla';
import zustandToSvelte from '$lib/zustand/zustandToSvelte';

export interface AvatarsStore {
	avatars: Avatar[];
}

export const avatarsStore = zustandToSvelte(createStore<AvatarsStore>((set) => ({
	avatars: [],
	setAvatars: (avatars: Avatar[]) => set({ avatars }),
})));