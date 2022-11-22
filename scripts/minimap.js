document.getElementById("mapPlayer").style.transform = 'rotateZ(' + camera.rotationX + 'deg)'
document.getElementById("mapPlayer").style.marginBottom = camera.positionY +'px'
document.getElementById("mapPlayer").style.marginLeft = camera.positionX +'px'
console.log(document.getElementById("mapPlayer").style.transform)
