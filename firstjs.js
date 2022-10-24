const pickerRed = document.querySelector('.red')
const pickerBlue = document.querySelector('.blue')
const pickerGreen = document.querySelector('.green')
const pickerPurple = document.querySelector('.purple')
const dotRed = document.querySelector('#dot-r')
const dotBlue = document.querySelector('#dot-b')
const dotGreen = document.querySelector('#dot-g')
const dotPurple = document.querySelector('#dot-p')
const subject = document.querySelector('h1')

const cls = ['cred', 'cblue', 'cgreen', 'cpurple']

function dotMover() {
    let pos = subject.getBoundingClientRect()
    document.documentElement.style.setProperty('--top-pos', pos.top + "px");
}

pickerRed.addEventListener("click", e =>{
    dotRed.classList.add("active")
    function colorChange() {
        subject.classList.remove(...cls);
        subject.classList.add("cred");
        dotRed.classList.remove("active");
    }
    setTimeout(colorChange,500)
    dotMover()
    
})
pickerBlue.addEventListener("click", e =>{
    dotBlue.classList.add("active")
    function colorChange() {
        subject.classList.remove(...cls);
        subject.classList.add("cblue");
        dotBlue.classList.remove("active");
    }
    setTimeout(colorChange,500)
})
pickerGreen.addEventListener("click", e =>{
    dotGreen.classList.add("active")
    function colorChange() {
        subject.classList.remove(...cls);
        subject.classList.add("cgreen");
        dotGreen.classList.remove("active");
    }
    setTimeout(colorChange,500)
})
pickerPurple.addEventListener("click", e =>{
    dotPurple.classList.add("active")
    function colorChange() {
        subject.classList.remove(...cls);
        subject.classList.add("cpurple");
        dotPurple.classList.remove("active");
    }
    setTimeout(colorChange,500)
})