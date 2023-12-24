function Usuario(usuario, contraseña){
    this.usuario= usuario;
    this.contraseña= contraseña;
}

const BBDD = [];

function pushUser(usuario, contraseña){
    BBDD.push(new Usuario(usuario, contraseña))
}


pushUser("Marina", "asdsa123")
pushUser("Tere", "12345")
pushUser("Inu", "guau")
pushUser("Juan", "aaa111")

const navbarL = document.querySelector("#navbar-log")
const navbar = document.querySelector("#navbar")
const isAuth = JSON.parse(localStorage.getItem("authUser"))
if(isAuth){
    const login = document.querySelector("#login")
    login.innerHTML = `<span class= "span-log">¡Estás loguead@ como ${isAuth.user}!`
    navbarL.innerHTML = '<li><a href="../index.html">HOME</a></li>'
}

const inputUsuario = document.querySelector("#usuario")
const inputContra = document.querySelector("#contraseña")
const btnLogin = document.querySelector("#btn-login")
const logout = document.querySelector("#log-out")
const container = document.querySelector("#contenedor")

const nuevoUser = {
    usuario: '',
    contraseña: ''
}

inputUsuario.addEventListener("input",(e)=>{
    nuevoUser.usuario = e.target.value
})
inputContra.addEventListener("input",(e)=>{
    nuevoUser.contraseña = e.target.value
})

btnLogin.addEventListener("click", (e)=>{
    const findUser = BBDD.find((el)=>{
        return nuevoUser.usuario === el.usuario && nuevoUser.contraseña === el.contraseña
    })
    if(findUser===undefined){
        container.innerHTML = "<p>Nombre de usuario y/o contraseña incorrectos.</p>"
    }else{
        const stringify = JSON.stringify({user: findUser.usuario})
        localStorage.setItem("authUser", stringify)
        const login = document.querySelector("#login")
        login.innerHTML = `<span class= "span-log">¡Estás loguead@ como ${findUser.usuario}!</span>`
        window.location.href = "http://127.0.0.1:5500/index.html"
    }
})

