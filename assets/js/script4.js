var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var ans5 = document.getElementById("ans5");
var ans6 = document.getElementById("ans6");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var good = document.getElementById("good");
var bad = document.getElementById("bad");
var good2 = document.getElementById("good2");
var bad2 = document.getElementById("bad2");

var score = 0;

ans1.addEventListener("click", function (e) {
    e.preventDefault();
    ans1.style.background = "red";
    bad.style.display = "block";
    setTimeout(function () {
        p1.style.display = "none";
        p2.style.display = "block";
    }, 1000);
})

ans2.addEventListener("click", function (e) {
    e.preventDefault();
    ans2.style.background = "green";
    good.style.display = "block";
    score++;
    setTimeout(function () {
        p1.style.display = "none";
        p2.style.display = "block";
    }, 1000);
})

ans3.addEventListener("click", function (e) {
    e.preventDefault();
    ans3.style.background = "red";
    bad.style.display = "block";
    setTimeout(function () {
        p1.style.display = "none";
        p2.style.display = "block";
    }, 1000);
})

ans4.addEventListener("click", function (e) {
    e.preventDefault();
    ans4.style.background = "green";
    good2.style.display = "block";
    score++;
    setTimeout(function () {
        document.write("<h1>Tu puntaje es:"+score+"/2</h1>");
    }, 1000);
})

ans5.addEventListener("click", function (e) {
    e.preventDefault();
    ans5.style.background = "red";
    bad2.style.display = "block";
    setTimeout(function () {
        document.write("<h1>Tu puntaje es: "+score+"/2</h1>");
    }, 1000);
})

ans6.addEventListener("click", function (e) {
    e.preventDefault();
    ans6.style.background = "red";
    bad2.style.display = "block";
    setTimeout(function () {
        document.write("<h1>Tu puntaje es:"+score+"/2</h1>");
    }, 1000);
})
