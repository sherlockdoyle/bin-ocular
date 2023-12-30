(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,ct=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),mt=new WeakMap;let It=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ct&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&mt.set(e,t))}return t}toString(){return this.cssText}};const Wt=i=>new It(typeof i=="string"?i:i+"",void 0,dt),E=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new It(e,i,dt)},Gt=(i,t)=>{if(ct)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),o=V.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},ft=ct?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Wt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yt,defineProperty:Vt,getOwnPropertyDescriptor:Xt,getOwnPropertyNames:qt,getOwnPropertySymbols:Zt,getPrototypeOf:Ft}=Object,_=globalThis,vt=_.trustedTypes,Jt=vt?vt.emptyScript:"",ot=_.reactiveElementPolyfillSupport,R=(i,t)=>i,q={toAttribute(i,t){switch(t){case Boolean:i=i?Jt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ut=(i,t)=>!Yt(i,t),$t={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class I extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&Vt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){const{get:o,set:n}=Xt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const h=o==null?void 0:o.call(this);n.call(this,r),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$t}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,s=[...qt(e),...Zt(e)];for(const o of s)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)e.unshift(ft(o))}else t!==void 0&&e.push(ft(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var n;const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:q;this._$Em=o,this[o]=h.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s,o=!1,n){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ut)(o?n:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,r]of o)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(e)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var o;return(o=s.hostUpdated)==null?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[R("elementProperties")]=new Map,I[R("finalized")]=new Map,ot==null||ot({ReactiveElement:I}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,Z=L.trustedTypes,yt=Z?Z.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ot="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,Pt="?"+b,Kt=`<${Pt}>`,C=document,H=()=>C.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",Tt=Array.isArray,Qt=i=>Tt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,bt=/>/g,A=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,At=/"/g,Mt=/^(?:script|style|textarea|title)$/i,te=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),p=te(1),O=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),xt=new WeakMap,x=C.createTreeWalker(C,129);function Ut(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}const ee=(i,t)=>{const e=i.length-1,s=[];let o,n=t===2?"<svg>":"",r=k;for(let h=0;h<e;h++){const a=i[h];let l,d,c=-1,g=0;for(;g<a.length&&(r.lastIndex=g,d=r.exec(a),d!==null);)g=r.lastIndex,r===k?d[1]==="!--"?r=wt:d[1]!==void 0?r=bt:d[2]!==void 0?(Mt.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=A):d[3]!==void 0&&(r=A):r===A?d[0]===">"?(r=o??k,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?A:d[3]==='"'?At:_t):r===At||r===_t?r=A:r===wt||r===bt?r=k:(r=A,o=void 0);const f=r===A&&i[h+1].startsWith("/>")?" ":"";n+=r===k?a+Kt:c>=0?(s.push(l),a.slice(0,c)+Ot+a.slice(c)+b+f):a+b+(c===-2?h:f)}return[Ut(i,n+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class z{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let n=0,r=0;const h=t.length-1,a=this.parts,[l,d]=ee(t,e);if(this.el=z.createElement(l,s),x.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=x.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Ot)){const g=d[r++],f=o.getAttribute(c).split(b),y=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:y[2],strings:f,ctor:y[1]==="."?se:y[1]==="?"?oe:y[1]==="@"?ne:it}),o.removeAttribute(c)}else c.startsWith(b)&&(a.push({type:6,index:n}),o.removeAttribute(c));if(Mt.test(o.tagName)){const c=o.textContent.split(b),g=c.length-1;if(g>0){o.textContent=Z?Z.emptyScript:"";for(let f=0;f<g;f++)o.append(c[f],H()),x.nextNode(),a.push({type:2,index:++n});o.append(c[g],H())}}}else if(o.nodeType===8)if(o.data===Pt)a.push({type:2,index:n});else{let c=-1;for(;(c=o.data.indexOf(b,c+1))!==-1;)a.push({type:7,index:n}),c+=b.length-1}n++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function P(i,t,e=i,s){var r,h;if(t===O)return t;let o=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const n=j(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((h=o==null?void 0:o._$AO)==null||h.call(o,!1),n===void 0?o=void 0:(o=new n(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=o:e._$Cl=o),o!==void 0&&(t=P(i,o._$AS(i,t.values),o,s)),t}class ie{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,o=((t==null?void 0:t.creationScope)??C).importNode(e,!0);x.currentNode=o;let n=x.nextNode(),r=0,h=0,a=s[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new B(n,n.nextSibling,this,t):a.type===1?l=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(l=new re(n,this,t)),this._$AV.push(l),a=s[++h]}r!==(a==null?void 0:a.index)&&(n=x.nextNode(),r++)}return x.currentNode=C,o}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),j(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var n;const{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=z.createElement(Ut(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(e);else{const r=new ie(o,this),h=r.u(this.options);r.p(e),this.$(h),this._$AH=r}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new z(t)),e}T(t){Tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const n of t)o===e.length?e.push(s=new B(this.k(H()),this.k(H()),this,this.options)):s=e[o],s._$AI(n),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,o){const n=this.strings;let r=!1;if(n===void 0)t=P(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==O,r&&(this._$AH=t);else{const h=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=P(this,h[s+a],e,a),l===O&&(l=this._$AH[a]),r||(r=!j(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.O(t)}O(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class se extends it{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===u?void 0:t}}class oe extends it{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class ne extends it{constructor(t,e,s,o,n){super(t,e,s,o,n),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??u)===O)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class re{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const rt=L.litHtmlPolyfillSupport;rt==null||rt(z,B),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.1.0");const ae=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let o=s._$litPart$;if(o===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=o=new B(t.insertBefore(H(),n),n,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}};var St;v._$litElement$=!0,v.finalized=!0,(St=globalThis.litElementHydrateSupport)==null||St.call(globalThis,{LitElement:v});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ut},le=(i=he,t,e)=>{const{kind:s,metadata:o}=e;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(e.name,i),s==="accessor"){const{name:r}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(r,a,i)},init(h){return h!==void 0&&this.C(r,void 0,i),h}}}if(s==="setter"){const{name:r}=e;return function(h){const a=this[r];t.call(this,h),this.requestUpdate(r,a,i)}}throw Error("Unsupported decorator location: "+s)};function w(i){return(t,e)=>typeof e=="object"?le(i,t,e):((s,o,n)=>{const r=o.hasOwnProperty(n);return o.constructor.createProperty(n,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(o,n):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(i){return w({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(i,t){return(e,s,o)=>{const n=r=>{var h;return((h=r.renderRoot)==null?void 0:h.querySelector(i))??null};if(t){const{get:r,set:h}=typeof s=="object"?e:o??(()=>{const a=Symbol();return{get(){return this[a]},set(l){this[a]=l}}})();return Ct(e,s,{get(){let a=r.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&h.call(this,a)),a}})}return Ct(e,s,{get(){return n(this)}})}}var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,kt=(i,t,e,s)=>{for(var o=s>1?void 0:s?de(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ce(t,e,o),o};let F=class extends v{constructor(){super(...arguments),this.title=""}onInfoClick(){this.dispatchEvent(new CustomEvent("info-click"))}onTitleClick(){this.dispatchEvent(new CustomEvent("title-click"))}render(){return p`
      <header>
        <button title="What is this?" @click=${this.onInfoClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </button>
        <span id="title" @click=${this.onTitleClick}>${this.title}</span>
        <a href="https://github.com/sherlockdoyle/bin-ocular" target="_blank" title="See on GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
        </a>
      </header>
      <main>
        <slot></slot>
      </main>
    `}};F.styles=E`
    * {
      box-sizing: border-box;
    }
    :host {
      display: flex;
      flex-direction: column;
      width: 100dvw;
      height: 100dvh;
    }

    :host > header {
      display: flex;
      position: sticky;
      top: 0;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: #222;
      padding: 0.75rem;
      color: white;
    }
    #title {
      font-weight: 900;
      font-size: 2rem;
      line-height: 2.25rem;
      text-transform: uppercase;
    }
    button {
      all: unset;
      cursor: pointer;
    }
    a,
    button {
      height: 48px;
    }
    svg {
      width: 3rem;
      height: 3rem;
      color: white;
    }

    :host > main {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      padding: 0.75rem;
      overflow-y: auto;
    }
  `;kt([w({type:String})],F.prototype,"title",2);F=kt([S("bo-shell")],F);function Rt(i,t,e=!0){const{data:s}=i;let o=0,n=255;for(let h=0;h<s.length;h+=4){const a=(s[h]+s[h+1]+s[h+2])/3;s[h]=a,o=Math.min(o,a),n=Math.max(n,a)}const r=(o+n)/2;for(let h=0;h<s.length;h+=4)s[h]=s[h+1]=s[h+2]=s[h]>r?255:0;if(e){const h=new Uint8ClampedArray(s);for(let a=1;a<t-1;a++)for(let l=1;l<t-1;l++){const d=(a*t+l)*4,c=h[d];let g=0,f=0,y=0;for(let G=-1;G<=1;G++)for(let Y=-1;Y<=1;Y++){if(G===0&&Y===0)continue;const Bt=((a+G)*t+(l+Y))*4,gt=h[Bt];gt===c?g++:(f++,y=gt)}f>g&&(s[d]=y,s[d+1]=y,s[d+2]=y)}}}function Dt(i,t=!0){return new Promise(e=>{const s=new Image;s.onload=()=>{const o=document.createElement("canvas"),n=o.width=o.height=Math.max(s.width,s.height),r=o.getContext("2d");r.drawImage(s,0,0,n,n);const h=r.getImageData(0,0,n,n);Rt(h,n,t),URL.revokeObjectURL(s.src),e(h)},s.src=URL.createObjectURL(i)})}function X(i,t){var r;if(i.width===t&&i.height===t)return i;const e=document.createElement("canvas");e.width=i.width,e.height=i.height,(r=e.getContext("2d"))==null||r.putImageData(i,0,0);const s=document.createElement("canvas");s.width=s.height=t;const o=s.getContext("2d");o.imageSmoothingEnabled=!1,o.drawImage(e,0,0,t,t);const n=o.getImageData(0,0,t,t);return Rt(n,t),n}var ue=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,st=(i,t,e,s)=>{for(var o=s>1?void 0:s?pe(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&ue(t,e,o),o};let T=class extends v{constructor(){super(...arguments),this.size=512,this.hasDrawing=!1,this.lineWidth=27.5,this.isDrawing=!1,this.lastX=0,this.lastY=0}getContext(){const i=this.canvas.getContext("2d");return i.imageSmoothingEnabled=!1,i.strokeStyle="black",i.fillStyle="white",i.lineCap=i.lineJoin="round",i.fillRect(0,0,this.canvas.width,this.canvas.height),i}firstUpdated(i){super.firstUpdated(i),this.ctx=this.getContext()}drawImgData(){this.imgData&&(this.ctx.putImageData(X(this.imgData,this.size),0,0),this.hasDrawing=!0)}updated(i){i.has("size")&&(this.ctx=this.getContext()),i.has("imgData")&&this.imgData&&this.drawImgData()}drawLine(i,t){this.isDrawing&&(this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth*this.size/512,this.ctx.moveTo(this.lastX/this.canvas.clientWidth*this.canvas.width,this.lastY/this.canvas.clientHeight*this.canvas.height),this.ctx.lineTo(i/this.canvas.clientWidth*this.canvas.width,t/this.canvas.clientHeight*this.canvas.height),this.ctx.stroke(),this.lastX=i,this.lastY=t,this.hasDrawing=!0)}onTouchStart(i){this.isDrawing=!0;const t=this.canvas.getBoundingClientRect();this.lastX=i.touches[0].clientX-t.left,this.lastY=i.touches[0].clientY-t.top}onTouchMove(i){const t=this.canvas.getBoundingClientRect();this.drawLine(i.touches[0].clientX-t.left,i.touches[0].clientY-t.top),i.preventDefault()}onTouchEnd(){this.isDrawing=!1}onMouseDown(i){this.isDrawing=!0,this.lastX=i.offsetX,this.lastY=i.offsetY}onMouseMove(i){this.drawLine(i.offsetX,i.offsetY)}onMouseUp(){this.isDrawing=!1}render(){return p`
      <canvas
        width=${this.size}
        height=${this.size}
        @touchstart=${this.onTouchStart}
        @touchmove=${this.onTouchMove}
        @touchend=${this.onTouchEnd}
        @touchcancel=${this.onTouchEnd}
        @mousedown=${this.onMouseDown}
        @mousemove=${this.onMouseMove}
        @mouseup=${this.onMouseUp}
        @mouseout=${this.onMouseUp}
      >
        Your browser does not support HTML5 canvas.
      </canvas>
      <div>
        <button
          @click=${()=>{this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.hasDrawing=!1}}
        >
          Clear
        </button>
        <label>
          Line Width
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            .value=${this.lineWidth.toString()}
            @input=${i=>{this.lineWidth=Number(i.target.value)}}
          />
        </label>
      </div>
    `}getImageData(){return this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}};T.styles=E`
    * {
      box-sizing: border-box;
    }
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    canvas {
      border: 1px solid blue;
      aspect-ratio: 1 / 1;
      width: 100%;
    }

    div {
      display: flex;
      gap: 0.5rem;
    }

    button {
      cursor: pointer;
      border: 1px solid currentColor;
      border-radius: 0.5rem;
      background-color: transparent;
      padding: 0 1rem;
      height: 3rem;
      color: #ff5861;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1rem;
      text-align: center;
    }
    button:hover {
      background-color: #ff5861;
      color: black;
    }
    button:active {
      transform: scale(0.97);
    }

    label {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
    }
    input {
      cursor: pointer;
      border-radius: 1rem;
      background-color: transparent;
      width: 100%;
      height: 1.5rem;
    }
  `;st([w({type:Number})],T.prototype,"size",2);st([w({type:Object})],T.prototype,"imgData",2);st([U("canvas")],T.prototype,"canvas",2);T=st([S("bw-canvas")],T);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fe=i=>(...t)=>({_$litDirective$:i,values:t});class ve{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const o of e)(s=o._$AO)==null||s.call(o,t,!1),N(o,t);return!0},J=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Lt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),we(t)}};function $e(i){this._$AN!==void 0?(J(this),this._$AM=i,Lt(this)):this._$AM=i}function ye(i,t=!1,e=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(s))for(let n=e;n<s.length;n++)N(s[n],!1),J(s[n]);else s!=null&&(N(s,!1),J(s));else N(this,i)}const we=i=>{i.type==me.CHILD&&(i._$AP??(i._$AP=ye),i._$AQ??(i._$AQ=$e))};class be extends ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Lt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,o;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(o=this.disconnected)==null||o.call(this)),e&&(N(this,t),J(this))}setValue(t){if(ge(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=()=>new Ae;class Ae{}const ht=new WeakMap,xe=fe(class extends be{render(i){return u}update(i,[t]){var s;const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=(s=i.options)==null?void 0:s.host,this.ot(this.lt=i.element)),u}ot(i){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=ht.get(t);e===void 0&&(e=new WeakMap,ht.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){var i,t;return typeof this.G=="function"?(i=ht.get(this.ct??globalThis))==null?void 0:i.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Ce=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Nt=(i,t,e,s)=>{for(var o=s>1?void 0:s?De(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Ce(t,e,o),o};let K=class extends v{constructor(){super(...arguments),this.imgDatas=Array(),this.canvasRefs=Array()}updated(i){i.has("imgDatas")&&this.imgDatas.map((t,e)=>{var s,o;return(o=(s=this.canvasRefs[e].value)==null?void 0:s.getContext("2d"))==null?void 0:o.putImageData(t,0,0)})}onRemove(i){this.dispatchEvent(new CustomEvent("remove",{detail:i}))}render(){var e;const i=Math.ceil(Math.sqrt(this.imgDatas.length)),t=`flex-basis:calc((100% - ${(i-1)*.25}rem) / ${i})`;return(e=this.imgDatas)==null?void 0:e.map((s,o)=>(this.canvasRefs[o]=_e(),p`
        <div style=${t}>
          <canvas width=${s.width} height=${s.height} ${xe(this.canvasRefs[o])}></canvas>
          <button title="Remove image" @click=${()=>this.onRemove(o)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      `))}};K.styles=E`
    * {
      box-sizing: border-box;
    }
    :host {
      display: flex;
      flex-wrap: wrap;
      place-content: center;
      gap: 0.25rem;
      background-color: #222;
      aspect-ratio: 1 / 1;
    }

    div {
      position: relative;
      width: 100%;
      height: fit-content;
      line-height: 0;
    }

    canvas {
      border: 1px solid blue;
      aspect-ratio: 1 / 1;
      width: 100%;
    }

    button {
      position: absolute;
      top: 0.25rem;
      right: 0.25rem;
      cursor: pointer;
      border: none;
      border-radius: 50%;
      background-color: #fff7;
      padding: 0;
      width: 2rem;
      height: 2rem;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `;Nt([w({type:Array})],K.prototype,"imgDatas",2);K=Nt([S("img-grid")],K);var Ee=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Ht=(i,t,e,s)=>{for(var o=s>1?void 0:s?Se(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Ee(t,e,o),o};function Ie(i){var e;const t=document.createElement("canvas");return t.width=i.width,t.height=i.height,(e=t.getContext("2d"))==null||e.putImageData(i,0,0),t.toDataURL()}let Q=class extends v{constructor(){super(...arguments),this.imgDatas=Array()}render(){var i;return(i=this.imgDatas)==null?void 0:i.map((t,e)=>p`
        <div>
          <img src=${Ie(t)} alt="noise" />
          <div>${e+1}</div>
        </div>
      `)}};Q.styles=E`
    * {
      box-sizing: border-box;
    }
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
      gap: 0.5rem;
      width: 100%;
    }
    @media (min-width: 807px) {
      :host {
        grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
      }
    }

    :host > div {
      position: relative;
    }
    img {
      border: 1px solid blue;
      aspect-ratio: 1 / 1;
      width: 100%;
    }
    :host > div > div {
      display: flex;
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #fff7;
      width: 3rem;
      height: 3rem;
      color: black;
      font-size: 2rem;
    }
  `;Ht([w({type:Array})],Q.prototype,"imgDatas",2);Q=Ht([S("img-result")],Q);var Oe=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,W=(i,t,e,s)=>{for(var o=s>1?void 0:s?Pe(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Oe(t,e,o),o};let D=class extends v{constructor(){super(),this.dropText="Drop image here",this.multiple=!0,this.onDragOverDocument=i=>{i.preventDefault(),this.dragOverlay.classList.add("dragging")},this.onDragLeaveDocument=()=>{this.dragOverlay.classList.remove("dragging")},this.onDragOver=i=>{i.preventDefault(),this.dragOverlay.classList.add("hovering")},this.onDragLeave=()=>{this.dragOverlay.classList.remove("hovering")},this.onDrop=i=>{var t;i.preventDefault(),this.dragOverlay.classList.remove("hovering"),this.handleUpload((t=i.dataTransfer)==null?void 0:t.files)},this.onFileInput=()=>{this.handleUpload(this.fileInput.files)},this.handleUpload=i=>{i&&this.dispatchEvent(new CustomEvent("upload",{detail:Array.from(i).filter(t=>t.type.startsWith("image/"))}))},document.addEventListener("dragover",this.onDragOverDocument),document.addEventListener("dragleave",this.onDragLeaveDocument),document.addEventListener("drop",this.onDragLeaveDocument),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop)}render(){const i=p`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
        />
      </svg>
    `;return p`
      <slot></slot>
      <button title="Upload" @click=${()=>this.fileInput.click()}>${i}</button>
      <input id="file-input" type="file" accept="image/*" ?multiple=${this.multiple} @change=${this.onFileInput} />
      <div id="drag-overlay">${i}${this.dropText}</div>
    `}};D.styles=E`
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
      position: relative;
    }

    button {
      position: absolute;
      top: 0;
      right: 0.25rem;
      transform: translateY(-100%);
      cursor: pointer;
      border: none;
      border-radius: 50%;
      background-color: transparent;
      padding: 0;
      aspect-ratio: 1 / 1;
      color: white;
    }
    button svg {
      width: 1.75rem;
      height: 1.75rem;
    }

    input {
      display: none;
    }

    #drag-overlay {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      transition: padding-bottom 0.1s;
      margin: 1px;
      background-color: #0000;
      padding: 1rem;
      aspect-ratio: 1 / 1;
      width: 100%;
      text-align: center;
    }
    #drag-overlay.dragging {
      display: flex;
      background-color: #0007;
    }
    #drag-overlay.hovering {
      padding-bottom: 25%;
    }

    #drag-overlay svg {
      width: 3rem;
      height: 3rem;
    }
  `;W([w({type:String})],D.prototype,"dropText",2);W([w({type:Boolean})],D.prototype,"multiple",2);W([U("#file-input")],D.prototype,"fileInput",2);W([U("#drag-overlay")],D.prototype,"dragOverlay",2);D=W([S("upload-area")],D);function Te(i){const t=new Array;for(let e=0;e<i*i;++e)t[e]=Math.random()*Math.PI*2;return t}function Et(i,t,e){const s=document.createElement("canvas");s.width=s.height=e;const o=s.getContext("2d");o.fillStyle="white",o.fillRect(0,0,e,e),o.fillStyle="black";const n=e/t;for(let r=0;r<t;++r)for(let h=0;h<t;++h){const a=i[r*t+h],l=(r+.5+Math.cos(a)/3)*n,d=(h+.5+Math.sin(a)/3)*n;o.fillRect(l-2,d-2,4,4)}return o.getImageData(0,0,e,e)}function Me(i,t,e,s){const o=e.width/t;for(let n=0;n<t;++n)for(let r=0;r<t;++r){const h=Math.round((n+.5)*o),a=Math.round((r+.5)*o);e.data[(a*e.width+h)*4]===0&&(i[n*t+r]+=s)}return i}function Ue(i,t=2){const e=i.width,s=Math.round(e/10),o=Math.PI*2/t,n=Te(s),r=[Et(n,s,e)];for(let h=1;h<t;++h)r.push(Et(Me(n,s,i,o),s,e));return r}function ke(i){const t=i[0].data.slice(),e=t.length;for(let s=1;s<i.length;++s){const{data:o}=i[s];for(let n=0;n<e;++n)t[n]&=o[n]}return new ImageData(t,i[0].width,i[0].height)}function Re(i,t){const e=new Uint8Array(i);for(let s=0;s<i;++s)e[s]=Math.floor(Math.random()*t);return e}function tt(i){const{data:t}=i,e=t.length/4,s=new Uint8Array(e);for(let o=0;o<e;++o)s[o]=t[o*4]===0?0:1;return s}function pt(i,t){const e=t*t,s=new Uint8ClampedArray(e*4);for(let o=0;o<e;++o)s[o*4]=s[o*4+1]=s[o*4+2]=i[o]===0?0:255,s[o*4+3]=255;return new ImageData(s,t,t)}function jt(i,t,e){for(let s=0,o=i.length;s<o;++s)t[s]||(i[s]=(i[s]+1)%e);return i}function Le(i,t=2){const e=i.width*i.height,s=tt(i),o=Re(e,t),n=[o.slice()];for(let r=1;r<t;++r)n.push(jt(o,s,t).slice());return n.map(r=>pt(r,i.width))}function Ne(i,t){const e=tt(t);return jt(e,tt(i),2),pt(e,i.width)}function He(i){const[t,...e]=i.map(tt),s=t.length,o=new Uint8Array(s).fill(1);for(let n=0,r=e.length;n<r;++n)for(let h=e[n],a=0;a<s;++a)o[a]&=t[a]===h[a]?1:0;return pt(o,i[0].width)}var je=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,zt=(i,t,e,s)=>{for(var o=s>1?void 0:s?ze(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&je(t,e,o),o};let et=class extends v{constructor(){super(...arguments),this.alternateContent=!1}render(){return p`
      <h2>What is this?</h2>
      <p>
        So, you're curious about <strong>Bin Ocular</strong>, huh? It's a cool toy project that lets you turn binary
        (black and white) images into random noise. Think of it as a magic trick where an image is split into 2-5 noise
        images. When you put these images back together, voila, the original image reappears!
      </p>
      <p>
        The idea came from wanting to hide a secret image within two noise images. When you combine them, the secret
        image is revealed, symbolizing a special bond between two people.
      </p>
      <h3>How to play with it?</h3>
      <ol>
        <li>
          <strong>Artistry Mode:</strong> Get creative in the <em>Drawing</em> area. Adjust the <em>Line Width</em>, or
          hit <em>Clear</em> to start fresh. You can change the resolution and decide how many noise images to make.
          More images mean less noise in each image. You can also drag and drop an image to convert it into binary. Hit
          <em>Encode</em>, and you've got your noise images to save and share.
        </li>
        ${this.alternateContent?null:p`
              <li>
                <strong>Noise Infusion:</strong> Start by drawing or uploading an image in the <em>Drawing</em> area.
                Then, upload a noise image in the <em>Images</em> area. Hit <em>Encode</em> and watch a new noise image
                come to life. Now, you can use both the original and new noise image, just as above.
              </li>
            `}
        <li>
          <strong>Decoding Adventure:</strong> Upload multiple images in the <em>Images</em> area and press
          <strong>Decode</strong> to uncover the hidden image. Remember, you can upload up to 5 images. If you upload
          more, the oldest one gets the boot.
        </li>
      </ol>
      <p>
        Want to take it to the next level? Print the noise images on transparent or translucent material. But here's a
        pro tip: make sure to turn the white parts of the image transparent before you hit the print button. You can use
        any image editing software or even search online for tools to do this. Overlap these prints, and the original
        image pops up. It's like magic!
      </p>
      ${this.alternateContent?p`<p>
            Did you spot the new algorithm? Unlike the old algorithm, where you had to line up the printed contents
            exactly, this new one is cool with a bit of movement. But here's the catch - the new algorithm doesn't play
            nice with encoding with custom images, unlike the old one. So, while youre shaking things up, keep this in
            mind!
          </p>`:p`
            <p>The algorithm is super easy - just upload different images and have fun experimenting!</p>
            <p>
              Oh, and here's a little something for the curious cats out there. There's a not-so-secret easter egg
              hidden in plain sight. Try clicking on the title of the page. Who knows what you might discover? It's just
              another fun layer added to the Bin Ocular experience. Remember, the magic is in the details.
            </p>
          `}
      <p>The website is only available in dark mode (because who doesn't love dark mode?).</p>
      <p>
        Want to learn more? Check out the project on
        <a href="https://github.com/sherlockdoyle/bin-ocular" target="_blank">GitHub</a>. If you spot any bugs or have
        ideas to make it better, feel free to share them on GitHub.
      </p>
    `}};et.styles=E`
    :host {
      line-height: 1.5;
    }
  `;zt([w({type:Boolean})],et.prototype,"alternateContent",2);et=zt([S("what-is-this")],et);var Be=Object.defineProperty,We=Object.getOwnPropertyDescriptor,$=(i,t,e,s)=>{for(var o=s>1?void 0:s?We(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Be(t,e,o),o};const Ge=[128,256,512,1024,2048],lt=5;let m=class extends v{constructor(){super(...arguments),this.algoCluster=!1,this.size=512,this.imgDatas=Array(),this.numImages=2,this.result=Array()}encode(){this.algoCluster?this.imgDatas.length===0&&(this.result=Ue(this.bwCanvas.getImageData(),this.numImages)):this.imgDatas.length===0?this.result=Le(this.bwCanvas.getImageData(),this.numImages):this.imgDatas.length===1&&(this.result=[Ne(this.bwCanvas.getImageData(),X(this.imgDatas[0],this.size))])}decode(){this.imgDatas.length>1&&(this.algoCluster?this.result=[ke(this.imgDatas.map(i=>X(i,this.size)))]:this.result=[He(this.imgDatas.map(i=>X(i,this.size)))])}updated(i){var t;i.has("result")&&((t=this.resultEl)==null||t.scrollIntoView({behavior:"smooth",block:"nearest"}))}render(){return p`
      <bo-shell
        title=${this.algoCluster?"Bin Ocular 2":"Bin Ocular"}
        @info-click=${()=>this.whatIsThis.scrollIntoView({behavior:"smooth"})}
        @title-click=${()=>this.algoCluster=!this.algoCluster}
      >
        <div id="upload-row">
          <div>
            <h4>Drawing</h4>
            <upload-area
              ?multiple=${!1}
              dropText="Drop here to replace drawing with image"
              @upload=${async i=>this.canvasImgData=await Dt(i.detail[0])}
            >
              <bw-canvas size=${this.size} .imgData=${this.canvasImgData}></bw-canvas>
            </upload-area>
          </div>
          <div id="image-container">
            <div>
              <h4>Images</h4>
              <upload-area
                dropText="Drop here to add image"
                @upload=${async i=>{this.imgDatas=[...this.imgDatas,...await Promise.all(i.detail.map(t=>Dt(t,!1)))],this.imgDatas.length>lt&&(this.imgDatas=this.imgDatas.slice(-lt)),this.imgDatas.length>1&&(this.numImages=this.imgDatas.length,this.size=Math.max(...this.imgDatas.map(t=>t.width)))}}
              >
                <img-grid
                  .imgDatas=${this.imgDatas}
                  @remove=${i=>{this.imgDatas=[...this.imgDatas.slice(0,i.detail),...this.imgDatas.slice(i.detail+1)],this.imgDatas.length>1&&(this.numImages=this.imgDatas.length)}}
                ></img-grid>
              </upload-area>
            </div>
            <div id="option-container">
              <label>
                Resolution:
                <select
                  .value=${this.size.toString()}
                  @change=${i=>{this.canvasImgData=this.bwCanvas.getImageData(),this.size=parseInt(i.target.value)}}
                >
                  ${Ge.map(i=>p`<option value=${i} ?selected=${i===this.size}>${i}px</option>`)}
                </select>
              </label>
            </div>
          </div>
        </div>

        <div id="action-row">
          <label>
            Number of images:
            <input
              type="range"
              min="2"
              max="${lt}"
              .value="${this.numImages.toString()}"
              @input=${i=>this.numImages=parseInt(i.target.value)}
              ?disabled=${this.imgDatas.length>1}
            />
            <span>${this.numImages}</span>
          </label>
          <div>
            <button
              @click=${this.encode}
              ?disabled=${this.imgDatas.length>(this.algoCluster?0:1)}
            >
              Encode
            </button>
            <button @click=${this.decode} ?disabled=${this.imgDatas.length<=1}>Decode</button>
          </div>
        </div>
        <div id="hint">
          This will
          ${this.imgDatas.length===0?`encode the drawing into ${this.numImages} images`:this.imgDatas.length===1?this.algoCluster?"not work. This algorithm doesn't support encoding with custom image":"encode the drawing using the image":`decode the ${this.imgDatas.length} images`}.
        </div>

        ${this.result.length?p`<div id="result">
              <h4>
                Result
                <button title="Put the 'Result' in 'Images'" @click=${()=>this.imgDatas=this.result}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.1213 15.6213 0-4.2426m0 0-4.2426 0m4.2426 0-4.2426 4.2426m3.1813-9.3113-2.12-2.12a1.5 1.5 0 00-1.061-.44h-5.379a2.25 2.25 0 00-2.25 2.25v12a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                </button>
              </h4>
              <img-result .imgDatas=${this.result}></img-result>
            </div>`:null}

        <what-is-this ?alternatecontent=${this.algoCluster}></what-is-this>
      </bo-shell>
    `}};m.styles=E`
    * {
      box-sizing: border-box;
    }

    #upload-row {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      max-width: 150vh;
    }
    @media (max-width: 536px) {
      #upload-row {
        flex-direction: column;
      }
    }
    #upload-row > div {
      flex: 1;
    }

    h4 {
      margin: 0 0 0.5rem 0.25rem;
    }
    bw-canvas,
    img-grid {
      width: 100%;
    }

    #image-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    #option-container {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
    }

    #action-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      width: 100%;
      max-width: 1000px;
    }
    #action-row > div {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    #action-row > label {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 0.125rem;
      min-width: 20rem;
    }
    input {
      flex: 1;
      cursor: pointer;
    }
    #action-row button {
      cursor: pointer;
      border: 1px solid currentColor;
      border-radius: 0.5rem;
      background-color: transparent;
      padding: 0 1rem;
      height: 3rem;
      color: #646ee4;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1rem;
      text-align: center;
    }
    #action-row button:hover {
      background-color: #646ee4;
      color: black;
    }
    #action-row button:active {
      transform: scale(0.97);
    }
    #action-row button[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    #hint {
      margin-top: 0.25rem;
      width: 100%;
      max-width: 1000px;
    }

    #result {
      margin-top: 1rem;
      width: 100%;
      max-width: 1600px;
    }
    #result button {
      vertical-align: -40%;
      cursor: pointer;
      border: none;
      background-color: transparent;
      padding: 0;
      aspect-ratio: 1 / 1;
      color: white;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    img-result {
      margin-top: 0.5rem;
    }

    what-is-this {
      margin-top: 1rem;
      width: 100%;
      max-width: 1024px;
    }
  `;$([U("bw-canvas")],m.prototype,"bwCanvas",2);$([U("#result")],m.prototype,"resultEl",2);$([U("what-is-this")],m.prototype,"whatIsThis",2);$([M()],m.prototype,"algoCluster",2);$([M()],m.prototype,"size",2);$([M()],m.prototype,"canvasImgData",2);$([M()],m.prototype,"imgDatas",2);$([M()],m.prototype,"numImages",2);$([M()],m.prototype,"result",2);m=$([S("bo-root")],m);
