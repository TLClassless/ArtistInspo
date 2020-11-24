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
        padding: 5px 13px;
        margin: 10px 0 0 0;
        font-family: 'PT Serif', serif;
        font-weight: 800;
        background-color: #333;
        border: none;
        color: #fff;
        text-align: center;
        text-decoration: none;
        display: inline-flex;
        font-size: 15pt;
        cursor: pointer;
        border-radius: 50%;
    }

    p {
        margin: 0;
    }

    @media screen and (min-width: 800px) {

        nav {
            margin-bottom: 20px;
        }
    }
</style>