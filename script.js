let code = ``;
let company_full_name = "Ételfutár®";
let local_lang = "HU";
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
let logopen = false;
document.getElementById("login").addEventListener("click",login)
function login(){
    code = ``
    logopen=!logopen;
    regopen = false;
    cartopen = false;
    if(logopen){
        if(local_lang == "HU") 
        {
            code = `
        <div class="panel" id="leftpanel">
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
        else if(local_lang == "EN") 
        {
            code = `
        <div class="panel" id="leftpanel">
            <img src="img/arrow.png" onclick="login()" height="50px">
            <h1>Login</h1>
            <br>
            <div>
                <label for="name">Username or Email address</label>
                <br>
                <input type="text" id="name">
            </div>
            <div>
                <label for="pass">Password</label>
                <br>
                <input type="text" id="pass">
            </div>
            <br>
            <div>
                <input type="button" value="Login">
            </div>
        </div>
        `
        }
        
    }
    document.getElementById("panel").innerHTML=code;
}

//Regisztrálás
regopen = false;
document.getElementById("register").addEventListener("click",register)
function register(){
    code = ``
    logopen=false;;
    regopen = !regopen;
    cartopen = false;
    if(regopen){
        if(local_lang == "HU") 
        {
            code = `
            <div class="panel" id="leftpanel">
                <img src="img/arrow.png" onclick="register()" height="50px">
                <h1>Regisztráció</h1>
                <br>
                <div>
                    <label for="name">Felhasználónév</label>
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
        else if(local_lang == "EN") 
        {
            code = `
            <div class="panel" id="leftpanel">
                <img src="img/arrow.png" onclick="register()" height="50px">
                <h1>Register</h1>
                <br>
                <div>
                    <label for="name">Username</label>
                    <br>
                    <input type="text" id="name">
                </div>
                <div>
                    <label for="name">Email address</label>
                    <br>
                    <input type="text" id="email">
                </div>
                <div>
                    <label for="pass">Password</label>
                    <br>
                    <input type="text" id="pass">
                </div>
                <div>
                    <label for="pass_again">Password again</label>
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
    }
    document.getElementById("panel").innerHTML=code;
}

//Kosár
cartopen = false;
document.getElementById("cart").addEventListener("click",cart)
function cart(){
    code = ``
    logopen=false;
    regopen = false;
    cartopen = !cartopen;
    if(cartopen){
        if(local_lang == "HU") 
        {
            code = `
            <div class="panel" id="rightpanel">
                <img src="img/arrow.png" onclick="cart()" height="50px">
                <h1>Kosár</h1>
                <br>
                <div id="order">

                </div>
                <br>
                <div>
                    <input type="button" value="Rendelés">
                </div>
            </div>
            `
        }
        else if(local_lang == "EN") 
        {
            code = `
            <div class="panel" id="rightpanel">
                <img src="img/arrow.png" onclick="cart()" height="50px">
                <h1>Cart</h1>
                <br>
                <div id="order">

                </div>
                <br>
                <div>
                    <input type="button" value="Order">
                </div>
            </div>
            `
        }
    }
    document.getElementById("panel").innerHTML=code;
}

//Select Language
document.getElementById("language_select").onchange = function() {
    const language = document.getElementById("language_select").value;
    if(language === "lang_hu") 
    {
        local_lang = "HU";
        //Set Texts Language
        SetTextLanguageToHU()
    }
    else if(language === "lang_en") 
    {
        local_lang = "EN";
        //Set Texts Language
        SetTextLanguageToEN()
    }
}

function SetTextLanguageToHU()
{
    document.getElementById("cart").innerHTML = "Kosár";
    document.getElementById("login").innerHTML = "Bejelentkezés";
    document.getElementById("register").innerHTML = "Regisztrálj";
    document.getElementById("main_page").innerHTML = "Főoldal";
    document.getElementById("search_input").placeholder = "Keresés...";
    document.getElementById("text1").innerHTML = "Üdvözöljük";
    document.getElementById("text2").innerHTML = `Fedezd fel a magyar konyha ízletes világát, ahol a hagyományos fogások és a modern gasztronómiai élmények találkoznak! A ${company_full_name} célja, hogy egyszerűbbé és élvezetesebbé tegye számodra a finom ételek rendelését, bármilyen alkalomra.`;
    document.getElementById("text3").innerHTML = "Akciók és kedvezmények";
    document.getElementById("text4").innerHTML = `Ne felejts el körülnézni aktuális akcióink között! Rendszeresen kínálunk kedvezményeket és különleges ajánlatokat, hogy még jobban kihasználhasd a ${company_full_name} előnyeit.`;
    document.getElementById("text5").innerHTML = "Rendelj most!";
    document.getElementById("text6").innerHTML = `Legyen szó egy családi vacsoráról, baráti összejövetelről vagy csak egy egyszerű ebédről, a ${company_full_name} a tökéletes választás számodra! Kényeztesd magad a legfinomabb magyar ételekkel, és tapasztald meg a gyors és megbízható kiszállítást.`;
}

function SetTextLanguageToEN()
{
    document.getElementById("cart").innerHTML = "Cart";
    document.getElementById("login").innerHTML = "Login";
    document.getElementById("register").innerHTML = "Register Now";
    document.getElementById("main_page").innerHTML = "Main Page";
    document.getElementById("search_input").placeholder = "Search...";
    document.getElementById("text1").innerHTML = "Welcome";
    document.getElementById("text2").innerHTML = `Discover the delicious world of Hungarian cuisine, where traditional dishes and modern gastronomic experiences meet! The goal of ${company_full_name} is to make it easier and more enjoyable for you to order delicious food for any occasion.`;
    document.getElementById("text3").innerHTML = "Promotions and discounts";
    document.getElementById("text4").innerHTML = `Don't forget to look around among our current promotions! We regularly offer discounts and special offers to help you get more out of ${company_full_name}.`;
    document.getElementById("text5").innerHTML = "Order now!";
    document.getElementById("text6").innerHTML = `Whether it's a family dinner, a gathering of friends or just a simple lunch, ${company_full_name} is the perfect choice for you! Pamper yourself with the most delicious Hungarian food and experience fast and reliable delivery.`;
}

document.getElementById("main_page_link").addEventListener("click",MainPageLink);
document.getElementById("main_page").addEventListener("click",MainPageLink);
function MainPageLink()
{
    if (local_lang == "HU") 
    {
        SetTextLanguageToHU();
    }
    else if (local_lang == "EN") 
    {
        SetTextLanguageToEN();
    }
}

SetTextLanguageToHU();