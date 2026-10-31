// Avistar Dashboard · av-charts.js — vanilla runtime for dot-matrix rings + orbs.
// Usage: <script src="orb.js"></script><script src="av-charts.js"></script> then AvCharts.hydrate(document)
// Ring:  <canvas data-av-ring data-values="[64,36]" data-colors='["#FF4B1F","var(--av-border-strong-02)"]' data-grad></canvas>
// Orb:   <canvas data-av-orb="critical|high|medium|low|hub"></canvas>
(function () {
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const resolve = (el, c) => { const m = /^var\((--[^)]+)\)$/.exec(c); return m ? getComputedStyle(el).getPropertyValue(m[1]).trim() || '#3A3A40' : c; };
  function drawRing(el, values, colors, opt) {
    opt = opt || {}; const sweep = opt.sweep == null ? 1 : opt.sweep, hi = opt.hi;
    const d = Math.min(2, devicePixelRatio || 1), W = Math.round(el.clientWidth * d), H = Math.round(el.clientHeight * d); if (!W || !H) return;
    if (el.width !== W || el.height !== H) { el.width = W; el.height = H; }
    const ctx = el.getContext('2d'); ctx.clearRect(0, 0, W, H);
    const cols = colors.map(c => resolve(el, c)), n = values.length, tot = values.reduce((a, b) => a + b, 0) || 1, cum = []; let acc = 0;
    values.forEach(v => { cum.push(acc); acc += v / tot; });
    const cx = W / 2, cy = H / 2, ro = Math.min(W, H) * .48, ri = ro * .6, cell = Math.max(3 * d, Math.round(W / 56)), gap = .014;
    for (let y = 0; y < H; y += cell) for (let x = 0; x < W; x += cell) {
      const dx = x + cell / 2 - cx, dy = y + cell / 2 - cy, r = Math.hypot(dx, dy); if (r < ri || r > ro) continue;
      let a = (Math.atan2(dy, dx) + Math.PI / 2) / (Math.PI * 2); if (a < 0) a += 1; if (a > sweep) continue;
      let s = -1; for (let i = n - 1; i >= 0; i--) if (a >= cum[i]) { s = i; break; } if (s < 0 || values[s] <= 0) continue;
      const st = cum[s], en = s < n - 1 ? cum[s + 1] : 1; if (a < st + gap / 2 || a > en - gap / 2) continue;
      const m = 1 - Math.abs((r - (ri + ro) / 2) / ((ro - ri) / 2)), lit = .35 + .65 * (m * .6 + (.5 + .5 * Math.cos((a - .15) * Math.PI * 2)) * .4);
      let col = cols[s]; if (opt.grad && s === 0) { const t = Math.min(1, (a - st) / Math.max(.001, en - st)), A = [31, 221, 255], Z = [255, 75, 31]; col = 'rgb(' + A.map((c, i) => Math.round(c + (Z[i] - c) * t)).join(',') + ')'; }
      const th = BAYER[((x / cell | 0) % 4) * 4 + ((y / cell | 0) % 4)] / 16, on = lit > th, trk = opt.grad && s === 1, sz = trk ? cell * .62 : on ? cell * .82 : cell * .38, dim = hi != null && hi !== s ? .22 : 1;
      ctx.fillStyle = col; ctx.globalAlpha = trk ? .85 : (on ? .95 : .5) * dim; ctx.fillRect(x + (cell - sz) / 2, y + (cell - sz) / 2, sz, sz);
    }
    ctx.globalAlpha = 1;
  }
  function animateRing(el) {
    const values = JSON.parse(el.dataset.values || '[1]'), colors = JSON.parse(el.dataset.colors || '["#FF4B1F"]'), grad = el.hasAttribute('data-grad');
    const hi = el.dataset.hi != null ? +el.dataset.hi : undefined, t0 = performance.now(), D = 1100;
    const step = now => { el._avDrawn = true; const q = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - q, 3); drawRing(el, values, colors, { grad, hi, sweep: e }); if (q < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
    setTimeout(() => { if (!el._avDrawn) drawRing(el, values, colors, { grad, hi, sweep: 1 }); }, 120);
  }
  const ORB = { critical: ['#FF4B1F', '#FFD9C8', '#2A0904'], high: ['#FF5A2A', '#BFF6FF', '#1E0B06'], medium: ['#1FDDFF', '#E8FCFF', '#03222B'], low: ['#1FDDFF', '#E8FCFF', '#03222B'], hub: ['#FF4B1F', '#9FEFFF', '#141414'] };
  function mountOrb(el) {
    const cols = ORB[el.dataset.avOrb] || ORB.medium, ph = Math.random() * 6;
    const go = () => { if (!el.isConnected) return; if (!window.AvistarOrb) return setTimeout(go, 80); try { el._avOrb = window.AvistarOrb.create(el, () => ({ activity: .12 + .1 * Math.sin(performance.now() / 700 + ph), colors: cols, speed: .9, animated: true })); } catch (e) {} };
    go();
  }
  function hydrate(root) {
    (root || document).querySelectorAll('canvas[data-av-ring]:not([data-av-done])').forEach(el => { el.setAttribute('data-av-done', ''); animateRing(el); });
    (root || document).querySelectorAll('canvas[data-av-orb]:not([data-av-done])').forEach(el => { el.setAttribute('data-av-done', ''); mountOrb(el); });
  }
  function redraw(root) { (root || document).querySelectorAll('canvas[data-av-ring]').forEach(el => drawRing(el, JSON.parse(el.dataset.values), JSON.parse(el.dataset.colors), { grad: el.hasAttribute('data-grad'), hi: el.dataset.hi != null ? +el.dataset.hi : undefined })); }
  window.AvCharts = { drawRing, hydrate, redraw, mountOrb };
})();
