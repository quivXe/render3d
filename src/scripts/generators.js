class Cube {
    constructor (x, y, z, w) {
        this.vertexs3D = [[x, y, z], [x+w, y, z], [x+w, y+w, z], [x, y+w, z], [x, y, z+w], [x+w, y, z+w], [x+w, y+w, z+w], [x, y+w, z+w]]
        this.sides = [[0, 1, 2, 3, 0], [4, 5, 6, 7, 4], [0, 1, 5, 4, 0], [3, 2, 6, 7, 3], [0, 4, 7, 3, 0], [1, 5, 6, 2, 1]]
    }
}

class Triangle {
    constructor (x, y, z, width, height) {
        this.vertexs3D = [[x, y, z], [x+width, y, z], [x+width, y, z+width], [x, y, z+width], [x+width/2, y+height, z+width/2]]
        this.sides = [[0, 1, 2, 3, 0], [0, 1, 4, 0], [1, 2, 4, 1], [3, 2, 4, 3], [0, 4, 3, 0]]
    }
}

class Plane  {
  constructor(x,y,z, w) {
    this.vertexs3D = [[x, y, z], [x+w, y , z], [x+w, y, z+w], [x, y, z+w]]
    this.sides = [[0, 1, 2, 3, 0]]
  }
}



// function consoleLogCube(x, y, z, w) {
//     console.log(`vertexs = [[${x}, ${y}, ${z}], [${x+w}, ${y}, ${z}], [${x+w}, ${y+w}, ${z}], [${x}, ${y+w}, ${z}], [${x}, ${y}, ${z+w}], [${x+w}, ${y}, ${z+w}], [${x+w}, ${y+w}, ${z+w}], [${x}, ${y+w}, ${z+w}]]`)
//     console.log(`sides = [[0, 1, 2, 3, 0], [4, 5, 6, 7, 4], [0, 1, 5, 4, 0], [3, 2, 6, 7, 3], [0, 4, 7, 3, 0], [1, 5, 6, 2, 1]]`)
// }

