
class Footer extends HTMLElement {
    constructor() {
        super();
        
        let shadow = this.attachShadow({mode:'open'});

        this.divHeader = document.createElement("footer");
        // this.divHeader.className = 'container';
        this.divHeader.innerHTML = `
        <div class="footer">
        <h2>footer</h2>
        </div>
        `;

        shadow.appendChild(this.divHeader)
    }
}

customElements.define("app-footer", Footer);