import './style.css'



const darkmode = function() {
  const darkmode:HTMLSpanElement = document.querySelector('.darkmode .navtext')!

  document.body.classList.toggle('dark');
  if (darkmode.innerText === 'Dark Mode'){
    darkmode.innerText = 'Light Mode'
    localStorage.setItem('darkmode','true')}
  else {
    darkmode.innerText = 'Dark Mode'
    localStorage.clear}
} 

document.querySelector('.darkmode')!.addEventListener('click', darkmode)

const restore = function () {
if (localStorage.getItem('darkmode') === 'true') {
  darkmode()}
}

restore()