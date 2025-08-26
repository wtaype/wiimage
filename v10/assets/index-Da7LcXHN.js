(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Ff(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var eo={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Uf=eo.exports,Hu;function jf(){return Hu||(Hu=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:Uf,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,l=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,T={},R=T.toString,x=T.hasOwnProperty,O=x.toString,W=O.call(Object),$={},Q=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Y=function(u){return u!=null&&u===u.window},Z=e.document,ve={type:!0,src:!0,nonce:!0,noModule:!0};function Te(s,u,h){h=h||Z;var d,m,y=h.createElement("script");if(y.text=s,u)for(d in ve)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function Ue(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?T[R.call(s)]||"object":typeof s}var At="3.7.1",Ye=/HTML$/i,c=function(s,u){return new c.fn.init(s,u)};c.fn=c.prototype={jquery:At,constructor:c,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=c.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return c.each(this,s)},map:function(s){return this.pushStack(c.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},c.extend=c.fn.extend=function(){var s,u,h,d,m,y,v=arguments[0]||{},C=1,I=arguments.length,k=!1;for(typeof v=="boolean"&&(k=v,v=arguments[C]||{},C++),typeof v!="object"&&!Q(v)&&(v={}),C===I&&(v=this,C--);C<I;C++)if((s=arguments[C])!=null)for(u in s)d=s[u],!(u==="__proto__"||v===d)&&(k&&d&&(c.isPlainObject(d)||(m=Array.isArray(d)))?(h=v[u],m&&!Array.isArray(h)?y=[]:!m&&!c.isPlainObject(h)?y={}:y=h,m=!1,v[u]=c.extend(k,y,d)):d!==void 0&&(v[u]=d));return v},c.extend({expando:"jQuery"+(At+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||R.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=x.call(u,"constructor")&&u.constructor,typeof h=="function"&&O.call(h)===W):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){Te(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(S(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=c.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(S(Object(s))?c.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:_.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!Ye.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],y=0,v=s.length,C=!h;y<v;y++)d=!u(s[y],y),d!==C&&m.push(s[y]);return m},map:function(s,u,h){var d,m,y=0,v=[];if(S(s))for(d=s.length;y<d;y++)m=u(s[y],y,h),m!=null&&v.push(m);else for(y in s)m=u(s[y],y,h),m!=null&&v.push(m);return l(v)},guid:1,support:$}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=r[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){T["[object "+u+"]"]=u.toLowerCase()});function S(s){var u=!!s&&"length"in s&&s.length,h=Ue(s);return Q(s)||Y(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function b(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var D=r.pop,N=r.sort,M=r.splice,A="[\\x20\\t\\r\\n\\f]",pt=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g");c.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var ir=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Go(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}c.escapeSelector=function(s){return(s+"").replace(ir,Go)};var gt=Z,fn=p;(function(){var s,u,h,d,m,y=fn,v,C,I,k,B,q=c.expando,F=0,K=0,ue=In(),Ee=In(),le=In(),We=In(),qe=function(w,P){return w===P&&(m=!0),0},St="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ct="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ye="\\["+A+"*("+Ct+")(?:"+A+"*([*^$|!~]?=)"+A+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ct+"))|)"+A+"*\\]",He=":("+Ct+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ye+")*)|.*)\\)|)",Ae=new RegExp(A+"+","g"),Me=new RegExp("^"+A+"*,"+A+"*"),Vt=new RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),o=new RegExp(A+"|>"),f=new RegExp(He),g=new RegExp("^"+Ct+"$"),E={ID:new RegExp("^#("+Ct+")"),CLASS:new RegExp("^\\.("+Ct+")"),TAG:new RegExp("^("+Ct+"|[*])"),ATTR:new RegExp("^"+ye),PSEUDO:new RegExp("^"+He),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:new RegExp("^(?:"+St+")$","i"),needsContext:new RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ke=/[+~]/,Ne=new RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),me=function(w,P){var L="0x"+w.slice(1)-65536;return P||(L<0?String.fromCharCode(L+65536):String.fromCharCode(L>>10|55296,L&1023|56320))},et=function(){jn()},tt=Ws(function(w){return w.disabled===!0&&b(w,"fieldset")},{dir:"parentNode",next:"legend"});function Un(){try{return v.activeElement}catch{}}try{y.apply(r=a.call(gt.childNodes),gt.childNodes),r[gt.childNodes.length].nodeType}catch{y={apply:function(P,L){fn.apply(P,a.call(L))},call:function(P){fn.apply(P,a.call(arguments,1))}}}function _e(w,P,L,j){var H,J,ee,ie,te,we,he,de=P&&P.ownerDocument,Ie=P?P.nodeType:9;if(L=L||[],typeof w!="string"||!w||Ie!==1&&Ie!==9&&Ie!==11)return L;if(!j&&(jn(P),P=P||v,I)){if(Ie!==11&&(te=X.exec(w)))if(H=te[1]){if(Ie===9)if(ee=P.getElementById(H)){if(ee.id===H)return y.call(L,ee),L}else return L;else if(de&&(ee=de.getElementById(H))&&_e.contains(P,ee)&&ee.id===H)return y.call(L,ee),L}else{if(te[2])return y.apply(L,P.getElementsByTagName(w)),L;if((H=te[3])&&P.getElementsByClassName)return y.apply(L,P.getElementsByClassName(H)),L}if(!We[w+" "]&&(!k||!k.test(w))){if(he=w,de=P,Ie===1&&(o.test(w)||Vt.test(w))){for(de=ke.test(w)&&aa(P.parentNode)||P,(de!=P||!$.scope)&&((ie=P.getAttribute("id"))?ie=c.escapeSelector(ie):P.setAttribute("id",ie=q)),we=$i(w),J=we.length;J--;)we[J]=(ie?"#"+ie:":scope")+" "+zs(we[J]);he=we.join(",")}try{return y.apply(L,de.querySelectorAll(he)),L}catch{We(w,!0)}finally{ie===q&&P.removeAttribute("id")}}}return qu(w.replace(pt,"$1"),P,L,j)}function In(){var w=[];function P(L,j){return w.push(L+" ")>u.cacheLength&&delete P[w.shift()],P[L+" "]=j}return P}function vt(w){return w[q]=!0,w}function ei(w){var P=v.createElement("fieldset");try{return!!w(P)}catch{return!1}finally{P.parentNode&&P.parentNode.removeChild(P),P=null}}function Vf(w){return function(P){return b(P,"input")&&P.type===w}}function Of(w){return function(P){return(b(P,"input")||b(P,"button"))&&P.type===w}}function ju(w){return function(P){return"form"in P?P.parentNode&&P.disabled===!1?"label"in P?"label"in P.parentNode?P.parentNode.disabled===w:P.disabled===w:P.isDisabled===w||P.isDisabled!==!w&&tt(P)===w:P.disabled===w:"label"in P?P.disabled===w:!1}}function yr(w){return vt(function(P){return P=+P,vt(function(L,j){for(var H,J=w([],L.length,P),ee=J.length;ee--;)L[H=J[ee]]&&(L[H]=!(j[H]=L[H]))})})}function aa(w){return w&&typeof w.getElementsByTagName<"u"&&w}function jn(w){var P,L=w?w.ownerDocument||w:gt;return L==v||L.nodeType!==9||!L.documentElement||(v=L,C=v.documentElement,I=!c.isXMLDoc(v),B=C.matches||C.webkitMatchesSelector||C.msMatchesSelector,C.msMatchesSelector&&gt!=v&&(P=v.defaultView)&&P.top!==P&&P.addEventListener("unload",et),$.getById=ei(function(j){return C.appendChild(j).id=c.expando,!v.getElementsByName||!v.getElementsByName(c.expando).length}),$.disconnectedMatch=ei(function(j){return B.call(j,"*")}),$.scope=ei(function(){return v.querySelectorAll(":scope")}),$.cssHas=ei(function(){try{return v.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),$.getById?(u.filter.ID=function(j){var H=j.replace(Ne,me);return function(J){return J.getAttribute("id")===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&I){var J=H.getElementById(j);return J?[J]:[]}}):(u.filter.ID=function(j){var H=j.replace(Ne,me);return function(J){var ee=typeof J.getAttributeNode<"u"&&J.getAttributeNode("id");return ee&&ee.value===H}},u.find.ID=function(j,H){if(typeof H.getElementById<"u"&&I){var J,ee,ie,te=H.getElementById(j);if(te){if(J=te.getAttributeNode("id"),J&&J.value===j)return[te];for(ie=H.getElementsByName(j),ee=0;te=ie[ee++];)if(J=te.getAttributeNode("id"),J&&J.value===j)return[te]}return[]}}),u.find.TAG=function(j,H){return typeof H.getElementsByTagName<"u"?H.getElementsByTagName(j):H.querySelectorAll(j)},u.find.CLASS=function(j,H){if(typeof H.getElementsByClassName<"u"&&I)return H.getElementsByClassName(j)},k=[],ei(function(j){var H;C.appendChild(j).innerHTML="<a id='"+q+"' href='' disabled='disabled'></a><select id='"+q+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||k.push("\\["+A+"*(?:value|"+St+")"),j.querySelectorAll("[id~="+q+"-]").length||k.push("~="),j.querySelectorAll("a#"+q+"+*").length||k.push(".#.+[+~]"),j.querySelectorAll(":checked").length||k.push(":checked"),H=v.createElement("input"),H.setAttribute("type","hidden"),j.appendChild(H).setAttribute("name","D"),C.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&k.push(":enabled",":disabled"),H=v.createElement("input"),H.setAttribute("name",""),j.appendChild(H),j.querySelectorAll("[name='']").length||k.push("\\["+A+"*name"+A+"*="+A+`*(?:''|"")`)}),$.cssHas||k.push(":has"),k=k.length&&new RegExp(k.join("|")),qe=function(j,H){if(j===H)return m=!0,0;var J=!j.compareDocumentPosition-!H.compareDocumentPosition;return J||(J=(j.ownerDocument||j)==(H.ownerDocument||H)?j.compareDocumentPosition(H):1,J&1||!$.sortDetached&&H.compareDocumentPosition(j)===J?j===v||j.ownerDocument==gt&&_e.contains(gt,j)?-1:H===v||H.ownerDocument==gt&&_e.contains(gt,H)?1:d?_.call(d,j)-_.call(d,H):0:J&4?-1:1)}),v}_e.matches=function(w,P){return _e(w,null,null,P)},_e.matchesSelector=function(w,P){if(jn(w),I&&!We[P+" "]&&(!k||!k.test(P)))try{var L=B.call(w,P);if(L||$.disconnectedMatch||w.document&&w.document.nodeType!==11)return L}catch{We(P,!0)}return _e(P,v,null,[w]).length>0},_e.contains=function(w,P){return(w.ownerDocument||w)!=v&&jn(w),c.contains(w,P)},_e.attr=function(w,P){(w.ownerDocument||w)!=v&&jn(w);var L=u.attrHandle[P.toLowerCase()],j=L&&x.call(u.attrHandle,P.toLowerCase())?L(w,P,!I):void 0;return j!==void 0?j:w.getAttribute(P)},_e.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},c.uniqueSort=function(w){var P,L=[],j=0,H=0;if(m=!$.sortStable,d=!$.sortStable&&a.call(w,0),N.call(w,qe),m){for(;P=w[H++];)P===w[H]&&(j=L.push(H));for(;j--;)M.call(w,L[j],1)}return d=null,w},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(a.apply(this)))},u=c.expr={cacheLength:50,createPseudo:vt,match:E,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(Ne,me),w[3]=(w[3]||w[4]||w[5]||"").replace(Ne,me),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||_e.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&_e.error(w[0]),w},PSEUDO:function(w){var P,L=!w[6]&&w[2];return E.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":L&&f.test(L)&&(P=$i(L,!0))&&(P=L.indexOf(")",L.length-P)-L.length)&&(w[0]=w[0].slice(0,P),w[2]=L.slice(0,P)),w.slice(0,3))}},filter:{TAG:function(w){var P=w.replace(Ne,me).toLowerCase();return w==="*"?function(){return!0}:function(L){return b(L,P)}},CLASS:function(w){var P=ue[w+" "];return P||(P=new RegExp("(^|"+A+")"+w+"("+A+"|$)"))&&ue(w,function(L){return P.test(typeof L.className=="string"&&L.className||typeof L.getAttribute<"u"&&L.getAttribute("class")||"")})},ATTR:function(w,P,L){return function(j){var H=_e.attr(j,w);return H==null?P==="!=":P?(H+="",P==="="?H===L:P==="!="?H!==L:P==="^="?L&&H.indexOf(L)===0:P==="*="?L&&H.indexOf(L)>-1:P==="$="?L&&H.slice(-L.length)===L:P==="~="?(" "+H.replace(Ae," ")+" ").indexOf(L)>-1:P==="|="?H===L||H.slice(0,L.length+1)===L+"-":!1):!0}},CHILD:function(w,P,L,j,H){var J=w.slice(0,3)!=="nth",ee=w.slice(-4)!=="last",ie=P==="of-type";return j===1&&H===0?function(te){return!!te.parentNode}:function(te,we,he){var de,Ie,oe,Ve,wt,ct=J!==ee?"nextSibling":"previousSibling",Ot=te.parentNode,Zt=ie&&te.nodeName.toLowerCase(),ti=!he&&!ie,Tt=!1;if(Ot){if(J){for(;ct;){for(oe=te;oe=oe[ct];)if(ie?b(oe,Zt):oe.nodeType===1)return!1;wt=ct=w==="only"&&!wt&&"nextSibling"}return!0}if(wt=[ee?Ot.firstChild:Ot.lastChild],ee&&ti){for(Ie=Ot[q]||(Ot[q]={}),de=Ie[w]||[],Ve=de[0]===F&&de[1],Tt=Ve&&de[2],oe=Ve&&Ot.childNodes[Ve];oe=++Ve&&oe&&oe[ct]||(Tt=Ve=0)||wt.pop();)if(oe.nodeType===1&&++Tt&&oe===te){Ie[w]=[F,Ve,Tt];break}}else if(ti&&(Ie=te[q]||(te[q]={}),de=Ie[w]||[],Ve=de[0]===F&&de[1],Tt=Ve),Tt===!1)for(;(oe=++Ve&&oe&&oe[ct]||(Tt=Ve=0)||wt.pop())&&!((ie?b(oe,Zt):oe.nodeType===1)&&++Tt&&(ti&&(Ie=oe[q]||(oe[q]={}),Ie[w]=[F,Tt]),oe===te)););return Tt-=H,Tt===j||Tt%j===0&&Tt/j>=0}}},PSEUDO:function(w,P){var L,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||_e.error("unsupported pseudo: "+w);return j[q]?j(P):j.length>1?(L=[w,w,"",P],u.setFilters.hasOwnProperty(w.toLowerCase())?vt(function(H,J){for(var ee,ie=j(H,P),te=ie.length;te--;)ee=_.call(H,ie[te]),H[ee]=!(J[ee]=ie[te])}):function(H){return j(H,0,L)}):j}},pseudos:{not:vt(function(w){var P=[],L=[],j=ha(w.replace(pt,"$1"));return j[q]?vt(function(H,J,ee,ie){for(var te,we=j(H,null,ie,[]),he=H.length;he--;)(te=we[he])&&(H[he]=!(J[he]=te))}):function(H,J,ee){return P[0]=H,j(P,null,ee,L),P[0]=null,!L.pop()}}),has:vt(function(w){return function(P){return _e(w,P).length>0}}),contains:vt(function(w){return w=w.replace(Ne,me),function(P){return(P.textContent||c.text(P)).indexOf(w)>-1}}),lang:vt(function(w){return g.test(w||"")||_e.error("unsupported lang: "+w),w=w.replace(Ne,me).toLowerCase(),function(P){var L;do if(L=I?P.lang:P.getAttribute("xml:lang")||P.getAttribute("lang"))return L=L.toLowerCase(),L===w||L.indexOf(w+"-")===0;while((P=P.parentNode)&&P.nodeType===1);return!1}}),target:function(w){var P=e.location&&e.location.hash;return P&&P.slice(1)===w.id},root:function(w){return w===C},focus:function(w){return w===Un()&&v.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:ju(!1),disabled:ju(!0),checked:function(w){return b(w,"input")&&!!w.checked||b(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return U.test(w.nodeName)},input:function(w){return V.test(w.nodeName)},button:function(w){return b(w,"input")&&w.type==="button"||b(w,"button")},text:function(w){var P;return b(w,"input")&&w.type==="text"&&((P=w.getAttribute("type"))==null||P.toLowerCase()==="text")},first:yr(function(){return[0]}),last:yr(function(w,P){return[P-1]}),eq:yr(function(w,P,L){return[L<0?L+P:L]}),even:yr(function(w,P){for(var L=0;L<P;L+=2)w.push(L);return w}),odd:yr(function(w,P){for(var L=1;L<P;L+=2)w.push(L);return w}),lt:yr(function(w,P,L){var j;for(L<0?j=L+P:L>P?j=P:j=L;--j>=0;)w.push(j);return w}),gt:yr(function(w,P,L){for(var j=L<0?L+P:L;++j<P;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=Vf(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=Of(s);function Bu(){}Bu.prototype=u.filters=u.pseudos,u.setFilters=new Bu;function $i(w,P){var L,j,H,J,ee,ie,te,we=Ee[w+" "];if(we)return P?0:we.slice(0);for(ee=w,ie=[],te=u.preFilter;ee;){(!L||(j=Me.exec(ee)))&&(j&&(ee=ee.slice(j[0].length)||ee),ie.push(H=[])),L=!1,(j=Vt.exec(ee))&&(L=j.shift(),H.push({value:L,type:j[0].replace(pt," ")}),ee=ee.slice(L.length));for(J in u.filter)(j=E[J].exec(ee))&&(!te[J]||(j=te[J](j)))&&(L=j.shift(),H.push({value:L,type:J,matches:j}),ee=ee.slice(L.length));if(!L)break}return P?ee.length:ee?_e.error(w):Ee(w,ie).slice(0)}function zs(w){for(var P=0,L=w.length,j="";P<L;P++)j+=w[P].value;return j}function Ws(w,P,L){var j=P.dir,H=P.next,J=H||j,ee=L&&J==="parentNode",ie=K++;return P.first?function(te,we,he){for(;te=te[j];)if(te.nodeType===1||ee)return w(te,we,he);return!1}:function(te,we,he){var de,Ie,oe=[F,ie];if(he){for(;te=te[j];)if((te.nodeType===1||ee)&&w(te,we,he))return!0}else for(;te=te[j];)if(te.nodeType===1||ee)if(Ie=te[q]||(te[q]={}),H&&b(te,H))te=te[j]||te;else{if((de=Ie[J])&&de[0]===F&&de[1]===ie)return oe[2]=de[2];if(Ie[J]=oe,oe[2]=w(te,we,he))return!0}return!1}}function ua(w){return w.length>1?function(P,L,j){for(var H=w.length;H--;)if(!w[H](P,L,j))return!1;return!0}:w[0]}function Mf(w,P,L){for(var j=0,H=P.length;j<H;j++)_e(w,P[j],L);return L}function Gs(w,P,L,j,H){for(var J,ee=[],ie=0,te=w.length,we=P!=null;ie<te;ie++)(J=w[ie])&&(!L||L(J,j,H))&&(ee.push(J),we&&P.push(ie));return ee}function ca(w,P,L,j,H,J){return j&&!j[q]&&(j=ca(j)),H&&!H[q]&&(H=ca(H,J)),vt(function(ee,ie,te,we){var he,de,Ie,oe,Ve=[],wt=[],ct=ie.length,Ot=ee||Mf(P||"*",te.nodeType?[te]:te,[]),Zt=w&&(ee||!P)?Gs(Ot,Ve,w,te,we):Ot;if(L?(oe=H||(ee?w:ct||j)?[]:ie,L(Zt,oe,te,we)):oe=Zt,j)for(he=Gs(oe,wt),j(he,[],te,we),de=he.length;de--;)(Ie=he[de])&&(oe[wt[de]]=!(Zt[wt[de]]=Ie));if(ee){if(H||w){if(H){for(he=[],de=oe.length;de--;)(Ie=oe[de])&&he.push(Zt[de]=Ie);H(null,oe=[],he,we)}for(de=oe.length;de--;)(Ie=oe[de])&&(he=H?_.call(ee,Ie):Ve[de])>-1&&(ee[he]=!(ie[he]=Ie))}}else oe=Gs(oe===ie?oe.splice(ct,oe.length):oe),H?H(null,ie,oe,we):y.apply(ie,oe)})}function la(w){for(var P,L,j,H=w.length,J=u.relative[w[0].type],ee=J||u.relative[" "],ie=J?1:0,te=Ws(function(de){return de===P},ee,!0),we=Ws(function(de){return _.call(P,de)>-1},ee,!0),he=[function(de,Ie,oe){var Ve=!J&&(oe||Ie!=h)||((P=Ie).nodeType?te(de,Ie,oe):we(de,Ie,oe));return P=null,Ve}];ie<H;ie++)if(L=u.relative[w[ie].type])he=[Ws(ua(he),L)];else{if(L=u.filter[w[ie].type].apply(null,w[ie].matches),L[q]){for(j=++ie;j<H&&!u.relative[w[j].type];j++);return ca(ie>1&&ua(he),ie>1&&zs(w.slice(0,ie-1).concat({value:w[ie-2].type===" "?"*":""})).replace(pt,"$1"),L,ie<j&&la(w.slice(ie,j)),j<H&&la(w=w.slice(j)),j<H&&zs(w))}he.push(L)}return ua(he)}function Lf(w,P){var L=P.length>0,j=w.length>0,H=function(J,ee,ie,te,we){var he,de,Ie,oe=0,Ve="0",wt=J&&[],ct=[],Ot=h,Zt=J||j&&u.find.TAG("*",we),ti=F+=Ot==null?1:Math.random()||.1,Tt=Zt.length;for(we&&(h=ee==v||ee||we);Ve!==Tt&&(he=Zt[Ve])!=null;Ve++){if(j&&he){for(de=0,!ee&&he.ownerDocument!=v&&(jn(he),ie=!I);Ie=w[de++];)if(Ie(he,ee||v,ie)){y.call(te,he);break}we&&(F=ti)}L&&((he=!Ie&&he)&&oe--,J&&wt.push(he))}if(oe+=Ve,L&&Ve!==oe){for(de=0;Ie=P[de++];)Ie(wt,ct,ee,ie);if(J){if(oe>0)for(;Ve--;)wt[Ve]||ct[Ve]||(ct[Ve]=D.call(te));ct=Gs(ct)}y.apply(te,ct),we&&!J&&ct.length>0&&oe+P.length>1&&c.uniqueSort(te)}return we&&(F=ti,h=Ot),wt};return L?vt(H):H}function ha(w,P){var L,j=[],H=[],J=le[w+" "];if(!J){for(P||(P=$i(w)),L=P.length;L--;)J=la(P[L]),J[q]?j.push(J):H.push(J);J=le(w,Lf(H,j)),J.selector=w}return J}function qu(w,P,L,j){var H,J,ee,ie,te,we=typeof w=="function"&&w,he=!j&&$i(w=we.selector||w);if(L=L||[],he.length===1){if(J=he[0]=he[0].slice(0),J.length>2&&(ee=J[0]).type==="ID"&&P.nodeType===9&&I&&u.relative[J[1].type]){if(P=(u.find.ID(ee.matches[0].replace(Ne,me),P)||[])[0],P)we&&(P=P.parentNode);else return L;w=w.slice(J.shift().value.length)}for(H=E.needsContext.test(w)?0:J.length;H--&&(ee=J[H],!u.relative[ie=ee.type]);)if((te=u.find[ie])&&(j=te(ee.matches[0].replace(Ne,me),ke.test(J[0].type)&&aa(P.parentNode)||P))){if(J.splice(H,1),w=j.length&&zs(J),!w)return y.apply(L,j),L;break}}return(we||ha(w,he))(j,P,!I,L,!P||ke.test(w)&&aa(P.parentNode)||P),L}$.sortStable=q.split("").sort(qe).join("")===q,jn(),$.sortDetached=ei(function(w){return w.compareDocumentPosition(v.createElement("fieldset"))&1}),c.find=_e,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,_e.compile=ha,_e.select=qu,_e.setDocument=jn,_e.tokenize=$i,_e.escape=c.escapeSelector,_e.getText=c.text,_e.isXML=c.isXMLDoc,_e.selectors=c.expr,_e.support=c.support,_e.uniqueSort=c.uniqueSort})();var $t=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&c(s).is(h))break;d.push(s)}return d},Si=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},Is=c.expr.match.needsContext,Ft=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function ze(s,u,h){return Q(u)?c.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?c.grep(s,function(d){return d===u!==h}):typeof u!="string"?c.grep(s,function(d){return _.call(u,d)>-1!==h}):c.filter(u,s,h)}c.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?c.find.matchesSelector(d,s)?[d]:[]:c.find.matches(s,c.grep(u,function(m){return m.nodeType===1}))},c.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(c(s).filter(function(){for(u=0;u<d;u++)if(c.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)c.find(s,m[u],h);return d>1?c.uniqueSort(h):h},filter:function(s){return this.pushStack(ze(this,s||[],!1))},not:function(s){return this.pushStack(ze(this,s||[],!0))},is:function(s){return!!ze(this,typeof s=="string"&&Is.test(s)?c(s):s||[],!1).length}});var As,sr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ko=c.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||As,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=sr.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof c?u[0]:u,c.merge(this,c.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:Z,!0)),Ft.test(d[1])&&c.isPlainObject(u))for(d in u)Q(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=Z.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(Q(s))return h.ready!==void 0?h.ready(s):s(c)}return c.makeArray(s,this)};Ko.prototype=c.fn,As=c(Z);var Dr=/^(?:parents|prev(?:Until|All))/,Qo={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(s){var u=c(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(c.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,y=[],v=typeof s!="string"&&c(s);if(!Is.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(v?v.index(h)>-1:h.nodeType===1&&c.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?c.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(c(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function bs(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}c.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return $t(s,"parentNode")},parentsUntil:function(s,u,h){return $t(s,"parentNode",h)},next:function(s){return bs(s,"nextSibling")},prev:function(s){return bs(s,"previousSibling")},nextAll:function(s){return $t(s,"nextSibling")},prevAll:function(s){return $t(s,"previousSibling")},nextUntil:function(s,u,h){return $t(s,"nextSibling",h)},prevUntil:function(s,u,h){return $t(s,"previousSibling",h)},siblings:function(s){return Si((s.parentNode||{}).firstChild,s)},children:function(s){return Si(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(b(s,"template")&&(s=s.content||s),c.merge([],s.childNodes))}},function(s,u){c.fn[s]=function(h,d){var m=c.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=c.filter(d,m)),this.length>1&&(Qo[s]||c.uniqueSort(m),Dr.test(s)&&m.reverse()),this.pushStack(m)}});var mt=/[^\x20\t\r\n\f]+/g;function xr(s){var u={};return c.each(s.match(mt)||[],function(h,d){u[d]=!0}),u}c.Callbacks=function(s){s=typeof s=="string"?xr(s):c.extend({},s);var u,h,d,m,y=[],v=[],C=-1,I=function(){for(m=m||s.once,d=u=!0;v.length;C=-1)for(h=v.shift();++C<y.length;)y[C].apply(h[0],h[1])===!1&&s.stopOnFalse&&(C=y.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?y=[]:y="")},k={add:function(){return y&&(h&&!u&&(C=y.length-1,v.push(h)),(function B(q){c.each(q,function(F,K){Q(K)?(!s.unique||!k.has(K))&&y.push(K):K&&K.length&&Ue(K)!=="string"&&B(K)})})(arguments),h&&!u&&I()),this},remove:function(){return c.each(arguments,function(B,q){for(var F;(F=c.inArray(q,y,F))>-1;)y.splice(F,1),F<=C&&C--}),this},has:function(B){return B?c.inArray(B,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=v=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=v=[],!h&&!u&&(y=h=""),this},locked:function(){return!!m},fireWith:function(B,q){return m||(q=q||[],q=[B,q.slice?q.slice():q],v.push(q),u||I()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k};function zt(s){return s}function Nn(s){throw s}function Nr(s,u,h,d){var m;try{s&&Q(m=s.promise)?m.call(s).done(u).fail(h):s&&Q(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}c.extend({Deferred:function(s){var u=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return c.Deferred(function(v){c.each(u,function(C,I){var k=Q(y[I[4]])&&y[I[4]];m[I[1]](function(){var B=k&&k.apply(this,arguments);B&&Q(B.promise)?B.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[I[0]+"With"](this,k?[B]:arguments)})}),y=null}).promise()},then:function(y,v,C){var I=0;function k(B,q,F,K){return function(){var ue=this,Ee=arguments,le=function(){var qe,St;if(!(B<I)){if(qe=F.apply(ue,Ee),qe===q.promise())throw new TypeError("Thenable self-resolution");St=qe&&(typeof qe=="object"||typeof qe=="function")&&qe.then,Q(St)?K?St.call(qe,k(I,q,zt,K),k(I,q,Nn,K)):(I++,St.call(qe,k(I,q,zt,K),k(I,q,Nn,K),k(I,q,zt,q.notifyWith))):(F!==zt&&(ue=void 0,Ee=[qe]),(K||q.resolveWith)(ue,Ee))}},We=K?le:function(){try{le()}catch(qe){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(qe,We.error),B+1>=I&&(F!==Nn&&(ue=void 0,Ee=[qe]),q.rejectWith(ue,Ee))}};B?We():(c.Deferred.getErrorHook?We.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(We.error=c.Deferred.getStackHook()),e.setTimeout(We))}}return c.Deferred(function(B){u[0][3].add(k(0,B,Q(C)?C:zt,B.notifyWith)),u[1][3].add(k(0,B,Q(y)?y:zt)),u[2][3].add(k(0,B,Q(v)?v:Nn))}).promise()},promise:function(y){return y!=null?c.extend(y,d):d}},m={};return c.each(u,function(y,v){var C=v[2],I=v[5];d[v[1]]=C.add,I&&C.add(function(){h=I},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),C.add(v[3].fire),m[v[0]]=function(){return m[v[0]+"With"](this===m?void 0:this,arguments),this},m[v[0]+"With"]=C.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),y=c.Deferred(),v=function(C){return function(I){d[C]=this,m[C]=arguments.length>1?a.call(arguments):I,--u||y.resolveWith(d,m)}};if(u<=1&&(Nr(s,y.done(v(h)).resolve,y.reject,!u),y.state()==="pending"||Q(m[h]&&m[h].then)))return y.then();for(;h--;)Nr(m[h],v(h),y.reject);return y.promise()}});var Ci=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&Ci.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},c.readyException=function(s){e.setTimeout(function(){throw s})};var Vr=c.Deferred();c.fn.ready=function(s){return Vr.then(s).catch(function(u){c.readyException(u)}),this},c.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(s!==!0&&--c.readyWait>0)&&Vr.resolveWith(Z,[c]))}}),c.ready.then=Vr.then;function Or(){Z.removeEventListener("DOMContentLoaded",Or),e.removeEventListener("load",Or),c.ready()}Z.readyState==="complete"||Z.readyState!=="loading"&&!Z.documentElement.doScroll?e.setTimeout(c.ready):(Z.addEventListener("DOMContentLoaded",Or),e.addEventListener("load",Or));var Ut=function(s,u,h,d,m,y,v){var C=0,I=s.length,k=h==null;if(Ue(h)==="object"){m=!0;for(C in h)Ut(s,u,C,h[C],!0,y,v)}else if(d!==void 0&&(m=!0,Q(d)||(v=!0),k&&(v?(u.call(s,d),u=null):(k=u,u=function(B,q,F){return k.call(c(B),F)})),u))for(;C<I;C++)u(s[C],h,v?d:d.call(s[C],C,u(s[C],h)));return m?s:k?u.call(s):I?u(s[0],h):y},Ss=/^-ms-/,Ri=/-([a-z])/g;function Cs(s,u){return u.toUpperCase()}function Rt(s){return s.replace(Ss,"ms-").replace(Ri,Cs)}var dn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function pn(){this.expando=c.expando+pn.uid++}pn.uid=1,pn.prototype={cache:function(s){var u=s[this.expando];return u||(u={},dn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[Rt(u)]=h;else for(d in u)m[Rt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][Rt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(Rt):(u=Rt(u),u=u in d?[u]:u.match(mt)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||c.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!c.isEmptyObject(u)}};var re=new pn,Pe=new pn,it=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Mr=/[A-Z]/g;function Rs(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:it.test(s)?JSON.parse(s):s}function Pi(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(Mr,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=Rs(h)}catch{}Pe.set(s,u,h)}else h=void 0;return h}c.extend({hasData:function(s){return Pe.hasData(s)||re.hasData(s)},data:function(s,u,h){return Pe.access(s,u,h)},removeData:function(s,u){Pe.remove(s,u)},_data:function(s,u,h){return re.access(s,u,h)},_removeData:function(s,u){re.remove(s,u)}}),c.fn.extend({data:function(s,u){var h,d,m,y=this[0],v=y&&y.attributes;if(s===void 0){if(this.length&&(m=Pe.get(y),y.nodeType===1&&!re.get(y,"hasDataAttrs"))){for(h=v.length;h--;)v[h]&&(d=v[h].name,d.indexOf("data-")===0&&(d=Rt(d.slice(5)),Pi(y,d,m[d])));re.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){Pe.set(this,s)}):Ut(this,function(C){var I;if(y&&C===void 0)return I=Pe.get(y,s),I!==void 0||(I=Pi(y,s),I!==void 0)?I:void 0;this.each(function(){Pe.set(this,s,C)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Pe.remove(this,s)})}}),c.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=re.get(s,u),h&&(!d||Array.isArray(h)?d=re.access(s,u,c.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=c.queue(s,u),d=h.length,m=h.shift(),y=c._queueHooks(s,u),v=function(){c.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,v,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return re.get(s,h)||re.access(s,h,{empty:c.Callbacks("once memory").add(function(){re.remove(s,[u+"queue",h])})})}}),c.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?c.queue(this[0],s):u===void 0?this:this.each(function(){var d=c.queue(this,s,u);c._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,s)})},dequeue:function(s){return this.each(function(){c.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=c.Deferred(),y=this,v=this.length,C=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";v--;)h=re.get(y[v],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(C));return C(),m.promise(u)}});var Ps=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,jt=new RegExp("^(?:([+-])=|)("+Ps+")([a-z%]*)$","i"),Pt=["Top","Right","Bottom","Left"],Wt=Z.documentElement,Gt=function(s){return c.contains(s.ownerDocument,s)},Xo={composed:!0};Wt.getRootNode&&(Gt=function(s){return c.contains(s.ownerDocument,s)||s.getRootNode(Xo)===s.ownerDocument});var Lr=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&Gt(s)&&c.css(s,"display")==="none"};function Fr(s,u,h,d){var m,y,v=20,C=d?function(){return d.cur()}:function(){return c.css(s,u,"")},I=C(),k=h&&h[3]||(c.cssNumber[u]?"":"px"),B=s.nodeType&&(c.cssNumber[u]||k!=="px"&&+I)&&jt.exec(c.css(s,u));if(B&&B[3]!==k){for(I=I/2,k=k||B[3],B=+I||1;v--;)c.style(s,u,B+k),(1-y)*(1-(y=C()/I||.5))<=0&&(v=0),B=B/y;B=B*2,c.style(s,u,B+k),h=h||[]}return h&&(B=+B||+I||0,m=h[1]?B+(h[1]+1)*h[2]:+h[2],d&&(d.unit=k,d.start=B,d.end=m)),m}var ki={};function ks(s){var u,h=s.ownerDocument,d=s.nodeName,m=ki[d];return m||(u=h.body.appendChild(h.createElement(d)),m=c.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),ki[d]=m,m)}function kt(s,u){for(var h,d,m=[],y=0,v=s.length;y<v;y++)d=s[y],d.style&&(h=d.style.display,u?(h==="none"&&(m[y]=re.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&Lr(d)&&(m[y]=ks(d))):h!=="none"&&(m[y]="none",re.set(d,"display",h)));for(y=0;y<v;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}c.fn.extend({show:function(){return kt(this,!0)},hide:function(){return kt(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Lr(this)?c(this).show():c(this).hide()})}});var gn=/^(?:checkbox|radio)$/i,Ur=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Kt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=Z.createDocumentFragment(),u=s.appendChild(Z.createElement("div")),h=Z.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),$.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",$.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",$.option=!!u.lastChild})();var yt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};yt.tbody=yt.tfoot=yt.colgroup=yt.caption=yt.thead,yt.th=yt.td,$.option||(yt.optgroup=yt.option=[1,"<select multiple='multiple'>","</select>"]);function Qe(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&b(s,u)?c.merge([s],h):h}function jr(s,u){for(var h=0,d=s.length;h<d;h++)re.set(s[h],"globalEval",!u||re.get(u[h],"globalEval"))}var or=/<|&#?\w+;/;function Di(s,u,h,d,m){for(var y,v,C,I,k,B,q=u.createDocumentFragment(),F=[],K=0,ue=s.length;K<ue;K++)if(y=s[K],y||y===0)if(Ue(y)==="object")c.merge(F,y.nodeType?[y]:y);else if(!or.test(y))F.push(u.createTextNode(y));else{for(v=v||q.appendChild(u.createElement("div")),C=(Ur.exec(y)||["",""])[1].toLowerCase(),I=yt[C]||yt._default,v.innerHTML=I[1]+c.htmlPrefilter(y)+I[2],B=I[0];B--;)v=v.lastChild;c.merge(F,v.childNodes),v=q.firstChild,v.textContent=""}for(q.textContent="",K=0;y=F[K++];){if(d&&c.inArray(y,d)>-1){m&&m.push(y);continue}if(k=Gt(y),v=Qe(q.appendChild(y),"script"),k&&jr(v),h)for(B=0;y=v[B++];)Kt.test(y.type||"")&&h.push(y)}return q}var Ze=/^([^.]*)(?:\.(.+)|)/;function mn(){return!0}function Dt(){return!1}function yn(s,u,h,d,m,y){var v,C;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(C in u)yn(s,C,h,d,u[C],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=Dt;else if(!m)return s;return y===1&&(v=m,m=function(I){return c().off(I),v.apply(this,arguments)},m.guid=v.guid||(v.guid=c.guid++)),s.each(function(){c.event.add(this,u,m,d,h)})}c.event={global:{},add:function(s,u,h,d,m){var y,v,C,I,k,B,q,F,K,ue,Ee,le=re.get(s);if(dn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&c.find.matchesSelector(Wt,m),h.guid||(h.guid=c.guid++),(I=le.events)||(I=le.events=Object.create(null)),(v=le.handle)||(v=le.handle=function(We){return typeof c<"u"&&c.event.triggered!==We.type?c.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(mt)||[""],k=u.length;k--;)C=Ze.exec(u[k])||[],K=Ee=C[1],ue=(C[2]||"").split(".").sort(),K&&(q=c.event.special[K]||{},K=(m?q.delegateType:q.bindType)||K,q=c.event.special[K]||{},B=c.extend({type:K,origType:Ee,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&c.expr.match.needsContext.test(m),namespace:ue.join(".")},y),(F=I[K])||(F=I[K]=[],F.delegateCount=0,(!q.setup||q.setup.call(s,d,ue,v)===!1)&&s.addEventListener&&s.addEventListener(K,v)),q.add&&(q.add.call(s,B),B.handler.guid||(B.handler.guid=h.guid)),m?F.splice(F.delegateCount++,0,B):F.push(B),c.event.global[K]=!0)},remove:function(s,u,h,d,m){var y,v,C,I,k,B,q,F,K,ue,Ee,le=re.hasData(s)&&re.get(s);if(!(!le||!(I=le.events))){for(u=(u||"").match(mt)||[""],k=u.length;k--;){if(C=Ze.exec(u[k])||[],K=Ee=C[1],ue=(C[2]||"").split(".").sort(),!K){for(K in I)c.event.remove(s,K+u[k],h,d,!0);continue}for(q=c.event.special[K]||{},K=(d?q.delegateType:q.bindType)||K,F=I[K]||[],C=C[2]&&new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"),v=y=F.length;y--;)B=F[y],(m||Ee===B.origType)&&(!h||h.guid===B.guid)&&(!C||C.test(B.namespace))&&(!d||d===B.selector||d==="**"&&B.selector)&&(F.splice(y,1),B.selector&&F.delegateCount--,q.remove&&q.remove.call(s,B));v&&!F.length&&((!q.teardown||q.teardown.call(s,ue,le.handle)===!1)&&c.removeEvent(s,K,le.handle),delete I[K])}c.isEmptyObject(I)&&re.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,y,v,C=new Array(arguments.length),I=c.event.fix(s),k=(re.get(this,"events")||Object.create(null))[I.type]||[],B=c.event.special[I.type]||{};for(C[0]=I,u=1;u<arguments.length;u++)C[u]=arguments[u];if(I.delegateTarget=this,!(B.preDispatch&&B.preDispatch.call(this,I)===!1)){for(v=c.event.handlers.call(this,I,k),u=0;(m=v[u++])&&!I.isPropagationStopped();)for(I.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||y.namespace===!1||I.rnamespace.test(y.namespace))&&(I.handleObj=y,I.data=y.data,d=((c.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,C),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return B.postDispatch&&B.postDispatch.call(this,I),I.result}},handlers:function(s,u){var h,d,m,y,v,C=[],I=u.delegateCount,k=s.target;if(I&&k.nodeType&&!(s.type==="click"&&s.button>=1)){for(;k!==this;k=k.parentNode||this)if(k.nodeType===1&&!(s.type==="click"&&k.disabled===!0)){for(y=[],v={},h=0;h<I;h++)d=u[h],m=d.selector+" ",v[m]===void 0&&(v[m]=d.needsContext?c(m,this).index(k)>-1:c.find(m,this,null,[k]).length),v[m]&&y.push(d);y.length&&C.push({elem:k,handlers:y})}}return k=this,I<u.length&&C.push({elem:k,handlers:u.slice(I)}),C},addProp:function(s,u){Object.defineProperty(c.Event.prototype,s,{enumerable:!0,configurable:!0,get:Q(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[c.expando]?s:new c.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return gn.test(u.type)&&u.click&&b(u,"input")&&Br(u,"click",!0),!1},trigger:function(s){var u=this||s;return gn.test(u.type)&&u.click&&b(u,"input")&&Br(u,"click"),!0},_default:function(s){var u=s.target;return gn.test(u.type)&&u.click&&b(u,"input")&&re.get(u,"click")||b(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Br(s,u,h){if(!h){re.get(s,u)===void 0&&c.event.add(s,u,mn);return}re.set(s,u,!1),c.event.add(s,u,{namespace:!1,handler:function(d){var m,y=re.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(c.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),re.set(this,u,y),this[u](),m=re.get(this,u),re.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(re.set(this,u,c.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=mn)}})}c.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},c.Event=function(s,u){if(!(this instanceof c.Event))return new c.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?mn:Dt,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&c.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:Dt,isPropagationStopped:Dt,isImmediatePropagationStopped:Dt,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=mn,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=mn,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=mn,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(Z.documentMode){var m=re.get(this,"handle"),y=c.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else c.event.simulate(u,d.target,c.event.fix(d))}c.event.special[s]={setup:function(){var d;if(Br(this,s,!0),Z.documentMode)d=re.get(this,u),d||this.addEventListener(u,h),re.set(this,u,(d||0)+1);else return!1},trigger:function(){return Br(this,s),!0},teardown:function(){var d;if(Z.documentMode)d=re.get(this,u)-1,d?re.set(this,u,d):(this.removeEventListener(u,h),re.remove(this,u));else return!1},_default:function(d){return re.get(d.target,s)},delegateType:u},c.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=Z.documentMode?this:d,y=re.get(m,u);y||(Z.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),re.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=Z.documentMode?this:d,y=re.get(m,u)-1;y?re.set(m,u,y):(Z.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),re.remove(m,u))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){c.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,y=h.relatedTarget,v=h.handleObj;return(!y||y!==m&&!c.contains(m,y))&&(h.type=v.origType,d=v.handler.apply(this,arguments),h.type=u),d}}}),c.fn.extend({on:function(s,u,h,d){return yn(this,s,u,h,d)},one:function(s,u,h,d){return yn(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,c(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=Dt),this.each(function(){c.event.remove(this,s,h,u)})}});var Jo=/<script|<style|<link/i,Vn=/checked\s*(?:[^=]|=\s*.checked.)/i,Yo=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Ds(s,u){return b(s,"table")&&b(u.nodeType!==11?u:u.firstChild,"tr")&&c(s).children("tbody")[0]||s}function qr(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function xs(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Hr(s,u){var h,d,m,y,v,C,I;if(u.nodeType===1){if(re.hasData(s)&&(y=re.get(s),I=y.events,I)){re.remove(u,"handle events");for(m in I)for(h=0,d=I[m].length;h<d;h++)c.event.add(u,m,I[m][h])}Pe.hasData(s)&&(v=Pe.access(s),C=c.extend({},v),Pe.set(u,C))}}function $r(s,u){var h=u.nodeName.toLowerCase();h==="input"&&gn.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function _t(s,u,h,d){u=l(u);var m,y,v,C,I,k,B=0,q=s.length,F=q-1,K=u[0],ue=Q(K);if(ue||q>1&&typeof K=="string"&&!$.checkClone&&Vn.test(K))return s.each(function(Ee){var le=s.eq(Ee);ue&&(u[0]=K.call(this,Ee,le.html())),_t(le,u,h,d)});if(q&&(m=Di(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(v=c.map(Qe(m,"script"),qr),C=v.length;B<q;B++)I=m,B!==F&&(I=c.clone(I,!0,!0),C&&c.merge(v,Qe(I,"script"))),h.call(s[B],I,B);if(C)for(k=v[v.length-1].ownerDocument,c.map(v,xs),B=0;B<C;B++)I=v[B],Kt.test(I.type||"")&&!re.access(I,"globalEval")&&c.contains(k,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?c._evalUrl&&!I.noModule&&c._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},k):Te(I.textContent.replace(Yo,""),I,k))}return s}function xi(s,u,h){for(var d,m=u?c.filter(u,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&c.cleanData(Qe(d)),d.parentNode&&(h&&Gt(d)&&jr(Qe(d,"script")),d.parentNode.removeChild(d));return s}c.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,y,v,C=s.cloneNode(!0),I=Gt(s);if(!$.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!c.isXMLDoc(s))for(v=Qe(C),y=Qe(s),d=0,m=y.length;d<m;d++)$r(y[d],v[d]);if(u)if(h)for(y=y||Qe(s),v=v||Qe(C),d=0,m=y.length;d<m;d++)Hr(y[d],v[d]);else Hr(s,C);return v=Qe(C,"script"),v.length>0&&jr(v,!I&&Qe(s,"script")),C},cleanData:function(s){for(var u,h,d,m=c.event.special,y=0;(h=s[y])!==void 0;y++)if(dn(h)){if(u=h[re.expando]){if(u.events)for(d in u.events)m[d]?c.event.remove(h,d):c.removeEvent(h,d,u.handle);h[re.expando]=void 0}h[Pe.expando]&&(h[Pe.expando]=void 0)}}}),c.fn.extend({detach:function(s){return xi(this,s,!0)},remove:function(s){return xi(this,s)},text:function(s){return Ut(this,function(u){return u===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return _t(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Ds(this,s);u.appendChild(s)}})},prepend:function(){return _t(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Ds(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return _t(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return _t(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(c.cleanData(Qe(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return c.clone(this,s,u)})},html:function(s){return Ut(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!Jo.test(u)&&!yt[(Ur.exec(u)||["",""])[1].toLowerCase()]){u=c.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(c.cleanData(Qe(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return _t(this,arguments,function(u){var h=this.parentNode;c.inArray(this,s)<0&&(c.cleanData(Qe(this)),h&&h.replaceChild(u,this))},s)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){c.fn[s]=function(h){for(var d,m=[],y=c(h),v=y.length-1,C=0;C<=v;C++)d=C===v?this:this.clone(!0),c(y[C])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var zr=new RegExp("^("+Ps+")(?!px)[a-z%]+$","i"),ar=/^--/,On=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},Ni=function(s,u,h){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=y[m];return d},Ns=new RegExp(Pt.join("|"),"i");(function(){function s(){if(k){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",k.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Wt.appendChild(I).appendChild(k);var B=e.getComputedStyle(k);h=B.top!=="1%",C=u(B.marginLeft)===12,k.style.right="60%",y=u(B.right)===36,d=u(B.width)===36,k.style.position="absolute",m=u(k.offsetWidth/3)===12,Wt.removeChild(I),k=null}}function u(B){return Math.round(parseFloat(B))}var h,d,m,y,v,C,I=Z.createElement("div"),k=Z.createElement("div");k.style&&(k.style.backgroundClip="content-box",k.cloneNode(!0).style.backgroundClip="",$.clearCloneStyle=k.style.backgroundClip==="content-box",c.extend($,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),C},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var B,q,F,K;return v==null&&(B=Z.createElement("table"),q=Z.createElement("tr"),F=Z.createElement("div"),B.style.cssText="position:absolute;left:-11111px;border-collapse:separate",q.style.cssText="box-sizing:content-box;border:1px solid",q.style.height="1px",F.style.height="9px",F.style.display="block",Wt.appendChild(B).appendChild(q).appendChild(F),K=e.getComputedStyle(q),v=parseInt(K.height,10)+parseInt(K.borderTopWidth,10)+parseInt(K.borderBottomWidth,10)===q.offsetHeight,Wt.removeChild(B)),v}}))})();function ur(s,u,h){var d,m,y,v,C=ar.test(u),I=s.style;return h=h||On(s),h&&(v=h.getPropertyValue(u)||h[u],C&&v&&(v=v.replace(pt,"$1")||void 0),v===""&&!Gt(s)&&(v=c.style(s,u)),!$.pixelBoxStyles()&&zr.test(v)&&Ns.test(u)&&(d=I.width,m=I.minWidth,y=I.maxWidth,I.minWidth=I.maxWidth=I.width=v,v=h.width,I.width=d,I.minWidth=m,I.maxWidth=y)),v!==void 0?v+"":v}function cr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Vi=["Webkit","Moz","ms"],Wr=Z.createElement("div").style,Mn={};function _n(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Vi.length;h--;)if(s=Vi[h]+u,s in Wr)return s}function lr(s){var u=c.cssProps[s]||Mn[s];return u||(s in Wr?s:Mn[s]=_n(s)||s)}var Zo=/^(none|table(?!-c[ea]).+)/,Vs={position:"absolute",visibility:"hidden",display:"block"},Oi={letterSpacing:"0",fontWeight:"400"};function Mi(s,u,h){var d=jt.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function hr(s,u,h,d,m,y){var v=u==="width"?1:0,C=0,I=0,k=0;if(h===(d?"border":"content"))return 0;for(;v<4;v+=2)h==="margin"&&(k+=c.css(s,h+Pt[v],!0,m)),d?(h==="content"&&(I-=c.css(s,"padding"+Pt[v],!0,m)),h!=="margin"&&(I-=c.css(s,"border"+Pt[v]+"Width",!0,m))):(I+=c.css(s,"padding"+Pt[v],!0,m),h!=="padding"?I+=c.css(s,"border"+Pt[v]+"Width",!0,m):C+=c.css(s,"border"+Pt[v]+"Width",!0,m));return!d&&y>=0&&(I+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-I-C-.5))||0),I+k}function Gr(s,u,h){var d=On(s),m=!$.boxSizingReliable()||h,y=m&&c.css(s,"boxSizing",!1,d)==="border-box",v=y,C=ur(s,u,d),I="offset"+u[0].toUpperCase()+u.slice(1);if(zr.test(C)){if(!h)return C;C="auto"}return(!$.boxSizingReliable()&&y||!$.reliableTrDimensions()&&b(s,"tr")||C==="auto"||!parseFloat(C)&&c.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=c.css(s,"boxSizing",!1,d)==="border-box",v=I in s,v&&(C=s[I])),C=parseFloat(C)||0,C+hr(s,u,h||(y?"border":"content"),v,d,C)+"px"}c.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=ur(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,v,C=Rt(u),I=ar.test(u),k=s.style;if(I||(u=lr(C)),v=c.cssHooks[u]||c.cssHooks[C],h!==void 0){if(y=typeof h,y==="string"&&(m=jt.exec(h))&&m[1]&&(h=Fr(s,u,m),y="number"),h==null||h!==h)return;y==="number"&&!I&&(h+=m&&m[3]||(c.cssNumber[C]?"":"px")),!$.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(k[u]="inherit"),(!v||!("set"in v)||(h=v.set(s,h,d))!==void 0)&&(I?k.setProperty(u,h):k[u]=h)}else return v&&"get"in v&&(m=v.get(s,!1,d))!==void 0?m:k[u]}},css:function(s,u,h,d){var m,y,v,C=Rt(u),I=ar.test(u);return I||(u=lr(C)),v=c.cssHooks[u]||c.cssHooks[C],v&&"get"in v&&(m=v.get(s,!0,h)),m===void 0&&(m=ur(s,u,d)),m==="normal"&&u in Oi&&(m=Oi[u]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),c.each(["height","width"],function(s,u){c.cssHooks[u]={get:function(h,d,m){if(d)return Zo.test(c.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Ni(h,Vs,function(){return Gr(h,u,m)}):Gr(h,u,m)},set:function(h,d,m){var y,v=On(h),C=!$.scrollboxSize()&&v.position==="absolute",I=C||m,k=I&&c.css(h,"boxSizing",!1,v)==="border-box",B=m?hr(h,u,m,k,v):0;return k&&C&&(B-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(v[u])-hr(h,u,"border",!1,v)-.5)),B&&(y=jt.exec(d))&&(y[3]||"px")!=="px"&&(h.style[u]=d,d=c.css(h,u)),Mi(h,d,B)}}}),c.cssHooks.marginLeft=cr($.reliableMarginLeft,function(s,u){if(u)return(parseFloat(ur(s,"marginLeft"))||s.getBoundingClientRect().left-Ni(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(s,u){c.cssHooks[s+u]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+Pt[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(c.cssHooks[s+u].set=Mi)}),c.fn.extend({css:function(s,u){return Ut(this,function(h,d,m){var y,v,C={},I=0;if(Array.isArray(d)){for(y=On(h),v=d.length;I<v;I++)C[d[I]]=c.css(h,d[I],!1,y);return C}return m!==void 0?c.style(h,d,m):c.css(h,d)},s,u,arguments.length>1)}});function st(s,u,h,d,m){return new st.prototype.init(s,u,h,d,m)}c.Tween=st,st.prototype={constructor:st,init:function(s,u,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||c.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(c.cssNumber[h]?"":"px")},cur:function(){var s=st.propHooks[this.prop];return s&&s.get?s.get(this):st.propHooks._default.get(this)},run:function(s){var u,h=st.propHooks[this.prop];return this.options.duration?this.pos=u=c.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):st.propHooks._default.set(this),this}},st.prototype.init.prototype=st.prototype,st.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=c.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){c.fx.step[s.prop]?c.fx.step[s.prop](s):s.elem.nodeType===1&&(c.cssHooks[s.prop]||s.elem.style[lr(s.prop)]!=null)?c.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},st.propHooks.scrollTop=st.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},c.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},c.fx=st.prototype.init,c.fx.step={};var vn,Kr,ea=/^(?:toggle|show|hide)$/,Os=/queueHooks$/;function Qr(){Kr&&(Z.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Qr):e.setTimeout(Qr,c.fx.interval),c.fx.tick())}function Ms(){return e.setTimeout(function(){vn=void 0}),vn=Date.now()}function xt(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=Pt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Nt(s,u,h){for(var d,m=(Et.tweeners[u]||[]).concat(Et.tweeners["*"]),y=0,v=m.length;y<v;y++)if(d=m[y].call(h,u,s))return d}function Xr(s,u,h){var d,m,y,v,C,I,k,B,q="width"in u||"height"in u,F=this,K={},ue=s.style,Ee=s.nodeType&&Lr(s),le=re.get(s,"fxshow");h.queue||(v=c._queueHooks(s,"fx"),v.unqueued==null&&(v.unqueued=0,C=v.empty.fire,v.empty.fire=function(){v.unqueued||C()}),v.unqueued++,F.always(function(){F.always(function(){v.unqueued--,c.queue(s,"fx").length||v.empty.fire()})}));for(d in u)if(m=u[d],ea.test(m)){if(delete u[d],y=y||m==="toggle",m===(Ee?"hide":"show"))if(m==="show"&&le&&le[d]!==void 0)Ee=!0;else continue;K[d]=le&&le[d]||c.style(s,d)}if(I=!c.isEmptyObject(u),!(!I&&c.isEmptyObject(K))){q&&s.nodeType===1&&(h.overflow=[ue.overflow,ue.overflowX,ue.overflowY],k=le&&le.display,k==null&&(k=re.get(s,"display")),B=c.css(s,"display"),B==="none"&&(k?B=k:(kt([s],!0),k=s.style.display||k,B=c.css(s,"display"),kt([s]))),(B==="inline"||B==="inline-block"&&k!=null)&&c.css(s,"float")==="none"&&(I||(F.done(function(){ue.display=k}),k==null&&(B=ue.display,k=B==="none"?"":B)),ue.display="inline-block")),h.overflow&&(ue.overflow="hidden",F.always(function(){ue.overflow=h.overflow[0],ue.overflowX=h.overflow[1],ue.overflowY=h.overflow[2]})),I=!1;for(d in K)I||(le?"hidden"in le&&(Ee=le.hidden):le=re.access(s,"fxshow",{display:k}),y&&(le.hidden=!Ee),Ee&&kt([s],!0),F.done(function(){Ee||kt([s]),re.remove(s,"fxshow");for(d in K)c.style(s,d,K[d])})),I=Nt(Ee?le[d]:0,d,F),d in le||(le[d]=I.start,Ee&&(I.end=I.start,I.start=0))}}function Jr(s,u){var h,d,m,y,v;for(h in s)if(d=Rt(h),m=u[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),v=c.cssHooks[d],v&&"expand"in v){y=v.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],u[h]=m)}else u[d]=m}function Et(s,u,h){var d,m,y=0,v=Et.prefilters.length,C=c.Deferred().always(function(){delete I.elem}),I=function(){if(m)return!1;for(var q=vn||Ms(),F=Math.max(0,k.startTime+k.duration-q),K=F/k.duration||0,ue=1-K,Ee=0,le=k.tweens.length;Ee<le;Ee++)k.tweens[Ee].run(ue);return C.notifyWith(s,[k,ue,F]),ue<1&&le?F:(le||C.notifyWith(s,[k,1,0]),C.resolveWith(s,[k]),!1)},k=C.promise({elem:s,props:c.extend({},u),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},h),originalProperties:u,originalOptions:h,startTime:vn||Ms(),duration:h.duration,tweens:[],createTween:function(q,F){var K=c.Tween(s,k.opts,q,F,k.opts.specialEasing[q]||k.opts.easing);return k.tweens.push(K),K},stop:function(q){var F=0,K=q?k.tweens.length:0;if(m)return this;for(m=!0;F<K;F++)k.tweens[F].run(1);return q?(C.notifyWith(s,[k,1,0]),C.resolveWith(s,[k,q])):C.rejectWith(s,[k,q]),this}}),B=k.props;for(Jr(B,k.opts.specialEasing);y<v;y++)if(d=Et.prefilters[y].call(k,s,B,k.opts),d)return Q(d.stop)&&(c._queueHooks(k.elem,k.opts.queue).stop=d.stop.bind(d)),d;return c.map(B,Nt,k),Q(k.opts.start)&&k.opts.start.call(s,k),k.progress(k.opts.progress).done(k.opts.done,k.opts.complete).fail(k.opts.fail).always(k.opts.always),c.fx.timer(c.extend(I,{elem:s,anim:k,queue:k.opts.queue})),k}c.Animation=c.extend(Et,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return Fr(h.elem,s,jt.exec(u),h),h}]},tweener:function(s,u){Q(s)?(u=s,s=["*"]):s=s.match(mt);for(var h,d=0,m=s.length;d<m;d++)h=s[d],Et.tweeners[h]=Et.tweeners[h]||[],Et.tweeners[h].unshift(u)},prefilters:[Xr],prefilter:function(s,u){u?Et.prefilters.unshift(s):Et.prefilters.push(s)}}),c.speed=function(s,u,h){var d=s&&typeof s=="object"?c.extend({},s):{complete:h||!h&&u||Q(s)&&s,duration:s,easing:h&&u||u&&!Q(u)&&u};return c.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in c.fx.speeds?d.duration=c.fx.speeds[d.duration]:d.duration=c.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){Q(d.old)&&d.old.call(this),d.queue&&c.dequeue(this,d.queue)},d},c.fn.extend({fadeTo:function(s,u,h,d){return this.filter(Lr).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=c.isEmptyObject(s),y=c.speed(u,h,d),v=function(){var C=Et(this,c.extend({},s),y);(m||re.get(this,"finish"))&&C.stop(!0)};return v.finish=v,m||y.queue===!1?this.each(v):this.queue(y.queue,v)},stop:function(s,u,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",v=c.timers,C=re.get(this);if(y)C[y]&&C[y].stop&&d(C[y]);else for(y in C)C[y]&&C[y].stop&&Os.test(y)&&d(C[y]);for(y=v.length;y--;)v[y].elem===this&&(s==null||v[y].queue===s)&&(v[y].anim.stop(h),m=!1,v.splice(y,1));(m||!h)&&c.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=re.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=c.timers,v=d?d.length:0;for(h.finish=!0,c.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<v;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),c.each(["toggle","show","hide"],function(s,u){var h=c.fn[u];c.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(xt(u,!0),d,m,y)}}),c.each({slideDown:xt("show"),slideUp:xt("hide"),slideToggle:xt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){c.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),c.timers=[],c.fx.tick=function(){var s,u=0,h=c.timers;for(vn=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||c.fx.stop(),vn=void 0},c.fx.timer=function(s){c.timers.push(s),c.fx.start()},c.fx.interval=13,c.fx.start=function(){Kr||(Kr=!0,Qr())},c.fx.stop=function(){Kr=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(s,u){return s=c.fx&&c.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=Z.createElement("input"),u=Z.createElement("select"),h=u.appendChild(Z.createElement("option"));s.type="checkbox",$.checkOn=s.value!=="",$.optSelected=h.selected,s=Z.createElement("input"),s.value="t",s.type="radio",$.radioValue=s.value==="t"})();var xe,Qt=c.expr.attrHandle;c.fn.extend({attr:function(s,u){return Ut(this,c.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){c.removeAttr(this,s)})}}),c.extend({attr:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return c.prop(s,u,h);if((y!==1||!c.isXMLDoc(s))&&(m=c.attrHooks[u.toLowerCase()]||(c.expr.match.bool.test(u)?xe:void 0)),h!==void 0){if(h===null){c.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=c.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!$.radioValue&&u==="radio"&&b(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(mt);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),xe={set:function(s,u,h){return u===!1?c.removeAttr(s,h):s.setAttribute(h,h),h}},c.each(c.expr.match.bool.source.match(/\w+/g),function(s,u){var h=Qt[u]||c.find.attr;Qt[u]=function(d,m,y){var v,C,I=m.toLowerCase();return y||(C=Qt[I],Qt[I]=v,v=h(d,m,y)!=null?I:null,Qt[I]=C),v}});var fr=/^(?:input|select|textarea|button)$/i,dr=/^(?:a|area)$/i;c.fn.extend({prop:function(s,u){return Ut(this,c.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[c.propFix[s]||s]})}}),c.extend({prop:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!c.isXMLDoc(s))&&(u=c.propFix[u]||u,m=c.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=c.find.attr(s,"tabindex");return u?parseInt(u,10):fr.test(s.nodeName)||dr.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),$.optSelected||(c.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function Tn(s){var u=s.match(mt)||[];return u.join(" ")}function Xt(s){return s.getAttribute&&s.getAttribute("class")||""}function Li(s){return Array.isArray(s)?s:typeof s=="string"?s.match(mt)||[]:[]}c.fn.extend({addClass:function(s){var u,h,d,m,y,v;return Q(s)?this.each(function(C){c(this).addClass(s.call(this,C,Xt(this)))}):(u=Li(s),u.length?this.each(function(){if(d=Xt(this),h=this.nodeType===1&&" "+Tn(d)+" ",h){for(y=0;y<u.length;y++)m=u[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");v=Tn(h),d!==v&&this.setAttribute("class",v)}}):this)},removeClass:function(s){var u,h,d,m,y,v;return Q(s)?this.each(function(C){c(this).removeClass(s.call(this,C,Xt(this)))}):arguments.length?(u=Li(s),u.length?this.each(function(){if(d=Xt(this),h=this.nodeType===1&&" "+Tn(d)+" ",h){for(y=0;y<u.length;y++)for(m=u[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");v=Tn(h),d!==v&&this.setAttribute("class",v)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,y,v=typeof s,C=v==="string"||Array.isArray(s);return Q(s)?this.each(function(I){c(this).toggleClass(s.call(this,I,Xt(this),u),u)}):typeof u=="boolean"&&C?u?this.addClass(s):this.removeClass(s):(h=Li(s),this.each(function(){if(C)for(y=c(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||v==="boolean")&&(d=Xt(this),d&&re.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":re.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+Tn(Xt(h))+" ").indexOf(u)>-1)return!0;return!1}});var ta=/\r/g;c.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=Q(s),this.each(function(y){var v;this.nodeType===1&&(d?v=s.call(this,y,c(this).val()):v=s,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=c.map(v,function(C){return C==null?"":C+""})),u=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,v,"value")===void 0)&&(this.value=v))})):m?(u=c.valHooks[m.type]||c.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(ta,""):h??"")):void 0}}),c.extend({valHooks:{option:{get:function(s){var u=c.find.attr(s,"value");return u??Tn(c.text(s))}},select:{get:function(s){var u,h,d,m=s.options,y=s.selectedIndex,v=s.type==="select-one",C=v?null:[],I=v?y+1:m.length;for(y<0?d=I:d=v?y:0;d<I;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!b(h.parentNode,"optgroup"))){if(u=c(h).val(),v)return u;C.push(u)}return C},set:function(s,u){for(var h,d,m=s.options,y=c.makeArray(u),v=m.length;v--;)d=m[v],(d.selected=c.inArray(c.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=c.inArray(c(s).val(),u)>-1}},$.checkOn||(c.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var pr=e.location,Ls={guid:Date.now()},En=/\?/;c.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&c.error("Invalid XML: "+(h?c.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var Bt=/^(?:focusinfocus|focusoutblur)$/,Fi=function(s){s.stopPropagation()};c.extend(c.event,{trigger:function(s,u,h,d){var m,y,v,C,I,k,B,q,F=[h||Z],K=x.call(s,"type")?s.type:s,ue=x.call(s,"namespace")?s.namespace.split("."):[];if(y=q=v=h=h||Z,!(h.nodeType===3||h.nodeType===8)&&!Bt.test(K+c.event.triggered)&&(K.indexOf(".")>-1&&(ue=K.split("."),K=ue.shift(),ue.sort()),I=K.indexOf(":")<0&&"on"+K,s=s[c.expando]?s:new c.Event(K,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=ue.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+ue.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:c.makeArray(u,[s]),B=c.event.special[K]||{},!(!d&&B.trigger&&B.trigger.apply(h,u)===!1))){if(!d&&!B.noBubble&&!Y(h)){for(C=B.delegateType||K,Bt.test(C+K)||(y=y.parentNode);y;y=y.parentNode)F.push(y),v=y;v===(h.ownerDocument||Z)&&F.push(v.defaultView||v.parentWindow||e)}for(m=0;(y=F[m++])&&!s.isPropagationStopped();)q=y,s.type=m>1?C:B.bindType||K,k=(re.get(y,"events")||Object.create(null))[s.type]&&re.get(y,"handle"),k&&k.apply(y,u),k=I&&y[I],k&&k.apply&&dn(y)&&(s.result=k.apply(y,u),s.result===!1&&s.preventDefault());return s.type=K,!d&&!s.isDefaultPrevented()&&(!B._default||B._default.apply(F.pop(),u)===!1)&&dn(h)&&I&&Q(h[K])&&!Y(h)&&(v=h[I],v&&(h[I]=null),c.event.triggered=K,s.isPropagationStopped()&&q.addEventListener(K,Fi),h[K](),s.isPropagationStopped()&&q.removeEventListener(K,Fi),c.event.triggered=void 0,v&&(h[I]=v)),s.result}},simulate:function(s,u,h){var d=c.extend(new c.Event,h,{type:s,isSimulated:!0});c.event.trigger(d,null,u)}}),c.fn.extend({trigger:function(s,u){return this.each(function(){c.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return c.event.trigger(s,u,h,!0)}});var Fs=/\[\]$/,Ui=/\r?\n/g,Ln=/^(?:submit|button|image|reset|file)$/i,na=/^(?:input|select|textarea|keygen)/i;function ji(s,u,h,d){var m;if(Array.isArray(u))c.each(u,function(y,v){h||Fs.test(s)?d(s,v):ji(s+"["+(typeof v=="object"&&v!=null?y:"")+"]",v,h,d)});else if(!h&&Ue(u)==="object")for(m in u)ji(s+"["+m+"]",u[m],h,d);else d(s,u)}c.param=function(s,u){var h,d=[],m=function(y,v){var C=Q(v)?v():v;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(C??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!c.isPlainObject(s))c.each(s,function(){m(this.name,this.value)});else for(h in s)ji(h,s[h],u,m);return d.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=c.prop(this,"elements");return s?c.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!c(this).is(":disabled")&&na.test(this.nodeName)&&!Ln.test(s)&&(this.checked||!gn.test(s))}).map(function(s,u){var h=c(this).val();return h==null?null:Array.isArray(h)?c.map(h,function(d){return{name:u.name,value:d.replace(Ui,`\r
`)}}):{name:u.name,value:h.replace(Ui,`\r
`)}}).get()}});var ra=/%20/g,Jt=/#.*$/,ia=/([?&])_=[^&]*/,sa=/^(.*?):[ \t]*([^\r\n]*)$/mg,Yr=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zr=/^(?:GET|HEAD)$/,Us=/^\/\//,Fn={},wn={},Bi="*/".concat("*"),gr=Z.createElement("a");gr.href=pr.href;function Oe(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,y=u.toLowerCase().match(mt)||[];if(Q(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function js(s,u,h,d){var m={},y=s===wn;function v(C){var I;return m[C]=!0,c.each(s[C]||[],function(k,B){var q=B(u,h,d);if(typeof q=="string"&&!y&&!m[q])return u.dataTypes.unshift(q),v(q),!1;if(y)return!(I=q)}),I}return v(u.dataTypes[0])||!m["*"]&&v("*")}function qi(s,u){var h,d,m=c.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&c.extend(!0,s,d),s}function Bs(s,u,h){for(var d,m,y,v,C=s.contents,I=s.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in C)if(C[m]&&C[m].test(d)){I.unshift(m);break}}if(I[0]in h)y=I[0];else{for(m in h){if(!I[0]||s.converters[m+" "+I[0]]){y=m;break}v||(v=m)}y=y||v}if(y)return y!==I[0]&&I.unshift(y),h[y]}function qs(s,u,h,d){var m,y,v,C,I,k={},B=s.dataTypes.slice();if(B[1])for(v in s.converters)k[v.toLowerCase()]=s.converters[v];for(y=B.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!I&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),I=y,y=B.shift(),y){if(y==="*")y=I;else if(I!=="*"&&I!==y){if(v=k[I+" "+y]||k["* "+y],!v){for(m in k)if(C=m.split(" "),C[1]===y&&(v=k[I+" "+C[0]]||k["* "+C[0]],v)){v===!0?v=k[m]:k[m]!==!0&&(y=C[0],B.unshift(C[1]));break}}if(v!==!0)if(v&&s.throws)u=v(u);else try{u=v(u)}catch(q){return{state:"parsererror",error:v?q:"No conversion from "+I+" to "+y}}}}return{state:"success",data:u}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pr.href,type:"GET",isLocal:Yr.test(pr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?qi(qi(s,c.ajaxSettings),u):qi(c.ajaxSettings,s)},ajaxPrefilter:Oe(Fn),ajaxTransport:Oe(wn),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,y,v,C,I,k,B,q,F=c.ajaxSetup({},u),K=F.context||F,ue=F.context&&(K.nodeType||K.jquery)?c(K):c.event,Ee=c.Deferred(),le=c.Callbacks("once memory"),We=F.statusCode||{},qe={},St={},Ct="canceled",ye={readyState:0,getResponseHeader:function(Ae){var Me;if(I){if(!y)for(y={};Me=sa.exec(m);)y[Me[1].toLowerCase()+" "]=(y[Me[1].toLowerCase()+" "]||[]).concat(Me[2]);Me=y[Ae.toLowerCase()+" "]}return Me==null?null:Me.join(", ")},getAllResponseHeaders:function(){return I?m:null},setRequestHeader:function(Ae,Me){return I==null&&(Ae=St[Ae.toLowerCase()]=St[Ae.toLowerCase()]||Ae,qe[Ae]=Me),this},overrideMimeType:function(Ae){return I==null&&(F.mimeType=Ae),this},statusCode:function(Ae){var Me;if(Ae)if(I)ye.always(Ae[ye.status]);else for(Me in Ae)We[Me]=[We[Me],Ae[Me]];return this},abort:function(Ae){var Me=Ae||Ct;return h&&h.abort(Me),He(0,Me),this}};if(Ee.promise(ye),F.url=((s||F.url||pr.href)+"").replace(Us,pr.protocol+"//"),F.type=u.method||u.type||F.method||F.type,F.dataTypes=(F.dataType||"*").toLowerCase().match(mt)||[""],F.crossDomain==null){C=Z.createElement("a");try{C.href=F.url,C.href=C.href,F.crossDomain=gr.protocol+"//"+gr.host!=C.protocol+"//"+C.host}catch{F.crossDomain=!0}}if(F.data&&F.processData&&typeof F.data!="string"&&(F.data=c.param(F.data,F.traditional)),js(Fn,F,u,ye),I)return ye;k=c.event&&F.global,k&&c.active++===0&&c.event.trigger("ajaxStart"),F.type=F.type.toUpperCase(),F.hasContent=!Zr.test(F.type),d=F.url.replace(Jt,""),F.hasContent?F.data&&F.processData&&(F.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(F.data=F.data.replace(ra,"+")):(q=F.url.slice(d.length),F.data&&(F.processData||typeof F.data=="string")&&(d+=(En.test(d)?"&":"?")+F.data,delete F.data),F.cache===!1&&(d=d.replace(ia,"$1"),q=(En.test(d)?"&":"?")+"_="+Ls.guid+++q),F.url=d+q),F.ifModified&&(c.lastModified[d]&&ye.setRequestHeader("If-Modified-Since",c.lastModified[d]),c.etag[d]&&ye.setRequestHeader("If-None-Match",c.etag[d])),(F.data&&F.hasContent&&F.contentType!==!1||u.contentType)&&ye.setRequestHeader("Content-Type",F.contentType),ye.setRequestHeader("Accept",F.dataTypes[0]&&F.accepts[F.dataTypes[0]]?F.accepts[F.dataTypes[0]]+(F.dataTypes[0]!=="*"?", "+Bi+"; q=0.01":""):F.accepts["*"]);for(B in F.headers)ye.setRequestHeader(B,F.headers[B]);if(F.beforeSend&&(F.beforeSend.call(K,ye,F)===!1||I))return ye.abort();if(Ct="abort",le.add(F.complete),ye.done(F.success),ye.fail(F.error),h=js(wn,F,u,ye),!h)He(-1,"No Transport");else{if(ye.readyState=1,k&&ue.trigger("ajaxSend",[ye,F]),I)return ye;F.async&&F.timeout>0&&(v=e.setTimeout(function(){ye.abort("timeout")},F.timeout));try{I=!1,h.send(qe,He)}catch(Ae){if(I)throw Ae;He(-1,Ae)}}function He(Ae,Me,Vt,o){var f,g,E,V,U,X=Me;I||(I=!0,v&&e.clearTimeout(v),h=void 0,m=o||"",ye.readyState=Ae>0?4:0,f=Ae>=200&&Ae<300||Ae===304,Vt&&(V=Bs(F,ye,Vt)),!f&&c.inArray("script",F.dataTypes)>-1&&c.inArray("json",F.dataTypes)<0&&(F.converters["text script"]=function(){}),V=qs(F,V,ye,f),f?(F.ifModified&&(U=ye.getResponseHeader("Last-Modified"),U&&(c.lastModified[d]=U),U=ye.getResponseHeader("etag"),U&&(c.etag[d]=U)),Ae===204||F.type==="HEAD"?X="nocontent":Ae===304?X="notmodified":(X=V.state,g=V.data,E=V.error,f=!E)):(E=X,(Ae||!X)&&(X="error",Ae<0&&(Ae=0))),ye.status=Ae,ye.statusText=(Me||X)+"",f?Ee.resolveWith(K,[g,X,ye]):Ee.rejectWith(K,[ye,X,E]),ye.statusCode(We),We=void 0,k&&ue.trigger(f?"ajaxSuccess":"ajaxError",[ye,F,f?g:E]),le.fireWith(K,[ye,X]),k&&(ue.trigger("ajaxComplete",[ye,F]),--c.active||c.event.trigger("ajaxStop")))}return ye},getJSON:function(s,u,h){return c.get(s,u,h,"json")},getScript:function(s,u){return c.get(s,void 0,u,"script")}}),c.each(["get","post"],function(s,u){c[u]=function(h,d,m,y){return Q(d)&&(y=y||m,m=d,d=void 0),c.ajax(c.extend({url:h,type:u,dataType:y,data:d,success:m},c.isPlainObject(h)&&h))}}),c.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),c._evalUrl=function(s,u,h){return c.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){c.globalEval(d,u,h)}})},c.fn.extend({wrapAll:function(s){var u;return this[0]&&(Q(s)&&(s=s.call(this[0])),u=c(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return Q(s)?this.each(function(u){c(this).wrapInner(s.call(this,u))}):this.each(function(){var u=c(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=Q(s);return this.each(function(h){c(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(s){return!c.expr.pseudos.visible(s)},c.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Hs={0:200,1223:204},Yt=c.ajaxSettings.xhr();$.cors=!!Yt&&"withCredentials"in Yt,$.ajax=Yt=!!Yt,c.ajaxTransport(function(s){var u,h;if($.cors||Yt&&!s.crossDomain)return{send:function(d,m){var y,v=s.xhr();if(v.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)v[y]=s.xhrFields[y];s.mimeType&&v.overrideMimeType&&v.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)v.setRequestHeader(y,d[y]);u=function(C){return function(){u&&(u=h=v.onload=v.onerror=v.onabort=v.ontimeout=v.onreadystatechange=null,C==="abort"?v.abort():C==="error"?typeof v.status!="number"?m(0,"error"):m(v.status,v.statusText):m(Hs[v.status]||v.status,v.statusText,(v.responseType||"text")!=="text"||typeof v.responseText!="string"?{binary:v.response}:{text:v.responseText},v.getAllResponseHeaders()))}},v.onload=u(),h=v.onerror=v.ontimeout=u("error"),v.onabort!==void 0?v.onabort=h:v.onreadystatechange=function(){v.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{v.send(s.hasContent&&s.data||null)}catch(C){if(u)throw C}},abort:function(){u&&u()}}}),c.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return c.globalEval(s),s}}}),c.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),c.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=c("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),Z.head.appendChild(u[0])},abort:function(){h&&h()}}}});var Hi=[],bt=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Hi.pop()||c.expando+"_"+Ls.guid++;return this[s]=!0,s}}),c.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,y,v=s.jsonp!==!1&&(bt.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&bt.test(s.data)&&"data");if(v||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=Q(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,v?s[v]=s[v].replace(bt,"$1"+d):s.jsonp!==!1&&(s.url+=(En.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||c.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?c(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,Hi.push(d)),y&&Q(m)&&m(y[0]),y=m=void 0}),"script"}),$.createHTMLDocument=(function(){var s=Z.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),c.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,y;return u||($.createHTMLDocument?(u=Z.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=Z.location.href,u.head.appendChild(d)):u=Z),m=Ft.exec(s),y=!h&&[],m?[u.createElement(m[1])]:(m=Di([s],u,y),y&&y.length&&c(y).remove(),c.merge([],m.childNodes))},c.fn.load=function(s,u,h){var d,m,y,v=this,C=s.indexOf(" ");return C>-1&&(d=Tn(s.slice(C)),s=s.slice(0,C)),Q(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),v.length>0&&c.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(I){y=arguments,v.html(d?c("<div>").append(c.parseHTML(I)).find(d):I)}).always(h&&function(I,k){v.each(function(){h.apply(this,y||[I.responseText,k,I])})}),this},c.expr.pseudos.animated=function(s){return c.grep(c.timers,function(u){return s===u.elem}).length},c.offset={setOffset:function(s,u,h){var d,m,y,v,C,I,k,B=c.css(s,"position"),q=c(s),F={};B==="static"&&(s.style.position="relative"),C=q.offset(),y=c.css(s,"top"),I=c.css(s,"left"),k=(B==="absolute"||B==="fixed")&&(y+I).indexOf("auto")>-1,k?(d=q.position(),v=d.top,m=d.left):(v=parseFloat(y)||0,m=parseFloat(I)||0),Q(u)&&(u=u.call(s,h,c.extend({},C))),u.top!=null&&(F.top=u.top-C.top+v),u.left!=null&&(F.left=u.left-C.left+m),"using"in u?u.using.call(s,F):q.css(F)}},c.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){c.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(c.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&c.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=c(s).offset(),m.top+=c.css(s,"borderTopWidth",!0),m.left+=c.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-c.css(d,"marginTop",!0),left:u.left-m.left-c.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&c.css(s,"position")==="static";)s=s.offsetParent;return s||Wt})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";c.fn[s]=function(d){return Ut(this,function(m,y,v){var C;if(Y(m)?C=m:m.nodeType===9&&(C=m.defaultView),v===void 0)return C?C[u]:m[y];C?C.scrollTo(h?C.pageXOffset:v,h?v:C.pageYOffset):m[y]=v},s,d,arguments.length)}}),c.each(["top","left"],function(s,u){c.cssHooks[u]=cr($.pixelPosition,function(h,d){if(d)return d=ur(h,u),zr.test(d)?c(h).position()[u]+"px":d})}),c.each({Height:"height",Width:"width"},function(s,u){c.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){c.fn[d]=function(m,y){var v=arguments.length&&(h||typeof m!="boolean"),C=h||(m===!0||y===!0?"margin":"border");return Ut(this,function(I,k,B){var q;return Y(I)?d.indexOf("outer")===0?I["inner"+s]:I.document.documentElement["client"+s]:I.nodeType===9?(q=I.documentElement,Math.max(I.body["scroll"+s],q["scroll"+s],I.body["offset"+s],q["offset"+s],q["client"+s])):B===void 0?c.css(I,k,C):c.style(I,k,B,C)},u,v?m:void 0,v)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){c.fn[u]=function(h){return this.on(u,h)}}),c.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){c.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var $s=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!Q(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||c.guid++,m},c.holdReady=function(s){s?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=b,c.isFunction=Q,c.isWindow=Y,c.camelCase=Rt,c.type=Ue,c.now=Date.now,c.isNumeric=function(s){var u=c.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},c.trim=function(s){return s==null?"":(s+"").replace($s,"$1")};var oa=e.jQuery,mr=e.$;return c.noConflict=function(s){return e.$===c&&(e.$=mr),s&&e.jQuery===c&&(e.jQuery=oa),c},typeof t>"u"&&(e.jQuery=e.$=c),c})})(eo)),eo.exports}var Bf=jf();const Le=Ff(Bf),qf=()=>{};var $u={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],l=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(l&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],l=i+1<n.length,p=l?n[i+1]:0,_=i+2<n.length,T=_?n[i+2]:0,R=a>>2,x=(a&3)<<4|p>>4;let O=(p&15)<<2|T>>6,W=T&63;_||(W=64,l||(O=64)),r.push(t[R],t[x],t[O],t[W])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Hf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const T=i<n.length?t[n.charAt(i)]:64;++i;const x=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||T==null||x==null)throw new $f;const O=a<<2|p>>4;if(r.push(O),T!==64){const W=p<<4&240|T>>2;if(r.push(W),x!==64){const $=T<<6&192|x;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zf=function(n){const e=dl(n);return pl.encodeByteArray(e,!0)},ho=function(n){return zf(n).replace(/\./g,"")},gl=function(n){try{return pl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=()=>Wf().__FIREBASE_DEFAULTS__,Kf=()=>{if(typeof process>"u"||typeof $u>"u")return;const n=$u.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gl(n[1]);return e&&JSON.parse(e)},xo=()=>{try{return qf()||Gf()||Kf()||Qf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ml=n=>xo()?.emulatorHosts?.[n],Xf=n=>{const e=ml(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yl=()=>xo()?.config,_l=n=>xo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ho(JSON.stringify(t)),ho(JSON.stringify(l)),""].join(".")}const Qi={};function Zf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qi))Qi[e]?n.emulator.push(e):n.prod.push(e);return n}function ed(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let zu=!1;function Tl(n,e){if(typeof window>"u"||typeof document>"u"||!vi(window.location.host)||Qi[n]===e||Qi[n]||zu)return;Qi[n]=e;function t(O){return`__firebase__banner__${O}`}const r="__firebase__banner",a=Zf().prod.length>0;function l(){const O=document.getElementById(r);O&&O.remove()}function p(O){O.style.display="flex",O.style.background="#7faaf0",O.style.position="fixed",O.style.bottom="5px",O.style.left="5px",O.style.padding=".5em",O.style.borderRadius="5px",O.style.alignItems="center"}function _(O,W){O.setAttribute("width","24"),O.setAttribute("id",W),O.setAttribute("height","24"),O.setAttribute("viewBox","0 0 24 24"),O.setAttribute("fill","none"),O.style.marginLeft="-6px"}function T(){const O=document.createElement("span");return O.style.cursor="pointer",O.style.marginLeft="16px",O.style.fontSize="24px",O.innerHTML=" &times;",O.onclick=()=>{zu=!0,l()},O}function R(O,W){O.setAttribute("id",W),O.innerText="Learn more",O.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",O.setAttribute("target","__blank"),O.style.paddingLeft="5px",O.style.textDecoration="underline"}function x(){const O=ed(r),W=t("text"),$=document.getElementById(W)||document.createElement("span"),Q=t("learnmore"),Y=document.getElementById(Q)||document.createElement("a"),Z=t("preprendIcon"),ve=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(O.created){const Te=O.element;p(Te),R(Y,Q);const Ue=T();_(ve,Z),Te.append(ve,$,Y,Ue),document.body.appendChild(Te)}a?($.innerText="Preview backend disconnected.",ve.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ve.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",W)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function nd(){const n=xo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function id(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function od(){const n=dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ad(){return!nd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function cd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="FirebaseError";class xn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ld,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?hd(a,r):"Error",p=`${this.serviceName}: ${l} (${i}).`;return new xn(i,p,r)}}function hd(n,e){return n.replace(fd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fd=/\{\$([^}]+)}/g;function dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],l=e[i];if(Wu(a)&&Wu(l)){if(!wr(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Wu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pd(n,e){const t=new gd(n,e);return t.subscribe.bind(t)}class gd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");md(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=fa),i.error===void 0&&(i.error=fa),i.complete===void 0&&(i.complete=fa);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function md(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n){return n&&n._delegate?n._delegate:n}class Ir{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Jf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vd(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,l]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&l.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_d(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(n){return n===_r?void 0:n}function vd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const Ed={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},wd=be.INFO,Id={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},Ad=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Id[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=wd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const bd=(n,e)=>e.some(t=>n instanceof t);let Gu,Ku;function Sd(){return Gu||(Gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cd(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const El=new WeakMap,ba=new WeakMap,wl=new WeakMap,da=new WeakMap,Xa=new WeakMap;function Rd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(Gn(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&El.set(t,n)}).catch(()=>{}),Xa.set(e,n),e}function Pd(n){if(ba.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});ba.set(n,e)}let Sa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ba.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kd(n){Sa=n(Sa)}function Dd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(pa(this),e,...t);return wl.set(r,e.sort?e.sort():[e]),Gn(r)}:Cd().includes(n)?function(...e){return n.apply(pa(this),e),Gn(El.get(this))}:function(...e){return Gn(n.apply(pa(this),e))}}function xd(n){return typeof n=="function"?Dd(n):(n instanceof IDBTransaction&&Pd(n),bd(n,Sd())?new Proxy(n,Sa):n)}function Gn(n){if(n instanceof IDBRequest)return Rd(n);if(da.has(n))return da.get(n);const e=xd(n);return e!==n&&(da.set(n,e),Xa.set(e,n)),e}const pa=n=>Xa.get(n);function Nd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(n,e),p=Gn(l);return r&&l.addEventListener("upgradeneeded",_=>{r(Gn(l.result),_.oldVersion,_.newVersion,Gn(l.transaction),_)}),t&&l.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",T=>i(T.oldVersion,T.newVersion,T))}).catch(()=>{}),p}const Vd=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],ga=new Map;function Qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Od.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vd.includes(t)))return;const a=async function(l,...p){const _=this.transaction(l,i?"readwrite":"readonly");let T=_.store;return r&&(T=T.index(p.shift())),(await Promise.all([T[t](...p),i&&_.done]))[0]};return ga.set(e,a),a}kd(n=>({...n,get:(e,t,r)=>Qu(e,t)||n.get(e,t,r),has:(e,t)=>!!Qu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ld(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ld(n){return n.getComponent()?.type==="VERSION"}const Ca="@firebase/app",Xu="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Qa("@firebase/app"),Fd="@firebase/app-compat",Ud="@firebase/analytics-compat",jd="@firebase/analytics",Bd="@firebase/app-check-compat",qd="@firebase/app-check",Hd="@firebase/auth",$d="@firebase/auth-compat",zd="@firebase/database",Wd="@firebase/data-connect",Gd="@firebase/database-compat",Kd="@firebase/functions",Qd="@firebase/functions-compat",Xd="@firebase/installations",Jd="@firebase/installations-compat",Yd="@firebase/messaging",Zd="@firebase/messaging-compat",ep="@firebase/performance",tp="@firebase/performance-compat",np="@firebase/remote-config",rp="@firebase/remote-config-compat",ip="@firebase/storage",sp="@firebase/storage-compat",op="@firebase/firestore",ap="@firebase/ai",up="@firebase/firestore-compat",cp="firebase",lp="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="[DEFAULT]",hp={[Ca]:"fire-core",[Fd]:"fire-core-compat",[jd]:"fire-analytics",[Ud]:"fire-analytics-compat",[qd]:"fire-app-check",[Bd]:"fire-app-check-compat",[Hd]:"fire-auth",[$d]:"fire-auth-compat",[zd]:"fire-rtdb",[Wd]:"fire-data-connect",[Gd]:"fire-rtdb-compat",[Kd]:"fire-fn",[Qd]:"fire-fn-compat",[Xd]:"fire-iid",[Jd]:"fire-iid-compat",[Yd]:"fire-fcm",[Zd]:"fire-fcm-compat",[ep]:"fire-perf",[tp]:"fire-perf-compat",[np]:"fire-rc",[rp]:"fire-rc-compat",[ip]:"fire-gcs",[sp]:"fire-gcs-compat",[op]:"fire-fst",[up]:"fire-fst-compat",[ap]:"fire-vertex","fire-js":"fire-js",[cp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map,fp=new Map,Pa=new Map;function Ju(n,e){try{n.container.addComponent(e)}catch(t){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hi(n){const e=n.name;if(Pa.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Pa.set(e,n);for(const t of fo.values())Ju(t,n);for(const t of fp.values())Ju(t,n);return!0}function Ja(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new ds("app","Firebase",dp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=lp;function Il(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ra,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(t||(t=yl()),!t)throw Kn.create("no-options");const a=fo.get(i);if(a){if(wr(t,a.options)&&wr(r,a.config))return a;throw Kn.create("duplicate-app",{appName:i})}const l=new Td(i);for(const _ of Pa.values())l.addComponent(_);const p=new pp(t,r,l);return fo.set(i,p),p}function Al(n=Ra){const e=fo.get(n);if(!e&&n===Ra&&yl())return Il();if(!e)throw Kn.create("no-app",{appName:n});return e}function Qn(n,e,t){let r=hp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}hi(new Ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="firebase-heartbeat-database",mp=1,ns="firebase-heartbeat-store";let ma=null;function bl(){return ma||(ma=Nd(gp,mp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),ma}async function yp(n){try{const t=(await bl()).transaction(ns),r=await t.objectStore(ns).get(Sl(n));return await t.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const t=Kn.create("idb-get",{originalErrorMessage:e?.message});Cn.warn(t.message)}}}async function Yu(n,e){try{const r=(await bl()).transaction(ns,"readwrite");await r.objectStore(ns).put(e,Sl(n)),await r.done}catch(t){if(t instanceof xn)Cn.warn(t.message);else{const r=Kn.create("idb-set",{originalErrorMessage:t?.message});Cn.warn(r.message)}}}function Sl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=1024,vp=30;class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>vp){const i=Ip(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zu(),{heartbeatsToSend:t,unsentEntries:r}=Ep(this._heartbeatsCache.heartbeats),i=ho(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Cn.warn(e),""}}}function Zu(){return new Date().toISOString().substring(0,10)}function Ep(n,e=_p){const t=[];let r=n.slice();for(const i of n){const a=t.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),ec(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ec(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class wp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?cd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ec(n){return ho(JSON.stringify({version:2,heartbeats:n})).length}function Ip(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){hi(new Ir("platform-logger",e=>new Md(e),"PRIVATE")),hi(new Ir("heartbeat",e=>new Tp(e),"PRIVATE")),Qn(Ca,Xu,n),Qn(Ca,Xu,"esm2020"),Qn("fire-js","")}Ap("");var bp="firebase",Sp="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(bp,Sp,"app");function Cl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cp=Cl,Rl=new ds("auth","Firebase",Cl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Qa("@firebase/auth");function Rp(n,...e){po.logLevel<=be.WARN&&po.warn(`Auth (${Ti}): ${n}`,...e)}function to(n,...e){po.logLevel<=be.ERROR&&po.error(`Auth (${Ti}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n,...e){throw Ya(n,...e)}function nn(n,...e){return Ya(n,...e)}function Pl(n,e,t){const r={...Cp(),[e]:t};return new ds("auth","Firebase",r).create(e,{appName:n.name})}function Tr(n){return Pl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ya(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Rl.create(n,...e)}function fe(n,e,...t){if(!n)throw Ya(e,...t)}function An(n){const e="INTERNAL ASSERTION FAILED: "+n;throw to(e),new Error(e)}function Pn(n,e){n||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof self<"u"&&self.location?.href||""}function Pp(){return tc()==="http:"||tc()==="https:"}function tc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pp()||id()||"connection"in navigator)?navigator.onLine:!0}function Dp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pn(t>e,"Short delay should be less than long delay!"),this.isMobile=td()||sd()}get(){return kp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n,e){Pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vp=new gs(3e4,6e4);function eu(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ei(n,e,t,r,i={}){return Dl(n,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const p=ps({key:n.config.apiKey,...l}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const T={method:e,headers:_,...a};return rd()||(T.referrerPolicy="no-referrer"),n.emulatorConfig&&vi(n.emulatorConfig.host)&&(T.credentials="include"),kl.fetch()(await xl(n,n.config.apiHost,t,p),T)})}async function Dl(n,e,t){n._canInitEmulator=!1;const r={...xp,...e};try{const i=new Mp(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Ks(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const p=a.ok?l.errorMessage:l.error.message,[_,T]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ks(n,"credential-already-in-use",l);if(_==="EMAIL_EXISTS")throw Ks(n,"email-already-in-use",l);if(_==="USER_DISABLED")throw Ks(n,"user-disabled",l);const R=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw Pl(n,R,T);Rn(n,R)}}catch(i){if(i instanceof xn)throw i;Rn(n,"network-request-failed",{message:String(i)})}}async function Op(n,e,t,r,i={}){const a=await Ei(n,e,t,r,i);return"mfaPendingCredential"in a&&Rn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function xl(n,e,t,r){const i=`${e}${t}?${r}`,a=n,l=a.config.emulator?Za(n.config,i):`${n.config.apiScheme}://${i}`;return Np.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class Mp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),Vp.get())})}}function Ks(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=nn(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(n,e){return Ei(n,"POST","/v1/accounts:delete",e)}async function go(n,e){return Ei(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fp(n,e=!1){const t=cn(n),r=await t.getIdToken(e),i=tu(r);fe(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a?.sign_in_provider;return{claims:i,token:r,authTime:Xi(ya(i.auth_time)),issuedAtTime:Xi(ya(i.iat)),expirationTime:Xi(ya(i.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function ya(n){return Number(n)*1e3}function tu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const i=gl(t);return i?JSON.parse(i):(to("Failed to decode base64 JWT payload"),null)}catch(i){return to("Caught error parsing JWT payload as JSON",i?.toString()),null}}function nc(n){const e=tu(n);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof xn&&Up(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Up({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(n){const e=n.auth,t=await n.getIdToken(),r=await rs(n,go(e,{idToken:t}));fe(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?Nl(i.providerUserInfo):[],l=qp(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!l?.length,T=p?_:!1,R={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Da(i.createdAt,i.lastLoginAt),isAnonymous:T};Object.assign(n,R)}async function Bp(n){const e=cn(n);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Nl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(n,e){const t=await Dl(n,{},async()=>{const r=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,l=await xl(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&vi(n.emulatorConfig.host)&&(_.credentials="include"),kl.fetch()(l,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $p(n,e){return Ei(n,"POST","/v2/accounts:revokeToken",eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=nc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await Hp(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,l=new ai;return r&&(fe(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(fe(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(fe(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,e){fe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new jp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Da(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await rs(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fp(this,e)}reload(){return Bp(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await rs(this,Lp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,T=t.createdAt??void 0,R=t.lastLoginAt??void 0,{uid:x,emailVerified:O,isAnonymous:W,providerData:$,stsTokenManager:Q}=t;fe(x&&Q,e,"internal-error");const Y=ai.fromJSON(this.name,Q);fe(typeof x=="string",e,"internal-error"),Bn(r,e.name),Bn(i,e.name),fe(typeof O=="boolean",e,"internal-error"),fe(typeof W=="boolean",e,"internal-error"),Bn(a,e.name),Bn(l,e.name),Bn(p,e.name),Bn(_,e.name),Bn(T,e.name),Bn(R,e.name);const Z=new qt({uid:x,auth:e,email:i,emailVerified:O,displayName:r,isAnonymous:W,photoURL:l,phoneNumber:a,tenantId:p,stsTokenManager:Y,createdAt:T,lastLoginAt:R});return $&&Array.isArray($)&&(Z.providerData=$.map(ve=>({...ve}))),_&&(Z._redirectEventId=_),Z}static async _fromIdTokenResponse(e,t,r=!1){const i=new ai;i.updateFromServerResponse(t);const a=new qt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mo(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];fe(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Nl(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!a?.length,p=new ai;p.updateFromIdToken(r);const _=new qt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:l}),T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Da(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,T),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map;function bn(n){Pn(n instanceof Function,"Expected a class definition");let e=rc.get(n);return e?(Pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vl.type="NONE";const ic=Vl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n,e,t){return`firebase:${n}:${e}:${t}`}class ui{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=no(this.userKey,i.apiKey,a),this.fullPersistenceKey=no("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await go(this.auth,{idToken:e}).catch(()=>{});return t?qt._fromGetAccountInfoResponse(this.auth,t,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ui(bn(ic),e,r);const i=(await Promise.all(t.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let a=i[0]||bn(ic);const l=no(r,e.config.apiKey,e.name);let p=null;for(const T of t)try{const R=await T._get(l);if(R){let x;if(typeof R=="string"){const O=await go(e,{idToken:R}).catch(()=>{});if(!O)break;x=await qt._fromGetAccountInfoResponse(e,O,R)}else x=qt._fromJSON(e,R);T!==a&&(p=x),a=T;break}}catch{}const _=i.filter(T=>T._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new ui(a,e,r):(a=_[0],p&&await a._set(l,p.toJSON()),await Promise.all(t.map(async T=>{if(T!==a)try{await T._remove(l)}catch{}})),new ui(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ol(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jl(e))return"Blackberry";if(Bl(e))return"Webos";if(Ml(e))return"Safari";if((e.includes("chrome/")||Ll(e))&&!e.includes("edge/"))return"Chrome";if(Ul(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ol(n=dt()){return/firefox\//i.test(n)}function Ml(n=dt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ll(n=dt()){return/crios\//i.test(n)}function Fl(n=dt()){return/iemobile/i.test(n)}function Ul(n=dt()){return/android/i.test(n)}function jl(n=dt()){return/blackberry/i.test(n)}function Bl(n=dt()){return/webos/i.test(n)}function nu(n=dt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zp(n=dt()){return nu(n)&&!!window.navigator?.standalone}function Wp(){return od()&&document.documentMode===10}function ql(n=dt()){return nu(n)||Ul(n)||Bl(n)||jl(n)||/windows phone/i.test(n)||Fl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n,e=[]){let t;switch(n){case"Browser":t=sc(dt());break;case"Worker":t=`${sc(dt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,p)=>{try{const _=e(a);l(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(n,e={}){return Ei(n,"GET","/v2/passwordPolicy",eu(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=6;class Xp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Qp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oc(this),this.idTokenSubscription=new oc(this),this.beforeStateQueue=new Gp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await go(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===l)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Tr(this));const t=e?cn(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kp(this),t=new Xp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $p(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bn(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[bn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(p,this,"internal-error"),p.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{l=!0,_()}}else{const _=e.addObserver(t);return()=>{l=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Rp(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ru(n){return cn(n)}class oc{constructor(e){this.auth=e,this.observer=null,this.addObserver=pd(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yp(n){iu=n}function Zp(n){return iu.loadJS(n)}function eg(){return iu.gapiScript}function tg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n,e){const t=Ja(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(wr(a,e??{}))return i;Rn(i,"already-initialized")}return t.initialize({options:e})}function rg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(bn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function ig(n,e,t){const r=ru(n);fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=$l(e),{host:l,port:p}=sg(e),_=p===null?"":`:${p}`,T={url:`${a}//${l}${_}/`},R=Object.freeze({host:l,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),fe(wr(T,r.config.emulator)&&wr(R,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=T,r.emulatorConfig=R,r.settings.appVerificationDisabledForTesting=!0,vi(l)?(vl(`${a}//${l}${_}`),Tl("Auth",!0)):og()}function $l(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sg(n){const e=$l(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:ac(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:ac(l)}}}function ac(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function og(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,t){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,e){return Op(n,"POST","/v1/accounts:signInWithIdp",eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="http://localhost";class Ar extends zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const l=new Ar(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return ci(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ci(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ci(e,t)}buildRequest(){const e={requestUri:ag,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ps(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Wl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ms{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ar._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Hn.credential(t,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ms{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends ms{constructor(){super("twitter.com")}static credential(e,t){return Ar._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zn.credential(t,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await qt._fromIdTokenResponse(e,r,i),l=uc(r);return new fi({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=uc(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function uc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends xn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new yo(e,t,r,i)}}function Gl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(n,a,e,r):a})}async function ug(n,e,t=!1){const r=await rs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fi._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(n,e,t=!1){const{auth:r}=n;if(tn(r.app))return Promise.reject(Tr(r));const i="reauthenticate";try{const a=await rs(n,Gl(r,i,e,n),t);fe(a.idToken,r,"internal-error");const l=tu(a.idToken);fe(l,r,"internal-error");const{sub:p}=l;return fe(n.uid===p,r,"user-mismatch"),fi._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&Rn(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(n,e,t=!1){if(tn(n.app))return Promise.reject(Tr(n));const r="signIn",i=await Gl(n,r,e),a=await fi._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}function hg(n,e,t,r){return cn(n).onIdTokenChanged(e,t,r)}function fg(n,e,t){return cn(n).beforeAuthStateChanged(e,t)}const _o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=1e3,pg=10;class Ql extends Kl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ql(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,p,_)=>{this.notifyListeners(l,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);Wp()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ql.type="LOCAL";const gg=Ql;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Kl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xl.type="SESSION";const Jl=Xl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new No(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,l=this.handlersMap[i];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(l).map(async T=>T(t.origin,a)),_=await mg(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((p,_)=>{const T=su("",20);i.port1.start();const R=setTimeout(()=>{_(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(x){const O=x;if(O.data.eventId===T)switch(O.data.status){case"ack":clearTimeout(R),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(O.data.response);break;default:clearTimeout(R),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:T,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function _g(n){rn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function vg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tg(){return navigator?.serviceWorker?.controller||null}function Eg(){return Yl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="firebaseLocalStorageDb",wg=1,vo="firebaseLocalStorage",eh="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vo(n,e){return n.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function Ig(){const n=indexedDB.deleteDatabase(Zl);return new ys(n).toPromise()}function xa(){const n=indexedDB.open(Zl,wg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vo,{keyPath:eh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vo)?e(r):(r.close(),await Ig(),e(await xa()))})})}async function cc(n,e,t){const r=Vo(n,!0).put({[eh]:e,value:t});return new ys(r).toPromise()}async function Ag(n,e){const t=Vo(n,!1).get(e),r=await new ys(t).toPromise();return r===void 0?null:r.value}function lc(n,e){const t=Vo(n,!0).delete(e);return new ys(t).toPromise()}const bg=800,Sg=3;class th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Sg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(Eg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await vg(),!this.activeServiceWorker)return;this.sender=new yg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await cc(e,_o,"1"),await lc(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ag(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Vo(i,!1).getAll();return new ys(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}th.type="LOCAL";const Cg=th;new gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e){return e?bn(e):(fe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends zl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ci(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pg(n){return lg(n.auth,new ou(n),n.bypassAuthState)}function kg(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),cg(t,new ou(n),n.bypassAuthState)}async function Dg(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),ug(t,new ou(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:l,type:p}=e;if(l){this.reject(l);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(T){this.reject(T)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pg;case"linkViaPopup":case"linkViaRedirect":return Dg;case"reauthViaPopup":case"reauthViaRedirect":return kg;default:Rn(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new gs(2e3,1e4);class oi extends nh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xg.get())};e()}}oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="pendingRedirect",ro=new Map;class Vg extends nh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const r=await Og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Og(n,e){const t=Fg(e),r=Lg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Mg(n,e){ro.set(n._key(),e)}function Lg(n){return bn(n._redirectPersistence)}function Fg(n){return no(Ng,n.config.apiKey,n.name)}async function Ug(n,e,t=!1){if(tn(n.app))return Promise.reject(Tr(n));const r=ru(n),i=Rg(r,e),l=await new Vg(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=600*1e3;class Bg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!rh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jg&&this.cachedEventUids.clear(),this.cachedEventUids.has(hc(e))}saveEventToCache(e){this.cachedEventUids.add(hc(e)),this.lastProcessedEventTime=Date.now()}}function hc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function qg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(n,e={}){return Ei(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zg=/^https?/;async function Wg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Hg(n);for(const t of e)try{if(Gg(t))return}catch{}Rn(n,"unauthorized-domain")}function Gg(n){const e=ka(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!zg.test(t))return!1;if($g.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new gs(3e4,6e4);function fc(){const n=rn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Qg(n){return new Promise((e,t)=>{function r(){fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fc(),t(nn(n,"network-request-failed"))},timeout:Kg.get()})}if(rn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rn().gapi?.load)r();else{const i=tg("iframefcb");return rn()[i]=()=>{gapi.load?r():t(nn(n,"network-request-failed"))},Zp(`${eg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw io=null,e})}let io=null;function Xg(n){return io=io||Qg(n),io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new gs(5e3,15e3),Yg="__/auth/iframe",Zg="emulator/auth/iframe",em={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nm(n){const e=n.config;fe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Za(e,Zg):`https://${n.config.authDomain}/${Yg}`,r={apiKey:e.apiKey,appName:n.name,v:Ti},i=tm.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ps(r).slice(1)}`}async function rm(n){const e=await Xg(n),t=rn().gapi;return fe(t,n,"internal-error"),e.open({where:document.body,url:nm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:em,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=nn(n,"network-request-failed"),p=rn().setTimeout(()=>{a(l)},Jg.get());function _(){rn().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sm=500,om=600,am="_blank",um="http://localhost";class dc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cm(n,e,t,r=sm,i=om){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...im,width:r.toString(),height:i.toString(),top:a,left:l},T=dt().toLowerCase();t&&(p=Ll(T)?am:t),Ol(T)&&(e=e||um,_.scrollbars="yes");const R=Object.entries(_).reduce((O,[W,$])=>`${O}${W}=${$},`,"");if(zp(T)&&p!=="_self")return lm(e||"",p),new dc(null);const x=window.open(e||"",p,R);fe(x,n,"popup-blocked");try{x.focus()}catch{}return new dc(x)}function lm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="__/auth/handler",fm="emulator/auth/handler",dm=encodeURIComponent("fac");async function pc(n,e,t,r,i,a){fe(n.config.authDomain,n,"auth-domain-config-required"),fe(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ti,eventId:i};if(e instanceof Wl){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",dd(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[R,x]of Object.entries({}))l[R]=x}if(e instanceof ms){const R=e.getScopes().filter(x=>x!=="");R.length>0&&(l.scopes=R.join(","))}n.tenantId&&(l.tid=n.tenantId);const p=l;for(const R of Object.keys(p))p[R]===void 0&&delete p[R];const _=await n._getAppCheckToken(),T=_?`#${dm}=${encodeURIComponent(_)}`:"";return`${pm(n)}?${ps(p).slice(1)}${T}`}function pm({config:n}){return n.emulator?Za(n,fm):`https://${n.authDomain}/${hm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class gm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jl,this._completeRedirectFn=Ug,this._overrideRedirectResult=Mg}async _openPopup(e,t,r,i){Pn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await pc(e,t,r,ka(),i);return cm(e,a,su())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await pc(e,t,r,ka(),i);return _g(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Pn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await rm(e),r=new Bg(e);return t.register("authEvent",i=>(fe(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_a,{type:_a},i=>{const a=i?.[0]?.[_a];a!==void 0&&t(!!a),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ql()||Ml()||nu()}}const mm=gm;var gc="@firebase/auth",mc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vm(n){hi(new Ir("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:p}=r.options;fe(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:l,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hl(n)},T=new Jp(r,i,a,_);return rg(T,t),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),hi(new Ir("auth-internal",e=>{const t=ru(e.getProvider("auth").getImmediate());return(r=>new ym(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(gc,mc,_m(n)),Qn(gc,mc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=300,Em=_l("authIdTokenMaxAge")||Tm;let yc=null;const wm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Em)return;const i=t?.token;yc!==i&&(yc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Im(n=Al()){const e=Ja(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ng(n,{popupRedirectResolver:mm,persistence:[Cg,gg,Jl]}),r=_l("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=wm(a.toString());fg(t,l,()=>l(t.currentUser)),hg(t,p=>l(p))}}const i=ml("auth");return i&&ig(t,`http://${i}`),t}function Am(){return document.getElementsByTagName("head")?.[0]??document}Yp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=nn("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Am().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vm("Browser");var _c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,ih;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(c,S){function b(){}b.prototype=S.prototype,c.D=S.prototype,c.prototype=new b,c.prototype.constructor=c,c.C=function(D,N,M){for(var A=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)A[pt-2]=arguments[pt];return S.prototype[N].apply(D,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(c,S,b){b||(b=0);var D=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)D[N]=S.charCodeAt(b++)|S.charCodeAt(b++)<<8|S.charCodeAt(b++)<<16|S.charCodeAt(b++)<<24;else for(N=0;16>N;++N)D[N]=S[b++]|S[b++]<<8|S[b++]<<16|S[b++]<<24;S=c.g[0],b=c.g[1],N=c.g[2];var M=c.g[3],A=S+(M^b&(N^M))+D[0]+3614090360&4294967295;S=b+(A<<7&4294967295|A>>>25),A=M+(N^S&(b^N))+D[1]+3905402710&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(b^M&(S^b))+D[2]+606105819&4294967295,N=M+(A<<17&4294967295|A>>>15),A=b+(S^N&(M^S))+D[3]+3250441966&4294967295,b=N+(A<<22&4294967295|A>>>10),A=S+(M^b&(N^M))+D[4]+4118548399&4294967295,S=b+(A<<7&4294967295|A>>>25),A=M+(N^S&(b^N))+D[5]+1200080426&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(b^M&(S^b))+D[6]+2821735955&4294967295,N=M+(A<<17&4294967295|A>>>15),A=b+(S^N&(M^S))+D[7]+4249261313&4294967295,b=N+(A<<22&4294967295|A>>>10),A=S+(M^b&(N^M))+D[8]+1770035416&4294967295,S=b+(A<<7&4294967295|A>>>25),A=M+(N^S&(b^N))+D[9]+2336552879&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(b^M&(S^b))+D[10]+4294925233&4294967295,N=M+(A<<17&4294967295|A>>>15),A=b+(S^N&(M^S))+D[11]+2304563134&4294967295,b=N+(A<<22&4294967295|A>>>10),A=S+(M^b&(N^M))+D[12]+1804603682&4294967295,S=b+(A<<7&4294967295|A>>>25),A=M+(N^S&(b^N))+D[13]+4254626195&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(b^M&(S^b))+D[14]+2792965006&4294967295,N=M+(A<<17&4294967295|A>>>15),A=b+(S^N&(M^S))+D[15]+1236535329&4294967295,b=N+(A<<22&4294967295|A>>>10),A=S+(N^M&(b^N))+D[1]+4129170786&4294967295,S=b+(A<<5&4294967295|A>>>27),A=M+(b^N&(S^b))+D[6]+3225465664&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^b&(M^S))+D[11]+643717713&4294967295,N=M+(A<<14&4294967295|A>>>18),A=b+(M^S&(N^M))+D[0]+3921069994&4294967295,b=N+(A<<20&4294967295|A>>>12),A=S+(N^M&(b^N))+D[5]+3593408605&4294967295,S=b+(A<<5&4294967295|A>>>27),A=M+(b^N&(S^b))+D[10]+38016083&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^b&(M^S))+D[15]+3634488961&4294967295,N=M+(A<<14&4294967295|A>>>18),A=b+(M^S&(N^M))+D[4]+3889429448&4294967295,b=N+(A<<20&4294967295|A>>>12),A=S+(N^M&(b^N))+D[9]+568446438&4294967295,S=b+(A<<5&4294967295|A>>>27),A=M+(b^N&(S^b))+D[14]+3275163606&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^b&(M^S))+D[3]+4107603335&4294967295,N=M+(A<<14&4294967295|A>>>18),A=b+(M^S&(N^M))+D[8]+1163531501&4294967295,b=N+(A<<20&4294967295|A>>>12),A=S+(N^M&(b^N))+D[13]+2850285829&4294967295,S=b+(A<<5&4294967295|A>>>27),A=M+(b^N&(S^b))+D[2]+4243563512&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^b&(M^S))+D[7]+1735328473&4294967295,N=M+(A<<14&4294967295|A>>>18),A=b+(M^S&(N^M))+D[12]+2368359562&4294967295,b=N+(A<<20&4294967295|A>>>12),A=S+(b^N^M)+D[5]+4294588738&4294967295,S=b+(A<<4&4294967295|A>>>28),A=M+(S^b^N)+D[8]+2272392833&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^b)+D[11]+1839030562&4294967295,N=M+(A<<16&4294967295|A>>>16),A=b+(N^M^S)+D[14]+4259657740&4294967295,b=N+(A<<23&4294967295|A>>>9),A=S+(b^N^M)+D[1]+2763975236&4294967295,S=b+(A<<4&4294967295|A>>>28),A=M+(S^b^N)+D[4]+1272893353&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^b)+D[7]+4139469664&4294967295,N=M+(A<<16&4294967295|A>>>16),A=b+(N^M^S)+D[10]+3200236656&4294967295,b=N+(A<<23&4294967295|A>>>9),A=S+(b^N^M)+D[13]+681279174&4294967295,S=b+(A<<4&4294967295|A>>>28),A=M+(S^b^N)+D[0]+3936430074&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^b)+D[3]+3572445317&4294967295,N=M+(A<<16&4294967295|A>>>16),A=b+(N^M^S)+D[6]+76029189&4294967295,b=N+(A<<23&4294967295|A>>>9),A=S+(b^N^M)+D[9]+3654602809&4294967295,S=b+(A<<4&4294967295|A>>>28),A=M+(S^b^N)+D[12]+3873151461&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^b)+D[15]+530742520&4294967295,N=M+(A<<16&4294967295|A>>>16),A=b+(N^M^S)+D[2]+3299628645&4294967295,b=N+(A<<23&4294967295|A>>>9),A=S+(N^(b|~M))+D[0]+4096336452&4294967295,S=b+(A<<6&4294967295|A>>>26),A=M+(b^(S|~N))+D[7]+1126891415&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~b))+D[14]+2878612391&4294967295,N=M+(A<<15&4294967295|A>>>17),A=b+(M^(N|~S))+D[5]+4237533241&4294967295,b=N+(A<<21&4294967295|A>>>11),A=S+(N^(b|~M))+D[12]+1700485571&4294967295,S=b+(A<<6&4294967295|A>>>26),A=M+(b^(S|~N))+D[3]+2399980690&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~b))+D[10]+4293915773&4294967295,N=M+(A<<15&4294967295|A>>>17),A=b+(M^(N|~S))+D[1]+2240044497&4294967295,b=N+(A<<21&4294967295|A>>>11),A=S+(N^(b|~M))+D[8]+1873313359&4294967295,S=b+(A<<6&4294967295|A>>>26),A=M+(b^(S|~N))+D[15]+4264355552&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~b))+D[6]+2734768916&4294967295,N=M+(A<<15&4294967295|A>>>17),A=b+(M^(N|~S))+D[13]+1309151649&4294967295,b=N+(A<<21&4294967295|A>>>11),A=S+(N^(b|~M))+D[4]+4149444226&4294967295,S=b+(A<<6&4294967295|A>>>26),A=M+(b^(S|~N))+D[11]+3174756917&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~b))+D[2]+718787259&4294967295,N=M+(A<<15&4294967295|A>>>17),A=b+(M^(N|~S))+D[9]+3951481745&4294967295,c.g[0]=c.g[0]+S&4294967295,c.g[1]=c.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,c.g[2]=c.g[2]+N&4294967295,c.g[3]=c.g[3]+M&4294967295}r.prototype.u=function(c,S){S===void 0&&(S=c.length);for(var b=S-this.blockSize,D=this.B,N=this.h,M=0;M<S;){if(N==0)for(;M<=b;)i(this,c,M),M+=this.blockSize;if(typeof c=="string"){for(;M<S;)if(D[N++]=c.charCodeAt(M++),N==this.blockSize){i(this,D),N=0;break}}else for(;M<S;)if(D[N++]=c[M++],N==this.blockSize){i(this,D),N=0;break}}this.h=N,this.o+=S},r.prototype.v=function(){var c=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);c[0]=128;for(var S=1;S<c.length-8;++S)c[S]=0;var b=8*this.o;for(S=c.length-8;S<c.length;++S)c[S]=b&255,b/=256;for(this.u(c),c=Array(16),S=b=0;4>S;++S)for(var D=0;32>D;D+=8)c[b++]=this.g[S]>>>D&255;return c};function a(c,S){var b=p;return Object.prototype.hasOwnProperty.call(b,c)?b[c]:b[c]=S(c)}function l(c,S){this.h=S;for(var b=[],D=!0,N=c.length-1;0<=N;N--){var M=c[N]|0;D&&M==S||(b[N]=M,D=!1)}this.g=b}var p={};function _(c){return-128<=c&&128>c?a(c,function(S){return new l([S|0],0>S?-1:0)}):new l([c|0],0>c?-1:0)}function T(c){if(isNaN(c)||!isFinite(c))return x;if(0>c)return Y(T(-c));for(var S=[],b=1,D=0;c>=b;D++)S[D]=c/b|0,b*=4294967296;return new l(S,0)}function R(c,S){if(c.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(c.charAt(0)=="-")return Y(R(c.substring(1),S));if(0<=c.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=T(Math.pow(S,8)),D=x,N=0;N<c.length;N+=8){var M=Math.min(8,c.length-N),A=parseInt(c.substring(N,N+M),S);8>M?(M=T(Math.pow(S,M)),D=D.j(M).add(T(A))):(D=D.j(b),D=D.add(T(A)))}return D}var x=_(0),O=_(1),W=_(16777216);n=l.prototype,n.m=function(){if(Q(this))return-Y(this).m();for(var c=0,S=1,b=0;b<this.g.length;b++){var D=this.i(b);c+=(0<=D?D:4294967296+D)*S,S*=4294967296}return c},n.toString=function(c){if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if($(this))return"0";if(Q(this))return"-"+Y(this).toString(c);for(var S=T(Math.pow(c,6)),b=this,D="";;){var N=Ue(b,S).g;b=Z(b,N.j(S));var M=((0<b.g.length?b.g[0]:b.h)>>>0).toString(c);if(b=N,$(b))return M+D;for(;6>M.length;)M="0"+M;D=M+D}},n.i=function(c){return 0>c?0:c<this.g.length?this.g[c]:this.h};function $(c){if(c.h!=0)return!1;for(var S=0;S<c.g.length;S++)if(c.g[S]!=0)return!1;return!0}function Q(c){return c.h==-1}n.l=function(c){return c=Z(this,c),Q(c)?-1:$(c)?0:1};function Y(c){for(var S=c.g.length,b=[],D=0;D<S;D++)b[D]=~c.g[D];return new l(b,~c.h).add(O)}n.abs=function(){return Q(this)?Y(this):this},n.add=function(c){for(var S=Math.max(this.g.length,c.g.length),b=[],D=0,N=0;N<=S;N++){var M=D+(this.i(N)&65535)+(c.i(N)&65535),A=(M>>>16)+(this.i(N)>>>16)+(c.i(N)>>>16);D=A>>>16,M&=65535,A&=65535,b[N]=A<<16|M}return new l(b,b[b.length-1]&-2147483648?-1:0)};function Z(c,S){return c.add(Y(S))}n.j=function(c){if($(this)||$(c))return x;if(Q(this))return Q(c)?Y(this).j(Y(c)):Y(Y(this).j(c));if(Q(c))return Y(this.j(Y(c)));if(0>this.l(W)&&0>c.l(W))return T(this.m()*c.m());for(var S=this.g.length+c.g.length,b=[],D=0;D<2*S;D++)b[D]=0;for(D=0;D<this.g.length;D++)for(var N=0;N<c.g.length;N++){var M=this.i(D)>>>16,A=this.i(D)&65535,pt=c.i(N)>>>16,ir=c.i(N)&65535;b[2*D+2*N]+=A*ir,ve(b,2*D+2*N),b[2*D+2*N+1]+=M*ir,ve(b,2*D+2*N+1),b[2*D+2*N+1]+=A*pt,ve(b,2*D+2*N+1),b[2*D+2*N+2]+=M*pt,ve(b,2*D+2*N+2)}for(D=0;D<S;D++)b[D]=b[2*D+1]<<16|b[2*D];for(D=S;D<2*S;D++)b[D]=0;return new l(b,0)};function ve(c,S){for(;(c[S]&65535)!=c[S];)c[S+1]+=c[S]>>>16,c[S]&=65535,S++}function Te(c,S){this.g=c,this.h=S}function Ue(c,S){if($(S))throw Error("division by zero");if($(c))return new Te(x,x);if(Q(c))return S=Ue(Y(c),S),new Te(Y(S.g),Y(S.h));if(Q(S))return S=Ue(c,Y(S)),new Te(Y(S.g),S.h);if(30<c.g.length){if(Q(c)||Q(S))throw Error("slowDivide_ only works with positive integers.");for(var b=O,D=S;0>=D.l(c);)b=At(b),D=At(D);var N=Ye(b,1),M=Ye(D,1);for(D=Ye(D,2),b=Ye(b,2);!$(D);){var A=M.add(D);0>=A.l(c)&&(N=N.add(b),M=A),D=Ye(D,1),b=Ye(b,1)}return S=Z(c,N.j(S)),new Te(N,S)}for(N=x;0<=c.l(S);){for(b=Math.max(1,Math.floor(c.m()/S.m())),D=Math.ceil(Math.log(b)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),M=T(b),A=M.j(S);Q(A)||0<A.l(c);)b-=D,M=T(b),A=M.j(S);$(M)&&(M=O),N=N.add(M),c=Z(c,A)}return new Te(N,c)}n.A=function(c){return Ue(this,c).h},n.and=function(c){for(var S=Math.max(this.g.length,c.g.length),b=[],D=0;D<S;D++)b[D]=this.i(D)&c.i(D);return new l(b,this.h&c.h)},n.or=function(c){for(var S=Math.max(this.g.length,c.g.length),b=[],D=0;D<S;D++)b[D]=this.i(D)|c.i(D);return new l(b,this.h|c.h)},n.xor=function(c){for(var S=Math.max(this.g.length,c.g.length),b=[],D=0;D<S;D++)b[D]=this.i(D)^c.i(D);return new l(b,this.h^c.h)};function At(c){for(var S=c.g.length+1,b=[],D=0;D<S;D++)b[D]=c.i(D)<<1|c.i(D-1)>>>31;return new l(b,c.h)}function Ye(c,S){var b=S>>5;S%=32;for(var D=c.g.length-b,N=[],M=0;M<D;M++)N[M]=0<S?c.i(M+b)>>>S|c.i(M+b+1)<<32-S:c.i(M+b);return new l(N,c.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ih=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=T,l.fromString=R,Xn=l}).apply(typeof _c<"u"?_c:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sh,zi,oh,so,Na,ah,uh,ch;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,f,g){return o==Array.prototype||o==Object.prototype||(o[f]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var E=0;E<o.length-1;E++){var V=o[E];if(!(V in g))break e;g=g[V]}o=o[o.length-1],E=g[o],f=f(E),f!=E&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}function a(o,f){o instanceof String&&(o+="");var g=0,E=!1,V={next:function(){if(!E&&g<o.length){var U=g++;return{value:f(U,o[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(o){return o||function(){return a(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},p=this||self;function _(o){var f=typeof o;return f=f!="object"?f:o?Array.isArray(o)?"array":f:"null",f=="array"||f=="object"&&typeof o.length=="number"}function T(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function R(o,f,g){return o.call.apply(o.bind,arguments)}function x(o,f,g){if(!o)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,E),o.apply(f,V)}}return function(){return o.apply(f,arguments)}}function O(o,f,g){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?R:x,O.apply(null,arguments)}function W(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),o.apply(this,E)}}function $(o,f){function g(){}g.prototype=f.prototype,o.aa=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(E,V,U){for(var X=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)X[ke-2]=arguments[ke];return f.prototype[V].apply(E,X)}}function Q(o){const f=o.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=o[E];return g}return[]}function Y(o,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(_(E)){const V=o.length||0,U=E.length||0;o.length=V+U;for(let X=0;X<U;X++)o[V+X]=E[X]}else o.push(E)}}class Z{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(o){return/^[\s\xa0]*$/.test(o)}function Te(){var o=p.navigator;return o&&(o=o.userAgent)?o:""}function Ue(o){return Ue[" "](o),o}Ue[" "]=function(){};var At=Te().indexOf("Gecko")!=-1&&!(Te().toLowerCase().indexOf("webkit")!=-1&&Te().indexOf("Edge")==-1)&&!(Te().indexOf("Trident")!=-1||Te().indexOf("MSIE")!=-1)&&Te().indexOf("Edge")==-1;function Ye(o,f,g){for(const E in o)f.call(g,o[E],E,o)}function c(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function S(o){const f={};for(const g in o)f[g]=o[g];return f}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(o,f){let g,E;for(let V=1;V<arguments.length;V++){E=arguments[V];for(g in E)o[g]=E[g];for(let U=0;U<b.length;U++)g=b[U],Object.prototype.hasOwnProperty.call(E,g)&&(o[g]=E[g])}}function N(o){var f=1;o=o.split(":");const g=[];for(;0<f&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function M(o){p.setTimeout(()=>{throw o},0)}function A(){var o=$t;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class pt{constructor(){this.h=this.g=null}add(f,g){const E=ir.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ir=new Z(()=>new Go,o=>o.reset());class Go{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,fn=!1,$t=new pt,Si=()=>{const o=p.Promise.resolve(void 0);gt=()=>{o.then(Is)}};var Is=()=>{for(var o;o=A();){try{o.h.call(o.g)}catch(g){M(g)}var f=ir;f.j(o),100>f.h&&(f.h++,o.next=f.g,f.g=o)}fn=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var As=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};p.addEventListener("test",g,f),p.removeEventListener("test",g,f)}catch{}return o})();function sr(o,f){if(ze.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,E=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget){if(At){e:{try{Ue(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ko[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&sr.aa.h.call(this)}}$(sr,ze);var Ko={2:"touch",3:"pen",4:"mouse"};sr.prototype.h=function(){sr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Dr="closure_listenable_"+(1e6*Math.random()|0),Qo=0;function bs(o,f,g,E,V){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=V,this.key=++Qo,this.da=this.fa=!1}function mt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function xr(o){this.src=o,this.g={},this.h=0}xr.prototype.add=function(o,f,g,E,V){var U=o.toString();o=this.g[U],o||(o=this.g[U]=[],this.h++);var X=Nn(o,f,E,V);return-1<X?(f=o[X],g||(f.fa=!1)):(f=new bs(f,this.src,U,!!E,V),f.fa=g,o.push(f)),f};function zt(o,f){var g=f.type;if(g in o.g){var E=o.g[g],V=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=V)&&Array.prototype.splice.call(E,V,1),U&&(mt(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Nn(o,f,g,E){for(var V=0;V<o.length;++V){var U=o[V];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==E)return V}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),Ci={};function Vr(o,f,g,E,V){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Vr(o,f[U],g,E,V);return null}return g=re(g),o&&o[Dr]?o.K(f,g,T(E)?!!E.capture:!1,V):Or(o,f,g,!1,E,V)}function Or(o,f,g,E,V,U){if(!f)throw Error("Invalid event type");var X=T(V)?!!V.capture:!!V,ke=dn(o);if(ke||(o[Nr]=ke=new xr(o)),g=ke.add(f,g,E,X,U),g.proxy)return g;if(E=Ut(),g.proxy=E,E.src=o,E.listener=g,o.addEventListener)As||(V=X),V===void 0&&(V=!1),o.addEventListener(f.toString(),E,V);else if(o.attachEvent)o.attachEvent(Cs(f.toString()),E);else if(o.addListener&&o.removeListener)o.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ut(){function o(g){return f.call(o.src,o.listener,g)}const f=Rt;return o}function Ss(o,f,g,E,V){if(Array.isArray(f))for(var U=0;U<f.length;U++)Ss(o,f[U],g,E,V);else E=T(E)?!!E.capture:!!E,g=re(g),o&&o[Dr]?(o=o.i,f=String(f).toString(),f in o.g&&(U=o.g[f],g=Nn(U,g,E,V),-1<g&&(mt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete o.g[f],o.h--)))):o&&(o=dn(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Nn(f,g,E,V)),(g=-1<o?f[o]:null)&&Ri(g))}function Ri(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[Dr])zt(f.i,o);else{var g=o.type,E=o.proxy;f.removeEventListener?f.removeEventListener(g,E,o.capture):f.detachEvent?f.detachEvent(Cs(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=dn(f))?(zt(g,o),g.h==0&&(g.src=null,f[Nr]=null)):mt(o)}}}function Cs(o){return o in Ci?Ci[o]:Ci[o]="on"+o}function Rt(o,f){if(o.da)o=!0;else{f=new sr(f,this);var g=o.listener,E=o.ha||o.src;o.fa&&Ri(o),o=g.call(E,f)}return o}function dn(o){return o=o[Nr],o instanceof xr?o:null}var pn="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(o){return typeof o=="function"?o:(o[pn]||(o[pn]=function(f){return o.handleEvent(f)}),o[pn])}function Pe(){Ft.call(this),this.i=new xr(this),this.M=this,this.F=null}$(Pe,Ft),Pe.prototype[Dr]=!0,Pe.prototype.removeEventListener=function(o,f,g,E){Ss(this,o,f,g,E)};function it(o,f){var g,E=o.F;if(E)for(g=[];E;E=E.F)g.push(E);if(o=o.M,E=f.type||f,typeof f=="string")f=new ze(f,o);else if(f instanceof ze)f.target=f.target||o;else{var V=f;f=new ze(E,o),D(f,V)}if(V=!0,g)for(var U=g.length-1;0<=U;U--){var X=f.g=g[U];V=Mr(X,E,!0,f)&&V}if(X=f.g=o,V=Mr(X,E,!0,f)&&V,V=Mr(X,E,!1,f)&&V,g)for(U=0;U<g.length;U++)X=f.g=g[U],V=Mr(X,E,!1,f)&&V}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var o=this.i,f;for(f in o.g){for(var g=o.g[f],E=0;E<g.length;E++)mt(g[E]);delete o.g[f],o.h--}}this.F=null},Pe.prototype.K=function(o,f,g,E){return this.i.add(String(o),f,!1,g,E)},Pe.prototype.L=function(o,f,g,E){return this.i.add(String(o),f,!0,g,E)};function Mr(o,f,g,E){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==g){var ke=X.listener,Ne=X.ha||X.src;X.fa&&zt(o.i,X),V=ke.call(Ne,E)!==!1&&V}}return V&&!E.defaultPrevented}function Rs(o,f,g){if(typeof o=="function")g&&(o=O(o,g));else if(o&&typeof o.handleEvent=="function")o=O(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(o,f||0)}function Pi(o){o.g=Rs(()=>{o.g=null,o.i&&(o.i=!1,Pi(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class Ps extends Ft{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Pi(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(o){Ft.call(this),this.h=o,this.g={}}$(jt,Ft);var Pt=[];function Wt(o){Ye(o.g,function(f,g){this.g.hasOwnProperty(g)&&Ri(f)},o),o.g={}}jt.prototype.N=function(){jt.aa.N.call(this),Wt(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gt=p.JSON.stringify,Xo=p.JSON.parse,Lr=class{stringify(o){return p.JSON.stringify(o,void 0)}parse(o){return p.JSON.parse(o,void 0)}};function Fr(){}Fr.prototype.h=null;function ki(o){return o.h||(o.h=o.i())}function ks(){}var kt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gn(){ze.call(this,"d")}$(gn,ze);function Ur(){ze.call(this,"c")}$(Ur,ze);var Kt={},yt=null;function Qe(){return yt=yt||new Pe}Kt.La="serverreachability";function jr(o){ze.call(this,Kt.La,o)}$(jr,ze);function or(o){const f=Qe();it(f,new jr(f))}Kt.STAT_EVENT="statevent";function Di(o,f){ze.call(this,Kt.STAT_EVENT,o),this.stat=f}$(Di,ze);function Ze(o){const f=Qe();it(f,new Di(f,o))}Kt.Ma="timingevent";function mn(o,f){ze.call(this,Kt.Ma,o),this.size=f}$(mn,ze);function Dt(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){o()},f)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function Br(o,f,g,E,V,U){o.info(function(){if(o.g)if(U)for(var X="",ke=U.split("&"),Ne=0;Ne<ke.length;Ne++){var me=ke[Ne].split("=");if(1<me.length){var et=me[0];me=me[1];var tt=et.split("_");X=2<=tt.length&&tt[1]=="type"?X+(et+"="+me+"&"):X+(et+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+V+"]: "+f+`
`+g+`
`+X})}function Jo(o,f,g,E,V,U,X){o.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+V+"]: "+f+`
`+g+`
`+U+" "+X})}function Vn(o,f,g,E){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ds(o,g)+(E?" "+E:"")})}function Yo(o,f){o.info(function(){return"TIMEOUT: "+f})}yn.prototype.info=function(){};function Ds(o,f){if(!o.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var E=g[o];if(!(2>E.length)){var V=E[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<V.length;X++)V[X]=""}}}}return Gt(g)}catch{return f}}var qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hr;function $r(){}$($r,Fr),$r.prototype.g=function(){return new XMLHttpRequest},$r.prototype.i=function(){return{}},Hr=new $r;function _t(o,f,g,E){this.j=o,this.i=f,this.l=g,this.R=E||1,this.U=new jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xi}function xi(){this.i=null,this.g="",this.h=!1}var zr={},ar={};function On(o,f,g){o.L=1,o.v=Qt(Nt(f)),o.m=g,o.P=!0,Ni(o,null)}function Ni(o,f){o.F=Date.now(),cr(o),o.A=Nt(o.v);var g=o.A,E=o.R;Array.isArray(E)||(E=[String(E)]),Ui(g.i,"t",E),o.C=0,g=o.j.J,o.h=new xi,o.g=St(o.j,g?f:null,!o.m),0<o.O&&(o.M=new Ps(O(o.Y,o,o.g),o.O)),f=o.U,g=o.g,E=o.ca;var V="readystatechange";Array.isArray(V)||(V&&(Pt[0]=V.toString()),V=Pt);for(var U=0;U<V.length;U++){var X=Vr(g,V[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=o.H?S(o.H):{},o.m?(o.u||(o.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,f)):(o.u="GET",o.g.ea(o.A,o.u,null,f)),or(),Br(o.i,o.u,o.A,o.l,o.R,o.m)}_t.prototype.ca=function(o){o=o.target;const f=this.M;f&&bt(o)==3?f.j():this.Y(o)},_t.prototype.Y=function(o){try{if(o==this.g)e:{const tt=bt(this.g);var f=this.g.Ba();const Un=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||$s(this.g)))){this.J||tt!=4||f==7||(f==8||0>=Un?or(3):or(2)),Wr(this);var g=this.g.Z();this.X=g;t:if(Ns(this)){var E=$s(this.g);o="";var V=E.length,U=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),Mn(this);var X="";break t}this.h.i=new p.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,o+=this.h.i.decode(E[f],{stream:!(U&&f==V-1)});E.length=0,this.h.g+=o,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,Jo(this.i,this.u,this.A,this.l,this.R,tt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Ne=this.g;if((ke=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(ke)){var me=ke;break t}}me=null}if(g=me)Vn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lr(this,g);else{this.o=!1,this.s=3,Ze(12),_n(this),Mn(this);break e}}if(this.P){g=!0;let _e;for(;!this.J&&this.C<X.length;)if(_e=ur(this,X),_e==ar){tt==4&&(this.s=4,Ze(14),g=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==zr){this.s=4,Ze(15),Vn(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else Vn(this.i,this.l,_e,null),lr(this,_e);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||X.length!=0||this.h.h||(this.s=1,Ze(16),g=!1),this.o=this.o&&g,!g)Vn(this.i,this.l,X,"[Invalid Chunked Response]"),_n(this),Mn(this);else if(0<X.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),q(et),et.M=!0,Ze(11))}}else Vn(this.i,this.l,X,null),lr(this,X);tt==4&&_n(this),this.o&&!this.J&&(tt==4?ue(this.j,this):(this.o=!1,cr(this)))}else oa(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),_n(this),Mn(this)}}}catch{}finally{}};function Ns(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ur(o,f){var g=o.C,E=f.indexOf(`
`,g);return E==-1?ar:(g=Number(f.substring(g,E)),isNaN(g)?zr:(E+=1,E+g>f.length?ar:(f=f.slice(E,E+g),o.C=E+g,f)))}_t.prototype.cancel=function(){this.J=!0,_n(this)};function cr(o){o.S=Date.now()+o.I,Vi(o,o.I)}function Vi(o,f){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Dt(O(o.ba,o),f)}function Wr(o){o.B&&(p.clearTimeout(o.B),o.B=null)}_t.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Yo(this.i,this.A),this.L!=2&&(or(),Ze(17)),_n(this),this.s=2,Mn(this)):Vi(this,this.S-o)};function Mn(o){o.j.G==0||o.J||ue(o.j,o)}function _n(o){Wr(o);var f=o.M;f&&typeof f.ma=="function"&&f.ma(),o.M=null,Wt(o.U),o.g&&(f=o.g,o.g=null,f.abort(),f.ma())}function lr(o,f){try{var g=o.j;if(g.G!=0&&(g.g==o||hr(g.h,o))){if(!o.K&&hr(g.h,o)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var V=E;if(V[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)K(g),h(g);else break e;B(g),Ze(18)}}else g.za=V[1],0<g.za-g.T&&37500>V[2]&&g.F&&g.v==0&&!g.C&&(g.C=Dt(O(g.Za,g),6e3));if(1>=Mi(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else le(g,11)}else if((o.K||g.g==o)&&K(g),!ve(f))for(V=g.Da.g.parse(f),f=0;f<V.length;f++){let me=V[f];if(g.T=me[0],me=me[1],g.G==2)if(me[0]=="c"){g.K=me[1],g.ia=me[2];const et=me[3];et!=null&&(g.la=et,g.j.info("VER="+g.la));const tt=me[4];tt!=null&&(g.Aa=tt,g.j.info("SVER="+g.Aa));const Un=me[5];Un!=null&&typeof Un=="number"&&0<Un&&(E=1.5*Un,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const _e=o.g;if(_e){const In=_e.g?_e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(In){var U=E.h;U.g||In.indexOf("spdy")==-1&&In.indexOf("quic")==-1&&In.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Gr(U,U.h),U.h=null))}if(E.D){const vt=_e.g?_e.g.getResponseHeader("X-HTTP-Session-Id"):null;vt&&(E.ya=vt,xe(E.I,E.D,vt))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var X=o;if(E.qa=qe(E,E.J?E.ia:null,E.W),X.K){st(E.h,X);var ke=X,Ne=E.L;Ne&&(ke.I=Ne),ke.B&&(Wr(ke),cr(ke)),E.g=X}else k(E);0<g.i.length&&m(g)}else me[0]!="stop"&&me[0]!="close"||le(g,7);else g.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?le(g,7):u(g):me[0]!="noop"&&g.l&&g.l.ta(me),g.v=0)}}or(4)}catch{}}var Zo=class{constructor(o,f){this.g=o,this.map=f}};function Vs(o){this.l=o||10,p.PerformanceNavigationTiming?(o=p.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Mi(o){return o.h?1:o.g?o.g.size:0}function hr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function Gr(o,f){o.g?o.g.add(f):o.h=f}function st(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}Vs.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function vn(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.D);return f}return Q(o.i)}function Kr(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(_(o)){for(var f=[],g=o.length,E=0;E<g;E++)f.push(o[E]);return f}f=[],g=0;for(E in o)f[g++]=o[E];return f}function ea(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(_(o)||typeof o=="string"){var f=[];o=o.length;for(var g=0;g<o;g++)f.push(g);return f}f=[],g=0;for(const E in o)f[g++]=E;return f}}}function Os(o,f){if(o.forEach&&typeof o.forEach=="function")o.forEach(f,void 0);else if(_(o)||typeof o=="string")Array.prototype.forEach.call(o,f,void 0);else for(var g=ea(o),E=Kr(o),V=E.length,U=0;U<V;U++)f.call(void 0,E[U],g&&g[U],o)}var Qr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ms(o,f){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var E=o[g].indexOf("="),V=null;if(0<=E){var U=o[g].substring(0,E);V=o[g].substring(E+1)}else U=o[g];f(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function xt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof xt){this.h=o.h,Xr(this,o.j),this.o=o.o,this.g=o.g,Jr(this,o.s),this.l=o.l;var f=o.i,g=new En;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Et(this,g),this.m=o.m}else o&&(f=String(o).match(Qr))?(this.h=!1,Xr(this,f[1]||"",!0),this.o=fr(f[2]||""),this.g=fr(f[3]||"",!0),Jr(this,f[4]),this.l=fr(f[5]||"",!0),Et(this,f[6]||"",!0),this.m=fr(f[7]||"")):(this.h=!1,this.i=new En(null,this.h))}xt.prototype.toString=function(){var o=[],f=this.j;f&&o.push(dr(f,Xt,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(dr(f,Xt,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(dr(g,g.charAt(0)=="/"?ta:Li,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",dr(g,Ls)),o.join("")};function Nt(o){return new xt(o)}function Xr(o,f,g){o.j=g?fr(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function Jr(o,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);o.s=f}else o.s=null}function Et(o,f,g){f instanceof En?(o.i=f,na(o.i,o.h)):(g||(f=dr(f,pr)),o.i=new En(f,o.h))}function xe(o,f,g){o.i.set(f,g)}function Qt(o){return xe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function fr(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function dr(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,Tn),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Tn(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xt=/[#\/\?@]/g,Li=/[#\?:]/g,ta=/[#\?]/g,pr=/[#\?@]/g,Ls=/#/g;function En(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function Bt(o){o.g||(o.g=new Map,o.h=0,o.i&&Ms(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=En.prototype,n.add=function(o,f){Bt(this),this.i=null,o=Ln(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Fi(o,f){Bt(o),f=Ln(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Fs(o,f){return Bt(o),f=Ln(o,f),o.g.has(f)}n.forEach=function(o,f){Bt(this),this.g.forEach(function(g,E){g.forEach(function(V){o.call(f,V,E,this)},this)},this)},n.na=function(){Bt(this);const o=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const V=o[E];for(let U=0;U<V.length;U++)g.push(f[E])}return g},n.V=function(o){Bt(this);let f=[];if(typeof o=="string")Fs(this,o)&&(f=f.concat(this.g.get(Ln(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)f=f.concat(o[g])}return f},n.set=function(o,f){return Bt(this),this.i=null,o=Ln(this,o),Fs(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=this.V(o),0<o.length?String(o[0]):f):f};function Ui(o,f,g){Fi(o,f),0<g.length&&(o.i=null,o.g.set(Ln(o,f),Q(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var V=U;X[E]!==""&&(V+="="+encodeURIComponent(String(X[E]))),o.push(V)}}return this.i=o.join("&")};function Ln(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function na(o,f){f&&!o.j&&(Bt(o),o.i=null,o.g.forEach(function(g,E){var V=E.toLowerCase();E!=V&&(Fi(this,E),Ui(this,V,g))},o)),o.j=f}function ji(o,f){const g=new yn;if(p.Image){const E=new Image;E.onload=W(Jt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=W(Jt,g,"TestLoadImage: error",!1,f,E),E.onabort=W(Jt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=W(Jt,g,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=o}else f(!1)}function ra(o,f){const g=new yn,E=new AbortController,V=setTimeout(()=>{E.abort(),Jt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:E.signal}).then(U=>{clearTimeout(V),U.ok?Jt(g,"TestPingServer: ok",!0,f):Jt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),Jt(g,"TestPingServer: error",!1,f)})}function Jt(o,f,g,E,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),E(g)}catch{}}function ia(){this.g=new Lr}function sa(o,f,g){const E=g||"";try{Os(o,function(V,U){let X=V;T(V)&&(X=Gt(V)),f.push(E+U+"="+encodeURIComponent(X))})}catch(V){throw f.push(E+"type="+encodeURIComponent("_badmap")),V}}function Yr(o){this.l=o.Ub||null,this.j=o.eb||!1}$(Yr,Fr),Yr.prototype.g=function(){return new Zr(this.l,this.j)},Yr.prototype.i=(function(o){return function(){return o}})({});function Zr(o,f){Pe.call(this),this.D=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Zr,Pe),n=Zr.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=f,this.readyState=1,wn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(f.body=o),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Us(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Us(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?Fn(this):wn(this),this.readyState==3&&Us(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Fn(this))},n.Qa=function(o){this.g&&(this.response=o,Fn(this))},n.ga=function(){this.g&&Fn(this)};function Fn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,wn(o)}n.setRequestHeader=function(o,f){this.u.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function wn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Bi(o){let f="";return Ye(o,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function gr(o,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Bi(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):xe(o,f,g))}function Oe(o){Pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Oe,Pe);var js=/^https?$/i,qi=["POST","PUT"];n=Oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hr.g(),this.v=this.o?ki(this.o):ki(Hr),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(U){Bs(this,U);return}if(o=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var V in E)g.set(V,E[V]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),V=p.FormData&&o instanceof p.FormData,!(0<=Array.prototype.indexOf.call(qi,f,void 0))||E||V||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of g)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hi(this),this.u=!0,this.g.send(o),this.u=!1}catch(U){Bs(this,U)}};function Bs(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.m=5,qs(o),Yt(o)}function qs(o){o.A||(o.A=!0,it(o,"complete"),it(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,it(this,"complete"),it(this,"abort"),Yt(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yt(this,!0)),Oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hs(this):this.bb())},n.bb=function(){Hs(this)};function Hs(o){if(o.h&&typeof l<"u"&&(!o.v[1]||bt(o)!=4||o.Z()!=2)){if(o.u&&bt(o)==4)Rs(o.Ea,0,o);else if(it(o,"readystatechange"),bt(o)==4){o.h=!1;try{const X=o.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=X===0){var V=String(o.D).match(Qr)[1]||null;!V&&p.self&&p.self.location&&(V=p.self.location.protocol.slice(0,-1)),E=!js.test(V?V.toLowerCase():"")}g=E}if(g)it(o,"complete"),it(o,"success");else{o.m=6;try{var U=2<bt(o)?o.g.statusText:""}catch{U=""}o.l=U+" ["+o.Z()+"]",qs(o)}}finally{Yt(o)}}}}function Yt(o,f){if(o.g){Hi(o);const g=o.g,E=o.v[0]?()=>{}:null;o.g=null,o.v=null,f||it(o,"ready");try{g.onreadystatechange=E}catch{}}}function Hi(o){o.I&&(p.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),Xo(f)}};function $s(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function oa(o){const f={};o=(o.g&&2<=bt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<o.length;E++){if(ve(o[E]))continue;var g=N(o[E]);const V=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[V]||[];f[V]=U,U.push(g)}c(f,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mr(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function s(o){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mr("baseRetryDelayMs",5e3,o),this.cb=mr("retryDelaySeedMs",1e4,o),this.Wa=mr("forwardChannelMaxRetries",2,o),this.wa=mr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Vs(o&&o.concurrentRequestLimit),this.Da=new ia,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(o,f,g,E){Ze(0),this.W=o,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=qe(this,null,this.W),m(this)};function u(o){if(d(o),o.G==3){var f=o.U++,g=Nt(o.I);if(xe(g,"SID",o.K),xe(g,"RID",f),xe(g,"TYPE","terminate"),C(o,g),f=new _t(o,o.j,f),f.L=2,f.v=Qt(Nt(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=f.v,g=!0),g||(f.g=St(f.j,null),f.g.ea(f.v)),f.F=Date.now(),cr(f)}We(o)}function h(o){o.g&&(q(o),o.g.cancel(),o.g=null)}function d(o){h(o),o.u&&(p.clearTimeout(o.u),o.u=null),K(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&p.clearTimeout(o.s),o.s=null)}function m(o){if(!Oi(o.h)&&!o.s){o.s=!0;var f=o.Ga;gt||Si(),fn||(gt(),fn=!0),$t.add(f,o),o.B=0}}function y(o,f){return Mi(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=f.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Dt(O(o.Ga,o,f),Ee(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const V=new _t(this,this.j,o);let U=this.o;if(this.S&&(U?(U=S(U),D(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=I(this,V,f),g=Nt(this.I),xe(g,"RID",o),xe(g,"CVER",22),this.D&&xe(g,"X-HTTP-Session-Id",this.D),C(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(Bi(U)))+"&"+f:this.m&&gr(g,this.m,U)),Gr(this.h,V),this.Ua&&xe(g,"TYPE","init"),this.P?(xe(g,"$req",f),xe(g,"SID","null"),V.T=!0,On(V,g,null)):On(V,g,f),this.G=2}}else this.G==3&&(o?v(this,o):this.i.length==0||Oi(this.h)||v(this))};function v(o,f){var g;f?g=f.l:g=o.U++;const E=Nt(o.I);xe(E,"SID",o.K),xe(E,"RID",g),xe(E,"AID",o.T),C(o,E),o.m&&o.o&&gr(E,o.m,o.o),g=new _t(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),f&&(o.i=f.D.concat(o.i)),f=I(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Gr(o.h,g),On(g,E,f)}function C(o,f){o.H&&Ye(o.H,function(g,E){xe(f,E,g)}),o.l&&Os({},function(g,E){xe(f,E,g)})}function I(o,f,g){g=Math.min(o.i.length,g);var E=o.l?O(o.l.Na,o.l,o):null;e:{var V=o.i;let U=-1;for(;;){const X=["count="+g];U==-1?0<g?(U=V[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let ke=!0;for(let Ne=0;Ne<g;Ne++){let me=V[Ne].g;const et=V[Ne].map;if(me-=U,0>me)U=Math.max(0,V[Ne].g-100),ke=!1;else try{sa(et,X,"req"+me+"_")}catch{E&&E(et)}}if(ke){E=X.join("&");break e}}}return o=o.i.splice(0,g),f.D=o,E}function k(o){if(!o.g&&!o.u){o.Y=1;var f=o.Fa;gt||Si(),fn||(gt(),fn=!0),$t.add(f,o),o.v=0}}function B(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Dt(O(o.Fa,o),Ee(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,F(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Dt(O(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),h(this),F(this))};function q(o){o.A!=null&&(p.clearTimeout(o.A),o.A=null)}function F(o){o.g=new _t(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var f=Nt(o.qa);xe(f,"RID","rpc"),xe(f,"SID",o.K),xe(f,"AID",o.T),xe(f,"CI",o.F?"0":"1"),!o.F&&o.ja&&xe(f,"TO",o.ja),xe(f,"TYPE","xmlhttp"),C(o,f),o.m&&o.o&&gr(f,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=Qt(Nt(f)),g.m=null,g.P=!0,Ni(g,o)}n.Za=function(){this.C!=null&&(this.C=null,h(this),B(this),Ze(19))};function K(o){o.C!=null&&(p.clearTimeout(o.C),o.C=null)}function ue(o,f){var g=null;if(o.g==f){K(o),q(o),o.g=null;var E=2}else if(hr(o.h,f))g=f.D,st(o.h,f),E=1;else return;if(o.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var V=o.B;E=Qe(),it(E,new mn(E,g)),m(o)}else k(o);else if(V=f.s,V==3||V==0&&0<f.X||!(E==1&&y(o,f)||E==2&&B(o)))switch(g&&0<g.length&&(f=o.h,f.i=f.i.concat(g)),V){case 1:le(o,5);break;case 4:le(o,10);break;case 3:le(o,6);break;default:le(o,2)}}}function Ee(o,f){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*f}function le(o,f){if(o.j.info("Error code "+f),f==2){var g=O(o.fb,o),E=o.Xa;const V=!E;E=new xt(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Xr(E,"https"),Qt(E),V?ji(E.toString(),g):ra(E.toString(),g)}else Ze(2);o.G=0,o.l&&o.l.sa(f),We(o),d(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function We(o){if(o.G=0,o.ka=[],o.l){const f=vn(o.h);(f.length!=0||o.i.length!=0)&&(Y(o.ka,f),Y(o.ka,o.i),o.h.i.length=0,Q(o.i),o.i.length=0),o.l.ra()}}function qe(o,f,g){var E=g instanceof xt?Nt(g):new xt(g);if(E.g!="")f&&(E.g=f+"."+E.g),Jr(E,E.s);else{var V=p.location;E=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var U=new xt(null);E&&Xr(U,E),f&&(U.g=f),V&&Jr(U,V),g&&(U.l=g),E=U}return g=o.D,f=o.ya,g&&f&&xe(E,g,f),xe(E,"VER",o.la),C(o,E),E}function St(o,f,g){if(f&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Ca&&!o.pa?new Oe(new Yr({eb:g})):new Oe(o.pa),f.Ha(o.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ct(){}n=Ct.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ye(){}ye.prototype.g=function(o,f){return new He(o,f)};function He(o,f){Pe.call(this),this.g=new s(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(o?o["X-WebChannel-Client-Profile"]=f.va:o={"X-WebChannel-Client-Profile":f.va}),this.g.S=o,(o=f&&f.Sb)&&!ve(o)&&(this.g.m=o),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Vt(this)}$(He,Pe),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){u(this.g)},He.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=Gt(o),o=g);f.i.push(new Zo(f.Ya++,o)),f.G==3&&m(f)},He.prototype.N=function(){this.g.l=null,delete this.j,u(this.g),delete this.g,He.aa.N.call(this)};function Ae(o){gn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}$(Ae,gn);function Me(){Ur.call(this),this.status=1}$(Me,Ur);function Vt(o){this.g=o}$(Vt,Ct),Vt.prototype.ua=function(){it(this.g,"a")},Vt.prototype.ta=function(o){it(this.g,new Ae(o))},Vt.prototype.sa=function(o){it(this.g,new Me)},Vt.prototype.ra=function(){it(this.g,"b")},ye.prototype.createWebChannel=ye.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,ch=function(){return new ye},uh=function(){return Qe()},ah=Kt,Na={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,so=qr,xs.COMPLETE="complete",oh=xs,ks.EventType=kt,kt.OPEN="a",kt.CLOSE="b",kt.ERROR="c",kt.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,zi=ks,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,sh=Oe}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});const vc="@firebase/firestore",Tc="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Qa("@firebase/firestore");function ni(){return br.logLevel}function ne(n,...e){if(br.logLevel<=be.DEBUG){const t=e.map(au);br.debug(`Firestore (${wi}): ${n}`,...t)}}function kn(n,...e){if(br.logLevel<=be.ERROR){const t=e.map(au);br.error(`Firestore (${wi}): ${n}`,...t)}}function di(n,...e){if(br.logLevel<=be.WARN){const t=e.map(au);br.warn(`Firestore (${wi}): ${n}`,...t)}}function au(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,lh(n,r,t)}function lh(n,e,t){let r=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw kn(r),new Error(r)}function De(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||lh(e,i,r)}function ge(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends xn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ht.UNAUTHENTICATED)))}shutdown(){}}class Sm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Cm{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){De(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Jn,e.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Jn)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new hh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class Rm{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Pm{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Rm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ec{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class km{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){De(this.o===void 0,3512);const r=a=>{a.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,ne("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ec(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(De(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ec(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Dm(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Se(n,e){return n<e?-1:n>e?1:0}function Va(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return va(i)===va(a)?Se(i,a):va(i)?1:-1}return Se(n.length,e.length)}const xm=55296,Nm=57343;function va(n){const e=n.charCodeAt(0);return e>=xm&&e<=Nm}function pi(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="__name__";class en{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=en.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Se(e.length,t.length)}static compareSegments(e,t){const r=en.isNumericId(e),i=en.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?en.extractNumericId(e).compare(en.extractNumericId(t)):Va(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xn.fromString(e.substring(4,e.length-2))}}class je extends en{construct(e,t,r){return new je(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new je(t)}static emptyPath(){return new je([])}}const Vm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends en{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return Vm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wc}static keyField(){return new at([wc])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new se(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new se(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new se(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(l=!l,i++):p!=="."||l?(r+=p,i++):(a(),i++)}if(a(),l)throw new se(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(je.fromString(e))}static fromName(e){return new ae(je.fromString(e).popFirst(5))}static empty(){return new ae(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n,e,t){if(!t)throw new se(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mm(n,e,t,r){if(e===!0&&r===!0)throw new se(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ic(n){if(!ae.isDocumentKey(n))throw new se(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function cu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce(12329,{type:typeof n})}function is(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cu(n);throw new se(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function _s(n,e){if(!fh(n))throw new se(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new se(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=-62135596800,bc=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*bc);return new Fe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ac)throw new se(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bc}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_s(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ac;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:Ke("string",Fe._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Fe(0,0))}static max(){return new pe(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=-1;function Lm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Fe(t+1,0):new Fe(t,r));return new Yn(i,ae.empty(),e)}function Fm(n){return new Yn(n.readTime,n.key,ss)}class Yn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yn(pe.min(),ae.empty(),ss)}static max(){return new Yn(pe.max(),ae.empty(),ss)}}function Um(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:Se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==jm)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):z.reject(t)}static resolve(e){return new z(((t,r)=>{t(e)}))}static reject(e){return new z(((t,r)=>{r(e)}))}static waitFor(e){return new z(((t,r)=>{let i=0,a=0,l=!1;e.forEach((p=>{++i,p.next((()=>{++a,l&&a===i&&t()}),(_=>r(_)))})),l=!0,a===i&&t()}))}static or(e){let t=z.resolve(!1);for(const r of e)t=t.next((i=>i?z.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new z(((r,i)=>{const a=e.length,l=new Array(a);let p=0;for(let _=0;_<a;_++){const T=_;t(e[T]).next((R=>{l[T]=R,++p,p===a&&r(l)}),(R=>i(R)))}}))}static doWhile(e,t){return new z(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function qm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ai(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=-1;function Mo(n){return n==null}function To(n){return n===0&&1/n==-1/0}function Hm(n){return typeof n=="number"&&Number.isInteger(n)&&!To(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="";function $m(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Sc(e)),e=zm(n.get(t),e);return Sc(e)}function zm(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case dh:t+="";break;default:t+=a}}return t}function Sc(n){return n+dh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ph(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new Be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xs(this.root,e,this.comparator,!0)}}class Xs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=a??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new ot(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rc(this.data.getIterator())}getIteratorFrom(e){return new Rc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class Rc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ht([])}unionWith(e){let t=new Je(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new gh("Invalid base64 string: "+a):a}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Wm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(n){if(De(!!n,39018),typeof n=="string"){let e=0;const t=Wm.exec(n);if(De(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(n.seconds),nanos:$e(n.nanos)}}function $e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function er(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="server_timestamp",yh="__type__",_h="__previous_value__",vh="__local_write_time__";function hu(n){return(n?.mapValue?.fields||{})[yh]?.stringValue===mh}function Lo(n){const e=n.mapValue.fields[_h];return hu(e)?Lo(e):e}function os(n){const e=Zn(n.mapValue.fields[vh].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t,r,i,a,l,p,_,T,R){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=T,this.isUsingEmulator=R}}const Eo="(default)";class as{constructor(e,t){this.projectId=e,this.database=t||Eo}static empty(){return new as("","")}get isDefaultDatabase(){return this.database===Eo}isEqual(e){return e instanceof as&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="__type__",Km="__max__",Js={mapValue:{}},Eh="__vector__",wo="value";function tr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hu(n)?4:Xm(n)?9007199254740991:Qm(n)?10:11:ce(28295,{value:n})}function ln(n,e){if(n===e)return!0;const t=tr(n);if(t!==tr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return os(n).isEqual(os(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=Zn(i.timestampValue),p=Zn(a.timestampValue);return l.seconds===p.seconds&&l.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return er(i.bytesValue).isEqual(er(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return $e(i.geoPointValue.latitude)===$e(a.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return $e(i.integerValue)===$e(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=$e(i.doubleValue),p=$e(a.doubleValue);return l===p?To(l)===To(p):isNaN(l)&&isNaN(p)}return!1})(n,e);case 9:return pi(n.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return(function(i,a){const l=i.mapValue.fields||{},p=a.mapValue.fields||{};if(Cc(l)!==Cc(p))return!1;for(const _ in l)if(l.hasOwnProperty(_)&&(p[_]===void 0||!ln(l[_],p[_])))return!1;return!0})(n,e);default:return ce(52216,{left:n})}}function us(n,e){return(n.values||[]).find((t=>ln(t,e)))!==void 0}function gi(n,e){if(n===e)return 0;const t=tr(n),r=tr(e);if(t!==r)return Se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(n.booleanValue,e.booleanValue);case 2:return(function(a,l){const p=$e(a.integerValue||a.doubleValue),_=$e(l.integerValue||l.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return Pc(n.timestampValue,e.timestampValue);case 4:return Pc(os(n),os(e));case 5:return Va(n.stringValue,e.stringValue);case 6:return(function(a,l){const p=er(a),_=er(l);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,l){const p=a.split("/"),_=l.split("/");for(let T=0;T<p.length&&T<_.length;T++){const R=Se(p[T],_[T]);if(R!==0)return R}return Se(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,l){const p=Se($e(a.latitude),$e(l.latitude));return p!==0?p:Se($e(a.longitude),$e(l.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return kc(n.arrayValue,e.arrayValue);case 10:return(function(a,l){const p=a.fields||{},_=l.fields||{},T=p[wo]?.arrayValue,R=_[wo]?.arrayValue,x=Se(T?.values?.length||0,R?.values?.length||0);return x!==0?x:kc(T,R)})(n.mapValue,e.mapValue);case 11:return(function(a,l){if(a===Js.mapValue&&l===Js.mapValue)return 0;if(a===Js.mapValue)return 1;if(l===Js.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),T=l.fields||{},R=Object.keys(T);_.sort(),R.sort();for(let x=0;x<_.length&&x<R.length;++x){const O=Va(_[x],R[x]);if(O!==0)return O;const W=gi(p[_[x]],T[R[x]]);if(W!==0)return W}return Se(_.length,R.length)})(n.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function Pc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Se(n,e);const t=Zn(n),r=Zn(e),i=Se(t.seconds,r.seconds);return i!==0?i:Se(t.nanos,r.nanos)}function kc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=gi(t[i],r[i]);if(a)return a}return Se(t.length,r.length)}function mi(n){return Oa(n)}function Oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Zn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return er(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Oa(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${Oa(t.fields[l])}`;return i+"}"})(n.mapValue):ce(61005,{value:n})}function oo(n){switch(tr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lo(n);return e?16+oo(e):16;case 5:return 2*n.stringValue.length;case 6:return er(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+oo(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Cr(r.fields,((a,l)=>{i+=a.length+oo(l)})),i})(n.mapValue);default:throw ce(13486,{value:n})}}function Ma(n){return!!n&&"integerValue"in n}function fu(n){return!!n&&"arrayValue"in n}function Dc(n){return!!n&&"nullValue"in n}function xc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ao(n){return!!n&&"mapValue"in n}function Qm(n){return(n?.mapValue?.fields||{})[Th]?.stringValue===Eh}function Ji(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Cr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ji(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ji(n.arrayValue.values[t]);return e}return{...n}}function Xm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Km}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ao(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(t)}setAll(e){let t=at.emptyPath(),r={},i=[];e.forEach(((l,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}l?r[p.lastSegment()]=Ji(l):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());ao(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ao(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Cr(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Mt(Ji(this.value))}}function wh(n){const e=[];return Cr(n.fields,((t,r)=>{const i=new at([t]);if(ao(r)){const a=wh(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)})),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,r,i,a,l,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=l,this.documentState=p}static newInvalidDocument(e){return new ft(e,0,pe.min(),pe.min(),pe.min(),Mt.empty(),0)}static newFoundDocument(e,t,r,i){return new ft(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new ft(e,2,t,pe.min(),pe.min(),Mt.empty(),0)}static newUnknownDocument(e,t){return new ft(e,3,t,pe.min(),pe.min(),Mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.position=e,this.inclusive=t}}function Nc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],l=n.position[i];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(l.referenceValue),t.key):r=gi(l,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ln(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{}class Xe extends Ih{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zm(e,t,r):t==="array-contains"?new ny(e,r):t==="in"?new ry(e,r):t==="not-in"?new iy(e,r):t==="array-contains-any"?new sy(e,r):new Xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ey(e,r):new ty(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(gi(t,this.value)):t!==null&&tr(this.value)===tr(t)&&this.matchesComparison(gi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Ih{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new hn(e,t)}matches(e){return Ah(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ah(n){return n.op==="and"}function bh(n){return Ym(n)&&Ah(n)}function Ym(n){for(const e of n.filters)if(e instanceof hn)return!1;return!0}function La(n){if(n instanceof Xe)return n.field.canonicalString()+n.op.toString()+mi(n.value);if(bh(n))return n.filters.map((e=>La(e))).join(",");{const e=n.filters.map((t=>La(t))).join(",");return`${n.op}(${e})`}}function Sh(n,e){return n instanceof Xe?(function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)})(n,e):n instanceof hn?(function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,l,p)=>a&&Sh(l,i.filters[p])),!0):!1})(n,e):void ce(19439)}function Ch(n){return n instanceof Xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${mi(t.value)}`})(n):n instanceof hn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ch).join(" ,")+"}"})(n):"Filter"}class Zm extends Xe{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class ey extends Xe{constructor(e,t){super(e,"in",t),this.keys=Rh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ty extends Xe{constructor(e,t){super(e,"not-in",t),this.keys=Rh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Rh(n,e){return(e.arrayValue?.values||[]).map((t=>ae.fromName(t.referenceValue)))}class ny extends Xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fu(t)&&us(t.arrayValue,this.value)}}class ry extends Xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&us(this.value.arrayValue,t)}}class iy extends Xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!us(this.value.arrayValue,t)}}class sy extends Xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>us(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t=null,r=[],i=[],a=null,l=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=p,this.Te=null}}function Oc(n,e=null,t=[],r=[],i=null,a=null,l=null){return new oy(n,e,t,r,i,a,l)}function du(n){const e=ge(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>La(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Mo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>mi(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>mi(r))).join(",")),e.Te=t}return e.Te}function pu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vc(n.startAt,e.startAt)&&Vc(n.endAt,e.endAt)}function Fa(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t=null,r=[],i=[],a=null,l="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ay(n,e,t,r,i,a,l,p){return new Fo(n,e,t,r,i,a,l,p)}function gu(n){return new Fo(n)}function Mc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uy(n){return n.collectionGroup!==null}function Yi(n){const e=ge(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let p=new Je(at.comparator);return l.filters.forEach((_=>{_.getFlattenedFilters().forEach((T=>{T.isInequality()&&(p=p.add(T.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Ao(a,r))})),t.has(at.keyField().canonicalString())||e.Ie.push(new Ao(at.keyField(),r))}return e.Ie}function sn(n){const e=ge(n);return e.Ee||(e.Ee=cy(e,Yi(n))),e.Ee}function cy(n,e){if(n.limitType==="F")return Oc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Ao(i.field,a)}));const t=n.endAt?new Io(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Io(n.startAt.position,n.startAt.inclusive):null;return Oc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ua(n,e,t){return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Uo(n,e){return pu(sn(n),sn(e))&&n.limitType===e.limitType}function Ph(n){return`${du(sn(n))}|lt:${n.limitType}`}function ri(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Ch(i))).join(", ")}]`),Mo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>mi(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>mi(i))).join(",")),`Target(${r})`})(sn(n))}; limitType=${n.limitType})`}function jo(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of Yi(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(l,p,_){const T=Nc(l,p,_);return l.inclusive?T<=0:T<0})(r.startAt,Yi(r),i)||r.endAt&&!(function(l,p,_){const T=Nc(l,p,_);return l.inclusive?T>=0:T>0})(r.endAt,Yi(r),i))})(n,e)}function ly(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kh(n){return(e,t)=>{let r=!1;for(const i of Yi(n)){const a=hy(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function hy(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,l,p){const _=l.data.field(a),T=p.data.field(a);return _!==null&&T!==null?gi(_,T):ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return ph(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Be(ae.comparator);function Dn(){return fy}const Dh=new Be(ae.comparator);function Wi(...n){let e=Dh;for(const t of n)e=e.insert(t.key,t);return e}function xh(n){let e=Dh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function vr(){return Zi()}function Nh(){return Zi()}function Zi(){return new Rr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const dy=new Be(ae.comparator),py=new Je(ae.comparator);function Ce(...n){let e=py;for(const t of n)e=e.add(t);return e}const gy=new Je(Se);function my(){return gy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function Vh(n){return{integerValue:""+n}}function yy(n,e){return Hm(e)?Vh(e):mu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this._=void 0}}function _y(n,e,t){return n instanceof cs?(function(i,a){const l={fields:{[yh]:{stringValue:mh},[vh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&hu(a)&&(a=Lo(a)),a&&(l.fields[_h]=a),{mapValue:l}})(t,e):n instanceof ls?Mh(n,e):n instanceof hs?Lh(n,e):(function(i,a){const l=Oh(i,a),p=Lc(l)+Lc(i.Ae);return Ma(l)&&Ma(i.Ae)?Vh(p):mu(i.serializer,p)})(n,e)}function vy(n,e,t){return n instanceof ls?Mh(n,e):n instanceof hs?Lh(n,e):t}function Oh(n,e){return n instanceof bo?(function(r){return Ma(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class cs extends Bo{}class ls extends Bo{constructor(e){super(),this.elements=e}}function Mh(n,e){const t=Fh(e);for(const r of n.elements)t.some((i=>ln(i,r)))||t.push(r);return{arrayValue:{values:t}}}class hs extends Bo{constructor(e){super(),this.elements=e}}function Lh(n,e){let t=Fh(e);for(const r of n.elements)t=t.filter((i=>!ln(i,r)));return{arrayValue:{values:t}}}class bo extends Bo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Lc(n){return $e(n.integerValue||n.doubleValue)}function Fh(n){return fu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.field=e,this.transform=t}}function Ey(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof ls&&i instanceof ls||r instanceof hs&&i instanceof hs?pi(r.elements,i.elements,ln):r instanceof bo&&i instanceof bo?ln(r.Ae,i.Ae):r instanceof cs&&i instanceof cs})(n.transform,e.transform)}class wy{constructor(e,t){this.version=e,this.transformResults=t}}class Sn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qo{}function Uh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bh(n.key,Sn.none()):new vs(n.key,n.data,Sn.none());{const t=n.data,r=Mt.empty();let i=new Je(at.comparator);for(let a of e.fields)if(!i.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new Pr(n.key,r,new Ht(i.toArray()),Sn.none())}}function Iy(n,e,t){n instanceof vs?(function(i,a,l){const p=i.value.clone(),_=Uc(i.fieldTransforms,a,l.transformResults);p.setAll(_),a.convertToFoundDocument(l.version,p).setHasCommittedMutations()})(n,e,t):n instanceof Pr?(function(i,a,l){if(!uo(i.precondition,a))return void a.convertToUnknownDocument(l.version);const p=Uc(i.fieldTransforms,a,l.transformResults),_=a.data;_.setAll(jh(i)),_.setAll(p),a.convertToFoundDocument(l.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()})(0,e,t)}function es(n,e,t,r){return n instanceof vs?(function(a,l,p,_){if(!uo(a.precondition,l))return p;const T=a.value.clone(),R=jc(a.fieldTransforms,_,l);return T.setAll(R),l.convertToFoundDocument(l.version,T).setHasLocalMutations(),null})(n,e,t,r):n instanceof Pr?(function(a,l,p,_){if(!uo(a.precondition,l))return p;const T=jc(a.fieldTransforms,_,l),R=l.data;return R.setAll(jh(a)),R.setAll(T),l.convertToFoundDocument(l.version,R).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((x=>x.field)))})(n,e,t,r):(function(a,l,p){return uo(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):p})(n,e,t)}function Ay(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=Oh(r.transform,i||null);a!=null&&(t===null&&(t=Mt.empty()),t.set(r.field,a))}return t||null}function Fc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pi(r,i,((a,l)=>Ey(a,l)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vs extends qo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends qo{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function jh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Uc(n,e,t){const r=new Map;De(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],l=a.transform,p=e.data.field(a.field);r.set(a.field,vy(l,p,t[i]))}return r}function jc(n,e,t){const r=new Map;for(const i of n){const a=i.transform,l=t.data.field(i.field);r.set(i.field,_y(a,l,e))}return r}class Bh extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class by extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&Iy(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nh();return this.mutations.forEach((i=>{const a=e.get(i.key),l=a.overlayedDocument;let p=this.applyToLocalView(l,a.mutatedFields);p=t.has(i.key)?null:p;const _=Uh(l,p);_!==null&&r.set(i.key,_),l.isValidDocument()||l.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,((t,r)=>Fc(t,r)))&&pi(this.baseMutations,e.baseMutations,((t,r)=>Fc(t,r)))}}class yu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return dy})();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new yu(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,Re;function Py(n){switch(n){case G.OK:return ce(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ce(15467,{code:n})}}function qh(n){if(n===void 0)return kn("GRPC error has no .code"),G.UNKNOWN;switch(n){case Ge.OK:return G.OK;case Ge.CANCELLED:return G.CANCELLED;case Ge.UNKNOWN:return G.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return G.INTERNAL;case Ge.UNAVAILABLE:return G.UNAVAILABLE;case Ge.UNAUTHENTICATED:return G.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case Ge.NOT_FOUND:return G.NOT_FOUND;case Ge.ALREADY_EXISTS:return G.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return G.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case Ge.ABORTED:return G.ABORTED;case Ge.OUT_OF_RANGE:return G.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return G.UNIMPLEMENTED;case Ge.DATA_LOSS:return G.DATA_LOSS;default:return ce(39323,{code:n})}}(Re=Ge||(Ge={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Xn([4294967295,4294967295],0);function Bc(n){const e=ky().encode(n),t=new ih;return t.update(e),new Uint8Array(t.digest())}function qc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Xn([t,r],0),new Xn([i,a],0)]}class _u{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gi(`Invalid padding: ${t}`);if(r<0)throw new Gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Xn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Xn.fromNumber(r)));return i.compare(Dy)===1&&(i=new Xn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Bc(e),[r,i]=qc(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);if(!this.we(l))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new _u(a,i,t);return r.forEach((p=>l.insert(p))),l}insert(e){if(this.ge===0)return;const t=Bc(e),[r,i]=qc(t);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);this.Se(l)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ts.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ho(pe.min(),i,new Be(Se),Dn(),Ce())}}class Ts{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ts(r,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Hh{constructor(e,t){this.targetId=e,this.Ce=t}}class $h{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Hc{constructor(){this.ve=0,this.Fe=$c(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),r=Ce();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ce(38017,{changeType:a})}})),new Ts(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=$c()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class xy{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dn(),this.Je=Ys(),this.He=Ys(),this.Ye=new Be(Se)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(Fa(a))if(r===0){const l=new ae(a.path);this.et(t,l,ft.newNoDocument(l,pe.min()))}else De(r===1,20013,{expectedCount:r});else{const l=this._t(t);if(l!==r){const p=this.ut(e),_=p?this.ct(p,e,l):1;if(_!==0){this.it(t);const T=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,T)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let l,p;try{l=er(r).toUint8Array()}catch(_){if(_ instanceof gh)return di("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new _u(l,i,a)}catch(_){return di(_ instanceof Gi?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const l=this.Ge.ht(),p=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,l)=>{const p=this.ot(l);if(p){if(a.current&&Fa(p.target)){const _=new ae(p.target.path);this.It(_).has(l)||this.Et(l,_)||this.et(l,_,ft.newNoDocument(_,e))}a.Be&&(t.set(l,a.ke()),a.qe())}}));let r=Ce();this.He.forEach(((a,l)=>{let p=!0;l.forEachWhile((_=>{const T=this.ot(_);return!T||T.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,l)=>l.setReadTime(e)));const i=new Ho(e,t,this.Ye,this.je,r);return this.je=Dn(),this.Je=Ys(),this.He=Ys(),this.Ye=new Be(Se),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Hc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Je(Se),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Je(Se),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ys(){return new Be(ae.comparator)}function $c(){return new Be(ae.comparator)}const Ny={asc:"ASCENDING",desc:"DESCENDING"},Vy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Oy={and:"AND",or:"OR"};class My{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ja(n,e){return n.useProto3Json||Mo(e)?e:{value:e}}function So(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ly(n,e){return So(n,e.toTimestamp())}function on(n){return De(!!n,49232),pe.fromTimestamp((function(t){const r=Zn(t);return new Fe(r.seconds,r.nanos)})(n))}function vu(n,e){return Ba(n,e).canonicalString()}function Ba(n,e){const t=(function(i){return new je(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Wh(n){const e=je.fromString(n);return De(Jh(e),10190,{key:e.toString()}),e}function qa(n,e){return vu(n.databaseId,e.path)}function Ta(n,e){const t=Wh(e);if(t.get(1)!==n.databaseId.projectId)throw new se(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(Kh(t))}function Gh(n,e){return vu(n.databaseId,e)}function Fy(n){const e=Wh(n);return e.length===4?je.emptyPath():Kh(e)}function Ha(n){return new je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Kh(n){return De(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zc(n,e,t){return{name:qa(n,e),fields:t.value.mapValue.fields}}function Uy(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(T){return T==="NO_CHANGE"?0:T==="ADD"?1:T==="REMOVE"?2:T==="CURRENT"?3:T==="RESET"?4:ce(39313,{state:T})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(T,R){return T.useProto3Json?(De(R===void 0||typeof R=="string",58123),ut.fromBase64String(R||"")):(De(R===void 0||R instanceof Buffer||R instanceof Uint8Array,16193),ut.fromUint8Array(R||new Uint8Array))})(n,e.targetChange.resumeToken),l=e.targetChange.cause,p=l&&(function(T){const R=T.code===void 0?G.UNKNOWN:qh(T.code);return new se(R,T.message||"")})(l);t=new $h(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ta(n,r.document.name),a=on(r.document.updateTime),l=r.document.createTime?on(r.document.createTime):pe.min(),p=new Mt({mapValue:{fields:r.document.fields}}),_=ft.newFoundDocument(i,a,l,p),T=r.targetIds||[],R=r.removedTargetIds||[];t=new co(T,R,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ta(n,r.document),a=r.readTime?on(r.readTime):pe.min(),l=ft.newNoDocument(i,a),p=r.removedTargetIds||[];t=new co([],p,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ta(n,r.document),a=r.removedTargetIds||[];t=new co([],a,i,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new Ry(i,a),p=r.targetId;t=new Hh(p,l)}}return t}function jy(n,e){let t;if(e instanceof vs)t={update:zc(n,e.key,e.value)};else if(e instanceof Bh)t={delete:qa(n,e.key)};else if(e instanceof Pr)t={update:zc(n,e.key,e.data),updateMask:Qy(e.fieldMask)};else{if(!(e instanceof by))return ce(16599,{Vt:e.type});t={verify:qa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,l){const p=l.transform;if(p instanceof cs)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ls)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof hs)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof bo)return{fieldPath:l.field.canonicalString(),increment:p.Ae};throw ce(20930,{transform:l.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:Ly(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ce(27497)})(n,e.precondition)),t}function By(n,e){return n&&n.length>0?(De(e!==void 0,14353),n.map((t=>(function(i,a){let l=i.updateTime?on(i.updateTime):on(a);return l.isEqual(pe.min())&&(l=on(a)),new wy(l,i.transformResults||[])})(t,e)))):[]}function qy(n,e){return{documents:[Gh(n,e.path)]}}function Hy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Gh(n,i);const a=(function(T){if(T.length!==0)return Xh(hn.create(T,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const l=(function(T){if(T.length!==0)return T.map((R=>(function(O){return{field:ii(O.field),direction:Wy(O.dir)}})(R)))})(e.orderBy);l&&(t.structuredQuery.orderBy=l);const p=ja(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(T){return{before:T.inclusive,values:T.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(T){return{before:!T.inclusive,values:T.position}})(e.endAt)),{ft:t,parent:i}}function $y(n){let e=Fy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){De(r===1,65062);const R=t.from[0];R.allDescendants?i=R.collectionId:e=e.child(R.collectionId)}let a=[];t.where&&(a=(function(x){const O=Qh(x);return O instanceof hn&&bh(O)?O.getFilters():[O]})(t.where));let l=[];t.orderBy&&(l=(function(x){return x.map((O=>(function($){return new Ao(si($.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(O)))})(t.orderBy));let p=null;t.limit&&(p=(function(x){let O;return O=typeof x=="object"?x.value:x,Mo(O)?null:O})(t.limit));let _=null;t.startAt&&(_=(function(x){const O=!!x.before,W=x.values||[];return new Io(W,O)})(t.startAt));let T=null;return t.endAt&&(T=(function(x){const O=!x.before,W=x.values||[];return new Io(W,O)})(t.endAt)),ay(e,i,l,a,p,"F",_,T)}function zy(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=si(t.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=si(t.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=si(t.unaryFilter.field);return Xe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=si(t.unaryFilter.field);return Xe.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Xe.create(si(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return hn.create(t.compositeFilter.filters.map((r=>Qh(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(t.compositeFilter.op))})(n):ce(30097,{filter:n})}function Wy(n){return Ny[n]}function Gy(n){return Vy[n]}function Ky(n){return Oy[n]}function ii(n){return{fieldPath:n.canonicalString()}}function si(n){return at.fromServerFormat(n.fieldPath)}function Xh(n){return n instanceof Xe?(function(t){if(t.op==="=="){if(xc(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NAN"}};if(Dc(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xc(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NAN"}};if(Dc(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(t.field),op:Gy(t.op),value:t.value}}})(n):n instanceof hn?(function(t){const r=t.getFilters().map((i=>Xh(i)));return r.length===1?r[0]:{compositeFilter:{op:Ky(t.op),filters:r}}})(n):ce(54877,{filter:n})}function Qy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Jh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,r,i,a=pe.min(),l=pe.min(),p=ut.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.yt=e}}function Jy(n){const e=$y({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ua(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Cn=new Zy}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(Yn.min())}updateCollectionGroup(e,t,r){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class Zy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Je(je.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yh=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Yh,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yi(0)}static cr(){return new yi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="LruGarbageCollector",e_=1048576;function Kc([n,e],[t,r]){const i=Se(n,t);return i===0?Se(e,r):i}class t_{constructor(e){this.Ir=e,this.buffer=new Je(Kc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Kc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class n_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(Gc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ai(t)?ne(Gc,"Ignoring IndexedDB error during garbage collection: ",t):await Ii(t)}await this.Vr(3e5)}))}}class r_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Oo.ce);const r=new t_(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Wc)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,l,p,_,T;const R=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),i=this.params.maximumSequenceNumbersToCollect):i=x,l=Date.now(),this.nthSequenceNumber(e,i)))).next((x=>(r=x,p=Date.now(),this.removeTargets(e,r,t)))).next((x=>(a=x,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((x=>(T=Date.now(),ni()<=be.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-R}ms
	Determined least recently used ${i} in `+(p-l)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${x} documents in `+(T-_)+`ms
Total Duration: ${T-R}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:x}))))}}function i_(n,e){return new r_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.changes=new Rr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&es(r.mutation,i,Ht.empty(),Fe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ce()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ce()){const i=vr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let l=Wi();return a.forEach(((p,_)=>{l=l.insert(p,_.overlayedDocument)})),l}))))}getOverlayedDocuments(e,t){const r=vr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ce())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((l,p)=>{t.set(l,p)}))}))}computeViews(e,t,r,i){let a=Dn();const l=Zi(),p=(function(){return Zi()})();return t.forEach(((_,T)=>{const R=r.get(T.key);i.has(T.key)&&(R===void 0||R.mutation instanceof Pr)?a=a.insert(T.key,T):R!==void 0?(l.set(T.key,R.mutation.getFieldMask()),es(R.mutation,T,R.mutation.getFieldMask(),Fe.now())):l.set(T.key,Ht.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((T,R)=>l.set(T,R))),t.forEach(((T,R)=>p.set(T,new o_(R,l.get(T)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=Zi();let i=new Be(((l,p)=>l-p)),a=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((l=>{for(const p of l)p.keys().forEach((_=>{const T=t.get(_);if(T===null)return;let R=r.get(_)||Ht.empty();R=p.applyToLocalView(T,R),r.set(_,R);const x=(i.get(p.batchId)||Ce()).add(_);i=i.insert(p.batchId,x)}))})).next((()=>{const l=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),T=_.key,R=_.value,x=Nh();R.forEach((O=>{if(!a.has(O)){const W=Uh(t.get(O),r.get(O));W!==null&&x.set(O,W),a=a.add(O)}})),l.push(this.documentOverlayCache.saveOverlays(e,T,x))}return z.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(l){return ae.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):uy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):z.resolve(vr());let p=ss,_=a;return l.next((T=>z.forEach(T,((R,x)=>(p<x.largestBatchId&&(p=x.largestBatchId),a.get(R)?z.resolve():this.remoteDocumentCache.getEntry(e,R).next((O=>{_=_.insert(R,O)}))))).next((()=>this.populateOverlays(e,T,a))).next((()=>this.computeViews(e,_,T,Ce()))).next((R=>({batchId:p,changes:xh(R)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let i=Wi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let l=Wi();return this.indexManager.getCollectionParents(e,a).next((p=>z.forEach(p,(_=>{const T=(function(x,O){return new Fo(O,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,T,r,i).next((R=>{R.forEach(((x,O)=>{l=l.insert(x,O)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((l=>{a.forEach(((_,T)=>{const R=T.getKey();l.get(R)===null&&(l=l.insert(R,ft.newInvalidDocument(R)))}));let p=Wi();return l.forEach(((_,T)=>{const R=a.get(_);R!==void 0&&es(R.mutation,T,Ht.empty(),Fe.now()),jo(t,T)&&(p=p.insert(_,T))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}})(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:Jy(i.bundledQuery),readTime:on(i.readTime)}})(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.overlays=new Be(ae.comparator),this.qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vr();return z.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),z.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),z.resolve()}getOverlaysForCollection(e,t,r){const i=vr(),a=t.length+1,l=new ae(t.child("")),p=this.overlays.getIteratorFrom(l);for(;p.hasNext();){const _=p.getNext().value,T=_.getKey();if(!t.isPrefixOf(T.path))break;T.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return z.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new Be(((T,R)=>T-R));const l=this.overlays.getIterator();for(;l.hasNext();){const T=l.getNext().value;if(T.getKey().getCollectionGroup()===t&&T.largestBatchId>r){let R=a.get(T.largestBatchId);R===null&&(R=vr(),a=a.insert(T.largestBatchId,R)),R.set(T.getKey(),T)}}const p=vr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((T,R)=>p.set(T,R))),!(p.size()>=i)););return z.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Cy(t,r));let a=this.qr.get(t);a===void 0&&(a=Ce(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Qr=new Je(nt.$r),this.Ur=new Je(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new nt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new nt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ae(new je([])),r=new nt(t,e),i=new nt(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(l=>{this.Gr(l),a.push(l.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ae(new je([])),r=new nt(t,e),i=new nt(t,e+1);let a=Ce();return this.Ur.forEachInRange([r,i],(l=>{a=a.add(l.key)})),a}containsKey(e){const t=new nt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ae.comparator(e.key,t.key)||Se(e.Yr,t.Yr)}static Kr(e,t){return Se(e.Yr,t.Yr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Je(nt.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Sy(a,t,r,i);this.mutationQueue.push(l);for(const p of i)this.Zr=this.Zr.add(new nt(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return z.resolve(l)}lookupMutationBatch(e,t){return z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?lu:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new nt(t,0),i=new nt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(l=>{const p=this.Xr(l.Yr);a.push(p)})),z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Je(Se);return t.forEach((i=>{const a=new nt(i,0),l=new nt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,l],(p=>{r=r.add(p.Yr)}))})),z.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const l=new nt(new ae(a),0);let p=new Je(Se);return this.Zr.forEachWhile((_=>{const T=_.key.path;return!!r.isPrefixOf(T)&&(T.length===i&&(p=p.add(_.Yr)),!0)}),l),z.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){De(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return z.forEach(t.mutations,(i=>{const a=new nt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new nt(t,0),i=this.Zr.firstAfterOrEqual(r);return z.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.ri=e,this.docs=(function(){return new Be(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,l=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return z.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(t))}getEntries(e,t){let r=Dn();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():ft.newInvalidDocument(i))})),z.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Dn();const l=t.path,p=new ae(l.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:T,value:{document:R}}=_.getNext();if(!l.isPrefixOf(T.path))break;T.path.length>l.length+1||Um(Fm(R),r)<=0||(i.has(R.key)||jo(t,R))&&(a=a.insert(R.key,R.mutableCopy()))}return z.resolve(a)}getAllFromCollectionGroup(e,t,r,i){ce(9500)}ii(e,t){return z.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new d_(this)}getSize(e){return z.resolve(this.size)}}class d_ extends s_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.persistence=e,this.si=new Rr((t=>du(t)),pu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Tu,this.targetCount=0,this.ai=yi.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new yi(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Pr(t),z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((l,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(l),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),z.waitFor(a).next((()=>i))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return z.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),z.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((l=>{a.push(i.markPotentiallyOrphaned(e,l))})),z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return z.resolve(r)}containsKey(e,t){return z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t){this.ui={},this.overlays={},this.ci=new Oo(0),this.li=!1,this.li=!0,this.hi=new l_,this.referenceDelegate=e(this),this.Pi=new p_(this),this.indexManager=new Yy,this.remoteDocumentCache=(function(i){return new f_(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Xy(t),this.Ii=new u_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new c_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new h_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){ne("MemoryPersistence","Starting transaction:",e);const i=new g_(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return z.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class g_ extends Bm{constructor(e){super(),this.currentSequenceNumber=e}}class Eu{constructor(e){this.persistence=e,this.Ri=new Tu,this.Vi=null}static mi(e){return new Eu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),z.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(r=>{const i=ae.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return z.or([()=>z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Co{constructor(e,t){this.persistence=e,this.pi=new Rr((r=>$m(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=i_(this,t)}static mi(e,t){return new Co(e,t)}Ei(){}di(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return z.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?z.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(l=>this.br(e,l,t).next((p=>{p||(r++,a.removeEntry(l,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=oo(e.data.value)),t}br(e,t,r){return z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Ce(),i=Ce();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new wu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ad()?8:qm(dt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((l=>{a.result=l})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((l=>{a.result=l}))})).next((()=>{if(a.result)return;const l=new m_;return this.Ss(e,t,l).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,l,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(ni()<=be.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ri(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(ni()<=be.DEBUG&&ne("QueryEngine","Query:",ri(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ni()<=be.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ri(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(t))):z.resolve())}ys(e,t){if(Mc(t))return z.resolve(null);let r=sn(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Ua(t,null,"F"),r=sn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const l=Ce(...a);return this.ps.getDocuments(e,l).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const T=this.Ds(t,p);return this.Cs(t,T,l,_.readTime)?this.ys(e,Ua(t,null,"F")):this.vs(e,T,t,_)}))))})))))}ws(e,t,r,i){return Mc(t)||i.isEqual(pe.min())?z.resolve(null):this.ps.getDocuments(e,r).next((a=>{const l=this.Ds(t,a);return this.Cs(t,l,r,i)?z.resolve(null):(ni()<=be.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ri(t)),this.vs(e,l,t,Lm(i,ss)).next((p=>p)))}))}Ds(e,t){let r=new Je(kh(e));return t.forEach(((i,a)=>{jo(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return ni()<=be.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ri(t)),this.ps.getDocumentsMatchingQuery(e,t,Yn.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((l=>{a=a.insert(l.key,l)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="LocalStore",__=3e8;class v_{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Be(Se),this.xs=new Rr((a=>du(a)),pu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new a_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function T_(n,e,t,r){return new v_(n,e,t,r)}async function ef(n,e){const t=ge(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const l=[],p=[];let _=Ce();for(const T of i){l.push(T.batchId);for(const R of T.mutations)_=_.add(R.key)}for(const T of a){p.push(T.batchId);for(const R of T.mutations)_=_.add(R.key)}return t.localDocuments.getDocuments(r,_).next((T=>({Ls:T,removedBatchIds:l,addedBatchIds:p})))}))}))}function E_(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,T,R){const x=T.batch,O=x.keys();let W=z.resolve();return O.forEach(($=>{W=W.next((()=>R.getEntry(_,$))).next((Q=>{const Y=T.docVersions.get($);De(Y!==null,48541),Q.version.compareTo(Y)<0&&(x.applyToRemoteDocument(Q,T),Q.isValidDocument()&&(Q.setReadTime(T.commitVersion),R.addEntry(Q)))}))})),W.next((()=>p.mutationQueue.removeMutationBatch(_,x)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Ce();for(let T=0;T<p.mutationResults.length;++T)p.mutationResults[T].transformResults.length>0&&(_=_.add(p.batch.mutations[T].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function tf(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function w_(n,e){const t=ge(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const l=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((R,x)=>{const O=i.get(x);if(!O)return;p.push(t.Pi.removeMatchingKeys(a,R.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(a,R.addedDocuments,x))));let W=O.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(x)!==null?W=W.withResumeToken(ut.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):R.resumeToken.approximateByteSize()>0&&(W=W.withResumeToken(R.resumeToken,r)),i=i.insert(x,W),(function(Q,Y,Z){return Q.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=__?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0})(O,W,R)&&p.push(t.Pi.updateTargetData(a,W))}));let _=Dn(),T=Ce();if(e.documentUpdates.forEach((R=>{e.resolvedLimboDocuments.has(R)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,R))})),p.push(I_(a,l,e.documentUpdates).next((R=>{_=R.ks,T=R.qs}))),!r.isEqual(pe.min())){const R=t.Pi.getLastRemoteSnapshotVersion(a).next((x=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(R)}return z.waitFor(p).next((()=>l.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,T))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function I_(n,e,t){let r=Ce(),i=Ce();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let l=Dn();return t.forEach(((p,_)=>{const T=a.get(p);_.isFoundDocument()!==T.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(pe.min())?(e.removeEntry(p,_.readTime),l=l.insert(p,_)):!T.isValidDocument()||_.version.compareTo(T.version)>0||_.version.compareTo(T.version)===0&&T.hasPendingWrites?(e.addEntry(_),l=l.insert(p,_)):ne(Iu,"Ignoring outdated watch update for ",p,". Current version:",T.version," Watch version:",_.version)})),{ks:l,qs:i}}))}function A_(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=lu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function b_(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,z.resolve(i)):t.Pi.allocateTargetId(r).next((l=>(i=new Wn(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function $a(n,e,t){const r=ge(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(l=>r.persistence.referenceDelegate.removeTarget(l,i)))}catch(l){if(!Ai(l))throw l;ne(Iu,`Failed to update sequence numbers for target ${e}: ${l}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Qc(n,e,t){const r=ge(n);let i=pe.min(),a=Ce();return r.persistence.runTransaction("Execute query","readwrite",(l=>(function(_,T,R){const x=ge(_),O=x.xs.get(R);return O!==void 0?z.resolve(x.Ms.get(O)):x.Pi.getTargetData(T,R)})(r,l,sn(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(l,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(l,e,t?i:pe.min(),t?a:Ce()))).next((p=>(S_(r,ly(e),p),{documents:p,Qs:a})))))}function S_(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class Xc{constructor(){this.activeTargetIds=my()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class C_{constructor(){this.Mo=new Xc,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="ConnectivityMonitor";class Yc{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(Jc,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(Jc,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs=null;function za(){return Zs===null?Zs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zs++,"0x"+Zs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="RestConnection",P_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class k_{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Eo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const l=za(),p=this.zo(e,t.toUriEncodedString());ne(Ea,`Sending RPC '${e}' ${l}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:T}=new URL(p),R=vi(T);return this.Jo(e,p,_,r,R).then((x=>(ne(Ea,`Received RPC '${e}' ${l}: `,x),x)),(x=>{throw di(Ea,`RPC '${e}' ${l} failed with error: `,x,"url: ",p,"request:",r),x}))}Ho(e,t,r,i,a,l){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+wi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=P_[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class x_ extends k_{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const l=za();return new Promise(((p,_)=>{const T=new sh;T.setWithCredentials(!0),T.listenOnce(oh.COMPLETE,(()=>{try{switch(T.getLastErrorCode()){case so.NO_ERROR:const x=T.getResponseJson();ne(lt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(x)),p(x);break;case so.TIMEOUT:ne(lt,`RPC '${e}' ${l} timed out`),_(new se(G.DEADLINE_EXCEEDED,"Request time out"));break;case so.HTTP_ERROR:const O=T.getStatus();if(ne(lt,`RPC '${e}' ${l} failed with status:`,O,"response text:",T.getResponseText()),O>0){let W=T.getResponseJson();Array.isArray(W)&&(W=W[0]);const $=W?.error;if($&&$.status&&$.message){const Q=(function(Z){const ve=Z.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(ve)>=0?ve:G.UNKNOWN})($.status);_(new se(Q,$.message))}else _(new se(G.UNKNOWN,"Server responded with status "+T.getStatus()))}else _(new se(G.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:l,h_:T.getLastErrorCode(),P_:T.getLastError()})}}finally{ne(lt,`RPC '${e}' ${l} completed.`)}}));const R=JSON.stringify(i);ne(lt,`RPC '${e}' ${l} sending request:`,i),T.send(t,"POST",R,r,15)}))}T_(e,t,r){const i=za(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=ch(),p=uh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},T=this.longPollingOptions.timeoutSeconds;T!==void 0&&(_.longPollingTimeout=Math.round(1e3*T)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const R=a.join("");ne(lt,`Creating RPC '${e}' stream ${i}: ${R}`,_);const x=l.createWebChannel(R,_);this.I_(x);let O=!1,W=!1;const $=new D_({Yo:Y=>{W?ne(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,Y):(O||(ne(lt,`Opening RPC '${e}' stream ${i} transport.`),x.open(),O=!0),ne(lt,`RPC '${e}' stream ${i} sending:`,Y),x.send(Y))},Zo:()=>x.close()}),Q=(Y,Z,ve)=>{Y.listen(Z,(Te=>{try{ve(Te)}catch(Ue){setTimeout((()=>{throw Ue}),0)}}))};return Q(x,zi.EventType.OPEN,(()=>{W||(ne(lt,`RPC '${e}' stream ${i} transport opened.`),$.o_())})),Q(x,zi.EventType.CLOSE,(()=>{W||(W=!0,ne(lt,`RPC '${e}' stream ${i} transport closed`),$.a_(),this.E_(x))})),Q(x,zi.EventType.ERROR,(Y=>{W||(W=!0,di(lt,`RPC '${e}' stream ${i} transport errored. Name:`,Y.name,"Message:",Y.message),$.a_(new se(G.UNAVAILABLE,"The operation could not be completed")))})),Q(x,zi.EventType.MESSAGE,(Y=>{if(!W){const Z=Y.data[0];De(!!Z,16349);const ve=Z,Te=ve?.error||ve[0]?.error;if(Te){ne(lt,`RPC '${e}' stream ${i} received error:`,Te);const Ue=Te.status;let At=(function(S){const b=Ge[S];if(b!==void 0)return qh(b)})(Ue),Ye=Te.message;At===void 0&&(At=G.INTERNAL,Ye="Unknown error status: "+Ue+" with message "+Te.message),W=!0,$.a_(new se(At,Ye)),x.close()}else ne(lt,`RPC '${e}' stream ${i} received:`,Z),$.u_(Z)}})),Q(p,ah.STAT_EVENT,(Y=>{Y.stat===Na.PROXY?ne(lt,`RPC '${e}' stream ${i} detected buffering proxy`):Y.stat===Na.NOPROXY&&ne(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{$.__()}),0),$}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(n){return new My(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="PersistentStream";class rf{constructor(e,t,r,i,a,l,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(kn(t.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new se(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(Zc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ne(Zc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class N_ extends rf{constructor(e,t,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Uy(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?pe.min():l.readTime?on(l.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ha(this.serializer),t.addTarget=(function(a,l){let p;const _=l.target;if(p=Fa(_)?{documents:qy(a,_)}:{query:Hy(a,_).ft},p.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){p.resumeToken=zh(a,l.resumeToken);const T=ja(a,l.expectedCount);T!==null&&(p.expectedCount=T)}else if(l.snapshotVersion.compareTo(pe.min())>0){p.readTime=So(a,l.snapshotVersion.toTimestamp());const T=ja(a,l.expectedCount);T!==null&&(p.expectedCount=T)}return p})(this.serializer,e);const r=zy(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ha(this.serializer),t.removeTarget=e,this.q_(t)}}class V_ extends rf{constructor(e,t,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=By(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ha(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>jy(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{}class M_ extends O_{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new se(G.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Go(e,Ba(t,r),i,a,l))).catch((a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(G.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,p])=>this.connection.Ho(e,Ba(t,r),i,l,p,a))).catch((l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(G.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class L_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kn(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="RemoteStore";class F_{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((l=>{r.enqueueAndForget((async()=>{kr(this)&&(ne(Sr,"Restarting streams for network reachability change."),await(async function(_){const T=ge(_);T.Ea.add(4),await Es(T),T.Ra.set("Unknown"),T.Ea.delete(4),await zo(T)})(this))}))})),this.Ra=new L_(r,i)}}async function zo(n){if(kr(n))for(const e of n.da)await e(!0)}async function Es(n){for(const e of n.da)await e(!1)}function sf(n,e){const t=ge(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Cu(t)?Su(t):bi(t).O_()&&bu(t,e))}function Au(n,e){const t=ge(n),r=bi(t);t.Ia.delete(e),r.O_()&&of(t,e),t.Ia.size===0&&(r.O_()?r.L_():kr(t)&&t.Ra.set("Unknown"))}function bu(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bi(n).Y_(e)}function of(n,e){n.Va.Ue(e),bi(n).Z_(e)}function Su(n){n.Va=new xy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),bi(n).start(),n.Ra.ua()}function Cu(n){return kr(n)&&!bi(n).x_()&&n.Ia.size>0}function kr(n){return ge(n).Ea.size===0}function af(n){n.Va=void 0}async function U_(n){n.Ra.set("Online")}async function j_(n){n.Ia.forEach(((e,t)=>{bu(n,e)}))}async function B_(n,e){af(n),Cu(n)?(n.Ra.ha(e),Su(n)):n.Ra.set("Unknown")}async function q_(n,e,t){if(n.Ra.set("Online"),e instanceof $h&&e.state===2&&e.cause)try{await(async function(i,a){const l=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,l),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){ne(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ro(n,r)}else if(e instanceof co?n.Va.Ze(e):e instanceof Hh?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await tf(n.localStore);t.compareTo(r)>=0&&await(function(a,l){const p=a.Va.Tt(l);return p.targetChanges.forEach(((_,T)=>{if(_.resumeToken.approximateByteSize()>0){const R=a.Ia.get(T);R&&a.Ia.set(T,R.withResumeToken(_.resumeToken,l))}})),p.targetMismatches.forEach(((_,T)=>{const R=a.Ia.get(_);if(!R)return;a.Ia.set(_,R.withResumeToken(ut.EMPTY_BYTE_STRING,R.snapshotVersion)),of(a,_);const x=new Wn(R.target,_,T,R.sequenceNumber);bu(a,x)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){ne(Sr,"Failed to raise snapshot:",r),await Ro(n,r)}}async function Ro(n,e,t){if(!Ai(e))throw e;n.Ea.add(1),await Es(n),n.Ra.set("Offline"),t||(t=()=>tf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ne(Sr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zo(n)}))}function uf(n,e){return e().catch((t=>Ro(n,t,e)))}async function Wo(n){const e=ge(n),t=nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lu;for(;H_(e);)try{const i=await A_(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,$_(e,i)}catch(i){await Ro(e,i)}cf(e)&&lf(e)}function H_(n){return kr(n)&&n.Ta.length<10}function $_(n,e){n.Ta.push(e);const t=nr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function cf(n){return kr(n)&&!nr(n).x_()&&n.Ta.length>0}function lf(n){nr(n).start()}async function z_(n){nr(n).ra()}async function W_(n){const e=nr(n);for(const t of n.Ta)e.ea(t.mutations)}async function G_(n,e,t){const r=n.Ta.shift(),i=yu.from(r,e,t);await uf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Wo(n)}async function K_(n,e){e&&nr(n).X_&&await(async function(r,i){if((function(l){return Py(l)&&l!==G.ABORTED})(i.code)){const a=r.Ta.shift();nr(r).B_(),await uf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await Wo(r)}})(n,e),cf(n)&&lf(n)}async function el(n,e){const t=ge(n);t.asyncQueue.verifyOperationInProgress(),ne(Sr,"RemoteStore received new credentials");const r=kr(t);t.Ea.add(3),await Es(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zo(t)}async function Q_(n,e){const t=ge(n);e?(t.Ea.delete(2),await zo(t)):e||(t.Ea.add(2),await Es(t),t.Ra.set("Unknown"))}function bi(n){return n.ma||(n.ma=(function(t,r,i){const a=ge(t);return a.sa(),new N_(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:U_.bind(null,n),t_:j_.bind(null,n),r_:B_.bind(null,n),H_:q_.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Cu(n)?Su(n):n.Ra.set("Unknown")):(await n.ma.stop(),af(n))}))),n.ma}function nr(n){return n.fa||(n.fa=(function(t,r,i){const a=ge(t);return a.sa(),new V_(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:z_.bind(null,n),r_:K_.bind(null,n),ta:W_.bind(null,n),na:G_.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Wo(n)):(await n.fa.stop(),n.Ta.length>0&&(ne(Sr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const l=Date.now()+r,p=new Ru(e,t,l,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pu(n,e){if(kn("AsyncQueue",`${e}: ${n}`),Ai(n))return new se(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{static emptySet(e){return new li(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=Wi(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.ga=new Be(ae.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class _i{constructor(e,t,r,i,a,l,p,_,T){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=T}static fromInitialDocuments(e,t,r,i,a){const l=[];return t.forEach((p=>{l.push({type:0,doc:p})})),new _i(e,t,li.emptySet(t),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class J_{constructor(){this.queries=nl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ge(t),a=i.queries;i.queries=nl(),a.forEach(((l,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new se(G.ABORTED,"Firestore shutting down"))}}function nl(){return new Rr((n=>Ph(n)),Uo)}async function Y_(n,e){const t=ge(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new X_,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const p=Pu(l,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&ku(t)}async function Z_(n,e){const t=ge(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const l=a.Sa.indexOf(e);l>=0&&(a.Sa.splice(l,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ev(n,e){const t=ge(n);let r=!1;for(const i of e){const a=i.query,l=t.queries.get(a);if(l){for(const p of l.Sa)p.Fa(i)&&(r=!0);l.wa=i}}r&&ku(t)}function tv(n,e,t){const r=ge(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function ku(n){n.Ca.forEach((e=>{e.next()}))}var Wa,rl;(rl=Wa||(Wa={})).Ma="default",rl.Cache="cache";class nv{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.key=e}}class ff{constructor(e){this.key=e}}class rv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=kh(e),this.tu=new li(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new tl,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,l=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,T=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((R,x)=>{const O=i.get(R),W=jo(this.query,x)?x:null,$=!!O&&this.mutatedKeys.has(O.key),Q=!!W&&(W.hasLocalMutations||this.mutatedKeys.has(W.key)&&W.hasCommittedMutations);let Y=!1;O&&W?O.data.isEqual(W.data)?$!==Q&&(r.track({type:3,doc:W}),Y=!0):this.su(O,W)||(r.track({type:2,doc:W}),Y=!0,(_&&this.eu(W,_)>0||T&&this.eu(W,T)<0)&&(p=!0)):!O&&W?(r.track({type:0,doc:W}),Y=!0):O&&!W&&(r.track({type:1,doc:O}),Y=!0,(_||T)&&(p=!0)),Y&&(W?(l=l.add(W),a=Q?a.add(R):a.delete(R)):(l=l.delete(R),a=a.delete(R)))})),this.query.limit!==null)for(;l.size>this.query.limit;){const R=this.query.limitType==="F"?l.last():l.first();l=l.delete(R.key),a=a.delete(R.key),r.track({type:1,doc:R})}return{tu:l,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort(((R,x)=>(function(W,$){const Q=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:Y})}};return Q(W)-Q($)})(R.type,x.type)||this.eu(R.doc,x.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,T=_!==this.Za;return this.Za=_,l.length!==0||T?{snapshot:new _i(this.query,e.tu,a,l,e.mutatedKeys,_===0,T,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new tl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new ff(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new hf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return _i.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Du="SyncEngine";class iv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sv{constructor(e){this.key=e,this.hu=!1}}class ov{constructor(e,t,r,i,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Rr((p=>Ph(p)),Uo),this.Iu=new Map,this.Eu=new Set,this.du=new Be(ae.comparator),this.Au=new Map,this.Ru=new Tu,this.Vu={},this.mu=new Map,this.fu=yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function av(n,e,t=!0){const r=_f(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await df(r,e,t,!0),i}async function uv(n,e){const t=_f(n);await df(t,e,!0,!1)}async function df(n,e,t,r){const i=await b_(n.localStore,sn(e)),a=i.targetId,l=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await cv(n,e,a,l==="current",i.resumeToken)),n.isPrimaryClient&&t&&sf(n.remoteStore,i),p}async function cv(n,e,t,r,i){n.pu=(x,O,W)=>(async function(Q,Y,Z,ve){let Te=Y.view.ru(Z);Te.Cs&&(Te=await Qc(Q.localStore,Y.query,!1).then((({documents:c})=>Y.view.ru(c,Te))));const Ue=ve&&ve.targetChanges.get(Y.targetId),At=ve&&ve.targetMismatches.get(Y.targetId)!=null,Ye=Y.view.applyChanges(Te,Q.isPrimaryClient,Ue,At);return sl(Q,Y.targetId,Ye.au),Ye.snapshot})(n,x,O,W);const a=await Qc(n.localStore,e,!0),l=new rv(e,a.Qs),p=l.ru(a.documents),_=Ts.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),T=l.applyChanges(p,n.isPrimaryClient,_);sl(n,t,T.au);const R=new iv(e,t,l);return n.Tu.set(e,R),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),T.snapshot}async function lv(n,e,t){const r=ge(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((l=>!Uo(l,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $a(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Au(r.remoteStore,i.targetId),Ga(r,i.targetId)})).catch(Ii)):(Ga(r,i.targetId),await $a(r.localStore,i.targetId,!0))}async function hv(n,e){const t=ge(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Au(t.remoteStore,r.targetId))}async function fv(n,e,t){const r=vv(n);try{const i=await(function(l,p){const _=ge(l),T=Fe.now(),R=p.reduce(((W,$)=>W.add($.key)),Ce());let x,O;return _.persistence.runTransaction("Locally write mutations","readwrite",(W=>{let $=Dn(),Q=Ce();return _.Ns.getEntries(W,R).next((Y=>{$=Y,$.forEach(((Z,ve)=>{ve.isValidDocument()||(Q=Q.add(Z))}))})).next((()=>_.localDocuments.getOverlayedDocuments(W,$))).next((Y=>{x=Y;const Z=[];for(const ve of p){const Te=Ay(ve,x.get(ve.key).overlayedDocument);Te!=null&&Z.push(new Pr(ve.key,Te,wh(Te.value.mapValue),Sn.exists(!0)))}return _.mutationQueue.addMutationBatch(W,T,Z,p)})).next((Y=>{O=Y;const Z=Y.applyToLocalDocumentSet(x,Q);return _.documentOverlayCache.saveOverlays(W,Y.batchId,Z)}))})).then((()=>({batchId:O.batchId,changes:xh(x)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(l,p,_){let T=l.Vu[l.currentUser.toKey()];T||(T=new Be(Se)),T=T.insert(p,_),l.Vu[l.currentUser.toKey()]=T})(r,i.batchId,t),await ws(r,i.changes),await Wo(r.remoteStore)}catch(i){const a=Pu(i,"Failed to persist write");t.reject(a)}}async function pf(n,e){const t=ge(n);try{const r=await w_(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const l=t.Au.get(a);l&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?De(l.hu,14607):i.removedDocuments.size>0&&(De(l.hu,42227),l.hu=!1))})),await ws(t,r,e)}catch(r){await Ii(r)}}function il(n,e,t){const r=ge(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,l)=>{const p=l.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(l,p){const _=ge(l);_.onlineState=p;let T=!1;_.queries.forEach(((R,x)=>{for(const O of x.Sa)O.va(p)&&(T=!0)})),T&&ku(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dv(n,e,t){const r=ge(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let l=new Be(ae.comparator);l=l.insert(a,ft.newNoDocument(a,pe.min()));const p=Ce().add(a),_=new Ho(pe.min(),new Map,new Be(Se),l,p);await pf(r,_),r.du=r.du.remove(a),r.Au.delete(e),xu(r)}else await $a(r.localStore,e,!1).then((()=>Ga(r,e,t))).catch(Ii)}async function pv(n,e){const t=ge(n),r=e.batch.batchId;try{const i=await E_(t.localStore,e);mf(t,r,null),gf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ws(t,i)}catch(i){await Ii(i)}}async function gv(n,e,t){const r=ge(n);try{const i=await(function(l,p){const _=ge(l);return _.persistence.runTransaction("Reject batch","readwrite-primary",(T=>{let R;return _.mutationQueue.lookupMutationBatch(T,p).next((x=>(De(x!==null,37113),R=x.keys(),_.mutationQueue.removeMutationBatch(T,x)))).next((()=>_.mutationQueue.performConsistencyCheck(T))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(T,R,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(T,R))).next((()=>_.localDocuments.getDocuments(T,R)))}))})(r.localStore,e);mf(r,e,t),gf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ws(r,i)}catch(i){await Ii(i)}}function gf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function mf(n,e,t){const r=ge(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Ga(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||yf(n,r)}))}function yf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Au(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),xu(n))}function sl(n,e,t){for(const r of t)r instanceof hf?(n.Ru.addReference(r.key,e),mv(n,r)):r instanceof ff?(ne(Du,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||yf(n,r.key)):ce(19791,{wu:r})}function mv(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(ne(Du,"New document in limbo: "+t),n.Eu.add(r),xu(n))}function xu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ae(je.fromString(e)),r=n.fu.next();n.Au.set(r,new sv(t)),n.du=n.du.insert(t,r),sf(n.remoteStore,new Wn(sn(gu(t.path)),r,"TargetPurposeLimboResolution",Oo.ce))}}async function ws(n,e,t){const r=ge(n),i=[],a=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{l.push(r.pu(_,e,t).then((T=>{if((T||t)&&r.isPrimaryClient){const R=T?!T.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,R?"current":"not-current")}if(T){i.push(T);const R=wu.As(_.targetId,T);a.push(R)}})))})),await Promise.all(l),r.Pu.H_(i),await(async function(_,T){const R=ge(_);try{await R.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>z.forEach(T,(O=>z.forEach(O.Es,(W=>R.persistence.referenceDelegate.addReference(x,O.targetId,W))).next((()=>z.forEach(O.ds,(W=>R.persistence.referenceDelegate.removeReference(x,O.targetId,W)))))))))}catch(x){if(!Ai(x))throw x;ne(Iu,"Failed to update sequence numbers: "+x)}for(const x of T){const O=x.targetId;if(!x.fromCache){const W=R.Ms.get(O),$=W.snapshotVersion,Q=W.withLastLimboFreeSnapshotVersion($);R.Ms=R.Ms.insert(O,Q)}}})(r.localStore,a))}async function yv(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){ne(Du,"User change. New user:",e.toKey());const r=await ef(t.localStore,e);t.currentUser=e,(function(a,l){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new se(G.CANCELLED,l))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ws(t,r.Ls)}}function _v(n,e){const t=ge(n),r=t.Au.get(e);if(r&&r.hu)return Ce().add(r.key);{let i=Ce();const a=t.Iu.get(e);if(!a)return i;for(const l of a){const p=t.Tu.get(l);i=i.unionWith(p.view.nu)}return i}}function _f(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_v.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dv.bind(null,e),e.Pu.H_=ev.bind(null,e.eventManager),e.Pu.yu=tv.bind(null,e.eventManager),e}function vv(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gv.bind(null,e),e}class Po{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$o(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return T_(this.persistence,new y_,e.initialUser,this.serializer)}Cu(e){return new Zh(Eu.mi,this.serializer)}Du(e){return new C_}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Po.provider={build:()=>new Po};class Tv extends Po{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){De(this.persistence.referenceDelegate instanceof Co,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new n_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Zh((r=>Co.mi(r,t)),this.serializer)}}class Ka{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yv.bind(null,this.syncEngine),await Q_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new J_})()}createDatastore(e){const t=$o(e.databaseInfo.databaseId),r=(function(a){return new x_(a)})(e.databaseInfo);return(function(a,l,p,_){return new M_(a,l,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,l,p){return new F_(r,i,a,l,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>il(this.syncEngine,t,0)),(function(){return Yc.v()?new Yc:new R_})())}createSyncEngine(e,t){return(function(i,a,l,p,_,T,R){const x=new ov(i,a,l,p,_,T);return R&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ge(t);ne(Sr,"RemoteStore shutting down."),r.Ea.add(5),await Es(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ka.provider={build:()=>new Ka};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="FirestoreClient";class wv{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=uu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async l=>{ne(rr,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(ne(rr,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Pu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ia(n,e){n.asyncQueue.verifyOperationInProgress(),ne(rr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await ef(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ol(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Iv(n);ne(rr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>el(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>el(e.remoteStore,i))),n._onlineComponents=e}async function Iv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne(rr,"Using user provided OfflineComponentProvider");try{await Ia(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===G.FAILED_PRECONDITION||i.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await Ia(n,new Po)}}else ne(rr,"Using default OfflineComponentProvider"),await Ia(n,new Tv(void 0));return n._offlineComponents}async function vf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne(rr,"Using user provided OnlineComponentProvider"),await ol(n,n._uninitializedComponentsProvider._online)):(ne(rr,"Using default OnlineComponentProvider"),await ol(n,new Ka))),n._onlineComponents}function Av(n){return vf(n).then((e=>e.syncEngine))}async function bv(n){const e=await vf(n),t=e.eventManager;return t.onListen=av.bind(null,e.syncEngine),t.onUnlisten=lv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hv.bind(null,e.syncEngine),t}function Sv(n,e,t={}){const r=new Jn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,l,p,_,T){const R=new Ev({next:O=>{R.Nu(),l.enqueueAndForget((()=>Z_(a,x)));const W=O.docs.has(p);!W&&O.fromCache?T.reject(new se(G.UNAVAILABLE,"Failed to get document because the client is offline.")):W&&O.fromCache&&_&&_.source==="server"?T.reject(new se(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):T.resolve(O)},error:O=>T.reject(O)}),x=new nv(gu(p.path),R,{includeMetadataChanges:!0,qa:!0});return Y_(a,x)})(await bv(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="firestore.googleapis.com",ul=!0;class cl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ef,this.ssl=ul}else this.host=e.host,this.ssl=e.ssl??ul;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<e_)throw new se(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(G.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nu{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new bm;switch(r.type){case"firstParty":return new Pm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=al.get(t);r&&(ne("ComponentProvider","Removing Datastore"),al.delete(t),r.terminate())})(this),Promise.resolve()}}function Cv(n,e,t,r={}){n=is(n,Nu);const i=vi(e),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(vl(`https://${p}`),Tl("Firestore",!0)),a.host!==Ef&&a.host!==p&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!wr(_,l)&&(n._setSettings(_),r.mockUserToken)){let T,R;if(typeof r.mockUserToken=="string")T=r.mockUserToken,R=ht.MOCK_USER;else{T=Yf(r.mockUserToken,n._app?.options.projectId);const x=r.mockUserToken.sub||r.mockUserToken.user_id;if(!x)throw new se(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new ht(x)}n._authCredentials=new Sm(new hh(T,R))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vu(this.firestore,e,this._query)}}class rt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(_s(t,rt._jsonSchema))return new rt(e,r||null,new ae(je.fromString(t.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:Ke("string",rt._jsonSchemaVersion),referencePath:Ke("string")};class fs extends Vu{constructor(e,t,r){super(e,t,gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new ae(e))}withConverter(e){return new fs(this.firestore,e,this._path)}}function wf(n,e,...t){if(n=cn(n),arguments.length===1&&(e=uu.newId()),Om("doc","path",e),n instanceof Nu){const r=je.fromString(e,...t);return Ic(r),new rt(n,null,new ae(r))}{if(!(n instanceof rt||n instanceof fs))throw new se(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(je.fromString(e,...t));return Ic(r),new rt(n.firestore,n instanceof fs?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="AsyncQueue";class hl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nf(this,"async_queue_retry"),this._c=()=>{const r=wa();r&&ne(ll,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=wa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=wa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Jn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ai(e))throw e;ne(ll,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,kn("INTERNAL UNHANDLED ERROR: ",fl(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ru.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&ce(47125,{Pc:fl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function fl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ou extends Nu{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new hl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hl(e),this._firestoreClient=void 0,await e}}}function Rv(n,e){const t=typeof n=="object"?n:Al(),r=typeof n=="string"?n:Eo,i=Ja(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Xf("firestore");a&&Cv(i,...a)}return i}function If(n){if(n._terminated)throw new se(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Pv(n),n._firestoreClient}function Pv(n){const e=n._freezeSettings(),t=(function(i,a,l,p){return new Gm(i,a,l,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Tf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(ut.fromBase64String(e))}catch(t){throw new se(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Lt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_s(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Ke("string",Lt._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:an._jsonSchemaVersion}}static fromJSON(e){if(_s(e,an._jsonSchema))return new an(e.latitude,e.longitude)}}an._jsonSchemaVersion="firestore/geoPoint/1.0",an._jsonSchema={type:Ke("string",an._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_s(e,un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new un(e.vectorValues);throw new se(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:Ke("string",un._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=/^__.*__$/;class Dv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new vs(e,this.data,t,this.fieldTransforms)}}function Af(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:n})}}class Fu{constructor(e,t,r,i,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Fu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ko(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Af(this.Ac)&&kv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class xv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$o(e)}Cc(e,t,r,i=!1){return new Fu({Ac:e,methodName:t,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nv(n){const e=n._freezeSettings(),t=$o(n._databaseId);return new xv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Vv(n,e,t,r,i,a={}){const l=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);Rf("Data must be an object, but it was:",l,r);const p=Sf(r,l);let _,T;if(a.merge)_=new Ht(l.fieldMask),T=l.fieldTransforms;else if(a.mergeFields){const R=[];for(const x of a.mergeFields){const O=Ov(e,x,t);if(!l.contains(O))throw new se(G.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);Lv(R,O)||R.push(O)}_=new Ht(R),T=l.fieldTransforms.filter((x=>_.covers(x.field)))}else _=null,T=l.fieldTransforms;return new Dv(new Mt(p),_,T)}class Uu extends Lu{_toFieldTransform(e){return new Ty(e.path,new cs)}isEqual(e){return e instanceof Uu}}function bf(n,e){if(Cf(n=cn(n)))return Rf("Unsupported field value:",e,n),Sf(n,e);if(n instanceof Lu)return(function(r,i){if(!Af(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let l=0;for(const p of r){let _=bf(p,i.wc(l));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),l++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Fe.fromDate(r);return{timestampValue:So(i.serializer,a)}}if(r instanceof Fe){const a=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:So(i.serializer,a)}}if(r instanceof an)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:zh(i.serializer,r._byteString)};if(r instanceof rt){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:vu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof un)return(function(l,p){return{mapValue:{fields:{[Th]:{stringValue:Eh},[wo]:{arrayValue:{values:l.toArray().map((T=>{if(typeof T!="number")throw p.Sc("VectorValues must only contain numeric values.");return mu(p.serializer,T)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${cu(r)}`)})(n,e)}function Sf(n,e){const t={};return ph(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(n,((r,i)=>{const a=bf(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function Cf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Fe||n instanceof an||n instanceof Lt||n instanceof rt||n instanceof Lu||n instanceof un)}function Rf(n,e,t){if(!Cf(t)||!fh(t)){const r=cu(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Ov(n,e,t){if((e=cn(e))instanceof Mu)return e._internalPath;if(typeof e=="string")return Pf(n,e);throw ko("Field path arguments must be of type string or ",n,!1,void 0,t)}const Mv=new RegExp("[~\\*/\\[\\]]");function Pf(n,e,t){if(e.search(Mv)>=0)throw ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mu(...e.split("."))._internalPath}catch{throw ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ko(n,e,t,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||l)&&(_+=" (found",a&&(_+=` in field ${r}`),l&&(_+=` in document ${i}`),_+=")"),new se(G.INVALID_ARGUMENT,p+n+_)}function Lv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Df("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fv extends kf{data(){return super.data()}}function Df(n,e){return typeof e=="string"?Pf(n,e):e instanceof Mu?e._internalPath:e._delegate._internalPath}class Uv{convertValue(e,t="none"){switch(tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Cr(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[wo].arrayValue?.values?.map((r=>$e(r.doubleValue)));return new un(t)}convertGeoPoint(e){return new an($e(e.latitude),$e(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Lo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(os(e));default:return null}}convertTimestamp(e){const t=Zn(e);return new Fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=je.fromString(e);De(Jh(r),9688,{name:e});const i=new as(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return i.isEqual(t)||kn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ki{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Er extends kf{constructor(e,t,r,i,a,l){super(e,t,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Df("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Er._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Er._jsonSchemaVersion="firestore/documentSnapshot/1.0",Er._jsonSchema={type:Ke("string",Er._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class lo extends Er{data(e={}){return super.data(e)}}class ts{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new lo(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((p=>{const _=new lo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new Ki(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new lo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new Ki(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let T=-1,R=-1;return p.type!==0&&(T=l.indexOf(p.doc.key),l=l.delete(p.doc.key)),p.type!==1&&(l=l.add(p.doc),R=l.indexOf(p.doc.key)),{type:Bv(p.type),doc:_,oldIndex:T,newIndex:R}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n){n=is(n,rt);const e=is(n.firestore,Ou);return Sv(If(e),n._key).then((t=>Wv(e,n,t)))}ts._jsonSchemaVersion="firestore/querySnapshot/1.0",ts._jsonSchema={type:Ke("string",ts._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Hv extends Uv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rt(this.firestore,null,t)}}function $v(n,e,t){n=is(n,rt);const r=is(n.firestore,Ou),i=jv(n.converter,e);return zv(r,[Vv(Nv(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Sn.none())])}function zv(n,e){return(function(r,i){const a=new Jn;return r.asyncQueue.enqueueAndForget((async()=>fv(await Av(r),i,a))),a.promise})(If(n),e)}function Wv(n,e,t){const r=t.docs.get(e._key),i=new Hv(n);return new Er(n,i,e._key,r,new Ki(t.hasPendingWrites,t.fromCache),e.converter)}function Gv(){return new Uu("serverTimestamp")}(function(e,t=!0){(function(i){wi=i})(Ti),hi(new Ir("firestore",((r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),p=new Ou(new Cm(r.getProvider("auth-internal")),new km(l,r.getProvider("app-check-internal")),(function(T,R){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new se(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(T.options.projectId,R)})(l,i),l);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),Qn(vc,Tc,e),Qn(vc,Tc,"esm2020")})();const Kv={apiKey:"AIzaSyAqyEr1XviSu634LduQhk5WDQgH2M0iA6Y",authDomain:"wiimage.firebaseapp.com",projectId:"wiimage",storageBucket:"wiimage.firebaseapp.com",messagingSenderId:"972731979228",appId:"1:972731979228:web:5a7347c3bcb04d65402b19"},xf=Il(Kv);Im(xf);const Nf=Rv(xf);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=i=>{const[a,l]=Le(i).data("tema").split("|");Le("html").attr("data-theme",a),Le('meta[name="theme-color"]').length?Le('meta[name="theme-color"]').attr("content",l):Le("<meta>",{name:"theme-color",content:l}).appendTo("head"),Qv("witema",`${a}|${l}`,720),Le(".mtha").removeClass("mtha"),Le(i).addClass("mtha")};Le(".witemas").html(n.map(([i,a])=>`<div class="tema" data-tema="${i}|${a}" style="background:${a}"></div>`).join(""));const t=Xv("witema"),r=Le(`[data-tema="${t}"]`)[0]||Le(".mtha")[0]||Le("[data-tema]").first()[0];return r&&e(r),Le(document).on("click","[data-tema]",i=>e(i.currentTarget)),{set:e}})();const Do=(n,e="success")=>{Le(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:l}=t[e]||t.error,p=Le(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
        ">
            <i class="fas ${l}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function Qv(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function Xv(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),Jv(n),null}}function Jv(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}Le(`<style>
.modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:100;justify-content:center;align-items:center;animation:fadeInModal 0.3s ease;}
.modal.active{display:flex;}
@keyframes fadeInModal{from{opacity:0;}to{opacity:1;}}
.modal-content{background-color:#fff;border-radius:var(--border-radius);box-shadow:var(--shadow);width:90%;max-width:600px;max-height:90vh;overflow-y:auto;animation:slideInModal 0.3s ease;border-radius:1vh}
@keyframes slideInModal{from{transform:translateY(-30px);opacity:0;}to{transform:translateY(0);opacity:1;}}
.modal-header{padding:20px;border-bottom:1px solid #e0e0e0;display:flex;justify-content:space-between;align-items:center;}
.modal-title{color:var(--navy-blue);font-size:1.2rem;font-weight:600;}
.close-modal{background:none;border:none;font-size:1.5rem;cursor:pointer;color:#777;transition:color 0.2s;}
.close-modal:hover{color:var(--navy-blue);}
.modal-body{padding:20px;}
.modal-footer{padding:15px 20px;border-top:1px solid #e0e0e0;display:flex;justify-content:flex-end;gap:10px;}
</style>`).appendTo("head");const Aa=()=>{Le(".modal").removeClass("active"),Le("body").removeClass("modal-open")},Yv=()=>{Le(document).on("click",".close-modal",()=>Aa()),Le(document).on("click",".modal",n=>{Le(n.target).hasClass("modal")&&Aa()}),Le(document).on("keydown",n=>{n.key==="Escape"&&Aa()})};Yv();function Zv(){Le("#modal-styles").length===0&&Le("head").append(`
<style id="modal-styles">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-container {
  background: var(--wb);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-lg);
  border: 1px solid var(--bdr);
  overflow: hidden;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.modal-container.small {
  max-width: 400px;
}

.modal-container.large {
  max-width: 700px;
}

.modal-container.full {
  max-width: 90%;
  height: 90%;
}

.modal-header {
  padding: 15px 20px;
  border-bottom: 1px solid var(--bdr);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
  font-size: var(--fz_l1);
  color: var(--txh);
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--tx);
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--mco);
}

.modal-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  color: var(--tx);
}

.modal-footer {
  padding: 15px 20px;
  border-top: 1px solid var(--bdr);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

@media (max-width: 768px) {
  .modal-container {
      width: 95%;
  }
}
</style>
`)}Zv();Le("h1").click(async function(){Do("Escribiendo en base de datos, espere...");try{const n=wf(Nf,"publico","wilder");await $v(n,{nombre:"Wilder",apellidos:"Taype Lapa",mensaje:"Hola guapo hermoso Wilder, Dios te protege!",creacion:Gv()}),Do("✅ Documento guardado exitosamente!")}catch(n){console.error(n)}});Le("button").click(async function(){Do("Esperando un mensaje ");try{const n=wf(Nf,"publico","wilder"),e=await qv(n);if(e.exists()){const t=e.data();Do(t.mensaje)}}catch(n){console.error(n)}});
