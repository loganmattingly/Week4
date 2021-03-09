var wrapEle = document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot",coolness: true, vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot",coolness: true, vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot",coolness: true, vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

for (var i = 0; i < chrs.length; i++) {

  var imgEle = document.createElement("img");
  var chrsEle = document.createElement("div");
  var nameEle = document.createElement("h5");
  var classEle = document.createElement("h5");
  var vehicleEle = document.createElement("h5");
  
  nameEle.innerHTML = "Name: " + chrs[i].name;
  classEle.innerHTML = "Class: " + chrs[i].class.toUpperCase();
  vehicleEle.innerHTML = "Vehicle: " + chrs[i].vehicle;

  chrsEle.classList.add("character");
  imgEle.classList.add("img");
  
  if (chrs[i].vehicle == "truck") {
    vehicleEle.style.color = "blue";
  } else if (chrs[i].vehicle == "tank") {
    vehicleEle.style.color = "green";
  } else if (chrs[i].vehicle == "car") {
    vehicleEle.style.color = "gold";
  } else if (chrs[i].vehicle == "plane") {
    vehicleEle.style.color = "white";
  } 
  if (chrs[i].afl == "autobot") {
    imgEle.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png");
    chrsEle.classList.add("autobot");
  } else if (chrs[i].afl == "decepticon") {
    imgEle.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png");
    chrsEle.classList.add("decepticon");
  }
  
  chrsEle.appendChild(imgEle);
  chrsEle.appendChild(nameEle);
  chrsEle.appendChild(classEle);
  chrsEle.appendChild(vehicleEle);
  
  wrapEle.appendChild(chrsEle);
}