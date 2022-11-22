

this.addEventListener('keydown', event => {
  //turnRight
  if (event.key == "ArrowRight") {
    cameraRotate("right");
    camera.rotationX -= 0.0174533;
  }
  //turnLeft
  if (event.key == "ArrowLeft") {
    cameraRotate("left");
    camera.rotationX += 0.0174533;
  }
  //forward
  if (event.key == 'w') {

    cameraMoving("forward");

  }
  if (event.key == "s") {

    cameraMoving("back");

  }
  action = true
})

class Person {
  constructor (name) {
    this.name = name

  }
  printName() {
    console.log(this.name)
  }
}

adam = new Person("adam")
adam.printName()
adam.name = "lolek"
adam.printName() // lolek