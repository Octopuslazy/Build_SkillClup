// Shell.jsx — top NavBar, left Sidebar, player card, footer feature strip.

function NavBar({ onSearch }) {
  return (
    <div className="mg-nav">
      <a className="mg-nav__brand" href="#">
        <img src="../../assets/logomark.svg" alt="" width="36" height="36"/>
        <div className="mg-nav__wm">
          <span>MINI<em>GAME</em></span>
          <small>TRAIN YOUR BRAIN</small>
        </div>
      </a>
      <nav className="mg-nav__items">
        <a className="active"><IGames size={18}/>Games</a>
        <a><ICalendar size={18}/>Daily Challenge</a>
        <a><ITrophy size={18}/>Leaderboard</a>
        <a><IStar size={18}/>Achievements</a>
      </nav>
      <div className="mg-nav__right">
        <button className="mg-iconbtn" aria-label="Search"><ISearch size={18}/></button>
        <button className="mg-iconbtn" aria-label="Notifications"><IBell size={18}/><span className="mg-iconbtn__badge">2</span></button>
        <div className="mg-avatar"/>
      </div>
    </div>
  );
}

function Sidebar({ current, onNav }) {
  const items = [
    { id: "home",      label: "Home",            Icon: IHome },
    { id: "games",     label: "Games",           Icon: IGames },
    { id: "daily",     label: "Daily Challenge", Icon: ICalendar },
    { id: "leader",    label: "Leaderboard",     Icon: ITrophy },
    { id: "achv",      label: "Achievements",    Icon: IStar },
    { id: "profile",   label: "Profile",         Icon: IUser },
    { id: "settings",  label: "Settings",        Icon: ISettings },
  ];
  return (
    <aside className="mg-side">
      <nav>
        {items.map(it => (
          <a key={it.id}
             className={"mg-side__item" + (current === it.id ? " is-active" : "")}
             onClick={() => onNav?.(it.id)}>
            <it.Icon size={20}/>{it.label}
          </a>
        ))}
      </nav>
      <PlayerCard/>
    </aside>
  );
}

function PlayerCard() {
  return (
    <div className="mg-player">
      <div className="mg-player__row">
        <div className="mg-player__avatar"/>
        <div>
          <div className="mg-player__name">BrainMaster</div>
          <div className="mg-player__lvl">Level 23</div>
        </div>
      </div>
      <div className="mg-player__bar">
        <div className="mg-player__fill" style={{width:"62%"}}/>
      </div>
      <div className="mg-player__xp"><span>1,240</span><span>/ 2,000 XP</span></div>
    </div>
  );
}

function FeatureStrip() {
  const items = [
    { Icon: IBrain,   t: "Improve Logic",    s: "Sharpen your mind" },
    { Icon: ICalendar,t: "Daily Challenges", s: "New puzzles every day" },
    { Icon: IMedal,   t: "Achievements",     s: "Unlock & collect badges" },
    { Icon: ITrophy,  t: "Global Leaderboard", s: "Compete with players" },
    { Icon: IPalette, t: "Multiple Themes",  s: "Play your way" },
  ];
  return (
    <div className="mg-feat">
      {items.map((it, i) => (
        <div key={i} className="mg-feat__item">
          <span className="mg-feat__icon"><it.Icon size={22}/></span>
          <div>
            <div className="mg-feat__t">{it.t}</div>
            <div className="mg-feat__s">{it.s}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { NavBar, Sidebar, PlayerCard, FeatureStrip });
