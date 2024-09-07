var infotoggle = document.getElementById("infotoggle");
var infoContent = document.getElementById("infoContent");
var edutoggle = document.getElementById("edutoggle");
var eduContent = document.getElementById("eduContent");
var skilltoggle = document.getElementById("skilltoggle");
var skillcontent = document.getElementById("skillcontent");
var exptoggle = document.getElementById("exptoggle");
var expcontent = document.getElementById("expcontent");
infotoggle === null || infotoggle === void 0 ? void 0 : infotoggle.addEventListener("click", function () {
    if (infotoggle.innerText === "HIDE") {
        infoContent.style.display = "none";
        infotoggle.innerText = "SHOW";
    }
    else {
        infotoggle.innerText = "HIDE";
        infoContent.style.display = "block";
    }
});
edutoggle === null || edutoggle === void 0 ? void 0 : edutoggle.addEventListener("click", function () {
    if (edutoggle.innerText === "HIDE") {
        eduContent.style.display = "none";
        edutoggle.innerText = "SHOW";
    }
    else {
        edutoggle.innerText = "HIDE";
        eduContent.style.display = "block";
    }
});
skilltoggle === null || skilltoggle === void 0 ? void 0 : skilltoggle.addEventListener("click", function () {
    if (skilltoggle.innerText === "HIDE") {
        skillcontent.style.display = "none";
        skilltoggle.innerText = "SHOW";
    }
    else {
        skilltoggle.innerText = "HIDE";
        skillcontent.style.display = "block";
    }
});
exptoggle === null || exptoggle === void 0 ? void 0 : exptoggle.addEventListener("click", function () {
    if (exptoggle.innerText === "HIDE") {
        expcontent.style.display = "none";
        exptoggle.innerText = "SHOW";
    }
    else {
        exptoggle.innerText = "HIDE";
        expcontent.style.display = "block";
    }
});
