// Avistar Dashboard — design tokens (single source of truth)
// [category, token, dark, light, usage]
export const COLOR_TOKENS = [
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

export const PRIMITIVES = [
  ['Neutral', [['1000','#060708'],['950','#0B0B0C'],['900','#0F0F11'],['850','#121214'],['800','#141416'],['750','#18181B'],['700','#1E1E21'],['650','#232326'],['600','#2A2A2E'],['550','#3A3A40'],['500','#5A5955'],['450','#6B6A67'],['400','#7A7874'],['350','#8C8A85'],['300','#A3A19C'],['250','#B8B6B1'],['200','#D9D7D2'],['150','#F2F2F0'],['100','#F4F2EE'],['0','#FFFFFF']]],
  ['Signal', [['700','#C2300A'],['600','#E63E14'],['500','#FF4B1F'],['400','#FF6A45'],['300','#FF8A5B']]],
  ['Ion', [['700','#006A82'],['600','#0A6F8C'],['500','#1FDDFF'],['300','#9FEFFF'],['100','#E8FCFF']]],
  ['Amber', [['700','#8A5300'],['500','#FFB547']]],
  ['Green', [['700','#0E7A4E'],['500','#3DDC97']]],
];

export const BASE_TOKENS = [
  ['Type','--av-font-sans',"'Inter', system-ui, sans-serif",'UI & data'],
  ['Type','--av-font-mono',"'JetBrains Mono', ui-monospace, monospace",'Labels, IDs, numbers in tags'],
  ['Space','--av-space-1','4px','Icon gap'],['Space','--av-space-2','8px','Inline gap'],['Space','--av-space-3','12px','Control gap'],['Space','--av-space-4','16px','Card grid gap'],['Space','--av-space-5','20px','Card padding'],['Space','--av-space-6','24px','Hero card padding'],['Space','--av-space-7','28px','Main column gap'],['Space','--av-space-8','32px','Page top padding'],['Space','--av-space-9','40px','Page gutter (max)'],['Space','--av-space-10','56px','Intro section gap'],['Space','--av-space-11','72px','Doc section rhythm'],
  ['Radius','--av-radius-xs','4px','Intro cards, checkbox'],['Radius','--av-radius-sm','6px','Mono tags'],['Radius','--av-radius-md','8px','Menu items, icon btn (sm)'],['Radius','--av-radius-lg','10px','Inputs, nav items, icon btn'],['Radius','--av-radius-xl','14px','KPI grid, popovers, toasts'],['Radius','--av-radius-2xl','16px','Cards, tables, modals'],['Radius','--av-radius-pill','999px','Buttons, badges, switchers'],
  ['Elevation','--av-shadow-hairline','0 0 0 .5px var(--av-border-subtle-00)','KPI grid cells'],['Elevation','--av-shadow-toast','0 8px 24px rgba(0,0,0,.18)','Toast'],['Elevation','--av-shadow-popover','0 20px 50px rgba(0,0,0,.5)','Menu, popover, dropdown'],['Elevation','--av-shadow-modal','0 24px 60px rgba(0,0,0,.55)','Modal'],['Elevation','--av-shadow-sheet','-24px 0 60px rgba(0,0,0,.35)','Side sheet'],
  ['Motion','--av-ease-standard','cubic-bezier(.3,.7,.4,1)','State changes, sidebar'],['Motion','--av-ease-enter','cubic-bezier(.2,.8,.2,1)','Page / card enter'],['Motion','--av-ease-spring','cubic-bezier(.3,1.6,.5,1)','Icon pops, checkmarks'],['Motion','--av-duration-fast','150ms','Hover colour'],['Motion','--av-duration-base','200ms','Toggle, border'],['Motion','--av-duration-slow','250ms','Sidebar collapse'],['Motion','--av-duration-enter','500ms','Card stagger enter'],
  ['Layout','--av-gutter','clamp(1rem, 4vw, 2rem)','Fluid page gutter / section rhythm'],['Layout','--av-card-pad','clamp(1rem, 3vw, 1.25rem)','Fluid card padding'],['Layout','--av-section-gap','clamp(1.25rem, 3vw, 1.75rem)','Fluid gap between page sections'],['Layout','--av-touch','44px','Minimum touch target'],['Layout','--av-sidebar-w','clamp(220px, 20vw, 248px)','Sidebar open'],['Layout','--av-drawer-w','min(300px, 86vw)','Mobile nav drawer'],['Layout','--av-sidebar-w-collapsed','72px','Sidebar collapsed'],['Layout','--av-header-h','64px','Top bar'],['Layout','--av-content-max','1280px','Main column max width'],['Layout','--av-intro-max','1240px','Intro column max width'],
  ['Z-index','--av-z-sidebar','20','Sidebar'],['Z-index','--av-z-header','30','Top bar'],['Z-index','--av-z-dropdown','40','Menus'],['Z-index','--av-z-intro','50','Intro takeover'],['Z-index','--av-z-modal','60','Modal / sheet'],['Z-index','--av-z-toast','70','Toast'],
];

export const TYPE_SCALE = [
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

export function tokensCSS() {
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
