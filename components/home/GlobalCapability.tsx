"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LAND_MASK_B64 } from "./globe-land-mask";

const HUBS = [
  {
    title: "UAE",
    shortLabel: "UAE",
    subtitle: "Regional Strategy & Client Engagement",
    badge: "DIFC Regional HQ",
    icon: "fa-location-dot",
    image: "/images/zj1.png",
    theme: "cyan",
    href: "/contact",
    focus: { lat: 24, lon: 55, scale: 1 },
  },
  {
    title: "United Kingdom",
    shortLabel: "UK",
    subtitle: "International Business Presence",
    badge: "International Presence",
    icon: "fa-landmark",
    image: "/images/zj2.png",
    theme: "red",
    href: "/contact",
    focus: { lat: 40, lon: -4, scale: 1 },
  },
  {
    title: "Global Engineering & Delivery",
    shortLabel: "Global",
    subtitle: "Technology Capability at Scale",
    badge: "Centres of Excellence",
    icon: "fa-network-wired",
    image: "/images/zj3.png",
    theme: "cyan",
    href: "/technology-talent-delivery",
    focus: { lat: 22, lon: 46, scale: 0.92 },
  },
];

const MODELS = [
  { icon: "fa-file-lines", label: "Project Delivery" },
  { icon: "fa-gear", label: "Managed Services" },
  { icon: "fa-users", label: "Dedicated Teams" },
  { icon: "fa-server", label: "Specialist Resources" },
];

const CYCLE_MS = 6500;
const D = Math.PI / 180;
const vec = (lat: number, lon: number): [number, number, number] => {
  const p = lat * D;
  const l = lon * D;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
};

const UAE = { lat: 25.2, lon: 55.3 };
const UK = { lat: 51.5, lon: -0.12 };
const GLOBAL_COE = { lat: 22.5, lon: 77.2 };
const AMERICAS = { lat: 40.7, lon: -74.0 };
const N_SEG = 56;

let cache: { land: Float32Array; tag: Uint8Array; jit: Float32Array; ocean: Float32Array } | null =
  null;

function buildGlobe() {
  if (cache) return cache;
  const land: number[] = [];
  const tag: number[] = [];
  const jit: number[] = [];
  const ocean: number[] = [];

  try {
    const bin = atob(LAND_MASK_B64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const isLand = (lat: number, lon: number) => {
      const col = Math.min(359, Math.max(0, Math.floor(lon + 180)));
      const row = Math.min(179, Math.max(0, Math.floor(90 - lat)));
      const idx = row * 360 + col;
      return (bytes[idx >> 3] >> (idx & 7)) & 1;
    };

    const N = 26000;
    const GA = Math.PI * (3 - Math.sqrt(5));
    const uae = vec(UAE.lat, UAE.lon);
    const uk = vec(UK.lat, UK.lon);
    const coe = vec(GLOBAL_COE.lat, GLOBAL_COE.lon);

    for (let i = 0; i < N; i++) {
      const y = 1 - (2 * (i + 0.5)) / N;
      const r = Math.sqrt(1 - y * y);
      const th = i * GA;
      const X = r * Math.cos(th);
      const Z = r * Math.sin(th);
      const lat = Math.asin(y) / D;
      const lon = Math.atan2(X, Z) / D;
      if (isLand(lat, lon)) {
        land.push(X, y, Z);
        const dUae = X * uae[0] + y * uae[1] + Z * uae[2];
        const dUk = X * uk[0] + y * uk[1] + Z * uk[2];
        const dCoe = X * coe[0] + y * coe[1] + Z * coe[2];
        tag.push(dUae > 0.984 ? 1 : dUk > 0.99 ? 2 : dCoe > 0.982 ? 3 : 0);
        jit.push(0.82 + 0.36 * (((Math.imul(i, 2654435761) >>> 0) % 997) / 997));
      } else if (i % 7 === 0) {
        ocean.push(X, y, Z);
      }
    }
  } catch {
    // Graceful empty fallback if atob unavailable
  }

  cache = {
    land: new Float32Array(land),
    tag: new Uint8Array(tag),
    jit: new Float32Array(jit),
    ocean: new Float32Array(ocean),
  };
  return cache;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const posMod1 = (v: number) => {
  const m = v % 1;
  return m < 0 ? m + 1 : m;
};

export default function GlobalCapability() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hitRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTouch = useRef(0);
  const renderOnce = useRef<(() => void) | null>(null);

  const select = useCallback((i: number) => {
    activeRef.current = i;
    lastTouch.current = Date.now();
    setActive(i);
  }, []);

  const hold = useCallback((v: boolean) => {
    pausedRef.current = v;
    lastTouch.current = Date.now();
    setPaused(v);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (pausedRef.current || Date.now() - lastTouch.current < 2500) return;
      const next = (activeRef.current + 1) % HUBS.length;
      activeRef.current = next;
      setActive(next);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    renderOnce.current?.();
  }, [active]);

  /* Physically-lit 3D particle globe — strictly #03060a, #0c0f13, #0096ea, #e40d17, #ffffff */
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const hit = hitRef.current;
    if (!section || !canvas || !hit) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { land, tag, jit, ocean } = buildGlobe();
    const NL = land.length / 3;
    const NO = ocean.length / 3;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let cx = 0;
    let cy = 0;
    let R = 0;
    let raf = 0;
    let visible = true;
    let last = performance.now();
    let t = reduced ? 1.2 : 0;
    let frameNo = 0;

    const view = { lon: HUBS[0].focus.lon, lat: HUBS[0].focus.lat, scale: HUBS[0].focus.scale };
    let userYaw = 0;
    let userPitch = 0;
    let dragging = false;
    let lastDrag = 0;
    const mouse = { x: 0, y: 0, sx: 0, sy: 0 };

    type P = { x: number; y: number; vx: number; vy: number; r: number; d: number; ph: number };
    let parts: P[] = [];

    const uaeV = vec(UAE.lat, UAE.lon);
    const ukV = vec(UK.lat, UK.lon);
    const coeV = vec(GLOBAL_COE.lat, GLOBAL_COE.lon);
    const amV = vec(AMERICAS.lat, AMERICAS.lon);

    const CORRIDORS = [
      { a: uaeV, b: ukV, cA: [0, 150, 234], cB: [228, 13, 23], speed: 0.14, bidir: true, hubs: [0, 1] },
      { a: uaeV, b: coeV, cA: [0, 150, 234], cB: [255, 255, 255], speed: 0.17, bidir: true, hubs: [0, 2] },
      { a: ukV, b: amV, cA: [228, 13, 23], cB: [0, 150, 234], speed: 0.12, bidir: false, hubs: [1, 2] },
    ].map((c) => {
      const omega = Math.acos(
        clamp(c.a[0] * c.b[0] + c.a[1] * c.b[1] + c.a[2] * c.b[2], -1, 1)
      );
      return {
        ...c,
        omega,
        sinO: Math.sin(omega) || 1,
        lift: 0.03 + omega * 0.075,
        px: new Float32Array(N_SEG + 1),
        py: new Float32Array(N_SEG + 1),
        pz: new Float32Array(N_SEG + 1),
      };
    });

    type Corridor = (typeof CORRIDORS)[number];

    const MARKERS = [
      { v: uaeV, name: "UAE", col: "0,150,234", idx: 0, dirX: 1, dirY: -1, minor: false },
      { v: ukV, name: "United Kingdom", col: "228,13,23", idx: 1, dirX: -1, dirY: -1, minor: false },
      { v: coeV, name: "Global Delivery", col: "0,150,234", idx: 2, dirX: 1, dirY: 1, minor: false },
      { v: amV, name: "Americas", col: "0,150,234", idx: -1, dirX: -1, dirY: 1, minor: true },
    ];

    const Lx = -0.5;
    const Ly = 0.48;
    const Lz = 0.72;

    const out = [0, 0, 0];
    let cl = 1;
    let sl = 0;
    let cp = 1;
    let sp = 0;
    const proj = (X: number, Y: number, Z: number, s = 1) => {
      const x1 = X * cl - Z * sl;
      const z1 = X * sl + Z * cl;
      out[0] = x1 * s;
      out[1] = (Y * cp - z1 * sp) * s;
      out[2] = (Y * sp + z1 * cp) * s;
    };

    const arcAt = (cor: Corridor, u: number) => {
      const a = Math.sin((1 - u) * cor.omega) / cor.sinO;
      const b = Math.sin(u * cor.omega) / cor.sinO;
      proj(
        a * cor.a[0] + b * cor.b[0],
        a * cor.a[1] + b * cor.b[1],
        a * cor.a[2] + b * cor.b[2],
        1 + cor.lift * Math.sin(Math.PI * u)
      );
      return out[2];
    };

    const measure = () => {
      const sr = section.getBoundingClientRect();
      const hr = hit.getBoundingClientRect();
      if (sr.width < 10 || sr.height < 10 || hr.width < 10 || hr.height < 10) {
        R = 0;
        return;
      }
      cx = hr.left - sr.left + hr.width / 2;
      cy = hr.top - sr.top + hr.height / 2;
      R = Math.min(hr.width, hr.height) * 0.41;
    };

    const layout = () => {
      const sr = section.getBoundingClientRect();
      w = sr.width;
      h = sr.height;
      if (w < 10 || h < 10) return;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      measure();
      const n = clamp(Math.round((w * h) / 26000), 24, 56);
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        r: 0.4 + Math.random() * 0.8,
        d: 0.2 + Math.random() * 0.7,
        ph: Math.random() * 6.28,
      }));
    };

    const roundRect = (x: number, y: number, bw: number, bh: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + bw, y, x + bw, y + bh, r);
      ctx.arcTo(x + bw, y + bh, x, y + bh, r);
      ctx.arcTo(x, y + bh, x, y, r);
      ctx.arcTo(x, y, x + bw, y, r);
      ctx.closePath();
    };

    const draw = () => {
      if (R < 10) measure();
      if (w < 10 || h < 10 || R < 10 || !Number.isFinite(R)) return;

      const act = activeRef.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      /* Faint cyan dust */
      const mx = mouse.sx;
      const my = mouse.sy;
      ctx.fillStyle = "#0096ea";
      for (const p of parts) {
        const px = p.x + mx * p.d * 10;
        const py = p.y + my * p.d * 10;
        const tw = 0.5 + 0.5 * Math.sin(t * 0.6 + p.ph);
        ctx.globalAlpha = (0.04 + 0.14 * tw) * p.d;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.3, p.r * (0.6 + p.d * 0.4)), 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      const lon0 = view.lon + userYaw + Math.sin(t * 0.18) * 3.5;
      const lat0 = clamp(view.lat + userPitch + Math.sin(t * 0.13) * 1.3, -70, 70);
      cl = Math.cos(lon0 * D);
      sl = Math.sin(lon0 * D);
      cp = Math.cos(lat0 * D);
      sp = Math.sin(lat0 * D);
      const Rr = R * view.scale;
      if (Rr < 10 || !Number.isFinite(Rr)) return;

      const gx = cx + mx * 6;
      const gy = cy + my * 6;
      const lgx = gx + Lx * Rr * 0.9;
      const lgy = gy - Ly * Rr * 0.9;

      /* Outer atmosphere (--logo-cyan) */
      let g = ctx.createRadialGradient(gx, gy, Rr * 0.96, gx, gy, Rr * 1.2);
      g.addColorStop(0, "rgba(0, 150, 234, 0.24)");
      g.addColorStop(0.2, "rgba(0, 150, 234, 0.11)");
      g.addColorStop(0.55, "rgba(0, 150, 234, 0.03)");
      g.addColorStop(1, "rgba(0, 150, 234, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(gx, gy, Rr * 1.2, 0, 6.283);
      ctx.fill();

      g = ctx.createRadialGradient(gx, gy, Rr, gx, gy, Rr * 1.7);
      g.addColorStop(0, "rgba(0, 150, 234, 0.06)");
      g.addColorStop(1, "rgba(0, 150, 234, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(gx, gy, Rr * 1.7, 0, 6.283);
      ctx.fill();

      /* Sphere body (#0c0f13 -> #03060a) */
      g = ctx.createRadialGradient(lgx, lgy, Rr * 0.04, gx, gy, Rr);
      g.addColorStop(0, "#12171e");
      g.addColorStop(0.38, "#0c0f13");
      g.addColorStop(0.76, "#06080c");
      g.addColorStop(1, "#03060a");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(gx, gy, Rr, 0, 6.283);
      ctx.fill();

      /* Faint graticule */
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.045)";
      const strokeLine = (pts: number[][]) => {
        ctx.beginPath();
        let pen = false;
        for (const v of pts) {
          proj(v[0], v[1], v[2]);
          if (out[2] > 0) {
            const x = gx + out[0] * Rr;
            const y = gy - out[1] * Rr;
            pen ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
            pen = true;
          } else pen = false;
        }
        ctx.stroke();
      };
      for (let la = -60; la <= 60; la += 30) {
        const pts: number[][] = [];
        for (let lo = -180; lo <= 180; lo += 8) pts.push(vec(la, lo));
        strokeLine(pts);
      }
      for (let lo = 0; lo < 360; lo += 30) {
        const pts: number[][] = [];
        for (let la = -90; la <= 90; la += 8) pts.push(vec(la, lo));
        strokeLine(pts);
      }

      /* Ocean stipple (--logo-cyan) */
      const dotR = Math.max(0.6, Rr * 0.0026);
      ctx.fillStyle = "#0096ea";
      for (let i = 0; i < NO; i++) {
        proj(ocean[i * 3], ocean[i * 3 + 1], ocean[i * 3 + 2]);
        if (out[2] <= 0) continue;
        const dl = out[0] * Lx + out[1] * Ly + out[2] * Lz;
        const lit = Math.max(0, dl);
        ctx.globalAlpha = 0.02 + 0.045 * lit + 0.06 * lit * lit * lit;
        ctx.beginPath();
        ctx.arc(gx + out[0] * Rr, gy - out[1] * Rr, Math.max(0.3, dotR * 0.7), 0, 6.283);
        ctx.fill();
      }

      /* Land stipple (strictly #ffffff, #0096ea, #e40d17) */
      let prev = -1;
      for (let i = 0; i < NL; i++) {
        proj(land[i * 3], land[i * 3 + 1], land[i * 3 + 2]);
        const z = out[2];
        if (z <= 0) continue;
        const tg = tag[i];
        if (tg !== prev) {
          ctx.fillStyle = tg === 1 || tg === 3 ? "#0096ea" : tg === 2 ? "#e40d17" : "#ffffff";
          prev = tg;
        }
        const dl = out[0] * Lx + out[1] * Ly + out[2] * Lz;
        const lit = clamp((dl + 0.18) / 1.18, 0.05, 1);
        const limb = Math.pow(z, 0.5);
        const hot =
          tg === 1
            ? act === 0 || act === 2
              ? 0.32
              : 0.08
            : tg === 2
            ? act === 1 || act === 2
              ? 0.32
              : 0.08
            : tg === 3
            ? act === 2
              ? 0.32
              : 0.1
            : 0;
        ctx.globalAlpha = clamp(Math.pow(lit, 1.15) * limb * 0.86 * jit[i] + hot, 0.05, 0.94);
        const rDot = Math.max(0.4, dotR * (0.72 + 0.4 * limb) * (tg ? 1.25 : 1));
        ctx.beginPath();
        ctx.arc(gx + out[0] * Rr, gy - out[1] * Rr, rDot, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      /* Terminator shadow & sunlit cyan rim */
      ctx.save();
      ctx.beginPath();
      ctx.arc(gx, gy, Rr, 0, 6.283);
      ctx.clip();

      g = ctx.createRadialGradient(
        gx + Rr * 0.62,
        gy + Rr * 0.52,
        Rr * 0.15,
        gx + Rr * 0.62,
        gy + Rr * 0.52,
        Rr * 1.45
      );
      g.addColorStop(0, "rgba(3, 6, 10, 0.88)");
      g.addColorStop(0.55, "rgba(3, 6, 10, 0.42)");
      g.addColorStop(1, "rgba(3, 6, 10, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(gx - Rr, gy - Rr, Rr * 2, Rr * 2);

      g = ctx.createRadialGradient(gx, gy, Rr * 0.82, gx, gy, Rr);
      g.addColorStop(0, "rgba(0, 150, 234, 0)");
      g.addColorStop(1, "rgba(0, 150, 234, 0.2)");
      ctx.fillStyle = g;
      ctx.fillRect(gx - Rr, gy - Rr, Rr * 2, Rr * 2);
      ctx.restore();

      const rim = ctx.createLinearGradient(
        gx - Rr * 0.7,
        gy - Rr * 0.7,
        gx + Rr * 0.7,
        gy + Rr * 0.7
      );
      rim.addColorStop(0, "rgba(0, 150, 234, 0.55)");
      rim.addColorStop(0.5, "rgba(255, 255, 255, 0.14)");
      rim.addColorStop(1, "rgba(255, 255, 255, 0.04)");
      ctx.strokeStyle = rim;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.arc(gx, gy, Rr, 0, 6.283);
      ctx.stroke();

      /* Multi-region corridors */
      ctx.lineCap = "butt";

      for (const cor of CORRIDORS) {
        const emph =
          act === 2 ? (cor.hubs.includes(2) ? 1 : 0.8) : cor.hubs.includes(act) ? 1 : 0.46;

        for (let k = 0; k <= N_SEG; k++) {
          cor.pz[k] = arcAt(cor, k / N_SEG);
          cor.px[k] = gx + out[0] * Rr;
          cor.py[k] = gy - out[1] * Rr;
        }

        for (let k = 0; k < N_SEG; k++) {
          const z = Math.min(cor.pz[k], cor.pz[k + 1]);
          if (z <= 0.03) continue;
          const fade = smooth(clamp(z / 0.28, 0, 1));
          const u = (k + 0.5) / N_SEG;
          const r = Math.round(cor.cA[0] + (cor.cB[0] - cor.cA[0]) * u);
          const gg = Math.round(cor.cA[1] + (cor.cB[1] - cor.cA[1]) * u);
          const bb = Math.round(cor.cA[2] + (cor.cB[2] - cor.cA[2]) * u);
          ctx.strokeStyle = `rgb(${r},${gg},${bb})`;

          if (emph >= 1) {
            ctx.globalAlpha = 0.09 * fade;
            ctx.lineWidth = 3.6;
            ctx.beginPath();
            ctx.moveTo(cor.px[k], cor.py[k]);
            ctx.lineTo(cor.px[k + 1], cor.py[k + 1]);
            ctx.stroke();
          }

          ctx.globalAlpha = 0.55 * emph * fade;
          ctx.lineWidth = 1.05;
          ctx.beginPath();
          ctx.moveTo(cor.px[k], cor.py[k]);
          ctx.lineTo(cor.px[k + 1], cor.py[k + 1]);
          ctx.stroke();
        }

        const packets: [number, string, number][] = [[posMod1(t * cor.speed), "#ffffff", 1.7]];
        if (cor.bidir) packets.push([1 - posMod1(t * cor.speed + 0.5), "#0096ea", 1.5]);

        for (const [u, col, rad] of packets) {
          const z = arcAt(cor, u);
          if (z <= 0.05) continue;
          const fade = smooth(clamp(z / 0.28, 0, 1));
          const x = gx + out[0] * Rr;
          const y = gy - out[1] * Rr;
          ctx.fillStyle = col;
          ctx.globalAlpha = 0.14 * emph * fade;
          ctx.beginPath();
          ctx.arc(x, y, rad * 3.2, 0, 6.283);
          ctx.fill();
          ctx.globalAlpha = 0.9 * emph * fade;
          ctx.beginPath();
          ctx.arc(x, y, rad, 0, 6.283);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      /* Nodes + glass label chips */
      ctx.font = "600 11.5px Inter, sans-serif";
      ctx.textBaseline = "middle";

      for (const m of MARKERS) {
        proj(m.v[0], m.v[1], m.v[2]);
        if (out[2] < 0.04) continue;
        const x = gx + out[0] * Rr;
        const y = gy - out[1] * Rr;
        const vis = smooth(clamp(out[2] / 0.25, 0, 1));
        const on = m.minor ? act === 2 : act === m.idx || act === 2;

        const glowR = m.minor ? 11 : on ? 24 : 14;
        const bg = ctx.createRadialGradient(x, y, 0, x, y, glowR);
        bg.addColorStop(
          0,
          `rgba(${m.col},${(m.minor ? (on ? 0.26 : 0.12) : on ? 0.34 : 0.16) * vis})`
        );
        bg.addColorStop(1, `rgba(${m.col},0)`);
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, 6.283);
        ctx.fill();

        if (!m.minor) {
          const ph = posMod1(t * 0.45 + m.idx * 0.35);
          ctx.strokeStyle = `rgba(${m.col},${(1 - ph) * 0.45 * vis})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.5, 3 + ph * (on ? 16 : 9)), 0, 6.283);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${m.col},${vis})`;
        ctx.beginPath();
        ctx.arc(x, y, m.minor ? 2.1 : on ? 3.6 : 2.8, 0, 6.283);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${vis})`;
        ctx.beginPath();
        ctx.arc(x, y, m.minor ? 0.9 : 1.3, 0, 6.283);
        ctx.fill();

        if (m.minor && !on) continue;

        const chipW = ctx.measureText(m.name).width + 20;
        const chipH = 22;
        let dirX = m.dirX;
        if (dirX > 0 && x + 16 + chipW > gx + Rr * 1.22) dirX = -1;
        else if (dirX < 0 && x - 16 - chipW < gx - Rr * 1.22) dirX = 1;
        const lx = x + dirX * 16;
        const ly = y + m.dirY * 16;
        const x0 = dirX > 0 ? lx : lx - chipW;
        const a = (on ? 1 : 0.62) * vis;

        ctx.globalAlpha = a;
        ctx.strokeStyle = `rgba(${m.col},0.75)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(lx, ly);
        ctx.stroke();

        roundRect(x0, ly - chipH / 2, chipW, chipH, 11);
        ctx.fillStyle = "rgba(12, 15, 19, 0.88)";
        ctx.fill();
        ctx.strokeStyle = `rgba(${m.col},0.5)`;
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(m.name, x0 + chipW / 2, ly + 0.5);
        ctx.globalAlpha = 1;
      }
      ctx.textAlign = "start";
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      const dt = clamp((now - last) / 1000, 0, 0.05);
      last = now;
      t += dt;
      frameNo++;

      const tg = HUBS[activeRef.current].focus;
      const k = 1 - Math.exp(-dt * 2.4);
      const dl = ((tg.lon - view.lon + 540) % 360) - 180;
      view.lon += dl * k;
      view.lat += (tg.lat - view.lat) * k;
      view.scale += (tg.scale - view.scale) * k;

      if (!dragging && now - lastDrag > 2200) {
        const kd = 1 - Math.exp(-dt * 1.2);
        userYaw -= userYaw * kd;
        userPitch -= userPitch * kd;
      }
      mouse.sx += (mouse.x - mouse.sx) * (1 - Math.exp(-dt * 4));
      mouse.sy += (mouse.y - mouse.sy) * (1 - Math.exp(-dt * 4));

      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }
      if (frameNo % 30 === 0) measure();

      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (reduced || raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    renderOnce.current = reduced
      ? () => {
          const tg = HUBS[activeRef.current].focus;
          view.lon = tg.lon;
          view.lat = tg.lat;
          view.scale = tg.scale;
          draw();
        }
      : null;

    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) return;
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      section.style.setProperty("--mx", mouse.x.toFixed(3));
      section.style.setProperty("--my", mouse.y.toFixed(3));
    };

    let lx = 0;
    let ly = 0;
    const down = (e: PointerEvent) => {
      dragging = true;
      lx = e.clientX;
      ly = e.clientY;
      hit.setPointerCapture(e.pointerId);
      hit.classList.add("is-drag");
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      userYaw -= (e.clientX - lx) * 0.35;
      userPitch = clamp(userPitch + (e.clientY - ly) * 0.25, -40, 40);
      lx = e.clientX;
      ly = e.clientY;
      lastDrag = performance.now();
      if (reduced) draw();
    };
    const up = () => {
      dragging = false;
      lastDrag = performance.now();
      hit.classList.remove("is-drag");
    };

    section.addEventListener("pointermove", onMove);
    hit.addEventListener("pointerdown", down);
    hit.addEventListener("pointermove", move);
    hit.addEventListener("pointerup", up);
    hit.addEventListener("pointercancel", up);

    const ro = new ResizeObserver(() => {
      layout();
      if (reduced) draw();
    });
    ro.observe(section);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
      },
      { threshold: 0.01 }
    );
    io.observe(section);

    layout();
    if (reduced) draw();
    else start();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      section.removeEventListener("pointermove", onMove);
      hit.removeEventListener("pointerdown", down);
      hit.removeEventListener("pointermove", move);
      hit.removeEventListener("pointerup", up);
      hit.removeEventListener("pointercancel", up);
      renderOnce.current = null;
    };
  }, []);

  const currentHub = HUBS[active];

  return (
    <section ref={sectionRef} className="gc-section position-relative" aria-labelledby="gr-title">
      <div className="bvm-arch-grid" aria-hidden="true" />
      <canvas ref={canvasRef} className="gc-canvas" aria-hidden="true" />

      <div className="container position-relative z-10">
        <div className="gc-grid">
          <header className="gc-head">
            <div className="who-badge d-inline-flex align-items-center gap-2 mb-3 who-anim-elem anim-reveal">
              <img src="/images/h.png" alt="Icon" />
              <span>GLOBAL PRESENCE &amp; DELIVERY</span>
            </div>

            <h2 id="gr-title" className="who-title text-white mb-3">
              <span className="services-line-mask">
                <span className="services-line-inner anim-text-reveal">Local engagement.</span>
              </span>
              <span className="services-line-mask">
                <span className="services-line-inner anim-text-reveal text-cyan-highlight headline-cyan">
                  Global engineering.
                </span>
              </span>
            </h2>

            <p className="presence-lead anim-reveal">
              Regional engagement in the UAE, international presence in the United Kingdom, and global
              engineering capability designed to scale with your business.
            </p>
          </header>

          <div className="gc-stage">
            <div ref={hitRef} className="gc-globe-hit" aria-hidden="true" />

            <div
              className="gc-mobile-switcher d-flex d-lg-none"
              role="tablist"
              aria-label="Focus globe region"
            >
              {HUBS.map((hub, i) => (
                <button
                  key={hub.title}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`gc-mobile-pill${hub.theme === "red" ? " is-red" : ""}${
                    active === i ? " is-active" : ""
                  }`}
                  onClick={() => select(i)}
                >
                  <span className="dot" aria-hidden="true" />
                  <span>{hub.shortLabel}</span>
                </button>
              ))}
            </div>

            <div
              className="gc-photos"
              onMouseEnter={() => hold(true)}
              onMouseLeave={() => hold(false)}
            >
              <div
                className={`gc-photo-plate${currentHub.theme === "red" ? " is-red" : ""}`}
                aria-hidden="true"
              />
              {HUBS.map((hub, i) => (
                <Link
                  key={hub.title}
                  href={hub.href}
                  className={`gc-photo gc-photo--${hub.theme}${active === i ? " is-on" : ""}`}
                  tabIndex={active === i ? 0 : -1}
                  aria-hidden={active !== i}
                >
                  <img src={hub.image} alt={hub.title} loading="lazy" decoding="async" />
                  <span className="gc-photo-tag">
                    <span className="gc-live" aria-hidden="true" />
                    {hub.badge}
                  </span>
                  <span className="gc-photo-go">
                    Explore Engagement
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <ul
            className={`gc-hubs${paused ? " is-paused" : ""}`}
            onMouseEnter={() => hold(true)}
            onMouseLeave={() => hold(false)}
          >
            {HUBS.map((hub, i) => (
              <li
                key={hub.title}
                className={`gc-hub gc-hub--${hub.theme}${active === i ? " is-active" : ""}`}
              >
                <Link
                  href={hub.href}
                  className="gc-hub-row"
                  onMouseEnter={() => select(i)}
                  onFocus={() => select(i)}
                >
                  <span className="gc-hub-node" aria-hidden="true">
                    <i className={`fa-solid ${hub.icon}`} />
                  </span>
                  <span className="gc-hub-main">
                    <span className="gc-hub-title">{hub.title}</span>
                    <span className="gc-hub-sub">{hub.subtitle}</span>
                  </span>
                  <span className="gc-hub-go" aria-hidden="true">
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
                <span className="gc-hub-bar" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>

        <div className="gc-models anim-reveal">
          <ul className="gc-models-list">
            {MODELS.map((m) => (
              <li key={m.label} className="gc-model">
                <span className="gc-model-ico" aria-hidden="true">
                  <i className={`fa-solid ${m.icon}`} />
                </span>
                <h3>{m.label}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}