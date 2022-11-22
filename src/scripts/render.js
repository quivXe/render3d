

function render() {
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  c.height = screenHeight;
  c.width = screenWidth;
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, c.width, c.height);
  for (let objectIndex = 0; objectIndex < mapObjects.length; objectIndex++) {
    if (mapObjects[objectIndex] == camera) {
      continue;
    }
    for (let sideIndex = 0; sideIndex < mapObjects[objectIndex].sides.length; sideIndex++) {
      ctx.beginPath();
      for (let vertexIndex = 0; vertexIndex < mapObjects[objectIndex].sides[sideIndex].length; vertexIndex++) {
        var currVertex = mapObjects[objectIndex].vertexs3D[mapObjects[objectIndex].sides[sideIndex][vertexIndex]]

        //var vertexD = Math.sqrt(((camera.positionX-currVertex[0])**2) + ((camera.positionY-currVertex[1])**2))

        //var vertexP = Math.sqrt(((camera.positionZ-kwadrat.positionZ)**2) + ((camera.positionY-kwadrat.positionY)**2))

        // var projectedX = ((camera.FOV * (currVertex[0] - camera.positionX)) / (currVertex[2] - camera.positionZ))

        var projectedY = ((camera.FOV * (currVertex[1] - camera.positionY)) / (currVertex[2] - camera.positionZ))
        let horizontalScreenPoints = camera.getScreenHorizontalPoints()
        // console.log(horizontalScreenPoints[1][0])

        // a, b = camera x, z
        // e, f = object x, z
        // n, p = Lscreen x, z
        // m, t = Rscreen x, z
        var projectedX = ( (camera.positionX*(currVertex[2]-camera.positionZ)/(currVertex[0]-camera.positionX)) - camera.positionZ + (horizontalScreenPoints[0][0]*(horizontalScreenPoints[0][1]-horizontalScreenPoints[1][1])/(horizontalScreenPoints[1][0]-horizontalScreenPoints[0][0])) + horizontalScreenPoints[0][1] ) / ( ((currVertex[2]-camera.positionZ)/(currVertex[0]-camera.positionX)) + ((horizontalScreenPoints[0][1]-horizontalScreenPoints[1][1])/(horizontalScreenPoints[1][0]-horizontalScreenPoints[0][0])) )

        // var projectedY = ( (camera.positionX*(currVertex[2]-camera.positionZ)/(currVertex[0]-camera.positionX)) - camera.positionZ + (middleScreenPoint[0][0]*(middleScreenPoint[0][1]-middleScreenPoint[1][1])/(middleScreenPoint[1][0]-middleScreenPoint[0][0])) + middleScreenPoint[0][1] ) / ( ((currVertex[2]-camera.positionZ)/(currVertex[0]-camera.positionX)) + ((middleScreenPoint[0][1]-middleScreenPoint[1][1])/(middleScreenPoint[1][0]-middleScreenPoint[0][0])) )

        // console.log(currVertex[2])
        // console.log(camera.positionZ)
        if (currVertex[2] > camera.positionZ) {
          if (vertexIndex == 0) {
            ctx.moveTo((c.width / 2) + projectedX, (c.height / 2) + (-1 * projectedY))
          }
          else {
            ctx.lineTo((c.width / 2) + projectedX, (c.height / 2) + (-1 * projectedY))
          }
  
          // console.log("X: " + 250 + projectedX + " Y: " + 250 + projectedY)
  
        }

        }
      ctx.strokeStyle = "green";
      ctx.stroke();
    }

  }
}
document.getElementById("suwak").addEventListener("input", function() {
  camera.FOV = parseInt(document.getElementById("suwak").value);
  console.log(camera.FOV)
  render();
})

document.getElementById("suwak").addEventListener("change", function() {
  camera.FOV = parseInt(document.getElementById("suwak").value);
  console.log(camera.FOV)
  render();
})

