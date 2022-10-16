const pickerRed = document.querySelector('.red')
const pickerBlue = document.querySelector('.blue')
const pickerGreen = document.querySelector('.green')
const pickerPurple = document.querySelector('.purple')
const subject = document.querySelector('h1')

const cls = ['cred', 'cblue', 'cgreen', 'cpurple']

pickerRed.addEventListener("click", e =>{
    subject.classList.remove(...cls)
    subject.classList.add("cred")
})
pickerBlue.addEventListener("click", e =>{
    subject.classList.remove(...cls)
    subject.classList.add("cblue")
})
pickerGreen.addEventListener("click", e =>{
    subject.classList.remove(...cls)
    subject.classList.add("cgreen")
})
pickerPurple.addEventListener("click", e =>{
    subject.classList.remove(...cls)
    subject.classList.add("cpurple")
})