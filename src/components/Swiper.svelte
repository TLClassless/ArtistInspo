<script>
      import { Swipe, SwipeItem } from "svelte-swipe"; // gzipped 3.37 KB
      import { chosen } from "../js/arrayFunc";

let autoplay = false;
let delay = 2000; //ms
let showIndicators = true;
let transitionDuration = 1000; //ms
let defaultIndex = 0; //start from 0
</script>

<div class="swipe-holder">
    <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>

      <SwipeItem>
        <span class="image0"><img src="{chosen.img0}" alt="img 1"></span>
      </SwipeItem>
  
      <SwipeItem>
        <span class="image1"><img src="{chosen.img1}" alt="img 2"></span>
      </SwipeItem>
  
      <SwipeItem>
        <span class="image2"><img src="{chosen.img2}" alt="img 3"></span>
      </SwipeItem>

      <SwipeItem>
        <span class="image3"><img src="{chosen.img3}" alt="img 4"></span>
      </SwipeItem>

      <SwipeItem>
        <span class="image4"><img src="{chosen.img4}" alt="img 5"></span>
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
  height: 100%;
}

@media screen and (max-height: 800px) {
  img {
    height: auto;
    width: 100%;
  }
}


</style>