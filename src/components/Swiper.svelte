<script>
      import { Swipe, SwipeItem } from "svelte-swipe"; // gzipped 3.37 KB

let autoplay = false;
let delay = 2000; //ms
let showIndicators = true;
let transitionDuration = 1000; //ms
let defaultIndex = 0; //start from 0
</script>

<div class="swipe-holder">
    <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
      <SwipeItem>
        <img src="./images/1.jpg" alt="">
      </SwipeItem>
  
      <SwipeItem>
        <img src="./images/2.jpg" alt="">
      </SwipeItem>
  
      <SwipeItem>
        <img src="./images/3.jpg" alt="">
      </SwipeItem>
    </Swipe>
</div>

<style>
  .swipe-holder{
    height: 30vh;
    width: 100%;
  }
  img{
    max-width: 100%;
    height: auto;
  }
</style>