import type { Avatar } from '$lib/api/types';

export const getBackendUrl = () => {
	return "https://api.controlz.bar";
	return process.env.NODE_ENV === "production" ? "https://api.controlz.bar" : "http://localhost:8000";
}

export const getAvatarUrl = (avatar: Avatar | undefined) => {
	if (!avatar) {
		return "";
	}

	return getBackendUrl() + "/storage/avatars/" + avatar.path;
}