<script> 
    let src="img/placeholder.svg"
    import {Swiper} from "./Components.js";
    import{Nav} from './Components.js'
    import{Content} from './Components.js'
</script>

<main class = "card">
    <div class= "content">
        <Swiper></Swiper>
        <Content></Content>
        <div class="nav">
            <Nav></Nav>
        </div>
    </div>

</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .nav {
        display: flex;
    }

</style>