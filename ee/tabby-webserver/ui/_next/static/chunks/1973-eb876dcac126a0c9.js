(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1973],{14375:function(t,e,n){"use strict";n.d(e,{j:function(){return o}});let r=t=>"boolean"==typeof t?"".concat(t):0===t?"0":t,i=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.flat(1/0).filter(Boolean).join(" ")},o=(t,e)=>n=>{var o;if((null==e?void 0:e.variants)==null)return i(t,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:u}=e,c=Object.keys(a).map(t=>{let e=null==n?void 0:n[t],i=null==u?void 0:u[t];if(null===e)return null;let o=r(e)||r(i);return a[t][o]}),l=n&&Object.entries(n).reduce((t,e)=>{let[n,r]=e;return void 0===r||(t[n]=r),t},{}),s=null==e?void 0:null===(o=e.compoundVariants)||void 0===o?void 0:o.reduce((t,e)=>{let{class:n,className:r,...i}=e;return Object.entries(i).every(t=>{let[e,n]=t;return Array.isArray(n)?n.includes({...u,...l}[e]):({...u,...l})[e]===n})?[...t,n,r]:t},[]);return i(t,c,s,null==n?void 0:n.class,null==n?void 0:n.className)}},61200:function(t,e,n){"use strict";var r=n(90275),i={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,o,a,u,c,l,s,f,d=!1;e||(e={}),a=e.debug||!1;try{if(c=r(),l=document.createRange(),s=document.getSelection(),(f=document.createElement("span")).textContent=t,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(n){if(n.stopPropagation(),e.format){if(n.preventDefault(),void 0===n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=i[e.format]||i.default;window.clipboardData.setData(r,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t)}e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))}),document.body.appendChild(f),l.selectNodeContents(f),s.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(r){a&&console.error("unable to copy using execCommand: ",r),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(r){a&&console.error("unable to copy using clipboardData: ",r),a&&console.error("falling back to prompt"),n="message"in e?e.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",u=n.replace(/#{\s*key\s*}/g,o),window.prompt(u,t)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),f&&document.body.removeChild(f),c()}return d}},21644:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(3546),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(t,e)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:a=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:l="",children:s,...f},d)=>(0,r.createElement)("svg",{ref:d,...i,width:a,height:a,stroke:n,strokeWidth:c?24*Number(u)/Number(a):u,className:["lucide",`lucide-${o(t)}`,l].join(" "),...f},[...e.map(([t,e])=>(0,r.createElement)(t,e)),...Array.isArray(s)?s:[s]]));return n.displayName=`${t}`,n}},67960:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]])},83048:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]])},40327:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]])},71371:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]])},70418:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},93170:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},12303:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]])},63410:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(21644);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},90275:function(t){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach(function(e){t.addRange(e)}),e&&e.focus()}}},72205:function(t,e,n){"use strict";n.d(e,{WV:function(){return u},jH:function(){return c}});var r=n(65122),i=n(3546),o=n(30171),a=n(74047);let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((t,e)=>{let n=(0,i.forwardRef)((t,n)=>{let{asChild:o,...u}=t,c=o?a.g7:e;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(c,(0,r.Z)({},u,{ref:n}))});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function c(t,e){t&&(0,o.flushSync)(()=>t.dispatchEvent(e))}},74225:function(t,e,n){"use strict";n.d(e,{f:function(){return s}});var r=n(65122),i=n(3546),o=n(72205);let a="horizontal",u=["horizontal","vertical"],c=(0,i.forwardRef)((t,e)=>{let{decorative:n,orientation:u=a,...c}=t,s=l(u)?u:a;return(0,i.createElement)(o.WV.div,(0,r.Z)({"data-orientation":s},n?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},c,{ref:e}))});function l(t){return u.includes(t)}c.propTypes={orientation(t,e,n){let r=t[e],i=String(r);return r&&!l(r)?Error(`Invalid prop \`orientation\` of value \`${i}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${a}\`.`):null}};let s=c},74913:function(t,e,n){"use strict";var r=n(27015);e.Z=function(t,e,n){"__proto__"==e&&r.Z?(0,r.Z)(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},7100:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r,i=function(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i];e(r,a,n(a),t)}return r},o=function(t,e,n){for(var r=-1,i=Object(t),o=n(t),a=o.length;a--;){var u=o[++r];if(!1===e(i[u],u,i))break}return t},a=n(70014),u=n(20568),c=function(t,e){if(null==t)return t;if(!(0,u.Z)(t))return t&&o(t,e,a.Z);for(var n=t.length,i=r?n:-1,c=Object(t);(r?i--:++i<n)&&!1!==e(c[i],i,c););return t},l=function(t,e,n,r){return c(t,function(t,i,o){e(r,t,n(t),o)}),r},s=n(90830),f=n(38813),d=function(t,e){return function(n,r){var o=(0,f.Z)(n)?i:l,a=e?e():{};return o(n,t,(0,s.Z)(r,2),a)}}},27015:function(t,e,n){"use strict";var r=n(47404),i=function(){try{var t=(0,r.Z)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();e.Z=i},45391:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(84639),i=n(48717),o=function(){return i.Z.Date.now()},a=n(59348),u=Math.max,c=Math.min,l=function(t,e,n){var i,l,s,f,d,p,v=0,m=!1,y=!1,h=!0;if("function"!=typeof t)throw TypeError("Expected a function");function b(e){var n=i,r=l;return i=l=void 0,v=e,f=t.apply(r,n)}function g(t){var n=t-p,r=t-v;return void 0===p||n>=e||n<0||y&&r>=s}function k(){var t,n,r,i=o();if(g(i))return Z(i);d=setTimeout(k,(t=i-p,n=i-v,r=e-t,y?c(r,s-n):r))}function Z(t){return(d=void 0,h&&i)?b(t):(i=l=void 0,f)}function w(){var t,n=o(),r=g(n);if(i=arguments,l=this,p=n,r){if(void 0===d)return v=t=p,d=setTimeout(k,e),m?b(t):f;if(y)return clearTimeout(d),d=setTimeout(k,e),b(p)}return void 0===d&&(d=setTimeout(k,e)),f}return e=(0,a.Z)(e)||0,(0,r.Z)(n)&&(m=!!n.leading,s=(y="maxWait"in n)?u((0,a.Z)(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==d&&clearTimeout(d),v=0,i=p=l=d=void 0},w.flush=function(){return void 0===d?f:Z(o())},w}},78007:function(t,e,n){"use strict";var r=n(74913),i=n(7100),o=Object.prototype.hasOwnProperty,a=(0,i.Z)(function(t,e,n){o.call(t,n)?t[n].push(e):(0,r.Z)(t,n,[e])});e.Z=a},71480:function(t,e){"use strict";e.Z=function(){}},35814:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=function(t,e){for(var n,r=-1,i=t.length;++r<i;){var o=e(t[r]);void 0!==o&&(n=void 0===n?o:n+o)}return n},i=n(11403),o=function(t){return t&&t.length?r(t,i.Z):0}},91655:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});let r=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],a=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],u=(t,e,n)=>{let r=t;return"string"==typeof e||Array.isArray(e)?r=t.toLocaleString(e,n):(!0===e||void 0!==n)&&(r=t.toLocaleString(void 0,n)),r};function c(t,e){let n;if(!Number.isFinite(t))throw TypeError(`Expected a finite number, got ${typeof t}: ${t}`);e={bits:!1,binary:!1,space:!0,...e};let c=e.bits?e.binary?a:o:e.binary?i:r,l=e.space?" ":"";if(e.signed&&0===t)return` 0${l}${c[0]}`;let s=t<0,f=s?"-":e.signed?"+":"";if(s&&(t=-t),void 0!==e.minimumFractionDigits&&(n={minimumFractionDigits:e.minimumFractionDigits}),void 0!==e.maximumFractionDigits&&(n={maximumFractionDigits:e.maximumFractionDigits,...n}),t<1){let r=u(t,e.locale,n);return f+r+l+c[0]}let d=Math.min(Math.floor(e.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),c.length-1);t/=(e.binary?1024:1e3)**d,n||(t=t.toPrecision(3));let p=u(Number(t),e.locale,n),v=c[d];return f+p+l+v}}}]);