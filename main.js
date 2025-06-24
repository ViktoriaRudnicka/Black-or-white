document.getElementById("blackTheme").addEventListener('click', () => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
})
document.getElementById("whiteTheme").addEventListener('click', () => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
})
const palitra = document.getElementById("colorPalitra")
const center = document.getElementById("center")
const changeColor = document.getElementById("changeColor")

changeColor.addEventListener("click", () => {
    palitra.classList.toggle("visibleBlock")
})
changeText.addEventListener("click", () => {
    center.classList.toggle("visibleBlock")
})
const text = document.getElementById("text")
const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")
const yellow = document.getElementById("yellow")
const pink = document.getElementById("pink")
const otherColor = document.getElementById("otherColor")
red.addEventListener("click", () => {
    text.style.color = "red"
})
green.addEventListener("click", () => {
    text.style.color = "green"
})
blue.addEventListener("click", () => {
    text.style.color = "blue"
})
yellow.addEventListener("click", () => {
    text.style.color = "yellow"
})
pink.addEventListener("click", () => {
    text.style.color = "pink"
})
otherColor.addEventListener('input', () => {
    text.style.color = otherColor.value
})

const changeBacground = document.getElementById("changeBacground")
changeBacground.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`
})

const save = document.getElementById("save")
const areaPlace = document.getElementById("areaPlace")

save.addEventListener('click', () => {
    const centerData = areaPlace.value;
    text.innerText = centerData;
})
const body = document.getElementById("body")
const addPhoto = document.getElementById("addPhoto")
addPhoto.addEventListener('click', () => {
    body.classList.toggle("body_photo")
})

const animation = document.getElementById('animation')
const AddАnimation = document.getElementById('AddАnimation')
AddАnimation.addEventListener ("click", () => {
    animation.classList.toggle ("animationAdd")
})
