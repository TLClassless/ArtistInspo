<script>
      import { Swipe, SwipeItem } from "svelte-swipe"; // gzipped 3.37 KB
      import { chosen } from "../js/arrayFunc";

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
        <span class="image0"><img src="{chosen.img0}" alt=""></span>
      </SwipeItem>
  
      <SwipeItem>
        <span class="image1"><img src="{chosen.img1}" alt=""></span>
      </SwipeItem>
  
      <SwipeItem>
        <span class="image2"><img src="{chosen.img2}" alt=""></span>
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
    display: flex;
    align-self: center;
    float: left;
    min-width: 300px;
    max-width: 380px;
    height: auto;
  }

</style>