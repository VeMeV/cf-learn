<script>
    import { page } from '$app/stores';
    /** @type {import('./$types').PageData} */
    // export let data;

    // console.log($page, '<<< INI NI ISINIYA');

</script>

<!-- HEAD -->
<svelte:head>
    <title>About</title>
    <meta name="description" content="Learn more about us on our About page.">
    <link rel="canonical" href="https://www.example.com" />
</svelte:head>

<!-- BODY -->
<h1 class="text-3xl text-center font-bold underline">ABOUT US</h1>

<h2>This is SSR</h2>
<h3>{$page.url.pathname}</h3>

<div class="artboard artboard-horizontal phone-3 block m-auto">

    <div class="radial-progress text-primary" style="--value:30;" role="progressbar">30%</div>
    
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusantium deserunt odit, quibusdam perspiciatis delectus earum id unde sint, incidunt accusamus veniam quia iure ipsum commodi voluptatem obcaecati animi qui.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusantium deserunt odit, quibusdam perspiciatis delectus earum id unde sint, incidunt accusamus veniam quia iure ipsum commodi voluptatem obcaecati animi qui.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusantium deserunt odit, quibusdam perspiciatis delectus earum id unde sint, incidunt accusamus veniam quia iure ipsum commodi voluptatem obcaecati animi qui.</p>
</div>