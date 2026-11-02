// Avistar Dashboard DS — bundled library (generated from ds/*.js)
(function(){
const T = (() => {

// Avistar Dashboard — design tokens (single source of truth)
// [category, token, dark, light, usage]
const COLOR_TOKENS = [
  ['Background','--av-background','#0B0B0C','#F4F2EE','App / page canvas'],
  ['Background','--av-background-intro','#060708','#F4F2EE','Org & client picker canvas'],
  ['Background','--av-background-header','rgba(11,11,12,.86)','rgba(244,242,238,.86)','Sticky top bar (with backdrop blur)'],
  ['Background','--av-background-hover','rgba(255,255,255,.04)','rgba(20,20,20,.04)','Hover on transparent rows'],
  ['Background','--av-background-active','rgba(255,255,255,.08)','rgba(20,20,20,.08)','Pressed transparent rows'],
  ['Background','--av-background-selected','rgba(31,221,255,.08)','rgba(0,106,130,.08)','Selected rows / items'],
  ['Background','--av-background-inverse','#F2F2F0','#141414','Tooltip, selected switcher, toast'],
  ['Background','--av-background-inverse-hover','#FFFFFF','#2A2A2C','Hover on inverse surfaces'],
  ['Background','--av-background-brand','#FF4B1F','#141414','Primary CTA fill'],
  ['Background','--av-background-glow-signal','rgba(255,75,31,.16)','rgba(194,48,10,.07)','Radial glow — attention cards'],
  ['Background','--av-background-glow-ion','rgba(31,221,255,.14)','rgba(0,106,130,.07)','Radial glow — positive / interactive'],
  ['Background','--av-background-glow-amber','rgba(255,181,71,.14)','rgba(138,83,0,.07)','Radial glow — AWS / caution'],

  ['Layer','--av-layer-01','#0F0F11','#FFFFFF','Cards, tables, panels'],
  ['Layer','--av-layer-02','#121214','#FAF9F7','Raised inside a card, fields'],
  ['Layer','--av-layer-03','#141416','#F3F1ED','Hover / chips / nav active'],
  ['Layer','--av-layer-04','#18181B','#EDEBE7','Pressed, tag fill, progress track'],
  ['Layer','--av-layer-05','#1A1A1D','#ECEAE6','Menu highlight, badge fill'],
  ['Layer','--av-layer-hover-01','#141416','#F3F1ED','Hover on layer-01'],
  ['Layer','--av-layer-hover-02','#18181B','#EDEBE7','Hover on layer-02'],
  ['Layer','--av-layer-active-01','#1A1A1D','#ECEAE6','Pressed on layer-01'],
  ['Layer','--av-layer-selected-01','rgba(31,221,255,.06)','rgba(0,106,130,.06)','Selected table row'],
  ['Layer','--av-layer-intro','#0B0C0E','#FFFFFF','Client / org card on intro'],
  ['Layer','--av-layer-intro-hover','#101114','#FAF9F7','Hover on intro card'],
  ['Layer','--av-field-01','#121214','#FFFFFF','Inputs, selects, textareas'],
  ['Layer','--av-field-hover-01','#141416','#FAF9F7','Field hover'],
  ['Layer','--av-field-02','#0D0E10','#F3F1ED','Segmented / switcher track'],

  ['Border','--av-border-subtle-00','#1E1E21','#E6E4E0','Card hairline, table rules'],
  ['Border','--av-border-subtle-01','#232326','#DFDDD9','Dividers inside cards, menu border'],
  ['Border','--av-border-subtle-02','#26262A','#D8D6D2','Disabled borders'],
  ['Border','--av-border-strong-01','#2A2A2E','#D4D2CE','Inputs, secondary buttons'],
  ['Border','--av-border-strong-02','#3A3A40','#BDBBB7','Checkbox, tags, link underline'],
  ['Border','--av-border-interactive','#1FDDFF','#006A82','Focused field, checked control'],
  ['Border','--av-border-dashed','rgba(255,255,255,.16)','rgba(20,20,20,.18)','Intro cards & frames (dashed)'],
  ['Border','--av-border-dashed-hover','rgba(255,255,255,.5)','rgba(20,20,20,.5)','Dashed card hover'],
  ['Border','--av-border-selected','rgba(255,255,255,.6)','rgba(20,20,20,.7)','Selected intro card (solid)'],
  ['Border','--av-border-divider','rgba(255,255,255,.08)','rgba(20,20,20,.08)','Card footer rule'],
  ['Border','--av-border-nav-active','rgba(31,221,255,.18)','rgba(0,106,130,.22)','Active sidebar item ring'],
  ['Border','--av-border-error','#FF6A45','#C2300A','Invalid field'],
  ['Border','--av-border-inverse','#F2F2F0','#141414','Selected icon button'],

  ['Text','--av-text-primary','#F2F2F0','#141414','Headings, values, primary copy'],
  ['Text','--av-text-secondary','#D9D7D2','#2A2A2C','Labels, KPI titles'],
  ['Text','--av-text-tertiary','#A3A19C','#454440','Body muted, subtitles'],
  ['Text','--av-text-helper','#7A7874','#5E5D59','Helper text, eyebrow, meta'],
  ['Text','--av-text-placeholder','#5A5955','#6E6C68','Placeholder'],
  ['Text','--av-text-disabled','#5A5955','#BDBBB7','Disabled text'],
  ['Text','--av-text-meta','#8C8A85','#5E5D59','Card meta (“3 accounts”)'],
  ['Text','--av-text-muted-intro','#B8B6B1','#454440','Intro body, role tag'],
  ['Text','--av-text-label','#6B6A67','#6E6C68','Mono micro labels (POSTURE)'],
  ['Text','--av-text-on-color','#FFFFFF','#FFFFFF','On brand / danger fills'],
  ['Text','--av-text-inverse','#060708','#FFFFFF','On inverse surfaces'],
  ['Text','--av-text-error','#FF6A45','#C2300A','Error messages'],
  ['Text','--av-text-success','#3DDC97','#0E7A4E','Success messages'],
  ['Text','--av-text-warning','#FFB547','#8A5300','Warnings'],
  ['Text','--av-text-info','#1FDDFF','#006A82','Info, positive deltas, IDs'],

  ['Link','--av-link-primary','#F2F2F0','#141414','Inline & action links'],
  ['Link','--av-link-primary-hover','#1FDDFF','#006A82','Link hover'],
  ['Link','--av-link-secondary','#A3A19C','#454440','Breadcrumb / quiet links'],
  ['Link','--av-link-secondary-hover','#F2F2F0','#141414','Quiet link hover'],
  ['Link','--av-link-underline','#3A3A40','#BDBBB7','Underline colour'],
  ['Link','--av-link-underline-hover','#1FDDFF','#006A82','Underline on hover'],
  ['Link','--av-link-visited','#9FEFFF','#0A6F8C','Visited (docs only)'],
  ['Link','--av-link-inverse','#060708','#FFFFFF','Links on inverse surfaces'],

  ['Icon','--av-icon-primary','#F2F2F0','#141414','Default icon'],
  ['Icon','--av-icon-secondary','#A3A19C','#454440','Icon buttons at rest'],
  ['Icon','--av-icon-tertiary','#7A7874','#5E5D59','Decorative / search glyph'],
  ['Icon','--av-icon-disabled','#5A5955','#BDBBB7','Disabled icon'],
  ['Icon','--av-icon-interactive','#1FDDFF','#006A82','Active / selected icon'],
  ['Icon','--av-icon-on-color','#FFFFFF','#FFFFFF','On brand fills'],
  ['Icon','--av-icon-inverse','#060708','#FFFFFF','On inverse fills'],
  ['Icon','--av-icon-notify','#FF4B1F','#C2300A','Notification dot'],

  ['Button','--av-button-primary','#FF4B1F','#141414','Primary fill'],
  ['Button','--av-button-primary-hover','#FF6A45','#2A2A2C','Primary hover'],
  ['Button','--av-button-primary-active','#E63E14','#000000','Primary pressed'],
  ['Button','--av-button-secondary-border','#2A2A2E','#D4D2CE','Secondary outline'],
  ['Button','--av-button-secondary-border-hover','#A3A19C','#454440','Secondary outline hover'],
  ['Button','--av-button-secondary-hover','#141416','#F3F1ED','Secondary fill on hover'],
  ['Button','--av-button-tertiary','#141416','#F3F1ED','Tertiary fill'],
  ['Button','--av-button-tertiary-hover','#18181B','#EDEBE7','Tertiary hover'],
  ['Button','--av-button-ghost-hover','#141416','#F3F1ED','Ghost / nav hover'],
  ['Button','--av-button-danger','rgba(255,75,31,.08)','rgba(194,48,10,.06)','Danger (soft) fill'],
  ['Button','--av-button-danger-border','rgba(255,75,31,.4)','rgba(194,48,10,.4)','Danger outline'],
  ['Button','--av-button-danger-hover','rgba(255,75,31,.14)','rgba(194,48,10,.1)','Danger hover'],
  ['Button','--av-button-danger-solid','#FF6A45','#C2300A','Destructive confirm'],
  ['Button','--av-button-disabled','#18181B','#EDEBE7','Disabled fill'],
  ['Button','--av-button-selected','#F2F2F0','#141414','Selected switcher / icon btn'],
  ['Button','--av-button-icon-fill','rgba(255,255,255,.06)','rgba(20,20,20,.06)','Round arrow button'],

  ['Support','--av-support-critical','#FF4B1F','#C2300A','Critical severity'],
  ['Support','--av-support-high','#FF8A5B','#B23A0E','High severity'],
  ['Support','--av-support-medium','#FFB547','#8A5300','Medium severity / warning'],
  ['Support','--av-support-low','#1FDDFF','#006A82','Low severity / info'],
  ['Support','--av-support-success','#3DDC97','#0E7A4E','Healthy / success'],
  ['Support','--av-support-neutral','#6B6A67','#6E6C68','Archived / unknown'],
  ['Support','--av-support-critical-bg','rgba(255,75,31,.14)','rgba(194,48,10,.10)','Critical chip fill'],
  ['Support','--av-support-high-bg','rgba(255,138,91,.14)','rgba(178,58,14,.10)','High chip fill'],
  ['Support','--av-support-medium-bg','rgba(255,181,71,.14)','rgba(138,83,0,.10)','Medium chip fill'],
  ['Support','--av-support-low-bg','rgba(31,221,255,.10)','rgba(0,106,130,.08)','Low / info / delta chip'],
  ['Support','--av-support-success-bg','rgba(61,220,151,.14)','rgba(14,122,78,.10)','Success chip fill'],
  ['Support','--av-posture-poor','#FF4B1F','#C2300A','Posture < 65'],
  ['Support','--av-posture-fair','#FFB547','#8A5300','Posture 65–79'],
  ['Support','--av-posture-good','#1FDDFF','#006A82','Posture ≥ 80'],

  ['Focus','--av-focus','#1FDDFF','#006A82','Focus outline (2px)'],
  ['Focus','--av-focus-ring','rgba(31,221,255,.15)','rgba(0,106,130,.18)','3px halo around focused fields'],
  ['Focus','--av-focus-inset','#0B0B0C','#FFFFFF','Gap between control and outline'],
  ['Focus','--av-focus-error-ring','rgba(255,75,31,.18)','rgba(194,48,10,.16)','Halo on invalid field'],

  ['Miscellaneous','--av-overlay','rgba(0,0,0,.55)','rgba(20,20,20,.35)','Modal scrim'],
  ['Miscellaneous','--av-overlay-sheet','rgba(0,0,0,.35)','rgba(20,20,20,.2)','Side sheet scrim'],
  ['Miscellaneous','--av-skeleton-base','#141416','#EDEBE7','Skeleton base'],
  ['Miscellaneous','--av-skeleton-shine','#1E1E21','#F7F6F3','Skeleton highlight'],
  ['Miscellaneous','--av-toggle-off','#3A3A40','#BDBBB7','Toggle track (off)'],
  ['Miscellaneous','--av-toggle-thumb','#FFFFFF','#FFFFFF','Toggle thumb'],
  ['Miscellaneous','--av-scrollbar','#1E1E21','#D8D6D2','Scrollbar thumb'],
  ['Miscellaneous','--av-gradient-start','#FF4B1F','#FF4B1F','Brand gradient start (Signal)'],
  ['Miscellaneous','--av-gradient-end','#1FDDFF','#1FDDFF','Brand gradient end (Ion)'],
  ['Miscellaneous','--av-gradient-brand','linear-gradient(90deg,#FF4B1F,#1FDDFF)','linear-gradient(90deg,#FF4B1F,#1FDDFF)','Wordmark highlight, progress, charts'],
  ['Miscellaneous','--av-gradient-brand-45','linear-gradient(45deg,#FF4B1F,#1FDDFF)','linear-gradient(45deg,#FF4B1F,#1FDDFF)','Score numerals'],
  ['Miscellaneous','--av-gradient-nav-active','linear-gradient(90deg,rgba(31,221,255,.10),rgba(31,221,255,.02))','linear-gradient(90deg,rgba(0,106,130,.10),rgba(0,106,130,.02))','Active sidebar item'],
  ['Miscellaneous','--av-pattern-filter','none','invert(1)','Applied to white line patterns'],

  ['Tag','--av-tag-outline-border','#2E2E33','#D4D2CE','Mono outline tag (AWS, OWNER)'],
  ['Tag','--av-tag-outline-text','#B8B6B1','#454440','Mono outline tag text'],
  ['Tag','--av-tag-gray-bg','#1A1A1D','#ECEAE6','Neutral pill (“3 new”)'],
  ['Tag','--av-tag-gray-text','#A3A19C','#454440','Neutral pill text'],
  ['Tag','--av-tag-signal-bg','rgba(255,75,31,.14)','rgba(194,48,10,.10)','Count badge (Findings 293)'],
  ['Tag','--av-tag-signal-text','#FF8A5B','#B23A0E','Count badge text'],
  ['Tag','--av-tag-ion-bg','rgba(31,221,255,.10)','rgba(0,106,130,.08)','Positive / NEW'],
  ['Tag','--av-tag-ion-text','#1FDDFF','#006A82','Positive text'],
  ['Tag','--av-tag-amber-bg','rgba(255,181,71,.12)','rgba(138,83,0,.10)','AWS provider chip'],
  ['Tag','--av-tag-amber-text','#FFB547','#8A5300','AWS text'],
  ['Tag','--av-tag-azure-bg','rgba(159,239,255,.10)','rgba(10,111,140,.08)','Azure provider chip'],
  ['Tag','--av-tag-azure-text','#9FEFFF','#0A6F8C','Azure text'],
  ['Tag','--av-tag-green-bg','rgba(61,220,151,.14)','rgba(14,122,78,.10)','Healthy chip'],
  ['Tag','--av-tag-green-text','#3DDC97','#0E7A4E','Healthy text'],
];

const PRIMITIVES = [
  ['Neutral', [['1000','#060708'],['950','#0B0B0C'],['900','#0F0F11'],['850','#121214'],['800','#141416'],['750','#18181B'],['700','#1E1E21'],['650','#232326'],['600','#2A2A2E'],['550','#3A3A40'],['500','#5A5955'],['450','#6B6A67'],['400','#7A7874'],['350','#8C8A85'],['300','#A3A19C'],['250','#B8B6B1'],['200','#D9D7D2'],['150','#F2F2F0'],['100','#F4F2EE'],['0','#FFFFFF']]],
  ['Signal', [['700','#C2300A'],['600','#E63E14'],['500','#FF4B1F'],['400','#FF6A45'],['300','#FF8A5B']]],
  ['Ion', [['700','#006A82'],['600','#0A6F8C'],['500','#1FDDFF'],['300','#9FEFFF'],['100','#E8FCFF']]],
  ['Amber', [['700','#8A5300'],['500','#FFB547']]],
  ['Green', [['700','#0E7A4E'],['500','#3DDC97']]],
];

const BASE_TOKENS = [
  ['Type','--av-font-sans',"'Inter', system-ui, sans-serif",'UI & data'],
  ['Type','--av-font-mono',"'JetBrains Mono', ui-monospace, monospace",'Labels, IDs, numbers in tags'],
  ['Space','--av-space-1','4px','Icon gap'],['Space','--av-space-2','8px','Inline gap'],['Space','--av-space-3','12px','Control gap'],['Space','--av-space-4','16px','Card grid gap'],['Space','--av-space-5','20px','Card padding'],['Space','--av-space-6','24px','Hero card padding'],['Space','--av-space-7','28px','Main column gap'],['Space','--av-space-8','32px','Page top padding'],['Space','--av-space-9','40px','Page gutter (max)'],['Space','--av-space-10','56px','Intro section gap'],['Space','--av-space-11','72px','Doc section rhythm'],
  ['Radius','--av-radius-xs','4px','Intro cards, checkbox'],['Radius','--av-radius-sm','6px','Mono tags'],['Radius','--av-radius-md','8px','Menu items, icon btn (sm)'],['Radius','--av-radius-lg','10px','Inputs, nav items, icon btn'],['Radius','--av-radius-xl','14px','KPI grid, popovers, toasts'],['Radius','--av-radius-2xl','16px','Cards, tables, modals'],['Radius','--av-radius-pill','999px','Buttons, badges, switchers'],
  ['Elevation','--av-shadow-hairline','0 0 0 .5px var(--av-border-subtle-00)','KPI grid cells'],['Elevation','--av-shadow-toast','0 8px 24px rgba(0,0,0,.18)','Toast'],['Elevation','--av-shadow-popover','0 20px 50px rgba(0,0,0,.5)','Menu, popover, dropdown'],['Elevation','--av-shadow-modal','0 24px 60px rgba(0,0,0,.55)','Modal'],['Elevation','--av-shadow-sheet','-24px 0 60px rgba(0,0,0,.35)','Side sheet'],
  ['Motion','--av-ease-standard','cubic-bezier(.3,.7,.4,1)','State changes, sidebar'],['Motion','--av-ease-enter','cubic-bezier(.2,.8,.2,1)','Page / card enter'],['Motion','--av-ease-spring','cubic-bezier(.3,1.6,.5,1)','Icon pops, checkmarks'],['Motion','--av-duration-fast','150ms','Hover colour'],['Motion','--av-duration-base','200ms','Toggle, border'],['Motion','--av-duration-slow','250ms','Sidebar collapse'],['Motion','--av-duration-enter','500ms','Card stagger enter'],
  ['Layout','--av-gutter','clamp(1rem, 4vw, 2rem)','Fluid page gutter / section rhythm'],['Layout','--av-card-pad','clamp(1rem, 3vw, 1.25rem)','Fluid card padding'],['Layout','--av-section-gap','clamp(1.25rem, 3vw, 1.75rem)','Fluid gap between page sections'],['Layout','--av-touch','44px','Minimum touch target'],['Layout','--av-sidebar-w','clamp(220px, 20vw, 248px)','Sidebar open'],['Layout','--av-drawer-w','min(300px, 86vw)','Mobile nav drawer'],['Layout','--av-sidebar-w-collapsed','72px','Sidebar collapsed'],['Layout','--av-header-h','64px','Top bar'],['Layout','--av-content-max','1280px','Main column max width'],['Layout','--av-intro-max','1240px','Intro column max width'],
  ['Z-index','--av-z-sidebar','20','Sidebar'],['Z-index','--av-z-header','30','Top bar'],['Z-index','--av-z-dropdown','40','Menus'],['Z-index','--av-z-intro','50','Intro takeover'],['Z-index','--av-z-modal','60','Modal / sheet'],['Z-index','--av-z-toast','70','Toast'],
];

const TYPE_SCALE = [
  ['display','Display','clamp(40px,4.6vw,72px)',600,'-0.045em','0.98','sans','Welcome back, Zalak.'],
  ['heading-01','Heading 01 · Page title','clamp(28px,3vw,36px)',600,'-0.03em','1.05','sans','Overview'],
  ['heading-02','Heading 02 · Section','clamp(16px, 1.6vw, 18px)',600,'-0.015em','1.3','sans','Fix these first'],
  ['heading-03','Heading 03 · Card title','16px',600,'-0.01em','1.3','sans','Everything flows into one score.'],
  ['kpi','KPI numeral','clamp(28px, 3.2vw, 34px)',600,'-0.035em','1','sans','293'],
  ['score','Score numeral','clamp(36px, 4vw, 44px)',600,'-0.04em','1','sans','64'],
  ['body-01','Body 01','15px',400,'0','1.55','sans','Last scan finished 2 hours ago.'],
  ['body-02','Body 02 / UI','13px',400,'0','1.5','sans','Every scan feeds the number below.'],
  ['label','Label (mono eyebrow)','11px',500,'.14em','1.2','mono','HYDROPONIC CLOUD INDUSTRIES · 3 ACCOUNTS'],
  ['code','Code / numeric mono','12px',400,'0','1.5','mono','arn:aws:iam::0105:role/ci'],
];

function tokensCSS() {
  const dark = COLOR_TOKENS.map(t => `  ${t[1]}: ${t[2]};`).join('\n');
  const light = COLOR_TOKENS.filter(t => t[2] !== t[3]).map(t => `  ${t[1]}: ${t[3]};`).join('\n');
  const base = BASE_TOKENS.map(t => `  ${t[1]}: ${t[2]};`).join('\n');
  const type = TYPE_SCALE.map(t => `  --av-type-${t[0]}-size: ${t[2]};\n  --av-type-${t[0]}-weight: ${t[3]};\n  --av-type-${t[0]}-tracking: ${t[4]};\n  --av-type-${t[0]}-leading: ${t[5]};`).join('\n');
  return `/* Avistar Dashboard · tokens.css · v2.0
   Fonts: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
   Theme: dark is default. Add data-theme="light" on <html> (or any wrapper) for light. */
:root, [data-theme="dark"] {
  color-scheme: dark;
${dark}
${base}
${type}
}
[data-theme="light"] {
  color-scheme: light;
${light}
}
`;
}

return { COLOR_TOKENS, PRIMITIVES, BASE_TOKENS, TYPE_SCALE, tokensCSS };
})();
const C = (() => {

// Avistar Dashboard — component library (CSS + HTML variants). Every preview renders the exact snippet shown as code.
const ICONS = {
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
const ic = (n, s = 16, w = 1.8, fill) => `<svg class="av-icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[n]}"/></svg>`;

const BASE_CSS = `/* Avistar Dashboard · components.css · v2.0 — requires tokens.css */
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

const COMPONENTS = [
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

return { ICONS, ic, BASE_CSS, COMPONENTS };
})();
const P = (() => {
const { ic } = C; const { PRIMITIVES, TYPE_SCALE, BASE_TOKENS } = T;
// Avistar Dashboard — foundations + dashboard patterns

const spark = (arr, w = 72, h = 24) => { const mx = Math.max(...arr), mn = Math.min(...arr), r = mx - mn || 1; return arr.map((v, i) => (i ? 'L' : 'M') + (2 + i * ((w - 4) / (arr.length - 1))).toFixed(1) + ' ' + (h - 3 - (v - mn) / r * (h - 6)).toFixed(1)).join(' '); };
const sw = (n, hex, t) => `<div class="avd-swatch"><span class="avd-swatch__chip" style="background:${hex}"></span><span class="avd-swatch__n">${n}</span><span class="avd-swatch__v">${t || hex}</span></div>`;

const DOC_CSS = `/* docs-only helpers (not needed in product) */
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


const RESPONSIVE_CSS = `/* ── Responsive layer · fluid, container-driven (320px → 2560px) ── */
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

const FOUNDATIONS = [
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

const PATTERNS = [
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

return { DOC_CSS, RESPONSIVE_CSS, FOUNDATIONS, PATTERNS };
})();
const K = (() => {
const { ic } = C;
// Avistar Dashboard — cards & graphs (every card + chart used on the dashboard pages)

const ring = (vals, cols, size, num, label, o = {}) => `<div class="av-dotring" style="width:min(${size}px,100%)">
  <canvas data-av-ring data-values='${JSON.stringify(vals)}' data-colors='${JSON.stringify(cols)}'${o.grad ? ' data-grad' : ''}${o.hi != null ? ` data-hi="${o.hi}"` : ''} aria-hidden="true"></canvas>
  <div class="av-dotring__center"><span class="av-dotring__num${o.gradNum ? ' av-dotring__num--brand' : ''}" style="font-size:${o.fs || 26}px">${num}</span><span class="av-dotring__label">${label}</span></div>
</div>`;
const head = (glyph, title, sub, tile) => `<div class="av-card__head">${tile ? `<span class="av-card__tile"><img src="assets/icons-glass/${glyph}.svg" alt=""></span>` : `<img class="av-card__glyph" src="assets/icons-glass/${glyph}.svg" alt="">`}<span class="av-card__heading"><h2 class="av-card__title">${title}</h2>${sub ? `<span class="av-card__sub">${sub}</span>` : ''}</span></div>`;
const legend = rows => `<div class="av-legend-rows">${rows.map(([c, l, n, p]) => `<div class="av-legend-rows__row"><span class="av-legend-rows__dot" style="background:${c}"></span><span class="av-legend-rows__label">${l}</span><span class="av-legend-rows__n">${n}</span>${p != null ? `<span class="av-legend-rows__pct">${p}</span>` : ''}</div>`).join('')}</div>`;
const legendGrid = rows => `<div class="av-legend-grid">${rows.map(([c, l, n]) => `<div class="av-legend-grid__row"><span class="av-legend-rows__dot" style="background:${c}"></span><span class="av-legend-rows__label">${l}</span><span class="av-legend-rows__n">${n}</span></div>`).join('')}</div>`;
const SEVC = ['var(--av-support-critical)', 'var(--av-support-high)', 'var(--av-support-medium)', 'var(--av-support-low)'];
const INK = 'var(--av-text-primary)', MUT = 'var(--av-support-neutral)';

// severity trend geometry
const sevSeries = [212, 224, 219, 238, 256, 252, 271, 293, 305, 322, 338], NOW = 7, W = 400, H = 190;
const lo = Math.min(...sevSeries), hi = Math.max(...sevSeries), pad = (hi - lo) * .18;
const P = sevSeries.map((y, i) => [i / (sevSeries.length - 1) * W, H - 6 - (y - lo + pad * .3) / (hi - lo + pad) * (H - 20)]);
const curve = pts => pts.map((p, i) => { if (!i) return `M${p[0].toFixed(1)} ${p[1].toFixed(1)}`; const a = pts[i - 1], m = (p[0] - a[0]) / 2; return `C${(a[0] + m).toFixed(1)} ${a[1].toFixed(1)} ${(p[0] - m).toFixed(1)} ${p[1].toFixed(1)} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`; }).join(' ');
const solid = curve(P.slice(0, NOW + 1)), fc = curve(P.slice(NOW)), area = solid + ` L${P[NOW][0].toFixed(1)} ${H} L0 ${H} Z`;
const pct = (v, t) => (v / t * 100).toFixed(1) + '%';
const MV = [3010, 8690, 5070, 6180, 4590, 7860, 4080, 9100, 5960, 4950, 8010, 2330, 3020, 7570, 4690, 5860, 4190, 7180, 3700, 8850, 5620, 4590, 7380, 2240], MN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], MMX = Math.max(...MV);

const CARDS_CSS = `.av-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01)}
.av-card--flush{padding:0;gap:0}
.av-card--glow-ion{background:radial-gradient(80% 90% at 100% 0%,color-mix(in srgb,var(--av-support-low) 10%,transparent),transparent 60%),var(--av-layer-01)}
.av-card--glow-signal{background:radial-gradient(80% 90% at 100% 0%,color-mix(in srgb,var(--av-support-critical) 10%,transparent),transparent 60%),var(--av-layer-01)}
.av-card--glow-hero{border-color:var(--av-border-subtle-01);background:radial-gradient(70% 140% at 0% 100%,color-mix(in srgb,var(--av-support-high) 14%,transparent),transparent 60%),radial-gradient(60% 120% at 100% 0%,color-mix(in srgb,var(--av-support-low) 10%,transparent),transparent 60%),var(--av-layer-01)}
.av-card__head{display:flex;align-items:center;gap:10px;min-width:0}
.av-card__glyph{width:28px;height:28px;flex-shrink:0;object-fit:contain}
.av-card__tile{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:var(--av-layer-04);display:flex;align-items:center;justify-content:center}.av-card__tile img{width:28px;height:28px}
.av-card__heading{display:flex;flex-direction:column;gap:2px;min-width:0}
.av-card__title{margin:0;font-size:18px;font-weight:600;letter-spacing:-0.015em}
.av-card__sub{font-size:13px;color:var(--av-text-helper)}
.av-card__rule{border-top:1px dashed var(--av-border-strong-01)}
.av-weave--bl{left:0;right:auto;top:auto;bottom:0;background-position:left bottom;-webkit-mask-image:radial-gradient(100% 100% at 0% 100%,#000,transparent 72%);mask-image:radial-gradient(100% 100% at 0% 100%,#000,transparent 72%)}
.av-card .av-weave{z-index:-1}
/* dot-matrix ring (canvas drawn by av-charts.js) */
.av-dotring{position:relative;aspect-ratio:1;max-width:100%;flex-shrink:0;margin:0 auto}
.av-dotring canvas{display:block;width:100%;height:100%}
.av-dotring__center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;pointer-events:none}
.av-dotring__num{font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}
.av-dotring__num--brand{letter-spacing:-0.04em;background:var(--av-gradient-brand-45);-webkit-background-clip:text;background-clip:text;color:transparent}
.av-dotring__label{font:11px var(--av-font-mono);color:var(--av-text-helper)}
/* legends */
.av-legend-rows{display:flex;flex-direction:column}
.av-legend-rows__row{display:grid;grid-template-columns:10px minmax(0,1fr) auto 44px;align-items:center;gap:12px;height:48px;border-bottom:1px solid var(--av-layer-05);background:transparent;transition:background var(--av-duration-fast)}
.av-legend-rows__row:hover{background:var(--av-layer-02)}
.av-legend-rows__dot{width:10px;height:10px;border-radius:50%}
.av-legend-rows__label{font-size:14px;color:var(--av-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-legend-rows__n{font-size:16px;font-weight:600;font-variant-numeric:tabular-nums}
.av-legend-rows__pct{text-align:right;font:12px var(--av-font-mono);color:var(--av-text-helper)}
.av-legend-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:0 20px}
.av-legend-grid__row{display:grid;grid-template-columns:10px minmax(0,1fr) auto;align-items:center;gap:10px;height:40px;border-bottom:1px solid var(--av-layer-05)}
.av-legend-grid .av-legend-rows__label{font-size:13px}.av-legend-grid .av-legend-rows__n{font-size:14px}
/* fix card */
.av-fix-card{--av-fix:var(--av-support-critical);position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:16px;padding:20px;border-radius:var(--av-radius-2xl);border:1px solid color-mix(in srgb,var(--av-fix) 22%,transparent);background:radial-gradient(110% 90% at 0% 0%,color-mix(in srgb,var(--av-fix) 13%,transparent),transparent 58%),linear-gradient(180deg,var(--av-layer-02),var(--av-layer-01));animation:av-slide-up .6s var(--av-ease-standard) both}
.av-fix-card--high{--av-fix:var(--av-support-high)}.av-fix-card--medium{--av-fix:var(--av-support-medium)}.av-fix-card--low{--av-fix:var(--av-support-low)}
.av-fix-card__top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.av-fix-card__orb{display:block;flex-shrink:0;width:56px;height:56px}
.av-sev-pill{--av-sev:var(--av-support-critical);font:500 11px var(--av-font-mono);letter-spacing:.06em;text-transform:uppercase;padding:3px 8px;border-radius:6px;border:1px solid color-mix(in srgb,var(--av-sev) 28%,transparent);background:color-mix(in srgb,var(--av-sev) 12%,transparent);color:var(--av-sev)}
.av-sev-pill--high{--av-sev:var(--av-support-high)}.av-sev-pill--medium{--av-sev:var(--av-support-medium)}.av-sev-pill--low{--av-sev:var(--av-support-low)}
.av-fix-card__body{display:flex;flex-direction:column;gap:6px}
.av-fix-card__title{font-size:16px;font-weight:600;line-height:1.3;letter-spacing:-0.01em}
.av-fix-card__meta{font-size:13px;color:var(--av-text-helper)}
.av-fix-card__stats{display:flex;flex-wrap:wrap;gap:16px;padding-top:14px;border-top:1px dashed var(--av-border-subtle-01)}
.av-fix-card__stat{display:flex;flex-direction:column;gap:2px}.av-fix-card__stat span{font-size:11px;color:var(--av-text-helper)}.av-fix-card__stat b{font-size:15px;font-weight:600}
.av-fix-card__gain{color:var(--av-text-info)}
.av-fix-card .av-btn{margin-top:auto;width:100%;height:44px}
.av-fix-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px}
/* findings raised (bars) */
.av-bigstats{display:flex;flex-wrap:wrap;align-items:stretch;gap:16px 0}
.av-bigstat{display:flex;flex-direction:column;gap:10px;padding-right:28px}.av-bigstat+.av-bigstat{padding:0 0 0 28px;border-left:1px dashed var(--av-border-strong-01)}
.av-bigstat__k{font:13px var(--av-font-mono);color:var(--av-text-helper)}
.av-bigstat__v{font:500 clamp(36px,4vw,52px)/1 var(--av-font-mono);letter-spacing:-0.03em;font-variant-numeric:tabular-nums}
.av-bigstat__s{font-size:12px;color:var(--av-text-helper)}
.av-axis-note{display:flex;flex-direction:column;gap:6px;align-self:center;font:12px var(--av-font-mono);color:var(--av-text-helper)}.av-axis-note b{font-weight:400;color:var(--av-text-primary)}
.av-month-bars{position:relative;height:clamp(180px,24vw,260px);display:flex;align-items:flex-end}
.av-month-bars__col{flex:1;min-width:0;height:100%;display:flex;align-items:flex-end;justify-content:center;cursor:pointer}
.av-month-bars__bar{display:block;width:2px;border-radius:2px;background:var(--av-text-secondary);transition:height .9s var(--av-ease-standard),background .2s,width .2s}
.av-month-bars:hover .av-month-bars__bar{background:var(--av-border-strong-02)}
.av-month-bars__col:hover .av-month-bars__bar,.av-month-bars__col[aria-current="true"] .av-month-bars__bar{width:4px;background:var(--av-support-critical)}
.av-month-labels{display:flex}.av-month-labels span{flex:1;min-width:0;text-align:center;font-size:12px;color:var(--av-text-helper);white-space:nowrap}
/* severity trend (line) */
.av-trend{position:relative;width:100%;aspect-ratio:400/190;margin-top:28px}
.av-trend svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.av-trend__grid{stroke:var(--av-border-subtle-01)}
.av-trend__now{position:absolute;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:var(--av-support-low);box-shadow:0 0 0 3px var(--av-layer-01)}
.av-trend__end{position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:var(--av-support-low);box-shadow:0 0 0 3px var(--av-text-primary)}
.av-trend__tip{position:absolute;right:28px;transform:translateY(-50%);padding:6px 10px;border-radius:8px;background:var(--av-background-inverse);color:var(--av-text-inverse);font-size:12px;font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}
.av-trend__fc{position:absolute;bottom:6px;font:10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}
.av-trend-axis{display:flex;justify-content:space-between;font:10px var(--av-font-mono);color:var(--av-text-helper)}
.av-sev-rows{display:flex;flex-direction:column}
.av-sev-rows__row{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;align-items:center;gap:12px;height:48px;padding:0 4px;border:0;border-bottom:1px solid var(--av-layer-05);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-sev-rows__row:hover{background:var(--av-layer-02)}
.av-sev-rows__dot{width:8px;height:8px;border-radius:50%}.av-sev-rows__l{font-size:14px}.av-sev-rows__n{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}.av-sev-rows__p{width:44px;text-align:right;font:11px var(--av-font-mono);color:var(--av-text-helper)}
/* period segmented (squared) */
.av-period{display:flex;flex-wrap:wrap;gap:2px;padding:4px;border:1px solid var(--av-border-subtle-01);border-radius:12px;background:var(--av-background)}
.av-period button{height:36px;padding:0 14px;border:0;border-radius:9px;background:transparent;color:var(--av-text-tertiary);font:500 13px var(--av-font-sans);cursor:pointer;transition:background .2s,color .2s}
.av-period button[aria-pressed="true"]{background:var(--av-layer-05);color:var(--av-text-primary)}
/* compliance */
.av-comp{display:grid;grid-template-columns:48px minmax(0,1fr) auto;align-items:center;gap:14px;padding:6px 0;border-bottom:1px solid var(--av-layer-05)}
.av-minring{position:relative;width:48px;height:48px}.av-minring svg{transform:rotate(-90deg)}
.av-minring__v{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;font-variant-numeric:tabular-nums}
.av-comp__text{display:flex;flex-direction:column;gap:2px;min-width:0}.av-comp__name{font-size:14px;font-weight:500}.av-comp__fail{font-size:12px;color:var(--av-text-helper)}
.av-comp__delta{font-size:12px;white-space:nowrap;color:var(--av-text-helper)}.av-comp__delta--up{color:var(--av-text-info)}.av-comp__delta--down{color:var(--av-support-high)}
/* cloud accounts */
.av-acct-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;padding:20px 20px 12px}
.av-acct{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr) minmax(0,.8fr) 20px;align-items:center;gap:16px;width:100%;padding:14px 20px;border:0;border-top:1px solid var(--av-layer-05);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-acct:hover{background:var(--av-layer-02)}
.av-acct__id{display:flex;align-items:center;gap:12px;min-width:0}
.av-acct__prov{flex-shrink:0;padding:4px 7px;border-radius:5px;font:500 10px var(--av-font-mono)}
.av-acct__name{display:flex;flex-direction:column;gap:2px;min-width:0}.av-acct__name b{font-size:14px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.av-acct__name span{font:11px var(--av-font-mono);color:var(--av-text-helper);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-acct__score{display:flex;flex-direction:column;gap:6px;min-width:0}.av-acct__score-row{display:flex;justify-content:space-between;font-size:12px}.av-acct__score-row span{color:var(--av-text-tertiary)}.av-acct__score-row b{font-weight:600;font-variant-numeric:tabular-nums}
.av-acct__bar{height:4px;border-radius:999px;background:var(--av-layer-05);overflow:hidden}.av-acct__bar i{display:block;height:100%;background:var(--av-gradient-brand)}
.av-acct__status{display:flex;flex-direction:column;gap:2px;font-size:13px}.av-acct__status span{font-size:12px;color:var(--av-text-helper)}
/* activity */
.av-activity{display:grid;grid-template-columns:12px minmax(0,1fr);gap:12px;padding:8px 0}
.av-activity__dot{width:8px;height:8px;margin-top:6px;border-radius:50%}
.av-activity__body{display:flex;flex-direction:column;gap:3px;min-width:0}.av-activity__t{font-size:13px;line-height:1.45;color:var(--av-text-secondary)}
.av-activity__meta{display:flex;gap:10px;align-items:center;font-size:12px;color:var(--av-text-helper)}
.av-activity__cta{padding:0;border:0;background:transparent;color:var(--av-text-info);font:500 12px var(--av-font-sans);cursor:pointer;text-decoration:underline;text-underline-offset:3px}
/* stat strip */
.av-stat-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);overflow:hidden}
.av-stat{position:relative;display:flex;flex-direction:column;gap:6px;padding:18px 20px;box-shadow:var(--av-shadow-hairline)}
.av-stat__label{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--av-text-tertiary)}.av-stat__label img{width:26px;height:26px}
.av-stat__v{font-size:30px;font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}
.av-stat__s{font-size:12px;color:var(--av-text-helper)}
.av-sev-chip{display:flex;align-items:center;gap:8px;height:36px;padding:0 12px;border-radius:8px;border:1px solid var(--av-border-subtle-01);background:transparent;color:var(--av-text-primary);font:400 13px var(--av-font-sans);cursor:pointer;transition:all .15s}
.av-sev-chip[aria-pressed="true"]{border-color:var(--av-border-strong-02);background:var(--av-layer-04)}
.av-sev-chip i{width:8px;height:8px;border-radius:50%}.av-sev-chip span{font:11px var(--av-font-mono);color:var(--av-text-helper)}
/* identity graph */
.av-graph{position:relative;width:100%;min-width:640px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-background);overflow:hidden}
.av-graph svg{display:block;width:100%;height:auto}
.av-graph__edge{fill:none;stroke-width:1.25;stroke-dasharray:1;stroke-dashoffset:1;animation:av-draw 1s var(--av-ease-standard) forwards}
.av-graph__flow{fill:none;stroke:#fff;stroke-width:2.5;stroke-linecap:round;stroke-dasharray:.001 .999;animation:av-flow 3.4s linear 1.2s infinite both}
@keyframes av-flow{to{stroke-dashoffset:-1}}
.av-graph__hub{position:absolute;width:20.5%;aspect-ratio:1;transform:translate(-50%,-50%)}
.av-graph__hub canvas{width:100%;height:100%;display:block}
.av-graph__hub-label{position:absolute;left:50%;top:100%;transform:translateX(-50%);margin-top:4px;white-space:nowrap;font:500 11px var(--av-font-mono);letter-spacing:.1em;color:var(--av-text-helper)}
.av-gnode{position:absolute;display:flex;align-items:center;gap:12px;transform:translateY(-50%);cursor:pointer}
.av-gnode__dot{width:28px;height:28px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--av-layer-03);border:1px solid var(--av-border-strong-01)}
.av-gnode__dot img{width:18px;height:18px}
.av-gnode__t{display:flex;flex-direction:column;gap:2px;min-width:0}.av-gnode__t b{font-size:13px;font-weight:500;white-space:nowrap}.av-gnode__t span{font:11px var(--av-font-mono);color:var(--av-text-helper);white-space:nowrap}
.av-gnode__kind{font-style:normal;font-weight:500;letter-spacing:.1em;text-transform:uppercase}
.av-graph__legend{position:absolute;left:16px;bottom:14px;display:flex;gap:16px;font:11px var(--av-font-mono);color:var(--av-text-helper)}.av-graph__legend span{display:flex;align-items:center;gap:6px}.av-graph__legend i{width:14px;height:2px;border-radius:2px}
/* empty account */
.av-empty-card{display:flex;flex-wrap:wrap;align-items:center;gap:32px;padding:clamp(24px,5vw,56px);border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01)}
.av-empty-card__img{width:min(180px,100%);height:180px;flex-shrink:0;border-radius:14px;background:var(--av-layer-03) center/cover no-repeat}
.av-empty-card__body{flex:1;min-width:min(240px,100%);display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.av-empty-card__title{margin:0;font-size:24px;font-weight:600;letter-spacing:-0.02em}
.av-empty-card__text{margin:0;max-width:460px;font-size:15px;line-height:1.55;color:var(--av-text-tertiary)}`;

const fix = (sev, title, meta, gain, clears, effort) => `  <article class="av-fix-card av-fix-card--${sev}">
    <div class="av-weave" aria-hidden="true"></div>
    <div class="av-fix-card__top"><canvas class="av-fix-card__orb" data-av-orb="${sev}" aria-hidden="true"></canvas><span class="av-sev-pill av-sev-pill--${sev}">${sev}</span></div>
    <div class="av-fix-card__body"><span class="av-fix-card__title">${title}</span><span class="av-fix-card__meta">${meta}</span></div>
    <div class="av-fix-card__stats"><div class="av-fix-card__stat"><span>Score</span><b class="av-fix-card__gain">${gain}</b></div><div class="av-fix-card__stat"><span>Clears</span><b>${clears}</b></div><div class="av-fix-card__stat"><span>Effort</span><b>${effort}</b></div></div>
    <button class="av-btn av-btn--primary">Fix now</button>
  </article>`;
const minring = (p) => { const C = 2 * Math.PI * 19; return `<div class="av-minring"><svg width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="avgh" x1="0" x2="1"><stop offset="0" stop-color="#FF4B1F"/><stop offset="1" stop-color="#1FDDFF"/></linearGradient></defs><circle cx="24" cy="24" r="19" fill="none" stroke="var(--av-layer-05)" stroke-width="5"/><circle cx="24" cy="24" r="19" fill="none" stroke="url(#avgh)" stroke-width="5" stroke-linecap="round" stroke-dasharray="${(C * p / 100).toFixed(1)} ${C.toFixed(1)}"/></svg><span class="av-minring__v">${p}%</span></div>`; };

// identity graph layout (static)
const GN = [['f','threat','S3 bucket publicly readable','Critical · 2 resources','#FF4B1F','#FFB547'],['f','alert','Unused key > 365 days','High · 1 resource','#FF4B1F','#FFB547'],['i','identity','ci-deploy-runner','role · 3 findings','#FF4B1F','#1FDDFF'],['i','identity','svc-billing-writer','role · 2 findings','#FF4B1F','#1FDDFF'],['r','server','hci-exports-prod','s3 · us-east-1','#1FDDFF','#F2F2F0'],['r','network','vpc-0a12 · sg-web','ec2 · us-east-1','#1FDDFF','#F2F2F0']];
const GW = 760, GH = 460, HUB = [190, 230], R0 = 78, NX = 420;
const gEdges = GN.map((n, i) => { const y = 55 + i * 70, a = Math.atan2(y - HUB[1], NX - HUB[0]), x0 = HUB[0] + Math.cos(a) * R0, y0 = HUB[1] + Math.sin(a) * R0, ex = NX - 18, mx = x0 + (ex - x0) * .55, d = `M${x0.toFixed(1)} ${y0.toFixed(1)} C${mx.toFixed(1)} ${y0.toFixed(1)} ${mx.toFixed(1)} ${y} ${ex} ${y}`; return { n, i, y, d, x0, y0 }; });

const CARDS = [
{ id:'card-anatomy', label:'Card anatomy', desc:'Every dashboard card = .av-card (16px radius, layer-01, hairline) + optional glow + optional line-weave corner + head (glass glyph 28 or tile 44, title 18/600, sub 13).',
css:CARDS_CSS,
variants:[
 {name:'Default', html:`<div class="av-card">${head('monitor','Activity','Last 24 hours')}<p style="margin:0;font-size:13px;color:var(--av-text-tertiary)">Card content</p></div>`},
 {name:'Glow · ion + weave', html:`<div class="av-card av-card--glow-ion"><div class="av-weave" aria-hidden="true"></div>${head('shield','Compliance','Controls passing per framework')}</div>`},
 {name:'Glow · signal + weave', html:`<div class="av-card av-card--glow-signal"><div class="av-weave" aria-hidden="true"></div>${head('alert','By severity','Open findings over 30 days')}</div>`},
 {name:'Weave bottom-left', html:`<div class="av-card" style="min-height:160px"><div class="av-weave av-weave--bl" aria-hidden="true"></div>${head('identity','Identity mix','4,602 identities discovered',true)}</div>`},
 {name:'Hero glow', html:`<div class="av-card av-card--glow-hero" style="min-height:140px"><div class="av-weave" aria-hidden="true"></div>${head('fingerprint','Identities found','Last run · Oct 13, 8:41 PM')}</div>`},
]},

{ id:'posture-card', label:'Posture score card', desc:'Dot-matrix ring (Ion→Signal gradient on the scored arc, muted squares for the remainder) drawn by av-charts.js. Gradient numeral, rating + delta, hint, link.',
variants:[
 {name:'Card', html:`<div class="av-score-card" style="max-width:420px;flex-direction:column;align-items:flex-start"><div class="av-weave" aria-hidden="true"></div><div class="av-weave av-weave--bl" aria-hidden="true"></div>
  ${ring([64,36],['#FF4B1F','var(--av-border-strong-02)'],200,'64','/ 100',{grad:true,gradNum:true,fs:52})}
  <div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div><p class="av-score-card__hint">Close the 2 public buckets to reach <b>71</b>. That's about 4 minutes of work.</p><a class="av-link av-link--action" href="#" style="font-size:13px">Start with this fix${ic('arrow',14,2)}</a></div>
</div>`},
 {name:'Horizontal', html:`<div class="av-score-card"><div class="av-weave" aria-hidden="true"></div>
  ${ring([64,36],['#FF4B1F','var(--av-border-strong-02)'],160,'64','/ 100',{grad:true,gradNum:true,fs:44})}
  <div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div><p class="av-score-card__hint">Close the 2 public buckets to reach <b>71</b>.</p></div>
</div>`},
 {name:'Score states', html:`<div class="av-row" style="gap:28px">${[[42,'Poor'],[64,'Fair'],[88,'Good']].map(([v,l]) => `<div class="av-stack" style="align-items:center;gap:8px">${ring([v,100-v],['#FF4B1F','var(--av-border-strong-02)'],120,v,'/ 100',{grad:true,gradNum:true,fs:30})}<span class="av-eyebrow">${l}</span></div>`).join('')}</div>`},
]},

{ id:'fix-card', label:'Fix card', desc:'“Fix these first” cards: WebGL orb (orb.js) tinted by severity, mono severity pill, title + resource, dashed stat row (score gain in Ion), full-width Fix now. Tint = severity colour at 13% glow / 22% border.',
variants:[
 {name:'Row of three', html:`<div class="av-fix-grid">
${fix('critical','Block public write on 2 buckets','S3 · Production Demo','+7','2 critical','~4 min')}
${fix('high','Rotate 3 stale access keys','IAM · Production Demo','+4','3 high','~3 min')}
${fix('medium','Enable TLS on 31 endpoints','Transmission · Production Demo','+3','31 medium','~5 min')}
</div>`},
 {name:'Single', html:`<div style="max-width:320px">${fix('critical','Block public write on 2 buckets','S3 · Production Demo','+7','2 critical','~4 min')}</div>`},
 {name:'Severity pills', html:`<div class="av-row" style="gap:8px"><span class="av-sev-pill">Critical</span><span class="av-sev-pill av-sev-pill--high">High</span><span class="av-sev-pill av-sev-pill--medium">Medium</span><span class="av-sev-pill av-sev-pill--low">Low</span></div>`},
]},

{ id:'findings-raised', label:'Findings raised', desc:'24-month bar chart: thin 2px ink bars (hover → 4px Signal), mono big stats with dashed divider, axis note. Bar height = value / max × 92%.',
variants:[{name:'Card', html:`<div class="av-card av-card--glow-ion"><div class="av-weave" aria-hidden="true"></div>
  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:16px 24px">
    <div class="av-bigstats"><div class="av-bigstat"><span class="av-bigstat__k">[!] Findings raised</span><span class="av-bigstat__v">${MV.slice(12).reduce((a,b)=>a+b,0).toLocaleString('en-US')}</span><span class="av-bigstat__s">Last 12 months · all accounts</span></div><div class="av-bigstat"><span class="av-bigstat__k">[↑] Peak month</span><span class="av-bigstat__v">Aug</span><span class="av-bigstat__s">8,850 findings</span></div></div>
    <div class="av-axis-note"><span>// X-AXIS: <b>MONTHS</b></span><span>// Y-AXIS: <b>FINDINGS</b></span></div>
  </div>
  <div class="av-card__rule"></div>
  <div class="av-stack" style="gap:12px;padding-top:8px">
    <div class="av-month-bars">${MV.map((v,i) => `<div class="av-month-bars__col" title="${MN[i%12]} ${i<12?2025:2026}: ${v.toLocaleString('en-US')}"${i===19?' aria-current="true"':''}><span class="av-month-bars__bar" style="height:${(v/MMX*92).toFixed(1)}%"></span></div>`).join('')}</div>
    <div class="av-month-labels">${MV.map((v,i) => `<span>${i%2?MN[i%12]:''}</span>`).join('')}</div>
  </div>
</div>`}]},

{ id:'severity-trend', label:'Severity trend', desc:'Line + area (30 days) with dashed forecast (+14d), “now” marker, projected end marker with inverse tooltip, and severity rows that filter the line on hover.',
variants:[{name:'Card', html:`<div class="av-card av-card--glow-signal" style="max-width:460px"><div class="av-weave" aria-hidden="true"></div>
  ${head('alert','By severity','Open findings over 30 days · hover a severity')}
  <div class="av-stack" style="gap:10px">
    <div style="display:flex;align-items:baseline;gap:8px"><span class="av-kpi__num">293</span><span style="font-size:13px;color:var(--av-text-tertiary)">open today</span></div>
    <div class="av-trend">
      <svg viewBox="0 0 400 190" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="svLine" x1="0" x2="1"><stop offset="0" stop-color="#FF4B1F"/><stop offset="1" stop-color="#1FDDFF"/></linearGradient><linearGradient id="svArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1FDDFF" stop-opacity=".22"/><stop offset="1" stop-color="#1FDDFF" stop-opacity="0"/></linearGradient></defs>
        <line class="av-trend__grid" x1="0" y1="10" x2="400" y2="10" vector-effect="non-scaling-stroke"/><line class="av-trend__grid" x1="0" y1="70" x2="400" y2="70" vector-effect="non-scaling-stroke"/><line class="av-trend__grid" x1="0" y1="130" x2="400" y2="130" vector-effect="non-scaling-stroke"/><line class="av-trend__grid" x1="0" y1="190" x2="400" y2="190" vector-effect="non-scaling-stroke"/>
        <path d="${area}" fill="url(#svArea)"/>
        <line x1="${P[NOW][0].toFixed(1)}" y1="0" x2="${P[NOW][0].toFixed(1)}" y2="190" stroke="var(--av-border-strong-02)" stroke-dasharray="3 4" vector-effect="non-scaling-stroke"/>
        <path d="${solid}" fill="none" stroke="url(#svLine)" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
        <path d="${fc}" fill="none" stroke="#1FDDFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 6" vector-effect="non-scaling-stroke"/>
      </svg>
      <span class="av-trend__now" style="left:${(P[NOW][0]/W*100).toFixed(1)}%;top:${(P[NOW][1]/H*100).toFixed(1)}%"></span>
      <span class="av-trend__end" style="left:100%;top:${(P[10][1]/H*100).toFixed(1)}%"></span>
      <span class="av-trend__tip" style="top:${(P[10][1]/H*100).toFixed(1)}%">338 projected</span>
      <span class="av-trend__fc" style="left:calc(${(P[NOW][0]/W*100).toFixed(1)}% + 8px)">Forecast</span>
    </div>
    <div class="av-trend-axis"><span>30d ago</span><span>Today</span><span>+14d</span></div>
  </div>
  <div class="av-sev-rows">${[['Critical',5],['High',64],['Medium',133],['Low',91]].map(([l,n],i) => `<button class="av-sev-rows__row"><span class="av-sev-rows__dot" style="background:${SEVC[i]}"></span><span class="av-sev-rows__l">${l}</span><span class="av-sev-rows__n">${n}</span><span class="av-sev-rows__p">${pct(n,293)}</span></button>`).join('')}</div>
</div>`}]},

{ id:'identity-mix', label:'Identity mix', desc:'Dot-matrix donut with period switcher and legend rows (count + %). Hovering a row sets data-hi on the ring to dim other segments.',
variants:(() => { const mv = [1180,1904,412,866,240], t = mv.reduce((a,b)=>a+b,0), MC = [INK,'#FF4B1F','#1FDDFF','#FFB547',MUT], ML = ['Clinical & staff users','Service accounts','AI agents','API keys','OAuth apps']; return [
 {name:'Card', html:`<div class="av-card"><div class="av-weave av-weave--bl" aria-hidden="true"></div>
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px"><div style="flex:1;min-width:min(220px,100%)">${head('identity','Identity mix',t.toLocaleString('en-US') + ' identities discovered',true)}</div><div class="av-period" role="group"><button aria-pressed="false">Week</button><button aria-pressed="true">Month</button><button aria-pressed="false">Quarter</button><button aria-pressed="false">Year</button></div></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:24px;align-items:center">
    ${ring(mv,MC,240,t.toLocaleString('en-US'),'identities',{fs:34})}
    ${legend(mv.map((n,i) => [MC[i],ML[i],n.toLocaleString('en-US'),pct(n,t)]))}
  </div>
</div>`},
 {name:'Highlighted segment', html:`<div class="av-row" style="gap:28px">${ring(mv,MC,180,'1,904','service accts',{hi:1,fs:28})}</div>`},
]; })()},

{ id:'compliance', label:'Compliance', desc:'Framework list with 48px gradient mini rings, failing-control count and weekly delta.',
variants:[{name:'Card', html:`<div class="av-card av-card--glow-ion" style="max-width:420px;gap:14px">${head('shield','Compliance','Controls passing per framework')}
  ${[['HIPAA',88,6,'+4 pts','up'],['SOC 2',82,11,'+3 pts','up'],['ISO 27001',76,19,'+2 pts','up'],['NIST 800-53',71,34,'No change',''],['CIS AWS',64,41,'−1 pts','down']].map(([n,p,f,d,k]) => `<div class="av-comp">${minring(p)}<span class="av-comp__text"><span class="av-comp__name">${n}</span><span class="av-comp__fail">${f} failing controls</span></span><span class="av-comp__delta${k ? ' av-comp__delta--' + k : ''}">${d}</span></div>`).join('\n  ')}
</div>`}, {name:'Mini ring', html:`<div class="av-row" style="gap:20px">${minring(88)}${minring(64)}${minring(32)}</div>`}]},

{ id:'cloud-accounts', label:'Cloud accounts', desc:'Account list card: provider chip (tinted), name + mono ID, posture bar (brand gradient), status + last scan, chevron.',
variants:[{name:'Card', html:`<div class="av-card av-card--flush">
  <div class="av-acct-head">${head('cloud','Cloud accounts')}<a class="av-link av-link--action" href="#" style="font-size:13px">Connect account${ic('arrow',14,2)}</a></div>
  ${[['AWS','av-tag--aws','Production Demo Account','010545334631',58,'Complete coverage','var(--av-text-success)','2 hours ago'],['GCP','av-tag--gcp','Northwind Commerce Account','alvl-vulnlab-d6a0cd',96,'Complete coverage','var(--av-text-success)','40 min ago'],['AZ','av-tag--azure','Ashgrove Azure','4c1e…b20',0,'Needs permissions','var(--av-text-warning)','never']].map(([p,c,n,id,s,st,sc,l]) => `<button class="av-acct"><span class="av-acct__id"><span class="av-acct__prov av-tag ${c}" style="height:auto">${p}</span><span class="av-acct__name"><b>${n}</b><span>${id}</span></span></span><span class="av-acct__score"><span class="av-acct__score-row"><span>Posture</span><b>${s ? s : '—'}</b></span><span class="av-acct__bar"><i style="width:${s}%"></i></span></span><span class="av-acct__status"><b style="font-weight:400;color:${sc}">${st}</b><span>Scanned ${l}</span></span>${ic('chevRight',16,2).replace('av-icon','av-icon" style="color:var(--av-icon-disabled)')}</button>`).join('\n  ')}
</div>`}]},

{ id:'activity', label:'Activity', desc:'Feed card: severity dot, sentence, time + optional inline Ion action.',
variants:[{name:'Card', html:`<div class="av-card" style="max-width:420px;gap:6px"><div class="av-weave av-weave--bl" aria-hidden="true"></div><div style="margin-bottom:8px">${head('monitor','Activity')}</div>
  ${[['var(--av-support-critical)','New critical: S3 bucket hci-exports-prod is publicly readable','12 min ago','Review'],['var(--av-support-low)','Scan finished on Production Demo Account · 293 open','2 h ago',''],['var(--av-support-medium)','Access key AKIA…7Q2F unused for 412 days','5 h ago','Rotate'],['var(--av-support-success)','Zalak resolved 4 findings in IAM','Yesterday',''],['var(--av-support-neutral)','Northwind Commerce connected','Oct 12','']].map(([c,t,w,a]) => `<div class="av-activity"><span class="av-activity__dot" style="background:${c}"></span><span class="av-activity__body"><span class="av-activity__t">${t}</span><span class="av-activity__meta">${w}${a ? `<button class="av-activity__cta">${a}</button>` : ''}</span></span></div>`).join('\n  ')}
</div>`}]},

{ id:'findings-summary', label:'Findings summary', desc:'Findings page header card: stat strip (tinted cells) above a ring + severity filter chips row.',
variants:[{name:'Card', html:`<div class="av-card av-card--flush" style="border-radius:14px">
  <div class="av-stat-strip" style="border:0;border-radius:0">${[['alert','Open findings','293','radial-gradient(90% 120% at 100% 0%,rgba(31,221,255,.10),transparent 60%)'],['threat','Critical + high','69','radial-gradient(90% 120% at 100% 0%,rgba(255,75,31,.12),transparent 60%)'],['scan','Resources affected','139','']].map(([g,l,v,t]) => `<div class="av-stat" style="background:${t || 'transparent'}"><span class="av-stat__label"><img src="assets/icons-glass/${g}.svg" alt="">${l}</span><span class="av-stat__v">${v}</span></div>`).join('')}</div>
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px 24px;padding:16px 20px;border-top:1px solid var(--av-border-subtle-00)">
    ${ring([5,64,133,91],SEVC,120,'293','open',{fs:22})}
    <div style="flex:1;min-width:min(240px,100%);display:flex;flex-wrap:wrap;gap:6px">${[['Critical',5],['High',64],['Medium',133],['Low',91]].map(([l,n],i) => `<button class="av-sev-chip"${i===1?' aria-pressed="true"':''}><i style="background:${SEVC[i]}"></i>${l}<span>${n}</span></button>`).join('')}</div>
  </div>
</div>`}]},

{ id:'ring-summary', label:'Ring summary cards', desc:'Dot ring + titled legend grid. Used on Scans, Identities, Bulletins, Clients and Members.',
variants:[
 {name:'Findings by scanner', html:`<div class="av-card av-card--glow-signal" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:24px;align-items:center"><div class="av-stack" style="gap:16px">${head('scan','Findings by scanner','Latest sweep · Oct 13, 3:33 PM')}${ring([151,76,31,35,0],['#FF4B1F','#1FDDFF','#FFB547',INK,MUT],200,'293','findings',{fs:30})}</div>${legend([['#FF4B1F','IAM',151,'51.5%'],['#1FDDFF','S3',76,'25.9%'],['#FFB547','Transmission',31,'10.6%'],[INK,'Logging',35,'11.9%'],[MUT,'Security groups',0,'0%']])}</div>`},
 {name:'Identities hero', html:`<div class="av-card av-card--glow-hero" style="flex-direction:row;flex-wrap:wrap;gap:28px;align-items:center;padding:24px"><div class="av-weave" aria-hidden="true"></div><img src="assets/mascots/idcard.png" alt="" style="width:min(108px,100%);height:108px;object-fit:contain;margin:-12px -10px -16px -8px"><div class="av-stack" style="gap:4px;min-width:min(140px,100%)"><span style="font-size:13px;color:var(--av-text-tertiary)">Identities found</span><span style="font-size:44px;font-weight:600;letter-spacing:-0.04em;line-height:1">48</span><span style="font-size:12px;color:var(--av-text-helper)">Last run · Oct 13, 8:41 PM</span></div><div style="flex:1;min-width:min(260px,100%);display:flex;flex-wrap:wrap;align-items:center;gap:20px 28px">${ring([31,14,3],['#FF8A5B','#1FDDFF','#FFB547'],150,'48','non-human')}<div class="av-stack" style="gap:10px">${[['#FF8A5B','Service accounts',31],['#1FDDFF','AI agents',14],['#FFB547','API keys',3]].map(([c,l,n]) => `<span style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--av-text-tertiary)"><span style="width:8px;height:8px;border-radius:2px;background:${c}"></span>${l}<b style="color:var(--av-text-primary)">${n}</b></span>`).join('')}</div></div></div>`},
 {name:'Advisories (Bulletins)', html:`<div class="av-card" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:20px 28px"><div class="av-weave" aria-hidden="true"></div>${ring([1,2,2,3],SEVC,150,'8','advisories')}<div style="flex:1;min-width:min(220px,100%);display:flex;flex-direction:column;gap:6px"><div style="margin-bottom:6px">${head('alert','Advisories by severity','Last 30 days · all providers')}</div>${legendGrid([[SEVC[0],'Critical',1],[SEVC[1],'High',2],[SEVC[2],'Medium',2],[SEVC[3],'Low',3]])}</div></div>`},
 {name:'Accounts by provider (Clients)', html:`<div class="av-card" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:20px 28px"><div class="av-weave" aria-hidden="true"></div>${ring([1,1,1],['#FFB547','#1FDDFF',INK],150,'3','accounts')}<div style="flex:1;min-width:min(220px,100%);display:flex;flex-direction:column;gap:6px"><div style="margin-bottom:6px">${head('clients','Accounts by provider','Across all clients')}</div>${legendGrid([['#FFB547','AWS',1],['#1FDDFF','GCP',1],[INK,'Azure',1]])}</div></div>`},
 {name:'Roles (Members)', html:`<div class="av-card" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:20px 28px"><div class="av-weave" aria-hidden="true"></div>${ring([4,3,1],['#1FDDFF','#FFB547',MUT],150,'8','members')}<div style="flex:1;min-width:min(220px,100%);display:flex;flex-direction:column;gap:6px"><div style="margin-bottom:6px">${head('members','Roles','Least privilege applies to people too')}</div>${legendGrid([['#1FDDFF','Owners',4],['#FFB547','Analysts',3],[MUT,'Invited',1]])}</div></div>`},
]},

{ id:'stat-strip', label:'Stat strip', desc:'Compact KPI row used atop Findings and Scans: tinted cells, glass glyph, 30px value, optional sub.',
variants:[{name:'Strip', html:`<div class="av-stat-strip">${[['scan','Last scan','2h ago','5m 41s · 214 resources','rgba(31,221,255,.10)'],['alert','New findings','+12','since previous scan','rgba(255,75,31,.12)'],['shield','Resolved','24','this week','rgba(61,220,151,.10)']].map(([g,l,v,s,t]) => `<div class="av-stat" style="background:radial-gradient(90% 120% at 100% 0%,${t},transparent 60%)"><span class="av-stat__label"><img src="assets/icons-glass/${g}.svg" alt="">${l}</span><span class="av-stat__v" style="font-size:22px;letter-spacing:-0.025em">${v}</span><span class="av-stat__s">${s}</span></div>`).join('')}</div>`}]},

{ id:'identity-graph', label:'Identity graph', desc:'Hub orb (account) with gradient bezier edges fanning to finding / identity / resource nodes; animated white flow pulses. Edge gradient = node kind colours. Product renders via React; this is the static reference.',
variants:[{name:'Graph', html:`<div style="overflow-x:auto"><div class="av-graph" style="aspect-ratio:${GW}/${GH}">
  <svg viewBox="0 0 ${GW} ${GH}" aria-hidden="true"><defs>${gEdges.map(e => `<linearGradient id="dg${e.i}" gradientUnits="userSpaceOnUse" x1="${e.x0.toFixed(1)}" y1="${e.y0.toFixed(1)}" x2="${NX}" y2="${e.y}"><stop offset="0" stop-color="${e.n[4]}"/><stop offset="1" stop-color="${e.n[5]}"/></linearGradient>`).join('')}</defs>
    ${gEdges.map(e => `<path class="av-graph__edge" d="${e.d}" stroke="url(#dg${e.i})" pathLength="1" style="animation-delay:${e.i * 70}ms"/><path class="av-graph__flow" d="${e.d}" pathLength="1" style="animation-delay:${(1.2 + e.i * .15).toFixed(2)}s"/>`).join('\n    ')}
  </svg>
  <div class="av-graph__hub" style="left:${(HUB[0]/GW*100).toFixed(2)}%;top:${(HUB[1]/GH*100).toFixed(2)}%"><canvas data-av-orb="hub"></canvas><span class="av-graph__hub-label">PRODUCTION DEMO</span></div>
  ${gEdges.map(e => `<div class="av-gnode" style="left:${((NX - 14)/GW*100).toFixed(2)}%;top:${(e.y/GH*100).toFixed(2)}%"><span class="av-gnode__dot"><img src="assets/icons-glass/${e.n[1]}.svg" alt=""></span><span class="av-gnode__t"><b>${e.n[2]}</b><span><em class="av-gnode__kind" style="color:${e.n[0] === 'f' ? 'var(--av-support-medium)' : 'var(--av-support-low)'}">${{f:'Finding',i:'Identity',r:'Resource'}[e.n[0]]}</em> · ${e.n[3]}</span></span></div>`).join('\n  ')}
  <div class="av-graph__legend"><span><i style="background:linear-gradient(90deg,#FF4B1F,#FFB547)"></i>Finding</span><span><i style="background:linear-gradient(90deg,#FF4B1F,#1FDDFF)"></i>Identity</span><span><i style="background:linear-gradient(90deg,#1FDDFF,#F2F2F0)"></i>Resource</span></div>
</div></div>`}]},

{ id:'kpi-cards', label:'KPI tiles', desc:'See Dashboard patterns › KPI tile for the 4-up grid (sparkline + delta). Repeated here with the posture card as the Overview hero row.',
variants:[{name:'Overview hero row', html:`<div style="display:flex;flex-wrap:wrap;gap:16px"><div class="av-score-card" style="flex:1 1 340px"><div class="av-weave" aria-hidden="true"></div>${ring([64,36],['#FF4B1F','var(--av-border-strong-02)'],160,'64','/ 100',{grad:true,gradNum:true,fs:44})}<div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div></div></div>
  <div class="av-kpi-grid" style="flex:2 1 520px">${[['alert','Open findings','293','across 139 resources','12 fewer than last scan',0],['threat','Critical + high','69','need action','3 new since Oct 6',1]].map(([g,l,n,u,d,up]) => `<button class="av-kpi av-kpi--${up ? 'signal' : 'ion'}"><div class="av-kpi__head"><span class="av-kpi__label"><img class="av-kpi__glyph" src="assets/icons-glass/${g}.svg" alt="">${l}</span></div><div class="av-kpi__value"><span class="av-kpi__num">${n}</span><span class="av-kpi__unit">${u}</span></div><span class="av-kpi__delta${up ? ' av-kpi__delta--up' : ''}">${ic(up ? 'up' : 'down',12,2.2)}${d}</span></button>`).join('')}</div></div>`}]},

{ id:'empty-account', label:'Empty account', desc:'Shown when an account has no scan yet: illustration tile, title, text, primary + secondary.',
variants:[{name:'Card', html:`<div class="av-empty-card"><div class="av-empty-card__img" style="background-image:url(assets/illus/clay-clouds-1k.jpg)"></div><div class="av-empty-card__body"><h2 class="av-empty-card__title">No scan yet for this account</h2><p class="av-empty-card__text">Run the first scan to see posture, findings and identities. It takes about 6 minutes.</p><div class="av-row" style="gap:8px;margin-top:6px"><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run first scan</button><button class="av-btn av-btn--secondary">View Production Demo</button></div></div></div>`}]},
];

return { CARDS_CSS, CARDS };
})();
window.AvDS = { T, C, P, K };
})();
