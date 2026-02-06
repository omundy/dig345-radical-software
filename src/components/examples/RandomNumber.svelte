<script>
    // Svelte 4 reactive state
    let r = 0;
    
    function increment() {
        r = Math.ceil(Math.random() * 6);
    }
</script>

<button on:click={increment}>
    🎲 {r}
</button>

<style>
    button {
        padding: 0.5em 1em;
        border-radius: 8px;
        border: 1px solid #ccc;
        background-color: #f0f0f0;
        cursor: pointer;
    }
</style>
