<script>
    import {chosen} from "../js/arrayFunc";
    
</script>

<div id="content"> 
    <div class="title-description">
        <h1 id="title">
            {chosen.name}
        </h1>
    
        <p id="description">
            {chosen.description}
        </p>
    </div>
    
</div>

<style>

.title-description {
    height: 100%;
}

#content {
    display: flex;
    flex-direction: column;
}

#title {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 30pt;
    font-weight: 600;
}

#description {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 20pt;
}
</style>
