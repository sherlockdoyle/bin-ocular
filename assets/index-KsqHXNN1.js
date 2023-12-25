(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,ct=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),mt=new WeakMap;let St=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ct&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&mt.set(e,t))}return t}toString(){return this.cssText}};const kt=i=>new St(typeof i=="string"?i:i+"",void 0,dt),D=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[n+1],i[0]);return new St(e,i,dt)},zt=(i,t)=>{if(ct)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=Y.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},ft=ct?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return kt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Bt,defineProperty:Wt,getOwnPropertyDescriptor:Gt,getOwnPropertyNames:Yt,getOwnPropertySymbols:Vt,getPrototypeOf:Xt}=Object,b=globalThis,vt=b.trustedTypes,qt=vt?vt.emptyScript:"",et=b.reactiveElementPolyfillSupport,M=(i,t)=>i,V={toAttribute(i,t){switch(t){case Boolean:i=i?qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ut=(i,t)=>!Bt(i,t),$t={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Wt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:n}=Gt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const h=r==null?void 0:r.call(this);n.call(this,o),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$t}static _$Ei(){if(this.hasOwnProperty(M("elementProperties")))return;const t=Xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(M("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(M("properties"))){const e=this.properties,s=[...Yt(e),...Vt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(ft(r))}else t!==void 0&&e.push(ft(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var n;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:V).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:V;this._$Em=r,this[r]=h.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,n){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ut)(r?n:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.C(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[M("elementProperties")]=new Map,P[M("finalized")]=new Map,et==null||et({ReactiveElement:P}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,X=R.trustedTypes,yt=X?X.createPolicy("lit-html",{createHTML:i=>i}):void 0,Pt="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,Ot="?"+y,Zt=`<${Ot}>`,A=document,L=()=>A.createComment(""),H=i=>i===null||typeof i!="object"&&typeof i!="function",Tt=Array.isArray,Ft=i=>Tt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",it=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,_t=/>/g,_=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,At=/"/g,It=/^(?:script|style|textarea|title)$/i,Jt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),v=Jt(1),O=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),xt=new WeakMap,w=A.createTreeWalker(A,129);function Ut(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}const Kt=(i,t)=>{const e=i.length-1,s=[];let r,n=t===2?"<svg>":"",o=U;for(let h=0;h<e;h++){const a=i[h];let c,d,l=-1,p=0;for(;p<a.length&&(o.lastIndex=p,d=o.exec(a),d!==null);)p=o.lastIndex,o===U?d[1]==="!--"?o=bt:d[1]!==void 0?o=_t:d[2]!==void 0?(It.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=_):d[3]!==void 0&&(o=_):o===_?d[0]===">"?(o=r??U,l=-1):d[1]===void 0?l=-2:(l=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?_:d[3]==='"'?At:wt):o===At||o===wt?o=_:o===bt||o===_t?o=U:(o=_,r=void 0);const g=o===_&&i[h+1].startsWith("/>")?" ":"";n+=o===U?a+Zt:l>=0?(s.push(c),a.slice(0,l)+Pt+a.slice(l)+y+g):a+y+(l===-2?h:g)}return[Ut(i,n+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class j{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[c,d]=Kt(t,e);if(this.el=j.createElement(c,s),w.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=w.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(Pt)){const p=d[o++],g=r.getAttribute(l).split(y),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:f[2],strings:g,ctor:f[1]==="."?te:f[1]==="?"?ee:f[1]==="@"?ie:K}),r.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:n}),r.removeAttribute(l));if(It.test(r.tagName)){const l=r.textContent.split(y),p=l.length-1;if(p>0){r.textContent=X?X.emptyScript:"";for(let g=0;g<p;g++)r.append(l[g],L()),w.nextNode(),a.push({type:2,index:++n});r.append(l[p],L())}}}else if(r.nodeType===8)if(r.data===Ot)a.push({type:2,index:n});else{let l=-1;for(;(l=r.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:n}),l+=y.length-1}n++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function T(i,t,e=i,s){var o,h;if(t===O)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=H(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),n===void 0?r=void 0:(r=new n(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=T(i,r._$AS(i,t.values),r,s)),t}class Qt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??A).importNode(e,!0);w.currentNode=r;let n=w.nextNode(),o=0,h=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new k(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new se(n,this,t)),this._$AV.push(c),a=s[++h]}o!==(a==null?void 0:a.index)&&(n=w.nextNode(),o++)}return w.currentNode=A,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),H(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ft(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var n;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=j.createElement(Ut(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const o=new Qt(r,this),h=o.u(this.options);o.p(e),this.$(h),this._$AH=o}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new j(t)),e}T(t){Tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const n of t)r===e.length?e.push(s=new k(this.k(L()),this.k(L()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,r){const n=this.strings;let o=!1;if(n===void 0)t=T(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const h=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=T(this,h[s+a],e,a),c===O&&(c=this._$AH[a]),o||(o=!H(c)||c!==this._$AH[a]),c===u?t=u:t!==u&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!r&&this.O(t)}O(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends K{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===u?void 0:t}}class ee extends K{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class ie extends K{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??u)===O)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class se{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const st=R.litHtmlPolyfillSupport;st==null||st(j,k),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.1.0");const re=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new k(t.insertBefore(L(),n),n,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=re(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return O}};var Ct;m._$litElement$=!0,m.finalized=!0,(Ct=globalThis.litElementHydrateSupport)==null||Ct.call(globalThis,{LitElement:m});const rt=globalThis.litElementPolyfillSupport;rt==null||rt({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:ut},oe=(i=ne,t,e)=>{const{kind:s,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,a,i)},init(h){return h!==void 0&&this.C(o,void 0,i),h}}}if(s==="setter"){const{name:o}=e;return function(h){const a=this[o];t.call(this,h),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+s)};function C(i){return(t,e)=>typeof e=="object"?oe(i,t,e):((s,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(r,n):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(i){return C({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(i,t){return(e,s,r)=>{const n=o=>{var h;return((h=o.renderRoot)==null?void 0:h.querySelector(i))??null};if(t){const{get:o,set:h}=typeof s=="object"?e:r??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return Dt(e,s,{get(){let a=o.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&h.call(this,a)),a}})}return Dt(e,s,{get(){return n(this)}})}}var ae=Object.defineProperty,he=Object.getOwnPropertyDescriptor,le=(i,t,e,s)=>{for(var r=s>1?void 0:s?he(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ae(t,e,r),r};let at=class extends m{render(){return v`
      <header>
        <a id="info" href="#info" title="What is this?">
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
        </a>
        <span id="title">Bin Ocular</span>
        <a id="github" href="https://github.com/sherlockdoyle/bin-ocular" target="_blank" title="See on GitHub">
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
    `}};at.styles=D`
    :host {
      display: flex;
      flex-direction: column;
      background-color: #111;
      width: 100vw;
      height: 100vh;
      color: white;
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
    :host #spacer,
    :host #github {
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
  `;at=le([E("bo-shell")],at);function Mt(i,t,e=!0){const{data:s}=i;let r=0,n=255;for(let h=0;h<s.length;h+=4){const a=(s[h]+s[h+1]+s[h+2])/3;s[h]=a,r=Math.min(r,a),n=Math.max(n,a)}const o=(r+n)/2;for(let h=0;h<s.length;h+=4)s[h]=s[h+1]=s[h+2]=s[h]>o?255:0;if(e){const h=new Uint8ClampedArray(s);for(let a=1;a<t-1;a++)for(let c=1;c<t-1;c++){const d=(a*t+c)*4,l=h[d];let p=0,g=0,f=0;for(let W=-1;W<=1;W++)for(let G=-1;G<=1;G++){if(W===0&&G===0)continue;const jt=((a+W)*t+(c+G))*4,gt=h[jt];gt===l?p++:(g++,f=gt)}g>p&&(s[d]=f,s[d+1]=f,s[d+2]=f)}}}function Et(i,t=!0){return new Promise(e=>{const s=new Image;s.onload=()=>{const r=document.createElement("canvas"),n=r.width=r.height=Math.max(s.width,s.height),o=r.getContext("2d");o.drawImage(s,0,0,n,n);const h=o.getImageData(0,0,n,n);Mt(h,n,t),URL.revokeObjectURL(s.src),e(h)},s.src=URL.createObjectURL(i)})}function ht(i,t){var o;if(i.width===t&&i.height===t)return i;const e=document.createElement("canvas");e.width=i.width,e.height=i.height,(o=e.getContext("2d"))==null||o.putImageData(i,0,0);const s=document.createElement("canvas");s.width=s.height=t;const r=s.getContext("2d");r.imageSmoothingEnabled=!1,r.drawImage(e,0,0,t,t);const n=r.getImageData(0,0,t,t);return Mt(n,t),n}var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,tt=(i,t,e,s)=>{for(var r=s>1?void 0:s?de(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ce(t,e,r),r};let I=class extends m{constructor(){super(...arguments),this.size=512,this.hasDrawing=!1,this.lineWidth=27.5,this.isDrawing=!1,this.lastX=0,this.lastY=0}getContext(){const i=this.canvas.getContext("2d");return i.imageSmoothingEnabled=!1,i.strokeStyle="black",i.fillStyle="white",i.lineCap=i.lineJoin="round",i.fillRect(0,0,this.canvas.width,this.canvas.height),i}firstUpdated(i){super.firstUpdated(i),this.ctx=this.getContext()}drawImgData(){this.imgData&&(this.ctx.putImageData(ht(this.imgData,this.size),0,0),this.hasDrawing=!0)}updated(i){i.has("size")&&(this.ctx=this.getContext()),i.has("imgData")&&this.imgData&&this.drawImgData()}drawLine(i,t){this.isDrawing&&(this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth*this.size/512,this.ctx.moveTo(this.lastX/this.canvas.clientWidth*this.canvas.width,this.lastY/this.canvas.clientHeight*this.canvas.height),this.ctx.lineTo(i/this.canvas.clientWidth*this.canvas.width,t/this.canvas.clientHeight*this.canvas.height),this.ctx.stroke(),this.lastX=i,this.lastY=t,this.hasDrawing=!0)}onTouchStart(i){this.isDrawing=!0,this.lastX=i.touches[0].clientX,this.lastY=i.touches[0].clientY}onTouchMove(i){this.drawLine(i.touches[0].clientX,i.touches[0].clientY),i.preventDefault()}onTouchEnd(){this.isDrawing=!1}onMouseDown(i){this.isDrawing=!0,this.lastX=i.offsetX,this.lastY=i.offsetY}onMouseMove(i){this.drawLine(i.offsetX,i.offsetY)}onMouseUp(){this.isDrawing=!1}render(){return v`
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
    `}getImageData(){return this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}};I.styles=D`
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
  `;tt([C({type:Number})],I.prototype,"size",2);tt([C({type:Object})],I.prototype,"imgData",2);tt([Q("canvas")],I.prototype,"canvas",2);I=tt([E("bw-canvas")],I);var ue=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,B=(i,t,e,s)=>{for(var r=s>1?void 0:s?pe(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ue(t,e,r),r};let x=class extends m{constructor(){super(),this.dropText="Drop image here",this.multiple=!0,this.onDragOverDocument=i=>{i.preventDefault(),this.dragOverlay.classList.add("dragging")},this.onDragLeaveDocument=()=>{this.dragOverlay.classList.remove("dragging")},this.onDragOver=i=>{i.preventDefault(),this.dragOverlay.classList.add("hovering")},this.onDragLeave=()=>{this.dragOverlay.classList.remove("hovering")},this.onDrop=i=>{var t;i.preventDefault(),this.dragOverlay.classList.remove("hovering"),this.handleUpload((t=i.dataTransfer)==null?void 0:t.files)},this.onFileInput=()=>{this.handleUpload(this.fileInput.files)},this.handleUpload=i=>{i&&this.dispatchEvent(new CustomEvent("upload",{detail:Array.from(i).filter(t=>t.type.startsWith("image/"))}))},document.addEventListener("dragover",this.onDragOverDocument),document.addEventListener("dragleave",this.onDragLeaveDocument),document.addEventListener("drop",this.onDragLeaveDocument),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop)}render(){const i=v`
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
    `;return v`
      <slot></slot>
      <button title="Upload" @click=${()=>this.fileInput.click()}>${i}</button>
      <input id="file-input" type="file" accept="image/*" ?multiple=${this.multiple} @change=${this.onFileInput} />
      <div id="drag-overlay">${i}${this.dropText}</div>
    `}};x.styles=D`
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
      right: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      transition:
        visibility 0s,
        opacity 0.1s,
        transform 0.1s;
      cursor: pointer;
      margin: 0 auto;
      border: none;
      border-radius: 50%;
      background-color: #000a;
      padding: 0;
      aspect-ratio: 1 / 1;
      color: white;
    }
    :host(:hover) button {
      transform: scale(0.75) translateY(-125%);
      visibility: visible;
      opacity: 1;
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

    svg {
      width: 3rem;
      height: 3rem;
    }
  `;B([C({type:String})],x.prototype,"dropText",2);B([C({type:Boolean})],x.prototype,"multiple",2);B([Q("#file-input")],x.prototype,"fileInput",2);B([Q("#drag-overlay")],x.prototype,"dragOverlay",2);x=B([E("drag-area")],x);/**
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
 */const N=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const r of e)(s=r._$AO)==null||s.call(r,t,!1),N(r,t);return!0},q=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Rt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),be(t)}};function $e(i){this._$AN!==void 0?(q(this),this._$AM=i,Rt(this)):this._$AM=i}function ye(i,t=!1,e=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let n=e;n<s.length;n++)N(s[n],!1),q(s[n]);else s!=null&&(N(s,!1),q(s));else N(this,i)}const be=i=>{i.type==me.CHILD&&(i._$AP??(i._$AP=ye),i._$AQ??(i._$AQ=$e))};class _e extends ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Rt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(r=this.disconnected)==null||r.call(this)),e&&(N(this,t),q(this))}setValue(t){if(ge(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=()=>new Ae;class Ae{}const nt=new WeakMap,xe=fe(class extends _e{render(i){return u}update(i,[t]){var s;const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=(s=i.options)==null?void 0:s.host,this.ot(this.lt=i.element)),u}ot(i){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=nt.get(t);e===void 0&&(e=new WeakMap,nt.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){var i,t;return typeof this.G=="function"?(i=nt.get(this.ct??globalThis))==null?void 0:i.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var De=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Nt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ee(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&De(t,e,r),r};let Z=class extends m{constructor(){super(...arguments),this.imgDatas=Array(),this.canvasRefs=Array()}updated(i){i.has("imgDatas")&&this.imgDatas.map((t,e)=>{var s,r;return(r=(s=this.canvasRefs[e].value)==null?void 0:s.getContext("2d"))==null?void 0:r.putImageData(t,0,0)})}onRemove(i){this.dispatchEvent(new CustomEvent("remove",{detail:i}))}render(){var e;const i=Math.ceil(Math.sqrt(this.imgDatas.length)),t=`flex-basis:calc((100% - ${(i-1)*.25}rem) / ${i})`;return(e=this.imgDatas)==null?void 0:e.map((s,r)=>(this.canvasRefs[r]=we(),v`
        <div style=${t}>
          <canvas width=${s.width} height=${s.height} ${xe(this.canvasRefs[r])}></canvas>
          <button title="Remove image" @click=${()=>this.onRemove(r)}>
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
      `))}};Z.styles=D`
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
  `;Nt([C({type:Array})],Z.prototype,"imgDatas",2);Z=Nt([E("img-grid")],Z);var Ce=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Lt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Se(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Ce(t,e,r),r};function Pe(i){var e;const t=document.createElement("canvas");return t.width=i.width,t.height=i.height,(e=t.getContext("2d"))==null||e.putImageData(i,0,0),t.toDataURL()}let F=class extends m{constructor(){super(...arguments),this.imgDatas=Array()}render(){var i;return(i=this.imgDatas)==null?void 0:i.map((t,e)=>v`
        <div>
          <img src=${Pe(t)} alt="noise" />
          <div>${e+1}</div>
        </div>
      `)}};F.styles=D`
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
  `;Lt([C({type:Array})],F.prototype,"imgDatas",2);F=Lt([E("img-result")],F);function Oe(i,t){const e=new Uint8Array(i);for(let s=0;s<i;++s)e[s]=Math.floor(Math.random()*t);return e}function J(i){const{data:t}=i,e=t.length/4,s=new Uint8Array(e);for(let r=0;r<e;++r)s[r]=t[r*4]===0?0:1;return s}function pt(i,t){const e=t*t,s=new Uint8ClampedArray(e*4);for(let r=0;r<e;++r)s[r*4]=s[r*4+1]=s[r*4+2]=i[r]===0?0:255,s[r*4+3]=255;return new ImageData(s,t,t)}function Ht(i,t,e){for(let s=0,r=i.length;s<r;++s)t[s]||(i[s]=(i[s]+1)%e);return i}function Te(i,t=2){const e=i.width*i.height,s=J(i),r=Oe(e,t),n=[r.slice()];for(let o=1;o<t;++o)n.push(Ht(r,s,t).slice());return n.map(o=>pt(o,i.width))}function Ie(i,t){const e=J(t);return Ht(e,J(i),2),pt(e,i.width)}function Ue(i){const[t,...e]=i.map(J),s=t.length,r=new Uint8Array(s).fill(1);for(let n=0,o=e.length;n<o;++n)for(let h=e[n],a=0;a<s;++a)r[a]&=t[a]===h[a]?1:0;return pt(r,i[0].width)}var Me=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ne=(i,t,e,s)=>{for(var r=s>1?void 0:s?Re(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Me(t,e,r),r};let lt=class extends m{render(){return v`
      <h2>What is this?</h2>
      <p>
        <strong>Bin Ocular</strong> is an innovative (and toy) project that allows you to encode binary (black and
        white) images into random noise. The magic of Bin Ocular lies in its ability to split an image into 2-5 noise
        images, which can then be combined to recreate the original image.
      </p>
      <p>
        The concept was born out of the desire to hide a well-known secret within two noise images. When combined, these
        images reveal the original image, symbolizing a unique bond between two individuals.
      </p>
      <h3>How to Use</h3>
      <p>There are three ways to use Bin Ocular:</p>
      <ol>
        <li>
          <strong>Artistry Mode:</strong> Use the <em>Drawing</em> area to create your own masterpiece. Adjust the
          <em>Line Width</em> or use the <em>Clear</em> button to start over. You can also modify the resolution of the
          canvas and the generated images, and select the number of noise images to create. The more images you
          generate, the sparser the noise will be. If you prefer, drag-and-drop an image into the drawing area to
          convert it into binary format. Click <em>Encode</em> to generate the noise images which you can then save and
          share.
        </li>
        <li>
          <strong>Noise Infusion:</strong> Begin by drawing or uploading an image in the <em>Drawing</em> area. Next,
          upload a noise image in the <em>Images</em> area. Click <em>Encode</em> and watch as a new noise image is
          created. Now you can use the original and the new noise image, just as above.
        </li>
        <li>
          <strong>Decoding Adventure:</strong> Upload multiple images in the <em>Images</em> area and press
          <em>Decode</em> to reveal the hidden image. Remember, you can upload up to 5 images. If you upload more, the
          oldest image will be removed.
        </li>
      </ol>
      <h3>Experience the Magic Physically</h3>
      <p>
        For a tangible experience of the magic of Bin Ocular, consider printing the resulting noise images on
        transparent or translucent material. When you physically overlap these printed images, the original content
        reveals itself, adding a whole new dimension to the experience. You'll need to overlap them exactly on top of
        each other to see the effect.
      </p>
      <hr />
      <p>The algorithm is simple and intuitive - upload different images and experiment!</p>
      <p>
        Please note that the website has not been tested on mobile yet, so you may encounter unexpected layouts. Also,
        the website only supports dark mode.
      </p>
      <p>
        To learn more about this project, check it out on
        <a href="https://github.com/sherlockdoyle/bin-ocular" target="_blank">GitHub</a>. If you encounter any bugs or
        have ideas for improvement, you can report or discuss them on GitHub.
      </p>
    `}};lt.styles=D`
    :host {
      line-height: 1.5;
    }
  `;lt=Ne([E("what-is-this")],lt);var Le=Object.defineProperty,He=Object.getOwnPropertyDescriptor,S=(i,t,e,s)=>{for(var r=s>1?void 0:s?He(t,e):t,n=i.length-1,o;n>=0;n--)(o=i[n])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Le(t,e,r),r};const ot=5;let $=class extends m{constructor(){super(...arguments),this.size=512,this.imgDatas=Array(),this.numImages=2,this.result=Array()}encode(){this.bwCanvas&&(this.imgDatas.length===0?this.result=Te(this.bwCanvas.getImageData(),this.numImages):this.imgDatas.length===1&&(this.result=[Ie(this.bwCanvas.getImageData(),ht(this.imgDatas[0],this.size))]))}decode(){this.imgDatas.length>1&&(this.result=[Ue(this.imgDatas.map(i=>ht(i,this.size)))])}render(){return v`
      <bo-shell>
        <div id="upload-row">
          <div>
            <h4>Drawing</h4>
            <drag-area
              ?multiple=${!1}
              dropText="Drop here to replace drawing with image"
              @upload=${async i=>this.canvasImgData=await Et(i.detail[0])}
            >
              <bw-canvas size=${this.size} .imgData=${this.canvasImgData}></bw-canvas>
            </drag-area>
          </div>
          <div id="image-container">
            <div>
              <h4>Images</h4>
              <drag-area
                dropText="Drop here to add image"
                @upload=${async i=>{this.imgDatas=[...this.imgDatas,...await Promise.all(i.detail.map(t=>Et(t,!1)))],this.imgDatas.length>ot&&(this.imgDatas=this.imgDatas.slice(-ot)),this.imgDatas.length>1&&(this.numImages=this.imgDatas.length,this.size=Math.max(...this.imgDatas.map(t=>t.width)))}}
              >
                <img-grid
                  .imgDatas=${this.imgDatas}
                  @remove=${i=>{this.imgDatas=[...this.imgDatas.slice(0,i.detail),...this.imgDatas.slice(i.detail+1)],this.imgDatas.length>1&&(this.numImages=this.imgDatas.length)}}
                ></img-grid>
              </drag-area>
            </div>
            <div id="option-container">
              <label>
                Resolution:
                <select
                  .value=${this.size.toString()}
                  @change=${i=>{var t;this.canvasImgData=(t=this.bwCanvas)==null?void 0:t.getImageData(),this.size=parseInt(i.target.value)}}
                >
                  <option value="256">256px</option>
                  <option value="512">512px</option>
                  <option value="1024">1024px</option>
                  <option value="2048">2048px</option>
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
              max="${ot}"
              .value="${this.numImages.toString()}"
              @input=${i=>this.numImages=parseInt(i.target.value)}
              ?disabled=${this.imgDatas.length>1}
            />
            <span>${this.numImages}</span>
          </label>
          <div>
            <button @click=${this.encode} ?disabled=${this.imgDatas.length>1}>Encode</button>
            <button @click=${this.decode} ?disabled=${this.imgDatas.length<=1}>Decode</button>
          </div>
        </div>
        <div id="hint">
          This will
          ${this.imgDatas.length===0?`encode the drawing into ${this.numImages} images.`:this.imgDatas.length===1?"encode the drawing using the image.":`decode the ${this.imgDatas.length} images.`}
        </div>

        ${this.result.length?v`<div id="result">
              <h4>Result</h4>
              <img-result .imgDatas=${this.result}></img-result>
            </div>`:null}

        <what-is-this id="info"></what-is-this>
      </bo-shell>
    `}};$.styles=D`
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
    button {
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
    button:hover {
      background-color: #646ee4;
      color: black;
    }
    button:active {
      transform: scale(0.97);
    }
    button[disabled] {
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
    img-result {
      margin-top: 0.5rem;
    }

    what-is-this {
      margin-top: 1rem;
      width: 100%;
      max-width: 1024px;
    }
  `;S([Q("bw-canvas")],$.prototype,"bwCanvas",2);S([z()],$.prototype,"size",2);S([z()],$.prototype,"canvasImgData",2);S([z()],$.prototype,"imgDatas",2);S([z()],$.prototype,"numImages",2);S([z()],$.prototype,"result",2);$=S([E("bo-root")],$);
