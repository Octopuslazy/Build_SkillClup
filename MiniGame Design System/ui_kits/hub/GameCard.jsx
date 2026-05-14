// GameCard.jsx — featured game thumbnail card
function GameCard({ game, onPlay }) {
  return (
    <article className={"mg-gc" + (game.hot ? " is-hot" : "")} onClick={onPlay}>
      {game.hot && <span className="mg-gc__hot">HOT</span>}
      <div className={"mg-gc__thumb mg-gc__thumb--" + game.tone}>
        <div className="mg-gc__art" dangerouslySetInnerHTML={{__html: game.art}}/>
      </div>
      <div className="mg-gc__body">
        <h3 className="mg-gc__title">{game.title}</h3>
        <p className="mg-gc__sub">{game.sub}</p>
        <div className="mg-gc__meta">
          <div className="mg-gc__metaleft">
            <span className={"mg-pill mg-pill--" + game.difficulty.toLowerCase()}>{game.difficulty}</span>
            <span className="mg-gc__stat"><IStar size={11}/> {game.rating}</span>
            <span className="mg-gc__stat"><IUsers size={11}/> {game.players}</span>
          </div>
          <button className="mg-gc__play" aria-label={"Play " + game.title}><IPlay size={14}/></button>
        </div>
      </div>
    </article>
  );
}

const GAMES = [
  {
    id:"knight", title:"Knight Tour", sub:"Find the knight's path",
    difficulty:"Hard", rating:"4.8", players:"1.2K", hot:true, tone:"violet",
    art:`<svg viewBox='0 0 120 120'><defs><linearGradient id='k1' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#1B2440'/><stop offset='1' stop-color='#0F172A'/></linearGradient></defs>
      <ellipse cx='60' cy='112' rx='38' ry='6' fill='#A855F7' opacity='.45'/>
      <rect x='36' y='98' width='48' height='12' rx='2' fill='#312E81'/>
      <path d='M44 98 C40 80 50 68 42 60 C40 56 42 52 46 52 L56 44 C58 32 64 22 78 20 C94 18 104 28 102 44 C102 58 96 66 88 74 L88 92 L84 98 Z' fill='url(#k1)' stroke='#4338CA' stroke-width='1'/>
      <circle cx='82' cy='40' r='2.2' fill='#A5B4FC'/></svg>`
  },
  {
    id:"queens", title:"8 Queens", sub:"Place 8 queens",
    difficulty:"Medium", rating:"4.7", players:"980", tone:"amber",
    art:`<svg viewBox='0 0 120 120'><defs><linearGradient id='q1' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#1B2440'/><stop offset='1' stop-color='#0F172A'/></linearGradient></defs>
      <ellipse cx='60' cy='110' rx='34' ry='5' fill='#F59E0B' opacity='.4'/>
      <rect x='40' y='94' width='40' height='14' rx='2' fill='#312E81'/>
      <path d='M50 94 L48 70 L40 60 L48 62 L46 44 L56 56 L60 30 L64 56 L74 44 L72 62 L80 60 L72 70 L70 94 Z' fill='url(#q1)' stroke='#4338CA' stroke-width='1'/>
      <circle cx='60' cy='30' r='3' fill='#FACC15'/>
      <circle cx='48' cy='62' r='2' fill='#FCD34D'/>
      <circle cx='72' cy='62' r='2' fill='#FCD34D'/></svg>`
  },
  {
    id:"lights", title:"Lights Out", sub:"Turn off all the lights",
    difficulty:"Easy", rating:"4.6", players:"864", tone:"cyan",
    art:`<svg viewBox='0 0 120 120'>
      <g transform='translate(20 20)'>
        <rect x='0'  y='0'  width='22' height='22' rx='5' fill='#22D3EE'/>
        <rect x='28' y='0'  width='22' height='22' rx='5' fill='#1B2A40'/>
        <rect x='56' y='0'  width='22' height='22' rx='5' fill='#22D3EE'/>
        <rect x='0'  y='28' width='22' height='22' rx='5' fill='#1B2A40'/>
        <rect x='28' y='28' width='22' height='22' rx='5' fill='#22D3EE'/>
        <rect x='56' y='28' width='22' height='22' rx='5' fill='#1B2A40'/>
        <rect x='0'  y='56' width='22' height='22' rx='5' fill='#22D3EE'/>
        <rect x='28' y='56' width='22' height='22' rx='5' fill='#1B2A40'/>
        <rect x='56' y='56' width='22' height='22' rx='5' fill='#22D3EE'/>
      </g></svg>`
  },
  {
    id:"cube", title:"Cube Puzzle", sub:"Solve the cube",
    difficulty:"Expert", rating:"4.9", players:"643", tone:"red",
    art:`<svg viewBox='0 0 120 120'>
      <g transform='translate(60 60)'>
        <polygon points='0,-40 35,-20 35,20 0,40 -35,20 -35,-20' fill='#1B2440'/>
        <polygon points='0,-40 35,-20 0,0 -35,-20' fill='#EF4444'/>
        <polygon points='35,-20 35,20 0,40 0,0' fill='#F59E0B'/>
        <polygon points='-35,-20 0,0 0,40 -35,20' fill='#6366F1'/>
        <line x1='0' y1='-40' x2='0' y2='0' stroke='rgba(0,0,0,.4)' stroke-width='1'/>
        <line x1='35' y1='-20' x2='0' y2='0' stroke='rgba(0,0,0,.3)' stroke-width='1'/>
        <line x1='-35' y1='-20' x2='0' y2='0' stroke='rgba(0,0,0,.3)' stroke-width='1'/>
      </g></svg>`
  },
];

Object.assign(window, { GameCard, GAMES });
