const darkmode = document.getElementById('darkmode')
const spread = document.getElementById('spread')
const welcome = document.querySelector('.welcome')

darkmode.addEventListener('click', ()=>{
    spread.classList.add('animatedDarkmode')
    welcome.classList.add('animatedWelcome')
})