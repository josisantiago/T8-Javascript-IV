//Fazer da navbar que está no index.html um `componente class Navbar`

class NavBar{
    render() {
        const nav = `<img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
            <div class="group__input">
                <input class="input__search" onKeyUp="limpar(this.value)" type="search" placeholder="Search" aria-label="Search">
                <button class="button__search" onclick="seachPorBotao"> Search </button>
            </div>`
            document.querySelector(`.navbar`).innerHTML = nav
    }
}

