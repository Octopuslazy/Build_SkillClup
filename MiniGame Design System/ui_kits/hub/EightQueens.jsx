// EightQueens.jsx — play shell for 8 Queens
function EightQueens({ onBack }) {
  // Queens placed (rows on board); 6 of 8 placed
  const queens = { "0,5": true, "1,1": true, "2,7": true, "3,3": true, "5,4": true, "7,2": true };
  return (
    <section className="mg-game">
      <header className="mg-game__head">
        <button className="mg-iconbtn" onClick={onBack}><IBack size={16}/></button>
        <h2 className="mg-game__title">8 QUEENS</h2>
        <button className="mg-iconbtn"><ISettings size={16}/></button>
      </header>
      <div className="mg-game__body">
        <aside className="mg-game__side">
          <Stat label="Queens" value="6 / 8"/>
          <Stat label="Conflicts" value="2" tone="danger"/>
          <Stat label="Best" value="18"/>
          <Stat label="Time" value="02:18" accent/>
        </aside>
        <div className="mg-board mg-board--chess">
          {Array.from({length: 8}).map((_, r) => (
            <React.Fragment key={r}>
              {Array.from({length: 8}).map((_, c) => {
                const key = `${r},${c}`;
                const q = queens[key];
                const dark = (r + c) % 2 === 1;
                return (
                  <div key={key} className={"mg-cell" + (dark ? " dark" : " light") + (q ? " queen" : "")}>
                    {c === 0 && <span className="mg-cell__rank">{8 - r}</span>}
                    {r === 7 && <span className="mg-cell__file">{String.fromCharCode(97+c).toUpperCase()}</span>}
                    {q && <span className="mg-queen-glyph">♛</span>}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <aside className="mg-game__rail">
          <div className="mg-card" style={{padding:"16px"}}>
            <header className="mg-title" style={{textAlign:"center", marginBottom:8}}>Conflicts</header>
            <div className="mg-conflicts">
              <svg viewBox="0 0 140 120" className="mg-conflicts__svg">
                <g stroke="#EF4444" strokeWidth="1.4" strokeDasharray="4 4" fill="none">
                  <line x1="70" y1="60" x2="10"  y2="60"/>
                  <line x1="70" y1="60" x2="130" y2="60"/>
                  <line x1="70" y1="60" x2="70"  y2="10"/>
                  <line x1="70" y1="60" x2="70"  y2="110"/>
                  <line x1="70" y1="60" x2="20"  y2="10"/>
                  <line x1="70" y1="60" x2="120" y2="10"/>
                  <line x1="70" y1="60" x2="120" y2="110"/>
                  <line x1="70" y1="60" x2="20"  y2="110"/>
                </g>
                <text x="70" y="68" textAnchor="middle" fontSize="34" fill="#A855F7">♛</text>
              </svg>
              <ul className="mg-conflicts__list">
                <li><span className="dot"/>Row</li>
                <li><span className="dot"/>Column</li>
                <li><span className="dot"/>Diagonal</li>
              </ul>
            </div>
          </div>
          <div className="mg-toggle-row">
            <span className="mg-body-sm">Show Attacks</span>
            <Switch on/>
          </div>
        </aside>
      </div>
      <footer className="mg-game__footer">
        <button className="mg-btn mg-btn--danger">Clear Board</button>
        <button className="mg-btn mg-btn--ghost"><IUndo size={14}/>Undo</button>
        <button className="mg-btn mg-btn--primary"><IBulb size={14}/>Hint</button>
      </footer>
    </section>
  );
}

Object.assign(window, { EightQueens });
