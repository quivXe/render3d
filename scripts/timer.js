
var time = window.setInterval(timer,6);
action = true
function timer(){

  debugerview();
  camera.FOV = parseInt(document.getElementById("suwak").value)
  if(action){
    render()
  }
  action=false
}