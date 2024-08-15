// place files you want to import through the `$lib` alias in this folder.

import { dev } from '$app/environment';

export async function getLink() {

    const CACHE_KEY = 'ide_api_data';
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

    let cachedData = null;
    let cacheTimestamp = 0;

    async function fetchData() {
        if (!dev && cachedData && Date.now() - cacheTimestamp < CACHE_DURATION) {
            return cachedData;
        }

        try {
            const response = await fetch('https://ide-api.com/api/v1/links/ide');
            const data = await response.json();
            cachedData = data;
            cacheTimestamp = Date.now();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    const data = await fetchData();
    let baseUrl = '';

    if (data) {
        const nonIpoDomain = data.find(item => !item.isIpo);
        if (nonIpoDomain) {
            baseUrl = nonIpoDomain.domain;
        }
    }

    console.log('Base URL:', baseUrl);


    return { baseUrl };

};