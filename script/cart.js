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

function cart(){
    currlang = document.getElementById("lang")!=null? document.getElementById("lang").value : "HU"
    document.getElementById("offcanvasRightLabel").innerHTML = cartlanguage[currlang][0]
    document.getElementById("cartbody").innerHTML=
    `
                <br>
                <div id="order">

                </div>
                <br>
                <div>
                    <input type="button" class="button" value="${cartlanguage[currlang][1]}">
                </div>
    `
}
document.getElementById("cart").addEventListener("click",cart)