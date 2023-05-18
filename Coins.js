AFRAME.registerComponent("fish", {
init: function () {
for (var i = 1; i <= 10; i++) {
const id = `coin$(1)`;
const posX = Math.random() * 100-50;
const posY= Math.random() * 5+5;
const posZ = Math.random() * 60 + -40;
const position = {x: posX, y: posY, z: posZ };
this.createCoins(id, position);
}
},
createCoins: function (id, position) {
    const treasureEntity = document.querySelector("#treasureCoins");
    var coinEl = document.createElement("a-entity");
    coinEl.setAttribute("id", id);
    coinEl.setAttribute("position", position);
    coinEl.setAttribute("material", "color", "#ff9100");
    coinEl.setAttribute("geometry",{ primitive: "circle", radius: 1 });
    coinEl.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000
});
const element = document.querySelector(elemntId); element.addEventListener("collide", e => { if (elemntId.includes("#coin")) {
element.setAttribute("visible", false);
console.log("ring collision");
}
if(elementId.includes("#fish")){
console.log("fish collision");
}
});
//set the static body attribute of physics system 
coinEl.setAttribute("static-body", {
    shape: "sphere",
    sphereRadius: 2
});
    
treasureEntity.appendChild(coinEl);
}
});