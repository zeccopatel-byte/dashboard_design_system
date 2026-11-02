// Avistar Dashboard — foundations + dashboard patterns
import { ic } from './av-components.js';
import { PRIMITIVES, TYPE_SCALE, BASE_TOKENS } from './av-tokens.js';

const spark = (arr, w = 72, h = 24) => { const mx = Math.max(...arr), mn = Math.min(...arr), r = mx - mn || 1; return arr.map((v, i) => (i ? 'L' : 'M') + (2 + i * ((w - 4) / (arr.length - 1))).toFixed(1) + ' ' + (h - 3 - (v - mn) / r * (h - 6)).toFixed(1)).join(' '); };
const sw = (n, hex, t) => `<div class="avd-swatch"><span class="avd-swatch__chip" style="background:${hex}"></span><span class="avd-swatch__n">${n}</span><span class="avd-swatch__v">${t || hex}</span></div>`;

export const DOC_CSS = `/* docs-only helpers (not needed in product) */
.avd-swatches{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,112px),1fr));gap:10px;width:100%}
.avd-swatch{display:flex;flex-direction:column;gap:3px;font-size:12px}
.avd-swatch__chip{height:56px;border-radius:10px;border:1px solid var(--av-border-subtle-00);margin-bottom:6px}
.avd-swatch__n{font-weight:500;color:var(--av-text-primary)}.avd-swatch__v{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.avd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,96px),1fr));gap:10px;width:100%}
.avd-cell{display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 8px 12px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);color:var(--av-icon-primary)}
.avd-cell span{font:10.5px var(--av-font-mono);color:var(--av-text-helper);text-align:center}
.avd-cell img{width:32px;height:32px;object-fit:contain}
.avd-bar{display:grid;grid-template-columns:110px 56px minmax(0,1fr);gap:16px;align-items:center;font:12px var(--av-font-mono);color:var(--av-text-helper)}
.avd-bar b{font-weight:500;color:var(--av-text-primary)}.avd-bar i{display:block;height:12px;border-radius:3px;background:var(--av-gradient-brand)}
.avd-box{display:flex;flex-direction:column;justify-content:flex-end;gap:3px;height:110px;padding:14px;border-radius:14px;border:1px solid var(--av-border-subtle-01);background:var(--av-layer-01);font-size:13px;font-weight:600}
.avd-box span{font:10.5px var(--av-font-mono);font-weight:400;color:var(--av-text-helper)}
.avd-measure{position:relative;outline:1px dashed color-mix(in srgb,var(--av-support-low) 60%,transparent);background:color-mix(in srgb,var(--av-support-low) 8%,transparent)}
.avd-label{position:absolute;font:500 10px var(--av-font-mono);letter-spacing:.06em;color:var(--av-text-info);background:var(--av-background);padding:1px 4px;border-radius:3px}
.avd-principle{display:flex;flex-direction:column;gap:6px;padding:18px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01)}
.avd-principle b{font-size:15px}.avd-principle span{font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}
`;

const typeCSS = TYPE_SCALE.map(t => `.av-type-${t[0]}{font-family:var(--av-font-${t[6]});font-size:var(--av-type-${t[0]}-size);font-weight:var(--av-type-${t[0]}-weight);letter-spacing:var(--av-type-${t[0]}-tracking);line-height:var(--av-type-${t[0]}-leading)${t[6] === 'mono' && t[0] === 'label' ? ';text-transform:uppercase' : ''}${['kpi','score'].includes(t[0]) ? ';font-variant-numeric:tabular-nums' : ''}}`).join('\n');
const LINE = ['plus','x','check','chevDown','chevRight','arrow','up','down','search','bell','download','upload','calendar','play','ext','list','grid','copy','report','refresh','dots','logout','mail','filter','gear','eye','info','alert','file','sun','moon','collapse','key','lock','shield','cloud','trash','edit','link','spark'];
const DUO = ['overview','identity','clients','members','cloud','server','network','monitor','key','lock','shield','fingerprint','scan','threat','alert','bulletin','settings'];
const MASCOTS = ['magnifier','shield','key','chip','clipboard','bucket','idcard','lock'];


export const RESPONSIVE_CSS = `/* ── Responsive layer · fluid, container-driven (320px → 2560px) ── */
.av-root{container:av-root/inline-size}
.av-root img{max-width:100%}.av-root img:not([height]):not([style*="height"]){height:auto}
.av-media{position:relative;width:100%;aspect-ratio:var(--av-ratio,16/9);overflow:hidden;border-radius:var(--av-radius-lg);background:var(--av-layer-03)}
.av-media>img,.av-media>video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.av-media--square{--av-ratio:1/1}.av-media--4x3{--av-ratio:4/3}.av-media--21x9{--av-ratio:21/9}
/* touch targets: visual size unchanged, hit area ≥ 44×44 */
.av-btn--sm,.av-icon-btn--ghost,.av-icon-btn--arrow,.av-page,.av-tag--filter,.av-tag__remove,.av-switcher--sm button,.av-toggletip__btn,.av-breadcrumb__more,.av-activity__cta,.av-sev-chip,.av-tab,.av-period button{position:relative}
.av-btn--sm::after,.av-icon-btn--ghost::after,.av-icon-btn--arrow::after,.av-page::after,.av-tag--filter::after,.av-tag__remove::after,.av-switcher--sm button::after,.av-toggletip__btn::after,.av-breadcrumb__more::after,.av-activity__cta::after,.av-sev-chip::after{content:"";position:absolute;left:50%;top:50%;width:max(100%,var(--av-touch));height:max(100%,var(--av-touch));transform:translate(-50%,-50%)}
.av-checkbox,.av-radio,.av-toggle{min-height:var(--av-touch)}
.av-nav-item,.av-sidebar__head,.av-sidebar__action{flex-shrink:0}.av-nav-item{min-height:var(--av-touch)}
@media (pointer:coarse){.av-btn,.av-input,.av-select select,.av-dropdown__trigger,.av-search__input,.av-switcher button,.av-menu__item,.av-nav-item,.av-sidebar__action,.av-period button,.av-calendar__day{min-height:var(--av-touch)}.av-icon-btn{min-width:var(--av-touch);min-height:var(--av-touch)}}
/* fluid rhythm */
.av-main{padding:clamp(1.25rem,4vw,2rem) var(--av-gutter) clamp(3rem,8vw,5rem);gap:var(--av-section-gap)}
.av-topbar{flex-wrap:wrap;height:auto;min-height:var(--av-header-h);padding:8px var(--av-gutter)}
.av-topbar>nav{flex:0 1 auto;min-width:0}
.av-card,.av-tile,.av-kpi,.av-stat,.av-fix-card,.av-chart-card{padding:var(--av-card-pad)}
.av-card--flush{padding:0}
.av-score-card{padding:clamp(1rem,3vw,1.5rem);gap:clamp(1rem,3vw,1.5rem)}
.av-modal__head,.av-modal__body,.av-modal__foot,.av-sheet__head,.av-sheet__body,.av-sheet__foot{padding-inline:var(--av-card-pad)}
.av-empty-card{padding:clamp(1.25rem,5vw,3.5rem);gap:clamp(1rem,4vw,2rem)}
.av-empty-card__img{width:min(180px,100%);height:auto;aspect-ratio:1}
.av-story__media{width:clamp(56px,14vw,72px)}
/* reflow: flex-wrap rows instead of fixed grids */
.av-breadcrumb--context{max-width:100%;min-width:0;overflow:hidden}.av-breadcrumb--context li{flex-shrink:0;white-space:nowrap}.av-breadcrumb--context li:has([aria-current]){flex-shrink:1;min-width:0;overflow:hidden}.av-breadcrumb--context li:has([aria-current])>span{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis}.av-breadcrumb__sep,.av-breadcrumb__chev{flex-shrink:0}
.av-setting{grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(.75rem,3vw,1.5rem)}
.av-fix{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px}.av-fix__body{flex:1 1 220px}
.av-acct{display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px}.av-acct__id{flex:2 1 220px}.av-acct__score{flex:1 1 140px}.av-acct__status{flex:1 1 120px}
.av-org-row{flex-wrap:wrap}.av-org-row__text{flex:1 1 160px}.av-org-row__actions{margin-left:auto}
.av-client-card__name{white-space:normal}
.av-bigstat{flex:1 1 160px}
.av-pagination{justify-content:center}.av-pagination>span{flex:1 1 100%;text-align:center}
.av-slist__row{grid-template-columns:repeat(auto-fit,minmax(min(100%,120px),1fr))}
.av-slist--3 .av-slist__row,.av-slist--selectable .av-slist__row{grid-template-columns:repeat(auto-fit,minmax(min(100%,110px),1fr))}
.av-table-wrap,.av-graph-scroll{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}
/* mobile drawer navigation */
.av-mobilebar{display:none;position:sticky;top:0;z-index:var(--av-z-header);align-items:center;gap:8px;min-height:56px;padding:6px var(--av-gutter);border-bottom:1px solid var(--av-border-subtle-00);background:var(--av-background-header);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.av-mobilebar__brand{display:flex;align-items:center;gap:8px;flex:1;min-width:0}
.av-sidebar--drawer{position:fixed;top:0;left:0;bottom:0;width:var(--av-drawer-w);height:100dvh;z-index:var(--av-z-modal);transform:translateX(-100%);transition:transform var(--av-duration-slow) var(--av-ease-standard)}
.av-sidebar--drawer[data-open="true"]{transform:none;box-shadow:var(--av-shadow-sheet)}
.av-drawer-scrim{position:fixed;inset:0;z-index:calc(var(--av-z-modal) - 1);background:var(--av-overlay-sheet)}
.av-demo-stage .av-sidebar--drawer,.av-demo-stage .av-drawer-scrim{position:absolute;height:auto}
@container av-root (max-width: 900px){
  .av-shell{flex-direction:column}
  .av-shell>.av-sidebar{position:fixed;top:0;left:0;bottom:0;width:var(--av-drawer-w);height:100dvh;z-index:var(--av-z-modal);transform:translateX(-100%);transition:transform var(--av-duration-slow) var(--av-ease-standard)}
  .av-shell>.av-sidebar[data-open="true"]{transform:none;box-shadow:var(--av-shadow-sheet)}
  .av-shell .av-mobilebar{display:flex}
  .av-shell .av-topbar{position:relative;top:auto}
}
@container av-root (max-width: 560px){
  .av-month-labels span:nth-child(4n+2){visibility:hidden}
  .av-page-head__actions{width:100%}.av-page-head__actions>.av-btn{flex:1 1 auto}
  .av-modal__foot{flex-wrap:wrap}.av-modal__foot>.av-btn{flex:1 1 auto}
  .av-frame__stats{flex-direction:column;gap:6px;padding:0}
  .av-score-card{flex-direction:column;align-items:flex-start}
  .av-split .av-btn:first-child{flex:1}
}
/* mobile: topbar menu, tables → cards, modals → bottom sheets */
.av-topbar__menu{display:none;flex-shrink:0}
.av-main>*{flex-shrink:0}
.av-table-toolbar__title{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 6px;line-height:1.35}.av-table-toolbar__count{margin-left:0}
@container av-root (max-width: 900px){
  .av-topbar__menu{display:inline-flex}
}
@container av-root (max-width: 560px){
  .av-topbar{flex-wrap:nowrap;gap:8px}
  .av-topbar>nav{flex:1 1 auto}.av-topbar>nav+.av-topbar__spacer{display:none}
  .av-topbar .av-btn--primary{width:var(--av-touch);min-width:var(--av-touch);padding:0;gap:0;font-size:0;justify-content:center;flex-shrink:0}
  .av-topbar .av-breadcrumb--context>li:nth-child(-n+2){display:none}
  .av-tabs--pill{display:flex;width:100%}.av-tabs--pill>.av-tab{flex:1 1 0;justify-content:center;min-width:0;padding:0 8px}
  .av-table-toolbar>*{flex:1 1 100%}.av-table-toolbar .av-row{flex-wrap:nowrap}.av-table-toolbar .av-row>.av-search{flex:1 1 auto;min-width:0;width:auto!important}
  .av-table-wrap{overflow-x:hidden}.av-table tbody tr{width:100%;min-width:0}
  .av-table{display:block;min-width:0}.av-table thead{display:none}.av-table tbody{display:block}
  .av-table tbody tr{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;padding:14px 16px;border-bottom:1px solid var(--av-border-subtle-00)}
  .av-table tbody tr:last-child{border-bottom:0}
  .av-table td{display:block;height:auto;padding:0;border:0}
  .av-table td:first-child:not(.av-table__check),.av-table__check+td{flex:1 1 calc(100% - 52px);min-width:0}
  .av-table__check{width:auto}.av-table td.av-table__num{margin-left:auto}
  .av-table__id{overflow-wrap:anywhere}
  .av-modal-scrim{align-items:flex-end;padding:0}
  .av-modal,.av-modal--lg{width:100%;max-height:92%;border-radius:20px 20px 0 0;border-bottom:0;padding-bottom:env(safe-area-inset-bottom)}
  .av-modal::before{content:"";align-self:center;flex-shrink:0;width:36px;height:4px;margin-top:8px;border-radius:2px;background:var(--av-border-strong-01)}
  .av-modal__foot>.av-btn{flex:1 1 0}
}
@container av-root (min-width: 1800px){.av-main{max-width:min(1440px,100%)}}
`;

export const FOUNDATIONS = [
{ id:'overview', label:'Overview', desc:'One ecosystem for the Avistar dashboard: tokens.css (all variables, dark + light) → components.css (every .av-* class) → copy-paste HTML. Inter + JetBrains Mono. Dark is default.',
css:`/* Load order */\n@import url("tokens.css");\n@import url("components.css");`,
variants:[
 {name:'Install', html:`<div class="av-stack" style="max-width:560px"><div class="av-clist"><div class="av-clist__item"><span class="av-tag av-tag--mono">1</span><span class="av-clist__text"><span class="av-clist__title">Fonts</span><span class="av-clist__sub">Inter 400–700 · JetBrains Mono 400–600</span></span></div><div class="av-clist__item"><span class="av-tag av-tag--mono">2</span><span class="av-clist__text"><span class="av-clist__title">tokens.css</span><span class="av-clist__sub">--av-* colour, type, space, radius, elevation, motion, layout</span></span></div><div class="av-clist__item"><span class="av-tag av-tag--mono">3</span><span class="av-clist__text"><span class="av-clist__title">components.css</span><span class="av-clist__sub">.av-* classes for every component and dashboard pattern</span></span></div><div class="av-clist__item"><span class="av-tag av-tag--mono">4</span><span class="av-clist__text"><span class="av-clist__title">assets/</span><span class="av-clist__sub">mark-shape2.svg, wordmarks, icons-duo, mascots, logos, patterns</span></span></div></div></div>`,
  code:`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles/tokens.css">
<link rel="stylesheet" href="/styles/components.css">

<body class="av-root" style="margin:0;background:var(--av-background)">
  …
</body>`},
 {name:'Theming', note:'Every colour token has a light value. Switch at any level.', html:`<div class="av-row"><button class="av-btn av-btn--secondary">${ic('sun',14)}Light mode</button><code class="av-code-inline">document.documentElement.dataset.theme = 'light'</code></div>`,
  code:`<!-- dark (default) -->\n<html>\n<!-- light -->\n<html data-theme="light">\n<!-- scoped: any wrapper -->\n<section data-theme="light">…</section>`},
 {name:'Naming', html:`<div class="av-slist" style="max-width:560px"><div class="av-slist__row"><span class="av-slist__k">Token</span><span class="av-slist__v av-slist__v--mono">--av-{category}-{role}-{state}</span></div><div class="av-slist__row"><span class="av-slist__k">Block</span><span class="av-slist__v av-slist__v--mono">.av-btn</span></div><div class="av-slist__row"><span class="av-slist__k">Element</span><span class="av-slist__v av-slist__v--mono">.av-modal__title</span></div><div class="av-slist__row"><span class="av-slist__k">Modifier</span><span class="av-slist__v av-slist__v--mono">.av-btn--primary .av-btn--sm</span></div><div class="av-slist__row"><span class="av-slist__k">State</span><span class="av-slist__v av-slist__v--mono">aria-pressed / aria-selected / aria-current / aria-invalid / :disabled</span></div></div>`},
 {name:'Principles', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:12px;width:100%"><div class="avd-principle"><b>Neutral first</b><span>Surfaces are warm greys. Signal and Ion are earned — brand, severity, focus.</span></div><div class="avd-principle"><b>One primary</b><span>One Signal button per view. Everything else is secondary, ghost or link.</span></div><div class="avd-principle"><b>Numbers lead</b><span>Scores and counts are the largest type on a card. Tabular numerals always.</span></div><div class="avd-principle"><b>Mono for machines</b><span>IDs, ARNs, labels and tags use JetBrains Mono. People-text uses Inter.</span></div></div>`},
]},

{ id:'responsive', label:'Responsive', desc:'Fluid from 320px to 2560px. Containers use %, min() and clamp() — never fixed px for structure. Grid with auto-fit + minmax() reflows without breakpoints; container queries (on .av-root) handle the few real layout switches. Touch targets ≥ 44×44. Media sits in fixed-ratio wrappers with object-fit: cover.',
css:RESPONSIVE_CSS,
variants:[
 {name:'Fluid tokens', html:`<div class="av-slist" style="width:100%">${BASE_TOKENS.filter(t => ['--av-gutter','--av-card-pad','--av-section-gap','--av-touch','--av-sidebar-w','--av-drawer-w','--av-content-max'].includes(t[1])).map(t => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${t[1]}</span><span class="av-slist__k">${t[2]} — ${t[3]}</span></div>`).join('')}</div>`, code:`--av-gutter: clamp(1rem, 4vw, 2rem);\n--av-card-pad: clamp(1rem, 3vw, 1.25rem);\n--av-section-gap: clamp(1.25rem, 3vw, 1.75rem);\n--av-touch: 44px;\n--av-sidebar-w: clamp(220px, 20vw, 248px);\n--av-drawer-w: min(300px, 86vw);`},
 {name:'Viewport reference', html:`<div class="av-slist" style="width:100%">${[['320','Smallest phone · single column, drawer nav, full-width actions'],['560','Container switch · stacked score card, wrapped footers'],['900','Container switch · sidebar becomes drawer + mobile bar'],['1280','--av-content-max · main column stops growing'],['1800+','Ultra-wide · main column caps at 1440px'],['2560','Max tested width · everything centred']].map(([w,d]) => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${w}px</span><span class="av-slist__k">${d}</span></div>`).join('')}</div>`},
 {name:'Auto-fit grid', note:'Resize the preview width (top of page) — columns reflow with no media queries.', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:clamp(.75rem,2vw,1rem)">${['Open findings','Critical + high','Risky identities','Coverage'].map(l => `<div class="av-tile"><span class="av-eyebrow">${l}</span><span class="av-kpi__num">293</span></div>`).join('')}</div>`, code:`.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:clamp(.75rem,2vw,1rem)}`},
 {name:'Fluid flex row', html:`<div style="display:flex;flex-wrap:wrap;gap:16px"><div class="av-tile" style="flex:1 1 min(100%,340px)">Score card · flex 1 1 340px</div><div class="av-tile" style="flex:2 1 min(100%,520px)">KPI grid · flex 2 1 520px</div></div>`, code:`.row{display:flex;flex-wrap:wrap;gap:16px}\n.row>.a{flex:1 1 min(100%,340px)}\n.row>.b{flex:2 1 min(100%,520px)}`},
 {name:'Media wrappers', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:12px"><div class="av-media"><img src="assets/illus/clay-flow-1k.jpg" alt=""></div><div class="av-media av-media--4x3"><img src="assets/illus/clay-vault-1k.jpg" alt=""></div><div class="av-media av-media--square"><img src="assets/illus/clay-console-1k.jpg" alt=""></div></div>`, code:`<div class="av-media av-media--4x3"><img src="…" alt=""></div>\n/* .av-media{aspect-ratio:var(--av-ratio,16/9);overflow:hidden} .av-media>img{width:100%;height:100%;object-fit:cover} */`},
 {name:'Touch targets', note:'Dashed outline shows the 44×44 hit area around small visual controls.', html:`<div class="av-row" style="gap:24px">${['<button class="av-btn av-btn--secondary av-btn--sm">Small · 32</button>','<button class="av-icon-btn av-icon-btn--ghost" aria-label="More">'+ic('dots',18,2.6)+'</button>','<button class="av-page" aria-current="page">1</button>','<button class="av-icon-btn av-icon-btn--arrow" aria-label="Open">'+ic('arrow',14,2)+'</button>'].map(b => `<span style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;outline:1px dashed color-mix(in srgb,var(--av-support-low) 60%,transparent);border-radius:6px">${b}</span>`).join('')}</div>`, code:`.av-btn--sm{position:relative}\n.av-btn--sm::after{content:"";position:absolute;left:50%;top:50%;width:max(100%,var(--av-touch));height:max(100%,var(--av-touch));transform:translate(-50%,-50%)}`},
 {name:'Container query', html:`<p style="margin:0;font-size:13px;color:var(--av-text-tertiary)">.av-root is the query container, so components respond to the space they're given — the same rules work in a sidebar panel or full page.</p>`, code:`.av-root{container:av-root / inline-size}\n@container av-root (max-width: 900px){\n  .av-shell>.av-sidebar{position:fixed;transform:translateX(-100%)}\n  .av-shell>.av-sidebar[data-open="true"]{transform:none}\n  .av-shell .av-mobilebar{display:flex}\n}`},
]},

{ id:'color', label:'Color', desc:'Primitive ramps. Never use primitives directly in product code — use the semantic tokens under Color tokens.',
css:`:root{\n${PRIMITIVES.map(([f, r]) => r.map(([s, h]) => `  --av-${f.toLowerCase()}-${s}: ${h};`).join('\n')).join('\n')}\n}`,
variants:[
 ...PRIMITIVES.map(([f, r]) => ({ name:f, html:`<div class="avd-swatches">${r.map(([s, h]) => sw(`${f} ${s}`, h)).join('')}</div>`, code:r.map(([s, h]) => `--av-${f.toLowerCase()}-${s}: ${h};`).join('\n') })),
 {name:'Brand gradient', html:`<div style="width:100%;height:72px;border-radius:14px;background:var(--av-gradient-brand);display:flex;align-items:center;justify-content:space-between;padding:0 18px;font:600 11px var(--av-font-mono);color:#0B0B0C"><span>#FF4B1F SIGNAL</span><span>ION #1FDDFF</span></div>`, code:`background: var(--av-gradient-brand); /* linear-gradient(90deg,#FF4B1F,#1FDDFF) */`},
 {name:'Posture scale', note:'score < 65 poor · 65–79 fair · ≥ 80 good · null = none', html:`<div class="avd-swatches">${sw('Poor < 65','var(--av-posture-poor)','--av-posture-poor')}${sw('Fair 65–79','var(--av-posture-fair)','--av-posture-fair')}${sw('Good ≥ 80','var(--av-posture-good)','--av-posture-good')}${sw('None','var(--av-support-neutral)','--av-support-neutral')}</div>`,
  code:`const postureColor = s => s == null ? 'var(--av-support-neutral)'\n  : s >= 80 ? 'var(--av-posture-good)'\n  : s >= 65 ? 'var(--av-posture-fair)'\n  : 'var(--av-posture-poor)';`},
 {name:'Severity scale', html:`<div class="avd-swatches">${sw('Critical','var(--av-support-critical)','--av-support-critical')}${sw('High','var(--av-support-high)','--av-support-high')}${sw('Medium','var(--av-support-medium)','--av-support-medium')}${sw('Low','var(--av-support-low)','--av-support-low')}${sw('Success','var(--av-support-success)','--av-support-success')}</div>`},
]},

{ id:'type', label:'Type', desc:'Inter for UI and data, JetBrains Mono for labels, IDs and numeric tags. Tight negative tracking on display sizes.',
css:typeCSS,
variants:TYPE_SCALE.map(t => ({ name:t[1], note:`${t[2]} · ${t[3]} · ${t[4]} · lh ${t[5]} · ${t[6] === 'mono' ? 'JetBrains Mono' : 'Inter'}`, html:t[0] === 'display' ? `<p class="av-type-display" style="margin:0">Welcome back, <span class="av-text-gradient">Zalak</span>.</p>` : t[0] === 'score' ? `<span class="av-type-score av-text-gradient" style="background-image:var(--av-gradient-brand-45)">64</span>` : `<p class="av-type-${t[0]}" style="margin:0">${t[7]}</p>` }))},

{ id:'icons', label:'Icons', desc:'Line icons (24 grid, 1.6–2.2 stroke, currentColor) for actions. Duotone set for KPI and empty states. 3D mascots for sidebar nav and moments.',
css:`.av-icon{display:inline-block;flex-shrink:0;vertical-align:middle}\n/* sizes: 12 delta · 14 in buttons · 16 inline · 18 icon buttons · 24 nav */`,
variants:[
 {name:'Line set', html:`<div class="avd-grid">${LINE.map(n => `<div class="avd-cell">${ic(n,20)}<span>${n}</span></div>`).join('')}</div>`, code:`<svg class="av-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`},
 {name:'Sizes & stroke', html:`<div class="av-row" style="gap:28px;align-items:flex-end">${[[12,2.2],[14,2],[16,1.8],[18,1.6],[24,1.6]].map(([s,w]) => `<span class="av-stack" style="align-items:center;gap:8px">${ic('shield',s,w)}<span class="av-mono" style="font-size:10px;color:var(--av-text-helper)">${s}/${w}</span></span>`).join('')}</div>`},
 {name:'Duotone (icons-duo)', html:`<div class="avd-grid">${DUO.map(n => `<div class="avd-cell"><img src="assets/icons-duo/${n}.svg" alt=""><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/icons-duo/shield.svg" alt="" width="24" height="24">`},
 {name:'Glass (icons-glass)', html:`<div class="avd-grid">${DUO.map(n => `<div class="avd-cell"><img src="assets/icons-glass/${n}.svg" alt=""><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/icons-glass/alert.svg" alt="" width="28" height="28">`},
 {name:'Tile (icons-tile)', html:`<div class="avd-grid">${['alert','cloud','fingerprint','identity','key','lock','monitor','network','scan','server','shield','threat'].map(n => `<div class="avd-cell"><img src="assets/icons-tile/${n}.svg" alt=""><span>${n}</span></div>`).join('')}</div>`},
 {name:'Mascots', note:'Sidebar nav glyphs, org avatars, empty states. 24–52px.', html:`<div class="avd-grid">${MASCOTS.map(n => `<div class="avd-cell"><img src="assets/mascots/${n}.png" alt="" style="width:44px;height:44px"><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/mascots/magnifier.png" alt="" width="24" height="24" style="object-fit:contain">`},
 {name:'Provider logos', html:`<div class="avd-grid">${[['aws-dark','AWS (dark)'],['aws','AWS (light)'],['azure','Azure'],['gcp','GCP']].map(([f,n]) => `<div class="avd-cell"><img src="assets/logo-${f}.svg" alt="" style="width:40px;height:24px"><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/logo-aws-dark.svg" alt="AWS" height="14"> <!-- use logo-aws.svg on light -->`},
 {name:'Brand mark', note:'Always mark-shape2.svg (rounded cube stack).', html:`<div class="av-row" style="gap:24px"><img src="assets/mark-shape2.svg" alt="Avistar" style="width:28px;height:25px"><span class="av-row" style="gap:10px"><img src="assets/mark-shape2.svg" alt="" style="width:28px;height:25px"><img src="assets/avistar-wordmark-light.svg" alt="avistar" style="height:15px"></span></div>`, code:`<a class="av-brand" href="/"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"><img src="assets/avistar-wordmark-light.svg" alt="" height="15"></a>\n<!-- light theme: avistar-wordmark-ink.svg -->`},
]},

{ id:'space', label:'Space & elevation', desc:'4px base grid. Radius scale from 4 (intro cards) to 16 (cards, modals) and pill. Five elevation levels.',
css:BASE_TOKENS.filter(t => ['Space','Radius','Elevation','Z-index'].includes(t[0])).map(t => `${t[1]}: ${t[2]};`).join('\n'),
variants:[
 {name:'Spacing scale', html:`<div class="av-stack" style="width:100%;gap:8px">${BASE_TOKENS.filter(t => t[0] === 'Space').map(t => `<div class="avd-bar"><b>${t[1].replace('--av-','')}</b><span>${t[2]}</span><span class="av-row" style="gap:12px;flex-wrap:nowrap"><i style="width:${t[2]}"></i><span style="font-family:var(--av-font-sans)">${t[3]}</span></span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Space').map(t => `${t[1]}: ${t[2]}; /* ${t[3]} */`).join('\n')},
 {name:'Radius', html:`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,130px),1fr));gap:12px;width:100%">${BASE_TOKENS.filter(t => t[0] === 'Radius').map(t => `<div class="av-stack" style="gap:8px"><div style="height:84px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-03);border-radius:var(${t[1]})"></div><span style="font-size:13px;font-weight:500">${t[1].replace('--av-radius-','')} · <span class="av-mono" style="color:var(--av-text-helper);font-size:11px">${t[2]}</span></span><span style="font-size:12px;color:var(--av-text-helper)">${t[3]}</span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Radius').map(t => `${t[1]}: ${t[2]}; /* ${t[3]} */`).join('\n')},
 {name:'Elevation', html:`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,180px),1fr));gap:16px;width:100%;padding:12px">${BASE_TOKENS.filter(t => t[0] === 'Elevation').map(t => `<div class="avd-box" style="box-shadow:var(${t[1]})">${t[3]}<span>${t[1]}</span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Elevation').map(t => `${t[1]}: ${t[2]};`).join('\n')},
 {name:'Z-index', html:`<div class="av-slist" style="width:100%;max-width:480px">${BASE_TOKENS.filter(t => t[0] === 'Z-index').map(t => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${t[1]}</span><span class="av-slist__k">${t[2]} · ${t[3]}</span></div>`).join('')}</div>`},
]},

{ id:'spacing-block', label:'Spacing block', desc:'Layout anatomy measured from the live dashboard.',
css:BASE_TOKENS.filter(t => t[0] === 'Layout').map(t => `${t[1]}: ${t[2]};`).join('\n'),
variants:[
 {name:'App shell', html:`<div style="display:flex;width:100%;height:260px;border:1px solid var(--av-border-subtle-00);border-radius:14px;overflow:hidden;font:10px var(--av-font-mono);color:var(--av-text-helper)"><div class="avd-measure" style="width:min(124px,100%);display:flex;align-items:center;justify-content:center">SIDEBAR<br>248 / 72</div><div style="flex:1;display:flex;flex-direction:column"><div class="avd-measure" style="height:40px;display:flex;align-items:center;justify-content:center">TOP BAR · 64</div><div style="flex:1;display:flex;justify-content:center;padding:16px 20px"><div class="avd-measure" style="width:100%;max-width:420px;display:flex;align-items:center;justify-content:center;text-align:center">MAIN · max 1280<br>pad 32 · clamp(16px,3vw,40px)<br>gap 28</div></div></div></div>`,
  code:`<div class="av-shell">\n  <aside class="av-sidebar">…</aside>\n  <div class="av-shell__body">\n    <header class="av-topbar">…</header>\n    <main class="av-main">…</main>\n  </div>\n</div>`},
 {name:'Card', html:`<div class="av-tile" style="max-width:360px;padding:0;gap:0;overflow:visible"><div class="avd-measure" style="margin:0;padding:20px;display:flex;flex-direction:column;gap:14px;border-radius:16px"><span class="avd-label" style="top:-8px;left:12px">PAD 20</span><span class="avd-measure" style="height:20px;background:var(--av-layer-03)"></span><span class="avd-label" style="top:44px;right:8px">GAP 14</span><span class="avd-measure" style="height:34px;background:var(--av-layer-03)"></span><span class="avd-measure" style="height:14px;background:var(--av-layer-03)"></span></div></div>`},
 {name:'Grids', html:`<div class="av-stack" style="width:100%;gap:16px"><div><span class="av-eyebrow">Client grid · minmax(min(100%,250px),1fr) · gap 12</span><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;margin-top:8px">${'<span class="avd-measure" style="height:56px"></span>'.repeat(4)}</div></div><div><span class="av-eyebrow">KPI grid · minmax(min(100%,220px),1fr) · gap 0 · hairline</span><div style="display:grid;grid-template-columns:repeat(4,1fr);margin-top:8px">${'<span class="avd-measure" style="height:56px"></span>'.repeat(4)}</div></div><div><span class="av-eyebrow">Hero row · flex 1 1 340 / 2 1 520 · gap 16</span><div style="display:flex;gap:16px;margin-top:8px"><span class="avd-measure" style="flex:1;height:56px"></span><span class="avd-measure" style="flex:2;height:56px"></span></div></div></div>`},
 {name:'Page header', html:`<div class="avd-measure" style="width:100%;padding:12px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px"><div class="av-stack" style="gap:8px"><span class="av-eyebrow">Eyebrow · 11 mono</span><span style="font-size:28px;font-weight:600;letter-spacing:-0.03em">Title · 28–36</span><span style="font-size:13px;color:var(--av-text-tertiary)">Subtitle · 15 · gap 8</span></div><span class="av-mono" style="font-size:10px;color:var(--av-text-info)">ACTIONS · GAP 12/20</span></div>`},
 {name:'Intro column', html:`<div class="avd-measure" style="width:100%;padding:14px;display:flex;gap:16px;font:10px var(--av-font-mono);color:var(--av-text-helper)"><span class="avd-measure" style="flex:1;height:90px;display:flex;align-items:center;justify-content:center">TEXT · flex 1 1 440</span><span class="avd-measure" style="flex:1;height:90px;display:flex;align-items:center;justify-content:center">FRAME · dashed</span></div>`},
]},

{ id:'effects', label:'Effects', desc:'Gradients, glows, patterns, dashed frames, focus, blur and motion — the texture layer of the dashboard.',
css:`/* glows */\n.av-glow-signal{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-signal),transparent 60%),var(--av-layer-01)}\n.av-glow-ion{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}\n.av-glow-dual{background:radial-gradient(90% 120% at 0% 100%,var(--av-background-glow-signal),transparent 60%),radial-gradient(80% 110% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}\n/* corner line pattern */\n.av-weave{position:absolute;right:0;top:0;width:min(220px,100%);height:160px;background:url(assets/patterns/line-weave-white.svg) right top/40px auto;opacity:.55;-webkit-mask-image:radial-gradient(100% 100% at 100% 0%,#000,transparent 72%);mask-image:radial-gradient(100% 100% at 100% 0%,#000,transparent 72%);filter:var(--av-pattern-filter);pointer-events:none}\n.av-lift{transition:transform var(--av-duration-base),border-color var(--av-duration-base)}.av-lift:hover{transform:translateY(-2px)}\n.av-blur-header{background:var(--av-background-header);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}\n.av-focus-ring{outline:2px solid var(--av-focus);outline-offset:2px}`,
variants:[
 {name:'Brand gradient', html:`<div style="width:100%;height:56px;border-radius:14px;background:var(--av-gradient-brand)"></div>`, code:`background: var(--av-gradient-brand);`},
 {name:'Text gradient', html:`<span class="av-type-display">AI-<span class="av-text-gradient">powered</span></span>`, code:`<span class="av-text-gradient">Zalak</span>`},
 {name:'Glow · signal', html:`<div class="av-tile av-glow-signal" style="width:100%;height:120px"></div>`, code:`<div class="av-tile av-glow-signal">…</div>`},
 {name:'Glow · ion', html:`<div class="av-tile av-glow-ion" style="width:100%;height:120px"></div>`, code:`<div class="av-tile av-glow-ion">…</div>`},
 {name:'Glow · dual (score card)', html:`<div class="av-tile av-glow-dual" style="width:100%;height:140px"></div>`, code:`<div class="av-tile av-glow-dual">…</div>`},
 {name:'Line-weave corner', html:`<div class="av-tile" style="position:relative;overflow:hidden;width:100%;height:160px"><div class="av-weave" aria-hidden="true"></div></div>`, code:`<div class="av-tile" style="position:relative;overflow:hidden">\n  <div class="av-weave" aria-hidden="true"></div>\n  …\n</div>`},
 {name:'Dashed frame', html:`<div class="av-frame" style="width:100%;height:160px"></div>`},
 {name:'Focus ring', html:`<div class="av-row"><button class="av-btn av-btn--secondary av-focus-ring">Focused</button><input class="av-input is-focus" style="max-width:220px" value="Focused field"></div>`, code:`:focus-visible { outline: 2px solid var(--av-focus); outline-offset: 2px; }\n/* fields */ box-shadow: 0 0 0 3px var(--av-focus-ring); border-color: var(--av-border-interactive);`},
 {name:'Hover lift', html:`<button class="av-tile av-tile--clickable" style="width:min(240px,100%)">Hover me</button>`},
 {name:'Backdrop blur', html:`<div style="position:relative;width:100%;height:120px;border-radius:14px;overflow:hidden;background:url(assets/patterns/line-weave-white.svg) 0 0/40px,var(--av-layer-03)"><div class="av-blur-header" style="position:absolute;inset:0 0 auto;height:56px;border-bottom:1px solid var(--av-border-subtle-00)"></div></div>`, code:`<header class="av-topbar av-blur-header">…</header>`},
 {name:'Motion · easing', html:`<div class="av-slist" style="width:100%">${BASE_TOKENS.filter(t => t[0] === 'Motion').map(t => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${t[1]}</span><span class="av-slist__k">${t[2]} — ${t[3]}</span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Motion').map(t => `${t[1]}: ${t[2]};`).join('\n')},
 {name:'Keyframes', html:`<div class="av-row" style="gap:20px"><span class="av-spinner"></span><span class="av-skeleton" style="width:min(120px,100%);height:14px"></span><span class="av-live-dot"></span><div class="av-menu" style="min-width:min(140px,100%)"><button class="av-menu__item">ctx-in</button></div></div>`, code:`av-spin · av-shimmer · av-pulse · av-ctx-in · av-sheet-in · av-slide-up · av-indet · av-pop · av-draw\n/* defined in components.css */`},
]},
];

export const PATTERNS = [
{ id:'app-shell', label:'App shell', desc:'Sticky sidebar + sticky blurred top bar + centred main column.',
css:`.av-shell{display:flex;min-height:100vh;background:var(--av-background);color:var(--av-text-primary)}
.av-shell__body{flex:1;min-width:0;display:flex;flex-direction:column}
.av-main{width:100%;max-width:var(--av-content-max);margin:0 auto;padding:32px clamp(16px,3vw,40px) 80px;display:flex;flex-direction:column;gap:28px}`,
variants:[{name:'Shell', html:`<div class="av-shell" style="min-height:0;height:420px;border:1px solid var(--av-border-subtle-00);border-radius:16px;overflow:hidden">
  <aside class="av-sidebar av-sidebar--collapsed" style="height:auto"><div class="av-sidebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"></div><nav class="av-sidebar__nav"><a class="av-nav-item" aria-current="page" href="#"><img class="av-nav-item__glyph" src="assets/mascots/magnifier.png" alt=""></a><a class="av-nav-item" href="#"><img class="av-nav-item__glyph" src="assets/mascots/shield.png" alt=""></a><a class="av-nav-item" href="#"><img class="av-nav-item__glyph" src="assets/mascots/key.png" alt=""></a></nav></aside>
  <div class="av-shell__body"><header class="av-topbar" style="position:relative"><button class="av-icon-btn av-topbar__menu" aria-label="Open menu">${ic('list',18,1.8)}</button><span class="av-breadcrumb" style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Avistar Demo Org / Tidewell</span><span style="flex:1"></span><button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect account</button></header>
  <main class="av-main" style="padding-top:24px"><div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Tidewell · 2 accounts</span><h1 class="av-page-head__title">Overview</h1></div></div></main></div>
</div>`}]},

{ id:'sidebar', label:'Sidebar nav', desc:'Section heads in mono, 3D mascot glyphs (scale + tilt when active), Ion gradient active pill, count badges, user footer with theme + collapse.',
css:`.av-sidebar{width:var(--av-sidebar-w);flex-shrink:0;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;border-right:1px solid var(--av-border-subtle-00);background:var(--av-background);overflow:hidden;z-index:var(--av-z-sidebar);transition:width var(--av-duration-slow) var(--av-ease-standard)}
.av-sidebar--collapsed{width:var(--av-sidebar-w-collapsed)}
.av-sidebar__brand{height:var(--av-header-h);flex-shrink:0;display:flex;align-items:center;gap:10px;padding:0 20px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-sidebar__nav{flex:1;overflow-y:auto;padding:16px 12px;display:flex;flex-direction:column;gap:2px}
.av-sidebar__head{display:block;padding:18px 10px 8px;font:500 10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-placeholder);white-space:nowrap}
.av-sidebar__head:first-child{padding-top:4px}
.av-nav-item{display:flex;align-items:center;gap:12px;width:100%;height:44px;padding:0 10px;border:0;border-radius:var(--av-radius-lg);background:transparent;color:var(--av-text-tertiary);font:500 14px var(--av-font-sans);text-align:left;text-decoration:none;white-space:nowrap;cursor:pointer;transition:background var(--av-duration-fast),color var(--av-duration-fast)}
.av-nav-item:hover{background:var(--av-button-ghost-hover);color:var(--av-text-primary)}
.av-nav-item[aria-current="page"]{background:var(--av-gradient-nav-active);box-shadow:inset 0 0 0 1px var(--av-border-nav-active);color:var(--av-text-primary)}
.av-nav-item__glyph{width:24px;height:24px;flex-shrink:0;margin:0 -1px;object-fit:contain;opacity:.8;transition:opacity var(--av-duration-base),transform var(--av-duration-slow) var(--av-ease-spring)}
.av-nav-item[aria-current="page"] .av-nav-item__glyph{opacity:1;transform:scale(1.12) rotate(-6deg)}
.av-nav-item__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis}
.av-nav-item__badge{padding:2px 7px;border-radius:var(--av-radius-pill);background:var(--av-tag-gray-bg);color:var(--av-tag-gray-text);font:11px var(--av-font-mono)}
.av-nav-item__badge--alert{background:var(--av-tag-signal-bg);color:var(--av-tag-signal-text)}
.av-sidebar--collapsed .av-nav-item__label,.av-sidebar--collapsed .av-nav-item__badge,.av-sidebar--collapsed .av-sidebar__head,.av-sidebar--collapsed .av-user__text{display:none}
.av-sidebar__foot{flex-shrink:0;border-top:1px solid var(--av-border-subtle-00);padding:12px;display:flex;flex-direction:column;gap:2px}
.av-user{display:flex;align-items:center;gap:10px;padding:8px 6px;white-space:nowrap}
.av-user__text{display:flex;flex-direction:column;min-width:0}.av-user__name{font-size:13px}.av-user__mail{font-size:12px;color:var(--av-text-helper);overflow:hidden;text-overflow:ellipsis}
.av-sidebar__action{display:flex;align-items:center;gap:12px;height:36px;padding:0 10px;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-helper);font:400 13px var(--av-font-sans);cursor:pointer;white-space:nowrap}
.av-sidebar__action:hover{background:var(--av-button-ghost-hover);color:var(--av-text-primary)}`,
variants:(() => { const item = (m, l, cur, b, alert) => `<a class="av-nav-item" href="#"${cur ? ' aria-current="page"' : ''}><img class="av-nav-item__glyph" src="assets/mascots/${m}.png" alt=""><span class="av-nav-item__label">${l}</span>${b ? `<span class="av-nav-item__badge${alert ? ' av-nav-item__badge--alert' : ''}">${b}</span>` : ''}</a>`;
 const foot = `<div class="av-sidebar__foot"><div class="av-user"><span class="av-avatar">Z</span><span class="av-user__text"><span class="av-user__name">Zalak</span><span class="av-user__mail">zalak@avistar.ai</span></span></div><button class="av-sidebar__action">${ic('sun',18,1.6)}Light mode</button><button class="av-sidebar__action">${ic('collapse',18,1.6)}Collapse</button></div>`;
 const nav = `<nav class="av-sidebar__nav">
    <span class="av-sidebar__head">Organization</span>
    ${item('clipboard','All clients')}
    ${item('bucket','Manage clients')}
    ${item('idcard','Members')}
    <span class="av-sidebar__head">Client</span>
    ${item('magnifier','Overview',true)}
    ${item('shield','Findings',false,'293',true)}
    ${item('key','Identities')}
    ${item('chip','Scans')}
    <span class="av-sidebar__head">Intel</span>
    ${item('clipboard','Bulletins',false,'3 new')}
    <span class="av-sidebar__head">Workspace</span>
    ${item('bucket','Settings')}
  </nav>`;
 const brand = `<div class="av-sidebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"><img src="assets/avistar-wordmark-light.svg" alt="" height="15" class="av-nav-item__label" style="flex:none"></div>`;
 return [
 {name:'Full', html:`<aside class="av-sidebar" style="height:760px;position:relative">\n  ${brand}\n  ${nav}\n  ${foot}\n</aside>`},
 {name:'Collapsed', html:`<aside class="av-sidebar av-sidebar--collapsed" style="height:560px;position:relative">\n  ${brand}\n  ${nav}\n  ${foot}\n</aside>`},
 {name:'Mobile drawer (open)', note:'Below 900px container width. Toggle data-open on the sidebar from the menu button; close on scrim tap / Esc / nav.', html:`<div class="av-demo-stage" style="height:600px;max-width:390px">
  <header class="av-mobilebar" style="display:flex"><button class="av-icon-btn" aria-label="Open menu" aria-expanded="true" aria-controls="av-nav">${ic('list',18,1.8)}</button><span class="av-mobilebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="24" height="22"><span style="font-size:14px;font-weight:600">Overview</span></span><button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button></header>
  <div class="av-drawer-scrim"></div>
  <aside class="av-sidebar av-sidebar--drawer" id="av-nav" data-open="true">
    ${brand}
    ${nav}
    ${foot}
  </aside>
</div>`, code:`<header class="av-mobilebar">…menu button…</header>\n<aside class="av-sidebar" id="av-nav" data-open="false">…</aside>\n<script>\n  const nav = document.getElementById('av-nav');\n  menuBtn.onclick = () => { const o = nav.dataset.open !== 'true'; nav.dataset.open = o; menuBtn.setAttribute('aria-expanded', o); };\n<\/script>`},
 {name:'Mobile bar', html:`<header class="av-mobilebar" style="display:flex;position:relative"><button class="av-icon-btn" aria-label="Open menu" aria-expanded="false">${ic('list',18,1.8)}</button><span class="av-mobilebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="24" height="22"><span style="font-size:14px;font-weight:600">Overview</span></span><button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button></header>`},
 {name:'Nav item states', html:`<div class="av-stack" style="width:min(240px,100%);gap:2px">${item('magnifier','Active',true)}${item('key','Default')}${item('shield','With alert badge',false,'293',true)}${item('clipboard','With neutral badge',false,'3 new')}</div>`},
 {name:'Footer', html:`<div style="width:min(248px,100%);border:1px solid var(--av-border-subtle-00);border-radius:14px">${foot}</div>`},
]; })()},

{ id:'top-bar', label:'Top bar', desc:'64px, blurred background, context breadcrumb pill, primary CTA and notifications.',
css:`.av-topbar{position:sticky;top:0;z-index:var(--av-z-header);height:var(--av-header-h);display:flex;align-items:center;gap:12px;padding:0 clamp(16px,3vw,40px);border-bottom:1px solid var(--av-border-subtle-00);background:var(--av-background-header);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.av-topbar__spacer{flex:1}
.av-topbar--intro{height:72px;padding:0 clamp(20px,4vw,48px);border-bottom-color:var(--av-border-divider);background:var(--av-background-intro)}`,
variants:[
 {name:'Dashboard', html:`<header class="av-topbar" style="position:relative">
  <button class="av-icon-btn av-topbar__menu" aria-label="Open menu">${ic('list',18,1.8)}</button>
  <nav aria-label="Context"><ol class="av-breadcrumb av-breadcrumb--context"><li>Avistar Demo Org</li><li class="av-breadcrumb__sep">/</li><li style="color:var(--av-text-primary)">Tidewell</li><li class="av-breadcrumb__sep">/</li><li style="display:flex;align-items:center;gap:8px"><img class="av-breadcrumb__logo" src="assets/logo-aws-dark.svg" alt="AWS"><span aria-current="page">Production Demo Account</span></li><li class="av-breadcrumb__chev">${ic('chevDown',16,2)}</li></ol></nav>
  <span class="av-topbar__spacer"></span>
  <button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect account</button>
  <button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button>
</header>`},
 {name:'Intro (org picker)', html:`<header class="av-topbar av-topbar--intro" style="position:relative">
  <span class="av-row" style="gap:10px"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"><img src="assets/avistar-wordmark-light.svg" alt="" height="15"></span>
  <span class="av-topbar__spacer"></span>
  <span class="av-row" style="gap:12px"><span class="av-avatar av-avatar--md">Z</span><span style="font-size:13px;color:var(--av-text-muted-intro)">zalak@avistar.ai</span></span>
</header>`},
]},

{ id:'story-banner', label:'Story banner', desc:'Contextual help strip at the top of each page: illustration, title, one line, “Help guide →”.',
css:`.av-story{position:relative;display:flex;align-items:center;gap:14px;padding:8px 16px 8px 8px;border-radius:var(--av-radius-2xl);border:1px solid var(--av-border-subtle-01);background:radial-gradient(60% 160% at 0% 100%,color-mix(in srgb,var(--av-support-critical) 8%,transparent),transparent 60%),var(--av-layer-01);overflow:hidden}
.av-story__media{flex:0 0 auto;width:72px;aspect-ratio:4/3;border-radius:var(--av-radius-md);background:var(--av-layer-03) center/cover no-repeat}
.av-story__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.av-story__title{font-size:14px;font-weight:600;letter-spacing:-0.01em;line-height:1.3}
.av-story__text{font-size:13px;line-height:1.45;color:var(--av-text-tertiary)}
.av-story--lg{padding:16px 24px 16px 16px;gap:20px}.av-story--lg .av-story__media{width:min(144px,100%)}.av-story--lg .av-story__title{font-size:17px}.av-story--lg .av-story__text{font-size:15px}`,
variants:[
 {name:'Default', html:`<div class="av-story"><div class="av-story__media" style="background-image:url(assets/illus/clay-flow-1k.jpg)" aria-hidden="true"></div><div class="av-story__body"><span class="av-story__title">Everything flows into one score.</span><span class="av-story__text">Every scan feeds the number below. Close the top three fixes and watch it climb.</span></div><a class="av-link av-link--action" href="#" style="font-size:13px">Help guide${ic('arrow',14,2)}</a></div>`},
 {name:'Large', html:`<div class="av-story av-story--lg"><div class="av-story__media" style="background-image:url(assets/illus/clay-flow-1k.jpg)" aria-hidden="true"></div><div class="av-story__body"><span class="av-story__title">Everything flows into one score.</span><span class="av-story__text">Every scan feeds the number below.</span></div><a class="av-link av-link--action" href="#">Help guide${ic('arrow',16,2)}</a></div>`},
]},

{ id:'page-header', label:'Page header', desc:'Mono eyebrow (context) → H1 → one-line status. Actions bottom-right: link action then primary.',
css:`.av-page-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px}
.av-page-head__text{display:flex;flex-direction:column;gap:8px;min-width:0;flex:1 1 min(100%,280px)}
.av-page-head__title{margin:0;font-size:clamp(28px,3vw,36px);font-weight:600;letter-spacing:-0.03em;line-height:1.05}
.av-page-head__sub{margin:0;font-size:15px;color:var(--av-text-tertiary);text-wrap:pretty}
.av-page-head__actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px}`,
variants:[
 {name:'Overview', html:`<div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Hydroponic Cloud Industries · 3 accounts</span><h1 class="av-page-head__title">Overview</h1><p class="av-page-head__sub">Last scan finished 2 hours ago. Your posture improved 6 points this week.</p></div><div class="av-page-head__actions"><a class="av-link av-link--action" href="#">Schedule scans${ic('arrow',16,2)}</a><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button></div></div>`},
 {name:'With search + switcher', html:`<div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Avistar Demo Org · 10 clients</span><h1 class="av-page-head__title">Your clients</h1></div><div class="av-page-head__actions" style="gap:12px"><div class="av-search" style="width:min(320px,100%)">${ic('search',18,2)}<input class="av-search__input" placeholder="Search clients"></div><div class="av-switcher"><button aria-pressed="true">${ic('grid',14)}Cards</button><button aria-pressed="false">${ic('list',14)}List</button></div></div></div>`},
 {name:'Secondary actions', html:`<div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Avistar Demo Org</span><h1 class="av-page-head__title">All clients</h1><p class="av-page-head__sub">10 clients · 30 cloud accounts</p></div><div class="av-page-head__actions" style="gap:10px"><button class="av-btn av-btn--secondary">Portfolio report</button><button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Add client</button></div></div>`},
]},

{ id:'posture-score', label:'Posture score', desc:'Hero card. Ring with brand-gradient value, gradient numeral, rating + delta chip, next-step hint, link. SVG ring = lightweight fallback. The production dot-matrix ring lives in Cards & graphs › Posture score card.',
css:`.av-score-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-wrap:wrap;align-items:center;gap:24px;padding:24px;border:1px solid var(--av-border-subtle-01);border-radius:var(--av-radius-2xl);background:radial-gradient(90% 120% at 0% 100%,var(--av-background-glow-signal),transparent 60%),radial-gradient(80% 110% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}
.av-score-ring{position:relative;width:min(160px,100%);height:160px;flex-shrink:0}
.av-score-ring svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.av-score-ring__track{stroke:var(--av-layer-04);stroke-dasharray:2 4}
.av-score-ring__value{stroke-linecap:round;transition:stroke-dashoffset 1.2s var(--av-ease-standard)}
.av-score-ring__center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.av-score-ring__num{font-size:44px;font-weight:600;letter-spacing:-0.04em;line-height:1;font-variant-numeric:tabular-nums;background:var(--av-gradient-brand-45);-webkit-background-clip:text;background-clip:text;color:transparent}
.av-score-ring__of{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-score-card__body{position:relative;flex:1;min-width:min(180px,100%);display:flex;flex-direction:column;gap:10px}
.av-score-card__rating{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:20px;font-weight:600;letter-spacing:-0.02em}
.av-score-card__hint{margin:0;font-size:14px;line-height:1.5;color:var(--av-text-tertiary)}.av-score-card__hint b{color:var(--av-text-primary);font-weight:500}
.av-score-ring--sm{width:96px;height:96px}.av-score-ring--sm .av-score-ring__num{font-size:24px}`,
variants:(() => { const ring = (v, cls = '', id = 'g1') => { const C = 389.6; return `<div class="av-score-ring ${cls}"><svg viewBox="0 0 140 140" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FF4B1F"/><stop offset="1" stop-color="#1FDDFF"/></linearGradient></defs><circle class="av-score-ring__track" cx="70" cy="70" r="62" fill="none" stroke-width="10"/><circle class="av-score-ring__value" cx="70" cy="70" r="62" fill="none" stroke="url(#${id})" stroke-width="10" stroke-dasharray="${C}" stroke-dashoffset="${(C * (1 - v / 100)).toFixed(1)}"/></svg><div class="av-score-ring__center"><span class="av-score-ring__num">${v}</span><span class="av-score-ring__of">/ 100</span></div></div>`; }; return [
 {name:'Card', html:`<div class="av-score-card"><div class="av-weave" aria-hidden="true"></div>
  ${ring(64)}
  <div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div><p class="av-score-card__hint">Close the 2 public buckets to reach <b>71</b>. That's about 4 minutes of work.</p><a class="av-link av-link--action" href="#" style="font-size:13px">Start with this fix${ic('arrow',14,2)}</a></div>
</div>`},
 {name:'Ring sizes', html:`<div class="av-row" style="gap:32px">${ring(86,'','g2')}${ring(58,'av-score-ring--sm','g3')}</div>`},
]; })()},

{ id:'kpi', label:'KPI tile', desc:'4-up grid with hairline dividers. Glyph + label + sparkline · big number + unit · delta. Ion = improving, Orange = worsening. Glow tint per tile.',
css:`.av-kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);overflow:hidden}
.av-kpi{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:14px;min-width:0;padding:20px;border:0;box-shadow:var(--av-shadow-hairline);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:filter var(--av-duration-fast)}
.av-kpi:hover{filter:brightness(1.12)}
.av-kpi--ion{background:radial-gradient(80% 100% at 100% 0%,color-mix(in srgb,var(--av-support-low) 9%,transparent),transparent 65%)}
.av-kpi--signal{background:radial-gradient(80% 100% at 100% 0%,color-mix(in srgb,var(--av-support-critical) 12%,transparent),transparent 65%)}
.av-kpi__head{display:flex;justify-content:space-between;align-items:center;gap:8px}
.av-kpi__label{display:flex;align-items:center;gap:10px;min-width:0;font-size:13px;color:var(--av-text-secondary);white-space:nowrap}
.av-kpi__glyph{width:28px;height:28px;flex-shrink:0;object-fit:contain}
.av-kpi__spark{flex-shrink:1;min-width:40px}
.av-kpi__spark path{stroke-dasharray:1;animation:av-draw 1.2s var(--av-ease-standard) both}
.av-kpi__value{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.av-kpi__num{font-size:34px;font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}
.av-kpi__unit{font-size:13px;color:var(--av-text-helper)}
.av-kpi__delta{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--av-text-info)}
.av-kpi__delta--up{color:var(--av-support-high)}`,
variants:(() => { const k = (g, l, n, u, d, up, data, tint) => `  <button class="av-kpi av-kpi--${tint}"><div class="av-kpi__head"><span class="av-kpi__label"><img class="av-kpi__glyph" src="assets/icons-glass/${g}.svg" alt="">${l}</span><svg class="av-kpi__spark" width="72" height="24" viewBox="0 0 72 24" fill="none"><path d="${spark(data)}" stroke="${up ? 'var(--av-support-high)' : 'var(--av-support-low)'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/></svg></div><div class="av-kpi__value"><span class="av-kpi__num">${n}</span><span class="av-kpi__unit">${u}</span></div><span class="av-kpi__delta${up ? ' av-kpi__delta--up' : ''}">${ic(up ? 'up' : 'down',12,2.2)}${d}</span></button>`; return [
 {name:'Grid', html:`<div class="av-kpi-grid">
${k('alert','Open findings','293','across 139 resources','12 fewer than last scan',0,[320,310,318,300,305,296,300,293],'ion')}
${k('threat','Critical + high','69','need action','3 new since Oct 6',1,[60,72,64,66,62,63,60,69],'signal')}
${k('fingerprint','Risky identities','18','of 48 non-human','2 fewer this week',0,[24,23,23,22,22,21,20,18],'ion')}
${k('cloud','Coverage','2/3','accounts scanned','1 waiting on permissions',1,[1,1,1,1,2,2,2,2],'signal')}
</div>`},
 {name:'Single', html:`<div class="av-kpi-grid" style="max-width:320px">${k('alert','Open findings','293','across 139 resources','12 fewer than last scan',0,[320,310,318,300,305,296,300,293],'ion')}</div>`},
]; })()},

{ id:'client-card', label:'Client card', desc:'Intro picker card — dashed border, 4px radius. Name + meta, posture numeral coloured by scale, provider mono tags, footer with status dot and “Open →”. Archived = 50% + not-allowed.',
css:`.av-client-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:12px}
.av-client-card{position:relative;display:flex;flex-direction:column;gap:14px;width:100%;min-height:168px;padding:18px;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-xs);background:var(--av-layer-intro);color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;animation:av-slide-up .5s var(--av-ease-enter) both;transition:border-color var(--av-duration-base),background var(--av-duration-base),transform var(--av-duration-base)}
.av-client-card:hover{border-color:var(--av-border-dashed-hover);background:var(--av-layer-intro-hover);transform:translateY(-2px)}
.av-client-card:disabled{opacity:.5;cursor:not-allowed;transform:none}
.av-client-card__top{display:flex;align-items:flex-start;gap:12px}
.av-client-card__id{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.av-client-card__name{font-size:16px;font-weight:500;letter-spacing:-0.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-client-card__meta{font-size:13px;color:var(--av-text-meta)}
.av-client-card__score{display:flex;flex-direction:column;align-items:flex-end;gap:2px}
.av-client-card__num{font:500 22px/1 var(--av-font-mono)}
.av-client-card__label{font:10px var(--av-font-mono);letter-spacing:.1em;color:var(--av-text-label)}
.av-client-card__tags{display:flex;flex-wrap:wrap;gap:6px}
.av-client-card__foot{margin-top:auto;display:flex;align-items:center;gap:10px;padding-top:12px;border-top:1px solid var(--av-border-divider);font-size:12px;color:var(--av-text-meta)}
.av-client-card__dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:currentColor}
.av-client-card__status{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-client-card__open{color:var(--av-text-primary)}
.av-posture--poor{color:var(--av-posture-poor)}.av-posture--fair{color:var(--av-posture-fair)}.av-posture--good{color:var(--av-posture-good)}.av-posture--none{color:var(--av-support-neutral)}`,
variants:(() => { const c = (n, m, s, cls, tags, foot, dis) => `  <button class="av-client-card"${dis ? ' disabled' : ''}>
    <span class="av-client-card__top"><span class="av-client-card__id"><span class="av-client-card__name">${n}</span><span class="av-client-card__meta">${m}</span></span><span class="av-client-card__score"><span class="av-client-card__num av-posture--${cls}">${s}</span><span class="av-client-card__label">POSTURE</span></span></span>
    <span class="av-client-card__tags">${tags.map(t => `<span class="av-tag av-tag--mono">${t}</span>`).join('')}</span>
    <span class="av-client-card__foot"><span class="av-client-card__dot av-posture--${cls}"></span><span class="av-client-card__status">${foot}</span>${dis ? '' : '<span class="av-client-card__open">Open →</span>'}</span>
  </button>`; return [
 {name:'Grid · all states', html:`<div class="av-client-grid">
${c('Hydroponic Cloud','AgriTech · 3 accounts',64,'poor',['AWS','AZURE','GCP'],'293 open · scanned 2h ago')}
${c('Ashgrove Health','Healthcare · 4 accounts',78,'fair',['AWS','AZURE'],'141 open · scanned 40m ago')}
${c('Corvane','SaaS · 5 accounts',86,'good',['AWS','AZURE','GCP'],'38 open · scanned 15m ago')}
${c('Acme Health','Archived · no accounts','—','none',[],'Archived',true)}
</div>`},
 {name:'Poor', html:`<div style="max-width:300px">${c('Northpeak Clinics','Healthcare · 2 accounts',58,'poor',['AZURE'],'204 open · scanned 5h ago')}</div>`},
 {name:'Good', html:`<div style="max-width:300px">${c('Harbor Dental Group','Healthcare · 1 account',91,'good',['AWS'],'12 open · scanned 1h ago')}</div>`},
]; })()},

{ id:'org-row', label:'Organization row', desc:'Mascot avatar with initials badge, name + meta, mono role tag, round settings button, arrow. Selected = solid border + inverse arrow.',
css:`.av-org-list{display:flex;flex-direction:column;gap:10px}
.av-org-row{position:relative;display:flex;align-items:center;gap:16px;width:100%;min-height:76px;padding:14px 18px;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-xs);background:transparent;color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;transition:border-color var(--av-duration-base),background var(--av-duration-base)}
.av-org-row:hover{border-color:var(--av-border-dashed-hover);background:var(--av-background-hover)}
.av-org-row[aria-pressed="true"]{border-style:solid;border-color:var(--av-border-selected);background:var(--av-background-hover)}
.av-org-row__avatar{position:relative;width:52px;height:52px;flex-shrink:0;margin:-4px 0}
.av-org-row__avatar img{width:100%;height:100%;object-fit:contain}
.av-org-row__init{position:absolute;right:-6px;bottom:-2px;min-width:24px;height:20px;padding:0 5px;border-radius:6px;background:var(--av-layer-05);border:1px solid var(--av-border-strong-01);display:flex;align-items:center;justify-content:center;font:600 10px var(--av-font-mono)}
.av-org-row__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.av-org-row__name{font-size:16px;font-weight:500;letter-spacing:-0.01em}
.av-org-row__meta{font-size:13px;color:var(--av-text-meta)}
.av-org-row__actions{display:flex;align-items:center;gap:12px}`,
variants:(() => { const o = (m, i, c, n, meta, role, sel) => `  <div class="av-org-row" role="button" tabindex="0"${sel ? ' aria-pressed="true"' : ''}>
    <span class="av-org-row__avatar"><img src="assets/mascots/${m}.png" alt=""><span class="av-org-row__init" style="color:${c}">${i}</span></span>
    <span class="av-org-row__text"><span class="av-org-row__name">${n}</span><span class="av-org-row__meta">${meta}</span></span>
    <span class="av-org-row__actions"><span class="av-tag av-tag--mono av-tag--role">${role}</span><button class="av-icon-btn av-icon-btn--round" aria-label="Settings for ${n}">${ic('gear',18,1.6)}</button><button class="av-icon-btn av-icon-btn--arrow"${sel ? ' aria-pressed="true"' : ''} aria-label="Open">${ic(sel ? 'chevDown' : 'arrow',14,2)}</button></span>
  </div>`; return [
 {name:'List', html:`<div class="av-org-list">
${o('shield','AD','var(--av-support-critical)','Avistar Demo Org','10 clients · 30 cloud accounts','OWNER')}
${o('key','RP','var(--av-support-low)','Ridgeway Partners MSP','3 clients · 7 cloud accounts','ANALYST')}
</div>`},
 {name:'Selected', html:o('shield','AD','var(--av-support-critical)','Avistar Demo Org','10 clients · 30 cloud accounts','OWNER',true)},
]; })()},

{ id:'welcome', label:'Welcome hero', desc:'Intro screen: brand chip, display heading with gradient name, intro copy, list label, XL primary.',
css:`.av-brand-chip{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border:1px solid var(--av-border-strong-02);border-radius:var(--av-radius-sm);font:500 11px var(--av-font-mono);letter-spacing:.14em;color:var(--av-text-muted-intro)}
.av-brand-chip img{width:14px;height:12px}
.av-welcome{display:flex;flex-direction:column;gap:28px;max-width:640px}
.av-welcome__title{margin:0;font-size:clamp(40px,4.6vw,72px);font-weight:600;letter-spacing:-0.045em;line-height:.98;text-wrap:balance}
.av-welcome__lead{margin:0;font-size:17px;line-height:1.55;color:var(--av-text-muted-intro);max-width:30em}`,
variants:[{name:'Hero', html:`<div class="av-welcome">
  <span class="av-brand-chip"><img src="assets/mark-shape2.svg" alt="">SECURITY COMMAND CENTER</span>
  <h1 class="av-welcome__title">Welcome back, <span class="av-text-gradient">Zalak</span>.</h1>
  <p class="av-welcome__lead">Choose an organization, then the client whose cloud you want to review. You can switch either one later from the account menu.</p>
  <span class="av-eyebrow" style="color:var(--av-text-label)">Organizations</span>
  <button class="av-btn av-btn--primary av-btn--xl" style="align-self:flex-start">${ic('plus',16,2.2)}Create organization</button>
</div>`}]},

{ id:'intro-frame', label:'Intro frame', desc:'Dashed panel (16px radius), centred statement and mono stats footer.',
css:`.av-frame{position:relative;display:flex;flex-direction:column;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-2xl);padding:24px}
.av-frame__body{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px}
.av-frame__statement{margin:0;font-size:clamp(24px,2.6vw,40px);font-weight:600;letter-spacing:-0.035em;line-height:1.08}
.av-frame__stats{display:flex;justify-content:space-between;gap:16px;padding:0 16px;font:500 11px var(--av-font-mono);letter-spacing:.14em;color:var(--av-text-helper)}`,
variants:[{name:'Frame', html:`<div class="av-frame" style="min-height:340px">
  <div class="av-frame__body"><p class="av-frame__statement">Secure non-human identities<br>with <span class="av-text-gradient">AI-powered</span> filtering.</p></div>
  <div class="av-frame__stats"><span>2 ORGANIZATIONS</span><span>LAST SIGN-IN · TODAY 09:12</span></div>
</div>`}]},

{ id:'avatar', label:'Avatar', desc:'Initial circle (Ion letter on layer-03), square org/identity avatar, stacked group, presence dot.',
css:`.av-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;flex-shrink:0;border-radius:50%;background:var(--av-layer-03);border:1px solid var(--av-border-strong-01);font:600 12px var(--av-font-sans);color:var(--av-text-info)}
.av-avatar--sm{width:24px;height:24px;font-size:10px}.av-avatar--md{width:32px;height:32px}.av-avatar--lg{width:44px;height:44px;font-size:15px}
.av-avatar--square{border-radius:var(--av-radius-lg);width:36px;height:36px;font:600 11px var(--av-font-mono);color:var(--av-support-medium)}
.av-avatar__presence{position:absolute;right:-1px;bottom:-1px;width:10px;height:10px;border-radius:50%;background:var(--av-support-success);border:2px solid var(--av-background)}
.av-avatar-stack{display:flex}.av-avatar-stack .av-avatar{margin-left:-8px;border:2px solid var(--av-layer-01)}.av-avatar-stack .av-avatar:first-child{margin-left:0}`,
variants:[
 {name:'Sizes', html:`<div class="av-row" style="gap:20px"><span class="av-avatar av-avatar--sm">Z</span><span class="av-avatar">Z</span><span class="av-avatar av-avatar--md">Z</span><span class="av-avatar av-avatar--lg">ZP</span></div>`},
 {name:'Square', html:`<div class="av-row"><span class="av-avatar av-avatar--square">NW</span><span class="av-avatar av-avatar--square" style="color:var(--av-support-low)">CI</span></div>`},
 {name:'Stack', html:`<span class="av-avatar-stack"><span class="av-avatar av-avatar--md">ZP</span><span class="av-avatar av-avatar--md" style="color:var(--av-support-medium)">AK</span><span class="av-avatar av-avatar--md" style="color:var(--av-support-high)">MR</span><span class="av-avatar av-avatar--md" style="color:var(--av-text-tertiary)">+4</span></span>`},
 {name:'With presence + text', html:`<div class="av-user"><span class="av-avatar av-avatar--md">Z<span class="av-avatar__presence"></span></span><span class="av-user__text"><span class="av-user__name">Zalak</span><span class="av-user__mail">zalak@avistar.ai</span></span></div>`},
]},

{ id:'fix-list', label:'Fix list', desc:'“Fix these first” — ranked findings with severity, resource, effort and one action each.',
css:`.av-fix-list{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-fix{display:grid;grid-template-columns:28px minmax(0,1fr) auto auto;gap:16px;align-items:center;padding:14px 16px;border-bottom:1px solid var(--av-border-subtle-00);transition:background var(--av-duration-fast)}
.av-fix:last-child{border-bottom:0}.av-fix:hover{background:var(--av-layer-hover-01)}
.av-fix__rank{font:500 12px var(--av-font-mono);color:var(--av-text-label)}
.av-fix__body{min-width:0;display:flex;flex-direction:column;gap:4px}
.av-fix__title{font-size:14px;font-weight:500}.av-fix__meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-fix__effort{font-size:12px;color:var(--av-text-helper);white-space:nowrap}
.av-section-head{display:flex;align-items:center;gap:12px}.av-section-head img{width:52px;height:52px;object-fit:contain;margin:-8px 0 -8px -6px}
.av-section-head__title{margin:0;font-size:18px;font-weight:600;letter-spacing:-0.015em}.av-section-head__sub{font-size:13px;color:var(--av-text-helper)}`,
variants:[{name:'List', html:`<div class="av-stack" style="gap:14px"><div class="av-section-head"><img src="assets/mascots/magnifier.png" alt=""><div class="av-stack" style="gap:4px"><h2 class="av-section-head__title">Fix these first</h2><span class="av-section-head__sub">Ranked by score impact. One fix each.</span></div></div>
<div class="av-fix-list">
  <div class="av-fix"><span class="av-fix__rank">01</span><span class="av-fix__body"><span class="av-fix__title">S3 bucket is publicly readable</span><span class="av-fix__meta"><span class="av-tag av-tag--critical"><span class="av-tag__dot"></span>Critical</span>hci-exports-prod · +4 pts</span></span><span class="av-fix__effort">~2 min</span><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></div>
  <div class="av-fix"><span class="av-fix__rank">02</span><span class="av-fix__body"><span class="av-fix__title">Access key unused for 412 days</span><span class="av-fix__meta"><span class="av-tag av-tag--high"><span class="av-tag__dot"></span>High</span>AKIA…7Q2F · +2 pts</span></span><span class="av-fix__effort">~1 min</span><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></div>
  <div class="av-fix"><span class="av-fix__rank">03</span><span class="av-fix__body"><span class="av-fix__title">Role allows iam:* on all resources</span><span class="av-fix__meta"><span class="av-tag av-tag--medium"><span class="av-tag__dot"></span>Medium</span>ci-deploy-runner · +1 pt</span></span><span class="av-fix__effort">~5 min</span><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></div>
</div></div>`}]},

{ id:'charts', label:'Charts', desc:'Sparkline (72×24, 1.5 stroke), stacked severity bar, trend bars with brand gradient, legend rows.',
css:`.av-chart-card{display:flex;flex-direction:column;gap:14px;padding:20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01)}
.av-chart-card__head{display:flex;justify-content:space-between;align-items:baseline;font-size:14px;font-weight:600}
.av-bars{display:flex;align-items:flex-end;gap:8px;height:160px;border-bottom:1px solid var(--av-border-subtle-01)}
.av-bars__bar{flex:1;border-radius:4px 4px 0 0;background:linear-gradient(0deg,var(--av-gradient-start),var(--av-gradient-end));transition:height .6s var(--av-ease-standard)}
.av-stackbar{display:flex;gap:2px;height:12px;border-radius:var(--av-radius-pill);overflow:hidden}
.av-legend{display:flex;flex-direction:column;gap:8px}.av-legend__row{display:flex;align-items:center;gap:10px;font-size:13px}
.av-legend__sw{width:10px;height:10px;border-radius:3px}.av-legend__n{flex:1;color:var(--av-text-secondary)}.av-legend__v{font-variant-numeric:tabular-nums;color:var(--av-text-helper)}`,
variants:[
 {name:'Sparklines', html:`<div class="av-row" style="gap:24px"><svg width="72" height="24" viewBox="0 0 72 24" fill="none"><path d="${spark([320,310,318,300,305,296,300,293])}" stroke="var(--av-support-low)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="72" height="24" viewBox="0 0 72 24" fill="none"><path d="${spark([60,72,64,66,62,63,60,69])}" stroke="var(--av-support-high)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`},
 {name:'Severity stack', html:`<div class="av-chart-card" style="max-width:420px"><div class="av-chart-card__head">Open by severity<span class="av-mono" style="font-size:11px;color:var(--av-text-helper)">293</span></div><div class="av-stackbar"><span style="flex:5;background:var(--av-support-critical)"></span><span style="flex:64;background:var(--av-support-high)"></span><span style="flex:133;background:var(--av-support-medium)"></span><span style="flex:91;background:var(--av-support-low)"></span></div><div class="av-legend"><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-critical)"></span><span class="av-legend__n">Critical</span><span class="av-legend__v">5</span></div><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-high)"></span><span class="av-legend__n">High</span><span class="av-legend__v">64</span></div><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-medium)"></span><span class="av-legend__n">Medium</span><span class="av-legend__v">133</span></div><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-low)"></span><span class="av-legend__n">Low</span><span class="av-legend__v">91</span></div></div></div>`},
 {name:'Trend bars', html:`<div class="av-chart-card" style="max-width:420px"><div class="av-chart-card__head">Findings by week<span class="av-eyebrow">12 weeks</span></div><div class="av-bars">${[40,55,35,70,62,85,48,66,90,58,52,44].map(h => `<span class="av-bars__bar" style="height:${h}%"></span>`).join('')}</div></div>`},
]},

{ id:'empty-state', label:'Empty & error', desc:'Mascot + title + one line + one action. Dashed border for empty, solid for error.',
css:`.av-empty{display:flex;flex-direction:column;align-items:center;gap:12px;padding:40px 24px;border:1px dashed var(--av-border-strong-01);border-radius:var(--av-radius-2xl);text-align:center}
.av-empty--error{border-style:solid;border-color:var(--av-border-subtle-00);background:var(--av-layer-01)}
.av-empty__art{width:72px;height:72px;object-fit:contain}
.av-empty__title{margin:0;font-size:16px;font-weight:600}
.av-empty__text{margin:0;max-width:34ch;font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}
.av-empty--inline{flex-direction:row;text-align:left;padding:10px;border:0;gap:10px;font-size:13px}`,
variants:[
 {name:'Empty', html:`<div class="av-empty"><img class="av-empty__art" src="assets/mascots/bucket.png" alt=""><h3 class="av-empty__title">No clouds connected</h3><p class="av-empty__text">Connect AWS, GCP or Azure to start mapping machine identities.</p><button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect a cloud</button></div>`},
 {name:'Error', html:`<div class="av-empty av-empty--error"><img class="av-empty__art" src="assets/mascots/chip.png" alt=""><h3 class="av-empty__title">Couldn't load findings</h3><p class="av-empty__text">The scanner timed out. Your data is safe — try again.</p><button class="av-btn av-btn--secondary">${ic('refresh',14)}Retry</button></div>`},
 {name:'No results', html:`<div class="av-empty"><img class="av-empty__art" src="assets/mascots/magnifier.png" alt=""><h3 class="av-empty__title">No clients match “zeta”</h3><button class="av-btn av-btn--ghost">Clear search</button></div>`},
 {name:'Inline (in menu)', html:`<div class="av-empty av-empty--inline"><img src="assets/mascots/bucket.png" alt="" style="width:44px;height:44px;object-fit:contain">This client is archived and has no accounts.</div>`},
]},
];
