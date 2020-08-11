<script>
    let src="img/placeholder.svg"
</script>

<div class="content"> 
    <span class="visual">
        <img {src} alt="placeholder">
    </span>
    
    <h1>
        Placeholder
    </h1>
    
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.
    </p>
</div>

<style>

.content {
    display: inline-flex;
    flex-direction: column;
    height: 80%;
    flex: 1;
}

h1 {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 24pt;
}

p {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 16pt;
}

.visual {
    display: flex;
    justify-content: center;
    height: 70%;
    width: 100%;
}
</style>
