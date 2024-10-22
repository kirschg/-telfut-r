let code = ``;
language={ 
    "HU":["Bejelentkezés","Regisztrálj","nyelv","kosár","keresés...","Üdvözöljük","2024 Ételfutár® - Minden jog fenntartva."], 
    "EN":["Login","Register","langauge","cart","search...","Welcome","2024 Ételfutár® - All rights reserved."]
};
`<body>
    <main>

        <header>
            <a href="./index.html">Title</a>
        </header>
        <nav>
            <ul>
                <li id="left"><input type="text" placeholder="${language["EN"][4]}"></li>
                <li><a href="./cart/cart.html">${language["EN"][3]}</a></li>
                <li><a href="">${language["EN"][2]}</a></li>
                <li><a href="./register/register.html" id="register">${language["EN"][1]}</a></li>
                <li><a href="">${language["EN"][0]}</a></li>
            </ul>
        </nav>
        <article>
            
        </article>
        <aside>
    
        </aside>
        <footer>
            <p>${language["EN"][6]}</p>
        </footer>
    </main>
    <script src="script.js"></script>
</body>`

let logopen = false;
document.getElementById("login").addEventListener("click",login)
function login(){
    code = ``
    logopen=!logopen;
    if(logopen){
        code = `
        <div class="side-panel">
            <img src="img/arrow.png" onclick="login()" height="50px">
            <h1>Bejelentkezés</h1>
            <br>
            <div>
                <label for="name">Felhasználó név vagy Email Cím</label>
                <br>
                <input type="text" id="name">
            </div>
            <div>
                <label for="pass">Jelszó</label>
                <br>
                <input type="text" id="pass">
            </div>
            <br>
            <div>
                <input type="button" value="Bejelentkezés">
            </div>
        </div>
        `
    }
    else
    {

    }
    
    document.getElementById("here").innerHTML=code;
}