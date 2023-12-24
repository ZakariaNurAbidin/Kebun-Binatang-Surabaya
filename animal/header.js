class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <a href="#" class="logo"> <i class="fas fa-paw"></i> Surabaya ZOO</a>
                <nav class="navbar">
                    <a href="index.html">home</a>
                    <a href="animal.html">satwa</a>
                    <a href="#">denah</a>
                    <a href="#">fasilitas</a>
                    <a href="#">about</a>
                </nav>

                <div class="icons">
                    <div id="login-btn" class="fas fa-user"></div>
                    <div id="menu-btn" class="fas fa-bars"></div>
                </div>

                <!-- login form -->

                <form action="" class="login-form">

                    <h3>login form</h3>
                    
                    <input type="email" placeholder="Enter your email" class="box">
                    <input type="password" placeholder="Enter your password" class="box">
                    <div class="remember">
                        <input type="checkbox" name="" id="remember-me">
                        <label for="remember-me">remember me</label>
                    </div>
                    <a href="#" class="btn">login</a>

                </form>

            </header>
            `
    }
}

customElements.define('animal_header', MyHeader)