// 1.8.2
(function(e,t){if(typeof define==="function"&&define.amd){define([],t)}else{e.htmx=e.htmx||t()}})(typeof self!=="undefined"?self:this,function(){return function(){"use strict";var U={onLoad:t,process:mt,on:X,off:F,trigger:$,ajax:or,find:R,findAll:O,closest:N,values:function(e,t){var r=jt(e,t||"post");return r.values},remove:q,addClass:L,removeClass:T,toggleClass:H,takeClass:A,defineExtension:dr,removeExtension:vr,logAll:C,logger:null,config:{historyEnabled:true,historyCacheSize:10,refreshOnHistoryMiss:false,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:true,indicatorClass:"htmx-indicator",requestClass:"htmx-request",addedClass:"htmx-added",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:true,inlineScriptNonce:"",attributesToSettle:["class","style","width","height"],withCredentials:false,timeout:0,wsReconnectDelay:"full-jitter",disableSelector:"[hx-disable], [data-hx-disable]",useTemplateFragments:false,scrollBehavior:"smooth",defaultFocusScroll:false},parseInterval:v,_:e,createEventSource:function(e){return new EventSource(e,{withCredentials:true})},createWebSocket:function(e){return new WebSocket(e,[])},version:"1.8.2"};var r={addTriggerHandler:ft,bodyContains:K,canAccessLocalStorage:E,filterValues:zt,hasAttribute:o,getAttributeValue:V,getClosestMatch:h,getExpressionVars:rr,getHeaders:_t,getInputValues:jt,getInternalData:W,getSwapSpecification:Gt,getTriggerSpecs:Xe,getTarget:re,makeFragment:g,mergeObjects:Y,makeSettleInfo:Zt,oobSwap:ae,selectAndSwap:Oe,settleImmediately:At,shouldCancel:Ve,triggerEvent:$,triggerErrorEvent:J,withExtensions:wt};var n=["get","post","put","delete","patch"];var i=n.map(function(e){return"[hx-"+e+"], [data-hx-"+e+"]"}).join(", ");function v(e){if(e==undefined){return undefined}if(e.slice(-2)=="ms"){return parseFloat(e.slice(0,-2))||undefined}if(e.slice(-1)=="s"){return parseFloat(e.slice(0,-1))*1e3||undefined}if(e.slice(-1)=="m"){return parseFloat(e.slice(0,-1))*1e3*60||undefined}return parseFloat(e)||undefined}function f(e,t){return e.getAttribute&&e.getAttribute(t)}function o(e,t){return e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute("data-"+t))}function V(e,t){return f(e,t)||f(e,"data-"+t)}function u(e){return e.parentElement}function _(){return document}function h(e,t){while(e&&!t(e)){e=u(e)}return e?e:null}function a(e,t,r){var n=V(t,r);var i=V(t,"hx-disinherit");if(e!==t&&i&&(i==="*"||i.split(" ").indexOf(r)>=0)){return"unset"}else{return n}}function z(t,r){var n=null;h(t,function(e){return n=a(t,e,r)});if(n!=="unset"){return n}}function d(e,t){var r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return r&&r.call(e,t)}function s(e){var t=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;var r=t.exec(e);if(r){return r[1].toLowerCase()}else{return""}}function l(e,t){var r=new DOMParser;var n=r.parseFromString(e,"text/html");var i=n.body;while(t>0){t--;i=i.firstChild}if(i==null){i=_().createDocumentFragment()}return i}function g(e){if(U.config.useTemplateFragments){var t=l("<body><template>"+e+"</template></body>",0);return t.querySelector("template").content}else{var r=s(e);switch(r){case"thead":case"tbody":case"tfoot":case"colgroup":case"caption":return l("<table>"+e+"</table>",1);case"col":return l("<table><colgroup>"+e+"</colgroup></table>",2);case"tr":return l("<table><tbody>"+e+"</tbody></table>",2);case"td":case"th":return l("<table><tbody><tr>"+e+"</tr></tbody></table>",3);case"script":return l("<div>"+e+"</div>",1);default:return l(e,0)}}}function Z(e){if(e){e()}}function p(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function m(e){return p(e,"Function")}function x(e){return p(e,"Object")}function W(e){var t="htmx-internal-data";var r=e[t];if(!r){r=e[t]={}}return r}function y(e){var t=[];if(e){for(var r=0;r<e.length;r++){t.push(e[r])}}return t}function G(e,t){if(e){for(var r=0;r<e.length;r++){t(e[r])}}}function b(e){var t=e.getBoundingClientRect();var r=t.top;var n=t.bottom;return r<window.innerHeight&&n>=0}function K(e){if(e.getRootNode()instanceof ShadowRoot){return _().body.contains(e.getRootNode().host)}else{return _().body.contains(e)}}function w(e){return e.trim().split(/\s+/)}function Y(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e}function S(e){try{return JSON.parse(e)}catch(e){St(e);return null}}function E(){var e="htmx:localStorageTest";try{localStorage.setItem(e,e);localStorage.removeItem(e);return true}catch(e){return false}}function e(e){return Qt(_().body,function(){return eval(e)})}function t(t){var e=U.on("htmx:load",function(e){t(e.detail.elt)});return e}function C(){U.logger=function(e,t,r){if(console){console.log(t,e,r)}}}function R(e,t){if(t){return e.querySelector(t)}else{return R(_(),e)}}function O(e,t){if(t){return e.querySelectorAll(t)}else{return O(_(),e)}}function q(e,t){e=D(e);if(t){setTimeout(function(){q(e)},t)}else{e.parentElement.removeChild(e)}}function L(e,t,r){e=D(e);if(r){setTimeout(function(){L(e,t)},r)}else{e.classList&&e.classList.add(t)}}function T(e,t,r){e=D(e);if(r){setTimeout(function(){T(e,t)},r)}else{if(e.classList){e.classList.remove(t);if(e.classList.length===0){e.removeAttribute("class")}}}}function H(e,t){e=D(e);e.classList.toggle(t)}function A(e,t){e=D(e);G(e.parentElement.children,function(e){T(e,t)});L(e,t)}function N(e,t){e=D(e);if(e.closest){return e.closest(t)}else{do{if(e==null||d(e,t)){return e}}while(e=e&&u(e))}}function I(e,t){if(t.indexOf("closest ")===0){return[N(e,t.substr(8))]}else if(t.indexOf("find ")===0){return[R(e,t.substr(5))]}else if(t.indexOf("next ")===0){return[k(e,t.substr(5))]}else if(t.indexOf("previous ")===0){return[M(e,t.substr(9))]}else if(t==="document"){return[document]}else if(t==="window"){return[window]}else{return _().querySelectorAll(t)}}var k=function(e,t){var r=_().querySelectorAll(t);for(var n=0;n<r.length;n++){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING){return i}}};var M=function(e,t){var r=_().querySelectorAll(t);for(var n=r.length-1;n>=0;n--){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_FOLLOWING){return i}}};function Q(e,t){if(t){return I(e,t)[0]}else{return I(_().body,e)[0]}}function D(e){if(p(e,"String")){return R(e)}else{return e}}function P(e,t,r){if(m(t)){return{target:_().body,event:e,listener:t}}else{return{target:D(e),event:t,listener:r}}}function X(t,r,n){pr(function(){var e=P(t,r,n);e.target.addEventListener(e.event,e.listener)});var e=m(r);return e?r:n}function F(t,r,n){pr(function(){var e=P(t,r,n);e.target.removeEventListener(e.event,e.listener)});return m(r)?r:n}var ee=_().createElement("output");function j(e,t){var r=z(e,t);if(r){if(r==="this"){return[te(e,t)]}else{var n=I(e,r);if(n.length===0){St('The selector "'+r+'" on '+t+" returned no matches!");return[ee]}else{return n}}}}function te(e,t){return h(e,function(e){return V(e,t)!=null})}function re(e){var t=z(e,"hx-target");if(t){if(t==="this"){return te(e,"hx-target")}else{return Q(e,t)}}else{var r=W(e);if(r.boosted){return _().body}else{return e}}}function B(e){var t=U.config.attributesToSettle;for(var r=0;r<t.length;r++){if(e===t[r]){return true}}return false}function ne(t,r){G(t.attributes,function(e){if(!r.hasAttribute(e.name)&&B(e.name)){t.removeAttribute(e.name)}});G(r.attributes,function(e){if(B(e.name)){t.setAttribute(e.name,e.value)}})}function ie(e,t){var r=gr(t);for(var n=0;n<r.length;n++){var i=r[n];try{if(i.isInlineSwap(e)){return true}}catch(e){St(e)}}return e==="outerHTML"}function ae(e,i,a){var t="#"+i.id;var o="outerHTML";if(e==="true"){}else if(e.indexOf(":")>0){o=e.substr(0,e.indexOf(":"));t=e.substr(e.indexOf(":")+1,e.length)}else{o=e}var r=_().querySelectorAll(t);if(r){G(r,function(e){var t;var r=i.cloneNode(true);t=_().createDocumentFragment();t.appendChild(r);if(!ie(o,e)){t=r}var n={shouldSwap:true,target:e,fragment:t};if(!$(e,"htmx:oobBeforeSwap",n))return;e=n.target;if(n["shouldSwap"]){Ce(o,e,e,t,a)}G(a.elts,function(e){$(e,"htmx:oobAfterSwap",n)})});i.parentNode.removeChild(i)}else{i.parentNode.removeChild(i);J(_().body,"htmx:oobErrorNoTarget",{content:i})}return e}function oe(e,t,r){var n=z(e,"hx-select-oob");if(n){var i=n.split(",");for(let e=0;e<i.length;e++){var a=i[e].split(":",2);var o=a[0];if(o.indexOf("#")===0){o=o.substring(1)}var s=a[1]||"true";var l=t.querySelector("#"+o);if(l){ae(s,l,r)}}}G(O(t,"[hx-swap-oob], [data-hx-swap-oob]"),function(e){var t=V(e,"hx-swap-oob");if(t!=null){ae(t,e,r)}})}function se(e){G(O(e,"[hx-preserve], [data-hx-preserve]"),function(e){var t=V(e,"id");var r=_().getElementById(t);if(r!=null){e.parentNode.replaceChild(r,e)}})}function le(n,e,i){G(e.querySelectorAll("[id]"),function(e){if(e.id&&e.id.length>0){var t=n.querySelector(e.tagName+"[id='"+e.id+"']");if(t&&t!==n){var r=e.cloneNode();ne(e,t);i.tasks.push(function(){ne(e,r)})}}})}function ue(e){return function(){T(e,U.config.addedClass);mt(e);ht(e);fe(e);$(e,"htmx:load")}}function fe(e){var t="[autofocus]";var r=d(e,t)?e:e.querySelector(t);if(r!=null){r.focus()}}function ce(e,t,r,n){le(e,r,n);while(r.childNodes.length>0){var i=r.firstChild;L(i,U.config.addedClass);e.insertBefore(i,t);if(i.nodeType!==Node.TEXT_NODE&&i.nodeType!==Node.COMMENT_NODE){n.tasks.push(ue(i))}}}function he(e,t){var r=0;while(r<e.length){t=(t<<5)-t+e.charCodeAt(r++)|0}return t}function de(e){var t=0;for(var r=0;r<e.attributes.length;r++){var n=e.attributes[r];if(n.value){t=he(n.name,t);t=he(n.value,t)}}return t}function ve(e){var t=W(e);if(t.webSocket){t.webSocket.close()}if(t.sseEventSource){t.sseEventSource.close()}if(t.listenerInfos){G(t.listenerInfos,function(e){if(e.on){e.on.removeEventListener(e.trigger,e.listener)}})}}function ge(e){$(e,"htmx:beforeCleanupElement");ve(e);if(e.children){G(e.children,function(e){ge(e)})}}function pe(e,t,r){if(e.tagName==="BODY"){return Se(e,t,r)}else{var n;var i=e.previousSibling;ce(u(e),e,t,r);if(i==null){n=u(e).firstChild}else{n=i.nextSibling}W(e).replacedWith=n;r.elts=[];while(n&&n!==e){if(n.nodeType===Node.ELEMENT_NODE){r.elts.push(n)}n=n.nextElementSibling}ge(e);u(e).removeChild(e)}}function me(e,t,r){return ce(e,e.firstChild,t,r)}function xe(e,t,r){return ce(u(e),e,t,r)}function ye(e,t,r){return ce(e,null,t,r)}function be(e,t,r){return ce(u(e),e.nextSibling,t,r)}function we(e,t,r){ge(e);return u(e).removeChild(e)}function Se(e,t,r){var n=e.firstChild;ce(e,n,t,r);if(n){while(n.nextSibling){ge(n.nextSibling);e.removeChild(n.nextSibling)}ge(n);e.removeChild(n)}}function Ee(e,t){var r=z(e,"hx-select");if(r){var n=_().createDocumentFragment();G(t.querySelectorAll(r),function(e){n.appendChild(e)});t=n}return t}function Ce(e,t,r,n,i){switch(e){case"none":return;case"outerHTML":pe(r,n,i);return;case"afterbegin":me(r,n,i);return;case"beforebegin":xe(r,n,i);return;case"beforeend":ye(r,n,i);return;case"afterend":be(r,n,i);return;case"delete":we(r,n,i);return;default:var a=gr(t);for(var o=0;o<a.length;o++){var f=a[o];try{var s=f.handleSwap(e,r,n,i);if(s){if(typeof s.length!=="undefined"){for(var l=0;l<s.length;l++){var u=s[l];if(u.nodeType!==Node.TEXT_NODE&&u.nodeType!==Node.COMMENT_NODE){i.tasks.push(ue(u))}}}return}}catch(e){St(e)}}if(e==="innerHTML"){Se(r,n,i)}else{Ce(U.config.defaultSwapStyle,t,r,n,i)}}}function Re(e){if(e.indexOf("<title")>-1){var t=e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,"");var r=t.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);if(r){return r[2]}}}function Oe(e,t,r,n,i){i.title=Re(n);var a=g(n);if(a){oe(r,a,i);a=Ee(r,a);se(a);return Ce(e,r,t,a,i)}}function qe(e,t,r){var n=e.getResponseHeader(t);if(n.indexOf("{")===0){var i=S(n);for(var a in i){if(i.hasOwnProperty(a)){var o=i[a];if(!x(o)){o={value:o}}$(r,a,o)}}}else{$(r,n,[])}}var Le=/\s/;var Te=/[\s,]/;var He=/[_$a-zA-Z]/;var Ae=/[_$a-zA-Z0-9]/;var Ne=['"',"'","/"];var Ie=/[^\s]/;function ke(e){var t=[];var r=0;while(r<e.length){if(He.exec(e.charAt(r))){var n=r;while(Ae.exec(e.charAt(r+1))){r++}t.push(e.substr(n,r-n+1))}else if(Ne.indexOf(e.charAt(r))!==-1){var i=e.charAt(r);var n=r;r++;while(r<e.length&&e.charAt(r)!==i){if(e.charAt(r)==="\\"){r++}r++}t.push(e.substr(n,r-n+1))}else{var a=e.charAt(r);t.push(a)}r++}return t}function Me(e,t,r){return He.exec(e.charAt(0))&&e!=="true"&&e!=="false"&&e!=="this"&&e!==r&&t!=="."}function De(e,t,r){if(t[0]==="["){t.shift();var n=1;var i=" return (function("+r+"){ return (";var a=null;while(t.length>0){var o=t[0];if(o==="]"){n--;if(n===0){if(a===null){i=i+"true"}t.shift();i+=")})";try{var s=Qt(e,function(){return Function(i)()},function(){return true});s.source=i;return s}catch(e){J(_().body,"htmx:syntax:error",{error:e,source:i});return null}}}else if(o==="["){n++}if(Me(o,a,r)){i+="(("+r+"."+o+") ? ("+r+"."+o+") : (window."+o+"))"}else{i=i+o}a=t.shift()}}}function c(e,t){var r="";while(e.length>0&&!e[0].match(t)){r+=e.shift()}return r}var Pe="input, textarea, select";function Xe(e){var t=V(e,"hx-trigger");var r=[];if(t){var n=ke(t);do{c(n,Ie);var f=n.length;var i=c(n,/[,\[\s]/);if(i!==""){if(i==="every"){var a={trigger:"every"};c(n,Ie);a.pollInterval=v(c(n,/[,\[\s]/));c(n,Ie);var o=De(e,n,"event");if(o){a.eventFilter=o}r.push(a)}else if(i.indexOf("sse:")===0){r.push({trigger:"sse",sseEvent:i.substr(4)})}else{var s={trigger:i};var o=De(e,n,"event");if(o){s.eventFilter=o}while(n.length>0&&n[0]!==","){c(n,Ie);var l=n.shift();if(l==="changed"){s.changed=true}else if(l==="once"){s.once=true}else if(l==="consume"){s.consume=true}else if(l==="delay"&&n[0]===":"){n.shift();s.delay=v(c(n,Te))}else if(l==="from"&&n[0]===":"){n.shift();var u=c(n,Te);if(u==="closest"||u==="find"||u==="next"||u==="previous"){n.shift();u+=" "+c(n,Te)}s.from=u}else if(l==="target"&&n[0]===":"){n.shift();s.target=c(n,Te)}else if(l==="throttle"&&n[0]===":"){n.shift();s.throttle=v(c(n,Te))}else if(l==="queue"&&n[0]===":"){n.shift();s.queue=c(n,Te)}else if((l==="root"||l==="threshold")&&n[0]===":"){n.shift();s[l]=c(n,Te)}else{J(e,"htmx:syntax:error",{token:n.shift()})}}r.push(s)}}if(n.length===f){J(e,"htmx:syntax:error",{token:n.shift()})}c(n,Ie)}while(n[0]===","&&n.shift())}if(r.length>0){return r}else if(d(e,"form")){return[{trigger:"submit"}]}else if(d(e,'input[type="button"]')){return[{trigger:"click"}]}else if(d(e,Pe)){return[{trigger:"change"}]}else{return[{trigger:"click"}]}}function Fe(e){W(e).cancelled=true}function je(e,t,r){var n=W(e);n.timeout=setTimeout(function(){if(K(e)&&n.cancelled!==true){if(!ze(r,yt("hx:poll:trigger",{triggerSpec:r,target:e}))){t(e)}je(e,t,r)}},r.pollInterval)}function Be(e){return location.hostname===e.hostname&&f(e,"href")&&f(e,"href").indexOf("#")!==0}function Ue(t,r,e){if(t.tagName==="A"&&Be(t)&&(t.target===""||t.target==="_self")||t.tagName==="FORM"){r.boosted=true;var n,i;if(t.tagName==="A"){n="get";i=f(t,"href")}else{var a=f(t,"method");n=a?a.toLowerCase():"get";if(n==="get"){}i=f(t,"action")}e.forEach(function(e){We(t,function(e){lr(n,i,t,e)},r,e,true)})}}function Ve(e,t){if(e.type==="submit"||e.type==="click"){if(t.tagName==="FORM"){return true}if(d(t,'input[type="submit"], button')&&N(t,"form")!==null){return true}if(t.tagName==="A"&&t.href&&(t.getAttribute("href")==="#"||t.getAttribute("href").indexOf("#")!==0)){return true}}return false}function _e(e,t){return W(e).boosted&&e.tagName==="A"&&t.type==="click"&&(t.ctrlKey||t.metaKey)}function ze(e,t){var r=e.eventFilter;if(r){try{return r(t)!==true}catch(e){J(_().body,"htmx:eventFilter:error",{error:e,source:r.source});return true}}return false}function We(a,o,e,s,l){var t;if(s.from){t=I(a,s.from)}else{t=[a]}G(t,function(n){var i=function(e){if(!K(a)){n.removeEventListener(s.trigger,i);return}if(_e(a,e)){return}if(l||Ve(e,a)){e.preventDefault()}if(ze(s,e)){return}var t=W(e);t.triggerSpec=s;if(t.handledFor==null){t.handledFor=[]}var r=W(a);if(t.handledFor.indexOf(a)<0){t.handledFor.push(a);if(s.consume){e.stopPropagation()}if(s.target&&e.target){if(!d(e.target,s.target)){return}}if(s.once){if(r.triggeredOnce){return}else{r.triggeredOnce=true}}if(s.changed){if(r.lastValue===a.value){return}else{r.lastValue=a.value}}if(r.delayed){clearTimeout(r.delayed)}if(r.throttle){return}if(s.throttle){if(!r.throttle){o(a,e);r.throttle=setTimeout(function(){r.throttle=null},s.throttle)}}else if(s.delay){r.delayed=setTimeout(function(){o(a,e)},s.delay)}else{o(a,e)}}};if(e.listenerInfos==null){e.listenerInfos=[]}e.listenerInfos.push({trigger:s.trigger,listener:i,on:n});n.addEventListener(s.trigger,i)})}var Ge=false;var Je=null;function $e(){if(!Je){Je=function(){Ge=true};window.addEventListener("scroll",Je);setInterval(function(){if(Ge){Ge=false;G(_().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"),function(e){Ze(e)})}},200)}}function Ze(t){if(!o(t,"data-hx-revealed")&&b(t)){t.setAttribute("data-hx-revealed","true");var e=W(t);if(e.initHash){$(t,"revealed")}else{t.addEventListener("htmx:afterProcessNode",function(e){$(t,"revealed")},{once:true})}}}function Ke(e,t,r){var n=w(r);for(var i=0;i<n.length;i++){var a=n[i].split(/:(.+)/);if(a[0]==="connect"){Ye(e,a[1],0)}if(a[0]==="send"){et(e)}}}function Ye(s,r,n){if(!K(s)){return}if(r.indexOf("/")==0){var e=location.hostname+(location.port?":"+location.port:"");if(location.protocol=="https:"){r="wss://"+e+r}else if(location.protocol=="http:"){r="ws://"+e+r}}var t=U.createWebSocket(r);t.onerror=function(e){J(s,"htmx:wsError",{error:e,socket:t});Qe(s)};t.onclose=function(e){if([1006,1012,1013].indexOf(e.code)>=0){var t=tt(n);setTimeout(function(){Ye(s,r,n+1)},t)}};t.onopen=function(e){n=0};W(s).webSocket=t;t.addEventListener("message",function(e){if(Qe(s)){return}var t=e.data;wt(s,function(e){t=e.transformResponse(t,null,s)});var r=Zt(s);var n=g(t);var i=y(n.children);for(var a=0;a<i.length;a++){var o=i[a];ae(V(o,"hx-swap-oob")||"true",o,r)}At(r.tasks)})}function Qe(e){if(!K(e)){W(e).webSocket.close();return true}}function et(u){var f=h(u,function(e){return W(e).webSocket!=null});if(f){u.addEventListener(Xe(u)[0].trigger,function(e){var t=W(f).webSocket;var r=_t(u,f);var n=jt(u,"post");var i=n.errors;var a=n.values;var o=rr(u);var s=Y(a,o);var l=zt(s,u);l["HEADERS"]=r;if(i&&i.length>0){$(u,"htmx:validation:halted",i);return}t.send(JSON.stringify(l));if(Ve(e,u)){e.preventDefault()}})}else{J(u,"htmx:noWebSocketSourceError")}}function tt(e){var t=U.config.wsReconnectDelay;if(typeof t==="function"){return t(e)}if(t==="full-jitter"){var r=Math.min(e,6);var n=1e3*Math.pow(2,r);return n*Math.random()}St('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"')}function rt(e,t,r){var n=w(r);for(var i=0;i<n.length;i++){var a=n[i].split(/:(.+)/);if(a[0]==="connect"){nt(e,a[1])}if(a[0]==="swap"){it(e,a[1])}}}function nt(t,e){var r=U.createEventSource(e);r.onerror=function(e){J(t,"htmx:sseError",{error:e,source:r});ot(t)};W(t).sseEventSource=r}function it(a,o){var s=h(a,st);if(s){var l=W(s).sseEventSource;var u=function(e){if(ot(s)){l.removeEventListener(o,u);return}var t=e.data;wt(a,function(e){t=e.transformResponse(t,null,a)});var r=Gt(a);var n=re(a);var i=Zt(a);Oe(r.swapStyle,a,n,t,i);At(i.tasks);$(a,"htmx:sseMessage",e)};W(a).sseListener=u;l.addEventListener(o,u)}else{J(a,"htmx:noSSESourceError")}}function at(e,t,r){var n=h(e,st);if(n){var i=W(n).sseEventSource;var a=function(){if(!ot(n)){if(K(e)){t(e)}else{i.removeEventListener(r,a)}}};W(e).sseListener=a;i.addEventListener(r,a)}else{J(e,"htmx:noSSESourceError")}}function ot(e){if(!K(e)){W(e).sseEventSource.close();return true}}function st(e){return W(e).sseEventSource!=null}function lt(e,t,r,n){var i=function(){if(!r.loaded){r.loaded=true;t(e)}};if(n){setTimeout(i,n)}else{i()}}function ut(t,i,e){var a=false;G(n,function(r){if(o(t,"hx-"+r)){var n=V(t,"hx-"+r);a=true;i.path=n;i.verb=r;e.forEach(function(e){ft(t,e,i,function(e,t){lr(r,n,e,t)})})}});return a}function ft(n,e,t,r){if(e.sseEvent){at(n,r,e.sseEvent)}else if(e.trigger==="revealed"){$e();We(n,r,t,e);Ze(n)}else if(e.trigger==="intersect"){var i={};if(e.root){i.root=Q(n,e.root)}if(e.threshold){i.threshold=parseFloat(e.threshold)}var a=new IntersectionObserver(function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.isIntersecting){$(n,"intersect");break}}},i);a.observe(n);We(n,r,t,e)}else if(e.trigger==="load"){if(!ze(e,yt("load",{elt:n}))){lt(n,r,t,e.delay)}}else if(e.pollInterval){t.polling=true;je(n,r,e)}else{We(n,r,t,e)}}function ct(e){if(e.type==="text/javascript"||e.type==="module"||e.type===""){var t=_().createElement("script");G(e.attributes,function(e){t.setAttribute(e.name,e.value)});t.textContent=e.textContent;t.async=false;if(U.config.inlineScriptNonce){t.nonce=U.config.inlineScriptNonce}var r=e.parentElement;try{r.insertBefore(t,e)}catch(e){St(e)}finally{r.removeChild(e)}}}function ht(e){if(d(e,"script")){ct(e)}G(O(e,"script"),function(e){ct(e)})}function dt(){return document.querySelector("[hx-boost], [data-hx-boost]")}function vt(e){if(e.querySelectorAll){var t=dt()?", a, form":"";var r=e.querySelectorAll(i+t+", [hx-sse], [data-hx-sse], [hx-ws],"+" [data-hx-ws], [hx-ext], [data-hx-ext]");return r}else{return[]}}function gt(r){var e=function(e){if(d(e.target,"button, input[type='submit']")){var t=W(r);t.lastButtonClicked=e.target}};r.addEventListener("click",e);r.addEventListener("focusin",e);r.addEventListener("focusout",function(e){var t=W(r);t.lastButtonClicked=null})}function pt(e){if(e.closest&&e.closest(U.config.disableSelector)){return}var t=W(e);if(t.initHash!==de(e)){t.initHash=de(e);ve(e);$(e,"htmx:beforeProcessNode");if(e.value){t.lastValue=e.value}var r=Xe(e);var n=ut(e,t,r);if(!n&&z(e,"hx-boost")==="true"){Ue(e,t,r)}if(e.tagName==="FORM"){gt(e)}var i=V(e,"hx-sse");if(i){rt(e,t,i)}var a=V(e,"hx-ws");if(a){Ke(e,t,a)}$(e,"htmx:afterProcessNode")}}function mt(e){e=D(e);pt(e);G(vt(e),function(e){pt(e)})}function xt(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function yt(e,t){var r;if(window.CustomEvent&&typeof window.CustomEvent==="function"){r=new CustomEvent(e,{bubbles:true,cancelable:true,detail:t})}else{r=_().createEvent("CustomEvent");r.initCustomEvent(e,true,true,t)}return r}function J(e,t,r){$(e,t,Y({error:t},r))}function bt(e){return e==="htmx:afterProcessNode"}function wt(e,t){G(gr(e),function(e){try{t(e)}catch(e){St(e)}})}function St(e){if(console.error){console.error(e)}else if(console.log){console.log("ERROR: ",e)}}function $(e,t,r){e=D(e);if(r==null){r={}}r["elt"]=e;var n=yt(t,r);if(U.logger&&!bt(t)){U.logger(e,t,r)}if(r.error){St(r.error);$(e,"htmx:error",{errorInfo:r})}var i=e.dispatchEvent(n);var a=xt(t);if(i&&a!==t){var o=yt(a,n.detail);i=i&&e.dispatchEvent(o)}wt(e,function(e){i=i&&e.onEvent(t,n)!==false});return i}var Et=location.pathname+location.search;function Ct(){var e=_().querySelector("[hx-history-elt],[data-hx-history-elt]");return e||_().body}function Rt(e,t,r,n){if(!E()){return}var i=S(localStorage.getItem("htmx-history-cache"))||[];for(var a=0;a<i.length;a++){if(i[a].url===e){i.splice(a,1);break}}i.push({url:e,content:t,title:r,scroll:n});while(i.length>U.config.historyCacheSize){i.shift()}while(i.length>0){try{localStorage.setItem("htmx-history-cache",JSON.stringify(i));break}catch(e){J(_().body,"htmx:historyCacheError",{cause:e,cache:i});i.shift()}}}function Ot(e){if(!E()){return null}var t=S(localStorage.getItem("htmx-history-cache"))||[];for(var r=0;r<t.length;r++){if(t[r].url===e){return t[r]}}return null}function qt(e){var t=U.config.requestClass;var r=e.cloneNode(true);G(O(r,"."+t),function(e){T(e,t)});return r.innerHTML}function Lt(){var e=Ct();var t=Et||location.pathname+location.search;$(_().body,"htmx:beforeHistorySave",{path:t,historyElt:e});if(U.config.historyEnabled)history.replaceState({htmx:true},_().title,window.location.href);Rt(t,qt(e),_().title,window.scrollY)}function Tt(e){if(U.config.historyEnabled)history.pushState({htmx:true},"",e);Et=e}function Ht(e){if(U.config.historyEnabled)history.replaceState({htmx:true},"",e);Et=e}function At(e){G(e,function(e){e.call()})}function Nt(a){var e=new XMLHttpRequest;var o={path:a,xhr:e};$(_().body,"htmx:historyCacheMiss",o);e.open("GET",a,true);e.setRequestHeader("HX-History-Restore-Request","true");e.onload=function(){if(this.status>=200&&this.status<400){$(_().body,"htmx:historyCacheMissLoad",o);var e=g(this.response);e=e.querySelector("[hx-history-elt],[data-hx-history-elt]")||e;var t=Ct();var r=Zt(t);var n=Re(this.response);if(n){var i=R("title");if(i){i.innerHTML=n}else{window.document.title=n}}Se(t,e,r);At(r.tasks);Et=a;$(_().body,"htmx:historyRestore",{path:a})}else{J(_().body,"htmx:historyCacheMissLoadError",o)}};e.send()}function It(e){Lt();e=e||location.pathname+location.search;var t=Ot(e);if(t){var r=g(t.content);var n=Ct();var i=Zt(n);Se(n,r,i);At(i.tasks);document.title=t.title;window.scrollTo(0,t.scroll);Et=e;$(_().body,"htmx:historyRestore",{path:e})}else{if(U.config.refreshOnHistoryMiss){window.location.reload(true)}else{Nt(e)}}}function kt(e){var t=j(e,"hx-indicator");if(t==null){t=[e]}G(t,function(e){var t=W(e);t.requestCount=(t.requestCount||0)+1;e.classList["add"].call(e.classList,U.config.requestClass)});return t}function Mt(e){G(e,function(e){var t=W(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.classList["remove"].call(e.classList,U.config.requestClass)}})}function Dt(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.isSameNode(t)){return true}}return false}function Pt(e){if(e.name===""||e.name==null||e.disabled){return false}if(e.type==="button"||e.type==="submit"||e.tagName==="image"||e.tagName==="reset"||e.tagName==="file"){return false}if(e.type==="checkbox"||e.type==="radio"){return e.checked}return true}function Xt(t,r,n,e,i){if(e==null||Dt(t,e)){return}else{t.push(e)}if(Pt(e)){var a=f(e,"name");var o=e.value;if(e.multiple){o=y(e.querySelectorAll("option:checked")).map(function(e){return e.value})}if(e.files){o=y(e.files)}if(a!=null&&o!=null){var s=r[a];if(s){if(Array.isArray(s)){if(Array.isArray(o)){r[a]=s.concat(o)}else{s.push(o)}}else{if(Array.isArray(o)){r[a]=[s].concat(o)}else{r[a]=[s,o]}}}else{r[a]=o}}if(i){Ft(e,n)}}if(d(e,"form")){var l=e.elements;G(l,function(e){Xt(t,r,n,e,i)})}}function Ft(e,t){if(e.willValidate){$(e,"htmx:validation:validate");if(!e.checkValidity()){t.push({elt:e,message:e.validationMessage,validity:e.validity});$(e,"htmx:validation:failed",{message:e.validationMessage,validity:e.validity})}}}function jt(e,t){var r=[];var n={};var i={};var a=[];var o=W(e);var s=d(e,"form")&&e.noValidate!==true||V(e,"hx-validate")==="true";if(o.lastButtonClicked){s=s&&o.lastButtonClicked.formNoValidate!==true}if(t!=="get"){Xt(r,i,a,N(e,"form"),s)}Xt(r,n,a,e,s);if(o.lastButtonClicked){var l=f(o.lastButtonClicked,"name");if(l){n[l]=o.lastButtonClicked.value}}var u=j(e,"hx-include");G(u,function(e){Xt(r,n,a,e,s);if(!d(e,"form")){G(e.querySelectorAll(Pe),function(e){Xt(r,n,a,e,s)})}});n=Y(n,i);return{errors:a,values:n}}function Bt(e,t,r){if(e!==""){e+="&"}if(String(r)==="[object Object]"){r=JSON.stringify(r)}var n=encodeURIComponent(r);e+=encodeURIComponent(t)+"="+n;return e}function Ut(e){var t="";for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){G(n,function(e){t=Bt(t,r,e)})}else{t=Bt(t,r,n)}}}return t}function Vt(e){var t=new FormData;for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){G(n,function(e){t.append(r,e)})}else{t.append(r,n)}}}return t}function _t(e,t,r){var n={"HX-Request":"true","HX-Trigger":f(e,"id"),"HX-Trigger-Name":f(e,"name"),"HX-Target":V(t,"id"),"HX-Current-URL":_().location.href};Yt(e,"hx-headers",false,n);if(r!==undefined){n["HX-Prompt"]=r}if(W(e).boosted){n["HX-Boosted"]="true"}return n}function zt(t,e){var r=z(e,"hx-params");if(r){if(r==="none"){return{}}else if(r==="*"){return t}else if(r.indexOf("not ")===0){G(r.substr(4).split(","),function(e){e=e.trim();delete t[e]});return t}else{var n={};G(r.split(","),function(e){e=e.trim();n[e]=t[e]});return n}}else{return t}}function Wt(e){return f(e,"href")&&f(e,"href").indexOf("#")>=0}function Gt(e,t){var r=t?t:z(e,"hx-swap");var n={swapStyle:W(e).boosted?"innerHTML":U.config.defaultSwapStyle,swapDelay:U.config.defaultSwapDelay,settleDelay:U.config.defaultSettleDelay};if(W(e).boosted&&!Wt(e)){n["show"]="top"}if(r){var i=w(r);if(i.length>0){n["swapStyle"]=i[0];for(var a=1;a<i.length;a++){var o=i[a];if(o.indexOf("swap:")===0){n["swapDelay"]=v(o.substr(5))}if(o.indexOf("settle:")===0){n["settleDelay"]=v(o.substr(7))}if(o.indexOf("scroll:")===0){var s=o.substr(7);var l=s.split(":");var f=l.pop();var u=l.length>0?l.join(":"):null;n["scroll"]=f;n["scrollTarget"]=u}if(o.indexOf("show:")===0){var c=o.substr(5);var l=c.split(":");var h=l.pop();var u=l.length>0?l.join(":"):null;n["show"]=h;n["showTarget"]=u}if(o.indexOf("focus-scroll:")===0){var d=o.substr("focus-scroll:".length);n["focusScroll"]=d=="true"}}}}return n}function Jt(e){return z(e,"hx-encoding")==="multipart/form-data"||d(e,"form")&&f(e,"enctype")==="multipart/form-data"}function $t(t,r,n){var i=null;wt(r,function(e){if(i==null){i=e.encodeParameters(t,n,r)}});if(i!=null){return i}else{if(Jt(r)){return Vt(n)}else{return Ut(n)}}}function Zt(e){return{tasks:[],elts:[e]}}function Kt(e,t){var r=e[0];var n=e[e.length-1];if(t.scroll){var i=null;if(t.scrollTarget){i=Q(r,t.scrollTarget)}if(t.scroll==="top"&&(r||i)){i=i||r;i.scrollTop=0}if(t.scroll==="bottom"&&(n||i)){i=i||n;i.scrollTop=i.scrollHeight}}if(t.show){var i=null;if(t.showTarget){var a=t.showTarget;if(t.showTarget==="window"){a="body"}i=Q(r,a)}if(t.show==="top"&&(r||i)){i=i||r;i.scrollIntoView({block:"start",behavior:U.config.scrollBehavior})}if(t.show==="bottom"&&(n||i)){i=i||n;i.scrollIntoView({block:"end",behavior:U.config.scrollBehavior})}}}function Yt(e,t,r,n){if(n==null){n={}}if(e==null){return n}var i=V(e,t);if(i){var a=i.trim();var o=r;if(a==="unset"){return null}if(a.indexOf("javascript:")===0){a=a.substr(11);o=true}else if(a.indexOf("js:")===0){a=a.substr(3);o=true}if(a.indexOf("{")!==0){a="{"+a+"}"}var s;if(o){s=Qt(e,function(){return Function("return ("+a+")")()},{})}else{s=S(a)}for(var l in s){if(s.hasOwnProperty(l)){if(n[l]==null){n[l]=s[l]}}}}return Yt(u(e),t,r,n)}function Qt(e,t,r){if(U.config.allowEval){return t()}else{J(e,"htmx:evalDisallowedError");return r}}function er(e,t){return Yt(e,"hx-vars",true,t)}function tr(e,t){return Yt(e,"hx-vals",false,t)}function rr(e){return Y(er(e),tr(e))}function nr(t,r,n){if(n!==null){try{t.setRequestHeader(r,n)}catch(e){t.setRequestHeader(r,encodeURIComponent(n));t.setRequestHeader(r+"-URI-AutoEncoded","true")}}}function ir(t){if(t.responseURL&&typeof URL!=="undefined"){try{var e=new URL(t.responseURL);return e.pathname+e.search}catch(e){J(_().body,"htmx:badResponseUrl",{url:t.responseURL})}}}function ar(e,t){return e.getAllResponseHeaders().match(t)}function or(e,t,r){e=e.toLowerCase();if(r){if(r instanceof Element||p(r,"String")){return lr(e,t,null,null,{targetOverride:D(r),returnPromise:true})}else{return lr(e,t,D(r.source),r.event,{handler:r.handler,headers:r.headers,values:r.values,targetOverride:D(r.target),swapOverride:r.swap,returnPromise:true})}}else{return lr(e,t,null,null,{returnPromise:true})}}function sr(e){var t=[];while(e){t.push(e);e=e.parentElement}return t}function lr(e,t,n,f,r){var c=null;var h=null;r=r!=null?r:{};if(r.returnPromise&&typeof Promise!=="undefined"){var d=new Promise(function(e,t){c=e;h=t})}if(n==null){n=_().body}var v=r.handler||fr;if(!K(n)){return}var g=r.targetOverride||re(n);if(g==null||g==ee){J(n,"htmx:targetError",{target:V(n,"hx-target")});return}var p=n;var i=W(n);var a=z(n,"hx-sync");var m=null;var x=false;if(a){var y=a.split(":");var b=y[0].trim();if(b==="this"){p=te(n,"hx-sync")}else{p=Q(n,b)}a=(y[1]||"drop").trim();i=W(p);if(a==="drop"&&i.xhr&&i.abortable!==true){return}else if(a==="abort"){if(i.xhr){return}else{x=true}}else if(a==="replace"){$(p,"htmx:abort")}else if(a.indexOf("queue")===0){var w=a.split(" ");m=(w[1]||"last").trim()}}if(i.xhr){if(i.abortable){$(p,"htmx:abort")}else{if(m==null){if(f){var S=W(f);if(S&&S.triggerSpec&&S.triggerSpec.queue){m=S.triggerSpec.queue}}if(m==null){m="last"}}if(i.queuedRequests==null){i.queuedRequests=[]}if(m==="first"&&i.queuedRequests.length===0){i.queuedRequests.push(function(){lr(e,t,n,f,r)})}else if(m==="all"){i.queuedRequests.push(function(){lr(e,t,n,f,r)})}else if(m==="last"){i.queuedRequests=[];i.queuedRequests.push(function(){lr(e,t,n,f,r)})}return}}var o=new XMLHttpRequest;i.xhr=o;i.abortable=x;var s=function(){i.xhr=null;i.abortable=false;if(i.queuedRequests!=null&&i.queuedRequests.length>0){var e=i.queuedRequests.shift();e()}};var E=z(n,"hx-prompt");if(E){var C=prompt(E);if(C===null||!$(n,"htmx:prompt",{prompt:C,target:g})){Z(c);s();return d}}var R=z(n,"hx-confirm");if(R){if(!confirm(R)){Z(c);s();return d}}var O=_t(n,g,C);if(r.headers){O=Y(O,r.headers)}var q=jt(n,e);var L=q.errors;var T=q.values;if(r.values){T=Y(T,r.values)}var H=rr(n);var A=Y(T,H);var N=zt(A,n);if(e!=="get"&&!Jt(n)){O["Content-Type"]="application/x-www-form-urlencoded"}if(t==null||t===""){t=_().location.href}var I=Yt(n,"hx-request");var l={parameters:N,unfilteredParameters:A,headers:O,target:g,verb:e,errors:L,withCredentials:r.credentials||I.credentials||U.config.withCredentials,timeout:r.timeout||I.timeout||U.config.timeout,path:t,triggeringEvent:f};if(!$(n,"htmx:configRequest",l)){Z(c);s();return d}t=l.path;e=l.verb;O=l.headers;N=l.parameters;L=l.errors;if(L&&L.length>0){$(n,"htmx:validation:halted",l);Z(c);s();return d}var k=t.split("#");var M=k[0];var D=k[1];var P=null;if(e==="get"){P=M;var X=Object.keys(N).length!==0;if(X){if(P.indexOf("?")<0){P+="?"}else{P+="&"}P+=Ut(N);if(D){P+="#"+D}}o.open("GET",P,true)}else{o.open(e.toUpperCase(),t,true)}o.overrideMimeType("text/html");o.withCredentials=l.withCredentials;o.timeout=l.timeout;if(I.noHeaders){}else{for(var F in O){if(O.hasOwnProperty(F)){var j=O[F];nr(o,F,j)}}}var u={xhr:o,target:g,requestConfig:l,etc:r,pathInfo:{requestPath:t,finalRequestPath:P||t,anchor:D}};o.onload=function(){try{var e=sr(n);u.pathInfo.responsePath=ir(o);v(n,u);Mt(B);$(n,"htmx:afterRequest",u);$(n,"htmx:afterOnLoad",u);if(!K(n)){var t=null;while(e.length>0&&t==null){var r=e.shift();if(K(r)){t=r}}if(t){$(t,"htmx:afterRequest",u);$(t,"htmx:afterOnLoad",u)}}Z(c);s()}catch(e){J(n,"htmx:onLoadError",Y({error:e},u));throw e}};o.onerror=function(){Mt(B);J(n,"htmx:afterRequest",u);J(n,"htmx:sendError",u);Z(h);s()};o.onabort=function(){Mt(B);J(n,"htmx:afterRequest",u);J(n,"htmx:sendAbort",u);Z(h);s()};o.ontimeout=function(){Mt(B);J(n,"htmx:afterRequest",u);J(n,"htmx:timeout",u);Z(h);s()};if(!$(n,"htmx:beforeRequest",u)){Z(c);s();return d}var B=kt(n);G(["loadstart","loadend","progress","abort"],function(t){G([o,o.upload],function(e){e.addEventListener(t,function(e){$(n,"htmx:xhr:"+t,{lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total})})})});$(n,"htmx:beforeSend",u);o.send(e==="get"?null:$t(o,n,N));return d}function ur(e,t){var r=t.xhr;var n=null;var i=null;if(ar(r,/HX-Push:/i)){n=r.getResponseHeader("HX-Push");i="push"}else if(ar(r,/HX-Push-Url:/i)){n=r.getResponseHeader("HX-Push-Url");i="push"}else if(ar(r,/HX-Replace-Url:/i)){n=r.getResponseHeader("HX-Replace-Url");i="replace"}if(n){if(n==="false"){return{}}else{return{type:i,path:n}}}var a=t.pathInfo.finalRequestPath;var o=t.pathInfo.responsePath;var s=z(e,"hx-push-url");var f=z(e,"hx-replace-url");var c=W(e).boosted;var l=null;var u=null;if(s){l="push";u=s}else if(f){l="replace";u=f}else if(c){l="push";u=o||a}if(u){if(u==="false"){return{}}if(u==="true"){u=o||a}if(t.pathInfo.anchor&&u.indexOf("#")===-1){u=u+"#"+t.pathInfo.anchor}return{type:l,path:u}}else{return{}}}function fr(s,l){var u=l.xhr;var f=l.target;var n=l.etc;if(!$(s,"htmx:beforeOnLoad",l))return;if(ar(u,/HX-Trigger:/i)){qe(u,"HX-Trigger",s)}if(ar(u,/HX-Location:/i)){Lt();var e=u.getResponseHeader("HX-Location");var c;if(e.indexOf("{")===0){c=S(e);e=c["path"];delete c["path"]}or("GET",e,c).then(()=>{Tt(e)});return}if(ar(u,/HX-Redirect:/i)){location.href=u.getResponseHeader("HX-Redirect");return}if(ar(u,/HX-Refresh:/i)){if("true"===u.getResponseHeader("HX-Refresh")){location.reload();return}}if(ar(u,/HX-Retarget:/i)){l.target=_().querySelector(u.getResponseHeader("HX-Retarget"))}var h=ur(s,l);var i=u.status>=200&&u.status<400&&u.status!==204;var d=u.response;var t=u.status>=400;var r=Y({shouldSwap:i,serverResponse:d,isError:t},l);if(!$(f,"htmx:beforeSwap",r))return;f=r.target;d=r.serverResponse;t=r.isError;l.failed=t;l.successful=!t;if(r.shouldSwap){if(u.status===286){Fe(s)}wt(s,function(e){d=e.transformResponse(d,u,s)});if(h.type){Lt()}var a=n.swapOverride;if(ar(u,/HX-Reswap:/i)){a=u.getResponseHeader("HX-Reswap")}var c=Gt(s,a);f.classList.add(U.config.swappingClass);var o=function(){try{var e=document.activeElement;var t={};try{t={elt:e,start:e?e.selectionStart:null,end:e?e.selectionEnd:null}}catch(e){}var n=Zt(f);Oe(c.swapStyle,f,s,d,n);if(t.elt&&!K(t.elt)&&t.elt.id){var r=document.getElementById(t.elt.id);var i={preventScroll:c.focusScroll!==undefined?!c.focusScroll:!U.config.defaultFocusScroll};if(r){if(t.start&&r.setSelectionRange){r.setSelectionRange(t.start,t.end)}r.focus(i)}}f.classList.remove(U.config.swappingClass);G(n.elts,function(e){if(e.classList){e.classList.add(U.config.settlingClass)}$(e,"htmx:afterSwap",l)});if(ar(u,/HX-Trigger-After-Swap:/i)){var a=s;if(!K(s)){a=_().body}qe(u,"HX-Trigger-After-Swap",a)}var o=function(){G(n.tasks,function(e){e.call()});G(n.elts,function(e){if(e.classList){e.classList.remove(U.config.settlingClass)}$(e,"htmx:afterSettle",l)});if(h.type){if(h.type==="push"){Tt(h.path);$(_().body,"htmx:pushedIntoHistory",{path:h.path})}else{Ht(h.path);$(_().body,"htmx:replacedInHistory",{path:h.path})}}if(l.pathInfo.anchor){var e=R("#"+l.pathInfo.anchor);if(e){e.scrollIntoView({block:"start",behavior:"auto"})}}if(n.title){var t=R("title");if(t){t.innerHTML=n.title}else{window.document.title=n.title}}Kt(n.elts,c);if(ar(u,/HX-Trigger-After-Settle:/i)){var r=s;if(!K(s)){r=_().body}qe(u,"HX-Trigger-After-Settle",r)}};if(c.settleDelay>0){setTimeout(o,c.settleDelay)}else{o()}}catch(e){J(s,"htmx:swapError",l);throw e}};if(c.swapDelay>0){setTimeout(o,c.swapDelay)}else{o()}}if(t){J(s,"htmx:responseError",Y({error:"Response Status Error Code "+u.status+" from "+l.pathInfo.path},l))}}var cr={};function hr(){return{init:function(e){return null},onEvent:function(e,t){return true},transformResponse:function(e,t,r){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,r,n){return false},encodeParameters:function(e,t,r){return null}}}function dr(e,t){if(t.init){t.init(r)}cr[e]=Y(hr(),t)}function vr(e){delete cr[e]}function gr(e,r,n){if(e==undefined){return r}if(r==undefined){r=[]}if(n==undefined){n=[]}var t=V(e,"hx-ext");if(t){G(t.split(","),function(e){e=e.replace(/ /g,"");if(e.slice(0,7)=="ignore:"){n.push(e.slice(7));return}if(n.indexOf(e)<0){var t=cr[e];if(t&&r.indexOf(t)<0){r.push(t)}}})}return gr(u(e),r,n)}function pr(e){if(_().readyState!=="loading"){e()}else{_().addEventListener("DOMContentLoaded",e)}}function mr(){if(U.config.includeIndicatorStyles!==false){_().head.insertAdjacentHTML("beforeend","<style>                      ."+U.config.indicatorClass+"{opacity:0;transition: opacity 200ms ease-in;}                      ."+U.config.requestClass+" ."+U.config.indicatorClass+"{opacity:1}                      ."+U.config.requestClass+"."+U.config.indicatorClass+"{opacity:1}                    </style>")}}function xr(){var e=_().querySelector('meta[name="htmx-config"]');if(e){return S(e.content)}else{return null}}function yr(){var e=xr();if(e){U.config=Y(U.config,e)}}pr(function(){yr();mr();var e=_().body;mt(e);var t=_().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");e.addEventListener("htmx:abort",function(e){var t=e.target;var r=W(t);if(r&&r.xhr){r.xhr.abort()}});window.onpopstate=function(e){if(e.state&&e.state.htmx){It();G(t,function(e){$(e,"htmx:restored",{document:_(),triggerEvent:$})})}};setTimeout(function(){$(e,"htmx:load",{})},0)});return U}()});