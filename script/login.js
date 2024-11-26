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
document.getElementById("login").addEventListener("click",login)