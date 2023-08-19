class TableRowComponent extends HTMLElement {
  static get observedAttributes() {
    return ['group-id', 'group', 'year', 'semester', 'class-date', 'students', 'instructor'];
  }

  color = {
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
      <div class="table-row">
          <div class="c1">${this.getAttribute('group-id') || ''}</div>
          <div class="c2">${this.getAttribute('group') || ''}</div>
          <div class="c3">${this.getAttribute('year') || ''}</div>
          <div class="c4">${this.getAttribute('semester') || ''}</div>
          <div class="c5 date-range" style="background-color:${this.color[this.getAttribute("class-date").split(",")[0]]}" >
            ${this.getAttribute('class-date') || ''}
          </div>
          <div class="c6">${this.getAttribute('students') || ''}</div>
          <div class="c7">${this.getAttribute('instructor') || ''}</div>
      </div>
    `;
  }
}

customElements.define('table-row', TableRowComponent);