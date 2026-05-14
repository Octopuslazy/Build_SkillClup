// icons.jsx — inline Lucide SVGs, stroke 1.75, size from prop
const Icon = ({ d, size = 20, stroke = 1.75, fill = "none", style, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
       strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {children || <path d={d} />}
  </svg>
);

const IHome = (p) => <Icon {...p}><path d="M3 12 12 3l9 9"/><path d="M5 10v10h14V10"/></Icon>;
const IGames = (p) => <Icon {...p}><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/></Icon>;
const ICalendar = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></Icon>;
const ITrophy = (p) => <Icon {...p}><path d="M6 9V2h12v7"/><path d="M6 9a6 6 0 0 0 12 0"/><path d="M9 22h6M12 17v5"/><path d="M21 5h-3M3 5h3"/></Icon>;
const IStar = (p) => <Icon {...p} fill="currentColor"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/></Icon>;
const IUser  = (p) => <Icon {...p}><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></Icon>;
const ISearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></Icon>;
const IBell = (p) => <Icon {...p}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></Icon>;
const ISettings = (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></Icon>;
const IPlay  = (p) => <Icon {...p} fill="currentColor" stroke="none"><polygon points="6 4 20 12 6 20 6 4"/></Icon>;
const IUndo  = (p) => <Icon {...p}><polyline points="3 7 3 13 9 13"/><path d="M3.5 13a9 9 0 1 0 2.13-9.36L3 7"/></Icon>;
const IBulb  = (p) => <Icon {...p}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3v1h6v-1c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"/></Icon>;
const IRotate = (p) => <Icon {...p}><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></Icon>;
const IBack  = (p) => <Icon {...p}><polyline points="15 18 9 12 15 6"/></Icon>;
const IFire  = (p) => <Icon {...p} fill="currentColor" stroke="none"><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 1-3s-3 2-3 6a6 6 0 0 0 12 0c0-7-6-11-6-11z"/></Icon>;
const ICheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const IBrain = (p) => <Icon {...p}><path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3 3 3 0 0 0 3-3V4a3 3 0 0 0-3 0z"/><path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3 3 3 0 0 1-3-3V4a3 3 0 0 1 3 0z"/></Icon>;
const IMedal = (p) => <Icon {...p}><circle cx="12" cy="15" r="6"/><path d="M8 9 5 3h14l-3 6"/></Icon>;
const IPalette = (p) => <Icon {...p}><circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2a10 10 0 1 0 0 20 4 4 0 0 0 0-8 4 4 0 0 1 0-8 10 10 0 0 0 0-4z"/></Icon>;
const IChevron = (p) => <Icon {...p}><polyline points="9 18 15 12 9 6"/></Icon>;
const IPause = (p) => <Icon {...p} fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></Icon>;
const IUsers = (p) => <Icon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;

Object.assign(window, { Icon, IHome, IGames, ICalendar, ITrophy, IStar, IUser, ISearch, IBell, ISettings, IPlay, IUndo, IBulb, IRotate, IBack, IFire, ICheck, IBrain, IMedal, IPalette, IChevron, IPause, IUsers });
