<script>
    // Svelte 4 reactive state
    let count = 0;
    
    function increment() {
        count++;
    }
</script>

<button on:click={increment}>
    Count {count}
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
