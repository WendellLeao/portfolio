"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[231],{231:(o,t,e)=>{e.d(t,{StrokeColorUpdater:()=>r});var i=e(4409);class r{constructor(o){this.container=o}init(o){const t=this.container,e=o.options,r=(0,i.TA)(e.stroke,o.id,e.reduceDuplicates);o.strokeWidth=(0,i.VG)(r.width)*t.retina.pixelRatio,o.strokeOpacity=(0,i.VG)(r.opacity??1),o.strokeAnimation=r.color?.animation;const a=(0,i.R5)(r.color)??o.getFillColor();a&&(o.strokeColor=(0,i.pz)(a,o.strokeAnimation,t.retina.reduceFactor))}isEnabled(o){const t=o.strokeAnimation,{strokeColor:e}=o;return!o.destroyed&&!o.spawning&&!!t&&(void 0!==e?.h.value&&e.h.enable||void 0!==e?.s.value&&e.s.enable||void 0!==e?.l.value&&e.l.enable)}update(o,t){this.isEnabled(o)&&(0,i.Jv)(o.strokeColor,t)}}}}]);
//# sourceMappingURL=231.6a34a632.chunk.js.map