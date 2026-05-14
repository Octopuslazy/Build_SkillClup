// RightRail.jsx — progress ring + daily streak + daily challenge card
function ProgressCard() {
  return (
    <div className="mg-card mg-rail__card">
      <header className="mg-rail__head">
        <span className="mg-title">Your Progress</span>
        <a className="mg-rail__view">View All <IChevron size={14}/></a>
      </header>
      <div className="mg-rail__progress">
        <div className="mg-ring" style={{"--pct":"78%"}}>
          <span className="mg-ring__num">78<i>%</i></span>
          <span className="mg-ring__lbl">Overall</span>
        </div>
        <dl className="mg-rail__stats">
          <div><dt>Games Played</dt><dd>45</dd></div>
          <div><dt>Puzzles Solved</dt><dd>128</dd></div>
          <div><dt>Best Score</dt><dd>2,450</dd></div>
          <div><dt>Time Played</dt><dd>18h 32m</dd></div>
        </dl>
      </div>
    </div>
  );
}

function StreakCard() {
  const days = ["M","T","W","T","F","S","S"];
  return (
    <div className="mg-card mg-rail__card mg-streak">
      <div className="mg-streak__row">
        <span className="mg-streak__icon"><IFire size={20}/></span>
        <div>
          <div className="mg-streak__t">Daily Streak</div>
          <div className="mg-streak__s">7 Days</div>
        </div>
      </div>
      <div className="mg-streak__days">
        {days.map((d, i) => (
          <div key={i} className={"mg-streak__d" + (i < 6 ? " done" : "")}>
            {i < 6 ? <ICheck size={11}/> : d}
          </div>
        ))}
      </div>
    </div>
  );
}

function DailyChallenge({ onPlay }) {
  return (
    <div className="mg-card mg-rail__card mg-daily">
      <header className="mg-daily__head">
        <span className="mg-eyebrow" style={{color:"#A5B4FC"}}>Daily Challenge</span>
        <span className="mg-mono mg-daily__timer">New in 12:34:56</span>
      </header>
      <div className="mg-daily__row">
        <div className="mg-daily__body">
          <h4 className="mg-h4" style={{margin:0}}>Knight Tour</h4>
          <div className="mg-daily__meta">8×8 · <span style={{color:"#FCA5A5"}}>Hard</span></div>
          <p className="mg-body-sm" style={{margin:"8px 0 14px"}}>Can you complete the tour in 32 moves?</p>
          <button className="mg-btn mg-btn--primary" onClick={onPlay}>
            <ITrophy size={14}/>Play Challenge
          </button>
        </div>
        <div className="mg-daily__board">
          {Array.from({length: 36}).map((_, i) => {
            const r = Math.floor(i/6), c = i%6;
            const isPiece = r===3 && c===2;
            return <div key={i} className={"mg-daily__cell " + ((r+c)%2 ? "d" : "l") + (isPiece ? " p" : "")}>{isPiece && "♞"}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProgressCard, StreakCard, DailyChallenge });
