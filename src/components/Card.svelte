<script> 
    let src="img/placeholder.svg"
    import{Nav} from './Components.js'
</script>

<main class = "card">
    <div class="content"> 
    <span class="visual">
        <img {src}>
    </span>
    
    <h1>
        Placeholder
    </h1>
    
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.
    </p>
    </div>
    
    <Nav></Nav>

</main>

<style>

.content {
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
}

.card {
    display: inline-flex;
    flex-direction: column;
    height:100vh
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
    height: 70%;
    width: 100%;
}
</style>