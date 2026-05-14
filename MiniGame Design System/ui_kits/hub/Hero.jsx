// Hero.jsx — hero banner with gradient panel + knight piece + Play Now CTA.
function Hero({ onPlay }) {
  return (
    <section className="mg-hero">
      <img src="../../assets/starfield.svg" alt="" className="mg-hero__stars"/>
      <div className="mg-hero__inner">
        <div className="mg-hero__copy">
          <h1 className="mg-hero__title">
            Train Your Brain<br/>
            <span className="mg-text-grad">With Logic Games</span>
          </h1>
          <p className="mg-hero__sub">Challenge yourself. Improve your skills.<br/>Become a logic master.</p>
          <button className="mg-btn mg-btn--primary mg-btn--lg" onClick={onPlay}>
            <IPlay size={16}/>Play Now
          </button>
        </div>
        <div className="mg-hero__art">
          {/* Stylized knight silhouette */}
          <svg viewBox="0 0 220 240" className="mg-hero__knight" aria-hidden="true">
            <defs>
              <linearGradient id="hk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1B2440"/>
                <stop offset="1" stopColor="#0F172A"/>
              </linearGradient>
              <radialGradient id="hkglow" cx=".5" cy="1" r=".6">
                <stop offset="0" stopColor="#A855F7" stopOpacity=".7"/>
                <stop offset="1" stopColor="#A855F7" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <ellipse cx="110" cy="222" rx="78" ry="14" fill="url(#hkglow)"/>
            <path d="M70 210 L150 210 L160 220 L60 220 Z" fill="#1E1B4B"/>
            <rect x="74" y="194" width="72" height="18" rx="3" fill="#312E81"/>
            <path d="M88 194
                     C 82 168, 92 148, 78 134
                     C 74 130, 76 124, 82 122
                     L 96 110
                     C 100 92, 110 76, 130 72
                     C 156 68, 170 84, 168 110
                     C 168 128, 158 140, 148 150
                     L 146 178
                     L 142 194 Z"
                  fill="url(#hk)" stroke="#4338CA" strokeWidth="1.5"/>
            <circle cx="138" cy="106" r="3.5" fill="#A5B4FC"/>
            <path d="M120 98 L116 92 L122 90 Z" fill="#A5B4FC"/>
            <path d="M150 80 L162 76 L160 92 Z" fill="#312E81"/>
            <path d="M150 80 L162 76 L160 92" stroke="#818CF8" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
