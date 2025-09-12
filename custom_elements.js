
class nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML=
        ` 
<nav>
    <div class="dropdown">
        <button>Wiki</button>
        <div class="content">
            <a href="characters.html">Characters</a>
            <a href="world.html">World</a>
            <a href="">Lore</a>
            <a href="">Artifacts</a>
            <a href="">More</a>
        </div>
    </div>
    <div class="dropdown">
        <button>Chapters</button>
        <div class="content">
            <a href="">List of chapters</a>
            <a href="">Updates</a>
        </div>
    </div>    
    
    <div class="dropdown">
        <button>About us</button>
            <div class="content">
                <a href="">Shock</a>
                <a href="">Others</a>
            </div>
        </div>
        <div class="dropdown">
        <button>More info</button>
            <div class="content">
            
            </div>
        </div>
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