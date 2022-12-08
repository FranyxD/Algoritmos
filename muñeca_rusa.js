//saber si dentro de los objetos del array caben los regalos todos en uno
//como en una muñeca rusa

function fitsInOneBox(boxes) {
  const boxesOrder = boxes.sort((a, b) => a.l - b.l)
  console.log(boxesOrder)
  for(let i = 0; i < boxesOrder.length - 1; i++) {
    const {l: large, w: width, h: height} = boxesOrder[i]
    const {l: large2, w: width2, h: height2} = boxesOrder[i + 1]
    if(large >= large2 || width >= width2 || height >= height2) return false
    else return true
  }
}
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]
const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

//fitsInOneBox(boxes) // true
 // false
//fitsInOneBox([{l: 2, w: 2, h: 2 },{l: 1, w: 1, h: 1 },]) 
fitsInOneBox(boxes);