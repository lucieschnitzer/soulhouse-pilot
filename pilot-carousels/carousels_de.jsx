/* global React */

// ============================================================
// SOULHOUSE × DEFAULT RESILIENT METHOD — Instagram Carousels
// ============================================================

// ---------- shared atoms ----------
const SlideCounter = ({ i, n }) => (
  <div className="slide-counter">
    <span>{String(i).padStart(2,'0')}</span>
    <span className="sep">/</span>
    <span>{String(n).padStart(2,'0')}</span>
  </div>
);

const Lockup = ({ onDark }) => (
  <div className="lockup">
    <span className="serif">Soulhouse</span>
    <span className="x">×</span>
    <span className="serif italic">The Default Resilient Method</span>
  </div>
);

const CoralRule = ({ style }) => <span className="coral-rule" style={style} />;

const SwipeArrow = () => (
  <div className="swipe-arrow" aria-hidden>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const SlideShell = ({ variant = "paper", i, n, children }) => (
  <div className={`slide ${variant === 'dark' ? 'slide--dark' : variant === 'white' ? 'slide--white' : ''}`}>
    <SlideCounter i={i} n={n} />
    <div className="slide-inner">{children}</div>
  </div>
);

// Image slot placeholder (rendered as gradient rectangle with slot # + caption)
const ImageSlot = ({ n, caption, variant = 'warm', style, children, overlay }) => (
  <div className={`img-slot ${variant === 'cool' ? 'img-slot--cool' : variant === 'still' ? 'img-slot--still' : ''}`} style={style}>
    <div className="tag">IMG SLOT · {String(n).padStart(2,'0')}</div>
    <div className="cap">{caption}</div>
    {overlay}
    {children}
  </div>
);

// ---------- data shapes ----------

const PhaseArc = () => (
  <div className="phase-arc">
    <svg viewBox="0 0 280 110" fill="none">
      {/* curve */}
      <path d="M 10 85 Q 60 10, 140 40 Q 200 62, 230 90" stroke="#EA725F" strokeWidth="1.25" strokeLinecap="round" fill="none"/>
      {/* broken segment to final node */}
      <path d="M 234 92 L 246 95" stroke="#D3D3D3" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="2 3"/>
      {/* nodes */}
      <circle cx="10" cy="85" r="3" fill="#EA725F"/>
      <circle cx="75" cy="32" r="4" fill="#EA725F"/>
      <circle cx="140" cy="22" r="5.5" fill="#F75C43"/>
      <circle cx="200" cy="58" r="4" fill="#EA725F"/>
      <circle cx="260" cy="98" r="3" fill="#D3D3D3"/>
      {/* labels */}
      <g fontFamily="Manrope" fontWeight="700" fontSize="6.2" letterSpacing="1.4" fill="#515151" textAnchor="middle">
        <text x="10" y="103">AUSLÖSER</text>
        <text x="75" y="20">GASPEDAL</text>
        <text x="75" y="27">STEIGT</text>
        <text x="140" y="10">HÖCHSTAKTIVIERUNG</text>
        <text x="200" y="46">BREMSE GREIFT</text>
        <text x="258" y="108" fill="#A8A8A8">RÜCKKEHR ZUM DEFAULT</text>
      </g>
    </svg>
  </div>
);

const GasPedalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 19V5" strokeLinecap="round"/>
    <path d="M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const BrakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12h14" strokeLinecap="round"/>
  </svg>
);

const GasBrake = () => (
  <div className="gas-brake">
    <div className="gbi gbi--accent">
      <div className="gbi-icon"><GasPedalIcon/></div>
      <div className="lbl">Gaspedal</div>
    </div>
    <div className="gbi-arrow">
      <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M4 10h12M11 6l5 4-5 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="gbi gbi--muted">
      <div className="gbi-icon"><BrakeIcon/></div>
      <div className="lbl">Bremse</div>
    </div>
  </div>
);

const XSection = ({ showSensors }) => (
  <div className="xsection">
    <div className="layer layer--surface">
      <span className="lbl">Oberfläche</span>
      <div className="glyphs">
        {/* bodywork hands */}
        <svg viewBox="0 0 32 14" width="34" height="14" fill="none" stroke="#515151" strokeWidth="1.2">
          <path d="M4 10c0-3 2-5 4-5s2 2 4 2 2-2 4-2 4 2 4 5" strokeLinecap="round"/>
          <path d="M8 10v2M12 10v2M16 10v2M20 10v2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
    <div className="layer layer--pattern">
      <span className="lbl">Muster</span>
      <div className="glyphs">
        {showSensors && (
          <React.Fragment>
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="#252525" strokeWidth="1.2">
              <circle cx="7" cy="7" r="5"/>
              <path d="M3 7h8M7 3v8" strokeLinecap="round"/>
            </svg>
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="#252525" strokeWidth="1.2">
              <rect x="2" y="5" width="10" height="5" rx="1"/>
              <path d="M4 5V3M10 5V3" strokeLinecap="round"/>
            </svg>
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
);

const MeterRow = ({ heights = [70, 90, 55, 78], labels = ['Bremse','Gaspedal','Körperspannung','Denkendes Hirn'], colors }) => (
  <div className="meter-row" style={{height: 110}}>
    {heights.map((h, idx) => (
      <div className="meter-col" key={idx}>
        <div className="meter-bar" style={{height: h + 'px', background: colors ? colors[idx] : undefined, opacity: colors && colors[idx] === 'muted' ? 0.45 : 1}}/>
        <div className="lbl">{labels[idx]}</div>
      </div>
    ))}
  </div>
);

// Recovery arc (Pain 1.4)
const RecoveryArc = () => (
  <div className="phase-arc">
    <svg viewBox="0 0 280 120" fill="none">
      <line x1="10" y1="85" x2="270" y2="85" stroke="#E8E6E3" strokeWidth="1" strokeDasharray="3 3"/>
      <path d="M 15 85 Q 55 85, 75 45 Q 110 18, 155 30 Q 195 50, 220 62 Q 240 70, 250 55" stroke="#EA725F" strokeWidth="1.25" strokeLinecap="round" fill="none"/>
      <line x1="250" y1="55" x2="250" y2="85" stroke="#A8A8A8" strokeWidth="1" strokeDasharray="2 3" strokeLinecap="round"/>
      <circle cx="15" cy="85" r="3" fill="#A8A8A8"/>
      <circle cx="75" cy="45" r="3.5" fill="#EA725F"/>
      <circle cx="140" cy="26" r="5" fill="#F75C43"/>
      <circle cx="220" cy="62" r="3.5" fill="#EA725F"/>
      <circle cx="250" cy="55" r="4" fill="#F75C43" stroke="#fff" strokeWidth="1"/>
      <g fontFamily="Manrope" fontWeight="700" fontSize="5.8" letterSpacing="1.2" fill="#515151" textAnchor="middle">
        <text x="15" y="103">RUHE</text>
        <text x="75" y="33">STRESSOR TRIFFT</text>
        <text x="140" y="14">STRESSOR DAUERT AN</text>
        <text x="220" y="75">STRESSOR ENDET</text>
        <text x="238" y="43" fill="#F75C43">VOLLE ERHOLUNG</text>
        <text x="238" y="49" fill="#F75C43">(NIE ERREICHT)</text>
      </g>
    </svg>
  </div>
);

// Stair-step waves (Pain 1.5)
const StairWaves = () => (
  <div className="phase-arc">
    <svg viewBox="0 0 280 130" fill="none">
      {Array.from({length: 5}).map((_, i) => {
        const yBase = 18 + i * 22;
        const amp = 7 - i * 0.8;
        const op = 1 - i * 0.14;
        let d = `M 10 ${yBase}`;
        for (let x = 10; x <= 270; x += 8) {
          const y = yBase + Math.sin((x - 10) / 18) * amp;
          d += ` L ${x} ${y.toFixed(1)}`;
        }
        return <path key={i} d={d} stroke="#EA725F" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity={op}/>;
      })}
      <path d="M 254 18 L 258 116" stroke="#A8A8A8" strokeWidth="0.8" strokeDasharray="2 3"/>
      <path d="M 254 116 L 258 120 L 262 116" stroke="#A8A8A8" strokeWidth="0.8" fill="none"/>
    </svg>
  </div>
);

// Empty DRI ring (Pain 1.6)
const DRIRingEmpty = () => {
  const r = 58, c = 2 * Math.PI * r;
  return (
    <div className="dri">
      <svg viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} stroke="rgba(255,255,255,0.15)" strokeWidth="6" fill="none"/>
        <circle cx="70" cy="70" r={r} stroke="rgba(255,255,255,0.25)" strokeWidth="6" fill="none"
                strokeLinecap="round"
                strokeDasharray={`6 ${c - 6}`}/>
      </svg>
      <div style={{textAlign:'center', position:'relative'}}>
        <div className="num" style={{color:'rgba(255,255,255,0.55)', fontSize: 40}}>— / 100</div>
        <div className="unit" style={{color:'rgba(255,255,255,0.45)'}}>DRI</div>
      </div>
    </div>
  );
};

// Binary chips (Pain 1.2)
const BinaryChips = () => (
  <div className="binary-chips">
    <span className="bchip">Resilient</span>
    <span className="slash">/</span>
    <span className="bchip bchip--active">Vulnerabel</span>
  </div>
);

// Four-pattern chips (Method 2.5, Offer 3.5)
const FourPatternChips = ({ active = 'Stress-vulnerabel', variant = 'active' }) => {
  const items = ['Ruhig & stabil', 'Stress-resilient', 'Unterreaktiv', 'Stress-vulnerabel'];
  return (
    <div className="four-chips">
      {items.map((x, i) => (
        <React.Fragment key={x}>
          <span className={`pchip ${x === active ? (variant === 'training' ? 'pchip--training' : 'pchip--active') : ''}`}>{x}</span>
          {i < 3 && <span className="dot">·</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

const FourPatternChipsMuted = () => {
  const items = ['Ruhig & stabil', 'Stress-resilient', 'Unterreaktiv', 'Stress-vulnerabel'];
  return (
    <div className="four-chips">
      {items.map((x, i) => (
        <React.Fragment key={x}>
          <span className="pchip">{x}</span>
          {i < 3 && <span className="dot">·</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

// PNS pathway — Somatic input → Autonomic shift, with assessment reading the autonomic directly
const NSBranches = ({ labels }) => {
  const L = labels || {
    somaticEyebrow: 'Soulhouse setzt hier an',
    somatic: 'Somatisch',
    somaticSub: 'Berührung · Atem · Bewegung',
    arrow: 'verschiebt',
    autonomicEyebrow: 'Eigentliches Ziel · was den Zustand verändert',
    autonomic: 'Autonom',
    autonomicSub: 'Bremse · Gas · Herz · Atem',
    assessmentLabel: 'Assessment liest hier',
    together: 'Gleiches Ziel. Messung macht den Weg schärfer.',
  };
  return (
    <div className="ns-branches">
      <div className="ns-flow">
        <div className="ns-node">
          <div className="ns-col-eyebrow">{L.somaticEyebrow}</div>
          <div className="ns-col-name">{L.somatic}</div>
          <div className="ns-col-sub">{L.somaticSub}</div>
        </div>
        <svg className="ns-arrow" viewBox="0 0 60 40" fill="none" aria-hidden="true">
          <path d="M4 20 L52 20" stroke="#B8B0A4" strokeWidth="1.25" strokeLinecap="round"/>
          <path d="M46 14 L54 20 L46 26" stroke="#B8B0A4" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <text x="30" y="14" textAnchor="middle" fontFamily="GT Sectra, Sectra, serif" fontStyle="italic" fontSize="10" fill="#757575">{L.arrow}</text>
        </svg>
        <div className="ns-node ns-node--accent">
          <div className="ns-col-eyebrow">{L.autonomicEyebrow}</div>
          <div className="ns-col-name">{L.autonomic}</div>
          <div className="ns-col-sub">{L.autonomicSub}</div>
          <div className="ns-tapin">
            <svg viewBox="0 0 40 22" fill="none" aria-hidden="true">
              <path d="M20 2 L20 18" stroke="#EA725F" strokeWidth="1.25" strokeDasharray="2 3"/>
              <circle cx="20" cy="2" r="2.5" fill="#EA725F"/>
            </svg>
            <div className="ns-tapin-label">{L.assessmentLabel}</div>
          </div>
        </div>
      </div>
      <div className="ns-together">
        <span className="ns-together-rule"/>
        <span className="ns-together-text">{L.together}</span>
        <span className="ns-together-rule"/>
      </div>
    </div>
  );
};

const DRIRing = ({ value = 64, size = 'lg' }) => {
  const pct = value / 100;
  const r = 58, c = 2 * Math.PI * r;
  return (
    <div className={`dri ${size === 'sm' ? 'dri--sm' : ''}`}>
      <svg viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} stroke="#E8E6E3" strokeWidth="6" fill="none"/>
        <circle cx="70" cy="70" r={r} stroke="#EA725F" strokeWidth="6" fill="none"
                strokeLinecap="round"
                strokeDasharray={`${c*pct} ${c}`}/>
      </svg>
      <div style={{textAlign:'center', position:'relative'}}>
        <div className="num">{value}</div>
        <div className="unit">DRI / 100</div>
      </div>
    </div>
  );
};

const PatternChips = ({ active, variant = 'pattern' }) => {
  const items = ['Geerdet','Adaptiv','Leise','Aktiviert'];
  return (
    <div className="chip-row">
      {items.map(x => (
        <span key={x} className={`chip ${x === active ? 'chip--active' : ''} ${variant === 'training' ? 'chip--training' : ''}`}>
          {x}
        </span>
      ))}
    </div>
  );
};

const GermanyMap = () => (
  <div className="de-map">
    <svg viewBox="0 0 280 130" fill="none">
      {/* simplified northern germany outline */}
      <path d="M 20 50
               Q 45 20, 95 28
               Q 140 18, 180 26
               Q 230 20, 260 45
               L 255 75
               Q 240 95, 210 100
               Q 180 110, 150 108
               Q 110 115, 80 108
               Q 45 100, 28 85 Z"
            fill="#EDEAE2" stroke="#CFC8BB" strokeWidth="1"/>
      {/* dots */}
      <line x1="90" y1="55" x2="205" y2="70" stroke="#EA725F" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
      <circle cx="90" cy="55" r="5" fill="#EA725F"/>
      <circle cx="205" cy="70" r="5" fill="#EA725F"/>
      <circle cx="90" cy="55" r="10" fill="none" stroke="#EA725F" strokeWidth="0.8" opacity="0.45"/>
      <circle cx="205" cy="70" r="10" fill="none" stroke="#EA725F" strokeWidth="0.8" opacity="0.45"/>
      <g fontFamily="Manrope" fontWeight="700" fontSize="8" letterSpacing="1.6" fill="#252525">
        <text x="90" y="45" textAnchor="middle">HAMBURG</text>
        <text x="205" y="60" textAnchor="middle">BERLIN</text>
      </g>
    </svg>
  </div>
);

// five system icons row
const SysIcon = ({ kind }) => {
  const common = { width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 };
  switch (kind) {
    case 'heart': return <svg viewBox="0 0 24 24" {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z" strokeLinejoin="round"/></svg>;
    case 'lungs': return <svg viewBox="0 0 24 24" {...common}><path d="M12 4v10M8 8c-2 2-4 5-4 8a2 2 0 002 2h2V8zM16 8c2 2 4 5 4 8a2 2 0 01-2 2h-2V8z" strokeLinejoin="round"/></svg>;
    case 'skin': return <svg viewBox="0 0 24 24" {...common}><path d="M4 6 Q 8 8, 12 6 T 20 6 M4 12 Q 8 14, 12 12 T 20 12 M4 18 Q 8 20, 12 18 T 20 18"/></svg>;
    case 'muscle': return <svg viewBox="0 0 24 24" {...common}><path d="M6 14c0-4 3-7 6-7 3 0 4 2 6 4l-2 2c-2-1-3-2-4-2-3 0-3 3-3 6l-3-3z" strokeLinejoin="round"/></svg>;
    case 'brain': return <svg viewBox="0 0 24 24" {...common}><path d="M9 6a3 3 0 00-3 3v2a3 3 0 000 6h9a3 3 0 003-3v-2a3 3 0 00-1-5 3 3 0 00-5-1 3 3 0 00-3 0zM12 9v9" strokeLinejoin="round"/></svg>;
  }
};

const FiveSystemRow = () => {
  const items = [
    {k:'heart', l:'Herz'},
    {k:'lungs', l:'Atmung'},
    {k:'skin', l:'Elektrodermal'},
    {k:'muscle', l:'Muskulär'},
    {k:'brain', l:'Präfrontal'},
  ];
  return (
    <div className="sysrow">
      {items.map(x => (
        <div className="sysi" key={x.k}>
          <SysIcon kind={x.k}/>
          <svg className="wave" viewBox="0 0 30 10" fill="none" stroke="#EA725F" strokeWidth="1">
            <path d="M0 5 L4 5 L6 2 L10 8 L14 3 L18 7 L22 5 L30 5" strokeLinecap="round"/>
          </svg>
          <div className="lbl">{x.l}</div>
        </div>
      ))}
    </div>
  );
};

// connecting lines from icons to ring (for 4.5)
const SystemConnectToRing = () => (
  <svg viewBox="0 0 280 30" style={{width:'100%', height: 24, display:'block'}} fill="none">
    <g stroke="#EA725F" strokeWidth="0.9" strokeLinecap="round" opacity="0.7">
      <path d="M28 0 Q 28 15, 140 28"/>
      <path d="M84 0 Q 84 15, 140 28"/>
      <path d="M140 0 L 140 28"/>
      <path d="M196 0 Q 196 15, 140 28"/>
      <path d="M252 0 Q 252 15, 140 28"/>
    </g>
  </svg>
);

// ============================================================
// CAROUSELS
// ============================================================

// CAROUSEL 0 — Intro (5 slides)
const Carousel0 = () => {
  const n = 5;
  return (
    <CarouselRow tag="Karussell 0 · Intro" title="Die Partnerschaft, in fünf Slides." slideCount={n}>
      {/* 0.1 Title */}
      <SlideShell variant="paper" i={1} n={n}>
        <div className="flex-col-between">
          <Lockup/>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h2 className="display display-xl center-text">
              Eine neue Nervensystem-<br/>Regulations-Methode,<br/><em className="italic" style={{color:'var(--accent)'}}>jetzt bei Soulhouse.</em>
            </h2>
            <CoralRule style={{marginTop:8}}/>
          </div>
          <div className="label-line" style={{textAlign:'center'}}>Hamburg + Berlin &nbsp;·&nbsp; Mai – Juni 2026</div>
        </div>
      </SlideShell>

      {/* 0.2 Warum diese Partnerschaft — split */}
      <SlideShell variant="paper" i={2} n={n}>
        <div style={{display:'grid', gridTemplateRows:'60% 40%', gap:14, height:'100%', margin:'-22px -22px -24px'}}>
          <ImageSlot n={1} caption="Soulhouse-Studio innen — goldenes Abendlicht im Wellness-Raum, ein Sitz, Sensorkabel ruhen auf einem Beistelltisch." variant="warm"/>
          <div style={{padding:'14px 22px 22px', display:'flex', flexDirection:'column', gap:8}}>
            <div className="eyebrow">Warum diese Partnerschaft</div>
            <h3 className="display display-md" style={{fontStyle:'italic'}}>
              Soulhouse hat den Raum für Nervensystem-Arbeit gebaut. Die Default Resilient Methode bringt die Messebene hinzu.
            </h3>
          </div>
        </div>
      </SlideShell>

      {/* 0.3 One-line story */}
      <SlideShell variant="paper" i={3} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow">Der Pilot</div>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h2 className="display display-xl center-text" style={{lineHeight:1.05}}>
              <span className="italic">Fünfzig</span> Assessments.<br/>
              <span className="italic">Zwei</span> Städte.<br/>
              <span className="italic">Zwei</span> Wochen.
            </h2>
            <CoralRule style={{marginTop:10}}/>
            <div className="sub center-text" style={{maxWidth:220, fontStyle:'italic'}}>
              Neunzig Minuten pro Assessment. Ein Score. Ein benanntes Muster. Eine Karte.
            </div>
          </div>
          <div/>
        </div>
      </SlideShell>

      {/* 0.4 Diese Woche — 4 cards */}
      <SlideShell variant="paper" i={4} n={n}>
        <div className="flex-col-between">
          <div style={{display:'flex', flexDirection:'column', gap:14, alignItems:'center'}}>
            <div className="eyebrow">Diese Woche</div>
            <h3 className="display display-md center-text" style={{margin:0}}>Vier Posts. Ein Pilot.</h3>
          </div>
          <div className="num-cards" style={{marginTop:10}}>
            <div className="num-card"><div className="n">01</div><div className="t">Schmerz</div><div className="d">Warum der Default sich immer wieder zurücksetzt.</div></div>
            <div className="num-card"><div className="n">02</div><div className="t">Methode</div><div className="d">Wie er gemessen wird.</div></div>
            <div className="num-card"><div className="n">03</div><div className="t">Angebot</div><div className="d">Was du danach mitnimmst.</div></div>
            <div className="num-card"><div className="n">04</div><div className="t">FAQ</div><div className="d">Zwei Fragen, die geklärt werden sollten.</div></div>
          </div>
          <div className="label-line" style={{textAlign:'center'}}>Täglich gepostet · @soulhouse.me</div>
        </div>
      </SlideShell>

      {/* 0.5 End slide CTA */}
      <SlideShell variant="dark" i={5} n={n}>
        <div className="flex-col-between">
          <Lockup onDark/>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h2 className="display display-lg center-text" style={{maxWidth:240}}>
              Zu Gast bei <span className="italic">Soulhouse</span><br/>Hamburg und Berlin.
            </h2>
            <CoralRule style={{marginTop:6}}/>
            <div className="label-line" style={{color:'rgba(255,255,255,0.55)', textAlign:'center', maxWidth:220}}>
              Folge uns und sieh den Piloten live · Bewerben unten
            </div>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="cta-chip cta-chip--filled">Link in Bio antippen. Bewerben.</button>
          </div>
        </div>
      </SlideShell>
    </CarouselRow>
  );
};

// CAROUSEL 1 — Schmerz (6 slides, all-typographic)
const Carousel1 = () => {
  const n = 6;
  return (
    <CarouselRow tag="Karussell 1 · Schmerz" title="Nicht jeder Default ist resilient." slideCount={n}>
      {/* 1.1 Hook */}
      <SlideShell variant="paper" i={1} n={n}>
        <div className="flex-col-between">
          <div/>
          <div>
            <h2 className="display display-lg center-text" style={{marginBottom:14}}>
              Dein Nervensystem hat einen <span className="italic">Default.</span><br/>
              Und er setzt sich <span className="italic" style={{color:'var(--accent)'}}>immer wieder zurück.</span>
            </h2>
            <PhaseArc/>
          </div>
          <div className="label-line" style={{textAlign:'center'}}>Fünf Phasen · ein Zyklus</div>
        </div>
      </SlideShell>

      {/* 1.2 Binary — resilient / vulnerable */}
      <SlideShell variant="paper" i={2} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Die Binärität</div>
          <div>
            <h3 className="display display-md center-text" style={{marginBottom:18}}>
              Nicht jeder Default ist <span className="italic">resilient.</span>
            </h3>
            <BinaryChips/>
          </div>
          <div className="sub center-text italic" style={{maxWidth:260, margin:'0 auto'}}>
            Einer erholt sich. Der andere <span style={{fontStyle:'normal', fontWeight:600, color:'var(--accent)'}}>bleibt hängen.</span>
          </div>
        </div>
      </SlideShell>

      {/* 1.3 Failure mode one — stuck gas, weak brake */}
      <SlideShell variant="paper" i={3} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Versagensmuster · Eins</div>
          <div>
            <h3 className="display display-md center-text" style={{marginBottom:12}}>
              Gaspedal <span className="italic">bleibt gedrückt.</span><br/>
              Bremse <span className="italic">greift nie ganz.</span>
            </h3>
            <MeterRow
              heights={[38, 96, 42, 60]}
              labels={['Bremse','Gaspedal','Körperspannung','Denkendes Hirn']}
              colors={['muted','#EA725F','muted','muted']}
            />
          </div>
          <div className="label-line center-text italic">Dein System steht unter Strom</div>
        </div>
      </SlideShell>

      {/* 1.4 Failure mode two — never fully recovers */}
      <SlideShell variant="paper" i={4} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Versagensmuster · Zwei</div>
          <div>
            <h3 className="display display-md center-text" style={{marginBottom:10}}>
              Die Stress-Antwort <span className="italic">kommt nicht</span><br/>
              ganz zurück in die Ruhe.
            </h3>
            <RecoveryArc/>
          </div>
          <div className="label-line center-text italic">Eine Lücke, die bleibt</div>
        </div>
      </SlideShell>

      {/* 1.5 Stair-step — each cycle lower */}
      <SlideShell variant="paper" i={5} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Über die Zeit</div>
          <div>
            <h3 className="display display-md center-text" style={{marginBottom:12}}>
              Jeder Zyklus startet <span className="italic">tiefer</span><br/>
              als der davor.
            </h3>
            <StairWaves/>
          </div>
          <div className="sub center-text italic" style={{maxWidth:260, margin:'0 auto', fontSize:12, lineHeight:1.45}}>
            Flacher Schlaf · kürzere Zündschnur · Kante, die nicht weggeht
          </div>
        </div>
      </SlideShell>

      {/* 1.6 Unlock — empty DRI */}
      <SlideShell variant="dark" i={6} n={n}>
        <div className="flex-col-between">
          <Lockup onDark/>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <DRIRingEmpty/>
            <h2 className="display display-lg center-text" style={{marginTop:14}}>
              Erst <span className="italic" style={{color:'var(--primary-40)'}}>messen.</span><br/>
              Dann trainieren.
            </h2>
            <CoralRule/>
            <div className="label-line" style={{color:'rgba(255,255,255,0.55)', textAlign:'center'}}>In neunzig Minuten · Soulhouse Hamburg + Berlin</div>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="cta-chip cta-chip--filled">Link in Bio antippen. Bewerben.</button>
          </div>
        </div>
      </SlideShell>
    </CarouselRow>
  );
};

// CAROUSEL 2 — Methode (6 slides)
const Carousel2 = () => {
  const n = 6;
  return (
    <CarouselRow tag="Karussell 2 · Methode" title="Ein Score. Ein Muster. Eine Karte." slideCount={n}>
      {/* 2.1 Hook */}
      <SlideShell variant="paper" i={1} n={n}>
        <div className="flex-col-between">
          <div/>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h2 className="display display-xl center-text">
              Was du nicht <span className="italic">messen</span> kannst, am Nervensystem,<br/>
              kannst du nicht <span className="italic" style={{color:'var(--accent)'}}>trainieren.</span>
            </h2>
            <CoralRule style={{marginTop:10}}/>
          </div>
          <div className="label-line center-text">Die Prämisse</div>
        </div>
      </SlideShell>

      {/* 2.2 Das Kit — full-bleed still life */}
      <div className="slide" style={{padding:0}}>
        <SlideCounter i={2} n={n}/>
        <ImageSlot
          n={4}
          variant="still"
          caption=""
          style={{position:'absolute', inset:0}}
          overlay={
            <div className="image-caption-overlay">
              <div/>
              <div>
                <div className="eyebrow" style={{color:'var(--primary-40)', marginBottom:8}}>Das Kit</div>
                <h3 className="display display-lg" style={{color:'#fff'}}>
                  <span className="italic">Fünf</span> Biomarker.<br/>
                  Forschungsgeräte. <span className="italic">Neunzig Minuten.</span>
                </h3>
              </div>
            </div>
          }
        />
      </div>

      {/* 2.3 Five biomarker systems */}
      <SlideShell variant="paper" i={3} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Fünf physiologische Systeme</div>
          <div>
            <h3 className="display display-md center-text" style={{marginBottom:14}}>
              Fünf Biomarker.<br/><span className="italic">Jeder einzeln gelesen.</span>
            </h3>
            <FiveSystemRow/>
          </div>
          <div className="sub center-text italic">Jeder einzeln gelesen. Jeder bewertet.</div>
        </div>
      </SlideShell>

      {/* 2.4 The score (DRI) */}
      <SlideShell variant="paper" i={4} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Dein Default Resiliency Index</div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:4}}>
            <DRIRing value={64}/>
            <h3 className="display display-md center-text" style={{marginTop:4}}>
              Ein zusammengesetzter Score.
            </h3>
          </div>
          <div className="sub center-text italic">Null bis hundert.</div>
        </div>
      </SlideShell>

      {/* 2.5 The pattern */}
      <SlideShell variant="paper" i={5} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Dein Muster, benannt</div>
          <div>
            <h3 className="display display-md center-text" style={{marginBottom:14}}>
              Eines von <span className="italic">vier Mustern.</span>
            </h3>
            <FourPatternChips active="Stress-vulnerabel"/>
          </div>
          <div className="sub center-text italic">Deins, um davon aus zu trainieren.</div>
        </div>
      </SlideShell>

      {/* 2.6 End + tease */}
      <SlideShell variant="dark" i={6} n={n}>
        <div className="flex-col-between">
          <Lockup onDark/>
          <div style={{display:'flex', flexDirection:'column', gap:4, alignItems:'center'}}>
            <div className="inverse-strip inverse-strip--muted">Das ist das Assessment.</div>
            <div className="inverse-strip inverse-strip--accent">Das Training folgt danach.</div>
          </div>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h3 className="display display-md center-text" style={{maxWidth:240}}>
              Die ersten fünfzig erhalten <span className="italic" style={{color:'var(--primary-40)'}}>bevorzugten Zugang</span> ins volle Trainingsprogramm.
            </h3>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="cta-chip cta-chip--filled">Link in Bio antippen. Bewerben.</button>
          </div>
        </div>
      </SlideShell>
    </CarouselRow>
  );
};

// CAROUSEL 3 — Angebot (6 slides)
const Carousel3 = () => {
  const n = 6;
  return (
    <CarouselRow tag="Karussell 3 · Angebot" title="Zwei Wochen. Zwei Städte. Fünfzig Plätze." slideCount={n}>
      {/* 3.1 Hook */}
      <SlideShell variant="paper" i={1} n={n}>
        <div className="flex-col-between">
          <div/>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h2 className="display display-xl center-text" style={{lineHeight:1.0}}>
              Zwei <span className="italic">Wochen.</span><br/>
              Zwei <span className="italic">Städte.</span><br/>
              Fünfzig <span className="italic" style={{color:'var(--accent)'}}>Plätze.</span>
            </h2>
            <CoralRule style={{marginTop:12}}/>
          </div>
          <div className="label-line center-text">Der Pilot</div>
        </div>
      </SlideShell>

      {/* 3.2 Wo + wann — map */}
      <SlideShell variant="paper" i={2} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Wo + wann</div>
          <div>
            <h3 className="display display-md center-text" style={{marginBottom:6}}>
              <span className="italic">Soulhouse</span> Hamburg.<br/><span className="italic">Soulhouse</span> Berlin.
            </h3>
            <GermanyMap/>
          </div>
          <div className="label-line center-text">Mai – Juni 2026 · 25 Plätze pro Stadt</div>
        </div>
      </SlideShell>

      {/* 3.3 What you get */}
      <SlideShell variant="paper" i={3} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Was dir neunzig Minuten geben</div>
          <div className="bullet-list">
            <div className="bullet-row"><span className="bullet-dot"/>Fünf Biomarker — kardial, respiratorisch, elektrodermal, muskulär, präfrontal</div>
            <div className="bullet-row"><span className="bullet-dot"/>Dein Default Resiliency Index, null bis hundert</div>
            <div className="bullet-row"><span className="bullet-dot"/>Dein benanntes Muster</div>
            <div className="bullet-row"><span className="bullet-dot"/>Heimpraktiken passend zu deinem Muster</div>
            <div className="bullet-row"><span className="bullet-dot"/>Soulhouse-Module, die deinem System am besten tun</div>
            <div className="bullet-row"><span className="bullet-dot"/>Live-Durchgang, schriftlicher Bericht am nächsten Tag</div>
            <div className="bullet-row"><span className="bullet-dot"/>Bevorzugter Zugang ins Trainingsprogramm</div>
          </div>
          <div className="label-line center-text">Neunzig Minuten · vor Ort</div>
        </div>
      </SlideShell>

      {/* 3.4 The price */}
      <SlideShell variant="paper" i={4} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Pilotpreis</div>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <div className="price-block">
              <span className="price-old">€220</span>
              <span className="price-new">€149</span>
            </div>
            <CoralRule style={{marginTop:6}}/>
          </div>
          <div className="sub center-text italic" style={{maxWidth:240, margin:'0 auto'}}>
            Nur für die ersten fünfzig. Preise steigen danach.
          </div>
        </div>
      </SlideShell>

      {/* 3.5 Warum jetzt — scarcity + first-slot access */}
      <SlideShell variant="paper" i={5} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Warum jetzt</div>
          <div className="flex-center" style={{flex:1, justifyContent:'center', gap:14}}>
            <h3 className="display display-md center-text" style={{maxWidth:260}}>
              Fünfzig Plätze. Dann <span className="italic">schließt</span> der Pilot.
            </h3>
            <div className="fifty-grid" aria-hidden="true">
              {Array.from({length:50}).map((_, i) => (
                <span key={i} className={`dot-slot ${i < 8 ? 'taken' : ''}`}/>
              ))}
            </div>
            <div className="label-line center-text">Danach steigen Preise · die ersten fünfzig erhalten bevorzugten Zugang ins Trainingsprogramm</div>
          </div>
          <div/>
        </div>
      </SlideShell>

      {/* 3.6 CTA — both variants, split */}
      <div className="slide slide--dark">
        <SlideCounter i={6} n={n}/>
        <div className="slide-inner" style={{padding:'18px 0 20px'}}>
          <div style={{padding:'0 14px'}}><Lockup onDark/></div>
          <div className="split-dark" style={{flex:1, marginTop:10}}>
            <div className="half">
              <div className="eyebrow" style={{color:'var(--primary-40)'}}>Variante A · Bewerben</div>
              <div>
                <h4 className="display display-sm" style={{color:'#fff', marginBottom:6}}>Bewirb dich um einen von <span className="italic">fünfzig</span> Plätzen.</h4>
                <div className="sub" style={{fontSize:10, color:'rgba(255,255,255,0.65)'}}>Zwei-Minuten-Formular. Bestätigt in achtundvierzig Stunden.</div>
              </div>
              <button className="cta-chip cta-chip--filled" style={{alignSelf:'flex-start'}}>Jetzt bewerben</button>
            </div>
            <div className="divider"/>
            <div className="half">
              <div className="eyebrow" style={{color:'var(--primary-40)'}}>Variante B · Warteliste</div>
              <div>
                <h4 className="display display-sm" style={{color:'#fff', marginBottom:6}}>Auf die <span className="italic">Warteliste.</span></h4>
                <div className="sub" style={{fontSize:10, color:'rgba(255,255,255,0.65)'}}>Vierundzwanzig Stunden Vorzugszugang zum Buchungsstart.</div>
              </div>
              <button className="cta-chip cta-chip--outline" style={{alignSelf:'flex-start'}}>Warteliste beitreten</button>
            </div>
          </div>
        </div>
      </div>
    </CarouselRow>
  );
};

// CAROUSEL 4 — FAQ (6 slides)
const Carousel4 = () => {
  const n = 6;
  return (
    <CarouselRow tag="Karussell 4 · FAQ" title="Zwei Fragen, die geklärt werden sollten." slideCount={n}>
      {/* 4.1 Open */}
      <SlideShell variant="paper" i={1} n={n}>
        <div className="flex-col-between">
          <div/>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h2 className="display display-xl center-text">
              Zwei Fragen, die geklärt werden sollten,<br/>
              <span className="italic" style={{color:'var(--accent)'}}>bevor du dich bewirbst.</span>
            </h2>
            <CoralRule style={{marginTop:10}}/>
          </div>
          <div className="label-line center-text">Das FAQ</div>
        </div>
      </SlideShell>

      {/* 4.2 Question 1 quote card */}
      <SlideShell variant="paper" i={2} n={n}>
        <div className="quote-card">
          <div>
            <div className="eyebrow">Frage eins</div>
            <div className="quote-mark">“</div>
          </div>
          <div className="quote-body">
            Ich bekomme schon bodywork bei Soulhouse. Warum brauche ich das?
          </div>
          <div className="label-line">Mitgehört · Soulhouse-Mitglied</div>
        </div>
      </SlideShell>

      {/* 4.3 Q1 answer */}
      <SlideShell variant="paper" i={3} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Wie bodywork den Zustand wirklich verschiebt</div>
          <h3 className="display display-sm center-text">
            Soulhouse berührt das <span className="italic">somatische</span> System.<br/>
            So verschiebt sich das <span className="italic">autonome.</span>
          </h3>
          <NSBranches/>
          <div className="sub center-text italic" style={{fontSize:10.5, maxWidth:270, margin:'0 auto'}}>
            Das Assessment liest das autonome System direkt — damit die nächste Sitzung den Knopf trifft, der wirklich hakt.
          </div>
        </div>
      </SlideShell>

      {/* 4.4 Question 2 quote */}
      <SlideShell variant="paper" i={4} n={n}>
        <div className="quote-card">
          <div>
            <div className="eyebrow">Frage zwei</div>
            <div className="quote-mark">“</div>
          </div>
          <div className="quote-body">
            Ist das eigentlich Wissenschaft, oder noch ein Wellness-Protokoll?
          </div>
          <div className="label-line">Mitgehört · Soulhouse-Mitglied</div>
        </div>
      </SlideShell>

      {/* 4.5 Q2 answer */}
      <SlideShell variant="paper" i={5} n={n}>
        <div className="flex-col-between">
          <div className="eyebrow center-text">Fünf Eingangssysteme, ein zusammengesetzter Score</div>
          <div>
            <FiveSystemRow/>
            <SystemConnectToRing/>
            <div style={{display:'flex', justifyContent:'center', marginTop:-4}}>
              <DRIRing value={64} size="sm"/>
            </div>
          </div>
          <div className="sub center-text italic" style={{fontSize:10.5, lineHeight:1.45, maxWidth:250, margin:'0 auto'}}>
            Eine Wellness-Anwendung von Werkzeugen, die auf begutachteter physiologischer Forschung aufbauen.<br/>
            Ergänzend zur Therapie, kein Ersatz.
          </div>
        </div>
      </SlideShell>

      {/* 4.6 End */}
      <SlideShell variant="dark" i={6} n={n}>
        <div className="flex-col-between">
          <Lockup onDark/>
          <div className="flex-center" style={{flex:1, justifyContent:'center'}}>
            <h2 className="display display-lg center-text">
              Zwei Fragen <span className="italic" style={{color:'var(--primary-40)'}}>beantwortet.</span><br/>
              Ein <span className="italic">Pilot.</span>
            </h2>
            <CoralRule/>
            <div className="label-line" style={{color:'rgba(255,255,255,0.55)', textAlign:'center', maxWidth:240}}>
              50 assessments · Hamburg + Berlin · Mai – Juni 2026
            </div>
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
            <button className="cta-chip cta-chip--filled">Link in Bio antippen. Bewerben.</button>
          </div>
        </div>
      </SlideShell>
    </CarouselRow>
  );
};

// ============================================================
// Row wrapper (stitches slides with swipe arrows)
// ============================================================
const CarouselRow = ({ tag, title, slideCount, children }) => {
  const slides = React.Children.toArray(children);
  return (
    <section className="carousel-row">
      <div className="row-head">
        <span className="tag">{tag}</span>
        <h2 className="row-title"><em>{title}</em></h2>
        <span className="row-meta">{slideCount} Slides · 1080 × 1350</span>
      </div>
      <div className="row-strip">
        {slides.map((s, i) => (
          <React.Fragment key={i}>
            {s}
            {i < slides.length - 1 && <SwipeArrow/>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

// ============================================================
// Root
// ============================================================
const App = () => (
  <div className="board" data-screen-label="Soulhouse × DRM · Kampagnen-Storyboard">
    <header className="board-masthead">
      <div className="left">
        <div className="kicker">Soulhouse × The Default Resilient Method · Instagram Kampagne</div>
        <h1>Fünf Karussells. <em>Ein Pilot.</em><br/>Fünfzig Assessments in Hamburg und Berlin.</h1>
      </div>
      <div className="meta">
        <b>@soulhouse.me</b><br/>
        4:5 · 1080 × 1350<br/>
        Mai – Juni 2026<br/>
        <b>€149</b> · 50 Plätze
      </div>
    </header>
    <Carousel0/>
    <Carousel1/>
    <Carousel2/>
    <Carousel3/>
    <Carousel4/>
  </div>
);

if (window.__LANG === 'de') {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>);
}
