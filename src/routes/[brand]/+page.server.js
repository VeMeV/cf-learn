/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { brand } = params;
    return { brand };
};