// Avistar Dashboard — component library (CSS + HTML variants). Every preview renders the exact snippet shown as code.
export const ICONS = {
  plus:'M12 5v14M5 12h14', x:'M6 6l12 12M18 6 6 18', check:'M5 12l5 5 9-10', chevDown:'M6 9l6 6 6-6', chevRight:'M9 6l6 6-6 6', chevLeft:'M15 6l-6 6 6 6', chevUp:'M6 15l6-6 6 6',
  arrow:'M5 12h14M13 6l6 6-6 6', arrowLeft:'M19 12H5M11 6l-6 6 6 6', up:'M12 19V5M6 11l6-6 6 6', down:'M12 5v14M6 13l6 6 6-6',
  search:'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4', bell:'M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0',
  download:'M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14', upload:'M12 20V9M7.5 13.5 12 9l4.5 4.5M5 4h14', calendar:'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4', play:'M7 5v14l11-7z',
  ext:'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6', list:'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01', grid:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  copy:'M9 9h11v11H9zM5 15H4V4h11v1', report:'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5', refresh:'M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4',
  dots:'M5 12h.01M12 12h.01M19 12h.01', logout:'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10', mail:'M4 6h16v12H4zM4 7l8 6 8-6', filter:'M4 5h16l-6 8v6l-4-2v-4z',
  gear:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  eye:'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', eyeOff:'M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.4 5.2A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.1 6.1C3.6 7.8 2 12 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4.3-1',
  info:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01', alert:'M12 3l10 18H2zM12 10v4M12 17h.01', file:'M6 3h9l4 4v14H6zM14 3v5h5',
  sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4', moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  collapse:'M4 4h16v16H4zM9 4v16M15 10l-2 2 2 2', key:'M15 7a4 4 0 1 0-3.9 5L4 19v2h3v-2h2v-2h2l1.1-1.1A4 4 0 0 0 15 7z', lock:'M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4',
  shield:'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z', cloud:'M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19 10a4 4 0 0 1-1 8z', minus:'M5 12h14', trash:'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  edit:'M4 20h4L19 9l-4-4L4 16zM14 6l4 4', link:'M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1', spark:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'
};
export const ic = (n, s = 16, w = 1.8, fill) => `<svg class="av-icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[n]}"/></svg>`;

export const BASE_CSS = `/* Avistar Dashboard · components.css · v2.0 — requires tokens.css */
.av-root{font-family:var(--av-font-sans);color:var(--av-text-primary);-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4}
.av-root *,.av-root *::before,.av-root *::after{box-sizing:border-box}
.av-icon{display:inline-block;flex-shrink:0;vertical-align:middle}
.av-mono{font-family:var(--av-font-mono)}
.av-eyebrow{font:500 11px/1.45 var(--av-font-mono);text-wrap:balance;letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}
.av-text-gradient{background:var(--av-gradient-brand);-webkit-background-clip:text;background-clip:text;color:transparent}
.av-sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.av-stack{display:flex;flex-direction:column;gap:12px}.av-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px}
.av-demo-stage{position:relative;height:380px;overflow:hidden;border-radius:var(--av-radius-2xl);border:1px solid var(--av-border-subtle-00);background:var(--av-background)}
@keyframes av-spin{to{transform:rotate(360deg)}}
@keyframes av-shimmer{0%{background-position:-200px 0}100%{background-position:200px 0}}
@keyframes av-pulse{50%{opacity:.35}}
@keyframes av-ctx-in{0%{opacity:0;transform:translateY(-8px) scale(.94);filter:blur(6px)}60%{opacity:1;filter:blur(0)}100%{transform:none}}
@keyframes av-sheet-in{from{transform:translateX(40px);opacity:0}}
@keyframes av-slide-up{from{opacity:0;transform:translateY(8px)}}
@keyframes av-indet{0%{transform:translateX(-100%)}100%{transform:translateX(250%)}}
@keyframes av-pop{0%{transform:scale(0) rotate(-30deg)}60%{transform:scale(1.35)}100%{transform:none}}
@keyframes av-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
`;

const cal = (sel = [14], range) => {
  const cells = ['27','28','29','30'].map(d => `<span class="av-calendar__day av-calendar__day--muted">${d}</span>`);
  for (let d = 1; d <= 31; d++) {
    let c = 'av-calendar__day';
    if (d === 30) c += ' av-calendar__day--today';
    if (range && d > range[0] && d < range[1]) c += ' av-calendar__day--range';
    if (sel.includes(d)) c += ' av-calendar__day--selected';
    cells.push(`<button class="${c}"${sel.includes(d) ? ' aria-pressed="true"' : ''}>${d}</button>`);
  }
  return `<div class="av-calendar" role="dialog" aria-label="Choose date">
  <div class="av-calendar__head">
    <button class="av-icon-btn av-icon-btn--ghost" aria-label="Previous month">${ic('chevLeft')}</button>
    <span>October 2026</span>
    <button class="av-icon-btn av-icon-btn--ghost" aria-label="Next month">${ic('chevRight')}</button>
  </div>
  <div class="av-calendar__grid">
    ${['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => `<span class="av-calendar__dow">${d}</span>`).join('')}
    ${cells.join('\n    ')}
  </div>
</div>`;
};
const menuItems = `<button class="av-menu__item" role="menuitem">${ic('ext')}Open details<kbd class="av-menu__kbd">↵</kbd></button>
  <button class="av-menu__item" role="menuitem">${ic('copy')}Copy ARN<kbd class="av-menu__kbd">⌘C</kbd></button>
  <button class="av-menu__item" role="menuitem">${ic('shield')}Request approval</button>
  <div class="av-menu__sep" role="separator"></div>
  <button class="av-menu__item av-menu__item--danger" role="menuitem">${ic('trash')}Revoke access<kbd class="av-menu__kbd">⌫</kbd></button>`;

export const COMPONENTS = [
{ id:'button', label:'Button', desc:'Pill-shaped actions. One primary (Signal) per view. Heights 32 / 40 / 44 / 52. Ghost and link styles for secondary navigation actions like “Schedule scans →”.',
css:`.av-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:40px;padding:0 20px;border-radius:var(--av-radius-pill);border:1px solid transparent;background:transparent;color:var(--av-text-primary);font:500 13px/1 var(--av-font-sans);cursor:pointer;white-space:nowrap;text-decoration:none;transition:background var(--av-duration-fast),border-color var(--av-duration-fast),color var(--av-duration-fast)}
.av-btn:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-btn--primary{background:var(--av-button-primary);color:var(--av-text-on-color);font-size:14px;font-weight:600}
.av-btn--primary:hover{background:var(--av-button-primary-hover)}.av-btn--primary:active{background:var(--av-button-primary-active)}
.av-btn--secondary{padding:0 16px;border-color:var(--av-button-secondary-border)}
.av-btn--secondary:hover{border-color:var(--av-button-secondary-border-hover);background:var(--av-button-secondary-hover)}
.av-btn--tertiary{padding:0 14px;background:var(--av-button-tertiary)}.av-btn--tertiary:hover{background:var(--av-button-tertiary-hover)}
.av-btn--ghost{padding:0 12px}.av-btn--ghost:hover{background:var(--av-button-ghost-hover)}
.av-btn--link{height:44px;padding:0 4px;font-size:14px;text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:1px}
.av-btn--link:hover{color:var(--av-link-primary-hover)}
.av-btn--danger{padding:0 16px;background:var(--av-button-danger);border-color:var(--av-button-danger-border);color:var(--av-text-error)}
.av-btn--danger:hover{background:var(--av-button-danger-hover)}
.av-btn--danger-solid{background:var(--av-button-danger-solid);color:var(--av-text-on-color);font-weight:600}
.av-btn--sm{height:32px;padding:0 14px;font-size:12px}.av-btn--lg{height:44px;padding:0 24px;font-size:15px}.av-btn--xl{height:52px;padding:0 28px;font-size:16px}
.av-btn:disabled,.av-btn[aria-disabled="true"]{background:var(--av-button-disabled);border-color:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-btn[aria-busy="true"]{cursor:wait;opacity:.85}
.av-btn__spinner{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:av-spin .8s linear infinite}
.av-icon-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;flex-shrink:0;padding:0;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-icon-secondary);cursor:pointer;transition:color var(--av-duration-fast),border-color var(--av-duration-fast),background var(--av-duration-fast)}
.av-icon-btn:hover{color:var(--av-icon-primary);border-color:var(--av-border-strong-01)}
.av-icon-btn:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-icon-btn--ghost{width:32px;height:32px;border-radius:var(--av-radius-md);border-color:transparent;background:transparent}.av-icon-btn--ghost:hover{background:var(--av-button-ghost-hover)}
.av-icon-btn--round{width:44px;height:44px;border-radius:50%;background:transparent;border-color:var(--av-tag-outline-border);color:var(--av-text-meta)}
.av-icon-btn--round[aria-pressed="true"]{background:var(--av-button-selected);border-color:var(--av-border-inverse);color:var(--av-icon-inverse)}
.av-icon-btn--arrow{width:32px;height:32px;border-radius:50%;border:0;background:var(--av-button-icon-fill);color:var(--av-text-muted-intro)}
.av-icon-btn--arrow[aria-pressed="true"]{background:var(--av-button-selected);color:var(--av-icon-inverse)}
.av-icon-btn__dot{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--av-icon-notify);box-shadow:0 0 0 2px var(--av-layer-01)}`,
variants:[
 {name:'Kinds', html:`<div class="av-row">
  <button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect account</button>
  <button class="av-btn av-btn--secondary">Portfolio report</button>
  <button class="av-btn av-btn--tertiary">Export CSV</button>
  <button class="av-btn av-btn--ghost">Cancel</button>
  <button class="av-btn av-btn--link">Schedule scans${ic('arrow',16,2)}</button>
</div>`},
 {name:'Danger', html:`<div class="av-row">
  <button class="av-btn av-btn--danger">${ic('trash',14)}Remove client</button>
  <button class="av-btn av-btn--danger-solid">Revoke key</button>
</div>`},
 {name:'Sizes', html:`<div class="av-row">
  <button class="av-btn av-btn--primary av-btn--sm">Small · 32</button>
  <button class="av-btn av-btn--primary">Medium · 40</button>
  <button class="av-btn av-btn--primary av-btn--lg">Large · 44</button>
  <button class="av-btn av-btn--primary av-btn--xl">${ic('plus',16,2.2)}Create organization</button>
</div>`},
 {name:'With icon', html:`<div class="av-row">
  <button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button>
  <button class="av-btn av-btn--secondary">${ic('download',14)}Download PDF</button>
  <button class="av-btn av-btn--secondary">${ic('refresh',14)}Rescan</button>
</div>`},
 {name:'States', html:`<div class="av-row">
  <button class="av-btn av-btn--primary" disabled>Disabled</button>
  <button class="av-btn av-btn--secondary" disabled>Disabled</button>
  <button class="av-btn av-btn--primary" aria-busy="true"><span class="av-btn__spinner"></span>Scanning…</button>
</div>`},
 {name:'Icon buttons', note:'Bell with unread dot (top bar), round gear (org row), arrow (org row), ghost overflow.', html:`<div class="av-row">
  <button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button>
  <button class="av-icon-btn av-icon-btn--round" aria-label="Organization settings">${ic('gear',18,1.6)}</button>
  <button class="av-icon-btn av-icon-btn--round" aria-pressed="true" aria-label="Organization settings">${ic('gear',18,1.6)}</button>
  <button class="av-icon-btn av-icon-btn--arrow" aria-label="Open">${ic('arrow',14,2)}</button>
  <button class="av-icon-btn av-icon-btn--arrow" aria-pressed="true" aria-label="Collapse">${ic('chevDown',14,2)}</button>
  <button class="av-icon-btn av-icon-btn--ghost" aria-label="More">${ic('dots',18,2.6)}</button>
</div>`},
]},

{ id:'accordion', label:'Accordion', desc:'Native <details> disclosure. Used for FAQ in the help guide, remediation steps and advanced settings.',
css:`.av-accordion{border-top:1px solid var(--av-border-subtle-00)}
.av-accordion__item{border-bottom:1px solid var(--av-border-subtle-00)}
.av-accordion__title{list-style:none;display:flex;align-items:center;gap:12px;min-height:48px;padding:0 16px;font-size:14px;font-weight:500;color:var(--av-text-primary);cursor:pointer;transition:background var(--av-duration-fast)}
.av-accordion__title::-webkit-details-marker{display:none}
.av-accordion__title:hover{background:var(--av-layer-hover-01)}
.av-accordion__title:focus-visible{outline:2px solid var(--av-focus);outline-offset:-2px}
.av-accordion__chev{margin-left:auto;color:var(--av-icon-tertiary);transition:transform var(--av-duration-base) var(--av-ease-standard)}
.av-accordion__item[open] .av-accordion__chev{transform:rotate(180deg)}
.av-accordion__body{padding:0 16px 16px;font-size:13px;line-height:1.55;color:var(--av-text-tertiary)}
.av-accordion__meta{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-accordion--contained{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-accordion--contained .av-accordion__item:last-child{border-bottom:0}
.av-accordion--flush .av-accordion__title,.av-accordion--flush .av-accordion__body{padding-left:0;padding-right:0}
.av-accordion__item--disabled .av-accordion__title{color:var(--av-text-disabled);cursor:not-allowed;pointer-events:none}`,
variants:[
 {name:'Default', html:`<div class="av-accordion">
  <details class="av-accordion__item"><summary class="av-accordion__title">How is the posture score calculated?${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Each open finding subtracts points weighted by severity and blast radius.</div></details>
  <details class="av-accordion__item"><summary class="av-accordion__title">How often do scans run?${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Every 6 hours by default. Change it in Schedule scans.</div></details>
</div>`},
 {name:'Open', html:`<div class="av-accordion">
  <details class="av-accordion__item" open><summary class="av-accordion__title">Step 1 · Block public access<span class="av-accordion__meta">~2 min</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Open the S3 console, select the bucket and enable “Block all public access”.</div></details>
</div>`},
 {name:'Contained', html:`<div class="av-accordion av-accordion--contained">
  <details class="av-accordion__item" open><summary class="av-accordion__title">Advanced scan options${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Include archived regions and inactive identities.</div></details>
  <details class="av-accordion__item"><summary class="av-accordion__title">Notifications${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Slack and email digests.</div></details>
</div>`},
 {name:'Flush', html:`<div class="av-accordion av-accordion--flush">
  <details class="av-accordion__item"><summary class="av-accordion__title">What does read-only mean?${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Avistar never writes to your cloud.</div></details>
</div>`},
 {name:'Disabled item', html:`<div class="av-accordion">
  <details class="av-accordion__item av-accordion__item--disabled"><summary class="av-accordion__title" aria-disabled="true">Azure policies (connect Azure first)${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary></details>
</div>`},
]},

{ id:'breadcrumb', label:'Breadcrumb', desc:'Org / client / account path. In the top bar it becomes a context pill with provider logo and switcher chevron.',
css:`.av-breadcrumb{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0;padding:0;list-style:none;font-size:13px;color:var(--av-link-secondary)}
.av-breadcrumb a{color:inherit;text-decoration:none;transition:color var(--av-duration-fast)}.av-breadcrumb a:hover{color:var(--av-link-secondary-hover)}
.av-breadcrumb__sep{color:var(--av-text-placeholder)}
.av-breadcrumb [aria-current="page"]{color:var(--av-text-primary);font-weight:500}
.av-breadcrumb__logo{width:22px;height:14px;object-fit:contain}
.av-breadcrumb--context{height:44px;padding:0 14px 0 20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);font-size:14px;flex-wrap:nowrap;cursor:pointer;transition:border-color var(--av-duration-fast)}
.av-breadcrumb--context:hover{border-color:var(--av-border-strong-01)}
.av-breadcrumb--context .av-breadcrumb__chev{margin-left:8px;color:var(--av-icon-tertiary)}
.av-breadcrumb--mono{font:500 11px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}
.av-breadcrumb__more{border:0;background:transparent;color:inherit;cursor:pointer;padding:0 4px;border-radius:6px}.av-breadcrumb__more:hover{background:var(--av-layer-03)}`,
variants:[
 {name:'Default', html:`<nav aria-label="Breadcrumb"><ol class="av-breadcrumb">
  <li><a href="#">Avistar Demo Org</a></li><li class="av-breadcrumb__sep">/</li>
  <li><a href="#">Tidewell</a></li><li class="av-breadcrumb__sep">/</li>
  <li><span aria-current="page">Findings</span></li>
</ol></nav>`},
 {name:'Current page only', html:`<nav aria-label="Breadcrumb"><ol class="av-breadcrumb"><li><a href="#">${ic('arrowLeft',14,2)} All clients</a></li></ol></nav>`},
 {name:'Overflow', html:`<nav aria-label="Breadcrumb"><ol class="av-breadcrumb">
  <li><a href="#">Avistar Demo Org</a></li><li class="av-breadcrumb__sep">/</li>
  <li><button class="av-breadcrumb__more" aria-label="Show path">…</button></li><li class="av-breadcrumb__sep">/</li>
  <li><span aria-current="page">ci-deploy-runner</span></li>
</ol></nav>`},
 {name:'Context switcher (top bar)', html:`<nav aria-label="Context"><ol class="av-breadcrumb av-breadcrumb--context">
  <li>Avistar Demo Org</li><li class="av-breadcrumb__sep">/</li>
  <li><span style="color:var(--av-text-primary)">Tidewell</span></li><li class="av-breadcrumb__sep">/</li>
  <li style="display:flex;align-items:center;gap:8px"><img class="av-breadcrumb__logo" src="assets/logo-aws-dark.svg" alt="AWS"><span aria-current="page">Production Demo Account</span></li>
  <li class="av-breadcrumb__chev">${ic('chevDown',16,2)}</li>
</ol></nav>`},
 {name:'Mono eyebrow', html:`<ol class="av-breadcrumb av-breadcrumb--mono"><li>Avistar Demo Org</li><li class="av-breadcrumb__sep">·</li><li>10 clients</li></ol>`},
 {name:'With provider logo', html:`<ol class="av-breadcrumb"><li><a href="#">Ashgrove Health</a></li><li class="av-breadcrumb__sep">/</li><li style="display:flex;align-items:center;gap:6px"><img class="av-breadcrumb__logo" src="assets/logo-gcp.svg" alt=""><span aria-current="page">Analytics project</span></li></ol>`},
]},

{ id:'checkbox', label:'Checkbox', desc:'18px box, 5px radius, Ion fill when checked. Use for multi-select filters, table rows and settings.',
css:`.av-checkbox{display:inline-flex;align-items:center;gap:10px;min-height:32px;font-size:14px;color:var(--av-text-secondary);cursor:pointer}
.av-checkbox input{appearance:none;-webkit-appearance:none;margin:0;width:18px;height:18px;flex-shrink:0;border-radius:5px;border:1.5px solid var(--av-border-strong-02);background:transparent;display:grid;place-content:center;cursor:pointer;transition:background var(--av-duration-fast),border-color var(--av-duration-fast)}
.av-checkbox input::before{content:"";width:10px;height:10px;background:var(--av-text-inverse);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0,43% 62%);transform:scale(0);transition:transform var(--av-duration-base) var(--av-ease-spring)}
.av-checkbox input:checked,.av-checkbox input:indeterminate{background:var(--av-border-interactive);border-color:var(--av-border-interactive)}
.av-checkbox input:checked::before{transform:scale(1)}
.av-checkbox input:indeterminate::before{clip-path:none;height:2px;transform:scale(1)}
.av-checkbox input:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-checkbox:has(input:disabled){color:var(--av-text-disabled);cursor:not-allowed}
.av-checkbox input:disabled{border-color:var(--av-border-subtle-02);cursor:not-allowed}
.av-checkbox input:disabled:checked{background:var(--av-border-subtle-02)}
.av-checkbox--invalid input{border-color:var(--av-border-error)}
.av-checkbox--sm input{width:16px;height:16px;border-radius:4px}
.av-checkbox__text{display:flex;flex-direction:column;gap:2px}.av-checkbox__helper{font-size:12px;color:var(--av-text-helper)}
.av-fieldset{border:0;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}
.av-fieldset legend{padding:0 0 8px;font:500 10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-placeholder)}
.av-field__error{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--av-text-error)}`,
variants:[
 {name:'Unchecked', html:`<label class="av-checkbox"><input type="checkbox">Include archived</label>`},
 {name:'Checked', html:`<label class="av-checkbox"><input type="checkbox" checked>Only production</label>`},
 {name:'Indeterminate', note:'Set via JS: el.indeterminate = true', html:`<label class="av-checkbox"><input type="checkbox" class="av-js-indeterminate">Select all (3 of 12)</label>`},
 {name:'Disabled', html:`<label class="av-checkbox"><input type="checkbox" disabled>Managed by SSO</label>`},
 {name:'Disabled checked', html:`<label class="av-checkbox"><input type="checkbox" checked disabled>Read-only access</label>`},
 {name:'Invalid', html:`<div class="av-stack" style="gap:4px"><label class="av-checkbox av-checkbox--invalid"><input type="checkbox" aria-invalid="true">I confirm this role is read-only</label><span class="av-field__error">${ic('alert',12,2)}Required to continue</span></div>`},
 {name:'With helper', html:`<label class="av-checkbox" style="align-items:flex-start"><input type="checkbox" checked style="margin-top:2px"><span class="av-checkbox__text">Notify owners<span class="av-checkbox__helper">Email identity owners when a finding is assigned.</span></span></label>`},
 {name:'Group', html:`<fieldset class="av-fieldset"><legend>Severity</legend>
  <label class="av-checkbox"><input type="checkbox" checked>Critical</label>
  <label class="av-checkbox"><input type="checkbox" checked>High</label>
  <label class="av-checkbox"><input type="checkbox">Medium</label>
  <label class="av-checkbox"><input type="checkbox">Low</label>
</fieldset>`},
 {name:'Small (table)', html:`<label class="av-checkbox av-checkbox--sm"><input type="checkbox" checked aria-label="Select row"></label>`},
]},

{ id:'code-snippet', label:'Code snippet', desc:'JetBrains Mono on layer-02. Used for role ARNs, CLI setup steps and external IDs in Connect account.',
css:`.av-code{position:relative;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-lg);background:var(--av-layer-02);font:12px/1.65 var(--av-font-mono);color:var(--av-text-secondary)}
.av-code pre{margin:0;padding:14px 52px 14px 16px;overflow:auto;white-space:pre}
.av-code .av-code__copy{position:absolute;top:6px;right:6px}
.av-code__c{color:var(--av-text-helper)}.av-code__k{color:var(--av-text-info)}.av-code__s{color:var(--av-support-medium)}
.av-code--single{display:flex;align-items:center;gap:8px;height:44px;padding:0 6px 0 14px}
.av-code--single span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-code--single .av-code__copy{position:static}
.av-code-inline{padding:2px 6px;border-radius:6px;background:var(--av-layer-04);font:12px var(--av-font-mono);color:var(--av-text-info)}`,
variants:[
 {name:'Inline', html:`<p style="margin:0;font-size:14px;color:var(--av-text-tertiary)">Attach <code class="av-code-inline">SecurityAudit</code> to the role.</p>`},
 {name:'Single line', html:`<div class="av-code av-code--single"><span>arn:aws:iam::010545334631:role/AvistarReadOnly</span><button class="av-icon-btn av-icon-btn--ghost av-code__copy" aria-label="Copy">${ic('copy',16)}</button></div>`},
 {name:'Multi line', html:`<div class="av-code"><pre><span class="av-code__c"># Create the read-only role</span>
<span class="av-code__k">aws</span> iam create-role \\
  --role-name AvistarReadOnly \\
  --assume-role-policy-document <span class="av-code__s">file://trust.json</span></pre><button class="av-icon-btn av-icon-btn--ghost av-code__copy" aria-label="Copy">${ic('copy',16)}</button></div>`},
]},

{ id:'contained-list', label:'Contained list', desc:'Bordered list in a card. Connected clouds, accounts, members.',
css:`.av-clist{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-clist__head{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:48px;padding:0 16px;border-bottom:1px solid var(--av-border-subtle-00);font-size:14px;font-weight:600}
.av-clist__item{display:flex;align-items:center;gap:14px;min-height:56px;padding:10px 16px;border-bottom:1px solid var(--av-border-subtle-00);font-size:14px;color:var(--av-text-primary)}
.av-clist__item:last-child{border-bottom:0}
.av-clist__item--interactive{cursor:pointer;transition:background var(--av-duration-fast)}.av-clist__item--interactive:hover{background:var(--av-layer-hover-01)}
.av-clist__glyph{width:24px;height:24px;flex-shrink:0}
.av-clist__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.av-clist__title{font-weight:500}.av-clist__sub{font-size:12px;color:var(--av-text-helper)}
.av-clist__end{display:flex;align-items:center;gap:8px;color:var(--av-icon-tertiary)}
.av-clist__search{padding:10px 12px;border-bottom:1px solid var(--av-border-subtle-00)}`,
variants:[
 {name:'Simple', html:`<div class="av-clist"><div class="av-clist__head">Members<span class="av-tag">3</span></div>
  <div class="av-clist__item">Zalak Patel</div><div class="av-clist__item">Arjun Kapoor</div><div class="av-clist__item">Maya Ross</div></div>`},
 {name:'With icon & description', html:`<div class="av-clist">
  <div class="av-clist__item"><img class="av-clist__glyph" src="assets/icons-duo/cloud.svg" alt=""><span class="av-clist__text"><span class="av-clist__title">AWS · Production</span><span class="av-clist__sub">14 accounts · synced 2m ago</span></span></div>
  <div class="av-clist__item"><img class="av-clist__glyph" src="assets/icons-duo/server.svg" alt=""><span class="av-clist__text"><span class="av-clist__title">Kubernetes · prod-eu</span><span class="av-clist__sub">212 service accounts</span></span></div>
</div>`},
 {name:'Interactive', html:`<div class="av-clist">
  <div class="av-clist__item av-clist__item--interactive" tabindex="0"><img class="av-clist__glyph" src="assets/icons-duo/key.svg" alt=""><span class="av-clist__text"><span class="av-clist__title">Vault · secrets</span><span class="av-clist__sub">1,028 tracked</span></span><span class="av-clist__end">${ic('chevRight',14,2)}</span></div>
  <div class="av-clist__item av-clist__item--interactive" tabindex="0"><img class="av-clist__glyph" src="assets/icons-duo/network.svg" alt=""><span class="av-clist__text"><span class="av-clist__title">GCP · Analytics</span><span class="av-clist__sub">3 projects</span></span><span class="av-clist__end">${ic('chevRight',14,2)}</span></div>
</div>`},
 {name:'With actions', html:`<div class="av-clist"><div class="av-clist__head">Connected accounts<button class="av-btn av-btn--secondary av-btn--sm">${ic('plus',12,2.2)}Connect</button></div>
  <div class="av-clist__item"><span class="av-clist__text"><span class="av-clist__title">Production Demo Account</span><span class="av-clist__sub av-mono">010545334631</span></span><span class="av-tag av-tag--success"><span class="av-tag__dot"></span>Healthy</span><button class="av-icon-btn av-icon-btn--ghost" aria-label="More">${ic('dots',18,2.6)}</button></div>
</div>`},
 {name:'With search', html:`<div class="av-clist"><div class="av-clist__search"><div class="av-search av-search--field av-search--sm">${ic('search',16,2)}<input class="av-search__input" placeholder="Filter accounts"></div></div>
  <div class="av-clist__item">Production Demo Account</div><div class="av-clist__item">Staging Account</div></div>`},
]},

{ id:'content-switcher', label:'Content switcher', desc:'Pill segmented control. Selected = inverse fill (Cards / List on Your clients).',
css:`.av-switcher{display:inline-flex;gap:2px;padding:3px;border-radius:var(--av-radius-pill);border:1px solid var(--av-tag-outline-border);background:var(--av-field-02)}
.av-switcher button{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border:0;border-radius:var(--av-radius-pill);background:transparent;color:var(--av-text-muted-intro);font:500 13px var(--av-font-sans);cursor:pointer;white-space:nowrap;transition:background var(--av-duration-base),color var(--av-duration-base)}
.av-switcher button:hover{color:var(--av-text-primary)}
.av-switcher button[aria-pressed="true"]{background:var(--av-button-selected);color:var(--av-text-inverse)}
.av-switcher button:focus-visible{outline:2px solid var(--av-focus);outline-offset:1px}
.av-switcher--sm button{height:28px;padding:0 10px;font-size:12px}
.av-switcher--icon button{width:36px;padding:0;justify-content:center}
.av-switcher--soft{border-color:var(--av-border-subtle-01);background:var(--av-layer-03)}
.av-switcher--soft button[aria-pressed="true"]{background:var(--av-layer-01);color:var(--av-text-primary)}`,
variants:[
 {name:'Icon + label', html:`<div class="av-switcher" role="group" aria-label="View"><button aria-pressed="true">${ic('grid',14)}Cards</button><button aria-pressed="false">${ic('list',14)}List</button></div>`},
 {name:'Text', html:`<div class="av-switcher" role="group"><button aria-pressed="false">24h</button><button aria-pressed="true">7 days</button><button aria-pressed="false">30 days</button></div>`},
 {name:'Small', html:`<div class="av-switcher av-switcher--sm" role="group"><button aria-pressed="true">All</button><button aria-pressed="false">Human</button><button aria-pressed="false">Machine</button></div>`},
 {name:'Soft', html:`<div class="av-switcher av-switcher--soft" role="group"><button aria-pressed="true">Open</button><button aria-pressed="false">Resolved</button><button aria-pressed="false">Ignored</button></div>`},
 {name:'Icon only', html:`<div class="av-switcher av-switcher--icon" role="group"><button aria-pressed="true" aria-label="Cards">${ic('grid',14)}</button><button aria-pressed="false" aria-label="List">${ic('list',14)}</button></div>`},
]},

{ id:'data-table', label:'Data table', desc:'56px rows, mono uppercase headers, tabular numerals, selectable rows. Dashed variant is used on the intro client list.',
css:`.av-table-wrap{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:auto}
.av-table-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-table-toolbar__title{font-size:14px;font-weight:600}.av-table-toolbar__count{margin-left:6px;font:400 11px var(--av-font-mono);color:var(--av-text-helper)}
.av-table{width:100%;min-width:640px;border-collapse:collapse;font-size:13px}
.av-table th{height:40px;padding:0 16px;text-align:left;font:500 10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-label);border-bottom:1px solid var(--av-border-subtle-00);white-space:nowrap}
.av-table th button{all:unset;display:inline-flex;align-items:center;gap:4px;cursor:pointer}.av-table th[aria-sort] button{color:var(--av-text-primary)}
.av-table td{height:56px;padding:8px 16px;border-bottom:1px solid var(--av-border-subtle-00);color:var(--av-text-tertiary);vertical-align:middle}
.av-table tbody tr:last-child td{border-bottom:0}
.av-table tbody tr{transition:background var(--av-duration-fast)}.av-table tbody tr:hover{background:var(--av-layer-hover-01)}
.av-table tbody tr[aria-selected="true"]{background:var(--av-layer-selected-01)}
.av-table__primary{display:block;color:var(--av-text-primary);font-weight:500}
.av-table__id{display:block;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-table__num{text-align:right;font-variant-numeric:tabular-nums}
.av-table__check{width:40px}
.av-table--compact td{height:44px}
.av-table-batch{display:flex;align-items:center;gap:12px;padding:10px 16px;background:var(--av-background-selected);border-bottom:1px solid var(--av-border-nav-active);font-size:13px}
.av-table-wrap--dashed{border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-xs);background:var(--av-layer-intro)}
.av-table-wrap--dashed td{border-bottom-color:var(--av-border-divider)}`,
variants:(() => {
  const rows = [['ci-deploy-runner','arn:aws:iam::0105:role/ci','AWS','critical','Critical','2m ago'],['svc-billing-writer','arn:aws:iam::0105:role/billing','AWS','high','High','1h ago'],['gke-node-sa','node@prod.iam.gserviceaccount.com','GCP','medium','Medium','3h ago'],['backup-agent','sp-7f2c-backup','AZURE','low','Low','1d ago']];
  const tr = (r, sel, chk) => `    <tr${sel ? ' aria-selected="true"' : ''}>${chk ? `<td class="av-table__check"><label class="av-checkbox av-checkbox--sm"><input type="checkbox"${sel ? ' checked' : ''} aria-label="Select ${r[0]}"></label></td>` : ''}<td><span class="av-table__primary">${r[0]}</span><span class="av-table__id">${r[1]}</span></td><td><span class="av-tag av-tag--mono">${r[2]}</span></td><td><span class="av-tag av-tag--${r[3]}"><span class="av-tag__dot"></span>${r[4]}</span></td><td class="av-table__num">${r[5]}</td></tr>`;
  const head = (chk, sort) => `<thead><tr>${chk ? '<th class="av-table__check"><label class="av-checkbox av-checkbox--sm"><input type="checkbox" aria-label="Select all"></label></th>' : ''}<th${sort ? ' aria-sort="ascending"' : ''}>${sort ? `<button>Identity${ic('chevUp',12,2)}</button>` : 'Identity'}</th><th>Provider</th><th>Risk</th><th class="av-table__num">${sort ? `<button>Last used${ic('chevDown',12,2)}</button>` : 'Last used'}</th></tr></thead>`;
  return [
   {name:'Basic', html:`<div class="av-table-wrap"><table class="av-table">${head()}
  <tbody>
${rows.slice(0,3).map(r => tr(r)).join('\n')}
  </tbody></table></div>`},
   {name:'Toolbar + selection', html:`<div class="av-table-wrap"><div class="av-table-toolbar"><span class="av-table-toolbar__title">Machine identities<span class="av-table-toolbar__count">48</span></span><div class="av-row" style="gap:8px"><div class="av-search av-search--field av-search--sm" style="width:min(220px,100%)">${ic('search',16,2)}<input class="av-search__input" placeholder="Search identities"></div><button class="av-btn av-btn--secondary av-btn--sm">${ic('filter',12)}Filter</button></div></div><table class="av-table">${head(true)}
  <tbody>
${rows.map((r, i) => tr(r, i === 1, true)).join('\n')}
  </tbody></table></div>`},
   {name:'Sortable', html:`<div class="av-table-wrap"><table class="av-table">${head(false, true)}<tbody>
${rows.slice(0,2).map(r => tr(r)).join('\n')}
  </tbody></table></div>`},
   {name:'Compact', html:`<div class="av-table-wrap"><table class="av-table av-table--compact">${head()}<tbody>
${rows.map(r => tr(r)).join('\n')}
  </tbody></table></div>`},
   {name:'Batch actions', html:`<div class="av-table-wrap"><div class="av-table-batch"><strong>2 selected</strong><button class="av-btn av-btn--secondary av-btn--sm">Assign owner</button><button class="av-btn av-btn--danger av-btn--sm">Revoke</button><button class="av-btn av-btn--ghost av-btn--sm" style="margin-left:auto">Clear</button></div><table class="av-table">${head(true)}<tbody>
${rows.slice(0,3).map((r, i) => tr(r, i < 2, true)).join('\n')}
  </tbody></table></div>`},
   {name:'Findings (with action)', html:`<div class="av-table-wrap"><table class="av-table"><thead><tr><th>Finding</th><th>Severity</th><th>Resource</th><th class="av-table__num">Fix time</th><th></th></tr></thead><tbody>
    <tr><td><span class="av-table__primary">S3 bucket is publicly readable</span><span class="av-table__id">AV-S3-001</span></td><td><span class="av-tag av-tag--critical"><span class="av-tag__dot"></span>Critical</span></td><td class="av-mono" style="font-size:12px">hci-exports-prod</td><td class="av-table__num">~2 min</td><td style="text-align:right"><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></td></tr>
    <tr><td><span class="av-table__primary">Access key unused for 412 days</span><span class="av-table__id">AV-IAM-014</span></td><td><span class="av-tag av-tag--high"><span class="av-tag__dot"></span>High</span></td><td class="av-mono" style="font-size:12px">AKIA…7Q2F</td><td class="av-table__num">~1 min</td><td style="text-align:right"><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></td></tr>
  </tbody></table></div>`},
   {name:'Dashed (intro list)', html:`<div class="av-table-wrap av-table-wrap--dashed"><table class="av-table"><thead><tr><th>Client</th><th>Clouds</th><th class="av-table__num">Posture</th><th>Findings</th></tr></thead><tbody>
    <tr><td><span class="av-table__primary">Hydroponic Cloud</span><span class="av-table__id">AgriTech · 3 accounts</span></td><td><span class="av-row" style="gap:6px"><span class="av-tag av-tag--mono">AWS</span><span class="av-tag av-tag--mono">AZURE</span></span></td><td class="av-table__num av-mono av-posture--poor" style="font-size:16px">64</td><td>293 open · scanned 2h ago</td></tr>
    <tr><td><span class="av-table__primary">Corvane</span><span class="av-table__id">SaaS · 5 accounts</span></td><td><span class="av-tag av-tag--mono">GCP</span></td><td class="av-table__num av-mono av-posture--good" style="font-size:16px">86</td><td>38 open · scanned 15m ago</td></tr>
  </tbody></table></div>`},
  ];
})()},

{ id:'date-picker', label:'Date picker', desc:'Input + calendar popover. Today has a ring, selected uses the inverse fill, ranges use background-selected.',
css:`.av-date{position:relative;display:flex;align-items:center}
.av-date .av-input{padding-right:44px}.av-date__icon{position:absolute;right:14px;color:var(--av-icon-tertiary);pointer-events:none}
.av-date-range{display:flex;align-items:center;gap:8px}.av-date-range__sep{color:var(--av-text-placeholder)}
.av-calendar{width:min(288px,100%);padding:12px;border-radius:var(--av-radius-xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover)}
.av-calendar__head{display:flex;align-items:center;justify-content:space-between;height:36px;margin-bottom:6px;font-size:13px;font-weight:600}
.av-calendar__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px 0;text-align:center}
.av-calendar__dow{height:28px;line-height:28px;font:500 10px var(--av-font-mono);color:var(--av-text-label)}
.av-calendar__day{height:36px;padding:0;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-secondary);font:400 13px var(--av-font-sans);font-variant-numeric:tabular-nums;cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-calendar__day:hover{background:var(--av-layer-hover-01)}
.av-calendar__day--muted{color:var(--av-text-placeholder);cursor:default}
.av-calendar__day--today{box-shadow:inset 0 0 0 1px var(--av-border-strong-02)}
.av-calendar__day--range{border-radius:0;background:var(--av-background-selected);color:var(--av-text-primary)}
.av-calendar__day--selected{background:var(--av-button-selected);color:var(--av-text-inverse);font-weight:600}
.av-presets{display:flex;flex-wrap:wrap;gap:6px}`,
variants:[
 {name:'Single input', html:`<label class="av-field" style="max-width:240px"><span class="av-field__label">Scan from</span><span class="av-date"><input class="av-input" value="10/14/2026"><span class="av-date__icon">${ic('calendar',16)}</span></span></label>`},
 {name:'Calendar', html:cal([14])},
 {name:'Range input', html:`<div class="av-date-range"><span class="av-date"><input class="av-input" value="Oct 6, 2026" aria-label="Start"><span class="av-date__icon">${ic('calendar',16)}</span></span><span class="av-date-range__sep">–</span><span class="av-date"><input class="av-input" value="Oct 14, 2026" aria-label="End"><span class="av-date__icon">${ic('calendar',16)}</span></span></div>`},
 {name:'Range calendar', html:cal([6,14],[6,14])},
 {name:'Presets', html:`<div class="av-presets"><button class="av-tag av-tag--filter" aria-pressed="false">Last 24h</button><button class="av-tag av-tag--filter" aria-pressed="true">Last 7 days</button><button class="av-tag av-tag--filter" aria-pressed="false">Last 30 days</button><button class="av-tag av-tag--filter" aria-pressed="false">Custom…</button></div>`},
 {name:'Disabled', html:`<span class="av-date" style="max-width:240px"><input class="av-input" value="10/14/2026" disabled><span class="av-date__icon">${ic('calendar',16)}</span></span>`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:240px"><span class="av-field__label">End date</span><span class="av-date"><input class="av-input" value="10/02/2026" aria-invalid="true"><span class="av-date__icon">${ic('calendar',16)}</span></span><span class="av-field__error">${ic('alert',12,2)}End date is before start</span></label>`},
]},

{ id:'dropdown', label:'Dropdown', desc:'Custom listbox trigger + menu. Use for rich options (logos, scores). Use Select for plain native lists.',
css:`.av-dropdown{position:relative;display:inline-flex;flex-direction:column;gap:4px;min-width:min(260px,100%)}
.av-dropdown__trigger{display:flex;align-items:center;gap:10px;height:44px;padding:0 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px var(--av-font-sans);text-align:left;cursor:pointer;transition:border-color var(--av-duration-fast),background var(--av-duration-fast)}
.av-dropdown__trigger:hover{background:var(--av-field-hover-01)}
.av-dropdown__value{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-dropdown__chev{color:var(--av-icon-tertiary);transition:transform var(--av-duration-base)}
.av-dropdown__trigger[aria-expanded="true"]{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-dropdown__trigger[aria-expanded="true"] .av-dropdown__chev{transform:rotate(180deg)}
.av-dropdown__trigger:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-dropdown__trigger[aria-invalid="true"]{border-color:var(--av-border-error)}
.av-dropdown--inline .av-dropdown__trigger{height:32px;padding:0 10px;border-color:transparent;background:transparent;font-size:13px;color:var(--av-text-tertiary)}
.av-dropdown--inline .av-dropdown__trigger:hover{background:var(--av-layer-03);color:var(--av-text-primary)}
.av-dropdown--inline{min-width:0}
.av-dropdown__label{font-size:13px;font-weight:500;color:var(--av-text-secondary)}`,
variants:[
 {name:'Closed', html:`<div class="av-dropdown"><span class="av-dropdown__label">Environment</span><button class="av-dropdown__trigger" aria-haspopup="listbox" aria-expanded="false"><span class="av-dropdown__value">All environments</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div>`},
 {name:'Open', html:`<div class="av-dropdown"><button class="av-dropdown__trigger" aria-haspopup="listbox" aria-expanded="true"><span class="av-dropdown__value">Production</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button>
  <div class="av-menu" role="listbox"><button class="av-menu__item" role="option">All environments</button><button class="av-menu__item" role="option" aria-selected="true">Production${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button><button class="av-menu__item" role="option">Staging</button></div></div>`},
 {name:'Rich (account switcher)', html:`<div class="av-dropdown" style="min-width:min(300px,100%)"><button class="av-dropdown__trigger" aria-expanded="true"><img src="assets/logo-aws-dark.svg" alt="" style="width:20px;height:14px;object-fit:contain"><span class="av-dropdown__value">Production Demo Account</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button>
  <div class="av-menu" role="listbox">
    <button class="av-menu__item av-menu__item--rich" role="option" aria-selected="true"><span class="av-menu__logo"><img src="assets/logo-aws-dark.svg" alt=""></span><span class="av-menu__text"><span>Production Demo Account</span><span class="av-menu__sub">010545334631</span></span><span class="av-menu__score av-posture--poor">58</span>${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button>
    <button class="av-menu__item av-menu__item--rich" role="option"><span class="av-menu__logo"><img src="assets/logo-gcp.svg" alt=""></span><span class="av-menu__text"><span>Northwind Commerce</span><span class="av-menu__sub">alvl-vulnlab-d6a0cd</span></span><span class="av-menu__score av-posture--good">96</span></button>
  </div></div>`},
 {name:'Inline filter', html:`<div class="av-row"><div class="av-dropdown av-dropdown--inline"><button class="av-dropdown__trigger">Severity: All${ic('chevDown',14,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div><div class="av-dropdown av-dropdown--inline"><button class="av-dropdown__trigger">Provider: AWS${ic('chevDown',14,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div></div>`},
 {name:'With icon', html:`<div class="av-dropdown"><button class="av-dropdown__trigger"><img src="assets/icons-duo/clients.svg" alt="" style="width:20px;height:20px"><span class="av-dropdown__value">Avistar Demo Org</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div>`},
 {name:'Disabled', html:`<div class="av-dropdown"><button class="av-dropdown__trigger" disabled><span class="av-dropdown__value">Region locked by policy</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div>`},
 {name:'Invalid', html:`<div class="av-dropdown"><span class="av-dropdown__label">Owner</span><button class="av-dropdown__trigger" aria-invalid="true"><span class="av-dropdown__value" style="color:var(--av-text-placeholder)">Choose an owner</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button><span class="av-field__error">${ic('alert',12,2)}Every identity needs an owner</span></div>`},
]},

{ id:'file-uploader', label:'File uploader', desc:'Dashed drop zone + file rows. Used to import CloudFormation outputs and certificates (Azure).',
css:`.av-upload{display:flex;flex-direction:column;align-items:center;gap:8px;padding:32px 24px;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-2xl);text-align:center;font-size:13px;color:var(--av-text-tertiary);cursor:pointer;transition:border-color var(--av-duration-base),background var(--av-duration-base)}
.av-upload:hover{border-color:var(--av-border-dashed-hover);background:var(--av-background-hover)}
.av-upload--dragover{border-style:solid;border-color:var(--av-border-interactive);background:var(--av-background-selected)}
.av-upload__icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--av-layer-03);color:var(--av-icon-interactive)}
.av-upload__title{font-size:14px;font-weight:600;color:var(--av-text-primary)}
.av-upload__hint{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-file{display:flex;align-items:center;gap:12px;min-height:52px;padding:8px 8px 8px 14px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-lg);background:var(--av-layer-02);font-size:13px}
.av-file__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.av-file__name{color:var(--av-text-primary);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-file__meta{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-file--error{border-color:var(--av-border-error)}.av-file--error .av-file__meta{color:var(--av-text-error)}
.av-file__ok{color:var(--av-support-success)}`,
variants:[
 {name:'Drop zone', html:`<label class="av-upload"><input type="file" class="av-sr-only"><span class="av-upload__icon">${ic('upload',20)}</span><span class="av-upload__title">Drop certificate or browse</span><span class="av-upload__hint">.PEM .CER .PFX · MAX 2 MB</span></label>`},
 {name:'Drag over', html:`<label class="av-upload av-upload--dragover"><span class="av-upload__icon">${ic('upload',20)}</span><span class="av-upload__title">Release to upload</span></label>`},
 {name:'Uploading', html:`<div class="av-file"><span style="color:var(--av-icon-tertiary)">${ic('file',18)}</span><span class="av-file__body"><span class="av-file__name">avistar-entra.pfx</span><span class="av-progress av-progress--sm"><span class="av-progress__track"><span class="av-progress__fill" style="width:62%"></span></span></span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Cancel">${ic('x',16)}</button></div>`},
 {name:'Uploaded list', html:`<div class="av-stack" style="gap:8px">
  <div class="av-file"><span class="av-file__ok">${ic('check',18,2.2)}</span><span class="av-file__body"><span class="av-file__name">outputs.json</span><span class="av-file__meta">4.2 KB · VALIDATED</span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Remove">${ic('trash',16)}</button></div>
  <div class="av-file"><span class="av-file__ok">${ic('check',18,2.2)}</span><span class="av-file__body"><span class="av-file__name">trust-policy.json</span><span class="av-file__meta">1.1 KB · VALIDATED</span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Remove">${ic('trash',16)}</button></div>
</div>`},
 {name:'Error', html:`<div class="av-file av-file--error"><span style="color:var(--av-text-error)">${ic('alert',18)}</span><span class="av-file__body"><span class="av-file__name">cert.txt</span><span class="av-file__meta">UNSUPPORTED FILE TYPE</span></span><button class="av-btn av-btn--ghost av-btn--sm">Retry</button></div>`},
]},

{ id:'form', label:'Form', desc:'Label above field, 8px label gap, 20px between fields, actions bottom-right. Field primitives: .av-field, .av-field__label, __helper, __error.',
css:`.av-form{display:flex;flex-direction:column;gap:20px;max-width:520px}
.av-form__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:16px}
.av-form__section{display:flex;flex-direction:column;gap:16px;padding-top:20px;border-top:1px solid var(--av-border-subtle-01)}
.av-form__title{margin:0;font-size:16px;font-weight:600;letter-spacing:-0.01em}
.av-form__actions{display:flex;justify-content:flex-end;gap:8px;padding-top:4px}
.av-field{display:flex;flex-direction:column;gap:8px;min-width:0}
.av-field__label{display:flex;justify-content:space-between;gap:8px;font-size:13px;font-weight:500;color:var(--av-text-secondary)}
.av-field__optional{font-weight:400;color:var(--av-text-helper)}
.av-field__helper{font-size:12px;line-height:1.45;color:var(--av-text-helper)}
.av-field__counter{align-self:flex-end;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-form-card{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-form-card__body{padding:20px;display:flex;flex-direction:column;gap:20px}
.av-form-card__foot{display:flex;justify-content:flex-end;gap:8px;padding:14px 20px;border-top:1px solid var(--av-border-subtle-01)}
.av-setting{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:24px;align-items:start;padding:20px 0;border-bottom:1px solid var(--av-border-subtle-00)}
.av-setting__k{display:flex;flex-direction:column;gap:4px}.av-setting__t{font-size:14px;font-weight:500}.av-setting__d{font-size:13px;color:var(--av-text-helper)}`,
variants:[
 {name:'Stacked', html:`<form class="av-form">
  <label class="av-field"><span class="av-field__label">Client name</span><input class="av-input" placeholder="e.g. Northwind Health"></label>
  <label class="av-field"><span class="av-field__label">Industry<span class="av-field__optional">Optional</span></span><input class="av-input" placeholder="Healthcare"></label>
  <div class="av-form__actions"><button type="button" class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">Add client</button></div>
</form>`},
 {name:'Two column', html:`<form class="av-form"><div class="av-form__row">
  <label class="av-field"><span class="av-field__label">Account name</span><input class="av-input" value="Production AWS"></label>
  <label class="av-field"><span class="av-field__label">Region</span><span class="av-select"><select><option>us-east-1</option><option>eu-west-1</option></select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span></label>
</div></form>`},
 {name:'Sections', html:`<form class="av-form">
  <h3 class="av-form__title">Organization</h3>
  <label class="av-field"><span class="av-field__label">Name</span><input class="av-input" value="Avistar Demo Org"></label>
  <div class="av-form__section"><span class="av-eyebrow">Security</span><label class="av-toggle"><input type="checkbox" role="switch" checked>Require SSO</label></div>
</form>`},
 {name:'Validation', html:`<form class="av-form">
  <label class="av-field"><span class="av-field__label">IAM role ARN</span><input class="av-input av-input--mono" value="not-an-arn" aria-invalid="true"><span class="av-field__error">${ic('alert',12,2)}Enter a valid role ARN — arn:aws:iam::&lt;account&gt;:role/&lt;name&gt;</span></label>
  <label class="av-field"><span class="av-field__label">External ID</span><input class="av-input av-input--mono" value="av-7f2c9d" readonly><span class="av-field__helper">Generated by Avistar. Paste into the trust policy.</span></label>
</form>`},
 {name:'Settings rows', html:`<div>
  <div class="av-setting"><div class="av-setting__k"><span class="av-setting__t">Scan frequency</span><span class="av-setting__d">How often Avistar re-reads your cloud.</span></div><span class="av-select"><select><option>Every 6 hours</option><option>Daily</option></select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span></div>
  <div class="av-setting"><div class="av-setting__k"><span class="av-setting__t">Weekly digest</span><span class="av-setting__d">Email summary every Monday.</span></div><label class="av-toggle"><input type="checkbox" role="switch" checked></label></div>
</div>`},
 {name:'In card', html:`<form class="av-form-card" style="max-width:480px"><div class="av-form-card__body"><h3 class="av-form__title">Invite member</h3>
  <label class="av-field"><span class="av-field__label">Email</span><input class="av-input" placeholder="name@company.com"></label>
  <label class="av-field"><span class="av-field__label">Role</span><span class="av-select"><select><option>Analyst</option><option>Owner</option></select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span></label>
</div><div class="av-form-card__foot"><button type="button" class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">Send invite</button></div></form>`},
 {name:'Multi-step', html:`<div class="av-form" style="max-width:560px"><ol class="av-steps"><li class="av-step av-step--done"><span class="av-step__dot">${ic('check',12,3)}</span>Provider<span class="av-step__line"></span></li><li class="av-step av-step--current"><span class="av-step__dot">2</span>Credentials<span class="av-step__line"></span></li><li class="av-step"><span class="av-step__dot">3</span>Verify</li></ol>
  <label class="av-field"><span class="av-field__label">Role ARN</span><input class="av-input av-input--mono" placeholder="arn:aws:iam::…"></label>
  <div class="av-form__actions"><button class="av-btn av-btn--ghost">Back</button><button class="av-btn av-btn--primary">Continue</button></div></div>`},
]},

{ id:'link', label:'Link', desc:'Underlined by default, Ion on hover. Action links carry an arrow and sit next to primary buttons.',
css:`.av-link{color:var(--av-link-primary);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px;text-decoration-color:var(--av-link-underline);cursor:pointer;transition:color var(--av-duration-fast),text-decoration-color var(--av-duration-fast)}
.av-link:hover{color:var(--av-link-primary-hover);text-decoration-color:var(--av-link-underline-hover)}
.av-link:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px;border-radius:2px}
.av-link--action{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:500;text-underline-offset:5px;text-decoration-color:currentColor}
.av-link--quiet{color:var(--av-link-secondary);text-decoration:none}.av-link--quiet:hover{color:var(--av-link-secondary-hover)}
.av-link--standalone{text-decoration-color:transparent}.av-link--standalone:hover{text-decoration-color:currentColor}
.av-link--sm{font-size:12px}
.av-link--disabled,.av-link[aria-disabled="true"]{color:var(--av-text-disabled);text-decoration-color:transparent;pointer-events:none}
.av-link--inverse{color:var(--av-link-inverse);text-decoration-color:currentColor}`,
variants:[
 {name:'Inline', html:`<p style="margin:0;font-size:14px;color:var(--av-text-tertiary)">Close the 2 public buckets to reach 71. <a class="av-link" href="#">See which ones</a>.</p>`},
 {name:'Action', html:`<div class="av-row" style="gap:24px"><a class="av-link av-link--action" href="#">Schedule scans${ic('arrow',16,2)}</a><a class="av-link av-link--action" href="#">Help guide${ic('arrow',14,2)}</a></div>`},
 {name:'Quiet', html:`<a class="av-link av-link--quiet" href="#">View all bulletins</a>`},
 {name:'Standalone', html:`<a class="av-link av-link--standalone" href="#">Open →</a>`},
 {name:'External', html:`<a class="av-link av-link--action" href="#" target="_blank" rel="noopener">Open AWS console${ic('ext',14,2)}</a>`},
 {name:'Small', html:`<a class="av-link av-link--sm" href="#">Start with this fix</a>`},
 {name:'Disabled', html:`<a class="av-link" aria-disabled="true">Download report</a>`},
]},

{ id:'loading', label:'Loading', desc:'Spinner (Ion head on layer-04 track), inline status, skeleton shimmer.',
css:`.av-spinner{display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid var(--av-layer-04);border-top-color:var(--av-focus);animation:av-spin .8s linear infinite;flex-shrink:0}
.av-spinner--sm{width:14px;height:14px}.av-spinner--lg{width:32px;height:32px;border-width:3px}
.av-loading-inline{display:inline-flex;align-items:center;gap:10px;font-size:13px;color:var(--av-text-tertiary)}
.av-skeleton{display:block;border-radius:6px;background:linear-gradient(90deg,var(--av-skeleton-base),var(--av-skeleton-shine),var(--av-skeleton-base));background-size:400px 100%;animation:av-shimmer 1.4s linear infinite}
.av-skeleton--circle{border-radius:50%}
.av-live-dot{width:8px;height:8px;border-radius:50%;background:var(--av-support-low);animation:av-pulse 1.4s ease-in-out infinite}`,
variants:[
 {name:'Spinner sizes', html:`<div class="av-row" style="gap:24px"><span class="av-spinner av-spinner--sm" role="status" aria-label="Loading"></span><span class="av-spinner" role="status" aria-label="Loading"></span><span class="av-spinner av-spinner--lg" role="status" aria-label="Loading"></span></div>`},
 {name:'Inline status', html:`<div class="av-stack"><span class="av-loading-inline"><span class="av-spinner av-spinner--sm"></span>Syncing AWS accounts…</span><span class="av-loading-inline"><span class="av-live-dot"></span>Scan in progress · 64%</span></div>`},
 {name:'Button', html:`<button class="av-btn av-btn--primary" aria-busy="true"><span class="av-btn__spinner"></span>Running scan…</button>`},
 {name:'Skeleton card', html:`<div class="av-tile" style="max-width:320px"><div class="av-row"><span class="av-skeleton av-skeleton--circle" style="width:40px;height:40px"></span><span class="av-stack" style="flex:1;gap:8px"><span class="av-skeleton" style="height:12px;width:70%"></span><span class="av-skeleton" style="height:10px;width:45%"></span></span></div><span class="av-skeleton" style="height:64px;border-radius:10px"></span></div>`},
 {name:'Skeleton rows', html:`<div class="av-stack" style="gap:14px">${[80,64,72].map(w => `<div class="av-row"><span class="av-skeleton" style="height:14px;width:${w}%"></span><span class="av-skeleton" style="height:14px;width:12%;margin-left:auto"></span></div>`).join('')}</div>`},
]},

{ id:'menu', label:'Menu', desc:'Popover list with 6px padding, 36px items, kbd hints, danger at the bottom after a separator. Enters with ctxIn (scale + blur).',
css:`.av-menu{min-width:min(220px,100%);padding:6px;border-radius:var(--av-radius-xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover);display:flex;flex-direction:column;animation:av-ctx-in .32s var(--av-ease-standard);transform-origin:top left}
.av-menu__item{display:flex;align-items:center;gap:10px;width:100%;min-height:36px;padding:0 10px;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-primary);font:400 13px var(--av-font-sans);text-align:left;cursor:pointer}
.av-menu__item .av-icon{color:var(--av-icon-tertiary)}
.av-menu__item:hover,.av-menu__item:focus-visible{background:var(--av-layer-05);outline:none}
.av-menu__item--danger,.av-menu__item--danger .av-icon{color:var(--av-text-error)}
.av-menu__item[aria-disabled="true"]{color:var(--av-text-disabled);pointer-events:none}
.av-menu__kbd{margin-left:auto;font:11px var(--av-font-mono);color:var(--av-text-placeholder)}
.av-menu__check{margin-left:auto;color:var(--av-icon-interactive)!important;animation:av-pop .45s var(--av-ease-spring) .12s both}
.av-menu__sep{height:1px;margin:6px 4px;background:var(--av-border-subtle-01)}
.av-menu__group{padding:8px 10px 4px;font:500 10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-label)}
.av-menu__item--rich{min-height:52px;padding:6px 10px}
.av-menu__logo{width:36px;height:36px;flex-shrink:0;border-radius:9px;background:var(--av-layer-04);border:1px solid var(--av-border-subtle-00);display:flex;align-items:center;justify-content:center}
.av-menu__logo img{width:20px;height:20px;object-fit:contain}
.av-menu__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-weight:500}
.av-menu__sub{font-size:11px;font-weight:400;color:var(--av-text-helper)}
.av-menu__score{font:500 13px var(--av-font-mono)}
.av-menu__foot{display:flex;align-items:center;padding:4px 10px 0;margin-top:6px;border-top:1px solid var(--av-border-subtle-01)}`,
variants:[
 {name:'Basic', html:`<div class="av-menu" role="menu"><button class="av-menu__item" role="menuitem">Rename</button><button class="av-menu__item" role="menuitem">Move to org</button><button class="av-menu__item" role="menuitem">Archive</button></div>`},
 {name:'Shortcuts + danger', html:`<div class="av-menu" role="menu">
  ${menuItems}
</div>`},
 {name:'Groups', html:`<div class="av-menu" role="menu"><span class="av-menu__group">Client</span><button class="av-menu__item">Hydroponic Cloud</button><button class="av-menu__item">Acme Health · Archived</button><div class="av-menu__sep"></div><span class="av-menu__group">Account</span><button class="av-menu__item">Production Demo Account</button></div>`},
 {name:'Selectable', html:`<div class="av-menu" role="listbox"><button class="av-menu__item" role="option">Newest first</button><button class="av-menu__item" role="option" aria-selected="true">Severity${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button><button class="av-menu__item" role="option">Fix time</button></div>`},
 {name:'Rich', html:`<div class="av-menu" style="width:min(300px,100%)"><button class="av-menu__item av-menu__item--rich"><span class="av-menu__logo"><img src="assets/logo-azure.svg" alt=""></span><span class="av-menu__text"><span>Ashgrove Azure</span><span class="av-menu__sub">tenant 4c1e…b20</span></span><span class="av-menu__score av-posture--fair">78</span></button><button class="av-menu__item av-menu__item--rich"><span class="av-menu__logo"><img src="assets/logo-gcp.svg" alt=""></span><span class="av-menu__text"><span>Ashgrove Analytics</span><span class="av-menu__sub">ash-analytics-01</span></span><span class="av-menu__score av-posture--good">88</span></button></div>`},
 {name:'With footer action', html:`<div class="av-menu" style="width:min(280px,100%)"><button class="av-menu__item" aria-selected="true">Production Demo Account${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button><button class="av-menu__item">Staging Account</button><div class="av-menu__foot"><button class="av-btn av-btn--ghost av-btn--sm" style="padding:0">${ic('plus',14,2)}Connect account</button></div></div>`},
]},

{ id:'menu-buttons', label:'Menu buttons', desc:'Buttons that open a Menu. Chevron rotates when expanded.',
css:`.av-menubtn{position:relative;display:inline-flex;flex-direction:column;align-items:flex-start;gap:6px}
.av-menubtn .av-btn .av-menubtn__chev{transition:transform var(--av-duration-base)}
.av-menubtn .av-btn[aria-expanded="true"] .av-menubtn__chev{transform:rotate(180deg)}
.av-split{display:inline-flex}
.av-split .av-btn:first-child{border-radius:var(--av-radius-pill) 0 0 var(--av-radius-pill);padding-right:16px}
.av-split .av-btn:last-child{border-radius:0 var(--av-radius-pill) var(--av-radius-pill) 0;padding:0 12px;border-left:1px solid rgba(255,255,255,.25)}
.av-account-btn{display:inline-flex;align-items:center;gap:10px;height:40px;padding:0 10px 0 4px;border:1px solid transparent;border-radius:var(--av-radius-pill);background:transparent;color:var(--av-text-muted-intro);font:400 13px var(--av-font-sans);cursor:pointer}
.av-account-btn:hover,.av-account-btn[aria-expanded="true"]{border-color:var(--av-border-subtle-01);background:var(--av-layer-03)}`,
variants:[
 {name:'Secondary', html:`<div class="av-menubtn"><button class="av-btn av-btn--secondary" aria-haspopup="menu" aria-expanded="false">${ic('download',14)}Export${ic('chevDown',14,2).replace('av-icon','av-icon av-menubtn__chev')}</button></div>`},
 {name:'Open', html:`<div class="av-menubtn"><button class="av-btn av-btn--secondary" aria-haspopup="menu" aria-expanded="true">Export${ic('chevDown',14,2).replace('av-icon','av-icon av-menubtn__chev')}</button><div class="av-menu" role="menu"><button class="av-menu__item">${ic('report')}PDF report</button><button class="av-menu__item">${ic('file')}CSV findings</button></div></div>`},
 {name:'Split primary', html:`<div class="av-split"><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button><button class="av-btn av-btn--primary" aria-label="Scan options" aria-haspopup="menu">${ic('chevDown',14,2.2)}</button></div>`},
 {name:'Overflow', html:`<div class="av-menubtn"><button class="av-icon-btn av-icon-btn--ghost" aria-label="Row actions" aria-haspopup="menu" aria-expanded="true">${ic('dots',18,2.6)}</button><div class="av-menu" role="menu">${menuItems}</div></div>`},
 {name:'Account', html:`<button class="av-account-btn" aria-haspopup="menu" aria-expanded="false"><span class="av-avatar">Z</span>zalak@avistar.ai${ic('chevDown',14,2)}</button>`},
]},

{ id:'modal', label:'Modal', desc:'16px radius on layer-01, scrim 55% black. Title 18/600, body 14 tertiary, footer right-aligned. Side sheet for drill-ins (fix drawer). .av-demo-stage is only for docs — use position:fixed in product.',
css:`.av-modal-scrim{position:fixed;inset:0;z-index:var(--av-z-modal);display:flex;align-items:center;justify-content:center;padding:20px;background:var(--av-overlay)}
.av-demo-stage .av-modal-scrim,.av-demo-stage .av-sheet-scrim{position:absolute}
.av-modal{width:min(440px,100%);max-height:calc(100% - 40px);display:flex;flex-direction:column;border-radius:var(--av-radius-2xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-modal);animation:av-slide-up .3s var(--av-ease-enter)}
.av-modal--lg{width:min(640px,100%)}
.av-modal__head{display:flex;align-items:flex-start;gap:12px;padding:20px 20px 0}
.av-modal__heading{flex:1;display:flex;flex-direction:column;gap:6px}
.av-modal__title{margin:0;font-size:18px;font-weight:600;letter-spacing:-0.02em}
.av-modal__body{padding:12px 20px 20px;font-size:14px;line-height:1.55;color:var(--av-text-tertiary);overflow:auto;display:flex;flex-direction:column;gap:16px}
.av-modal__foot{display:flex;justify-content:flex-end;gap:8px;padding:14px 20px;border-top:1px solid var(--av-border-subtle-01)}
.av-modal__art{width:56px;height:56px;object-fit:contain}
.av-sheet-scrim{position:fixed;inset:0;z-index:var(--av-z-modal);background:var(--av-overlay-sheet)}
.av-sheet{position:absolute;top:0;right:0;bottom:0;width:min(420px,90%);display:flex;flex-direction:column;background:var(--av-layer-01);border-left:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-sheet);animation:av-sheet-in .36s var(--av-ease-standard)}
.av-sheet__head{display:flex;align-items:flex-start;gap:12px;padding:20px;border-bottom:1px solid var(--av-border-subtle-01)}
.av-sheet__body{flex:1;overflow:auto;padding:20px;display:flex;flex-direction:column;gap:16px;font-size:13px;color:var(--av-text-tertiary)}
.av-sheet__foot{display:flex;gap:8px;padding:14px 20px;border-top:1px solid var(--av-border-subtle-01)}`,
variants:(() => { const close = `<button class="av-icon-btn av-icon-btn--ghost" aria-label="Close">${ic('x',16)}</button>`; return [
 {name:'Passive', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true" aria-labelledby="m1"><div class="av-modal__head"><div class="av-modal__heading"><span class="av-eyebrow">Help</span><h2 class="av-modal__title" id="m1">Everything flows into one score</h2></div>${close}</div><div class="av-modal__body">Every scan feeds the posture number. Close the top three fixes and watch it climb.</div></div></div></div>`},
 {name:'Transactional', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true"><div class="av-modal__head"><div class="av-modal__heading"><h2 class="av-modal__title">Run a full scan?</h2></div>${close}</div><div class="av-modal__body">This reads 3 accounts and takes about 6 minutes. You can keep working.</div><div class="av-modal__foot"><button class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button></div></div></div></div>`},
 {name:'Danger', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="alertdialog" aria-modal="true"><div class="av-modal__head"><div class="av-modal__heading"><h2 class="av-modal__title">Revoke access key?</h2></div>${close}</div><div class="av-modal__body">AKIA…7Q2F stops working immediately. 2 workloads depend on it.</div><div class="av-modal__foot"><button class="av-btn av-btn--secondary">Cancel</button><button class="av-btn av-btn--danger-solid">Revoke key</button></div></div></div></div>`},
 {name:'Form', html:`<div class="av-demo-stage" style="height:440px"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true"><div class="av-modal__head"><div class="av-modal__heading"><h2 class="av-modal__title">Create organization</h2></div>${close}</div><div class="av-modal__body"><label class="av-field"><span class="av-field__label">Name</span><input class="av-input" placeholder="Ridgeway Partners MSP"></label><label class="av-checkbox"><input type="checkbox" checked>I'm the owner</label></div><div class="av-modal__foot"><button class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">Create</button></div></div></div></div>`},
 {name:'With illustration', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true"><div class="av-modal__body" style="padding-top:24px;align-items:center;text-align:center"><img class="av-modal__art" src="assets/mascots/shield.png" alt=""><h2 class="av-modal__title" style="color:var(--av-text-primary)">Account connected</h2>First scan starts now. We'll notify you when it's done.</div><div class="av-modal__foot" style="justify-content:center"><button class="av-btn av-btn--primary">View first scan${ic('arrow',16,2)}</button></div></div></div></div>`},
 {name:'Side sheet', html:`<div class="av-demo-stage" style="height:420px"><div class="av-sheet-scrim"></div><aside class="av-sheet" role="dialog" aria-modal="true"><div class="av-sheet__head"><div class="av-modal__heading"><span class="av-tag av-tag--critical" style="align-self:flex-start"><span class="av-tag__dot"></span>Critical</span><h2 class="av-modal__title">S3 bucket is publicly readable</h2><span class="av-table__id">hci-exports-prod · us-east-1</span></div>${close}</div><div class="av-sheet__body">Anyone with the URL can list and download objects.<div class="av-code av-code--single"><span>aws s3api put-public-access-block …</span><button class="av-icon-btn av-icon-btn--ghost av-code__copy" aria-label="Copy">${ic('copy',16)}</button></div></div><div class="av-sheet__foot"><button class="av-btn av-btn--primary">Mark fixed</button><button class="av-btn av-btn--secondary">Assign</button></div></aside></div>`},
]; })()},

{ id:'notification', label:'Notification', desc:'Inline notices (info / success / warning / error), toasts (inverse) and the dismissible banner.',
css:`.av-notice{--av-n:var(--av-support-low);--av-n-bg:var(--av-support-low-bg);display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:var(--av-radius-xl);border:1px solid color-mix(in srgb,var(--av-n) 38%,transparent);background:var(--av-n-bg)}
.av-notice--success{--av-n:var(--av-support-success);--av-n-bg:var(--av-support-success-bg)}
.av-notice--warning{--av-n:var(--av-support-medium);--av-n-bg:var(--av-support-medium-bg)}
.av-notice--error{--av-n:var(--av-support-critical);--av-n-bg:var(--av-support-critical-bg)}
.av-notice__icon{width:20px;height:20px;flex-shrink:0;border-radius:50%;background:var(--av-n);color:var(--av-text-inverse);display:flex;align-items:center;justify-content:center;font:700 12px var(--av-font-sans)}
.av-notice__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.av-notice__title{font-size:14px;font-weight:600}.av-notice__text{font-size:13px;line-height:1.45;color:var(--av-text-tertiary)}
.av-notice__action{align-self:center;font-size:13px;white-space:nowrap}
.av-notice--subtle{border-color:var(--av-border-subtle-01);background:var(--av-layer-01)}
.av-toast{display:inline-flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:var(--av-background-inverse);color:var(--av-text-inverse);box-shadow:var(--av-shadow-toast);font-size:13px;font-weight:500;animation:av-slide-up .3s var(--av-ease-enter)}
.av-toast__dot{width:8px;height:8px;border-radius:50%;background:var(--av-support-success)}
.av-toast a{color:inherit;text-underline-offset:3px}
.av-toast--quiet{background:var(--av-layer-01);color:var(--av-text-primary);border:1px solid var(--av-border-subtle-01)}
.av-toast--error{background:var(--av-layer-01);color:var(--av-text-error);border:1px solid var(--av-button-danger-border)}`,
variants:[
 {name:'Inline kinds', html:`<div class="av-stack">
  <div class="av-notice" role="status"><span class="av-notice__icon">i</span><span class="av-notice__body"><span class="av-notice__title">Scan scheduled</span><span class="av-notice__text">Next full scan runs tonight at 02:00 UTC.</span></span><a class="av-link av-notice__action" href="#">Change</a></div>
  <div class="av-notice av-notice--success" role="status"><span class="av-notice__icon">✓</span><span class="av-notice__body"><span class="av-notice__title">Guardrail applied</span><span class="av-notice__text">“Rotate keys every 90 days” now enforced on 4 clients.</span></span></div>
  <div class="av-notice av-notice--warning" role="status"><span class="av-notice__icon">!</span><span class="av-notice__body"><span class="av-notice__title">Credentials expiring</span><span class="av-notice__text">Azure service principal expires in 6 days.</span></span><a class="av-link av-notice__action" href="#">Renew</a></div>
  <div class="av-notice av-notice--error" role="alert"><span class="av-notice__icon">!</span><span class="av-notice__body"><span class="av-notice__title">Critical exposure</span><span class="av-notice__text">A key for ci-deploy-runner was found in a public repo.</span></span><a class="av-link av-notice__action" href="#">Revoke now</a></div>
</div>`},
 {name:'Toasts', html:`<div class="av-stack" style="align-items:flex-start">
  <div class="av-toast" role="status"><span class="av-toast__dot"></span>Scan complete · 3 new findings<a href="#">View</a></div>
  <div class="av-toast av-toast--quiet" role="status"><span class="av-spinner av-spinner--sm"></span>Syncing AWS accounts…</div>
  <div class="av-toast av-toast--error" role="alert">Couldn't reach GCP. Retrying in 30s</div>
  <div class="av-toast" role="status">ARN copied</div>
</div>`},
 {name:'Dismissible', html:`<div class="av-notice av-notice--subtle"><span class="av-notice__icon">i</span><span class="av-notice__body"><span class="av-notice__title">New: guardrails</span><span class="av-notice__text">Block risky changes before they ship.</span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Dismiss">${ic('x',16)}</button></div>`},
 {name:'Actionable', html:`<div class="av-notice av-notice--warning"><span class="av-notice__icon">!</span><span class="av-notice__body"><span class="av-notice__title">1 of 3 accounts not scanned</span><span class="av-notice__text">Staging is missing permissions.</span></span><button class="av-btn av-btn--secondary av-btn--sm" style="align-self:center">Fix permissions</button></div>`},
]},

{ id:'number-input', label:'Number input', desc:'Field with stepper buttons and optional unit. Focus ring applies to the whole group.',
css:`.av-number{display:flex;align-items:stretch;height:44px;max-width:220px;border:1px solid var(--av-border-strong-01);border-radius:var(--av-radius-lg);background:var(--av-field-01);overflow:hidden;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast)}
.av-number:focus-within{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-number input{flex:1;min-width:0;padding:0 14px;border:0;background:transparent;color:var(--av-text-primary);font:400 14px var(--av-font-sans);font-variant-numeric:tabular-nums;outline:none;-moz-appearance:textfield}
.av-number input::-webkit-inner-spin-button,.av-number input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
.av-number__unit{display:flex;align-items:center;padding-right:10px;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-number button{width:40px;border:0;border-left:1px solid var(--av-border-subtle-01);background:transparent;color:var(--av-icon-secondary);cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-number button:hover{background:var(--av-layer-hover-01);color:var(--av-icon-primary)}
.av-number--invalid{border-color:var(--av-border-error)}
.av-number--disabled{border-style:dashed;background:transparent}.av-number--disabled input,.av-number--disabled button{color:var(--av-text-disabled);cursor:not-allowed}
.av-number--sm{height:36px}.av-number--sm button{width:32px}`,
variants:(() => { const n = (v, cls = '', unit, dis) => `<div class="av-number ${cls}"><input type="number" value="${v}"${dis ? ' disabled' : ''} aria-label="Value">${unit ? `<span class="av-number__unit">${unit}</span>` : ''}<button aria-label="Decrease"${dis ? ' disabled' : ''}>${ic('minus',14,2)}</button><button aria-label="Increase"${dis ? ' disabled' : ''}>${ic('plus',14,2)}</button></div>`; return [
 {name:'Default', html:`<label class="av-field"><span class="av-field__label">Retention</span>${n(30)}</label>`},
 {name:'With unit', html:n(90,'','DAYS')},
 {name:'Invalid', html:`<label class="av-field"><span class="av-field__label">Key max age</span>${n(400,'av-number--invalid','DAYS')}<span class="av-field__error">${ic('alert',12,2)}Max 365 days</span></label>`},
 {name:'Disabled', html:n(6,'av-number--disabled','HOURS',true)},
 {name:'Small', html:n(3,'av-number--sm')},
]; })()},

{ id:'pagination', label:'Pagination', desc:'32px page buttons, current page has strong border + layer-03.',
css:`.av-pagination{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;font-size:12px;color:var(--av-text-helper)}
.av-pagination__pages{display:flex;align-items:center;gap:4px}
.av-page{min-width:32px;height:32px;padding:0 8px;border-radius:var(--av-radius-md);border:1px solid transparent;background:transparent;color:var(--av-text-tertiary);font:400 12px var(--av-font-sans);font-variant-numeric:tabular-nums;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
.av-page:hover{background:var(--av-layer-hover-01);color:var(--av-text-primary)}
.av-page[aria-current="page"]{border-color:var(--av-border-strong-02);background:var(--av-layer-03);color:var(--av-text-primary)}
.av-page:disabled{color:var(--av-text-disabled);cursor:not-allowed;background:transparent}
.av-pagination__size{display:flex;align-items:center;gap:8px}
.av-pagination__more{display:flex;justify-content:center;padding:12px}`,
variants:[
 {name:'Numbered', html:`<nav class="av-pagination" aria-label="Pagination"><span>1–25 of 293</span><div class="av-pagination__pages"><button class="av-page" disabled aria-label="Previous">${ic('chevLeft',14,2)}</button><button class="av-page" aria-current="page">1</button><button class="av-page">2</button><button class="av-page">3</button><span class="av-page" aria-hidden="true">…</span><button class="av-page">12</button><button class="av-page" aria-label="Next">${ic('chevRight',14,2)}</button></div></nav>`},
 {name:'With page size', html:`<nav class="av-pagination"><span class="av-pagination__size">Rows<span class="av-select av-select--sm"><select><option>25</option><option>50</option></select>${ic('chevDown',12,2).replace('av-icon','av-icon av-select__chev')}</span></span><span>26–50 of 293</span><div class="av-pagination__pages"><button class="av-page">${ic('chevLeft',14,2)}</button><button class="av-page">1</button><button class="av-page" aria-current="page">2</button><button class="av-page">3</button><button class="av-page">${ic('chevRight',14,2)}</button></div></nav>`},
 {name:'Simple', html:`<nav class="av-pagination"><span>Page 2 of 12</span><div class="av-pagination__pages"><button class="av-btn av-btn--secondary av-btn--sm">${ic('chevLeft',12,2)}Previous</button><button class="av-btn av-btn--secondary av-btn--sm">Next${ic('chevRight',12,2)}</button></div></nav>`},
 {name:'Load more', html:`<div class="av-pagination__more"><button class="av-btn av-btn--secondary">Show 25 more</button></div>`},
]},

{ id:'password-input', label:'Password input', desc:'Text input with reveal toggle; optional 4-segment strength meter.',
css:`.av-input-group{position:relative;display:flex;align-items:center}
.av-input-group__icon{position:absolute;left:14px;color:var(--av-icon-tertiary);pointer-events:none}
.av-input-group--start .av-input{padding-left:40px}
.av-input-group__end{position:absolute;right:6px;display:flex;align-items:center;gap:4px}
.av-input-group--end .av-input{padding-right:48px}
.av-strength{display:flex;gap:4px}.av-strength span{flex:1;height:4px;border-radius:var(--av-radius-pill);background:var(--av-layer-04)}
.av-strength[data-level="1"] span:nth-child(-n+1){background:var(--av-support-critical)}
.av-strength[data-level="2"] span:nth-child(-n+2){background:var(--av-support-medium)}
.av-strength[data-level="3"] span:nth-child(-n+3){background:var(--av-support-low)}
.av-strength[data-level="4"] span{background:var(--av-support-success)}`,
variants:(() => { const p = (v, type, extra = '', eye = 'eye') => `<span class="av-input-group av-input-group--end"><input class="av-input" type="${type}" value="${v}"${extra}><span class="av-input-group__end"><button class="av-icon-btn av-icon-btn--ghost" aria-label="${eye === 'eye' ? 'Show' : 'Hide'} password">${ic(eye,16)}</button></span></span>`; return [
 {name:'Hidden', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">Password</span>${p('correct horse','password')}</label>`},
 {name:'Visible', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">Client secret</span>${p('Zx8~q1Lr-2mp','text',' class="av-input av-input--mono"','eyeOff').replace('class="av-input" type="text" value="Zx8~q1Lr-2mp" class="av-input av-input--mono"','class="av-input av-input--mono" type="text" value="Zx8~q1Lr-2mp"')}</label>`},
 {name:'Strength', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">New password</span>${p('hunter22','password')}<span class="av-strength" data-level="2"><span></span><span></span><span></span><span></span></span><span class="av-field__helper">Fair · add a symbol or 4 more characters</span></label>`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">Password</span>${p('abc','password',' aria-invalid="true"')}<span class="av-field__error">${ic('alert',12,2)}Incorrect password</span></label>`},
]; })()},

{ id:'popover', label:'Popover', desc:'Rich floating panel (280px) with optional caret. Anchor with Floating UI or CSS anchor positioning.',
css:`.av-popover{position:relative;width:min(280px,100%);padding:16px;border-radius:var(--av-radius-xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover);display:flex;flex-direction:column;gap:10px;font-size:13px;line-height:1.5;color:var(--av-text-tertiary);animation:av-ctx-in .32s var(--av-ease-standard)}
.av-popover__title{font-size:14px;font-weight:600;color:var(--av-text-primary)}
.av-popover__actions{display:flex;gap:8px}
.av-popover--caret-bottom::after,.av-popover--caret-top::after{content:"";position:absolute;left:24px;width:12px;height:12px;background:inherit;border:1px solid var(--av-border-subtle-01);transform:rotate(45deg)}
.av-popover--caret-bottom::after{bottom:-7px;border-top:0;border-left:0}
.av-popover--caret-top::after{top:-7px;border-bottom:0;border-right:0}
.av-popover__stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding-top:10px;border-top:1px solid var(--av-border-subtle-01)}
.av-popover__stat{display:flex;flex-direction:column;gap:2px}.av-popover__stat b{font-size:18px;font-weight:600;color:var(--av-text-primary);font-variant-numeric:tabular-nums}`,
variants:[
 {name:'Basic', html:`<div class="av-popover" role="dialog"><span class="av-popover__title">svc-billing-writer</span>Has s3:PutObject on 14 buckets. Used by 1 workload.</div>`},
 {name:'With actions', html:`<div class="av-popover" role="dialog"><span class="av-popover__title">Scope down?</span>Remove write access on 12 unused buckets.<div class="av-popover__actions"><button class="av-btn av-btn--primary av-btn--sm">Scope down</button><button class="av-btn av-btn--secondary av-btn--sm">Details</button></div></div>`},
 {name:'Caret top', html:`<div style="padding-top:8px"><div class="av-popover av-popover--caret-top"><span class="av-popover__title">Posture score</span>0–64 poor · 65–79 fair · 80+ good.</div></div>`},
 {name:'Caret bottom', html:`<div style="padding-bottom:8px"><div class="av-popover av-popover--caret-bottom"><span class="av-popover__title">Last scan</span>Finished 2 hours ago in 5m 41s.</div></div>`},
 {name:'Rich', html:`<div class="av-popover" style="width:min(300px,100%)"><div class="av-row" style="gap:10px"><span class="av-avatar av-avatar--square">CI</span><span class="av-stack" style="gap:2px"><span class="av-popover__title">ci-deploy-runner</span><span class="av-table__id">arn:aws:iam::0105:role/ci</span></span></div><div class="av-popover__stats"><span class="av-popover__stat"><b>14</b>policies</span><span class="av-popover__stat"><b class="av-posture--poor">3</b>critical</span><span class="av-popover__stat"><b>2m</b>last used</span></div></div>`},
]},

{ id:'progress-bar', label:'Progress bar', desc:'6px track on layer-04. Brand gradient for coverage/score, status colours for compliance, indeterminate for scanning.',
css:`.av-progress{display:flex;flex-direction:column;gap:6px;width:100%}
.av-progress__head{display:flex;justify-content:space-between;gap:12px;font-size:13px;color:var(--av-text-secondary)}
.av-progress__value{font-variant-numeric:tabular-nums;color:var(--av-text-helper)}
.av-progress__track{position:relative;display:block;height:6px;border-radius:var(--av-radius-pill);background:var(--av-layer-04);overflow:hidden}
.av-progress__fill{display:block;height:100%;border-radius:inherit;background:var(--av-gradient-brand);transition:width .6s var(--av-ease-standard)}
.av-progress--ion .av-progress__fill{background:var(--av-support-low)}
.av-progress--amber .av-progress__fill{background:var(--av-support-medium)}
.av-progress--success .av-progress__fill{background:var(--av-support-success)}
.av-progress--error .av-progress__fill{background:var(--av-support-critical)}
.av-progress--indeterminate .av-progress__fill{width:40%;animation:av-indet 1.4s var(--av-ease-standard) infinite}
.av-progress--sm .av-progress__track{height:4px}
.av-progress__helper{font-size:12px;color:var(--av-text-helper)}.av-progress--error .av-progress__helper{color:var(--av-text-error)}`,
variants:[
 {name:'Brand', html:`<div class="av-progress"><div class="av-progress__head"><span>Identity coverage</span><span class="av-progress__value">72%</span></div><span class="av-progress__track" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"><span class="av-progress__fill" style="width:72%"></span></span></div>`},
 {name:'Status', html:`<div class="av-stack" style="gap:16px">
  <div class="av-progress av-progress--amber"><div class="av-progress__head"><span>Rotation compliance</span><span class="av-progress__value">48%</span></div><span class="av-progress__track"><span class="av-progress__fill" style="width:48%"></span></span></div>
  <div class="av-progress av-progress--success"><div class="av-progress__head"><span>MFA enforced</span><span class="av-progress__value">96%</span></div><span class="av-progress__track"><span class="av-progress__fill" style="width:96%"></span></span></div>
</div>`},
 {name:'Indeterminate', html:`<div class="av-progress av-progress--ion av-progress--indeterminate"><div class="av-progress__head"><span>Scanning Production Demo Account</span></div><span class="av-progress__track"><span class="av-progress__fill"></span></span><span class="av-progress__helper">Reading IAM roles…</span></div>`},
 {name:'Error', html:`<div class="av-progress av-progress--error"><div class="av-progress__head"><span>Upload</span><span class="av-progress__value">31%</span></div><span class="av-progress__track"><span class="av-progress__fill" style="width:31%"></span></span><span class="av-progress__helper">Connection lost</span></div>`},
]},

{ id:'progress-indicator', label:'Progress indicator', desc:'Stepper for multi-step flows (Connect account). Done = Ion, current = Signal, upcoming = outline.',
css:`.av-steps{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0;list-style:none}
.av-step{display:flex;align-items:center;gap:10px;flex:1 1 150px;font-size:13px;color:var(--av-text-helper)}
.av-step__dot{width:28px;height:28px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid var(--av-border-strong-02);font:600 12px var(--av-font-mono)}
.av-step__line{flex:1;min-width:16px;height:1px;background:var(--av-border-subtle-01)}
.av-step__text{display:flex;flex-direction:column;gap:2px}.av-step__desc{font-size:12px;color:var(--av-text-helper)}
.av-step--done{color:var(--av-text-primary)}.av-step--done .av-step__dot{border-color:transparent;background:var(--av-border-interactive);color:var(--av-text-inverse)}
.av-step--done .av-step__line{background:var(--av-border-interactive)}
.av-step--current{color:var(--av-text-primary);font-weight:500}.av-step--current .av-step__dot{border-color:transparent;background:var(--av-button-primary);color:var(--av-text-on-color)}
.av-step--invalid{color:var(--av-text-error)}.av-step--invalid .av-step__dot{border-color:var(--av-border-error);color:var(--av-text-error)}
.av-steps--vertical{flex-direction:column;gap:0}
.av-steps--vertical .av-step{flex:none;align-items:flex-start;position:relative;padding-bottom:20px}
.av-steps--vertical .av-step__line{position:absolute;left:14px;top:32px;bottom:4px;width:1px;height:auto;min-width:0}`,
variants:(() => { const s = (vert, desc, inv) => `<ol class="av-steps${vert ? ' av-steps--vertical' : ''}">${[['Connect cloud','Read-only role','done'],['Scan identities','~6 min','done'],['Review findings','293 open', inv ? 'invalid' : 'current'],['Set guardrails','Optional','']].map(([n,d,st],i,a) => `
  <li class="av-step${st ? ' av-step--' + st : ''}"${st === 'current' ? ' aria-current="step"' : ''}><span class="av-step__dot">${st === 'done' ? ic('check',12,3) : st === 'invalid' ? '!' : i + 1}</span>${desc ? `<span class="av-step__text">${n}<span class="av-step__desc">${d}</span></span>` : n}${i < a.length - 1 ? '<span class="av-step__line"></span>' : ''}</li>`).join('')}
</ol>`; return [
 {name:'Horizontal', html:s()}, {name:'Vertical', html:s(true,true)}, {name:'With descriptions', html:s(false,true)}, {name:'Invalid step', html:s(false,false,true)},
]; })()},

{ id:'radio-button', label:'Radio button', desc:'18px ring, 8px Ion dot. Radio cards for choosing a connect method.',
css:`.av-radio{display:inline-flex;align-items:center;gap:10px;min-height:32px;font-size:14px;color:var(--av-text-secondary);cursor:pointer}
.av-radio input{appearance:none;-webkit-appearance:none;margin:0;width:18px;height:18px;flex-shrink:0;border-radius:50%;border:1.5px solid var(--av-border-strong-02);display:grid;place-content:center;cursor:pointer;transition:border-color var(--av-duration-fast)}
.av-radio input::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--av-border-interactive);transform:scale(0);transition:transform var(--av-duration-base) var(--av-ease-spring)}
.av-radio input:checked{border-color:var(--av-border-interactive)}.av-radio input:checked::before{transform:scale(1)}
.av-radio input:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-radio:has(input:disabled){color:var(--av-text-disabled);cursor:not-allowed}.av-radio input:disabled{border-color:var(--av-border-subtle-02)}
.av-radio--invalid input{border-color:var(--av-border-error)}
.av-radio-group{display:flex;flex-direction:column;gap:4px}.av-radio-group--row{flex-direction:row;flex-wrap:wrap;gap:20px}
.av-radio-card{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border:1px solid var(--av-border-strong-01);border-radius:var(--av-radius-xl);background:var(--av-layer-01);cursor:pointer;transition:border-color var(--av-duration-fast),background var(--av-duration-fast)}
.av-radio-card:hover{border-color:var(--av-border-strong-02)}
.av-radio-card:has(input:checked){border-color:var(--av-border-interactive);background:var(--av-background-selected)}
.av-radio-card__body{flex:1;display:flex;flex-direction:column;gap:2px}.av-radio-card__title{font-size:14px;font-weight:500;color:var(--av-text-primary)}.av-radio-card__desc{font-size:12px;color:var(--av-text-helper)}`,
variants:[
 {name:'Group', html:`<fieldset class="av-fieldset"><legend>Scan frequency</legend><div class="av-radio-group"><label class="av-radio"><input type="radio" name="f1" checked>Every 6 hours</label><label class="av-radio"><input type="radio" name="f1">Daily</label><label class="av-radio"><input type="radio" name="f1">Weekly</label></div></fieldset>`},
 {name:'Horizontal', html:`<div class="av-radio-group av-radio-group--row"><label class="av-radio"><input type="radio" name="f2" checked>AWS</label><label class="av-radio"><input type="radio" name="f2">Azure</label><label class="av-radio"><input type="radio" name="f2">GCP</label></div>`},
 {name:'Disabled', html:`<div class="av-radio-group"><label class="av-radio"><input type="radio" name="f3" disabled checked>Read-only (required)</label><label class="av-radio"><input type="radio" name="f3" disabled>Read-write</label></div>`},
 {name:'Invalid', html:`<div class="av-stack" style="gap:4px"><div class="av-radio-group"><label class="av-radio av-radio--invalid"><input type="radio" name="f4">Owner</label><label class="av-radio av-radio--invalid"><input type="radio" name="f4">Analyst</label></div><span class="av-field__error">${ic('alert',12,2)}Choose a role</span></div>`},
 {name:'With helper', html:`<label class="av-radio" style="align-items:flex-start"><input type="radio" name="f5" checked style="margin-top:2px"><span class="av-checkbox__text">Quick connect<span class="av-checkbox__helper">CloudFormation stack · ~2 min</span></span></label>`},
 {name:'Radio cards', html:`<div class="av-stack" style="gap:8px;max-width:420px"><label class="av-radio-card"><span class="av-radio"><input type="radio" name="f6" checked></span><span class="av-radio-card__body"><span class="av-radio-card__title">Quick connect</span><span class="av-radio-card__desc">One-click CloudFormation stack · ~2 min</span></span></label><label class="av-radio-card"><span class="av-radio"><input type="radio" name="f6"></span><span class="av-radio-card__body"><span class="av-radio-card__title">Manual</span><span class="av-radio-card__desc">Create the IAM role yourself · ~5 min</span></span></label></div>`},
]},

{ id:'search', label:'Search', desc:'Pill search on the client picker; field search inside tables and lists. ⌘K hint in the top bar.',
css:`.av-search{position:relative;display:flex;align-items:center;width:100%;color:var(--av-icon-tertiary)}
.av-search>.av-icon{position:absolute;left:16px;pointer-events:none}
.av-search__input{width:100%;height:44px;padding:0 48px 0 44px;border-radius:var(--av-radius-pill);border:1px solid var(--av-tag-outline-border);background:transparent;color:var(--av-text-primary);font:400 14px var(--av-font-sans);outline:none;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast)}
.av-search__input::placeholder{color:var(--av-text-placeholder)}
.av-search__input:hover{border-color:var(--av-border-strong-02)}
.av-search__input:focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-search__end{position:absolute;right:8px;display:flex;align-items:center;gap:4px}
.av-kbd{padding:2px 7px;border-radius:6px;border:1px solid var(--av-border-strong-01);font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-search--field .av-search__input{border-radius:var(--av-radius-lg);border-color:var(--av-border-strong-01);background:var(--av-field-01)}
.av-search--sm>.av-icon{left:12px}.av-search--sm .av-search__input{height:36px;padding-left:36px;font-size:13px}
.av-search--collapsed{width:auto}.av-search--collapsed .av-search__input{width:40px;padding:0;cursor:pointer}.av-search--collapsed>.av-icon{left:12px}`,
variants:[
 {name:'Pill (client picker)', html:`<div class="av-search" style="max-width:420px">${ic('search',18,2)}<input class="av-search__input" type="search" placeholder="Search clients" aria-label="Search clients"></div>`},
 {name:'Field', html:`<div class="av-search av-search--field" style="max-width:360px">${ic('search',16,2)}<input class="av-search__input" placeholder="Search identities, keys, roles"></div>`},
 {name:'With shortcut', html:`<div class="av-search av-search--field av-search--sm" style="max-width:280px">${ic('search',16,2)}<input class="av-search__input" placeholder="Search"><span class="av-search__end"><kbd class="av-kbd">⌘K</kbd></span></div>`},
 {name:'With value + clear', html:`<div class="av-search" style="max-width:360px">${ic('search',18,2)}<input class="av-search__input" value="tide"><span class="av-search__end"><button class="av-icon-btn av-icon-btn--ghost" aria-label="Clear">${ic('x',14,2)}</button></span></div>`},
 {name:'Collapsed', html:`<div class="av-search av-search--collapsed av-search--sm">${ic('search',16,2)}<input class="av-search__input" aria-label="Search"></div>`},
]},

{ id:'select', label:'Select', desc:'Native <select> styled as a field. Inline variant for compact toolbars.',
css:`.av-select{position:relative;display:flex;width:100%}
.av-select select{flex:1;appearance:none;-webkit-appearance:none;height:44px;padding:0 40px 0 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px var(--av-font-sans);outline:none;cursor:pointer}
.av-select select:hover{background:var(--av-field-hover-01)}
.av-select select:focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-select select[aria-invalid="true"]{border-color:var(--av-border-error)}
.av-select select:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-select__chev{position:absolute;right:14px;top:50%;margin-top:-7px;color:var(--av-icon-tertiary);pointer-events:none}
.av-select--sm{width:auto}.av-select--sm select{height:32px;padding:0 30px 0 10px;font-size:12px}.av-select--sm .av-select__chev{right:10px;margin-top:-6px}
.av-select--inline{width:auto}.av-select--inline select{height:32px;padding:0 28px 0 10px;border-color:transparent;background:transparent;font-size:13px;color:var(--av-text-tertiary)}
.av-select--inline select:hover{background:var(--av-layer-03);color:var(--av-text-primary)}`,
variants:(() => { const sel = (cls = '', opts = '<option>All environments</option><option>Production</option><option>Staging</option>', a = '') => `<span class="av-select ${cls}"><select${a}>${opts}</select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span>`; return [
 {name:'Default', html:`<div style="max-width:280px">${sel()}</div>`},
 {name:'With label', html:`<label class="av-field" style="max-width:280px"><span class="av-field__label">Region</span>${sel('','<option>us-east-1</option><option>eu-west-1</option>')}<span class="av-field__helper">Where the role lives.</span></label>`},
 {name:'Inline', html:sel('av-select--inline','<option>Sort: Severity</option><option>Sort: Newest</option>')},
 {name:'Invalid', html:`<label class="av-field" style="max-width:280px"><span class="av-field__label">Owner</span>${sel('','<option>Choose…</option>',' aria-invalid="true"')}<span class="av-field__error">${ic('alert',12,2)}Required</span></label>`},
 {name:'Disabled', html:`<div style="max-width:280px">${sel('','<option>Managed by policy</option>',' disabled')}</div>`},
]; })()},

{ id:'slider', label:'Slider', desc:'Gradient fill track with white thumb + Ion halo. Set --av-pct inline (or via JS on input) to paint the fill.',
css:`.av-slider{display:flex;flex-direction:column;gap:10px;width:100%;max-width:420px}
.av-slider__head{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--av-text-secondary)}
.av-slider__value{font:500 13px var(--av-font-mono);color:var(--av-text-primary)}
.av-slider input[type="range"]{--av-pct:50%;-webkit-appearance:none;appearance:none;width:100%;height:6px;margin:6px 0;border-radius:var(--av-radius-pill);background:linear-gradient(90deg,var(--av-gradient-start),var(--av-gradient-end)) 0/var(--av-pct) 100% no-repeat,var(--av-layer-04);outline:none;cursor:pointer}
.av-slider input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px var(--av-focus-ring),0 2px 6px rgba(0,0,0,.4)}
.av-slider input[type="range"]::-moz-range-thumb{width:18px;height:18px;border:0;border-radius:50%;background:#fff;box-shadow:0 0 0 4px var(--av-focus-ring),0 2px 6px rgba(0,0,0,.4)}
.av-slider input[type="range"]:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 4px var(--av-focus),0 2px 6px rgba(0,0,0,.4)}
.av-slider input[type="range"]:disabled{opacity:.4;cursor:not-allowed}
.av-slider__scale{display:flex;justify-content:space-between;font:10px var(--av-font-mono);letter-spacing:.08em;color:var(--av-text-label)}
.av-slider__row{display:flex;align-items:center;gap:12px}.av-slider__row input[type="range"]{flex:1}`,
variants:[
 {name:'Default', html:`<div class="av-slider"><div class="av-slider__head"><span>Alert threshold</span><span class="av-slider__value">65</span></div><input type="range" min="0" max="100" value="65" style="--av-pct:65%" oninput="this.style.setProperty('--av-pct',this.value+'%')"></div>`},
 {name:'With input', html:`<div class="av-slider"><span class="av-field__label">Key max age (days)</span><div class="av-slider__row"><input type="range" min="30" max="365" value="90" style="--av-pct:18%"><div class="av-number av-number--sm" style="width:96px"><input type="number" value="90" aria-label="Days"></div></div></div>`},
 {name:'With scale', html:`<div class="av-slider"><div class="av-slider__head"><span>Severity floor</span><span class="av-slider__value">HIGH</span></div><input type="range" min="0" max="3" value="2" style="--av-pct:66%"><div class="av-slider__scale"><span>LOW</span><span>MEDIUM</span><span>HIGH</span><span>CRITICAL</span></div></div>`},
 {name:'Disabled', html:`<div class="av-slider"><div class="av-slider__head"><span>Retention</span><span class="av-slider__value">30</span></div><input type="range" value="30" disabled style="--av-pct:30%"></div>`},
]},

{ id:'structured-list', label:'Structured list', desc:'Key / value rows for detail panels (identity details, account info).',
css:`.av-slist{display:flex;flex-direction:column;border-top:1px solid var(--av-border-subtle-00)}
.av-slist__row{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr);gap:16px;align-items:center;min-height:48px;padding:12px 0;border-bottom:1px solid var(--av-border-subtle-00);font-size:13px}
.av-slist__k{color:var(--av-text-helper)}.av-slist__v{color:var(--av-text-primary);min-width:0;overflow-wrap:anywhere}
.av-slist__v--mono{font:12px var(--av-font-mono)}
.av-slist__row--head{min-height:36px;font:500 10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-label)}
.av-slist__row--head .av-slist__v{color:inherit}
.av-slist--3 .av-slist__row{grid-template-columns:minmax(0,1.5fr) minmax(0,1fr) minmax(0,1fr)}
.av-slist--condensed .av-slist__row{min-height:36px;padding:6px 0}
.av-slist--selectable .av-slist__row{grid-template-columns:28px minmax(0,1.5fr) minmax(0,1fr);cursor:pointer}
.av-slist--selectable .av-slist__row:hover{background:var(--av-layer-hover-01)}
.av-slist--card{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);padding:0 16px}
.av-slist--card .av-slist__row:last-child{border-bottom:0}
.av-slist__copy{display:flex;align-items:center;gap:6px}`,
variants:[
 {name:'Key / value', html:`<div class="av-slist"><div class="av-slist__row"><span class="av-slist__k">Provider</span><span class="av-slist__v">AWS</span></div><div class="av-slist__row"><span class="av-slist__k">Owner</span><span class="av-slist__v">Platform team</span></div><div class="av-slist__row"><span class="av-slist__k">Created</span><span class="av-slist__v">Mar 2024</span></div></div>`},
 {name:'With header', html:`<div class="av-slist av-slist--3"><div class="av-slist__row av-slist__row--head"><span>Policy</span><span>Type</span><span>Attached</span></div><div class="av-slist__row"><span class="av-slist__v">SecurityAudit</span><span class="av-slist__k">AWS managed</span><span class="av-slist__k">2y ago</span></div><div class="av-slist__row"><span class="av-slist__v">ci-deploy-inline</span><span class="av-slist__k">Inline</span><span class="av-slist__k">14d ago</span></div></div>`},
 {name:'Condensed', html:`<div class="av-slist av-slist--condensed"><div class="av-slist__row"><span class="av-slist__k">Region</span><span class="av-slist__v">us-east-1</span></div><div class="av-slist__row"><span class="av-slist__k">Resources</span><span class="av-slist__v">214</span></div></div>`},
 {name:'Selectable', html:`<div class="av-slist av-slist--selectable"><label class="av-slist__row"><span class="av-radio"><input type="radio" name="sl" checked></span><span class="av-slist__v">Production Demo Account</span><span class="av-slist__k">AWS</span></label><label class="av-slist__row"><span class="av-radio"><input type="radio" name="sl"></span><span class="av-slist__v">Northwind Commerce</span><span class="av-slist__k">GCP</span></label></div>`},
 {name:'In card', html:`<div class="av-slist av-slist--card"><div class="av-slist__row"><span class="av-slist__k">Status</span><span class="av-slist__v"><span class="av-tag av-tag--success"><span class="av-tag__dot"></span>Complete coverage</span></span></div><div class="av-slist__row"><span class="av-slist__k">Last scan</span><span class="av-slist__v">2 hours ago</span></div></div>`},
 {name:'Mono + copy', html:`<div class="av-slist"><div class="av-slist__row"><span class="av-slist__k">Account ID</span><span class="av-slist__v av-slist__copy"><span class="av-slist__v--mono">010545334631</span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Copy">${ic('copy',14)}</button></span></div><div class="av-slist__row"><span class="av-slist__k">External ID</span><span class="av-slist__v av-slist__copy"><span class="av-slist__v--mono">av-7f2c9d</span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Copy">${ic('copy',14)}</button></span></div></div>`},
]},

{ id:'tabs', label:'Tabs', desc:'Line tabs with Signal 2px indicator; pill tabs for in-card switching; vertical for settings.',
css:`.av-tabs{display:flex;gap:4px;border-bottom:1px solid var(--av-border-subtle-00);overflow-x:auto}
.av-tab{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 12px;margin-bottom:-1px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--av-text-helper);font:500 13px var(--av-font-sans);white-space:nowrap;cursor:pointer;transition:color var(--av-duration-fast),border-color var(--av-duration-fast)}
.av-tab:hover{color:var(--av-text-primary)}
.av-tab[aria-selected="true"]{color:var(--av-text-primary);border-bottom-color:var(--av-button-primary)}
.av-tab:focus-visible{outline:2px solid var(--av-focus);outline-offset:-2px}
.av-tab:disabled{color:var(--av-text-disabled);cursor:not-allowed}
.av-tab__count{padding:1px 7px;border-radius:var(--av-radius-pill);background:var(--av-tag-gray-bg);color:var(--av-tag-gray-text);font:11px var(--av-font-mono)}
.av-tabs--pill{display:inline-flex;gap:4px;padding:4px;border:1px solid var(--av-border-subtle-01);border-radius:12px;background:var(--av-layer-02)}
.av-tabs--pill .av-tab{height:32px;margin:0;border:0;border-radius:var(--av-radius-md)}
.av-tabs--pill .av-tab[aria-selected="true"]{background:var(--av-layer-05);box-shadow:inset 0 0 0 1px var(--av-border-subtle-00)}
.av-tabs--vertical{flex-direction:column;gap:2px;width:min(220px,100%);border:0}
.av-tabs--vertical .av-tab{height:40px;margin:0;border:0;border-radius:var(--av-radius-lg);justify-content:flex-start}
.av-tabs--vertical .av-tab[aria-selected="true"]{background:var(--av-layer-03)}
.av-tab{flex-shrink:0;white-space:nowrap}.av-tab[hidden]{display:none!important}
.av-tabs:not(.av-tabs--vertical){scrollbar-width:none}.av-tabs:not(.av-tabs--vertical)::-webkit-scrollbar{display:none}
.av-tabs__more{position:relative;display:flex;margin-left:auto;flex-shrink:0}.av-tabs__more[hidden]{display:none}
.av-tabs__more-btn{width:var(--av-touch);justify-content:center;padding:0}
.av-tabs__menu{position:absolute;top:calc(100% + 6px);right:0;z-index:var(--av-z-dropdown,50);min-width:200px;max-width:min(280px,90vw);display:flex;flex-direction:column;padding:6px;border:1px solid var(--av-border-subtle-01);border-radius:var(--av-radius-xl,14px);background:var(--av-layer-02);box-shadow:var(--av-shadow-dropdown,0 16px 40px rgba(0,0,0,.4))}
.av-tabs__menu[hidden]{display:none}
.av-tabs__menu .av-menu__item{display:flex;align-items:center;gap:8px;min-height:var(--av-touch);padding:0 12px;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-secondary);font:inherit;font-size:13px;text-align:left;cursor:pointer}
.av-tabs__menu .av-menu__item:hover{background:var(--av-layer-hover-01);color:var(--av-text-primary)}`,
variants:[
 {name:'Line', html:`<div class="av-tabs" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Summary</button><button class="av-tab" role="tab">Permissions</button><button class="av-tab" role="tab">Activity</button><button class="av-tab" role="tab" disabled>Policies</button></div>`},
 {name:'With counts', html:`<div class="av-tabs" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Open<span class="av-tab__count">293</span></button><button class="av-tab" role="tab">Resolved<span class="av-tab__count">1,204</span></button><button class="av-tab" role="tab">Ignored<span class="av-tab__count">12</span></button></div>`},
 {name:'Pill', html:`<div class="av-tabs av-tabs--pill" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Trend</button><button class="av-tab" role="tab">By severity</button><button class="av-tab" role="tab">By provider</button></div>`},
 {name:'Vertical', html:`<div class="av-tabs av-tabs--vertical" role="tablist"><button class="av-tab" role="tab" aria-selected="true">General</button><button class="av-tab" role="tab">Members</button><button class="av-tab" role="tab">Billing</button><button class="av-tab" role="tab">Danger zone</button></div>`},
 {name:'Overflow → more menu', note:'Tabs that don’t fit collapse into a ⋯ menu (priority+). The selected tab always stays visible. Runtime: AvCharts.hydrate() in av-charts.js.', html:`<div style="max-width:340px;width:100%"><div class="av-tabs" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Summary</button><button class="av-tab" role="tab">Permissions</button><button class="av-tab" role="tab">Activity</button><button class="av-tab" role="tab">Policies</button><button class="av-tab" role="tab">Access keys</button><button class="av-tab" role="tab">Settings</button></div></div>`},
]},

{ id:'tag', label:'Tag', desc:'Severity pills with dot, mono outline tags (providers, roles), count badges, delta chips, filter chips.',
css:`.av-tag{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;border:0;border-radius:var(--av-radius-pill);background:var(--av-tag-gray-bg);color:var(--av-tag-gray-text);font:500 12px var(--av-font-sans);white-space:nowrap;vertical-align:middle}
.av-tag__dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.av-tag--critical{background:var(--av-support-critical-bg);color:var(--av-support-critical)}
.av-tag--high{background:var(--av-support-high-bg);color:var(--av-support-high)}
.av-tag--medium{background:var(--av-support-medium-bg);color:var(--av-support-medium)}
.av-tag--low{background:var(--av-support-low-bg);color:var(--av-support-low)}
.av-tag--success{background:var(--av-tag-green-bg);color:var(--av-tag-green-text)}
.av-tag--mono{height:auto;padding:3px 7px;border:1px solid var(--av-tag-outline-border);border-radius:5px;background:transparent;color:var(--av-tag-outline-text);font:500 10px/1.3 var(--av-font-mono);letter-spacing:.04em}
.av-tag--role{padding:3px 8px;font-size:11px;letter-spacing:.08em;border-color:var(--av-border-strong-02);color:var(--av-text-muted-intro)}
.av-tag--aws{background:var(--av-tag-amber-bg);color:var(--av-tag-amber-text)}
.av-tag--gcp{background:var(--av-tag-ion-bg);color:var(--av-tag-ion-text)}
.av-tag--azure{background:var(--av-tag-azure-bg);color:var(--av-tag-azure-text)}
.av-tag--count{height:20px;padding:0 7px;font:500 11px var(--av-font-mono);background:var(--av-tag-signal-bg);color:var(--av-tag-signal-text)}
.av-tag--count-neutral{height:20px;padding:0 7px;font:500 11px var(--av-font-mono)}
.av-tag--delta{height:24px;padding:0 8px;gap:4px;background:var(--av-support-low-bg);color:var(--av-text-info)}
.av-tag--delta-up{background:var(--av-support-high-bg);color:var(--av-support-high)}
.av-tag--filter{height:28px;padding:0 12px;border:1px solid var(--av-border-subtle-01);background:var(--av-layer-03);color:var(--av-text-secondary);cursor:pointer}
.av-tag--filter[aria-pressed="true"]{border-color:var(--av-border-inverse);background:var(--av-button-selected);color:var(--av-text-inverse)}
.av-tag__remove{width:18px;height:18px;margin-right:-6px;padding:0;border:0;border-radius:50%;background:var(--av-layer-05);color:var(--av-text-tertiary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer}
.av-status{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--av-text-secondary)}
.av-status__dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--av-support-neutral)}
.av-status--ring .av-status__dot{width:8px;height:8px;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 18%,transparent)}`,
variants:[
 {name:'Severity', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--critical"><span class="av-tag__dot"></span>Critical</span><span class="av-tag av-tag--high"><span class="av-tag__dot"></span>High</span><span class="av-tag av-tag--medium"><span class="av-tag__dot"></span>Medium</span><span class="av-tag av-tag--low"><span class="av-tag__dot"></span>Low</span><span class="av-tag"><span class="av-tag__dot"></span>Info</span></div>`},
 {name:'Provider (mono)', html:`<div class="av-row" style="gap:6px"><span class="av-tag av-tag--mono">AWS</span><span class="av-tag av-tag--mono">AZURE</span><span class="av-tag av-tag--mono">GCP</span><span class="av-tag av-tag--aws">AWS</span><span class="av-tag av-tag--azure">Azure</span><span class="av-tag av-tag--gcp">GCP</span></div>`},
 {name:'Role', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--mono av-tag--role">OWNER</span><span class="av-tag av-tag--mono av-tag--role">ANALYST</span><span class="av-tag av-tag--mono av-tag--role">VIEWER</span></div>`},
 {name:'Count badges', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--count">293</span><span class="av-tag av-tag--count-neutral">3 new</span><span class="av-tag av-tag--low av-tag--count-neutral">NEW</span></div>`},
 {name:'Delta chips', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span><span class="av-tag av-tag--delta">${ic('down',12,2.2)}12 fewer</span><span class="av-tag av-tag--delta av-tag--delta-up">${ic('up',12,2.2)}3 new</span></div>`},
 {name:'Status dot', html:`<div class="av-row" style="gap:20px"><span class="av-status" style="color:var(--av-posture-poor)"><span class="av-status__dot" style="background:currentColor"></span><span style="color:var(--av-text-meta)">293 open · scanned 2h ago</span></span><span class="av-status av-status--ring" style="color:var(--av-support-success)"><span class="av-status__dot" style="background:currentColor"></span><span style="color:var(--av-text-secondary)">Healthy</span></span><span class="av-status av-status--ring" style="color:var(--av-support-low)"><span class="av-status__dot" style="background:currentColor"></span><span style="color:var(--av-text-secondary)">Scanning</span></span></div>`},
 {name:'Filter chips', html:`<div class="av-row" style="gap:6px"><button class="av-tag av-tag--filter" aria-pressed="true">Critical</button><button class="av-tag av-tag--filter" aria-pressed="false">High</button><span class="av-tag av-tag--filter">env: staging<button class="av-tag__remove" aria-label="Remove">${ic('x',10,3)}</button></span></div>`},
]},

{ id:'text-area', label:'Text area', desc:'Same field chrome as Text input, min-height 96px, vertical resize, optional counter.',
css:`.av-textarea{display:block;width:100%;min-height:96px;padding:12px 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px/1.5 var(--av-font-sans);resize:vertical;outline:none;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast)}
.av-textarea::placeholder{color:var(--av-text-placeholder)}
.av-textarea:focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-textarea[aria-invalid="true"]{border-color:var(--av-border-error)}
.av-textarea:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);resize:none}
.av-textarea[readonly]{background:transparent;border-color:var(--av-border-subtle-01)}`,
variants:[
 {name:'Default', html:`<label class="av-field" style="max-width:440px"><span class="av-field__label">Approval note</span><textarea class="av-textarea" placeholder="Why does this identity need write access?"></textarea></label>`},
 {name:'With counter', html:`<label class="av-field" style="max-width:440px"><span class="av-field__label">Description</span><textarea class="av-textarea" maxlength="200">Read-only role used by the nightly export job.</textarea><span class="av-field__counter">46 / 200</span></label>`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:440px"><span class="av-field__label">Justification</span><textarea class="av-textarea" aria-invalid="true"></textarea><span class="av-field__error">${ic('alert',12,2)}Add a reason before requesting access</span></label>`},
 {name:'Disabled', html:`<textarea class="av-textarea" style="max-width:440px" disabled>Locked by policy</textarea>`},
 {name:'Read-only', html:`<textarea class="av-textarea av-input--mono" style="max-width:440px" readonly>{ "Effect": "Allow", "Action": "sts:AssumeRole" }</textarea>`},
]},

{ id:'text-input', label:'Text input', desc:'44px, 10px radius, field-01 fill. Focus = Ion border + 3px halo. Mono modifier for IDs/ARNs.',
css:`.av-input{display:block;width:100%;height:44px;padding:0 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px var(--av-font-sans);outline:none;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast),background var(--av-duration-fast)}
.av-input::placeholder{color:var(--av-text-placeholder)}
.av-input:hover{background:var(--av-field-hover-01)}
.av-input:focus,.av-input.is-focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-input[aria-invalid="true"]{border-color:var(--av-border-error);background:color-mix(in srgb,var(--av-support-critical) 5%,var(--av-field-01))}
.av-input[aria-invalid="true"]:focus{box-shadow:0 0 0 3px var(--av-focus-error-ring)}
.av-input:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-input[readonly]{background:transparent;border-color:var(--av-border-subtle-01)}
.av-input--mono{font-family:var(--av-font-mono);font-size:13px}
.av-input--sm{height:36px;font-size:13px}.av-input--lg{height:52px;font-size:16px}`,
variants:[
 {name:'Default', html:`<label class="av-field" style="max-width:360px"><span class="av-field__label">Client name</span><input class="av-input" placeholder="e.g. Northwind Health"><span class="av-field__helper">Shown on reports and invoices.</span></label>`},
 {name:'Focused', note:'.is-focus mirrors :focus for docs/screenshots.', html:`<input class="av-input av-input--mono is-focus" value="aws-prod-0921" style="max-width:360px">`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:360px"><span class="av-field__label">Email</span><input class="av-input" value="zalak@" aria-invalid="true"><span class="av-field__error">${ic('alert',12,2)}Enter a full email address</span></label>`},
 {name:'Disabled', html:`<input class="av-input" value="Managed by SSO" disabled style="max-width:360px">`},
 {name:'Read-only', html:`<input class="av-input av-input--mono" value="av-7f2c9d" readonly style="max-width:360px">`},
 {name:'Sizes', html:`<div class="av-stack" style="max-width:360px"><input class="av-input av-input--sm" placeholder="Small · 36"><input class="av-input" placeholder="Medium · 44"><input class="av-input av-input--lg" placeholder="Large · 52"></div>`},
 {name:'With icon', html:`<span class="av-input-group av-input-group--start" style="max-width:360px">${ic('mail',16).replace('av-icon','av-icon av-input-group__icon')}<input class="av-input" placeholder="name@company.com"></span>`},
]},

{ id:'tile', label:'Tile', desc:'Base card (16px radius, layer-01, hairline). Clickable lifts 2px. Selectable shows an Ion ring and check. Glow modifiers for emphasis.',
css:`.av-tile{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);color:var(--av-text-primary);text-align:left;font:inherit}
.av-tile__title{font-size:16px;font-weight:600;letter-spacing:-0.01em}
.av-tile__text{font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}
.av-tile--clickable{cursor:pointer;transition:border-color var(--av-duration-base),transform var(--av-duration-base)}
.av-tile--clickable:hover{border-color:var(--av-border-strong-02);transform:translateY(-2px)}
.av-tile--clickable:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-tile--selectable{cursor:pointer}
.av-tile--selectable[aria-pressed="true"]{border-color:var(--av-border-interactive);background:var(--av-background-selected)}
.av-tile__check{position:absolute;top:14px;right:14px;width:20px;height:20px;border-radius:50%;border:1.5px solid var(--av-border-strong-02);display:flex;align-items:center;justify-content:center;color:transparent}
.av-tile--selectable[aria-pressed="true"] .av-tile__check{border-color:transparent;background:var(--av-border-interactive);color:var(--av-text-inverse)}
.av-tile--glow-signal{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-signal),transparent 60%),var(--av-layer-01)}
.av-tile--glow-ion{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}`,
variants:[
 {name:'Base + glows', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px">
  <div class="av-tile"><span class="av-eyebrow">Default</span><span class="av-tile__title">Identity coverage</span><span class="av-tile__text">Machine identities with an owner and rotation policy.</span></div>
  <div class="av-tile av-tile--glow-signal"><span class="av-eyebrow" style="color:var(--av-text-error)">Attention</span><span class="av-tile__title">3 keys older than 365 days</span><span class="av-tile__text">Rotate before the audit window closes.</span></div>
  <div class="av-tile av-tile--glow-ion"><span class="av-eyebrow" style="color:var(--av-text-info)">Positive</span><span class="av-tile__title">Posture up 6</span><span class="av-tile__text">Best week this quarter.</span></div>
</div>`},
 {name:'Clickable', html:`<button class="av-tile av-tile--clickable" style="max-width:320px"><span class="av-tile__title">Northwind Health</span><span class="av-tile__text">4 clouds · 1,284 identities · last scan 2h ago</span><span class="av-link av-link--standalone" style="font-size:13px">Open client →</span></button>`},
 {name:'Selectable', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:12px"><button class="av-tile av-tile--selectable" aria-pressed="true"><span class="av-tile__check">${ic('check',12,3)}</span><img src="assets/logo-aws-dark.svg" alt="" style="height:22px;align-self:flex-start"><span class="av-tile__title">AWS</span><span class="av-tile__text">IAM role · ~2 min</span></button><button class="av-tile av-tile--selectable" aria-pressed="false"><span class="av-tile__check">${ic('check',12,3)}</span><img src="assets/logo-azure.svg" alt="" style="height:22px;align-self:flex-start"><span class="av-tile__title">Azure</span><span class="av-tile__text">Entra ID app · ~5 min</span></button></div>`},
]},

{ id:'toggle', label:'Toggle', desc:'36×20 track; Ion when on. Use for instant-apply settings.',
css:`.av-toggle{display:inline-flex;align-items:center;gap:12px;font-size:14px;color:var(--av-text-secondary);cursor:pointer}
.av-toggle input{appearance:none;-webkit-appearance:none;position:relative;flex-shrink:0;margin:0;width:36px;height:20px;border-radius:var(--av-radius-pill);background:var(--av-toggle-off);cursor:pointer;transition:background var(--av-duration-base)}
.av-toggle input::before{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:var(--av-toggle-thumb);transition:transform var(--av-duration-base) var(--av-ease-standard)}
.av-toggle input:checked{background:var(--av-support-low)}.av-toggle input:checked::before{transform:translateX(16px)}
.av-toggle input:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-toggle:has(input:disabled){opacity:.45;cursor:not-allowed}
.av-toggle--sm input{width:28px;height:16px}.av-toggle--sm input::before{width:12px;height:12px}.av-toggle--sm input:checked::before{transform:translateX(12px)}
.av-toggle__state{font:11px var(--av-font-mono);letter-spacing:.08em;color:var(--av-text-helper);min-width:24px}
.av-toggle--row{display:flex;justify-content:space-between;width:100%;padding:14px 0;border-bottom:1px solid var(--av-border-subtle-00)}`,
variants:[
 {name:'Default', html:`<div class="av-stack"><label class="av-toggle"><input type="checkbox" role="switch" checked>Auto-remediate</label><label class="av-toggle"><input type="checkbox" role="switch">Slack alerts</label></div>`},
 {name:'Small + state', html:`<label class="av-toggle av-toggle--sm"><input type="checkbox" role="switch" checked><span class="av-toggle__state">ON</span></label>`},
 {name:'Settings row', html:`<div style="max-width:420px"><label class="av-toggle av-toggle--row"><span class="av-setting__k"><span class="av-setting__t" style="color:var(--av-text-primary)">Weekly digest</span><span class="av-setting__d">Every Monday 09:00</span></span><input type="checkbox" role="switch" checked></label></div>`},
 {name:'Disabled', html:`<label class="av-toggle"><input type="checkbox" role="switch" checked disabled>Required by org policy</label>`},
]},

{ id:'toggletip', label:'Toggletip', desc:'Click-to-open info bubble next to labels. Holds links (tooltips cannot).',
css:`.av-toggletip{position:relative;display:inline-flex;flex-direction:column;align-items:flex-start;gap:8px}
.av-toggletip__btn{width:20px;height:20px;padding:0;border-radius:50%;border:1px solid var(--av-border-strong-02);background:transparent;color:var(--av-text-tertiary);font:600 11px var(--av-font-mono);cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
.av-toggletip__btn:hover,.av-toggletip__btn[aria-expanded="true"]{border-color:var(--av-border-inverse);color:var(--av-text-primary)}
.av-toggletip__bubble{width:min(240px,100%);padding:12px 14px;border-radius:12px;background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover);font-size:13px;line-height:1.5;color:var(--av-text-tertiary);display:flex;flex-direction:column;gap:8px;animation:av-ctx-in .32s var(--av-ease-standard)}`,
variants:[
 {name:'Closed', html:`<span class="av-row" style="gap:6px;font-size:13px;color:var(--av-text-secondary)">Posture score<button class="av-toggletip__btn" aria-expanded="false" aria-label="About posture score">i</button></span>`},
 {name:'Open', html:`<div class="av-toggletip"><button class="av-toggletip__btn" aria-expanded="true" aria-label="Info">i</button><div class="av-toggletip__bubble" role="status">0–64 poor · 65–79 fair · 80+ good.</div></div>`},
 {name:'With link', html:`<div class="av-toggletip"><button class="av-toggletip__btn" aria-expanded="true">i</button><div class="av-toggletip__bubble">External ID stops confused-deputy attacks.<a class="av-link av-link--sm" href="#">Learn more</a></div></div>`},
 {name:'In label', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label" style="justify-content:flex-start;align-items:center">External ID<button type="button" class="av-toggletip__btn" aria-label="What is this?">i</button></span><input class="av-input av-input--mono" value="av-7f2c9d" readonly></label>`},
]},

{ id:'tooltip', label:'Tooltip', desc:'Inverse bubble, 12px/500, 8px radius. Hover/focus only — no interactive content.',
css:`.av-tooltip{position:relative;display:inline-block;padding:7px 10px;border-radius:var(--av-radius-md);background:var(--av-background-inverse);color:var(--av-text-inverse);font:500 12px var(--av-font-sans);white-space:nowrap}
.av-tooltip::after{content:"";position:absolute;width:8px;height:8px;background:inherit;transform:rotate(45deg)}
.av-tooltip--top::after{left:50%;bottom:-4px;margin-left:-4px}.av-tooltip--bottom::after{left:50%;top:-4px;margin-left:-4px}
.av-tooltip--right::after{left:-4px;top:50%;margin-top:-4px}.av-tooltip--left::after{right:-4px;top:50%;margin-top:-4px}
.av-tip{position:relative;display:inline-flex}
.av-tip .av-tooltip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(4px);opacity:0;pointer-events:none;transition:opacity var(--av-duration-fast),transform var(--av-duration-fast);z-index:var(--av-z-dropdown)}
.av-tip:hover .av-tooltip,.av-tip:focus-within .av-tooltip{opacity:1;transform:translateX(-50%)}
.av-definition{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline dotted;text-underline-offset:4px;text-decoration-color:var(--av-text-helper);cursor:help}`,
variants:[
 {name:'Top', html:`<span class="av-tooltip av-tooltip--top" role="tooltip">Last rotated 412 days ago</span>`},
 {name:'Bottom', html:`<span class="av-tooltip av-tooltip--bottom" role="tooltip">Copy ARN</span>`},
 {name:'Right', html:`<span class="av-tooltip av-tooltip--right" role="tooltip">Collapse sidebar</span>`},
 {name:'Hover (live)', note:'Hover or tab to the button.', html:`<div style="padding-top:44px"><span class="av-tip"><button class="av-icon-btn" aria-describedby="tt1">${ic('copy',16)}</button><span class="av-tooltip av-tooltip--top" id="tt1" role="tooltip">Copy account ID</span></span></div>`},
 {name:'Definition', html:`<div style="padding-top:44px;font-size:14px;color:var(--av-text-tertiary)">Fix the <span class="av-tip"><button class="av-definition">blast radius</button><span class="av-tooltip av-tooltip--top" role="tooltip">Resources reachable from this identity</span></span> first.</div>`},
]},
];
