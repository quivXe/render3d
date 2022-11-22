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
    if(camera.rotationX >= 360){
      camera.rotationX -= 360
    }
    if(camera.rotationX < 0){
      camera.rotationX += 360
    }
  }