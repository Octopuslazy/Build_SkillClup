// KnightTour.jsx — play shell for Knight Tour
function KnightTour({ onBack }) {
  // Static cell numbers reproducing the source mock
  const visited = {
    "0,0":1, "0,2":13, "0,3":15, "0,5":23,
    "1,0":2, "1,2":16, "1,3":12, "1,4":10, "1,5":19,
    "2,0":13, "2,1":21, "2,3":"♞", "2,4":14,
    "3,0":18, "3,1":28,
  };
  const cur = "2,3";
  const last = "1,4"; // 10

  return (
    <section className="mg-game">
      <header className="mg-game__head">
        <button className="mg-iconbtn" onClick={onBack}><IBack size={16}/></button>
        <h2 className="mg-game__title">KNIGHT TOUR</h2>
        <button className="mg-iconbtn"><ISettings size={16}/></button>
      </header>
      <div className="mg-game__body">
        <aside className="mg-game__side">
          <Stat label="Moves" value="12"/>
          <Stat label="Remaining" value="20"/>
          <Stat label="Hints Left" value="3"/>
          <Stat label="Timer" value="03:42" accent/>
          <div className="mg-game__actions">
            <button className="mg-btn mg-btn--ghost mg-btn--block"><IUndo size={14}/>Undo</button>
            <button className="mg-btn mg-btn--ghost mg-btn--block"><IBulb size={14}/>Hint</button>
            <button className="mg-btn mg-btn--danger mg-btn--block"><IRotate size={14}/>Restart</button>
          </div>
        </aside>
        <div className="mg-board mg-board--chess">
          {Array.from({length: 8}).map((_, r) => (
            <React.Fragment key={r}>
              {Array.from({length: 8}).map((_, c) => {
                const key = `${r},${c}`;
                const v = visited[key];
                const isCur = key === cur;
                const isHi = key === last;
                const dark = (r + c) % 2 === 1;
                return (
                  <div key={key} className={
                    "mg-cell" +
                    (dark ? " dark" : " light") +
                    (isHi ? " hi" : "") +
                    (isCur ? " cur" : "")
                  }>
                    {c === 0 && <span className="mg-cell__rank">{8 - r}</span>}
                    {r === 7 && <span className="mg-cell__file">{String.fromCharCode(97+c).toUpperCase()}</span>}
                    {v && <span className={"mg-cell__num" + (typeof v === "string" ? " mg-cell__piece" : "")}>{v}</span>}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <aside className="mg-game__rail">
          <div className="mg-card mg-history">
            <header className="mg-title" style={{padding:"14px 16px 8px"}}>Move History</header>
            <ul>
              {[
                ["8","C3"],["9","D5"],["10","E7"],["11","G6"],["12","E5"],
              ].map(([n,co], i, a) => (
                <li key={n} className={i === a.length-1 ? "active" : ""}>
                  <span className="mg-mono mg-history__n">{n}</span>
                  <span className="mg-mono mg-history__co">{co}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mg-toggle-row">
            <span className="mg-body-sm">Show Path</span>
            <Switch on/>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className="mg-stat">
      <span className="mg-stat__l">{label}</span>
      <span className={"mg-stat__v" + (accent ? " accent" : "")}>{value}</span>
    </div>
  );
}

function Switch({ on, onClick }) {
  return (
    <button className={"mg-switch" + (on ? " on" : "")} onClick={onClick} aria-pressed={on}>
      <span className="mg-switch__knob"/>
    </button>
  );
}

Object.assign(window, { KnightTour, Stat, Switch });
