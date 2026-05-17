import { json, error } from '@sveltejs/kit';
import { getTweet } from 'sveltweet/api';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	if (!id) {
		throw error(400, 'Missing tweet id');
	}

	try {
		const tweet = await getTweet(id);
		if (!tweet) {
			throw error(404, 'Tweet not found');
		}
		return json(tweet);
	} catch (err) {
		console.error(`Failed to fetch tweet ${id}:`, err);
		throw error(500, err instanceof Error ? err.message : 'Failed to fetch tweet');
	}
};
