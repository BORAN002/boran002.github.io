export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-heading">
      <div className="hero-copy">
        <p className="hero-kicker">
          <span /> A NOTEBOOK IN PROGRESS
        </p>
        <h1 id="home-heading">
          从理解，
          <br />
          <span>到构建。</span>
        </h1>
        <p className="hero-topics">
          AI <span>/</span> Agents <span>/</span> Systems
        </p>
        <p className="hero-description">
          记录概念与实践，连接值得保留的 Insight
          <br className="desktop-break" /> 和可以复用的 Method。
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#notebook">
            探索笔记 <span aria-hidden="true">↗</span>
          </a>
          <a
            className="secondary-link"
            href="/papers/agent-tool-use-2026/explorer/"
          >
            浏览论文 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="orbit-scene" aria-hidden="true">
        <div className="orbit-halo" />
        <canvas data-orbit="" />
        <div className="orbit-center">
          <span>THE THINKING MACHINE</span>
          <strong>
            Agent
            <br />
            <em>Loop</em>
          </strong>
        </div>
        <span className="orbit-node node-context">
          <i />
          Context
        </span>
        <span className="orbit-node node-reason">
          <i />
          Reason
        </span>
        <span className="orbit-node node-act">
          <i />
          Act
        </span>
        <span className="orbit-node node-observe">
          <i />
          Observe
        </span>
        <div className="orbit-caption">
          <span>01 — CONTINUOUS EXPLORATION</span>
          <span className="orbit-hint">MOVE TO EXPLORE ↗</span>
        </div>
      </div>
    </section>
  );
}
