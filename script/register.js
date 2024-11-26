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
    document.getElementById("offcanvasWithBackdropLabel").innerHTML = reglanguage[currlang][0]
    document.getElementById("panelbody").innerHTML=`
                <div>
                    <label for="name">${reglanguage[currlang][1]}</label>
                    <br>
                    <input type="text" id="name">
                </div>
                <div>
                    <label for="email">${reglanguage[currlang][2]}</label>
                    <br>
                    <input type="text" id="email">
                </div>
                <div>
                    <label for="pass">${reglanguage[currlang][3]}</label>
                    <br>
                    <input type="text" id="pass">
                </div>
                <div>
                    <label for="pass_again">${reglanguage[currlang][4]}</label>
                    <br>
                    <input type="text" id="pass_again">
                </div>
                <br>
                <div>
                    <input type="button" class="button" value="${reglanguage[currlang][5]}">
                </div>
            </p>`
}
document.getElementById("register").addEventListener("click",register)