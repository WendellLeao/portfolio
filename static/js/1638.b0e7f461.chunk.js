"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[1638],{1638:(e,t,o)=>{o.d(t,{EmojiDrawer:()=>s});var a=o(4409);var i=o(6682);const n='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class s{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(t?.close(),this._emojiShapeDict.delete(e))}draw(e){!function(e){const{context:t,particle:o,radius:a,opacity:i}=e,n=o.emojiData,s=2*a,l=t.globalAlpha;n&&(t.globalAlpha=i,t.drawImage(n,-a,-a,s,s),t.globalAlpha=l)}(e)}async init(e){const t=e.actualOptions;if(!i.u.find((e=>(0,a.hn)(e,t.particles.shape.type))))return;const o=[(0,a.Al)(n)],s=i.u.map((e=>t.particles.shape.options[e])).find((e=>!!e));s&&(0,a.wJ)(s,(e=>{e.font&&o.push((0,a.Al)(e.font))})),await Promise.all(o)}particleDestroy(e){delete e.emojiData}particleInit(e,t){const o=t.shapeData;if(!o?.value)return;const i=(0,a.TA)(o.value,t.randomIndexData),s=o.font??n;if(!i)return;const l=`${i}_${s}`,r=this._emojiShapeDict.get(l);if(r)return void(t.emojiData=r);const c=2*(0,a.W9)(t.size.value);let p;const f=(0,a.W9)(t.size.value);if("undefined"!==typeof OffscreenCanvas){const e=new OffscreenCanvas(c,c),t=e.getContext("2d");if(!t)return;t.font=`400 ${2*f}px ${s}`,t.textBaseline="middle",t.textAlign="center",t.fillText(i,f,f),p=e.transferToImageBitmap()}else{const e=document.createElement("canvas");e.width=c,e.height=c;const t=e.getContext("2d");if(!t)return;t.font=`400 ${2*f}px ${s}`,t.textBaseline="middle",t.textAlign="center",t.fillText(i,f,f),p=e}this._emojiShapeDict.set(l,p),t.emojiData=p}}}}]);
//# sourceMappingURL=1638.b0e7f461.chunk.js.map