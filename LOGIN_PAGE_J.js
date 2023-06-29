var cpt = "";

function fun1() {
    cpt = "";
    var str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
    for (var i = 0; i < 6; i++) {
        cpt += str[Math.floor(Math.random() * (str.length))];
    }
    document.getElementById('captcha-generate').value = cpt;
    cpt = "";
}

function fun2() {
    var inp = document.getElementById('captcha-user').value;
    var cptc = document.getElementById('captcha-generate').value;
    if (!(cptc.localeCompare(inp))) {
        console.log("1");
        document.getElementById("val").className="fa-regular fa-circle-check";
        document.getElementById("val").style.color="green";
    }
    else {
        console.log("0");
        document.getElementById("val").className ="fa-regular fa-circle-xmark";
        document.getElementById("val").style.color ="red";
    }
}
