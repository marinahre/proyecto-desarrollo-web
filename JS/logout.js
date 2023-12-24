function logOut(){
    localStorage.removeItem('authUser')
    window.location = 'http://127.0.0.1:5500/pages/login.html'
}
const logoutBtn = document.querySelector("#btn-logout")

logoutBtn.addEventListener("click", logOut)