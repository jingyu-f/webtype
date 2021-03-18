
let xs =[]
for (var i = 0; i <= 2000; i++){
  xs.push(i)
}
/*Statement 1 sets a variable before the loop starts (var i = 50).
Statement 2 defines the condition for the loop to run (i must be less than 500).
Statement 3 increases a value (i++) each time the code block in the loop has been executed.
*/
let t = 0
function animate(){
  let points = xs.map(x => {
    let y =  60+ 18 * Math.sin((x + t) / 23)
    return [x, y]
  })
  let path ="M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")

  document.querySelector("path").setAttribute("d", path)

  t += 0.8

requestAnimationFrame(animate)
}

animate()
