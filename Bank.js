let addmoney = document.getElementById("am");
let withdraw = document.getElementById("wd");
let showbalance = document.getElementById("sb");
let w = 0;
let wd1;
let wd2;
let wd3;

function AddMoney() {
    let inp1 = document.createElement("div");
    inp1.innerHTML = `<input id="money1" type="number" placeholder="Enter a Amount">`;
    inp1.innerHTML += `<button id="btn1">Confirm</button>`;
    inp1.style.padding = "15px";
    let ad = document.getElementsByClassName("addmoney")[0];
    ad.innerHTML = "";
    ad.appendChild(inp1);
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {
        let wd1 = Number(document.getElementById("money1").value);
        w += wd1;
        ad.innerHTML = "Procesing....";
        setTimeout(() => {
            ad.innerHTML = `💰 Amount Added Sucessfully <br> Balance ${w}`;
        }, 1000);
        setTimeout(() => {
            ad.innerHTML = ""
            ad.appendChild(addmoney);    
        }, 5000);
    });
}
function Withdraw() {
    let inp2 = document.createElement("div");
    inp2.innerHTML = `<input id="money2" type="number" placeholder="Enter a Amount">`;
    inp2.innerHTML += `<button id="withd">Withdraw</button>`;
    inp2.style.padding = "15px";
    let W = document.getElementsByClassName("withdraw")[0];
    W.innerHTML = "";
    W.appendChild(inp2);
    let btn2 = document.getElementById("withd");
    btn2.addEventListener("click", () => {
        let wd2 = Number(document.getElementById("money2").value);
        if (wd2 <= w) {
            let n = document.createElement("h4");
            n.innerHTML = `Sucessful transaction of ${wd2}$`;
            let c = document.getElementsByClassName("withdraw")[0];
            c.innerHTML = "";
            c.appendChild(n);
            w = w - wd2;
            setTimeout(() => {
                c.innerHTML = "";
                c.appendChild(withdraw);
            }, 4000);
        }
        else {
            let n = document.createElement("h4");
            n.innerHTML = `Insufficient Balance : ${wd2}$`;
            let c = document.getElementsByClassName("withdraw")[0];
            c.innerHTML = "";
            c.appendChild(n);
            setTimeout(() => {
                c.innerHTML = "";
                c.appendChild(withdraw);
            }, 4000);
        }
    })

}
function Showbalance() {
    let inp3 = document.createElement("div");
    inp3.innerHTML = `Your Balance is ${w}`;
    let sb = document.getElementsByClassName("showbalance")[0];
    sb.innerHTML = "";
    sb.appendChild(inp3);
    setTimeout(() => {
        sb.innerHTML = "";
        sb.appendChild(showbalance)
    }, 4000);
}

addmoney.addEventListener("click", () => {
    AddMoney();
})
withdraw.addEventListener("click", () => {
    Withdraw();
})
showbalance.addEventListener("click", () => {
    Showbalance();
})