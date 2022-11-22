function cameraMoving(a){
    if(a=="forward")
    {
      camera.positionZ+=1;
      
    }
    if(a=="back")
    {
      camera.positionZ-=1;
    }
    console.log(camera.positionZ)
  }
  
function cameraRotate(){
    if(camera.rotationX >= Math.PI * 2){
      camera.rotationX -= Math.PI * 2
    }
    if(camera.rotationX < 0){
      camera.rotationX += Math.PI * 2
    }
  }