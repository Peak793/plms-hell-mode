class SidebarComponent extends HTMLElement {
  constructor() {
    super();

    this.isExpanded = false;
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
          <style>
          .nav-container {
            flex-shrink: 0;
            height: 100vh;
            margin: 0px;
            color: white;
            width: fit-content;
            position: fixed;
            top: 0;
            left:0;
            z-index: 10;
            /* color: white; */
          }

          nav {
            transition: width 0.2s ease-in-out;
            background-color: #1D283A;
            width: 60px;
            padding: 40px 16px;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
          }

          .logo-container {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            gap: 10px
          }

          #plms-logo {
            width: 40px;
            height: 40px;
          }

          .nav-text {
            font-size: 16px;
            margin: 0px;
            transition: all 0.2s ease;
            white-space: nowrap;
          }

          .close-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotate(180deg);
            transition: all 0.2s ease;
          }

          .close-btn img {
            width: 24px;
            height: 24px;
          }

          .expanded {
            transform: rotate(0deg);
          }

          .shrink {
            width: 0px;
          }
        </style>
          <aside class="nav-container d-flex flex-shrink-0">
              <nav id="nav">
                  <div class="logo-container d-flex justify-content-between overflow-hidden">
                      <div id="logo" class="d-none justify-content-center align-items-center">
                          <a href="/template/ins-group-list.html" class="a-no-style" >
                              <img id="plms-logo" src="../public/imgs/plms-logo.png" alt="plms-logo">
                          </a>
                          <a href="/template/ins-group-list.html" class="nav-text a-no-style">
                              PROGRAMMING LAB <br> MANAGEMENT SYSTEM
                          </a>
                      </div>
                      <button class="reset-default-btn close-btn" aria-label="Close" >
                          <img src="../public/imgs/close-btn.png" alt="">
                      </button>
                  </div>
              </nav>
          </aside>
      `;

    this.querySelector(".close-btn").addEventListener("click", this.toggleSidebar);
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;

    const closeBtn = this.querySelector(".close-btn");
    const logoContainer = this.querySelector("#logo");
    const nav = this.querySelector("#nav");

    if (this.isExpanded) {
      closeBtn.classList.add('expanded');
      logoContainer.classList.remove("d-none");
      logoContainer.classList.add("d-flex");
      nav.style.width = "300px"

    } else {
      closeBtn.classList.remove('expanded');
      logoContainer.classList.remove("d-flex");
      logoContainer.classList.add("d-none");
      nav.style.width = "60px"
    }
  }
}

customElements.define('sidebar-component', SidebarComponent);
