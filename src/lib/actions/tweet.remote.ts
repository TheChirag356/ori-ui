import { query } from '@sveltejs/kit';
import { getTweet } from 'sveltweet/api';

export const getTweetData = query(async (id: string) => getTweet(id));