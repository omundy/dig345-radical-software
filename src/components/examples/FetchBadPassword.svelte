<script>
    // Svelte 4 prop
    // export let url = "https://bad-password-api.vercel.app/api/";
    // Svelte 4 reactive state
    // let password = " ";

    // Svelte 5 using runes 
    // https://svelte.dev/tutorial/svelte/state
    let { url } = $props();
    // https://svelte.dev/tutorial/svelte/declaring-props
    let password = $state("");

    async function fetchData() {
        await fetch(url)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json);
                password = json.message;
            });
    }
</script>

<div>
    <button title="Get new bad password" onclick={fetchData}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
            /></svg
        >
    </button><span>{password}</span>
</div>

<style>
    span {
        display: inline-block;
        padding: 0.5rem;
    }
    button {
        padding: 0.5em 1em;
        border-radius: 8px;
        border: 1px solid #ccc;
        background-color: #f0f0f0;
        cursor: pointer;
    }
</style>
