class AlignmentBox extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .alignment-box {
          position: relative;
          width: 100%;
          padding: 1.5rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 0.5rem;
          margin-bottom: 5rem;
          overflow: hidden;
        }
        
        .starfield {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNENEFGMzciIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
          opacity: 0.05;
        }
        
        h2 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          text-align: center;
        }
        
        p {
          font-size: 0.875rem;
          opacity: 0.8;
          text-align: center;
        }
      </style>
      
      <div class="alignment-box">
        <div class="starfield"></div>
        <h2>Alignment Message</h2>
        <p>"${this.getAttribute('message') || 'When you align with your soul\'s purpose, the universe conspires to support your journey.'}"</p>
      </div>
    `;
  }
}

customElements.define('alignment-box', AlignmentBox);