import{f as Me,b9 as re,bJ as fn,i as j,A as hn,D as X,bz as Ge,bA as ke,bx as Je,j as T,bn as q,bo as U,k as ne,d as oe,T as R,b8 as cn,bK as pn,Z as ce,bL as Oe,bM as vn,u as gn,Q as Z,R as K,W as je,m as M,bN as qe,bO as mn,S as bn,bP as wn,aF as Be,bQ as yn,bR as Ee,aG as te,aU as Ce,aX as de,bS as $n,aP as Te,aS as xn,bT as Mn,bU as An,aH as Sn,bV as _n,bW as On,bX as Qe,a$ as Bn,F as W,G as F,K as pe,J as ve,H as ue,bY as En,L as Cn,O as Ae,bZ as Tn,a6 as Ve,$ as Pe,b_ as Pn,U as zn,a2 as ze,Y as In,bF as Ie,b$ as Ln,n as Dn,bm as ge,ai as Fn,bB as Nn,c0 as Le,c1 as Hn,c2 as Wn,bD as Xn,a0 as ie}from"./index-fb10a317.js";import{d as De,c as Fe,k as Ze}from"./Icon-58e81bad.js";import{c as Yn,t as Se,i as Re,g as Un,b as Kn,f as me,u as Gn}from"./get-32a02e71.js";let fe=[];const en=new WeakMap;function kn(){fe.forEach(e=>e(...en.get(e))),fe=[]}function Jn(e,...n){en.set(e,n),!fe.includes(e)&&fe.push(e)===1&&requestAnimationFrame(kn)}let be;function jn(){return be===void 0&&(be=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),be}let Q,ee;const qn=()=>{var e,n;Q=fn?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,ee=!1,Q!==void 0?Q.then(()=>{ee=!0}):ee=!0};qn();function Qn(e){if(ee)return;let n=!1;Me(()=>{ee||Q==null||Q.then(()=>{n||e()})}),re(()=>{n=!0})}function Vn(e,n){return j(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const Zn=hn("n-internal-select-menu-body"),nn="__disabled__";function V(e){const n=X(Ge,null),t=X(ke,null),r=X(Je,null),i=X(Zn,null),o=T();if(typeof document<"u"){o.value=document.fullscreenElement;const s=()=>{o.value=document.fullscreenElement};Me(()=>{q("fullscreenchange",document,s)}),re(()=>{U("fullscreenchange",document,s)})}return ne(()=>{var s;const{to:l}=e;return l!==void 0?l===!1?nn:l===!0?o.value||"body":l:n!=null&&n.value?(s=n.value.$el)!==null&&s!==void 0?s:n.value:t!=null&&t.value?t.value:r!=null&&r.value?r.value:i!=null&&i.value?i.value:l??(o.value||"body")})}V.tdkey=nn;V.propTo={type:[String,Object,Boolean],default:void 0};let H=null;function tn(){if(H===null&&(H=document.getElementById("v-binder-view-measurer"),H===null)){H=document.createElement("div"),H.id="v-binder-view-measurer";const{style:e}=H;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(H)}return H.getBoundingClientRect()}function Rn(e,n){const t=tn();return{top:n,left:e,height:0,width:0,right:t.width-e,bottom:t.height-n}}function we(e){const n=e.getBoundingClientRect(),t=tn();return{left:n.left-t.left,top:n.top-t.top,bottom:t.height+t.top-n.bottom,right:t.width+t.left-n.right,width:n.width,height:n.height}}function et(e){return e.nodeType===9?null:e.parentNode}function rn(e){if(e===null)return null;const n=et(e);if(n===null)return null;if(n.nodeType===9)return document;if(n.nodeType===1){const{overflow:t,overflowX:r,overflowY:i}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(t+i+r))return n}return rn(n)}const nt=oe({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var n;R("VBinder",(n=cn())===null||n===void 0?void 0:n.proxy);const t=X("VBinder",null),r=T(null),i=f=>{r.value=f,t&&e.syncTargetWithParent&&t.setTargetRef(f)};let o=[];const s=()=>{let f=r.value;for(;f=rn(f),f!==null;)o.push(f);for(const $ of o)q("scroll",$,b,!0)},l=()=>{for(const f of o)U("scroll",f,b,!0);o=[]},a=new Set,c=f=>{a.size===0&&s(),a.has(f)||a.add(f)},v=f=>{a.has(f)&&a.delete(f),a.size===0&&l()},b=()=>{Jn(d)},d=()=>{a.forEach(f=>f())},h=new Set,g=f=>{h.size===0&&q("resize",window,y),h.has(f)||h.add(f)},u=f=>{h.has(f)&&h.delete(f),h.size===0&&U("resize",window,y)},y=()=>{h.forEach(f=>f())};return re(()=>{U("resize",window,y),l()}),{targetRef:r,setTargetRef:i,addScrollListener:c,removeScrollListener:v,addResizeListener:g,removeResizeListener:u}},render(){return pn("binder",this.$slots)}}),tt=nt,rt=oe({name:"Target",setup(){const{setTargetRef:e,syncTarget:n}=X("VBinder");return{syncTarget:n,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:n}=this;return e?ce(Oe("follower",this.$slots),[[n]]):Oe("follower",this.$slots)}}),J="@@mmoContext",ot={mounted(e,{value:n}){e[J]={handler:void 0},typeof n=="function"&&(e[J].handler=n,q("mousemoveoutside",e,n))},updated(e,{value:n}){const t=e[J];typeof n=="function"?t.handler?t.handler!==n&&(U("mousemoveoutside",e,t.handler),t.handler=n,q("mousemoveoutside",e,n)):(e[J].handler=n,q("mousemoveoutside",e,n)):t.handler&&(U("mousemoveoutside",e,t.handler),t.handler=void 0)},unmounted(e){const{handler:n}=e[J];n&&U("mousemoveoutside",e,n),e[J].handler=void 0}},it=ot,{c:ae}=vn(),at="vueuc-style",le={top:"bottom",bottom:"top",left:"right",right:"left"},Ne={start:"end",center:"center",end:"start"},ye={top:"height",bottom:"height",left:"width",right:"width"},lt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},st={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},dt={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},He={top:!0,bottom:!1,left:!0,right:!1},We={top:"end",bottom:"start",left:"end",right:"start"};function ut(e,n,t,r,i,o){if(!i||o)return{placement:e,top:0,left:0};const[s,l]=e.split("-");let a=l??"center",c={top:0,left:0};const v=(h,g,u)=>{let y=0,f=0;const $=t[h]-n[g]-n[h];return $>0&&r&&(u?f=He[g]?$:-$:y=He[g]?$:-$),{left:y,top:f}},b=s==="left"||s==="right";if(a!=="center"){const h=dt[e],g=le[h],u=ye[h];if(t[u]>n[u]){if(n[h]+n[u]<t[u]){const y=(t[u]-n[u])/2;n[h]<y||n[g]<y?n[h]<n[g]?(a=Ne[l],c=v(u,g,b)):c=v(u,h,b):a="center"}}else t[u]<n[u]&&n[g]<0&&n[h]>n[g]&&(a=Ne[l])}else{const h=s==="bottom"||s==="top"?"left":"top",g=le[h],u=ye[h],y=(t[u]-n[u])/2;(n[h]<y||n[g]<y)&&(n[h]>n[g]?(a=We[h],c=v(u,h,b)):(a=We[g],c=v(u,g,b)))}let d=s;return n[s]<t[ye[s]]&&n[s]<n[le[s]]&&(d=le[s]),{placement:a!=="center"?`${d}-${a}`:d,left:c.left,top:c.top}}function ft(e,n){return n?st[e]:lt[e]}function ht(e,n,t,r,i,o){if(o)switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2)}px`,left:`${Math.round(t.left-n.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height)}px`,left:`${Math.round(t.left-n.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-n.top+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+t.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-n.top+t.height/2+r)}px`,left:`${Math.round(t.left-n.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-n.top+t.height+r)}px`,left:`${Math.round(t.left-n.left+t.width/2+i)}px`,transform:"translateX(-50%)"}}}const ct=ae([ae(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),ae(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[ae("> *",{pointerEvents:"all"})])]),pt=oe({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const n=X("VBinder"),t=ne(()=>e.enabled!==void 0?e.enabled:e.show),r=T(null),i=T(null),o=()=>{const{syncTrigger:d}=e;d.includes("scroll")&&n.addScrollListener(a),d.includes("resize")&&n.addResizeListener(a)},s=()=>{n.removeScrollListener(a),n.removeResizeListener(a)};Me(()=>{t.value&&(a(),o())});const l=gn();ct.mount({id:"vueuc/binder",head:!0,anchorMetaName:at,ssr:l}),re(()=>{s()}),Qn(()=>{t.value&&a()});const a=()=>{if(!t.value)return;const d=r.value;if(d===null)return;const h=n.targetRef,{x:g,y:u,overlap:y}=e,f=g!==void 0&&u!==void 0?Rn(g,u):we(h);d.style.setProperty("--v-target-width",`${Math.round(f.width)}px`),d.style.setProperty("--v-target-height",`${Math.round(f.height)}px`);const{width:$,minWidth:z,placement:B,internalShift:E,flip:Y}=e;d.setAttribute("v-placement",B),y?d.setAttribute("v-overlap",""):d.removeAttribute("v-overlap");const{style:m}=d;$==="target"?m.width=`${f.width}px`:$!==void 0?m.width=$:m.width="",z==="target"?m.minWidth=`${f.width}px`:z!==void 0?m.minWidth=z:m.minWidth="";const S=we(d),_=we(i.value),{left:w,top:N,placement:I}=ut(B,f,S,E,Y,y),P=ft(I,y),{left:p,top:x,transform:O}=ht(I,_,f,N,w,y);d.setAttribute("v-placement",I),d.style.setProperty("--v-offset-left",`${Math.round(w)}px`),d.style.setProperty("--v-offset-top",`${Math.round(N)}px`),d.style.transform=`translateX(${p}) translateY(${x}) ${O}`,d.style.setProperty("--v-transform-origin",P),d.style.transformOrigin=P};Z(t,d=>{d?(o(),c()):s()});const c=()=>{bn().then(a).catch(d=>{})};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(d=>{Z(K(e,d),a)}),["teleportDisabled"].forEach(d=>{Z(K(e,d),c)}),Z(K(e,"syncTrigger"),d=>{d.includes("resize")?n.addResizeListener(a):n.removeResizeListener(a),d.includes("scroll")?n.addScrollListener(a):n.removeScrollListener(a)});const v=je(),b=ne(()=>{const{to:d}=e;if(d!==void 0)return d;v.value});return{VBinder:n,mergedEnabled:t,offsetContainerRef:i,followerRef:r,mergedTo:b,syncPosition:a}},render(){return M(mn,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,n;const t=M("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[M("div",{class:"v-binder-follower-content",ref:"followerRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))]);return this.zindexable?ce(t,[[qe,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});var vt="__lodash_hash_undefined__";function gt(e){return this.__data__.set(e,vt),this}function mt(e){return this.__data__.has(e)}function he(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new wn;++n<t;)this.add(e[n])}he.prototype.add=he.prototype.push=gt;he.prototype.has=mt;function bt(e,n){for(var t=-1,r=e==null?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1}function wt(e,n){return e.has(n)}var yt=1,$t=2;function on(e,n,t,r,i,o){var s=t&yt,l=e.length,a=n.length;if(l!=a&&!(s&&a>l))return!1;var c=o.get(e),v=o.get(n);if(c&&v)return c==n&&v==e;var b=-1,d=!0,h=t&$t?new he:void 0;for(o.set(e,n),o.set(n,e);++b<l;){var g=e[b],u=n[b];if(r)var y=s?r(u,g,b,n,e,o):r(g,u,b,e,n,o);if(y!==void 0){if(y)continue;d=!1;break}if(h){if(!bt(n,function(f,$){if(!wt(h,$)&&(g===f||i(g,f,t,r,o)))return h.push($)})){d=!1;break}}else if(!(g===u||i(g,u,t,r,o))){d=!1;break}}return o.delete(e),o.delete(n),d}function xt(e){var n=-1,t=Array(e.size);return e.forEach(function(r,i){t[++n]=[i,r]}),t}function Mt(e){var n=-1,t=Array(e.size);return e.forEach(function(r){t[++n]=r}),t}var At=1,St=2,_t="[object Boolean]",Ot="[object Date]",Bt="[object Error]",Et="[object Map]",Ct="[object Number]",Tt="[object RegExp]",Pt="[object Set]",zt="[object String]",It="[object Symbol]",Lt="[object ArrayBuffer]",Dt="[object DataView]",Xe=Be?Be.prototype:void 0,$e=Xe?Xe.valueOf:void 0;function Ft(e,n,t,r,i,o,s){switch(t){case Dt:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Lt:return!(e.byteLength!=n.byteLength||!o(new Ee(e),new Ee(n)));case _t:case Ot:case Ct:return yn(+e,+n);case Bt:return e.name==n.name&&e.message==n.message;case Tt:case zt:return e==n+"";case Et:var l=xt;case Pt:var a=r&At;if(l||(l=Mt),e.size!=n.size&&!a)return!1;var c=s.get(e);if(c)return c==n;r|=St,s.set(e,n);var v=on(l(e),l(n),r,i,o,s);return s.delete(e),v;case It:if($e)return $e.call(e)==$e.call(n)}return!1}var Nt=1,Ht=Object.prototype,Wt=Ht.hasOwnProperty;function Xt(e,n,t,r,i,o){var s=t&Nt,l=De(e),a=l.length,c=De(n),v=c.length;if(a!=v&&!s)return!1;for(var b=a;b--;){var d=l[b];if(!(s?d in n:Wt.call(n,d)))return!1}var h=o.get(e),g=o.get(n);if(h&&g)return h==n&&g==e;var u=!0;o.set(e,n),o.set(n,e);for(var y=s;++b<a;){d=l[b];var f=e[d],$=n[d];if(r)var z=s?r($,f,d,n,e,o):r(f,$,d,e,n,o);if(!(z===void 0?f===$||i(f,$,t,r,o):z)){u=!1;break}y||(y=d=="constructor")}if(u&&!y){var B=e.constructor,E=n.constructor;B!=E&&"constructor"in e&&"constructor"in n&&!(typeof B=="function"&&B instanceof B&&typeof E=="function"&&E instanceof E)&&(u=!1)}return o.delete(e),o.delete(n),u}var Yt=1,Ye="[object Arguments]",Ue="[object Array]",se="[object Object]",Ut=Object.prototype,Ke=Ut.hasOwnProperty;function Kt(e,n,t,r,i,o){var s=te(e),l=te(n),a=s?Ue:Fe(e),c=l?Ue:Fe(n);a=a==Ye?se:a,c=c==Ye?se:c;var v=a==se,b=c==se,d=a==c;if(d&&Ce(e)){if(!Ce(n))return!1;s=!0,v=!1}if(d&&!v)return o||(o=new de),s||$n(e)?on(e,n,t,r,i,o):Ft(e,n,a,t,r,i,o);if(!(t&Yt)){var h=v&&Ke.call(e,"__wrapped__"),g=b&&Ke.call(n,"__wrapped__");if(h||g){var u=h?e.value():e,y=g?n.value():n;return o||(o=new de),i(u,y,t,r,o)}}return d?(o||(o=new de),Xt(e,n,t,r,i,o)):!1}function _e(e,n,t,r,i){return e===n?!0:e==null||n==null||!Te(e)&&!Te(n)?e!==e&&n!==n:Kt(e,n,t,r,_e,i)}var Gt=1,kt=2;function Jt(e,n,t,r){var i=t.length,o=i,s=!r;if(e==null)return!o;for(e=Object(e);i--;){var l=t[i];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){l=t[i];var a=l[0],c=e[a],v=l[1];if(s&&l[2]){if(c===void 0&&!(a in e))return!1}else{var b=new de;if(r)var d=r(c,v,a,e,n,b);if(!(d===void 0?_e(v,c,Gt|kt,r,b):d))return!1}}return!0}function an(e){return e===e&&!xn(e)}function jt(e){for(var n=Ze(e),t=n.length;t--;){var r=n[t],i=e[r];n[t]=[r,i,an(i)]}return n}function ln(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}function qt(e){var n=jt(e);return n.length==1&&n[0][2]?ln(n[0][0],n[0][1]):function(t){return t===e||Jt(t,e,n)}}function Qt(e,n){return e!=null&&n in Object(e)}function Vt(e,n,t){n=Yn(n,e);for(var r=-1,i=n.length,o=!1;++r<i;){var s=Se(n[r]);if(!(o=e!=null&&t(e,s)))break;e=e[s]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&Mn(i)&&An(s,i)&&(te(e)||Sn(e)))}function Zt(e,n){return e!=null&&Vt(e,n,Qt)}var Rt=1,er=2;function nr(e,n){return Re(e)&&an(n)?ln(Se(e),n):function(t){var r=Un(t,e);return r===void 0&&r===n?Zt(t,e):_e(n,r,Rt|er)}}function tr(e){return function(n){return n==null?void 0:n[e]}}function rr(e){return function(n){return Kn(n,e)}}function or(e){return Re(e)?tr(Se(e)):rr(e)}function ir(e){return typeof e=="function"?e:e==null?_n:typeof e=="object"?te(e)?nr(e[0],e[1]):qt(e):or(e)}function ar(e,n){return e&&On(e,n,Ze)}function lr(e,n){return function(t,r){if(t==null)return t;if(!Qe(t))return e(t,r);for(var i=t.length,o=n?i:-1,s=Object(t);(n?o--:++o<i)&&r(s[o],o,s)!==!1;);return t}}var sr=lr(ar);const dr=sr;function ur(e,n){var t=-1,r=Qe(e)?Array(e.length):[];return dr(e,function(i,o,s){r[++t]=n(i,o,s)}),r}function fr(e,n){var t=te(e)?Bn:ur;return t(e,ir(n))}const xe={top:"bottom",bottom:"top",left:"right",right:"left"},A="var(--n-arrow-height) * 1.414",hr=W([F("popover",`
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
 `)]),C("top-start",`
 top: calc(${A} / -2);
 left: calc(${D("top-start")} - var(--v-offset-left));
 `),C("top",`
 top: calc(${A} / -2);
 transform: translateX(calc(${A} / -2)) rotate(45deg);
 left: 50%;
 `),C("top-end",`
 top: calc(${A} / -2);
 right: calc(${D("top-end")} + var(--v-offset-left));
 `),C("bottom-start",`
 bottom: calc(${A} / -2);
 left: calc(${D("bottom-start")} - var(--v-offset-left));
 `),C("bottom",`
 bottom: calc(${A} / -2);
 transform: translateX(calc(${A} / -2)) rotate(45deg);
 left: 50%;
 `),C("bottom-end",`
 bottom: calc(${A} / -2);
 right: calc(${D("bottom-end")} + var(--v-offset-left));
 `),C("left-start",`
 left: calc(${A} / -2);
 top: calc(${D("left-start")} - var(--v-offset-top));
 `),C("left",`
 left: calc(${A} / -2);
 transform: translateY(calc(${A} / -2)) rotate(45deg);
 top: 50%;
 `),C("left-end",`
 left: calc(${A} / -2);
 bottom: calc(${D("left-end")} + var(--v-offset-top));
 `),C("right-start",`
 right: calc(${A} / -2);
 top: calc(${D("right-start")} - var(--v-offset-top));
 `),C("right",`
 right: calc(${A} / -2);
 transform: translateY(calc(${A} / -2)) rotate(45deg);
 top: 50%;
 `),C("right-end",`
 right: calc(${A} / -2);
 bottom: calc(${D("right-end")} + var(--v-offset-top));
 `),...fr({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const t=["right","left"].includes(n),r=t?"width":"height";return e.map(i=>{const o=i.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${A}) / 2)`,a=D(i);return W(`[v-placement="${i}"] >`,[F("popover-shared",[ue("center-arrow",[F("popover-arrow",`${n}: calc(max(${l}, ${a}) ${o?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function D(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function C(e,n){const t=e.split("-")[0],r=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return W(`[v-placement="${e}"] >`,[F("popover-shared",`
 margin-${xe[t]}: var(--n-space);
 `,[ue("show-arrow",`
 margin-${xe[t]}: var(--n-space-arrow);
 `),ue("overlap",`
 margin: 0;
 `),En("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${xe[t]}: auto;
 ${r}
 `,[F("popover-arrow",n)])])])}const sn=Object.assign(Object.assign({},Ae.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),cr=({arrowStyle:e,clsPrefix:n})=>M("div",{key:"__popover-arrow__",class:`${n}-popover-arrow-wrapper`},M("div",{class:`${n}-popover-arrow`,style:e})),pr=oe({name:"PopoverBody",inheritAttrs:!1,props:sn,setup(e,{slots:n,attrs:t}){const{namespaceRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:o}=Cn(e),s=Ae("Popover","-popover",hr,Tn,e,i),l=T(null),a=X("NPopover"),c=T(null),v=T(e.show),b=T(!1);Ve(()=>{const{show:m}=e;m&&!jn()&&!e.internalDeactivateImmediately&&(b.value=!0)});const d=j(()=>{const{trigger:m,onClickoutside:S}=e,_=[],{positionManuallyRef:{value:w}}=a;return w||(m==="click"&&!S&&_.push([Pe,B,void 0,{capture:!0}]),m==="hover"&&_.push([it,z])),S&&_.push([Pe,B,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&b.value)&&_.push([Pn,e.show]),_}),h=j(()=>{const m=e.width==="trigger"?void 0:me(e.width),S=[];m&&S.push({width:m});const{maxWidth:_,minWidth:w}=e;return _&&S.push({maxWidth:me(_)}),w&&S.push({maxWidth:me(w)}),o||S.push(g.value),S}),g=j(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:S,cubicBezierEaseOut:_},self:{space:w,spaceArrow:N,padding:I,fontSize:P,textColor:p,dividerColor:x,color:O,boxShadow:G,borderRadius:k,arrowHeight:L,arrowOffset:dn,arrowOffsetVertical:un}}=s.value;return{"--n-box-shadow":G,"--n-bezier":m,"--n-bezier-ease-in":S,"--n-bezier-ease-out":_,"--n-font-size":P,"--n-text-color":p,"--n-color":O,"--n-divider-color":x,"--n-border-radius":k,"--n-arrow-height":L,"--n-arrow-offset":dn,"--n-arrow-offset-vertical":un,"--n-padding":I,"--n-space":w,"--n-space-arrow":N}}),u=o?zn("popover",void 0,g,e):void 0;a.setBodyInstance({syncPosition:y}),re(()=>{a.setBodyInstance(null)}),Z(K(e,"show"),m=>{e.animated||(m?v.value=!0:v.value=!1)});function y(){var m;(m=l.value)===null||m===void 0||m.syncPosition()}function f(m){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&a.handleMouseEnter(m)}function $(m){e.trigger==="hover"&&e.keepAliveOnHover&&a.handleMouseLeave(m)}function z(m){e.trigger==="hover"&&!E().contains(ze(m))&&a.handleMouseMoveOutside(m)}function B(m){(e.trigger==="click"&&!E().contains(ze(m))||e.onClickoutside)&&a.handleClickOutside(m)}function E(){return a.getTriggerElement()}R(Je,c),R(ke,null),R(Ge,null);function Y(){if(u==null||u.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&b.value))return null;let S;const _=a.internalRenderBodyRef.value,{value:w}=i;if(_)S=_([`${w}-popover-shared`,u==null?void 0:u.themeClass.value,e.overlap&&`${w}-popover-shared--overlap`,e.showArrow&&`${w}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${w}-popover-shared--center-arrow`],c,h.value,f,$);else{const{value:N}=a.extraClassRef,{internalTrapFocus:I}=e,P=!Ie(n.header)||!Ie(n.footer),p=()=>{var x;const O=P?M(Fn,null,ge(n.header,L=>L?M("div",{class:`${w}-popover__header`,style:e.headerStyle},L):null),ge(n.default,L=>L?M("div",{class:`${w}-popover__content`,style:e.contentStyle},n):null),ge(n.footer,L=>L?M("div",{class:`${w}-popover__footer`,style:e.footerStyle},L):null)):e.scrollable?(x=n.default)===null||x===void 0?void 0:x.call(n):M("div",{class:`${w}-popover__content`,style:e.contentStyle},n),G=e.scrollable?M(Nn,{contentClass:P?void 0:`${w}-popover__content`,contentStyle:P?void 0:e.contentStyle},{default:()=>O}):O,k=e.showArrow?cr({arrowStyle:e.arrowStyle,clsPrefix:w}):null;return[G,k]};S=M("div",Dn({class:[`${w}-popover`,`${w}-popover-shared`,u==null?void 0:u.themeClass.value,N.map(x=>`${w}-${x}`),{[`${w}-popover--scrollable`]:e.scrollable,[`${w}-popover--show-header-or-footer`]:P,[`${w}-popover--raw`]:e.raw,[`${w}-popover-shared--overlap`]:e.overlap,[`${w}-popover-shared--show-arrow`]:e.showArrow,[`${w}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:h.value,onKeydown:a.handleKeydown,onMouseenter:f,onMouseleave:$},t),I?M(Ln,{active:e.show,autoFocus:!0},{default:p}):p())}return ce(S,d.value)}return{displayed:b,namespace:r,isMounted:a.isMountedRef,zIndex:a.zIndexRef,followerRef:l,adjustedTo:V(e),followerEnabled:v,renderContentNode:Y}},render(){return M(pt,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?M(In,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),vr=Object.keys(sn),gr={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function mr(e,n,t){gr[n].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const i=e.props[r],o=t[r];i?e.props[r]=(...s)=>{i(...s),o(...s)}:e.props[r]=o})}const br={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},wr=Object.assign(Object.assign(Object.assign({},Ae.props),br),{internalOnAfterLeave:Function,internalRenderBody:Function}),Mr=oe({name:"Popover",inheritAttrs:!1,props:wr,__popover__:!0,setup(e){const n=je(),t=T(null),r=j(()=>e.show),i=T(e.defaultShow),o=Gn(r,i),s=ne(()=>e.disabled?!1:o.value),l=()=>{if(e.disabled)return!0;const{getDisabled:p}=e;return!!(p!=null&&p())},a=()=>l()?!1:o.value,c=Vn(e,["arrow","showArrow"]),v=j(()=>e.overlap?!1:c.value);let b=null;const d=T(null),h=T(null),g=ne(()=>e.x!==void 0&&e.y!==void 0);function u(p){const{"onUpdate:show":x,onUpdateShow:O,onShow:G,onHide:k}=e;i.value=p,x&&ie(x,p),O&&ie(O,p),p&&G&&ie(G,!0),p&&k&&ie(k,!1)}function y(){b&&b.syncPosition()}function f(){const{value:p}=d;p&&(window.clearTimeout(p),d.value=null)}function $(){const{value:p}=h;p&&(window.clearTimeout(p),h.value=null)}function z(){const p=l();if(e.trigger==="focus"&&!p){if(a())return;u(!0)}}function B(){const p=l();if(e.trigger==="focus"&&!p){if(!a())return;u(!1)}}function E(){const p=l();if(e.trigger==="hover"&&!p){if($(),d.value!==null||a())return;const x=()=>{u(!0),d.value=null},{delay:O}=e;O===0?x():d.value=window.setTimeout(x,O)}}function Y(){const p=l();if(e.trigger==="hover"&&!p){if(f(),h.value!==null||!a())return;const x=()=>{u(!1),h.value=null},{duration:O}=e;O===0?x():h.value=window.setTimeout(x,O)}}function m(){Y()}function S(p){var x;a()&&(e.trigger==="click"&&(f(),$(),u(!1)),(x=e.onClickoutside)===null||x===void 0||x.call(e,p))}function _(){if(e.trigger==="click"&&!l()){f(),$();const p=!a();u(p)}}function w(p){e.internalTrapFocus&&p.key==="Escape"&&(f(),$(),u(!1))}function N(p){i.value=p}function I(){var p;return(p=t.value)===null||p===void 0?void 0:p.targetRef}function P(p){b=p}return R("NPopover",{getTriggerElement:I,handleKeydown:w,handleMouseEnter:E,handleMouseLeave:Y,handleClickOutside:S,handleMouseMoveOutside:m,setBodyInstance:P,positionManuallyRef:g,isMountedRef:n,zIndexRef:K(e,"zIndex"),extraClassRef:K(e,"internalExtraClass"),internalRenderBodyRef:K(e,"internalRenderBody")}),Ve(()=>{o.value&&l()&&u(!1)}),{binderInstRef:t,positionManually:g,mergedShowConsideringDisabledProp:s,uncontrolledShow:i,mergedShowArrow:v,getMergedShow:a,setShow:N,handleClick:_,handleMouseEnter:E,handleMouseLeave:Y,handleFocus:z,handleBlur:B,syncPosition:y}},render(){var e;const{positionManually:n,$slots:t}=this;let r,i=!1;if(!n&&(t.activator?r=Le(t,"activator"):r=Le(t,"trigger"),r)){r=Hn(r),r=r.type===Wn?M("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)i=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,l=[o,...s],a={onBlur:c=>{l.forEach(v=>{v.onBlur(c)})},onFocus:c=>{l.forEach(v=>{v.onFocus(c)})},onClick:c=>{l.forEach(v=>{v.onClick(c)})},onMouseenter:c=>{l.forEach(v=>{v.onMouseenter(c)})},onMouseleave:c=>{l.forEach(v=>{v.onMouseleave(c)})}};mr(r,s?"nested":n?"manual":this.trigger,a)}}return M(tt,{ref:"binderInstRef",syncTarget:!i,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?ce(M("div",{style:{position:"fixed",inset:0}}),[[qe,{enabled:o,zIndex:this.zIndex}]]):null,n?null:M(rt,null,{default:()=>r}),M(pr,Xn(this.$props,vr,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,l;return(l=(s=this.$slots).default)===null||l===void 0?void 0:l.call(s)},header:()=>{var s,l;return(l=(s=this.$slots).header)===null||l===void 0?void 0:l.call(s)},footer:()=>{var s,l;return(l=(s=this.$slots).footer)===null||l===void 0?void 0:l.call(s)}})]}})}});export{Mr as N,tt as V,ae as a,Jn as b,at as c,rt as d,pt as e,Vn as f,br as p,cr as r,V as u};