<script>
    let text = 'Press the button to fetch data from the backend';

    async function helloWorld() {
        let response = await fetch('/api/hello');
        text = await response.text();
    }
</script>

<button class="btn" on:click={helloWorld}>{ text }</button>
