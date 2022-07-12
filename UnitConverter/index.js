/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inp = document.getElementById("input-el")
lensec = document.getElementById("length")
volsec = document.getElementById("volume")
masssec = document.getElementById("mass")
// let num = Number(inp.value)
// console.log(num)

const convert = document.getElementById("convertbtn")

convert.addEventListener("click",function(){
    let num = Number(inp.value)
    let metertofeet = num*3.281
    let feettometer = num/3.281
    let litertogallon = num*0.264
    let gallontoliter = num/0.264
    let kgtopound = num*2.204
    let poundtokg = num/2.204
    lensec.innerHTML = `${num} Meters = ${metertofeet.toFixed(3)} Feet | ${num} Feet = ${feettometer.toFixed(3)} Meters`
    volsec.innerHTML = `${num} Liters = ${litertogallon.toFixed(3)} Gallons | ${num} Gallons = ${gallontoliter.toFixed(3)} Liters`
    masssec.innerHTML = `${num} Kilograms = ${kgtopound.toFixed(3)} Pounds | ${num} Pounds = ${poundtokg.toFixed(3)} Kilograms`

})
