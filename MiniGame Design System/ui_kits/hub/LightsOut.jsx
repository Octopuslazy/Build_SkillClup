// LightsOut.jsx — play shell for Lights Out
function LightsOut({ onBack }) {
  const [grid, setGrid] = React.useState(() => {
    // 5x5 with a pattern roughly matching the mock
    const seed = [
      [1,1,1,0,1],
      [0,1,0,1,0],
      [1,1,1,0,0],
      [1,1,1,1,0],
      [0,0,1,0,0],
    ];
    return seed;
  });
  function toggle(r,c){
    setGrid(g => g.map((row, ri) => row.map((v, ci) => {
      if ((ri===r && ci===c) || (ri===r-1 && ci===c) || (ri===r+1 && ci===c) || (ri===r && ci===c-1) || (ri===r && ci===c+1)) return v ? 0 : 1;
      return v;
    })));
  }
  return (
    <section className="mg-game">
      <header className="mg-game__head">
        <button className="mg-iconbtn" onClick={onBack}><IBack size={16}/></button>
        <h2 className="mg-game__title">LIGHTS OUT</h2>
        <button className="mg-iconbtn"><ISettings size={16}/></button>
      </header>
      <div className="mg-game__body">
        <aside className="mg-game__side">
          <Stat label="Moves" value="18"/>
          <Stat label="Best" value="27"/>
          <Stat label="Level" value="Medium"/>
          <Stat label="Time" value="01:36" accent/>
        </aside>
        <div className="mg-lights">
          <div className="mg-lights__grid">
            {grid.map((row, r) => row.map((v, c) => (
              <button key={r+"-"+c}
                      className={"mg-light" + (v ? " on" : "")}
                      onClick={()=>toggle(r,c)}
                      aria-label={`Cell ${r}-${c}`}/>
            )))}
          </div>
          <div className="mg-lights__goal">
            <ITrophy size={14}/> Goal · Turn off all the lights!
          </div>
        </div>
        <aside className="mg-game__rail">
          <div className="mg-card" style={{padding:16, display:"flex", flexDirection:"column", gap:14}}>
            <div className="mg-field">
              <label>Theme</label>
              <div className="mg-select">
                Neon <IChevron size={14} style={{transform:"rotate(90deg)"}}/>
              </div>
            </div>
            <div className="mg-toggle-row" style={{padding:0,border:"none",background:"none"}}>
              <span className="mg-body-sm">Sound</span>
              <Switch on/>
            </div>
          </div>
        </aside>
      </div>
      <footer className="mg-game__footer">
        <button className="mg-btn mg-btn--ghost"><IUndo size={14}/>Undo</button>
        <button className="mg-btn mg-btn--ghost"><IBulb size={14}/>Hint</button>
        <button className="mg-btn mg-btn--danger"><IRotate size={14}/>Reset</button>
      </footer>
    </section>
  );
}

Object.assign(window, { LightsOut });
