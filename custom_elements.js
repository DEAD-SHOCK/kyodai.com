
class nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML=
        ` <nav>
        <div class="button"><a href="characters.html">characters</a></div>
        <div class="button"><a href="world.html">world</a></div>
        <div class="button"><a href="">story</a></div>
        <div class="button"><a href="">artifacts</a></div>
        <div class="button"><a href="">more</a></div>
    </nav>
    
    `
    }
}

class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML=
        `       <footer> Property of SHOCK MEDIA</footer>     `
    }
}
class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML=
        `           <header style="color=white"><a href="index.html">KYODAI</a></header>
     `
    }
}
customElements.define('my-header', header);
customElements.define('my-footer', footer);
customElements.define('nav-bar', nav);