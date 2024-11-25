let reglanguage = {
    "HU":[
        "Bejelentkezés", //0.
        "Felhasználó név vagy E-mail cím", //1.
        "Jelszó", //2.
        "Bejelentkezés", //3.
        "Bejelentkezés", //4.
        "Registrálj" //5.
    ], 
    "EN":[
        "Bejelentkezés", //0.
        "Felhasználó név vagy E-mail cím", //1.
        "Jelszó", //2.
        "Bejelentkezés", //3.
        "Bejelentkezés", //4.
        "Registrálj" //5.
    ]
}

function register(){
    currlang = document.getElementById("lang")!=null? document.getElementById("lang").value : "HU"
    code = `
    <div class="offcanvas offcanvas-start panel" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div class="offcanvas-header">
            <h1 class="offcanvas-title" id="offcanvasWithBackdropLabel">${reglanguage[currlang][0]}</h1>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p>
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
                    <input type="button" value="${reglanguage[currlang][5]}">
                </div>
            </p>
        </div>
    </div>`
    document.getElementById("panel").innerHTML = code;
}
document.getElementById("register").addEventListener("click",register)
register()