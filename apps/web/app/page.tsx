export default function Home() {
  return (
    <main className="container">
      <h1>Design System Tokens Test</h1>

      <section className="section">
        <h2>Colors</h2>
        <div className="color-grid">
          <div className="color-swatch primary">
            <span>Primary</span>
          </div>
          <div className="color-swatch secondary">
            <span>Secondary</span>
          </div>
          <div className="color-swatch accent">
            <span>Accent</span>
          </div>
          <div className="color-swatch warning">
            <span>Warning</span>
          </div>
          <div className="color-swatch positive">
            <span>Positive</span>
          </div>
          <div className="color-swatch critical">
            <span>Critical</span>
          </div>
        </div>
        <p className="hint">Hover to see faded variants</p>
      </section>

      <section className="section">
        <h2>Spacing</h2>
        <div className="spacing-demo">
          <div
            className="spacing-box"
            style={{ padding: "var(--dxy-spacing-1x)" }}
          >
            1x (4px)
          </div>
          <div
            className="spacing-box"
            style={{ padding: "var(--dxy-spacing-2x)" }}
          >
            2x (8px)
          </div>
          <div
            className="spacing-box"
            style={{ padding: "var(--dxy-spacing-4x)" }}
          >
            4x (16px)
          </div>
          <div
            className="spacing-box"
            style={{ padding: "var(--dxy-spacing-8x)" }}
          >
            8x (32px)
          </div>
          <div
            className="spacing-box"
            style={{ padding: "var(--dxy-spacing-12x)" }}
          >
            12x (48px)
          </div>
        </div>
      </section>
    </main>
  );
}
