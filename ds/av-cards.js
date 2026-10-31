// Avistar Dashboard — cards & graphs (every card + chart used on the dashboard pages)
import { ic } from './av-components.js';

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

export const CARDS_CSS = `.av-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01)}
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

export const CARDS = [
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
