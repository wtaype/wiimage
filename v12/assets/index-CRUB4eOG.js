(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&o(w)}).observe(document,{childList:!0,subtree:!0});function i(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(h){if(h.ep)return;h.ep=!0;const m=i(h);fetch(h.href,m)}})();function xu(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Br={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Ru=Br.exports,To;function Du(){return To||(To=1,(function(r){(function(e,i){r.exports=e.document?i(e,!0):function(o){if(!o.document)throw new Error("jQuery requires a window with a document");return i(o)}})(typeof window<"u"?window:Ru,function(e,i){var o=[],h=Object.getPrototypeOf,m=o.slice,w=o.flat?function(t){return o.flat.call(t)}:function(t){return o.concat.apply([],t)},x=o.push,j=o.indexOf,V={},ee=V.toString,ae=V.hasOwnProperty,W=ae.toString,Ee=W.call(Object),q={},J=function(s){return typeof s=="function"&&typeof s.nodeType!="number"&&typeof s.item!="function"},ve=function(s){return s!=null&&s===s.window},Q=e.document,De={type:!0,src:!0,nonce:!0,noModule:!0};function Ne(t,s,u){u=u||Q;var l,d,p=u.createElement("script");if(p.text=t,s)for(l in De)d=s[l]||s.getAttribute&&s.getAttribute(l),d&&p.setAttribute(l,d);u.head.appendChild(p).parentNode.removeChild(p)}function je(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?V[ee.call(t)]||"object":typeof t}var bn="3.7.1",nt=/HTML$/i,a=function(t,s){return new a.fn.init(t,s)};a.fn=a.prototype={jquery:bn,constructor:a,length:0,toArray:function(){return m.call(this)},get:function(t){return t==null?m.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var s=a.merge(this.constructor(),t);return s.prevObject=this,s},each:function(t){return a.each(this,t)},map:function(t){return this.pushStack(a.map(this,function(s,u){return t.call(s,u,s)}))},slice:function(){return this.pushStack(m.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(a.grep(this,function(t,s){return(s+1)%2}))},odd:function(){return this.pushStack(a.grep(this,function(t,s){return s%2}))},eq:function(t){var s=this.length,u=+t+(t<0?s:0);return this.pushStack(u>=0&&u<s?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:x,sort:o.sort,splice:o.splice},a.extend=a.fn.extend=function(){var t,s,u,l,d,p,g=arguments[0]||{},E=1,_=arguments.length,A=!1;for(typeof g=="boolean"&&(A=g,g=arguments[E]||{},E++),typeof g!="object"&&!J(g)&&(g={}),E===_&&(g=this,E--);E<_;E++)if((t=arguments[E])!=null)for(s in t)l=t[s],!(s==="__proto__"||g===l)&&(A&&l&&(a.isPlainObject(l)||(d=Array.isArray(l)))?(u=g[s],d&&!Array.isArray(u)?p=[]:!d&&!a.isPlainObject(u)?p={}:p=u,d=!1,g[s]=a.extend(A,p,l)):l!==void 0&&(g[s]=l));return g},a.extend({expando:"jQuery"+(bn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var s,u;return!t||ee.call(t)!=="[object Object]"?!1:(s=h(t),s?(u=ae.call(s,"constructor")&&s.constructor,typeof u=="function"&&W.call(u)===Ee):!0)},isEmptyObject:function(t){var s;for(s in t)return!1;return!0},globalEval:function(t,s,u){Ne(t,{nonce:s&&s.nonce},u)},each:function(t,s){var u,l=0;if(I(t))for(u=t.length;l<u&&s.call(t[l],l,t[l])!==!1;l++);else for(l in t)if(s.call(t[l],l,t[l])===!1)break;return t},text:function(t){var s,u="",l=0,d=t.nodeType;if(!d)for(;s=t[l++];)u+=a.text(s);return d===1||d===11?t.textContent:d===9?t.documentElement.textContent:d===3||d===4?t.nodeValue:u},makeArray:function(t,s){var u=s||[];return t!=null&&(I(Object(t))?a.merge(u,typeof t=="string"?[t]:t):x.call(u,t)),u},inArray:function(t,s,u){return s==null?-1:j.call(s,t,u)},isXMLDoc:function(t){var s=t&&t.namespaceURI,u=t&&(t.ownerDocument||t).documentElement;return!nt.test(s||u&&u.nodeName||"HTML")},merge:function(t,s){for(var u=+s.length,l=0,d=t.length;l<u;l++)t[d++]=s[l];return t.length=d,t},grep:function(t,s,u){for(var l,d=[],p=0,g=t.length,E=!u;p<g;p++)l=!s(t[p],p),l!==E&&d.push(t[p]);return d},map:function(t,s,u){var l,d,p=0,g=[];if(I(t))for(l=t.length;p<l;p++)d=s(t[p],p,u),d!=null&&g.push(d);else for(p in t)d=s(t[p],p,u),d!=null&&g.push(d);return w(g)},guid:1,support:q}),typeof Symbol=="function"&&(a.fn[Symbol.iterator]=o[Symbol.iterator]),a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,s){V["[object "+s+"]"]=s.toLowerCase()});function I(t){var s=!!t&&"length"in t&&t.length,u=je(t);return J(t)||ve(t)?!1:u==="array"||s===0||typeof s=="number"&&s>0&&s-1 in t}function b(t,s){return t.nodeName&&t.nodeName.toLowerCase()===s.toLowerCase()}var C=o.pop,k=o.sort,R=o.splice,T="[\\x20\\t\\r\\n\\f]",Ve=new RegExp("^"+T+"+|((?:^|[^\\\\])(?:\\\\.)*)"+T+"+$","g");a.contains=function(t,s){var u=s&&s.parentNode;return t===u||!!(u&&u.nodeType===1&&(t.contains?t.contains(u):t.compareDocumentPosition&&t.compareDocumentPosition(u)&16))};var En=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ls(t,s){return s?t==="\0"?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}a.escapeSelector=function(t){return(t+"").replace(En,ls)};var Be=Q,Ot=x;(function(){var t,s,u,l,d,p=Ot,g,E,_,A,M,U=a.expando,N=0,H=0,te=un(),le=un(),ie=un(),xe=un(),Ce=function(v,S){return v===S&&(d=!0),0},Qe="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ze="(?:\\\\[\\da-fA-F]{1,6}"+T+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ne="\\["+T+"*("+Ze+")(?:"+T+"*([*^$|!~]?=)"+T+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ze+"))|)"+T+"*\\]",At=":("+Ze+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ne+")*)|.*)\\)|)",de=new RegExp(T+"+","g"),Te=new RegExp("^"+T+"*,"+T+"*"),n=new RegExp("^"+T+"*([>+~]|"+T+")"+T+"*"),c=new RegExp(T+"|>"),f=new RegExp(At),y=new RegExp("^"+Ze+"$"),P={ID:new RegExp("^#("+Ze+")"),CLASS:new RegExp("^\\.("+Ze+")"),TAG:new RegExp("^("+Ze+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+At),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+T+"*(even|odd|(([+-]|)(\\d*)n|)"+T+"*(?:([+-]|)"+T+"*(\\d+)|))"+T+"*\\)|)","i"),bool:new RegExp("^(?:"+Qe+")$","i"),needsContext:new RegExp("^"+T+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+T+"*((?:-\\d)?\\d*)"+T+"*\\)|)(?=[^-]|$)","i")},O=/^(?:input|select|textarea|button)$/i,B=/^h\d$/i,ce=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ke=/[+~]/,ue=new RegExp("\\\\[\\da-fA-F]{1,6}"+T+"?|\\\\([^\\r\\n\\f])","g"),Ie=function(v,S){var D="0x"+v.slice(1)-65536;return S||(D<0?String.fromCharCode(D+65536):String.fromCharCode(D>>10|55296,D&1023|56320))},Me=function(){cn()},an=jr(function(v){return v.disabled===!0&&b(v,"fieldset")},{dir:"parentNode",next:"legend"});function et(){try{return g.activeElement}catch{}}try{p.apply(o=m.call(Be.childNodes),Be.childNodes),o[Be.childNodes.length].nodeType}catch{p={apply:function(S,D){Ot.apply(S,m.call(D))},call:function(S){Ot.apply(S,m.call(arguments,1))}}}function pe(v,S,D,L){var F,$,z,Y,G,he,re,oe=S&&S.ownerDocument,fe=S?S.nodeType:9;if(D=D||[],typeof v!="string"||!v||fe!==1&&fe!==9&&fe!==11)return D;if(!L&&(cn(S),S=S||g,_)){if(fe!==11&&(G=ce.exec(v)))if(F=G[1]){if(fe===9)if(z=S.getElementById(F)){if(z.id===F)return p.call(D,z),D}else return D;else if(oe&&(z=oe.getElementById(F))&&pe.contains(S,z)&&z.id===F)return p.call(D,z),D}else{if(G[2])return p.apply(D,S.getElementsByTagName(v)),D;if((F=G[3])&&S.getElementsByClassName)return p.apply(D,S.getElementsByClassName(F)),D}if(!xe[v+" "]&&(!A||!A.test(v))){if(re=v,oe=S,fe===1&&(c.test(v)||n.test(v))){for(oe=ke.test(v)&&As(S.parentNode)||S,(oe!=S||!q.scope)&&((Y=S.getAttribute("id"))?Y=a.escapeSelector(Y):S.setAttribute("id",Y=U)),he=Gi(v),$=he.length;$--;)he[$]=(Y?"#"+Y:":scope")+" "+Mr(he[$]);re=he.join(",")}try{return p.apply(D,oe.querySelectorAll(re)),D}catch{xe(v,!0)}finally{Y===U&&S.removeAttribute("id")}}}return wo(v.replace(Ve,"$1"),S,D,L)}function un(){var v=[];function S(D,L){return v.push(D+" ")>s.cacheLength&&delete S[v.shift()],S[D+" "]=L}return S}function pt(v){return v[U]=!0,v}function gi(v){var S=g.createElement("fieldset");try{return!!v(S)}catch{return!1}finally{S.parentNode&&S.parentNode.removeChild(S),S=null}}function Au(v){return function(S){return b(S,"input")&&S.type===v}}function Cu(v){return function(S){return(b(S,"input")||b(S,"button"))&&S.type===v}}function vo(v){return function(S){return"form"in S?S.parentNode&&S.disabled===!1?"label"in S?"label"in S.parentNode?S.parentNode.disabled===v:S.disabled===v:S.isDisabled===v||S.isDisabled!==!v&&an(S)===v:S.disabled===v:"label"in S?S.disabled===v:!1}}function Mn(v){return pt(function(S){return S=+S,pt(function(D,L){for(var F,$=v([],D.length,S),z=$.length;z--;)D[F=$[z]]&&(D[F]=!(L[F]=D[F]))})})}function As(v){return v&&typeof v.getElementsByTagName<"u"&&v}function cn(v){var S,D=v?v.ownerDocument||v:Be;return D==g||D.nodeType!==9||!D.documentElement||(g=D,E=g.documentElement,_=!a.isXMLDoc(g),M=E.matches||E.webkitMatchesSelector||E.msMatchesSelector,E.msMatchesSelector&&Be!=g&&(S=g.defaultView)&&S.top!==S&&S.addEventListener("unload",Me),q.getById=gi(function(L){return E.appendChild(L).id=a.expando,!g.getElementsByName||!g.getElementsByName(a.expando).length}),q.disconnectedMatch=gi(function(L){return M.call(L,"*")}),q.scope=gi(function(){return g.querySelectorAll(":scope")}),q.cssHas=gi(function(){try{return g.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),q.getById?(s.filter.ID=function(L){var F=L.replace(ue,Ie);return function($){return $.getAttribute("id")===F}},s.find.ID=function(L,F){if(typeof F.getElementById<"u"&&_){var $=F.getElementById(L);return $?[$]:[]}}):(s.filter.ID=function(L){var F=L.replace(ue,Ie);return function($){var z=typeof $.getAttributeNode<"u"&&$.getAttributeNode("id");return z&&z.value===F}},s.find.ID=function(L,F){if(typeof F.getElementById<"u"&&_){var $,z,Y,G=F.getElementById(L);if(G){if($=G.getAttributeNode("id"),$&&$.value===L)return[G];for(Y=F.getElementsByName(L),z=0;G=Y[z++];)if($=G.getAttributeNode("id"),$&&$.value===L)return[G]}return[]}}),s.find.TAG=function(L,F){return typeof F.getElementsByTagName<"u"?F.getElementsByTagName(L):F.querySelectorAll(L)},s.find.CLASS=function(L,F){if(typeof F.getElementsByClassName<"u"&&_)return F.getElementsByClassName(L)},A=[],gi(function(L){var F;E.appendChild(L).innerHTML="<a id='"+U+"' href='' disabled='disabled'></a><select id='"+U+"-\r\\' disabled='disabled'><option selected=''></option></select>",L.querySelectorAll("[selected]").length||A.push("\\["+T+"*(?:value|"+Qe+")"),L.querySelectorAll("[id~="+U+"-]").length||A.push("~="),L.querySelectorAll("a#"+U+"+*").length||A.push(".#.+[+~]"),L.querySelectorAll(":checked").length||A.push(":checked"),F=g.createElement("input"),F.setAttribute("type","hidden"),L.appendChild(F).setAttribute("name","D"),E.appendChild(L).disabled=!0,L.querySelectorAll(":disabled").length!==2&&A.push(":enabled",":disabled"),F=g.createElement("input"),F.setAttribute("name",""),L.appendChild(F),L.querySelectorAll("[name='']").length||A.push("\\["+T+"*name"+T+"*="+T+`*(?:''|"")`)}),q.cssHas||A.push(":has"),A=A.length&&new RegExp(A.join("|")),Ce=function(L,F){if(L===F)return d=!0,0;var $=!L.compareDocumentPosition-!F.compareDocumentPosition;return $||($=(L.ownerDocument||L)==(F.ownerDocument||F)?L.compareDocumentPosition(F):1,$&1||!q.sortDetached&&F.compareDocumentPosition(L)===$?L===g||L.ownerDocument==Be&&pe.contains(Be,L)?-1:F===g||F.ownerDocument==Be&&pe.contains(Be,F)?1:l?j.call(l,L)-j.call(l,F):0:$&4?-1:1)}),g}pe.matches=function(v,S){return pe(v,null,null,S)},pe.matchesSelector=function(v,S){if(cn(v),_&&!xe[S+" "]&&(!A||!A.test(S)))try{var D=M.call(v,S);if(D||q.disconnectedMatch||v.document&&v.document.nodeType!==11)return D}catch{xe(S,!0)}return pe(S,g,null,[v]).length>0},pe.contains=function(v,S){return(v.ownerDocument||v)!=g&&cn(v),a.contains(v,S)},pe.attr=function(v,S){(v.ownerDocument||v)!=g&&cn(v);var D=s.attrHandle[S.toLowerCase()],L=D&&ae.call(s.attrHandle,S.toLowerCase())?D(v,S,!_):void 0;return L!==void 0?L:v.getAttribute(S)},pe.error=function(v){throw new Error("Syntax error, unrecognized expression: "+v)},a.uniqueSort=function(v){var S,D=[],L=0,F=0;if(d=!q.sortStable,l=!q.sortStable&&m.call(v,0),k.call(v,Ce),d){for(;S=v[F++];)S===v[F]&&(L=D.push(F));for(;L--;)R.call(v,D[L],1)}return l=null,v},a.fn.uniqueSort=function(){return this.pushStack(a.uniqueSort(m.apply(this)))},s=a.expr={cacheLength:50,createPseudo:pt,match:P,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(v){return v[1]=v[1].replace(ue,Ie),v[3]=(v[3]||v[4]||v[5]||"").replace(ue,Ie),v[2]==="~="&&(v[3]=" "+v[3]+" "),v.slice(0,4)},CHILD:function(v){return v[1]=v[1].toLowerCase(),v[1].slice(0,3)==="nth"?(v[3]||pe.error(v[0]),v[4]=+(v[4]?v[5]+(v[6]||1):2*(v[3]==="even"||v[3]==="odd")),v[5]=+(v[7]+v[8]||v[3]==="odd")):v[3]&&pe.error(v[0]),v},PSEUDO:function(v){var S,D=!v[6]&&v[2];return P.CHILD.test(v[0])?null:(v[3]?v[2]=v[4]||v[5]||"":D&&f.test(D)&&(S=Gi(D,!0))&&(S=D.indexOf(")",D.length-S)-D.length)&&(v[0]=v[0].slice(0,S),v[2]=D.slice(0,S)),v.slice(0,3))}},filter:{TAG:function(v){var S=v.replace(ue,Ie).toLowerCase();return v==="*"?function(){return!0}:function(D){return b(D,S)}},CLASS:function(v){var S=te[v+" "];return S||(S=new RegExp("(^|"+T+")"+v+"("+T+"|$)"))&&te(v,function(D){return S.test(typeof D.className=="string"&&D.className||typeof D.getAttribute<"u"&&D.getAttribute("class")||"")})},ATTR:function(v,S,D){return function(L){var F=pe.attr(L,v);return F==null?S==="!=":S?(F+="",S==="="?F===D:S==="!="?F!==D:S==="^="?D&&F.indexOf(D)===0:S==="*="?D&&F.indexOf(D)>-1:S==="$="?D&&F.slice(-D.length)===D:S==="~="?(" "+F.replace(de," ")+" ").indexOf(D)>-1:S==="|="?F===D||F.slice(0,D.length+1)===D+"-":!1):!0}},CHILD:function(v,S,D,L,F){var $=v.slice(0,3)!=="nth",z=v.slice(-4)!=="last",Y=S==="of-type";return L===1&&F===0?function(G){return!!G.parentNode}:function(G,he,re){var oe,fe,Z,Se,Xe,He=$!==z?"nextSibling":"previousSibling",ct=G.parentNode,Ct=Y&&G.nodeName.toLowerCase(),mi=!re&&!Y,ze=!1;if(ct){if($){for(;He;){for(Z=G;Z=Z[He];)if(Y?b(Z,Ct):Z.nodeType===1)return!1;Xe=He=v==="only"&&!Xe&&"nextSibling"}return!0}if(Xe=[z?ct.firstChild:ct.lastChild],z&&mi){for(fe=ct[U]||(ct[U]={}),oe=fe[v]||[],Se=oe[0]===N&&oe[1],ze=Se&&oe[2],Z=Se&&ct.childNodes[Se];Z=++Se&&Z&&Z[He]||(ze=Se=0)||Xe.pop();)if(Z.nodeType===1&&++ze&&Z===G){fe[v]=[N,Se,ze];break}}else if(mi&&(fe=G[U]||(G[U]={}),oe=fe[v]||[],Se=oe[0]===N&&oe[1],ze=Se),ze===!1)for(;(Z=++Se&&Z&&Z[He]||(ze=Se=0)||Xe.pop())&&!((Y?b(Z,Ct):Z.nodeType===1)&&++ze&&(mi&&(fe=Z[U]||(Z[U]={}),fe[v]=[N,ze]),Z===G)););return ze-=F,ze===L||ze%L===0&&ze/L>=0}}},PSEUDO:function(v,S){var D,L=s.pseudos[v]||s.setFilters[v.toLowerCase()]||pe.error("unsupported pseudo: "+v);return L[U]?L(S):L.length>1?(D=[v,v,"",S],s.setFilters.hasOwnProperty(v.toLowerCase())?pt(function(F,$){for(var z,Y=L(F,S),G=Y.length;G--;)z=j.call(F,Y[G]),F[z]=!($[z]=Y[G])}):function(F){return L(F,0,D)}):L}},pseudos:{not:pt(function(v){var S=[],D=[],L=xs(v.replace(Ve,"$1"));return L[U]?pt(function(F,$,z,Y){for(var G,he=L(F,null,Y,[]),re=F.length;re--;)(G=he[re])&&(F[re]=!($[re]=G))}):function(F,$,z){return S[0]=F,L(S,null,z,D),S[0]=null,!D.pop()}}),has:pt(function(v){return function(S){return pe(v,S).length>0}}),contains:pt(function(v){return v=v.replace(ue,Ie),function(S){return(S.textContent||a.text(S)).indexOf(v)>-1}}),lang:pt(function(v){return y.test(v||"")||pe.error("unsupported lang: "+v),v=v.replace(ue,Ie).toLowerCase(),function(S){var D;do if(D=_?S.lang:S.getAttribute("xml:lang")||S.getAttribute("lang"))return D=D.toLowerCase(),D===v||D.indexOf(v+"-")===0;while((S=S.parentNode)&&S.nodeType===1);return!1}}),target:function(v){var S=e.location&&e.location.hash;return S&&S.slice(1)===v.id},root:function(v){return v===E},focus:function(v){return v===et()&&g.hasFocus()&&!!(v.type||v.href||~v.tabIndex)},enabled:vo(!1),disabled:vo(!0),checked:function(v){return b(v,"input")&&!!v.checked||b(v,"option")&&!!v.selected},selected:function(v){return v.parentNode&&v.parentNode.selectedIndex,v.selected===!0},empty:function(v){for(v=v.firstChild;v;v=v.nextSibling)if(v.nodeType<6)return!1;return!0},parent:function(v){return!s.pseudos.empty(v)},header:function(v){return B.test(v.nodeName)},input:function(v){return O.test(v.nodeName)},button:function(v){return b(v,"input")&&v.type==="button"||b(v,"button")},text:function(v){var S;return b(v,"input")&&v.type==="text"&&((S=v.getAttribute("type"))==null||S.toLowerCase()==="text")},first:Mn(function(){return[0]}),last:Mn(function(v,S){return[S-1]}),eq:Mn(function(v,S,D){return[D<0?D+S:D]}),even:Mn(function(v,S){for(var D=0;D<S;D+=2)v.push(D);return v}),odd:Mn(function(v,S){for(var D=1;D<S;D+=2)v.push(D);return v}),lt:Mn(function(v,S,D){var L;for(D<0?L=D+S:D>S?L=S:L=D;--L>=0;)v.push(L);return v}),gt:Mn(function(v,S,D){for(var L=D<0?D+S:D;++L<S;)v.push(L);return v})}},s.pseudos.nth=s.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})s.pseudos[t]=Au(t);for(t in{submit:!0,reset:!0})s.pseudos[t]=Cu(t);function _o(){}_o.prototype=s.filters=s.pseudos,s.setFilters=new _o;function Gi(v,S){var D,L,F,$,z,Y,G,he=le[v+" "];if(he)return S?0:he.slice(0);for(z=v,Y=[],G=s.preFilter;z;){(!D||(L=Te.exec(z)))&&(L&&(z=z.slice(L[0].length)||z),Y.push(F=[])),D=!1,(L=n.exec(z))&&(D=L.shift(),F.push({value:D,type:L[0].replace(Ve," ")}),z=z.slice(D.length));for($ in s.filter)(L=P[$].exec(z))&&(!G[$]||(L=G[$](L)))&&(D=L.shift(),F.push({value:D,type:$,matches:L}),z=z.slice(D.length));if(!D)break}return S?z.length:z?pe.error(v):le(v,Y).slice(0)}function Mr(v){for(var S=0,D=v.length,L="";S<D;S++)L+=v[S].value;return L}function jr(v,S,D){var L=S.dir,F=S.next,$=F||L,z=D&&$==="parentNode",Y=H++;return S.first?function(G,he,re){for(;G=G[L];)if(G.nodeType===1||z)return v(G,he,re);return!1}:function(G,he,re){var oe,fe,Z=[N,Y];if(re){for(;G=G[L];)if((G.nodeType===1||z)&&v(G,he,re))return!0}else for(;G=G[L];)if(G.nodeType===1||z)if(fe=G[U]||(G[U]={}),F&&b(G,F))G=G[L]||G;else{if((oe=fe[$])&&oe[0]===N&&oe[1]===Y)return Z[2]=oe[2];if(fe[$]=Z,Z[2]=v(G,he,re))return!0}return!1}}function Cs(v){return v.length>1?function(S,D,L){for(var F=v.length;F--;)if(!v[F](S,D,L))return!1;return!0}:v[0]}function ku(v,S,D){for(var L=0,F=S.length;L<F;L++)pe(v,S[L],D);return D}function Ur(v,S,D,L,F){for(var $,z=[],Y=0,G=v.length,he=S!=null;Y<G;Y++)($=v[Y])&&(!D||D($,L,F))&&(z.push($),he&&S.push(Y));return z}function ks(v,S,D,L,F,$){return L&&!L[U]&&(L=ks(L)),F&&!F[U]&&(F=ks(F,$)),pt(function(z,Y,G,he){var re,oe,fe,Z,Se=[],Xe=[],He=Y.length,ct=z||ku(S||"*",G.nodeType?[G]:G,[]),Ct=v&&(z||!S)?Ur(ct,Se,v,G,he):ct;if(D?(Z=F||(z?v:He||L)?[]:Y,D(Ct,Z,G,he)):Z=Ct,L)for(re=Ur(Z,Xe),L(re,[],G,he),oe=re.length;oe--;)(fe=re[oe])&&(Z[Xe[oe]]=!(Ct[Xe[oe]]=fe));if(z){if(F||v){if(F){for(re=[],oe=Z.length;oe--;)(fe=Z[oe])&&re.push(Ct[oe]=fe);F(null,Z=[],re,he)}for(oe=Z.length;oe--;)(fe=Z[oe])&&(re=F?j.call(z,fe):Se[oe])>-1&&(z[re]=!(Y[re]=fe))}}else Z=Ur(Z===Y?Z.splice(He,Z.length):Z),F?F(null,Y,Z,he):p.apply(Y,Z)})}function Ps(v){for(var S,D,L,F=v.length,$=s.relative[v[0].type],z=$||s.relative[" "],Y=$?1:0,G=jr(function(oe){return oe===S},z,!0),he=jr(function(oe){return j.call(S,oe)>-1},z,!0),re=[function(oe,fe,Z){var Se=!$&&(Z||fe!=u)||((S=fe).nodeType?G(oe,fe,Z):he(oe,fe,Z));return S=null,Se}];Y<F;Y++)if(D=s.relative[v[Y].type])re=[jr(Cs(re),D)];else{if(D=s.filter[v[Y].type].apply(null,v[Y].matches),D[U]){for(L=++Y;L<F&&!s.relative[v[L].type];L++);return ks(Y>1&&Cs(re),Y>1&&Mr(v.slice(0,Y-1).concat({value:v[Y-2].type===" "?"*":""})).replace(Ve,"$1"),D,Y<L&&Ps(v.slice(Y,L)),L<F&&Ps(v=v.slice(L)),L<F&&Mr(v))}re.push(D)}return Cs(re)}function Pu(v,S){var D=S.length>0,L=v.length>0,F=function($,z,Y,G,he){var re,oe,fe,Z=0,Se="0",Xe=$&&[],He=[],ct=u,Ct=$||L&&s.find.TAG("*",he),mi=N+=ct==null?1:Math.random()||.1,ze=Ct.length;for(he&&(u=z==g||z||he);Se!==ze&&(re=Ct[Se])!=null;Se++){if(L&&re){for(oe=0,!z&&re.ownerDocument!=g&&(cn(re),Y=!_);fe=v[oe++];)if(fe(re,z||g,Y)){p.call(G,re);break}he&&(N=mi)}D&&((re=!fe&&re)&&Z--,$&&Xe.push(re))}if(Z+=Se,D&&Se!==Z){for(oe=0;fe=S[oe++];)fe(Xe,He,z,Y);if($){if(Z>0)for(;Se--;)Xe[Se]||He[Se]||(He[Se]=C.call(G));He=Ur(He)}p.apply(G,He),he&&!$&&He.length>0&&Z+S.length>1&&a.uniqueSort(G)}return he&&(N=mi,u=ct),Xe};return D?pt(F):F}function xs(v,S){var D,L=[],F=[],$=ie[v+" "];if(!$){for(S||(S=Gi(v)),D=S.length;D--;)$=Ps(S[D]),$[U]?L.push($):F.push($);$=ie(v,Pu(F,L)),$.selector=v}return $}function wo(v,S,D,L){var F,$,z,Y,G,he=typeof v=="function"&&v,re=!L&&Gi(v=he.selector||v);if(D=D||[],re.length===1){if($=re[0]=re[0].slice(0),$.length>2&&(z=$[0]).type==="ID"&&S.nodeType===9&&_&&s.relative[$[1].type]){if(S=(s.find.ID(z.matches[0].replace(ue,Ie),S)||[])[0],S)he&&(S=S.parentNode);else return D;v=v.slice($.shift().value.length)}for(F=P.needsContext.test(v)?0:$.length;F--&&(z=$[F],!s.relative[Y=z.type]);)if((G=s.find[Y])&&(L=G(z.matches[0].replace(ue,Ie),ke.test($[0].type)&&As(S.parentNode)||S))){if($.splice(F,1),v=L.length&&Mr($),!v)return p.apply(D,L),D;break}}return(he||xs(v,re))(L,S,!_,D,!S||ke.test(v)&&As(S.parentNode)||S),D}q.sortStable=U.split("").sort(Ce).join("")===U,cn(),q.sortDetached=gi(function(v){return v.compareDocumentPosition(g.createElement("fieldset"))&1}),a.find=pe,a.expr[":"]=a.expr.pseudos,a.unique=a.uniqueSort,pe.compile=xs,pe.select=wo,pe.setDocument=cn,pe.tokenize=Gi,pe.escape=a.escapeSelector,pe.getText=a.text,pe.isXML=a.isXMLDoc,pe.selectors=a.expr,pe.support=a.support,pe.uniqueSort=a.uniqueSort})();var vt=function(t,s,u){for(var l=[],d=u!==void 0;(t=t[s])&&t.nodeType!==9;)if(t.nodeType===1){if(d&&a(t).is(u))break;l.push(t)}return l},ki=function(t,s){for(var u=[];t;t=t.nextSibling)t.nodeType===1&&t!==s&&u.push(t);return u},mr=a.expr.match.needsContext,lt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Pe(t,s,u){return J(s)?a.grep(t,function(l,d){return!!s.call(l,d,l)!==u}):s.nodeType?a.grep(t,function(l){return l===s!==u}):typeof s!="string"?a.grep(t,function(l){return j.call(s,l)>-1!==u}):a.filter(s,t,u)}a.filter=function(t,s,u){var l=s[0];return u&&(t=":not("+t+")"),s.length===1&&l.nodeType===1?a.find.matchesSelector(l,t)?[l]:[]:a.find.matches(t,a.grep(s,function(d){return d.nodeType===1}))},a.fn.extend({find:function(t){var s,u,l=this.length,d=this;if(typeof t!="string")return this.pushStack(a(t).filter(function(){for(s=0;s<l;s++)if(a.contains(d[s],this))return!0}));for(u=this.pushStack([]),s=0;s<l;s++)a.find(t,d[s],u);return l>1?a.uniqueSort(u):u},filter:function(t){return this.pushStack(Pe(this,t||[],!1))},not:function(t){return this.pushStack(Pe(this,t||[],!0))},is:function(t){return!!Pe(this,typeof t=="string"&&mr.test(t)?a(t):t||[],!1).length}});var yr,In=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,hs=a.fn.init=function(t,s,u){var l,d;if(!t)return this;if(u=u||yr,typeof t=="string")if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?l=[null,t,null]:l=In.exec(t),l&&(l[1]||!s))if(l[1]){if(s=s instanceof a?s[0]:s,a.merge(this,a.parseHTML(l[1],s&&s.nodeType?s.ownerDocument||s:Q,!0)),lt.test(l[1])&&a.isPlainObject(s))for(l in s)J(this[l])?this[l](s[l]):this.attr(l,s[l]);return this}else return d=Q.getElementById(l[2]),d&&(this[0]=d,this.length=1),this;else return!s||s.jquery?(s||u).find(t):this.constructor(s).find(t);else{if(t.nodeType)return this[0]=t,this.length=1,this;if(J(t))return u.ready!==void 0?u.ready(t):t(a)}return a.makeArray(t,this)};hs.prototype=a.fn,yr=a(Q);var Gn=/^(?:parents|prev(?:Until|All))/,fs={children:!0,contents:!0,next:!0,prev:!0};a.fn.extend({has:function(t){var s=a(t,this),u=s.length;return this.filter(function(){for(var l=0;l<u;l++)if(a.contains(this,s[l]))return!0})},closest:function(t,s){var u,l=0,d=this.length,p=[],g=typeof t!="string"&&a(t);if(!mr.test(t)){for(;l<d;l++)for(u=this[l];u&&u!==s;u=u.parentNode)if(u.nodeType<11&&(g?g.index(u)>-1:u.nodeType===1&&a.find.matchesSelector(u,t))){p.push(u);break}}return this.pushStack(p.length>1?a.uniqueSort(p):p)},index:function(t){return t?typeof t=="string"?j.call(a(t),this[0]):j.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,s){return this.pushStack(a.uniqueSort(a.merge(this.get(),a(t,s))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function vr(t,s){for(;(t=t[s])&&t.nodeType!==1;);return t}a.each({parent:function(t){var s=t.parentNode;return s&&s.nodeType!==11?s:null},parents:function(t){return vt(t,"parentNode")},parentsUntil:function(t,s,u){return vt(t,"parentNode",u)},next:function(t){return vr(t,"nextSibling")},prev:function(t){return vr(t,"previousSibling")},nextAll:function(t){return vt(t,"nextSibling")},prevAll:function(t){return vt(t,"previousSibling")},nextUntil:function(t,s,u){return vt(t,"nextSibling",u)},prevUntil:function(t,s,u){return vt(t,"previousSibling",u)},siblings:function(t){return ki((t.parentNode||{}).firstChild,t)},children:function(t){return ki(t.firstChild)},contents:function(t){return t.contentDocument!=null&&h(t.contentDocument)?t.contentDocument:(b(t,"template")&&(t=t.content||t),a.merge([],t.childNodes))}},function(t,s){a.fn[t]=function(u,l){var d=a.map(this,s,u);return t.slice(-5)!=="Until"&&(l=u),l&&typeof l=="string"&&(d=a.filter(l,d)),this.length>1&&(fs[t]||a.uniqueSort(d),Gn.test(t)&&d.reverse()),this.pushStack(d)}});var $e=/[^\x20\t\r\n\f]+/g;function Kn(t){var s={};return a.each(t.match($e)||[],function(u,l){s[l]=!0}),s}a.Callbacks=function(t){t=typeof t=="string"?Kn(t):a.extend({},t);var s,u,l,d,p=[],g=[],E=-1,_=function(){for(d=d||t.once,l=s=!0;g.length;E=-1)for(u=g.shift();++E<p.length;)p[E].apply(u[0],u[1])===!1&&t.stopOnFalse&&(E=p.length,u=!1);t.memory||(u=!1),s=!1,d&&(u?p=[]:p="")},A={add:function(){return p&&(u&&!s&&(E=p.length-1,g.push(u)),(function M(U){a.each(U,function(N,H){J(H)?(!t.unique||!A.has(H))&&p.push(H):H&&H.length&&je(H)!=="string"&&M(H)})})(arguments),u&&!s&&_()),this},remove:function(){return a.each(arguments,function(M,U){for(var N;(N=a.inArray(U,p,N))>-1;)p.splice(N,1),N<=E&&E--}),this},has:function(M){return M?a.inArray(M,p)>-1:p.length>0},empty:function(){return p&&(p=[]),this},disable:function(){return d=g=[],p=u="",this},disabled:function(){return!p},lock:function(){return d=g=[],!u&&!s&&(p=u=""),this},locked:function(){return!!d},fireWith:function(M,U){return d||(U=U||[],U=[M,U.slice?U.slice():U],g.push(U),s||_()),this},fire:function(){return A.fireWith(this,arguments),this},fired:function(){return!!l}};return A};function _t(t){return t}function en(t){throw t}function Jn(t,s,u,l){var d;try{t&&J(d=t.promise)?d.call(t).done(s).fail(u):t&&J(d=t.then)?d.call(t,s,u):s.apply(void 0,[t].slice(l))}catch(p){u.apply(void 0,[p])}}a.extend({Deferred:function(t){var s=[["notify","progress",a.Callbacks("memory"),a.Callbacks("memory"),2],["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),0,"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),1,"rejected"]],u="pending",l={state:function(){return u},always:function(){return d.done(arguments).fail(arguments),this},catch:function(p){return l.then(null,p)},pipe:function(){var p=arguments;return a.Deferred(function(g){a.each(s,function(E,_){var A=J(p[_[4]])&&p[_[4]];d[_[1]](function(){var M=A&&A.apply(this,arguments);M&&J(M.promise)?M.promise().progress(g.notify).done(g.resolve).fail(g.reject):g[_[0]+"With"](this,A?[M]:arguments)})}),p=null}).promise()},then:function(p,g,E){var _=0;function A(M,U,N,H){return function(){var te=this,le=arguments,ie=function(){var Ce,Qe;if(!(M<_)){if(Ce=N.apply(te,le),Ce===U.promise())throw new TypeError("Thenable self-resolution");Qe=Ce&&(typeof Ce=="object"||typeof Ce=="function")&&Ce.then,J(Qe)?H?Qe.call(Ce,A(_,U,_t,H),A(_,U,en,H)):(_++,Qe.call(Ce,A(_,U,_t,H),A(_,U,en,H),A(_,U,_t,U.notifyWith))):(N!==_t&&(te=void 0,le=[Ce]),(H||U.resolveWith)(te,le))}},xe=H?ie:function(){try{ie()}catch(Ce){a.Deferred.exceptionHook&&a.Deferred.exceptionHook(Ce,xe.error),M+1>=_&&(N!==en&&(te=void 0,le=[Ce]),U.rejectWith(te,le))}};M?xe():(a.Deferred.getErrorHook?xe.error=a.Deferred.getErrorHook():a.Deferred.getStackHook&&(xe.error=a.Deferred.getStackHook()),e.setTimeout(xe))}}return a.Deferred(function(M){s[0][3].add(A(0,M,J(E)?E:_t,M.notifyWith)),s[1][3].add(A(0,M,J(p)?p:_t)),s[2][3].add(A(0,M,J(g)?g:en))}).promise()},promise:function(p){return p!=null?a.extend(p,l):l}},d={};return a.each(s,function(p,g){var E=g[2],_=g[5];l[g[1]]=E.add,_&&E.add(function(){u=_},s[3-p][2].disable,s[3-p][3].disable,s[0][2].lock,s[0][3].lock),E.add(g[3].fire),d[g[0]]=function(){return d[g[0]+"With"](this===d?void 0:this,arguments),this},d[g[0]+"With"]=E.fireWith}),l.promise(d),t&&t.call(d,d),d},when:function(t){var s=arguments.length,u=s,l=Array(u),d=m.call(arguments),p=a.Deferred(),g=function(E){return function(_){l[E]=this,d[E]=arguments.length>1?m.call(arguments):_,--s||p.resolveWith(l,d)}};if(s<=1&&(Jn(t,p.done(g(u)).resolve,p.reject,!s),p.state()==="pending"||J(d[u]&&d[u].then)))return p.then();for(;u--;)Jn(d[u],g(u),p.reject);return p.promise()}});var Pi=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;a.Deferred.exceptionHook=function(t,s){e.console&&e.console.warn&&t&&Pi.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,s)},a.readyException=function(t){e.setTimeout(function(){throw t})};var Xn=a.Deferred();a.fn.ready=function(t){return Xn.then(t).catch(function(s){a.readyException(s)}),this},a.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--a.readyWait:a.isReady)||(a.isReady=!0,!(t!==!0&&--a.readyWait>0)&&Xn.resolveWith(Q,[a]))}}),a.ready.then=Xn.then;function Yn(){Q.removeEventListener("DOMContentLoaded",Yn),e.removeEventListener("load",Yn),a.ready()}Q.readyState==="complete"||Q.readyState!=="loading"&&!Q.documentElement.doScroll?e.setTimeout(a.ready):(Q.addEventListener("DOMContentLoaded",Yn),e.addEventListener("load",Yn));var ht=function(t,s,u,l,d,p,g){var E=0,_=t.length,A=u==null;if(je(u)==="object"){d=!0;for(E in u)ht(t,s,E,u[E],!0,p,g)}else if(l!==void 0&&(d=!0,J(l)||(g=!0),A&&(g?(s.call(t,l),s=null):(A=s,s=function(M,U,N){return A.call(a(M),N)})),s))for(;E<_;E++)s(t[E],u,g?l:l.call(t[E],E,s(t[E],u)));return d?t:A?s.call(t):_?s(t[0],u):p},_r=/^-ms-/,xi=/-([a-z])/g;function wr(t,s){return s.toUpperCase()}function it(t){return t.replace(_r,"ms-").replace(xi,wr)}var Lt=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function Mt(){this.expando=a.expando+Mt.uid++}Mt.uid=1,Mt.prototype={cache:function(t){var s=t[this.expando];return s||(s={},Lt(t)&&(t.nodeType?t[this.expando]=s:Object.defineProperty(t,this.expando,{value:s,configurable:!0}))),s},set:function(t,s,u){var l,d=this.cache(t);if(typeof s=="string")d[it(s)]=u;else for(l in s)d[it(l)]=s[l];return d},get:function(t,s){return s===void 0?this.cache(t):t[this.expando]&&t[this.expando][it(s)]},access:function(t,s,u){return s===void 0||s&&typeof s=="string"&&u===void 0?this.get(t,s):(this.set(t,s,u),u!==void 0?u:s)},remove:function(t,s){var u,l=t[this.expando];if(l!==void 0){if(s!==void 0)for(Array.isArray(s)?s=s.map(it):(s=it(s),s=s in l?[s]:s.match($e)||[]),u=s.length;u--;)delete l[s[u]];(s===void 0||a.isEmptyObject(l))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var s=t[this.expando];return s!==void 0&&!a.isEmptyObject(s)}};var X=new Mt,_e=new Mt,Ue=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Qn=/[A-Z]/g;function Tr(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:Ue.test(t)?JSON.parse(t):t}function Ri(t,s,u){var l;if(u===void 0&&t.nodeType===1)if(l="data-"+s.replace(Qn,"-$&").toLowerCase(),u=t.getAttribute(l),typeof u=="string"){try{u=Tr(u)}catch{}_e.set(t,s,u)}else u=void 0;return u}a.extend({hasData:function(t){return _e.hasData(t)||X.hasData(t)},data:function(t,s,u){return _e.access(t,s,u)},removeData:function(t,s){_e.remove(t,s)},_data:function(t,s,u){return X.access(t,s,u)},_removeData:function(t,s){X.remove(t,s)}}),a.fn.extend({data:function(t,s){var u,l,d,p=this[0],g=p&&p.attributes;if(t===void 0){if(this.length&&(d=_e.get(p),p.nodeType===1&&!X.get(p,"hasDataAttrs"))){for(u=g.length;u--;)g[u]&&(l=g[u].name,l.indexOf("data-")===0&&(l=it(l.slice(5)),Ri(p,l,d[l])));X.set(p,"hasDataAttrs",!0)}return d}return typeof t=="object"?this.each(function(){_e.set(this,t)}):ht(this,function(E){var _;if(p&&E===void 0)return _=_e.get(p,t),_!==void 0||(_=Ri(p,t),_!==void 0)?_:void 0;this.each(function(){_e.set(this,t,E)})},null,s,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){_e.remove(this,t)})}}),a.extend({queue:function(t,s,u){var l;if(t)return s=(s||"fx")+"queue",l=X.get(t,s),u&&(!l||Array.isArray(u)?l=X.access(t,s,a.makeArray(u)):l.push(u)),l||[]},dequeue:function(t,s){s=s||"fx";var u=a.queue(t,s),l=u.length,d=u.shift(),p=a._queueHooks(t,s),g=function(){a.dequeue(t,s)};d==="inprogress"&&(d=u.shift(),l--),d&&(s==="fx"&&u.unshift("inprogress"),delete p.stop,d.call(t,g,p)),!l&&p&&p.empty.fire()},_queueHooks:function(t,s){var u=s+"queueHooks";return X.get(t,u)||X.access(t,u,{empty:a.Callbacks("once memory").add(function(){X.remove(t,[s+"queue",u])})})}}),a.fn.extend({queue:function(t,s){var u=2;return typeof t!="string"&&(s=t,t="fx",u--),arguments.length<u?a.queue(this[0],t):s===void 0?this:this.each(function(){var l=a.queue(this,t,s);a._queueHooks(this,t),t==="fx"&&l[0]!=="inprogress"&&a.dequeue(this,t)})},dequeue:function(t){return this.each(function(){a.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,s){var u,l=1,d=a.Deferred(),p=this,g=this.length,E=function(){--l||d.resolveWith(p,[p])};for(typeof t!="string"&&(s=t,t=void 0),t=t||"fx";g--;)u=X.get(p[g],t+"queueHooks"),u&&u.empty&&(l++,u.empty.add(E));return E(),d.promise(s)}});var br=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ft=new RegExp("^(?:([+-])=|)("+br+")([a-z%]*)$","i"),rt=["Top","Right","Bottom","Left"],wt=Q.documentElement,Tt=function(t){return a.contains(t.ownerDocument,t)},ds={composed:!0};wt.getRootNode&&(Tt=function(t){return a.contains(t.ownerDocument,t)||t.getRootNode(ds)===t.ownerDocument});var Zn=function(t,s){return t=s||t,t.style.display==="none"||t.style.display===""&&Tt(t)&&a.css(t,"display")==="none"};function ei(t,s,u,l){var d,p,g=20,E=l?function(){return l.cur()}:function(){return a.css(t,s,"")},_=E(),A=u&&u[3]||(a.cssNumber[s]?"":"px"),M=t.nodeType&&(a.cssNumber[s]||A!=="px"&&+_)&&ft.exec(a.css(t,s));if(M&&M[3]!==A){for(_=_/2,A=A||M[3],M=+_||1;g--;)a.style(t,s,M+A),(1-p)*(1-(p=E()/_||.5))<=0&&(g=0),M=M/p;M=M*2,a.style(t,s,M+A),u=u||[]}return u&&(M=+M||+_||0,d=u[1]?M+(u[1]+1)*u[2]:+u[2],l&&(l.unit=A,l.start=M,l.end=d)),d}var Di={};function ps(t){var s,u=t.ownerDocument,l=t.nodeName,d=Di[l];return d||(s=u.body.appendChild(u.createElement(l)),d=a.css(s,"display"),s.parentNode.removeChild(s),d==="none"&&(d="block"),Di[l]=d,d)}function st(t,s){for(var u,l,d=[],p=0,g=t.length;p<g;p++)l=t[p],l.style&&(u=l.style.display,s?(u==="none"&&(d[p]=X.get(l,"display")||null,d[p]||(l.style.display="")),l.style.display===""&&Zn(l)&&(d[p]=ps(l))):u!=="none"&&(d[p]="none",X.set(l,"display",u)));for(p=0;p<g;p++)d[p]!=null&&(t[p].style.display=d[p]);return t}a.fn.extend({show:function(){return st(this,!0)},hide:function(){return st(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){Zn(this)?a(this).show():a(this).hide()})}});var jt=/^(?:checkbox|radio)$/i,ti=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ut=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=Q.createDocumentFragment(),s=t.appendChild(Q.createElement("div")),u=Q.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),s.appendChild(u),q.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,s.innerHTML="<textarea>x</textarea>",q.noCloneChecked=!!s.cloneNode(!0).lastChild.defaultValue,s.innerHTML="<option></option>",q.option=!!s.lastChild})();var qe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td,q.option||(qe.optgroup=qe.option=[1,"<select multiple='multiple'>","</select>"]);function Oe(t,s){var u;return typeof t.getElementsByTagName<"u"?u=t.getElementsByTagName(s||"*"):typeof t.querySelectorAll<"u"?u=t.querySelectorAll(s||"*"):u=[],s===void 0||s&&b(t,s)?a.merge([t],u):u}function ni(t,s){for(var u=0,l=t.length;u<l;u++)X.set(t[u],"globalEval",!s||X.get(s[u],"globalEval"))}var Sn=/<|&#?\w+;/;function Ni(t,s,u,l,d){for(var p,g,E,_,A,M,U=s.createDocumentFragment(),N=[],H=0,te=t.length;H<te;H++)if(p=t[H],p||p===0)if(je(p)==="object")a.merge(N,p.nodeType?[p]:p);else if(!Sn.test(p))N.push(s.createTextNode(p));else{for(g=g||U.appendChild(s.createElement("div")),E=(ti.exec(p)||["",""])[1].toLowerCase(),_=qe[E]||qe._default,g.innerHTML=_[1]+a.htmlPrefilter(p)+_[2],M=_[0];M--;)g=g.lastChild;a.merge(N,g.childNodes),g=U.firstChild,g.textContent=""}for(U.textContent="",H=0;p=N[H++];){if(l&&a.inArray(p,l)>-1){d&&d.push(p);continue}if(A=Tt(p),g=Oe(U.appendChild(p),"script"),A&&ni(g),u)for(M=0;p=g[M++];)Ut.test(p.type||"")&&u.push(p)}return U}var Le=/^([^.]*)(?:\.(.+)|)/;function Ft(){return!0}function ot(){return!1}function Ht(t,s,u,l,d,p){var g,E;if(typeof s=="object"){typeof u!="string"&&(l=l||u,u=void 0);for(E in s)Ht(t,E,u,l,s[E],p);return t}if(l==null&&d==null?(d=u,l=u=void 0):d==null&&(typeof u=="string"?(d=l,l=void 0):(d=l,l=u,u=void 0)),d===!1)d=ot;else if(!d)return t;return p===1&&(g=d,d=function(_){return a().off(_),g.apply(this,arguments)},d.guid=g.guid||(g.guid=a.guid++)),t.each(function(){a.event.add(this,s,d,l,u)})}a.event={global:{},add:function(t,s,u,l,d){var p,g,E,_,A,M,U,N,H,te,le,ie=X.get(t);if(Lt(t))for(u.handler&&(p=u,u=p.handler,d=p.selector),d&&a.find.matchesSelector(wt,d),u.guid||(u.guid=a.guid++),(_=ie.events)||(_=ie.events=Object.create(null)),(g=ie.handle)||(g=ie.handle=function(xe){return typeof a<"u"&&a.event.triggered!==xe.type?a.event.dispatch.apply(t,arguments):void 0}),s=(s||"").match($e)||[""],A=s.length;A--;)E=Le.exec(s[A])||[],H=le=E[1],te=(E[2]||"").split(".").sort(),H&&(U=a.event.special[H]||{},H=(d?U.delegateType:U.bindType)||H,U=a.event.special[H]||{},M=a.extend({type:H,origType:le,data:l,handler:u,guid:u.guid,selector:d,needsContext:d&&a.expr.match.needsContext.test(d),namespace:te.join(".")},p),(N=_[H])||(N=_[H]=[],N.delegateCount=0,(!U.setup||U.setup.call(t,l,te,g)===!1)&&t.addEventListener&&t.addEventListener(H,g)),U.add&&(U.add.call(t,M),M.handler.guid||(M.handler.guid=u.guid)),d?N.splice(N.delegateCount++,0,M):N.push(M),a.event.global[H]=!0)},remove:function(t,s,u,l,d){var p,g,E,_,A,M,U,N,H,te,le,ie=X.hasData(t)&&X.get(t);if(!(!ie||!(_=ie.events))){for(s=(s||"").match($e)||[""],A=s.length;A--;){if(E=Le.exec(s[A])||[],H=le=E[1],te=(E[2]||"").split(".").sort(),!H){for(H in _)a.event.remove(t,H+s[A],u,l,!0);continue}for(U=a.event.special[H]||{},H=(l?U.delegateType:U.bindType)||H,N=_[H]||[],E=E[2]&&new RegExp("(^|\\.)"+te.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=p=N.length;p--;)M=N[p],(d||le===M.origType)&&(!u||u.guid===M.guid)&&(!E||E.test(M.namespace))&&(!l||l===M.selector||l==="**"&&M.selector)&&(N.splice(p,1),M.selector&&N.delegateCount--,U.remove&&U.remove.call(t,M));g&&!N.length&&((!U.teardown||U.teardown.call(t,te,ie.handle)===!1)&&a.removeEvent(t,H,ie.handle),delete _[H])}a.isEmptyObject(_)&&X.remove(t,"handle events")}},dispatch:function(t){var s,u,l,d,p,g,E=new Array(arguments.length),_=a.event.fix(t),A=(X.get(this,"events")||Object.create(null))[_.type]||[],M=a.event.special[_.type]||{};for(E[0]=_,s=1;s<arguments.length;s++)E[s]=arguments[s];if(_.delegateTarget=this,!(M.preDispatch&&M.preDispatch.call(this,_)===!1)){for(g=a.event.handlers.call(this,_,A),s=0;(d=g[s++])&&!_.isPropagationStopped();)for(_.currentTarget=d.elem,u=0;(p=d.handlers[u++])&&!_.isImmediatePropagationStopped();)(!_.rnamespace||p.namespace===!1||_.rnamespace.test(p.namespace))&&(_.handleObj=p,_.data=p.data,l=((a.event.special[p.origType]||{}).handle||p.handler).apply(d.elem,E),l!==void 0&&(_.result=l)===!1&&(_.preventDefault(),_.stopPropagation()));return M.postDispatch&&M.postDispatch.call(this,_),_.result}},handlers:function(t,s){var u,l,d,p,g,E=[],_=s.delegateCount,A=t.target;if(_&&A.nodeType&&!(t.type==="click"&&t.button>=1)){for(;A!==this;A=A.parentNode||this)if(A.nodeType===1&&!(t.type==="click"&&A.disabled===!0)){for(p=[],g={},u=0;u<_;u++)l=s[u],d=l.selector+" ",g[d]===void 0&&(g[d]=l.needsContext?a(d,this).index(A)>-1:a.find(d,this,null,[A]).length),g[d]&&p.push(l);p.length&&E.push({elem:A,handlers:p})}}return A=this,_<s.length&&E.push({elem:A,handlers:s.slice(_)}),E},addProp:function(t,s){Object.defineProperty(a.Event.prototype,t,{enumerable:!0,configurable:!0,get:J(s)?function(){if(this.originalEvent)return s(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(u){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(t){return t[a.expando]?t:new a.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var s=this||t;return jt.test(s.type)&&s.click&&b(s,"input")&&ii(s,"click",!0),!1},trigger:function(t){var s=this||t;return jt.test(s.type)&&s.click&&b(s,"input")&&ii(s,"click"),!0},_default:function(t){var s=t.target;return jt.test(s.type)&&s.click&&b(s,"input")&&X.get(s,"click")||b(s,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};function ii(t,s,u){if(!u){X.get(t,s)===void 0&&a.event.add(t,s,Ft);return}X.set(t,s,!1),a.event.add(t,s,{namespace:!1,handler:function(l){var d,p=X.get(this,s);if(l.isTrigger&1&&this[s]){if(p)(a.event.special[s]||{}).delegateType&&l.stopPropagation();else if(p=m.call(arguments),X.set(this,s,p),this[s](),d=X.get(this,s),X.set(this,s,!1),p!==d)return l.stopImmediatePropagation(),l.preventDefault(),d}else p&&(X.set(this,s,a.event.trigger(p[0],p.slice(1),this)),l.stopPropagation(),l.isImmediatePropagationStopped=Ft)}})}a.removeEvent=function(t,s,u){t.removeEventListener&&t.removeEventListener(s,u)},a.Event=function(t,s){if(!(this instanceof a.Event))return new a.Event(t,s);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?Ft:ot,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,s&&a.extend(this,s),this.timeStamp=t&&t.timeStamp||Date.now(),this[a.expando]=!0},a.Event.prototype={constructor:a.Event,isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Ft,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Ft,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Ft,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},a.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},a.event.addProp),a.each({focus:"focusin",blur:"focusout"},function(t,s){function u(l){if(Q.documentMode){var d=X.get(this,"handle"),p=a.event.fix(l);p.type=l.type==="focusin"?"focus":"blur",p.isSimulated=!0,d(l),p.target===p.currentTarget&&d(p)}else a.event.simulate(s,l.target,a.event.fix(l))}a.event.special[t]={setup:function(){var l;if(ii(this,t,!0),Q.documentMode)l=X.get(this,s),l||this.addEventListener(s,u),X.set(this,s,(l||0)+1);else return!1},trigger:function(){return ii(this,t),!0},teardown:function(){var l;if(Q.documentMode)l=X.get(this,s)-1,l?X.set(this,s,l):(this.removeEventListener(s,u),X.remove(this,s));else return!1},_default:function(l){return X.get(l.target,t)},delegateType:s},a.event.special[s]={setup:function(){var l=this.ownerDocument||this.document||this,d=Q.documentMode?this:l,p=X.get(d,s);p||(Q.documentMode?this.addEventListener(s,u):l.addEventListener(t,u,!0)),X.set(d,s,(p||0)+1)},teardown:function(){var l=this.ownerDocument||this.document||this,d=Q.documentMode?this:l,p=X.get(d,s)-1;p?X.set(d,s,p):(Q.documentMode?this.removeEventListener(s,u):l.removeEventListener(t,u,!0),X.remove(d,s))}}}),a.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,s){a.event.special[t]={delegateType:s,bindType:s,handle:function(u){var l,d=this,p=u.relatedTarget,g=u.handleObj;return(!p||p!==d&&!a.contains(d,p))&&(u.type=g.origType,l=g.handler.apply(this,arguments),u.type=s),l}}}),a.fn.extend({on:function(t,s,u,l){return Ht(this,t,s,u,l)},one:function(t,s,u,l){return Ht(this,t,s,u,l,1)},off:function(t,s,u){var l,d;if(t&&t.preventDefault&&t.handleObj)return l=t.handleObj,a(t.delegateTarget).off(l.namespace?l.origType+"."+l.namespace:l.origType,l.selector,l.handler),this;if(typeof t=="object"){for(d in t)this.off(d,s,t[d]);return this}return(s===!1||typeof s=="function")&&(u=s,s=void 0),u===!1&&(u=ot),this.each(function(){a.event.remove(this,t,u,s)})}});var gs=/<script|<style|<link/i,tn=/checked\s*(?:[^=]|=\s*.checked.)/i,ms=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Er(t,s){return b(t,"table")&&b(s.nodeType!==11?s:s.firstChild,"tr")&&a(t).children("tbody")[0]||t}function Oi(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function ys(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function ri(t,s){var u,l,d,p,g,E,_;if(s.nodeType===1){if(X.hasData(t)&&(p=X.get(t),_=p.events,_)){X.remove(s,"handle events");for(d in _)for(u=0,l=_[d].length;u<l;u++)a.event.add(s,d,_[d][u])}_e.hasData(t)&&(g=_e.access(t),E=a.extend({},g),_e.set(s,E))}}function si(t,s){var u=s.nodeName.toLowerCase();u==="input"&&jt.test(t.type)?s.checked=t.checked:(u==="input"||u==="textarea")&&(s.defaultValue=t.defaultValue)}function We(t,s,u,l){s=w(s);var d,p,g,E,_,A,M=0,U=t.length,N=U-1,H=s[0],te=J(H);if(te||U>1&&typeof H=="string"&&!q.checkClone&&tn.test(H))return t.each(function(le){var ie=t.eq(le);te&&(s[0]=H.call(this,le,ie.html())),We(ie,s,u,l)});if(U&&(d=Ni(s,t[0].ownerDocument,!1,t,l),p=d.firstChild,d.childNodes.length===1&&(d=p),p||l)){for(g=a.map(Oe(d,"script"),Oi),E=g.length;M<U;M++)_=d,M!==N&&(_=a.clone(_,!0,!0),E&&a.merge(g,Oe(_,"script"))),u.call(t[M],_,M);if(E)for(A=g[g.length-1].ownerDocument,a.map(g,ys),M=0;M<E;M++)_=g[M],Ut.test(_.type||"")&&!X.access(_,"globalEval")&&a.contains(A,_)&&(_.src&&(_.type||"").toLowerCase()!=="module"?a._evalUrl&&!_.noModule&&a._evalUrl(_.src,{nonce:_.nonce||_.getAttribute("nonce")},A):Ne(_.textContent.replace(ms,""),_,A))}return t}function Li(t,s,u){for(var l,d=s?a.filter(s,t):t,p=0;(l=d[p])!=null;p++)!u&&l.nodeType===1&&a.cleanData(Oe(l)),l.parentNode&&(u&&Tt(l)&&ni(Oe(l,"script")),l.parentNode.removeChild(l));return t}a.extend({htmlPrefilter:function(t){return t},clone:function(t,s,u){var l,d,p,g,E=t.cloneNode(!0),_=Tt(t);if(!q.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!a.isXMLDoc(t))for(g=Oe(E),p=Oe(t),l=0,d=p.length;l<d;l++)si(p[l],g[l]);if(s)if(u)for(p=p||Oe(t),g=g||Oe(E),l=0,d=p.length;l<d;l++)ri(p[l],g[l]);else ri(t,E);return g=Oe(E,"script"),g.length>0&&ni(g,!_&&Oe(t,"script")),E},cleanData:function(t){for(var s,u,l,d=a.event.special,p=0;(u=t[p])!==void 0;p++)if(Lt(u)){if(s=u[X.expando]){if(s.events)for(l in s.events)d[l]?a.event.remove(u,l):a.removeEvent(u,l,s.handle);u[X.expando]=void 0}u[_e.expando]&&(u[_e.expando]=void 0)}}}),a.fn.extend({detach:function(t){return Li(this,t,!0)},remove:function(t){return Li(this,t)},text:function(t){return ht(this,function(s){return s===void 0?a.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=s)})},null,t,arguments.length)},append:function(){return We(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=Er(this,t);s.appendChild(t)}})},prepend:function(){return We(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var s=Er(this,t);s.insertBefore(t,s.firstChild)}})},before:function(){return We(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return We(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,s=0;(t=this[s])!=null;s++)t.nodeType===1&&(a.cleanData(Oe(t,!1)),t.textContent="");return this},clone:function(t,s){return t=t??!1,s=s??t,this.map(function(){return a.clone(this,t,s)})},html:function(t){return ht(this,function(s){var u=this[0]||{},l=0,d=this.length;if(s===void 0&&u.nodeType===1)return u.innerHTML;if(typeof s=="string"&&!gs.test(s)&&!qe[(ti.exec(s)||["",""])[1].toLowerCase()]){s=a.htmlPrefilter(s);try{for(;l<d;l++)u=this[l]||{},u.nodeType===1&&(a.cleanData(Oe(u,!1)),u.innerHTML=s);u=0}catch{}}u&&this.empty().append(s)},null,t,arguments.length)},replaceWith:function(){var t=[];return We(this,arguments,function(s){var u=this.parentNode;a.inArray(this,t)<0&&(a.cleanData(Oe(this)),u&&u.replaceChild(s,this))},t)}}),a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,s){a.fn[t]=function(u){for(var l,d=[],p=a(u),g=p.length-1,E=0;E<=g;E++)l=E===g?this:this.clone(!0),a(p[E])[s](l),x.apply(d,l.get());return this.pushStack(d)}});var oi=new RegExp("^("+br+")(?!px)[a-z%]+$","i"),An=/^--/,nn=function(t){var s=t.ownerDocument.defaultView;return(!s||!s.opener)&&(s=e),s.getComputedStyle(t)},Mi=function(t,s,u){var l,d,p={};for(d in s)p[d]=t.style[d],t.style[d]=s[d];l=u.call(t);for(d in s)t.style[d]=p[d];return l},Ir=new RegExp(rt.join("|"),"i");(function(){function t(){if(A){_.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",A.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",wt.appendChild(_).appendChild(A);var M=e.getComputedStyle(A);u=M.top!=="1%",E=s(M.marginLeft)===12,A.style.right="60%",p=s(M.right)===36,l=s(M.width)===36,A.style.position="absolute",d=s(A.offsetWidth/3)===12,wt.removeChild(_),A=null}}function s(M){return Math.round(parseFloat(M))}var u,l,d,p,g,E,_=Q.createElement("div"),A=Q.createElement("div");A.style&&(A.style.backgroundClip="content-box",A.cloneNode(!0).style.backgroundClip="",q.clearCloneStyle=A.style.backgroundClip==="content-box",a.extend(q,{boxSizingReliable:function(){return t(),l},pixelBoxStyles:function(){return t(),p},pixelPosition:function(){return t(),u},reliableMarginLeft:function(){return t(),E},scrollboxSize:function(){return t(),d},reliableTrDimensions:function(){var M,U,N,H;return g==null&&(M=Q.createElement("table"),U=Q.createElement("tr"),N=Q.createElement("div"),M.style.cssText="position:absolute;left:-11111px;border-collapse:separate",U.style.cssText="box-sizing:content-box;border:1px solid",U.style.height="1px",N.style.height="9px",N.style.display="block",wt.appendChild(M).appendChild(U).appendChild(N),H=e.getComputedStyle(U),g=parseInt(H.height,10)+parseInt(H.borderTopWidth,10)+parseInt(H.borderBottomWidth,10)===U.offsetHeight,wt.removeChild(M)),g}}))})();function Cn(t,s,u){var l,d,p,g,E=An.test(s),_=t.style;return u=u||nn(t),u&&(g=u.getPropertyValue(s)||u[s],E&&g&&(g=g.replace(Ve,"$1")||void 0),g===""&&!Tt(t)&&(g=a.style(t,s)),!q.pixelBoxStyles()&&oi.test(g)&&Ir.test(s)&&(l=_.width,d=_.minWidth,p=_.maxWidth,_.minWidth=_.maxWidth=_.width=g,g=u.width,_.width=l,_.minWidth=d,_.maxWidth=p)),g!==void 0?g+"":g}function kn(t,s){return{get:function(){if(t()){delete this.get;return}return(this.get=s).apply(this,arguments)}}}var ji=["Webkit","Moz","ms"],ai=Q.createElement("div").style,rn={};function Vt(t){for(var s=t[0].toUpperCase()+t.slice(1),u=ji.length;u--;)if(t=ji[u]+s,t in ai)return t}function Pn(t){var s=a.cssProps[t]||rn[t];return s||(t in ai?t:rn[t]=Vt(t)||t)}var vs=/^(none|table(?!-c[ea]).+)/,Sr={position:"absolute",visibility:"hidden",display:"block"},Ui={letterSpacing:"0",fontWeight:"400"};function Fi(t,s,u){var l=ft.exec(s);return l?Math.max(0,l[2]-(u||0))+(l[3]||"px"):s}function xn(t,s,u,l,d,p){var g=s==="width"?1:0,E=0,_=0,A=0;if(u===(l?"border":"content"))return 0;for(;g<4;g+=2)u==="margin"&&(A+=a.css(t,u+rt[g],!0,d)),l?(u==="content"&&(_-=a.css(t,"padding"+rt[g],!0,d)),u!=="margin"&&(_-=a.css(t,"border"+rt[g]+"Width",!0,d))):(_+=a.css(t,"padding"+rt[g],!0,d),u!=="padding"?_+=a.css(t,"border"+rt[g]+"Width",!0,d):E+=a.css(t,"border"+rt[g]+"Width",!0,d));return!l&&p>=0&&(_+=Math.max(0,Math.ceil(t["offset"+s[0].toUpperCase()+s.slice(1)]-p-_-E-.5))||0),_+A}function ui(t,s,u){var l=nn(t),d=!q.boxSizingReliable()||u,p=d&&a.css(t,"boxSizing",!1,l)==="border-box",g=p,E=Cn(t,s,l),_="offset"+s[0].toUpperCase()+s.slice(1);if(oi.test(E)){if(!u)return E;E="auto"}return(!q.boxSizingReliable()&&p||!q.reliableTrDimensions()&&b(t,"tr")||E==="auto"||!parseFloat(E)&&a.css(t,"display",!1,l)==="inline")&&t.getClientRects().length&&(p=a.css(t,"boxSizing",!1,l)==="border-box",g=_ in t,g&&(E=t[_])),E=parseFloat(E)||0,E+xn(t,s,u||(p?"border":"content"),g,l,E)+"px"}a.extend({cssHooks:{opacity:{get:function(t,s){if(s){var u=Cn(t,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(t,s,u,l){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var d,p,g,E=it(s),_=An.test(s),A=t.style;if(_||(s=Pn(E)),g=a.cssHooks[s]||a.cssHooks[E],u!==void 0){if(p=typeof u,p==="string"&&(d=ft.exec(u))&&d[1]&&(u=ei(t,s,d),p="number"),u==null||u!==u)return;p==="number"&&!_&&(u+=d&&d[3]||(a.cssNumber[E]?"":"px")),!q.clearCloneStyle&&u===""&&s.indexOf("background")===0&&(A[s]="inherit"),(!g||!("set"in g)||(u=g.set(t,u,l))!==void 0)&&(_?A.setProperty(s,u):A[s]=u)}else return g&&"get"in g&&(d=g.get(t,!1,l))!==void 0?d:A[s]}},css:function(t,s,u,l){var d,p,g,E=it(s),_=An.test(s);return _||(s=Pn(E)),g=a.cssHooks[s]||a.cssHooks[E],g&&"get"in g&&(d=g.get(t,!0,u)),d===void 0&&(d=Cn(t,s,l)),d==="normal"&&s in Ui&&(d=Ui[s]),u===""||u?(p=parseFloat(d),u===!0||isFinite(p)?p||0:d):d}}),a.each(["height","width"],function(t,s){a.cssHooks[s]={get:function(u,l,d){if(l)return vs.test(a.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?Mi(u,Sr,function(){return ui(u,s,d)}):ui(u,s,d)},set:function(u,l,d){var p,g=nn(u),E=!q.scrollboxSize()&&g.position==="absolute",_=E||d,A=_&&a.css(u,"boxSizing",!1,g)==="border-box",M=d?xn(u,s,d,A,g):0;return A&&E&&(M-=Math.ceil(u["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(g[s])-xn(u,s,"border",!1,g)-.5)),M&&(p=ft.exec(l))&&(p[3]||"px")!=="px"&&(u.style[s]=l,l=a.css(u,s)),Fi(u,l,M)}}}),a.cssHooks.marginLeft=kn(q.reliableMarginLeft,function(t,s){if(s)return(parseFloat(Cn(t,"marginLeft"))||t.getBoundingClientRect().left-Mi(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),a.each({margin:"",padding:"",border:"Width"},function(t,s){a.cssHooks[t+s]={expand:function(u){for(var l=0,d={},p=typeof u=="string"?u.split(" "):[u];l<4;l++)d[t+rt[l]+s]=p[l]||p[l-2]||p[0];return d}},t!=="margin"&&(a.cssHooks[t+s].set=Fi)}),a.fn.extend({css:function(t,s){return ht(this,function(u,l,d){var p,g,E={},_=0;if(Array.isArray(l)){for(p=nn(u),g=l.length;_<g;_++)E[l[_]]=a.css(u,l[_],!1,p);return E}return d!==void 0?a.style(u,l,d):a.css(u,l)},t,s,arguments.length>1)}});function Fe(t,s,u,l,d){return new Fe.prototype.init(t,s,u,l,d)}a.Tween=Fe,Fe.prototype={constructor:Fe,init:function(t,s,u,l,d,p){this.elem=t,this.prop=u,this.easing=d||a.easing._default,this.options=s,this.start=this.now=this.cur(),this.end=l,this.unit=p||(a.cssNumber[u]?"":"px")},cur:function(){var t=Fe.propHooks[this.prop];return t&&t.get?t.get(this):Fe.propHooks._default.get(this)},run:function(t){var s,u=Fe.propHooks[this.prop];return this.options.duration?this.pos=s=a.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=s=t,this.now=(this.end-this.start)*s+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):Fe.propHooks._default.set(this),this}},Fe.prototype.init.prototype=Fe.prototype,Fe.propHooks={_default:{get:function(t){var s;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(s=a.css(t.elem,t.prop,""),!s||s==="auto"?0:s)},set:function(t){a.fx.step[t.prop]?a.fx.step[t.prop](t):t.elem.nodeType===1&&(a.cssHooks[t.prop]||t.elem.style[Pn(t.prop)]!=null)?a.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},Fe.propHooks.scrollTop=Fe.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},a.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},a.fx=Fe.prototype.init,a.fx.step={};var Bt,ci,_s=/^(?:toggle|show|hide)$/,Ar=/queueHooks$/;function li(){ci&&(Q.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(li):e.setTimeout(li,a.fx.interval),a.fx.tick())}function Cr(){return e.setTimeout(function(){Bt=void 0}),Bt=Date.now()}function at(t,s){var u,l=0,d={height:t};for(s=s?1:0;l<4;l+=2-s)u=rt[l],d["margin"+u]=d["padding"+u]=t;return s&&(d.opacity=d.width=t),d}function ut(t,s,u){for(var l,d=(Je.tweeners[s]||[]).concat(Je.tweeners["*"]),p=0,g=d.length;p<g;p++)if(l=d[p].call(u,s,t))return l}function hi(t,s,u){var l,d,p,g,E,_,A,M,U="width"in s||"height"in s,N=this,H={},te=t.style,le=t.nodeType&&Zn(t),ie=X.get(t,"fxshow");u.queue||(g=a._queueHooks(t,"fx"),g.unqueued==null&&(g.unqueued=0,E=g.empty.fire,g.empty.fire=function(){g.unqueued||E()}),g.unqueued++,N.always(function(){N.always(function(){g.unqueued--,a.queue(t,"fx").length||g.empty.fire()})}));for(l in s)if(d=s[l],_s.test(d)){if(delete s[l],p=p||d==="toggle",d===(le?"hide":"show"))if(d==="show"&&ie&&ie[l]!==void 0)le=!0;else continue;H[l]=ie&&ie[l]||a.style(t,l)}if(_=!a.isEmptyObject(s),!(!_&&a.isEmptyObject(H))){U&&t.nodeType===1&&(u.overflow=[te.overflow,te.overflowX,te.overflowY],A=ie&&ie.display,A==null&&(A=X.get(t,"display")),M=a.css(t,"display"),M==="none"&&(A?M=A:(st([t],!0),A=t.style.display||A,M=a.css(t,"display"),st([t]))),(M==="inline"||M==="inline-block"&&A!=null)&&a.css(t,"float")==="none"&&(_||(N.done(function(){te.display=A}),A==null&&(M=te.display,A=M==="none"?"":M)),te.display="inline-block")),u.overflow&&(te.overflow="hidden",N.always(function(){te.overflow=u.overflow[0],te.overflowX=u.overflow[1],te.overflowY=u.overflow[2]})),_=!1;for(l in H)_||(ie?"hidden"in ie&&(le=ie.hidden):ie=X.access(t,"fxshow",{display:A}),p&&(ie.hidden=!le),le&&st([t],!0),N.done(function(){le||st([t]),X.remove(t,"fxshow");for(l in H)a.style(t,l,H[l])})),_=ut(le?ie[l]:0,l,N),l in ie||(ie[l]=_.start,le&&(_.end=_.start,_.start=0))}}function fi(t,s){var u,l,d,p,g;for(u in t)if(l=it(u),d=s[l],p=t[u],Array.isArray(p)&&(d=p[1],p=t[u]=p[0]),u!==l&&(t[l]=p,delete t[u]),g=a.cssHooks[l],g&&"expand"in g){p=g.expand(p),delete t[l];for(u in p)u in t||(t[u]=p[u],s[u]=d)}else s[l]=d}function Je(t,s,u){var l,d,p=0,g=Je.prefilters.length,E=a.Deferred().always(function(){delete _.elem}),_=function(){if(d)return!1;for(var U=Bt||Cr(),N=Math.max(0,A.startTime+A.duration-U),H=N/A.duration||0,te=1-H,le=0,ie=A.tweens.length;le<ie;le++)A.tweens[le].run(te);return E.notifyWith(t,[A,te,N]),te<1&&ie?N:(ie||E.notifyWith(t,[A,1,0]),E.resolveWith(t,[A]),!1)},A=E.promise({elem:t,props:a.extend({},s),opts:a.extend(!0,{specialEasing:{},easing:a.easing._default},u),originalProperties:s,originalOptions:u,startTime:Bt||Cr(),duration:u.duration,tweens:[],createTween:function(U,N){var H=a.Tween(t,A.opts,U,N,A.opts.specialEasing[U]||A.opts.easing);return A.tweens.push(H),H},stop:function(U){var N=0,H=U?A.tweens.length:0;if(d)return this;for(d=!0;N<H;N++)A.tweens[N].run(1);return U?(E.notifyWith(t,[A,1,0]),E.resolveWith(t,[A,U])):E.rejectWith(t,[A,U]),this}}),M=A.props;for(fi(M,A.opts.specialEasing);p<g;p++)if(l=Je.prefilters[p].call(A,t,M,A.opts),l)return J(l.stop)&&(a._queueHooks(A.elem,A.opts.queue).stop=l.stop.bind(l)),l;return a.map(M,ut,A),J(A.opts.start)&&A.opts.start.call(t,A),A.progress(A.opts.progress).done(A.opts.done,A.opts.complete).fail(A.opts.fail).always(A.opts.always),a.fx.timer(a.extend(_,{elem:t,anim:A,queue:A.opts.queue})),A}a.Animation=a.extend(Je,{tweeners:{"*":[function(t,s){var u=this.createTween(t,s);return ei(u.elem,t,ft.exec(s),u),u}]},tweener:function(t,s){J(t)?(s=t,t=["*"]):t=t.match($e);for(var u,l=0,d=t.length;l<d;l++)u=t[l],Je.tweeners[u]=Je.tweeners[u]||[],Je.tweeners[u].unshift(s)},prefilters:[hi],prefilter:function(t,s){s?Je.prefilters.unshift(t):Je.prefilters.push(t)}}),a.speed=function(t,s,u){var l=t&&typeof t=="object"?a.extend({},t):{complete:u||!u&&s||J(t)&&t,duration:t,easing:u&&s||s&&!J(s)&&s};return a.fx.off?l.duration=0:typeof l.duration!="number"&&(l.duration in a.fx.speeds?l.duration=a.fx.speeds[l.duration]:l.duration=a.fx.speeds._default),(l.queue==null||l.queue===!0)&&(l.queue="fx"),l.old=l.complete,l.complete=function(){J(l.old)&&l.old.call(this),l.queue&&a.dequeue(this,l.queue)},l},a.fn.extend({fadeTo:function(t,s,u,l){return this.filter(Zn).css("opacity",0).show().end().animate({opacity:s},t,u,l)},animate:function(t,s,u,l){var d=a.isEmptyObject(t),p=a.speed(s,u,l),g=function(){var E=Je(this,a.extend({},t),p);(d||X.get(this,"finish"))&&E.stop(!0)};return g.finish=g,d||p.queue===!1?this.each(g):this.queue(p.queue,g)},stop:function(t,s,u){var l=function(d){var p=d.stop;delete d.stop,p(u)};return typeof t!="string"&&(u=s,s=t,t=void 0),s&&this.queue(t||"fx",[]),this.each(function(){var d=!0,p=t!=null&&t+"queueHooks",g=a.timers,E=X.get(this);if(p)E[p]&&E[p].stop&&l(E[p]);else for(p in E)E[p]&&E[p].stop&&Ar.test(p)&&l(E[p]);for(p=g.length;p--;)g[p].elem===this&&(t==null||g[p].queue===t)&&(g[p].anim.stop(u),d=!1,g.splice(p,1));(d||!u)&&a.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var s,u=X.get(this),l=u[t+"queue"],d=u[t+"queueHooks"],p=a.timers,g=l?l.length:0;for(u.finish=!0,a.queue(this,t,[]),d&&d.stop&&d.stop.call(this,!0),s=p.length;s--;)p[s].elem===this&&p[s].queue===t&&(p[s].anim.stop(!0),p.splice(s,1));for(s=0;s<g;s++)l[s]&&l[s].finish&&l[s].finish.call(this);delete u.finish})}}),a.each(["toggle","show","hide"],function(t,s){var u=a.fn[s];a.fn[s]=function(l,d,p){return l==null||typeof l=="boolean"?u.apply(this,arguments):this.animate(at(s,!0),l,d,p)}}),a.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,s){a.fn[t]=function(u,l,d){return this.animate(s,u,l,d)}}),a.timers=[],a.fx.tick=function(){var t,s=0,u=a.timers;for(Bt=Date.now();s<u.length;s++)t=u[s],!t()&&u[s]===t&&u.splice(s--,1);u.length||a.fx.stop(),Bt=void 0},a.fx.timer=function(t){a.timers.push(t),a.fx.start()},a.fx.interval=13,a.fx.start=function(){ci||(ci=!0,li())},a.fx.stop=function(){ci=null},a.fx.speeds={slow:600,fast:200,_default:400},a.fn.delay=function(t,s){return t=a.fx&&a.fx.speeds[t]||t,s=s||"fx",this.queue(s,function(u,l){var d=e.setTimeout(u,t);l.stop=function(){e.clearTimeout(d)}})},(function(){var t=Q.createElement("input"),s=Q.createElement("select"),u=s.appendChild(Q.createElement("option"));t.type="checkbox",q.checkOn=t.value!=="",q.optSelected=u.selected,t=Q.createElement("input"),t.value="t",t.type="radio",q.radioValue=t.value==="t"})();var be,bt=a.expr.attrHandle;a.fn.extend({attr:function(t,s){return ht(this,a.attr,t,s,arguments.length>1)},removeAttr:function(t){return this.each(function(){a.removeAttr(this,t)})}}),a.extend({attr:function(t,s,u){var l,d,p=t.nodeType;if(!(p===3||p===8||p===2)){if(typeof t.getAttribute>"u")return a.prop(t,s,u);if((p!==1||!a.isXMLDoc(t))&&(d=a.attrHooks[s.toLowerCase()]||(a.expr.match.bool.test(s)?be:void 0)),u!==void 0){if(u===null){a.removeAttr(t,s);return}return d&&"set"in d&&(l=d.set(t,u,s))!==void 0?l:(t.setAttribute(s,u+""),u)}return d&&"get"in d&&(l=d.get(t,s))!==null?l:(l=a.find.attr(t,s),l??void 0)}},attrHooks:{type:{set:function(t,s){if(!q.radioValue&&s==="radio"&&b(t,"input")){var u=t.value;return t.setAttribute("type",s),u&&(t.value=u),s}}}},removeAttr:function(t,s){var u,l=0,d=s&&s.match($e);if(d&&t.nodeType===1)for(;u=d[l++];)t.removeAttribute(u)}}),be={set:function(t,s,u){return s===!1?a.removeAttr(t,u):t.setAttribute(u,u),u}},a.each(a.expr.match.bool.source.match(/\w+/g),function(t,s){var u=bt[s]||a.find.attr;bt[s]=function(l,d,p){var g,E,_=d.toLowerCase();return p||(E=bt[_],bt[_]=g,g=u(l,d,p)!=null?_:null,bt[_]=E),g}});var Rn=/^(?:input|select|textarea|button)$/i,Dn=/^(?:a|area)$/i;a.fn.extend({prop:function(t,s){return ht(this,a.prop,t,s,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[a.propFix[t]||t]})}}),a.extend({prop:function(t,s,u){var l,d,p=t.nodeType;if(!(p===3||p===8||p===2))return(p!==1||!a.isXMLDoc(t))&&(s=a.propFix[s]||s,d=a.propHooks[s]),u!==void 0?d&&"set"in d&&(l=d.set(t,u,s))!==void 0?l:t[s]=u:d&&"get"in d&&(l=d.get(t,s))!==null?l:t[s]},propHooks:{tabIndex:{get:function(t){var s=a.find.attr(t,"tabindex");return s?parseInt(s,10):Rn.test(t.nodeName)||Dn.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),q.optSelected||(a.propHooks.selected={get:function(t){var s=t.parentNode;return s&&s.parentNode&&s.parentNode.selectedIndex,null},set:function(t){var s=t.parentNode;s&&(s.selectedIndex,s.parentNode&&s.parentNode.selectedIndex)}}),a.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){a.propFix[this.toLowerCase()]=this});function $t(t){var s=t.match($e)||[];return s.join(" ")}function Et(t){return t.getAttribute&&t.getAttribute("class")||""}function Hi(t){return Array.isArray(t)?t:typeof t=="string"?t.match($e)||[]:[]}a.fn.extend({addClass:function(t){var s,u,l,d,p,g;return J(t)?this.each(function(E){a(this).addClass(t.call(this,E,Et(this)))}):(s=Hi(t),s.length?this.each(function(){if(l=Et(this),u=this.nodeType===1&&" "+$t(l)+" ",u){for(p=0;p<s.length;p++)d=s[p],u.indexOf(" "+d+" ")<0&&(u+=d+" ");g=$t(u),l!==g&&this.setAttribute("class",g)}}):this)},removeClass:function(t){var s,u,l,d,p,g;return J(t)?this.each(function(E){a(this).removeClass(t.call(this,E,Et(this)))}):arguments.length?(s=Hi(t),s.length?this.each(function(){if(l=Et(this),u=this.nodeType===1&&" "+$t(l)+" ",u){for(p=0;p<s.length;p++)for(d=s[p];u.indexOf(" "+d+" ")>-1;)u=u.replace(" "+d+" "," ");g=$t(u),l!==g&&this.setAttribute("class",g)}}):this):this.attr("class","")},toggleClass:function(t,s){var u,l,d,p,g=typeof t,E=g==="string"||Array.isArray(t);return J(t)?this.each(function(_){a(this).toggleClass(t.call(this,_,Et(this),s),s)}):typeof s=="boolean"&&E?s?this.addClass(t):this.removeClass(t):(u=Hi(t),this.each(function(){if(E)for(p=a(this),d=0;d<u.length;d++)l=u[d],p.hasClass(l)?p.removeClass(l):p.addClass(l);else(t===void 0||g==="boolean")&&(l=Et(this),l&&X.set(this,"__className__",l),this.setAttribute&&this.setAttribute("class",l||t===!1?"":X.get(this,"__className__")||""))}))},hasClass:function(t){var s,u,l=0;for(s=" "+t+" ";u=this[l++];)if(u.nodeType===1&&(" "+$t(Et(u))+" ").indexOf(s)>-1)return!0;return!1}});var ws=/\r/g;a.fn.extend({val:function(t){var s,u,l,d=this[0];return arguments.length?(l=J(t),this.each(function(p){var g;this.nodeType===1&&(l?g=t.call(this,p,a(this).val()):g=t,g==null?g="":typeof g=="number"?g+="":Array.isArray(g)&&(g=a.map(g,function(E){return E==null?"":E+""})),s=a.valHooks[this.type]||a.valHooks[this.nodeName.toLowerCase()],(!s||!("set"in s)||s.set(this,g,"value")===void 0)&&(this.value=g))})):d?(s=a.valHooks[d.type]||a.valHooks[d.nodeName.toLowerCase()],s&&"get"in s&&(u=s.get(d,"value"))!==void 0?u:(u=d.value,typeof u=="string"?u.replace(ws,""):u??"")):void 0}}),a.extend({valHooks:{option:{get:function(t){var s=a.find.attr(t,"value");return s??$t(a.text(t))}},select:{get:function(t){var s,u,l,d=t.options,p=t.selectedIndex,g=t.type==="select-one",E=g?null:[],_=g?p+1:d.length;for(p<0?l=_:l=g?p:0;l<_;l++)if(u=d[l],(u.selected||l===p)&&!u.disabled&&(!u.parentNode.disabled||!b(u.parentNode,"optgroup"))){if(s=a(u).val(),g)return s;E.push(s)}return E},set:function(t,s){for(var u,l,d=t.options,p=a.makeArray(s),g=d.length;g--;)l=d[g],(l.selected=a.inArray(a.valHooks.option.get(l),p)>-1)&&(u=!0);return u||(t.selectedIndex=-1),p}}}}),a.each(["radio","checkbox"],function(){a.valHooks[this]={set:function(t,s){if(Array.isArray(s))return t.checked=a.inArray(a(t).val(),s)>-1}},q.checkOn||(a.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})});var Nn=e.location,kr={guid:Date.now()},qt=/\?/;a.parseXML=function(t){var s,u;if(!t||typeof t!="string")return null;try{s=new e.DOMParser().parseFromString(t,"text/xml")}catch{}return u=s&&s.getElementsByTagName("parsererror")[0],(!s||u)&&a.error("Invalid XML: "+(u?a.map(u.childNodes,function(l){return l.textContent}).join(`
`):t)),s};var dt=/^(?:focusinfocus|focusoutblur)$/,Vi=function(t){t.stopPropagation()};a.extend(a.event,{trigger:function(t,s,u,l){var d,p,g,E,_,A,M,U,N=[u||Q],H=ae.call(t,"type")?t.type:t,te=ae.call(t,"namespace")?t.namespace.split("."):[];if(p=U=g=u=u||Q,!(u.nodeType===3||u.nodeType===8)&&!dt.test(H+a.event.triggered)&&(H.indexOf(".")>-1&&(te=H.split("."),H=te.shift(),te.sort()),_=H.indexOf(":")<0&&"on"+H,t=t[a.expando]?t:new a.Event(H,typeof t=="object"&&t),t.isTrigger=l?2:3,t.namespace=te.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+te.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=u),s=s==null?[t]:a.makeArray(s,[t]),M=a.event.special[H]||{},!(!l&&M.trigger&&M.trigger.apply(u,s)===!1))){if(!l&&!M.noBubble&&!ve(u)){for(E=M.delegateType||H,dt.test(E+H)||(p=p.parentNode);p;p=p.parentNode)N.push(p),g=p;g===(u.ownerDocument||Q)&&N.push(g.defaultView||g.parentWindow||e)}for(d=0;(p=N[d++])&&!t.isPropagationStopped();)U=p,t.type=d>1?E:M.bindType||H,A=(X.get(p,"events")||Object.create(null))[t.type]&&X.get(p,"handle"),A&&A.apply(p,s),A=_&&p[_],A&&A.apply&&Lt(p)&&(t.result=A.apply(p,s),t.result===!1&&t.preventDefault());return t.type=H,!l&&!t.isDefaultPrevented()&&(!M._default||M._default.apply(N.pop(),s)===!1)&&Lt(u)&&_&&J(u[H])&&!ve(u)&&(g=u[_],g&&(u[_]=null),a.event.triggered=H,t.isPropagationStopped()&&U.addEventListener(H,Vi),u[H](),t.isPropagationStopped()&&U.removeEventListener(H,Vi),a.event.triggered=void 0,g&&(u[_]=g)),t.result}},simulate:function(t,s,u){var l=a.extend(new a.Event,u,{type:t,isSimulated:!0});a.event.trigger(l,null,s)}}),a.fn.extend({trigger:function(t,s){return this.each(function(){a.event.trigger(t,s,this)})},triggerHandler:function(t,s){var u=this[0];if(u)return a.event.trigger(t,s,u,!0)}});var Pr=/\[\]$/,Bi=/\r?\n/g,sn=/^(?:submit|button|image|reset|file)$/i,Ts=/^(?:input|select|textarea|keygen)/i;function $i(t,s,u,l){var d;if(Array.isArray(s))a.each(s,function(p,g){u||Pr.test(t)?l(t,g):$i(t+"["+(typeof g=="object"&&g!=null?p:"")+"]",g,u,l)});else if(!u&&je(s)==="object")for(d in s)$i(t+"["+d+"]",s[d],u,l);else l(t,s)}a.param=function(t,s){var u,l=[],d=function(p,g){var E=J(g)?g():g;l[l.length]=encodeURIComponent(p)+"="+encodeURIComponent(E??"")};if(t==null)return"";if(Array.isArray(t)||t.jquery&&!a.isPlainObject(t))a.each(t,function(){d(this.name,this.value)});else for(u in t)$i(u,t[u],s,d);return l.join("&")},a.fn.extend({serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=a.prop(this,"elements");return t?a.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!a(this).is(":disabled")&&Ts.test(this.nodeName)&&!sn.test(t)&&(this.checked||!jt.test(t))}).map(function(t,s){var u=a(this).val();return u==null?null:Array.isArray(u)?a.map(u,function(l){return{name:s.name,value:l.replace(Bi,`\r
`)}}):{name:s.name,value:u.replace(Bi,`\r
`)}}).get()}});var bs=/%20/g,It=/#.*$/,Es=/([?&])_=[^&]*/,Is=/^(.*?):[ \t]*([^\r\n]*)$/mg,di=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pi=/^(?:GET|HEAD)$/,xr=/^\/\//,on={},Wt={},qi="*/".concat("*"),On=Q.createElement("a");On.href=Nn.href;function Ae(t){return function(s,u){typeof s!="string"&&(u=s,s="*");var l,d=0,p=s.toLowerCase().match($e)||[];if(J(u))for(;l=p[d++];)l[0]==="+"?(l=l.slice(1)||"*",(t[l]=t[l]||[]).unshift(u)):(t[l]=t[l]||[]).push(u)}}function Rr(t,s,u,l){var d={},p=t===Wt;function g(E){var _;return d[E]=!0,a.each(t[E]||[],function(A,M){var U=M(s,u,l);if(typeof U=="string"&&!p&&!d[U])return s.dataTypes.unshift(U),g(U),!1;if(p)return!(_=U)}),_}return g(s.dataTypes[0])||!d["*"]&&g("*")}function Wi(t,s){var u,l,d=a.ajaxSettings.flatOptions||{};for(u in s)s[u]!==void 0&&((d[u]?t:l||(l={}))[u]=s[u]);return l&&a.extend(!0,t,l),t}function Dr(t,s,u){for(var l,d,p,g,E=t.contents,_=t.dataTypes;_[0]==="*";)_.shift(),l===void 0&&(l=t.mimeType||s.getResponseHeader("Content-Type"));if(l){for(d in E)if(E[d]&&E[d].test(l)){_.unshift(d);break}}if(_[0]in u)p=_[0];else{for(d in u){if(!_[0]||t.converters[d+" "+_[0]]){p=d;break}g||(g=d)}p=p||g}if(p)return p!==_[0]&&_.unshift(p),u[p]}function Nr(t,s,u,l){var d,p,g,E,_,A={},M=t.dataTypes.slice();if(M[1])for(g in t.converters)A[g.toLowerCase()]=t.converters[g];for(p=M.shift();p;)if(t.responseFields[p]&&(u[t.responseFields[p]]=s),!_&&l&&t.dataFilter&&(s=t.dataFilter(s,t.dataType)),_=p,p=M.shift(),p){if(p==="*")p=_;else if(_!=="*"&&_!==p){if(g=A[_+" "+p]||A["* "+p],!g){for(d in A)if(E=d.split(" "),E[1]===p&&(g=A[_+" "+E[0]]||A["* "+E[0]],g)){g===!0?g=A[d]:A[d]!==!0&&(p=E[0],M.unshift(E[1]));break}}if(g!==!0)if(g&&t.throws)s=g(s);else try{s=g(s)}catch(U){return{state:"parsererror",error:g?U:"No conversion from "+_+" to "+p}}}}return{state:"success",data:s}}a.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nn.href,type:"GET",isLocal:di.test(Nn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":qi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":a.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,s){return s?Wi(Wi(t,a.ajaxSettings),s):Wi(a.ajaxSettings,t)},ajaxPrefilter:Ae(on),ajaxTransport:Ae(Wt),ajax:function(t,s){typeof t=="object"&&(s=t,t=void 0),s=s||{};var u,l,d,p,g,E,_,A,M,U,N=a.ajaxSetup({},s),H=N.context||N,te=N.context&&(H.nodeType||H.jquery)?a(H):a.event,le=a.Deferred(),ie=a.Callbacks("once memory"),xe=N.statusCode||{},Ce={},Qe={},Ze="canceled",ne={readyState:0,getResponseHeader:function(de){var Te;if(_){if(!p)for(p={};Te=Is.exec(d);)p[Te[1].toLowerCase()+" "]=(p[Te[1].toLowerCase()+" "]||[]).concat(Te[2]);Te=p[de.toLowerCase()+" "]}return Te==null?null:Te.join(", ")},getAllResponseHeaders:function(){return _?d:null},setRequestHeader:function(de,Te){return _==null&&(de=Qe[de.toLowerCase()]=Qe[de.toLowerCase()]||de,Ce[de]=Te),this},overrideMimeType:function(de){return _==null&&(N.mimeType=de),this},statusCode:function(de){var Te;if(de)if(_)ne.always(de[ne.status]);else for(Te in de)xe[Te]=[xe[Te],de[Te]];return this},abort:function(de){var Te=de||Ze;return u&&u.abort(Te),At(0,Te),this}};if(le.promise(ne),N.url=((t||N.url||Nn.href)+"").replace(xr,Nn.protocol+"//"),N.type=s.method||s.type||N.method||N.type,N.dataTypes=(N.dataType||"*").toLowerCase().match($e)||[""],N.crossDomain==null){E=Q.createElement("a");try{E.href=N.url,E.href=E.href,N.crossDomain=On.protocol+"//"+On.host!=E.protocol+"//"+E.host}catch{N.crossDomain=!0}}if(N.data&&N.processData&&typeof N.data!="string"&&(N.data=a.param(N.data,N.traditional)),Rr(on,N,s,ne),_)return ne;A=a.event&&N.global,A&&a.active++===0&&a.event.trigger("ajaxStart"),N.type=N.type.toUpperCase(),N.hasContent=!pi.test(N.type),l=N.url.replace(It,""),N.hasContent?N.data&&N.processData&&(N.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(N.data=N.data.replace(bs,"+")):(U=N.url.slice(l.length),N.data&&(N.processData||typeof N.data=="string")&&(l+=(qt.test(l)?"&":"?")+N.data,delete N.data),N.cache===!1&&(l=l.replace(Es,"$1"),U=(qt.test(l)?"&":"?")+"_="+kr.guid+++U),N.url=l+U),N.ifModified&&(a.lastModified[l]&&ne.setRequestHeader("If-Modified-Since",a.lastModified[l]),a.etag[l]&&ne.setRequestHeader("If-None-Match",a.etag[l])),(N.data&&N.hasContent&&N.contentType!==!1||s.contentType)&&ne.setRequestHeader("Content-Type",N.contentType),ne.setRequestHeader("Accept",N.dataTypes[0]&&N.accepts[N.dataTypes[0]]?N.accepts[N.dataTypes[0]]+(N.dataTypes[0]!=="*"?", "+qi+"; q=0.01":""):N.accepts["*"]);for(M in N.headers)ne.setRequestHeader(M,N.headers[M]);if(N.beforeSend&&(N.beforeSend.call(H,ne,N)===!1||_))return ne.abort();if(Ze="abort",ie.add(N.complete),ne.done(N.success),ne.fail(N.error),u=Rr(Wt,N,s,ne),!u)At(-1,"No Transport");else{if(ne.readyState=1,A&&te.trigger("ajaxSend",[ne,N]),_)return ne;N.async&&N.timeout>0&&(g=e.setTimeout(function(){ne.abort("timeout")},N.timeout));try{_=!1,u.send(Ce,At)}catch(de){if(_)throw de;At(-1,de)}}function At(de,Te,n,c){var f,y,P,O,B,ce=Te;_||(_=!0,g&&e.clearTimeout(g),u=void 0,d=c||"",ne.readyState=de>0?4:0,f=de>=200&&de<300||de===304,n&&(O=Dr(N,ne,n)),!f&&a.inArray("script",N.dataTypes)>-1&&a.inArray("json",N.dataTypes)<0&&(N.converters["text script"]=function(){}),O=Nr(N,O,ne,f),f?(N.ifModified&&(B=ne.getResponseHeader("Last-Modified"),B&&(a.lastModified[l]=B),B=ne.getResponseHeader("etag"),B&&(a.etag[l]=B)),de===204||N.type==="HEAD"?ce="nocontent":de===304?ce="notmodified":(ce=O.state,y=O.data,P=O.error,f=!P)):(P=ce,(de||!ce)&&(ce="error",de<0&&(de=0))),ne.status=de,ne.statusText=(Te||ce)+"",f?le.resolveWith(H,[y,ce,ne]):le.rejectWith(H,[ne,ce,P]),ne.statusCode(xe),xe=void 0,A&&te.trigger(f?"ajaxSuccess":"ajaxError",[ne,N,f?y:P]),ie.fireWith(H,[ne,ce]),A&&(te.trigger("ajaxComplete",[ne,N]),--a.active||a.event.trigger("ajaxStop")))}return ne},getJSON:function(t,s,u){return a.get(t,s,u,"json")},getScript:function(t,s){return a.get(t,void 0,s,"script")}}),a.each(["get","post"],function(t,s){a[s]=function(u,l,d,p){return J(l)&&(p=p||d,d=l,l=void 0),a.ajax(a.extend({url:u,type:s,dataType:p,data:l,success:d},a.isPlainObject(u)&&u))}}),a.ajaxPrefilter(function(t){var s;for(s in t.headers)s.toLowerCase()==="content-type"&&(t.contentType=t.headers[s]||"")}),a._evalUrl=function(t,s,u){return a.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(l){a.globalEval(l,s,u)}})},a.fn.extend({wrapAll:function(t){var s;return this[0]&&(J(t)&&(t=t.call(this[0])),s=a(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&s.insertBefore(this[0]),s.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(t){return J(t)?this.each(function(s){a(this).wrapInner(t.call(this,s))}):this.each(function(){var s=a(this),u=s.contents();u.length?u.wrapAll(t):s.append(t)})},wrap:function(t){var s=J(t);return this.each(function(u){a(this).wrapAll(s?t.call(this,u):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){a(this).replaceWith(this.childNodes)}),this}}),a.expr.pseudos.hidden=function(t){return!a.expr.pseudos.visible(t)},a.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},a.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Or={0:200,1223:204},St=a.ajaxSettings.xhr();q.cors=!!St&&"withCredentials"in St,q.ajax=St=!!St,a.ajaxTransport(function(t){var s,u;if(q.cors||St&&!t.crossDomain)return{send:function(l,d){var p,g=t.xhr();if(g.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(p in t.xhrFields)g[p]=t.xhrFields[p];t.mimeType&&g.overrideMimeType&&g.overrideMimeType(t.mimeType),!t.crossDomain&&!l["X-Requested-With"]&&(l["X-Requested-With"]="XMLHttpRequest");for(p in l)g.setRequestHeader(p,l[p]);s=function(E){return function(){s&&(s=u=g.onload=g.onerror=g.onabort=g.ontimeout=g.onreadystatechange=null,E==="abort"?g.abort():E==="error"?typeof g.status!="number"?d(0,"error"):d(g.status,g.statusText):d(Or[g.status]||g.status,g.statusText,(g.responseType||"text")!=="text"||typeof g.responseText!="string"?{binary:g.response}:{text:g.responseText},g.getAllResponseHeaders()))}},g.onload=s(),u=g.onerror=g.ontimeout=s("error"),g.onabort!==void 0?g.onabort=u:g.onreadystatechange=function(){g.readyState===4&&e.setTimeout(function(){s&&u()})},s=s("abort");try{g.send(t.hasContent&&t.data||null)}catch(E){if(s)throw E}},abort:function(){s&&s()}}}),a.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),a.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return a.globalEval(t),t}}}),a.ajaxPrefilter("script",function(t){t.cache===void 0&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),a.ajaxTransport("script",function(t){if(t.crossDomain||t.scriptAttrs){var s,u;return{send:function(l,d){s=a("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",u=function(p){s.remove(),u=null,p&&d(p.type==="error"?404:200,p.type)}),Q.head.appendChild(s[0])},abort:function(){u&&u()}}}});var zi=[],Ye=/(=)\?(?=&|$)|\?\?/;a.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=zi.pop()||a.expando+"_"+kr.guid++;return this[t]=!0,t}}),a.ajaxPrefilter("json jsonp",function(t,s,u){var l,d,p,g=t.jsonp!==!1&&(Ye.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ye.test(t.data)&&"data");if(g||t.dataTypes[0]==="jsonp")return l=t.jsonpCallback=J(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,g?t[g]=t[g].replace(Ye,"$1"+l):t.jsonp!==!1&&(t.url+=(qt.test(t.url)?"&":"?")+t.jsonp+"="+l),t.converters["script json"]=function(){return p||a.error(l+" was not called"),p[0]},t.dataTypes[0]="json",d=e[l],e[l]=function(){p=arguments},u.always(function(){d===void 0?a(e).removeProp(l):e[l]=d,t[l]&&(t.jsonpCallback=s.jsonpCallback,zi.push(l)),p&&J(d)&&d(p[0]),p=d=void 0}),"script"}),q.createHTMLDocument=(function(){var t=Q.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",t.childNodes.length===2})(),a.parseHTML=function(t,s,u){if(typeof t!="string")return[];typeof s=="boolean"&&(u=s,s=!1);var l,d,p;return s||(q.createHTMLDocument?(s=Q.implementation.createHTMLDocument(""),l=s.createElement("base"),l.href=Q.location.href,s.head.appendChild(l)):s=Q),d=lt.exec(t),p=!u&&[],d?[s.createElement(d[1])]:(d=Ni([t],s,p),p&&p.length&&a(p).remove(),a.merge([],d.childNodes))},a.fn.load=function(t,s,u){var l,d,p,g=this,E=t.indexOf(" ");return E>-1&&(l=$t(t.slice(E)),t=t.slice(0,E)),J(s)?(u=s,s=void 0):s&&typeof s=="object"&&(d="POST"),g.length>0&&a.ajax({url:t,type:d||"GET",dataType:"html",data:s}).done(function(_){p=arguments,g.html(l?a("<div>").append(a.parseHTML(_)).find(l):_)}).always(u&&function(_,A){g.each(function(){u.apply(this,p||[_.responseText,A,_])})}),this},a.expr.pseudos.animated=function(t){return a.grep(a.timers,function(s){return t===s.elem}).length},a.offset={setOffset:function(t,s,u){var l,d,p,g,E,_,A,M=a.css(t,"position"),U=a(t),N={};M==="static"&&(t.style.position="relative"),E=U.offset(),p=a.css(t,"top"),_=a.css(t,"left"),A=(M==="absolute"||M==="fixed")&&(p+_).indexOf("auto")>-1,A?(l=U.position(),g=l.top,d=l.left):(g=parseFloat(p)||0,d=parseFloat(_)||0),J(s)&&(s=s.call(t,u,a.extend({},E))),s.top!=null&&(N.top=s.top-E.top+g),s.left!=null&&(N.left=s.left-E.left+d),"using"in s?s.using.call(t,N):U.css(N)}},a.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(d){a.offset.setOffset(this,t,d)});var s,u,l=this[0];if(l)return l.getClientRects().length?(s=l.getBoundingClientRect(),u=l.ownerDocument.defaultView,{top:s.top+u.pageYOffset,left:s.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,s,u,l=this[0],d={top:0,left:0};if(a.css(l,"position")==="fixed")s=l.getBoundingClientRect();else{for(s=this.offset(),u=l.ownerDocument,t=l.offsetParent||u.documentElement;t&&(t===u.body||t===u.documentElement)&&a.css(t,"position")==="static";)t=t.parentNode;t&&t!==l&&t.nodeType===1&&(d=a(t).offset(),d.top+=a.css(t,"borderTopWidth",!0),d.left+=a.css(t,"borderLeftWidth",!0))}return{top:s.top-d.top-a.css(l,"marginTop",!0),left:s.left-d.left-a.css(l,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&a.css(t,"position")==="static";)t=t.offsetParent;return t||wt})}}),a.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,s){var u=s==="pageYOffset";a.fn[t]=function(l){return ht(this,function(d,p,g){var E;if(ve(d)?E=d:d.nodeType===9&&(E=d.defaultView),g===void 0)return E?E[s]:d[p];E?E.scrollTo(u?E.pageXOffset:g,u?g:E.pageYOffset):d[p]=g},t,l,arguments.length)}}),a.each(["top","left"],function(t,s){a.cssHooks[s]=kn(q.pixelPosition,function(u,l){if(l)return l=Cn(u,s),oi.test(l)?a(u).position()[s]+"px":l})}),a.each({Height:"height",Width:"width"},function(t,s){a.each({padding:"inner"+t,content:s,"":"outer"+t},function(u,l){a.fn[l]=function(d,p){var g=arguments.length&&(u||typeof d!="boolean"),E=u||(d===!0||p===!0?"margin":"border");return ht(this,function(_,A,M){var U;return ve(_)?l.indexOf("outer")===0?_["inner"+t]:_.document.documentElement["client"+t]:_.nodeType===9?(U=_.documentElement,Math.max(_.body["scroll"+t],U["scroll"+t],_.body["offset"+t],U["offset"+t],U["client"+t])):M===void 0?a.css(_,A,E):a.style(_,A,M,E)},s,g?d:void 0,g)}})}),a.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,s){a.fn[s]=function(u){return this.on(s,u)}}),a.fn.extend({bind:function(t,s,u){return this.on(t,null,s,u)},unbind:function(t,s){return this.off(t,null,s)},delegate:function(t,s,u,l){return this.on(s,t,u,l)},undelegate:function(t,s,u){return arguments.length===1?this.off(t,"**"):this.off(s,t||"**",u)},hover:function(t,s){return this.on("mouseenter",t).on("mouseleave",s||t)}}),a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,s){a.fn[s]=function(u,l){return arguments.length>0?this.on(s,null,u,l):this.trigger(s)}});var Lr=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;a.proxy=function(t,s){var u,l,d;if(typeof s=="string"&&(u=t[s],s=t,t=u),!!J(t))return l=m.call(arguments,2),d=function(){return t.apply(s||this,l.concat(m.call(arguments)))},d.guid=t.guid=t.guid||a.guid++,d},a.holdReady=function(t){t?a.readyWait++:a.ready(!0)},a.isArray=Array.isArray,a.parseJSON=JSON.parse,a.nodeName=b,a.isFunction=J,a.isWindow=ve,a.camelCase=it,a.type=je,a.now=Date.now,a.isNumeric=function(t){var s=a.type(t);return(s==="number"||s==="string")&&!isNaN(t-parseFloat(t))},a.trim=function(t){return t==null?"":(t+"").replace(Lr,"$1")};var Ss=e.jQuery,Ln=e.$;return a.noConflict=function(t){return e.$===a&&(e.$=Ln),t&&e.jQuery===a&&(e.jQuery=Ss),a},typeof i>"u"&&(e.jQuery=e.$=a),a})})(Br)),Br.exports}var Nu=Du();const K=xu(Nu),Ou=()=>{};var bo={};/**
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
 */const da=function(r){const e=[];let i=0;for(let o=0;o<r.length;o++){let h=r.charCodeAt(o);h<128?e[i++]=h:h<2048?(e[i++]=h>>6|192,e[i++]=h&63|128):(h&64512)===55296&&o+1<r.length&&(r.charCodeAt(o+1)&64512)===56320?(h=65536+((h&1023)<<10)+(r.charCodeAt(++o)&1023),e[i++]=h>>18|240,e[i++]=h>>12&63|128,e[i++]=h>>6&63|128,e[i++]=h&63|128):(e[i++]=h>>12|224,e[i++]=h>>6&63|128,e[i++]=h&63|128)}return e},Lu=function(r){const e=[];let i=0,o=0;for(;i<r.length;){const h=r[i++];if(h<128)e[o++]=String.fromCharCode(h);else if(h>191&&h<224){const m=r[i++];e[o++]=String.fromCharCode((h&31)<<6|m&63)}else if(h>239&&h<365){const m=r[i++],w=r[i++],x=r[i++],j=((h&7)<<18|(m&63)<<12|(w&63)<<6|x&63)-65536;e[o++]=String.fromCharCode(55296+(j>>10)),e[o++]=String.fromCharCode(56320+(j&1023))}else{const m=r[i++],w=r[i++];e[o++]=String.fromCharCode((h&15)<<12|(m&63)<<6|w&63)}}return e.join("")},pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let h=0;h<r.length;h+=3){const m=r[h],w=h+1<r.length,x=w?r[h+1]:0,j=h+2<r.length,V=j?r[h+2]:0,ee=m>>2,ae=(m&3)<<4|x>>4;let W=(x&15)<<2|V>>6,Ee=V&63;j||(Ee=64,w||(W=64)),o.push(i[ee],i[ae],i[W],i[Ee])}return o.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(da(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Lu(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let h=0;h<r.length;){const m=i[r.charAt(h++)],x=h<r.length?i[r.charAt(h)]:0;++h;const V=h<r.length?i[r.charAt(h)]:64;++h;const ae=h<r.length?i[r.charAt(h)]:64;if(++h,m==null||x==null||V==null||ae==null)throw new Mu;const W=m<<2|x>>4;if(o.push(W),V!==64){const Ee=x<<4&240|V>>2;if(o.push(Ee),ae!==64){const q=V<<6&192|ae;o.push(q)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Mu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ju=function(r){const e=da(r);return pa.encodeByteArray(e,!0)},Kr=function(r){return ju(r).replace(/\./g,"")},ga=function(r){try{return pa.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fu=()=>Uu().__FIREBASE_DEFAULTS__,Hu=()=>{if(typeof process>"u"||typeof bo>"u")return;const r=bo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Vu=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ga(r[1]);return e&&JSON.parse(e)},Xs=()=>{try{return Ou()||Fu()||Hu()||Vu()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ma=r=>Xs()?.emulatorHosts?.[r],Bu=r=>{const e=ma(r);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),o]:[e.substring(0,i),o]},ya=()=>Xs()?.config,va=r=>Xs()?.[`_${r}`];/**
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
 */class $u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,o))}}}/**
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
 */function rr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _a(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function qu(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},o=e||"demo-project",h=r.iat||0,m=r.sub||r.user_id;if(!m)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const w={iss:`https://securetoken.google.com/${o}`,aud:o,iat:h,exp:h+3600,auth_time:h,sub:m,user_id:m,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Kr(JSON.stringify(i)),Kr(JSON.stringify(w)),""].join(".")}const Ki={};function Wu(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ki))Ki[e]?r.emulator.push(e):r.prod.push(e);return r}function zu(r){let e=document.getElementById(r),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),i=!0),{created:i,element:e}}let Eo=!1;function wa(r,e){if(typeof window>"u"||typeof document>"u"||!rr(window.location.host)||Ki[r]===e||Ki[r]||Eo)return;Ki[r]=e;function i(W){return`__firebase__banner__${W}`}const o="__firebase__banner",m=Wu().prod.length>0;function w(){const W=document.getElementById(o);W&&W.remove()}function x(W){W.style.display="flex",W.style.background="#7faaf0",W.style.position="fixed",W.style.bottom="5px",W.style.left="5px",W.style.padding=".5em",W.style.borderRadius="5px",W.style.alignItems="center"}function j(W,Ee){W.setAttribute("width","24"),W.setAttribute("id",Ee),W.setAttribute("height","24"),W.setAttribute("viewBox","0 0 24 24"),W.setAttribute("fill","none"),W.style.marginLeft="-6px"}function V(){const W=document.createElement("span");return W.style.cursor="pointer",W.style.marginLeft="16px",W.style.fontSize="24px",W.innerHTML=" &times;",W.onclick=()=>{Eo=!0,w()},W}function ee(W,Ee){W.setAttribute("id",Ee),W.innerText="Learn more",W.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",W.setAttribute("target","__blank"),W.style.paddingLeft="5px",W.style.textDecoration="underline"}function ae(){const W=zu(o),Ee=i("text"),q=document.getElementById(Ee)||document.createElement("span"),J=i("learnmore"),ve=document.getElementById(J)||document.createElement("a"),Q=i("preprendIcon"),De=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(W.created){const Ne=W.element;x(Ne),ee(ve,J);const je=V();j(De,Q),Ne.append(De,q,ve,je),document.body.appendChild(Ne)}m?(q.innerText="Preview backend disconnected.",De.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(De.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",Ee)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",ae):ae()}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Ku(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ju(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Xu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yu(){const r=Ke();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Qu(){try{return typeof indexedDB=="object"}catch{return!1}}function Zu(){return new Promise((r,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(o);h.onsuccess=()=>{h.result.close(),i||self.indexedDB.deleteDatabase(o),r(!0)},h.onupgradeneeded=()=>{i=!1},h.onerror=()=>{e(h.error?.message||"")}}catch(i){e(i)}})}/**
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
 */const ec="FirebaseError";class Qt extends Error{constructor(e,i,o){super(i),this.code=e,this.customData=o,this.name=ec,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(e,i,o){this.service=e,this.serviceName=i,this.errors=o}create(e,...i){const o=i[0]||{},h=`${this.service}/${e}`,m=this.errors[e],w=m?tc(m,o):"Error",x=`${this.serviceName}: ${w} (${h}).`;return new Qt(h,x,o)}}function tc(r,e){return r.replace(nc,(i,o)=>{const h=e[o];return h!=null?String(h):`<${o}?>`})}const nc=/\{\$([^}]+)}/g;function ic(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $n(r,e){if(r===e)return!0;const i=Object.keys(r),o=Object.keys(e);for(const h of i){if(!o.includes(h))return!1;const m=r[h],w=e[h];if(Io(m)&&Io(w)){if(!$n(m,w))return!1}else if(m!==w)return!1}for(const h of o)if(!i.includes(h))return!1;return!0}function Io(r){return r!==null&&typeof r=="object"}/**
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
 */function or(r){const e=[];for(const[i,o]of Object.entries(r))Array.isArray(o)?o.forEach(h=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(h))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function rc(r,e){const i=new sc(r,e);return i.subscribe.bind(i)}class sc{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,o){let h;if(e===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");oc(e,["next","error","complete"])?h=e:h={next:e,error:i,complete:o},h.next===void 0&&(h.next=Rs),h.error===void 0&&(h.error=Rs),h.complete===void 0&&(h.complete=Rs);const m=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?h.error(this.finalError):h.complete()}catch{}}),this.observers.push(h),m}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oc(r,e){if(typeof r!="object"||r===null)return!1;for(const i of e)if(i in r&&typeof r[i]=="function")return!0;return!1}function Rs(){}/**
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
 */function Si(r){return r&&r._delegate?r._delegate:r}class qn{constructor(e,i,o){this.name=e,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jn="[DEFAULT]";/**
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
 */class ac{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const o=new $u;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:i});h&&o.resolve(h)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),o=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(h){if(o)return null;throw h}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cc(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(i);try{const m=this.getOrInitializeService({instanceIdentifier:h});o.resolve(m)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[m,w]of this.instancesDeferred.entries()){const x=this.normalizeInstanceIdentifier(m);o===x&&w.resolve(h)}return h}onInit(e,i){const o=this.normalizeInstanceIdentifier(i),h=this.onInitCallbacks.get(o)??new Set;h.add(e),this.onInitCallbacks.set(o,h);const m=this.instances.get(o);return m&&e(m,o),()=>{h.delete(e)}}invokeOnInitCallbacks(e,i){const o=this.onInitCallbacks.get(i);if(o)for(const h of o)try{h(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:uc(e),options:i}),this.instances.set(e,o),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uc(r){return r===jn?void 0:r}function cc(r){return r.instantiationMode==="EAGER"}/**
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
 */class lc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new ac(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(we||(we={}));const hc={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},fc=we.INFO,dc={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},pc=(r,e,...i)=>{if(e<r.logLevel)return;const o=new Date().toISOString(),h=dc[e];if(h)console[h](`[${o}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ys{constructor(e){this.name=e,this._logLevel=fc,this._logHandler=pc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const gc=(r,e)=>e.some(i=>r instanceof i);let So,Ao;function mc(){return So||(So=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yc(){return Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ta=new WeakMap,Hs=new WeakMap,ba=new WeakMap,Ds=new WeakMap,Qs=new WeakMap;function vc(r){const e=new Promise((i,o)=>{const h=()=>{r.removeEventListener("success",m),r.removeEventListener("error",w)},m=()=>{i(yn(r.result)),h()},w=()=>{o(r.error),h()};r.addEventListener("success",m),r.addEventListener("error",w)});return e.then(i=>{i instanceof IDBCursor&&Ta.set(i,r)}).catch(()=>{}),Qs.set(e,r),e}function _c(r){if(Hs.has(r))return;const e=new Promise((i,o)=>{const h=()=>{r.removeEventListener("complete",m),r.removeEventListener("error",w),r.removeEventListener("abort",w)},m=()=>{i(),h()},w=()=>{o(r.error||new DOMException("AbortError","AbortError")),h()};r.addEventListener("complete",m),r.addEventListener("error",w),r.addEventListener("abort",w)});Hs.set(r,e)}let Vs={get(r,e,i){if(r instanceof IDBTransaction){if(e==="done")return Hs.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ba.get(r);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return yn(r[e])},set(r,e,i){return r[e]=i,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function wc(r){Vs=r(Vs)}function Tc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const o=r.call(Ns(this),e,...i);return ba.set(o,e.sort?e.sort():[e]),yn(o)}:yc().includes(r)?function(...e){return r.apply(Ns(this),e),yn(Ta.get(this))}:function(...e){return yn(r.apply(Ns(this),e))}}function bc(r){return typeof r=="function"?Tc(r):(r instanceof IDBTransaction&&_c(r),gc(r,mc())?new Proxy(r,Vs):r)}function yn(r){if(r instanceof IDBRequest)return vc(r);if(Ds.has(r))return Ds.get(r);const e=bc(r);return e!==r&&(Ds.set(r,e),Qs.set(e,r)),e}const Ns=r=>Qs.get(r);function Ec(r,e,{blocked:i,upgrade:o,blocking:h,terminated:m}={}){const w=indexedDB.open(r,e),x=yn(w);return o&&w.addEventListener("upgradeneeded",j=>{o(yn(w.result),j.oldVersion,j.newVersion,yn(w.transaction),j)}),i&&w.addEventListener("blocked",j=>i(j.oldVersion,j.newVersion,j)),x.then(j=>{m&&j.addEventListener("close",()=>m()),h&&j.addEventListener("versionchange",V=>h(V.oldVersion,V.newVersion,V))}).catch(()=>{}),x}const Ic=["get","getKey","getAll","getAllKeys","count"],Sc=["put","add","delete","clear"],Os=new Map;function Co(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Os.get(e))return Os.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,h=Sc.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(h||Ic.includes(i)))return;const m=async function(w,...x){const j=this.transaction(w,h?"readwrite":"readonly");let V=j.store;return o&&(V=V.index(x.shift())),(await Promise.all([V[i](...x),h&&j.done]))[0]};return Os.set(e,m),m}wc(r=>({...r,get:(e,i,o)=>Co(e,i)||r.get(e,i,o),has:(e,i)=>!!Co(e,i)||r.has(e,i)}));/**
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
 */class Ac{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Cc(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function Cc(r){return r.getComponent()?.type==="VERSION"}const Bs="@firebase/app",ko="0.14.1";/**
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
 */const Jt=new Ys("@firebase/app"),kc="@firebase/app-compat",Pc="@firebase/analytics-compat",xc="@firebase/analytics",Rc="@firebase/app-check-compat",Dc="@firebase/app-check",Nc="@firebase/auth",Oc="@firebase/auth-compat",Lc="@firebase/database",Mc="@firebase/data-connect",jc="@firebase/database-compat",Uc="@firebase/functions",Fc="@firebase/functions-compat",Hc="@firebase/installations",Vc="@firebase/installations-compat",Bc="@firebase/messaging",$c="@firebase/messaging-compat",qc="@firebase/performance",Wc="@firebase/performance-compat",zc="@firebase/remote-config",Gc="@firebase/remote-config-compat",Kc="@firebase/storage",Jc="@firebase/storage-compat",Xc="@firebase/firestore",Yc="@firebase/ai",Qc="@firebase/firestore-compat",Zc="firebase",el="12.1.0";/**
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
 */const $s="[DEFAULT]",tl={[Bs]:"fire-core",[kc]:"fire-core-compat",[xc]:"fire-analytics",[Pc]:"fire-analytics-compat",[Dc]:"fire-app-check",[Rc]:"fire-app-check-compat",[Nc]:"fire-auth",[Oc]:"fire-auth-compat",[Lc]:"fire-rtdb",[Mc]:"fire-data-connect",[jc]:"fire-rtdb-compat",[Uc]:"fire-fn",[Fc]:"fire-fn-compat",[Hc]:"fire-iid",[Vc]:"fire-iid-compat",[Bc]:"fire-fcm",[$c]:"fire-fcm-compat",[qc]:"fire-perf",[Wc]:"fire-perf-compat",[zc]:"fire-rc",[Gc]:"fire-rc-compat",[Kc]:"fire-gcs",[Jc]:"fire-gcs-compat",[Xc]:"fire-fst",[Qc]:"fire-fst-compat",[Yc]:"fire-vertex","fire-js":"fire-js",[Zc]:"fire-js-all"};/**
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
 */const Jr=new Map,nl=new Map,qs=new Map;function Po(r,e){try{r.container.addComponent(e)}catch(i){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,i)}}function bi(r){const e=r.name;if(qs.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;qs.set(e,r);for(const i of Jr.values())Po(i,r);for(const i of nl.values())Po(i,r);return!0}function Zs(r,e){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(e)}function xt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const il={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new sr("app","Firebase",il);/**
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
 */class rl{constructor(e,i,o){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ai=el;function Ea(r,e={}){let i=r;typeof e!="object"&&(e={name:e});const o={name:$s,automaticDataCollectionEnabled:!0,...e},h=o.name;if(typeof h!="string"||!h)throw vn.create("bad-app-name",{appName:String(h)});if(i||(i=ya()),!i)throw vn.create("no-options");const m=Jr.get(h);if(m){if($n(i,m.options)&&$n(o,m.config))return m;throw vn.create("duplicate-app",{appName:h})}const w=new lc(h);for(const j of qs.values())w.addComponent(j);const x=new rl(i,o,w);return Jr.set(h,x),x}function Ia(r=$s){const e=Jr.get(r);if(!e&&r===$s&&ya())return Ea();if(!e)throw vn.create("no-app",{appName:r});return e}function _n(r,e,i){let o=tl[r]??r;i&&(o+=`-${i}`);const h=o.match(/\s|\//),m=e.match(/\s|\//);if(h||m){const w=[`Unable to register library "${o}" with version "${e}":`];h&&w.push(`library name "${o}" contains illegal characters (whitespace or "/")`),h&&m&&w.push("and"),m&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(w.join(" "));return}bi(new qn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const sl="firebase-heartbeat-database",ol=1,Zi="firebase-heartbeat-store";let Ls=null;function Sa(){return Ls||(Ls=Ec(sl,ol,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Zi)}catch(i){console.warn(i)}}}}).catch(r=>{throw vn.create("idb-open",{originalErrorMessage:r.message})})),Ls}async function al(r){try{const i=(await Sa()).transaction(Zi),o=await i.objectStore(Zi).get(Aa(r));return await i.done,o}catch(e){if(e instanceof Qt)Jt.warn(e.message);else{const i=vn.create("idb-get",{originalErrorMessage:e?.message});Jt.warn(i.message)}}}async function xo(r,e){try{const o=(await Sa()).transaction(Zi,"readwrite");await o.objectStore(Zi).put(e,Aa(r)),await o.done}catch(i){if(i instanceof Qt)Jt.warn(i.message);else{const o=vn.create("idb-set",{originalErrorMessage:i?.message});Jt.warn(o.message)}}}function Aa(r){return`${r.name}!${r.options.appId}`}/**
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
 */const ul=1024,cl=30;class ll{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new fl(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ro();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(h=>h.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>cl){const h=dl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Jt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ro(),{heartbeatsToSend:i,unsentEntries:o}=hl(this._heartbeatsCache.heartbeats),h=Kr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(e){return Jt.warn(e),""}}}function Ro(){return new Date().toISOString().substring(0,10)}function hl(r,e=ul){const i=[];let o=r.slice();for(const h of r){const m=i.find(w=>w.agent===h.agent);if(m){if(m.dates.push(h.date),Do(i)>e){m.dates.pop();break}}else if(i.push({agent:h.agent,dates:[h.date]}),Do(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class fl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qu()?Zu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await al(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const o=await this.read();return xo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const o=await this.read();return xo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Do(r){return Kr(JSON.stringify({version:2,heartbeats:r})).length}function dl(r){if(r.length===0)return-1;let e=0,i=r[0].date;for(let o=1;o<r.length;o++)r[o].date<i&&(i=r[o].date,e=o);return e}/**
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
 */function pl(r){bi(new qn("platform-logger",e=>new Ac(e),"PRIVATE")),bi(new qn("heartbeat",e=>new ll(e),"PRIVATE")),_n(Bs,ko,r),_n(Bs,ko,"esm2020"),_n("fire-js","")}pl("");var gl="firebase",ml="12.1.0";/**
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
 */_n(gl,ml,"app");function Ca(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yl=Ca,ka=new sr("auth","Firebase",Ca());/**
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
 */const Xr=new Ys("@firebase/auth");function vl(r,...e){Xr.logLevel<=we.WARN&&Xr.warn(`Auth (${Ai}): ${r}`,...e)}function $r(r,...e){Xr.logLevel<=we.ERROR&&Xr.error(`Auth (${Ai}): ${r}`,...e)}/**
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
 */function Xt(r,...e){throw eo(r,...e)}function Dt(r,...e){return eo(r,...e)}function Pa(r,e,i){const o={...yl(),[e]:i};return new sr("auth","Firebase",o).create(e,{appName:r.name})}function Hn(r){return Pa(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eo(r,...e){if(typeof r!="string"){const i=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=r.name),r._errorFactory.create(i,...o)}return ka.create(r,...e)}function se(r,e,...i){if(!r)throw eo(e,...i)}function Gt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw $r(e),new Error(e)}function Yt(r,e){r||Gt(e)}/**
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
 */function Ws(){return typeof self<"u"&&self.location?.href||""}function _l(){return No()==="http:"||No()==="https:"}function No(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function wl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_l()||Ju()||"connection"in navigator)?navigator.onLine:!0}function Tl(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ar{constructor(e,i){this.shortDelay=e,this.longDelay=i,Yt(i>e,"Short delay should be less than long delay!"),this.isMobile=Gu()||Xu()}get(){return wl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function to(r,e){Yt(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class xa{static initialize(e,i,o){this.fetchImpl=e,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const El=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Il=new ar(3e4,6e4);function no(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ci(r,e,i,o,h={}){return Ra(r,h,async()=>{let m={},w={};o&&(e==="GET"?w=o:m={body:JSON.stringify(o)});const x=or({key:r.config.apiKey,...w}).slice(1),j=await r._getAdditionalHeaders();j["Content-Type"]="application/json",r.languageCode&&(j["X-Firebase-Locale"]=r.languageCode);const V={method:e,headers:j,...m};return Ku()||(V.referrerPolicy="no-referrer"),r.emulatorConfig&&rr(r.emulatorConfig.host)&&(V.credentials="include"),xa.fetch()(await Da(r,r.config.apiHost,i,x),V)})}async function Ra(r,e,i){r._canInitEmulator=!1;const o={...bl,...e};try{const h=new Al(r),m=await Promise.race([i(),h.promise]);h.clearNetworkTimeout();const w=await m.json();if("needConfirmation"in w)throw Fr(r,"account-exists-with-different-credential",w);if(m.ok&&!("errorMessage"in w))return w;{const x=m.ok?w.errorMessage:w.error.message,[j,V]=x.split(" : ");if(j==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(r,"credential-already-in-use",w);if(j==="EMAIL_EXISTS")throw Fr(r,"email-already-in-use",w);if(j==="USER_DISABLED")throw Fr(r,"user-disabled",w);const ee=o[j]||j.toLowerCase().replace(/[_\s]+/g,"-");if(V)throw Pa(r,ee,V);Xt(r,ee)}}catch(h){if(h instanceof Qt)throw h;Xt(r,"network-request-failed",{message:String(h)})}}async function Sl(r,e,i,o,h={}){const m=await Ci(r,e,i,o,h);return"mfaPendingCredential"in m&&Xt(r,"multi-factor-auth-required",{_serverResponse:m}),m}async function Da(r,e,i,o){const h=`${e}${i}?${o}`,m=r,w=m.config.emulator?to(r.config,h):`${r.config.apiScheme}://${h}`;return El.includes(i)&&(await m._persistenceManagerAvailable,m._getPersistenceType()==="COOKIE")?m._getPersistence()._getFinalTarget(w).toString():w}class Al{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Dt(this.auth,"network-request-failed")),Il.get())})}}function Fr(r,e,i){const o={appName:r.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const h=Dt(r,e,o);return h.customData._tokenResponse=i,h}/**
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
 */async function Cl(r,e){return Ci(r,"POST","/v1/accounts:delete",e)}async function Yr(r,e){return Ci(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ji(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kl(r,e=!1){const i=Si(r),o=await i.getIdToken(e),h=io(o);se(h&&h.exp&&h.auth_time&&h.iat,i.auth,"internal-error");const m=typeof h.firebase=="object"?h.firebase:void 0,w=m?.sign_in_provider;return{claims:h,token:o,authTime:Ji(Ms(h.auth_time)),issuedAtTime:Ji(Ms(h.iat)),expirationTime:Ji(Ms(h.exp)),signInProvider:w||null,signInSecondFactor:m?.sign_in_second_factor||null}}function Ms(r){return Number(r)*1e3}function io(r){const[e,i,o]=r.split(".");if(e===void 0||i===void 0||o===void 0)return $r("JWT malformed, contained fewer than 3 sections"),null;try{const h=ga(i);return h?JSON.parse(h):($r("Failed to decode base64 JWT payload"),null)}catch(h){return $r("Caught error parsing JWT payload as JSON",h?.toString()),null}}function Oo(r){const e=io(r);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function er(r,e,i=!1){if(i)return e;try{return await e}catch(o){throw o instanceof Qt&&Pl(o)&&r.auth.currentUser===r&&await r.auth.signOut(),o}}function Pl({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class xl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zs{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qr(r){const e=r.auth,i=await r.getIdToken(),o=await er(r,Yr(e,{idToken:i}));se(o?.users.length,e,"internal-error");const h=o.users[0];r._notifyReloadListener(h);const m=h.providerUserInfo?.length?Na(h.providerUserInfo):[],w=Dl(r.providerData,m),x=r.isAnonymous,j=!(r.email&&h.passwordHash)&&!w?.length,V=x?j:!1,ee={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:w,metadata:new zs(h.createdAt,h.lastLoginAt),isAnonymous:V};Object.assign(r,ee)}async function Rl(r){const e=Si(r);await Qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dl(r,e){return[...r.filter(o=>!e.some(h=>h.providerId===o.providerId)),...e]}function Na(r){return r.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Nl(r,e){const i=await Ra(r,{},async()=>{const o=or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:h,apiKey:m}=r.config,w=await Da(r,h,"/v1/token",`key=${m}`),x=await r._getAdditionalHeaders();x["Content-Type"]="application/x-www-form-urlencoded";const j={method:"POST",headers:x,body:o};return r.emulatorConfig&&rr(r.emulatorConfig.host)&&(j.credentials="include"),xa.fetch()(w,j)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Ol(r,e){return Ci(r,"POST","/v2/accounts:revokeToken",no(r,e))}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){se(e.length!==0,"internal-error");const i=Oo(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:o,refreshToken:h,expiresIn:m}=await Nl(e,i);this.updateTokensAndExpiration(o,h,Number(m))}updateTokensAndExpiration(e,i,o){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,i){const{refreshToken:o,accessToken:h,expirationTime:m}=i,w=new vi;return o&&(se(typeof o=="string","internal-error",{appName:e}),w.refreshToken=o),h&&(se(typeof h=="string","internal-error",{appName:e}),w.accessToken=h),m&&(se(typeof m=="number","internal-error",{appName:e}),w.expirationTime=m),w}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function ln(r,e){se(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:i,stsTokenManager:o,...h}){this.providerId="firebase",this.proactiveRefresh=new xl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new zs(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const i=await er(this,this.stsTokenManager.getToken(this.auth,e));return se(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return kl(this,e)}reload(){return Rl(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),i&&await Qr(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await er(this,Cl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const o=i.displayName??void 0,h=i.email??void 0,m=i.phoneNumber??void 0,w=i.photoURL??void 0,x=i.tenantId??void 0,j=i._redirectEventId??void 0,V=i.createdAt??void 0,ee=i.lastLoginAt??void 0,{uid:ae,emailVerified:W,isAnonymous:Ee,providerData:q,stsTokenManager:J}=i;se(ae&&J,e,"internal-error");const ve=vi.fromJSON(this.name,J);se(typeof ae=="string",e,"internal-error"),ln(o,e.name),ln(h,e.name),se(typeof W=="boolean",e,"internal-error"),se(typeof Ee=="boolean",e,"internal-error"),ln(m,e.name),ln(w,e.name),ln(x,e.name),ln(j,e.name),ln(V,e.name),ln(ee,e.name);const Q=new mt({uid:ae,auth:e,email:h,emailVerified:W,displayName:o,isAnonymous:Ee,photoURL:w,phoneNumber:m,tenantId:x,stsTokenManager:ve,createdAt:V,lastLoginAt:ee});return q&&Array.isArray(q)&&(Q.providerData=q.map(De=>({...De}))),j&&(Q._redirectEventId=j),Q}static async _fromIdTokenResponse(e,i,o=!1){const h=new vi;h.updateFromServerResponse(i);const m=new mt({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:o});return await Qr(m),m}static async _fromGetAccountInfoResponse(e,i,o){const h=i.users[0];se(h.localId!==void 0,"internal-error");const m=h.providerUserInfo!==void 0?Na(h.providerUserInfo):[],w=!(h.email&&h.passwordHash)&&!m?.length,x=new vi;x.updateFromIdToken(o);const j=new mt({uid:h.localId,auth:e,stsTokenManager:x,isAnonymous:w}),V={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:m,metadata:new zs(h.createdAt,h.lastLoginAt),isAnonymous:!(h.email&&h.passwordHash)&&!m?.length};return Object.assign(j,V),j}}/**
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
 */const Lo=new Map;function Kt(r){Yt(r instanceof Function,"Expected a class definition");let e=Lo.get(r);return e?(Yt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Lo.set(r,e),e)}/**
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
 */class Oa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Oa.type="NONE";const Mo=Oa;/**
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
 */function qr(r,e,i){return`firebase:${r}:${e}:${i}`}class _i{constructor(e,i,o){this.persistence=e,this.auth=i,this.userKey=o;const{config:h,name:m}=this.auth;this.fullUserKey=qr(this.userKey,h.apiKey,m),this.fullPersistenceKey=qr("persistence",h.apiKey,m),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Yr(this.auth,{idToken:e}).catch(()=>{});return i?mt._fromGetAccountInfoResponse(this.auth,i,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,o="authUser"){if(!i.length)return new _i(Kt(Mo),e,o);const h=(await Promise.all(i.map(async V=>{if(await V._isAvailable())return V}))).filter(V=>V);let m=h[0]||Kt(Mo);const w=qr(o,e.config.apiKey,e.name);let x=null;for(const V of i)try{const ee=await V._get(w);if(ee){let ae;if(typeof ee=="string"){const W=await Yr(e,{idToken:ee}).catch(()=>{});if(!W)break;ae=await mt._fromGetAccountInfoResponse(e,W,ee)}else ae=mt._fromJSON(e,ee);V!==m&&(x=ae),m=V;break}}catch{}const j=h.filter(V=>V._shouldAllowMigration);return!m._shouldAllowMigration||!j.length?new _i(m,e,o):(m=j[0],x&&await m._set(w,x.toJSON()),await Promise.all(i.map(async V=>{if(V!==m)try{await V._remove(w)}catch{}})),new _i(m,e,o))}}/**
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
 */function jo(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ua(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(La(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ha(e))return"Blackberry";if(Va(e))return"Webos";if(Ma(e))return"Safari";if((e.includes("chrome/")||ja(e))&&!e.includes("edge/"))return"Chrome";if(Fa(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=r.match(i);if(o?.length===2)return o[1]}return"Other"}function La(r=Ke()){return/firefox\//i.test(r)}function Ma(r=Ke()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ja(r=Ke()){return/crios\//i.test(r)}function Ua(r=Ke()){return/iemobile/i.test(r)}function Fa(r=Ke()){return/android/i.test(r)}function Ha(r=Ke()){return/blackberry/i.test(r)}function Va(r=Ke()){return/webos/i.test(r)}function ro(r=Ke()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Ll(r=Ke()){return ro(r)&&!!window.navigator?.standalone}function Ml(){return Yu()&&document.documentMode===10}function Ba(r=Ke()){return ro(r)||Fa(r)||Va(r)||Ha(r)||/windows phone/i.test(r)||Ua(r)}/**
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
 */function $a(r,e=[]){let i;switch(r){case"Browser":i=jo(Ke());break;case"Worker":i=`${jo(Ke())}-${r}`;break;default:i=r}const o=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ai}/${o}`}/**
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
 */class jl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const o=m=>new Promise((w,x)=>{try{const j=e(m);w(j)}catch(j){x(j)}});o.onAbort=i,this.queue.push(o);const h=this.queue.length-1;return()=>{this.queue[h]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const o of this.queue)await o(e),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const h of i)try{h()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
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
 */async function Ul(r,e={}){return Ci(r,"GET","/v2/passwordPolicy",no(r,e))}/**
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
 */const Fl=6;class Hl{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??Fl,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const o=this.customStrengthOptions.minPasswordLength,h=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=e.length>=o),h&&(i.meetsMaxPasswordLength=e.length<=h)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let h=0;h<e.length;h++)o=e.charAt(h),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,i,o,h,m){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=h)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=m))}}/**
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
 */class Vl{constructor(e,i,o,h){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=h,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uo(this),this.idTokenSubscription=new Uo(this),this.beforeStateQueue=new jl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ka,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=h.sdkClientVersion,this._persistenceManagerAvailable=new Promise(m=>this._resolvePersistenceManagerAvailable=m)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Kt(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Yr(this,{idToken:e}),o=await mt._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xt(this.app)){const m=this.app.settings.authIdToken;return m?new Promise(w=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(m).then(w,w))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const m=this.redirectUser?._redirectEventId,w=o?._redirectEventId,x=await this.tryRedirectSignIn(e);(!m||m===w)&&x?.user&&(o=x.user,h=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(o)}catch(m){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(m))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Qr(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Hn(this));const i=e?Si(e):null;return i&&se(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ul(this),i=new Hl(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sr("auth","Firebase",e())}onAuthStateChanged(e,i,o){return this.registerStateListener(this.authStateSubscription,e,i,o)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,o){return this.registerStateListener(this.idTokenSubscription,e,i,o)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await Ol(this,o)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const o=await this.getOrInitRedirectPersistenceManager(i);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Kt(e)||this._popupRedirectResolver;se(i,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[Kt(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,o,h){if(this._deleted)return()=>{};const m=typeof i=="function"?i:i.next.bind(i);let w=!1;const x=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(x,this,"internal-error"),x.then(()=>{w||m(this.currentUser)}),typeof i=="function"){const j=e.addObserver(i,o,h);return()=>{w=!0,j()}}else{const j=e.addObserver(i);return()=>{w=!0,j()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$a(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(e["X-Firebase-AppCheck"]=o),e}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&vl(`Error while retrieving App Check token: ${e.error}`),e?.token}}function so(r){return Si(r)}class Uo{constructor(e){this.auth=e,this.observer=null,this.addObserver=rc(i=>this.observer=i)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bl(r){oo=r}function $l(r){return oo.loadJS(r)}function ql(){return oo.gapiScript}function Wl(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function zl(r,e){const i=Zs(r,"auth");if(i.isInitialized()){const h=i.getImmediate(),m=i.getOptions();if($n(m,e??{}))return h;Xt(h,"already-initialized")}return i.initialize({options:e})}function Gl(r,e){const i=e?.persistence||[],o=(Array.isArray(i)?i:[i]).map(Kt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(o,e?.popupRedirectResolver)}function Kl(r,e,i){const o=so(r);se(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const h=!1,m=qa(e),{host:w,port:x}=Jl(e),j=x===null?"":`:${x}`,V={url:`${m}//${w}${j}/`},ee=Object.freeze({host:w,port:x,protocol:m.replace(":",""),options:Object.freeze({disableWarnings:h})});if(!o._canInitEmulator){se(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),se($n(V,o.config.emulator)&&$n(ee,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=V,o.emulatorConfig=ee,o.settings.appVerificationDisabledForTesting=!0,rr(w)?(_a(`${m}//${w}${j}`),wa("Auth",!0)):Xl()}function qa(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Jl(r){const e=qa(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",h=/^(\[[^\]]+\])(:|$)/.exec(o);if(h){const m=h[1];return{host:m,port:Fo(o.substr(m.length+1))}}else{const[m,w]=o.split(":");return{host:m,port:Fo(w)}}}function Fo(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Xl(){function r(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Wa{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,i){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
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
 */async function wi(r,e){return Sl(r,"POST","/v1/accounts:signInWithIdp",no(r,e))}/**
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
 */const Yl="http://localhost";class Wn extends Wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Xt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:h,...m}=i;if(!o||!h)return null;const w=new Wn(o,h);return w.idToken=m.idToken||void 0,w.accessToken=m.accessToken||void 0,w.secret=m.secret,w.nonce=m.nonce,w.pendingToken=m.pendingToken||null,w}_getIdTokenResponse(e){const i=this.buildRequest();return wi(e,i)}_linkToIdToken(e,i){const o=this.buildRequest();return o.idToken=i,wi(e,o)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,wi(e,i)}buildRequest(){const e={requestUri:Yl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=or(i)}return e}}/**
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
 */class za{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ur extends za{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends ur{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Wn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:o}=e;if(!i&&!o)return null;try{return pn.credential(i,o)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class gn extends ur{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class mn extends ur{constructor(){super("twitter.com")}static credential(e,i){return Wn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:o}=e;if(!i||!o)return null;try{return mn.credential(i,o)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,o,h=!1){const m=await mt._fromIdTokenResponse(e,o,h),w=Ho(o);return new Ei({user:m,providerId:w,_tokenResponse:o,operationType:i})}static async _forOperation(e,i,o){await e._updateTokensIfNecessary(o,!0);const h=Ho(o);return new Ei({user:e,providerId:h,_tokenResponse:o,operationType:i})}}function Ho(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Zr extends Qt{constructor(e,i,o,h){super(i.code,i.message),this.operationType=o,this.user=h,Object.setPrototypeOf(this,Zr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,i,o,h){return new Zr(e,i,o,h)}}function Ga(r,e,i,o){return(e==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(m=>{throw m.code==="auth/multi-factor-auth-required"?Zr._fromErrorAndOperation(r,m,e,o):m})}async function Ql(r,e,i=!1){const o=await er(r,e._linkToIdToken(r.auth,await r.getIdToken()),i);return Ei._forOperation(r,"link",o)}/**
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
 */async function Zl(r,e,i=!1){const{auth:o}=r;if(xt(o.app))return Promise.reject(Hn(o));const h="reauthenticate";try{const m=await er(r,Ga(o,h,e,r),i);se(m.idToken,o,"internal-error");const w=io(m.idToken);se(w,o,"internal-error");const{sub:x}=w;return se(r.uid===x,o,"user-mismatch"),Ei._forOperation(r,h,m)}catch(m){throw m?.code==="auth/user-not-found"&&Xt(o,"user-mismatch"),m}}/**
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
 */async function eh(r,e,i=!1){if(xt(r.app))return Promise.reject(Hn(r));const o="signIn",h=await Ga(r,o,e),m=await Ei._fromIdTokenResponse(r,o,h);return i||await r._updateCurrentUser(m.user),m}function th(r,e,i,o){return Si(r).onIdTokenChanged(e,i,o)}function nh(r,e,i){return Si(r).beforeAuthStateChanged(e,i)}const es="__sak";/**
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
 */class Ka{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ih=1e3,rh=10;class Ja extends Ka{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ba(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),h=this.localCache[i];o!==h&&e(i,h,o)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((w,x,j)=>{this.notifyListeners(w,j)});return}const o=e.key;i?this.detachListener():this.stopPolling();const h=()=>{const w=this.storage.getItem(o);!i&&this.localCache[o]===w||this.notifyListeners(o,w)},m=this.storage.getItem(o);Ml()&&m!==e.newValue&&e.newValue!==e.oldValue?setTimeout(h,rh):h()}notifyListeners(e,i){this.localCache[e]=i;const o=this.listeners[e];if(o)for(const h of Array.from(o))h(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:o}),!0)})},ih)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ja.type="LOCAL";const sh=Ja;/**
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
 */class Xa extends Ka{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Xa.type="SESSION";const Ya=Xa;/**
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
 */function oh(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(h=>h.isListeningto(e));if(i)return i;const o=new rs(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:o,eventType:h,data:m}=i.data,w=this.handlersMap[h];if(!w?.size)return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:h});const x=Array.from(w).map(async V=>V(i.origin,m)),j=await oh(x);i.ports[0].postMessage({status:"done",eventId:o,eventType:h,response:j})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rs.receivers=[];/**
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
 */function ao(r="",e=10){let i="";for(let o=0;o<e;o++)i+=Math.floor(Math.random()*10);return r+i}/**
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
 */class ah{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,o=50){const h=typeof MessageChannel<"u"?new MessageChannel:null;if(!h)throw new Error("connection_unavailable");let m,w;return new Promise((x,j)=>{const V=ao("",20);h.port1.start();const ee=setTimeout(()=>{j(new Error("unsupported_event"))},o);w={messageChannel:h,onMessage(ae){const W=ae;if(W.data.eventId===V)switch(W.data.status){case"ack":clearTimeout(ee),m=setTimeout(()=>{j(new Error("timeout"))},3e3);break;case"done":clearTimeout(m),x(W.data.response);break;default:clearTimeout(ee),clearTimeout(m),j(new Error("invalid_response"));break}}},this.handlers.add(w),h.port1.addEventListener("message",w.onMessage),this.target.postMessage({eventType:e,eventId:V,data:i},[h.port2])}).finally(()=>{w&&this.removeMessageHandler(w)})}}/**
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
 */function Nt(){return window}function uh(r){Nt().location.href=r}/**
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
 */function Qa(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function ch(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lh(){return navigator?.serviceWorker?.controller||null}function hh(){return Qa()?self:null}/**
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
 */const Za="firebaseLocalStorageDb",fh=1,ts="firebaseLocalStorage",eu="fbase_key";class cr{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function ss(r,e){return r.transaction([ts],e?"readwrite":"readonly").objectStore(ts)}function dh(){const r=indexedDB.deleteDatabase(Za);return new cr(r).toPromise()}function Gs(){const r=indexedDB.open(Za,fh);return new Promise((e,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const o=r.result;try{o.createObjectStore(ts,{keyPath:eu})}catch(h){i(h)}}),r.addEventListener("success",async()=>{const o=r.result;o.objectStoreNames.contains(ts)?e(o):(o.close(),await dh(),e(await Gs()))})})}async function Vo(r,e,i){const o=ss(r,!0).put({[eu]:e,value:i});return new cr(o).toPromise()}async function ph(r,e){const i=ss(r,!1).get(e),o=await new cr(i).toPromise();return o===void 0?null:o.value}function Bo(r,e){const i=ss(r,!0).delete(e);return new cr(i).toPromise()}const gh=800,mh=3;class tu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gs(),this.db)}async _withRetries(e){let i=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(i++>mh)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rs._getInstance(hh()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ch(),!this.activeServiceWorker)return;this.sender=new ah(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gs();return await Vo(e,es,"1"),await Bo(e,es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>Vo(o,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(o=>ph(o,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Bo(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(h=>{const m=ss(h,!1).getAll();return new cr(m).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(e.length!==0)for(const{fbase_key:h,value:m}of e)o.add(h),JSON.stringify(this.localCache[h])!==JSON.stringify(m)&&(this.notifyListeners(h,m),i.push(h));for(const h of Object.keys(this.localCache))this.localCache[h]&&!o.has(h)&&(this.notifyListeners(h,null),i.push(h));return i}notifyListeners(e,i){this.localCache[e]=i;const o=this.listeners[e];if(o)for(const h of Array.from(o))h(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tu.type="LOCAL";const yh=tu;new ar(3e4,6e4);/**
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
 */function vh(r,e){return e?Kt(e):(se(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class uo extends Wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,i){return wi(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function _h(r){return eh(r.auth,new uo(r),r.bypassAuthState)}function wh(r){const{auth:e,user:i}=r;return se(i,e,"internal-error"),Zl(i,new uo(r),r.bypassAuthState)}async function Th(r){const{auth:e,user:i}=r;return se(i,e,"internal-error"),Ql(i,new uo(r),r.bypassAuthState)}/**
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
 */class nu{constructor(e,i,o,h,m=!1){this.auth=e,this.resolver=o,this.user=h,this.bypassAuthState=m,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:o,postBody:h,tenantId:m,error:w,type:x}=e;if(w){this.reject(w);return}const j={auth:this.auth,requestUri:i,sessionId:o,tenantId:m||void 0,postBody:h||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(x)(j))}catch(V){this.reject(V)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _h;case"linkViaPopup":case"linkViaRedirect":return Th;case"reauthViaPopup":case"reauthViaRedirect":return wh;default:Xt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bh=new ar(2e3,1e4);class yi extends nu{constructor(e,i,o,h,m){super(e,i,h,m),this.provider=o,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bh.get())};e()}}yi.currentPopupAction=null;/**
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
 */const Eh="pendingRedirect",Wr=new Map;class Ih extends nu{constructor(e,i,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const o=await Sh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(i){e=()=>Promise.reject(i)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sh(r,e){const i=kh(e),o=Ch(r);if(!await o._isAvailable())return!1;const h=await o._get(i)==="true";return await o._remove(i),h}function Ah(r,e){Wr.set(r._key(),e)}function Ch(r){return Kt(r._redirectPersistence)}function kh(r){return qr(Eh,r.config.apiKey,r.name)}async function Ph(r,e,i=!1){if(xt(r.app))return Promise.reject(Hn(r));const o=so(r),h=vh(o,e),w=await new Ih(o,h,i).execute();return w&&!i&&(delete w.user._redirectEventId,await o._persistUserIfCurrent(w.user),await o._setRedirectUser(null,e)),w}/**
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
 */const xh=600*1e3;class Rh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(i=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dh(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!iu(e)){const o=e.error.code?.split("auth/")[1]||"internal-error";i.onError(Dt(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const o=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xh&&this.cachedEventUids.clear(),this.cachedEventUids.has($o(e))}saveEventToCache(e){this.cachedEventUids.add($o(e)),this.lastProcessedEventTime=Date.now()}}function $o(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function iu({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Dh(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iu(r);default:return!1}}/**
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
 */async function Nh(r,e={}){return Ci(r,"GET","/v1/projects",e)}/**
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
 */const Oh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lh=/^https?/;async function Mh(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Nh(r);for(const i of e)try{if(jh(i))return}catch{}Xt(r,"unauthorized-domain")}function jh(r){const e=Ws(),{protocol:i,hostname:o}=new URL(e);if(r.startsWith("chrome-extension://")){const w=new URL(r);return w.hostname===""&&o===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&w.hostname===o}if(!Lh.test(i))return!1;if(Oh.test(r))return o===r;const h=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+h+"|"+h+")$","i").test(o)}/**
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
 */const Uh=new ar(3e4,6e4);function qo(){const r=Nt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function Fh(r){return new Promise((e,i)=>{function o(){qo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qo(),i(Dt(r,"network-request-failed"))},timeout:Uh.get()})}if(Nt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Nt().gapi?.load)o();else{const h=Wl("iframefcb");return Nt()[h]=()=>{gapi.load?o():i(Dt(r,"network-request-failed"))},$l(`${ql()}?onload=${h}`).catch(m=>i(m))}}).catch(e=>{throw zr=null,e})}let zr=null;function Hh(r){return zr=zr||Fh(r),zr}/**
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
 */const Vh=new ar(5e3,15e3),Bh="__/auth/iframe",$h="emulator/auth/iframe",qh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zh(r){const e=r.config;se(e.authDomain,r,"auth-domain-config-required");const i=e.emulator?to(e,$h):`https://${r.config.authDomain}/${Bh}`,o={apiKey:e.apiKey,appName:r.name,v:Ai},h=Wh.get(r.config.apiHost);h&&(o.eid=h);const m=r._getFrameworks();return m.length&&(o.fw=m.join(",")),`${i}?${or(o).slice(1)}`}async function Gh(r){const e=await Hh(r),i=Nt().gapi;return se(i,r,"internal-error"),e.open({where:document.body,url:zh(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qh,dontclear:!0},o=>new Promise(async(h,m)=>{await o.restyle({setHideOnLeave:!1});const w=Dt(r,"network-request-failed"),x=Nt().setTimeout(()=>{m(w)},Vh.get());function j(){Nt().clearTimeout(x),h(o)}o.ping(j).then(j,()=>{m(w)})}))}/**
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
 */const Kh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jh=500,Xh=600,Yh="_blank",Qh="http://localhost";class Wo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zh(r,e,i,o=Jh,h=Xh){const m=Math.max((window.screen.availHeight-h)/2,0).toString(),w=Math.max((window.screen.availWidth-o)/2,0).toString();let x="";const j={...Kh,width:o.toString(),height:h.toString(),top:m,left:w},V=Ke().toLowerCase();i&&(x=ja(V)?Yh:i),La(V)&&(e=e||Qh,j.scrollbars="yes");const ee=Object.entries(j).reduce((W,[Ee,q])=>`${W}${Ee}=${q},`,"");if(Ll(V)&&x!=="_self")return ef(e||"",x),new Wo(null);const ae=window.open(e||"",x,ee);se(ae,r,"popup-blocked");try{ae.focus()}catch{}return new Wo(ae)}function ef(r,e){const i=document.createElement("a");i.href=r,i.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
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
 */const tf="__/auth/handler",nf="emulator/auth/handler",rf=encodeURIComponent("fac");async function zo(r,e,i,o,h,m){se(r.config.authDomain,r,"auth-domain-config-required"),se(r.config.apiKey,r,"invalid-api-key");const w={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:o,v:Ai,eventId:h};if(e instanceof za){e.setDefaultLanguage(r.languageCode),w.providerId=e.providerId||"",ic(e.getCustomParameters())||(w.customParameters=JSON.stringify(e.getCustomParameters()));for(const[ee,ae]of Object.entries({}))w[ee]=ae}if(e instanceof ur){const ee=e.getScopes().filter(ae=>ae!=="");ee.length>0&&(w.scopes=ee.join(","))}r.tenantId&&(w.tid=r.tenantId);const x=w;for(const ee of Object.keys(x))x[ee]===void 0&&delete x[ee];const j=await r._getAppCheckToken(),V=j?`#${rf}=${encodeURIComponent(j)}`:"";return`${sf(r)}?${or(x).slice(1)}${V}`}function sf({config:r}){return r.emulator?to(r,nf):`https://${r.authDomain}/${tf}`}/**
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
 */const js="webStorageSupport";class of{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ya,this._completeRedirectFn=Ph,this._overrideRedirectResult=Ah}async _openPopup(e,i,o,h){Yt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const m=await zo(e,i,o,Ws(),h);return Zh(e,m,ao())}async _openRedirect(e,i,o,h){await this._originValidation(e);const m=await zo(e,i,o,Ws(),h);return uh(m),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:h,promise:m}=this.eventManagers[i];return h?Promise.resolve(h):(Yt(m,"If manager is not set, promise should be"),m)}const o=this.initAndGetManager(e);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(e){const i=await Gh(e),o=new Rh(e);return i.register("authEvent",h=>(se(h?.authEvent,e,"invalid-auth-event"),{status:o.onEvent(h.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=i,o}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(js,{type:js},h=>{const m=h?.[0]?.[js];m!==void 0&&i(!!m),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Mh(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Ba()||Ma()||ro()}}const af=of;var Go="@firebase/auth",Ko="1.11.0";/**
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
 */class uf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(o=>{e(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cf(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lf(r){bi(new qn("auth",(e,{options:i})=>{const o=e.getProvider("app").getImmediate(),h=e.getProvider("heartbeat"),m=e.getProvider("app-check-internal"),{apiKey:w,authDomain:x}=o.options;se(w&&!w.includes(":"),"invalid-api-key",{appName:o.name});const j={apiKey:w,authDomain:x,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$a(r)},V=new Vl(o,h,m,j);return Gl(V,i),V},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,o)=>{e.getProvider("auth-internal").initialize()})),bi(new qn("auth-internal",e=>{const i=so(e.getProvider("auth").getImmediate());return(o=>new uf(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Go,Ko,cf(r)),_n(Go,Ko,"esm2020")}/**
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
 */const hf=300,ff=va("authIdTokenMaxAge")||hf;let Jo=null;const df=r=>async e=>{const i=e&&await e.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>ff)return;const h=i?.token;Jo!==h&&(Jo=h,await fetch(r,{method:h?"POST":"DELETE",headers:h?{Authorization:`Bearer ${h}`}:{}}))};function pf(r=Ia()){const e=Zs(r,"auth");if(e.isInitialized())return e.getImmediate();const i=zl(r,{popupRedirectResolver:af,persistence:[yh,sh,Ya]}),o=va("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const m=new URL(o,location.origin);if(location.origin===m.origin){const w=df(m.toString());nh(i,w,()=>w(i.currentUser)),th(i,x=>w(x))}}const h=ma("auth");return h&&Kl(i,`http://${h}`),i}function gf(){return document.getElementsByTagName("head")?.[0]??document}Bl({loadJS(r){return new Promise((e,i)=>{const o=document.createElement("script");o.setAttribute("src",r),o.onload=e,o.onerror=h=>{const m=Dt("internal-error");m.customData=h,i(m)},o.type="text/javascript",o.charset="UTF-8",gf().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lf("Browser");var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var co;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(a,I){function b(){}b.prototype=I.prototype,a.D=I.prototype,a.prototype=new b,a.prototype.constructor=a,a.C=function(C,k,R){for(var T=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)T[Ve-2]=arguments[Ve];return I.prototype[k].apply(C,T)}}function i(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,i),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(a,I,b){b||(b=0);var C=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)C[k]=I.charCodeAt(b++)|I.charCodeAt(b++)<<8|I.charCodeAt(b++)<<16|I.charCodeAt(b++)<<24;else for(k=0;16>k;++k)C[k]=I[b++]|I[b++]<<8|I[b++]<<16|I[b++]<<24;I=a.g[0],b=a.g[1],k=a.g[2];var R=a.g[3],T=I+(R^b&(k^R))+C[0]+3614090360&4294967295;I=b+(T<<7&4294967295|T>>>25),T=R+(k^I&(b^k))+C[1]+3905402710&4294967295,R=I+(T<<12&4294967295|T>>>20),T=k+(b^R&(I^b))+C[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=b+(I^k&(R^I))+C[3]+3250441966&4294967295,b=k+(T<<22&4294967295|T>>>10),T=I+(R^b&(k^R))+C[4]+4118548399&4294967295,I=b+(T<<7&4294967295|T>>>25),T=R+(k^I&(b^k))+C[5]+1200080426&4294967295,R=I+(T<<12&4294967295|T>>>20),T=k+(b^R&(I^b))+C[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=b+(I^k&(R^I))+C[7]+4249261313&4294967295,b=k+(T<<22&4294967295|T>>>10),T=I+(R^b&(k^R))+C[8]+1770035416&4294967295,I=b+(T<<7&4294967295|T>>>25),T=R+(k^I&(b^k))+C[9]+2336552879&4294967295,R=I+(T<<12&4294967295|T>>>20),T=k+(b^R&(I^b))+C[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=b+(I^k&(R^I))+C[11]+2304563134&4294967295,b=k+(T<<22&4294967295|T>>>10),T=I+(R^b&(k^R))+C[12]+1804603682&4294967295,I=b+(T<<7&4294967295|T>>>25),T=R+(k^I&(b^k))+C[13]+4254626195&4294967295,R=I+(T<<12&4294967295|T>>>20),T=k+(b^R&(I^b))+C[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=b+(I^k&(R^I))+C[15]+1236535329&4294967295,b=k+(T<<22&4294967295|T>>>10),T=I+(k^R&(b^k))+C[1]+4129170786&4294967295,I=b+(T<<5&4294967295|T>>>27),T=R+(b^k&(I^b))+C[6]+3225465664&4294967295,R=I+(T<<9&4294967295|T>>>23),T=k+(I^b&(R^I))+C[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=b+(R^I&(k^R))+C[0]+3921069994&4294967295,b=k+(T<<20&4294967295|T>>>12),T=I+(k^R&(b^k))+C[5]+3593408605&4294967295,I=b+(T<<5&4294967295|T>>>27),T=R+(b^k&(I^b))+C[10]+38016083&4294967295,R=I+(T<<9&4294967295|T>>>23),T=k+(I^b&(R^I))+C[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=b+(R^I&(k^R))+C[4]+3889429448&4294967295,b=k+(T<<20&4294967295|T>>>12),T=I+(k^R&(b^k))+C[9]+568446438&4294967295,I=b+(T<<5&4294967295|T>>>27),T=R+(b^k&(I^b))+C[14]+3275163606&4294967295,R=I+(T<<9&4294967295|T>>>23),T=k+(I^b&(R^I))+C[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=b+(R^I&(k^R))+C[8]+1163531501&4294967295,b=k+(T<<20&4294967295|T>>>12),T=I+(k^R&(b^k))+C[13]+2850285829&4294967295,I=b+(T<<5&4294967295|T>>>27),T=R+(b^k&(I^b))+C[2]+4243563512&4294967295,R=I+(T<<9&4294967295|T>>>23),T=k+(I^b&(R^I))+C[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=b+(R^I&(k^R))+C[12]+2368359562&4294967295,b=k+(T<<20&4294967295|T>>>12),T=I+(b^k^R)+C[5]+4294588738&4294967295,I=b+(T<<4&4294967295|T>>>28),T=R+(I^b^k)+C[8]+2272392833&4294967295,R=I+(T<<11&4294967295|T>>>21),T=k+(R^I^b)+C[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=b+(k^R^I)+C[14]+4259657740&4294967295,b=k+(T<<23&4294967295|T>>>9),T=I+(b^k^R)+C[1]+2763975236&4294967295,I=b+(T<<4&4294967295|T>>>28),T=R+(I^b^k)+C[4]+1272893353&4294967295,R=I+(T<<11&4294967295|T>>>21),T=k+(R^I^b)+C[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=b+(k^R^I)+C[10]+3200236656&4294967295,b=k+(T<<23&4294967295|T>>>9),T=I+(b^k^R)+C[13]+681279174&4294967295,I=b+(T<<4&4294967295|T>>>28),T=R+(I^b^k)+C[0]+3936430074&4294967295,R=I+(T<<11&4294967295|T>>>21),T=k+(R^I^b)+C[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=b+(k^R^I)+C[6]+76029189&4294967295,b=k+(T<<23&4294967295|T>>>9),T=I+(b^k^R)+C[9]+3654602809&4294967295,I=b+(T<<4&4294967295|T>>>28),T=R+(I^b^k)+C[12]+3873151461&4294967295,R=I+(T<<11&4294967295|T>>>21),T=k+(R^I^b)+C[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=b+(k^R^I)+C[2]+3299628645&4294967295,b=k+(T<<23&4294967295|T>>>9),T=I+(k^(b|~R))+C[0]+4096336452&4294967295,I=b+(T<<6&4294967295|T>>>26),T=R+(b^(I|~k))+C[7]+1126891415&4294967295,R=I+(T<<10&4294967295|T>>>22),T=k+(I^(R|~b))+C[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=b+(R^(k|~I))+C[5]+4237533241&4294967295,b=k+(T<<21&4294967295|T>>>11),T=I+(k^(b|~R))+C[12]+1700485571&4294967295,I=b+(T<<6&4294967295|T>>>26),T=R+(b^(I|~k))+C[3]+2399980690&4294967295,R=I+(T<<10&4294967295|T>>>22),T=k+(I^(R|~b))+C[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=b+(R^(k|~I))+C[1]+2240044497&4294967295,b=k+(T<<21&4294967295|T>>>11),T=I+(k^(b|~R))+C[8]+1873313359&4294967295,I=b+(T<<6&4294967295|T>>>26),T=R+(b^(I|~k))+C[15]+4264355552&4294967295,R=I+(T<<10&4294967295|T>>>22),T=k+(I^(R|~b))+C[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=b+(R^(k|~I))+C[13]+1309151649&4294967295,b=k+(T<<21&4294967295|T>>>11),T=I+(k^(b|~R))+C[4]+4149444226&4294967295,I=b+(T<<6&4294967295|T>>>26),T=R+(b^(I|~k))+C[11]+3174756917&4294967295,R=I+(T<<10&4294967295|T>>>22),T=k+(I^(R|~b))+C[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=b+(R^(k|~I))+C[9]+3951481745&4294967295,a.g[0]=a.g[0]+I&4294967295,a.g[1]=a.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,a.g[2]=a.g[2]+k&4294967295,a.g[3]=a.g[3]+R&4294967295}o.prototype.u=function(a,I){I===void 0&&(I=a.length);for(var b=I-this.blockSize,C=this.B,k=this.h,R=0;R<I;){if(k==0)for(;R<=b;)h(this,a,R),R+=this.blockSize;if(typeof a=="string"){for(;R<I;)if(C[k++]=a.charCodeAt(R++),k==this.blockSize){h(this,C),k=0;break}}else for(;R<I;)if(C[k++]=a[R++],k==this.blockSize){h(this,C),k=0;break}}this.h=k,this.o+=I},o.prototype.v=function(){var a=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);a[0]=128;for(var I=1;I<a.length-8;++I)a[I]=0;var b=8*this.o;for(I=a.length-8;I<a.length;++I)a[I]=b&255,b/=256;for(this.u(a),a=Array(16),I=b=0;4>I;++I)for(var C=0;32>C;C+=8)a[b++]=this.g[I]>>>C&255;return a};function m(a,I){var b=x;return Object.prototype.hasOwnProperty.call(b,a)?b[a]:b[a]=I(a)}function w(a,I){this.h=I;for(var b=[],C=!0,k=a.length-1;0<=k;k--){var R=a[k]|0;C&&R==I||(b[k]=R,C=!1)}this.g=b}var x={};function j(a){return-128<=a&&128>a?m(a,function(I){return new w([I|0],0>I?-1:0)}):new w([a|0],0>a?-1:0)}function V(a){if(isNaN(a)||!isFinite(a))return ae;if(0>a)return ve(V(-a));for(var I=[],b=1,C=0;a>=b;C++)I[C]=a/b|0,b*=4294967296;return new w(I,0)}function ee(a,I){if(a.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(a.charAt(0)=="-")return ve(ee(a.substring(1),I));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=V(Math.pow(I,8)),C=ae,k=0;k<a.length;k+=8){var R=Math.min(8,a.length-k),T=parseInt(a.substring(k,k+R),I);8>R?(R=V(Math.pow(I,R)),C=C.j(R).add(V(T))):(C=C.j(b),C=C.add(V(T)))}return C}var ae=j(0),W=j(1),Ee=j(16777216);r=w.prototype,r.m=function(){if(J(this))return-ve(this).m();for(var a=0,I=1,b=0;b<this.g.length;b++){var C=this.i(b);a+=(0<=C?C:4294967296+C)*I,I*=4294967296}return a},r.toString=function(a){if(a=a||10,2>a||36<a)throw Error("radix out of range: "+a);if(q(this))return"0";if(J(this))return"-"+ve(this).toString(a);for(var I=V(Math.pow(a,6)),b=this,C="";;){var k=je(b,I).g;b=Q(b,k.j(I));var R=((0<b.g.length?b.g[0]:b.h)>>>0).toString(a);if(b=k,q(b))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},r.i=function(a){return 0>a?0:a<this.g.length?this.g[a]:this.h};function q(a){if(a.h!=0)return!1;for(var I=0;I<a.g.length;I++)if(a.g[I]!=0)return!1;return!0}function J(a){return a.h==-1}r.l=function(a){return a=Q(this,a),J(a)?-1:q(a)?0:1};function ve(a){for(var I=a.g.length,b=[],C=0;C<I;C++)b[C]=~a.g[C];return new w(b,~a.h).add(W)}r.abs=function(){return J(this)?ve(this):this},r.add=function(a){for(var I=Math.max(this.g.length,a.g.length),b=[],C=0,k=0;k<=I;k++){var R=C+(this.i(k)&65535)+(a.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(a.i(k)>>>16);C=T>>>16,R&=65535,T&=65535,b[k]=T<<16|R}return new w(b,b[b.length-1]&-2147483648?-1:0)};function Q(a,I){return a.add(ve(I))}r.j=function(a){if(q(this)||q(a))return ae;if(J(this))return J(a)?ve(this).j(ve(a)):ve(ve(this).j(a));if(J(a))return ve(this.j(ve(a)));if(0>this.l(Ee)&&0>a.l(Ee))return V(this.m()*a.m());for(var I=this.g.length+a.g.length,b=[],C=0;C<2*I;C++)b[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<a.g.length;k++){var R=this.i(C)>>>16,T=this.i(C)&65535,Ve=a.i(k)>>>16,En=a.i(k)&65535;b[2*C+2*k]+=T*En,De(b,2*C+2*k),b[2*C+2*k+1]+=R*En,De(b,2*C+2*k+1),b[2*C+2*k+1]+=T*Ve,De(b,2*C+2*k+1),b[2*C+2*k+2]+=R*Ve,De(b,2*C+2*k+2)}for(C=0;C<I;C++)b[C]=b[2*C+1]<<16|b[2*C];for(C=I;C<2*I;C++)b[C]=0;return new w(b,0)};function De(a,I){for(;(a[I]&65535)!=a[I];)a[I+1]+=a[I]>>>16,a[I]&=65535,I++}function Ne(a,I){this.g=a,this.h=I}function je(a,I){if(q(I))throw Error("division by zero");if(q(a))return new Ne(ae,ae);if(J(a))return I=je(ve(a),I),new Ne(ve(I.g),ve(I.h));if(J(I))return I=je(a,ve(I)),new Ne(ve(I.g),I.h);if(30<a.g.length){if(J(a)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var b=W,C=I;0>=C.l(a);)b=bn(b),C=bn(C);var k=nt(b,1),R=nt(C,1);for(C=nt(C,2),b=nt(b,2);!q(C);){var T=R.add(C);0>=T.l(a)&&(k=k.add(b),R=T),C=nt(C,1),b=nt(b,1)}return I=Q(a,k.j(I)),new Ne(k,I)}for(k=ae;0<=a.l(I);){for(b=Math.max(1,Math.floor(a.m()/I.m())),C=Math.ceil(Math.log(b)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=V(b),T=R.j(I);J(T)||0<T.l(a);)b-=C,R=V(b),T=R.j(I);q(R)&&(R=W),k=k.add(R),a=Q(a,T)}return new Ne(k,a)}r.A=function(a){return je(this,a).h},r.and=function(a){for(var I=Math.max(this.g.length,a.g.length),b=[],C=0;C<I;C++)b[C]=this.i(C)&a.i(C);return new w(b,this.h&a.h)},r.or=function(a){for(var I=Math.max(this.g.length,a.g.length),b=[],C=0;C<I;C++)b[C]=this.i(C)|a.i(C);return new w(b,this.h|a.h)},r.xor=function(a){for(var I=Math.max(this.g.length,a.g.length),b=[],C=0;C<I;C++)b[C]=this.i(C)^a.i(C);return new w(b,this.h^a.h)};function bn(a){for(var I=a.g.length+1,b=[],C=0;C<I;C++)b[C]=a.i(C)<<1|a.i(C-1)>>>31;return new w(b,a.h)}function nt(a,I){var b=I>>5;I%=32;for(var C=a.g.length-b,k=[],R=0;R<C;R++)k[R]=0<I?a.i(R+b)>>>I|a.i(R+b+1)<<32-I:a.i(R+b);return new w(k,a.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,w.prototype.add=w.prototype.add,w.prototype.multiply=w.prototype.j,w.prototype.modulo=w.prototype.A,w.prototype.compare=w.prototype.l,w.prototype.toNumber=w.prototype.m,w.prototype.toString=w.prototype.toString,w.prototype.getBits=w.prototype.i,w.fromNumber=V,w.fromString=ee,co=w}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,c,f){return n==Array.prototype||n==Object.prototype||(n[c]=f.value),n};function i(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hr=="object"&&Hr];for(var c=0;c<n.length;++c){var f=n[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var o=i(this);function h(n,c){if(c)e:{var f=o;n=n.split(".");for(var y=0;y<n.length-1;y++){var P=n[y];if(!(P in f))break e;f=f[P]}n=n[n.length-1],y=f[n],c=c(y),c!=y&&c!=null&&e(f,n,{configurable:!0,writable:!0,value:c})}}function m(n,c){n instanceof String&&(n+="");var f=0,y=!1,P={next:function(){if(!y&&f<n.length){var O=f++;return{value:c(O,n[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}h("Array.prototype.values",function(n){return n||function(){return m(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var w=w||{},x=this||self;function j(n){var c=typeof n;return c=c!="object"?c:n?Array.isArray(n)?"array":c:"null",c=="array"||c=="object"&&typeof n.length=="number"}function V(n){var c=typeof n;return c=="object"&&n!=null||c=="function"}function ee(n,c,f){return n.call.apply(n.bind,arguments)}function ae(n,c,f){if(!n)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),n.apply(c,P)}}return function(){return n.apply(c,arguments)}}function W(n,c,f){return W=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ee:ae,W.apply(null,arguments)}function Ee(n,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),n.apply(this,y)}}function q(n,c){function f(){}f.prototype=c.prototype,n.aa=c.prototype,n.prototype=new f,n.prototype.constructor=n,n.Qb=function(y,P,O){for(var B=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)B[ce-2]=arguments[ce];return c.prototype[P].apply(y,B)}}function J(n){const c=n.length;if(0<c){const f=Array(c);for(let y=0;y<c;y++)f[y]=n[y];return f}return[]}function ve(n,c){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(j(y)){const P=n.length||0,O=y.length||0;n.length=P+O;for(let B=0;B<O;B++)n[P+B]=y[B]}else n.push(y)}}class Q{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function De(n){return/^[\s\xa0]*$/.test(n)}function Ne(){var n=x.navigator;return n&&(n=n.userAgent)?n:""}function je(n){return je[" "](n),n}je[" "]=function(){};var bn=Ne().indexOf("Gecko")!=-1&&!(Ne().toLowerCase().indexOf("webkit")!=-1&&Ne().indexOf("Edge")==-1)&&!(Ne().indexOf("Trident")!=-1||Ne().indexOf("MSIE")!=-1)&&Ne().indexOf("Edge")==-1;function nt(n,c,f){for(const y in n)c.call(f,n[y],y,n)}function a(n,c){for(const f in n)c.call(void 0,n[f],f,n)}function I(n){const c={};for(const f in n)c[f]=n[f];return c}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(n,c){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)n[f]=y[f];for(let O=0;O<b.length;O++)f=b[O],Object.prototype.hasOwnProperty.call(y,f)&&(n[f]=y[f])}}function k(n){var c=1;n=n.split(":");const f=[];for(;0<c&&n.length;)f.push(n.shift()),c--;return n.length&&f.push(n.join(":")),f}function R(n){x.setTimeout(()=>{throw n},0)}function T(){var n=vt;let c=null;return n.g&&(c=n.g,n.g=n.g.next,n.g||(n.h=null),c.next=null),c}class Ve{constructor(){this.h=this.g=null}add(c,f){const y=En.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var En=new Q(()=>new ls,n=>n.reset());class ls{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,Ot=!1,vt=new Ve,ki=()=>{const n=x.Promise.resolve(void 0);Be=()=>{n.then(mr)}};var mr=()=>{for(var n;n=T();){try{n.h.call(n.g)}catch(f){R(f)}var c=En;c.j(n),100>c.h&&(c.h++,n.next=c.g,c.g=n)}Ot=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(n,c){this.type=n,this.g=this.target=c,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var yr=(function(){if(!x.addEventListener||!Object.defineProperty)return!1;var n=!1,c=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const f=()=>{};x.addEventListener("test",f,c),x.removeEventListener("test",f,c)}catch{}return n})();function In(n,c){if(Pe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var f=this.type=n.type,y=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=c,c=n.relatedTarget){if(bn){e:{try{je(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else f=="mouseover"?c=n.fromElement:f=="mouseout"&&(c=n.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:hs[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&In.aa.h.call(this)}}q(In,Pe);var hs={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Gn="closure_listenable_"+(1e6*Math.random()|0),fs=0;function vr(n,c,f,y,P){this.listener=n,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=P,this.key=++fs,this.da=this.fa=!1}function $e(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Kn(n){this.src=n,this.g={},this.h=0}Kn.prototype.add=function(n,c,f,y,P){var O=n.toString();n=this.g[O],n||(n=this.g[O]=[],this.h++);var B=en(n,c,y,P);return-1<B?(c=n[B],f||(c.fa=!1)):(c=new vr(c,this.src,O,!!y,P),c.fa=f,n.push(c)),c};function _t(n,c){var f=c.type;if(f in n.g){var y=n.g[f],P=Array.prototype.indexOf.call(y,c,void 0),O;(O=0<=P)&&Array.prototype.splice.call(y,P,1),O&&($e(c),n.g[f].length==0&&(delete n.g[f],n.h--))}}function en(n,c,f,y){for(var P=0;P<n.length;++P){var O=n[P];if(!O.da&&O.listener==c&&O.capture==!!f&&O.ha==y)return P}return-1}var Jn="closure_lm_"+(1e6*Math.random()|0),Pi={};function Xn(n,c,f,y,P){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Xn(n,c[O],f,y,P);return null}return f=X(f),n&&n[Gn]?n.K(c,f,V(y)?!!y.capture:!1,P):Yn(n,c,f,!1,y,P)}function Yn(n,c,f,y,P,O){if(!c)throw Error("Invalid event type");var B=V(P)?!!P.capture:!!P,ce=Lt(n);if(ce||(n[Jn]=ce=new Kn(n)),f=ce.add(c,f,y,B,O),f.proxy)return f;if(y=ht(),f.proxy=y,y.src=n,y.listener=f,n.addEventListener)yr||(P=B),P===void 0&&(P=!1),n.addEventListener(c.toString(),y,P);else if(n.attachEvent)n.attachEvent(wr(c.toString()),y);else if(n.addListener&&n.removeListener)n.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ht(){function n(f){return c.call(n.src,n.listener,f)}const c=it;return n}function _r(n,c,f,y,P){if(Array.isArray(c))for(var O=0;O<c.length;O++)_r(n,c[O],f,y,P);else y=V(y)?!!y.capture:!!y,f=X(f),n&&n[Gn]?(n=n.i,c=String(c).toString(),c in n.g&&(O=n.g[c],f=en(O,f,y,P),-1<f&&($e(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete n.g[c],n.h--)))):n&&(n=Lt(n))&&(c=n.g[c.toString()],n=-1,c&&(n=en(c,f,y,P)),(f=-1<n?c[n]:null)&&xi(f))}function xi(n){if(typeof n!="number"&&n&&!n.da){var c=n.src;if(c&&c[Gn])_t(c.i,n);else{var f=n.type,y=n.proxy;c.removeEventListener?c.removeEventListener(f,y,n.capture):c.detachEvent?c.detachEvent(wr(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=Lt(c))?(_t(f,n),f.h==0&&(f.src=null,c[Jn]=null)):$e(n)}}}function wr(n){return n in Pi?Pi[n]:Pi[n]="on"+n}function it(n,c){if(n.da)n=!0;else{c=new In(c,this);var f=n.listener,y=n.ha||n.src;n.fa&&xi(n),n=f.call(y,c)}return n}function Lt(n){return n=n[Jn],n instanceof Kn?n:null}var Mt="__closure_events_fn_"+(1e9*Math.random()>>>0);function X(n){return typeof n=="function"?n:(n[Mt]||(n[Mt]=function(c){return n.handleEvent(c)}),n[Mt])}function _e(){lt.call(this),this.i=new Kn(this),this.M=this,this.F=null}q(_e,lt),_e.prototype[Gn]=!0,_e.prototype.removeEventListener=function(n,c,f,y){_r(this,n,c,f,y)};function Ue(n,c){var f,y=n.F;if(y)for(f=[];y;y=y.F)f.push(y);if(n=n.M,y=c.type||c,typeof c=="string")c=new Pe(c,n);else if(c instanceof Pe)c.target=c.target||n;else{var P=c;c=new Pe(y,n),C(c,P)}if(P=!0,f)for(var O=f.length-1;0<=O;O--){var B=c.g=f[O];P=Qn(B,y,!0,c)&&P}if(B=c.g=n,P=Qn(B,y,!0,c)&&P,P=Qn(B,y,!1,c)&&P,f)for(O=0;O<f.length;O++)B=c.g=f[O],P=Qn(B,y,!1,c)&&P}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var n=this.i,c;for(c in n.g){for(var f=n.g[c],y=0;y<f.length;y++)$e(f[y]);delete n.g[c],n.h--}}this.F=null},_e.prototype.K=function(n,c,f,y){return this.i.add(String(n),c,!1,f,y)},_e.prototype.L=function(n,c,f,y){return this.i.add(String(n),c,!0,f,y)};function Qn(n,c,f,y){if(c=n.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==f){var ce=B.listener,ke=B.ha||B.src;B.fa&&_t(n.i,B),P=ce.call(ke,y)!==!1&&P}}return P&&!y.defaultPrevented}function Tr(n,c,f){if(typeof n=="function")f&&(n=W(n,f));else if(n&&typeof n.handleEvent=="function")n=W(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:x.setTimeout(n,c||0)}function Ri(n){n.g=Tr(()=>{n.g=null,n.i&&(n.i=!1,Ri(n))},n.l);const c=n.h;n.h=null,n.m.apply(null,c)}class br extends lt{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ri(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(n){lt.call(this),this.h=n,this.g={}}q(ft,lt);var rt=[];function wt(n){nt(n.g,function(c,f){this.g.hasOwnProperty(f)&&xi(c)},n),n.g={}}ft.prototype.N=function(){ft.aa.N.call(this),wt(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=x.JSON.stringify,ds=x.JSON.parse,Zn=class{stringify(n){return x.JSON.stringify(n,void 0)}parse(n){return x.JSON.parse(n,void 0)}};function ei(){}ei.prototype.h=null;function Di(n){return n.h||(n.h=n.i())}function ps(){}var st={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jt(){Pe.call(this,"d")}q(jt,Pe);function ti(){Pe.call(this,"c")}q(ti,Pe);var Ut={},qe=null;function Oe(){return qe=qe||new _e}Ut.La="serverreachability";function ni(n){Pe.call(this,Ut.La,n)}q(ni,Pe);function Sn(n){const c=Oe();Ue(c,new ni(c))}Ut.STAT_EVENT="statevent";function Ni(n,c){Pe.call(this,Ut.STAT_EVENT,n),this.stat=c}q(Ni,Pe);function Le(n){const c=Oe();Ue(c,new Ni(c,n))}Ut.Ma="timingevent";function Ft(n,c){Pe.call(this,Ut.Ma,n),this.size=c}q(Ft,Pe);function ot(n,c){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){n()},c)}function Ht(){this.g=!0}Ht.prototype.xa=function(){this.g=!1};function ii(n,c,f,y,P,O){n.info(function(){if(n.g)if(O)for(var B="",ce=O.split("&"),ke=0;ke<ce.length;ke++){var ue=ce[ke].split("=");if(1<ue.length){var Ie=ue[0];ue=ue[1];var Me=Ie.split("_");B=2<=Me.length&&Me[1]=="type"?B+(Ie+"="+ue+"&"):B+(Ie+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+c+`
`+f+`
`+B})}function gs(n,c,f,y,P,O,B){n.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+c+`
`+f+`
`+O+" "+B})}function tn(n,c,f,y){n.info(function(){return"XMLHTTP TEXT ("+c+"): "+Er(n,f)+(y?" "+y:"")})}function ms(n,c){n.info(function(){return"TIMEOUT: "+c})}Ht.prototype.info=function(){};function Er(n,c){if(!n.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(n=0;n<f.length;n++)if(Array.isArray(f[n])){var y=f[n];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return Tt(f)}catch{return c}}var Oi={NO_ERROR:0,TIMEOUT:8},ys={},ri;function si(){}q(si,ei),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},ri=new si;function We(n,c,f,y){this.j=n,this.i=c,this.l=f,this.R=y||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Li}function Li(){this.i=null,this.g="",this.h=!1}var oi={},An={};function nn(n,c,f){n.L=1,n.v=bt(ut(c)),n.m=f,n.P=!0,Mi(n,null)}function Mi(n,c){n.F=Date.now(),kn(n),n.A=ut(n.v);var f=n.A,y=n.R;Array.isArray(y)||(y=[String(y)]),Bi(f.i,"t",y),n.C=0,f=n.j.J,n.h=new Li,n.g=Qe(n.j,f?c:null,!n.m),0<n.O&&(n.M=new br(W(n.Y,n,n.g),n.O)),c=n.U,f=n.g,y=n.ca;var P="readystatechange";Array.isArray(P)||(P&&(rt[0]=P.toString()),P=rt);for(var O=0;O<P.length;O++){var B=Xn(f,P[O],y||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=n.H?I(n.H):{},n.m?(n.u||(n.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,c)):(n.u="GET",n.g.ea(n.A,n.u,null,c)),Sn(),ii(n.i,n.u,n.A,n.l,n.R,n.m)}We.prototype.ca=function(n){n=n.target;const c=this.M;c&&Ye(n)==3?c.j():this.Y(n)},We.prototype.Y=function(n){try{if(n==this.g)e:{const Me=Ye(this.g);var c=this.g.Ba();const an=this.g.Z();if(!(3>Me)&&(Me!=3||this.g&&(this.h.h||this.g.oa()||Lr(this.g)))){this.J||Me!=4||c==7||(c==8||0>=an?Sn(3):Sn(2)),ai(this);var f=this.g.Z();this.X=f;t:if(Ir(this)){var y=Lr(this.g);n="";var P=y.length,O=Ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),rn(this);var B="";break t}this.h.i=new x.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,n+=this.h.i.decode(y[c],{stream:!(O&&c==P-1)});y.length=0,this.h.g+=n,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,gs(this.i,this.u,this.A,this.l,this.R,Me,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,ke=this.g;if((ce=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!De(ce)){var ue=ce;break t}}ue=null}if(f=ue)tn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pn(this,f);else{this.o=!1,this.s=3,Le(12),Vt(this),rn(this);break e}}if(this.P){f=!0;let et;for(;!this.J&&this.C<B.length;)if(et=Cn(this,B),et==An){Me==4&&(this.s=4,Le(14),f=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(et==oi){this.s=4,Le(15),tn(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else tn(this.i,this.l,et,null),Pn(this,et);if(Ir(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Me!=4||B.length!=0||this.h.h||(this.s=1,Le(16),f=!1),this.o=this.o&&f,!f)tn(this.i,this.l,B,"[Invalid Chunked Response]"),Vt(this),rn(this);else if(0<B.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),U(Ie),Ie.M=!0,Le(11))}}else tn(this.i,this.l,B,null),Pn(this,B);Me==4&&Vt(this),this.o&&!this.J&&(Me==4?te(this.j,this):(this.o=!1,kn(this)))}else Ss(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),Vt(this),rn(this)}}}catch{}finally{}};function Ir(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Cn(n,c){var f=n.C,y=c.indexOf(`
`,f);return y==-1?An:(f=Number(c.substring(f,y)),isNaN(f)?oi:(y+=1,y+f>c.length?An:(c=c.slice(y,y+f),n.C=y+f,c)))}We.prototype.cancel=function(){this.J=!0,Vt(this)};function kn(n){n.S=Date.now()+n.I,ji(n,n.I)}function ji(n,c){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ot(W(n.ba,n),c)}function ai(n){n.B&&(x.clearTimeout(n.B),n.B=null)}We.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(ms(this.i,this.A),this.L!=2&&(Sn(),Le(17)),Vt(this),this.s=2,rn(this)):ji(this,this.S-n)};function rn(n){n.j.G==0||n.J||te(n.j,n)}function Vt(n){ai(n);var c=n.M;c&&typeof c.ma=="function"&&c.ma(),n.M=null,wt(n.U),n.g&&(c=n.g,n.g=null,c.abort(),c.ma())}function Pn(n,c){try{var f=n.j;if(f.G!=0&&(f.g==n||xn(f.h,n))){if(!n.K&&xn(f.h,n)&&f.G==3){try{var y=f.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<n.F)H(f),u(f);else break e;M(f),Le(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=ot(W(f.Za,f),6e3));if(1>=Fi(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ie(f,11)}else if((n.K||f.g==n)&&H(f),!De(c))for(P=f.Da.g.parse(c),c=0;c<P.length;c++){let ue=P[c];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const Ie=ue[3];Ie!=null&&(f.la=Ie,f.j.info("VER="+f.la));const Me=ue[4];Me!=null&&(f.Aa=Me,f.j.info("SVER="+f.Aa));const an=ue[5];an!=null&&typeof an=="number"&&0<an&&(y=1.5*an,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const et=n.g;if(et){const pe=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pe){var O=y.h;O.g||pe.indexOf("spdy")==-1&&pe.indexOf("quic")==-1&&pe.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ui(O,O.h),O.h=null))}if(y.D){const un=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;un&&(y.ya=un,be(y.I,y.D,un))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-n.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var B=n;if(y.qa=Ce(y,y.J?y.ia:null,y.W),B.K){Fe(y.h,B);var ce=B,ke=y.L;ke&&(ce.I=ke),ce.B&&(ai(ce),kn(ce)),y.g=B}else A(y);0<f.i.length&&d(f)}else ue[0]!="stop"&&ue[0]!="close"||ie(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?ie(f,7):s(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}Sn(4)}catch{}}var vs=class{constructor(n,c){this.g=n,this.map=c}};function Sr(n){this.l=n||10,x.PerformanceNavigationTiming?(n=x.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(x.chrome&&x.chrome.loadTimes&&x.chrome.loadTimes()&&x.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ui(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Fi(n){return n.h?1:n.g?n.g.size:0}function xn(n,c){return n.h?n.h==c:n.g?n.g.has(c):!1}function ui(n,c){n.g?n.g.add(c):n.h=c}function Fe(n,c){n.h&&n.h==c?n.h=null:n.g&&n.g.has(c)&&n.g.delete(c)}Sr.prototype.cancel=function(){if(this.i=Bt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Bt(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let c=n.i;for(const f of n.g.values())c=c.concat(f.D);return c}return J(n.i)}function ci(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(j(n)){for(var c=[],f=n.length,y=0;y<f;y++)c.push(n[y]);return c}c=[],f=0;for(y in n)c[f++]=n[y];return c}function _s(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(j(n)||typeof n=="string"){var c=[];n=n.length;for(var f=0;f<n;f++)c.push(f);return c}c=[],f=0;for(const y in n)c[f++]=y;return c}}}function Ar(n,c){if(n.forEach&&typeof n.forEach=="function")n.forEach(c,void 0);else if(j(n)||typeof n=="string")Array.prototype.forEach.call(n,c,void 0);else for(var f=_s(n),y=ci(n),P=y.length,O=0;O<P;O++)c.call(void 0,y[O],f&&f[O],n)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cr(n,c){if(n){n=n.split("&");for(var f=0;f<n.length;f++){var y=n[f].indexOf("="),P=null;if(0<=y){var O=n[f].substring(0,y);P=n[f].substring(y+1)}else O=n[f];c(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function at(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof at){this.h=n.h,hi(this,n.j),this.o=n.o,this.g=n.g,fi(this,n.s),this.l=n.l;var c=n.i,f=new qt;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Je(this,f),this.m=n.m}else n&&(c=String(n).match(li))?(this.h=!1,hi(this,c[1]||"",!0),this.o=Rn(c[2]||""),this.g=Rn(c[3]||"",!0),fi(this,c[4]),this.l=Rn(c[5]||"",!0),Je(this,c[6]||"",!0),this.m=Rn(c[7]||"")):(this.h=!1,this.i=new qt(null,this.h))}at.prototype.toString=function(){var n=[],c=this.j;c&&n.push(Dn(c,Et,!0),":");var f=this.g;return(f||c=="file")&&(n.push("//"),(c=this.o)&&n.push(Dn(c,Et,!0),"@"),n.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&n.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&n.push("/"),n.push(Dn(f,f.charAt(0)=="/"?ws:Hi,!0))),(f=this.i.toString())&&n.push("?",f),(f=this.m)&&n.push("#",Dn(f,kr)),n.join("")};function ut(n){return new at(n)}function hi(n,c,f){n.j=f?Rn(c,!0):c,n.j&&(n.j=n.j.replace(/:$/,""))}function fi(n,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);n.s=c}else n.s=null}function Je(n,c,f){c instanceof qt?(n.i=c,Ts(n.i,n.h)):(f||(c=Dn(c,Nn)),n.i=new qt(c,n.h))}function be(n,c,f){n.i.set(c,f)}function bt(n){return be(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Rn(n,c){return n?c?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Dn(n,c,f){return typeof n=="string"?(n=encodeURI(n).replace(c,$t),f&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function $t(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Et=/[#\/\?@]/g,Hi=/[#\?:]/g,ws=/[#\?]/g,Nn=/[#\?@]/g,kr=/#/g;function qt(n,c){this.h=this.g=null,this.i=n||null,this.j=!!c}function dt(n){n.g||(n.g=new Map,n.h=0,n.i&&Cr(n.i,function(c,f){n.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}r=qt.prototype,r.add=function(n,c){dt(this),this.i=null,n=sn(this,n);var f=this.g.get(n);return f||this.g.set(n,f=[]),f.push(c),this.h+=1,this};function Vi(n,c){dt(n),c=sn(n,c),n.g.has(c)&&(n.i=null,n.h-=n.g.get(c).length,n.g.delete(c))}function Pr(n,c){return dt(n),c=sn(n,c),n.g.has(c)}r.forEach=function(n,c){dt(this),this.g.forEach(function(f,y){f.forEach(function(P){n.call(c,P,y,this)},this)},this)},r.na=function(){dt(this);const n=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let y=0;y<c.length;y++){const P=n[y];for(let O=0;O<P.length;O++)f.push(c[y])}return f},r.V=function(n){dt(this);let c=[];if(typeof n=="string")Pr(this,n)&&(c=c.concat(this.g.get(sn(this,n))));else{n=Array.from(this.g.values());for(let f=0;f<n.length;f++)c=c.concat(n[f])}return c},r.set=function(n,c){return dt(this),this.i=null,n=sn(this,n),Pr(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[c]),this.h+=1,this},r.get=function(n,c){return n?(n=this.V(n),0<n.length?String(n[0]):c):c};function Bi(n,c,f){Vi(n,c),0<f.length&&(n.i=null,n.g.set(sn(n,c),J(f)),n.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var y=c[f];const O=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var P=O;B[y]!==""&&(P+="="+encodeURIComponent(String(B[y]))),n.push(P)}}return this.i=n.join("&")};function sn(n,c){return c=String(c),n.j&&(c=c.toLowerCase()),c}function Ts(n,c){c&&!n.j&&(dt(n),n.i=null,n.g.forEach(function(f,y){var P=y.toLowerCase();y!=P&&(Vi(this,y),Bi(this,P,f))},n)),n.j=c}function $i(n,c){const f=new Ht;if(x.Image){const y=new Image;y.onload=Ee(It,f,"TestLoadImage: loaded",!0,c,y),y.onerror=Ee(It,f,"TestLoadImage: error",!1,c,y),y.onabort=Ee(It,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=Ee(It,f,"TestLoadImage: timeout",!1,c,y),x.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=n}else c(!1)}function bs(n,c){const f=new Ht,y=new AbortController,P=setTimeout(()=>{y.abort(),It(f,"TestPingServer: timeout",!1,c)},1e4);fetch(n,{signal:y.signal}).then(O=>{clearTimeout(P),O.ok?It(f,"TestPingServer: ok",!0,c):It(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),It(f,"TestPingServer: error",!1,c)})}function It(n,c,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function Es(){this.g=new Zn}function Is(n,c,f){const y=f||"";try{Ar(n,function(P,O){let B=P;V(P)&&(B=Tt(P)),c.push(y+O+"="+encodeURIComponent(B))})}catch(P){throw c.push(y+"type="+encodeURIComponent("_badmap")),P}}function di(n){this.l=n.Ub||null,this.j=n.eb||!1}q(di,ei),di.prototype.g=function(){return new pi(this.l,this.j)},di.prototype.i=(function(n){return function(){return n}})({});function pi(n,c){_e.call(this),this.D=n,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(pi,_e),r=pi.prototype,r.open=function(n,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=c,this.readyState=1,Wt(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(c.body=n),(this.D||x).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,on(this)),this.readyState=0},r.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Wt(this)),this.g&&(this.readyState=3,Wt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xr(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function xr(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}r.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var c=n.value?n.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!n.done}))&&(this.response=this.responseText+=c)}n.done?on(this):Wt(this),this.readyState==3&&xr(this)}},r.Ra=function(n){this.g&&(this.response=this.responseText=n,on(this))},r.Qa=function(n){this.g&&(this.response=n,on(this))},r.ga=function(){this.g&&on(this)};function on(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Wt(n)}r.setRequestHeader=function(n,c){this.u.append(n,c)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,n.push(f[0]+": "+f[1]),f=c.next();return n.join(`\r
`)};function Wt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function qi(n){let c="";return nt(n,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function On(n,c,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=qi(f),typeof n=="string"?f!=null&&encodeURIComponent(String(f)):be(n,c,f))}function Ae(n){_e.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ae,_e);var Rr=/^https?$/i,Wi=["POST","PUT"];r=Ae.prototype,r.Ha=function(n){this.J=n},r.ea=function(n,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);c=c?c.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ri.g(),this.v=this.o?Di(this.o):Di(ri),this.g.onreadystatechange=W(this.Ea,this);try{this.B=!0,this.g.open(c,String(n),!0),this.B=!1}catch(O){Dr(this,O);return}if(n=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())f.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),P=x.FormData&&n instanceof x.FormData,!(0<=Array.prototype.indexOf.call(Wi,c,void 0))||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zi(this),this.u=!0,this.g.send(n),this.u=!1}catch(O){Dr(this,O)}};function Dr(n,c){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=c,n.m=5,Nr(n),St(n)}function Nr(n){n.A||(n.A=!0,Ue(n,"complete"),Ue(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,Ue(this,"complete"),Ue(this,"abort"),St(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),St(this,!0)),Ae.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Or(this):this.bb())},r.bb=function(){Or(this)};function Or(n){if(n.h&&typeof w<"u"&&(!n.v[1]||Ye(n)!=4||n.Z()!=2)){if(n.u&&Ye(n)==4)Tr(n.Ea,0,n);else if(Ue(n,"readystatechange"),Ye(n)==4){n.h=!1;try{const B=n.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var y;if(y=B===0){var P=String(n.D).match(li)[1]||null;!P&&x.self&&x.self.location&&(P=x.self.location.protocol.slice(0,-1)),y=!Rr.test(P?P.toLowerCase():"")}f=y}if(f)Ue(n,"complete"),Ue(n,"success");else{n.m=6;try{var O=2<Ye(n)?n.g.statusText:""}catch{O=""}n.l=O+" ["+n.Z()+"]",Nr(n)}}finally{St(n)}}}}function St(n,c){if(n.g){zi(n);const f=n.g,y=n.v[0]?()=>{}:null;n.g=null,n.v=null,c||Ue(n,"ready");try{f.onreadystatechange=y}catch{}}}function zi(n){n.I&&(x.clearTimeout(n.I),n.I=null)}r.isActive=function(){return!!this.g};function Ye(n){return n.g?n.g.readyState:0}r.Z=function(){try{return 2<Ye(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(n){if(this.g){var c=this.g.responseText;return n&&c.indexOf(n)==0&&(c=c.substring(n.length)),ds(c)}};function Lr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ss(n){const c={};n=(n.g&&2<=Ye(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<n.length;y++){if(De(n[y]))continue;var f=k(n[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=c[P]||[];c[P]=O,O.push(f)}a(c,function(y){return y.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ln(n,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[n]||c}function t(n){this.Aa=0,this.i=[],this.j=new Ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ln("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ln("baseRetryDelayMs",5e3,n),this.cb=Ln("retryDelaySeedMs",1e4,n),this.Wa=Ln("forwardChannelMaxRetries",2,n),this.wa=Ln("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new Sr(n&&n.concurrentRequestLimit),this.Da=new Es,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=t.prototype,r.la=8,r.G=1,r.connect=function(n,c,f,y){Le(0),this.W=n,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Ce(this,null,this.W),d(this)};function s(n){if(l(n),n.G==3){var c=n.U++,f=ut(n.I);if(be(f,"SID",n.K),be(f,"RID",c),be(f,"TYPE","terminate"),E(n,f),c=new We(n,n.j,c),c.L=2,c.v=bt(ut(f)),f=!1,x.navigator&&x.navigator.sendBeacon)try{f=x.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&x.Image&&(new Image().src=c.v,f=!0),f||(c.g=Qe(c.j,null),c.g.ea(c.v)),c.F=Date.now(),kn(c)}xe(n)}function u(n){n.g&&(U(n),n.g.cancel(),n.g=null)}function l(n){u(n),n.u&&(x.clearTimeout(n.u),n.u=null),H(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&x.clearTimeout(n.s),n.s=null)}function d(n){if(!Ui(n.h)&&!n.s){n.s=!0;var c=n.Ga;Be||ki(),Ot||(Be(),Ot=!0),vt.add(c,n),n.B=0}}function p(n,c){return Fi(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=c.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=ot(W(n.Ga,n,c),le(n,n.B)),n.B++,!0)}r.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const P=new We(this,this.j,n);let O=this.o;if(this.S&&(O?(O=I(O),C(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=_(this,P,c),f=ut(this.I),be(f,"RID",n),be(f,"CVER",22),this.D&&be(f,"X-HTTP-Session-Id",this.D),E(this,f),O&&(this.O?c="headers="+encodeURIComponent(String(qi(O)))+"&"+c:this.m&&On(f,this.m,O)),ui(this.h,P),this.Ua&&be(f,"TYPE","init"),this.P?(be(f,"$req",c),be(f,"SID","null"),P.T=!0,nn(P,f,null)):nn(P,f,c),this.G=2}}else this.G==3&&(n?g(this,n):this.i.length==0||Ui(this.h)||g(this))};function g(n,c){var f;c?f=c.l:f=n.U++;const y=ut(n.I);be(y,"SID",n.K),be(y,"RID",f),be(y,"AID",n.T),E(n,y),n.m&&n.o&&On(y,n.m,n.o),f=new We(n,n.j,f,n.B+1),n.m===null&&(f.H=n.o),c&&(n.i=c.D.concat(n.i)),c=_(n,f,1e3),f.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),ui(n.h,f),nn(f,y,c)}function E(n,c){n.H&&nt(n.H,function(f,y){be(c,y,f)}),n.l&&Ar({},function(f,y){be(c,y,f)})}function _(n,c,f){f=Math.min(n.i.length,f);var y=n.l?W(n.l.Na,n.l,n):null;e:{var P=n.i;let O=-1;for(;;){const B=["count="+f];O==-1?0<f?(O=P[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let ce=!0;for(let ke=0;ke<f;ke++){let ue=P[ke].g;const Ie=P[ke].map;if(ue-=O,0>ue)O=Math.max(0,P[ke].g-100),ce=!1;else try{Is(Ie,B,"req"+ue+"_")}catch{y&&y(Ie)}}if(ce){y=B.join("&");break e}}}return n=n.i.splice(0,f),c.D=n,y}function A(n){if(!n.g&&!n.u){n.Y=1;var c=n.Fa;Be||ki(),Ot||(Be(),Ot=!0),vt.add(c,n),n.v=0}}function M(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=ot(W(n.Fa,n),le(n,n.v)),n.v++,!0)}r.Fa=function(){if(this.u=null,N(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=ot(W(this.ab,this),n)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),u(this),N(this))};function U(n){n.A!=null&&(x.clearTimeout(n.A),n.A=null)}function N(n){n.g=new We(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var c=ut(n.qa);be(c,"RID","rpc"),be(c,"SID",n.K),be(c,"AID",n.T),be(c,"CI",n.F?"0":"1"),!n.F&&n.ja&&be(c,"TO",n.ja),be(c,"TYPE","xmlhttp"),E(n,c),n.m&&n.o&&On(c,n.m,n.o),n.L&&(n.g.I=n.L);var f=n.g;n=n.ia,f.L=1,f.v=bt(ut(c)),f.m=null,f.P=!0,Mi(f,n)}r.Za=function(){this.C!=null&&(this.C=null,u(this),M(this),Le(19))};function H(n){n.C!=null&&(x.clearTimeout(n.C),n.C=null)}function te(n,c){var f=null;if(n.g==c){H(n),U(n),n.g=null;var y=2}else if(xn(n.h,c))f=c.D,Fe(n.h,c),y=1;else return;if(n.G!=0){if(c.o)if(y==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var P=n.B;y=Oe(),Ue(y,new Ft(y,f)),d(n)}else A(n);else if(P=c.s,P==3||P==0&&0<c.X||!(y==1&&p(n,c)||y==2&&M(n)))switch(f&&0<f.length&&(c=n.h,c.i=c.i.concat(f)),P){case 1:ie(n,5);break;case 4:ie(n,10);break;case 3:ie(n,6);break;default:ie(n,2)}}}function le(n,c){let f=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(f*=2),f*c}function ie(n,c){if(n.j.info("Error code "+c),c==2){var f=W(n.fb,n),y=n.Xa;const P=!y;y=new at(y||"//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||hi(y,"https"),bt(y),P?$i(y.toString(),f):bs(y.toString(),f)}else Le(2);n.G=0,n.l&&n.l.sa(c),xe(n),l(n)}r.fb=function(n){n?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function xe(n){if(n.G=0,n.ka=[],n.l){const c=Bt(n.h);(c.length!=0||n.i.length!=0)&&(ve(n.ka,c),ve(n.ka,n.i),n.h.i.length=0,J(n.i),n.i.length=0),n.l.ra()}}function Ce(n,c,f){var y=f instanceof at?ut(f):new at(f);if(y.g!="")c&&(y.g=c+"."+y.g),fi(y,y.s);else{var P=x.location;y=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var O=new at(null);y&&hi(O,y),c&&(O.g=c),P&&fi(O,P),f&&(O.l=f),y=O}return f=n.D,c=n.ya,f&&c&&be(y,f,c),be(y,"VER",n.la),E(n,y),y}function Qe(n,c,f){if(c&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=n.Ca&&!n.pa?new Ae(new di({eb:f})):new Ae(n.pa),c.Ha(n.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ze(){}r=Ze.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ne(n,c){_e.call(this),this.g=new t(c),this.l=n,this.h=c&&c.messageUrlParams||null,n=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(n?n["X-WebChannel-Content-Type"]=c.messageContentType:n={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(n?n["X-WebChannel-Client-Profile"]=c.va:n={"X-WebChannel-Client-Profile":c.va}),this.g.S=n,(n=c&&c.Sb)&&!De(n)&&(this.g.m=n),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!De(c)&&(this.g.D=c,n=this.h,n!==null&&c in n&&(n=this.h,c in n&&delete n[c])),this.j=new Te(this)}q(ne,_e),ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ne.prototype.close=function(){s(this.g)},ne.prototype.o=function(n){var c=this.g;if(typeof n=="string"){var f={};f.__data__=n,n=f}else this.u&&(f={},f.__data__=Tt(n),n=f);c.i.push(new vs(c.Ya++,n)),c.G==3&&d(c)},ne.prototype.N=function(){this.g.l=null,delete this.j,s(this.g),delete this.g,ne.aa.N.call(this)};function At(n){jt.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var c=n.__sm__;if(c){e:{for(const f in c){n=f;break e}n=void 0}(this.i=n)&&(n=this.i,c=c!==null&&n in c?c[n]:void 0),this.data=c}else this.data=n}q(At,jt);function de(){ti.call(this),this.status=1}q(de,ti);function Te(n){this.g=n}q(Te,Ze),Te.prototype.ua=function(){Ue(this.g,"a")},Te.prototype.ta=function(n){Ue(this.g,new At(n))},Te.prototype.sa=function(n){Ue(this.g,new de)},Te.prototype.ra=function(){Ue(this.g,"b")},ne.prototype.send=ne.prototype.o,ne.prototype.open=ne.prototype.m,ne.prototype.close=ne.prototype.close,Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,ys.COMPLETE="complete",ps.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",_e.prototype.listen=_e.prototype.K,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha}).apply(typeof Hr<"u"?Hr:typeof self<"u"?self:typeof window<"u"?window:{});const Yo="@firebase/firestore",Qo="4.9.0";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let lr="12.0.0";/**
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
 */const Ii=new Ys("@firebase/firestore");function yt(r,...e){if(Ii.logLevel<=we.DEBUG){const i=e.map(lo);Ii.debug(`Firestore (${lr}): ${r}`,...i)}}function ru(r,...e){if(Ii.logLevel<=we.ERROR){const i=e.map(lo);Ii.error(`Firestore (${lr}): ${r}`,...i)}}function mf(r,...e){if(Ii.logLevel<=we.WARN){const i=e.map(lo);Ii.warn(`Firestore (${lr}): ${r}`,...i)}}function lo(r){if(typeof r=="string")return r;try{/**
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
*/return(function(i){return JSON.stringify(i)})(r)}catch{return r}}/**
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
 */function tr(r,e,i){let o="Unexpected state";typeof e=="string"?o=e:i=e,su(r,o,i)}function su(r,e,i){let o=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(i!==void 0)try{o+=" CONTEXT: "+JSON.stringify(i)}catch{o+=" CONTEXT: "+i}throw ru(o),new Error(o)}function Xi(r,e,i,o){let h="Unexpected state";typeof i=="string"?h=i:o=i,r||su(e,h,o)}/**
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
 */const me={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ye extends Qt{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yi{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
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
 */class ou{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(Ge.UNAUTHENTICATED)))}shutdown(){}}class vf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class _f{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Xi(this.o===void 0,42304);let o=this.i;const h=j=>this.i!==o?(o=this.i,i(j)):Promise.resolve();let m=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),m.resolve(),m=new Yi,e.enqueueRetryable((()=>h(this.currentUser)))};const w=()=>{const j=m;e.enqueueRetryable((async()=>{await j.promise,await h(this.currentUser)}))},x=j=>{yt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=j,this.o&&(this.auth.addAuthTokenListener(this.o),w())};this.t.onInit((j=>x(j))),setTimeout((()=>{if(!this.auth){const j=this.t.getImmediate({optional:!0});j?x(j):(yt("FirebaseAuthCredentialsProvider","Auth not yet detected"),m.resolve(),m=new Yi)}}),0),w()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((o=>this.i!==e?(yt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(Xi(typeof o.accessToken=="string",31837,{l:o}),new ou(o.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xi(e===null||typeof e=="string",2055,{h:e}),new Ge(e)}}class wf{constructor(e,i,o){this.P=e,this.T=i,this.I=o,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Tf{constructor(e,i,o){this.P=e,this.T=i,this.I=o}getToken(){return Promise.resolve(new wf(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable((()=>i(Ge.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bf{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){Xi(this.o===void 0,3512);const o=m=>{m.error!=null&&yt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${m.error.message}`);const w=m.token!==this.m;return this.m=m.token,yt("FirebaseAppCheckTokenProvider",`Received ${w?"new":"existing"} token.`),w?i(m.token):Promise.resolve()};this.o=m=>{e.enqueueRetryable((()=>o(m)))};const h=m=>{yt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=m,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((m=>h(m))),setTimeout((()=>{if(!this.appCheck){const m=this.V.getImmediate({optional:!0});m?h(m):yt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(Xi(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Zo(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ef(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let o=0;o<r;o++)i[o]=Math.floor(256*Math.random());return i}/**
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
 */class If{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const h=Ef(40);for(let m=0;m<h.length;++m)o.length<20&&h[m]<i&&(o+=e.charAt(h[m]%62))}return o}}function wn(r,e){return r<e?-1:r>e?1:0}function Sf(r,e){const i=Math.min(r.length,e.length);for(let o=0;o<i;o++){const h=r.charAt(o),m=e.charAt(o);if(h!==m)return Us(h)===Us(m)?wn(h,m):Us(h)?1:-1}return wn(r.length,e.length)}const Af=55296,Cf=57343;function Us(r){const e=r.charCodeAt(0);return e>=Af&&e<=Cf}/**
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
 */const ea="__name__";class kt{constructor(e,i,o){i===void 0?i=0:i>e.length&&tr(637,{offset:i,range:e.length}),o===void 0?o=e.length-i:o>e.length-i&&tr(1746,{length:o,range:e.length-i}),this.segments=e,this.offset=i,this.len=o}get length(){return this.len}isEqual(e){return kt.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof kt?e.forEach((o=>{i.push(o)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,o=this.limit();i<o;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const o=Math.min(e.length,i.length);for(let h=0;h<o;h++){const m=kt.compareSegments(e.get(h),i.get(h));if(m!==0)return m}return wn(e.length,i.length)}static compareSegments(e,i){const o=kt.isNumericId(e),h=kt.isNumericId(i);return o&&!h?-1:!o&&h?1:o&&h?kt.extractNumericId(e).compare(kt.extractNumericId(i)):Sf(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return co.fromString(e.substring(4,e.length-2))}}class gt extends kt{construct(e,i,o){return new gt(e,i,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const o of e){if(o.indexOf("//")>=0)throw new ye(me.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);i.push(...o.split("/").filter((h=>h.length>0)))}return new gt(i)}static emptyPath(){return new gt([])}}const kf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Un extends kt{construct(e,i,o){return new Un(e,i,o)}static isValidIdentifier(e){return kf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Un.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ea}static keyField(){return new Un([ea])}static fromServerFormat(e){const i=[];let o="",h=0;const m=()=>{if(o.length===0)throw new ye(me.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(o),o=""};let w=!1;for(;h<e.length;){const x=e[h];if(x==="\\"){if(h+1===e.length)throw new ye(me.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const j=e[h+1];if(j!=="\\"&&j!=="."&&j!=="`")throw new ye(me.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=j,h+=2}else x==="`"?(w=!w,h++):x!=="."||w?(o+=x,h++):(m(),h++)}if(m(),w)throw new ye(me.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Un(i)}static emptyPath(){return new Un([])}}/**
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
 */class Fn{constructor(e){this.path=e}static fromPath(e){return new Fn(gt.fromString(e))}static fromName(e){return new Fn(gt.fromString(e).popFirst(5))}static empty(){return new Fn(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&gt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return gt.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fn(new gt(e.slice()))}}function Pf(r,e,i,o){if(e===!0&&o===!0)throw new ye(me.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function xf(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Rf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(o){return o.constructor?o.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":tr(12329,{type:typeof r})}function Df(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ye(me.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Rf(r);throw new ye(me.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return r}/**
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
 */function Re(r,e){const i={typeString:r};return e&&(i.value=e),i}function hr(r,e){if(!xf(r))throw new ye(me.INVALID_ARGUMENT,"JSON must be an object");let i;for(const o in e)if(e[o]){const h=e[o].typeString,m="value"in e[o]?{value:e[o].value}:void 0;if(!(o in r)){i=`JSON missing required field: '${o}'`;break}const w=r[o];if(h&&typeof w!==h){i=`JSON field '${o}' must be a ${h}.`;break}if(m!==void 0&&w!==m.value){i=`Expected '${o}' field to equal '${m.value}'`;break}}if(i)throw new ye(me.INVALID_ARGUMENT,i);return!0}/**
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
 */const ta=-62135596800,na=1e6;class Pt{static now(){return Pt.fromMillis(Date.now())}static fromDate(e){return Pt.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),o=Math.floor((e-1e3*i)*na);return new Pt(i,o)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new ye(me.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ye(me.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<ta)throw new ye(me.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(me.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/na}_compareTo(e){return this.seconds===e.seconds?wn(this.nanoseconds,e.nanoseconds):wn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hr(e,Pt._jsonSchema))return new Pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ta;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pt._jsonSchemaVersion="firestore/timestamp/1.0",Pt._jsonSchema={type:Re("string",Pt._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};function Nf(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Of extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zn{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(h){try{return atob(h)}catch(m){throw typeof DOMException<"u"&&m instanceof DOMException?new Of("Invalid base64 string: "+m):m}})(e);return new zn(i)}static fromUint8Array(e){const i=(function(h){let m="";for(let w=0;w<h.length;++w)m+=String.fromCharCode(h[w]);return m})(e);return new zn(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const o=new Uint8Array(i.length);for(let h=0;h<i.length;h++)o[h]=i.charCodeAt(h);return o})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return wn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zn.EMPTY_BYTE_STRING=new zn("");const Ks="(default)";class ns{constructor(e,i){this.projectId=e,this.database=i||Ks}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database===Ks}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Lf{constructor(e,i=null,o=[],h=[],m=null,w="F",x=null,j=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=o,this.filters=h,this.limit=m,this.limitType=w,this.startAt=x,this.endAt=j,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Mf(r){return new Lf(r)}/**
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
 */var ia,ge;(ge=ia||(ia={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new co([4294967295,4294967295],0);/**
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
 */const jf=41943040;/**
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
 */const Uf=1048576;function Fs(){return typeof document<"u"?document:null}/**
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
 */class Ff{constructor(e,i,o=1e3,h=1.5,m=6e4){this.Mi=e,this.timerId=i,this.d_=o,this.A_=h,this.R_=m,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),o=Math.max(0,Date.now()-this.f_),h=Math.max(0,i-o);h>0&&yt("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${o} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,h,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class ho{constructor(e,i,o,h,m){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=o,this.op=h,this.removalCallback=m,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((w=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,o,h,m){const w=Date.now()+o,x=new ho(e,i,w,h,m);return x.start(o),x}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(me.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ra,sa;(sa=ra||(ra={})).Ma="default",sa.Cache="cache";/**
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
 */function Hf(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const oa=new Map;/**
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
 */const au="firestore.googleapis.com",aa=!0;class ua{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ye(me.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=au,this.ssl=aa}else this.host=e.host,this.ssl=e.ssl??aa;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Uf)throw new ye(me.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hf(e.experimentalLongPollingOptions??{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ye(me.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ye(me.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ye(me.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(o,h){return o.timeoutSeconds===h.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uu{constructor(e,i,o,h){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=o,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ua({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(me.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(me.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ua(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(o){if(!o)return new yf;switch(o.type){case"firstParty":return new Tf(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new ye(me.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const o=oa.get(i);o&&(yt("ComponentProvider","Removing Datastore"),oa.delete(i),o.terminate())})(this),Promise.resolve()}}function Vf(r,e,i,o={}){r=Df(r,uu);const h=rr(e),m=r._getSettings(),w={...m,emulatorOptions:r._getEmulatorOptions()},x=`${e}:${i}`;h&&(_a(`https://${x}`),wa("Firestore",!0)),m.host!==au&&m.host!==x&&mf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const j={...m,host:x,ssl:h,emulatorOptions:o};if(!$n(j,w)&&(r._setSettings(j),o.mockUserToken)){let V,ee;if(typeof o.mockUserToken=="string")V=o.mockUserToken,ee=Ge.MOCK_USER;else{V=qu(o.mockUserToken,r._app?.options.projectId);const ae=o.mockUserToken.sub||o.mockUserToken.user_id;if(!ae)throw new ye(me.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");ee=new Ge(ae)}r._authCredentials=new vf(new ou(V,ee))}}/**
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
 */class fo{constructor(e,i,o){this.converter=i,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new fo(this.firestore,e,this._query)}}class Rt{constructor(e,i,o){this.converter=i,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new po(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,o){if(hr(i,Rt._jsonSchema))return new Rt(e,o||null,new Fn(gt.fromString(i.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:Re("string",Rt._jsonSchemaVersion),referencePath:Re("string")};class po extends fo{constructor(e,i,o){super(e,i,Mf(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new Fn(e))}withConverter(e){return new po(this.firestore,e,this._path)}}/**
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
 */const ca="AsyncQueue";class la{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ff(this,"async_queue_retry"),this._c=()=>{const o=Fs();o&&yt(ca,"Visibility state changed to "+o.visibilityState),this.M_.w_()},this.ac=e;const i=Fs();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Fs();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Yi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Nf(e))throw e;yt(ca,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const i=this.ac.then((()=>(this.rc=!0,e().catch((o=>{throw this.nc=o,this.rc=!1,ru("INTERNAL UNHANDLED ERROR: ",ha(o)),o})).then((o=>(this.rc=!1,o))))));return this.ac=i,i}enqueueAfterDelay(e,i,o){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const h=ho.createAndSchedule(this,e,i,o,(m=>this.hc(m)));return this.tc.push(h),h}uc(){this.nc&&tr(47125,{Pc:ha(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((i,o)=>i.targetTimeMs-o.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function ha(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Bf extends uu{constructor(e,i,o,h){super(e,i,o,h),this.type="firestore",this._queue=new la,this._persistenceKey=h?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new la(e),this._firestoreClient=void 0,await e}}}function $f(r,e){const i=typeof r=="object"?r:Ia(),o=typeof r=="string"?r:Ks,h=Zs(i,"firestore").getImmediate({identifier:o});if(!h._initialized){const m=Bu("firestore");m&&Vf(h,...m)}return h}/**
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
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(zn.fromBase64String(e))}catch(i){throw new ye(me.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new zt(zn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hr(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:Re("string",zt._jsonSchemaVersion),bytes:Re("string")};/**
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
 */class cu{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new ye(me.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vn{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new ye(me.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new ye(me.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return wn(this._lat,e._lat)||wn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(hr(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:Re("string",Vn._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
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
 */class Bn{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(o,h){if(o.length!==h.length)return!1;for(let m=0;m<o.length;++m)if(o[m]!==h[m])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hr(e,Bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((i=>typeof i=="number")))return new Bn(e.vectorValues);throw new ye(me.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bn._jsonSchemaVersion="firestore/vectorValue/1.0",Bn._jsonSchema={type:Re("string",Bn._jsonSchemaVersion),vectorValues:Re("object")};const qf=new RegExp("[~\\*/\\[\\]]");function Wf(r,e,i){if(e.search(qf)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new cu(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function fa(r,e,i,o,h){let m=`Function ${e}() called with invalid data`;m+=". ";let w="";return new ye(me.INVALID_ARGUMENT,m+r+w)}/**
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
 */class lu{constructor(e,i,o,h,m){this._firestore=e,this._userDataWriter=i,this._key=o,this._document=h,this._converter=m}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(hu("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class zf extends lu{data(){return super.data()}}function hu(r,e){return typeof e=="string"?Wf(r,e):e instanceof cu?e._internalPath:e._delegate._internalPath}class Vr{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ti extends lu{constructor(e,i,o,h,m,w){super(e,i,o,h,w),this._firestore=e,this._firestoreImpl=e,this.metadata=m}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const o=this._document.data.field(hu("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(me.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Ti._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ti._jsonSchema={type:Re("string",Ti._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class Gr extends Ti{data(e={}){return super.data(e)}}class Qi{constructor(e,i,o,h){this._firestore=e,this._userDataWriter=i,this._snapshot=h,this.metadata=new Vr(h.hasPendingWrites,h.fromCache),this.query=o}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((o=>{e.call(i,new Gr(this._firestore,this._userDataWriter,o.key,o,new Vr(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new ye(me.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(h,m){if(h._snapshot.oldDocs.isEmpty()){let w=0;return h._snapshot.docChanges.map((x=>{const j=new Gr(h._firestore,h._userDataWriter,x.doc.key,x.doc,new Vr(h._snapshot.mutatedKeys.has(x.doc.key),h._snapshot.fromCache),h.query.converter);return x.doc,{type:"added",doc:j,oldIndex:-1,newIndex:w++}}))}{let w=h._snapshot.oldDocs;return h._snapshot.docChanges.filter((x=>m||x.type!==3)).map((x=>{const j=new Gr(h._firestore,h._userDataWriter,x.doc.key,x.doc,new Vr(h._snapshot.mutatedKeys.has(x.doc.key),h._snapshot.fromCache),h.query.converter);let V=-1,ee=-1;return x.type!==0&&(V=w.indexOf(x.doc.key),w=w.delete(x.doc.key)),x.type!==1&&(w=w.add(x.doc),ee=w.indexOf(x.doc.key)),{type:Gf(x.type),doc:j,oldIndex:V,newIndex:ee}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(me.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=If.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],o=[],h=[];return this.docs.forEach((m=>{m._document!==null&&(i.push(m._document),o.push(this._userDataWriter.convertObjectMap(m._document.data.value.mapValue.fields,"previous")),h.push(m.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Gf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tr(61501,{type:r})}}Qi._jsonSchemaVersion="firestore/querySnapshot/1.0",Qi._jsonSchema={type:Re("string",Qi._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};(function(e,i=!0){(function(h){lr=h})(Ai),bi(new qn("firestore",((o,{instanceIdentifier:h,options:m})=>{const w=o.getProvider("app").getImmediate(),x=new Bf(new _f(o.getProvider("auth-internal")),new bf(w,o.getProvider("app-check-internal")),(function(V,ee){if(!Object.prototype.hasOwnProperty.apply(V.options,["projectId"]))throw new ye(me.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(V.options.projectId,ee)})(w,h),w);return m={useFetchStreams:i,...m},x._setSettings(m),x}),"PUBLIC").setMultipleInstances(!0)),_n(Yo,Qo,e),_n(Yo,Qo,"esm2020")})();const Kf={apiKey:"AIzaSyAqyEr1XviSu634LduQhk5WDQgH2M0iA6Y",authDomain:"wiimage.firebaseapp.com",projectId:"wiimage",storageBucket:"wiimage.firebaseapp.com",messagingSenderId:"972731979228",appId:"1:972731979228:web:5a7347c3bcb04d65402b19"},fu=Ea(Kf);pf(fu);$f(fu);(()=>{const r=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=h=>{const[m,w]=K(h).data("tema").split("|");K("html").attr("data-theme",m),K('meta[name="theme-color"]').length?K('meta[name="theme-color"]').attr("content",w):K("<meta>",{name:"theme-color",content:w}).appendTo("head"),fr("witema",`${m}|${w}`,720),K(".mtha").removeClass("mtha"),K(h).addClass("mtha")};K(".witemas").html(r.map(([h,m])=>`<div class="tema" data-tema="${h}|${m}" style="background:${m}"></div>`).join(""));const i=dr("witema"),o=K(`[data-tema="${i}"]`)[0]||K(".mtha")[0]||K("[data-tema]").first()[0];return o&&e(o),K(document).on("click","[data-tema]",h=>e(h.currentTarget)),{set:e}})();function du(r,e,i,o){K(r).text(i).addClass(e).delay(1800).queue(h=>K(r).text(o).removeClass(e).dequeue())}(()=>{const r=()=>{const e=new Date;K(".wty").text(e.getFullYear()),K(".wtu").text(e.toLocaleString()),K(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const i=this.id||"";navigator.clipboard&&i&&navigator.clipboard.writeText(i).catch(()=>{}),K(".abwc").toggleClass("dpn")})};try{K(r)}catch{document.addEventListener("DOMContentLoaded",r,{once:!0})}return r})();function fr(r,e,i){try{localStorage.setItem(r,JSON.stringify({value:e,expiry:Date.now()+i*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(o){console.error("Error savels",o)}}function dr(r){try{const e=localStorage.getItem(r);if(!e)return null;const i=JSON.parse(e);return!i||Date.now()>i.expiry?(localStorage.removeItem(r),null):i.value}catch(e){return console.error("Error getls:",e),go(r),null}}function go(...r){r.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function pu(r,e,i){K(window).on("beforeunload",function(){K(r).each(function(){const o=K(this),h=o.attr(e);h&&fr(h,i(o),168)})})}function gu(r,e,i){K(r).each(function(){const o=K(this),h=o.attr(e),m=dr(h);h&&m!=null&&i(o,m)})}pu(".txe","id",r=>r.html());gu(".txe","id",(r,e)=>r.html(e));const tt=K(".txe"),Jf=K(".nts"),hn=K(".editor .hcon");let nr=0;const Js=r=>+String(r).replace(/\D+/g,"")||0,mu=(r,e=28)=>K("<div>").html(r||"").text().replace(/\s+/g," ").trim().slice(0,e),Xf=r=>(K('[data-ki^="ki"]').removeClass("activa"),K(`[data-ki="${r}"]`).addClass("activa")),mo=(r,e)=>{const i=K(`[data-ki="${r}"]`);i.length?i.text(e):K(`<div class="nt nt${Js(r)}" data-ki="${r}">${e}</div>`).appendTo(Jf)},yu=r=>{const e=dr(r)||"";tt.attr("id",r).html(e).focus(),Xf(r)},Yf=()=>{const r=K('[data-ki^="ki"]').map((i,o)=>Js(K(o).data("ki"))).get(),e=Object.keys(localStorage).filter(i=>/^ki\d+$/.test(i));nr=Math.max(nr,0,...r,...e.map(Js)),K.each(e,(i,o)=>{const h=dr(o);h&&mo(o,mu(h)+"...")})},vu=(()=>{let r;return(e=1800)=>{const i=K(".guardar_nota");i.length&&(i.addClass("bta").text("Guardado"),clearTimeout(r),r=setTimeout(()=>{i.removeClass("bta").text("Guardar")},e))}})();tt.on("input",()=>{const r=tt.attr("id");if(r){fr(r,tt.html(),24);const e=mu(dr(r));e&&K(`[data-ki="${r}"]`).text(e+"..."),vu()}});K(document).on("click",".guardar_nota",()=>{const r=tt.attr("id");r&&(fr(r,tt.html(),24),vu())});Yf();K(document).on("click",".agregar_nota",()=>{const r=`ki${++nr}`;mo(r,`Nota ${nr}`),yu(r)});K(document).on("click",'[data-ki^="ki"]',r=>yu(K(r.currentTarget).data("ki")));K(document).on("click",".limpiar_nota",()=>{const r=tt.attr("id");r&&(tt.empty(),go(r),mo(r,"Nota vacía..."),du(void 0,"bta","Eliminado","Eliminar"))});const Qf={".fa-bold":"bold",".fa-italic":"italic",".fa-underline":"underline",".fa-list-ul":"insertUnorderedList",".fa-list-ol":"insertOrderedList",".fa-align-left":"justifyLeft",".fa-align-center":"justifyCenter",".fa-align-right":"justifyRight",".fa-rotate-left":"undo"};K.each(Qf,(r,e)=>hn.find(r).attr("data-cmd",e));let is=null;const yo=()=>{const r=window.getSelection();if(!r||!r.rangeCount)return!1;const e=r.anchorNode;return e&&(tt[0]===e||K.contains(tt[0],e))},os=()=>{const r=window.getSelection();r&&r.rangeCount&&yo()&&(is=r.getRangeAt(0))},Zf=()=>{if(!is)return;const r=window.getSelection();r.removeAllRanges(),r.addRange(is)},ed=r=>{!yo()&&is&&Zf(),document.execCommand(r,!1,null),tt.focus(),os(),as()};hn.on("mousedown","i",r=>r.preventDefault()).on("click","i",function(){const r=K(this).data("cmd");r&&ed(r)});const td=[[".fa-bold","bold"],[".fa-italic","italic"],[".fa-underline","underline"],[".fa-list-ul","insertUnorderedList"],[".fa-list-ol","insertOrderedList"]],as=()=>{if(!yo())return void hn.find("i").removeClass("actv").addClass("is-disabled");hn.find("i").removeClass("is-disabled"),K.each(td,(i,o)=>hn.find(o[0]).toggleClass("actv",document.queryCommandState(o[1])));const r=document.queryCommandState("justifyCenter"),e=document.queryCommandState("justifyRight");hn.find(".fa-align-center").toggleClass("actv",r),hn.find(".fa-align-right").toggleClass("actv",e),hn.find(".fa-align-left").toggleClass("actv",!r&&!e)};document.addEventListener("selectionchange",()=>{os(),as()});tt.on("keyup mouseup input",()=>{os(),as()});os();as();const _u=K(".paste"),Zt=K(".ibx .bx");Zt.each((r,e)=>K(e).attr("data-k",`im${r+1}`));const us=K(".vw"),wu=K(".vw img"),fn=K(".vw .th");let Tn=-1;const cs=()=>Zt.map((r,e)=>K(e).attr("data-src")?r:null).get(),ir=()=>{const r=cs();fn.empty().append(r.map(e=>`<div class="ti" data-i="${e}"><img src="${Zt.eq(e).attr("data-src")}"></div>`)),fn.find(`[data-i="${Tn}"]`).addClass("on")},nd=(r,e)=>{const i=Zt.eq(r);i.attr("data-src",e).addClass("fill").html(`<img src="${e}">`),fr(i.attr("data-k"),e,720),ir()},id=()=>Zt.toArray().findIndex(r=>!K(r).attr("data-src")),rd=r=>{let e=id();e<0&&(e=0),nd(e,r)},sd=r=>{const e=new FileReader;e.onload=()=>rd(e.result),e.readAsDataURL(r)},Tu=r=>Array.from(r).forEach(e=>e&&/^image\//.test(e.type)&&sd(e));_u.on("paste",r=>{const e=r.originalEvent.clipboardData;e&&Tu(Array.from(e.items).map(i=>i.getAsFile()).filter(Boolean))});_u.on("dblclick",()=>{K('<input type="file" accept="image/*" multiple hidden>').appendTo("body").on("change",r=>{Tu(r.target.files),K(r.target).remove()}).trigger("click")});gu(".ibx .bx","data-k",(r,e)=>{e&&r.attr("data-src",e).addClass("fill").html(`<img src="${e}">`)});pu(".ibx .bx","data-k",r=>r.attr("data-src")||"");ir();const pr=r=>{const e=Zt.eq(r).attr("data-src");if(!e)return;Tn=r,wu.attr("src",e),us.addClass("show"),fn.find(".ti").removeClass("on"),fn.find(`[data-i="${r}"]`).addClass("on");const i=fn.find(`[data-i="${r}"]`);i.length&&fn.animate({scrollLeft:Math.max(0,i.position().left+fn.scrollLeft()-(fn.width()-i.width())/2)},180)},gr=()=>{us.removeClass("show"),Tn=-1},bu=()=>{const r=cs();if(!r.length)return gr();pr(r[(r.indexOf(Tn)+1)%r.length])},Eu=()=>{const r=cs();if(!r.length)return gr();pr(r[(r.indexOf(Tn)-1+r.length)%r.length])},Iu=()=>{const r=K("<a>").attr({href:wu.attr("src"),download:`wiimage-${Tn+1}.png`}).appendTo("body");r[0].click(),r.remove()},Su=()=>{const r=Zt.eq(Tn);go(r.attr("data-k")),r.removeAttr("data-src").removeClass("fill").empty(),ir();const e=cs();e.length?pr(e[0]):gr()};K(document).on("click",".ibx .bx",r=>{const e=Zt.index(r.currentTarget);K(r.currentTarget).attr("data-src")&&pr(e)});K(document).on("click",".vw .cls, .vw",r=>{(r.target===r.currentTarget||K(r.target).closest(".cls").length)&&gr()});K(document).on("click",".vw .nx",bu);K(document).on("click",".vw .pv",Eu);K(document).on("click",".vw .dl",Iu);K(document).on("click",".vw .rm",Su);K(document).on("click",".vw .th .ti",r=>pr(+K(r.currentTarget).data("i")));K(document).on("keydown",r=>{if(us.hasClass("show")){if(r.ctrlKey&&(r.key==="s"||r.key==="S"))return r.preventDefault(),Iu();if(r.key==="Escape")return gr();if(r.key==="ArrowRight"||r.key===">"||r.key===".")return bu();if(r.key==="ArrowLeft"||r.key==="<"||r.key===",")return Eu();if(r.key==="Delete"||r.key==="Supr"||r.key==="Backspace")return Su()}});K(".bt_borrar").click(function(){if(confirm("¿Eliminar todo lo guardado?")){try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}K('[data-ki^="ki"]').remove(),tt.removeAttr("id").empty(),nr=0,Zt.removeAttr("data-src").removeClass("fill").empty(),ir&&ir(),us.removeClass("show"),Tn=-1,du(this,"bta","Eliminado","Eliminar")}});
