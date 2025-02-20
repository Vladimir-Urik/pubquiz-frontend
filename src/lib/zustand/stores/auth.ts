import type { Avatar, User } from '$lib/api/types';
import { createStore } from 'zustand/vanilla';
import zustandToSvelte from '$lib/zustand/zustandToSvelte';

export interface AuthStore {
	token: string | null;
	setToken: (token: string | null) => void;
	user?: User | undefined;
	setUser: (user: User) => void;
}

export const authStore = zustandToSvelte(createStore<AuthStore>((set) => ({
	token: null,
	setToken: (token) => set({ token }),
	user: undefined,
	setUser: (user) => set({ user }),
	updateUserAvatar: (avatar: Avatar) => set((state) => {
		if (state.user) {
			state.user.avatar = avatar;
		}

		return state;
	}),
})));