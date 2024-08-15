import { redirect } from '@sveltejs/kit';
import { getLink } from '$lib/index.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {


    const { baseUrl } = await getLink();

    // return { baseUrl };

    throw redirect(302, `https://${baseUrl}/?test123`);
};