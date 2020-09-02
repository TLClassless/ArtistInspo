<script>
    import {Swiper} from "./Components.js";
    import {chosen} from "../js/arrayFunc";
    
</script>

<div id="content"> 
    <span id="SwiperWrapper">
        <Swiper></Swiper>
    </span>
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
    height: 30%;
}

#content {
    display: inline-flex;
    flex-direction: column;
    height: 80%;
    flex: 1;
}

#title {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 24pt;
}

#description {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 16pt;
    min-height: 100px;
}

#SwiperWrapper {
    display: flex;
    justify-content: center;
    height: 80%;
    min-height: 50vh;
    width: 100%;
    border-radius: 25px;
}
</style>
