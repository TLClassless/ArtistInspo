<script>
      import { Swipe, SwipeItem } from "svelte-swipe"; // gzipped 3.37 KB

let placeholder1 = "img/placeholder 1.png"
let placeholder2 = "img/placeholder 2.png"
let placeholder3 = "img/placeholder 3.png"

let autoplay = false;
let delay = 2000; //ms
let showIndicators = true;
let transitionDuration = 1000; //ms
let defaultIndex = 0; //start from 0
</script>

<div class="swipe-holder">
    <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
      <SwipeItem>
        <img class = "swipe-img" src={placeholder1} alt="">
      </SwipeItem>
  
      <SwipeItem>
        <img class = "swipe-img" src={placeholder2} alt="">
      </SwipeItem>
  
      <SwipeItem>
        <img class = "swipe-img" src={placeholder3} alt="">
      </SwipeItem>
    </Swipe>
</div>

<style>

.swipe-holder {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

img{
    display: flex;
  }
</style>