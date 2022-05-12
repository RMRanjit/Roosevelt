


const normalize = (min, max, val) => {
    return ((val - min) / (max - min))* Math.PI;
  }

  export const getXRotation = (p1, p2) => {

   // let e1 = Math.abs(p1.z)
    //let e2 = Math.abs(p2.z )
    //return -normalize(-e1, e2, e2-e1) - (.5*Math.PI);
    //let e1 = Math.abs(p1.z - p3.z)
    //let e2 = Math.abs(p2.z - p3.z)
   // return normalize(-e1, e2, e2-e1) - (.5*Math.PI);
   let zMid = (p1.z+p2.z)/2
   let yMid = (p1.y+p2.y)/2
   let dz = p1.z - zMid
   let dy = p1.y - yMid
   let angle = -1*Math.atan(dz/dy) - (Math.PI)
   return angle 

  }
export const getYRotation = (p1,p2) => {
    //two eyes
    let xMid = (p1.x+p2.x)/2
    let zMid = (p1.z+p2.z)/2
    let dx = p1.x - xMid
    let dz = p1.z - zMid
    let angle = Math.atan(dz/dx) 
    return angle 
}
export const getZRotation = (p1, p2) => {

    //let e1 = Math.abs(p1.y)
    //let e2 = Math.abs(p2.y )
    //return normalize(-e1, e2, e2-e1) - (.5*Math.PI);
    let xMid = (p1.x+p2.x)/2
    let yMid = (p1.y+p2.y)/2
    let dx = p1.x - xMid
    let dy = p1.y - yMid
    let angle = Math.atan(dy/dx) + Math.PI
    return angle
  }
  
export function dist(p1, p2) {
    return Math.sqrt(
        Math.pow((p1.x*10 -2) - (p2.x*10 -2), 2) +
        Math.pow((p1.y*-10+4) - (p2.y*-10+4), 2) +
        Math.pow((p1.z*10) - (p2.z*10), 2)
    ); 
}

// Function to find the angle in 3D space
export function find_angle(p1, p2, p3) {
    const ab = dist(p1, p2);
    const bc = dist(p2, p3);
    const ac = dist(p1, p3);

    const angle = (Math.pow(ab, 2) + Math.pow(bc, 2) - Math.pow(ac, 2)) / 
(2 * ab * bc);
    return Math.acos(angle);
}  