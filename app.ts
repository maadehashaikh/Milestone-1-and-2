const infotoggle = document.getElementById("infotoggle");
var infoContent = document.getElementById("infoContent");
const edutoggle = document.getElementById("edutoggle");
var eduContent = document.getElementById("eduContent");
const skilltoggle = document.getElementById("skilltoggle");
var skillcontent = document.getElementById("skillcontent");
const exptoggle = document.getElementById("exptoggle");
var expcontent = document.getElementById("expcontent");


infotoggle?.addEventListener("click",()=>{
  if(infotoggle.innerText === "HIDE"){
    infoContent.style.display ="none";
  infotoggle.innerText="SHOW";
  }
  else{
    infotoggle.innerText="HIDE";
    infoContent.style.display ="block";
  }
})

edutoggle?.addEventListener("click",()=>{
  if(edutoggle.innerText === "HIDE"){
  eduContent.style.display ="none";
  edutoggle.innerText="SHOW";
  }
  else{
    edutoggle.innerText="HIDE";
    eduContent.style.display ="block";
  }
})

skilltoggle?.addEventListener("click",()=>{
  if(skilltoggle.innerText === "HIDE"){
  skillcontent.style.display ="none";
  skilltoggle.innerText="SHOW";
  }
  else{
    skilltoggle.innerText="HIDE";
    skillcontent.style.display ="block";
  }
})

exptoggle?.addEventListener("click",()=>{
  if(exptoggle.innerText === "HIDE"){
  expcontent.style.display ="none";
  exptoggle.innerText="SHOW";
  }
  else{
    exptoggle.innerText="HIDE";
    expcontent.style.display ="block";
  }
})