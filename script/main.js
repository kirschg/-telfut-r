let company_full_name = "Ételfutár®";
let currLang = "HU";
language={ 
    "HU":[
        "Bejelentkezés",//0.
        "Regisztrálj",//1.
        "Nyelv",//2.
        "Kosár",//3.
        "Keresés...",//4.
        "Üdvözöljük",//5.
        "Főoldal",//6.
        "2024 Ételfutár® - Minden jog fenntartva.",//7.
        "Üdvözöljük",//8.
        "Akciók és kedvezmények",//9.
        "Rendelj most!",//10.
        "Miért rendeljen tőlünk?",//11.
        `Fedezd fel a nemzetközi konyha ízletes világát, ahol a hagyományos fogások és a modern gasztronómiai élmények találkoznak! A ${company_full_name} célja, hogy egyszerűbbé és élvezetesebbé tegye számodra a finom ételek rendelését, bármilyen alkalomra.`,//12.
        `Ne felejts el körülnézni aktuális akcióink között! Rendszeresen kínálunk kedvezményeket és különleges ajánlatokat, hogy még jobban kihasználhasd a ${company_full_name} előnyeit.`,//13.
        `Legyen szó egy családi vacsoráról, baráti összejövetelről vagy csak egy egyszerű ebédről, a ${company_full_name} a tökéletes választás számodra! Kényeztesd magad a legfinomabb magyar ételekkel, és tapasztald meg a gyors és megbízható kiszállítást.`,//14.
        `Rendelj egyszerűen a legjobb éttermekből, és mi házhoz szállítjuk a kedvenc ételeidet gyorsan, kényelmesen, akár 30 percen belül!`,//15.
        `több mint 100 étterem közül válogathatsz! Legyen szó külföldi vagy hazai éttermekről`,//16.
        `Kedvezmények a hűséges vásárlóknak`,//17.
        `Kényelmes és biztonságos online rendelés és fizetés.`,//18.
        `Az ételnek nincs lába! Rendeld meg a ${company_full_name}-tól`//19.
    ], 
    "EN":[
        "Login",//0.
        "Register",//1.
        "Langauge",//2.
        "Cart",//3.
        "Search...",//4.
        "Welcome",//5.
        "Main Page",//6.
        "2024 Ételfutár® - All rights reserved.",//7.
        "Welcome",//8.
        "Promotions and discounts",//9.
        "Order now!",//10.
        "Why order from us?",//11.
        `Discover the delicious world of international cuisine, where traditional dishes and modern gastronomic experiences meet! ${company_full_name} aims to make it easier and more enjoyable for you to order delicious food for any occasion.`,//12.
        `Don't forget to look around among our current promotions! We regularly offer discounts and special offers to help you get more out of ${company_full_name}.`,//13.
        `Whether it's a family dinner, a gathering of friends or just a simple lunch, ${company_full_name} is the perfect choice for you! Pamper yourself with the most delicious Hungarian food and experience fast and reliable delivery.`,//14.
        `Simply order from the best restaurants, and we will deliver your favorite dishes to your home quickly and comfortably, within 30 minutes!`,//15.
        `you can choose from more than 100 restaurants! Be it foreign or domestic restaurants`,//16.
        `Discounts for loyal customers`,//17.
        `Convenient and secure online ordering and payment.`,//18.
        `Food has no legs! Order from ${company_full_name}`//19.
    ]
};

//Select Language
function languageselect() 
{
    currLang = document.getElementById("lang")!=null&&
    document.getElementById("lang").value!="Nyelv"?
    document.getElementById("lang").value : "HU"
    MainPageLink();
}

function cart(){
    let cartlanguage = {
        "HU":[
            "Rendelés", //0.
            "Rendel", //1.
        ], 
        "EN":[
            "Orders", //0.
            "Order", //1.
        ]
    }
    document.getElementById("offcanvasRightLabel").innerHTML = cartlanguage[currLang][0]
    document.getElementById("cartbody").innerHTML=
    `
    <br>
    <div id="order">
    </div>
    <br>
    <div>
        <input type="button" class="button" value="${cartlanguage[currLang][1]}">
    </div>
    `
}

function register(){
    let reglanguage = {
        "HU":[
            "Regisztrálás", //0.
            "E-mail cím", //1.
            "Felhasználó név", //2.
            "Jelszó", //3.
            "Jelszó megerősítése", //4.
            "Registrálj" //5.
        ], 
        "EN":[
            "Registration", //0.
            "E-mail address", //1.
            "Username", //2.
            "Password", //3.
            "Password conformation", //4.
            "Register" //5.
        ]
    }
    document.getElementById("offcanvasWithBackdropLabel").innerHTML = reglanguage[currLang][0]
    document.getElementById("panelbody").innerHTML=`
                <div>
                    <label for="name">${reglanguage[currLang][1]}</label>
                    <br>
                    <input type="text" id="name">
                </div>
                <div>
                    <label for="email">${reglanguage[currLang][2]}</label>
                    <br>
                    <input type="text" id="email">
                </div>
                <div>
                    <label for="pass">${reglanguage[currLang][3]}</label>
                    <br>
                    <input type="text" id="pass">
                </div>
                <div>
                    <label for="pass_again">${reglanguage[currLang][4]}</label>
                    <br>
                    <input type="text" id="pass_again">
                </div>
                <br>
                <div>
                    <input type="button" class="button" value="${reglanguage[currLang][5]}">
                </div>
            </p>`
}

function login(){
    let loginlanguage = {
        "HU":[
            "Bejelentkezés", //0.
            "Felhasználó név vagy E-mail cím", //1.
            "Jelszó", //2.
            "Bejelentkezés" //3.
        ], 
        "EN":[
            "Login", //0.
            "Username or E-mail", //1.
            "Password", //2.
            "Login" //3.
        ]
    }
    document.getElementById("offcanvasWithBackdropLabel").innerHTML = loginlanguage[currLang][0]
    document.getElementById("panelbody").innerHTML=`
            <div>
                <label for="name">${loginlanguage[currLang][1]}</label>
                <br>
                <input type="text" id="name">
            </div>
            <div>
                <label for="pass">${loginlanguage[currLang][2]}</label>
                <br>
                <input type="text" id="pass">
            </div>
            <br>
            <div>
                <input type="button" class="button" value="${loginlanguage[currLang][3]}">
            </div>`
}

function MainPageLink()
{
    document.getElementById("nav_elements").innerHTML = `
            <ul>
                <li id="left"><input id="search_input" type="text" placeholder="${language[currLang][4]}"></li>
                <li id="cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                </svg>
                </li>
                <li class="language_select"><select id="lang">
                    <option selected disabled hidden>${language[currLang][2]}</option>
                    <option value="HU">HU</option>
                    <option value="EN">EN</option>
                </select></li>
                <li id="register" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">${language[currLang][1]}</li>
                <li id="login" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">${language[currLang][0]}</li>
                <li id="main_page" class="nav_selected">${language[currLang][6]}</li>
            </ul>
        `;
    document.getElementById("body_elements").innerHTML = `
    <h2>${language[currLang][8]}</h2>
    <p>${language[currLang][12]}</p>
    <h3>${language[currLang][9]}</h3>
    <p>${language[currLang][13]}</p>
    <h3>${language[currLang][10]}</h3>
    <p>${language[currLang][14]}</p>
    <h3>${language[currLang][11]}</h3>
    <p>${language[currLang][15]}</p>
    <ul>
        <li>${language[currLang][16]}</li>
        <li>${language[currLang][17]}</li>
        <li>${language[currLang][18]}</li>
        <li>${language[currLang][19]}</li>
    </ul>
    `;
    document.getElementById("footer_elements").innerHTML = `
        <p>${language[currLang][7]}</p>
    `;

    document.getElementById("panel").innerHTML = `
    <div class="offcanvas offcanvas-start panel" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div class="offcanvas-header">
            <h1 class="offcanvas-title" id="offcanvasWithBackdropLabel" style="text-align:center;"></h1>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p id="panelbody">
                
            </p>
        </div>
    </div>`

    document.getElementById("cartpanel").innerHTML = `
    <div class="offcanvas offcanvas-end panel" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h1 id="offcanvasRightLabel"></h1>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" id="cartbody">
        </div>
    </div>`
    document.getElementById("main_page").addEventListener("click",MainPageLink)
    document.getElementById("lang").addEventListener("change",languageselect)

    document.getElementById("cart").addEventListener("click",cart)
    document.getElementById("register").addEventListener("click",register)
    document.getElementById("login").addEventListener("click",login)
}

MainPageLink();
languageselect();