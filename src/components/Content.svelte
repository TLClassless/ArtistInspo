<script>
    let src="img/placeholder.svg"
    let jssrc="js/arrayFunc.js"
    import {Swiper} from "./Components.js";
    import {TitleDescription} from "./Components.js"
</script>

<div class="content"> 
    <span class="SwiperWrapper">
        <Swiper></Swiper>
    </span>
    
    <h1 class="title">
        Placeholder
    </h1>
    
    <p class="description">
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

.title {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 24pt;
}

.description {
    margin: 10px;
    display: flex;
    font-family: 'PT Serif', serif;
    text-align: center;
    justify-content: center;
    font-size: 16pt;
}

.SwiperWrapper {
    display: flex;
    justify-content: center;
    height: 70%;
    width: 100%;
}
</style>
