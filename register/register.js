let logopen = false;
document.getElementsByClassName("loginFasz").addEventListener("click",login)
function login(){
    code = ``
    logopen=!logopen;
    if(logopen){
        code = `
        <div class="side-panel">
            <img src="../img/arrow.png" onclick="login()" height="50px">
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

    document.getElementById("here").innerHTML=code;
}