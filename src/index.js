const darkmode = function() {
  document.body.classList.toggle('dark');
  if (document.querySelector('.darkmode .navtext').innerText === 'Dark Mode'){
    document.querySelector('.darkmode .navtext').innerText = 'Light Mode'
    localStorage.setItem('darkmode','true')}
  else {
    document.querySelector('.darkmode .navtext').innerText = 'Dark Mode'
    localStorage.clear}
}

onload = function () {
if (localStorage.getItem('darkmode') === 'true') {
  darkmode()}
}

