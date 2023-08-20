class CheckboxComponent extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'name', 'value'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="checkbox-container">
        <label class="w-100" >
          ${this.getAttribute('label') || 'Default Label'}
          <input 
            type="checkbox" 
            name="${this.getAttribute('name') || ''}" 
            value="${this.getAttribute('value') || ''}" 
          />
          <span class="checkmark"></span>
        </label>
      </div>
    `;
  }
}

customElements.define('checkbox-component', CheckboxComponent);

class CheckboxComponentWithColor extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'name', 'value'];
  }

  color = {
    "All": "transparent",
    "จันทร์": "rgba(244, 193, 82, 1)",
    "อังคาร": "rgba(244, 113, 181, 1)",
    "พุธ": "rgba(43, 212, 189, 1)",
    "พฤหัสบดี": "rgba(251, 145, 111, 1)",
    "ศุกร์": "rgba(58, 191, 248, 1)",
    "เสาร์": "rgba(130, 141, 248, 1)",
    "อาทิตย์": "rgba(251, 111, 132, 1)",
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="checkbox-container">
        <label class="w-100" >
          <div class="colored-label" 
            style="${this.getAttribute('value') === "all" ? "text-align: left; padding:0px; color:white;" : ""} background-color:${this.color[this.getAttribute('label')]}; " 
          >
            ${this.getAttribute('label') || 'Default Label'}
          </div>
          <input 
            type="checkbox" 
            name="${this.getAttribute('name') || ''}" 
            value="${this.getAttribute('value') || ''}"
          />
          <span class="checkmark"></span>
        </label>
      </div>
    `;
  }
}

customElements.define('checkbox-component-color', CheckboxComponentWithColor);