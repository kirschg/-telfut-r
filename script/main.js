let code = ``;
let company_full_name = "Ételfutár®";
let currentLanguage = "HU";
language={ 
    "HU":[
        "Bejelentkezés",//0.
        "Regisztrálj",//1.
        "nyelv",//2.
        "kosár",//3.
        "keresés...",//4.
        "Üdvözöljük",//5.
        "2024 Ételfutár® - Minden jog fenntartva.",//6.
        "Főoldal",//7.
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
        "langauge",//2.
        "cart",//3.
        "search...",//4.
        "Welcome",//5.
        "2024 Ételfutár® - All rights reserved.",//6.
        "Main Page",//7.
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

//Kosár
cartopen = false;

function cart(){
    code = ``
    logopen=false;
    regopen = false;
    cartopen = !cartopen;
    if(cartopen){

        code =`
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>.....</p>
            </div>
        </div>`
        
            /*code = `
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
            `*/
    }
    document.getElementById("panel").innerHTML = code;
}

//Select Language
function languageselect() 
{
    MainPageLink();
}



function MainPageLink()
{
    currentLanguage = document.getElementById("lang")!=null? document.getElementById("lang").value : "HU"
    document.getElementById("nav_elements").innerHTML = `
            <ul>
                <li id="left"><input id="search_input" type="text" placeholder="${language[currentLanguage][4]}"></li>
                <li id="cart" class="special">${language[currentLanguage][3]}</li>
                <li><select id="lang" class="language_select">
                    <option value="HU">HU</option>
                    <option value="EN">EN</option>
                </select></li>
                <li id="register" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">${language[currentLanguage][1]}</li>
                <li id="login" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">${language[currentLanguage][0]}</li>
                <li id="main_page" class="nav_selected">${language[currentLanguage][7]}</li>
            </ul>
        `;
    document.getElementById("body_elements").innerHTML = `
    <h2>${language[currentLanguage][8]}</h2>
    <p>${language[currentLanguage][12]}</p>
    <h3>${language[currentLanguage][9]}</h3>
    <p>${language[currentLanguage][13]}</p>
    <h3>${language[currentLanguage][10]}</h3>
    <p>${language[currentLanguage][14]}</p>
    <h3>${language[currentLanguage][11]}</h3>
    <p>${language[currentLanguage][15]}</p>
    <ul>
        <!-- nem tudom mit írjak még ide, majd később rájövök -->
        <li>${language[currentLanguage][16]}</li>
        <li>${language[currentLanguage][17]}</li>
        <li>${language[currentLanguage][18]}</li>
        <li>${language[currentLanguage][19]}</li>
    </ul>
    `;
    document.getElementById("footer_elements").innerHTML = `
        <p>${language[currentLanguage][6]}</p>
    `;

    document.getElementById("cart").addEventListener("click",cart)
    document.getElementById("main_page").addEventListener("click",MainPageLink)
    document.getElementById("lang").addEventListener("change",languageselect)
    document.getElementById("register").addEventListener("click",register)
    document.getElementById("login").addEventListener("click",login)
}

MainPageLink();