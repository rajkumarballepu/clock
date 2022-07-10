let hours = document.querySelector("#sc");
let minute = document.querySelector("#mn");
let secons = document.querySelector("#hr");

setInterval(rotate, 1000);

function rotate()
{
    let d = new Date();
    let h = d.getHours()*30+(d.getMinutes()/12);
    let m = d.getMinutes()*6;
    let s = d.getSeconds()*6;
    secons.style.transform = 'rotateZ('+s+'deg)';
    minute.style.transform = 'rotateZ('+m+'deg)';
    hours.style.transform = 'rotateZ('+h+'deg)';

    let hh = d.getHours();
    let ap = hh>12 ? "PM" : "AM";
    hh = hh>12 ? hh-12 : hh;
    hh = hh<10 ? "0"+hh : hh;
    
    let mm = d.getMinutes();
    mm = mm<10 ? "0"+mm : mm;

    let ss1 = d.getSeconds();
    ss1 = ss1<10 ? "0"+ss1 : ss1;
    
    document.querySelector(".hours").innerHTML = hh;
    document.querySelector(".minute").innerHTML = mm;
    document.querySelector(".sec").innerHTML = ss1;
    document.querySelector(".ampm").innerHTML = ap;
    document.querySelector(".col").style.display = none;
    

}
var i = document.querySelector(".theme").innerHTML;

function theme() {

    if (i == "Dark Theme") {
        i = "Light Theme";
        document.querySelector(".theme").innerHTML = i;
        document.querySelector('.btn').style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'black';
        document.body.style.borderColor = 'white';
        document.querySelector(".theme").style.color = 'white';
        document.querySelector(".round").style.borderColor = 'grey';
        document.querySelector(".round1").style.borderColor = 'grey';
        document.querySelector(".round2").style.borderColor = 'grey';
        document.querySelector(".circle").style.color = 'white';
        document.querySelector(".ampm").style.color = 'white';
        document.getElementsByClassName("col")[0].style.color = 'white'
        document.getElementsByClassName("col")[1].style.color = 'white'
    }
    else {
        i = "Dark Theme";
        document.querySelector(".theme").innerHTML = i;
        document.querySelector('.btn').style.backgroundColor = 'white';
        document.body.style.borderColor = 'black';
        document.body.style.backgroundColor = 'white';
        document.querySelector(".theme").style.color = 'black';
        document.querySelector(".round").style.borderColor = 'black';
        document.querySelector(".round1").style.borderColor = 'black';
        document.querySelector(".round2").style.borderColor = 'black';
        document.querySelector(".circle").style.color = 'black';
        document.querySelector(".ampm").style.color = 'black';
        document.getElementsByClassName("col")[0].style.color = 'black';
        document.getElementsByClassName("col")[1].style.color = 'black';
    }
}

function release(){
    document.querySelector(".btn").style.transform = 'scale(1)';
}
