let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
    let create = document.getElementById("create").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (!create || !age || !email || !pass) {
        e = "<b>Please fill Every Information !</b>";
        let err = document.querySelectorAll(".error").forEach(a => {
            a.innerHTML = "";
            a.innerHTML = e;
            setInterval(() => {
                a.innerHTML = "";
            }, 4000);
        });

    }
    else {
        let link = document.createElement("button");
        link.innerHTML = `<a class="alink" href="Bank.html">Go to Bank Page </a>`
        link.style.display="flex";
        link.style.justifyContent="center";
        let con = document.getElementsByClassName("container")[0];
        con.innerHTML = "";
        con.innerHTML = "<h1>Account created Successfully!</h1>";
        con.appendChild(link);
    }
});