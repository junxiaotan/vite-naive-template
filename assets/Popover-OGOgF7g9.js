import{f as Me,b9 as re,bJ as ut,i as j,A as ft,D as X,bz as Ge,bA as ke,bx as Je,j as P,bn as q,bo as K,k as te,d as oe,T as R,b8 as ht,bK as ct,Z as ce,bL as Oe,bM as pt,u as vt,Q as Z,R as G,W as je,m as x,bN as qe,bO as gt,S as mt,bP as bt,aF as Be,bQ as wt,bR as Ee,aG as ne,aU as Ce,aX as de,bS as yt,aP as Te,aS as $t,bT as xt,bU as Mt,aH as At,bV as St,bW as _t,bX as Qe,a$ as Ot,F as W,G as F,K as pe,J as ve,H as ue,bY as Bt,L as Et,O as Ae,bZ as Ct,a6 as Ve,$ as Pe,b_ as Tt,U as Pt,a2 as ze,Y as zt,bF as Ie,b$ as It,n as Lt,bm as ge,ai as Dt,bB as Ft,c0 as Le,c1 as Nt,c2 as Ht,bD as Wt,a0 as ie}from"./index-syH4dHxU.js";import{d as De,c as Fe,k as Ze}from"./Icon-kSyLQltD.js";import{c as Xt,t as Se,i as Re,g as Yt,b as Ut,f as me,u as Kt}from"./get-m5tNaJHE.js";let fe=[];const et=new WeakMap;function Gt(){fe.forEach(e=>e(...et.get(e))),fe=[]}function kt(e,...t){et.set(e,t),!fe.includes(e)&&fe.push(e)===1&&requestAnimationFrame(Gt)}let be;function Jt(){return be===void 0&&(be=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),be}let Q,ee;const jt=()=>{var e,t;Q=ut?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,ee=!1,Q!==void 0?Q.then(()=>{ee=!0}):ee=!0};jt();function qt(e){if(ee)return;let t=!1;Me(()=>{ee||Q==null||Q.then(()=>{t||e()})}),re(()=>{t=!0})}function Qt(e,t){return j(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const Vt=ft("n-internal-select-menu-body"),tt="__disabled__";function V(e){const t=X(Ge,null),n=X(ke,null),r=X(Je,null),i=X(Vt,null),o=P();if(typeof document<"u"){o.value=document.fullscreenElement;const s=()=>{o.value=document.fullscreenElement};Me(()=>{q("fullscreenchange",document,s)}),re(()=>{K("fullscreenchange",document,s)})}return te(()=>{var s;const{to:l}=e;return l!==void 0?l===!1?tt:l===!0?o.value||"body":l:t!=null&&t.value?(s=t.value.$el)!==null&&s!==void 0?s:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:i!=null&&i.value?i.value:l??(o.value||"body")})}V.tdkey=tt;V.propTo={type:[String,Object,Boolean],default:void 0};let H=null;function nt(){if(H===null&&(H=document.getElementById("v-binder-view-measurer"),H===null)){H=document.createElement("div"),H.id="v-binder-view-measurer";const{style:e}=H;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(H)}return H.getBoundingClientRect()}function Zt(e,t){const n=nt();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function we(e){const t=e.getBoundingClientRect(),n=nt();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Rt(e){return e.nodeType===9?null:e.parentNode}function rt(e){if(e===null)return null;const t=Rt(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+i+r))return t}return rt(t)}const en=oe({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;R("VBinder",(t=ht())===null||t===void 0?void 0:t.proxy);const n=X("VBinder",null),r=P(null),i=f=>{r.value=f,n&&e.syncTargetWithParent&&n.setTargetRef(f)};let o=[];const s=()=>{let f=r.value;for(;f=rt(f),f!==null;)o.push(f);for(const $ of o)q("scroll",$,b,!0)},l=()=>{for(const f of o)K("scroll",f,b,!0);o=[]},a=new Set,p=f=>{a.size===0&&s(),a.has(f)||a.add(f)},v=f=>{a.has(f)&&a.delete(f),a.size===0&&l()},b=()=>{kt(d)},d=()=>{a.forEach(f=>f())},c=new Set,g=f=>{c.size===0&&q("resize",window,y),c.has(f)||c.add(f)},u=f=>{c.has(f)&&c.delete(f),c.size===0&&K("resize",window,y)},y=()=>{c.forEach(f=>f())};return re(()=>{K("resize",window,y),l()}),{targetRef:r,setTargetRef:i,addScrollListener:p,removeScrollListener:v,addResizeListener:g,removeResizeListener:u}},render(){return ct("binder",this.$slots)}}),tn=en,nn=oe({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=X("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?ce(Oe("follower",this.$slots),[[t]]):Oe("follower",this.$slots)}}),J="@@mmoContext",rn={mounted(e,{value:t}){e[J]={handler:void 0},typeof t=="function"&&(e[J].handler=t,q("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[J];typeof t=="function"?n.handler?n.handler!==t&&(K("mousemoveoutside",e,n.handler),n.handler=t,q("mousemoveoutside",e,t)):(e[J].handler=t,q("mousemoveoutside",e,t)):n.handler&&(K("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[J];t&&K("mousemoveoutside",e,t),e[J].handler=void 0}},on=rn,{c:ae}=pt(),an="vueuc-style",le={top:"bottom",bottom:"top",left:"right",right:"left"},Ne={start:"end",center:"center",end:"start"},ye={top:"height",bottom:"height",left:"width",right:"width"},ln={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},sn={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},dn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},He={top:!0,bottom:!1,left:!0,right:!1},We={top:"end",bottom:"start",left:"end",right:"start"};function un(e,t,n,r,i,o){if(!i||o)return{placement:e,top:0,left:0};const[s,l]=e.split("-");let a=l??"center",p={top:0,left:0};const v=(c,g,u)=>{let y=0,f=0;const $=n[c]-t[g]-t[c];return $>0&&r&&(u?f=He[g]?$:-$:y=He[g]?$:-$),{left:y,top:f}},b=s==="left"||s==="right";if(a!=="center"){const c=dn[e],g=le[c],u=ye[c];if(n[u]>t[u]){if(t[c]+t[u]<n[u]){const y=(n[u]-t[u])/2;t[c]<y||t[g]<y?t[c]<t[g]?(a=Ne[l],p=v(u,g,b)):p=v(u,c,b):a="center"}}else n[u]<t[u]&&t[g]<0&&t[c]>t[g]&&(a=Ne[l])}else{const c=s==="bottom"||s==="top"?"left":"top",g=le[c],u=ye[c],y=(n[u]-t[u])/2;(t[c]<y||t[g]<y)&&(t[c]>t[g]?(a=We[c],p=v(u,c,b)):(a=We[g],p=v(u,g,b)))}let d=s;return t[s]<n[ye[s]]&&t[s]<t[le[s]]&&(d=le[s]),{placement:a!=="center"?`${d}-${a}`:d,left:p.left,top:p.top}}function fn(e,t){return t?sn[e]:ln[e]}function hn(e,t,n,r,i,o){if(o)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateX(-50%)"}}}const cn=ae([ae(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ae(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ae("> *",{pointerEvents:"all"})])]),pn=oe({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=X("VBinder"),n=te(()=>e.enabled!==void 0?e.enabled:e.show),r=P(null),i=P(null),o=()=>{const{syncTrigger:d}=e;d.includes("scroll")&&t.addScrollListener(a),d.includes("resize")&&t.addResizeListener(a)},s=()=>{t.removeScrollListener(a),t.removeResizeListener(a)};Me(()=>{n.value&&(a(),o())});const l=vt();cn.mount({id:"vueuc/binder",head:!0,anchorMetaName:an,ssr:l}),re(()=>{s()}),qt(()=>{n.value&&a()});const a=()=>{if(!n.value)return;const d=r.value;if(d===null)return;const c=t.targetRef,{x:g,y:u,overlap:y}=e,f=g!==void 0&&u!==void 0?Zt(g,u):we(c);d.style.setProperty("--v-target-width",`${Math.round(f.width)}px`),d.style.setProperty("--v-target-height",`${Math.round(f.height)}px`);const{width:$,minWidth:I,placement:O,internalShift:B,flip:Y}=e;d.setAttribute("v-placement",O),y?d.setAttribute("v-overlap",""):d.removeAttribute("v-overlap");const{style:m}=d;$==="target"?m.width=`${f.width}px`:$!==void 0?m.width=$:m.width="",I==="target"?m.minWidth=`${f.width}px`:I!==void 0?m.minWidth=I:m.minWidth="";const S=we(d),_=we(i.value),{left:w,top:N,placement:L}=un(O,f,S,B,Y,y),z=fn(L,y),{left:U,top:h,transform:M}=hn(L,_,f,N,w,y);d.setAttribute("v-placement",L),d.style.setProperty("--v-offset-left",`${Math.round(w)}px`),d.style.setProperty("--v-offset-top",`${Math.round(N)}px`),d.style.transform=`translateX(${U}) translateY(${h}) ${M}`,d.style.setProperty("--v-transform-origin",z),d.style.transformOrigin=z};Z(n,d=>{d?(o(),p()):s()});const p=()=>{mt().then(a).catch(d=>{})};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(d=>{Z(G(e,d),a)}),["teleportDisabled"].forEach(d=>{Z(G(e,d),p)}),Z(G(e,"syncTrigger"),d=>{d.includes("resize")?t.addResizeListener(a):t.removeResizeListener(a),d.includes("scroll")?t.addScrollListener(a):t.removeScrollListener(a)});const v=je(),b=te(()=>{const{to:d}=e;if(d!==void 0)return d;v.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:i,followerRef:r,mergedTo:b,syncPosition:a}},render(){return x(gt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=x("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[x("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?ce(n,[[qe,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var vn="__lodash_hash_undefined__";function gn(e){return this.__data__.set(e,vn),this}function mn(e){return this.__data__.has(e)}function he(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new bt;++t<n;)this.add(e[t])}he.prototype.add=he.prototype.push=gn;he.prototype.has=mn;function bn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function wn(e,t){return e.has(t)}var yn=1,$n=2;function ot(e,t,n,r,i,o){var s=n&yn,l=e.length,a=t.length;if(l!=a&&!(s&&a>l))return!1;var p=o.get(e),v=o.get(t);if(p&&v)return p==t&&v==e;var b=-1,d=!0,c=n&$n?new he:void 0;for(o.set(e,t),o.set(t,e);++b<l;){var g=e[b],u=t[b];if(r)var y=s?r(u,g,b,t,e,o):r(g,u,b,e,t,o);if(y!==void 0){if(y)continue;d=!1;break}if(c){if(!bn(t,function(f,$){if(!wn(c,$)&&(g===f||i(g,f,n,r,o)))return c.push($)})){d=!1;break}}else if(!(g===u||i(g,u,n,r,o))){d=!1;break}}return o.delete(e),o.delete(t),d}function xn(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}function Mn(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var An=1,Sn=2,_n="[object Boolean]",On="[object Date]",Bn="[object Error]",En="[object Map]",Cn="[object Number]",Tn="[object RegExp]",Pn="[object Set]",zn="[object String]",In="[object Symbol]",Ln="[object ArrayBuffer]",Dn="[object DataView]",Xe=Be?Be.prototype:void 0,$e=Xe?Xe.valueOf:void 0;function Fn(e,t,n,r,i,o,s){switch(n){case Dn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ln:return!(e.byteLength!=t.byteLength||!o(new Ee(e),new Ee(t)));case _n:case On:case Cn:return wt(+e,+t);case Bn:return e.name==t.name&&e.message==t.message;case Tn:case zn:return e==t+"";case En:var l=xn;case Pn:var a=r&An;if(l||(l=Mn),e.size!=t.size&&!a)return!1;var p=s.get(e);if(p)return p==t;r|=Sn,s.set(e,t);var v=ot(l(e),l(t),r,i,o,s);return s.delete(e),v;case In:if($e)return $e.call(e)==$e.call(t)}return!1}var Nn=1,Hn=Object.prototype,Wn=Hn.hasOwnProperty;function Xn(e,t,n,r,i,o){var s=n&Nn,l=De(e),a=l.length,p=De(t),v=p.length;if(a!=v&&!s)return!1;for(var b=a;b--;){var d=l[b];if(!(s?d in t:Wn.call(t,d)))return!1}var c=o.get(e),g=o.get(t);if(c&&g)return c==t&&g==e;var u=!0;o.set(e,t),o.set(t,e);for(var y=s;++b<a;){d=l[b];var f=e[d],$=t[d];if(r)var I=s?r($,f,d,t,e,o):r(f,$,d,e,t,o);if(!(I===void 0?f===$||i(f,$,n,r,o):I)){u=!1;break}y||(y=d=="constructor")}if(u&&!y){var O=e.constructor,B=t.constructor;O!=B&&"constructor"in e&&"constructor"in t&&!(typeof O=="function"&&O instanceof O&&typeof B=="function"&&B instanceof B)&&(u=!1)}return o.delete(e),o.delete(t),u}var Yn=1,Ye="[object Arguments]",Ue="[object Array]",se="[object Object]",Un=Object.prototype,Ke=Un.hasOwnProperty;function Kn(e,t,n,r,i,o){var s=ne(e),l=ne(t),a=s?Ue:Fe(e),p=l?Ue:Fe(t);a=a==Ye?se:a,p=p==Ye?se:p;var v=a==se,b=p==se,d=a==p;if(d&&Ce(e)){if(!Ce(t))return!1;s=!0,v=!1}if(d&&!v)return o||(o=new de),s||yt(e)?ot(e,t,n,r,i,o):Fn(e,t,a,n,r,i,o);if(!(n&Yn)){var c=v&&Ke.call(e,"__wrapped__"),g=b&&Ke.call(t,"__wrapped__");if(c||g){var u=c?e.value():e,y=g?t.value():t;return o||(o=new de),i(u,y,n,r,o)}}return d?(o||(o=new de),Xn(e,t,n,r,i,o)):!1}function _e(e,t,n,r,i){return e===t?!0:e==null||t==null||!Te(e)&&!Te(t)?e!==e&&t!==t:Kn(e,t,n,r,_e,i)}var Gn=1,kn=2;function Jn(e,t,n,r){var i=n.length,o=i,s=!r;if(e==null)return!o;for(e=Object(e);i--;){var l=n[i];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){l=n[i];var a=l[0],p=e[a],v=l[1];if(s&&l[2]){if(p===void 0&&!(a in e))return!1}else{var b=new de;if(r)var d=r(p,v,a,e,t,b);if(!(d===void 0?_e(v,p,Gn|kn,r,b):d))return!1}}return!0}function it(e){return e===e&&!$t(e)}function jn(e){for(var t=Ze(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,it(i)]}return t}function at(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function qn(e){var t=jn(e);return t.length==1&&t[0][2]?at(t[0][0],t[0][1]):function(n){return n===e||Jn(n,e,t)}}function Qn(e,t){return e!=null&&t in Object(e)}function Vn(e,t,n){t=Xt(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var s=Se(t[r]);if(!(o=e!=null&&n(e,s)))break;e=e[s]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&xt(i)&&Mt(s,i)&&(ne(e)||At(e)))}function Zn(e,t){return e!=null&&Vn(e,t,Qn)}var Rn=1,er=2;function tr(e,t){return Re(e)&&it(t)?at(Se(e),t):function(n){var r=Yt(n,e);return r===void 0&&r===t?Zn(n,e):_e(t,r,Rn|er)}}function nr(e){return function(t){return t==null?void 0:t[e]}}function rr(e){return function(t){return Ut(t,e)}}function or(e){return Re(e)?nr(Se(e)):rr(e)}function ir(e){return typeof e=="function"?e:e==null?St:typeof e=="object"?ne(e)?tr(e[0],e[1]):qn(e):or(e)}function ar(e,t){return e&&_t(e,t,Ze)}function lr(e,t){return function(n,r){if(n==null)return n;if(!Qe(n))return e(n,r);for(var i=n.length,o=t?i:-1,s=Object(n);(t?o--:++o<i)&&r(s[o],o,s)!==!1;);return n}}var sr=lr(ar);const dr=sr;function ur(e,t){var n=-1,r=Qe(e)?Array(e.length):[];return dr(e,function(i,o,s){r[++n]=t(i,o,s)}),r}function fr(e,t){var n=ne(e)?Ot:ur;return n(e,ir(t))}const xe={top:"bottom",bottom:"top",left:"right",right:"left"},A="var(--n-arrow-height) * 1.414",hr=W([F("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[W(">",[F("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),pe("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[pe("scrollable",[pe("show-header-or-footer","padding: var(--n-padding);")])]),ve("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ve("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ue("scrollable, show-header-or-footer",[ve("content",`
 padding: var(--n-padding);
 `)])]),F("popover-shared",`
 transform-origin: inherit;
 `,[F("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[F("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${A});
 height: calc(${A});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),W("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),W("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),W("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),W("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),T("top-start",`
 top: calc(${A} / -2);
 left: calc(${D("top-start")} - var(--v-offset-left));
 `),T("top",`
 top: calc(${A} / -2);
 transform: translateX(calc(${A} / -2)) rotate(45deg);
 left: 50%;
 `),T("top-end",`
 top: calc(${A} / -2);
 right: calc(${D("top-end")} + var(--v-offset-left));
 `),T("bottom-start",`
 bottom: calc(${A} / -2);
 left: calc(${D("bottom-start")} - var(--v-offset-left));
 `),T("bottom",`
 bottom: calc(${A} / -2);
 transform: translateX(calc(${A} / -2)) rotate(45deg);
 left: 50%;
 `),T("bottom-end",`
 bottom: calc(${A} / -2);
 right: calc(${D("bottom-end")} + var(--v-offset-left));
 `),T("left-start",`
 left: calc(${A} / -2);
 top: calc(${D("left-start")} - var(--v-offset-top));
 `),T("left",`
 left: calc(${A} / -2);
 transform: translateY(calc(${A} / -2)) rotate(45deg);
 top: 50%;
 `),T("left-end",`
 left: calc(${A} / -2);
 bottom: calc(${D("left-end")} + var(--v-offset-top));
 `),T("right-start",`
 right: calc(${A} / -2);
 top: calc(${D("right-start")} - var(--v-offset-top));
 `),T("right",`
 right: calc(${A} / -2);
 transform: translateY(calc(${A} / -2)) rotate(45deg);
 top: 50%;
 `),T("right-end",`
 right: calc(${A} / -2);
 bottom: calc(${D("right-end")} + var(--v-offset-top));
 `),...fr({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(i=>{const o=i.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${A}) / 2)`,a=D(i);return W(`[v-placement="${i}"] >`,[F("popover-shared",[ue("center-arrow",[F("popover-arrow",`${t}: calc(max(${l}, ${a}) ${o?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function D(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function T(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return W(`[v-placement="${e}"] >`,[F("popover-shared",`
 margin-${xe[n]}: var(--n-space);
 `,[ue("show-arrow",`
 margin-${xe[n]}: var(--n-space-arrow);
 `),ue("overlap",`
 margin: 0;
 `),Bt("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${xe[n]}: auto;
 ${r}
 `,[F("popover-arrow",t)])])])}const lt=Object.assign(Object.assign({},Ae.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),cr=({arrowStyle:e,clsPrefix:t})=>x("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},x("div",{class:`${t}-popover-arrow`,style:e})),pr=oe({name:"PopoverBody",inheritAttrs:!1,props:lt,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:o}=Et(e),s=Ae("Popover","-popover",hr,Ct,e,i),l=P(null),a=X("NPopover"),p=P(null),v=P(e.show),b=P(!1);Ve(()=>{const{show:m}=e;m&&!Jt()&&!e.internalDeactivateImmediately&&(b.value=!0)});const d=j(()=>{const{trigger:m,onClickoutside:S}=e,_=[],{positionManuallyRef:{value:w}}=a;return w||(m==="click"&&!S&&_.push([Pe,O,void 0,{capture:!0}]),m==="hover"&&_.push([on,I])),S&&_.push([Pe,O,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&b.value)&&_.push([Tt,e.show]),_}),c=j(()=>{const m=e.width==="trigger"?void 0:me(e.width),S=[];m&&S.push({width:m});const{maxWidth:_,minWidth:w}=e;return _&&S.push({maxWidth:me(_)}),w&&S.push({maxWidth:me(w)}),o||S.push(g.value),S}),g=j(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:S,cubicBezierEaseOut:_},self:{space:w,spaceArrow:N,padding:L,fontSize:z,textColor:U,dividerColor:h,color:M,boxShadow:E,borderRadius:k,arrowHeight:C,arrowOffset:st,arrowOffsetVertical:dt}}=s.value;return{"--n-box-shadow":E,"--n-bezier":m,"--n-bezier-ease-in":S,"--n-bezier-ease-out":_,"--n-font-size":z,"--n-text-color":U,"--n-color":M,"--n-divider-color":h,"--n-border-radius":k,"--n-arrow-height":C,"--n-arrow-offset":st,"--n-arrow-offset-vertical":dt,"--n-padding":L,"--n-space":w,"--n-space-arrow":N}}),u=o?Pt("popover",void 0,g,e):void 0;a.setBodyInstance({syncPosition:y}),re(()=>{a.setBodyInstance(null)}),Z(G(e,"show"),m=>{e.animated||(m?v.value=!0:v.value=!1)});function y(){var m;(m=l.value)===null||m===void 0||m.syncPosition()}function f(m){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&a.handleMouseEnter(m)}function $(m){e.trigger==="hover"&&e.keepAliveOnHover&&a.handleMouseLeave(m)}function I(m){e.trigger==="hover"&&!B().contains(ze(m))&&a.handleMouseMoveOutside(m)}function O(m){(e.trigger==="click"&&!B().contains(ze(m))||e.onClickoutside)&&a.handleClickOutside(m)}function B(){return a.getTriggerElement()}R(Je,p),R(ke,null),R(Ge,null);function Y(){if(u==null||u.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&b.value))return null;let S;const _=a.internalRenderBodyRef.value,{value:w}=i;if(_)S=_([`${w}-popover-shared`,u==null?void 0:u.themeClass.value,e.overlap&&`${w}-popover-shared--overlap`,e.showArrow&&`${w}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${w}-popover-shared--center-arrow`],p,c.value,f,$);else{const{value:N}=a.extraClassRef,{internalTrapFocus:L}=e,z=!Ie(t.header)||!Ie(t.footer),U=()=>{var h;const M=z?x(Dt,null,ge(t.header,C=>C?x("div",{class:`${w}-popover__header`,style:e.headerStyle},C):null),ge(t.default,C=>C?x("div",{class:`${w}-popover__content`,style:e.contentStyle},t):null),ge(t.footer,C=>C?x("div",{class:`${w}-popover__footer`,style:e.footerStyle},C):null)):e.scrollable?(h=t.default)===null||h===void 0?void 0:h.call(t):x("div",{class:`${w}-popover__content`,style:e.contentStyle},t),E=e.scrollable?x(Ft,{contentClass:z?void 0:`${w}-popover__content`,contentStyle:z?void 0:e.contentStyle},{default:()=>M}):M,k=e.showArrow?cr({arrowStyle:e.arrowStyle,clsPrefix:w}):null;return[E,k]};S=x("div",Lt({class:[`${w}-popover`,`${w}-popover-shared`,u==null?void 0:u.themeClass.value,N.map(h=>`${w}-${h}`),{[`${w}-popover--scrollable`]:e.scrollable,[`${w}-popover--show-header-or-footer`]:z,[`${w}-popover--raw`]:e.raw,[`${w}-popover-shared--overlap`]:e.overlap,[`${w}-popover-shared--show-arrow`]:e.showArrow,[`${w}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:p,style:c.value,onKeydown:a.handleKeydown,onMouseenter:f,onMouseleave:$},n),L?x(It,{active:e.show,autoFocus:!0},{default:U}):U())}return ce(S,d.value)}return{displayed:b,namespace:r,isMounted:a.isMountedRef,zIndex:a.zIndexRef,followerRef:l,adjustedTo:V(e),followerEnabled:v,renderContentNode:Y}},render(){return x(pn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?x(zt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),vr=Object.keys(lt),gr={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function mr(e,t,n){gr[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const i=e.props[r],o=n[r];i?e.props[r]=(...s)=>{i(...s),o(...s)}:e.props[r]=o})}const br={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},wr=Object.assign(Object.assign(Object.assign({},Ae.props),br),{internalOnAfterLeave:Function,internalRenderBody:Function}),Mr=oe({name:"Popover",inheritAttrs:!1,props:wr,__popover__:!0,setup(e){const t=je(),n=P(null),r=j(()=>e.show),i=P(e.defaultShow),o=Kt(r,i),s=te(()=>e.disabled?!1:o.value),l=()=>{if(e.disabled)return!0;const{getDisabled:h}=e;return!!(h!=null&&h())},a=()=>l()?!1:o.value,p=Qt(e,["arrow","showArrow"]),v=j(()=>e.overlap?!1:p.value);let b=null;const d=P(null),c=P(null),g=te(()=>e.x!==void 0&&e.y!==void 0);function u(h){const{"onUpdate:show":M,onUpdateShow:E,onShow:k,onHide:C}=e;i.value=h,M&&ie(M,h),E&&ie(E,h),h&&k&&ie(k,!0),h&&C&&ie(C,!1)}function y(){b&&b.syncPosition()}function f(){const{value:h}=d;h&&(window.clearTimeout(h),d.value=null)}function $(){const{value:h}=c;h&&(window.clearTimeout(h),c.value=null)}function I(){const h=l();if(e.trigger==="focus"&&!h){if(a())return;u(!0)}}function O(){const h=l();if(e.trigger==="focus"&&!h){if(!a())return;u(!1)}}function B(){const h=l();if(e.trigger==="hover"&&!h){if($(),d.value!==null||a())return;const M=()=>{u(!0),d.value=null},{delay:E}=e;E===0?M():d.value=window.setTimeout(M,E)}}function Y(){const h=l();if(e.trigger==="hover"&&!h){if(f(),c.value!==null||!a())return;const M=()=>{u(!1),c.value=null},{duration:E}=e;E===0?M():c.value=window.setTimeout(M,E)}}function m(){Y()}function S(h){var M;a()&&(e.trigger==="click"&&(f(),$(),u(!1)),(M=e.onClickoutside)===null||M===void 0||M.call(e,h))}function _(){if(e.trigger==="click"&&!l()){f(),$();const h=!a();u(h)}}function w(h){e.internalTrapFocus&&h.key==="Escape"&&(f(),$(),u(!1))}function N(h){i.value=h}function L(){var h;return(h=n.value)===null||h===void 0?void 0:h.targetRef}function z(h){b=h}return R("NPopover",{getTriggerElement:L,handleKeydown:w,handleMouseEnter:B,handleMouseLeave:Y,handleClickOutside:S,handleMouseMoveOutside:m,setBodyInstance:z,positionManuallyRef:g,isMountedRef:t,zIndexRef:G(e,"zIndex"),extraClassRef:G(e,"internalExtraClass"),internalRenderBodyRef:G(e,"internalRenderBody")}),Ve(()=>{o.value&&l()&&u(!1)}),{binderInstRef:n,positionManually:g,mergedShowConsideringDisabledProp:s,uncontrolledShow:i,mergedShowArrow:v,getMergedShow:a,setShow:N,handleClick:_,handleMouseEnter:B,handleMouseLeave:Y,handleFocus:I,handleBlur:O,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,i=!1;if(!t&&(n.activator?r=Le(n,"activator"):r=Le(n,"trigger"),r)){r=Nt(r),r=r.type===Ht?x("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)i=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,l=[o,...s],a={onBlur:p=>{l.forEach(v=>{v.onBlur(p)})},onFocus:p=>{l.forEach(v=>{v.onFocus(p)})},onClick:p=>{l.forEach(v=>{v.onClick(p)})},onMouseenter:p=>{l.forEach(v=>{v.onMouseenter(p)})},onMouseleave:p=>{l.forEach(v=>{v.onMouseleave(p)})}};mr(r,s?"nested":t?"manual":this.trigger,a)}}return x(tn,{ref:"binderInstRef",syncTarget:!i,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?ce(x("div",{style:{position:"fixed",inset:0}}),[[qe,{enabled:o,zIndex:this.zIndex}]]):null,t?null:x(nn,null,{default:()=>r}),x(pr,Wt(this.$props,vr,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,l;return(l=(s=this.$slots).default)===null||l===void 0?void 0:l.call(s)},header:()=>{var s,l;return(l=(s=this.$slots).header)===null||l===void 0?void 0:l.call(s)},footer:()=>{var s,l;return(l=(s=this.$slots).footer)===null||l===void 0?void 0:l.call(s)}})]}})}});export{Mr as N,tn as V,ae as a,kt as b,an as c,nn as d,pn as e,Qt as f,br as p,cr as r,V as u};
