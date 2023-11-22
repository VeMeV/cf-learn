<script>
	/** @type {import('./$types').LayoutData} */
	// export let data;
	import '../app.css';
</script>

<slot />

<div class="flex m-auto justify-evenly">
	<a href="/" class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-5 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Home</a>
	<a href="/about" class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-5 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">About</a>
	<a href="/contact" class="bg-blue-500 hover:bg-blue-400 text-white font-bold my-5 py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Contact</a>
</div>