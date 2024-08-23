/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    
    const { path } = params;
    return { path };

};