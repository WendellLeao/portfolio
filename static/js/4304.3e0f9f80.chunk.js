"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[4304],{4304:(t,i,o)=>{o.d(i,{Connector:()=>l});var n=o(4409);class e{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class s{constructor(){this.distance=80,this.links=new e,this.radius=60}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links),void 0!==t.radius&&(this.radius=t.radius))}}const a=0,c=1;function r(t,i,o,e){const s=t.actualOptions.interactivity.modes.connect;if(s)return function(t,i,o,e){const s=Math.floor(o.getRadius()/i.getRadius()),r=i.getFillColor(),d=o.getFillColor();if(!r||!d)return;const l=i.getPosition(),u=o.getPosition(),h=(0,n.EY)(r,d,i.getRadius(),o.getRadius()),p=t.createLinearGradient(l.x,l.y,u.x,u.y);return p.addColorStop(a,(0,n.LC)(r,e)),p.addColorStop((0,n.qE)(s,a,c),(0,n.xx)(h,e)),p.addColorStop(c,(0,n.LC)(d,e)),p}(i,o,e,s.links.opacity)}function d(t,i,o){t.canvas.draw((e=>{const s=r(t,e,i,o);if(!s)return;const a=i.getPosition(),c=o.getPosition();!function(t,i,o,e,s){(0,n.V6)(t,e,s),t.lineWidth=i,t.strokeStyle=o,t.stroke()}(e,i.retina.linksWidth??0,s,a,c)}))}class l extends n.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){const i=t.interactivity.mouse.position,{connectModeDistance:o,connectModeRadius:n}=t.retina;if(!o||o<0||!n||n<0||!i)return;const e=Math.abs(n),s=t.particles.quadTree.queryCircle(i,e,(t=>this.isEnabled(t)));s.forEach(((i,n)=>{const e=i.getPosition();for(const a of s.slice(n+1)){const n=a.getPosition(),s=Math.abs(o),c=Math.abs(e.x-n.x),r=Math.abs(e.y-n.y);c<s&&r<s&&d(t,i,a)}}))}}isEnabled(t){const i=this.container,o=i.interactivity.mouse,e=(t?.interactivity??i.actualOptions.interactivity).events;return!(!e.onHover.enable||!o.position)&&(0,n.hn)("connect",e.onHover.mode)}loadModeOptions(t,...i){t.connect||(t.connect=new s);for(const o of i)t.connect.load(o?.connect)}reset(){}}}}]);
//# sourceMappingURL=4304.3e0f9f80.chunk.js.map