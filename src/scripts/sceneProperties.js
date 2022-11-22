
//MAP BORDERS (JUST MENTAL INFO, OBJECTS CAN OVERSTEP WITHOUT MECHANINCS ISSUES)
var mapx = 1000;
var mapy = 1000;
var speed = 1;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var middleOfScreenWidth = window.innerWidth/2;
var middleOfScreenHeight = window.innerHeight/2;


//CAMERA PROPERTIES
const camera = {
    positionX: 350,
    positionY: 10,
    positionZ: 350,
    rotationX: 1,
    rotationY: 0,
    FOV: 1000,
    getScreenHorizontalPoints: function() {
      return [[
          (this.positionX + this.FOV) + ((screenWidth/2) * Math.sin(this.rotationX + Math.PI)),
          (this.positionY + this.FOV) + ((screenWidth/2) * Math.cos(this.rotationX + Math.PI))
        ],
        [
          (this.positionX + this.FOV) + ((screenWidth/2) * Math.sin(this.rotationX)),
          (this.positionY + this.FOV) + ((screenWidth/2) * Math.cos(this.rotationX))
        ]]
    },
    getScreenVerticalPoints: function() {
      return [[
          (this.positionX + this.FOV) + ((screenHeight/2) * Math.sin(this.rotationY + Math.PI)),
          (this.positionY + this.FOV) + ((screenHeight/2) * Math.cos(this.rotationY + Math.PI))
        ],
        [
          (this.positionX + this.FOV) + ((screenHeight/2) * Math.sin(this.rotationY)),
          (this.positionY + this.FOV) + ((screenHeight/2) * Math.cos(this.rotationY))
      ]]
    },
    getMiddleScreenPoint: function() {
      let horizontal = this.getScreenHorizontalPoints(); let vertical = this.getScreenVerticalPoints();
      return [
        [
          (horizontal[0][0] + horizontal[1][0]) / 2,
          (horizontal[0][1] + horizontal[1][1]) / 2
        ],
        [
          (vertical[0][0] + vertical[1][0]) / 2,
          (vertical[0][1] + vertical[1][1]) / 2
        ]
      ] 
    }
    
  }


  //ELEMENTS
  const kwadrat = new Cube (385,15,395, 20);
  const trujkont = new Triangle (365,8, 405, 10, 10)
  const podlog = new Plane(380,0,380,10)

  k1 = new Cube(390, 0, 390, 5)
  k2 = new Cube(395, 0, 390, 5)
  k3 = new Cube(400, 0, 390, 5)
  k4 = new Cube(395, 5, 390, 5)
  k5 = new Cube(395, 10, 390, 5)
  k6 = new Cube(395, 0, 405, 5)
  
  
  var mapObjects = [];
  mapObjects.push(camera)
  // mapObjects.push(k1, k2, k3, k4, k5, k6)
  mapObjects.push(trujkont)

  //FLOOR
  // for(i=380;i<600;i+=10){
  //   for(p=200;p<600;p+=10)
  //   { 
  //    mapObjects.push(new Plane(p,0,i,10))
  //   }
  // }