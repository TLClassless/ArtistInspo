<script> 
	let src="img/placeholder.svg"
</script>

<main class = "card">

    <span class="visual">
        <img {src}>
    </span>
    
    <h1>
        Placeholder
    </h1>
    
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.
    </p>
    
</main>

<style>

.card {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

h1 {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
}

p {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
}

.visual {
    display: flex;
    justify-content: center;
    height: 60%;
    width: 100%;
}
</style>