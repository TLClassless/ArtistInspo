<script>
    import {chosen} from "../js/arrayFunc";
    
</script>

<div id="content"> 
    <div class="title-description">
        <h1 id="title">
            {chosen.name}
        </h1>

        <p id="uid">
            {chosen.uid}
        </p>
    
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
    text-align: left;
    font-size: 25pt;
    font-weight: 600;
    color: #333;
}

#uid {
    margin: 0 0 0 10px;
    display: flex;
    text-align: left;
    font-size: 12pt;
    color: #8e8e8e;
    font-family: 'PT Serif', serif;
}

#description {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: left;
    font-size: 15pt;
    color: #545454;
}
</style>
