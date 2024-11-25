let loginlanguage = {
    "HU":[
        "Bejelentkezés", //0.
        "Felhasználó név vagy E-mail cím", //1.
        "Jelszó", //2.
        "Bejelentkezés" //3.
    ], 
    "EN":[
        "Bejelentkezés", //0.
        "Felhasználó név vagy E-mail cím", //1.
        "Jelszó", //2.
        "Bejelentkezés" //3.
    ]
}

function login(){
    currlang = document.getElementById("lang")!=null? document.getElementById("lang").value : "HU"
    code = `
    <div class="offcanvas offcanvas-start panel" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div class="offcanvas-header">
            <h1 class="offcanvas-title" id="offcanvasWithBackdropLabel">${loginlanguage[currlang][0]}</h1>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p>
            <div>
                <label for="name">${loginlanguage[currlang][1]}</label>
                <br>
                <input type="text" id="name">
            </div>
            <div>
                <label for="pass">${loginlanguage[currlang][2]}</label>
                <br>
                <input type="text" id="pass">
            </div>
            <br>
            <div>
                <input type="button" value="${loginlanguage[currlang][3]}">
            </div>
            </p>
        </div>
    </div>`

    document.getElementById("panel").innerHTML = code;
}
document.getElementById("login").addEventListener("click",login)