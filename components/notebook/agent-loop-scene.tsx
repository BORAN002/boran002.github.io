export function AgentLoopScene() {
  return (
    <figure
      className="agent-loop-figure"
      aria-label="Agent Loop：Context、Reason、Act 与 Observe 的循环"
    >
      <div className="orbit-scene" aria-hidden="true">
        <div className="orbit-halo" />
        <canvas data-orbit="" />
        <div className="orbit-center">
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
      </div>
      <figcaption>
        Agent Loop <span>移动指针，探索循环 ↗</span>
      </figcaption>
    </figure>
  );
}
