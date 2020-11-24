<nav>

    <span onClick="window.location.reload();">
        <p>{">"}</p>
    </span>
    
</nav>
    
    
<style> 
    nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    span {
        height: 50px;
        width: 50px;
        font-family: sans-serif;
        font-weight: 800;
        background-color: #333;
        border: none;
        color: #fff;
        text-align: center;
        justify-content: center;
        text-decoration: none;
        display: inline-flex;
        font-size: 15pt;
        cursor: pointer;
        border-radius: 50%;
    }

    p {
        display: flex;
        margin: 0;
        align-items: center;
    }

    @media screen and (min-width: 800px) {

        nav {
            margin-bottom: 20px;
        }
    }
</style>