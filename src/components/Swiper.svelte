<script>
      import { Swipe, SwipeItem } from "svelte-swipe"; // gzipped 3.37 KB
      import { imgOne, imgTwo, imgThree, imgFour, imgFive } from "../js/arrayFunction";

  console.log(imgOne);

let autoplay = false;
let delay = 2000; //ms
let showIndicators = true;
let transitionDuration = 500; //ms
let defaultIndex = 0; //start from 0
</script>

<div class="swipe-holder">
    <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>

      <SwipeItem>
        <img src="{imgOne}" alt="img 1">
      </SwipeItem>
  
      <SwipeItem>
        <img src="{imgTwo}" alt="img 2">
      </SwipeItem>
  
      <SwipeItem>
        <img src="{imgThree}" alt="img 3">
      </SwipeItem>

      <SwipeItem>
        <img src="{imgFour}" alt="img 4">
      </SwipeItem>

      <SwipeItem>
        <img src="{imgFive}" alt="img 5">
      </SwipeItem>

    </Swipe>
</div>

<style>

.swipe-holder {
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: auto;
}


</style>