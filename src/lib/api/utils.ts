import type { Avatar } from '$lib/api/types';

export const getBackendUrl = () => {
	//return "https://api.controlz.bar";
	return process.env.NODE_ENV === "production" ? "https://api.controlz.bar" : "http://localhost:8000";
}

export const getAvatarUrl = (avatar: Avatar | undefined) => {
	if (!avatar) {
		return "";
	}

	return getBackendUrl() + "/storage/avatars/" + avatar.path;
}

export const getArtUrl = (path: string | undefined) => {
	if (!path) {
		return "";
	}

	return getBackendUrl() + "/storage/arts/" + path;
}

export const getPercentageToNextLevel = (xp: number, level: number) => {
	const nextLevelXp = 100 * (level+1);
	return Math.round(xp / nextLevelXp * 100);
}