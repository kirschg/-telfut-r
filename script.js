let code_login = ``;
let code_register = ``;
let code_cart = ``;
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

//Bejelentkezés
let logopen_login = false;
document.getElementById("login").addEventListener("click",login)
function login(){
    code_login = ``
    logopen_login=!logopen_login;
    if(logopen_login){
        code_login = `
        <div class="side-panel" id="leftpanel">
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
    document.getElementById("panel").innerHTML=code_login;
}

//Regisztrálás
logopen_register = false;
document.getElementById("register").addEventListener("click",register)
function register(){
    code_register = ``
    logopen_register=!logopen_register;
    if(logopen_register){
        code_register = `
        <div class="side-panel" id="leftpanel">
            <img src="img/arrow.png" onclick="register()" height="50px">
            <h1>Regisztráció</h1>
            <br>
            <div>
                <label for="name">Felhasználó név</label>
                <br>
                <input type="text" id="name">
            </div>
            <div>
                <label for="name">Email cím</label>
                <br>
                <input type="text" id="email">
            </div>
            <div>
                <label for="pass">Jelszó</label>
                <br>
                <input type="text" id="pass">
            </div>
            <div>
                <label for="pass_again">Jelszó újra</label>
                <br>
                <input type="text" id="pass_again">
            </div>
            <br>
            <div>
                <input type="button" value="Regisztrálás">
            </div>
        </div>
        `
    }
    document.getElementById("panel").innerHTML=code_register;
}

//Kosár
logopen_cart = false;
document.getElementById("cart").addEventListener("click",cart)
function cart(){
    code_cart = ``
    logopen_cart=!logopen_cart;
    if(logopen_cart){
        code_cart = `
        <div class="side-panel" id="rightpanel">
            <img src="img/arrow.png" onclick="cart()" height="50px">
            <h1>Kosár</h1>
            <br>
            <div>
                <label for="name">Felhasználó név</label>
                <br>
                <input type="text" id="name">
            </div>
            <div>
                <label for="name">Email cím</label>
                <br>
                <input type="text" id="email">
            </div>
            <div>
                <label for="pass">Jelszó</label>
                <br>
                <input type="text" id="pass">
            </div>
            <div>
                <label for="pass_again">Jelszó újra</label>
                <br>
                <input type="text" id="pass_again">
            </div>
            <br>
            <div>
                <input type="button" value="Rendelés">
            </div>
        </div>
        `
    }
    document.getElementById("panel").innerHTML=code_cart;
}