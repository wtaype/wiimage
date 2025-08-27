(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function np(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Co={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var rp=Co.exports,Ru;function ip(){return Ru||(Ru=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:rp,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,u=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,E={},I=E.toString,k=E.hasOwnProperty,N=k.toString,Y=N.call(Object),H={},L=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},Q=function(c){return c!=null&&c===c.window},G=e.document,se={type:!0,src:!0,nonce:!0,noModule:!0};function ue(s,c,h){h=h||G;var f,m,y=h.createElement("script");if(y.text=s,c)for(f in se)m=c[f]||c.getAttribute&&c.getAttribute(f),m&&y.setAttribute(f,m);h.head.appendChild(y).parentNode.removeChild(y)}function we(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?E[I.call(s)]||"object":typeof s}var We="3.7.1",Be=/HTML$/i,l=function(s,c){return new l.fn.init(s,c)};l.fn=l.prototype={jquery:We,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var c=l.merge(this.constructor(),s);return c.prevObject=this,c},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(c,h){return s.call(c,h,c)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,c){return(c+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,c){return c%2}))},eq:function(s){var c=this.length,h=+s+(s<0?c:0);return this.pushStack(h>=0&&h<c?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,c,h,f,m,y,v=arguments[0]||{},R=1,A=arguments.length,x=!1;for(typeof v=="boolean"&&(x=v,v=arguments[R]||{},R++),typeof v!="object"&&!L(v)&&(v={}),R===A&&(v=this,R--);R<A;R++)if((s=arguments[R])!=null)for(c in s)f=s[c],!(c==="__proto__"||v===f)&&(x&&f&&(l.isPlainObject(f)||(m=Array.isArray(f)))?(h=v[c],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,v[c]=l.extend(x,y,f)):f!==void 0&&(v[c]=f));return v},l.extend({expando:"jQuery"+(We+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var c,h;return!s||I.call(s)!=="[object Object]"?!1:(c=i(s),c?(h=k.call(c,"constructor")&&c.constructor,typeof h=="function"&&N.call(h)===Y):!0)},isEmptyObject:function(s){var c;for(c in s)return!1;return!0},globalEval:function(s,c,h){ue(s,{nonce:c&&c.nonce},h)},each:function(s,c){var h,f=0;if(S(s))for(h=s.length;f<h&&c.call(s[f],f,s[f])!==!1;f++);else for(f in s)if(c.call(s[f],f,s[f])===!1)break;return s},text:function(s){var c,h="",f=0,m=s.nodeType;if(!m)for(;c=s[f++];)h+=l.text(c);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,c){var h=c||[];return s!=null&&(S(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,c,h){return c==null?-1:_.call(c,s,h)},isXMLDoc:function(s){var c=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!Be.test(c||h&&h.nodeName||"HTML")},merge:function(s,c){for(var h=+c.length,f=0,m=s.length;f<h;f++)s[m++]=c[f];return s.length=m,s},grep:function(s,c,h){for(var f,m=[],y=0,v=s.length,R=!h;y<v;y++)f=!c(s[y],y),f!==R&&m.push(s[y]);return m},map:function(s,c,h){var f,m,y=0,v=[];if(S(s))for(f=s.length;y<f;y++)m=c(s[y],y,h),m!=null&&v.push(m);else for(y in s)m=c(s[y],y,h),m!=null&&v.push(m);return u(v)},guid:1,support:H}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,c){E["[object "+c+"]"]=c.toLowerCase()});function S(s){var c=!!s&&"length"in s&&s.length,h=we(s);return L(s)||Q(s)?!1:h==="array"||c===0||typeof c=="number"&&c>0&&c-1 in s}function C(s,c){return s.nodeName&&s.nodeName.toLowerCase()===c.toLowerCase()}var D=r.pop,V=r.sort,M=r.splice,b="[\\x20\\t\\r\\n\\f]",mt=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,c){var h=c&&c.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var gr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Ra(s,c){return c?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(gr,Ra)};var yt=G,gn=p;(function(){var s,c,h,f,m,y=gn,v,R,A,x,B,z=l.expando,U=0,J=0,he=Cn(),Ie=Cn(),pe=Cn(),Ke=Cn(),$e=function(w,P){return w===P&&(m=!0),0},St="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Rt="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ee="\\["+b+"*("+Rt+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Rt+"))|)"+b+"*\\]",He=":("+Rt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ee+")*)|.*)\\)|)",Ce=new RegExp(b+"+","g"),Ue=new RegExp("^"+b+"*,"+b+"*"),Lt=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),o=new RegExp(b+"|>"),d=new RegExp(He),g=new RegExp("^"+Rt+"$"),T={ID:new RegExp("^#("+Rt+")"),CLASS:new RegExp("^\\.("+Rt+")"),TAG:new RegExp("^("+Rt+"|[*])"),ATTR:new RegExp("^"+Ee),PSEUDO:new RegExp("^"+He),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+St+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,j=/^h\d$/i,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,De=/[+~]/,Oe=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),ve=function(w,P){var F="0x"+w.slice(1)-65536;return P||(F<0?String.fromCharCode(F+65536):String.fromCharCode(F>>10|55296,F&1023|56320))},nt=function(){Gn()},rt=yo(function(w){return w.disabled===!0&&C(w,"fieldset")},{dir:"parentNode",next:"legend"});function Wn(){try{return v.activeElement}catch{}}try{y.apply(r=a.call(yt.childNodes),yt.childNodes),r[yt.childNodes.length].nodeType}catch{y={apply:function(P,F){gn.apply(P,a.call(F))},call:function(P){gn.apply(P,a.call(arguments,1))}}}function Te(w,P,F,q){var W,ee,te,ae,ne,Ae,ge,me=P&&P.ownerDocument,be=P?P.nodeType:9;if(F=F||[],typeof w!="string"||!w||be!==1&&be!==9&&be!==11)return F;if(!q&&(Gn(P),P=P||v,A)){if(be!==11&&(ne=Z.exec(w)))if(W=ne[1]){if(be===9)if(te=P.getElementById(W)){if(te.id===W)return y.call(F,te),F}else return F;else if(me&&(te=me.getElementById(W))&&Te.contains(P,te)&&te.id===W)return y.call(F,te),F}else{if(ne[2])return y.apply(F,P.getElementsByTagName(w)),F;if((W=ne[3])&&P.getElementsByClassName)return y.apply(F,P.getElementsByClassName(W)),F}if(!Ke[w+" "]&&(!x||!x.test(w))){if(ge=w,me=P,be===1&&(o.test(w)||Lt.test(w))){for(me=De.test(w)&&Ba(P.parentNode)||P,(me!=P||!H.scope)&&((ae=P.getAttribute("id"))?ae=l.escapeSelector(ae):P.setAttribute("id",ae=z)),Ae=cs(w),ee=Ae.length;ee--;)Ae[ee]=(ae?"#"+ae:":scope")+" "+mo(Ae[ee]);ge=Ae.join(",")}try{return y.apply(F,me.querySelectorAll(ge)),F}catch{Ke(w,!0)}finally{ae===z&&P.removeAttribute("id")}}}return Su(w.replace(mt,"$1"),P,F,q)}function Cn(){var w=[];function P(F,q){return w.push(F+" ")>c.cacheLength&&delete P[w.shift()],P[F+" "]=q}return P}function Tt(w){return w[z]=!0,w}function gi(w){var P=v.createElement("fieldset");try{return!!w(P)}catch{return!1}finally{P.parentNode&&P.parentNode.removeChild(P),P=null}}function Jf(w){return function(P){return C(P,"input")&&P.type===w}}function Zf(w){return function(P){return(C(P,"input")||C(P,"button"))&&P.type===w}}function bu(w){return function(P){return"form"in P?P.parentNode&&P.disabled===!1?"label"in P?"label"in P.parentNode?P.parentNode.disabled===w:P.disabled===w:P.isDisabled===w||P.isDisabled!==!w&&rt(P)===w:P.disabled===w:"label"in P?P.disabled===w:!1}}function Rr(w){return Tt(function(P){return P=+P,Tt(function(F,q){for(var W,ee=w([],F.length,P),te=ee.length;te--;)F[W=ee[te]]&&(F[W]=!(q[W]=F[W]))})})}function Ba(w){return w&&typeof w.getElementsByTagName<"u"&&w}function Gn(w){var P,F=w?w.ownerDocument||w:yt;return F==v||F.nodeType!==9||!F.documentElement||(v=F,R=v.documentElement,A=!l.isXMLDoc(v),B=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&yt!=v&&(P=v.defaultView)&&P.top!==P&&P.addEventListener("unload",nt),H.getById=gi(function(q){return R.appendChild(q).id=l.expando,!v.getElementsByName||!v.getElementsByName(l.expando).length}),H.disconnectedMatch=gi(function(q){return B.call(q,"*")}),H.scope=gi(function(){return v.querySelectorAll(":scope")}),H.cssHas=gi(function(){try{return v.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),H.getById?(c.filter.ID=function(q){var W=q.replace(Oe,ve);return function(ee){return ee.getAttribute("id")===W}},c.find.ID=function(q,W){if(typeof W.getElementById<"u"&&A){var ee=W.getElementById(q);return ee?[ee]:[]}}):(c.filter.ID=function(q){var W=q.replace(Oe,ve);return function(ee){var te=typeof ee.getAttributeNode<"u"&&ee.getAttributeNode("id");return te&&te.value===W}},c.find.ID=function(q,W){if(typeof W.getElementById<"u"&&A){var ee,te,ae,ne=W.getElementById(q);if(ne){if(ee=ne.getAttributeNode("id"),ee&&ee.value===q)return[ne];for(ae=W.getElementsByName(q),te=0;ne=ae[te++];)if(ee=ne.getAttributeNode("id"),ee&&ee.value===q)return[ne]}return[]}}),c.find.TAG=function(q,W){return typeof W.getElementsByTagName<"u"?W.getElementsByTagName(q):W.querySelectorAll(q)},c.find.CLASS=function(q,W){if(typeof W.getElementsByClassName<"u"&&A)return W.getElementsByClassName(q)},x=[],gi(function(q){var W;R.appendChild(q).innerHTML="<a id='"+z+"' href='' disabled='disabled'></a><select id='"+z+"-\r\\' disabled='disabled'><option selected=''></option></select>",q.querySelectorAll("[selected]").length||x.push("\\["+b+"*(?:value|"+St+")"),q.querySelectorAll("[id~="+z+"-]").length||x.push("~="),q.querySelectorAll("a#"+z+"+*").length||x.push(".#.+[+~]"),q.querySelectorAll(":checked").length||x.push(":checked"),W=v.createElement("input"),W.setAttribute("type","hidden"),q.appendChild(W).setAttribute("name","D"),R.appendChild(q).disabled=!0,q.querySelectorAll(":disabled").length!==2&&x.push(":enabled",":disabled"),W=v.createElement("input"),W.setAttribute("name",""),q.appendChild(W),q.querySelectorAll("[name='']").length||x.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),H.cssHas||x.push(":has"),x=x.length&&new RegExp(x.join("|")),$e=function(q,W){if(q===W)return m=!0,0;var ee=!q.compareDocumentPosition-!W.compareDocumentPosition;return ee||(ee=(q.ownerDocument||q)==(W.ownerDocument||W)?q.compareDocumentPosition(W):1,ee&1||!H.sortDetached&&W.compareDocumentPosition(q)===ee?q===v||q.ownerDocument==yt&&Te.contains(yt,q)?-1:W===v||W.ownerDocument==yt&&Te.contains(yt,W)?1:f?_.call(f,q)-_.call(f,W):0:ee&4?-1:1)}),v}Te.matches=function(w,P){return Te(w,null,null,P)},Te.matchesSelector=function(w,P){if(Gn(w),A&&!Ke[P+" "]&&(!x||!x.test(P)))try{var F=B.call(w,P);if(F||H.disconnectedMatch||w.document&&w.document.nodeType!==11)return F}catch{Ke(P,!0)}return Te(P,v,null,[w]).length>0},Te.contains=function(w,P){return(w.ownerDocument||w)!=v&&Gn(w),l.contains(w,P)},Te.attr=function(w,P){(w.ownerDocument||w)!=v&&Gn(w);var F=c.attrHandle[P.toLowerCase()],q=F&&k.call(c.attrHandle,P.toLowerCase())?F(w,P,!A):void 0;return q!==void 0?q:w.getAttribute(P)},Te.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var P,F=[],q=0,W=0;if(m=!H.sortStable,f=!H.sortStable&&a.call(w,0),V.call(w,$e),m){for(;P=w[W++];)P===w[W]&&(q=F.push(W));for(;q--;)M.call(w,F[q],1)}return f=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},c=l.expr={cacheLength:50,createPseudo:Tt,match:T,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(Oe,ve),w[3]=(w[3]||w[4]||w[5]||"").replace(Oe,ve),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Te.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Te.error(w[0]),w},PSEUDO:function(w){var P,F=!w[6]&&w[2];return T.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":F&&d.test(F)&&(P=cs(F,!0))&&(P=F.indexOf(")",F.length-P)-F.length)&&(w[0]=w[0].slice(0,P),w[2]=F.slice(0,P)),w.slice(0,3))}},filter:{TAG:function(w){var P=w.replace(Oe,ve).toLowerCase();return w==="*"?function(){return!0}:function(F){return C(F,P)}},CLASS:function(w){var P=he[w+" "];return P||(P=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&he(w,function(F){return P.test(typeof F.className=="string"&&F.className||typeof F.getAttribute<"u"&&F.getAttribute("class")||"")})},ATTR:function(w,P,F){return function(q){var W=Te.attr(q,w);return W==null?P==="!=":P?(W+="",P==="="?W===F:P==="!="?W!==F:P==="^="?F&&W.indexOf(F)===0:P==="*="?F&&W.indexOf(F)>-1:P==="$="?F&&W.slice(-F.length)===F:P==="~="?(" "+W.replace(Ce," ")+" ").indexOf(F)>-1:P==="|="?W===F||W.slice(0,F.length+1)===F+"-":!1):!0}},CHILD:function(w,P,F,q,W){var ee=w.slice(0,3)!=="nth",te=w.slice(-4)!=="last",ae=P==="of-type";return q===1&&W===0?function(ne){return!!ne.parentNode}:function(ne,Ae,ge){var me,be,le,Le,At,lt=ee!==te?"nextSibling":"previousSibling",Mt=ne.parentNode,sn=ae&&ne.nodeName.toLowerCase(),mi=!ge&&!ae,wt=!1;if(Mt){if(ee){for(;lt;){for(le=ne;le=le[lt];)if(ae?C(le,sn):le.nodeType===1)return!1;At=lt=w==="only"&&!At&&"nextSibling"}return!0}if(At=[te?Mt.firstChild:Mt.lastChild],te&&mi){for(be=Mt[z]||(Mt[z]={}),me=be[w]||[],Le=me[0]===U&&me[1],wt=Le&&me[2],le=Le&&Mt.childNodes[Le];le=++Le&&le&&le[lt]||(wt=Le=0)||At.pop();)if(le.nodeType===1&&++wt&&le===ne){be[w]=[U,Le,wt];break}}else if(mi&&(be=ne[z]||(ne[z]={}),me=be[w]||[],Le=me[0]===U&&me[1],wt=Le),wt===!1)for(;(le=++Le&&le&&le[lt]||(wt=Le=0)||At.pop())&&!((ae?C(le,sn):le.nodeType===1)&&++wt&&(mi&&(be=le[z]||(le[z]={}),be[w]=[U,wt]),le===ne)););return wt-=W,wt===q||wt%q===0&&wt/q>=0}}},PSEUDO:function(w,P){var F,q=c.pseudos[w]||c.setFilters[w.toLowerCase()]||Te.error("unsupported pseudo: "+w);return q[z]?q(P):q.length>1?(F=[w,w,"",P],c.setFilters.hasOwnProperty(w.toLowerCase())?Tt(function(W,ee){for(var te,ae=q(W,P),ne=ae.length;ne--;)te=_.call(W,ae[ne]),W[te]=!(ee[te]=ae[ne])}):function(W){return q(W,0,F)}):q}},pseudos:{not:Tt(function(w){var P=[],F=[],q=Wa(w.replace(mt,"$1"));return q[z]?Tt(function(W,ee,te,ae){for(var ne,Ae=q(W,null,ae,[]),ge=W.length;ge--;)(ne=Ae[ge])&&(W[ge]=!(ee[ge]=ne))}):function(W,ee,te){return P[0]=W,q(P,null,te,F),P[0]=null,!F.pop()}}),has:Tt(function(w){return function(P){return Te(w,P).length>0}}),contains:Tt(function(w){return w=w.replace(Oe,ve),function(P){return(P.textContent||l.text(P)).indexOf(w)>-1}}),lang:Tt(function(w){return g.test(w||"")||Te.error("unsupported lang: "+w),w=w.replace(Oe,ve).toLowerCase(),function(P){var F;do if(F=A?P.lang:P.getAttribute("xml:lang")||P.getAttribute("lang"))return F=F.toLowerCase(),F===w||F.indexOf(w+"-")===0;while((P=P.parentNode)&&P.nodeType===1);return!1}}),target:function(w){var P=e.location&&e.location.hash;return P&&P.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===Wn()&&v.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:bu(!1),disabled:bu(!0),checked:function(w){return C(w,"input")&&!!w.checked||C(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!c.pseudos.empty(w)},header:function(w){return j.test(w.nodeName)},input:function(w){return O.test(w.nodeName)},button:function(w){return C(w,"input")&&w.type==="button"||C(w,"button")},text:function(w){var P;return C(w,"input")&&w.type==="text"&&((P=w.getAttribute("type"))==null||P.toLowerCase()==="text")},first:Rr(function(){return[0]}),last:Rr(function(w,P){return[P-1]}),eq:Rr(function(w,P,F){return[F<0?F+P:F]}),even:Rr(function(w,P){for(var F=0;F<P;F+=2)w.push(F);return w}),odd:Rr(function(w,P){for(var F=1;F<P;F+=2)w.push(F);return w}),lt:Rr(function(w,P,F){var q;for(F<0?q=F+P:F>P?q=P:q=F;--q>=0;)w.push(q);return w}),gt:Rr(function(w,P,F){for(var q=F<0?F+P:F;++q<P;)w.push(q);return w})}},c.pseudos.nth=c.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[s]=Jf(s);for(s in{submit:!0,reset:!0})c.pseudos[s]=Zf(s);function Cu(){}Cu.prototype=c.filters=c.pseudos,c.setFilters=new Cu;function cs(w,P){var F,q,W,ee,te,ae,ne,Ae=Ie[w+" "];if(Ae)return P?0:Ae.slice(0);for(te=w,ae=[],ne=c.preFilter;te;){(!F||(q=Ue.exec(te)))&&(q&&(te=te.slice(q[0].length)||te),ae.push(W=[])),F=!1,(q=Lt.exec(te))&&(F=q.shift(),W.push({value:F,type:q[0].replace(mt," ")}),te=te.slice(F.length));for(ee in c.filter)(q=T[ee].exec(te))&&(!ne[ee]||(q=ne[ee](q)))&&(F=q.shift(),W.push({value:F,type:ee,matches:q}),te=te.slice(F.length));if(!F)break}return P?te.length:te?Te.error(w):Ie(w,ae).slice(0)}function mo(w){for(var P=0,F=w.length,q="";P<F;P++)q+=w[P].value;return q}function yo(w,P,F){var q=P.dir,W=P.next,ee=W||q,te=F&&ee==="parentNode",ae=J++;return P.first?function(ne,Ae,ge){for(;ne=ne[q];)if(ne.nodeType===1||te)return w(ne,Ae,ge);return!1}:function(ne,Ae,ge){var me,be,le=[U,ae];if(ge){for(;ne=ne[q];)if((ne.nodeType===1||te)&&w(ne,Ae,ge))return!0}else for(;ne=ne[q];)if(ne.nodeType===1||te)if(be=ne[z]||(ne[z]={}),W&&C(ne,W))ne=ne[q]||ne;else{if((me=be[ee])&&me[0]===U&&me[1]===ae)return le[2]=me[2];if(be[ee]=le,le[2]=w(ne,Ae,ge))return!0}return!1}}function $a(w){return w.length>1?function(P,F,q){for(var W=w.length;W--;)if(!w[W](P,F,q))return!1;return!0}:w[0]}function ep(w,P,F){for(var q=0,W=P.length;q<W;q++)Te(w,P[q],F);return F}function _o(w,P,F,q,W){for(var ee,te=[],ae=0,ne=w.length,Ae=P!=null;ae<ne;ae++)(ee=w[ae])&&(!F||F(ee,q,W))&&(te.push(ee),Ae&&P.push(ae));return te}function Ha(w,P,F,q,W,ee){return q&&!q[z]&&(q=Ha(q)),W&&!W[z]&&(W=Ha(W,ee)),Tt(function(te,ae,ne,Ae){var ge,me,be,le,Le=[],At=[],lt=ae.length,Mt=te||ep(P||"*",ne.nodeType?[ne]:ne,[]),sn=w&&(te||!P)?_o(Mt,Le,w,ne,Ae):Mt;if(F?(le=W||(te?w:lt||q)?[]:ae,F(sn,le,ne,Ae)):le=sn,q)for(ge=_o(le,At),q(ge,[],ne,Ae),me=ge.length;me--;)(be=ge[me])&&(le[At[me]]=!(sn[At[me]]=be));if(te){if(W||w){if(W){for(ge=[],me=le.length;me--;)(be=le[me])&&ge.push(sn[me]=be);W(null,le=[],ge,Ae)}for(me=le.length;me--;)(be=le[me])&&(ge=W?_.call(te,be):Le[me])>-1&&(te[ge]=!(ae[ge]=be))}}else le=_o(le===ae?le.splice(lt,le.length):le),W?W(null,ae,le,Ae):y.apply(ae,le)})}function za(w){for(var P,F,q,W=w.length,ee=c.relative[w[0].type],te=ee||c.relative[" "],ae=ee?1:0,ne=yo(function(me){return me===P},te,!0),Ae=yo(function(me){return _.call(P,me)>-1},te,!0),ge=[function(me,be,le){var Le=!ee&&(le||be!=h)||((P=be).nodeType?ne(me,be,le):Ae(me,be,le));return P=null,Le}];ae<W;ae++)if(F=c.relative[w[ae].type])ge=[yo($a(ge),F)];else{if(F=c.filter[w[ae].type].apply(null,w[ae].matches),F[z]){for(q=++ae;q<W&&!c.relative[w[q].type];q++);return Ha(ae>1&&$a(ge),ae>1&&mo(w.slice(0,ae-1).concat({value:w[ae-2].type===" "?"*":""})).replace(mt,"$1"),F,ae<q&&za(w.slice(ae,q)),q<W&&za(w=w.slice(q)),q<W&&mo(w))}ge.push(F)}return $a(ge)}function tp(w,P){var F=P.length>0,q=w.length>0,W=function(ee,te,ae,ne,Ae){var ge,me,be,le=0,Le="0",At=ee&&[],lt=[],Mt=h,sn=ee||q&&c.find.TAG("*",Ae),mi=U+=Mt==null?1:Math.random()||.1,wt=sn.length;for(Ae&&(h=te==v||te||Ae);Le!==wt&&(ge=sn[Le])!=null;Le++){if(q&&ge){for(me=0,!te&&ge.ownerDocument!=v&&(Gn(ge),ae=!A);be=w[me++];)if(be(ge,te||v,ae)){y.call(ne,ge);break}Ae&&(U=mi)}F&&((ge=!be&&ge)&&le--,ee&&At.push(ge))}if(le+=Le,F&&Le!==le){for(me=0;be=P[me++];)be(At,lt,te,ae);if(ee){if(le>0)for(;Le--;)At[Le]||lt[Le]||(lt[Le]=D.call(ne));lt=_o(lt)}y.apply(ne,lt),Ae&&!ee&&lt.length>0&&le+P.length>1&&l.uniqueSort(ne)}return Ae&&(U=mi,h=Mt),At};return F?Tt(W):W}function Wa(w,P){var F,q=[],W=[],ee=pe[w+" "];if(!ee){for(P||(P=cs(w)),F=P.length;F--;)ee=za(P[F]),ee[z]?q.push(ee):W.push(ee);ee=pe(w,tp(W,q)),ee.selector=w}return ee}function Su(w,P,F,q){var W,ee,te,ae,ne,Ae=typeof w=="function"&&w,ge=!q&&cs(w=Ae.selector||w);if(F=F||[],ge.length===1){if(ee=ge[0]=ge[0].slice(0),ee.length>2&&(te=ee[0]).type==="ID"&&P.nodeType===9&&A&&c.relative[ee[1].type]){if(P=(c.find.ID(te.matches[0].replace(Oe,ve),P)||[])[0],P)Ae&&(P=P.parentNode);else return F;w=w.slice(ee.shift().value.length)}for(W=T.needsContext.test(w)?0:ee.length;W--&&(te=ee[W],!c.relative[ae=te.type]);)if((ne=c.find[ae])&&(q=ne(te.matches[0].replace(Oe,ve),De.test(ee[0].type)&&Ba(P.parentNode)||P))){if(ee.splice(W,1),w=q.length&&mo(ee),!w)return y.apply(F,q),F;break}}return(Ae||Wa(w,ge))(q,P,!A,F,!P||De.test(w)&&Ba(P.parentNode)||P),F}H.sortStable=z.split("").sort($e).join("")===z,Gn(),H.sortDetached=gi(function(w){return w.compareDocumentPosition(v.createElement("fieldset"))&1}),l.find=Te,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Te.compile=Wa,Te.select=Su,Te.setDocument=Gn,Te.tokenize=cs,Te.escape=l.escapeSelector,Te.getText=l.text,Te.isXML=l.isXMLDoc,Te.selectors=l.expr,Te.support=l.support,Te.uniqueSort=l.uniqueSort})();var Qt=function(s,c,h){for(var f=[],m=h!==void 0;(s=s[c])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;f.push(s)}return f},Hi=function(s,c){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==c&&h.push(s);return h},Gs=l.expr.match.needsContext,qt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ge(s,c,h){return L(c)?l.grep(s,function(f,m){return!!c.call(f,m,f)!==h}):c.nodeType?l.grep(s,function(f){return f===c!==h}):typeof c!="string"?l.grep(s,function(f){return _.call(c,f)>-1!==h}):l.filter(c,s,h)}l.filter=function(s,c,h){var f=c[0];return h&&(s=":not("+s+")"),c.length===1&&f.nodeType===1?l.find.matchesSelector(f,s)?[f]:[]:l.find.matches(s,l.grep(c,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var c,h,f=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(c=0;c<f;c++)if(l.contains(m[c],this))return!0}));for(h=this.pushStack([]),c=0;c<f;c++)l.find(s,m[c],h);return f>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(Ge(this,s||[],!1))},not:function(s){return this.pushStack(Ge(this,s||[],!0))},is:function(s){return!!Ge(this,typeof s=="string"&&Gs.test(s)?l(s):s||[],!1).length}});var Ks,mr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Pa=l.fn.init=function(s,c,h){var f,m;if(!s)return this;if(h=h||Ks,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?f=[null,s,null]:f=mr.exec(s),f&&(f[1]||!c))if(f[1]){if(c=c instanceof l?c[0]:c,l.merge(this,l.parseHTML(f[1],c&&c.nodeType?c.ownerDocument||c:G,!0)),qt.test(f[1])&&l.isPlainObject(c))for(f in c)L(this[f])?this[f](c[f]):this.attr(f,c[f]);return this}else return m=G.getElementById(f[2]),m&&(this[0]=m,this.length=1),this;else return!c||c.jquery?(c||h).find(s):this.constructor(c).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(L(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Pa.prototype=l.fn,Ks=l(G);var Wr=/^(?:parents|prev(?:Until|All))/,ka={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var c=l(s,this),h=c.length;return this.filter(function(){for(var f=0;f<h;f++)if(l.contains(this,c[f]))return!0})},closest:function(s,c){var h,f=0,m=this.length,y=[],v=typeof s!="string"&&l(s);if(!Gs.test(s)){for(;f<m;f++)for(h=this[f];h&&h!==c;h=h.parentNode)if(h.nodeType<11&&(v?v.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,c){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,c))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Qs(s,c){for(;(s=s[c])&&s.nodeType!==1;);return s}l.each({parent:function(s){var c=s.parentNode;return c&&c.nodeType!==11?c:null},parents:function(s){return Qt(s,"parentNode")},parentsUntil:function(s,c,h){return Qt(s,"parentNode",h)},next:function(s){return Qs(s,"nextSibling")},prev:function(s){return Qs(s,"previousSibling")},nextAll:function(s){return Qt(s,"nextSibling")},prevAll:function(s){return Qt(s,"previousSibling")},nextUntil:function(s,c,h){return Qt(s,"nextSibling",h)},prevUntil:function(s,c,h){return Qt(s,"previousSibling",h)},siblings:function(s){return Hi((s.parentNode||{}).firstChild,s)},children:function(s){return Hi(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(C(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,c){l.fn[s]=function(h,f){var m=l.map(this,c,h);return s.slice(-5)!=="Until"&&(f=h),f&&typeof f=="string"&&(m=l.filter(f,m)),this.length>1&&(ka[s]||l.uniqueSort(m),Wr.test(s)&&m.reverse()),this.pushStack(m)}});var _t=/[^\x20\t\r\n\f]+/g;function Gr(s){var c={};return l.each(s.match(_t)||[],function(h,f){c[f]=!0}),c}l.Callbacks=function(s){s=typeof s=="string"?Gr(s):l.extend({},s);var c,h,f,m,y=[],v=[],R=-1,A=function(){for(m=m||s.once,f=c=!0;v.length;R=-1)for(h=v.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),c=!1,m&&(h?y=[]:y="")},x={add:function(){return y&&(h&&!c&&(R=y.length-1,v.push(h)),(function B(z){l.each(z,function(U,J){L(J)?(!s.unique||!x.has(J))&&y.push(J):J&&J.length&&we(J)!=="string"&&B(J)})})(arguments),h&&!c&&A()),this},remove:function(){return l.each(arguments,function(B,z){for(var U;(U=l.inArray(z,y,U))>-1;)y.splice(U,1),U<=R&&R--}),this},has:function(B){return B?l.inArray(B,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=v=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=v=[],!h&&!c&&(y=h=""),this},locked:function(){return!!m},fireWith:function(B,z){return m||(z=z||[],z=[B,z.slice?z.slice():z],v.push(z),c||A()),this},fire:function(){return x.fireWith(this,arguments),this},fired:function(){return!!f}};return x};function Xt(s){return s}function jn(s){throw s}function Kr(s,c,h,f){var m;try{s&&L(m=s.promise)?m.call(s).done(c).fail(h):s&&L(m=s.then)?m.call(s,c,h):c.apply(void 0,[s].slice(f))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var c=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",f={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return f.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(v){l.each(c,function(R,A){var x=L(y[A[4]])&&y[A[4]];m[A[1]](function(){var B=x&&x.apply(this,arguments);B&&L(B.promise)?B.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[A[0]+"With"](this,x?[B]:arguments)})}),y=null}).promise()},then:function(y,v,R){var A=0;function x(B,z,U,J){return function(){var he=this,Ie=arguments,pe=function(){var $e,St;if(!(B<A)){if($e=U.apply(he,Ie),$e===z.promise())throw new TypeError("Thenable self-resolution");St=$e&&(typeof $e=="object"||typeof $e=="function")&&$e.then,L(St)?J?St.call($e,x(A,z,Xt,J),x(A,z,jn,J)):(A++,St.call($e,x(A,z,Xt,J),x(A,z,jn,J),x(A,z,Xt,z.notifyWith))):(U!==Xt&&(he=void 0,Ie=[$e]),(J||z.resolveWith)(he,Ie))}},Ke=J?pe:function(){try{pe()}catch($e){l.Deferred.exceptionHook&&l.Deferred.exceptionHook($e,Ke.error),B+1>=A&&(U!==jn&&(he=void 0,Ie=[$e]),z.rejectWith(he,Ie))}};B?Ke():(l.Deferred.getErrorHook?Ke.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Ke.error=l.Deferred.getStackHook()),e.setTimeout(Ke))}}return l.Deferred(function(B){c[0][3].add(x(0,B,L(R)?R:Xt,B.notifyWith)),c[1][3].add(x(0,B,L(y)?y:Xt)),c[2][3].add(x(0,B,L(v)?v:jn))}).promise()},promise:function(y){return y!=null?l.extend(y,f):f}},m={};return l.each(c,function(y,v){var R=v[2],A=v[5];f[v[1]]=R.add,A&&R.add(function(){h=A},c[3-y][2].disable,c[3-y][3].disable,c[0][2].lock,c[0][3].lock),R.add(v[3].fire),m[v[0]]=function(){return m[v[0]+"With"](this===m?void 0:this,arguments),this},m[v[0]+"With"]=R.fireWith}),f.promise(m),s&&s.call(m,m),m},when:function(s){var c=arguments.length,h=c,f=Array(h),m=a.call(arguments),y=l.Deferred(),v=function(R){return function(A){f[R]=this,m[R]=arguments.length>1?a.call(arguments):A,--c||y.resolveWith(f,m)}};if(c<=1&&(Kr(s,y.done(v(h)).resolve,y.reject,!c),y.state()==="pending"||L(m[h]&&m[h].then)))return y.then();for(;h--;)Kr(m[h],v(h),y.reject);return y.promise()}});var zi=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,c){e.console&&e.console.warn&&s&&zi.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,c)},l.readyException=function(s){e.setTimeout(function(){throw s})};var Qr=l.Deferred();l.fn.ready=function(s){return Qr.then(s).catch(function(c){l.readyException(c)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&Qr.resolveWith(G,[l]))}}),l.ready.then=Qr.then;function Xr(){G.removeEventListener("DOMContentLoaded",Xr),e.removeEventListener("load",Xr),l.ready()}G.readyState==="complete"||G.readyState!=="loading"&&!G.documentElement.doScroll?e.setTimeout(l.ready):(G.addEventListener("DOMContentLoaded",Xr),e.addEventListener("load",Xr));var Bt=function(s,c,h,f,m,y,v){var R=0,A=s.length,x=h==null;if(we(h)==="object"){m=!0;for(R in h)Bt(s,c,R,h[R],!0,y,v)}else if(f!==void 0&&(m=!0,L(f)||(v=!0),x&&(v?(c.call(s,f),c=null):(x=c,c=function(B,z,U){return x.call(l(B),U)})),c))for(;R<A;R++)c(s[R],h,v?f:f.call(s[R],R,c(s[R],h)));return m?s:x?c.call(s):A?c(s[0],h):y},Xs=/^-ms-/,Wi=/-([a-z])/g;function Ys(s,c){return c.toUpperCase()}function kt(s){return s.replace(Xs,"ms-").replace(Wi,Ys)}var mn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function yn(){this.expando=l.expando+yn.uid++}yn.uid=1,yn.prototype={cache:function(s){var c=s[this.expando];return c||(c={},mn(s)&&(s.nodeType?s[this.expando]=c:Object.defineProperty(s,this.expando,{value:c,configurable:!0}))),c},set:function(s,c,h){var f,m=this.cache(s);if(typeof c=="string")m[kt(c)]=h;else for(f in c)m[kt(f)]=c[f];return m},get:function(s,c){return c===void 0?this.cache(s):s[this.expando]&&s[this.expando][kt(c)]},access:function(s,c,h){return c===void 0||c&&typeof c=="string"&&h===void 0?this.get(s,c):(this.set(s,c,h),h!==void 0?h:c)},remove:function(s,c){var h,f=s[this.expando];if(f!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(kt):(c=kt(c),c=c in f?[c]:c.match(_t)||[]),h=c.length;h--;)delete f[c[h]];(c===void 0||l.isEmptyObject(f))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var c=s[this.expando];return c!==void 0&&!l.isEmptyObject(c)}};var oe=new yn,xe=new yn,st=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Yr=/[A-Z]/g;function Js(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:st.test(s)?JSON.parse(s):s}function Gi(s,c,h){var f;if(h===void 0&&s.nodeType===1)if(f="data-"+c.replace(Yr,"-$&").toLowerCase(),h=s.getAttribute(f),typeof h=="string"){try{h=Js(h)}catch{}xe.set(s,c,h)}else h=void 0;return h}l.extend({hasData:function(s){return xe.hasData(s)||oe.hasData(s)},data:function(s,c,h){return xe.access(s,c,h)},removeData:function(s,c){xe.remove(s,c)},_data:function(s,c,h){return oe.access(s,c,h)},_removeData:function(s,c){oe.remove(s,c)}}),l.fn.extend({data:function(s,c){var h,f,m,y=this[0],v=y&&y.attributes;if(s===void 0){if(this.length&&(m=xe.get(y),y.nodeType===1&&!oe.get(y,"hasDataAttrs"))){for(h=v.length;h--;)v[h]&&(f=v[h].name,f.indexOf("data-")===0&&(f=kt(f.slice(5)),Gi(y,f,m[f])));oe.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){xe.set(this,s)}):Bt(this,function(R){var A;if(y&&R===void 0)return A=xe.get(y,s),A!==void 0||(A=Gi(y,s),A!==void 0)?A:void 0;this.each(function(){xe.set(this,s,R)})},null,c,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){xe.remove(this,s)})}}),l.extend({queue:function(s,c,h){var f;if(s)return c=(c||"fx")+"queue",f=oe.get(s,c),h&&(!f||Array.isArray(h)?f=oe.access(s,c,l.makeArray(h)):f.push(h)),f||[]},dequeue:function(s,c){c=c||"fx";var h=l.queue(s,c),f=h.length,m=h.shift(),y=l._queueHooks(s,c),v=function(){l.dequeue(s,c)};m==="inprogress"&&(m=h.shift(),f--),m&&(c==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,v,y)),!f&&y&&y.empty.fire()},_queueHooks:function(s,c){var h=c+"queueHooks";return oe.get(s,h)||oe.access(s,h,{empty:l.Callbacks("once memory").add(function(){oe.remove(s,[c+"queue",h])})})}}),l.fn.extend({queue:function(s,c){var h=2;return typeof s!="string"&&(c=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):c===void 0?this:this.each(function(){var f=l.queue(this,s,c);l._queueHooks(this,s),s==="fx"&&f[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,c){var h,f=1,m=l.Deferred(),y=this,v=this.length,R=function(){--f||m.resolveWith(y,[y])};for(typeof s!="string"&&(c=s,s=void 0),s=s||"fx";v--;)h=oe.get(y[v],s+"queueHooks"),h&&h.empty&&(f++,h.empty.add(R));return R(),m.promise(c)}});var Zs=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$t=new RegExp("^(?:([+-])=|)("+Zs+")([a-z%]*)$","i"),xt=["Top","Right","Bottom","Left"],Yt=G.documentElement,Jt=function(s){return l.contains(s.ownerDocument,s)},xa={composed:!0};Yt.getRootNode&&(Jt=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(xa)===s.ownerDocument});var Jr=function(s,c){return s=c||s,s.style.display==="none"||s.style.display===""&&Jt(s)&&l.css(s,"display")==="none"};function Zr(s,c,h,f){var m,y,v=20,R=f?function(){return f.cur()}:function(){return l.css(s,c,"")},A=R(),x=h&&h[3]||(l.cssNumber[c]?"":"px"),B=s.nodeType&&(l.cssNumber[c]||x!=="px"&&+A)&&$t.exec(l.css(s,c));if(B&&B[3]!==x){for(A=A/2,x=x||B[3],B=+A||1;v--;)l.style(s,c,B+x),(1-y)*(1-(y=R()/A||.5))<=0&&(v=0),B=B/y;B=B*2,l.style(s,c,B+x),h=h||[]}return h&&(B=+B||+A||0,m=h[1]?B+(h[1]+1)*h[2]:+h[2],f&&(f.unit=x,f.start=B,f.end=m)),m}var Ki={};function eo(s){var c,h=s.ownerDocument,f=s.nodeName,m=Ki[f];return m||(c=h.body.appendChild(h.createElement(f)),m=l.css(c,"display"),c.parentNode.removeChild(c),m==="none"&&(m="block"),Ki[f]=m,m)}function Dt(s,c){for(var h,f,m=[],y=0,v=s.length;y<v;y++)f=s[y],f.style&&(h=f.style.display,c?(h==="none"&&(m[y]=oe.get(f,"display")||null,m[y]||(f.style.display="")),f.style.display===""&&Jr(f)&&(m[y]=eo(f))):h!=="none"&&(m[y]="none",oe.set(f,"display",h)));for(y=0;y<v;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return Dt(this,!0)},hide:function(){return Dt(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Jr(this)?l(this).show():l(this).hide()})}});var _n=/^(?:checkbox|radio)$/i,ei=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Zt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=G.createDocumentFragment(),c=s.appendChild(G.createElement("div")),h=G.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),c.appendChild(h),H.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",H.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",H.option=!!c.lastChild})();var vt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};vt.tbody=vt.tfoot=vt.colgroup=vt.caption=vt.thead,vt.th=vt.td,H.option||(vt.optgroup=vt.option=[1,"<select multiple='multiple'>","</select>"]);function Ze(s,c){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(c||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(c||"*"):h=[],c===void 0||c&&C(s,c)?l.merge([s],h):h}function ti(s,c){for(var h=0,f=s.length;h<f;h++)oe.set(s[h],"globalEval",!c||oe.get(c[h],"globalEval"))}var yr=/<|&#?\w+;/;function Qi(s,c,h,f,m){for(var y,v,R,A,x,B,z=c.createDocumentFragment(),U=[],J=0,he=s.length;J<he;J++)if(y=s[J],y||y===0)if(we(y)==="object")l.merge(U,y.nodeType?[y]:y);else if(!yr.test(y))U.push(c.createTextNode(y));else{for(v=v||z.appendChild(c.createElement("div")),R=(ei.exec(y)||["",""])[1].toLowerCase(),A=vt[R]||vt._default,v.innerHTML=A[1]+l.htmlPrefilter(y)+A[2],B=A[0];B--;)v=v.lastChild;l.merge(U,v.childNodes),v=z.firstChild,v.textContent=""}for(z.textContent="",J=0;y=U[J++];){if(f&&l.inArray(y,f)>-1){m&&m.push(y);continue}if(x=Jt(y),v=Ze(z.appendChild(y),"script"),x&&ti(v),h)for(B=0;y=v[B++];)Zt.test(y.type||"")&&h.push(y)}return z}var tt=/^([^.]*)(?:\.(.+)|)/;function vn(){return!0}function Nt(){return!1}function En(s,c,h,f,m,y){var v,R;if(typeof c=="object"){typeof h!="string"&&(f=f||h,h=void 0);for(R in c)En(s,R,h,f,c[R],y);return s}if(f==null&&m==null?(m=h,f=h=void 0):m==null&&(typeof h=="string"?(m=f,f=void 0):(m=f,f=h,h=void 0)),m===!1)m=Nt;else if(!m)return s;return y===1&&(v=m,m=function(A){return l().off(A),v.apply(this,arguments)},m.guid=v.guid||(v.guid=l.guid++)),s.each(function(){l.event.add(this,c,m,f,h)})}l.event={global:{},add:function(s,c,h,f,m){var y,v,R,A,x,B,z,U,J,he,Ie,pe=oe.get(s);if(mn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Yt,m),h.guid||(h.guid=l.guid++),(A=pe.events)||(A=pe.events=Object.create(null)),(v=pe.handle)||(v=pe.handle=function(Ke){return typeof l<"u"&&l.event.triggered!==Ke.type?l.event.dispatch.apply(s,arguments):void 0}),c=(c||"").match(_t)||[""],x=c.length;x--;)R=tt.exec(c[x])||[],J=Ie=R[1],he=(R[2]||"").split(".").sort(),J&&(z=l.event.special[J]||{},J=(m?z.delegateType:z.bindType)||J,z=l.event.special[J]||{},B=l.extend({type:J,origType:Ie,data:f,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:he.join(".")},y),(U=A[J])||(U=A[J]=[],U.delegateCount=0,(!z.setup||z.setup.call(s,f,he,v)===!1)&&s.addEventListener&&s.addEventListener(J,v)),z.add&&(z.add.call(s,B),B.handler.guid||(B.handler.guid=h.guid)),m?U.splice(U.delegateCount++,0,B):U.push(B),l.event.global[J]=!0)},remove:function(s,c,h,f,m){var y,v,R,A,x,B,z,U,J,he,Ie,pe=oe.hasData(s)&&oe.get(s);if(!(!pe||!(A=pe.events))){for(c=(c||"").match(_t)||[""],x=c.length;x--;){if(R=tt.exec(c[x])||[],J=Ie=R[1],he=(R[2]||"").split(".").sort(),!J){for(J in A)l.event.remove(s,J+c[x],h,f,!0);continue}for(z=l.event.special[J]||{},J=(f?z.delegateType:z.bindType)||J,U=A[J]||[],R=R[2]&&new RegExp("(^|\\.)"+he.join("\\.(?:.*\\.|)")+"(\\.|$)"),v=y=U.length;y--;)B=U[y],(m||Ie===B.origType)&&(!h||h.guid===B.guid)&&(!R||R.test(B.namespace))&&(!f||f===B.selector||f==="**"&&B.selector)&&(U.splice(y,1),B.selector&&U.delegateCount--,z.remove&&z.remove.call(s,B));v&&!U.length&&((!z.teardown||z.teardown.call(s,he,pe.handle)===!1)&&l.removeEvent(s,J,pe.handle),delete A[J])}l.isEmptyObject(A)&&oe.remove(s,"handle events")}},dispatch:function(s){var c,h,f,m,y,v,R=new Array(arguments.length),A=l.event.fix(s),x=(oe.get(this,"events")||Object.create(null))[A.type]||[],B=l.event.special[A.type]||{};for(R[0]=A,c=1;c<arguments.length;c++)R[c]=arguments[c];if(A.delegateTarget=this,!(B.preDispatch&&B.preDispatch.call(this,A)===!1)){for(v=l.event.handlers.call(this,A,x),c=0;(m=v[c++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||y.namespace===!1||A.rnamespace.test(y.namespace))&&(A.handleObj=y,A.data=y.data,f=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),f!==void 0&&(A.result=f)===!1&&(A.preventDefault(),A.stopPropagation()));return B.postDispatch&&B.postDispatch.call(this,A),A.result}},handlers:function(s,c){var h,f,m,y,v,R=[],A=c.delegateCount,x=s.target;if(A&&x.nodeType&&!(s.type==="click"&&s.button>=1)){for(;x!==this;x=x.parentNode||this)if(x.nodeType===1&&!(s.type==="click"&&x.disabled===!0)){for(y=[],v={},h=0;h<A;h++)f=c[h],m=f.selector+" ",v[m]===void 0&&(v[m]=f.needsContext?l(m,this).index(x)>-1:l.find(m,this,null,[x]).length),v[m]&&y.push(f);y.length&&R.push({elem:x,handlers:y})}}return x=this,A<c.length&&R.push({elem:x,handlers:c.slice(A)}),R},addProp:function(s,c){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:L(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var c=this||s;return _n.test(c.type)&&c.click&&C(c,"input")&&ni(c,"click",!0),!1},trigger:function(s){var c=this||s;return _n.test(c.type)&&c.click&&C(c,"input")&&ni(c,"click"),!0},_default:function(s){var c=s.target;return _n.test(c.type)&&c.click&&C(c,"input")&&oe.get(c,"click")||C(c,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function ni(s,c,h){if(!h){oe.get(s,c)===void 0&&l.event.add(s,c,vn);return}oe.set(s,c,!1),l.event.add(s,c,{namespace:!1,handler:function(f){var m,y=oe.get(this,c);if(f.isTrigger&1&&this[c]){if(y)(l.event.special[c]||{}).delegateType&&f.stopPropagation();else if(y=a.call(arguments),oe.set(this,c,y),this[c](),m=oe.get(this,c),oe.set(this,c,!1),y!==m)return f.stopImmediatePropagation(),f.preventDefault(),m}else y&&(oe.set(this,c,l.event.trigger(y[0],y.slice(1),this)),f.stopPropagation(),f.isImmediatePropagationStopped=vn)}})}l.removeEvent=function(s,c,h){s.removeEventListener&&s.removeEventListener(c,h)},l.Event=function(s,c){if(!(this instanceof l.Event))return new l.Event(s,c);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?vn:Nt,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,c&&l.extend(this,c),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Nt,isPropagationStopped:Nt,isImmediatePropagationStopped:Nt,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=vn,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=vn,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=vn,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,c){function h(f){if(G.documentMode){var m=oe.get(this,"handle"),y=l.event.fix(f);y.type=f.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(f),y.target===y.currentTarget&&m(y)}else l.event.simulate(c,f.target,l.event.fix(f))}l.event.special[s]={setup:function(){var f;if(ni(this,s,!0),G.documentMode)f=oe.get(this,c),f||this.addEventListener(c,h),oe.set(this,c,(f||0)+1);else return!1},trigger:function(){return ni(this,s),!0},teardown:function(){var f;if(G.documentMode)f=oe.get(this,c)-1,f?oe.set(this,c,f):(this.removeEventListener(c,h),oe.remove(this,c));else return!1},_default:function(f){return oe.get(f.target,s)},delegateType:c},l.event.special[c]={setup:function(){var f=this.ownerDocument||this.document||this,m=G.documentMode?this:f,y=oe.get(m,c);y||(G.documentMode?this.addEventListener(c,h):f.addEventListener(s,h,!0)),oe.set(m,c,(y||0)+1)},teardown:function(){var f=this.ownerDocument||this.document||this,m=G.documentMode?this:f,y=oe.get(m,c)-1;y?oe.set(m,c,y):(G.documentMode?this.removeEventListener(c,h):f.removeEventListener(s,h,!0),oe.remove(m,c))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,c){l.event.special[s]={delegateType:c,bindType:c,handle:function(h){var f,m=this,y=h.relatedTarget,v=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=v.origType,f=v.handler.apply(this,arguments),h.type=c),f}}}),l.fn.extend({on:function(s,c,h,f){return En(this,s,c,h,f)},one:function(s,c,h,f){return En(this,s,c,h,f,1)},off:function(s,c,h){var f,m;if(s&&s.preventDefault&&s.handleObj)return f=s.handleObj,l(s.delegateTarget).off(f.namespace?f.origType+"."+f.namespace:f.origType,f.selector,f.handler),this;if(typeof s=="object"){for(m in s)this.off(m,c,s[m]);return this}return(c===!1||typeof c=="function")&&(h=c,c=void 0),h===!1&&(h=Nt),this.each(function(){l.event.remove(this,s,h,c)})}});var Da=/<script|<style|<link/i,qn=/checked\s*(?:[^=]|=\s*.checked.)/i,Na=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function to(s,c){return C(s,"table")&&C(c.nodeType!==11?c:c.firstChild,"tr")&&l(s).children("tbody")[0]||s}function ri(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function no(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function ii(s,c){var h,f,m,y,v,R,A;if(c.nodeType===1){if(oe.hasData(s)&&(y=oe.get(s),A=y.events,A)){oe.remove(c,"handle events");for(m in A)for(h=0,f=A[m].length;h<f;h++)l.event.add(c,m,A[m][h])}xe.hasData(s)&&(v=xe.access(s),R=l.extend({},v),xe.set(c,R))}}function si(s,c){var h=c.nodeName.toLowerCase();h==="input"&&_n.test(s.type)?c.checked=s.checked:(h==="input"||h==="textarea")&&(c.defaultValue=s.defaultValue)}function Et(s,c,h,f){c=u(c);var m,y,v,R,A,x,B=0,z=s.length,U=z-1,J=c[0],he=L(J);if(he||z>1&&typeof J=="string"&&!H.checkClone&&qn.test(J))return s.each(function(Ie){var pe=s.eq(Ie);he&&(c[0]=J.call(this,Ie,pe.html())),Et(pe,c,h,f)});if(z&&(m=Qi(c,s[0].ownerDocument,!1,s,f),y=m.firstChild,m.childNodes.length===1&&(m=y),y||f)){for(v=l.map(Ze(m,"script"),ri),R=v.length;B<z;B++)A=m,B!==U&&(A=l.clone(A,!0,!0),R&&l.merge(v,Ze(A,"script"))),h.call(s[B],A,B);if(R)for(x=v[v.length-1].ownerDocument,l.map(v,no),B=0;B<R;B++)A=v[B],Zt.test(A.type||"")&&!oe.access(A,"globalEval")&&l.contains(x,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},x):ue(A.textContent.replace(Na,""),A,x))}return s}function Xi(s,c,h){for(var f,m=c?l.filter(c,s):s,y=0;(f=m[y])!=null;y++)!h&&f.nodeType===1&&l.cleanData(Ze(f)),f.parentNode&&(h&&Jt(f)&&ti(Ze(f,"script")),f.parentNode.removeChild(f));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,c,h){var f,m,y,v,R=s.cloneNode(!0),A=Jt(s);if(!H.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(v=Ze(R),y=Ze(s),f=0,m=y.length;f<m;f++)si(y[f],v[f]);if(c)if(h)for(y=y||Ze(s),v=v||Ze(R),f=0,m=y.length;f<m;f++)ii(y[f],v[f]);else ii(s,R);return v=Ze(R,"script"),v.length>0&&ti(v,!A&&Ze(s,"script")),R},cleanData:function(s){for(var c,h,f,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(mn(h)){if(c=h[oe.expando]){if(c.events)for(f in c.events)m[f]?l.event.remove(h,f):l.removeEvent(h,f,c.handle);h[oe.expando]=void 0}h[xe.expando]&&(h[xe.expando]=void 0)}}}),l.fn.extend({detach:function(s){return Xi(this,s,!0)},remove:function(s){return Xi(this,s)},text:function(s){return Bt(this,function(c){return c===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,s,arguments.length)},append:function(){return Et(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=to(this,s);c.appendChild(s)}})},prepend:function(){return Et(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=to(this,s);c.insertBefore(s,c.firstChild)}})},before:function(){return Et(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return Et(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,c=0;(s=this[c])!=null;c++)s.nodeType===1&&(l.cleanData(Ze(s,!1)),s.textContent="");return this},clone:function(s,c){return s=s??!1,c=c??s,this.map(function(){return l.clone(this,s,c)})},html:function(s){return Bt(this,function(c){var h=this[0]||{},f=0,m=this.length;if(c===void 0&&h.nodeType===1)return h.innerHTML;if(typeof c=="string"&&!Da.test(c)&&!vt[(ei.exec(c)||["",""])[1].toLowerCase()]){c=l.htmlPrefilter(c);try{for(;f<m;f++)h=this[f]||{},h.nodeType===1&&(l.cleanData(Ze(h,!1)),h.innerHTML=c);h=0}catch{}}h&&this.empty().append(c)},null,s,arguments.length)},replaceWith:function(){var s=[];return Et(this,arguments,function(c){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(Ze(this)),h&&h.replaceChild(c,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,c){l.fn[s]=function(h){for(var f,m=[],y=l(h),v=y.length-1,R=0;R<=v;R++)f=R===v?this:this.clone(!0),l(y[R])[c](f),p.apply(m,f.get());return this.pushStack(m)}});var oi=new RegExp("^("+Zs+")(?!px)[a-z%]+$","i"),_r=/^--/,Bn=function(s){var c=s.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(s)},Yi=function(s,c,h){var f,m,y={};for(m in c)y[m]=s.style[m],s.style[m]=c[m];f=h.call(s);for(m in c)s.style[m]=y[m];return f},ro=new RegExp(xt.join("|"),"i");(function(){function s(){if(x){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",x.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Yt.appendChild(A).appendChild(x);var B=e.getComputedStyle(x);h=B.top!=="1%",R=c(B.marginLeft)===12,x.style.right="60%",y=c(B.right)===36,f=c(B.width)===36,x.style.position="absolute",m=c(x.offsetWidth/3)===12,Yt.removeChild(A),x=null}}function c(B){return Math.round(parseFloat(B))}var h,f,m,y,v,R,A=G.createElement("div"),x=G.createElement("div");x.style&&(x.style.backgroundClip="content-box",x.cloneNode(!0).style.backgroundClip="",H.clearCloneStyle=x.style.backgroundClip==="content-box",l.extend(H,{boxSizingReliable:function(){return s(),f},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var B,z,U,J;return v==null&&(B=G.createElement("table"),z=G.createElement("tr"),U=G.createElement("div"),B.style.cssText="position:absolute;left:-11111px;border-collapse:separate",z.style.cssText="box-sizing:content-box;border:1px solid",z.style.height="1px",U.style.height="9px",U.style.display="block",Yt.appendChild(B).appendChild(z).appendChild(U),J=e.getComputedStyle(z),v=parseInt(J.height,10)+parseInt(J.borderTopWidth,10)+parseInt(J.borderBottomWidth,10)===z.offsetHeight,Yt.removeChild(B)),v}}))})();function vr(s,c,h){var f,m,y,v,R=_r.test(c),A=s.style;return h=h||Bn(s),h&&(v=h.getPropertyValue(c)||h[c],R&&v&&(v=v.replace(mt,"$1")||void 0),v===""&&!Jt(s)&&(v=l.style(s,c)),!H.pixelBoxStyles()&&oi.test(v)&&ro.test(c)&&(f=A.width,m=A.minWidth,y=A.maxWidth,A.minWidth=A.maxWidth=A.width=v,v=h.width,A.width=f,A.minWidth=m,A.maxWidth=y)),v!==void 0?v+"":v}function Er(s,c){return{get:function(){if(s()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var Ji=["Webkit","Moz","ms"],ai=G.createElement("div").style,$n={};function Tn(s){for(var c=s[0].toUpperCase()+s.slice(1),h=Ji.length;h--;)if(s=Ji[h]+c,s in ai)return s}function Tr(s){var c=l.cssProps[s]||$n[s];return c||(s in ai?s:$n[s]=Tn(s)||s)}var Va=/^(none|table(?!-c[ea]).+)/,io={position:"absolute",visibility:"hidden",display:"block"},Zi={letterSpacing:"0",fontWeight:"400"};function es(s,c,h){var f=$t.exec(c);return f?Math.max(0,f[2]-(h||0))+(f[3]||"px"):c}function wr(s,c,h,f,m,y){var v=c==="width"?1:0,R=0,A=0,x=0;if(h===(f?"border":"content"))return 0;for(;v<4;v+=2)h==="margin"&&(x+=l.css(s,h+xt[v],!0,m)),f?(h==="content"&&(A-=l.css(s,"padding"+xt[v],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+xt[v]+"Width",!0,m))):(A+=l.css(s,"padding"+xt[v],!0,m),h!=="padding"?A+=l.css(s,"border"+xt[v]+"Width",!0,m):R+=l.css(s,"border"+xt[v]+"Width",!0,m));return!f&&y>=0&&(A+=Math.max(0,Math.ceil(s["offset"+c[0].toUpperCase()+c.slice(1)]-y-A-R-.5))||0),A+x}function ci(s,c,h){var f=Bn(s),m=!H.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,f)==="border-box",v=y,R=vr(s,c,f),A="offset"+c[0].toUpperCase()+c.slice(1);if(oi.test(R)){if(!h)return R;R="auto"}return(!H.boxSizingReliable()&&y||!H.reliableTrDimensions()&&C(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,f)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,f)==="border-box",v=A in s,v&&(R=s[A])),R=parseFloat(R)||0,R+wr(s,c,h||(y?"border":"content"),v,f,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,c){if(c){var h=vr(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,c,h,f){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,v,R=kt(c),A=_r.test(c),x=s.style;if(A||(c=Tr(R)),v=l.cssHooks[c]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=$t.exec(h))&&m[1]&&(h=Zr(s,c,m),y="number"),h==null||h!==h)return;y==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!H.clearCloneStyle&&h===""&&c.indexOf("background")===0&&(x[c]="inherit"),(!v||!("set"in v)||(h=v.set(s,h,f))!==void 0)&&(A?x.setProperty(c,h):x[c]=h)}else return v&&"get"in v&&(m=v.get(s,!1,f))!==void 0?m:x[c]}},css:function(s,c,h,f){var m,y,v,R=kt(c),A=_r.test(c);return A||(c=Tr(R)),v=l.cssHooks[c]||l.cssHooks[R],v&&"get"in v&&(m=v.get(s,!0,h)),m===void 0&&(m=vr(s,c,f)),m==="normal"&&c in Zi&&(m=Zi[c]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,c){l.cssHooks[c]={get:function(h,f,m){if(f)return Va.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Yi(h,io,function(){return ci(h,c,m)}):ci(h,c,m)},set:function(h,f,m){var y,v=Bn(h),R=!H.scrollboxSize()&&v.position==="absolute",A=R||m,x=A&&l.css(h,"boxSizing",!1,v)==="border-box",B=m?wr(h,c,m,x,v):0;return x&&R&&(B-=Math.ceil(h["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(v[c])-wr(h,c,"border",!1,v)-.5)),B&&(y=$t.exec(f))&&(y[3]||"px")!=="px"&&(h.style[c]=f,f=l.css(h,c)),es(h,f,B)}}}),l.cssHooks.marginLeft=Er(H.reliableMarginLeft,function(s,c){if(c)return(parseFloat(vr(s,"marginLeft"))||s.getBoundingClientRect().left-Yi(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,c){l.cssHooks[s+c]={expand:function(h){for(var f=0,m={},y=typeof h=="string"?h.split(" "):[h];f<4;f++)m[s+xt[f]+c]=y[f]||y[f-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+c].set=es)}),l.fn.extend({css:function(s,c){return Bt(this,function(h,f,m){var y,v,R={},A=0;if(Array.isArray(f)){for(y=Bn(h),v=f.length;A<v;A++)R[f[A]]=l.css(h,f[A],!1,y);return R}return m!==void 0?l.style(h,f,m):l.css(h,f)},s,c,arguments.length>1)}});function ot(s,c,h,f,m){return new ot.prototype.init(s,c,h,f,m)}l.Tween=ot,ot.prototype={constructor:ot,init:function(s,c,h,f,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=f,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=ot.propHooks[this.prop];return s&&s.get?s.get(this):ot.propHooks._default.get(this)},run:function(s){var c,h=ot.propHooks[this.prop];return this.options.duration?this.pos=c=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=c=s,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(s){var c;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(c=l.css(s.elem,s.prop,""),!c||c==="auto"?0:c)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[Tr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=ot.prototype.init,l.fx.step={};var wn,ui,Oa=/^(?:toggle|show|hide)$/,so=/queueHooks$/;function li(){ui&&(G.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(li):e.setTimeout(li,l.fx.interval),l.fx.tick())}function oo(){return e.setTimeout(function(){wn=void 0}),wn=Date.now()}function Vt(s,c){var h,f=0,m={height:s};for(c=c?1:0;f<4;f+=2-c)h=xt[f],m["margin"+h]=m["padding"+h]=s;return c&&(m.opacity=m.width=s),m}function Ot(s,c,h){for(var f,m=(It.tweeners[c]||[]).concat(It.tweeners["*"]),y=0,v=m.length;y<v;y++)if(f=m[y].call(h,c,s))return f}function hi(s,c,h){var f,m,y,v,R,A,x,B,z="width"in c||"height"in c,U=this,J={},he=s.style,Ie=s.nodeType&&Jr(s),pe=oe.get(s,"fxshow");h.queue||(v=l._queueHooks(s,"fx"),v.unqueued==null&&(v.unqueued=0,R=v.empty.fire,v.empty.fire=function(){v.unqueued||R()}),v.unqueued++,U.always(function(){U.always(function(){v.unqueued--,l.queue(s,"fx").length||v.empty.fire()})}));for(f in c)if(m=c[f],Oa.test(m)){if(delete c[f],y=y||m==="toggle",m===(Ie?"hide":"show"))if(m==="show"&&pe&&pe[f]!==void 0)Ie=!0;else continue;J[f]=pe&&pe[f]||l.style(s,f)}if(A=!l.isEmptyObject(c),!(!A&&l.isEmptyObject(J))){z&&s.nodeType===1&&(h.overflow=[he.overflow,he.overflowX,he.overflowY],x=pe&&pe.display,x==null&&(x=oe.get(s,"display")),B=l.css(s,"display"),B==="none"&&(x?B=x:(Dt([s],!0),x=s.style.display||x,B=l.css(s,"display"),Dt([s]))),(B==="inline"||B==="inline-block"&&x!=null)&&l.css(s,"float")==="none"&&(A||(U.done(function(){he.display=x}),x==null&&(B=he.display,x=B==="none"?"":B)),he.display="inline-block")),h.overflow&&(he.overflow="hidden",U.always(function(){he.overflow=h.overflow[0],he.overflowX=h.overflow[1],he.overflowY=h.overflow[2]})),A=!1;for(f in J)A||(pe?"hidden"in pe&&(Ie=pe.hidden):pe=oe.access(s,"fxshow",{display:x}),y&&(pe.hidden=!Ie),Ie&&Dt([s],!0),U.done(function(){Ie||Dt([s]),oe.remove(s,"fxshow");for(f in J)l.style(s,f,J[f])})),A=Ot(Ie?pe[f]:0,f,U),f in pe||(pe[f]=A.start,Ie&&(A.end=A.start,A.start=0))}}function di(s,c){var h,f,m,y,v;for(h in s)if(f=kt(h),m=c[f],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==f&&(s[f]=y,delete s[h]),v=l.cssHooks[f],v&&"expand"in v){y=v.expand(y),delete s[f];for(h in y)h in s||(s[h]=y[h],c[h]=m)}else c[f]=m}function It(s,c,h){var f,m,y=0,v=It.prefilters.length,R=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var z=wn||oo(),U=Math.max(0,x.startTime+x.duration-z),J=U/x.duration||0,he=1-J,Ie=0,pe=x.tweens.length;Ie<pe;Ie++)x.tweens[Ie].run(he);return R.notifyWith(s,[x,he,U]),he<1&&pe?U:(pe||R.notifyWith(s,[x,1,0]),R.resolveWith(s,[x]),!1)},x=R.promise({elem:s,props:l.extend({},c),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:c,originalOptions:h,startTime:wn||oo(),duration:h.duration,tweens:[],createTween:function(z,U){var J=l.Tween(s,x.opts,z,U,x.opts.specialEasing[z]||x.opts.easing);return x.tweens.push(J),J},stop:function(z){var U=0,J=z?x.tweens.length:0;if(m)return this;for(m=!0;U<J;U++)x.tweens[U].run(1);return z?(R.notifyWith(s,[x,1,0]),R.resolveWith(s,[x,z])):R.rejectWith(s,[x,z]),this}}),B=x.props;for(di(B,x.opts.specialEasing);y<v;y++)if(f=It.prefilters[y].call(x,s,B,x.opts),f)return L(f.stop)&&(l._queueHooks(x.elem,x.opts.queue).stop=f.stop.bind(f)),f;return l.map(B,Ot,x),L(x.opts.start)&&x.opts.start.call(s,x),x.progress(x.opts.progress).done(x.opts.done,x.opts.complete).fail(x.opts.fail).always(x.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:x,queue:x.opts.queue})),x}l.Animation=l.extend(It,{tweeners:{"*":[function(s,c){var h=this.createTween(s,c);return Zr(h.elem,s,$t.exec(c),h),h}]},tweener:function(s,c){L(s)?(c=s,s=["*"]):s=s.match(_t);for(var h,f=0,m=s.length;f<m;f++)h=s[f],It.tweeners[h]=It.tweeners[h]||[],It.tweeners[h].unshift(c)},prefilters:[hi],prefilter:function(s,c){c?It.prefilters.unshift(s):It.prefilters.push(s)}}),l.speed=function(s,c,h){var f=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&c||L(s)&&s,duration:s,easing:h&&c||c&&!L(c)&&c};return l.fx.off?f.duration=0:typeof f.duration!="number"&&(f.duration in l.fx.speeds?f.duration=l.fx.speeds[f.duration]:f.duration=l.fx.speeds._default),(f.queue==null||f.queue===!0)&&(f.queue="fx"),f.old=f.complete,f.complete=function(){L(f.old)&&f.old.call(this),f.queue&&l.dequeue(this,f.queue)},f},l.fn.extend({fadeTo:function(s,c,h,f){return this.filter(Jr).css("opacity",0).show().end().animate({opacity:c},s,h,f)},animate:function(s,c,h,f){var m=l.isEmptyObject(s),y=l.speed(c,h,f),v=function(){var R=It(this,l.extend({},s),y);(m||oe.get(this,"finish"))&&R.stop(!0)};return v.finish=v,m||y.queue===!1?this.each(v):this.queue(y.queue,v)},stop:function(s,c,h){var f=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=c,c=s,s=void 0),c&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",v=l.timers,R=oe.get(this);if(y)R[y]&&R[y].stop&&f(R[y]);else for(y in R)R[y]&&R[y].stop&&so.test(y)&&f(R[y]);for(y=v.length;y--;)v[y].elem===this&&(s==null||v[y].queue===s)&&(v[y].anim.stop(h),m=!1,v.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var c,h=oe.get(this),f=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,v=f?f.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),c=y.length;c--;)y[c].elem===this&&y[c].queue===s&&(y[c].anim.stop(!0),y.splice(c,1));for(c=0;c<v;c++)f[c]&&f[c].finish&&f[c].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,c){var h=l.fn[c];l.fn[c]=function(f,m,y){return f==null||typeof f=="boolean"?h.apply(this,arguments):this.animate(Vt(c,!0),f,m,y)}}),l.each({slideDown:Vt("show"),slideUp:Vt("hide"),slideToggle:Vt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,c){l.fn[s]=function(h,f,m){return this.animate(c,h,f,m)}}),l.timers=[],l.fx.tick=function(){var s,c=0,h=l.timers;for(wn=Date.now();c<h.length;c++)s=h[c],!s()&&h[c]===s&&h.splice(c--,1);h.length||l.fx.stop(),wn=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){ui||(ui=!0,li())},l.fx.stop=function(){ui=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,c){return s=l.fx&&l.fx.speeds[s]||s,c=c||"fx",this.queue(c,function(h,f){var m=e.setTimeout(h,s);f.stop=function(){e.clearTimeout(m)}})},(function(){var s=G.createElement("input"),c=G.createElement("select"),h=c.appendChild(G.createElement("option"));s.type="checkbox",H.checkOn=s.value!=="",H.optSelected=h.selected,s=G.createElement("input"),s.value="t",s.type="radio",H.radioValue=s.value==="t"})();var Ve,en=l.expr.attrHandle;l.fn.extend({attr:function(s,c){return Bt(this,l.attr,s,c,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,c,h){var f,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,c,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[c.toLowerCase()]||(l.expr.match.bool.test(c)?Ve:void 0)),h!==void 0){if(h===null){l.removeAttr(s,c);return}return m&&"set"in m&&(f=m.set(s,h,c))!==void 0?f:(s.setAttribute(c,h+""),h)}return m&&"get"in m&&(f=m.get(s,c))!==null?f:(f=l.find.attr(s,c),f??void 0)}},attrHooks:{type:{set:function(s,c){if(!H.radioValue&&c==="radio"&&C(s,"input")){var h=s.value;return s.setAttribute("type",c),h&&(s.value=h),c}}}},removeAttr:function(s,c){var h,f=0,m=c&&c.match(_t);if(m&&s.nodeType===1)for(;h=m[f++];)s.removeAttribute(h)}}),Ve={set:function(s,c,h){return c===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,c){var h=en[c]||l.find.attr;en[c]=function(f,m,y){var v,R,A=m.toLowerCase();return y||(R=en[A],en[A]=v,v=h(f,m,y)!=null?A:null,en[A]=R),v}});var Ir=/^(?:input|select|textarea|button)$/i,Ar=/^(?:a|area)$/i;l.fn.extend({prop:function(s,c){return Bt(this,l.prop,s,c,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,c,h){var f,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(c=l.propFix[c]||c,m=l.propHooks[c]),h!==void 0?m&&"set"in m&&(f=m.set(s,h,c))!==void 0?f:s[c]=h:m&&"get"in m&&(f=m.get(s,c))!==null?f:s[c]},propHooks:{tabIndex:{get:function(s){var c=l.find.attr(s,"tabindex");return c?parseInt(c,10):Ir.test(s.nodeName)||Ar.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),H.optSelected||(l.propHooks.selected={get:function(s){var c=s.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(s){var c=s.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function In(s){var c=s.match(_t)||[];return c.join(" ")}function tn(s){return s.getAttribute&&s.getAttribute("class")||""}function ts(s){return Array.isArray(s)?s:typeof s=="string"?s.match(_t)||[]:[]}l.fn.extend({addClass:function(s){var c,h,f,m,y,v;return L(s)?this.each(function(R){l(this).addClass(s.call(this,R,tn(this)))}):(c=ts(s),c.length?this.each(function(){if(f=tn(this),h=this.nodeType===1&&" "+In(f)+" ",h){for(y=0;y<c.length;y++)m=c[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");v=In(h),f!==v&&this.setAttribute("class",v)}}):this)},removeClass:function(s){var c,h,f,m,y,v;return L(s)?this.each(function(R){l(this).removeClass(s.call(this,R,tn(this)))}):arguments.length?(c=ts(s),c.length?this.each(function(){if(f=tn(this),h=this.nodeType===1&&" "+In(f)+" ",h){for(y=0;y<c.length;y++)for(m=c[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");v=In(h),f!==v&&this.setAttribute("class",v)}}):this):this.attr("class","")},toggleClass:function(s,c){var h,f,m,y,v=typeof s,R=v==="string"||Array.isArray(s);return L(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,tn(this),c),c)}):typeof c=="boolean"&&R?c?this.addClass(s):this.removeClass(s):(h=ts(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)f=h[m],y.hasClass(f)?y.removeClass(f):y.addClass(f);else(s===void 0||v==="boolean")&&(f=tn(this),f&&oe.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||s===!1?"":oe.get(this,"__className__")||""))}))},hasClass:function(s){var c,h,f=0;for(c=" "+s+" ";h=this[f++];)if(h.nodeType===1&&(" "+In(tn(h))+" ").indexOf(c)>-1)return!0;return!1}});var La=/\r/g;l.fn.extend({val:function(s){var c,h,f,m=this[0];return arguments.length?(f=L(s),this.each(function(y){var v;this.nodeType===1&&(f?v=s.call(this,y,l(this).val()):v=s,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=l.map(v,function(R){return R==null?"":R+""})),c=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,v,"value")===void 0)&&(this.value=v))})):m?(c=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],c&&"get"in c&&(h=c.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(La,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var c=l.find.attr(s,"value");return c??In(l.text(s))}},select:{get:function(s){var c,h,f,m=s.options,y=s.selectedIndex,v=s.type==="select-one",R=v?null:[],A=v?y+1:m.length;for(y<0?f=A:f=v?y:0;f<A;f++)if(h=m[f],(h.selected||f===y)&&!h.disabled&&(!h.parentNode.disabled||!C(h.parentNode,"optgroup"))){if(c=l(h).val(),v)return c;R.push(c)}return R},set:function(s,c){for(var h,f,m=s.options,y=l.makeArray(c),v=m.length;v--;)f=m[v],(f.selected=l.inArray(l.valHooks.option.get(f),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,c){if(Array.isArray(c))return s.checked=l.inArray(l(s).val(),c)>-1}},H.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var br=e.location,ao={guid:Date.now()},An=/\?/;l.parseXML=function(s){var c,h;if(!s||typeof s!="string")return null;try{c=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=c&&c.getElementsByTagName("parsererror")[0],(!c||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(f){return f.textContent}).join(`
`):s)),c};var Ht=/^(?:focusinfocus|focusoutblur)$/,ns=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,c,h,f){var m,y,v,R,A,x,B,z,U=[h||G],J=k.call(s,"type")?s.type:s,he=k.call(s,"namespace")?s.namespace.split("."):[];if(y=z=v=h=h||G,!(h.nodeType===3||h.nodeType===8)&&!Ht.test(J+l.event.triggered)&&(J.indexOf(".")>-1&&(he=J.split("."),J=he.shift(),he.sort()),A=J.indexOf(":")<0&&"on"+J,s=s[l.expando]?s:new l.Event(J,typeof s=="object"&&s),s.isTrigger=f?2:3,s.namespace=he.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+he.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),c=c==null?[s]:l.makeArray(c,[s]),B=l.event.special[J]||{},!(!f&&B.trigger&&B.trigger.apply(h,c)===!1))){if(!f&&!B.noBubble&&!Q(h)){for(R=B.delegateType||J,Ht.test(R+J)||(y=y.parentNode);y;y=y.parentNode)U.push(y),v=y;v===(h.ownerDocument||G)&&U.push(v.defaultView||v.parentWindow||e)}for(m=0;(y=U[m++])&&!s.isPropagationStopped();)z=y,s.type=m>1?R:B.bindType||J,x=(oe.get(y,"events")||Object.create(null))[s.type]&&oe.get(y,"handle"),x&&x.apply(y,c),x=A&&y[A],x&&x.apply&&mn(y)&&(s.result=x.apply(y,c),s.result===!1&&s.preventDefault());return s.type=J,!f&&!s.isDefaultPrevented()&&(!B._default||B._default.apply(U.pop(),c)===!1)&&mn(h)&&A&&L(h[J])&&!Q(h)&&(v=h[A],v&&(h[A]=null),l.event.triggered=J,s.isPropagationStopped()&&z.addEventListener(J,ns),h[J](),s.isPropagationStopped()&&z.removeEventListener(J,ns),l.event.triggered=void 0,v&&(h[A]=v)),s.result}},simulate:function(s,c,h){var f=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(f,null,c)}}),l.fn.extend({trigger:function(s,c){return this.each(function(){l.event.trigger(s,c,this)})},triggerHandler:function(s,c){var h=this[0];if(h)return l.event.trigger(s,c,h,!0)}});var co=/\[\]$/,rs=/\r?\n/g,Hn=/^(?:submit|button|image|reset|file)$/i,Ma=/^(?:input|select|textarea|keygen)/i;function is(s,c,h,f){var m;if(Array.isArray(c))l.each(c,function(y,v){h||co.test(s)?f(s,v):is(s+"["+(typeof v=="object"&&v!=null?y:"")+"]",v,h,f)});else if(!h&&we(c)==="object")for(m in c)is(s+"["+m+"]",c[m],h,f);else f(s,c)}l.param=function(s,c){var h,f=[],m=function(y,v){var R=L(v)?v():v;f[f.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)is(h,s[h],c,m);return f.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Ma.test(this.nodeName)&&!Hn.test(s)&&(this.checked||!_n.test(s))}).map(function(s,c){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(f){return{name:c.name,value:f.replace(rs,`\r
`)}}):{name:c.name,value:h.replace(rs,`\r
`)}}).get()}});var Fa=/%20/g,nn=/#.*$/,Ua=/([?&])_=[^&]*/,ja=/^(.*?):[ \t]*([^\r\n]*)$/mg,fi=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pi=/^(?:GET|HEAD)$/,uo=/^\/\//,zn={},bn={},ss="*/".concat("*"),Cr=G.createElement("a");Cr.href=br.href;function Fe(s){return function(c,h){typeof c!="string"&&(h=c,c="*");var f,m=0,y=c.toLowerCase().match(_t)||[];if(L(h))for(;f=y[m++];)f[0]==="+"?(f=f.slice(1)||"*",(s[f]=s[f]||[]).unshift(h)):(s[f]=s[f]||[]).push(h)}}function lo(s,c,h,f){var m={},y=s===bn;function v(R){var A;return m[R]=!0,l.each(s[R]||[],function(x,B){var z=B(c,h,f);if(typeof z=="string"&&!y&&!m[z])return c.dataTypes.unshift(z),v(z),!1;if(y)return!(A=z)}),A}return v(c.dataTypes[0])||!m["*"]&&v("*")}function os(s,c){var h,f,m=l.ajaxSettings.flatOptions||{};for(h in c)c[h]!==void 0&&((m[h]?s:f||(f={}))[h]=c[h]);return f&&l.extend(!0,s,f),s}function ho(s,c,h){for(var f,m,y,v,R=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),f===void 0&&(f=s.mimeType||c.getResponseHeader("Content-Type"));if(f){for(m in R)if(R[m]&&R[m].test(f)){A.unshift(m);break}}if(A[0]in h)y=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){y=m;break}v||(v=m)}y=y||v}if(y)return y!==A[0]&&A.unshift(y),h[y]}function fo(s,c,h,f){var m,y,v,R,A,x={},B=s.dataTypes.slice();if(B[1])for(v in s.converters)x[v.toLowerCase()]=s.converters[v];for(y=B.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=c),!A&&f&&s.dataFilter&&(c=s.dataFilter(c,s.dataType)),A=y,y=B.shift(),y){if(y==="*")y=A;else if(A!=="*"&&A!==y){if(v=x[A+" "+y]||x["* "+y],!v){for(m in x)if(R=m.split(" "),R[1]===y&&(v=x[A+" "+R[0]]||x["* "+R[0]],v)){v===!0?v=x[m]:x[m]!==!0&&(y=R[0],B.unshift(R[1]));break}}if(v!==!0)if(v&&s.throws)c=v(c);else try{c=v(c)}catch(z){return{state:"parsererror",error:v?z:"No conversion from "+A+" to "+y}}}}return{state:"success",data:c}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:br.href,type:"GET",isLocal:fi.test(br.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ss,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,c){return c?os(os(s,l.ajaxSettings),c):os(l.ajaxSettings,s)},ajaxPrefilter:Fe(zn),ajaxTransport:Fe(bn),ajax:function(s,c){typeof s=="object"&&(c=s,s=void 0),c=c||{};var h,f,m,y,v,R,A,x,B,z,U=l.ajaxSetup({},c),J=U.context||U,he=U.context&&(J.nodeType||J.jquery)?l(J):l.event,Ie=l.Deferred(),pe=l.Callbacks("once memory"),Ke=U.statusCode||{},$e={},St={},Rt="canceled",Ee={readyState:0,getResponseHeader:function(Ce){var Ue;if(A){if(!y)for(y={};Ue=ja.exec(m);)y[Ue[1].toLowerCase()+" "]=(y[Ue[1].toLowerCase()+" "]||[]).concat(Ue[2]);Ue=y[Ce.toLowerCase()+" "]}return Ue==null?null:Ue.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(Ce,Ue){return A==null&&(Ce=St[Ce.toLowerCase()]=St[Ce.toLowerCase()]||Ce,$e[Ce]=Ue),this},overrideMimeType:function(Ce){return A==null&&(U.mimeType=Ce),this},statusCode:function(Ce){var Ue;if(Ce)if(A)Ee.always(Ce[Ee.status]);else for(Ue in Ce)Ke[Ue]=[Ke[Ue],Ce[Ue]];return this},abort:function(Ce){var Ue=Ce||Rt;return h&&h.abort(Ue),He(0,Ue),this}};if(Ie.promise(Ee),U.url=((s||U.url||br.href)+"").replace(uo,br.protocol+"//"),U.type=c.method||c.type||U.method||U.type,U.dataTypes=(U.dataType||"*").toLowerCase().match(_t)||[""],U.crossDomain==null){R=G.createElement("a");try{R.href=U.url,R.href=R.href,U.crossDomain=Cr.protocol+"//"+Cr.host!=R.protocol+"//"+R.host}catch{U.crossDomain=!0}}if(U.data&&U.processData&&typeof U.data!="string"&&(U.data=l.param(U.data,U.traditional)),lo(zn,U,c,Ee),A)return Ee;x=l.event&&U.global,x&&l.active++===0&&l.event.trigger("ajaxStart"),U.type=U.type.toUpperCase(),U.hasContent=!pi.test(U.type),f=U.url.replace(nn,""),U.hasContent?U.data&&U.processData&&(U.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(U.data=U.data.replace(Fa,"+")):(z=U.url.slice(f.length),U.data&&(U.processData||typeof U.data=="string")&&(f+=(An.test(f)?"&":"?")+U.data,delete U.data),U.cache===!1&&(f=f.replace(Ua,"$1"),z=(An.test(f)?"&":"?")+"_="+ao.guid+++z),U.url=f+z),U.ifModified&&(l.lastModified[f]&&Ee.setRequestHeader("If-Modified-Since",l.lastModified[f]),l.etag[f]&&Ee.setRequestHeader("If-None-Match",l.etag[f])),(U.data&&U.hasContent&&U.contentType!==!1||c.contentType)&&Ee.setRequestHeader("Content-Type",U.contentType),Ee.setRequestHeader("Accept",U.dataTypes[0]&&U.accepts[U.dataTypes[0]]?U.accepts[U.dataTypes[0]]+(U.dataTypes[0]!=="*"?", "+ss+"; q=0.01":""):U.accepts["*"]);for(B in U.headers)Ee.setRequestHeader(B,U.headers[B]);if(U.beforeSend&&(U.beforeSend.call(J,Ee,U)===!1||A))return Ee.abort();if(Rt="abort",pe.add(U.complete),Ee.done(U.success),Ee.fail(U.error),h=lo(bn,U,c,Ee),!h)He(-1,"No Transport");else{if(Ee.readyState=1,x&&he.trigger("ajaxSend",[Ee,U]),A)return Ee;U.async&&U.timeout>0&&(v=e.setTimeout(function(){Ee.abort("timeout")},U.timeout));try{A=!1,h.send($e,He)}catch(Ce){if(A)throw Ce;He(-1,Ce)}}function He(Ce,Ue,Lt,o){var d,g,T,O,j,Z=Ue;A||(A=!0,v&&e.clearTimeout(v),h=void 0,m=o||"",Ee.readyState=Ce>0?4:0,d=Ce>=200&&Ce<300||Ce===304,Lt&&(O=ho(U,Ee,Lt)),!d&&l.inArray("script",U.dataTypes)>-1&&l.inArray("json",U.dataTypes)<0&&(U.converters["text script"]=function(){}),O=fo(U,O,Ee,d),d?(U.ifModified&&(j=Ee.getResponseHeader("Last-Modified"),j&&(l.lastModified[f]=j),j=Ee.getResponseHeader("etag"),j&&(l.etag[f]=j)),Ce===204||U.type==="HEAD"?Z="nocontent":Ce===304?Z="notmodified":(Z=O.state,g=O.data,T=O.error,d=!T)):(T=Z,(Ce||!Z)&&(Z="error",Ce<0&&(Ce=0))),Ee.status=Ce,Ee.statusText=(Ue||Z)+"",d?Ie.resolveWith(J,[g,Z,Ee]):Ie.rejectWith(J,[Ee,Z,T]),Ee.statusCode(Ke),Ke=void 0,x&&he.trigger(d?"ajaxSuccess":"ajaxError",[Ee,U,d?g:T]),pe.fireWith(J,[Ee,Z]),x&&(he.trigger("ajaxComplete",[Ee,U]),--l.active||l.event.trigger("ajaxStop")))}return Ee},getJSON:function(s,c,h){return l.get(s,c,h,"json")},getScript:function(s,c){return l.get(s,void 0,c,"script")}}),l.each(["get","post"],function(s,c){l[c]=function(h,f,m,y){return L(f)&&(y=y||m,m=f,f=void 0),l.ajax(l.extend({url:h,type:c,dataType:y,data:f,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var c;for(c in s.headers)c.toLowerCase()==="content-type"&&(s.contentType=s.headers[c]||"")}),l._evalUrl=function(s,c,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(f){l.globalEval(f,c,h)}})},l.fn.extend({wrapAll:function(s){var c;return this[0]&&(L(s)&&(s=s.call(this[0])),c=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return L(s)?this.each(function(c){l(this).wrapInner(s.call(this,c))}):this.each(function(){var c=l(this),h=c.contents();h.length?h.wrapAll(s):c.append(s)})},wrap:function(s){var c=L(s);return this.each(function(h){l(this).wrapAll(c?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var po={0:200,1223:204},rn=l.ajaxSettings.xhr();H.cors=!!rn&&"withCredentials"in rn,H.ajax=rn=!!rn,l.ajaxTransport(function(s){var c,h;if(H.cors||rn&&!s.crossDomain)return{send:function(f,m){var y,v=s.xhr();if(v.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)v[y]=s.xhrFields[y];s.mimeType&&v.overrideMimeType&&v.overrideMimeType(s.mimeType),!s.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");for(y in f)v.setRequestHeader(y,f[y]);c=function(R){return function(){c&&(c=h=v.onload=v.onerror=v.onabort=v.ontimeout=v.onreadystatechange=null,R==="abort"?v.abort():R==="error"?typeof v.status!="number"?m(0,"error"):m(v.status,v.statusText):m(po[v.status]||v.status,v.statusText,(v.responseType||"text")!=="text"||typeof v.responseText!="string"?{binary:v.response}:{text:v.responseText},v.getAllResponseHeaders()))}},v.onload=c(),h=v.onerror=v.ontimeout=c("error"),v.onabort!==void 0?v.onabort=h:v.onreadystatechange=function(){v.readyState===4&&e.setTimeout(function(){c&&h()})},c=c("abort");try{v.send(s.hasContent&&s.data||null)}catch(R){if(c)throw R}},abort:function(){c&&c()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var c,h;return{send:function(f,m){c=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){c.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),G.head.appendChild(c[0])},abort:function(){h&&h()}}}});var as=[],Ct=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=as.pop()||l.expando+"_"+ao.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,c,h){var f,m,y,v=s.jsonp!==!1&&(Ct.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ct.test(s.data)&&"data");if(v||s.dataTypes[0]==="jsonp")return f=s.jsonpCallback=L(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,v?s[v]=s[v].replace(Ct,"$1"+f):s.jsonp!==!1&&(s.url+=(An.test(s.url)?"&":"?")+s.jsonp+"="+f),s.converters["script json"]=function(){return y||l.error(f+" was not called"),y[0]},s.dataTypes[0]="json",m=e[f],e[f]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(f):e[f]=m,s[f]&&(s.jsonpCallback=c.jsonpCallback,as.push(f)),y&&L(m)&&m(y[0]),y=m=void 0}),"script"}),H.createHTMLDocument=(function(){var s=G.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,c,h){if(typeof s!="string")return[];typeof c=="boolean"&&(h=c,c=!1);var f,m,y;return c||(H.createHTMLDocument?(c=G.implementation.createHTMLDocument(""),f=c.createElement("base"),f.href=G.location.href,c.head.appendChild(f)):c=G),m=qt.exec(s),y=!h&&[],m?[c.createElement(m[1])]:(m=Qi([s],c,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,c,h){var f,m,y,v=this,R=s.indexOf(" ");return R>-1&&(f=In(s.slice(R)),s=s.slice(0,R)),L(c)?(h=c,c=void 0):c&&typeof c=="object"&&(m="POST"),v.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:c}).done(function(A){y=arguments,v.html(f?l("<div>").append(l.parseHTML(A)).find(f):A)}).always(h&&function(A,x){v.each(function(){h.apply(this,y||[A.responseText,x,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(c){return s===c.elem}).length},l.offset={setOffset:function(s,c,h){var f,m,y,v,R,A,x,B=l.css(s,"position"),z=l(s),U={};B==="static"&&(s.style.position="relative"),R=z.offset(),y=l.css(s,"top"),A=l.css(s,"left"),x=(B==="absolute"||B==="fixed")&&(y+A).indexOf("auto")>-1,x?(f=z.position(),v=f.top,m=f.left):(v=parseFloat(y)||0,m=parseFloat(A)||0),L(c)&&(c=c.call(s,h,l.extend({},R))),c.top!=null&&(U.top=c.top-R.top+v),c.left!=null&&(U.left=c.left-R.left+m),"using"in c?c.using.call(s,U):z.css(U)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var c,h,f=this[0];if(f)return f.getClientRects().length?(c=f.getBoundingClientRect(),h=f.ownerDocument.defaultView,{top:c.top+h.pageYOffset,left:c.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,c,h,f=this[0],m={top:0,left:0};if(l.css(f,"position")==="fixed")c=f.getBoundingClientRect();else{for(c=this.offset(),h=f.ownerDocument,s=f.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==f&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:c.top-m.top-l.css(f,"marginTop",!0),left:c.left-m.left-l.css(f,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Yt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,c){var h=c==="pageYOffset";l.fn[s]=function(f){return Bt(this,function(m,y,v){var R;if(Q(m)?R=m:m.nodeType===9&&(R=m.defaultView),v===void 0)return R?R[c]:m[y];R?R.scrollTo(h?R.pageXOffset:v,h?v:R.pageYOffset):m[y]=v},s,f,arguments.length)}}),l.each(["top","left"],function(s,c){l.cssHooks[c]=Er(H.pixelPosition,function(h,f){if(f)return f=vr(h,c),oi.test(f)?l(h).position()[c]+"px":f})}),l.each({Height:"height",Width:"width"},function(s,c){l.each({padding:"inner"+s,content:c,"":"outer"+s},function(h,f){l.fn[f]=function(m,y){var v=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return Bt(this,function(A,x,B){var z;return Q(A)?f.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(z=A.documentElement,Math.max(A.body["scroll"+s],z["scroll"+s],A.body["offset"+s],z["offset"+s],z["client"+s])):B===void 0?l.css(A,x,R):l.style(A,x,B,R)},c,v?m:void 0,v)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,c){l.fn[c]=function(h){return this.on(c,h)}}),l.fn.extend({bind:function(s,c,h){return this.on(s,null,c,h)},unbind:function(s,c){return this.off(s,null,c)},delegate:function(s,c,h,f){return this.on(c,s,h,f)},undelegate:function(s,c,h){return arguments.length===1?this.off(s,"**"):this.off(c,s||"**",h)},hover:function(s,c){return this.on("mouseenter",s).on("mouseleave",c||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,c){l.fn[c]=function(h,f){return arguments.length>0?this.on(c,null,h,f):this.trigger(c)}});var go=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,c){var h,f,m;if(typeof c=="string"&&(h=s[c],c=s,s=h),!!L(s))return f=a.call(arguments,2),m=function(){return s.apply(c||this,f.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=C,l.isFunction=L,l.isWindow=Q,l.camelCase=kt,l.type=we,l.now=Date.now,l.isNumeric=function(s){var c=l.type(s);return(c==="number"||c==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(go,"$1")};var qa=e.jQuery,Sr=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=Sr),s&&e.jQuery===l&&(e.jQuery=qa),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Co)),Co.exports}var sp=ip();const $=np(sp),op=()=>{};var Pu={};/**
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
 */const uh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ap=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],u=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(u&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|u&63)}}return e.join("")},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],u=i+1<n.length,p=u?n[i+1]:0,_=i+2<n.length,E=_?n[i+2]:0,I=a>>2,k=(a&3)<<4|p>>4;let N=(p&15)<<2|E>>6,Y=E&63;_||(Y=64,u||(N=64)),r.push(t[I],t[k],t[N],t[Y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ap(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const E=i<n.length?t[n.charAt(i)]:64;++i;const k=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||E==null||k==null)throw new cp;const N=a<<2|p>>4;if(r.push(N),E!==64){const Y=p<<4&240|E>>2;if(r.push(Y),k!==64){const H=E<<6&192|k;r.push(H)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const up=function(n){const e=uh(n);return lh.encodeByteArray(e,!0)},Fo=function(n){return up(n).replace(/\./g,"")},hh=function(n){try{return lh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hp=()=>lp().__FIREBASE_DEFAULTS__,dp=()=>{if(typeof process>"u"||typeof Pu>"u")return;const n=Pu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hh(n[1]);return e&&JSON.parse(e)},sa=()=>{try{return op()||hp()||dp()||fp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dh=n=>sa()?.emulatorHosts?.[n],pp=n=>{const e=dh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fh=()=>sa()?.config,ph=n=>sa()?.[`_${n}`];/**
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
 */class gp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Li(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function mp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fo(JSON.stringify(t)),Fo(JSON.stringify(u)),""].join(".")}const gs={};function yp(){const n={prod:[],emulator:[]};for(const e of Object.keys(gs))gs[e]?n.emulator.push(e):n.prod.push(e);return n}function _p(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ku=!1;function mh(n,e){if(typeof window>"u"||typeof document>"u"||!Li(window.location.host)||gs[n]===e||gs[n]||ku)return;gs[n]=e;function t(N){return`__firebase__banner__${N}`}const r="__firebase__banner",a=yp().prod.length>0;function u(){const N=document.getElementById(r);N&&N.remove()}function p(N){N.style.display="flex",N.style.background="#7faaf0",N.style.position="fixed",N.style.bottom="5px",N.style.left="5px",N.style.padding=".5em",N.style.borderRadius="5px",N.style.alignItems="center"}function _(N,Y){N.setAttribute("width","24"),N.setAttribute("id",Y),N.setAttribute("height","24"),N.setAttribute("viewBox","0 0 24 24"),N.setAttribute("fill","none"),N.style.marginLeft="-6px"}function E(){const N=document.createElement("span");return N.style.cursor="pointer",N.style.marginLeft="16px",N.style.fontSize="24px",N.innerHTML=" &times;",N.onclick=()=>{ku=!0,u()},N}function I(N,Y){N.setAttribute("id",Y),N.innerText="Learn more",N.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",N.setAttribute("target","__blank"),N.style.paddingLeft="5px",N.style.textDecoration="underline"}function k(){const N=_p(r),Y=t("text"),H=document.getElementById(Y)||document.createElement("span"),L=t("learnmore"),Q=document.getElementById(L)||document.createElement("a"),G=t("preprendIcon"),se=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(N.created){const ue=N.element;p(ue),I(Q,L);const we=E();_(se,G),ue.append(se,H,Q,we),document.body.appendChild(ue)}a?(H.innerText="Preview backend disconnected.",se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",Y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Ep(){const n=sa()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ap(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bp(){return!Ep()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cp(){try{return typeof indexedDB=="object"}catch{return!1}}function Sp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Rp="FirebaseError";class Mn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Rp,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],u=a?Pp(a,r):"Error",p=`${this.serviceName}: ${u} (${i}).`;return new Mn(i,p,r)}}function Pp(n,e){return n.replace(kp,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kp=/\{\$([^}]+)}/g;function xp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],u=e[i];if(xu(a)&&xu(u)){if(!Vr(a,u))return!1}else if(a!==u)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function xu(n){return n!==null&&typeof n=="object"}/**
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
 */function Vs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function ls(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Dp(n,e){const t=new Np(n,e);return t.subscribe.bind(t)}class Np{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Vp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ga),i.error===void 0&&(i.error=Ga),i.complete===void 0&&(i.complete=Ga);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ga(){}/**
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
 */function gt(n){return n&&n._delegate?n._delegate:n}class Or{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class Op{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new gp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mp(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&u.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lp(n){return n===kr?void 0:n}function Mp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Op(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Se||(Se={}));const Up={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},jp=Se.INFO,qp={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Bp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=qp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=jp,this._logHandler=Bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Up[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const $p=(n,e)=>e.some(t=>n instanceof t);let Du,Nu;function Hp(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zp(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yh=new WeakMap,oc=new WeakMap,_h=new WeakMap,Ka=new WeakMap,Nc=new WeakMap;function Wp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(nr(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&yh.set(t,n)}).catch(()=>{}),Nc.set(e,n),e}function Gp(n){if(oc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});oc.set(n,e)}let ac={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_h.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kp(n){ac=n(ac)}function Qp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qa(this),e,...t);return _h.set(r,e.sort?e.sort():[e]),nr(r)}:zp().includes(n)?function(...e){return n.apply(Qa(this),e),nr(yh.get(this))}:function(...e){return nr(n.apply(Qa(this),e))}}function Xp(n){return typeof n=="function"?Qp(n):(n instanceof IDBTransaction&&Gp(n),$p(n,Hp())?new Proxy(n,ac):n)}function nr(n){if(n instanceof IDBRequest)return Wp(n);if(Ka.has(n))return Ka.get(n);const e=Xp(n);return e!==n&&(Ka.set(n,e),Nc.set(e,n)),e}const Qa=n=>Nc.get(n);function Yp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const u=indexedDB.open(n,e),p=nr(u);return r&&u.addEventListener("upgradeneeded",_=>{r(nr(u.result),_.oldVersion,_.newVersion,nr(u.transaction),_)}),t&&u.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",E=>i(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const Jp=["get","getKey","getAll","getAllKeys","count"],Zp=["put","add","delete","clear"],Xa=new Map;function Vu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Zp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jp.includes(t)))return;const a=async function(u,...p){const _=this.transaction(u,i?"readwrite":"readonly");let E=_.store;return r&&(E=E.index(p.shift())),(await Promise.all([E[t](...p),i&&_.done]))[0]};return Xa.set(e,a),a}Kp(n=>({...n,get:(e,t,r)=>Vu(e,t)||n.get(e,t,r),has:(e,t)=>!!Vu(e,t)||n.has(e,t)}));/**
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
 */class eg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function tg(n){return n.getComponent()?.type==="VERSION"}const cc="@firebase/app",Ou="0.14.1";/**
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
 */const Nn=new Dc("@firebase/app"),ng="@firebase/app-compat",rg="@firebase/analytics-compat",ig="@firebase/analytics",sg="@firebase/app-check-compat",og="@firebase/app-check",ag="@firebase/auth",cg="@firebase/auth-compat",ug="@firebase/database",lg="@firebase/data-connect",hg="@firebase/database-compat",dg="@firebase/functions",fg="@firebase/functions-compat",pg="@firebase/installations",gg="@firebase/installations-compat",mg="@firebase/messaging",yg="@firebase/messaging-compat",_g="@firebase/performance",vg="@firebase/performance-compat",Eg="@firebase/remote-config",Tg="@firebase/remote-config-compat",wg="@firebase/storage",Ig="@firebase/storage-compat",Ag="@firebase/firestore",bg="@firebase/ai",Cg="@firebase/firestore-compat",Sg="firebase",Rg="12.1.0";/**
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
 */const uc="[DEFAULT]",Pg={[cc]:"fire-core",[ng]:"fire-core-compat",[ig]:"fire-analytics",[rg]:"fire-analytics-compat",[og]:"fire-app-check",[sg]:"fire-app-check-compat",[ag]:"fire-auth",[cg]:"fire-auth-compat",[ug]:"fire-rtdb",[lg]:"fire-data-connect",[hg]:"fire-rtdb-compat",[dg]:"fire-fn",[fg]:"fire-fn-compat",[pg]:"fire-iid",[gg]:"fire-iid-compat",[mg]:"fire-fcm",[yg]:"fire-fcm-compat",[_g]:"fire-perf",[vg]:"fire-perf-compat",[Eg]:"fire-rc",[Tg]:"fire-rc-compat",[wg]:"fire-gcs",[Ig]:"fire-gcs-compat",[Ag]:"fire-fst",[Cg]:"fire-fst-compat",[bg]:"fire-vertex","fire-js":"fire-js",[Sg]:"fire-js-all"};/**
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
 */const Uo=new Map,kg=new Map,lc=new Map;function Lu(n,e){try{n.container.addComponent(e)}catch(t){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ri(n){const e=n.name;if(lc.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,n);for(const t of Uo.values())Lu(t,n);for(const t of kg.values())Lu(t,n);return!0}function Vc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ft(n){return n==null?!1:n.settings!==void 0}/**
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
 */const xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Ns("app","Firebase",xg);/**
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
 */class Dg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=Rg;function vh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:uc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(t||(t=fh()),!t)throw rr.create("no-options");const a=Uo.get(i);if(a){if(Vr(t,a.options)&&Vr(r,a.config))return a;throw rr.create("duplicate-app",{appName:i})}const u=new Fp(i);for(const _ of lc.values())u.addComponent(_);const p=new Dg(t,r,u);return Uo.set(i,p),p}function Eh(n=uc){const e=Uo.get(n);if(!e&&n===uc&&fh())return vh();if(!e)throw rr.create("no-app",{appName:n});return e}function ir(n,e,t){let r=Pg[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${r}" with version "${e}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(u.join(" "));return}Ri(new Or(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ng="firebase-heartbeat-database",Vg=1,Ts="firebase-heartbeat-store";let Ya=null;function Th(){return Ya||(Ya=Yp(Ng,Vg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ts)}catch(t){console.warn(t)}}}}).catch(n=>{throw rr.create("idb-open",{originalErrorMessage:n.message})})),Ya}async function Og(n){try{const t=(await Th()).transaction(Ts),r=await t.objectStore(Ts).get(wh(n));return await t.done,r}catch(e){if(e instanceof Mn)Nn.warn(e.message);else{const t=rr.create("idb-get",{originalErrorMessage:e?.message});Nn.warn(t.message)}}}async function Mu(n,e){try{const r=(await Th()).transaction(Ts,"readwrite");await r.objectStore(Ts).put(e,wh(n)),await r.done}catch(t){if(t instanceof Mn)Nn.warn(t.message);else{const r=rr.create("idb-set",{originalErrorMessage:t?.message});Nn.warn(r.message)}}}function wh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Lg=1024,Mg=30;class Fg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Mg){const i=qg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fu(),{heartbeatsToSend:t,unsentEntries:r}=Ug(this._heartbeatsCache.heartbeats),i=Fo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Nn.warn(e),""}}}function Fu(){return new Date().toISOString().substring(0,10)}function Ug(n,e=Lg){const t=[];let r=n.slice();for(const i of n){const a=t.find(u=>u.agent===i.agent);if(a){if(a.dates.push(i.date),Uu(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Uu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cp()?Sp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Og(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uu(n){return Fo(JSON.stringify({version:2,heartbeats:n})).length}function qg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Bg(n){Ri(new Or("platform-logger",e=>new eg(e),"PRIVATE")),Ri(new Or("heartbeat",e=>new Fg(e),"PRIVATE")),ir(cc,Ou,n),ir(cc,Ou,"esm2020"),ir("fire-js","")}Bg("");var $g="firebase",Hg="12.1.0";/**
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
 */ir($g,Hg,"app");function Ih(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zg=Ih,Ah=new Ns("auth","Firebase",Ih());/**
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
 */const jo=new Dc("@firebase/auth");function Wg(n,...e){jo.logLevel<=Se.WARN&&jo.warn(`Auth (${Mi}): ${n}`,...e)}function So(n,...e){jo.logLevel<=Se.ERROR&&jo.error(`Auth (${Mi}): ${n}`,...e)}/**
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
 */function Gt(n,...e){throw Oc(n,...e)}function an(n,...e){return Oc(n,...e)}function bh(n,e,t){const r={...zg(),[e]:t};return new Ns("auth","Firebase",r).create(e,{appName:n.name})}function kn(n){return bh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ah.create(n,...e)}function de(n,e,...t){if(!n)throw Oc(e,...t)}function Sn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw So(e),new Error(e)}function Vn(n,e){n||Sn(e)}/**
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
 */function hc(){return typeof self<"u"&&self.location?.href||""}function Gg(){return ju()==="http:"||ju()==="https:"}function ju(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Kg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gg()||wp()||"connection"in navigator)?navigator.onLine:!0}function Qg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Os{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vn(t>e,"Short delay should be less than long delay!"),this.isMobile=vp()||Ip()}get(){return Kg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lc(n,e){Vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ch{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jg=new Os(3e4,6e4);function Fn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pn(n,e,t,r,i={}){return Sh(n,i,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const p=Vs({key:n.config.apiKey,...u}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const E={method:e,headers:_,...a};return Tp()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&Li(n.emulatorConfig.host)&&(E.credentials="include"),Ch.fetch()(await Rh(n,n.config.apiHost,t,p),E)})}async function Sh(n,e,t){n._canInitEmulator=!1;const r={...Xg,...e};try{const i=new em(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw vo(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const p=a.ok?u.errorMessage:u.error.message,[_,E]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(n,"credential-already-in-use",u);if(_==="EMAIL_EXISTS")throw vo(n,"email-already-in-use",u);if(_==="USER_DISABLED")throw vo(n,"user-disabled",u);const I=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw bh(n,I,E);Gt(n,I)}}catch(i){if(i instanceof Mn)throw i;Gt(n,"network-request-failed",{message:String(i)})}}async function Ls(n,e,t,r,i={}){const a=await pn(n,e,t,r,i);return"mfaPendingCredential"in a&&Gt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Rh(n,e,t,r){const i=`${e}${t}?${r}`,a=n,u=a.config.emulator?Lc(n.config,i):`${n.config.apiScheme}://${i}`;return Yg.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Zg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class em{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Jg.get())})}}function vo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=an(n,e,r);return i.customData._tokenResponse=t,i}function qu(n){return n!==void 0&&n.enterprise!==void 0}class tm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Zg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nm(n,e){return pn(n,"GET","/v2/recaptchaConfig",Fn(n,e))}/**
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
 */async function rm(n,e){return pn(n,"POST","/v1/accounts:delete",e)}async function qo(n,e){return pn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function im(n,e=!1){const t=gt(n),r=await t.getIdToken(e),i=Mc(r);de(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,u=a?.sign_in_provider;return{claims:i,token:r,authTime:ms(Ja(i.auth_time)),issuedAtTime:ms(Ja(i.iat)),expirationTime:ms(Ja(i.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ja(n){return Number(n)*1e3}function Mc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=hh(t);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Bu(n){const e=Mc(n);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Mn&&sm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function sm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class om{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(n){const e=n.auth,t=await n.getIdToken(),r=await Pi(n,qo(e,{idToken:t}));de(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?Ph(i.providerUserInfo):[],u=cm(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!u?.length,E=p?_:!1,I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:E};Object.assign(n,I)}async function am(n){const e=gt(n);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ph(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function um(n,e){const t=await Sh(n,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,u=await Rh(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&Li(n.emulatorConfig.host)&&(_.credentials="include"),Ch.fetch()(u,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lm(n,e){return pn(n,"POST","/v2/accounts:revokeToken",Fn(n,e))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=Bu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await um(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,u=new Ii;return r&&(de(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),i&&(de(typeof i=="string","internal-error",{appName:e}),u.accessToken=i),a&&(de(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Kn(n,e){de(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return im(this,e)}reload(){return am(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Pi(this,rm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,u=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,E=t.createdAt??void 0,I=t.lastLoginAt??void 0,{uid:k,emailVerified:N,isAnonymous:Y,providerData:H,stsTokenManager:L}=t;de(k&&L,e,"internal-error");const Q=Ii.fromJSON(this.name,L);de(typeof k=="string",e,"internal-error"),Kn(r,e.name),Kn(i,e.name),de(typeof N=="boolean",e,"internal-error"),de(typeof Y=="boolean",e,"internal-error"),Kn(a,e.name),Kn(u,e.name),Kn(p,e.name),Kn(_,e.name),Kn(E,e.name),Kn(I,e.name);const G=new zt({uid:k,auth:e,email:i,emailVerified:N,displayName:r,isAnonymous:Y,photoURL:u,phoneNumber:a,tenantId:p,stsTokenManager:Q,createdAt:E,lastLoginAt:I});return H&&Array.isArray(H)&&(G.providerData=H.map(se=>({...se}))),_&&(G._redirectEventId=_),G}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ii;i.updateFromServerResponse(t);const a=new zt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bo(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];de(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Ph(i.providerUserInfo):[],u=!(i.email&&i.passwordHash)&&!a?.length,p=new Ii;p.updateFromIdToken(r);const _=new zt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:u}),E={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,E),_}}/**
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
 */const $u=new Map;function Rn(n){Vn(n instanceof Function,"Expected a class definition");let e=$u.get(n);return e?(Vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$u.set(n,e),e)}/**
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
 */class kh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kh.type="NONE";const Hu=kh;/**
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
 */function Ro(n,e,t){return`firebase:${n}:${e}:${t}`}class Ai{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ro(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ro("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qo(this.auth,{idToken:e}).catch(()=>{});return t?zt._fromGetAccountInfoResponse(this.auth,t,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ai(Rn(Hu),e,r);const i=(await Promise.all(t.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let a=i[0]||Rn(Hu);const u=Ro(r,e.config.apiKey,e.name);let p=null;for(const E of t)try{const I=await E._get(u);if(I){let k;if(typeof I=="string"){const N=await qo(e,{idToken:I}).catch(()=>{});if(!N)break;k=await zt._fromGetAccountInfoResponse(e,N,I)}else k=zt._fromJSON(e,I);E!==a&&(p=k),a=E;break}}catch{}const _=i.filter(E=>E._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new Ai(a,e,r):(a=_[0],p&&await a._set(u,p.toJSON()),await Promise.all(t.map(async E=>{if(E!==a)try{await E._remove(u)}catch{}})),new Ai(a,e,r))}}/**
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
 */function zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lh(e))return"Blackberry";if(Mh(e))return"Webos";if(Dh(e))return"Safari";if((e.includes("chrome/")||Nh(e))&&!e.includes("edge/"))return"Chrome";if(Oh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function xh(n=pt()){return/firefox\//i.test(n)}function Dh(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nh(n=pt()){return/crios\//i.test(n)}function Vh(n=pt()){return/iemobile/i.test(n)}function Oh(n=pt()){return/android/i.test(n)}function Lh(n=pt()){return/blackberry/i.test(n)}function Mh(n=pt()){return/webos/i.test(n)}function Fc(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hm(n=pt()){return Fc(n)&&!!window.navigator?.standalone}function dm(){return Ap()&&document.documentMode===10}function Fh(n=pt()){return Fc(n)||Oh(n)||Mh(n)||Lh(n)||/windows phone/i.test(n)||Vh(n)}/**
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
 */function Uh(n,e=[]){let t;switch(n){case"Browser":t=zu(pt());break;case"Worker":t=`${zu(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mi}/${r}`}/**
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
 */class fm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,p)=>{try{const _=e(a);u(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function pm(n,e={}){return pn(n,"GET","/v2/passwordPolicy",Fn(n,e))}/**
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
 */const gm=6;class mm{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??gm,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class ym{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.beforeStateQueue=new fm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ah,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qo(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,u=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===u)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(kn(this));const t=e?gt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pm(this),t=new mm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await lm(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rn(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[Rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(p,this,"internal-error"),p.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{u=!0,_()}}else{const _=e.addObserver(t);return()=>{u=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Wg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function fr(n){return gt(n)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dp(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _m(n){oa=n}function jh(n){return oa.loadJS(n)}function vm(){return oa.recaptchaEnterpriseScript}function Em(){return oa.gapiScript}function Tm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wm{constructor(){this.enterprise=new Im}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Im{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Am="recaptcha-enterprise",qh="NO_RECAPTCHA";class bm{constructor(e){this.type=Am,this.auth=fr(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,p)=>{nm(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const E=new tm(_);return a.tenantId==null?a._agentRecaptchaConfig=E:a._tenantRecaptchaConfigs[a.tenantId]=E,u(E.siteKey)}}).catch(_=>{p(_)})})}function i(a,u,p){const _=window.grecaptcha;qu(_)?_.enterprise.ready(()=>{_.enterprise.execute(a,{action:e}).then(E=>{u(E)}).catch(()=>{u(qh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wm().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(p=>{if(!t&&qu(window.grecaptcha))i(p,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let _=vm();_.length!==0&&(_+=p),jh(_).then(()=>{i(p,a,u)}).catch(E=>{u(E)})}}).catch(p=>{u(p)})})}}async function Gu(n,e,t,r=!1,i=!1){const a=new bm(n);let u;if(i)u=qh;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,E=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:E,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:u}):Object.assign(p,{captchaResponse:u}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function $o(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Gu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Gu(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
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
 */function Cm(n,e){const t=Vc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Vr(a,e??{}))return i;Gt(i,"already-initialized")}return t.initialize({options:e})}function Sm(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Rn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Rm(n,e,t){const r=fr(n);de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Bh(e),{host:u,port:p}=Pm(e),_=p===null?"":`:${p}`,E={url:`${a}//${u}${_}/`},I=Object.freeze({host:u,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){de(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),de(Vr(E,r.config.emulator)&&Vr(I,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=I,r.settings.appVerificationDisabledForTesting=!0,Li(u)?(gh(`${a}//${u}${_}`),mh("Auth",!0)):km()}function Bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Pm(n){const e=Bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Ku(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Ku(u)}}}function Ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function km(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Uc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,t){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function xm(n,e){return pn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Dm(n,e){return Ls(n,"POST","/v1/accounts:signInWithPassword",Fn(n,e))}async function $h(n,e){return pn(n,"POST","/v1/accounts:sendOobCode",Fn(n,e))}async function Nm(n,e){return $h(n,e)}async function Vm(n,e){return $h(n,e)}/**
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
 */async function Om(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}async function Lm(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}/**
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
 */class ws extends Uc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ws(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ws(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $o(e,t,"signInWithPassword",Dm);case"emailLink":return Om(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $o(e,r,"signUpPassword",xm);case"emailLink":return Lm(e,{idToken:t,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bi(n,e){return Ls(n,"POST","/v1/accounts:signInWithIdp",Fn(n,e))}/**
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
 */const Mm="http://localhost";class Lr extends Uc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const u=new Lr(r,i);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return bi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,bi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bi(e,t)}buildRequest(){const e={requestUri:Mm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vs(t)}return e}}/**
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
 */function Fm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Um(n){const e=us(ls(n)).link,t=e?us(ls(e)).deep_link_id:null,r=us(ls(n)).deep_link_id;return(r?us(ls(r)).link:null)||r||t||e||n}class jc{constructor(e){const t=us(ls(e)),r=t.apiKey??null,i=t.oobCode??null,a=Fm(t.mode??null);de(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Um(e);try{return new jc(t)}catch{return null}}}/**
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
 */class Fi{constructor(){this.providerId=Fi.PROVIDER_ID}static credential(e,t){return ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=jc.parseLink(t);return de(r,"argument-error"),ws._fromEmailAndCode(e,r.code,r.tenantId)}}Fi.PROVIDER_ID="password";Fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends Hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Ms{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Jn.credential(t,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Zn extends Ms{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends Ms{constructor(){super("twitter.com")}static credential(e,t){return Lr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return er.credential(t,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function jm(n,e){return Ls(n,"POST","/v1/accounts:signUp",Fn(n,e))}/**
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
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await zt._fromIdTokenResponse(e,r,i),u=Qu(r);return new Mr({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Qu(r);return new Mr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Qu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ho extends Mn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ho(e,t,r,i)}}function zh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(n,a,e,r):a})}async function qm(n,e,t=!1){const r=await Pi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mr._forOperation(n,"link",r)}/**
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
 */async function Bm(n,e,t=!1){const{auth:r}=n;if(Ft(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const a=await Pi(n,zh(r,i,e,n),t);de(a.idToken,r,"internal-error");const u=Mc(a.idToken);de(u,r,"internal-error");const{sub:p}=u;return de(n.uid===p,r,"user-mismatch"),Mr._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&Gt(r,"user-mismatch"),a}}/**
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
 */async function Wh(n,e,t=!1){if(Ft(n.app))return Promise.reject(kn(n));const r="signIn",i=await zh(n,r,e),a=await Mr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function $m(n,e){return Wh(fr(n),e)}/**
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
 */async function Gh(n){const e=fr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hm(n,e,t){const r=fr(n);await $o(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Vm)}async function zm(n,e,t){if(Ft(n.app))return Promise.reject(kn(n));const r=fr(n),u=await $o(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jm).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&Gh(n),_}),p=await Mr._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(p.user),p}function Wm(n,e,t){return Ft(n.app)?Promise.reject(kn(n)):$m(gt(n),Fi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gh(n),r})}async function Gm(n,e){const t=gt(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await Nm(t.auth,i);a!==n.email&&await n.reload()}/**
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
 */async function Km(n,e){return pn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Qm(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=gt(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Pi(r,Km(r.auth,a));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const p=r.providerData.find(({providerId:_})=>_==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function Xm(n,e,t,r){return gt(n).onIdTokenChanged(e,t,r)}function Ym(n,e,t){return gt(n).beforeAuthStateChanged(e,t)}function Jm(n,e,t,r){return gt(n).onAuthStateChanged(e,t,r)}const zo="__sak";/**
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
 */class Kh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Zm=1e3,ey=10;class Qh extends Kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,p,_)=>{this.notifyListeners(u,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);dm()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ey):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qh.type="LOCAL";const ty=Qh;/**
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
 */class Xh extends Kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xh.type="SESSION";const Yh=Xh;/**
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
 */function ny(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,u=this.handlersMap[i];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(u).map(async E=>E(t.origin,a)),_=await ny(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
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
 */function qc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ry{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,u;return new Promise((p,_)=>{const E=qc("",20);i.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},r);u={messageChannel:i,onMessage(k){const N=k;if(N.data.eventId===E)switch(N.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(N.data.response);break;default:clearTimeout(I),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(u),i.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:E,data:t},[i.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function cn(){return window}function iy(n){cn().location.href=n}/**
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
 */function Jh(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function sy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oy(){return navigator?.serviceWorker?.controller||null}function ay(){return Jh()?self:null}/**
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
 */const Zh="firebaseLocalStorageDb",cy=1,Wo="firebaseLocalStorage",ed="fbase_key";class Fs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ca(n,e){return n.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function uy(){const n=indexedDB.deleteDatabase(Zh);return new Fs(n).toPromise()}function fc(){const n=indexedDB.open(Zh,cy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wo,{keyPath:ed})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await uy(),e(await fc()))})})}async function Xu(n,e,t){const r=ca(n,!0).put({[ed]:e,value:t});return new Fs(r).toPromise()}async function ly(n,e){const t=ca(n,!1).get(e),r=await new Fs(t).toPromise();return r===void 0?null:r.value}function Yu(n,e){const t=ca(n,!0).delete(e);return new Fs(t).toPromise()}const hy=800,dy=3;class td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(ay()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await sy(),!this.activeServiceWorker)return;this.sender=new ry(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fc();return await Xu(e,zo,"1"),await Yu(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ly(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=ca(i,!1).getAll();return new Fs(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}td.type="LOCAL";const fy=td;new Os(3e4,6e4);/**
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
 */function py(n,e){return e?Rn(e):(de(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Bc extends Uc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gy(n){return Wh(n.auth,new Bc(n),n.bypassAuthState)}function my(n){const{auth:e,user:t}=n;return de(t,e,"internal-error"),Bm(t,new Bc(n),n.bypassAuthState)}async function yy(n){const{auth:e,user:t}=n;return de(t,e,"internal-error"),qm(t,new Bc(n),n.bypassAuthState)}/**
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
 */class nd{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:u,type:p}=e;if(u){this.reject(u);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gy;case"linkViaPopup":case"linkViaRedirect":return yy;case"reauthViaPopup":case"reauthViaRedirect":return my;default:Gt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _y=new Os(2e3,1e4);class wi extends nd{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_y.get())};e()}}wi.currentPopupAction=null;/**
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
 */const vy="pendingRedirect",Po=new Map;class Ey extends nd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await Ty(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ty(n,e){const t=Ay(e),r=Iy(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function wy(n,e){Po.set(n._key(),e)}function Iy(n){return Rn(n._redirectPersistence)}function Ay(n){return Ro(vy,n.config.apiKey,n.name)}async function by(n,e,t=!1){if(Ft(n.app))return Promise.reject(kn(n));const r=fr(n),i=py(r,e),u=await new Ey(r,i,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const Cy=600*1e3;class Sy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ry(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!rd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(an(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ju(e))}saveEventToCache(e){this.cachedEventUids.add(Ju(e)),this.lastProcessedEventTime=Date.now()}}function Ju(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ry(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rd(n);default:return!1}}/**
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
 */async function Py(n,e={}){return pn(n,"GET","/v1/projects",e)}/**
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
 */const ky=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xy=/^https?/;async function Dy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Py(n);for(const t of e)try{if(Ny(t))return}catch{}Gt(n,"unauthorized-domain")}function Ny(n){const e=hc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!xy.test(t))return!1;if(ky.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vy=new Os(3e4,6e4);function Zu(){const n=cn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Oy(n){return new Promise((e,t)=>{function r(){Zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zu(),t(an(n,"network-request-failed"))},timeout:Vy.get()})}if(cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(cn().gapi?.load)r();else{const i=Tm("iframefcb");return cn()[i]=()=>{gapi.load?r():t(an(n,"network-request-failed"))},jh(`${Em()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw ko=null,e})}let ko=null;function Ly(n){return ko=ko||Oy(n),ko}/**
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
 */const My=new Os(5e3,15e3),Fy="__/auth/iframe",Uy="emulator/auth/iframe",jy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function By(n){const e=n.config;de(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lc(e,Uy):`https://${n.config.authDomain}/${Fy}`,r={apiKey:e.apiKey,appName:n.name,v:Mi},i=qy.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Vs(r).slice(1)}`}async function $y(n){const e=await Ly(n),t=cn().gapi;return de(t,n,"internal-error"),e.open({where:document.body,url:By(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jy,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const u=an(n,"network-request-failed"),p=cn().setTimeout(()=>{a(u)},My.get());function _(){cn().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(u)})}))}/**
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
 */const Hy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zy=500,Wy=600,Gy="_blank",Ky="http://localhost";class el{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qy(n,e,t,r=zy,i=Wy){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...Hy,width:r.toString(),height:i.toString(),top:a,left:u},E=pt().toLowerCase();t&&(p=Nh(E)?Gy:t),xh(E)&&(e=e||Ky,_.scrollbars="yes");const I=Object.entries(_).reduce((N,[Y,H])=>`${N}${Y}=${H},`,"");if(hm(E)&&p!=="_self")return Xy(e||"",p),new el(null);const k=window.open(e||"",p,I);de(k,n,"popup-blocked");try{k.focus()}catch{}return new el(k)}function Xy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Yy="__/auth/handler",Jy="emulator/auth/handler",Zy=encodeURIComponent("fac");async function tl(n,e,t,r,i,a){de(n.config.authDomain,n,"auth-domain-config-required"),de(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mi,eventId:i};if(e instanceof Hh){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",xp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,k]of Object.entries({}))u[I]=k}if(e instanceof Ms){const I=e.getScopes().filter(k=>k!=="");I.length>0&&(u.scopes=I.join(","))}n.tenantId&&(u.tid=n.tenantId);const p=u;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const _=await n._getAppCheckToken(),E=_?`#${Zy}=${encodeURIComponent(_)}`:"";return`${e_(n)}?${Vs(p).slice(1)}${E}`}function e_({config:n}){return n.emulator?Lc(n,Jy):`https://${n.authDomain}/${Yy}`}/**
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
 */const Za="webStorageSupport";class t_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yh,this._completeRedirectFn=by,this._overrideRedirectResult=wy}async _openPopup(e,t,r,i){Vn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await tl(e,t,r,hc(),i);return Qy(e,a,qc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await tl(e,t,r,hc(),i);return iy(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Vn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await $y(e),r=new Sy(e);return t.register("authEvent",i=>(de(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Za,{type:Za},i=>{const a=i?.[0]?.[Za];a!==void 0&&t(!!a),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fh()||Dh()||Fc()}}const n_=t_;var nl="@firebase/auth",rl="1.11.0";/**
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
 */class r_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function i_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function s_(n){Ri(new Or("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:p}=r.options;de(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:u,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uh(n)},E=new ym(r,i,a,_);return Sm(E,t),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Or("auth-internal",e=>{const t=fr(e.getProvider("auth").getImmediate());return(r=>new r_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(nl,rl,i_(n)),ir(nl,rl,"esm2020")}/**
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
 */const o_=300,a_=ph("authIdTokenMaxAge")||o_;let il=null;const c_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>a_)return;const i=t?.token;il!==i&&(il=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function u_(n=Eh()){const e=Vc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Cm(n,{popupRedirectResolver:n_,persistence:[fy,ty,Yh]}),r=ph("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=c_(a.toString());Ym(t,u,()=>u(t.currentUser)),Xm(t,p=>u(p))}}const i=dh("auth");return i&&Rm(t,`http://${i}`),t}function l_(){return document.getElementsByTagName("head")?.[0]??document}_m({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=an("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",l_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});s_("Browser");var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,id;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,S){function C(){}C.prototype=S.prototype,l.D=S.prototype,l.prototype=new C,l.prototype.constructor=l,l.C=function(D,V,M){for(var b=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)b[mt-2]=arguments[mt];return S.prototype[V].apply(D,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,S,C){C||(C=0);var D=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)D[V]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(V=0;16>V;++V)D[V]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=l.g[0],C=l.g[1],V=l.g[2];var M=l.g[3],b=S+(M^C&(V^M))+D[0]+3614090360&4294967295;S=C+(b<<7&4294967295|b>>>25),b=M+(V^S&(C^V))+D[1]+3905402710&4294967295,M=S+(b<<12&4294967295|b>>>20),b=V+(C^M&(S^C))+D[2]+606105819&4294967295,V=M+(b<<17&4294967295|b>>>15),b=C+(S^V&(M^S))+D[3]+3250441966&4294967295,C=V+(b<<22&4294967295|b>>>10),b=S+(M^C&(V^M))+D[4]+4118548399&4294967295,S=C+(b<<7&4294967295|b>>>25),b=M+(V^S&(C^V))+D[5]+1200080426&4294967295,M=S+(b<<12&4294967295|b>>>20),b=V+(C^M&(S^C))+D[6]+2821735955&4294967295,V=M+(b<<17&4294967295|b>>>15),b=C+(S^V&(M^S))+D[7]+4249261313&4294967295,C=V+(b<<22&4294967295|b>>>10),b=S+(M^C&(V^M))+D[8]+1770035416&4294967295,S=C+(b<<7&4294967295|b>>>25),b=M+(V^S&(C^V))+D[9]+2336552879&4294967295,M=S+(b<<12&4294967295|b>>>20),b=V+(C^M&(S^C))+D[10]+4294925233&4294967295,V=M+(b<<17&4294967295|b>>>15),b=C+(S^V&(M^S))+D[11]+2304563134&4294967295,C=V+(b<<22&4294967295|b>>>10),b=S+(M^C&(V^M))+D[12]+1804603682&4294967295,S=C+(b<<7&4294967295|b>>>25),b=M+(V^S&(C^V))+D[13]+4254626195&4294967295,M=S+(b<<12&4294967295|b>>>20),b=V+(C^M&(S^C))+D[14]+2792965006&4294967295,V=M+(b<<17&4294967295|b>>>15),b=C+(S^V&(M^S))+D[15]+1236535329&4294967295,C=V+(b<<22&4294967295|b>>>10),b=S+(V^M&(C^V))+D[1]+4129170786&4294967295,S=C+(b<<5&4294967295|b>>>27),b=M+(C^V&(S^C))+D[6]+3225465664&4294967295,M=S+(b<<9&4294967295|b>>>23),b=V+(S^C&(M^S))+D[11]+643717713&4294967295,V=M+(b<<14&4294967295|b>>>18),b=C+(M^S&(V^M))+D[0]+3921069994&4294967295,C=V+(b<<20&4294967295|b>>>12),b=S+(V^M&(C^V))+D[5]+3593408605&4294967295,S=C+(b<<5&4294967295|b>>>27),b=M+(C^V&(S^C))+D[10]+38016083&4294967295,M=S+(b<<9&4294967295|b>>>23),b=V+(S^C&(M^S))+D[15]+3634488961&4294967295,V=M+(b<<14&4294967295|b>>>18),b=C+(M^S&(V^M))+D[4]+3889429448&4294967295,C=V+(b<<20&4294967295|b>>>12),b=S+(V^M&(C^V))+D[9]+568446438&4294967295,S=C+(b<<5&4294967295|b>>>27),b=M+(C^V&(S^C))+D[14]+3275163606&4294967295,M=S+(b<<9&4294967295|b>>>23),b=V+(S^C&(M^S))+D[3]+4107603335&4294967295,V=M+(b<<14&4294967295|b>>>18),b=C+(M^S&(V^M))+D[8]+1163531501&4294967295,C=V+(b<<20&4294967295|b>>>12),b=S+(V^M&(C^V))+D[13]+2850285829&4294967295,S=C+(b<<5&4294967295|b>>>27),b=M+(C^V&(S^C))+D[2]+4243563512&4294967295,M=S+(b<<9&4294967295|b>>>23),b=V+(S^C&(M^S))+D[7]+1735328473&4294967295,V=M+(b<<14&4294967295|b>>>18),b=C+(M^S&(V^M))+D[12]+2368359562&4294967295,C=V+(b<<20&4294967295|b>>>12),b=S+(C^V^M)+D[5]+4294588738&4294967295,S=C+(b<<4&4294967295|b>>>28),b=M+(S^C^V)+D[8]+2272392833&4294967295,M=S+(b<<11&4294967295|b>>>21),b=V+(M^S^C)+D[11]+1839030562&4294967295,V=M+(b<<16&4294967295|b>>>16),b=C+(V^M^S)+D[14]+4259657740&4294967295,C=V+(b<<23&4294967295|b>>>9),b=S+(C^V^M)+D[1]+2763975236&4294967295,S=C+(b<<4&4294967295|b>>>28),b=M+(S^C^V)+D[4]+1272893353&4294967295,M=S+(b<<11&4294967295|b>>>21),b=V+(M^S^C)+D[7]+4139469664&4294967295,V=M+(b<<16&4294967295|b>>>16),b=C+(V^M^S)+D[10]+3200236656&4294967295,C=V+(b<<23&4294967295|b>>>9),b=S+(C^V^M)+D[13]+681279174&4294967295,S=C+(b<<4&4294967295|b>>>28),b=M+(S^C^V)+D[0]+3936430074&4294967295,M=S+(b<<11&4294967295|b>>>21),b=V+(M^S^C)+D[3]+3572445317&4294967295,V=M+(b<<16&4294967295|b>>>16),b=C+(V^M^S)+D[6]+76029189&4294967295,C=V+(b<<23&4294967295|b>>>9),b=S+(C^V^M)+D[9]+3654602809&4294967295,S=C+(b<<4&4294967295|b>>>28),b=M+(S^C^V)+D[12]+3873151461&4294967295,M=S+(b<<11&4294967295|b>>>21),b=V+(M^S^C)+D[15]+530742520&4294967295,V=M+(b<<16&4294967295|b>>>16),b=C+(V^M^S)+D[2]+3299628645&4294967295,C=V+(b<<23&4294967295|b>>>9),b=S+(V^(C|~M))+D[0]+4096336452&4294967295,S=C+(b<<6&4294967295|b>>>26),b=M+(C^(S|~V))+D[7]+1126891415&4294967295,M=S+(b<<10&4294967295|b>>>22),b=V+(S^(M|~C))+D[14]+2878612391&4294967295,V=M+(b<<15&4294967295|b>>>17),b=C+(M^(V|~S))+D[5]+4237533241&4294967295,C=V+(b<<21&4294967295|b>>>11),b=S+(V^(C|~M))+D[12]+1700485571&4294967295,S=C+(b<<6&4294967295|b>>>26),b=M+(C^(S|~V))+D[3]+2399980690&4294967295,M=S+(b<<10&4294967295|b>>>22),b=V+(S^(M|~C))+D[10]+4293915773&4294967295,V=M+(b<<15&4294967295|b>>>17),b=C+(M^(V|~S))+D[1]+2240044497&4294967295,C=V+(b<<21&4294967295|b>>>11),b=S+(V^(C|~M))+D[8]+1873313359&4294967295,S=C+(b<<6&4294967295|b>>>26),b=M+(C^(S|~V))+D[15]+4264355552&4294967295,M=S+(b<<10&4294967295|b>>>22),b=V+(S^(M|~C))+D[6]+2734768916&4294967295,V=M+(b<<15&4294967295|b>>>17),b=C+(M^(V|~S))+D[13]+1309151649&4294967295,C=V+(b<<21&4294967295|b>>>11),b=S+(V^(C|~M))+D[4]+4149444226&4294967295,S=C+(b<<6&4294967295|b>>>26),b=M+(C^(S|~V))+D[11]+3174756917&4294967295,M=S+(b<<10&4294967295|b>>>22),b=V+(S^(M|~C))+D[2]+718787259&4294967295,V=M+(b<<15&4294967295|b>>>17),b=C+(M^(V|~S))+D[9]+3951481745&4294967295,l.g[0]=l.g[0]+S&4294967295,l.g[1]=l.g[1]+(V+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+V&4294967295,l.g[3]=l.g[3]+M&4294967295}r.prototype.u=function(l,S){S===void 0&&(S=l.length);for(var C=S-this.blockSize,D=this.B,V=this.h,M=0;M<S;){if(V==0)for(;M<=C;)i(this,l,M),M+=this.blockSize;if(typeof l=="string"){for(;M<S;)if(D[V++]=l.charCodeAt(M++),V==this.blockSize){i(this,D),V=0;break}}else for(;M<S;)if(D[V++]=l[M++],V==this.blockSize){i(this,D),V=0;break}}this.h=V,this.o+=S},r.prototype.v=function(){var l=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);l[0]=128;for(var S=1;S<l.length-8;++S)l[S]=0;var C=8*this.o;for(S=l.length-8;S<l.length;++S)l[S]=C&255,C/=256;for(this.u(l),l=Array(16),S=C=0;4>S;++S)for(var D=0;32>D;D+=8)l[C++]=this.g[S]>>>D&255;return l};function a(l,S){var C=p;return Object.prototype.hasOwnProperty.call(C,l)?C[l]:C[l]=S(l)}function u(l,S){this.h=S;for(var C=[],D=!0,V=l.length-1;0<=V;V--){var M=l[V]|0;D&&M==S||(C[V]=M,D=!1)}this.g=C}var p={};function _(l){return-128<=l&&128>l?a(l,function(S){return new u([S|0],0>S?-1:0)}):new u([l|0],0>l?-1:0)}function E(l){if(isNaN(l)||!isFinite(l))return k;if(0>l)return Q(E(-l));for(var S=[],C=1,D=0;l>=C;D++)S[D]=l/C|0,C*=4294967296;return new u(S,0)}function I(l,S){if(l.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(l.charAt(0)=="-")return Q(I(l.substring(1),S));if(0<=l.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=E(Math.pow(S,8)),D=k,V=0;V<l.length;V+=8){var M=Math.min(8,l.length-V),b=parseInt(l.substring(V,V+M),S);8>M?(M=E(Math.pow(S,M)),D=D.j(M).add(E(b))):(D=D.j(C),D=D.add(E(b)))}return D}var k=_(0),N=_(1),Y=_(16777216);n=u.prototype,n.m=function(){if(L(this))return-Q(this).m();for(var l=0,S=1,C=0;C<this.g.length;C++){var D=this.i(C);l+=(0<=D?D:4294967296+D)*S,S*=4294967296}return l},n.toString=function(l){if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(H(this))return"0";if(L(this))return"-"+Q(this).toString(l);for(var S=E(Math.pow(l,6)),C=this,D="";;){var V=we(C,S).g;C=G(C,V.j(S));var M=((0<C.g.length?C.g[0]:C.h)>>>0).toString(l);if(C=V,H(C))return M+D;for(;6>M.length;)M="0"+M;D=M+D}},n.i=function(l){return 0>l?0:l<this.g.length?this.g[l]:this.h};function H(l){if(l.h!=0)return!1;for(var S=0;S<l.g.length;S++)if(l.g[S]!=0)return!1;return!0}function L(l){return l.h==-1}n.l=function(l){return l=G(this,l),L(l)?-1:H(l)?0:1};function Q(l){for(var S=l.g.length,C=[],D=0;D<S;D++)C[D]=~l.g[D];return new u(C,~l.h).add(N)}n.abs=function(){return L(this)?Q(this):this},n.add=function(l){for(var S=Math.max(this.g.length,l.g.length),C=[],D=0,V=0;V<=S;V++){var M=D+(this.i(V)&65535)+(l.i(V)&65535),b=(M>>>16)+(this.i(V)>>>16)+(l.i(V)>>>16);D=b>>>16,M&=65535,b&=65535,C[V]=b<<16|M}return new u(C,C[C.length-1]&-2147483648?-1:0)};function G(l,S){return l.add(Q(S))}n.j=function(l){if(H(this)||H(l))return k;if(L(this))return L(l)?Q(this).j(Q(l)):Q(Q(this).j(l));if(L(l))return Q(this.j(Q(l)));if(0>this.l(Y)&&0>l.l(Y))return E(this.m()*l.m());for(var S=this.g.length+l.g.length,C=[],D=0;D<2*S;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(var V=0;V<l.g.length;V++){var M=this.i(D)>>>16,b=this.i(D)&65535,mt=l.i(V)>>>16,gr=l.i(V)&65535;C[2*D+2*V]+=b*gr,se(C,2*D+2*V),C[2*D+2*V+1]+=M*gr,se(C,2*D+2*V+1),C[2*D+2*V+1]+=b*mt,se(C,2*D+2*V+1),C[2*D+2*V+2]+=M*mt,se(C,2*D+2*V+2)}for(D=0;D<S;D++)C[D]=C[2*D+1]<<16|C[2*D];for(D=S;D<2*S;D++)C[D]=0;return new u(C,0)};function se(l,S){for(;(l[S]&65535)!=l[S];)l[S+1]+=l[S]>>>16,l[S]&=65535,S++}function ue(l,S){this.g=l,this.h=S}function we(l,S){if(H(S))throw Error("division by zero");if(H(l))return new ue(k,k);if(L(l))return S=we(Q(l),S),new ue(Q(S.g),Q(S.h));if(L(S))return S=we(l,Q(S)),new ue(Q(S.g),S.h);if(30<l.g.length){if(L(l)||L(S))throw Error("slowDivide_ only works with positive integers.");for(var C=N,D=S;0>=D.l(l);)C=We(C),D=We(D);var V=Be(C,1),M=Be(D,1);for(D=Be(D,2),C=Be(C,2);!H(D);){var b=M.add(D);0>=b.l(l)&&(V=V.add(C),M=b),D=Be(D,1),C=Be(C,1)}return S=G(l,V.j(S)),new ue(V,S)}for(V=k;0<=l.l(S);){for(C=Math.max(1,Math.floor(l.m()/S.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),M=E(C),b=M.j(S);L(b)||0<b.l(l);)C-=D,M=E(C),b=M.j(S);H(M)&&(M=N),V=V.add(M),l=G(l,b)}return new ue(V,l)}n.A=function(l){return we(this,l).h},n.and=function(l){for(var S=Math.max(this.g.length,l.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)&l.i(D);return new u(C,this.h&l.h)},n.or=function(l){for(var S=Math.max(this.g.length,l.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)|l.i(D);return new u(C,this.h|l.h)},n.xor=function(l){for(var S=Math.max(this.g.length,l.g.length),C=[],D=0;D<S;D++)C[D]=this.i(D)^l.i(D);return new u(C,this.h^l.h)};function We(l){for(var S=l.g.length+1,C=[],D=0;D<S;D++)C[D]=l.i(D)<<1|l.i(D-1)>>>31;return new u(C,l.h)}function Be(l,S){var C=S>>5;S%=32;for(var D=l.g.length-C,V=[],M=0;M<D;M++)V[M]=0<S?l.i(M+C)>>>S|l.i(M+C+1)<<32-S:l.i(M+C);return new u(V,l.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,id=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=E,u.fromString=I,sr=u}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sd,hs,od,xo,pc,ad,cd,ud;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,g){return o==Array.prototype||o==Object.prototype||(o[d]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eo=="object"&&Eo];for(var d=0;d<o.length;++d){var g=o[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,d){if(d)e:{var g=r;o=o.split(".");for(var T=0;T<o.length-1;T++){var O=o[T];if(!(O in g))break e;g=g[O]}o=o[o.length-1],T=g[o],d=d(T),d!=T&&d!=null&&e(g,o,{configurable:!0,writable:!0,value:d})}}function a(o,d){o instanceof String&&(o+="");var g=0,T=!1,O={next:function(){if(!T&&g<o.length){var j=g++;return{value:d(j,o[j]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(o){return o||function(){return a(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},p=this||self;function _(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function E(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function I(o,d,g){return o.call.apply(o.bind,arguments)}function k(o,d,g){if(!o)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),o.apply(d,O)}}return function(){return o.apply(d,arguments)}}function N(o,d,g){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:k,N.apply(null,arguments)}function Y(o,d){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),o.apply(this,T)}}function H(o,d){function g(){}g.prototype=d.prototype,o.aa=d.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(T,O,j){for(var Z=Array(arguments.length-2),De=2;De<arguments.length;De++)Z[De-2]=arguments[De];return d.prototype[O].apply(T,Z)}}function L(o){const d=o.length;if(0<d){const g=Array(d);for(let T=0;T<d;T++)g[T]=o[T];return g}return[]}function Q(o,d){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(_(T)){const O=o.length||0,j=T.length||0;o.length=O+j;for(let Z=0;Z<j;Z++)o[O+Z]=T[Z]}else o.push(T)}}class G{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function se(o){return/^[\s\xa0]*$/.test(o)}function ue(){var o=p.navigator;return o&&(o=o.userAgent)?o:""}function we(o){return we[" "](o),o}we[" "]=function(){};var We=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function Be(o,d,g){for(const T in o)d.call(g,o[T],T,o)}function l(o,d){for(const g in o)d.call(void 0,o[g],g,o)}function S(o){const d={};for(const g in o)d[g]=o[g];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(o,d){let g,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(g in T)o[g]=T[g];for(let j=0;j<C.length;j++)g=C[j],Object.prototype.hasOwnProperty.call(T,g)&&(o[g]=T[g])}}function V(o){var d=1;o=o.split(":");const g=[];for(;0<d&&o.length;)g.push(o.shift()),d--;return o.length&&g.push(o.join(":")),g}function M(o){p.setTimeout(()=>{throw o},0)}function b(){var o=Qt;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class mt{constructor(){this.h=this.g=null}add(d,g){const T=gr.get();T.set(d,g),this.h?this.h.next=T:this.g=T,this.h=T}}var gr=new G(()=>new Ra,o=>o.reset());class Ra{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,gn=!1,Qt=new mt,Hi=()=>{const o=p.Promise.resolve(void 0);yt=()=>{o.then(Gs)}};var Gs=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(g){M(g)}var d=gr;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}gn=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var Ks=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};p.addEventListener("test",g,d),p.removeEventListener("test",g,d)}catch{}return o})();function mr(o,d){if(Ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,T=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(We){e:{try{we(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else g=="mouseover"?d=o.fromElement:g=="mouseout"&&(d=o.toElement);this.relatedTarget=d,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Pa[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&mr.aa.h.call(this)}}H(mr,Ge);var Pa={2:"touch",3:"pen",4:"mouse"};mr.prototype.h=function(){mr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),ka=0;function Qs(o,d,g,T,O){this.listener=o,this.proxy=null,this.src=d,this.type=g,this.capture=!!T,this.ha=O,this.key=++ka,this.da=this.fa=!1}function _t(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Gr(o){this.src=o,this.g={},this.h=0}Gr.prototype.add=function(o,d,g,T,O){var j=o.toString();o=this.g[j],o||(o=this.g[j]=[],this.h++);var Z=jn(o,d,T,O);return-1<Z?(d=o[Z],g||(d.fa=!1)):(d=new Qs(d,this.src,j,!!T,O),d.fa=g,o.push(d)),d};function Xt(o,d){var g=d.type;if(g in o.g){var T=o.g[g],O=Array.prototype.indexOf.call(T,d,void 0),j;(j=0<=O)&&Array.prototype.splice.call(T,O,1),j&&(_t(d),o.g[g].length==0&&(delete o.g[g],o.h--))}}function jn(o,d,g,T){for(var O=0;O<o.length;++O){var j=o[O];if(!j.da&&j.listener==d&&j.capture==!!g&&j.ha==T)return O}return-1}var Kr="closure_lm_"+(1e6*Math.random()|0),zi={};function Qr(o,d,g,T,O){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Qr(o,d[j],g,T,O);return null}return g=oe(g),o&&o[Wr]?o.K(d,g,E(T)?!!T.capture:!1,O):Xr(o,d,g,!1,T,O)}function Xr(o,d,g,T,O,j){if(!d)throw Error("Invalid event type");var Z=E(O)?!!O.capture:!!O,De=mn(o);if(De||(o[Kr]=De=new Gr(o)),g=De.add(d,g,T,Z,j),g.proxy)return g;if(T=Bt(),g.proxy=T,T.src=o,T.listener=g,o.addEventListener)Ks||(O=Z),O===void 0&&(O=!1),o.addEventListener(d.toString(),T,O);else if(o.attachEvent)o.attachEvent(Ys(d.toString()),T);else if(o.addListener&&o.removeListener)o.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Bt(){function o(g){return d.call(o.src,o.listener,g)}const d=kt;return o}function Xs(o,d,g,T,O){if(Array.isArray(d))for(var j=0;j<d.length;j++)Xs(o,d[j],g,T,O);else T=E(T)?!!T.capture:!!T,g=oe(g),o&&o[Wr]?(o=o.i,d=String(d).toString(),d in o.g&&(j=o.g[d],g=jn(j,g,T,O),-1<g&&(_t(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete o.g[d],o.h--)))):o&&(o=mn(o))&&(d=o.g[d.toString()],o=-1,d&&(o=jn(d,g,T,O)),(g=-1<o?d[o]:null)&&Wi(g))}function Wi(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[Wr])Xt(d.i,o);else{var g=o.type,T=o.proxy;d.removeEventListener?d.removeEventListener(g,T,o.capture):d.detachEvent?d.detachEvent(Ys(g),T):d.addListener&&d.removeListener&&d.removeListener(T),(g=mn(d))?(Xt(g,o),g.h==0&&(g.src=null,d[Kr]=null)):_t(o)}}}function Ys(o){return o in zi?zi[o]:zi[o]="on"+o}function kt(o,d){if(o.da)o=!0;else{d=new mr(d,this);var g=o.listener,T=o.ha||o.src;o.fa&&Wi(o),o=g.call(T,d)}return o}function mn(o){return o=o[Kr],o instanceof Gr?o:null}var yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(o){return typeof o=="function"?o:(o[yn]||(o[yn]=function(d){return o.handleEvent(d)}),o[yn])}function xe(){qt.call(this),this.i=new Gr(this),this.M=this,this.F=null}H(xe,qt),xe.prototype[Wr]=!0,xe.prototype.removeEventListener=function(o,d,g,T){Xs(this,o,d,g,T)};function st(o,d){var g,T=o.F;if(T)for(g=[];T;T=T.F)g.push(T);if(o=o.M,T=d.type||d,typeof d=="string")d=new Ge(d,o);else if(d instanceof Ge)d.target=d.target||o;else{var O=d;d=new Ge(T,o),D(d,O)}if(O=!0,g)for(var j=g.length-1;0<=j;j--){var Z=d.g=g[j];O=Yr(Z,T,!0,d)&&O}if(Z=d.g=o,O=Yr(Z,T,!0,d)&&O,O=Yr(Z,T,!1,d)&&O,g)for(j=0;j<g.length;j++)Z=d.g=g[j],O=Yr(Z,T,!1,d)&&O}xe.prototype.N=function(){if(xe.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var g=o.g[d],T=0;T<g.length;T++)_t(g[T]);delete o.g[d],o.h--}}this.F=null},xe.prototype.K=function(o,d,g,T){return this.i.add(String(o),d,!1,g,T)},xe.prototype.L=function(o,d,g,T){return this.i.add(String(o),d,!0,g,T)};function Yr(o,d,g,T){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,j=0;j<d.length;++j){var Z=d[j];if(Z&&!Z.da&&Z.capture==g){var De=Z.listener,Oe=Z.ha||Z.src;Z.fa&&Xt(o.i,Z),O=De.call(Oe,T)!==!1&&O}}return O&&!T.defaultPrevented}function Js(o,d,g){if(typeof o=="function")g&&(o=N(o,g));else if(o&&typeof o.handleEvent=="function")o=N(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:p.setTimeout(o,d||0)}function Gi(o){o.g=Js(()=>{o.g=null,o.i&&(o.i=!1,Gi(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class Zs extends qt{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Gi(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(o){qt.call(this),this.h=o,this.g={}}H($t,qt);var xt=[];function Yt(o){Be(o.g,function(d,g){this.g.hasOwnProperty(g)&&Wi(d)},o),o.g={}}$t.prototype.N=function(){$t.aa.N.call(this),Yt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jt=p.JSON.stringify,xa=p.JSON.parse,Jr=class{stringify(o){return p.JSON.stringify(o,void 0)}parse(o){return p.JSON.parse(o,void 0)}};function Zr(){}Zr.prototype.h=null;function Ki(o){return o.h||(o.h=o.i())}function eo(){}var Dt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _n(){Ge.call(this,"d")}H(_n,Ge);function ei(){Ge.call(this,"c")}H(ei,Ge);var Zt={},vt=null;function Ze(){return vt=vt||new xe}Zt.La="serverreachability";function ti(o){Ge.call(this,Zt.La,o)}H(ti,Ge);function yr(o){const d=Ze();st(d,new ti(d))}Zt.STAT_EVENT="statevent";function Qi(o,d){Ge.call(this,Zt.STAT_EVENT,o),this.stat=d}H(Qi,Ge);function tt(o){const d=Ze();st(d,new Qi(d,o))}Zt.Ma="timingevent";function vn(o,d){Ge.call(this,Zt.Ma,o),this.size=d}H(vn,Ge);function Nt(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){o()},d)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function ni(o,d,g,T,O,j){o.info(function(){if(o.g)if(j)for(var Z="",De=j.split("&"),Oe=0;Oe<De.length;Oe++){var ve=De[Oe].split("=");if(1<ve.length){var nt=ve[0];ve=ve[1];var rt=nt.split("_");Z=2<=rt.length&&rt[1]=="type"?Z+(nt+"="+ve+"&"):Z+(nt+"=redacted&")}}else Z=null;else Z=j;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+d+`
`+g+`
`+Z})}function Da(o,d,g,T,O,j,Z){o.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+d+`
`+g+`
`+j+" "+Z})}function qn(o,d,g,T){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+to(o,g)+(T?" "+T:"")})}function Na(o,d){o.info(function(){return"TIMEOUT: "+d})}En.prototype.info=function(){};function to(o,d){if(!o.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var T=g[o];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var j=O[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Z=1;Z<O.length;Z++)O[Z]=""}}}}return Jt(g)}catch{return d}}var ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},no={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function si(){}H(si,Zr),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},ii=new si;function Et(o,d,g,T){this.j=o,this.i=d,this.l=g,this.R=T||1,this.U=new $t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xi}function Xi(){this.i=null,this.g="",this.h=!1}var oi={},_r={};function Bn(o,d,g){o.L=1,o.v=en(Ot(d)),o.m=g,o.P=!0,Yi(o,null)}function Yi(o,d){o.F=Date.now(),Er(o),o.A=Ot(o.v);var g=o.A,T=o.R;Array.isArray(T)||(T=[String(T)]),rs(g.i,"t",T),o.C=0,g=o.j.J,o.h=new Xi,o.g=St(o.j,g?d:null,!o.m),0<o.O&&(o.M=new Zs(N(o.Y,o,o.g),o.O)),d=o.U,g=o.g,T=o.ca;var O="readystatechange";Array.isArray(O)||(O&&(xt[0]=O.toString()),O=xt);for(var j=0;j<O.length;j++){var Z=Qr(g,O[j],T||d.handleEvent,!1,d.h||d);if(!Z)break;d.g[Z.key]=Z}d=o.H?S(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),yr(),ni(o.i,o.u,o.A,o.l,o.R,o.m)}Et.prototype.ca=function(o){o=o.target;const d=this.M;d&&Ct(o)==3?d.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const rt=Ct(this.g);var d=this.g.Ba();const Wn=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||go(this.g)))){this.J||rt!=4||d==7||(d==8||0>=Wn?yr(3):yr(2)),ai(this);var g=this.g.Z();this.X=g;t:if(ro(this)){var T=go(this.g);o="";var O=T.length,j=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),$n(this);var Z="";break t}this.h.i=new p.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,o+=this.h.i.decode(T[d],{stream:!(j&&d==O-1)});T.length=0,this.h.g+=o,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=g==200,Da(this.i,this.u,this.A,this.l,this.R,rt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Oe=this.g;if((De=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(De)){var ve=De;break t}}ve=null}if(g=ve)qn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tr(this,g);else{this.o=!1,this.s=3,tt(12),Tn(this),$n(this);break e}}if(this.P){g=!0;let Te;for(;!this.J&&this.C<Z.length;)if(Te=vr(this,Z),Te==_r){rt==4&&(this.s=4,tt(14),g=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==oi){this.s=4,tt(15),qn(this.i,this.l,Z,"[Invalid Chunk]"),g=!1;break}else qn(this.i,this.l,Te,null),Tr(this,Te);if(ro(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||Z.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)qn(this.i,this.l,Z,"[Invalid Chunked Response]"),Tn(this),$n(this);else if(0<Z.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),z(nt),nt.M=!0,tt(11))}}else qn(this.i,this.l,Z,null),Tr(this,Z);rt==4&&Tn(this),this.o&&!this.J&&(rt==4?he(this.j,this):(this.o=!1,Er(this)))}else qa(this.g),g==400&&0<Z.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Tn(this),$n(this)}}}catch{}finally{}};function ro(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function vr(o,d){var g=o.C,T=d.indexOf(`
`,g);return T==-1?_r:(g=Number(d.substring(g,T)),isNaN(g)?oi:(T+=1,T+g>d.length?_r:(d=d.slice(T,T+g),o.C=T+g,d)))}Et.prototype.cancel=function(){this.J=!0,Tn(this)};function Er(o){o.S=Date.now()+o.I,Ji(o,o.I)}function Ji(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Nt(N(o.ba,o),d)}function ai(o){o.B&&(p.clearTimeout(o.B),o.B=null)}Et.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Na(this.i,this.A),this.L!=2&&(yr(),tt(17)),Tn(this),this.s=2,$n(this)):Ji(this,this.S-o)};function $n(o){o.j.G==0||o.J||he(o.j,o)}function Tn(o){ai(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,Yt(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function Tr(o,d){try{var g=o.j;if(g.G!=0&&(g.g==o||wr(g.h,o))){if(!o.K&&wr(g.h,o)&&g.G==3){try{var T=g.Da.g.parse(d)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)J(g),h(g);else break e;B(g),tt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Nt(N(g.Za,g),6e3));if(1>=es(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else pe(g,11)}else if((o.K||g.g==o)&&J(g),!se(d))for(O=g.Da.g.parse(d),d=0;d<O.length;d++){let ve=O[d];if(g.T=ve[0],ve=ve[1],g.G==2)if(ve[0]=="c"){g.K=ve[1],g.ia=ve[2];const nt=ve[3];nt!=null&&(g.la=nt,g.j.info("VER="+g.la));const rt=ve[4];rt!=null&&(g.Aa=rt,g.j.info("SVER="+g.Aa));const Wn=ve[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(T=1.5*Wn,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Te=o.g;if(Te){const Cn=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var j=T.h;j.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ci(j,j.h),j.h=null))}if(T.D){const Tt=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;Tt&&(T.ya=Tt,Ve(T.I,T.D,Tt))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var Z=o;if(T.qa=$e(T,T.J?T.ia:null,T.W),Z.K){ot(T.h,Z);var De=Z,Oe=T.L;Oe&&(De.I=Oe),De.B&&(ai(De),Er(De)),T.g=Z}else x(T);0<g.i.length&&m(g)}else ve[0]!="stop"&&ve[0]!="close"||pe(g,7);else g.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?pe(g,7):c(g):ve[0]!="noop"&&g.l&&g.l.ta(ve),g.v=0)}}yr(4)}catch{}}var Va=class{constructor(o,d){this.g=o,this.map=d}};function io(o){this.l=o||10,p.PerformanceNavigationTiming?(o=p.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function es(o){return o.h?1:o.g?o.g.size:0}function wr(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function ci(o,d){o.g?o.g.add(d):o.h=d}function ot(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}io.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wn(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const g of o.g.values())d=d.concat(g.D);return d}return L(o.i)}function ui(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(_(o)){for(var d=[],g=o.length,T=0;T<g;T++)d.push(o[T]);return d}d=[],g=0;for(T in o)d[g++]=o[T];return d}function Oa(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(_(o)||typeof o=="string"){var d=[];o=o.length;for(var g=0;g<o;g++)d.push(g);return d}d=[],g=0;for(const T in o)d[g++]=T;return d}}}function so(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(_(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var g=Oa(o),T=ui(o),O=T.length,j=0;j<O;j++)d.call(void 0,T[j],g&&g[j],o)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oo(o,d){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var T=o[g].indexOf("="),O=null;if(0<=T){var j=o[g].substring(0,T);O=o[g].substring(T+1)}else j=o[g];d(j,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Vt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Vt){this.h=o.h,hi(this,o.j),this.o=o.o,this.g=o.g,di(this,o.s),this.l=o.l;var d=o.i,g=new An;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),It(this,g),this.m=o.m}else o&&(d=String(o).match(li))?(this.h=!1,hi(this,d[1]||"",!0),this.o=Ir(d[2]||""),this.g=Ir(d[3]||"",!0),di(this,d[4]),this.l=Ir(d[5]||"",!0),It(this,d[6]||"",!0),this.m=Ir(d[7]||"")):(this.h=!1,this.i=new An(null,this.h))}Vt.prototype.toString=function(){var o=[],d=this.j;d&&o.push(Ar(d,tn,!0),":");var g=this.g;return(g||d=="file")&&(o.push("//"),(d=this.o)&&o.push(Ar(d,tn,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(Ar(g,g.charAt(0)=="/"?La:ts,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",Ar(g,ao)),o.join("")};function Ot(o){return new Vt(o)}function hi(o,d,g){o.j=g?Ir(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function di(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function It(o,d,g){d instanceof An?(o.i=d,Ma(o.i,o.h)):(g||(d=Ar(d,br)),o.i=new An(d,o.h))}function Ve(o,d,g){o.i.set(d,g)}function en(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ir(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ar(o,d,g){return typeof o=="string"?(o=encodeURI(o).replace(d,In),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function In(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var tn=/[#\/\?@]/g,ts=/[#\?:]/g,La=/[#\?]/g,br=/[#\?@]/g,ao=/#/g;function An(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function Ht(o){o.g||(o.g=new Map,o.h=0,o.i&&oo(o.i,function(d,g){o.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}n=An.prototype,n.add=function(o,d){Ht(this),this.i=null,o=Hn(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(d),this.h+=1,this};function ns(o,d){Ht(o),d=Hn(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function co(o,d){return Ht(o),d=Hn(o,d),o.g.has(d)}n.forEach=function(o,d){Ht(this),this.g.forEach(function(g,T){g.forEach(function(O){o.call(d,O,T,this)},this)},this)},n.na=function(){Ht(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let T=0;T<d.length;T++){const O=o[T];for(let j=0;j<O.length;j++)g.push(d[T])}return g},n.V=function(o){Ht(this);let d=[];if(typeof o=="string")co(this,o)&&(d=d.concat(this.g.get(Hn(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)d=d.concat(o[g])}return d},n.set=function(o,d){return Ht(this),this.i=null,o=Hn(this,o),co(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},n.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function rs(o,d,g){ns(o,d),0<g.length&&(o.i=null,o.g.set(Hn(o,d),L(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var T=d[g];const j=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var O=j;Z[T]!==""&&(O+="="+encodeURIComponent(String(Z[T]))),o.push(O)}}return this.i=o.join("&")};function Hn(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function Ma(o,d){d&&!o.j&&(Ht(o),o.i=null,o.g.forEach(function(g,T){var O=T.toLowerCase();T!=O&&(ns(this,T),rs(this,O,g))},o)),o.j=d}function is(o,d){const g=new En;if(p.Image){const T=new Image;T.onload=Y(nn,g,"TestLoadImage: loaded",!0,d,T),T.onerror=Y(nn,g,"TestLoadImage: error",!1,d,T),T.onabort=Y(nn,g,"TestLoadImage: abort",!1,d,T),T.ontimeout=Y(nn,g,"TestLoadImage: timeout",!1,d,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=o}else d(!1)}function Fa(o,d){const g=new En,T=new AbortController,O=setTimeout(()=>{T.abort(),nn(g,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:T.signal}).then(j=>{clearTimeout(O),j.ok?nn(g,"TestPingServer: ok",!0,d):nn(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),nn(g,"TestPingServer: error",!1,d)})}function nn(o,d,g,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(g)}catch{}}function Ua(){this.g=new Jr}function ja(o,d,g){const T=g||"";try{so(o,function(O,j){let Z=O;E(O)&&(Z=Jt(O)),d.push(T+j+"="+encodeURIComponent(Z))})}catch(O){throw d.push(T+"type="+encodeURIComponent("_badmap")),O}}function fi(o){this.l=o.Ub||null,this.j=o.eb||!1}H(fi,Zr),fi.prototype.g=function(){return new pi(this.l,this.j)},fi.prototype.i=(function(o){return function(){return o}})({});function pi(o,d){xe.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(pi,xe),n=pi.prototype,n.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,bn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||p).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uo(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function uo(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?zn(this):bn(this),this.readyState==3&&uo(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,zn(this))},n.Qa=function(o){this.g&&(this.response=o,zn(this))},n.ga=function(){this.g&&zn(this)};function zn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,bn(o)}n.setRequestHeader=function(o,d){this.u.append(o,d)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=d.next();return o.join(`\r
`)};function bn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ss(o){let d="";return Be(o,function(g,T){d+=T,d+=":",d+=g,d+=`\r
`}),d}function Cr(o,d,g){e:{for(T in g){var T=!1;break e}T=!0}T||(g=ss(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):Ve(o,d,g))}function Fe(o){xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Fe,xe);var lo=/^https?$/i,os=["POST","PUT"];n=Fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,d,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?Ki(this.o):Ki(ii),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(j){ho(this,j);return}if(o=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)g.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const j of T.keys())g.set(j,T.get(j));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),O=p.FormData&&o instanceof p.FormData,!(0<=Array.prototype.indexOf.call(os,d,void 0))||T||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of g)this.g.setRequestHeader(j,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{as(this),this.u=!0,this.g.send(o),this.u=!1}catch(j){ho(this,j)}};function ho(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,fo(o),rn(o)}function fo(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,st(this,"complete"),st(this,"abort"),rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?po(this):this.bb())},n.bb=function(){po(this)};function po(o){if(o.h&&typeof u<"u"&&(!o.v[1]||Ct(o)!=4||o.Z()!=2)){if(o.u&&Ct(o)==4)Js(o.Ea,0,o);else if(st(o,"readystatechange"),Ct(o)==4){o.h=!1;try{const Z=o.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var T;if(T=Z===0){var O=String(o.D).match(li)[1]||null;!O&&p.self&&p.self.location&&(O=p.self.location.protocol.slice(0,-1)),T=!lo.test(O?O.toLowerCase():"")}g=T}if(g)st(o,"complete"),st(o,"success");else{o.m=6;try{var j=2<Ct(o)?o.g.statusText:""}catch{j=""}o.l=j+" ["+o.Z()+"]",fo(o)}}finally{rn(o)}}}}function rn(o,d){if(o.g){as(o);const g=o.g,T=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||st(o,"ready");try{g.onreadystatechange=T}catch{}}}function as(o){o.I&&(p.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ct(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),xa(d)}};function go(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function qa(o){const d={};o=(o.g&&2<=Ct(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<o.length;T++){if(se(o[T]))continue;var g=V(o[T]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=d[O]||[];d[O]=j,j.push(g)}l(d,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(o,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||d}function s(o){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,o),this.cb=Sr("retryDelaySeedMs",1e4,o),this.Wa=Sr("forwardChannelMaxRetries",2,o),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new io(o&&o.concurrentRequestLimit),this.Da=new Ua,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(o,d,g,T){tt(0),this.W=o,this.H=d||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=$e(this,null,this.W),m(this)};function c(o){if(f(o),o.G==3){var d=o.U++,g=Ot(o.I);if(Ve(g,"SID",o.K),Ve(g,"RID",d),Ve(g,"TYPE","terminate"),R(o,g),d=new Et(o,o.j,d),d.L=2,d.v=en(Ot(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=d.v,g=!0),g||(d.g=St(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Er(d)}Ke(o)}function h(o){o.g&&(z(o),o.g.cancel(),o.g=null)}function f(o){h(o),o.u&&(p.clearTimeout(o.u),o.u=null),J(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&p.clearTimeout(o.s),o.s=null)}function m(o){if(!Zi(o.h)&&!o.s){o.s=!0;var d=o.Ga;yt||Hi(),gn||(yt(),gn=!0),Qt.add(d,o),o.B=0}}function y(o,d){return es(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Nt(N(o.Ga,o,d),Ie(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const O=new Et(this,this.j,o);let j=this.o;if(this.S&&(j?(j=S(j),D(j,this.S)):j=this.S),this.m!==null||this.O||(O.H=j,j=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(d+=T,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=A(this,O,d),g=Ot(this.I),Ve(g,"RID",o),Ve(g,"CVER",22),this.D&&Ve(g,"X-HTTP-Session-Id",this.D),R(this,g),j&&(this.O?d="headers="+encodeURIComponent(String(ss(j)))+"&"+d:this.m&&Cr(g,this.m,j)),ci(this.h,O),this.Ua&&Ve(g,"TYPE","init"),this.P?(Ve(g,"$req",d),Ve(g,"SID","null"),O.T=!0,Bn(O,g,null)):Bn(O,g,d),this.G=2}}else this.G==3&&(o?v(this,o):this.i.length==0||Zi(this.h)||v(this))};function v(o,d){var g;d?g=d.l:g=o.U++;const T=Ot(o.I);Ve(T,"SID",o.K),Ve(T,"RID",g),Ve(T,"AID",o.T),R(o,T),o.m&&o.o&&Cr(T,o.m,o.o),g=new Et(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),d&&(o.i=d.D.concat(o.i)),d=A(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ci(o.h,g),Bn(g,T,d)}function R(o,d){o.H&&Be(o.H,function(g,T){Ve(d,T,g)}),o.l&&so({},function(g,T){Ve(d,T,g)})}function A(o,d,g){g=Math.min(o.i.length,g);var T=o.l?N(o.l.Na,o.l,o):null;e:{var O=o.i;let j=-1;for(;;){const Z=["count="+g];j==-1?0<g?(j=O[0].g,Z.push("ofs="+j)):j=0:Z.push("ofs="+j);let De=!0;for(let Oe=0;Oe<g;Oe++){let ve=O[Oe].g;const nt=O[Oe].map;if(ve-=j,0>ve)j=Math.max(0,O[Oe].g-100),De=!1;else try{ja(nt,Z,"req"+ve+"_")}catch{T&&T(nt)}}if(De){T=Z.join("&");break e}}}return o=o.i.splice(0,g),d.D=o,T}function x(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;yt||Hi(),gn||(yt(),gn=!0),Qt.add(d,o),o.v=0}}function B(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Nt(N(o.Fa,o),Ie(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,U(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Nt(N(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),h(this),U(this))};function z(o){o.A!=null&&(p.clearTimeout(o.A),o.A=null)}function U(o){o.g=new Et(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=Ot(o.qa);Ve(d,"RID","rpc"),Ve(d,"SID",o.K),Ve(d,"AID",o.T),Ve(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(d,"TO",o.ja),Ve(d,"TYPE","xmlhttp"),R(o,d),o.m&&o.o&&Cr(d,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=en(Ot(d)),g.m=null,g.P=!0,Yi(g,o)}n.Za=function(){this.C!=null&&(this.C=null,h(this),B(this),tt(19))};function J(o){o.C!=null&&(p.clearTimeout(o.C),o.C=null)}function he(o,d){var g=null;if(o.g==d){J(o),z(o),o.g=null;var T=2}else if(wr(o.h,d))g=d.D,ot(o.h,d),T=1;else return;if(o.G!=0){if(d.o)if(T==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var O=o.B;T=Ze(),st(T,new vn(T,g)),m(o)}else x(o);else if(O=d.s,O==3||O==0&&0<d.X||!(T==1&&y(o,d)||T==2&&B(o)))switch(g&&0<g.length&&(d=o.h,d.i=d.i.concat(g)),O){case 1:pe(o,5);break;case 4:pe(o,10);break;case 3:pe(o,6);break;default:pe(o,2)}}}function Ie(o,d){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*d}function pe(o,d){if(o.j.info("Error code "+d),d==2){var g=N(o.fb,o),T=o.Xa;const O=!T;T=new Vt(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||hi(T,"https"),en(T),O?is(T.toString(),g):Fa(T.toString(),g)}else tt(2);o.G=0,o.l&&o.l.sa(d),Ke(o),f(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Ke(o){if(o.G=0,o.ka=[],o.l){const d=wn(o.h);(d.length!=0||o.i.length!=0)&&(Q(o.ka,d),Q(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function $e(o,d,g){var T=g instanceof Vt?Ot(g):new Vt(g);if(T.g!="")d&&(T.g=d+"."+T.g),di(T,T.s);else{var O=p.location;T=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var j=new Vt(null);T&&hi(j,T),d&&(j.g=d),O&&di(j,O),g&&(j.l=g),T=j}return g=o.D,d=o.ya,g&&d&&Ve(T,g,d),Ve(T,"VER",o.la),R(o,T),T}function St(o,d,g){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new Fe(new fi({eb:g})):new Fe(o.pa),d.Ha(o.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rt(){}n=Rt.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ee(){}Ee.prototype.g=function(o,d){return new He(o,d)};function He(o,d){xe.call(this),this.g=new s(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!se(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!se(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new Lt(this)}H(He,xe),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){c(this.g)},He.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=Jt(o),o=g);d.i.push(new Va(d.Ya++,o)),d.G==3&&m(d)},He.prototype.N=function(){this.g.l=null,delete this.j,c(this.g),delete this.g,He.aa.N.call(this)};function Ce(o){_n.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const g in d){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}H(Ce,_n);function Ue(){ei.call(this),this.status=1}H(Ue,ei);function Lt(o){this.g=o}H(Lt,Rt),Lt.prototype.ua=function(){st(this.g,"a")},Lt.prototype.ta=function(o){st(this.g,new Ce(o))},Lt.prototype.sa=function(o){st(this.g,new Ue)},Lt.prototype.ra=function(){st(this.g,"b")},Ee.prototype.createWebChannel=Ee.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,ud=function(){return new Ee},cd=function(){return Ze()},ad=Zt,pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,xo=ri,no.COMPLETE="complete",od=no,eo.EventType=Dt,Dt.OPEN="a",Dt.CLOSE="b",Dt.ERROR="c",Dt.MESSAGE="d",xe.prototype.listen=xe.prototype.K,hs=eo,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,sd=Fe}).apply(typeof Eo<"u"?Eo:typeof self<"u"?self:typeof window<"u"?window:{});const ol="@firebase/firestore",al="4.9.0";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Ui="12.0.0";/**
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
 */const Fr=new Dc("@firebase/firestore");function yi(){return Fr.logLevel}function ie(n,...e){if(Fr.logLevel<=Se.DEBUG){const t=e.map($c);Fr.debug(`Firestore (${Ui}): ${n}`,...t)}}function On(n,...e){if(Fr.logLevel<=Se.ERROR){const t=e.map($c);Fr.error(`Firestore (${Ui}): ${n}`,...t)}}function ki(n,...e){if(Fr.logLevel<=Se.WARN){const t=e.map($c);Fr.warn(`Firestore (${Ui}): ${n}`,...t)}}function $c(n){if(typeof n=="string")return n;try{/**
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
 */function fe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ld(n,r,t)}function ld(n,e,t){let r=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw On(r),new Error(r)}function Ne(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||ld(e,i,r)}function _e(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class hd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dt.UNAUTHENTICATED)))}shutdown(){}}class d_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class f_{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ne(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new xn,e.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new xn)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new hd(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class p_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class g_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new p_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ne(this.o===void 0,3512);const r=a=>{a.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ie("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function y_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Hc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=y_(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function gc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return ec(i)===ec(a)?Re(i,a):ec(i)?1:-1}return Re(n.length,e.length)}const __=55296,v_=57343;function ec(n){const e=n.charCodeAt(0);return e>=__&&e<=v_}function xi(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const ul="__name__";class on{constructor(e,t,r){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&fe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=on.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Re(e.length,t.length)}static compareSegments(e,t){const r=on.isNumericId(e),i=on.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?on.extractNumericId(e).compare(on.extractNumericId(t)):gc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sr.fromString(e.substring(4,e.length-2))}}class Me extends on{construct(e,t,r){return new Me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Me(t)}static emptyPath(){return new Me([])}}const E_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends on{construct(e,t,r){return new ct(e,t,r)}static isValidIdentifier(e){return E_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ul}static keyField(){return new ct([ul])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new re(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new re(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new re(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(u=!u,i++):p!=="."||u?(r+=p,i++):(a(),i++)}if(a(),u)throw new re(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(t)}static emptyPath(){return new ct([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Me.fromString(e))}static fromName(e){return new ce(Me.fromString(e).popFirst(5))}static empty(){return new ce(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Me(e.slice()))}}/**
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
 */function dd(n,e,t){if(!t)throw new re(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function T_(n,e,t,r){if(e===!0&&r===!0)throw new re(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ll(n){if(!ce.isDocumentKey(n))throw new re(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hl(n){if(ce.isDocumentKey(n))throw new re(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ua(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":fe(12329,{type:typeof n})}function Ur(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new re(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ua(n);throw new re(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ye(n,e){const t={typeString:n};return e&&(t.value=e),t}function Us(n,e){if(!fd(n))throw new re(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new re(K.INVALID_ARGUMENT,t);return!0}/**
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
 */const dl=-62135596800,fl=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*fl);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<dl)throw new re(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fl}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Us(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:Ye("string",je._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new je(0,0))}static max(){return new ye(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Is=-1;function w_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ye.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new ar(i,ce.empty(),e)}function I_(n){return new ar(n.readTime,n.key,Is)}class ar{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ar(ye.min(),ce.empty(),Is)}static max(){return new ar(ye.max(),ce.empty(),Is)}}function A_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
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
 */const b_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ji(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==b_)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,r)=>{t(e)}))}static reject(e){return new X(((t,r)=>{r(e)}))}static waitFor(e){return new X(((t,r)=>{let i=0,a=0,u=!1;e.forEach((p=>{++i,p.next((()=>{++a,u&&a===i&&t()}),(_=>r(_)))})),u=!0,a===i&&t()}))}static or(e){let t=X.resolve(!1);for(const r of e)t=t.next((i=>i?X.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new X(((r,i)=>{const a=e.length,u=new Array(a);let p=0;for(let _=0;_<a;_++){const E=_;t(e[E]).next((I=>{u[E]=I,++p,p===a&&r(u)}),(I=>i(I)))}}))}static doWhile(e,t){return new X(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function S_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class la{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}la.ce=-1;/**
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
 */const zc=-1;function ha(n){return n==null}function Go(n){return n===0&&1/n==-1/0}function R_(n){return typeof n=="number"&&Number.isInteger(n)&&!Go(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const pd="";function P_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=pl(e)),e=k_(n.get(t),e);return pl(e)}function k_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case pd:t+="";break;default:t+=a}}return t}function pl(n){return n+pd+""}/**
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
 */function gl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class qe{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=a??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new at(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ml(this.data.getIterator())}getIteratorFrom(e){return new ml(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class ml{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Wt([])}unionWith(e){let t=new et(ct.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class md extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new md("Invalid base64 string: "+a):a}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let u=0;u<i.length;++u)a+=String.fromCharCode(i[u]);return a})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const x_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(n){if(Ne(!!n,39018),typeof n=="string"){let e=0;const t=x_.exec(n);if(Ne(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ur(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
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
 */const yd="server_timestamp",_d="__type__",vd="__previous_value__",Ed="__local_write_time__";function Wc(n){return(n?.mapValue?.fields||{})[_d]?.stringValue===yd}function da(n){const e=n.mapValue.fields[vd];return Wc(e)?da(e):e}function As(n){const e=cr(n.mapValue.fields[Ed].timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */class D_{constructor(e,t,r,i,a,u,p,_,E,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=E,this.isUsingEmulator=I}}const Ko="(default)";class bs{constructor(e,t){this.projectId=e,this.database=t||Ko}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database===Ko}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Td="__type__",N_="__max__",wo={mapValue:{}},wd="__vector__",Qo="value";function lr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wc(n)?4:O_(n)?9007199254740991:V_(n)?10:11:fe(28295,{value:n})}function fn(n,e){if(n===e)return!0;const t=lr(n);if(t!==lr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return As(n).isEqual(As(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const u=cr(i.timestampValue),p=cr(a.timestampValue);return u.seconds===p.seconds&&u.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return ur(i.bytesValue).isEqual(ur(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return ze(i.geoPointValue.latitude)===ze(a.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return ze(i.integerValue)===ze(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const u=ze(i.doubleValue),p=ze(a.doubleValue);return u===p?Go(u)===Go(p):isNaN(u)&&isNaN(p)}return!1})(n,e);case 9:return xi(n.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return(function(i,a){const u=i.mapValue.fields||{},p=a.mapValue.fields||{};if(gl(u)!==gl(p))return!1;for(const _ in u)if(u.hasOwnProperty(_)&&(p[_]===void 0||!fn(u[_],p[_])))return!1;return!0})(n,e);default:return fe(52216,{left:n})}}function Cs(n,e){return(n.values||[]).find((t=>fn(t,e)))!==void 0}function Di(n,e){if(n===e)return 0;const t=lr(n),r=lr(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const p=ze(a.integerValue||a.doubleValue),_=ze(u.integerValue||u.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return yl(n.timestampValue,e.timestampValue);case 4:return yl(As(n),As(e));case 5:return gc(n.stringValue,e.stringValue);case 6:return(function(a,u){const p=ur(a),_=ur(u);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const p=a.split("/"),_=u.split("/");for(let E=0;E<p.length&&E<_.length;E++){const I=Re(p[E],_[E]);if(I!==0)return I}return Re(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const p=Re(ze(a.latitude),ze(u.latitude));return p!==0?p:Re(ze(a.longitude),ze(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return _l(n.arrayValue,e.arrayValue);case 10:return(function(a,u){const p=a.fields||{},_=u.fields||{},E=p[Qo]?.arrayValue,I=_[Qo]?.arrayValue,k=Re(E?.values?.length||0,I?.values?.length||0);return k!==0?k:_l(E,I)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===wo.mapValue&&u===wo.mapValue)return 0;if(a===wo.mapValue)return 1;if(u===wo.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),E=u.fields||{},I=Object.keys(E);_.sort(),I.sort();for(let k=0;k<_.length&&k<I.length;++k){const N=gc(_[k],I[k]);if(N!==0)return N;const Y=Di(p[_[k]],E[I[k]]);if(Y!==0)return Y}return Re(_.length,I.length)})(n.mapValue,e.mapValue);default:throw fe(23264,{he:t})}}function yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=cr(n),r=cr(e),i=Re(t.seconds,r.seconds);return i!==0?i:Re(t.nanos,r.nanos)}function _l(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=Di(t[i],r[i]);if(a)return a}return Re(t.length,r.length)}function Ni(n){return mc(n)}function mc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=cr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ur(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=mc(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const u of r)a?a=!1:i+=",",i+=`${u}:${mc(t.fields[u])}`;return i+"}"})(n.mapValue):fe(61005,{value:n})}function Do(n){switch(lr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=da(n);return e?16+Do(e):16;case 5:return 2*n.stringValue.length;case 6:return ur(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Do(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Br(r.fields,((a,u)=>{i+=a.length+Do(u)})),i})(n.mapValue);default:throw fe(13486,{value:n})}}function vl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yc(n){return!!n&&"integerValue"in n}function Gc(n){return!!n&&"arrayValue"in n}function El(n){return!!n&&"nullValue"in n}function Tl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function No(n){return!!n&&"mapValue"in n}function V_(n){return(n?.mapValue?.fields||{})[Td]?.stringValue===wd}function ys(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Br(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ys(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ys(n.arrayValue.values[t]);return e}return{...n}}function O_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===N_}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!No(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ys(t)}setAll(e){let t=ct.emptyPath(),r={},i=[];e.forEach(((u,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}u?r[p.lastSegment()]=ys(u):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());No(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];No(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Br(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Ut(ys(this.value))}}function Id(n){const e=[];return Br(n.fields,((t,r)=>{const i=new ct([t]);if(No(r)){const a=Id(r.mapValue).fields;if(a.length===0)e.push(i);else for(const u of a)e.push(i.child(u))}else e.push(i)})),new Wt(e)}/**
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
 */class ft{constructor(e,t,r,i,a,u,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=u,this.documentState=p}static newInvalidDocument(e){return new ft(e,0,ye.min(),ye.min(),ye.min(),Ut.empty(),0)}static newFoundDocument(e,t,r,i){return new ft(e,1,t,ye.min(),r,i,0)}static newNoDocument(e,t){return new ft(e,2,t,ye.min(),ye.min(),Ut.empty(),0)}static newUnknownDocument(e,t){return new ft(e,3,t,ye.min(),ye.min(),Ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xo{constructor(e,t){this.position=e,this.inclusive=t}}function wl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],u=n.position[i];if(a.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=Di(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Il(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yo{constructor(e,t="asc"){this.field=e,this.dir=t}}function L_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ad{}class Xe extends Ad{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new F_(e,t,r):t==="array-contains"?new q_(e,r):t==="in"?new B_(e,r):t==="not-in"?new $_(e,r):t==="array-contains-any"?new H_(e,r):new Xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new U_(e,r):new j_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Di(t,this.value)):t!==null&&lr(this.value)===lr(t)&&this.matchesComparison(Di(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Ad{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Kt(e,t)}matches(e){return bd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bd(n){return n.op==="and"}function Cd(n){return M_(n)&&bd(n)}function M_(n){for(const e of n.filters)if(e instanceof Kt)return!1;return!0}function _c(n){if(n instanceof Xe)return n.field.canonicalString()+n.op.toString()+Ni(n.value);if(Cd(n))return n.filters.map((e=>_c(e))).join(",");{const e=n.filters.map((t=>_c(t))).join(",");return`${n.op}(${e})`}}function Sd(n,e){return n instanceof Xe?(function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)})(n,e):n instanceof Kt?(function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,u,p)=>a&&Sd(u,i.filters[p])),!0):!1})(n,e):void fe(19439)}function Rd(n){return n instanceof Xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ni(t.value)}`})(n):n instanceof Kt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Rd).join(" ,")+"}"})(n):"Filter"}class F_ extends Xe{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class U_ extends Xe{constructor(e,t){super(e,"in",t),this.keys=Pd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class j_ extends Xe{constructor(e,t){super(e,"not-in",t),this.keys=Pd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Pd(n,e){return(e.arrayValue?.values||[]).map((t=>ce.fromName(t.referenceValue)))}class q_ extends Xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gc(t)&&Cs(t.arrayValue,this.value)}}class B_ extends Xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cs(this.value.arrayValue,t)}}class $_ extends Xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cs(this.value.arrayValue,t)}}class H_ extends Xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Cs(this.value.arrayValue,r)))}}/**
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
 */class z_{constructor(e,t=null,r=[],i=[],a=null,u=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=u,this.endAt=p,this.Te=null}}function Al(n,e=null,t=[],r=[],i=null,a=null,u=null){return new z_(n,e,t,r,i,a,u)}function Kc(n){const e=_e(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>_c(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),ha(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ni(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ni(r))).join(",")),e.Te=t}return e.Te}function Qc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!L_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Il(n.startAt,e.startAt)&&Il(n.endAt,e.endAt)}function vc(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class js{constructor(e,t=null,r=[],i=[],a=null,u="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=u,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function W_(n,e,t,r,i,a,u,p){return new js(n,e,t,r,i,a,u,p)}function Xc(n){return new js(n)}function bl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kd(n){return n.collectionGroup!==null}function _s(n){const e=_e(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let p=new et(ct.comparator);return u.filters.forEach((_=>{_.getFlattenedFilters().forEach((E=>{E.isInequality()&&(p=p.add(E.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Yo(a,r))})),t.has(ct.keyField().canonicalString())||e.Ie.push(new Yo(ct.keyField(),r))}return e.Ie}function un(n){const e=_e(n);return e.Ee||(e.Ee=G_(e,_s(n))),e.Ee}function G_(n,e){if(n.limitType==="F")return Al(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Yo(i.field,a)}));const t=n.endAt?new Xo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xo(n.startAt.position,n.startAt.inclusive):null;return Al(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ec(n,e){const t=n.filters.concat([e]);return new js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Tc(n,e,t){return new js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fa(n,e){return Qc(un(n),un(e))&&n.limitType===e.limitType}function xd(n){return`${Kc(un(n))}|lt:${n.limitType}`}function _i(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Rd(i))).join(", ")}]`),ha(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Ni(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Ni(i))).join(",")),`Target(${r})`})(un(n))}; limitType=${n.limitType})`}function pa(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ce.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of _s(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(u,p,_){const E=wl(u,p,_);return u.inclusive?E<=0:E<0})(r.startAt,_s(r),i)||r.endAt&&!(function(u,p,_){const E=wl(u,p,_);return u.inclusive?E>=0:E>0})(r.endAt,_s(r),i))})(n,e)}function K_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dd(n){return(e,t)=>{let r=!1;for(const i of _s(n)){const a=Q_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function Q_(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):(function(a,u,p){const _=u.data.field(a),E=p.data.field(a);return _!==null&&E!==null?Di(_,E):fe(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:n.dir})}}/**
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
 */class $r{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return gd(this.inner)}size(){return this.innerSize}}/**
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
 */const X_=new qe(ce.comparator);function Ln(){return X_}const Nd=new qe(ce.comparator);function ds(...n){let e=Nd;for(const t of n)e=e.insert(t.key,t);return e}function Vd(n){let e=Nd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Dr(){return vs()}function Od(){return vs()}function vs(){return new $r((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Y_=new qe(ce.comparator),J_=new et(ce.comparator);function Pe(...n){let e=J_;for(const t of n)e=e.add(t);return e}const Z_=new et(Re);function ev(){return Z_}/**
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
 */function Yc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function Ld(n){return{integerValue:""+n}}function tv(n,e){return R_(e)?Ld(e):Yc(n,e)}/**
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
 */class ga{constructor(){this._=void 0}}function nv(n,e,t){return n instanceof Ss?(function(i,a){const u={fields:{[_d]:{stringValue:yd},[Ed]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Wc(a)&&(a=da(a)),a&&(u.fields[vd]=a),{mapValue:u}})(t,e):n instanceof Rs?Fd(n,e):n instanceof Ps?Ud(n,e):(function(i,a){const u=Md(i,a),p=Cl(u)+Cl(i.Ae);return yc(u)&&yc(i.Ae)?Ld(p):Yc(i.serializer,p)})(n,e)}function rv(n,e,t){return n instanceof Rs?Fd(n,e):n instanceof Ps?Ud(n,e):t}function Md(n,e){return n instanceof Jo?(function(r){return yc(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Ss extends ga{}class Rs extends ga{constructor(e){super(),this.elements=e}}function Fd(n,e){const t=jd(e);for(const r of n.elements)t.some((i=>fn(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Ps extends ga{constructor(e){super(),this.elements=e}}function Ud(n,e){let t=jd(e);for(const r of n.elements)t=t.filter((i=>!fn(i,r)));return{arrayValue:{values:t}}}class Jo extends ga{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cl(n){return ze(n.integerValue||n.doubleValue)}function jd(n){return Gc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class iv{constructor(e,t){this.field=e,this.transform=t}}function sv(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Rs&&i instanceof Rs||r instanceof Ps&&i instanceof Ps?xi(r.elements,i.elements,fn):r instanceof Jo&&i instanceof Jo?fn(r.Ae,i.Ae):r instanceof Ss&&i instanceof Ss})(n.transform,e.transform)}class ov{constructor(e,t){this.version=e,this.transformResults=t}}class Dn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ma{}function qd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $d(n.key,Dn.none()):new qs(n.key,n.data,Dn.none());{const t=n.data,r=Ut.empty();let i=new et(ct.comparator);for(let a of e.fields)if(!i.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),i=i.add(a)}return new Hr(n.key,r,new Wt(i.toArray()),Dn.none())}}function av(n,e,t){n instanceof qs?(function(i,a,u){const p=i.value.clone(),_=Rl(i.fieldTransforms,a,u.transformResults);p.setAll(_),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):n instanceof Hr?(function(i,a,u){if(!Vo(i.precondition,a))return void a.convertToUnknownDocument(u.version);const p=Rl(i.fieldTransforms,a,u.transformResults),_=a.data;_.setAll(Bd(i)),_.setAll(p),a.convertToFoundDocument(u.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Es(n,e,t,r){return n instanceof qs?(function(a,u,p,_){if(!Vo(a.precondition,u))return p;const E=a.value.clone(),I=Pl(a.fieldTransforms,_,u);return E.setAll(I),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),null})(n,e,t,r):n instanceof Hr?(function(a,u,p,_){if(!Vo(a.precondition,u))return p;const E=Pl(a.fieldTransforms,_,u),I=u.data;return I.setAll(Bd(a)),I.setAll(E),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((k=>k.field)))})(n,e,t,r):(function(a,u,p){return Vo(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):p})(n,e,t)}function cv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=Md(r.transform,i||null);a!=null&&(t===null&&(t=Ut.empty()),t.set(r.field,a))}return t||null}function Sl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xi(r,i,((a,u)=>sv(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qs extends ma{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends ma{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Bd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Rl(n,e,t){const r=new Map;Ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],u=a.transform,p=e.data.field(a.field);r.set(a.field,rv(u,p,t[i]))}return r}function Pl(n,e,t){const r=new Map;for(const i of n){const a=i.transform,u=t.data.field(i.field);r.set(i.field,nv(a,u,e))}return r}class $d extends ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uv extends ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&av(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Es(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Es(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Od();return this.mutations.forEach((i=>{const a=e.get(i.key),u=a.overlayedDocument;let p=this.applyToLocalView(u,a.mutatedFields);p=t.has(i.key)?null:p;const _=qd(u,p);_!==null&&r.set(i.key,_),u.isValidDocument()||u.convertToNoDocument(ye.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,((t,r)=>Sl(t,r)))&&xi(this.baseMutations,e.baseMutations,((t,r)=>Sl(t,r)))}}class Jc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return Y_})();const a=e.mutations;for(let u=0;u<a.length;u++)i=i.insert(a[u].key,r[u].version);return new Jc(e,t,r,i)}}/**
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
 */class hv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Qe,ke;function fv(n){switch(n){case K.OK:return fe(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return fe(15467,{code:n})}}function Hd(n){if(n===void 0)return On("GRPC error has no .code"),K.UNKNOWN;switch(n){case Qe.OK:return K.OK;case Qe.CANCELLED:return K.CANCELLED;case Qe.UNKNOWN:return K.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return K.INTERNAL;case Qe.UNAVAILABLE:return K.UNAVAILABLE;case Qe.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Qe.NOT_FOUND:return K.NOT_FOUND;case Qe.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Qe.ABORTED:return K.ABORTED;case Qe.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Qe.DATA_LOSS:return K.DATA_LOSS;default:return fe(39323,{code:n})}}(ke=Qe||(Qe={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pv(){return new TextEncoder}/**
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
 */const gv=new sr([4294967295,4294967295],0);function kl(n){const e=pv().encode(n),t=new id;return t.update(e),new Uint8Array(t.digest())}function xl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new sr([t,r],0),new sr([i,a],0)]}class Zc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fs(`Invalid padding: ${t}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=sr.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(sr.fromNumber(r)));return i.compare(gv)===1&&(i=new sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=kl(e),[r,i]=xl(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,i,a);if(!this.we(u))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Zc(a,i,t);return r.forEach((p=>u.insert(p))),u}insert(e){if(this.ge===0)return;const t=kl(e),[r,i]=xl(t);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,i,a);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ya{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ya(ye.min(),i,new qe(Re),Ln(),Pe())}}class Bs{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Bs(r,t,Pe(),Pe(),Pe())}}/**
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
 */class Oo{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class zd{constructor(e,t){this.targetId=e,this.Ce=t}}class Wd{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Dl{constructor(){this.ve=0,this.Fe=Nl(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),r=Pe();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:fe(38017,{changeType:a})}})),new Bs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Nl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class mv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ln(),this.Je=Io(),this.He=Io(),this.Ye=new qe(Re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(vc(a))if(r===0){const u=new ce(a.path);this.et(t,u,ft.newNoDocument(u,ye.min()))}else Ne(r===1,20013,{expectedCount:r});else{const u=this._t(t);if(u!==r){const p=this.ut(e),_=p?this.ct(p,e,u):1;if(_!==0){this.it(t);const E=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,E)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let u,p;try{u=ur(r).toUint8Array()}catch(_){if(_ instanceof md)return ki("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new Zc(u,i,a)}catch(_){return ki(_ instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const u=this.Ge.ht(),p=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,u)=>{const p=this.ot(u);if(p){if(a.current&&vc(p.target)){const _=new ce(p.target.path);this.It(_).has(u)||this.Et(u,_)||this.et(u,_,ft.newNoDocument(_,e))}a.Be&&(t.set(u,a.ke()),a.qe())}}));let r=Pe();this.He.forEach(((a,u)=>{let p=!0;u.forEachWhile((_=>{const E=this.ot(_);return!E||E.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,u)=>u.setReadTime(e)));const i=new ya(e,t,this.Ye,this.je,r);return this.je=Ln(),this.Je=Io(),this.He=Io(),this.Ye=new qe(Re),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Dl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new et(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new et(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Io(){return new qe(ce.comparator)}function Nl(){return new qe(ce.comparator)}const yv={asc:"ASCENDING",desc:"DESCENDING"},_v={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vv={and:"AND",or:"OR"};class Ev{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wc(n,e){return n.useProto3Json||ha(e)?e:{value:e}}function Zo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Tv(n,e){return Zo(n,e.toTimestamp())}function ln(n){return Ne(!!n,49232),ye.fromTimestamp((function(t){const r=cr(t);return new je(r.seconds,r.nanos)})(n))}function eu(n,e){return Ic(n,e).canonicalString()}function Ic(n,e){const t=(function(i){return new Me(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Kd(n){const e=Me.fromString(n);return Ne(Zd(e),10190,{key:e.toString()}),e}function Ac(n,e){return eu(n.databaseId,e.path)}function tc(n,e){const t=Kd(e);if(t.get(1)!==n.databaseId.projectId)throw new re(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new re(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(Xd(t))}function Qd(n,e){return eu(n.databaseId,e)}function wv(n){const e=Kd(n);return e.length===4?Me.emptyPath():Xd(e)}function bc(n){return new Me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xd(n){return Ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vl(n,e,t){return{name:Ac(n,e),fields:t.value.mapValue.fields}}function Iv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(E){return E==="NO_CHANGE"?0:E==="ADD"?1:E==="REMOVE"?2:E==="CURRENT"?3:E==="RESET"?4:fe(39313,{state:E})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(E,I){return E.useProto3Json?(Ne(I===void 0||typeof I=="string",58123),ut.fromBase64String(I||"")):(Ne(I===void 0||I instanceof Buffer||I instanceof Uint8Array,16193),ut.fromUint8Array(I||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,p=u&&(function(E){const I=E.code===void 0?K.UNKNOWN:Hd(E.code);return new re(I,E.message||"")})(u);t=new Wd(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=tc(n,r.document.name),a=ln(r.document.updateTime),u=r.document.createTime?ln(r.document.createTime):ye.min(),p=new Ut({mapValue:{fields:r.document.fields}}),_=ft.newFoundDocument(i,a,u,p),E=r.targetIds||[],I=r.removedTargetIds||[];t=new Oo(E,I,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=tc(n,r.document),a=r.readTime?ln(r.readTime):ye.min(),u=ft.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Oo([],p,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=tc(n,r.document),a=r.removedTargetIds||[];t=new Oo([],a,i,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,u=new dv(i,a),p=r.targetId;t=new zd(p,u)}}return t}function Av(n,e){let t;if(e instanceof qs)t={update:Vl(n,e.key,e.value)};else if(e instanceof $d)t={delete:Ac(n,e.key)};else if(e instanceof Hr)t={update:Vl(n,e.key,e.data),updateMask:Nv(e.fieldMask)};else{if(!(e instanceof uv))return fe(16599,{Vt:e.type});t={verify:Ac(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const p=u.transform;if(p instanceof Ss)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Rs)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Ps)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Jo)return{fieldPath:u.field.canonicalString(),increment:p.Ae};throw fe(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:Tv(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:fe(27497)})(n,e.precondition)),t}function bv(n,e){return n&&n.length>0?(Ne(e!==void 0,14353),n.map((t=>(function(i,a){let u=i.updateTime?ln(i.updateTime):ln(a);return u.isEqual(ye.min())&&(u=ln(a)),new ov(u,i.transformResults||[])})(t,e)))):[]}function Cv(n,e){return{documents:[Qd(n,e.path)]}}function Sv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qd(n,i);const a=(function(E){if(E.length!==0)return Jd(Kt.create(E,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(E){if(E.length!==0)return E.map((I=>(function(N){return{field:vi(N.field),direction:kv(N.dir)}})(I)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const p=wc(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(E){return{before:E.inclusive,values:E.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(E){return{before:!E.inclusive,values:E.position}})(e.endAt)),{ft:t,parent:i}}function Rv(n){let e=wv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ne(r===1,65062);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let a=[];t.where&&(a=(function(k){const N=Yd(k);return N instanceof Kt&&Cd(N)?N.getFilters():[N]})(t.where));let u=[];t.orderBy&&(u=(function(k){return k.map((N=>(function(H){return new Yo(Ei(H.field),(function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(N)))})(t.orderBy));let p=null;t.limit&&(p=(function(k){let N;return N=typeof k=="object"?k.value:k,ha(N)?null:N})(t.limit));let _=null;t.startAt&&(_=(function(k){const N=!!k.before,Y=k.values||[];return new Xo(Y,N)})(t.startAt));let E=null;return t.endAt&&(E=(function(k){const N=!k.before,Y=k.values||[];return new Xo(Y,N)})(t.endAt)),W_(e,i,u,a,p,"F",_,E)}function Pv(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ei(t.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ei(t.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ei(t.unaryFilter.field);return Xe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ei(t.unaryFilter.field);return Xe.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Xe.create(Ei(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Kt.create(t.compositeFilter.filters.map((r=>Yd(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(t.compositeFilter.op))})(n):fe(30097,{filter:n})}function kv(n){return yv[n]}function xv(n){return _v[n]}function Dv(n){return vv[n]}function vi(n){return{fieldPath:n.canonicalString()}}function Ei(n){return ct.fromServerFormat(n.fieldPath)}function Jd(n){return n instanceof Xe?(function(t){if(t.op==="=="){if(Tl(t.value))return{unaryFilter:{field:vi(t.field),op:"IS_NAN"}};if(El(t.value))return{unaryFilter:{field:vi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tl(t.value))return{unaryFilter:{field:vi(t.field),op:"IS_NOT_NAN"}};if(El(t.value))return{unaryFilter:{field:vi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(t.field),op:xv(t.op),value:t.value}}})(n):n instanceof Kt?(function(t){const r=t.getFilters().map((i=>Jd(i)));return r.length===1?r[0]:{compositeFilter:{op:Dv(t.op),filters:r}}})(n):fe(54877,{filter:n})}function Nv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Zd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class tr{constructor(e,t,r,i,a=ye.min(),u=ye.min(),p=ut.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vv{constructor(e){this.yt=e}}function Ov(n){const e=Rv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Tc(e,e.limit,"L"):e}/**
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
 */class Lv{constructor(){this.Cn=new Mv}addToCollectionParentIndex(e,t){return this.Cn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(ar.min())}updateCollectionGroup(e,t,r){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class Mv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new et(Me.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(Me.comparator)).toArray()}}/**
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
 */const Ol={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ef=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(ef,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
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
 */class Vi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Vi(0)}static cr(){return new Vi(-1)}}/**
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
 */const Ll="LruGarbageCollector",Fv=1048576;function Ml([n,e],[t,r]){const i=Re(n,t);return i===0?Re(e,r):i}class Uv{constructor(e){this.Ir=e,this.buffer=new et(Ml),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ml(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(Ll,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qi(t)?ie(Ll,"Ignoring IndexedDB error during garbage collection: ",t):await ji(t)}await this.Vr(3e5)}))}}class qv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return X.resolve(la.ce);const r=new Uv(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(Ol)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ol):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,u,p,_,E;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),i=this.params.maximumSequenceNumbersToCollect):i=k,u=Date.now(),this.nthSequenceNumber(e,i)))).next((k=>(r=k,p=Date.now(),this.removeTargets(e,r,t)))).next((k=>(a=k,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((k=>(E=Date.now(),yi()<=Se.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-I}ms
	Determined least recently used ${i} in `+(p-u)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${k} documents in `+(E-_)+`ms
Total Duration: ${E-I}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:k}))))}}function Bv(n,e){return new qv(n,e)}/**
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
 */class $v{constructor(){this.changes=new $r((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?X.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Hv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class zv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Es(r.mutation,i,Wt.empty(),je.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Pe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Pe()){const i=Dr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let u=ds();return a.forEach(((p,_)=>{u=u.insert(p,_.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Dr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Pe())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((u,p)=>{t.set(u,p)}))}))}computeViews(e,t,r,i){let a=Ln();const u=vs(),p=(function(){return vs()})();return t.forEach(((_,E)=>{const I=r.get(E.key);i.has(E.key)&&(I===void 0||I.mutation instanceof Hr)?a=a.insert(E.key,E):I!==void 0?(u.set(E.key,I.mutation.getFieldMask()),Es(I.mutation,E,I.mutation.getFieldMask(),je.now())):u.set(E.key,Wt.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((E,I)=>u.set(E,I))),t.forEach(((E,I)=>p.set(E,new Hv(I,u.get(E)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=vs();let i=new qe(((u,p)=>u-p)),a=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const p of u)p.keys().forEach((_=>{const E=t.get(_);if(E===null)return;let I=r.get(_)||Wt.empty();I=p.applyToLocalView(E,I),r.set(_,I);const k=(i.get(p.batchId)||Pe()).add(_);i=i.insert(p.batchId,k)}))})).next((()=>{const u=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),E=_.key,I=_.value,k=Od();I.forEach((N=>{if(!a.has(N)){const Y=qd(t.get(N),r.get(N));Y!==null&&k.set(N,Y),a=a.add(N)}})),u.push(this.documentOverlayCache.saveOverlays(e,E,k))}return X.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const u=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):X.resolve(Dr());let p=Is,_=a;return u.next((E=>X.forEach(E,((I,k)=>(p<k.largestBatchId&&(p=k.largestBatchId),a.get(I)?X.resolve():this.remoteDocumentCache.getEntry(e,I).next((N=>{_=_.insert(I,N)}))))).next((()=>this.populateOverlays(e,E,a))).next((()=>this.computeViews(e,_,E,Pe()))).next((I=>({batchId:p,changes:Vd(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next((r=>{let i=ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let u=ds();return this.indexManager.getCollectionParents(e,a).next((p=>X.forEach(p,(_=>{const E=(function(k,N){return new js(N,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,E,r,i).next((I=>{I.forEach(((k,N)=>{u=u.insert(k,N)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((u=>{a.forEach(((_,E)=>{const I=E.getKey();u.get(I)===null&&(u=u.insert(I,ft.newInvalidDocument(I)))}));let p=ds();return u.forEach(((_,E)=>{const I=a.get(_);I!==void 0&&Es(I.mutation,E,Wt.empty(),je.now()),pa(t,E)&&(p=p.insert(_,E))})),p}))}}/**
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
 */class Wv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return X.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:ln(i.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:Ov(i.bundledQuery),readTime:ln(i.readTime)}})(t)),X.resolve()}}/**
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
 */class Gv{constructor(){this.overlays=new qe(ce.comparator),this.qr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dr();return X.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),X.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),X.resolve()}getOverlaysForCollection(e,t,r){const i=Dr(),a=t.length+1,u=new ce(t.child("")),p=this.overlays.getIteratorFrom(u);for(;p.hasNext();){const _=p.getNext().value,E=_.getKey();if(!t.isPrefixOf(E.path))break;E.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return X.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new qe(((E,I)=>E-I));const u=this.overlays.getIterator();for(;u.hasNext();){const E=u.getNext().value;if(E.getKey().getCollectionGroup()===t&&E.largestBatchId>r){let I=a.get(E.largestBatchId);I===null&&(I=Dr(),a=a.insert(E.largestBatchId,I)),I.set(E.getKey(),E)}}const p=Dr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((E,I)=>p.set(E,I))),!(p.size()>=i)););return X.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new hv(t,r));let a=this.qr.get(t);a===void 0&&(a=Pe(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
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
 */class Kv{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
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
 */class tu{constructor(){this.Qr=new et(it.$r),this.Ur=new et(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new it(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new it(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ce(new Me([])),r=new it(t,e),i=new it(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(u=>{this.Gr(u),a.push(u.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ce(new Me([])),r=new it(t,e),i=new it(t,e+1);let a=Pe();return this.Ur.forEachInRange([r,i],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new it(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ce.comparator(e.key,t.key)||Re(e.Yr,t.Yr)}static Kr(e,t){return Re(e.Yr,t.Yr)||ce.comparator(e.key,t.key)}}/**
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
 */class Qv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new et(it.$r)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new lv(a,t,r,i);this.mutationQueue.push(u);for(const p of i)this.Zr=this.Zr.add(new it(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return X.resolve(u)}lookupMutationBatch(e,t){return X.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return X.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?zc:this.tr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),i=new it(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(u=>{const p=this.Xr(u.Yr);a.push(p)})),X.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new et(Re);return t.forEach((i=>{const a=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],(p=>{r=r.add(p.Yr)}))})),X.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ce.isDocumentKey(a)||(a=a.child(""));const u=new it(new ce(a),0);let p=new et(Re);return this.Zr.forEachWhile((_=>{const E=_.key.path;return!!r.isPrefixOf(E)&&(E.length===i&&(p=p.add(_.Yr)),!0)}),u),X.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return X.forEach(t.mutations,(i=>{const a=new it(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new it(t,0),i=this.Zr.firstAfterOrEqual(r);return X.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Xv{constructor(e){this.ri=e,this.docs=(function(){return new qe(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,u=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return X.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(t))}getEntries(e,t){let r=Ln();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():ft.newInvalidDocument(i))})),X.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Ln();const u=t.path,p=new ce(u.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:E,value:{document:I}}=_.getNext();if(!u.isPrefixOf(E.path))break;E.path.length>u.length+1||A_(I_(I),r)<=0||(i.has(I.key)||pa(t,I))&&(a=a.insert(I.key,I.mutableCopy()))}return X.resolve(a)}getAllFromCollectionGroup(e,t,r,i){fe(9500)}ii(e,t){return X.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Yv(this)}getSize(e){return X.resolve(this.size)}}class Yv extends $v{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),X.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Jv{constructor(e){this.persistence=e,this.si=new $r((t=>Kc(t)),Qc),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new tu,this.targetCount=0,this.ai=Vi.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),X.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Vi(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Pr(t),X.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((u,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),X.waitFor(a).next((()=>i))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return X.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),X.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((u=>{a.push(i.markPotentiallyOrphaned(e,u))})),X.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return X.resolve(r)}containsKey(e,t){return X.resolve(this._i.containsKey(t))}}/**
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
 */class tf{constructor(e,t){this.ui={},this.overlays={},this.ci=new la(0),this.li=!1,this.li=!0,this.hi=new Kv,this.referenceDelegate=e(this),this.Pi=new Jv(this),this.indexManager=new Lv,this.remoteDocumentCache=(function(i){return new Xv(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Vv(t),this.Ii=new Wv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Qv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){ie("MemoryPersistence","Starting transaction:",e);const i=new Zv(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return X.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class Zv extends C_{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Ri=new tu,this.Vi=null}static mi(e){return new nu(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),X.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.fi,(r=>{const i=ce.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,ye.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return X.or([()=>X.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ea{constructor(e,t){this.persistence=e,this.pi=new $r((r=>P_(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Bv(this,t)}static mi(e,t){return new ea(e,t)}Ei(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return X.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?X.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(u=>this.br(e,u,t).next((p=>{p||(r++,a.removeEntry(u,ye.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Do(e.data.value)),t}br(e,t,r){return X.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return X.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ru{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Pe(),i=Pe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new ru(e,t.fromCache,r,i)}}/**
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
 */class eE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return bp()?8:S_(pt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new eE;return this.Ss(e,t,u).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,u,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(yi()<=Se.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",_i(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),X.resolve()):(yi()<=Se.DEBUG&&ie("QueryEngine","Query:",_i(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(yi()<=Se.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",_i(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(t))):X.resolve())}ys(e,t){if(bl(t))return X.resolve(null);let r=un(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Tc(t,null,"F"),r=un(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=Pe(...a);return this.ps.getDocuments(e,u).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const E=this.Ds(t,p);return this.Cs(t,E,u,_.readTime)?this.ys(e,Tc(t,null,"F")):this.vs(e,E,t,_)}))))})))))}ws(e,t,r,i){return bl(t)||i.isEqual(ye.min())?X.resolve(null):this.ps.getDocuments(e,r).next((a=>{const u=this.Ds(t,a);return this.Cs(t,u,r,i)?X.resolve(null):(yi()<=Se.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(t)),this.vs(e,u,t,w_(i,Is)).next((p=>p)))}))}Ds(e,t){let r=new et(Dd(e));return t.forEach(((i,a)=>{pa(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return yi()<=Se.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",_i(t)),this.ps.getDocumentsMatchingQuery(e,t,ar.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
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
 */const iu="LocalStore",nE=3e8;class rE{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new qe(Re),this.xs=new $r((a=>Kc(a)),Qc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function iE(n,e,t,r){return new rE(n,e,t,r)}async function nf(n,e){const t=_e(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],p=[];let _=Pe();for(const E of i){u.push(E.batchId);for(const I of E.mutations)_=_.add(I.key)}for(const E of a){p.push(E.batchId);for(const I of E.mutations)_=_.add(I.key)}return t.localDocuments.getDocuments(r,_).next((E=>({Ls:E,removedBatchIds:u,addedBatchIds:p})))}))}))}function sE(n,e){const t=_e(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,E,I){const k=E.batch,N=k.keys();let Y=X.resolve();return N.forEach((H=>{Y=Y.next((()=>I.getEntry(_,H))).next((L=>{const Q=E.docVersions.get(H);Ne(Q!==null,48541),L.version.compareTo(Q)<0&&(k.applyToRemoteDocument(L,E),L.isValidDocument()&&(L.setReadTime(E.commitVersion),I.addEntry(L)))}))})),Y.next((()=>p.mutationQueue.removeMutationBatch(_,k)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Pe();for(let E=0;E<p.mutationResults.length;++E)p.mutationResults[E].transformResults.length>0&&(_=_.add(p.batch.mutations[E].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function rf(n){const e=_e(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function oE(n,e){const t=_e(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((I,k)=>{const N=i.get(k);if(!N)return;p.push(t.Pi.removeMatchingKeys(a,I.removedDocuments,k).next((()=>t.Pi.addMatchingKeys(a,I.addedDocuments,k))));let Y=N.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(k)!==null?Y=Y.withResumeToken(ut.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):I.resumeToken.approximateByteSize()>0&&(Y=Y.withResumeToken(I.resumeToken,r)),i=i.insert(k,Y),(function(L,Q,G){return L.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=nE?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(N,Y,I)&&p.push(t.Pi.updateTargetData(a,Y))}));let _=Ln(),E=Pe();if(e.documentUpdates.forEach((I=>{e.resolvedLimboDocuments.has(I)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,I))})),p.push(aE(a,u,e.documentUpdates).next((I=>{_=I.ks,E=I.qs}))),!r.isEqual(ye.min())){const I=t.Pi.getLastRemoteSnapshotVersion(a).next((k=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(I)}return X.waitFor(p).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,E))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function aE(n,e,t){let r=Pe(),i=Pe();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=Ln();return t.forEach(((p,_)=>{const E=a.get(p);_.isFoundDocument()!==E.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(ye.min())?(e.removeEntry(p,_.readTime),u=u.insert(p,_)):!E.isValidDocument()||_.version.compareTo(E.version)>0||_.version.compareTo(E.version)===0&&E.hasPendingWrites?(e.addEntry(_),u=u.insert(p,_)):ie(iu,"Ignoring outdated watch update for ",p,". Current version:",E.version," Watch version:",_.version)})),{ks:u,qs:i}}))}function cE(n,e){const t=_e(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=zc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function uE(n,e){const t=_e(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,X.resolve(i)):t.Pi.allocateTargetId(r).next((u=>(i=new tr(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Cc(n,e,t){const r=_e(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!qi(u))throw u;ie(iu,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Fl(n,e,t){const r=_e(n);let i=ye.min(),a=Pe();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(_,E,I){const k=_e(_),N=k.xs.get(I);return N!==void 0?X.resolve(k.Ms.get(N)):k.Pi.getTargetData(E,I)})(r,u,un(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,e,t?i:ye.min(),t?a:Pe()))).next((p=>(lE(r,K_(e),p),{documents:p,Qs:a})))))}function lE(n,e,t){let r=n.Os.get(e)||ye.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class Ul{constructor(){this.activeTargetIds=ev()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hE{constructor(){this.Mo=new Ul,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ul,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dE{Oo(e){}shutdown(){}}/**
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
 */const jl="ConnectivityMonitor";class ql{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(jl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(jl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ao=null;function Sc(){return Ao===null?Ao=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ao++,"0x"+Ao.toString(16)}/**
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
 */const nc="RestConnection",fE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Ko?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const u=Sc(),p=this.zo(e,t.toUriEncodedString());ie(nc,`Sending RPC '${e}' ${u}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:E}=new URL(p),I=Li(E);return this.Jo(e,p,_,r,I).then((k=>(ie(nc,`Received RPC '${e}' ${u}: `,k),k)),(k=>{throw ki(nc,`RPC '${e}' ${u} failed with error: `,k,"url: ",p,"request:",r),k}))}Ho(e,t,r,i,a,u){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ui})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=fE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class gE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ht="WebChannelConnection";class mE extends pE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const u=Sc();return new Promise(((p,_)=>{const E=new sd;E.setWithCredentials(!0),E.listenOnce(od.COMPLETE,(()=>{try{switch(E.getLastErrorCode()){case xo.NO_ERROR:const k=E.getResponseJson();ie(ht,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(k)),p(k);break;case xo.TIMEOUT:ie(ht,`RPC '${e}' ${u} timed out`),_(new re(K.DEADLINE_EXCEEDED,"Request time out"));break;case xo.HTTP_ERROR:const N=E.getStatus();if(ie(ht,`RPC '${e}' ${u} failed with status:`,N,"response text:",E.getResponseText()),N>0){let Y=E.getResponseJson();Array.isArray(Y)&&(Y=Y[0]);const H=Y?.error;if(H&&H.status&&H.message){const L=(function(G){const se=G.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(se)>=0?se:K.UNKNOWN})(H.status);_(new re(L,H.message))}else _(new re(K.UNKNOWN,"Server responded with status "+E.getStatus()))}else _(new re(K.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:u,h_:E.getLastErrorCode(),P_:E.getLastError()})}}finally{ie(ht,`RPC '${e}' ${u} completed.`)}}));const I=JSON.stringify(i);ie(ht,`RPC '${e}' ${u} sending request:`,i),E.send(t,"POST",I,r,15)}))}T_(e,t,r){const i=Sc(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=ud(),p=cd(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(_.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const I=a.join("");ie(ht,`Creating RPC '${e}' stream ${i}: ${I}`,_);const k=u.createWebChannel(I,_);this.I_(k);let N=!1,Y=!1;const H=new gE({Yo:Q=>{Y?ie(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,Q):(N||(ie(ht,`Opening RPC '${e}' stream ${i} transport.`),k.open(),N=!0),ie(ht,`RPC '${e}' stream ${i} sending:`,Q),k.send(Q))},Zo:()=>k.close()}),L=(Q,G,se)=>{Q.listen(G,(ue=>{try{se(ue)}catch(we){setTimeout((()=>{throw we}),0)}}))};return L(k,hs.EventType.OPEN,(()=>{Y||(ie(ht,`RPC '${e}' stream ${i} transport opened.`),H.o_())})),L(k,hs.EventType.CLOSE,(()=>{Y||(Y=!0,ie(ht,`RPC '${e}' stream ${i} transport closed`),H.a_(),this.E_(k))})),L(k,hs.EventType.ERROR,(Q=>{Y||(Y=!0,ki(ht,`RPC '${e}' stream ${i} transport errored. Name:`,Q.name,"Message:",Q.message),H.a_(new re(K.UNAVAILABLE,"The operation could not be completed")))})),L(k,hs.EventType.MESSAGE,(Q=>{if(!Y){const G=Q.data[0];Ne(!!G,16349);const se=G,ue=se?.error||se[0]?.error;if(ue){ie(ht,`RPC '${e}' stream ${i} received error:`,ue);const we=ue.status;let We=(function(S){const C=Qe[S];if(C!==void 0)return Hd(C)})(we),Be=ue.message;We===void 0&&(We=K.INTERNAL,Be="Unknown error status: "+we+" with message "+ue.message),Y=!0,H.a_(new re(We,Be)),k.close()}else ie(ht,`RPC '${e}' stream ${i} received:`,G),H.u_(G)}})),L(p,ad.STAT_EVENT,(Q=>{Q.stat===pc.PROXY?ie(ht,`RPC '${e}' stream ${i} detected buffering proxy`):Q.stat===pc.NOPROXY&&ie(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{H.__()}),0),H}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function rc(){return typeof document<"u"?document:null}/**
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
 */function _a(n){return new Ev(n,!0)}/**
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
 */class sf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Bl="PersistentStream";class of{constructor(e,t,r,i,a,u,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(On(t.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new re(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(Bl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(Bl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yE extends of{constructor(e,t,r,i,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,u),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Iv(this.serializer,e),r=(function(a){if(!("targetChange"in a))return ye.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ye.min():u.readTime?ln(u.readTime):ye.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=bc(this.serializer),t.addTarget=(function(a,u){let p;const _=u.target;if(p=vc(_)?{documents:Cv(a,_)}:{query:Sv(a,_).ft},p.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){p.resumeToken=Gd(a,u.resumeToken);const E=wc(a,u.expectedCount);E!==null&&(p.expectedCount=E)}else if(u.snapshotVersion.compareTo(ye.min())>0){p.readTime=Zo(a,u.snapshotVersion.toTimestamp());const E=wc(a,u.expectedCount);E!==null&&(p.expectedCount=E)}return p})(this.serializer,e);const r=Pv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=bc(this.serializer),t.removeTarget=e,this.q_(t)}}class _E extends of{constructor(e,t,r,i,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,u),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=bv(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=bc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Av(this.serializer,r)))};this.q_(t)}}/**
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
 */class vE{}class EE extends vE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new re(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Go(e,Ic(t,r),i,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new re(K.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,p])=>this.connection.Ho(e,Ic(t,r),i,u,p,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new re(K.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class TE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const jr="RemoteStore";class wE{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{zr(this)&&(ie(jr,"Restarting streams for network reachability change."),await(async function(_){const E=_e(_);E.Ea.add(4),await $s(E),E.Ra.set("Unknown"),E.Ea.delete(4),await va(E)})(this))}))})),this.Ra=new TE(r,i)}}async function va(n){if(zr(n))for(const e of n.da)await e(!0)}async function $s(n){for(const e of n.da)await e(!1)}function af(n,e){const t=_e(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),cu(t)?au(t):Bi(t).O_()&&ou(t,e))}function su(n,e){const t=_e(n),r=Bi(t);t.Ia.delete(e),r.O_()&&cf(t,e),t.Ia.size===0&&(r.O_()?r.L_():zr(t)&&t.Ra.set("Unknown"))}function ou(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bi(n).Y_(e)}function cf(n,e){n.Va.Ue(e),Bi(n).Z_(e)}function au(n){n.Va=new mv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Bi(n).start(),n.Ra.ua()}function cu(n){return zr(n)&&!Bi(n).x_()&&n.Ia.size>0}function zr(n){return _e(n).Ea.size===0}function uf(n){n.Va=void 0}async function IE(n){n.Ra.set("Online")}async function AE(n){n.Ia.forEach(((e,t)=>{ou(n,e)}))}async function bE(n,e){uf(n),cu(n)?(n.Ra.ha(e),au(n)):n.Ra.set("Unknown")}async function CE(n,e,t){if(n.Ra.set("Online"),e instanceof Wd&&e.state===2&&e.cause)try{await(async function(i,a){const u=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,u),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){ie(jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(n,r)}else if(e instanceof Oo?n.Va.Ze(e):e instanceof zd?n.Va.st(e):n.Va.tt(e),!t.isEqual(ye.min()))try{const r=await rf(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const p=a.Va.Tt(u);return p.targetChanges.forEach(((_,E)=>{if(_.resumeToken.approximateByteSize()>0){const I=a.Ia.get(E);I&&a.Ia.set(E,I.withResumeToken(_.resumeToken,u))}})),p.targetMismatches.forEach(((_,E)=>{const I=a.Ia.get(_);if(!I)return;a.Ia.set(_,I.withResumeToken(ut.EMPTY_BYTE_STRING,I.snapshotVersion)),cf(a,_);const k=new tr(I.target,_,E,I.sequenceNumber);ou(a,k)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){ie(jr,"Failed to raise snapshot:",r),await ta(n,r)}}async function ta(n,e,t){if(!qi(e))throw e;n.Ea.add(1),await $s(n),n.Ra.set("Offline"),t||(t=()=>rf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ie(jr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await va(n)}))}function lf(n,e){return e().catch((t=>ta(n,t,e)))}async function Ea(n){const e=_e(n),t=hr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:zc;for(;SE(e);)try{const i=await cE(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,RE(e,i)}catch(i){await ta(e,i)}hf(e)&&df(e)}function SE(n){return zr(n)&&n.Ta.length<10}function RE(n,e){n.Ta.push(e);const t=hr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function hf(n){return zr(n)&&!hr(n).x_()&&n.Ta.length>0}function df(n){hr(n).start()}async function PE(n){hr(n).ra()}async function kE(n){const e=hr(n);for(const t of n.Ta)e.ea(t.mutations)}async function xE(n,e,t){const r=n.Ta.shift(),i=Jc.from(r,e,t);await lf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Ea(n)}async function DE(n,e){e&&hr(n).X_&&await(async function(r,i){if((function(u){return fv(u)&&u!==K.ABORTED})(i.code)){const a=r.Ta.shift();hr(r).B_(),await lf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await Ea(r)}})(n,e),hf(n)&&df(n)}async function $l(n,e){const t=_e(n);t.asyncQueue.verifyOperationInProgress(),ie(jr,"RemoteStore received new credentials");const r=zr(t);t.Ea.add(3),await $s(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await va(t)}async function NE(n,e){const t=_e(n);e?(t.Ea.delete(2),await va(t)):e||(t.Ea.add(2),await $s(t),t.Ra.set("Unknown"))}function Bi(n){return n.ma||(n.ma=(function(t,r,i){const a=_e(t);return a.sa(),new yE(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:IE.bind(null,n),t_:AE.bind(null,n),r_:bE.bind(null,n),H_:CE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),cu(n)?au(n):n.Ra.set("Unknown")):(await n.ma.stop(),uf(n))}))),n.ma}function hr(n){return n.fa||(n.fa=(function(t,r,i){const a=_e(t);return a.sa(),new _E(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:PE.bind(null,n),r_:DE.bind(null,n),ta:kE.bind(null,n),na:xE.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Ea(n)):(await n.fa.stop(),n.Ta.length>0&&(ie(jr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class uu{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const u=Date.now()+r,p=new uu(e,t,u,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(n,e){if(On("AsyncQueue",`${e}: ${n}`),qi(n))return new re(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ci{static emptySet(e){return new Ci(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=ds(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Hl{constructor(){this.ga=new qe(ce.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Oi{constructor(e,t,r,i,a,u,p,_,E){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=E}static fromInitialDocuments(e,t,r,i,a){const u=[];return t.forEach((p=>{u.push({type:0,doc:p})})),new Oi(e,t,Ci.emptySet(t),u,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class VE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class OE{constructor(){this.queries=zl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=_e(t),a=i.queries;i.queries=zl(),a.forEach(((u,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new re(K.ABORTED,"Firestore shutting down"))}}function zl(){return new $r((n=>xd(n)),fa)}async function ff(n,e){const t=_e(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new VE,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(u){const p=lu(u,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&hu(t)}async function pf(n,e){const t=_e(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const u=a.Sa.indexOf(e);u>=0&&(a.Sa.splice(u,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function LE(n,e){const t=_e(n);let r=!1;for(const i of e){const a=i.query,u=t.queries.get(a);if(u){for(const p of u.Sa)p.Fa(i)&&(r=!0);u.wa=i}}r&&hu(t)}function ME(n,e,t){const r=_e(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function hu(n){n.Ca.forEach((e=>{e.next()}))}var Rc,Wl;(Wl=Rc||(Rc={})).Ma="default",Wl.Cache="cache";class gf{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rc.Cache}}/**
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
 */class mf{constructor(e){this.key=e}}class yf{constructor(e){this.key=e}}class FE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=Dd(e),this.tu=new Ci(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Hl,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,u=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,E=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((I,k)=>{const N=i.get(I),Y=pa(this.query,k)?k:null,H=!!N&&this.mutatedKeys.has(N.key),L=!!Y&&(Y.hasLocalMutations||this.mutatedKeys.has(Y.key)&&Y.hasCommittedMutations);let Q=!1;N&&Y?N.data.isEqual(Y.data)?H!==L&&(r.track({type:3,doc:Y}),Q=!0):this.su(N,Y)||(r.track({type:2,doc:Y}),Q=!0,(_&&this.eu(Y,_)>0||E&&this.eu(Y,E)<0)&&(p=!0)):!N&&Y?(r.track({type:0,doc:Y}),Q=!0):N&&!Y&&(r.track({type:1,doc:N}),Q=!0,(_||E)&&(p=!0)),Q&&(Y?(u=u.add(Y),a=L?a.add(I):a.delete(I)):(u=u.delete(I),a=a.delete(I)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const I=this.query.limitType==="F"?u.last():u.first();u=u.delete(I.key),a=a.delete(I.key),r.track({type:1,doc:I})}return{tu:u,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((I,k)=>(function(Y,H){const L=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:Q})}};return L(Y)-L(H)})(I.type,k.type)||this.eu(I.doc,k.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,E=_!==this.Za;return this.Za=_,u.length!==0||E?{snapshot:new Oi(this.query,e.tu,a,u,e.mutatedKeys,_===0,E,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new yf(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new mf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Oi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const du="SyncEngine";class UE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class jE{constructor(e){this.key=e,this.hu=!1}}class qE{constructor(e,t,r,i,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new $r((p=>xd(p)),fa),this.Iu=new Map,this.Eu=new Set,this.du=new qe(ce.comparator),this.Au=new Map,this.Ru=new tu,this.Vu={},this.mu=new Map,this.fu=Vi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BE(n,e,t=!0){const r=If(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await _f(r,e,t,!0),i}async function $E(n,e){const t=If(n);await _f(t,e,!0,!1)}async function _f(n,e,t,r){const i=await uE(n.localStore,un(e)),a=i.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await HE(n,e,a,u==="current",i.resumeToken)),n.isPrimaryClient&&t&&af(n.remoteStore,i),p}async function HE(n,e,t,r,i){n.pu=(k,N,Y)=>(async function(L,Q,G,se){let ue=Q.view.ru(G);ue.Cs&&(ue=await Fl(L.localStore,Q.query,!1).then((({documents:l})=>Q.view.ru(l,ue))));const we=se&&se.targetChanges.get(Q.targetId),We=se&&se.targetMismatches.get(Q.targetId)!=null,Be=Q.view.applyChanges(ue,L.isPrimaryClient,we,We);return Kl(L,Q.targetId,Be.au),Be.snapshot})(n,k,N,Y);const a=await Fl(n.localStore,e,!0),u=new FE(e,a.Qs),p=u.ru(a.documents),_=Bs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),E=u.applyChanges(p,n.isPrimaryClient,_);Kl(n,t,E.au);const I=new UE(e,t,u);return n.Tu.set(e,I),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),E.snapshot}async function zE(n,e,t){const r=_e(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((u=>!fa(u,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&su(r.remoteStore,i.targetId),Pc(r,i.targetId)})).catch(ji)):(Pc(r,i.targetId),await Cc(r.localStore,i.targetId,!0))}async function WE(n,e){const t=_e(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),su(t.remoteStore,r.targetId))}async function GE(n,e,t){const r=eT(n);try{const i=await(function(u,p){const _=_e(u),E=je.now(),I=p.reduce(((Y,H)=>Y.add(H.key)),Pe());let k,N;return _.persistence.runTransaction("Locally write mutations","readwrite",(Y=>{let H=Ln(),L=Pe();return _.Ns.getEntries(Y,I).next((Q=>{H=Q,H.forEach(((G,se)=>{se.isValidDocument()||(L=L.add(G))}))})).next((()=>_.localDocuments.getOverlayedDocuments(Y,H))).next((Q=>{k=Q;const G=[];for(const se of p){const ue=cv(se,k.get(se.key).overlayedDocument);ue!=null&&G.push(new Hr(se.key,ue,Id(ue.value.mapValue),Dn.exists(!0)))}return _.mutationQueue.addMutationBatch(Y,E,G,p)})).next((Q=>{N=Q;const G=Q.applyToLocalDocumentSet(k,L);return _.documentOverlayCache.saveOverlays(Y,Q.batchId,G)}))})).then((()=>({batchId:N.batchId,changes:Vd(k)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(u,p,_){let E=u.Vu[u.currentUser.toKey()];E||(E=new qe(Re)),E=E.insert(p,_),u.Vu[u.currentUser.toKey()]=E})(r,i.batchId,t),await Hs(r,i.changes),await Ea(r.remoteStore)}catch(i){const a=lu(i,"Failed to persist write");t.reject(a)}}async function vf(n,e){const t=_e(n);try{const r=await oE(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const u=t.Au.get(a);u&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?Ne(u.hu,14607):i.removedDocuments.size>0&&(Ne(u.hu,42227),u.hu=!1))})),await Hs(t,r,e)}catch(r){await ji(r)}}function Gl(n,e,t){const r=_e(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,u)=>{const p=u.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(u,p){const _=_e(u);_.onlineState=p;let E=!1;_.queries.forEach(((I,k)=>{for(const N of k.Sa)N.va(p)&&(E=!0)})),E&&hu(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KE(n,e,t){const r=_e(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let u=new qe(ce.comparator);u=u.insert(a,ft.newNoDocument(a,ye.min()));const p=Pe().add(a),_=new ya(ye.min(),new Map,new qe(Re),u,p);await vf(r,_),r.du=r.du.remove(a),r.Au.delete(e),fu(r)}else await Cc(r.localStore,e,!1).then((()=>Pc(r,e,t))).catch(ji)}async function QE(n,e){const t=_e(n),r=e.batch.batchId;try{const i=await sE(t.localStore,e);Tf(t,r,null),Ef(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Hs(t,i)}catch(i){await ji(i)}}async function XE(n,e,t){const r=_e(n);try{const i=await(function(u,p){const _=_e(u);return _.persistence.runTransaction("Reject batch","readwrite-primary",(E=>{let I;return _.mutationQueue.lookupMutationBatch(E,p).next((k=>(Ne(k!==null,37113),I=k.keys(),_.mutationQueue.removeMutationBatch(E,k)))).next((()=>_.mutationQueue.performConsistencyCheck(E))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(E,I,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(E,I))).next((()=>_.localDocuments.getDocuments(E,I)))}))})(r.localStore,e);Tf(r,e,t),Ef(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Hs(r,i)}catch(i){await ji(i)}}function Ef(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Tf(n,e,t){const r=_e(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Pc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||wf(n,r)}))}function wf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(su(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),fu(n))}function Kl(n,e,t){for(const r of t)r instanceof mf?(n.Ru.addReference(r.key,e),YE(n,r)):r instanceof yf?(ie(du,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||wf(n,r.key)):fe(19791,{wu:r})}function YE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(ie(du,"New document in limbo: "+t),n.Eu.add(r),fu(n))}function fu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ce(Me.fromString(e)),r=n.fu.next();n.Au.set(r,new jE(t)),n.du=n.du.insert(t,r),af(n.remoteStore,new tr(un(Xc(t.path)),r,"TargetPurposeLimboResolution",la.ce))}}async function Hs(n,e,t){const r=_e(n),i=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{u.push(r.pu(_,e,t).then((E=>{if((E||t)&&r.isPrimaryClient){const I=E?!E.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,I?"current":"not-current")}if(E){i.push(E);const I=ru.As(_.targetId,E);a.push(I)}})))})),await Promise.all(u),r.Pu.H_(i),await(async function(_,E){const I=_e(_);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>X.forEach(E,(N=>X.forEach(N.Es,(Y=>I.persistence.referenceDelegate.addReference(k,N.targetId,Y))).next((()=>X.forEach(N.ds,(Y=>I.persistence.referenceDelegate.removeReference(k,N.targetId,Y)))))))))}catch(k){if(!qi(k))throw k;ie(iu,"Failed to update sequence numbers: "+k)}for(const k of E){const N=k.targetId;if(!k.fromCache){const Y=I.Ms.get(N),H=Y.snapshotVersion,L=Y.withLastLimboFreeSnapshotVersion(H);I.Ms=I.Ms.insert(N,L)}}})(r.localStore,a))}async function JE(n,e){const t=_e(n);if(!t.currentUser.isEqual(e)){ie(du,"User change. New user:",e.toKey());const r=await nf(t.localStore,e);t.currentUser=e,(function(a,u){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new re(K.CANCELLED,u))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hs(t,r.Ls)}}function ZE(n,e){const t=_e(n),r=t.Au.get(e);if(r&&r.hu)return Pe().add(r.key);{let i=Pe();const a=t.Iu.get(e);if(!a)return i;for(const u of a){const p=t.Tu.get(u);i=i.unionWith(p.view.nu)}return i}}function If(n){const e=_e(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KE.bind(null,e),e.Pu.H_=LE.bind(null,e.eventManager),e.Pu.yu=ME.bind(null,e.eventManager),e}function eT(n){const e=_e(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XE.bind(null,e),e}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return iE(this.persistence,new tE,e.initialUser,this.serializer)}Cu(e){return new tf(nu.mi,this.serializer)}Du(e){return new hE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class tT extends na{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ne(this.persistence.referenceDelegate instanceof ea,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new tf((r=>ea.mi(r,t)),this.serializer)}}class kc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JE.bind(null,this.syncEngine),await NE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new OE})()}createDatastore(e){const t=_a(e.databaseInfo.databaseId),r=(function(a){return new mE(a)})(e.databaseInfo);return(function(a,u,p,_){return new EE(a,u,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,u,p){return new wE(r,i,a,u,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Gl(this.syncEngine,t,0)),(function(){return ql.v()?new ql:new dE})())}createSyncEngine(e,t){return(function(i,a,u,p,_,E,I){const k=new qE(i,a,u,p,_,E);return I&&(k.gu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=_e(t);ie(jr,"RemoteStore shutting down."),r.Ea.add(5),await $s(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}kc.provider={build:()=>new kc};/**
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
 */class Af{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const dr="FirestoreClient";class nT{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Hc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ie(dr,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ie(dr,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=lu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ic(n,e){n.asyncQueue.verifyOperationInProgress(),ie(dr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await nf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ql(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rT(n);ie(dr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>$l(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>$l(e.remoteStore,i))),n._onlineComponents=e}async function rT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(dr,"Using user provided OfflineComponentProvider");try{await ic(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===K.FAILED_PRECONDITION||i.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ki("Error using user provided cache. Falling back to memory cache: "+t),await ic(n,new na)}}else ie(dr,"Using default OfflineComponentProvider"),await ic(n,new tT(void 0));return n._offlineComponents}async function bf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(dr,"Using user provided OnlineComponentProvider"),await Ql(n,n._uninitializedComponentsProvider._online)):(ie(dr,"Using default OnlineComponentProvider"),await Ql(n,new kc))),n._onlineComponents}function iT(n){return bf(n).then((e=>e.syncEngine))}async function Cf(n){const e=await bf(n),t=e.eventManager;return t.onListen=BE.bind(null,e.syncEngine),t.onUnlisten=zE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$E.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=WE.bind(null,e.syncEngine),t}function sT(n,e,t={}){const r=new xn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,p,_,E){const I=new Af({next:N=>{I.Nu(),u.enqueueAndForget((()=>pf(a,k)));const Y=N.docs.has(p);!Y&&N.fromCache?E.reject(new re(K.UNAVAILABLE,"Failed to get document because the client is offline.")):Y&&N.fromCache&&_&&_.source==="server"?E.reject(new re(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):E.resolve(N)},error:N=>E.reject(N)}),k=new gf(Xc(p.path),I,{includeMetadataChanges:!0,qa:!0});return ff(a,k)})(await Cf(n),n.asyncQueue,e,t,r))),r.promise}function oT(n,e,t={}){const r=new xn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,p,_,E){const I=new Af({next:N=>{I.Nu(),u.enqueueAndForget((()=>pf(a,k))),N.fromCache&&_.source==="server"?E.reject(new re(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):E.resolve(N)},error:N=>E.reject(N)}),k=new gf(p,I,{includeMetadataChanges:!0,qa:!0});return ff(a,k)})(await Cf(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Sf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Xl=new Map;/**
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
 */const Rf="firestore.googleapis.com",Yl=!0;class Jl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rf,this.ssl=Yl}else this.host=e.host,this.ssl=e.ssl??Yl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ef;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Fv)throw new re(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}T_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new re(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new re(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new re(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ta{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new h_;switch(r.type){case"firstParty":return new g_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Xl.get(t);r&&(ie("ComponentProvider","Removing Datastore"),Xl.delete(t),r.terminate())})(this),Promise.resolve()}}function aT(n,e,t,r={}){n=Ur(n,Ta);const i=Li(e),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(gh(`https://${p}`),mh("Firestore",!0)),a.host!==Rf&&a.host!==p&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!Vr(_,u)&&(n._setSettings(_),r.mockUserToken)){let E,I;if(typeof r.mockUserToken=="string")E=r.mockUserToken,I=dt.MOCK_USER;else{E=mp(r.mockUserToken,n._app?.options.projectId);const k=r.mockUserToken.sub||r.mockUserToken.user_id;if(!k)throw new re(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new dt(k)}n._authCredentials=new d_(new hd(E,I))}}/**
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
 */class $i{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $i(this.firestore,e,this._query)}}class Je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Us(t,Je._jsonSchema))return new Je(e,r||null,new ce(Me.fromString(t.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Ye("string",Je._jsonSchemaVersion),referencePath:Ye("string")};class or extends $i{constructor(e,t,r){super(e,t,Xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new ce(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Zl(n,e,...t){if(n=gt(n),dd("collection","path",e),n instanceof Ta){const r=Me.fromString(e,...t);return hl(r),new or(n,null,r)}{if(!(n instanceof Je||n instanceof or))throw new re(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return hl(r),new or(n.firestore,null,r)}}function bo(n,e,...t){if(n=gt(n),arguments.length===1&&(e=Hc.newId()),dd("doc","path",e),n instanceof Ta){const r=Me.fromString(e,...t);return ll(r),new Je(n,null,new ce(r))}{if(!(n instanceof Je||n instanceof or))throw new re(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Me.fromString(e,...t));return ll(r),new Je(n.firestore,n instanceof or?n.converter:null,new ce(r))}}/**
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
 */const eh="AsyncQueue";class th{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sf(this,"async_queue_retry"),this._c=()=>{const r=rc();r&&ie(eh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=rc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=rc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new xn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qi(e))throw e;ie(eh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,On("INTERNAL UNHANDLED ERROR: ",nh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=uu.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&fe(47125,{Pc:nh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function nh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class wa extends Ta{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new th,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new th(e),this._firestoreClient=void 0,await e}}}function cT(n,e){const t=typeof n=="object"?n:Eh(),r=typeof n=="string"?n:Ko,i=Vc(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=pp("firestore");a&&aT(i,...a)}return i}function pu(n){if(n._terminated)throw new re(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uT(n),n._firestoreClient}function uT(n){const e=n._freezeSettings(),t=(function(i,a,u,p){return new D_(i,a,u,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Sf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new nT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
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
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(ut.fromBase64String(e))}catch(t){throw new re(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Us(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Ye("string",jt._jsonSchemaVersion),bytes:Ye("string")};/**
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
 */class gu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mu{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Us(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Ye("string",hn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class dn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Us(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dn(e.vectorValues);throw new re(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Ye("string",dn._jsonSchemaVersion),vectorValues:Ye("object")};/**
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
 */const lT=/^__.*__$/;class hT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,t,this.fieldTransforms):new qs(e,this.data,t,this.fieldTransforms)}}function Pf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:n})}}class yu{constructor(e,t,r,i,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ra(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Pf(this.Ac)&&lT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||_a(e)}Cc(e,t,r,i=!1){return new yu({Ac:e,methodName:t,Dc:r,path:ct.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kf(n){const e=n._freezeSettings(),t=_a(n._databaseId);return new dT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fT(n,e,t,r,i,a={}){const u=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);Nf("Data must be an object, but it was:",u,r);const p=xf(r,u);let _,E;if(a.merge)_=new Wt(u.fieldMask),E=u.fieldTransforms;else if(a.mergeFields){const I=[];for(const k of a.mergeFields){const N=gT(e,k,t);if(!u.contains(N))throw new re(K.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);yT(I,N)||I.push(N)}_=new Wt(I),E=u.fieldTransforms.filter((k=>_.covers(k.field)))}else _=null,E=u.fieldTransforms;return new hT(new Ut(p),_,E)}class _u extends mu{_toFieldTransform(e){return new iv(e.path,new Ss)}isEqual(e){return e instanceof _u}}function pT(n,e,t,r=!1){return vu(t,n.Cc(r?4:3,e))}function vu(n,e){if(Df(n=gt(n)))return Nf("Unsupported field value:",e,n),xf(n,e);if(n instanceof mu)return(function(r,i){if(!Pf(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let u=0;for(const p of r){let _=vu(p,i.wc(u));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=je.fromDate(r);return{timestampValue:Zo(i.serializer,a)}}if(r instanceof je){const a=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zo(i.serializer,a)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:Gd(i.serializer,r._byteString)};if(r instanceof Je){const a=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw i.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:eu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dn)return(function(u,p){return{mapValue:{fields:{[Td]:{stringValue:wd},[Qo]:{arrayValue:{values:u.toArray().map((E=>{if(typeof E!="number")throw p.Sc("VectorValues must only contain numeric values.");return Yc(p.serializer,E)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${ua(r)}`)})(n,e)}function xf(n,e){const t={};return gd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(n,((r,i)=>{const a=vu(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function Df(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof je||n instanceof hn||n instanceof jt||n instanceof Je||n instanceof mu||n instanceof dn)}function Nf(n,e,t){if(!Df(t)||!fd(t)){const r=ua(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function gT(n,e,t){if((e=gt(e))instanceof gu)return e._internalPath;if(typeof e=="string")return Vf(n,e);throw ra("Field path arguments must be of type string or ",n,!1,void 0,t)}const mT=new RegExp("[~\\*/\\[\\]]");function Vf(n,e,t){if(e.search(mT)>=0)throw ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gu(...e.split("."))._internalPath}catch{throw ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ra(n,e,t,r,i){const a=r&&!r.isEmpty(),u=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||u)&&(_+=" (found",a&&(_+=` in field ${r}`),u&&(_+=` in document ${i}`),_+=")"),new re(K.INVALID_ARGUMENT,p+n+_)}function yT(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Of{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _T(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Eu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _T extends Of{data(){return super.data()}}function Eu(n,e){return typeof e=="string"?Vf(n,e):e instanceof gu?e._internalPath:e._delegate._internalPath}/**
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
 */function vT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new re(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tu{}class ET extends Tu{}function rh(n,e,...t){let r=[];e instanceof Tu&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((_=>_ instanceof wu)).length,p=a.filter((_=>_ instanceof Ia)).length;if(u>1||u>0&&p>0)throw new re(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Ia extends ET{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ia(e,t,r)}_apply(e){const t=this._parse(e);return Lf(e._query,t),new $i(e.firestore,e.converter,Ec(e._query,t))}_parse(e){const t=kf(e.firestore);return(function(a,u,p,_,E,I,k){let N;if(E.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new re(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){oh(k,I);const H=[];for(const L of k)H.push(sh(_,a,L));N={arrayValue:{values:H}}}else N=sh(_,a,k)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||oh(k,I),N=pT(p,u,k,I==="in"||I==="not-in");return Xe.create(E,I,N)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ih(n,e,t){const r=e,i=Eu("where",n);return Ia._create(i,r,t)}class wu extends Tu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Kt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let u=i;const p=a.getFlattenedFilters();for(const _ of p)Lf(u,_),u=Ec(u,_)})(e._query,t),new $i(e.firestore,e.converter,Ec(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function sh(n,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new re(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kd(e)&&t.indexOf("/")!==-1)throw new re(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Me.fromString(t));if(!ce.isDocumentKey(r))throw new re(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vl(n,new ce(r))}if(t instanceof Je)return vl(n,t._key);throw new re(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ua(t)}.`)}function oh(n,e){if(!Array.isArray(n)||n.length===0)throw new re(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lf(n,e){const t=(function(i,a){for(const u of i)for(const p of u.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class TT{convertValue(e,t="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Br(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Qo].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new dn(t)}convertGeoPoint(e){return new hn(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=da(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(As(e));default:return null}}convertTimestamp(e){const t=cr(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Me.fromString(e);Ne(Zd(r),9688,{name:e});const i=new bs(r.get(1),r.get(3)),a=new ce(r.popFirst(5));return i.isEqual(t)||On(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function wT(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nr extends Of{constructor(e,t,r,i,a,u){super(e,t,r,i,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Eu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Nr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Nr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nr._jsonSchema={type:Ye("string",Nr._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Lo extends Nr{data(e={}){return super.data(e)}}class Si{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Lo(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((p=>{const _=new Lo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ps(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new Lo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ps(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let E=-1,I=-1;return p.type!==0&&(E=u.indexOf(p.doc.key),u=u.delete(p.doc.key)),p.type!==1&&(u=u.add(p.doc),I=u.indexOf(p.doc.key)),{type:IT(p.type),doc:_,oldIndex:E,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:n})}}/**
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
 */function sc(n){n=Ur(n,Je);const e=Ur(n.firestore,wa);return sT(pu(e),n._key).then((t=>CT(e,n,t)))}Si._jsonSchemaVersion="firestore/querySnapshot/1.0",Si._jsonSchema={type:Ye("string",Si._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Mf extends TT{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,t)}}function ah(n){n=Ur(n,$i);const e=Ur(n.firestore,wa),t=pu(e),r=new Mf(e);return vT(n._query),oT(t,n._query).then((i=>new Si(e,r,n,i)))}function AT(n,e,t){n=Ur(n,Je);const r=Ur(n.firestore,wa),i=wT(n.converter,e);return bT(r,[fT(kf(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Dn.none())])}function bT(n,e){return(function(r,i){const a=new xn;return r.asyncQueue.enqueueAndForget((async()=>GE(await iT(r),i,a))),a.promise})(pu(n),e)}function CT(n,e,t){const r=t.docs.get(e._key),i=new Mf(n);return new Nr(n,i,e._key,r,new ps(t.hasPendingWrites,t.fromCache),e.converter)}function ST(){return new _u("serverTimestamp")}(function(e,t=!0){(function(i){Ui=i})(Mi),Ri(new Or("firestore",((r,{instanceIdentifier:i,options:a})=>{const u=r.getProvider("app").getImmediate(),p=new wa(new f_(r.getProvider("auth-internal")),new m_(u,r.getProvider("app-check-internal")),(function(E,I){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new re(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(E.options.projectId,I)})(u,i),u);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),ir(ol,al,e),ir(ol,al,"esm2020")})();const RT={apiKey:"AIzaSyAqyEr1XviSu634LduQhk5WDQgH2M0iA6Y",authDomain:"wiimage.firebaseapp.com",projectId:"wiimage",storageBucket:"wiimage.firebaseapp.com",messagingSenderId:"972731979228",appId:"1:972731979228:web:5a7347c3bcb04d65402b19"},Ff=vh(RT),Mo=u_(Ff),xr=cT(Ff);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=i=>{const[a,u]=$(i).data("tema").split("|");$("html").attr("data-theme",a),$('meta[name="theme-color"]').length?$('meta[name="theme-color"]').attr("content",u):$("<meta>",{name:"theme-color",content:u}).appendTo("head"),Pn("witema",`${a}|${u}`,720),$(".mtha").removeClass("mtha"),$(i).addClass("mtha")};$(".witemas").html(n.map(([i,a])=>`<div class="tema" data-tema="${i}|${a}" style="background:${a}"></div>`).join(""));const t=qr("witema"),r=$(`[data-tema="${t}"]`)[0]||$(".mtha")[0]||$("[data-tema]").first()[0];return r&&e(r),$(document).on("click","[data-tema]",i=>e(i.currentTarget)),{set:e}})();function Uf(n,e,t,r){$(n).text(t).addClass(e).delay(1800).queue(i=>$(n).text(r).removeClass(e).dequeue())}(()=>{const n=()=>{const e=new Date;$(".wty").text(e.getFullYear()),$(".wtu").text(e.toLocaleString()),$(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),$(".abwc").toggleClass("dpn")})};try{$(n)}catch{document.addEventListener("DOMContentLoaded",n,{once:!0})}return n})();const ch=n=>{window.location.href={smiletop:"/smiletop.html"}[n]||"/smile.html"},PT=n=>{const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)},Pr=(n,e="success")=>{$(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:u}=t[e]||t.error,p=$(`
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
            <i class="fas ${u}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function Pn(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function qr(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),ks(n),null}}function ks(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function jf(n,e,t){$(window).on("beforeunload",function(){$(n).each(function(){const r=$(this),i=r.attr(e);i&&Pn(i,t(r),168)})})}function qf(n,e,t){$(n).each(function(){const r=$(this),i=r.attr(e),a=qr(i);i&&a!=null&&t(r,a)})}function Ti(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,u=a?"top":t;if($("#witip-styles").length||$('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return $(n).each((We,Be)=>Ti(Be,e,t,r)),$(n);const p=$(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),$(".witip").remove();const _=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),E=$("<div>",{class:`witip ${u} ${a||""}`,"data-for":_,text:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&E.css("background-color",`var(${i[a]})`),$("body").append(E);const{left:I,top:k,right:N,bottom:Y,width:H,height:L}=p[0].getBoundingClientRect(),Q=E.outerWidth(),G=E.outerHeight(),se={top:{x:I+H/2-Q/2,y:k-G-8},bottom:{x:I+H/2-Q/2,y:Y+8},left:{x:I-Q-8,y:k+L/2-G/2},right:{x:N+8,y:k+L/2-G/2}};let{x:ue,y:we}=se[u];return ue=Math.max(8,Math.min(ue,window.innerWidth-Q-8)),we=Math.max(8,Math.min(we,window.innerHeight-G-8)),E.css({left:ue,top:we}),p.data("witip-timer",setTimeout(()=>{E.addClass("show"),r>0&&setTimeout(()=>{E.removeClass("show"),setTimeout(()=>E.remove(),200)},r)},10)),p}const kT=n=>{const e=new Date,t=new Date(n);if(t>e)return-1;let r=e.getFullYear()-t.getFullYear();const i=e.getMonth(),a=e.getDate(),u=t.getMonth(),p=t.getDate();return(i<u||i===u&&a<p)&&r--,r};function xT(){const n=`
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Wii Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <span class="crearCuenta">Crear cuenta</span>
      </div>
    </div>
  </div>
</div>`,e=`
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-phone"></i>
            <input type="text" id="regCelular" placeholder="Celular" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-cake-candles"></i>
            <input type="date" id="regFechaNacimiento" placeholder="Fecha de nacimiento" class="datepicker" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`,t=`
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;$(function(){let p="smiles",_=3e3,E="wiAuthIn",I="wiAuthRol",k="smile";$(".login").click(()=>i("loginModal")),$(".registrar").click(()=>i("registroModal")),$(".crearCuenta").click(()=>{i("registroModal"),a("loginModal")}),$(".conCuenta").click(()=>{i("loginModal"),a("registroModal")}),$(".olvidastePass").click(()=>{i("recuperarModal"),a("loginModal")}),$(".volverLogin").click(()=>{i("loginModal"),a("recuperarModal")}),$(".togglePass").click(function(){const L=$(this).siblings("input"),Q=L.attr("type")==="password";L.attr("type",Q?"text":"password"),$(this).toggleClass("fa-eye fa-eye-slash")}),$('.miauth input:not([type="checkbox"])').on("click",function(){Ti(this,$(this).attr("placeholder"))}),$("#regUsuario, #regEmail, #email, #recEmail").on("input",function(){$(this).val($(this).val().toLowerCase().trim())}),[["#password","#Login"],["#regPassword1","#Registrar"],["#recFechaNacimiento","#Recuperar"],["#recEmail","#Recuperar"]].forEach(([L,Q])=>{$(L).on("input keyup",G=>{$(Q).removeClass("inactivo"),G.key==="Enter"&&($(Q).click(),$(Q).addClass("inactivo"))})});const N={regEmail:[L=>L.toLowerCase(),L=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(L)||"Correo inválido"],regUsuario:[L=>L.toLowerCase().replace(/[^a-z0-9_]/g,""),L=>L.length>=4||"Usuario 4-20 caracteres"],regNombre:[L=>L.trim(),L=>L.length>0||"Ingrese nombre"],regApellidos:[L=>L.trim(),L=>L.length>0||"Ingrese apellidos"],regCelular:[L=>L.replace(/\D/g,""),L=>L.length>=8||"Mínimo 8 dígitos"],regFechaNacimiento:[L=>L,L=>kT(L)>=13||"Tienes que ser mayor de 13 años"],regPassword:[L=>L,L=>L.length>=6||"Mínimo 6 caracteres"],regPassword1:[L=>L,L=>L===$("#regPassword").val()||"Contraseñas no coinciden"]};$.each(N,function(L,[Q,G]){$(`#${L}`).on("blur",function(){const se=Q($(this).val());$(this).val(se);const ue=G(se);ue!==!0&&Ti(this,ue,"error")})});let Y=!1;$("#regUsuario").on("blur focus",async function(){const L=$(this).val();if(L.length>=3)try{const G=(await sc(bo(xr,p,L))).exists();Y=!G,Ti(this,`Usuario ${G?"no disponible":"disponible ✅"}`,G?"error":"success","top",7e3)}catch(Q){console.error(Q)}});let H=!1;$("#regEmail").on("blur focus",async function(){const L=$(this).val();if(L.length>=3)try{const G=!(await ah(rh(Zl(xr,p),ih("email","==",L)))).empty;H=!G,Ti(this,`Email ${G?"no disponible":"disponible ✅"}`,G?"error":"success","top",7e3)}catch(Q){console.error(Q)}}),$("#Registrar").click(async function(){const L=[[Y,$("#regUsuario")[0],"Usuario no disponible"],[H,$("#regEmail")[0],"Email no disponible"],...Object.entries(N).map(([Q,[G,se]])=>{const ue=$(`#${Q}`),we=G(ue.val()),We=se(we);return[We===!0,ue[0],We!==!0?We:""]})];for(const[Q,G,se]of L)if(!Q&&se&&(Ti(G,se,"error"),G.focus(),!0))return;try{const Q=["regEmail","regUsuario","regNombre","regApellidos","regCelular","regPassword"],[G,se,ue,we,We,Be]=Q.map(C=>$("#"+C).val().trim()),{user:l}=await zm(Mo,G,Be);await Promise.all([Qm(l,{displayName:se}),Gm(l)]),console.log("Registro completo en Auth ✅"+Date());const S=bo(xr,p,se);await AT(S,{usuario:se,email:G,nombre:ue,apellidos:we,celular:We,rol:k,fechaNacimiento:PT($("#regFechaNacimiento").val()),creacion:ST(),uid:l.uid}),console.log("Registro completo en Firestore ✅"+Date()),Pr("Registro completado! ✅")}catch(Q){Pr({"auth/email-already-in-use":"Email ya registrado","auth/weak-password":"Contraseña muy débil"}[Q.code]||Q.message)||console.error(Q)}finally{Pn(E,"wIn",24),Pn(I,k,24),setTimeout(()=>ch(k),_)}}),$("#Login").click(async function(){try{const[L,Q]=["#email","#password"].map(ue=>$(ue).val());let G=null,se=L;if(!L.includes("@"))try{G=await sc(bo(xr,p,L)),se=G.exists()?G.data().email:null}catch(ue){console.error("ebdUsuario",ue),se=null}await Wm(Mo,se,Q),Pn(E,"wIn",24),Pn(I,G.data().rol,24),ch(G.data().rol)}catch(L){Pr({"auth/invalid-credential":"Contraseña incorrecta","auth/invalid-email":"Falta registrar Email","auth/missing-email":"Email o usuario no registrado"}[L.code]||L.message,"error"),console.error(L)}}),$("#Recuperar").click(async function(){try{const[L,Q]=["#recEmail","#recFechaNacimiento"].map(we=>$(we).val()),G=L.includes("@")?L:await(async()=>{const we=await sc(bo(xr,p,L));return we.exists()?we.data().email:null})();if(!G)return Pr("Usuario no registrado","error");const se=await ah(rh(Zl(xr,p),ih("email","==",G)));if(se.empty)return Pr("Email incorrecto o no existe","error");if(se.docs[0].data().fechaNacimiento.toDate().toISOString().split("T")[0]!==Q)return Pr("Fecha de nacimiento incorrecta","error");await Hm(Mo,G),Pr("Se envió correo para restablecer su contraseña, revisa en principal o spam ✅","success")}catch(L){console.error(L)}})}),$("body").append(n+e+t);function r(){const p=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}",_=$(".wiAuthCss");_.length?_.text(p):$("head").append(`<style class="wiAuthCss">${p}</style>`)}const i=p=>{const _=$(`#${p}`).addClass("active");$("body").addClass("modal-open"),setTimeout(()=>{_.find("input,select,textarea,button").filter(":visible:first").trigger("focus")},20)},a=p=>{$(`#${p}`).removeClass("active"),$(".modal.active").length||$("body").removeClass("modal-open")},u=()=>{const p=()=>{$(".modal").removeClass("active"),$("body").removeClass("modal-open")};$(document).off(".authModals").on("click.authModals",".close-modal",p).on("click.authModals",".modal",_=>{$(_.target).is(".modal")&&p()}).on("keydown.authModals",_=>{_.key==="Escape"&&p()})};r(),u()}xT();Jm(Mo,async n=>{if(!n)return ks("wiAuthIn"),ks("wiAuthRol"),SmilePublico();if(qr("wiAuthIn")){const e=qr("wiAuthRol");if(e)return accederRol(e);const t=await getDocs(query(collection(xr,"smiles"),where("email","==",n.email)));accederRol(t.docs[0]?.data()?.rol)}});jf(".txe","id",n=>n.html());qf(".txe","id",(n,e)=>n.html(e));const Pt=$(".txe"),DT=$(".nts"),Qn=$(".editor .hcon");let xs=0;const xc=n=>+String(n).replace(/\D+/g,"")||0,Bf=(n,e=28)=>$("<div>").html(n||"").text().replace(/\s+/g," ").trim().slice(0,e),NT=n=>($('[data-ki^="ki"]').removeClass("activa"),$(`[data-ki="${n}"]`).addClass("activa")),Iu=(n,e)=>{const t=$(`[data-ki="${n}"]`);t.length?t.text(e):$(`<div class="nt nt${xc(n)}" data-ki="${n}">${e}</div>`).appendTo(DT)},$f=n=>{const e=qr(n)||"";Pt.attr("id",n).html(e).focus(),NT(n)},VT=()=>{const n=$('[data-ki^="ki"]').map((t,r)=>xc($(r).data("ki"))).get(),e=Object.keys(localStorage).filter(t=>/^ki\d+$/.test(t));xs=Math.max(xs,0,...n,...e.map(xc)),$.each(e,(t,r)=>{const i=qr(r);i&&Iu(r,Bf(i)+"...")})},Hf=(()=>{let n;return(e=1800)=>{const t=$(".guardar_nota");t.length&&(t.addClass("bta").text("Guardado"),clearTimeout(n),n=setTimeout(()=>{t.removeClass("bta").text("Guardar")},e))}})();Pt.on("input",()=>{const n=Pt.attr("id");if(n){Pn(n,Pt.html(),24);const e=Bf(qr(n));e&&$(`[data-ki="${n}"]`).text(e+"..."),Hf()}});$(document).on("click",".guardar_nota",()=>{const n=Pt.attr("id");n&&(Pn(n,Pt.html(),24),Hf())});VT();$(document).on("click",".agregar_nota",()=>{const n=`ki${++xs}`;Iu(n,`Nota ${xs}`),$f(n)});$(document).on("click",'[data-ki^="ki"]',n=>$f($(n.currentTarget).data("ki")));$(document).on("click",".limpiar_nota",()=>{const n=Pt.attr("id");n&&(Pt.empty(),ks(n),Iu(n,"Nota vacía..."),Uf(void 0,"bta","Eliminado","Eliminar"))});const OT={".fa-bold":"bold",".fa-italic":"italic",".fa-underline":"underline",".fa-list-ul":"insertUnorderedList",".fa-list-ol":"insertOrderedList",".fa-align-left":"justifyLeft",".fa-align-center":"justifyCenter",".fa-align-right":"justifyRight",".fa-rotate-left":"undo"};$.each(OT,(n,e)=>Qn.find(n).attr("data-cmd",e));let ia=null;const Au=()=>{const n=window.getSelection();if(!n||!n.rangeCount)return!1;const e=n.anchorNode;return e&&(Pt[0]===e||$.contains(Pt[0],e))},Aa=()=>{const n=window.getSelection();n&&n.rangeCount&&Au()&&(ia=n.getRangeAt(0))},LT=()=>{if(!ia)return;const n=window.getSelection();n.removeAllRanges(),n.addRange(ia)},MT=n=>{!Au()&&ia&&LT(),document.execCommand(n,!1,null),Pt.focus(),Aa(),ba()};Qn.on("mousedown","i",n=>n.preventDefault()).on("click","i",function(){const n=$(this).data("cmd");n&&MT(n)});const FT=[[".fa-bold","bold"],[".fa-italic","italic"],[".fa-underline","underline"],[".fa-list-ul","insertUnorderedList"],[".fa-list-ol","insertOrderedList"]],ba=()=>{if(!Au())return void Qn.find("i").removeClass("actv").addClass("is-disabled");Qn.find("i").removeClass("is-disabled"),$.each(FT,(t,r)=>Qn.find(r[0]).toggleClass("actv",document.queryCommandState(r[1])));const n=document.queryCommandState("justifyCenter"),e=document.queryCommandState("justifyRight");Qn.find(".fa-align-center").toggleClass("actv",n),Qn.find(".fa-align-right").toggleClass("actv",e),Qn.find(".fa-align-left").toggleClass("actv",!n&&!e)};document.addEventListener("selectionchange",()=>{Aa(),ba()});Pt.on("keyup mouseup input",()=>{Aa(),ba()});Aa();ba();const zf=$(".paste"),Un=$(".ibx .bx");Un.each((n,e)=>$(e).attr("data-k",`im${n+1}`));const Ca=$(".vw"),Wf=$(".vw img"),Xn=$(".vw .th");let pr=-1;const Sa=()=>Un.map((n,e)=>$(e).attr("data-src")?n:null).get(),Ds=()=>{const n=Sa();Xn.empty().append(n.map(e=>`<div class="ti" data-i="${e}"><img src="${Un.eq(e).attr("data-src")}"></div>`)),Xn.find(`[data-i="${pr}"]`).addClass("on")},UT=(n,e)=>{const t=Un.eq(n);t.attr("data-src",e).addClass("fill").html(`<img src="${e}">`),Pn(t.attr("data-k"),e,720),Ds()},jT=()=>Un.toArray().findIndex(n=>!$(n).attr("data-src")),qT=n=>{let e=jT();e<0&&(e=0),UT(e,n)},BT=n=>{const e=new FileReader;e.onload=()=>qT(e.result),e.readAsDataURL(n)},Gf=n=>Array.from(n).forEach(e=>e&&/^image\//.test(e.type)&&BT(e));zf.on("paste",n=>{const e=n.originalEvent.clipboardData;e&&Gf(Array.from(e.items).map(t=>t.getAsFile()).filter(Boolean))});zf.on("dblclick",()=>{$('<input type="file" accept="image/*" multiple hidden>').appendTo("body").on("change",n=>{Gf(n.target.files),$(n.target).remove()}).trigger("click")});qf(".ibx .bx","data-k",(n,e)=>{e&&n.attr("data-src",e).addClass("fill").html(`<img src="${e}">`)});jf(".ibx .bx","data-k",n=>n.attr("data-src")||"");Ds();const zs=n=>{const e=Un.eq(n).attr("data-src");if(!e)return;pr=n,Wf.attr("src",e),Ca.addClass("show"),Xn.find(".ti").removeClass("on"),Xn.find(`[data-i="${n}"]`).addClass("on");const t=Xn.find(`[data-i="${n}"]`);t.length&&Xn.animate({scrollLeft:Math.max(0,t.position().left+Xn.scrollLeft()-(Xn.width()-t.width())/2)},180)},Ws=()=>{Ca.removeClass("show"),pr=-1},Kf=()=>{const n=Sa();if(!n.length)return Ws();zs(n[(n.indexOf(pr)+1)%n.length])},Qf=()=>{const n=Sa();if(!n.length)return Ws();zs(n[(n.indexOf(pr)-1+n.length)%n.length])},Xf=()=>{const n=$("<a>").attr({href:Wf.attr("src"),download:`wiimage-${pr+1}.png`}).appendTo("body");n[0].click(),n.remove()},Yf=()=>{const n=Un.eq(pr);ks(n.attr("data-k")),n.removeAttr("data-src").removeClass("fill").empty(),Ds();const e=Sa();e.length?zs(e[0]):Ws()};$(document).on("click",".ibx .bx",n=>{const e=Un.index(n.currentTarget);$(n.currentTarget).attr("data-src")&&zs(e)});$(document).on("click",".vw .cls, .vw",n=>{(n.target===n.currentTarget||$(n.target).closest(".cls").length)&&Ws()});$(document).on("click",".vw .nx",Kf);$(document).on("click",".vw .pv",Qf);$(document).on("click",".vw .dl",Xf);$(document).on("click",".vw .rm",Yf);$(document).on("click",".vw .th .ti",n=>zs(+$(n.currentTarget).data("i")));$(document).on("keydown",n=>{if(Ca.hasClass("show")){if(n.ctrlKey&&(n.key==="s"||n.key==="S"))return n.preventDefault(),Xf();if(n.key==="Escape")return Ws();if(n.key==="ArrowRight"||n.key===">"||n.key===".")return Kf();if(n.key==="ArrowLeft"||n.key==="<"||n.key===",")return Qf();if(n.key==="Delete"||n.key==="Supr"||n.key==="Backspace")return Yf()}});$(".bt_borrar").click(function(){if(confirm("¿Eliminar todo lo guardado?")){try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}$('[data-ki^="ki"]').remove(),Pt.removeAttr("id").empty(),xs=0,Un.removeAttr("data-src").removeClass("fill").empty(),Ds&&Ds(),Ca.removeClass("show"),pr=-1,Uf(this,"bta","Eliminado","Eliminar")}});
