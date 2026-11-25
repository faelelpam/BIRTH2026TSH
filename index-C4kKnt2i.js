(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Zd={exports:{}},Nl={};var ty;function $E(){if(ty)return Nl;ty=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Nl.Fragment=t,Nl.jsx=i,Nl.jsxs=i,Nl}var ey;function tT(){return ey||(ey=1,Zd.exports=$E()),Zd.exports}var $t=tT(),Kd={exports:{}},Se={};var ny;function eT(){if(ny)return Se;ny=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function N(V,mt,tt){this.props=V,this.context=mt,this.refs=x,this.updater=tt||C}N.prototype.isReactComponent={},N.prototype.setState=function(V,mt){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,mt,"setState")},N.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function U(){}U.prototype=N.prototype;function T(V,mt,tt){this.props=V,this.context=mt,this.refs=x,this.updater=tt||C}var z=T.prototype=new U;z.constructor=T,M(z,N.prototype),z.isPureReactComponent=!0;var P=Array.isArray;function O(){}var H={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(V,mt,tt){var it=tt.ref;return{$$typeof:s,type:V,key:mt,ref:it!==void 0?it:null,props:tt}}function B(V,mt){return R(V.type,mt,V.props)}function K(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function ot(V){var mt={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(tt){return mt[tt]})}var lt=/\/+/g;function rt(V,mt){return typeof V=="object"&&V!==null&&V.key!=null?ot(""+V.key):mt.toString(36)}function q(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(O,O):(V.status="pending",V.then(function(mt){V.status==="pending"&&(V.status="fulfilled",V.value=mt)},function(mt){V.status==="pending"&&(V.status="rejected",V.reason=mt)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function nt(V,mt,tt,it,wt){var zt=typeof V;(zt==="undefined"||zt==="boolean")&&(V=null);var Nt=!1;if(V===null)Nt=!0;else switch(zt){case"bigint":case"string":case"number":Nt=!0;break;case"object":switch(V.$$typeof){case s:case t:Nt=!0;break;case v:return Nt=V._init,nt(Nt(V._payload),mt,tt,it,wt)}}if(Nt)return wt=wt(V),Nt=it===""?"."+rt(V,0):it,P(wt)?(tt="",Nt!=null&&(tt=Nt.replace(lt,"$&/")+"/"),nt(wt,mt,tt,"",function(F){return F})):wt!=null&&(K(wt)&&(wt=B(wt,tt+(wt.key==null||V&&V.key===wt.key?"":(""+wt.key).replace(lt,"$&/")+"/")+Nt)),mt.push(wt)),1;Nt=0;var Ut=it===""?".":it+":";if(P(V))for(var qt=0;qt<V.length;qt++)it=V[qt],zt=Ut+rt(it,qt),Nt+=nt(it,mt,tt,zt,wt);else if(qt=E(V),typeof qt=="function")for(V=qt.call(V),qt=0;!(it=V.next()).done;)it=it.value,zt=Ut+rt(it,qt++),Nt+=nt(it,mt,tt,zt,wt);else if(zt==="object"){if(typeof V.then=="function")return nt(q(V),mt,tt,it,wt);throw mt=String(V),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Nt}function Y(V,mt,tt){if(V==null)return V;var it=[],wt=0;return nt(V,it,"","",function(zt){return mt.call(tt,zt,wt++)}),it}function ht(V){if(V._status===-1){var mt=V._result,tt=mt();tt.then(function(it){(V._status===0||V._status===-1)&&(V._status=1,V._result=it,tt.status===void 0&&(tt.status="fulfilled",tt.value=it))},function(it){(V._status===0||V._status===-1)&&(V._status=2,V._result=it,tt.status===void 0&&(tt.status="rejected",tt.reason=it))}),V._status===-1&&(V._status=0,V._result=tt)}if(V._status===1)return V._result.default;throw V._result}var Rt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Ht(V){var mt=H.T,tt={};tt.types=mt!==null?mt.types:null,H.T=tt;try{var it=V(),wt=H.S;wt!==null&&wt(tt,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(O,Rt)}catch(zt){Rt(zt)}finally{mt!==null&&tt.types!==null&&(mt.types=tt.types),H.T=mt}}function pe(V){var mt=H.T;if(mt!==null){var tt=mt.types;tt===null?mt.types=[V]:tt.indexOf(V)===-1&&tt.push(V)}else Ht(pe.bind(null,V))}var de={map:Y,forEach:function(V,mt,tt){Y(V,function(){mt.apply(this,arguments)},tt)},count:function(V){var mt=0;return Y(V,function(){mt++}),mt},toArray:function(V){return Y(V,function(mt){return mt})||[]},only:function(V){if(!K(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return Se.Activity=g,Se.Children=de,Se.Component=N,Se.Fragment=i,Se.Profiler=l,Se.PureComponent=T,Se.StrictMode=r,Se.Suspense=m,Se.ViewTransition=_,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,Se.__COMPILER_RUNTIME={__proto__:null,c:function(V){return H.H.useMemoCache(V)}},Se.addTransitionType=pe,Se.cache=function(V){return function(){return V.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(V,mt,tt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var it=M({},V.props),wt=V.key;if(mt!=null)for(zt in mt.key!==void 0&&(wt=""+mt.key),mt)!w.call(mt,zt)||zt==="key"||zt==="__self"||zt==="__source"||zt==="ref"&&mt.ref===void 0||(it[zt]=mt[zt]);var zt=arguments.length-2;if(zt===1)it.children=tt;else if(1<zt){for(var Nt=Array(zt),Ut=0;Ut<zt;Ut++)Nt[Ut]=arguments[Ut+2];it.children=Nt}return R(V.type,wt,it)},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:c,_context:V},V},Se.createElement=function(V,mt,tt){var it,wt={},zt=null;if(mt!=null)for(it in mt.key!==void 0&&(zt=""+mt.key),mt)w.call(mt,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(wt[it]=mt[it]);var Nt=arguments.length-2;if(Nt===1)wt.children=tt;else if(1<Nt){for(var Ut=Array(Nt),qt=0;qt<Nt;qt++)Ut[qt]=arguments[qt+2];wt.children=Ut}if(V&&V.defaultProps)for(it in Nt=V.defaultProps,Nt)wt[it]===void 0&&(wt[it]=Nt[it]);return R(V,zt,wt)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:d,render:V}},Se.isValidElement=K,Se.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:ht}},Se.memo=function(V,mt){return{$$typeof:p,type:V,compare:mt===void 0?null:mt}},Se.startTransition=Ht,Se.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},Se.use=function(V){return H.H.use(V)},Se.useActionState=function(V,mt,tt){return H.H.useActionState(V,mt,tt)},Se.useCallback=function(V,mt){return H.H.useCallback(V,mt)},Se.useContext=function(V){return H.H.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V,mt){return H.H.useDeferredValue(V,mt)},Se.useEffect=function(V,mt){return H.H.useEffect(V,mt)},Se.useEffectEvent=function(V){return H.H.useEffectEvent(V)},Se.useId=function(){return H.H.useId()},Se.useImperativeHandle=function(V,mt,tt){return H.H.useImperativeHandle(V,mt,tt)},Se.useInsertionEffect=function(V,mt){return H.H.useInsertionEffect(V,mt)},Se.useLayoutEffect=function(V,mt){return H.H.useLayoutEffect(V,mt)},Se.useMemo=function(V,mt){return H.H.useMemo(V,mt)},Se.useOptimistic=function(V,mt){return H.H.useOptimistic(V,mt)},Se.useReducer=function(V,mt,tt){return H.H.useReducer(V,mt,tt)},Se.useRef=function(V){return H.H.useRef(V)},Se.useState=function(V){return H.H.useState(V)},Se.useSyncExternalStore=function(V,mt,tt){return H.H.useSyncExternalStore(V,mt,tt)},Se.useTransition=function(){return H.H.useTransition()},Se.version="19.3.1",Se}var iy;function Lm(){return iy||(iy=1,Kd.exports=eT()),Kd.exports}var Fn=Lm(),Qd={exports:{}},Ll={},Jd={exports:{}},$d={};var ay;function nT(){return ay||(ay=1,(function(s){function t(q,nt){var Y=q.length;q.push(nt);t:for(;0<Y;){var ht=Y-1>>>1,Rt=q[ht];if(0<l(Rt,nt))q[ht]=nt,q[Y]=Rt,Y=ht;else break t}}function i(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var nt=q[0],Y=q.pop();if(Y!==nt){q[0]=Y;t:for(var ht=0,Rt=q.length,Ht=Rt>>>1;ht<Ht;){var pe=2*(ht+1)-1,de=q[pe],V=pe+1,mt=q[V];if(0>l(de,Y))V<Rt&&0>l(mt,de)?(q[ht]=mt,q[V]=Y,ht=V):(q[ht]=de,q[pe]=Y,ht=pe);else if(V<Rt&&0>l(mt,Y))q[ht]=mt,q[V]=Y,ht=V;else break t}}return nt}function l(q,nt){var Y=q.sortIndex-nt.sortIndex;return Y!==0?Y:q.id-nt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,_=3,S=!1,E=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function T(q){for(var nt=i(p);nt!==null;){if(nt.callback===null)r(p);else if(nt.startTime<=q)r(p),nt.sortIndex=nt.expirationTime,t(m,nt);else break;nt=i(p)}}function z(q){if(C=!1,T(q),!E)if(i(m)!==null)E=!0,P||(P=!0,K());else{var nt=i(p);nt!==null&&rt(z,nt.startTime-q)}}var P=!1,O=-1,H=5,w=-1;function R(){return M?!0:!(s.unstable_now()-w<H)}function B(){if(M=!1,P){var q=s.unstable_now();w=q;var nt=!0;try{t:{E=!1,C&&(C=!1,N(O),O=-1),S=!0;var Y=_;try{e:{for(T(q),g=i(m);g!==null&&!(g.expirationTime>q&&R());){var ht=g.callback;if(typeof ht=="function"){g.callback=null,_=g.priorityLevel;var Rt=ht(g.expirationTime<=q);if(q=s.unstable_now(),typeof Rt=="function"){g.callback=Rt,T(q),nt=!0;break e}g===i(m)&&r(m),T(q)}else r(m);g=i(m)}if(g!==null)nt=!0;else{var Ht=i(p);Ht!==null&&rt(z,Ht.startTime-q),nt=!1}}break t}finally{g=null,_=Y,S=!1}nt=void 0}}finally{nt?K():P=!1}}}var K;if(typeof U=="function")K=function(){U(B)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,lt=ot.port2;ot.port1.onmessage=B,K=function(){lt.postMessage(null)}}else K=function(){x(B,0)};function rt(q,nt){O=x(function(){q(s.unstable_now())},nt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(q){switch(_){case 1:case 2:case 3:var nt=3;break;default:nt=_}var Y=_;_=nt;try{return q()}finally{_=Y}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(q,nt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Y=_;_=q;try{return nt()}finally{_=Y}},s.unstable_scheduleCallback=function(q,nt,Y){var ht=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ht+Y:ht):Y=ht,q){case 1:var Rt=-1;break;case 2:Rt=250;break;case 5:Rt=1073741823;break;case 4:Rt=1e4;break;default:Rt=5e3}return Rt=Y+Rt,q={id:v++,callback:nt,priorityLevel:q,startTime:Y,expirationTime:Rt,sortIndex:-1},Y>ht?(q.sortIndex=Y,t(p,q),i(m)===null&&q===i(p)&&(C?(N(O),O=-1):C=!0,rt(z,Y-ht))):(q.sortIndex=Rt,t(m,q),E||S||(E=!0,P||(P=!0,K()))),q},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(q){var nt=_;return function(){var Y=_;_=nt;try{return q.apply(this,arguments)}finally{_=Y}}}})($d)),$d}var ry;function iT(){return ry||(ry=1,Jd.exports=nT()),Jd.exports}var tp={exports:{}},Yn={};var sy;function aT(){if(sy)return Yn;sy=1;var s=Lm();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:g,implementation:_}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Yn.browser=function(v){return{$$typeof:c,_reason:v}},Yn.createPortal=function(v,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,_)},Yn.flushSync=function(v){var g=m.T,_=r.p;try{if(m.T=null,r.p=2,v)return v()}finally{m.T=g,r.p=_,r.d.f()}},Yn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},Yn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Yn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var _=g.as,S=p(_,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:C}):_==="script"&&r.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Yn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},Yn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,S=p(_,g.crossOrigin);r.d.L(v,_,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Yn.preloadModule=function(v,g){if(typeof v=="string")if(g){var _=p(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},Yn.requestFormReset=function(v){r.d.r(v)},Yn.unstable_batchedUpdates=function(v,g){return v(g)},Yn.useFormState=function(v,g,_){return m.H.useFormState(v,g,_)},Yn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Yn.version="19.3.1",Yn}var oy;function rT(){if(oy)return tp.exports;oy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),tp.exports=aT(),tp.exports}var ly;function sT(){if(ly)return Ll;ly=1;var s=iT(),t=Lm(),i=rT();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=f;break}if(A===o){y=!0,o=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=u;break}if(A===o){y=!0,o=f,a=u;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,o,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,o,u,f))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=_(e);return a===null||C(n,e,a.child,{foundSelf:!1}),n}function C(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(e,n,a.child,o))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,N=null;function U(e,n,a){return e===a?!0:e===n?(x=e,!0):!1}function T(e,n,a){return e===a?(N=e,!1):e===n?(N!==null&&(x=e),!0):!1}function z(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,a){for(var o=0,u=e;u;u=a(u))o++;u=0;for(var f=n;f;f=a(f))u++;for(;0<o-u;)e=a(e),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var O=Object.assign,H=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),lt=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),pe=Symbol.for("react.legacy_hidden"),de=Symbol.for("react.memo_cache_sentinel"),V=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),tt=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=tt&&e[tt]||e["@@iterator"],typeof e=="function"?e:null)}var wt=Symbol.for("react.client.reference");function zt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case ot:return"Profiler";case K:return"StrictMode";case nt:return"Suspense";case Y:return"SuspenseList";case Ht:return"Activity";case V:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case rt:return e.displayName||"Context";case lt:return(e._context.displayName||"Context")+".Consumer";case q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ht:return n=e.displayName||null,n!==null?n:zt(e.type)||"Memo";case Rt:n=e._payload,e=e._init;try{return zt(e(n))}catch{}}return null}var Nt=Array.isArray,Ut=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},At=[],xt=-1;function vt(e){return{current:e}}function pt(e){0>xt||(e.current=At[xt],At[xt]=null,xt--)}function Et(e,n){xt++,At[xt]=e.current,e.current=n}var Ct=vt(null),Pt=vt(null),le=vt(null),ce=vt(null);function L(e,n){switch(Et(le,n),Et(Pt,e),Et(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=c_(n),e=u_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(Ct),Et(Ct,e)}function b(){pt(Ct),pt(Pt),pt(le)}function J(e){var n=e.memoizedState;n!==null&&(lo._currentValue=n.memoizedState,Et(ce,e)),n=Ct.current;var a=u_(n,e.type);n!==a&&(Et(Pt,e),Et(Ct,a))}function ft(e){Pt.current===e&&(pt(Ct),pt(Pt)),ce.current===e&&(pt(ce),lo._currentValue=F)}var Tt,dt;function Wt(e){if(Tt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Tt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tt+e+dt}var It=!1;function Kt(e,n){if(!e||It)return"";It=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(kt){var W=kt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(kt){W=kt}yt=!1;try{var at=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),yt=!0,new e}finally{yt&&(at!==void 0?Object.defineProperty(e.prototype,"props",at):delete e.prototype.props)}}}else{try{throw Error()}catch(kt){W=kt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(kt){if(kt&&W&&typeof kt.stack=="string")return[kt.stack,W.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var I=y.split(`
`),Q=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===Q.length)for(o=I.length-1,u=Q.length-1;1<=o&&0<=u&&I[o]!==Q[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==Q[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==Q[u]){var st=`
`+I[o].replace(" at new "," at ");return e.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",e.displayName)),st}while(1<=o&&0<=u);break}}}finally{It=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function ee(e,n){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return e.child!==n&&n!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Kt(e.type,!1);case 11:return Kt(e.type.render,!1);case 1:return Kt(e.type,!0);case 31:return Wt("Activity");case 30:return Wt("ViewTransition");default:return""}}function Dt(e){try{var n="",a=null;do n+=ee(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vt=Object.prototype.hasOwnProperty,ue=s.unstable_scheduleCallback,ie=s.unstable_cancelCallback,Mt=s.unstable_shouldYield,_e=s.unstable_requestPaint,k=s.unstable_now,Ot=s.unstable_getCurrentPriorityLevel,Ft=s.unstable_ImmediatePriority,jt=s.unstable_UserBlockingPriority,bt=s.unstable_NormalPriority,St=s.unstable_LowPriority,Jt=s.unstable_IdlePriority,ve=s.log,Be=s.unstable_setDisableYieldValue,Ae=null,rn=null;function un(e){if(typeof ve=="function"&&Be(e),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(Ae,e)}catch{}}var yn=Math.clz32?Math.clz32:Fr,Li=Math.log,Yi=Math.LN2;function Fr(e){return e>>>=0,e===0?32:31-(Li(e)/Yi|0)|0}var Ln=256,Oi=262144,hn=4194304;function Hn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Cn(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Hn(o):(y&=A,y!==0?u=Hn(y):a||(a=A&~e,a!==0&&(u=Hn(a))))):(A=o&~f,A!==0?u=Hn(A):y!==0?u=Hn(y):a||(a=o&~e,a!==0&&(u=Hn(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ci(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Hr(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-yn(a),u=1<<o;n|=e[o],a&=~u}return n}function Ms(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Es(){var e=hn;return hn<<=1,(hn&62914560)===0&&(hn=4194304),e}function Ja(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vr(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=y&~a;0<a;){var st=31-yn(a),yt=1<<st;A[st]=0,I[st]=-1;var W=Q[st];if(W!==null)for(Q[st]=null,st=0;st<W.length;st++){var at=W[st];at!==null&&(at.lane&=-536870913)}a&=~yt}o!==0&&D(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function D(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-yn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function j(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-yn(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ut(e,n){var a=n&-n;return a=(a&42)!==0?1:ct(a),(a&(e.suspendedLanes|n))!==0?0:a}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lt(){var e=qt.p;return e!==0?e:(e=window.event,e===void 0?32:W_(e.type))}function Yt(e,n){var a=qt.p;try{return qt.p=e,n()}finally{qt.p=a}}var Gt=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Gt,ne="__reactProps$"+Gt,se="__reactContainer$"+Gt,re="__reactEvents$"+Gt,ye="__reactListeners$"+Gt,Fe="__reactHandles$"+Gt,$e="__reactResources$"+Gt,ze="__reactMarker$"+Gt,Pe="__reactLoad$"+Gt;function oe(e){delete e[Bt],delete e[ne],delete e[ye],delete e[Fe]}function He(e){var n;if(n=e[Bt])return n;for(var a=e.parentNode;a;){if(n=a[se]||a[Bt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=R_(e);e!==null;){if(a=e[Bt])return a;e=R_(e)}return n}e=a,a=e.parentNode}return null}function xe(e){if(e=e[Bt]||e[se]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function mn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function jn(e){var n=e[$e];return n||(n=e[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[ze]=!0}function Wi(e){e[Pe]=void 0}var je=new Set,gt={};function Qt(e,n){fe(e,n),fe(e+"Capture",n)}function fe(e,n){for(gt[e]=n,e=0;e<n.length;e++)je.add(n[e])}var me=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qe={},Ye={};function ui(e){return Vt.call(Ye,e)?!0:Vt.call(qe,e)?!1:me.test(e)?Ye[e]=!0:(qe[e]=!0,!1)}var Me=!1;function Xe(){var e=Me;return Me=!1,e}function fi(e,n,a){if(ui(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ji(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function ei(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function On(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ca(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function uc(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zn(e){if(!e._valueTracker){var n=ca(e)?"checked":"value";e._valueTracker=uc(e,n,""+e[n])}}function Zi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ca(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var ln=/[\n"\\]/g;function Sn(e){return e.replace(ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ts(e,n,a,o,u,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+On(n)):e.value!==""+On(n)&&(e.value=""+On(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?y==="number"&&e.value==n?Go(e,On(e.value)):Go(e,On(n)):a!=null?Go(e,On(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+On(A):e.removeAttribute("name")}function bs(e,n,a,o,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Zn(e);return}a=a!=null?""+On(a):"",n=n!=null?""+On(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Zn(e)}function Go(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Si(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+On(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function As(e,n,a){if(n!=null&&(n=""+On(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+On(a):""}function Rs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Nt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=On(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Zn(e)}function ua(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Xo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eg(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Xo.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ng(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",Me=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(eg(e,u,o),Me=!0)}else for(var f in n)n.hasOwnProperty(f)&&eg(e,f,n[f])}function Cf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var MS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ES=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fc(e){return ES.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fa(){}var wf=null;function Df(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,ws=null;function ig(e){var n=xe(e);if(n&&(e=n.stateNode)){var a=e[ne]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ts(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[ne]||null;if(!u)throw Error(r(90));Ts(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Zi(o)}break t;case"textarea":As(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Si(e,!!a.multiple,n,!1)}}}var Uf=!1;function ag(e,n,a){if(Uf)return e(n,a);Uf=!0;try{var o=e(n);return o}finally{if(Uf=!1,(Cs!==null||ws!==null)&&(fu(),Cs&&(n=Cs,e=ws,ws=Cs=null,ig(n),e)))for(n=0;n<e.length;n++)ig(e[n])}}function ko(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ne]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=!1;if(Ca)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{Nf=!1}var $a=null,Lf=null,hc=null;function rg(){if(hc)return hc;var e,n=Lf,a=n.length,o,u="value"in $a?$a.value:$a.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return hc=u.slice(e,1<o?1-o:void 0)}function dc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pc(){return!0}function sg(){return!1}function ni(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pc:sg,this.isPropagationStopped=sg,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=ni(tr),Yo=O({},tr,{view:0,detail:0}),TS=ni(Yo),Of,zf,Wo,gc=O({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wo&&(Wo&&e.type==="mousemove"?(Of=e.screenX-Wo.screenX,zf=e.screenY-Wo.screenY):zf=Of=0,Wo=e),Of)},movementY:function(e){return"movementY"in e?e.movementY:zf}}),og=ni(gc),bS=O({},gc,{dataTransfer:0}),AS=ni(bS),RS=O({},Yo,{relatedTarget:0}),Pf=ni(RS),CS=O({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=ni(CS),DS=O({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),US=ni(DS),NS=O({},tr,{data:0}),lg=ni(NS),LS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zS[e])?!!n[e]:!1}function If(){return PS}var IS=O({},Yo,{key:function(e){if(e.key){var n=LS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?OS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(e){return e.type==="keypress"?dc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),BS=ni(IS),FS=O({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cg=ni(FS),HS=O({},tr,{submitter:0}),VS=ni(HS),GS=O({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),XS=ni(GS),kS=O({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qS=ni(kS),YS=O({},gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=ni(YS),jS=O({},tr,{newState:0,oldState:0,source:0}),ZS=ni(jS),KS=[9,13,27,32],Bf=Ca&&"CompositionEvent"in window,jo=null;Ca&&"documentMode"in document&&(jo=document.documentMode);var QS=Ca&&"TextEvent"in window&&!jo,ug=Ca&&(!Bf||jo&&8<jo&&11>=jo),fg=" ",hg=!1;function dg(e,n){switch(e){case"keyup":return KS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ds=!1;function JS(e,n){switch(e){case"compositionend":return pg(n);case"keypress":return n.which!==32?null:(hg=!0,fg);case"textInput":return e=n.data,e===fg&&hg?null:e;default:return null}}function $S(e,n){if(Ds)return e==="compositionend"||!Bf&&dg(e,n)?(e=rg(),hc=Lf=$a=null,Ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ug&&n.locale!=="ko"?null:n.data;default:return null}}var tM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tM[e.type]:n==="textarea"}function gg(e,n,a,o){Cs?ws?ws.push(o):ws=[o]:Cs=o,n=vu(n,"onChange"),0<n.length&&(a=new mc("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Zo=null,Ko=null;function eM(e){i_(e,0)}function vc(e){var n=mn(e);if(Zi(n))return e}function vg(e,n){if(e==="change")return n}var _g=!1;if(Ca){var Ff;if(Ca){var Hf="oninput"in document;if(!Hf){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),Hf=typeof yg.oninput=="function"}Ff=Hf}else Ff=!1;_g=Ff&&(!document.documentMode||9<document.documentMode)}function xg(){Zo&&(Zo.detachEvent("onpropertychange",Sg),Ko=Zo=null)}function Sg(e){if(e.propertyName==="value"&&vc(Ko)){var n=[];gg(n,Ko,e,Df(e)),ag(eM,n)}}function nM(e,n,a){e==="focusin"?(xg(),Zo=n,Ko=a,Zo.attachEvent("onpropertychange",Sg)):e==="focusout"&&xg()}function iM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vc(Ko)}function aM(e,n){if(e==="click")return vc(n)}function rM(e,n){if(e==="input"||e==="change")return vc(n)}function sM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mi=typeof Object.is=="function"?Object.is:sM;function Qo(e,n){if(Mi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Vt.call(n,u)||!Mi(e[u],n[u]))return!1}return!0}function Vf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eg(e,n){var a=Mg(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mg(a)}}function Tg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Vf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Vf(e.document)}return n}function Gf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var oM=Ca&&"documentMode"in document&&11>=document.documentMode,Us=null,Xf=null,Jo=null,kf=!1;function Ag(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kf||Us==null||Us!==Vf(o)||(o=Us,"selectionStart"in o&&Gf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Jo&&Qo(Jo,o)||(Jo=o,o=vu(Xf,"onSelect"),0<o.length&&(n=new mc("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Us)))}function Gr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionrun:Gr("Transition","TransitionRun"),transitionstart:Gr("Transition","TransitionStart"),transitioncancel:Gr("Transition","TransitionCancel"),transitionend:Gr("Transition","TransitionEnd")},qf={},Rg={};Ca&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Xr(e){if(qf[e])return qf[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rg)return qf[e]=n[a];return e}var Cg=Xr("animationend"),wg=Xr("animationiteration"),Dg=Xr("animationstart"),lM=Xr("transitionrun"),cM=Xr("transitionstart"),uM=Xr("transitioncancel"),Ug=Xr("transitionend"),Ng=new Map,Yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yf.push("scrollEnd");function Ki(e,n){Ng.set(e,n),Qt(n,[e])}var fM=0;function wa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=ta.identifierPrefix;var a=fM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Lg(e){if(e==null||typeof e=="string")return e;var n=null,a=Js;if(a!==null)for(var o=0;o<a.length;o++){var u=e[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Da(e,n){return e=Lg(e),n=Lg(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var _c=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zi=[],Ls=0,Wf=0;function yc(){for(var e=Ls,n=Wf=Ls=0;n<e;){var a=zi[n];zi[n++]=null;var o=zi[n];zi[n++]=null;var u=zi[n];zi[n++]=null;var f=zi[n];if(zi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Og(a,u,f)}}function xc(e,n,a,o){zi[Ls++]=e,zi[Ls++]=n,zi[Ls++]=a,zi[Ls++]=o,Wf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function jf(e,n,a,o){return xc(e,n,a,o),Sc(e)}function kr(e,n){return xc(e,null,null,n),Sc(e)}function Og(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-yn(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Sc(e){if(50<xl)throw xl=0,uu=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Os={};function hM(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,n,a,o){return new hM(e,n,a,o)}function Zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ua(e,n){var a=e.alternate;return a===null?(a=hi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zg(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Mc(e,n,a,o,u,f){var y=0;if(o=e,typeof o=="function")Zf(o)&&(y=1);else if(typeof o=="string")y=HE(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Ht:return e=hi(31,a,n,u),e.elementType=Ht,e.lanes=f,e;case B:return qr(a.children,u,f,n);case K:y=8,u|=24;break;case ot:return e=hi(12,a,n,u|2),e.elementType=ot,e.lanes=f,e;case nt:return e=hi(13,a,n,u),e.elementType=nt,e.lanes=f,e;case Y:return e=hi(19,a,n,u),e.elementType=Y,e.lanes=f,e;case pe:case V:return e=u|32,e=hi(30,a,n,e),e.elementType=V,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case rt:y=10;break t;case lt:y=9;break t;case q:y=11;break t;case ht:y=14;break t;case Rt:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=hi(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function qr(e,n,a,o){return e=hi(7,e,o,n),e.lanes=a,e}function Kf(e,n,a){return e=hi(6,e,null,n),e.lanes=a,e}function Pg(e){var n=hi(18,null,null,0);return n.stateNode=e,n}function Qf(e,n,a){return n=hi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ig=new WeakMap;function Pi(e,n){if(typeof e=="object"&&e!==null){var a=Ig.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Dt(n)},Ig.set(e,n),n)}return{value:e,source:n,stack:Dt(n)}}var zs=[],Ps=0,Ec=null,$o=0,Ii=[],Bi=0,er=null,ha=1,da="";function Na(e,n){zs[Ps++]=$o,zs[Ps++]=Ec,Ec=e,$o=n}function Bg(e,n,a){Ii[Bi++]=ha,Ii[Bi++]=da,Ii[Bi++]=er,er=e;var o=ha;e=da;var u=32-yn(o)-1;o&=~(1<<u),a+=1;var f=32-yn(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ha=1<<32-yn(n)+u|a<<u|o,da=f+e}else ha=1<<f|a<<u|o,da=e}function Tc(e){e.return!==null&&(Na(e,1),Bg(e,1,0))}function Jf(e){for(;e===Ec;)Ec=zs[--Ps],zs[Ps]=null,$o=zs[--Ps],zs[Ps]=null;for(;e===er;)er=Ii[--Bi],Ii[Bi]=null,da=Ii[--Bi],Ii[Bi]=null,ha=Ii[--Bi],Ii[Bi]=null}function Fg(e,n){Ii[Bi++]=ha,Ii[Bi++]=da,Ii[Bi++]=er,ha=n.id,da=n.overflow,er=e}var zn=null,sn=null,Ce=!1,nr=null,Fi=!1,$f=Error(r(519));function ir(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(Pi(n,e)),$f}function Hg(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Bt]=e,n[ne]=o,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<Ml.length;a++)Ne(Ml[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),bs(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),Rs(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||o_(n.textContent,a)?(o.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),o.onScroll!=null&&Ne("scroll",n),o.onScrollEnd!=null&&Ne("scrollend",n),o.onClick!=null&&(n.onclick=fa),n=!0):n=!1,n||ir(e,!0)}function bc(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:zn=zn.return}}function Is(e){if(e!==zn)return!1;if(!Ce)return bc(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wd(e.type,e.memoizedProps)),a=!a),a&&sn&&ir(e),bc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));sn=A_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));sn=A_(e)}else n===27?(n=sn,yr(e.type)?(e=Bd,Bd=null,sn=e):sn=n):sn=zn?Vi(e.stateNode.nextSibling):null;return!0}function Yr(){sn=zn=null,Ce=!1}function th(){var e=nr;return e!==null&&(mi===null?mi=e:mi.push.apply(mi,e),nr=null),e}function tl(e){nr===null?nr=[e]:nr.push(e)}var eh=vt(null),Wr=null,La=null;function ar(e,n,a){Et(eh,n._currentValue),n._currentValue=a}function Oa(e){e._currentValue=eh.current,pt(eh)}function Ac(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function nh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ac(f.return,a,e),o||(y=null);break t}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ac(y,a,e),y=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),Ac(u.return,a,e),y=u.child,y=y!==null?y.sibling:null):y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function jr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=u.type;Mi(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===ce.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(lo):e=[lo])}u=u.return}return e!==null&&nh(n,e,a,o),n.flags|=262144,e!==null}function Rc(e){for(e=e.firstContext;e!==null;){if(!Mi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zr(e){Wr=e,La=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vn(e){return Vg(Wr,e)}function Cc(e,n){return Wr===null&&Zr(e),Vg(e,n)}function Vg(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},La===null){if(e===null)throw Error(r(308));La=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else La=La.next=n;return a}var dM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},pM=s.unstable_scheduleCallback,mM=s.unstable_NormalPriority,Mn={$$typeof:rt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ih(){return{controller:new dM,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&pM(mM,function(){e.controller.abort()})}function Gg(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var nl=null;function gM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var il=null,ah=0,Kr=0,Bs=null;function vM(e,n){if(il===null){var a=il=[];ah=0,Kr=xd(),Bs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ah++,n.then(Xg,Xg),n}function Xg(){if(--ah===0&&(nl=null,il!==null)){Bs!==null&&(Bs.status="fulfilled");var e=il;il=null,Kr=0,Bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _M(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var kg=Ut.S;Ut.S=function(e,n){if(Pv=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vM(e,n),nl!==null)for(var a=no;a!==null;)Gg(a,nl),a=a.next;if(a=e.types,a!==null){for(var o=no;o!==null;)Gg(o,a),o=o.next;if(Kr!==0){o=nl,o===null&&(o=nl=[]);for(var u=0;u<a.length;u++){var f=a[u];o.indexOf(f)===-1&&o.push(f)}}}kg!==null&&kg(e,n)};var Qr=vt(null);function rh(){var e=Qr.current;return e!==null?e:nn.pooledCache}function wc(e,n){n===null?Et(Qr,Qr.current):Et(Qr,n.pool)}function qg(){var e=rh();return e===null?null:{parent:Mn._currentValue,pool:e}}var Fs=Error(r(460)),sh=Error(r(474)),Dc=Error(r(542)),Uc={then:function(){}};function Yg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(fa,fa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zg(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(fa,fa);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zg(e),e}throw $r=n,Fs}}function Jr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($r=a,Fs):a}}var $r=null;function jg(){if($r===null)throw Error(r(459));var e=$r;return $r=null,e}function Zg(e){if(e===Fs||e===Dc)throw Error(r(483))}var Hs=null,al=0;function Nc(e){var n=al;return al+=1,Hs===null&&(Hs=[]),Wg(Hs,e,n)}function rr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Lc(e,n){throw n.$$typeof===H?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Kg(e){function n(Z,X){if(e){var et=Z.deletions;et===null?(Z.deletions=[X],Z.flags|=16):et.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key===null?X.set(Z.index,Z):X.set(Z.key,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Ua(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<X?(Z.flags|=2,X):et):(Z.flags|=134217730,X)):(Z.flags|=1048576,X)}function y(Z){return e&&Z.alternate===null&&(Z.flags|=134217730),Z}function A(Z,X,et,_t){return X===null||X.tag!==6?(X=Kf(et,Z.mode,_t),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function I(Z,X,et,_t){var te=et.type;return te===B?(Z=st(Z,X,et.props.children,_t,et.key),rr(Z,et),Z):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Rt&&Jr(te)===X.type)?(X=u(X,et.props),rr(X,et),X.return=Z,X):(X=Mc(et.type,et.key,et.props,null,Z.mode,_t),rr(X,et),X.return=Z,X)}function Q(Z,X,et,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Qf(et,Z.mode,_t),X.return=Z,X):(X=u(X,et.children||[]),X.return=Z,X)}function st(Z,X,et,_t,te){return X===null||X.tag!==7?(X=qr(et,Z.mode,_t,te),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function yt(Z,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Kf(""+X,Z.mode,et),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return et=Mc(X.type,X.key,X.props,null,Z.mode,et),rr(et,X),et.return=Z,et;case R:return X=Qf(X,Z.mode,et),X.return=Z,X;case Rt:return X=Jr(X),yt(Z,X,et)}if(Nt(X)||it(X))return X=qr(X,Z.mode,et,null),X.return=Z,X;if(typeof X.then=="function")return yt(Z,Nc(X),et);if(X.$$typeof===rt)return yt(Z,Cc(Z,X),et);Lc(Z,X)}return null}function W(Z,X,et,_t){var te=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return te!==null?null:A(Z,X,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case w:return et.key===te?I(Z,X,et,_t):null;case R:return et.key===te?Q(Z,X,et,_t):null;case Rt:return et=Jr(et),W(Z,X,et,_t)}if(Nt(et)||it(et))return te!==null?null:st(Z,X,et,_t,null);if(typeof et.then=="function")return W(Z,X,Nc(et),_t);if(et.$$typeof===rt)return W(Z,X,Cc(Z,et),_t);Lc(Z,et)}return null}function at(Z,X,et,_t,te){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(et)||null,A(X,Z,""+_t,te);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case w:return Z=Z.get(_t.key===null?et:_t.key)||null,I(X,Z,_t,te);case R:return Z=Z.get(_t.key===null?et:_t.key)||null,Q(X,Z,_t,te);case Rt:return _t=Jr(_t),at(Z,X,et,_t,te)}if(Nt(_t)||it(_t))return Z=Z.get(et)||null,st(X,Z,_t,te,null);if(typeof _t.then=="function")return at(Z,X,et,Nc(_t),te);if(_t.$$typeof===rt)return at(Z,X,et,Cc(X,_t),te);Lc(X,_t)}return null}function kt(Z,X,et,_t){for(var te=null,Oe=null,he=X,ge=X=0,bn=null;he!==null&&ge<et.length;ge++){he.index>ge?(bn=he,he=null):bn=he.sibling;var Ve=W(Z,he,et[ge],_t);if(Ve===null){he===null&&(he=bn);break}e&&he&&Ve.alternate===null&&n(Z,he),X=f(Ve,X,ge),Oe===null?te=Ve:Oe.sibling=Ve,Oe=Ve,he=bn}if(ge===et.length)return a(Z,he),Ce&&Na(Z,ge),te;if(he===null){for(;ge<et.length;ge++)he=yt(Z,et[ge],_t),he!==null&&(X=f(he,X,ge),Oe===null?te=he:Oe.sibling=he,Oe=he);return Ce&&Na(Z,ge),te}for(he=o(he);ge<et.length;ge++)bn=at(he,Z,ge,et[ge],_t),bn!==null&&(e&&(Ve=bn.alternate,Ve!==null&&he.delete(Ve.key===null?ge:Ve.key)),X=f(bn,X,ge),Oe===null?te=bn:Oe.sibling=bn,Oe=bn);return e&&he.forEach(function(Tr){return n(Z,Tr)}),Ce&&Na(Z,ge),te}function ae(Z,X,et,_t){if(et==null)throw Error(r(151));for(var te=null,Oe=null,he=X,ge=X=0,bn=null,Ve=et.next();he!==null&&!Ve.done;ge++,Ve=et.next()){he.index>ge?(bn=he,he=null):bn=he.sibling;var Tr=W(Z,he,Ve.value,_t);if(Tr===null){he===null&&(he=bn);break}e&&he&&Tr.alternate===null&&n(Z,he),X=f(Tr,X,ge),Oe===null?te=Tr:Oe.sibling=Tr,Oe=Tr,he=bn}if(Ve.done)return a(Z,he),Ce&&Na(Z,ge),te;if(he===null){for(;!Ve.done;ge++,Ve=et.next())Ve=yt(Z,Ve.value,_t),Ve!==null&&(X=f(Ve,X,ge),Oe===null?te=Ve:Oe.sibling=Ve,Oe=Ve);return Ce&&Na(Z,ge),te}for(he=o(he);!Ve.done;ge++,Ve=et.next())Ve=at(he,Z,ge,Ve.value,_t),Ve!==null&&(e&&(bn=Ve.alternate,bn!==null&&he.delete(bn.key===null?ge:bn.key)),X=f(Ve,X,ge),Oe===null?te=Ve:Oe.sibling=Ve,Oe=Ve);return e&&he.forEach(function(JE){return n(Z,JE)}),Ce&&Na(Z,ge),te}function Te(Z,X,et,_t){if(typeof et=="object"&&et!==null&&et.type===B&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case w:t:{for(var te=et.key;X!==null;){if(X.key===te){if(te=et.type,te===B){if(X.tag===7){a(Z,X.sibling),_t=u(X,et.props.children),rr(_t,et),_t.return=Z,Z=_t;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Rt&&Jr(te)===X.type){a(Z,X.sibling),_t=u(X,et.props),rr(_t,et),_t.return=Z,Z=_t;break t}a(Z,X);break}else n(Z,X);X=X.sibling}et.type===B?(_t=qr(et.props.children,Z.mode,_t,et.key),rr(_t,et),_t.return=Z,Z=_t):(_t=Mc(et.type,et.key,et.props,null,Z.mode,_t),rr(_t,et),_t.return=Z,Z=_t)}return y(Z);case R:t:{for(te=et.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Z,X.sibling),_t=u(X,et.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}_t=Qf(et,Z.mode,_t),_t.return=Z,Z=_t}return y(Z);case Rt:return et=Jr(et),Te(Z,X,et,_t)}if(Nt(et))return kt(Z,X,et,_t);if(it(et)){if(te=it(et),typeof te!="function")throw Error(r(150));return et=te.call(et),ae(Z,X,et,_t)}if(typeof et.then=="function")return Te(Z,X,Nc(et),_t);if(et.$$typeof===rt)return Te(Z,X,Cc(Z,et),_t);Lc(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Z,X.sibling),_t=u(X,et),_t.return=Z,Z=_t):(a(Z,X),_t=Kf(et,Z.mode,_t),_t.return=Z,Z=_t),y(Z)):a(Z,X)}return function(Z,X,et,_t){try{al=0;var te=Te(Z,X,et,_t);return Hs=null,te}catch(he){if(he===Fs||he===Dc)throw he;var Oe=hi(29,he,null,Z.mode);return Oe.lanes=_t,Oe.return=Z,Oe}}}var ts=Kg(!0),Qg=Kg(!1),sr=!1;function oh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function or(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lr(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sc(e),Og(e,null,a),n}return xc(e,o,n,a),Sc(e)}function rl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,j(e,a)}}function ch(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var uh=!1;function sl(){if(uh){var e=Bs;if(e!==null)throw e}}function ol(e,n,a,o){uh=!1;var u=e.updateQueue;sr=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,Q=I.next;I.next=null,y===null?f=Q:y.next=Q,y=I;var st=e.alternate;st!==null&&(st=st.updateQueue,A=st.lastBaseUpdate,A!==y&&(A===null?st.firstBaseUpdate=Q:A.next=Q,st.lastBaseUpdate=I))}if(f!==null){var yt=u.baseState;y=0,st=Q=I=null,A=f;do{var W=A.lane&-536870913,at=W!==A.lane;if(at?(Le&W)===W:(o&W)===W){W!==0&&W===Kr&&(uh=!0),st!==null&&(st=st.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ae=A;W=n;var Te=a;switch(ae.tag){case 1:if(kt=ae.payload,typeof kt=="function"){yt=kt.call(Te,yt,W);break t}yt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ae.payload,W=typeof kt=="function"?kt.call(Te,yt,W):kt,W==null)break t;yt=O({},yt,W);break t;case 2:sr=!0}}W=A.callback,W!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[W]:at.push(W))}else at={lane:W,tag:A.tag,payload:A.payload,callback:A.callback,next:null},st===null?(Q=st=at,I=yt):st=st.next=at,y|=W;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;at=A,A=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);st===null&&(I=yt),u.baseState=I,u.firstBaseUpdate=Q,u.lastBaseUpdate=st,f===null&&(u.shared.lanes=0),mr|=y,e.lanes=y,e.memoizedState=yt}}function Jg(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function $g(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jg(a[e],n)}var cr=vt(null),Oc=vt(0);function t0(e,n){e=Fa,Et(Oc,e),Et(cr,n),Fa=e|n.baseLanes}function fh(){Et(Oc,Fa),Et(cr,cr.current)}function hh(){Fa=Oc.current,pt(cr),pt(Oc)}var Gn=vt(null),Kn=null;function ur(e){var n=e.alternate;Et(Xn,Xn.current&1),Et(Gn,e),Kn===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(Kn=e)}function dh(e){Et(Xn,Xn.current),Et(Gn,e),Kn===null&&(Kn=e)}function e0(e){e.tag===22?(Et(Xn,Xn.current),Et(Gn,e),Kn===null&&(Kn=e)):fr()}function fr(){Et(Xn,Xn.current),Et(Gn,Gn.current)}function Ei(e){pt(Gn),Kn===e&&(Kn=null),pt(Xn)}var Xn=vt(0);function ll(e,n){Et(Gn,Gn.current),Et(Xn,n)}function ph(e){pt(Xn),pt(Gn),Kn===e&&(Kn=null)}function zc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pd(a)||Id(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var za=0,Ee=null,tn=null,En=null,Pc=!1,Vs=!1,es=!1,Ic=0,cl=0,Gs=null,yM=0;function gn(){throw Error(r(321))}function mh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Mi(e[a],n[a]))return!1;return!0}function gh(e,n,a,o,u,f){return za=f,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ut.H=e===null||e.memoizedState===null?B0:F0,es=!1,f=a(o,u),es=!1,Vs&&(f=i0(n,a,o,u)),n0(e),f}function n0(e){Ut.H=kc;var n=tn!==null&&tn.next!==null;if(za=0,En=tn=Ee=null,Pc=!1,cl=0,Gs=null,n)throw Error(r(300));e===null||Tn||(e=e.dependencies,e!==null&&Rc(e)&&(Tn=!0))}function i0(e,n,a,o){Ee=e;var u=0;do{if(Vs&&(Gs=null),cl=0,Vs=!1,25<=u)throw Error(r(301));if(u+=1,En=tn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Ut.H=RM,f=n(a,o)}while(Vs);return f}function xM(){var e=Ut.H,n=e.useState()[0];return n=typeof n.then=="function"?ul(n):n,e=e.useState()[0],(tn!==null?tn.memoizedState:null)!==e&&(Ee.flags|=1024),n}function vh(){var e=Ic!==0;return Ic=0,e}function _h(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function yh(e){if(Pc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pc=!1}za=0,En=tn=Ee=null,Vs=!1,cl=Ic=0,Gs=null}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?Ee.memoizedState=En=e:En=En.next=e,En}function xn(){if(tn===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=tn.next;var n=En===null?Ee.memoizedState:En.next;if(n!==null)En=n,tn=e;else{if(e===null)throw Ee.alternate===null?Error(r(467)):Error(r(310));tn=e,e={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},En===null?Ee.memoizedState=En=e:En=En.next=e}return En}function Bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var n=cl;return cl+=1,Gs===null&&(Gs=[]),e=Wg(Gs,e,n),n=Ee,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,Ut.H=n===null||n.memoizedState===null?B0:F0),e}function Fc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===mt)return;if(e.$$typeof===rt)return Vn(e)}throw Error(r(438,String(e)))}function xh(e){var n=null,a=Ee.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ee.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bc(),Ee.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=de;return n.index++,a}function Pa(e,n){return typeof n=="function"?n(e):n}function Hc(e){var n=xn();return Sh(n,tn,e)}function Sh(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=y=null,I=null,Q=n,st=!1;do{var yt=Q.lane&-536870913;if(yt!==Q.lane?(Le&yt)===yt:(za&yt)===yt){var W=Q.revertLane;if(W===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),yt===Kr&&(st=!0);else if((za&W)===W){Q=Q.next,W===Kr&&(st=!0);continue}else yt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=yt,y=f):I=I.next=yt,Ee.lanes|=W,mr|=W;yt=Q.action,es&&a(f,yt),f=Q.hasEagerState?Q.eagerState:a(f,yt)}else W={lane:yt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=W,y=f):I=I.next=W,Ee.lanes|=yt,mr|=yt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?y=f:I.next=A,!Mi(f,e.memoizedState)&&(Tn=!0,st&&(a=Bs,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Mh(e){var n=xn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Mi(f,n.memoizedState)||(Tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function a0(e,n,a){var o=Ee,u=xn(),f=Ce;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Mi((tn||u).memoizedState,a);if(y&&(u.memoizedState=a,Tn=!0),u=u.queue,bh(o0.bind(null,o,u,e),[e]),e=u.getSnapshot!==n||y||En!==null&&(En.memoizedState.tag&1)!==0,Xs(e?9:8,{destroy:void 0},s0.bind(null,o,u,a,n),null),e){if(o.flags|=2048,nn===null)throw Error(r(349));f||(za&127)!==0||r0(o,n,a)}return a}function r0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ee.updateQueue,n===null?(n=Bc(),Ee.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function s0(e,n,a,o){n.value=a,n.getSnapshot=o,l0(n)&&c0(e)}function o0(e,n,a){return a(function(){l0(n)&&c0(e)})}function l0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Mi(e,a)}catch{return!0}}function c0(e){var n=kr(e,2);n!==null&&gi(n,e,2)}function Eh(e){var n=ii();if(typeof e=="function"){var a=e;if(e=a(),es){un(!0);try{a()}finally{un(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},n}function u0(e,n,a,o){return e.baseState=a,Sh(e,tn,typeof o=="function"?o:Pa)}function SM(e,n,a,o,u){if(Xc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};Ut.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,f0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function f0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=Ut.T,y={};y.types=f!==null?f.types:null,Ut.T=y;try{var A=a(u,o),I=Ut.S;I!==null&&I(y,A),h0(e,n,A)}catch(Q){Th(e,n,Q)}finally{f!==null&&y.types!==null&&(f.types=y.types),Ut.T=f}}else try{f=a(u,o),h0(e,n,f)}catch(Q){Th(e,n,Q)}}function h0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){d0(e,n,o)},function(o){return Th(e,n,o)}):d0(e,n,a)}function d0(e,n,a){n.status="fulfilled",n.value=a,p0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,f0(e,a)))}function Th(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,p0(n),n=n.next;while(n!==o)}e.action=null}function p0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function m0(e,n){return n}function g0(e,n){if(Ce){var a=nn.formState;if(a!==null){t:{var o=Ee;if(Ce){if(sn){e:{for(var u=sn,f=Fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){sn=Vi(u.nextSibling),o=u.data==="F!";break t}}ir(o)}o=!1}o&&(n=a[0])}}return a=ii(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:m0,lastRenderedState:n},a.queue=o,a=z0.bind(null,Ee,o),o.dispatch=a,o=Eh(!1),f=Dh.bind(null,Ee,!1,o.queue),o=ii(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=SM.bind(null,Ee,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function v0(e){var n=xn();return _0(n,tn,e)}function _0(e,n,a){if(n=Sh(e,n,m0)[0],e=Hc(Pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ul(n)}catch(y){throw y===Fs?Dc:y}else o=n;n=xn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Ee.flags|=2048,Xs(9,{destroy:void 0},MM.bind(null,u,a),null)),[o,f,e]}function MM(e,n){e.action=n}function y0(e){var n=xn(),a=tn;if(a!==null)return _0(n,a,e);xn(),n=n.memoizedState,a=xn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=Bc(),Ee.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function x0(){return xn().memoizedState}function Vc(e,n,a,o){var u=ii();Ee.flags|=e,u.memoizedState=Xs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gc(e,n,a,o){var u=xn();o=o===void 0?null:o;var f=u.memoizedState.inst;tn!==null&&o!==null&&mh(o,tn.memoizedState.deps)?u.memoizedState=Xs(n,f,a,o):(Ee.flags|=e,u.memoizedState=Xs(1|n,f,a,o))}function S0(e,n){Vc(8390656,8,e,n)}function bh(e,n){Gc(2048,8,e,n)}function EM(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=Bc(),Ee.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function M0(e){var n=xn().memoizedState;return EM({ref:n,nextImpl:e}),function(){if((ke&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function E0(e,n){return Gc(4,2,e,n)}function T0(e,n){return Gc(4,4,e,n)}function b0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function A0(e,n,a){a=a!=null?a.concat([e]):null,Gc(4,4,b0.bind(null,n,e),a)}function Ah(){}function R0(e,n){var a=xn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&mh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function C0(e,n){var a=xn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&mh(n,o[1]))return o[0];if(o=e(),es){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[o,n],o}function Rh(e,n,a){return a===void 0||(za&1073741824)!==0&&(Le&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Bv(),Ee.lanes|=e,mr|=e,a)}function w0(e,n,a,o){return Mi(a,n)?a:cr.current!==null?(e=Rh(e,a,o),Mi(e,n)||(Tn=!0),e):(za&106)===0||(za&1073741824)!==0&&(Le&261930)===0?(Tn=!0,e.memoizedState=a):(e=Bv(),Ee.lanes|=e,mr|=e,n)}function D0(e,n,a,o,u){var f=qt.p;qt.p=f!==0&&8>f?f:8;var y=Ut.T,A={};A.types=y!==null?y.types:null,Ut.T=A,Dh(e,!1,n,a);try{var I=u(),Q=Ut.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var st=_M(I,o);fl(e,n,st,Ri(e))}else fl(e,n,o,Ri(e))}catch(yt){fl(e,n,{then:function(){},status:"rejected",reason:yt},Ri())}finally{qt.p=f,y!==null&&A.types!==null&&(y.types=A.types),Ut.T=y}}function TM(){}function Ch(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=U0(e).queue;D0(e,u,n,F,a===null?TM:function(){return N0(e),a(o)})}function U0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:F},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function N0(e){var n=U0(e);n.next===null&&(n=e.alternate.memoizedState),fl(e,n.next.queue,{},Ri())}function wh(){return Vn(lo)}function L0(){return xn().memoizedState}function O0(){return xn().memoizedState}function bM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ri();e=or(a);var o=lr(n,e,a);o!==null&&(gi(o,n,a),rl(o,n,a)),n={cache:ih()},e.payload=n;return}n=n.return}}function AM(e,n,a){var o=Ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xc(e)?P0(n,a):(a=jf(e,n,a,o),a!==null&&(gi(a,e,o),I0(a,n,o)))}function z0(e,n,a){var o=Ri();fl(e,n,a,o)}function fl(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xc(e))P0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,Mi(A,y))return xc(e,n,u,0),nn===null&&yc(),!1}catch{}if(a=jf(e,n,u,o),a!==null)return gi(a,e,o),I0(a,n,o),!0}return!1}function Dh(e,n,a,o){if(o={lane:2,revertLane:xd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xc(e)){if(n)throw Error(r(479))}else n=jf(e,a,o,2),n!==null&&gi(n,e,2)}function Xc(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function P0(e,n){Vs=Pc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function I0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,j(e,a)}}var kc={readContext:Vn,use:Fc,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn,useEffectEvent:gn},B0={readContext:Vn,use:Fc,useCallback:function(e,n){return ii().memoizedState=[e,n===void 0?null:n],e},useContext:Vn,useEffect:S0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vc(4194308,4,b0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vc(4194308,4,e,n)},useInsertionEffect:function(e,n){Vc(4,2,e,n)},useMemo:function(e,n){var a=ii();n=n===void 0?null:n;var o=e();if(es){un(!0);try{e()}finally{un(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ii();if(a!==void 0){var u=a(n);if(es){un(!0);try{a(n)}finally{un(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=AM.bind(null,Ee,e),[o.memoizedState,e]},useRef:function(e){var n=ii();return e={current:e},n.memoizedState=e},useState:function(e){e=Eh(e);var n=e.queue,a=z0.bind(null,Ee,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ah,useDeferredValue:function(e,n){var a=ii();return Rh(a,e,n)},useTransition:function(){var e=Eh(!1);return e=D0.bind(null,Ee,e.queue,!0,!1),ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ee,u=ii();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),nn===null)throw Error(r(349));(Le&127)!==0||r0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,S0(o0.bind(null,o,f,e),[e]),o.flags|=2048,Xs(9,{destroy:void 0},s0.bind(null,o,f,a,n),null),a},useId:function(){var e=ii(),n=nn.identifierPrefix;if(Ce){var a=da,o=ha;a=(o&~(1<<32-yn(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ic++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:wh,useFormState:g0,useActionState:g0,useOptimistic:function(e){var n=ii();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dh.bind(null,Ee,!0,a),a.dispatch=n,[e,n]},useMemoCache:xh,useCacheRefresh:function(){return ii().memoizedState=bM.bind(null,Ee)},useEffectEvent:function(e){var n=ii(),a={impl:e};return n.memoizedState=a,function(){if((ke&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},F0={readContext:Vn,use:Fc,useCallback:R0,useContext:Vn,useEffect:bh,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:Hc,useRef:x0,useState:function(){return Hc(Pa)},useDebugValue:Ah,useDeferredValue:function(e,n){var a=xn();return w0(a,tn.memoizedState,e,n)},useTransition:function(){var e=Hc(Pa)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:a0,useId:L0,useHostTransitionStatus:wh,useFormState:v0,useActionState:v0,useOptimistic:function(e,n){var a=xn();return u0(a,tn,e,n)},useMemoCache:xh,useCacheRefresh:O0,useEffectEvent:M0},RM={readContext:Vn,use:Fc,useCallback:R0,useContext:Vn,useEffect:bh,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:Mh,useRef:x0,useState:function(){return Mh(Pa)},useDebugValue:Ah,useDeferredValue:function(e,n){var a=xn();return tn===null?Rh(a,e,n):w0(a,tn.memoizedState,e,n)},useTransition:function(){var e=Mh(Pa)[0],n=xn().memoizedState;return[typeof e=="boolean"?e:ul(e),n]},useSyncExternalStore:a0,useId:L0,useHostTransitionStatus:wh,useFormState:y0,useActionState:y0,useOptimistic:function(e,n){var a=xn();return tn!==null?u0(a,tn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:xh,useCacheRefresh:O0,useEffectEvent:M0};function Uh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:O({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Ri(),u=or(o);u.payload=n,a!=null&&(u.callback=a),n=lr(e,u,o),n!==null&&(gi(n,e,o),rl(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Ri(),u=or(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=lr(e,u,o),n!==null&&(gi(n,e,o),rl(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Ri(),o=or(a);o.tag=2,n!=null&&(o.callback=n),n=lr(e,o,a),n!==null&&(gi(n,e,a),rl(n,e,a))}};function H0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Qo(a,o)||!Qo(u,f):!0}function V0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Nh.enqueueReplaceState(n,n.state,null)}function ns(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=O({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function G0(e){_c(e)}function X0(e){console.error(e)}function k0(e){_c(e)}function qc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function q0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Lh(e,n,a){return a=or(a),a.tag=3,a.payload={element:null},a.callback=function(){qc(e,n)},a}function Y0(e){return e=or(e),e.tag=3,e}function W0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){q0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){q0(n,a,o),typeof u!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function CM(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&jr(n,a,u,!0),a=Gn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Kn===null?hu():a.alternate===null&&vn===0&&(vn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Uc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),vd(e,o,u)),!1;case 22:return a.flags|=65536,o===Uc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),vd(e,o,u)),!1}throw Error(r(435,a.tag))}return vd(e,o,u),hu(),!1}if(Ce)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$f&&(e=Error(r(422),{cause:o}),tl(Pi(e,a)))):(o!==$f&&(n=Error(r(423),{cause:o}),tl(Pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Pi(o,a),u=Lh(e.stateNode,o,u),ch(e,u),vn!==4&&(vn=2)),!1;var f=Error(r(520),{cause:o});if(f=Pi(f,a),yl===null?yl=[f]:yl.push(f),vn!==4&&(vn=2),n===null)return!0;o=Pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Lh(a.stateNode,o,e),ch(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(gr===null||!gr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Y0(u),W0(u,e,a,o),ch(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Oh=Error(r(461)),Tn=!1;function wn(e,n,a,o){n.child=e===null?Qg(n,null,a,o):ts(n,e.child,a,o)}function j0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return Zr(n),o=gh(e,n,a,y,f,u),A=vh(),e!==null&&!Tn?(_h(e,n,u),Ia(e,n,u)):(Ce&&A&&Tc(n),n.flags|=1,wn(e,n,o,u),n.child)}function Z0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Zf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,K0(e,n,f,o,u)):(e=Mc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Gh(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(y,o)&&e.ref===n.ref)return Ia(e,n,u)}return n.flags|=1,e=Ua(f,o),e.ref=n.ref,e.return=n,n.child=e}function K0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Qo(f,o)&&e.ref===n.ref)if(Tn=!1,n.pendingProps=o=f,Gh(e,u))(e.flags&131072)!==0&&(Tn=!0);else return n.lanes=e.lanes,Ia(e,n,u)}return zh(e,n,a,o,u)}function Q0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return J0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wc(n,f!==null?f.cachePool:null),f!==null?t0(n,f):fh(),e0(n);else return o=n.lanes=536870912,J0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(wc(n,f.cachePool),t0(n,f),fr(),n.memoizedState=null):(e!==null&&wc(n,null),fh(),fr());return wn(e,n,u,a),n.child}function hl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function J0(e,n,a,o,u){var f=rh();return f=f===null?null:{parent:Mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&wc(n,null),fh(),e0(n),e!==null&&jr(e,n,o,!0),n.childLanes=u,null}function Yc(e,n){return n=Wc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function $0(e,n,a){return ts(n,e.child,null,a),e=Yc(n,n.pendingProps),e.flags|=2,Ei(n),n.memoizedState=null,e}function wM(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=Yc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},hl(null,e);if(dh(n),(e=sn)?(e=b_(e,Fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:er!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=Pg(e),a.return=n,n.child=a,zn=n,sn=null)):e=null,e===null)throw ir(n);return n.lanes=536870912,null}return Yc(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(dh(n),u)if(n.flags&256)n.flags&=-257,n=$0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(Tn||jr(e,n,a,!1),u=(a&e.childLanes)!==0,Tn||u){if(cr.current===null){if(o=nn,o!==null&&(y=ut(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,kr(e,y),gi(o,e,y),Oh;hu()}n=$0(e,n,a)}else e=f.treeContext,sn=Vi(y.nextSibling),zn=n,Ce=!0,nr=null,Fi=!1,e!==null&&Fg(n,e),n=Yc(n,o),n.flags|=134221824;return n}return e=Ua(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ks(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function zh(e,n,a,o,u){return Zr(n),a=gh(e,n,a,o,void 0,u),o=vh(),e!==null&&!Tn?(_h(e,n,u),Ia(e,n,u)):(Ce&&o&&Tc(n),n.flags|=1,wn(e,n,a,u),n.child)}function tv(e,n,a,o,u,f){return Zr(n),n.updateQueue=null,a=i0(n,o,a,u),n0(e),o=vh(),e!==null&&!Tn?(_h(e,n,f),Ia(e,n,f)):(Ce&&o&&Tc(n),n.flags|=1,wn(e,n,a,f),n.child)}function ev(e,n,a,o,u){if(Zr(n),n.stateNode===null){var f=Os,y=a.contextType;typeof y=="object"&&y!==null&&(f=Vn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},oh(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Vn(y):Os,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Uh(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Nh.enqueueReplaceState(f,f.state,null),ol(n,o,f,u),sl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=ns(a,A);f.props=I;var Q=f.context,st=a.contextType;y=Os,typeof st=="object"&&st!==null&&(y=Vn(st));var yt=a.getDerivedStateFromProps;st=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,st||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||Q!==y)&&V0(n,f,o,y),sr=!1;var W=n.memoizedState;f.state=W,ol(n,o,f,u),sl(),Q=n.memoizedState,A||W!==Q||sr?(typeof yt=="function"&&(Uh(n,a,yt,o),Q=n.memoizedState),(I=sr||H0(n,a,I,o,W,Q,y))?(st||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),f.props=o,f.state=Q,f.context=y,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,lh(e,n),y=n.memoizedProps,st=ns(a,y),f.props=st,yt=n.pendingProps,W=f.context,Q=a.contextType,I=Os,typeof Q=="object"&&Q!==null&&(I=Vn(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==yt||W!==I)&&V0(n,f,o,I),sr=!1,W=n.memoizedState,f.state=W,ol(n,o,f,u),sl();var at=n.memoizedState;y!==yt||W!==at||sr||e!==null&&e.dependencies!==null&&Rc(e.dependencies)?(typeof A=="function"&&(Uh(n,a,A,o),at=n.memoizedState),(st=sr||H0(n,a,st,o,W,at,I)||e!==null&&e.dependencies!==null&&Rc(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=I,o=st):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&W===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ks(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ts(n,e.child,null,u),n.child=ts(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Ia(e,n,u),e}function nv(e,n,a,o){return Yr(),n.flags|=256,wn(e,n,a,o),n.child}var Ph={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ih(e){return{baseLanes:e,cachePool:qg()}}function Bh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ai),e}function iv(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Xn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?ur(n):fr(),(e=sn)?(e=b_(e,Fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:er!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},a=Pg(e),a.return=n,n.child=a,zn=n,sn=null)):e=null,e===null)throw ir(n);return Id(e)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?(fr(),u=n.mode,f=Wc({mode:"hidden",children:f},u),o=qr(o,u,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=Ih(a),o.childLanes=Bh(e,y,a),n.memoizedState=Ph,hl(null,o)):(ur(n),Fh(n,f))}var A=e.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return DM(e,n,f,y,o,I,A,a)}return u?(fr(),u=o.fallback,f=n.mode,A=e.child,I=A.sibling,o=Ua(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&1206910976,I!==null?u=Ua(I,u):(u=qr(u,f,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,hl(null,o),o=n.child,u=e.child.memoizedState,u===null?u=Ih(a):(f=u.cachePool,f!==null?(A=Mn._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=qg(),u={baseLanes:u.baseLanes|a,cachePool:f}),o.memoizedState=u,o.childLanes=Bh(e,y,a),n.memoizedState=Ph,hl(e.child,o)):(ur(n),a=e.child,e=a.sibling,a=Ua(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Fh(e,n){return n=Wc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wc(e,n){return e=hi(22,e,null,n),e.lanes=0,e}function jc(e,n,a){return ts(n,e.child,null,a),e=Fh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function DM(e,n,a,o,u,f,y,A){if(a)return n.flags&256?(ur(n),n.flags&=-257,jc(e,n,A)):n.memoizedState!==null?(fr(),n.child=e.child,n.flags|=128,null):(fr(),f=u.fallback,y=n.mode,u=Wc({mode:"visible",children:u.children},y),f=qr(f,y,A,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,ts(n,e.child,null,A),u=n.child,u.memoizedState=Ih(A),u.childLanes=Bh(e,o,A),n.memoizedState=Ph,hl(null,u));if(ur(n),Id(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var I=o.dgst;return o=I,o!==""&&(u=Error(r(419)),u.stack="",u.digest=o,tl({value:u,source:null,stack:null})),jc(e,n,A)}if(Tn||jr(e,n,A,!1),o=(A&e.childLanes)!==0,Tn||o){if(cr.current!==null)return jc(e,n,A);if(o=nn,o!==null&&(u=ut(o,A),u!==0&&u!==y.retryLane))throw y.retryLane=u,kr(e,u),gi(o,e,u),Oh;return Pd(f)||hu(),jc(e,n,A)}return Pd(f)?(n.flags|=192,n.child=e.child,null):(e=y.treeContext,sn=Vi(f.nextSibling),zn=n,Ce=!0,nr=null,Fi=!1,e!==null&&Fg(n,e),n=Fh(n,u.children),n.flags|=134221824,n)}function av(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ac(e.return,n,a)}function rv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&zc(a)===null&&(n=e),e=e.sibling}return n}function Zc(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Hh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Vh(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=Xn.current;if(n.flags&128)return ll(n,y),null;var A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,ll(n,y),u==="backwards"&&e!==null?(Hh(e),wn(e,n,o,a),Hh(e)):wn(e,n,o,a),o=Ce?$o:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&av(e,a,n);else if(e.tag===19)av(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=rv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Hh(n)),Zc(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zc(n,!0,a,null,f,o);break;case"together":Zc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=rv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zc(n,!1,u,a,f,o)}return n.child}function sv(e,n,a){var o=n.pendingProps;return ar(n,n.type,o.value),wn(e,n,o.children,a),n.child}function Ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),mr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ua(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ua(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rc(e)))}function UM(e,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),ar(n,Mn,e.memoizedState.cache),Yr();break;case 27:case 5:J(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:ar(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,dh(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return ur(n),n.flags|=128,null;o=jr(e,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?iv(e,n,a):(ur(n),e=Ia(e,n,a),e!==null?e.sibling:null)}ur(n);break;case 19:if(n.flags&128)return Vh(e,n,a);if(u=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(jr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Vh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ll(n,Xn.current),o)break;return null;case 22:return n.lanes=0,Q0(e,n,a,n.pendingProps);case 24:ar(n,Mn,e.memoizedState.cache)}return Ia(e,n,a)}function ov(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Tn=!0;else{if(!Gh(e,a)&&(n.flags&128)===0)return Tn=!1,UM(e,n,a);Tn=(e.flags&131072)!==0}else Tn=!1,Ce&&(n.flags&1048576)!==0&&Bg(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Jr(n.elementType),n.type=e,typeof e=="function")Zf(e)?(o=ns(e,o),n.tag=1,n=ev(null,n,e,o,a)):(n.tag=0,n=zh(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===q){n.tag=11,n=j0(null,n,e,o,a);break t}else if(u===ht){n.tag=14,n=Z0(null,n,e,o,a);break t}else if(u===rt){n.tag=10,n.type=e,n=sv(null,n,a);break t}}throw n=zt(e)||e,Error(r(306,n,""))}}return n;case 0:return zh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ns(o,n.pendingProps),ev(e,n,o,u,a);case 3:t:{if(L(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,lh(e,n),ol(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ar(n,Mn,o),o!==f.cache&&nh(n,[Mn],a,!0),sl(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=nv(e,n,o,a);break t}else if(o!==u){u=Pi(Error(r(424)),n),tl(u),n=nv(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,sn=Vi(e.firstChild),zn=n,Ce=!0,nr=null,Fi=!0,a=Qg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Yr(),o===u){n=Ia(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return ks(e,n),e===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(n.stateNode=f_(n.type,n.pendingProps,le.current,n)):n.memoizedState=N_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return J(n),e===null&&Ce&&(o=n.stateNode=C_(n.type,n.pendingProps,le.current),zn=n,Fi=!0,u=sn,yr(n.type)?(Bd=u,sn=Vi(o.firstChild)):sn=u),wn(e,n,n.pendingProps.children,a),ks(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=sn)&&(o=bE(o,n.type,n.pendingProps,Fi),o!==null?(n.stateNode=o,zn=n,sn=Vi(o.firstChild),Fi=!1,u=!0):u=!1),u||ir(n)),J(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,wd(u,f)?o=null:y!==null&&wd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=gh(e,n,xM,null,null,a),lo._currentValue=u),ks(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=sn)&&(a=AE(a,n.pendingProps,Fi),a!==null?(n.stateNode=a,zn=n,sn=null,e=!0):e=!1),e||ir(n)),null;case 13:return iv(e,n,a);case 4:return L(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ts(n,null,o,a):wn(e,n,o,a),n.child;case 11:return j0(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,ks(e,n),wn(e,n,o,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return sv(e,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,Zr(n),u=Vn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return Z0(e,n,n.type,n.pendingProps,a);case 15:return K0(e,n,n.type,n.pendingProps,a);case 19:return Vh(e,n,a);case 31:return wM(e,n,a);case 22:return Q0(e,n,a,n.pendingProps);case 24:return Zr(n),o=Vn(Mn),e===null?(u=rh(),u===null&&(u=nn,f=ih(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},oh(n),ar(n,Mn,u)):((e.lanes&a)!==0&&(lh(e,n),ol(n,null,null,a),sl()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ar(n,Mn,o)):(o=f.cache,ar(n,Mn,o),o!==u.cache&&nh(n,[Mn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:Ce&&Tc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:ks(e,n),wn(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ba(e){e.flags|=4}function Xh(e,n,a,o,u){var f;if((f=(e.mode&32)!==0)&&(f=a===null?P_(n,o):P_(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Gv())e.flags|=8192;else throw $r=Uc,sh}else e.flags&=-16777217}function lv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I_(n))if(Gv())e.flags|=8192;else throw $r=Uc,sh}function Kc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Es():536870912,e.lanes|=n,Zs|=n)}function dl(e,n){if(!Ce)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function on(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function NM(e,n,a){var o=n.pendingProps;switch(Jf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(n),null;case 1:return on(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Oa(Mn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Is(n)?Ba(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,th())),on(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ba(n),f!==null?(on(n),lv(n,f)):(on(n),Xh(n,u,null,o,a))):f?f!==e.memoizedState?(Ba(n),on(n),lv(n,f)):(on(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ba(n),on(n),Xh(n,u,e,o,a)),null;case 27:if(ft(n),a=le.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ba(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return on(n),n.subtreeFlags&=-33554433,null}e=Ct.current,Is(n)?Hg(n):(e=C_(u,o,a),n.stateNode=e,Ba(n))}return on(n),n.subtreeFlags&=-33554433,null;case 5:if(ft(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ba(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return on(n),n.subtreeFlags&=-33554433,null}if(f=Ct.current,Is(n))Hg(n);else{var y=Tl(le.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[Bt]=n,f[ne]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(qn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ba(n)}}return on(n),n.subtreeFlags&=-33554433,Xh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ba(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=le.current,Is(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Bt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||o_(e.nodeValue,a)),e||ir(n,!0)}else e=Tl(e).createTextNode(o),e[Bt]=n,n.stateNode=e}return on(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Is(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Bt]=n}else Yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),e=!1}else a=th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Ei(n),n):(Ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return on(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Is(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Bt]=n}else Yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),u=!1}else u=th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ei(n),n):(Ei(n),null)}return Ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kc(n,n.updateQueue),on(n),null);case 4:return b(),e===null&&Td(n.stateNode.containerInfo),n.flags|=67108864,on(n),null;case 10:return Oa(n.type),on(n),null;case 19:if(ph(n),o=n.memoizedState,o===null)return on(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)dl(o,!1);else{if(vn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=zc(e),f!==null){for(n.flags|=128,dl(o,!1),e=f.updateQueue,n.updateQueue=e,Kc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zg(a,e),a=a.sibling;return ll(n,Xn.current&1|2),Ce&&Na(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&k()>lu&&(n.flags|=128,u=!0,dl(o,!1),n.lanes=4194304)}else{if(!u)if(e=zc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Kc(n,e),dl(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!Ce)return on(n),null}else 2*k()-o.renderingStartTime>lu&&a!==536870912&&(n.flags|=128,u=!0,dl(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){e=o.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=k(),e.sibling=null,f=Xn.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Ce?ll(n,f):(a=f,Et(Gn,n),Et(Xn,a),Kn===null&&(Kn=n)),Ce&&Na(n,o.treeForkCount),e}return on(n),null;case 22:case 23:return Ei(n),hh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(on(n),n.subtreeFlags&6&&(n.flags|=8192)):on(n),a=n.updateQueue,a!==null&&Kc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&pt(Qr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oa(Mn),on(n),null;case 25:return null;case 30:return n.flags|=33554432,on(n),null}throw Error(r(156,n.tag))}function LM(e,n){switch(Jf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oa(Mn),b(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(Ei(n),n.alternate===null)throw Error(r(340));Yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ph(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return Oa(n.type),null;case 22:case 23:return Ei(n),hh(),e!==null&&pt(Qr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oa(Mn),null;case 25:return null;default:return null}}function cv(e,n){switch(Jf(n),n.tag){case 3:Oa(Mn),b();break;case 26:case 27:case 5:ft(n);break;case 4:b();break;case 31:n.memoizedState!==null&&Ei(n);break;case 13:Ei(n);break;case 19:ph(n);break;case 10:Oa(n.type);break;case 22:case 23:Ei(n),hh(),e!==null&&pt(Qr);break;case 24:Oa(Mn)}}function pl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Ke(n,n.return,A)}}function hr(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var I=a,Q=A;try{Q()}catch(st){Ke(u,I,st)}}}o=o.next}while(o!==f)}}catch(st){Ke(n,n.return,st)}}function uv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$g(n,a)}catch(o){Ke(e,e.return,o)}}}function fv(e,n,a){a.props=ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ke(e,n,o)}}function pa(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var u=e.stateNode,f=wa(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=__(f)),o=u.ref;break;case 7:if(e.stateNode===null){var y=new Ci(e);g(e.child,!1,EE,y,void 0,void 0),e.stateNode=y}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(A){Ke(e,n,A)}}function kn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ke(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ke(e,n,u)}else a.current=null}function Qc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)T_(e.stateNode,n[a])}function hv(e){for(var n=e.return;n!==null&&(qh(n)&&T_(e.stateNode,n.stateNode),!kh(n));)n=n.return}function ml(e){for(var n=e.return;n!==null&&(qh(n)&&TE(e.stateNode,n.stateNode),!kh(n));)n=n.return}function kh(e){return e.tag===5||e.tag===3||e.tag===27}function qh(e){return e&&e.tag===7&&e.stateNode!==null}function Yh(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ke(e,e.return,u)}}function Wh(e,n,a){try{var o=e.stateNode;rE(o,e.type,a,n),o[ne]=n}catch(u){Ke(e,e.return,u)}}function dv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yr(e.type)||e.tag===4}function jh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zh(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fa)),Qc(e,o),Me=!0;else if(u!==4&&(u===27&&(Qc(e,o),o=null,yr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Zh(e,n,a,o),e=e.sibling;e!==null;)Zh(e,n,a,o),e=e.sibling}function Jc(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Qc(e,o),Me=!0;else if(u!==4&&(u===27&&(Qc(e,o),o=null,yr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Jc(e,n,a,o),e=e.sibling;e!==null;)Jc(e,n,a,o),e=e.sibling}function pv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);qn(n,o,a),n[Bt]=e,n[ne]=a}catch(f){Ke(e,e.return,f)}}var $c=!1,Ti=null;function mv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&($c=!0)}var ma=null;function gv(){var e=ma;return ma=null,e}var di=0;function qs(e,n,a,o,u){return di=0,vv(e.child,n,a,o,u)}function vv(e,n,a,o,u){for(var f=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(o!==null){var A=Nd(y);o.push(A),A.view&&(f=!0)}else f||Nd(y).view&&(f=!0);$c=!0,g_(y,di===0?n:n+"_"+di,a),di++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||vv(e.child,n,a,o,u)&&(f=!0));e=e.sibling}return f}function ga(e,n){for(;e!==null;)e.tag===5?v_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ga(e.child,n)),e=e.sibling}function tu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(tu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Da(n.default,n.share),n!=="none"&&(qs(e,a,n,null,!1)||ga(e.child,!1))}e=e.sibling}}function Kh(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,u=wa(o,a),f=Da(o.default,a.paired?o.share:o.enter);f!=="none"?qs(e,u,f,null,!1)?(tu(e),a.paired||n||$s(e,o.onEnter)):ga(e.child,!1):tu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Kh(e,n),e=e.sibling;else tu(e)}function Qh(e){if(Ti!==null&&Ti.size!==0){var n=Ti;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=Da(a.default,a.share);if(f!=="none"&&(qs(e,o,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,$s(e,a.onShare)):ga(e.child,!1)),n.delete(o),n.size===0)break}}}Qh(e)}e=e.sibling}}}function Jh(e){if(e.tag===30){var n=e.memoizedProps,a=wa(n,e.stateNode),o=Ti!==null?Ti.get(a):void 0,u=Da(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(qs(e,a,u,null,!1)?o!==void 0?(u=e.stateNode,o.paired=u,u.paired=o,Ti.delete(a),$s(e,n.onShare)):$s(e,n.onExit):ga(e.child,!1)),Ti!==null&&Qh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Jh(e),e=e.sibling;else Ti!==null&&Qh(e)}function _v(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=wa(n,e.stateNode);n=Da(n.default,n.update),e.flags&=-5,n!=="none"&&qs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&_v(e);e=e.sibling}}function $h(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ga(e.child,!1))}$h(e)}e=e.sibling}}function eu(e){if(e.tag===30)e.stateNode.paired=null,ga(e.child,!1),$h(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)eu(e),e=e.sibling;else $h(e)}function yv(e){for(e=e.child;e!==null;)e.tag===30?ga(e.child,!1):(e.subtreeFlags&33554432)!==0&&yv(e),e=e.sibling}function td(e,n,a,o,u,f,y){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&di<f.length){var Q=f[di],st=Nd(I);(Q.view||st.view)&&(A=!0);var yt;if(yt=(e.flags&4)===0)if(st.clip)yt=!0;else{yt=Q.rect;var W=st.rect;yt=yt.y!==W.y||yt.x!==W.x||yt.height!==W.height||yt.width!==W.width}yt&&(e.flags|=4),st.abs?st=!Q.abs:(Q=Q.rect,st=st.rect,st=Q.height!==st.height||Q.width!==st.width),st&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&g_(I,di===0?a:a+"_"+di,u),A&&(e.flags&4)!==0||(ma===null&&(ma=[]),ma.push(I,di===0?o:o+"_"+di,n.memoizedProps)),di++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?e.flags|=n.flags&32:td(e,n.child,a,o,u,f,y)&&(A=!0));n=n.sibling}return A}function xv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,u=wa(a,o),f=Da(a.default,a.update),y;y=e.memoizedState,e.memoizedState=null,o=e;var A=e.child;di=0,u=td(o,A,u,u,f,y,!1),(e.flags&4)!==0&&u&&$s(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&xv(e);e=e.sibling}}var Pn=!1,We=!1,va=!1,ed=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,In=null,_a=!1,gl=!1,nu=!1,nd=!1;function OM(e,n,a){if(e=e.containerInfo,Rd=co,e=bg(e),Gf(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,y=u.focusNode;u=u.focusOffset;try{o.nodeType,y.nodeType}catch{o=null;break t}var A=0,I=-1,Q=-1,st=0,yt=0,W=e,at=null;e:for(;;){for(var kt;W!==o||f!==0&&W.nodeType!==3||(I=A+f),W!==y||u!==0&&W.nodeType!==3||(Q=A+u),W.nodeType===3&&(A+=W.nodeValue.length),(kt=W.firstChild)!==null;)at=W,W=kt;for(;;){if(W===e)break e;if(at===o&&++st===f&&(I=A),at===y&&++yt===u&&(Q=A),(kt=W.nextSibling)!==null)break;W=at,at=W.parentNode}W=kt}o=I===-1||Q===-1?null:{start:I,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cd={focusedElem:e,selectionRange:o},co=!1,a=(a&335544064)===a,In=n,n=a?9270:1024;In!==null;){if(e=In,a&&(o=e.deletions,o!==null))for(f=0;f<o.length;f++)a&&Jh(o[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&mv(e),iu(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&Jh(o),iu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&mv(e),iu(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,In=o):(a&&_v(e),iu(a))}}Ti=null}function iu(e){for(;In!==null;){var n=In,a=e,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var y=ns(n.type,u);a=f.getSnapshotBeforeUpdate(y,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){Ke(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)zd(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":zd(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=wa(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=Da(u.default,u.update),u!=="none"&&qs(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(o=n.sibling,o!==null){o.return=n.return,In=o;break}In=n.return}}function Mv(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),o&4&&pl(5,a);break;case 1:if(ya(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ke(a,a.return,y)}else{var u=ns(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ke(a,a.return,y)}}o&64&&uv(a),o&512&&pa(a,a.return);break;case 3:if(ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$g(e,n)}catch(y){Ke(a,a.return,y)}}break;case 27:n===null&&o&4&&pv(a);case 26:case 5:ya(e,a),n===null&&o&4&&Yh(a),o&512&&pa(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),o&4&&Av(e,a);break;case 13:ya(e,a),o&4&&Rv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=YM.bind(null,a),RE(e,a))));break;case 22:if(o=a.memoizedState!==null||Pn,!o){var f=n!==null&&n.memoizedState!==null||We;n=Pn,u=We,Pn=o,(We=f)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),$i(e,a,o)):ya(e,a),Pn=n,We=u}break;case 30:ya(e,a),o&512&&pa(a,a.return);break;case 7:o&512&&pa(a,a.return);default:ya(e,a)}}function id(e,n){for(e=e.child;e!==null;)Ev(e,n),e=e.sibling}function Ev(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(I){Ke(e,e.return,I)}ad(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Me=!0}catch(I){Ke(e,e.return,I)}break;case 18:try{var A=e.stateNode;n?m_(A,!0):m_(e.stateNode,!1)}catch(I){Ke(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&id(e,n);break;default:id(e,n)}}function ad(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,o=n;switch(a.tag){case 4:Ev(a,o);break t;case 22:a.memoizedState===null&&ad(a,o);break t;default:ad(a,o)}}e=e.sibling}}function Tv(e){var n=e.alternate;n!==null&&(e.alternate=null,Tv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&oe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,pi=!1;function Qi(e,n,a){for(a=a.child;a!==null;)bv(e,n,a),a=a.sibling}function bv(e,n,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:We||kn(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!We&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||kn(a,n),ml(a);var o=fn,u=pi;yr(a.type)&&(fn=a.stateNode,pi=!1),Qi(e,n,a),w_(a.stateNode,a.type,a.memoizedProps),fn=o,pi=u;break;case 5:We||kn(a,n),ml(a);case 6:if(a.tag===6&&ml(a),o=fn,u=pi,fn=null,Qi(e,n,a),fn=o,pi=u,fn!==null)if(pi)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(a.stateNode),Me=!0}catch(f){Ke(a,n,f)}else try{fn.removeChild(a.stateNode),Me=!0}catch(f){Ke(a,n,f)}break;case 18:fn!==null&&(pi?(e=fn,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),uo(e)):p_(fn,a.stateNode));break;case 4:o=fn,u=pi,fn=a.stateNode.containerInfo,pi=!0,Qi(e,n,a),fn=o,pi=u;break;case 0:case 11:case 14:case 15:hr(2,a,n),We||hr(4,a,n),Qi(e,n,a);break;case 1:We||(kn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&fv(a,n,o)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:We=(o=We)||a.memoizedState!==null,Qi(e,n,a),We=o;break;case 30:kn(a,n),Qi(e,n,a);break;case 7:We||kn(a,n),Qi(e,n,a);break;default:Qi(e,n,a)}}function Av(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{uo(e)}catch(a){Ke(n,n.return,a)}}}function Rv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{uo(e)}catch(a){Ke(n,n.return,a)}}function zM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Sv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Sv),n;default:throw Error(r(435,e.tag))}}function au(e,n){var a=zM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=WM.bind(null,e,o);o.then(u,u)}})}function ai(e,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],y=e,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(yr(I.type)){fn=I.stateNode,pi=!1;break t}break;case 5:fn=I.stateNode,pi=!1;break t;case 3:case 4:fn=I.stateNode.containerInfo,pi=!0;break t}I=I.return}if(fn===null)throw Error(r(160));bv(y,A,f),fn=null,pi=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cv(n,e,a),n=n.sibling}var Ji=null;function Cv(e,n,a){var o=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var y=o[f];y.ref.impl=y.nextImpl}ai(n,e,a),ri(e),u&4&&(hr(3,e,e.return),pl(3,e),hr(5,e,e.return));break;case 1:ai(n,e,a),ri(e),u&512&&(We||o===null||kn(o,o.return)),u&64&&Pn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ji,ai(n,e,a),ri(e),u&512&&(We||o===null||kn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(Pn)e.stateNode=f_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[ze]||o[Bt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),qn(o,n,a),o[Bt]=e,Ie(o),n=o;break t;case"link":if(f=z_("link","href",u).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}o=u.createElement(n),qn(o,n,a),u.head.appendChild(o);break;case"meta":if(f=z_("meta","content",u).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}o=u.createElement(n),qn(o,n,a),u.head.appendChild(o);break;default:throw Error(r(468,n))}o[Bt]=e,Ie(o),n=o}e.stateNode=n}else Pn||Gd(f,e.type,e.stateNode);else e.stateNode=O_(f,a,e.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||We||n.parentNode.removeChild(n)):u.count--,a===null?Pn||Gd(f,e.type,e.stateNode):O_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Wh(e,e.memoizedProps,o.memoizedProps);break;case 27:ai(n,e,a),ri(e),u&512&&(We||o===null||kn(o,o.return)),o!==null&&u&4&&Wh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(f=va,va=!1,ai(n,e,a),va=f,ri(e),u&512&&(We||o===null||kn(o,o.return)),e.flags&32){n=e.stateNode;try{ua(n,""),Me=!0}catch(st){Ke(e,e.return,st)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Wh(e,n,o!==null?o.memoizedProps:n)),u&1024&&(ed=!0);break;case 6:if(ai(n,e,a),ri(e),u&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Me=!0}catch(st){Ke(e,e.return,st)}}break;case 3:if(Me=!1,yu=null,f=Ji,Ji=bl(n.containerInfo),ai(n,e,a),Ji=f,ri(e),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(n.containerInfo)}catch(st){Ke(e,e.return,st)}ed&&(ed=!1,wv(e)),Me=!1;break;case 4:u=va,va=Pn,o=Xe(),f=Ji,Ji=bl(e.stateNode.containerInfo),ai(n,e,a),ri(e),Ji=f,Me&&gl&&(nu=!0),Me=o,va=u;break;case 12:ai(n,e,a),ri(e);break;case 31:ai(n,e,a),ri(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,au(e,n)));break;case 13:ai(n,e,a),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(ou=k()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,au(e,n)));break;case 22:f=e.memoizedState!==null,y=o!==null&&o.memoizedState!==null;var A=Pn,I=We,Q=va;Pn=A||f,va=Q||f,We=I||y,ai(n,e,a),We=I,va=Q,Pn=A,ri(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||y||Pn||We||(n=y||We,a=Pn,o=We,Pn=f||Pn,We=n,dr(e,2),Pn=a,We=o),!f&&va||id(e,f)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,au(e,a))));break;case 19:ai(n,e,a),ri(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,au(e,n)));break;case 30:u&512&&(We||o===null||kn(o,o.return)),u=Xe(),f=gl,y=(a&335544064)===a,A=e.memoizedProps,gl=y&&Da(A.default,A.update)!=="none",ai(n,e,a),ri(e),y&&o!==null&&Me&&(e.flags|=4),gl=f,Me=u;break;case 21:break;case 7:u&512&&(We||o===null||kn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:ai(n,e,a),ri(e)}}function ri(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(dv(o)){a=o;break}o=o.return}o=null;for(var u=e.return;u!==null;){if(qh(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(kh(u))break;u=u.return}var y=o;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,I=jh(e);Jc(e,I,A,y);break;case 5:var Q=a.stateNode;a.flags&32&&(ua(Q,""),a.flags&=-33);var st=jh(e);Jc(e,st,Q,y);break;case 3:case 4:var yt=a.stateNode.containerInfo,W=jh(e);Zh(e,W,yt,y);break;default:throw Error(r(161))}}catch(at){Ke(e,e.return,at)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;wv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,co=!0,n.reset(),co=!1),e=e.sibling}}function Ys(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Dv(n,e),n=n.sibling;else xv(n)}function Dv(e,n){var a=e.alternate;if(a===null)Kh(e,!1);else switch(e.tag){case 3:if(nd=_a=!1,gv(),Ys(n,e),!_a&&!nu){if(e=ma,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var u=e[o+1];v_(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),nd=!0}ma=null;break;case 5:Ys(n,e);break;case 4:o=_a,_a=!1,Ys(n,e),_a&&(nu=!0),_a=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Kh(e,!1):Ys(n,e));break;case 30:o=_a,u=gv(),_a=!1,Ys(n,e),_a&&(e.flags|=4);var f=e.memoizedProps,y=e.stateNode;n=wa(f,y),y=wa(a.memoizedProps,y);var A=Da(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,di=0,n=td(e,a,n,y,A,f,!0),di!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?($s(e,e.memoizedProps.onUpdate),ma=u):u!==null&&(u.push.apply(u,ma),ma=u),_a=(e.flags&32)!==0?!0:o;break;default:Ys(n,e)}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mv(e,n.alternate,n),n=n.sibling}function dr(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:hr(4,a,a.return),dr(a,o);break;case 1:kn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&fv(a,a.return,u),dr(a,o);break;case 27:(o&2)!==0&&w_(a.stateNode,a.type,a.memoizedProps);case 5:kn(a,a.return),a.tag!==5&&a.tag!==27||ml(a),dr(a,o);break;case 6:ml(a);break;case 26:kn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||We||u.parentNode.removeChild(u),dr(a,o);break;case 22:a.memoizedState===null&&dr(a,o);break;case 30:kn(a,a.return),dr(a,o);break;case 7:kn(a,a.return);default:dr(a,o)}e=e.sibling}}function $i(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:$i(u,f,a),pl(4,f);break;case 1:if($i(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ke(o,o.return,st)}if(o=f,u=o.updateQueue,u!==null){var I=o.stateNode;try{var Q=u.shared.hiddenCallbacks;if(Q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Q.length;u++)Jg(Q[u],I)}catch(st){Ke(o,o.return,st)}}A&&y&64&&uv(f),pa(f,f.return);break;case 27:(a&2)!==0&&pv(f);case 5:f.tag!==5&&f.tag!==27||hv(f),$i(u,f,a),A&&o===null&&y&4&&Yh(f),pa(f,f.return);break;case 6:hv(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||Pn||Gd(bl(I.ownerDocument),f.type,I),$i(u,f,a),A&&o===null&&y&4&&Yh(f),pa(f,f.return);break;case 12:$i(u,f,a);break;case 31:$i(u,f,a),A&&y&4&&Av(u,f);break;case 13:$i(u,f,a),A&&y&4&&Rv(u,f);break;case 22:f.memoizedState===null&&$i(u,f,a),pa(f,f.return);break;case 30:$i(u,f,a),pa(f,f.return);break;case 7:pa(f,f.return);default:$i(u,f,a)}n=n.sibling}}function rd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&el(a))}function sd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&el(e))}function Hi(e,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Uv(e,n,a,o),n=n.sibling;else u&&yv(n)}function Uv(e,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&eu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(e,n,a,o),f&2048&&pl(9,n);break;case 1:Hi(e,n,a,o);break;case 3:Hi(e,n,a,o),u&&nd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&el(f)));break;case 12:if(f&2048){Hi(e,n,a,o),f=n.stateNode;try{var y=n.memoizedProps,A=y.id,I=y.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(Q){Ke(n,n.return,Q)}}else Hi(e,n,a,o);break;case 31:Hi(e,n,a,o);break;case 13:Hi(e,n,a,o);break;case 23:break;case 22:y=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&eu(A),y._visibility&2?Hi(e,n,a,o):vl(e,n)):(u&&A!==null&&A.memoizedState!==null&&eu(n),y._visibility&2?Hi(e,n,a,o):(y._visibility|=2,Ws(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&rd(A,n);break;case 24:Hi(e,n,a,o),f&2048&&sd(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(ga(f.child,!0),ga(n.child,!0))),Hi(e,n,a,o);break;default:Hi(e,n,a,o)}}function Ws(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,A=a,I=o,Q=y.flags;switch(y.tag){case 0:case 11:case 15:Ws(f,y,A,I,u),pl(8,y);break;case 23:break;case 22:var st=y.stateNode;y.memoizedState!==null?st._visibility&2?Ws(f,y,A,I,u):vl(f,y):(st._visibility|=2,Ws(f,y,A,I,u)),u&&Q&2048&&rd(y.alternate,y);break;case 24:Ws(f,y,A,I,u),u&&Q&2048&&sd(y.alternate,y);break;default:Ws(f,y,A,I,u)}n=n.sibling}}function vl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:vl(a,o),u&2048&&rd(o.alternate,o);break;case 24:vl(a,o),u&2048&&sd(o.alternate,o);break;default:vl(a,o)}n=n.sibling}}var is=8192;function as(e,n,a){if(e.subtreeFlags&is)for(e=e.child;e!==null;)Nv(e,n,a),e=e.sibling}function Nv(e,n,a){switch(e.tag){case 26:as(e,n,a),e.flags&is&&(e.memoizedState!==null?VE(a,Ji,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&F_(a,e)));break;case 5:as(e,n,a),e.flags&is&&(e=e.stateNode,(n&335544128)===n&&F_(a,e));break;case 3:case 4:var o=Ji;Ji=bl(e.stateNode.containerInfo),as(e,n,a),Ji=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=is,is=16777216,as(e,n,a),is=o):as(e,n,a));break;case 30:if((e.flags&is)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var u=e.stateNode;u.paired=null,Ti===null&&(Ti=new Map),Ti.set(o,u)}as(e,n,a);break;default:as(e,n,a)}}function Lv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,zv(o,e)}Lv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ov(e),e=e.sibling}function Ov(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&hr(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ru(e)):_l(e);break;default:_l(e)}}function ru(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,zv(o,e)}Lv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:hr(8,n,n.return),ru(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ru(n));break;default:ru(n)}e=e.sibling}}function zv(e,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:hr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:el(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,In=o;else t:for(a=e;In!==null;){o=In;var u=o.sibling,f=o.return;if(Tv(o),o===a){In=null;break t}if(u!==null){u.return=f,In=u;break t}In=f}}}var PM={getCacheForType:function(e){var n=Vn(Mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Vn(Mn).controller.signal}},IM=typeof WeakMap=="function"?WeakMap:Map,ke=0,nn=null,Ue=null,Le=0,Ze=0,bi=null,pr=!1,js=!1,od=!1,Fa=0,vn=0,mr=0,rs=0,su=0,Ai=0,Zs=0,yl=null,mi=null,ld=!1,ou=0,Pv=0,lu=1/0,cu=null,gr=null,dn=0,ta=null,ss=null,xa=0,cd=0,ud=null,Iv=null,Ks=null,Qs=null,Js=null,xl=0,uu=null;function Ri(){return(ke&2)!==0&&Le!==0?Le&-Le:Ut.T!==null?xd():Lt()}function Bv(){if(Ai===0)if((Le&536870912)===0||Ce){var e=Oi;Oi<<=1,(Oi&3932160)===0&&(Oi=262144),Ai=e}else Ai=536870912;return e=Gn.current,e!==null&&(e.flags|=32),Ai}function $s(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=__(wa(e.memoizedProps,a))),Qs===null&&(Qs=[]),Qs.push(n.bind(null,o))}}function gi(e,n,a){(e===nn&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(to(e,0),vr(e,Le,Ai,!1)),xi(e,a),((ke&2)===0||e!==nn)&&(e===nn&&((ke&2)===0&&(rs|=a),vn===4&&vr(e,Le,Ai,!1)),Sa(e))}function Fv(e,n,a){if((ke&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ci(e,n),u=o?HM(e,n):hd(e,n,!0),f=o;do{if(u===0){js&&!o&&vr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!BM(a)){u=hd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=yl;var I=A.current.memoizedState.isDehydrated;if(I&&(to(A,y).flags|=256),y=hd(A,y,!1),y!==2&&y!==6){if(od&&!I){A.errorRecoveryDisabledLanes|=f,rs|=f,u=4;break t}f=mi,mi=u,f!==null&&(mi===null?mi=f:mi.push.apply(mi,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){to(e,0),vr(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:vr(o,n,Ai,!pr);break t;case 2:mi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ou+300-k(),10<u)){if(vr(o,n,Ai,!pr),Cn(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=Ud(Hv.bind(null,o,a,mi,cu,ld,n,Ai,rs,Zs,pr,f,"Throttled",-0,0),u);break t}Hv(o,a,mi,cu,ld,n,Ai,rs,Zs,pr,f,null,-0,0)}}break}while(!0);Sa(e)}function Hv(e,n,a,o,u,f,y,A,I,Q,st,yt,W,at){e.timeoutHandle=-1;var kt=n.subtreeFlags,ae=(f&335544064)===f;if(yt=null,(ae||kt&8192||(kt&16785408)===16785408)&&(yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},Ti=null,Nv(n,f,yt),ae&&(kt=yt,ae=e.containerInfo,ae=(ae.nodeType===9?ae:ae.ownerDocument).__reactViewTransition,ae!=null&&(kt.count++,kt.waitingForViewTransition=!0,kt=Cl.bind(kt),ae.finished.then(kt,kt))),kt=(f&62914560)===f?ou-k():(f&4194048)===f?Pv-k():0,kt=GE(yt,kt),kt!==null)){xa=f,e.cancelPendingCommit=kt(jv.bind(null,e,n,f,a,o,u,y,A,I,Q,st,yt,null,W,at)),vr(e,f,y,!Q);return}jv(e,n,f,a,o,u,y,A,I,Q,st,yt)}function BM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Mi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vr(e,n,a,o){n=Hr(e,n),n&=~su,n&=~rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-yn(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&D(e,a,n)}function fu(){return(ke&6)===0?(Sl(0),!1):!0}function fd(){if(Ue!==null){if(Ze===0)var e=Ue.return;else e=Ue,La=Wr=null,yh(e),Hs=null,al=0,e=Ue;for(;e!==null;)cv(e.alternate,e),e=e.return;Ue=null}}function to(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,lE(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,fd(),nn=e,Ue=a=Ua(e.current,null),Le=n,Ze=0,bi=null,pr=!1,js=ci(e,n),od=!1,Zs=Ai=su=rs=mr=vn=0,mi=yl=null,ld=!1,Fa=Hr(e,n),yc(),a}function Vv(e,n){Ee=null,Ut.H=kc,n===Fs||n===Dc?(n=jg(),Ze=3):n===sh?(n=jg(),Ze=4):Ze=n===Oh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,bi=n,Ue===null&&(vn=1,qc(e,Pi(n,e.current)))}function Gv(){var e=Gn.current;return e===null?!0:(Le&4194048)===Le?Kn===null:(Le&62914560)===Le||(Le&536870912)!==0?e===Kn:!1}function Xv(){var e=Ut.H;return Ut.H=kc,e===null?kc:e}function kv(){var e=Ut.A;return Ut.A=PM,e}function hu(){vn=4,pr||(Le&4194048)!==Le&&Gn.current!==null||(js=!0),(mr&134217727)===0&&(rs&134217727)===0||nn===null||vr(nn,Le,Ai,!1)}function hd(e,n,a){var o=ke;ke|=2;var u=Xv(),f=kv();(nn!==e||Le!==n)&&(cu=null,to(e,n)),n=!1;var y=vn;t:do try{if(Ze!==0&&Ue!==null){var A=Ue,I=bi;switch(Ze){case 8:fd(),y=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var Q=Ze;if(Ze=0,bi=null,eo(e,A,I,Q),a&&js){y=0;break t}break;default:Q=Ze,Ze=0,bi=null,eo(e,A,I,Q)}}FM(),y=vn;break}catch(st){Vv(e,st)}while(!0);return n&&e.shellSuspendCounter++,La=Wr=null,ke=o,Ut.H=u,Ut.A=f,Ue===null&&(nn=null,Le=0,yc()),y}function FM(){for(;Ue!==null;)qv(Ue)}function HM(e,n){var a=ke;ke|=2;var o=Xv(),u=kv();nn!==e||Le!==n?(cu=null,lu=k()+500,to(e,n)):js=ci(e,n);t:do try{if(Ze!==0&&Ue!==null){n=Ue;var f=bi;e:switch(Ze){case 1:Ze=0,bi=null,eo(e,n,f,1);break;case 2:case 9:if(Yg(f)){Ze=0,bi=null,Yv(n);break}n=function(){Ze!==2&&Ze!==9||nn!==e||(Ze=7),Sa(e)},f.then(n,n);break t;case 3:Ze=7;break t;case 4:Ze=5;break t;case 7:Yg(f)?(Ze=0,bi=null,Yv(n)):(Ze=0,bi=null,eo(e,n,f,7));break;case 5:var y=null;switch(Ue.tag){case 26:y=Ue.memoizedState;case 5:case 27:var A=Ue;if(y?I_(y):A.stateNode.complete){Ze=0,bi=null;var I=A.sibling;if(I!==null)Ue=I;else{var Q=A.return;Q!==null?(Ue=Q,du(Q)):Ue=null}break e}}Ze=0,bi=null,eo(e,n,f,5);break;case 6:Ze=0,bi=null,eo(e,n,f,6);break;case 8:fd(),vn=6;break t;default:throw Error(r(462))}}VM();break}catch(st){Vv(e,st)}while(!0);return La=Wr=null,Ut.H=o,Ut.A=u,ke=a,Ue!==null?0:(nn=null,Le=0,yc(),vn)}function VM(){for(;Ue!==null&&!Mt();)qv(Ue)}function qv(e){var n=ov(e.alternate,e,Fa);e.memoizedProps=e.pendingProps,n===null?du(e):Ue=n}function Yv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tv(a,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=tv(a,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:yh(n);var o=n;o===zn&&(Ce?(bc(o),o.tag===5&&o.stateNode!=null&&(sn=o.stateNode)):(bc(o),Ce=!0));default:cv(a,n),n=Ue=zg(n,Fa),n=ov(a,n,Fa)}e.memoizedProps=e.pendingProps,n===null?du(e):Ue=n}function eo(e,n,a,o){La=Wr=null,yh(n),Hs=null,al=0;var u=n.return;try{if(CM(e,u,n,a,Le)){vn=1,qc(e,Pi(a,e.current)),Ue=null;return}}catch(f){if(u!==null)throw Ue=u,f;vn=1,qc(e,Pi(a,e.current)),Ue=null;return}n.flags&32768?(Ce||o===1?e=!0:js||(Le&536870912)!==0?e=!1:(pr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Gn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Wv(n,e)):du(n)}function du(e){var n=e;do{if((n.flags&32768)!==0){Wv(n,pr);return}e=n.return;var a=NM(n.alternate,n,Fa);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);vn===0&&(vn=5)}function Wv(e,n){do{var a=LM(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);vn=6,Ue=null}function jv(e,n,a,o,u,f,y,A,I,Q,st,yt){e.cancelPendingCommit=null;do pu();while(dn!==0);if((ke&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===nn&&(Ue=nn=null,Le=0),ss=n,ta=e,xa=a,ud=u,Iv=o,GM(e,n,a,y,A,I,yt)}}function GM(e,n,a,o,u,f,y){var A=n.lanes|n.childLanes;if(cd=A,A|=Wf,Vr(e,a,A,o,u,f),Qs=null,(a&335544064)===a?(Js=gM(e),o=10262):(Js=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,jM(bt,function(){return gd(),null})):(e.callbackNode=null,e.callbackPriority=0),$c=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Ut.T,Ut.T=null,u=qt.p,qt.p=2,f=ke,ke|=4;try{OM(e,n,a)}finally{ke=f,qt.p=u,Ut.T=o}}dn=1,$c?Ks=pE(y,e.containerInfo,Js,dd,pd,kM,md,gd,XM):(dd(),pd(),md())}function XM(e){if(dn!==0){var n=ta.onRecoverableError;n(e,{componentStack:null})}}function kM(){dn===3&&(dn=0,Dv(ss,ta),dn=4)}function dd(){if(dn===1){dn=0;var e=ta,n=ss,a=xa,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=Ut.T,Ut.T=null;var u=qt.p;qt.p=2;var f=ke;ke|=4;try{gl=nu=!1,Cv(n,e,a),a=Cd;var y=bg(e.containerInfo),A=a.focusedElem,I=a.selectionRange;if(y!==A&&A&&A.ownerDocument&&Tg(A.ownerDocument.documentElement,A)){if(I!==null&&Gf(A)){var Q=I.start,st=I.end;if(st===void 0&&(st=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(st,A.value.length);else{var yt=A.ownerDocument||document,W=yt&&yt.defaultView||window;if(W.getSelection){var at=W.getSelection(),kt=A.textContent.length,ae=Math.min(I.start,kt),Te=I.end===void 0?ae:Math.min(I.end,kt);!at.extend&&ae>Te&&(y=Te,Te=ae,ae=y);var Z=Eg(A,ae),X=Eg(A,Te);if(Z&&X&&(at.rangeCount!==1||at.anchorNode!==Z.node||at.anchorOffset!==Z.offset||at.focusNode!==X.node||at.focusOffset!==X.offset)){var et=yt.createRange();et.setStart(Z.node,Z.offset),at.removeAllRanges(),ae>Te?(at.addRange(et),at.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),at.addRange(et))}}}}for(yt=[],at=A;at=at.parentNode;)at.nodeType===1&&yt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var _t=yt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}co=!!Rd,Cd=Rd=null}finally{ke=f,qt.p=u,Ut.T=o}}e.current=n,dn=2}}function pd(){if(dn===2){dn=0;var e=ta,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Ut.T,Ut.T=null;var o=qt.p;qt.p=2;var u=ke;ke|=4;try{Mv(e,n.alternate,n)}finally{ke=u,qt.p=o,Ut.T=a}}dn=3}}function md(){if(dn===4||dn===3){dn=0;var e=Ks;Ks=null,_e();var n=ta,a=ss,o=xa,u=Iv,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?dn=5:(dn=0,ss=ta=null,Zv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(gr=null),$(o),a=a.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ae,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Ut.T,f=qt.p,qt.p=2,Ut.T=null;try{for(var y=n.onRecoverableError,A=0;A<u.length;A++){var I=u[A];y(I.value,{componentStack:I.stack})}}finally{Ut.T=a,qt.p=f}}if(u=Qs,y=Js,Js=null,u!==null&&(Qs=null,y===null&&(y=[]),e!==null))for(I=0;I<u.length;I++)a=(0,u[I])(y),a!==void 0&&e.finished.finally(a);(xa&3)!==0&&pu(),Sa(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===uu?xl++:(xl=0,uu=n):(xl=0,uu=null),Sl(0)}}function Zv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,el(n)))}function pu(){return Ks!==null&&(Ks.skipTransition(),Ks=null),dd(),pd(),md(),gd()}function gd(){if(dn!==5)return!1;var e=ta,n=cd;cd=0;var a=$(xa),o=Ut.T,u=qt.p;try{qt.p=32>a?32:a,Ut.T=null,a=ud,ud=null;var f=ta,y=xa;if(dn=0,ss=ta=null,xa=0,(ke&6)!==0)throw Error(r(331));var A=ke;if(ke|=4,Ov(f.current),Uv(f,f.current,y,a),ke=A,Sl(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{qt.p=u,Ut.T=o,Zv(e,n)}}function Kv(e,n,a){n=Pi(a,n),n=Lh(e.stateNode,n,2),e=lr(e,n,2),e!==null&&(xi(e,2),Sa(e))}function Ke(e,n,a){if(e.tag===3)Kv(e,e,a);else for(;n!==null;){if(n.tag===3){Kv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(gr===null||!gr.has(o))){e=Pi(a,e),a=Y0(2),o=lr(n,a,2),o!==null&&(W0(a,o,n,e),xi(o,2),Sa(o));break}}n=n.return}}function vd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new IM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(od=!0,u.add(a),e=qM.bind(null,e,n,a),n.then(e,e))}function qM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,nn===e&&(Le&a)===a&&((vn===4||vn===3&&(Le&62914560)===Le&&300>k()-ou)&&(ke&2)===0?to(e,0):su|=a,Zs===Le&&(Zs=0)),Sa(e)}function Qv(e,n){n===0&&(n=Es()),e=kr(e,n),e!==null&&(xi(e,n),Sa(e))}function YM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qv(e,a)}function WM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Qv(e,a)}function jM(e,n){return ue(e,n)}var no=null,io=null,_d=!1,mu=!1,yd=!1,_r=0;function Sa(e){e!==io&&e.next===null&&(io===null?no=io=e:io=io.next=e),mu=!0,_d||(_d=!0,KM())}function Sl(e,n){if(!yd&&mu){yd=!0;do for(var a=!1,o=no;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-yn(42|e)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,e_(o,f))}else f=Le,f=Cn(o,o===nn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ci(o,f)||(a=!0,e_(o,f));o=o.next}while(a);yd=!1}}function ZM(){Jv()}function Jv(){mu=_d=!1;var e=0;_r!==0&&oE()&&(e=_r);for(var n=k(),a=null,o=no;o!==null;){var u=o.next,f=$v(o,n);f===0?(o.next=null,a===null?no=u:a.next=u,u===null&&(io=a)):(a=o,(e!==0||(f&3)!==0)&&(mu=!0)),o=u}dn!==0&&dn!==5||Sl(e),_r!==0&&(_r=0)}function $v(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-yn(f),A=1<<y,I=u[y];I===-1?((A&a)===0||(A&o)!==0)&&(u[y]=Ms(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=nn,a=Le,a=Cn(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ci(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ie(o),$(a)){case 2:case 8:a=jt;break;case 32:a=bt;break;case 268435456:a=Jt;break;default:a=bt}return o=t_.bind(null,e),a=ue(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function t_(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pu()&&e.callbackNode!==a)return null;var o=Le;return o=Cn(e,e===nn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Fv(e,o,n),$v(e,k()),e.callbackNode!=null&&e.callbackNode===a?t_.bind(null,e):null)}function e_(e,n){if(pu())return null;Fv(e,n,!0)}function KM(){cE(function(){(ke&6)!==0?ue(Ft,ZM):Jv()})}function xd(){if(_r===0){var e=Kr;e===0&&(e=Ln,Ln<<=1,(Ln&261888)===0&&(Ln=256)),_r=e}return _r}function n_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fc(e)}function QM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=n_((u[ne]||null).action),y=o.submitter;y&&(n=(n=y[ne]||null)?n_(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new mc("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_r!==0){var I=new FormData(u,y);Ch(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=new FormData(u,y),Ch(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Sd=0;Sd<Yf.length;Sd++){var Md=Yf[Sd],JM=Md.toLowerCase(),$M=Md[0].toUpperCase()+Md.slice(1);Ki(JM,"on"+$M)}Ki(Cg,"onAnimationEnd"),Ki(wg,"onAnimationIteration"),Ki(Dg,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(lM,"onTransitionRun"),Ki(cM,"onTransitionStart"),Ki(uM,"onTransitionCancel"),Ki(Ug,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function i_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=Q;try{f(u)}catch(st){_c(st)}u.currentTarget=null,f=I}else for(y=0;y<o.length;y++){if(A=o[y],I=A.instance,Q=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=Q;try{f(u)}catch(st){_c(st)}u.currentTarget=null,f=I}}}}function Ne(e,n){var a=n[re];a===void 0&&(a=n[re]=new Set);var o=e+"__bubble";a.has(o)||(a_(n,e,2,!1),a.add(o))}function Ed(e,n,a){var o=0;n&&(o|=4),a_(a,e,o,n)}var gu="_reactListening"+Math.random().toString(36).slice(2);function Td(e){if(!e[gu]){e[gu]=!0,je.forEach(function(a){a!=="selectionchange"&&(tE.has(a)||Ed(a,!1,e),Ed(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[gu]||(n[gu]=!0,Ed("selectionchange",!1,n))}}function a_(e,n,a,o){switch(W_(n)){case 2:var u=YE;break;case 8:u=WE;break;default:u=kd}a=u.bind(null,n,a,e),u=void 0,!Nf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function bd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=He(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=f=y;continue t}A=A.parentNode}}o=o.return}ag(function(){var Q=f,st=Df(a),yt=[];t:{var W=Ng.get(e);if(W!==void 0){var at=mc,kt=e;switch(e){case"keypress":if(dc(a)===0)break t;case"keydown":case"keyup":at=BS;break;case"focusin":kt="focus",at=Pf;break;case"focusout":kt="blur",at=Pf;break;case"beforeblur":case"afterblur":at=Pf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=AS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=XS;break;case Cg:case wg:case Dg:at=wS;break;case Ug:at=qS;break;case"scroll":case"scrollend":at=TS;break;case"wheel":at=WS;break;case"copy":case"cut":case"paste":at=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=cg;break;case"submit":at=VS;break;case"toggle":case"beforetoggle":at=ZS}var ae=(n&4)!==0,Te=!ae&&(e==="scroll"||e==="scrollend"),Z=ae?W!==null?W+"Capture":null:W;ae=[];for(var X=Q,et;X!==null;){var _t=X;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||Z===null||(_t=ko(X,Z),_t!=null&&ae.push(El(X,_t,et))),Te)break;X=X.return}0<ae.length&&(W=new at(W,kt,null,a,st),yt.push({event:W,listeners:ae}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",at&&a!==wf&&(kt=a.relatedTarget||a.fromElement)&&(He(kt)||kt[se]))break t;(W||at)&&(kt=st.window===st?st:(at=st.ownerDocument)?at.defaultView||at.parentWindow:window,W?(at=a.relatedTarget||a.toElement,W=Q,at=at?He(at):null,at!==null&&(Te=c(at),ae=at.tag,at!==Te||ae!==5&&ae!==27&&ae!==6)&&(at=null)):(W=null,at=Q),W!==at&&(ae=og,_t="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=cg,_t="onPointerLeave",Z="onPointerEnter",X="pointer"),Te=W==null?kt:mn(W),et=at==null?kt:mn(at),kt=new ae(_t,X+"leave",W,a,st),kt.target=Te,kt.relatedTarget=et,_t=null,He(st)===Q&&(ae=new ae(Z,X+"enter",at,a,st),ae.target=et,ae.relatedTarget=Te,_t=ae),Te=_t,ae=W&&at?P(W,at,eE):null,W!==null&&r_(yt,kt,W,ae,!1),at!==null&&Te!==null&&r_(yt,Te,at,ae,!0)))}t:{if(W=Q?mn(Q):window,at=W.nodeName&&W.nodeName.toLowerCase(),at==="select"||at==="input"&&W.type==="file")var te=vg;else if(mg(W))if(_g)te=rM;else{te=iM;var Oe=nM}else at=W.nodeName,!at||at.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?Q&&Cf(Q.elementType)&&(te=vg):te=aM;if(te&&(te=te(e,Q))){gg(yt,te,a,st);break t}Oe&&Oe(e,W,Q)}switch(Oe=Q?mn(Q):window,e){case"focusin":(mg(Oe)||Oe.contentEditable==="true")&&(Us=Oe,Xf=Q,Jo=null);break;case"focusout":Jo=Xf=Us=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,Ag(yt,a,st);break;case"selectionchange":if(oM)break;case"keydown":case"keyup":Ag(yt,a,st)}var he;if(Bf)t:{switch(e){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Ds?dg(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(ug&&a.locale!=="ko"&&(Ds||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ds&&(he=rg()):($a=st,Lf="value"in $a?$a.value:$a.textContent,Ds=!0)),Oe=vu(Q,ge),0<Oe.length&&(ge=new lg(ge,e,null,a,st),yt.push({event:ge,listeners:Oe}),he?ge.data=he:(he=pg(a),he!==null&&(ge.data=he)))),(he=QS?JS(e,a):$S(e,a))&&(ge=vu(Q,"onBeforeInput"),0<ge.length&&(Oe=new lg("onBeforeInput","beforeinput",null,a,st),yt.push({event:Oe,listeners:ge}),Oe.data=he)),QM(yt,e,Q,a,st)}i_(yt,n)})}function El(e,n,a){return{instance:e,listener:n,currentTarget:a}}function vu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ko(e,a),u!=null&&o.unshift(El(e,u,f)),u=ko(e,n),u!=null&&o.push(El(e,u,f))),e.tag===3)return o;e=e.return}return[]}function eE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function r_(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,u?(Q=ko(a,f),Q!=null&&y.unshift(El(a,Q,I))):u||(Q=ko(a,f),Q!=null&&y.push(El(a,Q,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var nE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(nE,`
`).replace(iE,"")}function o_(e,n){return n=s_(n),s_(e)===n}function Qe(e,n,a,o,u,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||ua(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&ua(e,""+o);else return;break;case"className":ji(e,"class",o);break;case"tabIndex":ji(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ji(e,a,o);break;case"style":ng(e,o,f);return;case"data":if(n!=="object"){ji(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fc(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Qe(e,n,"name",u.name,u,null),Qe(e,n,"formEncType",u.formEncType,u,null),Qe(e,n,"formMethod",u.formMethod,u,null),Qe(e,n,"formTarget",u.formTarget,u,null)):(Qe(e,n,"encType",u.encType,u,null),Qe(e,n,"method",u.method,u,null),Qe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fc(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=fa);return;case"onScroll":o!=null&&Ne("scroll",e);return;case"onScrollEnd":o!=null&&Ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fc(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),fi(e,"popover",o);break;case"xlinkActuate":ei(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ei(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ei(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ei(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ei(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ei(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ei(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ei(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ei(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fi(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=MS.get(a)||a,fi(e,a,o);else return}Me=!0}function Ad(e,n,a,o,u,f){switch(a){case"style":ng(e,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")ua(e,o);else if(typeof o=="number"||typeof o=="bigint")ua(e,""+o);else return;break;case"onScroll":o!=null&&Ne("scroll",e);return;case"onScrollEnd":o!=null&&Ne("scrollend",e);return;case"onClick":o!=null&&(e.onclick=fa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=e[ne]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,o,u);break t}Me=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):fi(e,a,o)}return}Me=!0}function qn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qe(e,n,f,y,a,null)}}u&&Qe(e,n,"srcSet",a.srcSet,a,null),o&&Qe(e,n,"src",a.src,a,null);return;case"input":Ne("invalid",e);var A=f=y=u=null,I=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var st=a[o];if(st!=null)switch(o){case"name":u=st;break;case"type":y=st;break;case"checked":I=st;break;case"defaultChecked":Q=st;break;case"value":f=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:Qe(e,n,o,st,a,null)}}bs(e,f,A,I,Q,y,u,!1);return;case"select":Ne("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Qe(e,n,u,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?Si(e,!!o,n,!1):a!=null&&Si(e,!!o,a,!0);return;case"textarea":Ne("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Qe(e,n,y,A,a,null)}Rs(e,o,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Qe(e,n,I,o,a,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(o=0;o<Ml.length;o++)Ne(Ml[o],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qe(e,n,Q,o,a,null)}return;default:if(Cf(n)){for(st in a)a.hasOwnProperty(st)&&(o=a[st],o!==void 0&&Ad(e,n,st,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Qe(e,n,A,o,a,null))}var aE={};function rE(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,I=null,Q=null,st=null;for(at in a){var yt=a[at];if(a.hasOwnProperty(at)&&yt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":I=yt;default:o.hasOwnProperty(at)||Qe(e,n,at,null,o,yt)}}for(var W in o){var at=o[W];if(yt=a[W],o.hasOwnProperty(W)&&(at!=null||yt!=null))switch(W){case"type":at!==yt&&(Me=!0),f=at;break;case"name":at!==yt&&(Me=!0),u=at;break;case"checked":at!==yt&&(Me=!0),Q=at;break;case"defaultChecked":at!==yt&&(Me=!0),st=at;break;case"value":at!==yt&&(Me=!0),y=at;break;case"defaultValue":at!==yt&&(Me=!0),A=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==yt&&Qe(e,n,W,at,o,yt)}}Ts(e,y,A,I,Q,st,f,u);return;case"select":at=y=A=W=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":at=I;default:o.hasOwnProperty(f)||Qe(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":f!==I&&(Me=!0),W=f;break;case"defaultValue":f!==I&&(Me=!0),A=f;break;case"multiple":f!==I&&(Me=!0),y=f;default:f!==I&&Qe(e,n,u,f,o,I)}n=A,a=y,o=at,W!=null?Si(e,!!a,W,!1):!!o!=!!a&&(n!=null?Si(e,!!a,n,!0):Si(e,!!a,a?[]:"",!1));return;case"textarea":at=W=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Qe(e,n,A,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":u!==f&&(Me=!0),W=u;break;case"defaultValue":u!==f&&(Me=!0),at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Qe(e,n,y,u,o,f)}As(e,W,at);return;case"option":for(var kt in a)W=a[kt],a.hasOwnProperty(kt)&&W!=null&&!o.hasOwnProperty(kt)&&(kt==="selected"?e.selected=!1:Qe(e,n,kt,null,o,W));for(I in o)W=o[I],at=a[I],o.hasOwnProperty(I)&&W!==at&&(W!=null||at!=null)&&(I==="selected"?(W!==at&&(Me=!0),e.selected=W&&typeof W!="function"&&typeof W!="symbol"):Qe(e,n,I,W,o,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)W=a[ae],a.hasOwnProperty(ae)&&W!=null&&!o.hasOwnProperty(ae)&&Qe(e,n,ae,null,o,W);for(Q in o)if(W=o[Q],at=a[Q],o.hasOwnProperty(Q)&&W!==at&&(W!=null||at!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,n));break;default:Qe(e,n,Q,W,o,at)}return;default:if(Cf(n)){for(var Te in a)W=a[Te],a.hasOwnProperty(Te)&&W!==void 0&&!o.hasOwnProperty(Te)&&Ad(e,n,Te,void 0,o,W);for(st in o)W=o[st],at=a[st],!o.hasOwnProperty(st)||W===at||W===void 0&&at===void 0||Ad(e,n,st,W,o,at);return}}for(var Z in a)W=a[Z],a.hasOwnProperty(Z)&&W!=null&&!o.hasOwnProperty(Z)&&Qe(e,n,Z,null,o,W);for(yt in o)W=o[yt],at=a[yt],!o.hasOwnProperty(yt)||W===at||W==null&&at==null||Qe(e,n,yt,W,o,at)}function l_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,A=u.duration;if(f&&A&&l_(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],Q=I.startTime;if(Q>A)break;var st=I.transferSize,yt=I.initiatorType;st&&l_(yt)&&(I=I.responseEnd,y+=st*(I<A?1:(A-Q)/(I-Q)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rd=null,Cd=null;function Tl(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function f_(e,n,a,o){return a=Tl(a).createElement(e),a[Bt]=o,a[ne]=n,qn(a,e,n),Ie(a),a}function wd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dd=null;function oE(){var e=window.event;return e&&e.type==="popstate"?e===Dd?!1:(Dd=e,!0):(Dd=null,!1)}var Ud=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,d_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ud,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(e){return h_.resolve(null).then(e).catch(uE)}:Ud;function uE(e){setTimeout(function(){throw e})}function yr(e){return e==="head"}function p_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),uo(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fd(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[ze]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Fd(e.ownerDocument.body);a=u}while(a);uo(n)}function m_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function g_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function v_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function fE(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Nd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return fE(n,a,e)}function hE(e){return e.documentElement.clientHeight}function dE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function pE(e,n,a,o,u,f,y,A,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var st=Q.startViewTransition({update:function(){var W=Q.defaultView,at=W.navigation&&W.navigation.transition,kt=Q.fonts.status;o();var ae=[];if(kt==="loaded"&&(hE(Q),Q.fonts.status==="loading"&&ae.push(Q.fonts.ready)),kt=ae.length,e!==null)for(var Te=e.suspenseyImages,Z=0,X=0;X<Te.length;X++){var et=Te[X];if(!et.complete){var _t=et.getBoundingClientRect();if(0<_t.bottom&&0<_t.right&&_t.top<W.innerHeight&&_t.left<W.innerWidth){if(Z+=B_(et),Z>xu){ae.length=kt;break}et=new Promise(dE.bind(et)),ae.push(et)}}}if(0<ae.length)return W=Promise.race([Promise.all(ae),new Promise(function(te){return setTimeout(te,500)})]).then(u,u),(at?Promise.allSettled([at.finished,W]):W).then(f,f);if(u(),at)return at.finished.then(f,f);f()},types:a});Q.__reactViewTransition=st;var yt=[];return st.ready.then(function(){for(var W=Q.documentElement.getAnimations({subtree:!0}),at=0;at<W.length;at++){var kt=W[at],ae=kt.effect,Te=ae.pseudoElement;if(Te!=null&&Te.startsWith("::view-transition")){yt.push(kt),kt=ae.getKeyframes();for(var Z=Te=void 0,X=!0,et=0;et<kt.length;et++){var _t=kt[et],te=_t.width;if(Te===void 0)Te=te;else if(Te!==te){X=!1;break}if(te=_t.height,Z===void 0)Z=te;else if(Z!==te){X=!1;break}delete _t.width,delete _t.height,_t.transform==="none"&&delete _t.transform}X&&Te!==void 0&&Z!==void 0&&(ae.setKeyframes(kt),X=getComputedStyle(ae.target,ae.pseudoElement),X.width!==Te||X.height!==Z)&&(X=kt[0],X.width=Te,X.height=Z,X=kt[kt.length-1],X.width=Te,X.height=Z,ae.setKeyframes(kt))}}y()},function(W){Q.__reactViewTransition===st&&(Q.__reactViewTransition=null);try{typeof W=="object"&&W!==null&&W.name==="InvalidStateError"&&(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null),W!==null&&I(W)}finally{o(),u(),y()}}),st.finished.finally(function(){for(var W=0;W<yt.length;W++)yt[W].cancel();Q.__reactViewTransition===st&&(Q.__reactViewTransition=null),A()}),st}catch{return o(),u(),y(),null}}function os(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}os.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},os.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&o.push(a[u])}return o},os.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function __(e){return{name:e,group:new os("group",e),imagePair:new os("image-pair",e),old:new os("old",e),new:new os("new",e)}}function Ci(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ci.prototype.addEventListener=function(e,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(x_(f,e,n,a)===-1){var y=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){y.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),o!==null&&(u=y.removeEventListener.bind(y,e,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=ao(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),g(this._fragmentFiber.child,!1,mE,e,A,o)}this._eventListeners=f}};function mE(e,n,a,o){return M(e).addEventListener(n,a,o),!1}Ci.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=x_(o,e,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var f=u.cleanup;u=ao(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,gE,e,a,u),o.splice(n,1),f!==null&&f()}};function gE(e,n,a,o){return M(e).removeEventListener(n,a,o),!1}function ao(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function y_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function x_(e,n,a,o){if(e.length===0)return-1;o=y_(o);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===a&&y_(f.optionsOrUseCapture)===o)return u}return-1}Ci.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];o.addEventListener(f.type,f.attachedListener,ao(f.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(u=0;u<a.length;u++)f=a[u],o.removeEventListener(f.type,f.attachedListener,ao(f.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},Ci.prototype.focus=function(e){g(this._fragmentFiber.child,!0,S_,e,void 0,void 0)};function S_(e,n){return e.tag===6?!1:(e=M(e),CE(e,n))}Ci.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Ld,n,void 0,void 0);for(var a=n.length-1;0<=a&&!S_(n[a],e);a--);};function Ld(e,n){return n.push(e),!1}Ci.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=M(e),e=Tl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,vE,e,void 0,void 0))};function vE(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}Ci.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,_E,e,void 0,void 0)};function _E(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}Ci.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,yE,e,void 0,void 0);for(var a=n=0;a<ea.length;a++){var o=ea[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):ea[n++]=o}ea.length=n}};function yE(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var ea=[],Od=!1;function xE(e,n,a){ea.push({fragmentInstance:e,observer:n,instance:a}),Od||(Od=!0,wE(function(){Od=!1;var o=ea;ea=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}Ci.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,SE,e,void 0,void 0),e};function SE(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}Ci.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},Ci.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Ld,a,void 0,void 0);var o=M(n);if(a.length===0){if(a=o,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(e),A=u.compareDocumentPosition(e),I=y&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=o&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||f&&u===e||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ME(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ME(e,n,a,o,u){var f=He(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=P(a,f,z),n===null?n=!1:(g(n,!0,U,f,a),f=x,x=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=P(o,f,z),n===null?n=!1:(g(n,!0,T,f,o),f=x,N=x=null,n=f!==null)),n):!1}function M_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ci.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,Ld,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=a?o[1]||o[0]||_(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=M(o),M_(e,a);return}if(o=M(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=M(u),M_(u,a)):M(u).scrollIntoView(e),o+=a?-1:1}};function EE(e,n){return e=M(e),E_(e,n),!1}function E_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function T_(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.addEventListener(u.type,u.attachedListener,ao(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,A=0;A<ea.length;A++){var I=ea[A];(I.fragmentInstance!==n||I.observer!==f||I.instance!==e)&&(ea[y++]=I)}ea.length=y,f.observe(e)}),E_(e,n))}function TE(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.removeEventListener(u.type,u.attachedListener,ao(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?xE(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function zd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zd(a),oe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function bE(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ze])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function AE(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vi(e.nextSibling),e===null))return null;return e}function b_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vi(e.nextSibling),e===null))return null;return e}function Pd(e){return e.data==="$?"||e.data==="$~"}function Id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function RE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Bd=null;function A_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Vi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function R_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function CE(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function wE(e){d_(function(){d_(function(n){return e(n)})})}function C_(e,n,a){switch(n=Tl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function w_(e,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&Qe(e,n,o,null,aE,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===fa&&(e.onclick=null),oe(e)}function Fd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);oe(e)}var Gi=new Map,D_=new Set;function bl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ha=qt.d;qt.d={f:DE,r:UE,D:NE,C:LE,L:OE,m:zE,X:IE,S:PE,M:BE};function DE(){var e=Ha.f(),n=fu();return e||n}function UE(e){var n=xe(e);n!==null&&n.tag===5&&n.type==="form"?N0(n):Ha.r(e)}var ro=typeof document>"u"?null:document;function U_(e,n,a){var o=ro;if(o&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),D_.has(u)||(D_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),qn(n,"link",e),Ie(n),o.head.appendChild(n)))}}function NE(e){Ha.D(e),U_("dns-prefetch",e,null)}function LE(e,n){Ha.C(e,n),U_("preconnect",e,n)}function OE(e,n,a){Ha.L(e,n,a);var o=ro;if(o&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var f=u;switch(n){case"style":f=so(e);break;case"script":f=oo(e)}if(!(Gi.has(f)||(e=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Gi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Al(f))||n==="script"&&o.querySelector(Rl(f))))){var y=o.createElement("link");qn(y,"link",e),n==="style"&&(y[Pe]=!0,y.onload=y.onerror=function(){Wi(y)}),Ie(y),o.head.appendChild(y)}}}function zE(e,n){Ha.m(e,n);var a=ro;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=oo(e)}if(!Gi.has(f)&&(e=O({rel:"modulepreload",href:e},n),Gi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rl(f)))return}o=a.createElement("link"),qn(o,"link",e),Ie(o),a.head.appendChild(o)}}}function PE(e,n,a){Ha.S(e,n,a);var o=ro;if(o&&e){var u=jn(o).hoistableStyles,f=so(e);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Al(f)))A.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Gi.get(f))&&Hd(e,a);var I=y=o.createElement("link");Ie(I),qn(I,"link",e),I._p=new Promise(function(Q,st){I.onload=Q,I.onerror=st}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_u(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function IE(e,n){Ha.X(e,n);var a=ro;if(a&&e){var o=jn(a).hoistableScripts,u=oo(e),f=o.get(u);f||(f=a.querySelector(Rl(u)),f||(e=O({src:e,async:!0},n),(n=Gi.get(u))&&Vd(e,n),f=a.createElement("script"),Ie(f),qn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function BE(e,n){Ha.M(e,n);var a=ro;if(a&&e){var o=jn(a).hoistableScripts,u=oo(e),f=o.get(u);f||(f=a.querySelector(Rl(u)),f||(e=O({src:e,async:!0,type:"module"},n),(n=Gi.get(u))&&Vd(e,n),f=a.createElement("script"),Ie(f),qn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function N_(e,n,a,o){var u=(u=le.current)?bl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=so(a.href),n=jn(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=so(a.href);var f=jn(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Al(e)))?f._p||(y.instance=f,y.state.loading=5):(f=Gi.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gi.set(e,f)),FE(u,e,f,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=oo(a),n=jn(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function so(e){return'href="'+Sn(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function L_(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function FE(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Pe]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Pe]=!0,n.onload=n.onerror=Wi.bind(null,n),qn(n,"link",a),Ie(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function oo(e){return'[src="'+Sn(e)+'"]'}function Rl(e){return"script[async]"+e}function O_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,Ie(o),o;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ie(o),qn(o,"style",u),_u(o,a.precedence,e),n.instance=o;case"stylesheet":u=so(a.href);var f=e.querySelector(Al(u));if(f)return n.state.loading|=4,n.instance=f,Ie(f),f;o=L_(a),(u=Gi.get(u))&&Hd(o,u),f=(e.ownerDocument||e).createElement("link"),Ie(f);var y=f;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),qn(f,"link",o),n.state.loading|=4,_u(f,a.precedence,e),n.instance=f;case"script":return f=oo(a.src),(u=e.querySelector(Rl(f)))?(n.instance=u,Ie(u),u):(o=a,(u=Gi.get(f))&&(o=O({},a),Vd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ie(u),qn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,_u(o,a.precedence,e));return n.instance}function _u(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var yu=null;function z_(e,n,a){if(yu===null){var o=new Map,u=yu=new Map;u.set(a,o)}else u=yu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ze]||f[Bt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function Gd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function HE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function I_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function B_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function F_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=B_(n),e.suspenseyImages.push(n)),e=XE.bind(e),n.decode().then(e,e))}function VE(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=so(o.href),f=n.querySelector(Al(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Cl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ie(f);return}f=n.ownerDocument||n,o=L_(o),(u=Gi.get(u))&&Hd(o,u),f=f.createElement("link"),Ie(f);var y=f;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),qn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Cl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var xu=0;function GE(e,n){return e.stylesheets&&e.count===0&&Mu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Mu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&xu===0&&(xu=62500*sE());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>xu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function H_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Mu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function Cl(){this.count--,H_(this)}function XE(){this.imgCount--,H_(this)}var Su=null;function Mu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Su=new Map,n.forEach(kE,e),Su=null,Cl.call(e))}function kE(e,n){if(!(n.state.loading&4)){var a=Su.get(e);if(a)var o=a.get(null);else{a=new Map,Su.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=Cl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var lo={$$typeof:rt,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function qE(e,n,a,o,u,f,y,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ja(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.hiddenUpdates=Ja(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function V_(e,n,a,o,u,f,y,A,I,Q,st,yt){return e=new qE(e,n,a,y,I,Q,st,yt,A),n=1,f===!0&&(n|=24),f=hi(3,null,null,n),e.current=f,f.stateNode=e,n=ih(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},oh(f),e}function G_(e){return e?(e=Os,e):Os}function X_(e,n,a,o,u,f){u=G_(u),o.context===null?o.context=u:o.pendingContext=u,o=or(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=lr(e,o,n),a!==null&&(gi(a,e,n),rl(a,e,n))}function k_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xd(e,n){k_(e,n),(e=e.alternate)&&k_(e,n)}function q_(e){if(e.tag===13||e.tag===31){var n=kr(e,67108864);n!==null&&gi(n,e,67108864),Xd(e,67108864)}}function Y_(e){if(e.tag===13||e.tag===31){var n=Ri();n=ct(n);var a=kr(e,n);a!==null&&gi(a,e,n),Xd(e,n)}}var co=!0;function YE(e,n,a,o){var u=Ut.T;Ut.T=null;var f=qt.p;try{qt.p=2,kd(e,n,a,o)}finally{qt.p=f,Ut.T=u}}function WE(e,n,a,o){var u=Ut.T;Ut.T=null;var f=qt.p;try{qt.p=8,kd(e,n,a,o)}finally{qt.p=f,Ut.T=u}}function kd(e,n,a,o){if(co){var u=qd(o);if(u===null)bd(e,n,o,Eu,a),j_(e,o);else if(ZE(u,e,n,a,o))o.stopPropagation();else if(j_(e,o),n&4&&-1<jE.indexOf(e)){for(;u!==null;){var f=xe(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Hn(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-yn(y);A.entanglements[1]|=I,y&=~I}Sa(f),(ke&6)===0&&(lu=k()+500,Sl(0))}}break;case 31:case 13:A=kr(f,2),A!==null&&gi(A,f,2),fu(),Xd(f,2)}if(f=qd(o),f===null&&bd(e,n,o,Eu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else bd(e,n,o,null,a)}}function qd(e){return e=Df(e),Yd(e)}var Eu=null;function Yd(e){if(Eu=null,e=He(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Eu=e,null}function W_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case Ft:return 2;case jt:return 8;case bt:case St:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var Wd=!1,xr=null,Sr=null,Mr=null,wl=new Map,Dl=new Map,Er=[],jE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(e,n){switch(e){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":wl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(n.pointerId)}}function Ul(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=xe(n),n!==null&&q_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ZE(e,n,a,o,u){switch(n){case"focusin":return xr=Ul(xr,e,n,a,o,u),!0;case"dragenter":return Sr=Ul(Sr,e,n,a,o,u),!0;case"mouseover":return Mr=Ul(Mr,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return wl.set(f,Ul(wl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Dl.set(f,Ul(Dl.get(f)||null,e,n,a,o,u)),!0}return!1}function Z_(e){var n=He(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Yt(e.priority,function(){Y_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Yt(e.priority,function(){Y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);wf=o,a.target.dispatchEvent(o),wf=null}else return n=xe(a),n!==null&&q_(n),e.blockedOn=a,!1;n.shift()}return!0}function K_(e,n,a){Tu(e)&&a.delete(n)}function KE(){Wd=!1,xr!==null&&Tu(xr)&&(xr=null),Sr!==null&&Tu(Sr)&&(Sr=null),Mr!==null&&Tu(Mr)&&(Mr=null),wl.forEach(K_),Dl.forEach(K_)}function bu(e,n){e.blockedOn===n&&(e.blockedOn=null,Wd||(Wd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,KE)))}var Au=null;function Q_(e){Au!==e&&(Au=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Au===e&&(Au=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yd(o||a)===null)continue;break}var f=xe(a);f!==null&&(e.splice(n,3),n-=3,Ch(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function uo(e){function n(I){return bu(I,e)}xr!==null&&bu(xr,e),Sr!==null&&bu(Sr,e),Mr!==null&&bu(Mr,e),wl.forEach(n),Dl.forEach(n);for(var a=0;a<Er.length;a++){var o=Er[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Er.length&&(a=Er[0],a.blockedOn===null);)Z_(a),a.blockedOn===null&&Er.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[ne]||null;if(typeof f=="function")y||Q_(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[ne]||null)A=y.formAction;else if(Yd(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Q_(a)}}}function J_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function jd(e){this._internalRoot=e}Ru.prototype.render=jd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Ri();X_(a,o,e,n,null,null)},Ru.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;X_(e.current,2,null,e,null,null),fu(),n[se]=null}};function Ru(e){this._internalRoot=e}Ru.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lt();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Er.length&&n!==0&&n<Er[a].priority;a++);Er.splice(a,0,e),a===0&&Z_(e)}};var $_=t.version;if($_!=="19.3.1")throw Error(r(527,$_,"19.3.1"));qt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var QE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Ae=Cu.inject(QE),rn=Cu}catch{}}return Ll.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=G0,f=X0,y=k0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=V_(e,1,!1,null,null,a,o,null,u,f,y,J_),e[se]=n.current,Td(e),new jd(n)},Ll.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=G0,y=X0,A=k0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=V_(e,1,!0,n,a??null,o,u,I,f,y,A,J_),n.context=G_(null),a=n.current,o=Ri(),o=ct(o),u=or(o),u.callback=null,lr(a,u,o),a=o,n.current.lanes=a,xi(n,a),Sa(n),e[se]=n.current,Td(e),new Ru(n)},Ll.version="19.3.1",Ll}var cy;function oT(){if(cy)return Qd.exports;cy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qd.exports=sT(),Qd.exports}var lT=oT();const Om="180",cT=0,uy=1,uT=2,Dx=1,fT=2,Wa=3,Pr=0,yi=1,_i=2,Or=0,wo=1,fy=2,hy=3,dy=4,hT=5,gs=100,dT=101,pT=102,mT=103,gT=104,vT=200,_T=201,yT=202,xT=203,Hp=204,Vp=205,ST=206,MT=207,ET=208,TT=209,bT=210,AT=211,RT=212,CT=213,wT=214,Gp=0,Xp=1,kp=2,No=3,qp=4,Yp=5,Wp=6,jp=7,Ux=0,DT=1,UT=2,zr=0,NT=1,LT=2,OT=3,zT=4,PT=5,IT=6,Nx=7,Lx=300,Lo=301,Oo=302,Zp=303,Kp=304,Tf=306,Ir=1e3,Nr=1001,Qp=1002,Ui=1003,BT=1004,wu=1005,ra=1006,ep=1007,Lr=1008,ba=1009,Ox=1010,zx=1011,jl=1012,zm=1013,_s=1014,Za=1015,oc=1016,Pm=1017,Im=1018,Zl=1020,Px=35902,Ix=35899,Bx=1021,Fx=1022,sa=1023,Kl=1026,Ql=1027,Hx=1028,Bm=1029,Vx=1030,Fm=1031,Hm=1033,cf=33776,uf=33777,ff=33778,hf=33779,Jp=35840,$p=35841,tm=35842,em=35843,nm=36196,im=37492,am=37496,rm=37808,sm=37809,om=37810,lm=37811,cm=37812,um=37813,fm=37814,hm=37815,dm=37816,pm=37817,mm=37818,gm=37819,vm=37820,_m=37821,ym=36492,xm=36494,Sm=36495,Mm=36283,Em=36284,Tm=36285,bm=36286,FT=3200,HT=3201,Gx=0,VT=1,Ur="",li="srgb",zo="srgb-linear",vf="linear",en="srgb",fo=7680,py=519,GT=512,XT=513,kT=514,Xx=515,qT=516,YT=517,WT=518,jT=519,my=35044,gy="300 es",Ta=2e3,_f=2001;class Bo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vy=1234567;const Do=Math.PI/180,Jl=180/Math.PI;function Ss(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]+"-"+Qn[t&255]+Qn[t>>8&255]+"-"+Qn[t>>16&15|64]+Qn[t>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function we(s,t,i){return Math.max(t,Math.min(i,s))}function Vm(s,t){return(s%t+t)%t}function ZT(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function KT(s,t,i){return s!==t?(i-s)/(t-s):0}function Gl(s,t,i){return(1-i)*s+i*t}function QT(s,t,i,r){return Gl(s,t,1-Math.exp(-i*r))}function JT(s,t=1){return t-Math.abs(Vm(s,t*2)-t)}function $T(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function t1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function e1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function n1(s,t){return s+Math.random()*(t-s)}function i1(s){return s*(.5-Math.random())}function a1(s){s!==void 0&&(vy=s);let t=vy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function r1(s){return s*Do}function s1(s){return s*Jl}function o1(s){return(s&s-1)===0&&s!==0}function l1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function c1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function u1(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),v=h((t+r)/2),g=c((t-r)/2),_=h((t-r)/2),S=c((r-t)/2),E=h((r-t)/2);switch(l){case"XYX":s.set(d*v,m*g,m*_,d*p);break;case"YZY":s.set(m*_,d*v,m*g,d*p);break;case"ZXZ":s.set(m*g,m*_,d*v,d*p);break;case"XZX":s.set(d*v,m*E,m*S,d*p);break;case"YXY":s.set(m*S,d*v,m*E,d*p);break;case"ZYZ":s.set(m*E,m*S,d*v,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ao(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Xl={DEG2RAD:Do,RAD2DEG:Jl,generateUUID:Ss,clamp:we,euclideanModulo:Vm,mapLinear:ZT,inverseLerp:KT,lerp:Gl,damp:QT,pingpong:JT,smoothstep:$T,smootherstep:t1,randInt:e1,randFloat:n1,randFloatSpread:i1,seededRandom:a1,degToRad:r1,radToDeg:s1,isPowerOfTwo:o1,ceilPowerOfTwo:l1,floorPowerOfTwo:c1,setQuaternionFromProperEuler:u1,normalize:si,denormalize:Ao};class Xt{constructor(t=0,i=0){Xt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Aa{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const _=c[h+0],S=c[h+1],E=c[h+2],C=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=C;return}if(g!==C||m!==_||p!==S||v!==E){let M=1-d;const x=m*_+p*S+v*E+g*C,N=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const z=Math.sqrt(U),P=Math.atan2(z,x*N);M=Math.sin(M*P)/z,d=Math.sin(d*P)/z}const T=d*N;if(m=m*M+_*T,p=p*M+S*T,v=v*M+E*T,g=g*M+C*T,M===1-d){const z=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=z,p*=z,v*=z,g*=z}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[h],_=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+v*g+m*S-p*_,t[i+1]=m*E+v*_+p*g-d*S,t[i+2]=p*E+v*S+d*_-m*g,t[i+3]=v*E-d*g-m*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),g=d(c/2),_=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"YXZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"ZXY":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"ZYX":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"YZX":this._x=_*v*g+p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g-_*S*E;break;case"XZY":this._x=_*v*g-p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],_=r+d+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-r*p,this._z=c*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,_=Math.sin(i*v)/p;return this._w=h*g+this._w*_,this._x=r*g+this._x*_,this._y=l*g+this._y*_,this._z=c*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,i=0,r=0){G.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(_y.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(_y.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),v=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*v,this.y=r+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(we(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new G,_y=new Aa;class be{constructor(t,i,r,l,c,h,d,m,p){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],_=r[2],S=r[5],E=r[8],C=l[0],M=l[3],x=l[6],N=l[1],U=l[4],T=l[7],z=l[2],P=l[5],O=l[8];return c[0]=h*C+d*N+m*z,c[3]=h*M+d*U+m*P,c[6]=h*x+d*T+m*O,c[1]=p*C+v*N+g*z,c[4]=p*M+v*U+g*P,c[7]=p*x+v*T+g*O,c[2]=_*C+S*N+E*z,c[5]=_*M+S*U+E*P,c[8]=_*x+S*T+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-r*c*v+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,_=d*m-v*c,S=p*c-h*m,E=i*g+r*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=g*C,t[1]=(l*p-v*r)*C,t[2]=(d*r-l*h)*C,t[3]=_*C,t[4]=(v*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=S*C,t[7]=(r*m-p*i)*C,t[8]=(h*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ip.makeScale(t,i)),this}rotate(t){return this.premultiply(ip.makeRotation(-t)),this}translate(t,i){return this.premultiply(ip.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ip=new be;function kx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function yf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function f1(){const s=yf("canvas");return s.style.display="block",s}const yy={};function $l(s){s in yy||(yy[s]=!0,console.warn(s))}function h1(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const xy=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sy=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d1(){const s={enabled:!0,workingColorSpace:zo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===en&&(l.r=Qa(l.r),l.g=Qa(l.g),l.b=Qa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===en&&(l.r=Uo(l.r),l.g=Uo(l.g),l.b=Uo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ur?vf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $l("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $l("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[zo]:{primaries:t,whitePoint:r,transfer:vf,toXYZ:xy,fromXYZ:Sy,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:r,transfer:en,toXYZ:xy,fromXYZ:Sy,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Ge=d1();function Qa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ho;class p1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ho===void 0&&(ho=yf("canvas")),ho.width=t.width,ho.height=t.height;const l=ho.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ho}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=yf("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Qa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Qa(i[r]/255)*255):i[r]=Qa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let m1=0;class Gm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ap(l[h].image)):c.push(ap(l[h]))}else c=ap(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ap(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?p1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g1=0;const rp=new G;class $n extends Bo{constructor(t=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,r=Nr,l=Nr,c=ra,h=Lr,d=sa,m=ba,p=$n.DEFAULT_ANISOTROPY,v=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Ss(),this.name="",this.source=new Gm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rp).x}get height(){return this.source.getSize(rp).y}get depth(){return this.source.getSize(rp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ir:t.x=t.x-Math.floor(t.x);break;case Nr:t.x=t.x<0?0:1;break;case Qp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ir:t.y=t.y-Math.floor(t.y);break;case Nr:t.y=t.y<0?0:1;break;case Qp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Lx;$n.DEFAULT_ANISOTROPY=1;class _n{constructor(t=0,i=0,r=0,l=1){_n.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],_=m[1],S=m[5],E=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+C)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,T=(S+1)/2,z=(x+1)/2,P=(v+_)/4,O=(g+C)/4,H=(E+M)/4;return U>T&&U>z?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=P/r,c=O/r):T>z?T<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(T),r=P/l,c=H/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=O/c,l=H/c),this.set(r,l,c,i),this}let N=Math.sqrt((M-E)*(M-E)+(g-C)*(g-C)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(g-C)/N,this.z=(_-v)/N,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this.w=we(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this.w=we(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v1 extends Bo{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ra,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new _n(0,0,t,i),this.scissorTest=!1,this.viewport=new _n(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new $n(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:ra,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends v1{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class qx extends $n{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _1 extends $n{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lc{constructor(t=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(na.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(na.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=na.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,na):na.fromBufferAttribute(c,h),na.applyMatrix4(t.matrixWorld),this.expandByPoint(na);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Du.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Du.copy(r.boundingBox)),Du.applyMatrix4(t.matrixWorld),this.union(Du)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,na),na.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ol),Uu.subVectors(this.max,Ol),po.subVectors(t.a,Ol),mo.subVectors(t.b,Ol),go.subVectors(t.c,Ol),br.subVectors(mo,po),Ar.subVectors(go,mo),ls.subVectors(po,go);let i=[0,-br.z,br.y,0,-Ar.z,Ar.y,0,-ls.z,ls.y,br.z,0,-br.x,Ar.z,0,-Ar.x,ls.z,0,-ls.x,-br.y,br.x,0,-Ar.y,Ar.x,0,-ls.y,ls.x,0];return!sp(i,po,mo,go,Uu)||(i=[1,0,0,0,1,0,0,0,1],!sp(i,po,mo,go,Uu))?!1:(Nu.crossVectors(br,Ar),i=[Nu.x,Nu.y,Nu.z],sp(i,po,mo,go,Uu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,na).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(na).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Va=[new G,new G,new G,new G,new G,new G,new G,new G],na=new G,Du=new lc,po=new G,mo=new G,go=new G,br=new G,Ar=new G,ls=new G,Ol=new G,Uu=new G,Nu=new G,cs=new G;function sp(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){cs.fromArray(s,c);const d=l.x*Math.abs(cs.x)+l.y*Math.abs(cs.y)+l.z*Math.abs(cs.z),m=t.dot(cs),p=i.dot(cs),v=r.dot(cs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const y1=new lc,zl=new G,op=new G;class bf{constructor(t=new G,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):y1.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zl.subVectors(t,this.center);const i=zl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(op.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zl.copy(t.center).add(op)),this.expandByPoint(zl.copy(t.center).sub(op))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ga=new G,lp=new G,Lu=new G,Rr=new G,cp=new G,Ou=new G,up=new G;class Xm{constructor(t=new G,i=new G(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ga.copy(this.origin).addScaledVector(this.direction,i),Ga.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){lp.copy(t).add(i).multiplyScalar(.5),Lu.copy(i).sub(t).normalize(),Rr.copy(this.origin).sub(lp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Lu),d=Rr.dot(this.direction),m=-Rr.dot(Lu),p=Rr.lengthSq(),v=Math.abs(1-h*h);let g,_,S,E;if(v>0)if(g=h*m-d,_=h*d-m,E=c*v,g>=0)if(_>=-E)if(_<=E){const C=1/v;g*=C,_*=C,S=g*(g+h*_+2*d)+_*(h*g+_+2*m)+p}else _=c,g=Math.max(0,-(h*_+d)),S=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(h*_+d)),S=-g*g+_*(_+2*m)+p;else _<=-E?(g=Math.max(0,-(-h*c+d)),_=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p):_<=E?(g=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(g=Math.max(0,-(h*c+d)),_=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p);else _=h>0?-c:c,g=Math.max(0,-(h*_+d)),S=-g*g+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(lp).addScaledVector(Lu,_),S}intersectSphere(t,i){Ga.subVectors(t.center,this.origin);const r=Ga.dot(this.direction),l=Ga.dot(Ga)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),v>=0?(c=(t.min.y-_.y)*v,h=(t.max.y-_.y)*v):(c=(t.max.y-_.y)*v,h=(t.min.y-_.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-_.z)*g,m=(t.max.z-_.z)*g):(d=(t.max.z-_.z)*g,m=(t.min.z-_.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ga)!==null}intersectTriangle(t,i,r,l,c){cp.subVectors(i,t),Ou.subVectors(r,t),up.crossVectors(cp,Ou);let h=this.direction.dot(up),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Rr.subVectors(this.origin,t);const m=d*this.direction.dot(Ou.crossVectors(Rr,Ou));if(m<0)return null;const p=d*this.direction.dot(cp.cross(Rr));if(p<0||m+p>h)return null;const v=-d*Rr.dot(up);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,i,r,l,c,h,d,m,p,v,g,_,S,E,C,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,v,g,_,S,E,C,M)}set(t,i,r,l,c,h,d,m,p,v,g,_,S,E,C,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=_,x[3]=S,x[7]=E,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vo.setFromMatrixColumn(t,0).length(),c=1/vo.setFromMatrixColumn(t,1).length(),h=1/vo.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const _=h*v,S=h*g,E=d*v,C=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=_-C*p,i[9]=-d*m,i[2]=C-_*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*v,S=m*g,E=p*v,C=p*g;i[0]=_+C*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=C+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*v,S=m*g,E=p*v,C=p*g;i[0]=_-C*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=C-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*v,S=h*g,E=d*v,C=d*g;i[0]=m*v,i[4]=E*p-S,i[8]=_*p+C,i[1]=m*g,i[5]=C*p+_,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,S=h*p,E=d*m,C=d*p;i[0]=m*v,i[4]=C-_*g,i[8]=E*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=S*g+E,i[10]=_-C*g}else if(t.order==="XZY"){const _=h*m,S=h*p,E=d*m,C=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=_*g+C,i[5]=h*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=C*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x1,t,S1)}lookAt(t,i,r){const l=this.elements;return wi.subVectors(t,i),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Cr.crossVectors(r,wi),Cr.lengthSq()===0&&(Math.abs(r.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Cr.crossVectors(r,wi)),Cr.normalize(),zu.crossVectors(wi,Cr),l[0]=Cr.x,l[4]=zu.x,l[8]=wi.x,l[1]=Cr.y,l[5]=zu.y,l[9]=wi.y,l[2]=Cr.z,l[6]=zu.z,l[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],_=r[9],S=r[13],E=r[2],C=r[6],M=r[10],x=r[14],N=r[3],U=r[7],T=r[11],z=r[15],P=l[0],O=l[4],H=l[8],w=l[12],R=l[1],B=l[5],K=l[9],ot=l[13],lt=l[2],rt=l[6],q=l[10],nt=l[14],Y=l[3],ht=l[7],Rt=l[11],Ht=l[15];return c[0]=h*P+d*R+m*lt+p*Y,c[4]=h*O+d*B+m*rt+p*ht,c[8]=h*H+d*K+m*q+p*Rt,c[12]=h*w+d*ot+m*nt+p*Ht,c[1]=v*P+g*R+_*lt+S*Y,c[5]=v*O+g*B+_*rt+S*ht,c[9]=v*H+g*K+_*q+S*Rt,c[13]=v*w+g*ot+_*nt+S*Ht,c[2]=E*P+C*R+M*lt+x*Y,c[6]=E*O+C*B+M*rt+x*ht,c[10]=E*H+C*K+M*q+x*Rt,c[14]=E*w+C*ot+M*nt+x*Ht,c[3]=N*P+U*R+T*lt+z*Y,c[7]=N*O+U*B+T*rt+z*ht,c[11]=N*H+U*K+T*q+z*Rt,c[15]=N*w+U*ot+T*nt+z*Ht,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],_=t[10],S=t[14],E=t[3],C=t[7],M=t[11],x=t[15];return E*(+c*m*g-l*p*g-c*d*_+r*p*_+l*d*S-r*m*S)+C*(+i*m*S-i*p*_+c*h*_-l*h*S+l*p*v-c*m*v)+M*(+i*p*g-i*d*S-c*h*g+r*h*S+c*d*v-r*p*v)+x*(-l*d*v-i*m*g+i*d*_+l*h*g-r*h*_+r*m*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],_=t[10],S=t[11],E=t[12],C=t[13],M=t[14],x=t[15],N=g*M*p-C*_*p+C*m*S-d*M*S-g*m*x+d*_*x,U=E*_*p-v*M*p-E*m*S+h*M*S+v*m*x-h*_*x,T=v*C*p-E*g*p+E*d*S-h*C*S-v*d*x+h*g*x,z=E*g*m-v*C*m-E*d*_+h*C*_+v*d*M-h*g*M,P=i*N+r*U+l*T+c*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return t[0]=N*O,t[1]=(C*_*c-g*M*c-C*l*S+r*M*S+g*l*x-r*_*x)*O,t[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*x+r*m*x)*O,t[3]=(g*m*c-d*_*c-g*l*p+r*_*p+d*l*S-r*m*S)*O,t[4]=U*O,t[5]=(v*M*c-E*_*c+E*l*S-i*M*S-v*l*x+i*_*x)*O,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*x-i*m*x)*O,t[7]=(h*_*c-v*m*c+v*l*p-i*_*p-h*l*S+i*m*S)*O,t[8]=T*O,t[9]=(E*g*c-v*C*c-E*r*S+i*C*S+v*r*x-i*g*x)*O,t[10]=(h*C*c-E*d*c+E*r*p-i*C*p-h*r*x+i*d*x)*O,t[11]=(v*d*c-h*g*c-v*r*p+i*g*p+h*r*S-i*d*S)*O,t[12]=z*O,t[13]=(v*C*l-E*g*l+E*r*_-i*C*_-v*r*M+i*g*M)*O,t[14]=(E*d*l-h*C*l-E*r*m+i*C*m+h*r*M-i*d*M)*O,t[15]=(h*g*l-v*d*l+v*r*m-i*g*m-h*r*_+i*d*_)*O,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,_=c*p,S=c*v,E=c*g,C=h*v,M=h*g,x=d*g,N=m*p,U=m*v,T=m*g,z=r.x,P=r.y,O=r.z;return l[0]=(1-(C+x))*z,l[1]=(S+T)*z,l[2]=(E-U)*z,l[3]=0,l[4]=(S-T)*P,l[5]=(1-(_+x))*P,l[6]=(M+N)*P,l[7]=0,l[8]=(E+U)*O,l[9]=(M-N)*O,l[10]=(1-(_+C))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=vo.set(l[0],l[1],l[2]).length();const h=vo.set(l[4],l[5],l[6]).length(),d=vo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],ia.copy(this);const p=1/c,v=1/h,g=1/d;return ia.elements[0]*=p,ia.elements[1]*=p,ia.elements[2]*=p,ia.elements[4]*=v,ia.elements[5]*=v,ia.elements[6]*=v,ia.elements[8]*=g,ia.elements[9]*=g,ia.elements[10]*=g,i.setFromRotationMatrix(ia),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Ta,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),S=(r+l)/(r-l);let E,C;if(m)E=c/(h-c),C=h*c/(h-c);else if(d===Ta)E=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===_f)E=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Ta,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),_=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,C;if(m)E=1/(h-c),C=h/(h-c);else if(d===Ta)E=-2/(h-c),C=-(h+c)/(h-c);else if(d===_f)E=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vo=new G,ia=new cn,x1=new G(0,0,0),S1=new G(1,1,1),Cr=new G,zu=new G,wi=new G,My=new cn,Ey=new Aa;class la{constructor(t=0,i=0,r=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-we(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-we(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(we(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return My.makeRotationFromQuaternion(t),this.setFromRotationMatrix(My,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ey.setFromEuler(this),this.setFromQuaternion(Ey,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class km{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let M1=0;const Ty=new G,_o=new Aa,Xa=new cn,Pu=new G,Pl=new G,E1=new G,T1=new Aa,by=new G(1,0,0),Ay=new G(0,1,0),Ry=new G(0,0,1),Cy={type:"added"},b1={type:"removed"},yo={type:"childadded",child:null},fp={type:"childremoved",child:null};class Wn extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new G,i=new la,r=new Aa,l=new G(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new be}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new km,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _o.setFromAxisAngle(t,i),this.quaternion.multiply(_o),this}rotateOnWorldAxis(t,i){return _o.setFromAxisAngle(t,i),this.quaternion.premultiply(_o),this}rotateX(t){return this.rotateOnAxis(by,t)}rotateY(t){return this.rotateOnAxis(Ay,t)}rotateZ(t){return this.rotateOnAxis(Ry,t)}translateOnAxis(t,i){return Ty.copy(t).applyQuaternion(this.quaternion),this.position.add(Ty.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(by,t)}translateY(t){return this.translateOnAxis(Ay,t)}translateZ(t){return this.translateOnAxis(Ry,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Pu.copy(t):Pu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xa.lookAt(Pl,Pu,this.up):Xa.lookAt(Pu,Pl,this.up),this.quaternion.setFromRotationMatrix(Xa),l&&(Xa.extractRotation(l.matrixWorld),_o.setFromRotationMatrix(Xa),this.quaternion.premultiply(_o.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cy),yo.child=t,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(b1),fp.child=t,this.dispatchEvent(fp),fp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cy),yo.child=t,this.dispatchEvent(yo),yo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,t,E1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,T1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),_=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new G(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const aa=new G,ka=new G,hp=new G,qa=new G,xo=new G,So=new G,wy=new G,dp=new G,pp=new G,mp=new G,gp=new _n,vp=new _n,_p=new _n;class qi{constructor(t=new G,i=new G,r=new G){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),aa.subVectors(t,i),l.cross(aa);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){aa.subVectors(l,i),ka.subVectors(r,i),hp.subVectors(t,i);const h=aa.dot(aa),d=aa.dot(ka),m=aa.dot(hp),p=ka.dot(ka),v=ka.dot(hp),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const _=1/g,S=(p*m-d*v)*_,E=(h*v-d*m)*_;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,qa)===null?!1:qa.x>=0&&qa.y>=0&&qa.x+qa.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,qa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,qa.x),m.addScaledVector(h,qa.y),m.addScaledVector(d,qa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return gp.setScalar(0),vp.setScalar(0),_p.setScalar(0),gp.fromBufferAttribute(t,i),vp.fromBufferAttribute(t,r),_p.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(gp,c.x),h.addScaledVector(vp,c.y),h.addScaledVector(_p,c.z),h}static isFrontFacing(t,i,r,l){return aa.subVectors(r,i),ka.subVectors(t,i),aa.cross(ka).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return aa.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),aa.cross(ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return qi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return qi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;xo.subVectors(l,r),So.subVectors(c,r),dp.subVectors(t,r);const m=xo.dot(dp),p=So.dot(dp);if(m<=0&&p<=0)return i.copy(r);pp.subVectors(t,l);const v=xo.dot(pp),g=So.dot(pp);if(v>=0&&g<=v)return i.copy(l);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(xo,h);mp.subVectors(t,c);const S=xo.dot(mp),E=So.dot(mp);if(E>=0&&S<=E)return i.copy(c);const C=S*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(So,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return wy.subVectors(c,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(wy,d);const x=1/(M+C+_);return h=C*x,d=_*x,i.copy(r).addScaledVector(xo,h).addScaledVector(So,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Iu={h:0,s:0,l:0};function yp(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class De{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ge.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ge.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ge.workingColorSpace){if(t=Vm(t,1),i=we(i,0,1),r=we(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=yp(h,c,t+1/3),this.g=yp(h,c,t),this.b=yp(h,c,t-1/3)}return Ge.colorSpaceToWorking(this,l),this}setStyle(t,i=li){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const r=Yx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qa(t.r),this.g=Qa(t.g),this.b=Qa(t.b),this}copyLinearToSRGB(t){return this.r=Uo(t.r),this.g=Uo(t.g),this.b=Uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ge.workingToColorSpace(Jn.copy(this),t),Math.round(we(Jn.r*255,0,255))*65536+Math.round(we(Jn.g*255,0,255))*256+Math.round(we(Jn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ge.workingColorSpace){Ge.workingToColorSpace(Jn.copy(this),i);const r=Jn.r,l=Jn.g,c=Jn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ge.workingColorSpace){return Ge.workingToColorSpace(Jn.copy(this),i),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=li){Ge.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,r=Jn.g,l=Jn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(wr),this.setHSL(wr.h+t,wr.s+i,wr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(wr),t.getHSL(Iu);const r=Gl(wr.h,Iu.h,i),l=Gl(wr.s,Iu.s,i),c=Gl(wr.l,Iu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new De;De.NAMES=Yx;let A1=0;class Fo extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=wo,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hp,this.blendDst=Vp,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=py,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(r.blending=this.blending),this.side!==Pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hp&&(r.blendSrc=this.blendSrc),this.blendDst!==Vp&&(r.blendDst=this.blendDst),this.blendEquation!==gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==py&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Af extends Fo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=Ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const An=new G,Bu=new Xt;let R1=0;class Ni{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=my,this.updateRanges=[],this.gpuType=Za,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Bu.fromBufferAttribute(this,i),Bu.applyMatrix3(t),this.setXY(i,Bu.x,Bu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix3(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyMatrix4(t),this.setXYZ(i,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.applyNormalMatrix(t),this.setXYZ(i,An.x,An.y,An.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)An.fromBufferAttribute(this,i),An.transformDirection(t),this.setXYZ(i,An.x,An.y,An.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=si(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),l=si(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),l=si(l,this.array),c=si(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==my&&(t.usage=this.usage),t}}class Wx extends Ni{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class jx extends Ni{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class an extends Ni{constructor(t,i,r){super(new Float32Array(t),i,r)}}let C1=0;const Xi=new cn,xp=new Wn,Mo=new G,Di=new lc,Il=new lc,Bn=new G;class ti extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kx(t)?jx:Wx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new be().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xi.makeRotationFromQuaternion(t),this.applyMatrix4(Xi),this}rotateX(t){return Xi.makeRotationX(t),this.applyMatrix4(Xi),this}rotateY(t){return Xi.makeRotationY(t),this.applyMatrix4(Xi),this}rotateZ(t){return Xi.makeRotationZ(t),this.applyMatrix4(Xi),this}translate(t,i,r){return Xi.makeTranslation(t,i,r),this.applyMatrix4(Xi),this}scale(t,i,r){return Xi.makeScale(t,i,r),this.applyMatrix4(Xi),this}lookAt(t){return xp.lookAt(t),xp.updateMatrix(),this.applyMatrix4(xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new an(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Di.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bf);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const r=this.boundingSphere.center;if(Di.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Il.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(Di.min,Il.min),Di.expandByPoint(Bn),Bn.addVectors(Di.max,Il.max),Di.expandByPoint(Bn)):(Di.expandByPoint(Il.min),Di.expandByPoint(Il.max))}Di.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Bn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Bn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Bn.fromBufferAttribute(d,p),m&&(Mo.fromBufferAttribute(t,p),Bn.add(Mo)),l=Math.max(l,r.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let H=0;H<r.count;H++)d[H]=new G,m[H]=new G;const p=new G,v=new G,g=new G,_=new Xt,S=new Xt,E=new Xt,C=new G,M=new G;function x(H,w,R){p.fromBufferAttribute(r,H),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),_.fromBufferAttribute(c,H),S.fromBufferAttribute(c,w),E.fromBufferAttribute(c,R),v.sub(p),g.sub(p),S.sub(_),E.sub(_);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(B),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(B),d[H].add(C),d[w].add(C),d[R].add(C),m[H].add(M),m[w].add(M),m[R].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let H=0,w=N.length;H<w;++H){const R=N[H],B=R.start,K=R.count;for(let ot=B,lt=B+K;ot<lt;ot+=3)x(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new G,T=new G,z=new G,P=new G;function O(H){z.fromBufferAttribute(l,H),P.copy(z);const w=d[H];U.copy(w),U.sub(z.multiplyScalar(z.dot(w))).normalize(),T.crossVectors(P,w);const B=T.dot(m[H])<0?-1:1;h.setXYZW(H,U.x,U.y,U.z,B)}for(let H=0,w=N.length;H<w;++H){const R=N[H],B=R.start,K=R.count;for(let ot=B,lt=B+K;ot<lt;ot+=3)O(t.getX(ot+0)),O(t.getX(ot+1)),O(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new G,c=new G,h=new G,d=new G,m=new G,p=new G,v=new G,g=new G;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),C=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Bn.fromBufferAttribute(t,i),Bn.normalize(),t.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,_=new p.constructor(m.length*v);let S=0,E=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?S=m[C]*d.data.stride+d.offset:S=m[C]*v;for(let x=0;x<v;x++)_[E++]=p[S++]}return new Ni(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ti,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const _=p[v],S=t(_,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dy=new cn,us=new Xm,Fu=new bf,Uy=new G,Hu=new G,Vu=new G,Gu=new G,Sp=new G,Xu=new G,Ny=new G,ku=new G;class Dn extends Wn{constructor(t=new ti,i=new Af){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Xu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Sp.fromBufferAttribute(g,t),h?Xu.addScaledVector(Sp,v):Xu.addScaledVector(Sp.sub(i),v))}i.add(Xu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fu.copy(r.boundingSphere),Fu.applyMatrix4(c),us.copy(t.ray).recast(t.near),!(Fu.containsPoint(us.origin)===!1&&(us.intersectSphere(Fu,Uy)===null||us.origin.distanceToSquared(Uy)>(t.far-t.near)**2))&&(Dy.copy(c).invert(),us.copy(t.ray).applyMatrix4(Dy),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,us)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=_.length;E<C;E++){const M=_[E],x=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let T=N,z=U;T<z;T+=3){const P=d.getX(T),O=d.getX(T+1),H=d.getX(T+2);l=qu(this,x,t,r,p,v,g,P,O,H),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let M=E,x=C;M<x;M+=3){const N=d.getX(M),U=d.getX(M+1),T=d.getX(M+2);l=qu(this,h,t,r,p,v,g,N,U,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,C=_.length;E<C;E++){const M=_[E],x=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let T=N,z=U;T<z;T+=3){const P=T,O=T+1,H=T+2;l=qu(this,x,t,r,p,v,g,P,O,H),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let M=E,x=C;M<x;M+=3){const N=M,U=M+1,T=M+2;l=qu(this,h,t,r,p,v,g,N,U,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function w1(s,t,i,r,l,c,h,d){let m;if(t.side===yi?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Pr,d),m===null)return null;ku.copy(d),ku.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(ku);return p<i.near||p>i.far?null:{distance:p,point:ku.clone(),object:s}}function qu(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Hu),s.getVertexPosition(m,Vu),s.getVertexPosition(p,Gu);const v=w1(s,t,i,r,Hu,Vu,Gu,Ny);if(v){const g=new G;qi.getBarycoord(Ny,Hu,Vu,Gu,g),l&&(v.uv=qi.getInterpolatedAttribute(l,d,m,p,g,new Xt)),c&&(v.uv1=qi.getInterpolatedAttribute(c,d,m,p,g,new Xt)),h&&(v.normal=qi.getInterpolatedAttribute(h,d,m,p,g,new G),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new G,materialIndex:0};qi.getNormal(Hu,Vu,Gu,_.normal),v.face=_,v.barycoord=g}return v}class Ho extends ti{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(g,2));function E(C,M,x,N,U,T,z,P,O,H,w){const R=T/O,B=z/H,K=T/2,ot=z/2,lt=P/2,rt=O+1,q=H+1;let nt=0,Y=0;const ht=new G;for(let Rt=0;Rt<q;Rt++){const Ht=Rt*B-ot;for(let pe=0;pe<rt;pe++){const de=pe*R-K;ht[C]=de*N,ht[M]=Ht*U,ht[x]=lt,p.push(ht.x,ht.y,ht.z),ht[C]=0,ht[M]=0,ht[x]=P>0?1:-1,v.push(ht.x,ht.y,ht.z),g.push(pe/O),g.push(1-Rt/H),nt+=1}}for(let Rt=0;Rt<H;Rt++)for(let Ht=0;Ht<O;Ht++){const pe=_+Ht+rt*Rt,de=_+Ht+rt*(Rt+1),V=_+(Ht+1)+rt*(Rt+1),mt=_+(Ht+1)+rt*Rt;m.push(pe,de,mt),m.push(de,V,mt),Y+=6}d.addGroup(S,Y,w),S+=Y,_+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Po(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function oi(s){const t={};for(let i=0;i<s.length;i++){const r=Po(s[i]);for(const l in r)t[l]=r[l]}return t}function D1(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Zx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const U1={clone:Po,merge:oi};var N1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Fo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N1,this.fragmentShader=L1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Po(t.uniforms),this.uniformsGroups=D1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Kx extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new G,Ly=new Xt,Oy=new Xt;class ki extends Kx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Jl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-t/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-t/Dr.z)}getViewSize(t,i){return this.getViewBounds(t,Ly,Oy),i.subVectors(Oy,Ly)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Do*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Eo=-90,To=1;class O1 extends Wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ki(Eo,To,t,i);l.layers=this.layers,this.add(l);const c=new ki(Eo,To,t,i);c.layers=this.layers,this.add(c);const h=new ki(Eo,To,t,i);h.layers=this.layers,this.add(h);const d=new ki(Eo,To,t,i);d.layers=this.layers,this.add(d);const m=new ki(Eo,To,t,i);m.layers=this.layers,this.add(m);const p=new ki(Eo,To,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===_f)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,_,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Qx extends $n{constructor(t=[],i=Lo,r,l,c,h,d,m,p,v){super(t,i,r,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class z1 extends ys{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Qx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ho(5,5,5),c=new Br({name:"CubemapFromEquirect",uniforms:Po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:yi,blending:Or});c.uniforms.tEquirect.value=i;const h=new Dn(l,c),d=i.minFilter;return i.minFilter===Lr&&(i.minFilter=ra),new O1(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class oa extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P1={type:"move"};class Mp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,r),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(P1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new oa;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Jx extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class I1 extends $n{constructor(t=null,i=1,r=1,l,c,h,d,m,p=Ui,v=Ui,g,_){super(null,h,d,m,p,v,l,c,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ep=new G,B1=new G,F1=new be;class ps{constructor(t=new G(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ep.subVectors(r,i).cross(B1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ep),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||F1.getNormalMatrix(t),l=this.coplanarPoint(Ep).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new bf,H1=new Xt(.5,.5),Yu=new G;class qm{constructor(t=new ps,i=new ps,r=new ps,l=new ps,c=new ps,h=new ps){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ta,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],_=c[6],S=c[7],E=c[8],C=c[9],M=c[10],x=c[11],N=c[12],U=c[13],T=c[14],z=c[15];if(l[0].setComponents(p-h,S-v,x-E,z-N).normalize(),l[1].setComponents(p+h,S+v,x+E,z+N).normalize(),l[2].setComponents(p+d,S+g,x+C,z+U).normalize(),l[3].setComponents(p-d,S-g,x-C,z-U).normalize(),r)l[4].setComponents(m,_,M,T).normalize(),l[5].setComponents(p-m,S-_,x-M,z-T).normalize();else if(l[4].setComponents(p-m,S-_,x-M,z-T).normalize(),i===Ta)l[5].setComponents(p+m,S+_,x+M,z+T).normalize();else if(i===_f)l[5].setComponents(m,_,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);const i=H1.distanceTo(t.center);return fs.radius=.7071067811865476+i,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Yu.x=l.normal.x>0?t.max.x:t.min.x,Yu.y=l.normal.y>0?t.max.y:t.min.y,Yu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class df extends Fo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xf=new G,Sf=new G,zy=new cn,Bl=new Xm,Wu=new bf,Tp=new G,Py=new G;class V1 extends Wn{constructor(t=new ti,i=new df){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)xf.fromBufferAttribute(i,l-1),Sf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=xf.distanceTo(Sf);t.setAttribute("lineDistance",new an(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wu.copy(r.boundingSphere),Wu.applyMatrix4(l),Wu.radius+=c,t.ray.intersectsSphere(Wu)===!1)return;zy.copy(l).invert(),Bl.copy(t.ray).applyMatrix4(zy);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const S=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let C=S,M=E-1;C<M;C+=p){const x=v.getX(C),N=v.getX(C+1),U=ju(this,t,Bl,m,x,N,C);U&&i.push(U)}if(this.isLineLoop){const C=v.getX(E-1),M=v.getX(S),x=ju(this,t,Bl,m,C,M,E-1);x&&i.push(x)}}else{const S=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let C=S,M=E-1;C<M;C+=p){const x=ju(this,t,Bl,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=ju(this,t,Bl,m,E-1,S,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ju(s,t,i,r,l,c,h){const d=s.geometry.attributes.position;if(xf.fromBufferAttribute(d,l),Sf.fromBufferAttribute(d,c),i.distanceSqToSegment(xf,Sf,Tp,Py)>r)return;Tp.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Tp);if(!(p<t.near||p>t.far))return{distance:p,point:Py.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const Iy=new G,By=new G;class bp extends V1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Iy.fromBufferAttribute(i,l),By.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Iy.distanceTo(By);t.setAttribute("lineDistance",new an(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Am extends $n{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $x extends $n{constructor(t,i,r=_s,l,c,h,d=Ui,m=Ui,p,v=Kl,g=1){if(v!==Kl&&v!==Ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:g};super(_,l,c,h,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tS extends $n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ym extends ti{constructor(t=1,i=1,r=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:l,heightSegments:c},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const h=[],d=[],m=[],p=[],v=i/2,g=Math.PI/2*t,_=i,S=2*g+_,E=r*2+c,C=l+1,M=new G,x=new G;for(let N=0;N<=E;N++){let U=0,T=0,z=0,P=0;if(N<=r){const w=N/r,R=w*Math.PI/2;T=-v-t*Math.cos(R),z=t*Math.sin(R),P=-t*Math.cos(R),U=w*g}else if(N<=r+c){const w=(N-r)/c;T=-v+w*i,z=t,P=0,U=g+w*_}else{const w=(N-r-c)/r,R=w*Math.PI/2;T=v+t*Math.sin(R),z=t*Math.cos(R),P=t*Math.sin(R),U=g+_+w*g}const O=Math.max(0,Math.min(1,U/S));let H=0;N===0?H=.5/l:N===E&&(H=-.5/l);for(let w=0;w<=l;w++){const R=w/l,B=R*Math.PI*2,K=Math.sin(B),ot=Math.cos(B);x.x=-z*ot,x.y=T,x.z=z*K,d.push(x.x,x.y,x.z),M.set(-z*ot,P,z*K),M.normalize(),m.push(M.x,M.y,M.z),p.push(R+H,O)}if(N>0){const w=(N-1)*C;for(let R=0;R<l;R++){const B=w+R,K=w+R+1,ot=N*C+R,lt=N*C+R+1;h.push(B,K,ot),h.push(K,lt,ot)}}}this.setIndex(h),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(m,3)),this.setAttribute("uv",new an(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ym(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class kl extends ti{constructor(t=1,i=1,r=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],_=[],S=[];let E=0;const C=[],M=r/2;let x=0;N(),h===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(S,2));function N(){const T=new G,z=new G;let P=0;const O=(i-t)/r;for(let H=0;H<=c;H++){const w=[],R=H/c,B=R*(i-t)+t;for(let K=0;K<=l;K++){const ot=K/l,lt=ot*m+d,rt=Math.sin(lt),q=Math.cos(lt);z.x=B*rt,z.y=-R*r+M,z.z=B*q,g.push(z.x,z.y,z.z),T.set(rt,O,q).normalize(),_.push(T.x,T.y,T.z),S.push(ot,1-R),w.push(E++)}C.push(w)}for(let H=0;H<l;H++)for(let w=0;w<c;w++){const R=C[w][H],B=C[w+1][H],K=C[w+1][H+1],ot=C[w][H+1];(t>0||w!==0)&&(v.push(R,B,ot),P+=3),(i>0||w!==c-1)&&(v.push(B,K,ot),P+=3)}p.addGroup(x,P,0),x+=P}function U(T){const z=E,P=new Xt,O=new G;let H=0;const w=T===!0?t:i,R=T===!0?1:-1;for(let K=1;K<=l;K++)g.push(0,M*R,0),_.push(0,R,0),S.push(.5,.5),E++;const B=E;for(let K=0;K<=l;K++){const lt=K/l*m+d,rt=Math.cos(lt),q=Math.sin(lt);O.x=w*q,O.y=M*R,O.z=w*rt,g.push(O.x,O.y,O.z),_.push(0,R,0),P.x=rt*.5+.5,P.y=q*.5*R+.5,S.push(P.x,P.y),E++}for(let K=0;K<l;K++){const ot=z+K,lt=B+K;T===!0?v.push(lt,lt+1,ot):v.push(lt+1,lt,ot),H+=3}p.addGroup(x,H,T===!0?1:2),x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Zu=new G,Ku=new G,Ap=new G,Qu=new qi;class G1 extends ti{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Do*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),_={},S=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:C,b:M,c:x}=Qu;if(C.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),x.fromBufferAttribute(d,p[2]),Qu.getNormal(Ap),g[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let N=0;N<3;N++){const U=(N+1)%3,T=g[N],z=g[U],P=Qu[v[N]],O=Qu[v[U]],H=`${T}_${z}`,w=`${z}_${T}`;w in _&&_[w]?(Ap.dot(_[w].normal)<=c&&(S.push(P.x,P.y,P.z),S.push(O.x,O.y,O.z)),_[w]=null):H in _||(_[H]={index0:p[N],index1:p[U],normal:Ap.clone()})}}for(const E in _)if(_[E]){const{index0:C,index1:M}=_[E];Zu.fromBufferAttribute(d,C),Ku.fromBufferAttribute(d,M),S.push(Zu.x,Zu.y,Zu.z),S.push(Ku.x,Ku.y,Ku.z)}this.setAttribute("position",new an(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ra{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=t*r[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===h)return l/(c-1);const v=r[l],_=r[l+1]-v,S=(h-v)/_;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new Xt:new G);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new G,l=[],c=[],h=[],d=new G,m=new cn;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new G)}c[0]=new G,h[0]=new G;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),_=Math.abs(l[0].z);v<=p&&(p=v,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),_<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(we(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(we(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wm extends Ra{constructor(t=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Xt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=m-this.aX,S=p-this.aY;m=_*v-S*g+this.aX,p=_*g+S*v+this.aY}return r.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class X1 extends Wm{constructor(t,i,r,l,c,h){super(t,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function jm(){let s=0,t=0,i=0,r=0;function l(c,h,d,m){s=c,t=d,i=-3*c+3*h-2*d-m,r=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,v,g){let _=(h-c)/p-(d-c)/(p+v)+(d-h)/v,S=(d-h)/v-(m-h)/(v+g)+(m-d)/g;_*=v,S*=v,l(h,d,_,S)},calc:function(c){const h=c*c,d=h*c;return s+t*c+i*h+r*d}}}const Ju=new G,Rp=new jm,Cp=new jm,wp=new jm;class Zm extends Ra{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new G){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%c]:(Ju.subVectors(l[0],l[1]).add(l[0]),p=Ju);const g=l[d%c],_=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Ju.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Ju),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),S),C=Math.pow(g.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(v),S);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),Rp.initNonuniformCatmullRom(p.x,g.x,_.x,v.x,E,C,M),Cp.initNonuniformCatmullRom(p.y,g.y,_.y,v.y,E,C,M),wp.initNonuniformCatmullRom(p.z,g.z,_.z,v.z,E,C,M)}else this.curveType==="catmullrom"&&(Rp.initCatmullRom(p.x,g.x,_.x,v.x,this.tension),Cp.initCatmullRom(p.y,g.y,_.y,v.y,this.tension),wp.initCatmullRom(p.z,g.z,_.z,v.z,this.tension));return r.set(Rp.calc(m),Cp.calc(m),wp.calc(m)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new G().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fy(s,t,i,r,l){const c=(r-t)*.5,h=(l-i)*.5,d=s*s,m=s*d;return(2*i-2*r+c+h)*m+(-3*i+3*r-2*c-h)*d+c*s+i}function k1(s,t){const i=1-s;return i*i*t}function q1(s,t){return 2*(1-s)*s*t}function Y1(s,t){return s*s*t}function ql(s,t,i,r){return k1(s,t)+q1(s,i)+Y1(s,r)}function W1(s,t){const i=1-s;return i*i*i*t}function j1(s,t){const i=1-s;return 3*i*i*s*t}function Z1(s,t){return 3*(1-s)*s*s*t}function K1(s,t){return s*s*s*t}function Yl(s,t,i,r,l){return W1(s,t)+j1(s,i)+Z1(s,r)+K1(s,l)}class eS extends Ra{constructor(t=new Xt,i=new Xt,r=new Xt,l=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Xt){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Yl(t,l.x,c.x,h.x,d.x),Yl(t,l.y,c.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q1 extends Ra{constructor(t=new G,i=new G,r=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new G){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Yl(t,l.x,c.x,h.x,d.x),Yl(t,l.y,c.y,h.y,d.y),Yl(t,l.z,c.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nS extends Ra{constructor(t=new Xt,i=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Xt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Xt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J1 extends Ra{constructor(t=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new G){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iS extends Ra{constructor(t=new Xt,i=new Xt,r=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Xt){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(ql(t,l.x,c.x,h.x),ql(t,l.y,c.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aS extends Ra{constructor(t=new G,i=new G,r=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new G){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(ql(t,l.x,c.x,h.x),ql(t,l.y,c.y,h.y),ql(t,l.z,c.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rS extends Ra{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Xt){const r=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],v=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return r.set(Fy(d,m.x,p.x,v.x,g.x),Fy(d,m.y,p.y,v.y,g.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Xt().fromArray(l))}return this}}var Mf=Object.freeze({__proto__:null,ArcCurve:X1,CatmullRomCurve3:Zm,CubicBezierCurve:eS,CubicBezierCurve3:Q1,EllipseCurve:Wm,LineCurve:nS,LineCurve3:J1,QuadraticBezierCurve:iS,QuadraticBezierCurve3:aS,SplineCurve:rS});class $1 extends Ra{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mf[r](i,t))}return this}getPoint(t,i){const r=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const h=l[c]-r,d=this.curves[c],m=d.getLength(),p=m===0?0:1-h/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,m=h.getPoints(d);for(let p=0;p<m.length;p++){const v=m[p];r&&r.equals(v)||(i.push(v),r=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(new Mf[l.type]().fromJSON(l))}return this}}class Rm extends $1{constructor(t){super(),this.type="Path",this.currentPoint=new Xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,r=t.length;i<r;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const r=new nS(this.currentPoint.clone(),new Xt(t,i));return this.curves.push(r),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,r,l){const c=new iS(this.currentPoint.clone(),new Xt(t,i),new Xt(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(t,i,r,l,c,h){const d=new eS(this.currentPoint.clone(),new Xt(t,i),new Xt(r,l),new Xt(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),r=new rS(i);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,r,l,c,h){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,r,l,c,h),this}absarc(t,i,r,l,c,h){return this.absellipse(t,i,r,r,l,c,h),this}ellipse(t,i,r,l,c,h,d,m){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+p,i+v,r,l,c,h,d,m),this}absellipse(t,i,r,l,c,h,d,m){const p=new Wm(t,i,r,l,c,h,d,m);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tc extends Rm{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(new Rm().fromJSON(l))}return this}}function tb(s,t,i=2){const r=t&&t.length,l=r?t[0]*i:s.length;let c=sS(s,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,m,p;if(r&&(c=rb(s,t,c,i)),s.length>80*i){d=1/0,m=1/0;let v=-1/0,g=-1/0;for(let _=i;_<l;_+=i){const S=s[_],E=s[_+1];S<d&&(d=S),E<m&&(m=E),S>v&&(v=S),E>g&&(g=E)}p=Math.max(v-d,g-m),p=p!==0?32767/p:0}return ec(c,h,i,d,m,p,0),h}function sS(s,t,i,r,l){let c;if(l===gb(s,t,i,r)>0)for(let h=t;h<i;h+=r)c=Hy(h/r|0,s[h],s[h+1],c);else for(let h=i-r;h>=t;h-=r)c=Hy(h/r|0,s[h],s[h+1],c);return c&&Io(c,c.next)&&(ic(c),c=c.next),c}function xs(s,t){if(!s)return s;t||(t=s);let i=s,r;do if(r=!1,!i.steiner&&(Io(i,i.next)||pn(i.prev,i,i.next)===0)){if(ic(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function ec(s,t,i,r,l,c,h){if(!s)return;!h&&c&&ub(s,r,l,c);let d=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?nb(s,r,l,c):eb(s)){t.push(m.i,s.i,p.i),ic(s),s=p.next,d=p.next;continue}if(s=p,s===d){h?h===1?(s=ib(xs(s),t),ec(s,t,i,r,l,c,2)):h===2&&ab(s,t,i,r,l,c):ec(xs(s),t,i,r,l,c,1);break}}}function eb(s){const t=s.prev,i=s,r=s.next;if(pn(t,i,r)>=0)return!1;const l=t.x,c=i.x,h=r.x,d=t.y,m=i.y,p=r.y,v=Math.min(l,c,h),g=Math.min(d,m,p),_=Math.max(l,c,h),S=Math.max(d,m,p);let E=r.next;for(;E!==t;){if(E.x>=v&&E.x<=_&&E.y>=g&&E.y<=S&&Fl(l,d,c,m,h,p,E.x,E.y)&&pn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function nb(s,t,i,r){const l=s.prev,c=s,h=s.next;if(pn(l,c,h)>=0)return!1;const d=l.x,m=c.x,p=h.x,v=l.y,g=c.y,_=h.y,S=Math.min(d,m,p),E=Math.min(v,g,_),C=Math.max(d,m,p),M=Math.max(v,g,_),x=Cm(S,E,t,i,r),N=Cm(C,M,t,i,r);let U=s.prevZ,T=s.nextZ;for(;U&&U.z>=x&&T&&T.z<=N;){if(U.x>=S&&U.x<=C&&U.y>=E&&U.y<=M&&U!==l&&U!==h&&Fl(d,v,m,g,p,_,U.x,U.y)&&pn(U.prev,U,U.next)>=0||(U=U.prevZ,T.x>=S&&T.x<=C&&T.y>=E&&T.y<=M&&T!==l&&T!==h&&Fl(d,v,m,g,p,_,T.x,T.y)&&pn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;U&&U.z>=x;){if(U.x>=S&&U.x<=C&&U.y>=E&&U.y<=M&&U!==l&&U!==h&&Fl(d,v,m,g,p,_,U.x,U.y)&&pn(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;T&&T.z<=N;){if(T.x>=S&&T.x<=C&&T.y>=E&&T.y<=M&&T!==l&&T!==h&&Fl(d,v,m,g,p,_,T.x,T.y)&&pn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function ib(s,t){let i=s;do{const r=i.prev,l=i.next.next;!Io(r,l)&&lS(r,i,i.next,l)&&nc(r,l)&&nc(l,r)&&(t.push(r.i,i.i,l.i),ic(i),ic(i.next),i=s=l),i=i.next}while(i!==s);return xs(i)}function ab(s,t,i,r,l,c){let h=s;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&db(h,d)){let m=cS(h,d);h=xs(h,h.next),m=xs(m,m.next),ec(h,t,i,r,l,c,0),ec(m,t,i,r,l,c,0);return}d=d.next}h=h.next}while(h!==s)}function rb(s,t,i,r){const l=[];for(let c=0,h=t.length;c<h;c++){const d=t[c]*r,m=c<h-1?t[c+1]*r:s.length,p=sS(s,d,m,r,!1);p===p.next&&(p.steiner=!0),l.push(hb(p))}l.sort(sb);for(let c=0;c<l.length;c++)i=ob(l[c],i);return i}function sb(s,t){let i=s.x-t.x;if(i===0&&(i=s.y-t.y,i===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=r-l}return i}function ob(s,t){const i=lb(s,t);if(!i)return t;const r=cS(i,s);return xs(r,r.next),xs(i,i.next)}function lb(s,t){let i=t;const r=s.x,l=s.y;let c=-1/0,h;if(Io(s,i))return i;do{if(Io(s,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=r&&g>c&&(c=g,h=i.x<i.next.x?i:i.next,g===r))return h}i=i.next}while(i!==t);if(!h)return null;const d=h,m=h.x,p=h.y;let v=1/0;i=h;do{if(r>=i.x&&i.x>=m&&r!==i.x&&oS(l<p?r:c,l,m,p,l<p?c:r,l,i.x,i.y)){const g=Math.abs(l-i.y)/(r-i.x);nc(i,s)&&(g<v||g===v&&(i.x>h.x||i.x===h.x&&cb(h,i)))&&(h=i,v=g)}i=i.next}while(i!==d);return h}function cb(s,t){return pn(s.prev,s,t.prev)<0&&pn(t.next,s,s.next)<0}function ub(s,t,i,r){let l=s;do l.z===0&&(l.z=Cm(l.x,l.y,t,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==s);l.prevZ.nextZ=null,l.prevZ=null,fb(l)}function fb(s){let t,i=1;do{let r=s,l;s=null;let c=null;for(t=0;r;){t++;let h=r,d=0;for(let p=0;p<i&&(d++,h=h.nextZ,!!h);p++);let m=i;for(;d>0||m>0&&h;)d!==0&&(m===0||!h||r.z<=h.z)?(l=r,r=r.nextZ,d--):(l=h,h=h.nextZ,m--),c?c.nextZ=l:s=l,l.prevZ=c,c=l;r=h}c.nextZ=null,i*=2}while(t>1);return s}function Cm(s,t,i,r,l){return s=(s-i)*l|0,t=(t-r)*l|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function hb(s){let t=s,i=s;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==s);return i}function oS(s,t,i,r,l,c,h,d){return(l-h)*(t-d)>=(s-h)*(c-d)&&(s-h)*(r-d)>=(i-h)*(t-d)&&(i-h)*(c-d)>=(l-h)*(r-d)}function Fl(s,t,i,r,l,c,h,d){return!(s===h&&t===d)&&oS(s,t,i,r,l,c,h,d)}function db(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!pb(s,t)&&(nc(s,t)&&nc(t,s)&&mb(s,t)&&(pn(s.prev,s,t.prev)||pn(s,t.prev,t))||Io(s,t)&&pn(s.prev,s,s.next)>0&&pn(t.prev,t,t.next)>0)}function pn(s,t,i){return(t.y-s.y)*(i.x-t.x)-(t.x-s.x)*(i.y-t.y)}function Io(s,t){return s.x===t.x&&s.y===t.y}function lS(s,t,i,r){const l=tf(pn(s,t,i)),c=tf(pn(s,t,r)),h=tf(pn(i,r,s)),d=tf(pn(i,r,t));return!!(l!==c&&h!==d||l===0&&$u(s,i,t)||c===0&&$u(s,r,t)||h===0&&$u(i,s,r)||d===0&&$u(i,t,r))}function $u(s,t,i){return t.x<=Math.max(s.x,i.x)&&t.x>=Math.min(s.x,i.x)&&t.y<=Math.max(s.y,i.y)&&t.y>=Math.min(s.y,i.y)}function tf(s){return s>0?1:s<0?-1:0}function pb(s,t){let i=s;do{if(i.i!==s.i&&i.next.i!==s.i&&i.i!==t.i&&i.next.i!==t.i&&lS(i,i.next,s,t))return!0;i=i.next}while(i!==s);return!1}function nc(s,t){return pn(s.prev,s,s.next)<0?pn(s,t,s.next)>=0&&pn(s,s.prev,t)>=0:pn(s,t,s.prev)<0||pn(s,s.next,t)<0}function mb(s,t){let i=s,r=!1;const l=(s.x+t.x)/2,c=(s.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==s);return r}function cS(s,t){const i=wm(s.i,s.x,s.y),r=wm(t.i,t.x,t.y),l=s.next,c=t.prev;return s.next=t,t.prev=s,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function Hy(s,t,i,r){const l=wm(s,t,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function ic(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wm(s,t,i){return{i:s,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gb(s,t,i,r){let l=0;for(let c=t,h=i-r;c<i;c+=r)l+=(s[h]-s[c])*(s[c+1]+s[h+1]),h=c;return l}class vb{static triangulate(t,i,r=2){return tb(t,i,r)}}class Ka{static area(t){const i=t.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=t[l].x*t[c].y-t[c].x*t[l].y;return r*.5}static isClockWise(t){return Ka.area(t)<0}static triangulateShape(t,i){const r=[],l=[],c=[];Vy(t),Gy(r,t);let h=t.length;i.forEach(Vy);for(let m=0;m<i.length;m++)l.push(h),h+=i[m].length,Gy(r,i[m]);const d=vb.triangulate(r,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function Vy(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gy(s,t){for(let i=0;i<t.length;i++)s.push(t[i].x),s.push(t[i].y)}class ac extends ti{constructor(t=new tc([new Xt(.5,.5),new Xt(-.5,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const r=this,l=[],c=[];for(let d=0,m=t.length;d<m;d++){const p=t[d];h(p)}this.setAttribute("position",new an(l,3)),this.setAttribute("uv",new an(c,2)),this.computeVertexNormals();function h(d){const m=[],p=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let _=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:S-.1,C=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const x=i.extrudePath,N=i.UVGenerator!==void 0?i.UVGenerator:_b;let U,T=!1,z,P,O,H;x&&(U=x.getSpacedPoints(v),T=!0,_=!1,z=x.computeFrenetFrames(v,!1),P=new G,O=new G,H=new G),_||(M=0,S=0,E=0,C=0);const w=d.extractPoints(p);let R=w.shape;const B=w.holes;if(!Ka.isClockWise(R)){R=R.reverse();for(let At=0,xt=B.length;At<xt;At++){const vt=B[At];Ka.isClockWise(vt)&&(B[At]=vt.reverse())}}function ot(At){const vt=10000000000000001e-36;let pt=At[0];for(let Et=1;Et<=At.length;Et++){const Ct=Et%At.length,Pt=At[Ct],le=Pt.x-pt.x,ce=Pt.y-pt.y,L=le*le+ce*ce,b=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(pt.x),Math.abs(pt.y)),J=vt*b*b;if(L<=J){At.splice(Ct,1),Et--;continue}pt=Pt}}ot(R),B.forEach(ot);const lt=B.length,rt=R;for(let At=0;At<lt;At++){const xt=B[At];R=R.concat(xt)}function q(At,xt,vt){return xt||console.error("THREE.ExtrudeGeometry: vec does not exist"),At.clone().addScaledVector(xt,vt)}const nt=R.length;function Y(At,xt,vt){let pt,Et,Ct;const Pt=At.x-xt.x,le=At.y-xt.y,ce=vt.x-At.x,L=vt.y-At.y,b=Pt*Pt+le*le,J=Pt*L-le*ce;if(Math.abs(J)>Number.EPSILON){const ft=Math.sqrt(b),Tt=Math.sqrt(ce*ce+L*L),dt=xt.x-le/ft,Wt=xt.y+Pt/ft,It=vt.x-L/Tt,Kt=vt.y+ce/Tt,ee=((It-dt)*L-(Kt-Wt)*ce)/(Pt*L-le*ce);pt=dt+Pt*ee-At.x,Et=Wt+le*ee-At.y;const Dt=pt*pt+Et*Et;if(Dt<=2)return new Xt(pt,Et);Ct=Math.sqrt(Dt/2)}else{let ft=!1;Pt>Number.EPSILON?ce>Number.EPSILON&&(ft=!0):Pt<-Number.EPSILON?ce<-Number.EPSILON&&(ft=!0):Math.sign(le)===Math.sign(L)&&(ft=!0),ft?(pt=-le,Et=Pt,Ct=Math.sqrt(b)):(pt=Pt,Et=le,Ct=Math.sqrt(b/2))}return new Xt(pt/Ct,Et/Ct)}const ht=[];for(let At=0,xt=rt.length,vt=xt-1,pt=At+1;At<xt;At++,vt++,pt++)vt===xt&&(vt=0),pt===xt&&(pt=0),ht[At]=Y(rt[At],rt[vt],rt[pt]);const Rt=[];let Ht,pe=ht.concat();for(let At=0,xt=lt;At<xt;At++){const vt=B[At];Ht=[];for(let pt=0,Et=vt.length,Ct=Et-1,Pt=pt+1;pt<Et;pt++,Ct++,Pt++)Ct===Et&&(Ct=0),Pt===Et&&(Pt=0),Ht[pt]=Y(vt[pt],vt[Ct],vt[Pt]);Rt.push(Ht),pe=pe.concat(Ht)}let de;if(M===0)de=Ka.triangulateShape(rt,B);else{const At=[],xt=[];for(let vt=0;vt<M;vt++){const pt=vt/M,Et=S*Math.cos(pt*Math.PI/2),Ct=E*Math.sin(pt*Math.PI/2)+C;for(let Pt=0,le=rt.length;Pt<le;Pt++){const ce=q(rt[Pt],ht[Pt],Ct);zt(ce.x,ce.y,-Et),pt===0&&At.push(ce)}for(let Pt=0,le=lt;Pt<le;Pt++){const ce=B[Pt];Ht=Rt[Pt];const L=[];for(let b=0,J=ce.length;b<J;b++){const ft=q(ce[b],Ht[b],Ct);zt(ft.x,ft.y,-Et),pt===0&&L.push(ft)}pt===0&&xt.push(L)}}de=Ka.triangulateShape(At,xt)}const V=de.length,mt=E+C;for(let At=0;At<nt;At++){const xt=_?q(R[At],pe[At],mt):R[At];T?(O.copy(z.normals[0]).multiplyScalar(xt.x),P.copy(z.binormals[0]).multiplyScalar(xt.y),H.copy(U[0]).add(O).add(P),zt(H.x,H.y,H.z)):zt(xt.x,xt.y,0)}for(let At=1;At<=v;At++)for(let xt=0;xt<nt;xt++){const vt=_?q(R[xt],pe[xt],mt):R[xt];T?(O.copy(z.normals[At]).multiplyScalar(vt.x),P.copy(z.binormals[At]).multiplyScalar(vt.y),H.copy(U[At]).add(O).add(P),zt(H.x,H.y,H.z)):zt(vt.x,vt.y,g/v*At)}for(let At=M-1;At>=0;At--){const xt=At/M,vt=S*Math.cos(xt*Math.PI/2),pt=E*Math.sin(xt*Math.PI/2)+C;for(let Et=0,Ct=rt.length;Et<Ct;Et++){const Pt=q(rt[Et],ht[Et],pt);zt(Pt.x,Pt.y,g+vt)}for(let Et=0,Ct=B.length;Et<Ct;Et++){const Pt=B[Et];Ht=Rt[Et];for(let le=0,ce=Pt.length;le<ce;le++){const L=q(Pt[le],Ht[le],pt);T?zt(L.x,L.y+U[v-1].y,U[v-1].x+vt):zt(L.x,L.y,g+vt)}}}tt(),it();function tt(){const At=l.length/3;if(_){let xt=0,vt=nt*xt;for(let pt=0;pt<V;pt++){const Et=de[pt];Nt(Et[2]+vt,Et[1]+vt,Et[0]+vt)}xt=v+M*2,vt=nt*xt;for(let pt=0;pt<V;pt++){const Et=de[pt];Nt(Et[0]+vt,Et[1]+vt,Et[2]+vt)}}else{for(let xt=0;xt<V;xt++){const vt=de[xt];Nt(vt[2],vt[1],vt[0])}for(let xt=0;xt<V;xt++){const vt=de[xt];Nt(vt[0]+nt*v,vt[1]+nt*v,vt[2]+nt*v)}}r.addGroup(At,l.length/3-At,0)}function it(){const At=l.length/3;let xt=0;wt(rt,xt),xt+=rt.length;for(let vt=0,pt=B.length;vt<pt;vt++){const Et=B[vt];wt(Et,xt),xt+=Et.length}r.addGroup(At,l.length/3-At,1)}function wt(At,xt){let vt=At.length;for(;--vt>=0;){const pt=vt;let Et=vt-1;Et<0&&(Et=At.length-1);for(let Ct=0,Pt=v+M*2;Ct<Pt;Ct++){const le=nt*Ct,ce=nt*(Ct+1),L=xt+pt+le,b=xt+Et+le,J=xt+Et+ce,ft=xt+pt+ce;Ut(L,b,J,ft)}}}function zt(At,xt,vt){m.push(At),m.push(xt),m.push(vt)}function Nt(At,xt,vt){qt(At),qt(xt),qt(vt);const pt=l.length/3,Et=N.generateTopUV(r,l,pt-3,pt-2,pt-1);F(Et[0]),F(Et[1]),F(Et[2])}function Ut(At,xt,vt,pt){qt(At),qt(xt),qt(pt),qt(xt),qt(vt),qt(pt);const Et=l.length/3,Ct=N.generateSideWallUV(r,l,Et-6,Et-3,Et-2,Et-1);F(Ct[0]),F(Ct[1]),F(Ct[3]),F(Ct[1]),F(Ct[2]),F(Ct[3])}function qt(At){l.push(m[At*3+0]),l.push(m[At*3+1]),l.push(m[At*3+2])}function F(At){c.push(At.x),c.push(At.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return yb(i,r,t)}static fromJSON(t,i){const r=[];for(let c=0,h=t.shapes.length;c<h;c++){const d=i[t.shapes[c]];r.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Mf[l.type]().fromJSON(l)),new ac(r,t.options)}}const _b={generateTopUV:function(s,t,i,r,l){const c=t[i*3],h=t[i*3+1],d=t[r*3],m=t[r*3+1],p=t[l*3],v=t[l*3+1];return[new Xt(c,h),new Xt(d,m),new Xt(p,v)]},generateSideWallUV:function(s,t,i,r,l,c){const h=t[i*3],d=t[i*3+1],m=t[i*3+2],p=t[r*3],v=t[r*3+1],g=t[r*3+2],_=t[l*3],S=t[l*3+1],E=t[l*3+2],C=t[c*3],M=t[c*3+1],x=t[c*3+2];return Math.abs(d-v)<Math.abs(h-p)?[new Xt(h,1-m),new Xt(p,1-g),new Xt(_,1-E),new Xt(C,1-x)]:[new Xt(d,1-m),new Xt(v,1-g),new Xt(S,1-E),new Xt(M,1-x)]}};function yb(s,t,i){if(i.shapes=[],Array.isArray(s))for(let r=0,l=s.length;r<l;r++){const c=s[r];i.shapes.push(c.uuid)}else i.shapes.push(s.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class cc extends ti{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,g=t/d,_=i/m,S=[],E=[],C=[],M=[];for(let x=0;x<v;x++){const N=x*_-h;for(let U=0;U<p;U++){const T=U*g-c;E.push(T,-N,0),C.push(0,0,1),M.push(U/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<d;N++){const U=N+p*x,T=N+p*(x+1),z=N+1+p*(x+1),P=N+1+p*x;S.push(U,T,P),S.push(T,z,P)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(C,3)),this.setAttribute("uv",new an(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Km extends ti{constructor(t=new tc([new Xt(0,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const r=[],l=[],c=[],h=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let v=0;v<t.length;v++)p(t[v]),this.addGroup(d,m,v),d+=m,m=0;this.setIndex(r),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(h,2));function p(v){const g=l.length/3,_=v.extractPoints(i);let S=_.shape;const E=_.holes;Ka.isClockWise(S)===!1&&(S=S.reverse());for(let M=0,x=E.length;M<x;M++){const N=E[M];Ka.isClockWise(N)===!0&&(E[M]=N.reverse())}const C=Ka.triangulateShape(S,E);for(let M=0,x=E.length;M<x;M++){const N=E[M];S=S.concat(N)}for(let M=0,x=S.length;M<x;M++){const N=S[M];l.push(N.x,N.y,0),c.push(0,0,1),h.push(N.x,N.y)}for(let M=0,x=C.length;M<x;M++){const N=C[M],U=N[0]+g,T=N[1]+g,z=N[2]+g;r.push(U,T,z),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return xb(i,t)}static fromJSON(t,i){const r=[];for(let l=0,c=t.shapes.length;l<c;l++){const h=i[t.shapes[l]];r.push(h)}return new Km(r,t.curveSegments)}}function xb(s,t){if(t.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){const l=s[i];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t}class Qm extends ti{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const v=[],g=new G,_=new G,S=[],E=[],C=[],M=[];for(let x=0;x<=r;x++){const N=[],U=x/r;let T=0;x===0&&h===0?T=.5/i:x===r&&m===Math.PI&&(T=-.5/i);for(let z=0;z<=i;z++){const P=z/i;g.x=-t*Math.cos(l+P*c)*Math.sin(h+U*d),g.y=t*Math.cos(h+U*d),g.z=t*Math.sin(l+P*c)*Math.sin(h+U*d),E.push(g.x,g.y,g.z),_.copy(g).normalize(),C.push(_.x,_.y,_.z),M.push(P+T,1-U),N.push(p++)}v.push(N)}for(let x=0;x<r;x++)for(let N=0;N<i;N++){const U=v[x][N+1],T=v[x][N],z=v[x+1][N],P=v[x+1][N+1];(x!==0||h>0)&&S.push(U,T,P),(x!==r-1||m<Math.PI)&&S.push(T,z,P)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(C,3)),this.setAttribute("uv",new an(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jm extends ti{constructor(t=new aS(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new G,m=new G,p=new Xt;let v=new G;const g=[],_=[],S=[],E=[];C(),this.setIndex(E),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(S,2));function C(){for(let U=0;U<i;U++)M(U);M(c===!1?i:0),N(),x()}function M(U){v=t.getPointAt(U/i,v);const T=h.normals[U],z=h.binormals[U];for(let P=0;P<=l;P++){const O=P/l*Math.PI*2,H=Math.sin(O),w=-Math.cos(O);m.x=w*T.x+H*z.x,m.y=w*T.y+H*z.y,m.z=w*T.z+H*z.z,m.normalize(),_.push(m.x,m.y,m.z),d.x=v.x+r*m.x,d.y=v.y+r*m.y,d.z=v.z+r*m.z,g.push(d.x,d.y,d.z)}}function x(){for(let U=1;U<=i;U++)for(let T=1;T<=l;T++){const z=(l+1)*(U-1)+(T-1),P=(l+1)*U+(T-1),O=(l+1)*U+T,H=(l+1)*(U-1)+T;E.push(z,P,H),E.push(P,O,H)}}function N(){for(let U=0;U<=i;U++)for(let T=0;T<=l;T++)p.x=U/i,p.y=T/l,S.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Jm(new Mf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class rc extends Fo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gx,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ro extends rc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Sb extends Fo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mb extends Fo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Eb extends Wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Dp=new cn,Xy=new G,ky=new G;class Tb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=ba,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qm,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Xy.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xy),ky.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ky),i.updateMatrixWorld(),Dp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Dp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uS extends Kx{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bb extends Tb{constructor(){super(new uS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qy extends Eb{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new bb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ab extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yy=new cn;class Rb{constructor(t,i,r=0,l=1/0){this.ray=new Xm(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new km,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Yy.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yy),this}intersectObject(t,i=!0,r=[]){return Dm(t,this,r,i),r.sort(Wy),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Dm(t[l],this,r,i);return r.sort(Wy),r}}function Wy(s,t){return s.distance-t.distance}function Dm(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)Dm(c[h],t,i,!0)}}function jy(s,t,i,r){const l=Cb(r);switch(i){case Bx:return s*t;case Hx:return s*t/l.components*l.byteLength;case Bm:return s*t/l.components*l.byteLength;case Vx:return s*t*2/l.components*l.byteLength;case Fm:return s*t*2/l.components*l.byteLength;case Fx:return s*t*3/l.components*l.byteLength;case sa:return s*t*4/l.components*l.byteLength;case Hm:return s*t*4/l.components*l.byteLength;case cf:case uf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ff:case hf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $p:case em:return Math.max(s,16)*Math.max(t,8)/4;case Jp:case tm:return Math.max(s,8)*Math.max(t,8)/2;case nm:case im:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case am:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rm:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sm:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case om:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case lm:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case cm:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case um:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fm:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hm:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case dm:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case pm:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case mm:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gm:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vm:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _m:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ym:case xm:case Sm:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mm:case Em:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Tm:case bm:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Cb(s){switch(s){case ba:case Ox:return{byteLength:1,components:1};case jl:case zx:case oc:return{byteLength:2,components:1};case Pm:case Im:return{byteLength:2,components:4};case _s:case zm:case Za:return{byteLength:4,components:1};case Px:case Ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Om}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Om);function fS(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function wb(s){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],C=g[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++_,g[_]=C)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const C=g[S];s.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$b=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sA="gl_FragColor = linearToOutputTexel( gl_FragColor );",oA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_A=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_R=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ER=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$R=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Re={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Nb,alphamap_pars_fragment:Lb,alphatest_fragment:Ob,alphatest_pars_fragment:zb,aomap_fragment:Pb,aomap_pars_fragment:Ib,batching_pars_vertex:Bb,batching_vertex:Fb,begin_vertex:Hb,beginnormal_vertex:Vb,bsdfs:Gb,iridescence_fragment:Xb,bumpmap_pars_fragment:kb,clipping_planes_fragment:qb,clipping_planes_pars_fragment:Yb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:jb,color_fragment:Zb,color_pars_fragment:Kb,color_pars_vertex:Qb,color_vertex:Jb,common:$b,cube_uv_reflection_fragment:tA,defaultnormal_vertex:eA,displacementmap_pars_vertex:nA,displacementmap_vertex:iA,emissivemap_fragment:aA,emissivemap_pars_fragment:rA,colorspace_fragment:sA,colorspace_pars_fragment:oA,envmap_fragment:lA,envmap_common_pars_fragment:cA,envmap_pars_fragment:uA,envmap_pars_vertex:fA,envmap_physical_pars_fragment:MA,envmap_vertex:hA,fog_vertex:dA,fog_pars_vertex:pA,fog_fragment:mA,fog_pars_fragment:gA,gradientmap_pars_fragment:vA,lightmap_pars_fragment:_A,lights_lambert_fragment:yA,lights_lambert_pars_fragment:xA,lights_pars_begin:SA,lights_toon_fragment:EA,lights_toon_pars_fragment:TA,lights_phong_fragment:bA,lights_phong_pars_fragment:AA,lights_physical_fragment:RA,lights_physical_pars_fragment:CA,lights_fragment_begin:wA,lights_fragment_maps:DA,lights_fragment_end:UA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:LA,logdepthbuf_pars_vertex:OA,logdepthbuf_vertex:zA,map_fragment:PA,map_pars_fragment:IA,map_particle_fragment:BA,map_particle_pars_fragment:FA,metalnessmap_fragment:HA,metalnessmap_pars_fragment:VA,morphinstance_vertex:GA,morphcolor_vertex:XA,morphnormal_vertex:kA,morphtarget_pars_vertex:qA,morphtarget_vertex:YA,normal_fragment_begin:WA,normal_fragment_maps:jA,normal_pars_fragment:ZA,normal_pars_vertex:KA,normal_vertex:QA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:$A,clearcoat_normal_fragment_maps:tR,clearcoat_pars_fragment:eR,iridescence_pars_fragment:nR,opaque_fragment:iR,packing:aR,premultiplied_alpha_fragment:rR,project_vertex:sR,dithering_fragment:oR,dithering_pars_fragment:lR,roughnessmap_fragment:cR,roughnessmap_pars_fragment:uR,shadowmap_pars_fragment:fR,shadowmap_pars_vertex:hR,shadowmap_vertex:dR,shadowmask_pars_fragment:pR,skinbase_vertex:mR,skinning_pars_vertex:gR,skinning_vertex:vR,skinnormal_vertex:_R,specularmap_fragment:yR,specularmap_pars_fragment:xR,tonemapping_fragment:SR,tonemapping_pars_fragment:MR,transmission_fragment:ER,transmission_pars_fragment:TR,uv_pars_fragment:bR,uv_pars_vertex:AR,uv_vertex:RR,worldpos_vertex:CR,background_vert:wR,background_frag:DR,backgroundCube_vert:UR,backgroundCube_frag:NR,cube_vert:LR,cube_frag:OR,depth_vert:zR,depth_frag:PR,distanceRGBA_vert:IR,distanceRGBA_frag:BR,equirect_vert:FR,equirect_frag:HR,linedashed_vert:VR,linedashed_frag:GR,meshbasic_vert:XR,meshbasic_frag:kR,meshlambert_vert:qR,meshlambert_frag:YR,meshmatcap_vert:WR,meshmatcap_frag:jR,meshnormal_vert:ZR,meshnormal_frag:KR,meshphong_vert:QR,meshphong_frag:JR,meshphysical_vert:$R,meshphysical_frag:t2,meshtoon_vert:e2,meshtoon_frag:n2,points_vert:i2,points_frag:a2,shadow_vert:r2,shadow_frag:s2,sprite_vert:o2,sprite_frag:l2},Zt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Ea={basic:{uniforms:oi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:oi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new De(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:oi([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:oi([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:oi([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new De(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:oi([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:oi([Zt.points,Zt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:oi([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:oi([Zt.common,Zt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:oi([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:oi([Zt.sprite,Zt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:oi([Zt.common,Zt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:oi([Zt.lights,Zt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ea.physical={uniforms:oi([Ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const ef={r:0,b:0,g:0},hs=new la,c2=new cn;function u2(s,t,i,r,l,c,h){const d=new De(0);let m=c===!0?0:1,p,v,g=null,_=0,S=null;function E(U){let T=U.isScene===!0?U.background:null;return T&&T.isTexture&&(T=(U.backgroundBlurriness>0?i:t).get(T)),T}function C(U){let T=!1;const z=E(U);z===null?x(d,m):z&&z.isColor&&(x(z,1),T=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(U,T){const z=E(T);z&&(z.isCubeTexture||z.mapping===Tf)?(v===void 0&&(v=new Dn(new Ho(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Po(Ea.backgroundCube.uniforms),vertexShader:Ea.backgroundCube.vertexShader,fragmentShader:Ea.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,O,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),hs.copy(T.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(hs)),v.material.toneMapped=Ge.getTransfer(z.colorSpace)!==en,(g!==z||_!==z.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,g=z,_=z.version,S=s.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Dn(new cc(2,2),new Br({name:"BackgroundMaterial",uniforms:Po(Ea.background.uniforms),vertexShader:Ea.background.vertexShader,fragmentShader:Ea.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.toneMapped=Ge.getTransfer(z.colorSpace)!==en,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||_!==z.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=z,_=z.version,S=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,T){U.getRGB(ef,Zx(s)),r.buffers.color.setClear(ef.r,ef.g,ef.b,T,h)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,T=1){d.set(U),m=T,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(d,m)},render:C,addToRenderList:M,dispose:N}}function f2(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function d(R,B,K,ot,lt){let rt=!1;const q=g(ot,K,B);c!==q&&(c=q,p(c.object)),rt=S(R,ot,K,lt),rt&&E(R,ot,K,lt),lt!==null&&t.update(lt,s.ELEMENT_ARRAY_BUFFER),(rt||h)&&(h=!1,T(R,B,K,ot),lt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,B,K){const ot=K.wireframe===!0;let lt=r[R.id];lt===void 0&&(lt={},r[R.id]=lt);let rt=lt[B.id];rt===void 0&&(rt={},lt[B.id]=rt);let q=rt[ot];return q===void 0&&(q=_(m()),rt[ot]=q),q}function _(R){const B=[],K=[],ot=[];for(let lt=0;lt<i;lt++)B[lt]=0,K[lt]=0,ot[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:ot,object:R,attributes:{},index:null}}function S(R,B,K,ot){const lt=c.attributes,rt=B.attributes;let q=0;const nt=K.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const Rt=lt[Y];let Ht=rt[Y];if(Ht===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Ht=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Ht=R.instanceColor)),Rt===void 0||Rt.attribute!==Ht||Ht&&Rt.data!==Ht.data)return!0;q++}return c.attributesNum!==q||c.index!==ot}function E(R,B,K,ot){const lt={},rt=B.attributes;let q=0;const nt=K.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let Rt=rt[Y];Rt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Rt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Rt=R.instanceColor));const Ht={};Ht.attribute=Rt,Rt&&Rt.data&&(Ht.data=Rt.data),lt[Y]=Ht,q++}c.attributes=lt,c.attributesNum=q,c.index=ot}function C(){const R=c.newAttributes;for(let B=0,K=R.length;B<K;B++)R[B]=0}function M(R){x(R,0)}function x(R,B){const K=c.newAttributes,ot=c.enabledAttributes,lt=c.attributeDivisors;K[R]=1,ot[R]===0&&(s.enableVertexAttribArray(R),ot[R]=1),lt[R]!==B&&(s.vertexAttribDivisor(R,B),lt[R]=B)}function N(){const R=c.newAttributes,B=c.enabledAttributes;for(let K=0,ot=B.length;K<ot;K++)B[K]!==R[K]&&(s.disableVertexAttribArray(K),B[K]=0)}function U(R,B,K,ot,lt,rt,q){q===!0?s.vertexAttribIPointer(R,B,K,lt,rt):s.vertexAttribPointer(R,B,K,ot,lt,rt)}function T(R,B,K,ot){C();const lt=ot.attributes,rt=K.getAttributes(),q=B.defaultAttributeValues;for(const nt in rt){const Y=rt[nt];if(Y.location>=0){let ht=lt[nt];if(ht===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),ht!==void 0){const Rt=ht.normalized,Ht=ht.itemSize,pe=t.get(ht);if(pe===void 0)continue;const de=pe.buffer,V=pe.type,mt=pe.bytesPerElement,tt=V===s.INT||V===s.UNSIGNED_INT||ht.gpuType===zm;if(ht.isInterleavedBufferAttribute){const it=ht.data,wt=it.stride,zt=ht.offset;if(it.isInstancedInterleavedBuffer){for(let Nt=0;Nt<Y.locationSize;Nt++)x(Y.location+Nt,it.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Nt=0;Nt<Y.locationSize;Nt++)M(Y.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,de);for(let Nt=0;Nt<Y.locationSize;Nt++)U(Y.location+Nt,Ht/Y.locationSize,V,Rt,wt*mt,(zt+Ht/Y.locationSize*Nt)*mt,tt)}else{if(ht.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)x(Y.location+it,ht.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let it=0;it<Y.locationSize;it++)M(Y.location+it);s.bindBuffer(s.ARRAY_BUFFER,de);for(let it=0;it<Y.locationSize;it++)U(Y.location+it,Ht/Y.locationSize,V,Rt,Ht*mt,Ht/Y.locationSize*it*mt,tt)}}else if(q!==void 0){const Rt=q[nt];if(Rt!==void 0)switch(Rt.length){case 2:s.vertexAttrib2fv(Y.location,Rt);break;case 3:s.vertexAttrib3fv(Y.location,Rt);break;case 4:s.vertexAttrib4fv(Y.location,Rt);break;default:s.vertexAttrib1fv(Y.location,Rt)}}}}N()}function z(){H();for(const R in r){const B=r[R];for(const K in B){const ot=B[K];for(const lt in ot)v(ot[lt].object),delete ot[lt];delete B[K]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const K in B){const ot=B[K];for(const lt in ot)v(ot[lt].object),delete ot[lt];delete B[K]}delete r[R.id]}function O(R){for(const B in r){const K=r[B];if(K[R.id]===void 0)continue;const ot=K[R.id];for(const lt in ot)v(ot[lt].object),delete ot[lt];delete K[R.id]}}function H(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:N}}function h2(s,t,i){let r;function l(p){r=p}function c(p,v){s.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,r,1)}function m(p,v,g,_){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,_,0,g);let E=0;for(let C=0;C<g;C++)E+=v[C]*_[C];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function d2(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==sa&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const H=O===oc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ba&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Za&&!H)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:T,vertexTextures:z,maxSamples:P}}function p2(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new ps,d=new be,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||r!==0||l;return l=_,r=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,x=s.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):p();else{const N=c?0:r,U=N*4;let T=x.clippingState||null;m.value=T,T=v(E,_,U,S);for(let z=0;z!==U;++z)T[z]=i[z];x.clippingState=T,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,_,S,E){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,E!==!0||M===null){const x=S+C*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,T=S;U!==C;++U,T+=4)h.copy(g[U]).applyMatrix4(N,d),h.normal.toArray(M,T),M[T+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function m2(s){let t=new WeakMap;function i(h,d){return d===Zp?h.mapping=Lo:d===Kp&&(h.mapping=Oo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zp||d===Kp)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new z1(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Co=4,Zy=[.125,.215,.35,.446,.526,.582],vs=20,Up=new uS,Ky=new De;let Np=null,Lp=0,Op=0,zp=!1;const ms=(1+Math.sqrt(5))/2,bo=1/ms,Qy=[new G(-ms,bo,0),new G(ms,bo,0),new G(-bo,0,ms),new G(bo,0,ms),new G(0,ms,-bo),new G(0,ms,bo),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],g2=new G;class Um{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=g2}=c;Np=this._renderer.getRenderTarget(),Lp=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),zp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$y(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Np,Lp,Op),this._renderer.xr.enabled=zp,t.scissorTest=!1,nf(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Lo||t.mapping===Oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Np=this._renderer.getRenderTarget(),Lp=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),zp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ra,minFilter:ra,generateMipmaps:!1,type:oc,format:sa,colorSpace:zo,depthBuffer:!1},l=Jy(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jy(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v2(c)),this._blurMaterial=_2(c,t,i)}return l}_compileMaterial(t){const i=new Dn(this._lodPlanes[0],t);this._renderer.compile(i,Up)}_sceneToCubeUV(t,i,r,l,c){const m=new ki(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(Ky),g.toneMapping=zr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const C=new Af({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1}),M=new Dn(new Ho,C);let x=!1;const N=t.background;N?N.isColor&&(C.color.copy(N),t.background=null,x=!0):(C.color.copy(Ky),x=!0);for(let U=0;U<6;U++){const T=U%3;T===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):T===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const z=this._cubeSize;nf(l,T*z,U>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=_,t.background=N}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Lo||t.mapping===Oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$y());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Dn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;nf(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Up)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Qy[(l-c-1)%Qy.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Dn(this._lodPlanes[l],p),_=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*vs-1),C=c/E,M=isFinite(c)?1+Math.floor(v*C):vs;M>vs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${vs}`);const x=[];let N=0;for(let O=0;O<vs;++O){const H=O/C,w=Math.exp(-H*H/2);x.push(w),O===0?N+=w:O<M&&(N+=2*w)}for(let O=0;O<x.length;O++)x[O]=x[O]/N;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-r;const T=this._sizeLods[l],z=3*T*(l>U-Co?l-U+Co:0),P=4*(this._cubeSize-T);nf(i,z,P,3*T,2*T),m.setRenderTarget(i),m.render(g,Up)}}function v2(s){const t=[],i=[],r=[];let l=s;const c=s-Co+1+Zy.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-Co?m=Zy[h-s+Co-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,C=3,M=2,x=1,N=new Float32Array(C*E*S),U=new Float32Array(M*E*S),T=new Float32Array(x*E*S);for(let P=0;P<S;P++){const O=P%3*2/3-1,H=P>2?0:-1,w=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];N.set(w,C*E*P),U.set(_,M*E*P);const R=[P,P,P,P,P,P];T.set(R,x*E*P)}const z=new ti;z.setAttribute("position",new Ni(N,C)),z.setAttribute("uv",new Ni(U,M)),z.setAttribute("faceIndex",new Ni(T,x)),t.push(z),l>Co&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Jy(s,t,i){const r=new ys(s,t,i);return r.texture.mapping=Tf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function nf(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function _2(s,t,i){const r=new Float32Array(vs),l=new G(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function $y(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function tx(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function $m(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y2(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zp||m===Kp,v=m===Lo||m===Oo;if(p||v){let g=t.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new Um(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Um(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function x2(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&$l("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function S2(s,t,i,r){const l={},c=new WeakMap;function h(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(g,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,E=g.attributes.position;let C=0;if(S!==null){const N=S.array;C=S.version;for(let U=0,T=N.length;U<T;U+=3){const z=N[U+0],P=N[U+1],O=N[U+2];_.push(z,P,P,O,O,z)}}else if(E!==void 0){const N=E.array;C=E.version;for(let U=0,T=N.length/3-1;U<T;U+=3){const z=U+0,P=U+1,O=U+2;_.push(z,P,P,O,O,z)}}else return;const M=new(kx(_)?jx:Wx)(_,1);M.version=C;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function v(g){const _=c.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function M2(s,t,i){let r;function l(_){r=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,S){s.drawElements(r,S,c,_*h),i.update(S,r,1)}function p(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,_*h,E),i.update(S,r,E))}function v(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function g(_,S,E,C){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)p(_[x]/h,S[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,_,0,C,0,E);let x=0;for(let N=0;N<E;N++)x+=S[N]*C[N];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function E2(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function T2(s,t,i){const r=new WeakMap,l=new _n;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==g){let R=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),C===!0&&(T=2),M===!0&&(T=3);let z=d.attributes.position.count*T,P=1;z>t.maxTextureSize&&(P=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const O=new Float32Array(z*P*4*g),H=new qx(O,z,P,g);H.type=Za,H.needsUpdate=!0;const w=T*4;for(let B=0;B<g;B++){const K=x[B],ot=N[B],lt=U[B],rt=z*P*4*B;for(let q=0;q<K.count;q++){const nt=q*w;E===!0&&(l.fromBufferAttribute(K,q),O[rt+nt+0]=l.x,O[rt+nt+1]=l.y,O[rt+nt+2]=l.z,O[rt+nt+3]=0),C===!0&&(l.fromBufferAttribute(ot,q),O[rt+nt+4]=l.x,O[rt+nt+5]=l.y,O[rt+nt+6]=l.z,O[rt+nt+7]=0),M===!0&&(l.fromBufferAttribute(lt,q),O[rt+nt+8]=l.x,O[rt+nt+9]=l.y,O[rt+nt+10]=l.z,O[rt+nt+11]=lt.itemSize===4?l.w:1)}}_={count:g,texture:H,size:new Xt(z,P)},r.set(d,_),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function b2(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const hS=new $n,ex=new $x(1,1),dS=new qx,pS=new _1,mS=new Qx,nx=[],ix=[],ax=new Float32Array(16),rx=new Float32Array(9),sx=new Float32Array(4);function Vo(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=nx[l];if(c===void 0&&(c=new Float32Array(l),nx[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function Un(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Nn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Rf(s,t){let i=ix[t];i===void 0&&(i=new Int32Array(t),ix[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function A2(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function R2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;s.uniform2fv(this.addr,t),Nn(i,t)}}function C2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Un(i,t))return;s.uniform3fv(this.addr,t),Nn(i,t)}}function w2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;s.uniform4fv(this.addr,t),Nn(i,t)}}function D2(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Un(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Nn(i,t)}else{if(Un(i,r))return;sx.set(r),s.uniformMatrix2fv(this.addr,!1,sx),Nn(i,r)}}function U2(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Un(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Nn(i,t)}else{if(Un(i,r))return;rx.set(r),s.uniformMatrix3fv(this.addr,!1,rx),Nn(i,r)}}function N2(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(Un(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Nn(i,t)}else{if(Un(i,r))return;ax.set(r),s.uniformMatrix4fv(this.addr,!1,ax),Nn(i,r)}}function L2(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function O2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;s.uniform2iv(this.addr,t),Nn(i,t)}}function z2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;s.uniform3iv(this.addr,t),Nn(i,t)}}function P2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;s.uniform4iv(this.addr,t),Nn(i,t)}}function I2(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function B2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Un(i,t))return;s.uniform2uiv(this.addr,t),Nn(i,t)}}function F2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Un(i,t))return;s.uniform3uiv(this.addr,t),Nn(i,t)}}function H2(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Un(i,t))return;s.uniform4uiv(this.addr,t),Nn(i,t)}}function V2(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ex.compareFunction=Xx,c=ex):c=hS,i.setTexture2D(t||c,l)}function G2(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||pS,l)}function X2(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||mS,l)}function k2(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||dS,l)}function q2(s){switch(s){case 5126:return A2;case 35664:return R2;case 35665:return C2;case 35666:return w2;case 35674:return D2;case 35675:return U2;case 35676:return N2;case 5124:case 35670:return L2;case 35667:case 35671:return O2;case 35668:case 35672:return z2;case 35669:case 35673:return P2;case 5125:return I2;case 36294:return B2;case 36295:return F2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return X2;case 36289:case 36303:case 36311:case 36292:return k2}}function Y2(s,t){s.uniform1fv(this.addr,t)}function W2(s,t){const i=Vo(t,this.size,2);s.uniform2fv(this.addr,i)}function j2(s,t){const i=Vo(t,this.size,3);s.uniform3fv(this.addr,i)}function Z2(s,t){const i=Vo(t,this.size,4);s.uniform4fv(this.addr,i)}function K2(s,t){const i=Vo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Q2(s,t){const i=Vo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function J2(s,t){const i=Vo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function $2(s,t){s.uniform1iv(this.addr,t)}function tC(s,t){s.uniform2iv(this.addr,t)}function eC(s,t){s.uniform3iv(this.addr,t)}function nC(s,t){s.uniform4iv(this.addr,t)}function iC(s,t){s.uniform1uiv(this.addr,t)}function aC(s,t){s.uniform2uiv(this.addr,t)}function rC(s,t){s.uniform3uiv(this.addr,t)}function sC(s,t){s.uniform4uiv(this.addr,t)}function oC(s,t,i){const r=this.cache,l=t.length,c=Rf(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Nn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||hS,c[h])}function lC(s,t,i){const r=this.cache,l=t.length,c=Rf(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Nn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||pS,c[h])}function cC(s,t,i){const r=this.cache,l=t.length,c=Rf(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Nn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||mS,c[h])}function uC(s,t,i){const r=this.cache,l=t.length,c=Rf(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Nn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||dS,c[h])}function fC(s){switch(s){case 5126:return Y2;case 35664:return W2;case 35665:return j2;case 35666:return Z2;case 35674:return K2;case 35675:return Q2;case 35676:return J2;case 5124:case 35670:return $2;case 35667:case 35671:return tC;case 35668:case 35672:return eC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return aC;case 36295:return rC;case 36296:return sC;case 35678:case 36198:case 36298:case 36306:case 35682:return oC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return cC;case 36289:case 36303:case 36311:case 36292:return uC}}class hC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=q2(i.type)}}class dC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fC(i.type)}}class pC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Pp=/(\w+)(\])?(\[|\.)?/g;function ox(s,t){s.seq.push(t),s.map[t.id]=t}function mC(s,t,i){const r=s.name,l=r.length;for(Pp.lastIndex=0;;){const c=Pp.exec(r),h=Pp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){ox(i,p===void 0?new hC(d,s,t):new dC(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new pC(d),ox(i,g)),i=g}}}class pf{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);mC(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function lx(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const gC=37297;let vC=0;function _C(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const cx=new be;function yC(s){Ge._getMatrix(cx,Ge.workingColorSpace,s);const t=`mat3( ${cx.elements.map(i=>i.toFixed(4))} )`;switch(Ge.getTransfer(s)){case vf:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ux(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+_C(s.getShaderSource(t),d)}else return c}function xC(s,t){const i=yC(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function SC(s,t){let i;switch(t){case NT:i="Linear";break;case LT:i="Reinhard";break;case OT:i="Cineon";break;case zT:i="ACESFilmic";break;case IT:i="AgX";break;case Nx:i="Neutral";break;case PT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const af=new G;function MC(){Ge.getLuminanceCoefficients(af);const s=af.x.toFixed(4),t=af.y.toFixed(4),i=af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function TC(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function bC(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Hl(s){return s!==""}function fx(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hx(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const AC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nm(s){return s.replace(AC,CC)}const RC=new Map;function CC(s,t){let i=Re[t];if(i===void 0){const r=RC.get(t);if(r!==void 0)i=Re[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Nm(i)}const wC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dx(s){return s.replace(wC,DC)}function DC(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function px(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function UC(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dx?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fT?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wa&&(t="SHADOWMAP_TYPE_VSM"),t}function NC(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Lo:case Oo:t="ENVMAP_TYPE_CUBE";break;case Tf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function LC(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Oo&&(t="ENVMAP_MODE_REFRACTION"),t}function OC(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ux:t="ENVMAP_BLENDING_MULTIPLY";break;case DT:t="ENVMAP_BLENDING_MIX";break;case UT:t="ENVMAP_BLENDING_ADD";break}return t}function zC(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function PC(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=UC(i),p=NC(i),v=LC(i),g=OC(i),_=zC(i),S=EC(i),E=TC(c),C=l.createProgram();let M,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Hl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Hl).join(`
`),x.length>0&&(x+=`
`)):(M=[px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),x=[px(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zr?"#define TONE_MAPPING":"",i.toneMapping!==zr?Re.tonemapping_pars_fragment:"",i.toneMapping!==zr?SC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,xC("linearToOutputTexel",i.outputColorSpace),MC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Hl).join(`
`)),h=Nm(h),h=fx(h,i),h=hx(h,i),d=Nm(d),d=fx(d,i),d=hx(d,i),h=dx(h),d=dx(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===gy?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===gy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=N+M+h,T=N+x+d,z=lx(l,l.VERTEX_SHADER,U),P=lx(l,l.FRAGMENT_SHADER,T);l.attachShader(C,z),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(B){if(s.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",ot=l.getShaderInfoLog(z)||"",lt=l.getShaderInfoLog(P)||"",rt=K.trim(),q=ot.trim(),nt=lt.trim();let Y=!0,ht=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,z,P);else{const Rt=ux(l,z,"vertex"),Ht=ux(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+rt+`
`+Rt+`
`+Ht)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(q===""||nt==="")&&(ht=!1);ht&&(B.diagnostics={runnable:Y,programLog:rt,vertexShader:{log:q,prefix:M},fragmentShader:{log:nt,prefix:x}})}l.deleteShader(z),l.deleteShader(P),H=new pf(l,C),w=bC(l,C)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,gC)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vC++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=P,this}let IC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new FC(t),i.set(t,r)),r}}class FC{constructor(t){this.id=IC++,this.code=t,this.usedTimes=0}}function HC(s,t,i,r,l,c,h){const d=new km,m=new BC,p=new Set,v=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,B,K,ot){const lt=K.fog,rt=ot.geometry,q=w.isMeshStandardMaterial?K.environment:null,nt=(w.isMeshStandardMaterial?i:t).get(w.envMap||q),Y=nt&&nt.mapping===Tf?nt.image.height:null,ht=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const Rt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ht=Rt!==void 0?Rt.length:0;let pe=0;rt.morphAttributes.position!==void 0&&(pe=1),rt.morphAttributes.normal!==void 0&&(pe=2),rt.morphAttributes.color!==void 0&&(pe=3);let de,V,mt,tt;if(ht){const Ae=Ea[ht];de=Ae.vertexShader,V=Ae.fragmentShader}else de=w.vertexShader,V=w.fragmentShader,m.update(w),mt=m.getVertexShaderID(w),tt=m.getFragmentShaderID(w);const it=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),zt=ot.isInstancedMesh===!0,Nt=ot.isBatchedMesh===!0,Ut=!!w.map,qt=!!w.matcap,F=!!nt,At=!!w.aoMap,xt=!!w.lightMap,vt=!!w.bumpMap,pt=!!w.normalMap,Et=!!w.displacementMap,Ct=!!w.emissiveMap,Pt=!!w.metalnessMap,le=!!w.roughnessMap,ce=w.anisotropy>0,L=w.clearcoat>0,b=w.dispersion>0,J=w.iridescence>0,ft=w.sheen>0,Tt=w.transmission>0,dt=ce&&!!w.anisotropyMap,Wt=L&&!!w.clearcoatMap,It=L&&!!w.clearcoatNormalMap,Kt=L&&!!w.clearcoatRoughnessMap,ee=J&&!!w.iridescenceMap,Dt=J&&!!w.iridescenceThicknessMap,Vt=ft&&!!w.sheenColorMap,ue=ft&&!!w.sheenRoughnessMap,ie=!!w.specularMap,Mt=!!w.specularColorMap,_e=!!w.specularIntensityMap,k=Tt&&!!w.transmissionMap,Ot=Tt&&!!w.thicknessMap,Ft=!!w.gradientMap,jt=!!w.alphaMap,bt=w.alphaTest>0,St=!!w.alphaHash,Jt=!!w.extensions;let ve=zr;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Be={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:de,fragmentShader:V,defines:w.defines,customVertexShaderID:mt,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Nt,batchingColor:Nt&&ot._colorsTexture!==null,instancing:zt,instancingColor:zt&&ot.instanceColor!==null,instancingMorph:zt&&ot.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:zo,alphaToCoverage:!!w.alphaToCoverage,map:Ut,matcap:qt,envMap:F,envMapMode:F&&nt.mapping,envMapCubeUVHeight:Y,aoMap:At,lightMap:xt,bumpMap:vt,normalMap:pt,displacementMap:_&&Et,emissiveMap:Ct,normalMapObjectSpace:pt&&w.normalMapType===VT,normalMapTangentSpace:pt&&w.normalMapType===Gx,metalnessMap:Pt,roughnessMap:le,anisotropy:ce,anisotropyMap:dt,clearcoat:L,clearcoatMap:Wt,clearcoatNormalMap:It,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:J,iridescenceMap:ee,iridescenceThicknessMap:Dt,sheen:ft,sheenColorMap:Vt,sheenRoughnessMap:ue,specularMap:ie,specularColorMap:Mt,specularIntensityMap:_e,transmission:Tt,transmissionMap:k,thicknessMap:Ot,gradientMap:Ft,opaque:w.transparent===!1&&w.blending===wo&&w.alphaToCoverage===!1,alphaMap:jt,alphaTest:bt,alphaHash:St,combine:w.combine,mapUv:Ut&&C(w.map.channel),aoMapUv:At&&C(w.aoMap.channel),lightMapUv:xt&&C(w.lightMap.channel),bumpMapUv:vt&&C(w.bumpMap.channel),normalMapUv:pt&&C(w.normalMap.channel),displacementMapUv:Et&&C(w.displacementMap.channel),emissiveMapUv:Ct&&C(w.emissiveMap.channel),metalnessMapUv:Pt&&C(w.metalnessMap.channel),roughnessMapUv:le&&C(w.roughnessMap.channel),anisotropyMapUv:dt&&C(w.anisotropyMap.channel),clearcoatMapUv:Wt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:It&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:ue&&C(w.sheenRoughnessMap.channel),specularMapUv:ie&&C(w.specularMap.channel),specularColorMapUv:Mt&&C(w.specularColorMap.channel),specularIntensityMapUv:_e&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Ot&&C(w.thicknessMap.channel),alphaMapUv:jt&&C(w.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(pt||ce),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!rt.attributes.uv&&(Ut||jt),fog:!!lt,useFog:w.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:wt,skinning:ot.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:Ut&&w.map.isVideoTexture===!0&&Ge.getTransfer(w.map.colorSpace)===en,decodeVideoTextureEmissive:Ct&&w.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(w.emissiveMap.colorSpace)===en,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_i,flipSided:w.side===yi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||Nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function x(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)R.push(B),R.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(N(R,w),U(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function T(w){const R=E[w.type];let B;if(R){const K=Ea[R];B=U1.clone(K.uniforms)}else B=w.uniforms;return B}function z(w,R){let B;for(let K=0,ot=v.length;K<ot;K++){const lt=v[K];if(lt.cacheKey===R){B=lt,++B.usedTimes;break}}return B===void 0&&(B=new PC(s,R,w,c),v.push(B)),B}function P(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function O(w){m.remove(w)}function H(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:T,acquireProgram:z,releaseProgram:P,releaseShaderCache:O,programs:v,dispose:H}}function VC(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function GC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function mx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gx(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(g,_,S,E,C,M){let x=s[t];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:C,group:M},s[t]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=C,x.group=M),t++,x}function d(g,_,S,E,C,M){const x=h(g,_,S,E,C,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,_,S,E,C,M){const x=h(g,_,S,E,C,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,_){i.length>1&&i.sort(g||GC),r.length>1&&r.sort(_||mx),l.length>1&&l.sort(_||mx)}function v(){for(let g=t,_=s.length;g<_;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function XC(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new gx,s.set(r,[h])):l>=c.length?(h=new gx,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function kC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new G,color:new De};break;case"SpotLight":i={position:new G,direction:new G,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=i,i}}}function qC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let YC=0;function WC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jC(s){const t=new kC,i=qC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new G);const l=new G,c=new cn,h=new cn;function d(p){let v=0,g=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,E=0,C=0,M=0,x=0,N=0,U=0,T=0,z=0,P=0,O=0;p.sort(WC);for(let w=0,R=p.length;w<R;w++){const B=p[w],K=B.color,ot=B.intensity,lt=B.distance,rt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=K.r*ot,g+=K.g*ot,_+=K.b*ot;else if(B.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(B.sh.coefficients[q],ot);O++}else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const nt=B.shadow,Y=i.get(B);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=rt,r.directionalShadowMatrix[S]=B.shadow.matrix,N++}r.directional[S]=q,S++}else if(B.isSpotLight){const q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(K).multiplyScalar(ot),q.distance=lt,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,r.spot[C]=q;const nt=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,nt.updateMatrices(B),B.castShadow&&P++),r.spotLightMatrix[C]=nt.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=rt,T++}C++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(K).multiplyScalar(ot),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=q,M++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){const nt=B.shadow,Y=i.get(B);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=rt,r.pointShadowMatrix[E]=B.shadow.matrix,U++}r.point[E]=q,E++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(ot),q.groundColor.copy(B.groundColor).multiplyScalar(ot),r.hemi[x]=q,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Zt.LTC_FLOAT_1,r.rectAreaLTC2=Zt.LTC_FLOAT_2):(r.rectAreaLTC1=Zt.LTC_HALF_1,r.rectAreaLTC2=Zt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==C||H.rectAreaLength!==M||H.hemiLength!==x||H.numDirectionalShadows!==N||H.numPointShadows!==U||H.numSpotShadows!==T||H.numSpotMaps!==z||H.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=T+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=O,H.directionalLength=S,H.pointLength=E,H.spotLength=C,H.rectAreaLength=M,H.hemiLength=x,H.numDirectionalShadows=N,H.numPointShadows=U,H.numSpotShadows=T,H.numSpotMaps=z,H.numLightProbes=O,r.version=YC++)}function m(p,v){let g=0,_=0,S=0,E=0,C=0;const M=v.matrixWorldInverse;for(let x=0,N=p.length;x<N;x++){const U=p[x];if(U.isDirectionalLight){const T=r.directional[g];T.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),g++}else if(U.isSpotLight){const T=r.spot[S];T.position.setFromMatrixPosition(U.matrixWorld),T.position.applyMatrix4(M),T.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const T=r.rectArea[E];T.position.setFromMatrixPosition(U.matrixWorld),T.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),T.halfWidth.set(U.width*.5,0,0),T.halfHeight.set(0,U.height*.5,0),T.halfWidth.applyMatrix4(h),T.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const T=r.point[_];T.position.setFromMatrixPosition(U.matrixWorld),T.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const T=r.hemi[C];T.direction.setFromMatrixPosition(U.matrixWorld),T.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function vx(s){const t=new jC(s),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function h(v){r.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function ZC(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new vx(s),t.set(l,[d])):c>=h.length?(d=new vx(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const KC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JC(s,t,i){let r=new qm;const l=new Xt,c=new Xt,h=new _n,d=new Sb({depthPacking:HT}),m=new Mb,p={},v=i.maxTextureSize,g={[Pr]:yi,[yi]:Pr,[_i]:_i},_=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:KC,fragmentShader:QC}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new ti;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Dn(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dx;let x=this.type;this.render=function(P,O,H){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;const w=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Or),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ot=x!==Wa&&this.type===Wa,lt=x===Wa&&this.type!==Wa;for(let rt=0,q=P.length;rt<q;rt++){const nt=P[rt],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const ht=Y.getFrameExtents();if(l.multiply(ht),c.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ht.x),l.x=c.x*ht.x,Y.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ht.y),l.y=c.y*ht.y,Y.mapSize.y=c.y)),Y.map===null||ot===!0||lt===!0){const Ht=this.type!==Wa?{minFilter:Ui,magFilter:Ui}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ys(l.x,l.y,Ht),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const Rt=Y.getViewportCount();for(let Ht=0;Ht<Rt;Ht++){const pe=Y.getViewport(Ht);h.set(c.x*pe.x,c.y*pe.y,c.x*pe.z,c.y*pe.w),K.viewport(h),Y.updateMatrices(nt,Ht),r=Y.getFrustum(),T(O,H,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===Wa&&N(Y,H),Y.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(w,R,B)};function N(P,O){const H=t.update(C);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ys(l.x,l.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(O,null,H,_,C,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(O,null,H,S,C,null)}function U(P,O,H,w){let R=null;const B=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)R=B;else if(R=H.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=R.uuid,ot=O.uuid;let lt=p[K];lt===void 0&&(lt={},p[K]=lt);let rt=lt[ot];rt===void 0&&(rt=R.clone(),lt[ot]=rt,O.addEventListener("dispose",z)),R=rt}if(R.visible=O.visible,R.wireframe=O.wireframe,w===Wa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=s.properties.get(R);K.light=H}return R}function T(P,O,H,w,R){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Wa)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);const ot=t.update(P),lt=P.material;if(Array.isArray(lt)){const rt=ot.groups;for(let q=0,nt=rt.length;q<nt;q++){const Y=rt[q],ht=lt[Y.materialIndex];if(ht&&ht.visible){const Rt=U(P,ht,w,R);P.onBeforeShadow(s,P,O,H,ot,Rt,Y),s.renderBufferDirect(H,null,ot,Rt,P,Y),P.onAfterShadow(s,P,O,H,ot,Rt,Y)}}}else if(lt.visible){const rt=U(P,lt,w,R);P.onBeforeShadow(s,P,O,H,ot,rt,null),s.renderBufferDirect(H,null,ot,rt,P,null),P.onAfterShadow(s,P,O,H,ot,rt,null)}}const K=P.children;for(let ot=0,lt=K.length;ot<lt;ot++)T(K[ot],O,H,w,R)}function z(P){P.target.removeEventListener("dispose",z);for(const H in p){const w=p[H],R=P.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const $C={[Gp]:Xp,[kp]:Wp,[qp]:jp,[No]:Yp,[Xp]:Gp,[Wp]:kp,[jp]:qp,[Yp]:No};function tw(s,t){function i(){let k=!1;const Ot=new _n;let Ft=null;const jt=new _n(0,0,0,0);return{setMask:function(bt){Ft!==bt&&!k&&(s.colorMask(bt,bt,bt,bt),Ft=bt)},setLocked:function(bt){k=bt},setClear:function(bt,St,Jt,ve,Be){Be===!0&&(bt*=ve,St*=ve,Jt*=ve),Ot.set(bt,St,Jt,ve),jt.equals(Ot)===!1&&(s.clearColor(bt,St,Jt,ve),jt.copy(Ot))},reset:function(){k=!1,Ft=null,jt.set(-1,0,0,0)}}}function r(){let k=!1,Ot=!1,Ft=null,jt=null,bt=null;return{setReversed:function(St){if(Ot!==St){const Jt=t.get("EXT_clip_control");St?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ot=St;const ve=bt;bt=null,this.setClear(ve)}},getReversed:function(){return Ot},setTest:function(St){St?it(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(St){Ft!==St&&!k&&(s.depthMask(St),Ft=St)},setFunc:function(St){if(Ot&&(St=$C[St]),jt!==St){switch(St){case Gp:s.depthFunc(s.NEVER);break;case Xp:s.depthFunc(s.ALWAYS);break;case kp:s.depthFunc(s.LESS);break;case No:s.depthFunc(s.LEQUAL);break;case qp:s.depthFunc(s.EQUAL);break;case Yp:s.depthFunc(s.GEQUAL);break;case Wp:s.depthFunc(s.GREATER);break;case jp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}jt=St}},setLocked:function(St){k=St},setClear:function(St){bt!==St&&(Ot&&(St=1-St),s.clearDepth(St),bt=St)},reset:function(){k=!1,Ft=null,jt=null,bt=null,Ot=!1}}}function l(){let k=!1,Ot=null,Ft=null,jt=null,bt=null,St=null,Jt=null,ve=null,Be=null;return{setTest:function(Ae){k||(Ae?it(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ae){Ot!==Ae&&!k&&(s.stencilMask(Ae),Ot=Ae)},setFunc:function(Ae,rn,un){(Ft!==Ae||jt!==rn||bt!==un)&&(s.stencilFunc(Ae,rn,un),Ft=Ae,jt=rn,bt=un)},setOp:function(Ae,rn,un){(St!==Ae||Jt!==rn||ve!==un)&&(s.stencilOp(Ae,rn,un),St=Ae,Jt=rn,ve=un)},setLocked:function(Ae){k=Ae},setClear:function(Ae){Be!==Ae&&(s.clearStencil(Ae),Be=Ae)},reset:function(){k=!1,Ot=null,Ft=null,jt=null,bt=null,St=null,Jt=null,ve=null,Be=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,S=[],E=null,C=!1,M=null,x=null,N=null,U=null,T=null,z=null,P=null,O=new De(0,0,0),H=0,w=!1,R=null,B=null,K=null,ot=null,lt=null;const rt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,nt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=nt>=2);let ht=null,Rt={};const Ht=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),de=new _n().fromArray(Ht),V=new _n().fromArray(pe);function mt(k,Ot,Ft,jt){const bt=new Uint8Array(4),St=s.createTexture();s.bindTexture(k,St),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<Ft;Jt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,jt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(Ot+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return St}const tt={};tt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(s.DEPTH_TEST),h.setFunc(No),vt(!1),pt(uy),it(s.CULL_FACE),At(Or);function it(k){v[k]!==!0&&(s.enable(k),v[k]=!0)}function wt(k){v[k]!==!1&&(s.disable(k),v[k]=!1)}function zt(k,Ot){return g[k]!==Ot?(s.bindFramebuffer(k,Ot),g[k]=Ot,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ot),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Nt(k,Ot){let Ft=S,jt=!1;if(k){Ft=_.get(Ot),Ft===void 0&&(Ft=[],_.set(Ot,Ft));const bt=k.textures;if(Ft.length!==bt.length||Ft[0]!==s.COLOR_ATTACHMENT0){for(let St=0,Jt=bt.length;St<Jt;St++)Ft[St]=s.COLOR_ATTACHMENT0+St;Ft.length=bt.length,jt=!0}}else Ft[0]!==s.BACK&&(Ft[0]=s.BACK,jt=!0);jt&&s.drawBuffers(Ft)}function Ut(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const qt={[gs]:s.FUNC_ADD,[dT]:s.FUNC_SUBTRACT,[pT]:s.FUNC_REVERSE_SUBTRACT};qt[mT]=s.MIN,qt[gT]=s.MAX;const F={[vT]:s.ZERO,[_T]:s.ONE,[yT]:s.SRC_COLOR,[Hp]:s.SRC_ALPHA,[bT]:s.SRC_ALPHA_SATURATE,[ET]:s.DST_COLOR,[ST]:s.DST_ALPHA,[xT]:s.ONE_MINUS_SRC_COLOR,[Vp]:s.ONE_MINUS_SRC_ALPHA,[TT]:s.ONE_MINUS_DST_COLOR,[MT]:s.ONE_MINUS_DST_ALPHA,[AT]:s.CONSTANT_COLOR,[RT]:s.ONE_MINUS_CONSTANT_COLOR,[CT]:s.CONSTANT_ALPHA,[wT]:s.ONE_MINUS_CONSTANT_ALPHA};function At(k,Ot,Ft,jt,bt,St,Jt,ve,Be,Ae){if(k===Or){C===!0&&(wt(s.BLEND),C=!1);return}if(C===!1&&(it(s.BLEND),C=!0),k!==hT){if(k!==M||Ae!==w){if((x!==gs||T!==gs)&&(s.blendEquation(s.FUNC_ADD),x=gs,T=gs),Ae)switch(k){case wo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fy:s.blendFunc(s.ONE,s.ONE);break;case hy:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dy:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case wo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fy:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,U=null,z=null,P=null,O.set(0,0,0),H=0,M=k,w=Ae}return}bt=bt||Ot,St=St||Ft,Jt=Jt||jt,(Ot!==x||bt!==T)&&(s.blendEquationSeparate(qt[Ot],qt[bt]),x=Ot,T=bt),(Ft!==N||jt!==U||St!==z||Jt!==P)&&(s.blendFuncSeparate(F[Ft],F[jt],F[St],F[Jt]),N=Ft,U=jt,z=St,P=Jt),(ve.equals(O)===!1||Be!==H)&&(s.blendColor(ve.r,ve.g,ve.b,Be),O.copy(ve),H=Be),M=k,w=!1}function xt(k,Ot){k.side===_i?wt(s.CULL_FACE):it(s.CULL_FACE);let Ft=k.side===yi;Ot&&(Ft=!Ft),vt(Ft),k.blending===wo&&k.transparent===!1?At(Or):At(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const jt=k.stencilWrite;d.setTest(jt),jt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ct(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function pt(k){k!==cT?(it(s.CULL_FACE),k!==B&&(k===uy?s.cullFace(s.BACK):k===uT?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),B=k}function Et(k){k!==K&&(q&&s.lineWidth(k),K=k)}function Ct(k,Ot,Ft){k?(it(s.POLYGON_OFFSET_FILL),(ot!==Ot||lt!==Ft)&&(s.polygonOffset(Ot,Ft),ot=Ot,lt=Ft)):wt(s.POLYGON_OFFSET_FILL)}function Pt(k){k?it(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function le(k){k===void 0&&(k=s.TEXTURE0+rt-1),ht!==k&&(s.activeTexture(k),ht=k)}function ce(k,Ot,Ft){Ft===void 0&&(ht===null?Ft=s.TEXTURE0+rt-1:Ft=ht);let jt=Rt[Ft];jt===void 0&&(jt={type:void 0,texture:void 0},Rt[Ft]=jt),(jt.type!==k||jt.texture!==Ot)&&(ht!==Ft&&(s.activeTexture(Ft),ht=Ft),s.bindTexture(k,Ot||tt[k]),jt.type=k,jt.texture=Ot)}function L(){const k=Rt[ht];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(k){de.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),de.copy(k))}function ue(k){V.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),V.copy(k))}function ie(k,Ot){let Ft=p.get(Ot);Ft===void 0&&(Ft=new WeakMap,p.set(Ot,Ft));let jt=Ft.get(k);jt===void 0&&(jt=s.getUniformBlockIndex(Ot,k.name),Ft.set(k,jt))}function Mt(k,Ot){const jt=p.get(Ot).get(k);m.get(Ot)!==jt&&(s.uniformBlockBinding(Ot,jt,k.__bindingPointIndex),m.set(Ot,jt))}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ht=null,Rt={},g={},_=new WeakMap,S=[],E=null,C=!1,M=null,x=null,N=null,U=null,T=null,z=null,P=null,O=new De(0,0,0),H=0,w=!1,R=null,B=null,K=null,ot=null,lt=null,de.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:it,disable:wt,bindFramebuffer:zt,drawBuffers:Nt,useProgram:Ut,setBlending:At,setMaterial:xt,setFlipSided:vt,setCullFace:pt,setLineWidth:Et,setPolygonOffset:Ct,setScissorTest:Pt,activeTexture:le,bindTexture:ce,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:ee,texImage3D:Dt,updateUBOMapping:ie,uniformBlockBinding:Mt,texStorage2D:It,texStorage3D:Kt,texSubImage2D:ft,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Wt,scissor:Vt,viewport:ue,reset:_e}}function ew(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return S?new OffscreenCanvas(L,b):yf("canvas")}function C(L,b,J){let ft=1;const Tt=ce(L);if((Tt.width>J||Tt.height>J)&&(ft=J/Math.max(Tt.width,Tt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const dt=Math.floor(ft*Tt.width),Wt=Math.floor(ft*Tt.height);g===void 0&&(g=E(dt,Wt));const It=b?E(dt,Wt):g;return It.width=dt,It.height=Wt,It.getContext("2d").drawImage(L,0,0,dt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+dt+"x"+Wt+")."),It}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,b,J,ft,Tt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=b;if(b===s.RED&&(J===s.FLOAT&&(dt=s.R32F),J===s.HALF_FLOAT&&(dt=s.R16F),J===s.UNSIGNED_BYTE&&(dt=s.R8)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(dt=s.R8UI),J===s.UNSIGNED_SHORT&&(dt=s.R16UI),J===s.UNSIGNED_INT&&(dt=s.R32UI),J===s.BYTE&&(dt=s.R8I),J===s.SHORT&&(dt=s.R16I),J===s.INT&&(dt=s.R32I)),b===s.RG&&(J===s.FLOAT&&(dt=s.RG32F),J===s.HALF_FLOAT&&(dt=s.RG16F),J===s.UNSIGNED_BYTE&&(dt=s.RG8)),b===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(dt=s.RG8UI),J===s.UNSIGNED_SHORT&&(dt=s.RG16UI),J===s.UNSIGNED_INT&&(dt=s.RG32UI),J===s.BYTE&&(dt=s.RG8I),J===s.SHORT&&(dt=s.RG16I),J===s.INT&&(dt=s.RG32I)),b===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),J===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),J===s.UNSIGNED_INT&&(dt=s.RGB32UI),J===s.BYTE&&(dt=s.RGB8I),J===s.SHORT&&(dt=s.RGB16I),J===s.INT&&(dt=s.RGB32I)),b===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),J===s.UNSIGNED_INT&&(dt=s.RGBA32UI),J===s.BYTE&&(dt=s.RGBA8I),J===s.SHORT&&(dt=s.RGBA16I),J===s.INT&&(dt=s.RGBA32I)),b===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(dt=s.R11F_G11F_B10F)),b===s.RGBA){const Wt=Tt?vf:Ge.getTransfer(ft);J===s.FLOAT&&(dt=s.RGBA32F),J===s.HALF_FLOAT&&(dt=s.RGBA16F),J===s.UNSIGNED_BYTE&&(dt=Wt===en?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function T(L,b){let J;return L?b===null||b===_s||b===Zl?J=s.DEPTH24_STENCIL8:b===Za?J=s.DEPTH32F_STENCIL8:b===jl&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_s||b===Zl?J=s.DEPTH_COMPONENT24:b===Za?J=s.DEPTH_COMPONENT32F:b===jl&&(J=s.DEPTH_COMPONENT16),J}function z(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ui&&L.minFilter!==ra?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){const b=L.target;b.removeEventListener("dispose",P),H(b),b.isVideoTexture&&v.delete(b)}function O(L){const b=L.target;b.removeEventListener("dispose",O),R(b)}function H(L){const b=r.get(L);if(b.__webglInit===void 0)return;const J=L.source,ft=_.get(J);if(ft){const Tt=ft[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&w(L),Object.keys(ft).length===0&&_.delete(J)}r.remove(L)}function w(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const J=L.source,ft=_.get(J);delete ft[b.__cacheKey],h.memory.textures--}function R(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(b.__webglFramebuffer[ft]))for(let Tt=0;Tt<b.__webglFramebuffer[ft].length;Tt++)s.deleteFramebuffer(b.__webglFramebuffer[ft][Tt]);else s.deleteFramebuffer(b.__webglFramebuffer[ft]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ft])}else{if(Array.isArray(b.__webglFramebuffer))for(let ft=0;ft<b.__webglFramebuffer.length;ft++)s.deleteFramebuffer(b.__webglFramebuffer[ft]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ft=0;ft<b.__webglColorRenderbuffer.length;ft++)b.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ft]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=L.textures;for(let ft=0,Tt=J.length;ft<Tt;ft++){const dt=r.get(J[ft]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove(J[ft])}r.remove(L)}let B=0;function K(){B=0}function ot(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function lt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function rt(L,b){const J=r.get(L);if(L.isVideoTexture&&Pt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(J,L,b);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function q(L,b){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){tt(J,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function nt(L,b){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){tt(J,L,b);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const J=r.get(L);if(L.version>0&&J.__version!==L.version){it(J,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}const ht={[Ir]:s.REPEAT,[Nr]:s.CLAMP_TO_EDGE,[Qp]:s.MIRRORED_REPEAT},Rt={[Ui]:s.NEAREST,[BT]:s.NEAREST_MIPMAP_NEAREST,[wu]:s.NEAREST_MIPMAP_LINEAR,[ra]:s.LINEAR,[ep]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},Ht={[GT]:s.NEVER,[jT]:s.ALWAYS,[XT]:s.LESS,[Xx]:s.LEQUAL,[kT]:s.EQUAL,[WT]:s.GEQUAL,[qT]:s.GREATER,[YT]:s.NOTEQUAL};function pe(L,b){if(b.type===Za&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ra||b.magFilter===ep||b.magFilter===wu||b.magFilter===Lr||b.minFilter===ra||b.minFilter===ep||b.minFilter===wu||b.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ht[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ht[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ht[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Rt[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Rt[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ui||b.minFilter!==wu&&b.minFilter!==Lr||b.type===Za&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function de(L,b){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",P));const ft=b.source;let Tt=_.get(ft);Tt===void 0&&(Tt={},_.set(ft,Tt));const dt=lt(b);if(dt!==L.__cacheKey){Tt[dt]===void 0&&(Tt[dt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,J=!0),Tt[dt].usedTimes++;const Wt=Tt[L.__cacheKey];Wt!==void 0&&(Tt[L.__cacheKey].usedTimes--,Wt.usedTimes===0&&w(b)),L.__cacheKey=dt,L.__webglTexture=Tt[dt].texture}return J}function V(L,b,J){return Math.floor(Math.floor(L/J)/b)}function mt(L,b,J,ft){const dt=L.updateRanges;if(dt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,J,ft,b.data);else{dt.sort((Dt,Vt)=>Dt.start-Vt.start);let Wt=0;for(let Dt=1;Dt<dt.length;Dt++){const Vt=dt[Wt],ue=dt[Dt],ie=Vt.start+Vt.count,Mt=V(ue.start,b.width,4),_e=V(Vt.start,b.width,4);ue.start<=ie+1&&Mt===_e&&V(ue.start+ue.count-1,b.width,4)===Mt?Vt.count=Math.max(Vt.count,ue.start+ue.count-Vt.start):(++Wt,dt[Wt]=ue)}dt.length=Wt+1;const It=s.getParameter(s.UNPACK_ROW_LENGTH),Kt=s.getParameter(s.UNPACK_SKIP_PIXELS),ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Dt=0,Vt=dt.length;Dt<Vt;Dt++){const ue=dt[Dt],ie=Math.floor(ue.start/4),Mt=Math.ceil(ue.count/4),_e=ie%b.width,k=Math.floor(ie/b.width),Ot=Mt,Ft=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,_e,k,Ot,Ft,J,ft,b.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,It),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ee)}}function tt(L,b,J){let ft=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ft=s.TEXTURE_3D);const Tt=de(L,b),dt=b.source;i.bindTexture(ft,L.__webglTexture,s.TEXTURE0+J);const Wt=r.get(dt);if(dt.version!==Wt.__version||Tt===!0){i.activeTexture(s.TEXTURE0+J);const It=Ge.getPrimaries(Ge.workingColorSpace),Kt=b.colorSpace===Ur?null:Ge.getPrimaries(b.colorSpace),ee=b.colorSpace===Ur||It===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Dt=C(b.image,!1,l.maxTextureSize);Dt=le(b,Dt);const Vt=c.convert(b.format,b.colorSpace),ue=c.convert(b.type);let ie=U(b.internalFormat,Vt,ue,b.colorSpace,b.isVideoTexture);pe(ft,b);let Mt;const _e=b.mipmaps,k=b.isVideoTexture!==!0,Ot=Wt.__version===void 0||Tt===!0,Ft=dt.dataReady,jt=z(b,Dt);if(b.isDepthTexture)ie=T(b.format===Ql,b.type),Ot&&(k?i.texStorage2D(s.TEXTURE_2D,1,ie,Dt.width,Dt.height):i.texImage2D(s.TEXTURE_2D,0,ie,Dt.width,Dt.height,0,Vt,ue,null));else if(b.isDataTexture)if(_e.length>0){k&&Ot&&i.texStorage2D(s.TEXTURE_2D,jt,ie,_e[0].width,_e[0].height);for(let bt=0,St=_e.length;bt<St;bt++)Mt=_e[bt],k?Ft&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Mt.width,Mt.height,Vt,ue,Mt.data):i.texImage2D(s.TEXTURE_2D,bt,ie,Mt.width,Mt.height,0,Vt,ue,Mt.data);b.generateMipmaps=!1}else k?(Ot&&i.texStorage2D(s.TEXTURE_2D,jt,ie,Dt.width,Dt.height),Ft&&mt(b,Dt,Vt,ue)):i.texImage2D(s.TEXTURE_2D,0,ie,Dt.width,Dt.height,0,Vt,ue,Dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,jt,ie,_e[0].width,_e[0].height,Dt.depth);for(let bt=0,St=_e.length;bt<St;bt++)if(Mt=_e[bt],b.format!==sa)if(Vt!==null)if(k){if(Ft)if(b.layerUpdates.size>0){const Jt=jy(Mt.width,Mt.height,b.format,b.type);for(const ve of b.layerUpdates){const Be=Mt.data.subarray(ve*Jt/Mt.data.BYTES_PER_ELEMENT,(ve+1)*Jt/Mt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,ve,Mt.width,Mt.height,1,Vt,Be)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Mt.width,Mt.height,Dt.depth,Vt,Mt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,ie,Mt.width,Mt.height,Dt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ft&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Mt.width,Mt.height,Dt.depth,Vt,ue,Mt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,ie,Mt.width,Mt.height,Dt.depth,0,Vt,ue,Mt.data)}else{k&&Ot&&i.texStorage2D(s.TEXTURE_2D,jt,ie,_e[0].width,_e[0].height);for(let bt=0,St=_e.length;bt<St;bt++)Mt=_e[bt],b.format!==sa?Vt!==null?k?Ft&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Mt.width,Mt.height,Vt,Mt.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,ie,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ft&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Mt.width,Mt.height,Vt,ue,Mt.data):i.texImage2D(s.TEXTURE_2D,bt,ie,Mt.width,Mt.height,0,Vt,ue,Mt.data)}else if(b.isDataArrayTexture)if(k){if(Ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,jt,ie,Dt.width,Dt.height,Dt.depth),Ft)if(b.layerUpdates.size>0){const bt=jy(Dt.width,Dt.height,b.format,b.type);for(const St of b.layerUpdates){const Jt=Dt.data.subarray(St*bt/Dt.data.BYTES_PER_ELEMENT,(St+1)*bt/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,Dt.width,Dt.height,1,Vt,ue,Jt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Vt,ue,Dt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ie,Dt.width,Dt.height,Dt.depth,0,Vt,ue,Dt.data);else if(b.isData3DTexture)k?(Ot&&i.texStorage3D(s.TEXTURE_3D,jt,ie,Dt.width,Dt.height,Dt.depth),Ft&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Vt,ue,Dt.data)):i.texImage3D(s.TEXTURE_3D,0,ie,Dt.width,Dt.height,Dt.depth,0,Vt,ue,Dt.data);else if(b.isFramebufferTexture){if(Ot)if(k)i.texStorage2D(s.TEXTURE_2D,jt,ie,Dt.width,Dt.height);else{let bt=Dt.width,St=Dt.height;for(let Jt=0;Jt<jt;Jt++)i.texImage2D(s.TEXTURE_2D,Jt,ie,bt,St,0,Vt,ue,null),bt>>=1,St>>=1}}else if(_e.length>0){if(k&&Ot){const bt=ce(_e[0]);i.texStorage2D(s.TEXTURE_2D,jt,ie,bt.width,bt.height)}for(let bt=0,St=_e.length;bt<St;bt++)Mt=_e[bt],k?Ft&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Vt,ue,Mt):i.texImage2D(s.TEXTURE_2D,bt,ie,Vt,ue,Mt);b.generateMipmaps=!1}else if(k){if(Ot){const bt=ce(Dt);i.texStorage2D(s.TEXTURE_2D,jt,ie,bt.width,bt.height)}Ft&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,ue,Dt)}else i.texImage2D(s.TEXTURE_2D,0,ie,Vt,ue,Dt);M(b)&&x(ft),Wt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function it(L,b,J){if(b.image.length!==6)return;const ft=de(L,b),Tt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const dt=r.get(Tt);if(Tt.version!==dt.__version||ft===!0){i.activeTexture(s.TEXTURE0+J);const Wt=Ge.getPrimaries(Ge.workingColorSpace),It=b.colorSpace===Ur?null:Ge.getPrimaries(b.colorSpace),Kt=b.colorSpace===Ur||Wt===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Dt=b.image[0]&&b.image[0].isDataTexture,Vt=[];for(let St=0;St<6;St++)!ee&&!Dt?Vt[St]=C(b.image[St],!0,l.maxCubemapSize):Vt[St]=Dt?b.image[St].image:b.image[St],Vt[St]=le(b,Vt[St]);const ue=Vt[0],ie=c.convert(b.format,b.colorSpace),Mt=c.convert(b.type),_e=U(b.internalFormat,ie,Mt,b.colorSpace),k=b.isVideoTexture!==!0,Ot=dt.__version===void 0||ft===!0,Ft=Tt.dataReady;let jt=z(b,ue);pe(s.TEXTURE_CUBE_MAP,b);let bt;if(ee){k&&Ot&&i.texStorage2D(s.TEXTURE_CUBE_MAP,jt,_e,ue.width,ue.height);for(let St=0;St<6;St++){bt=Vt[St].mipmaps;for(let Jt=0;Jt<bt.length;Jt++){const ve=bt[Jt];b.format!==sa?ie!==null?k?Ft&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,0,0,ve.width,ve.height,ie,ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,_e,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,0,0,ve.width,ve.height,ie,Mt,ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt,_e,ve.width,ve.height,0,ie,Mt,ve.data)}}}else{if(bt=b.mipmaps,k&&Ot){bt.length>0&&jt++;const St=ce(Vt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,jt,_e,St.width,St.height)}for(let St=0;St<6;St++)if(Dt){k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Vt[St].width,Vt[St].height,ie,Mt,Vt[St].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,Vt[St].width,Vt[St].height,0,ie,Mt,Vt[St].data);for(let Jt=0;Jt<bt.length;Jt++){const Be=bt[Jt].image[St].image;k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,0,0,Be.width,Be.height,ie,Mt,Be.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,_e,Be.width,Be.height,0,ie,Mt,Be.data)}}else{k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ie,Mt,Vt[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,ie,Mt,Vt[St]);for(let Jt=0;Jt<bt.length;Jt++){const ve=bt[Jt];k?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,0,0,ie,Mt,ve.image[St]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Jt+1,_e,ie,Mt,ve.image[St])}}}M(b)&&x(s.TEXTURE_CUBE_MAP),dt.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function wt(L,b,J,ft,Tt,dt){const Wt=c.convert(J.format,J.colorSpace),It=c.convert(J.type),Kt=U(J.internalFormat,Wt,It,J.colorSpace),ee=r.get(b),Dt=r.get(J);if(Dt.__renderTarget=b,!ee.__hasExternalTextures){const Vt=Math.max(1,b.width>>dt),ue=Math.max(1,b.height>>dt);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?i.texImage3D(Tt,dt,Kt,Vt,ue,b.depth,0,Wt,It,null):i.texImage2D(Tt,dt,Kt,Vt,ue,0,Wt,It,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ct(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,Tt,Dt.__webglTexture,0,Et(b)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,Tt,Dt.__webglTexture,dt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(L,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const ft=b.depthTexture,Tt=ft&&ft.isDepthTexture?ft.type:null,dt=T(b.stencilBuffer,Tt),Wt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=Et(b);Ct(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,dt,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,dt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,dt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Wt,s.RENDERBUFFER,L)}else{const ft=b.textures;for(let Tt=0;Tt<ft.length;Tt++){const dt=ft[Tt],Wt=c.convert(dt.format,dt.colorSpace),It=c.convert(dt.type),Kt=U(dt.internalFormat,Wt,It,dt.colorSpace),ee=Et(b);J&&Ct(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Kt,b.width,b.height):Ct(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Kt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Kt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(b.depthTexture);ft.__renderTarget=b,(!ft.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),rt(b.depthTexture,0);const Tt=ft.__webglTexture,dt=Et(b);if(b.depthTexture.format===Kl)Ct(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0);else if(b.depthTexture.format===Ql)Ct(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function Ut(L){const b=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ft){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ft.removeEventListener("dispose",Tt)};ft.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=ft}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?Nt(b.__webglFramebuffer[0],L):Nt(b.__webglFramebuffer,L)}else if(J){b.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ft]),b.__webglDepthbuffer[ft]===void 0)b.__webglDepthbuffer[ft]=s.createRenderbuffer(),zt(b.__webglDepthbuffer[ft],L,!1);else{const Tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,dt)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),zt(b.__webglDepthbuffer,L,!1);else{const Tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,dt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(L,b,J){const ft=r.get(L);b!==void 0&&wt(ft.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ut(L)}function F(L){const b=L.texture,J=r.get(L),ft=r.get(b);L.addEventListener("dispose",O);const Tt=L.textures,dt=L.isWebGLCubeRenderTarget===!0,Wt=Tt.length>1;if(Wt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=b.version,h.memory.textures++),dt){J.__webglFramebuffer=[];for(let It=0;It<6;It++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[It]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)J.__webglFramebuffer[It][Kt]=s.createFramebuffer()}else J.__webglFramebuffer[It]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let It=0;It<b.mipmaps.length;It++)J.__webglFramebuffer[It]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Wt)for(let It=0,Kt=Tt.length;It<Kt;It++){const ee=r.get(Tt[It]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&Ct(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let It=0;It<Tt.length;It++){const Kt=Tt[It];J.__webglColorRenderbuffer[It]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[It]);const ee=c.convert(Kt.format,Kt.colorSpace),Dt=c.convert(Kt.type),Vt=U(Kt.internalFormat,ee,Dt,Kt.colorSpace,L.isXRRenderTarget===!0),ue=Et(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,Vt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,J.__webglColorRenderbuffer[It])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),pe(s.TEXTURE_CUBE_MAP,b);for(let It=0;It<6;It++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)wt(J.__webglFramebuffer[It][Kt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Kt);else wt(J.__webglFramebuffer[It],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);M(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let It=0,Kt=Tt.length;It<Kt;It++){const ee=Tt[It],Dt=r.get(ee);let Vt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Vt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Vt,Dt.__webglTexture),pe(Vt,ee),wt(J.__webglFramebuffer,L,ee,s.COLOR_ATTACHMENT0+It,Vt,0),M(ee)&&x(Vt)}i.unbindTexture()}else{let It=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(It,ft.__webglTexture),pe(It,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)wt(J.__webglFramebuffer[Kt],L,b,s.COLOR_ATTACHMENT0,It,Kt);else wt(J.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,It,0);M(b)&&x(It),i.unbindTexture()}L.depthBuffer&&Ut(L)}function At(L){const b=L.textures;for(let J=0,ft=b.length;J<ft;J++){const Tt=b[J];if(M(Tt)){const dt=N(L),Wt=r.get(Tt).__webglTexture;i.bindTexture(dt,Wt),x(dt),i.unbindTexture()}}}const xt=[],vt=[];function pt(L){if(L.samples>0){if(Ct(L)===!1){const b=L.textures,J=L.width,ft=L.height;let Tt=s.COLOR_BUFFER_BIT;const dt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Wt=r.get(L),It=b.length>1;if(It)for(let ee=0;ee<b.length;ee++)i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Kt=L.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ee=0;ee<b.length;ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),It){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ee]);const Dt=r.get(b[ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,J,ft,0,0,J,ft,Tt,s.NEAREST),m===!0&&(xt.length=0,vt.length=0,xt.push(s.COLOR_ATTACHMENT0+ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(xt.push(dt),vt.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),It)for(let ee=0;ee<b.length;ee++){i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,Wt.__webglColorRenderbuffer[ee]);const Dt=r.get(b[ee]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,Dt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Et(L){return Math.min(l.maxSamples,L.samples)}function Ct(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(L){const b=h.render.frame;v.get(L)!==b&&(v.set(L,b),L.update())}function le(L,b){const J=L.colorSpace,ft=L.format,Tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==zo&&J!==Ur&&(Ge.getTransfer(J)===en?(ft!==sa||Tt!==ba)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function ce(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=K,this.setTexture2D=rt,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=qt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ct}function nw(s,t){function i(r,l=Ur){let c;const h=Ge.getTransfer(l);if(r===ba)return s.UNSIGNED_BYTE;if(r===Pm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Im)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Px)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ox)return s.BYTE;if(r===zx)return s.SHORT;if(r===jl)return s.UNSIGNED_SHORT;if(r===zm)return s.INT;if(r===_s)return s.UNSIGNED_INT;if(r===Za)return s.FLOAT;if(r===oc)return s.HALF_FLOAT;if(r===Bx)return s.ALPHA;if(r===Fx)return s.RGB;if(r===sa)return s.RGBA;if(r===Kl)return s.DEPTH_COMPONENT;if(r===Ql)return s.DEPTH_STENCIL;if(r===Hx)return s.RED;if(r===Bm)return s.RED_INTEGER;if(r===Vx)return s.RG;if(r===Fm)return s.RG_INTEGER;if(r===Hm)return s.RGBA_INTEGER;if(r===cf||r===uf||r===ff||r===hf)if(h===en)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===cf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ff)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===cf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ff)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jp||r===$p||r===tm||r===em)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Jp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$p)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tm)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===em)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nm||r===im||r===am)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===nm||r===im)return h===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===am)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rm||r===sm||r===om||r===lm||r===cm||r===um||r===fm||r===hm||r===dm||r===pm||r===mm||r===gm||r===vm||r===_m)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===om)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===um)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vm)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_m)return h===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ym||r===xm||r===Sm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===ym)return h===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mm||r===Em||r===Tm||r===bm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Mm)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Em)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new tS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Br({vertexShader:iw,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Dn(new cc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends Bo{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,_=null,S=null,E=null;const C=typeof XRWebGLBinding<"u",M=new rw,x={},N=i.getContextAttributes();let U=null,T=null;const z=[],P=[],O=new Xt;let H=null;const w=new ki;w.viewport=new _n;const R=new ki;R.viewport=new _n;const B=[w,R],K=new Ab;let ot=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let it=z[tt];return it===void 0&&(it=new Mp,z[tt]=it),it.getTargetRaySpace()},this.getControllerGrip=function(tt){let it=z[tt];return it===void 0&&(it=new Mp,z[tt]=it),it.getGripSpace()},this.getHand=function(tt){let it=z[tt];return it===void 0&&(it=new Mp,z[tt]=it),it.getHandSpace()};function rt(tt){const it=P.indexOf(tt.inputSource);if(it===-1)return;const wt=z[it];wt!==void 0&&(wt.update(tt.inputSource,tt.frame,p||h),wt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function q(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",nt);for(let tt=0;tt<z.length;tt++){const it=P[tt];it!==null&&(P[tt]=null,z[tt].disconnect(it))}ot=null,lt=null,M.reset();for(const tt in x)delete x[tt];t.setRenderTarget(U),S=null,_=null,g=null,l=null,T=null,mt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",q),l.addEventListener("inputsourceschange",nt),N.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,zt=null,Nt=null;N.depth&&(Nt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=N.stencil?Ql:Kl,zt=N.stencil?Zl:_s);const Ut={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(Ut),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),T=new ys(_.textureWidth,_.textureHeight,{format:sa,type:ba,depthTexture:new $x(_.textureWidth,_.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const wt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new ys(S.framebufferWidth,S.framebufferHeight,{format:sa,type:ba,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),mt.setContext(l),mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(tt){for(let it=0;it<tt.removed.length;it++){const wt=tt.removed[it],zt=P.indexOf(wt);zt>=0&&(P[zt]=null,z[zt].disconnect(wt))}for(let it=0;it<tt.added.length;it++){const wt=tt.added[it];let zt=P.indexOf(wt);if(zt===-1){for(let Ut=0;Ut<z.length;Ut++)if(Ut>=P.length){P.push(wt),zt=Ut;break}else if(P[Ut]===null){P[Ut]=wt,zt=Ut;break}if(zt===-1)break}const Nt=z[zt];Nt&&Nt.connect(wt)}}const Y=new G,ht=new G;function Rt(tt,it,wt){Y.setFromMatrixPosition(it.matrixWorld),ht.setFromMatrixPosition(wt.matrixWorld);const zt=Y.distanceTo(ht),Nt=it.projectionMatrix.elements,Ut=wt.projectionMatrix.elements,qt=Nt[14]/(Nt[10]-1),F=Nt[14]/(Nt[10]+1),At=(Nt[9]+1)/Nt[5],xt=(Nt[9]-1)/Nt[5],vt=(Nt[8]-1)/Nt[0],pt=(Ut[8]+1)/Ut[0],Et=qt*vt,Ct=qt*pt,Pt=zt/(-vt+pt),le=Pt*-vt;if(it.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(le),tt.translateZ(Pt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Nt[10]===-1)tt.projectionMatrix.copy(it.projectionMatrix),tt.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const ce=qt+Pt,L=F+Pt,b=Et-le,J=Ct+(zt-le),ft=At*F/L*ce,Tt=xt*F/L*ce;tt.projectionMatrix.makePerspective(b,J,ft,Tt,ce,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Ht(tt,it){it===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(it.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let it=tt.near,wt=tt.far;M.texture!==null&&(M.depthNear>0&&(it=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),K.near=R.near=w.near=it,K.far=R.far=w.far=wt,(ot!==K.near||lt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ot=K.near,lt=K.far),K.layers.mask=tt.layers.mask|6,w.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const zt=tt.parent,Nt=K.cameras;Ht(K,zt);for(let Ut=0;Ut<Nt.length;Ut++)Ht(Nt[Ut],zt);Nt.length===2?Rt(K,w,R):K.projectionMatrix.copy(w.projectionMatrix),pe(tt,K,zt)};function pe(tt,it,wt){wt===null?tt.matrix.copy(it.matrixWorld):(tt.matrix.copy(wt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(it.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(it.projectionMatrix),tt.projectionMatrixInverse.copy(it.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Jl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(tt){m=tt,_!==null&&(_.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(tt){return x[tt]};let de=null;function V(tt,it){if(v=it.getViewerPose(p||h),E=it,v!==null){const wt=v.views;S!==null&&(t.setRenderTargetFramebuffer(T,S.framebuffer),t.setRenderTarget(T));let zt=!1;wt.length!==K.cameras.length&&(K.cameras.length=0,zt=!0);for(let F=0;F<wt.length;F++){const At=wt[F];let xt=null;if(S!==null)xt=S.getViewport(At);else{const pt=g.getViewSubImage(_,At);xt=pt.viewport,F===0&&(t.setRenderTargetTextures(T,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(T))}let vt=B[F];vt===void 0&&(vt=new ki,vt.layers.enable(F),vt.viewport=new _n,B[F]=vt),vt.matrix.fromArray(At.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(At.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(xt.x,xt.y,xt.width,xt.height),F===0&&(K.matrix.copy(vt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),zt===!0&&K.cameras.push(vt)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const F=g.getDepthInformation(wt[0]);F&&F.isValid&&F.texture&&M.init(F,l.renderState)}if(Nt&&Nt.includes("camera-access")&&C){t.state.unbindTexture(),g=r.getBinding();for(let F=0;F<wt.length;F++){const At=wt[F].camera;if(At){let xt=x[At];xt||(xt=new tS,x[At]=xt);const vt=g.getCameraImage(At);xt.sourceTexture=vt}}}}for(let wt=0;wt<z.length;wt++){const zt=P[wt],Nt=z[wt];zt!==null&&Nt!==void 0&&Nt.update(zt,it,p||h)}de&&de(tt,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),E=null}const mt=new fS;mt.setAnimationLoop(V),this.setAnimationLoop=function(tt){de=tt},this.dispose=function(){}}}const ds=new la,ow=new cn;function lw(s,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Zx(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,N,U,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&S(M,x,T)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,N,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===yi&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===yi&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const N=t.get(x),U=N.envMap,T=N.envMapRotation;U&&(M.envMap.value=U,ds.copy(T),ds.x*=-1,ds.y*=-1,ds.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),M.envMapRotation.value.setFromMatrix4(ow.makeRotationFromEuler(ds)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,N,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*N,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,N){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===yi&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const N=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function cw(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const T=U.program;r.uniformBlockBinding(N,T)}function p(N,U){let T=l[N.id];T===void 0&&(E(N),T=v(N),l[N.id]=T,N.addEventListener("dispose",M));const z=U.program;r.updateUBOMapping(N,z);const P=t.render.frame;c[N.id]!==P&&(_(N),c[N.id]=P)}function v(N){const U=g();N.__bindingPointIndex=U;const T=s.createBuffer(),z=N.__size,P=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,z,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,T),T}function g(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const U=l[N.id],T=N.uniforms,z=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let P=0,O=T.length;P<O;P++){const H=Array.isArray(T[P])?T[P]:[T[P]];for(let w=0,R=H.length;w<R;w++){const B=H[w];if(S(B,P,w,z)===!0){const K=B.__offset,ot=Array.isArray(B.value)?B.value:[B.value];let lt=0;for(let rt=0;rt<ot.length;rt++){const q=ot[rt],nt=C(q);typeof q=="number"||typeof q=="boolean"?(B.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,K+lt,B.__data)):q.isMatrix3?(B.__data[0]=q.elements[0],B.__data[1]=q.elements[1],B.__data[2]=q.elements[2],B.__data[3]=0,B.__data[4]=q.elements[3],B.__data[5]=q.elements[4],B.__data[6]=q.elements[5],B.__data[7]=0,B.__data[8]=q.elements[6],B.__data[9]=q.elements[7],B.__data[10]=q.elements[8],B.__data[11]=0):(q.toArray(B.__data,lt),lt+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,U,T,z){const P=N.value,O=U+"_"+T;if(z[O]===void 0)return typeof P=="number"||typeof P=="boolean"?z[O]=P:z[O]=P.clone(),!0;{const H=z[O];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return z[O]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function E(N){const U=N.uniforms;let T=0;const z=16;for(let O=0,H=U.length;O<H;O++){const w=Array.isArray(U[O])?U[O]:[U[O]];for(let R=0,B=w.length;R<B;R++){const K=w[R],ot=Array.isArray(K.value)?K.value:[K.value];for(let lt=0,rt=ot.length;lt<rt;lt++){const q=ot[lt],nt=C(q),Y=T%z,ht=Y%nt.boundary,Rt=Y+ht;T+=ht,Rt!==0&&z-Rt<nt.storage&&(T+=z-Rt),K.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=nt.storage}}}const P=T%z;return P>0&&(T+=z-P),N.__size=T,N.__cache={},this}function C(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function M(N){const U=N.target;U.removeEventListener("dispose",M);const T=h.indexOf(U.__bindingPointIndex);h.splice(T,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const N in l)s.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}class uw{constructor(t={}){const{canvas:i=f1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),C=new Int32Array(4);let M=null,x=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let z=!1;this._outputColorSpace=li;let P=0,O=0,H=null,w=-1,R=null;const B=new _n,K=new _n;let ot=null;const lt=new De(0);let rt=0,q=i.width,nt=i.height,Y=1,ht=null,Rt=null;const Ht=new _n(0,0,q,nt),pe=new _n(0,0,q,nt);let de=!1;const V=new qm;let mt=!1,tt=!1;const it=new cn,wt=new G,zt=new _n,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function qt(){return H===null?Y:1}let F=r;function At(D,j){return i.getContext(D,j)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Om}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),F===null){const j="webgl2";if(F=At(j,D),F===null)throw At(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let xt,vt,pt,Et,Ct,Pt,le,ce,L,b,J,ft,Tt,dt,Wt,It,Kt,ee,Dt,Vt,ue,ie,Mt,_e;function k(){xt=new x2(F),xt.init(),ie=new nw(F,xt),vt=new d2(F,xt,t,ie),pt=new tw(F,xt),vt.reversedDepthBuffer&&_&&pt.buffers.depth.setReversed(!0),Et=new E2(F),Ct=new VC,Pt=new ew(F,xt,pt,Ct,vt,ie,Et),le=new m2(T),ce=new y2(T),L=new wb(F),Mt=new f2(F,L),b=new S2(F,L,Et,Mt),J=new b2(F,b,L,Et),Dt=new T2(F,vt,Pt),It=new p2(Ct),ft=new HC(T,le,ce,xt,vt,Mt,It),Tt=new lw(T,Ct),dt=new XC,Wt=new ZC(xt),ee=new u2(T,le,ce,pt,J,S,m),Kt=new JC(T,J,vt),_e=new cw(F,Et,vt,pt),Vt=new h2(F,xt,Et),ue=new M2(F,xt,Et),Et.programs=ft.programs,T.capabilities=vt,T.extensions=xt,T.properties=Ct,T.renderLists=dt,T.shadowMap=Kt,T.state=pt,T.info=Et}k();const Ot=new sw(T,F);this.xr=Ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=xt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=xt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(q,nt,!1))},this.getSize=function(D){return D.set(q,nt)},this.setSize=function(D,j,ut=!0){if(Ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=D,nt=j,i.width=Math.floor(D*Y),i.height=Math.floor(j*Y),ut===!0&&(i.style.width=D+"px",i.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(q*Y,nt*Y).floor()},this.setDrawingBufferSize=function(D,j,ut){q=D,nt=j,Y=ut,i.width=Math.floor(D*ut),i.height=Math.floor(j*ut),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy(Ht)},this.setViewport=function(D,j,ut,ct){D.isVector4?Ht.set(D.x,D.y,D.z,D.w):Ht.set(D,j,ut,ct),pt.viewport(B.copy(Ht).multiplyScalar(Y).round())},this.getScissor=function(D){return D.copy(pe)},this.setScissor=function(D,j,ut,ct){D.isVector4?pe.set(D.x,D.y,D.z,D.w):pe.set(D,j,ut,ct),pt.scissor(K.copy(pe).multiplyScalar(Y).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(D){pt.setScissorTest(de=D)},this.setOpaqueSort=function(D){ht=D},this.setTransparentSort=function(D){Rt=D},this.getClearColor=function(D){return D.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,ut=!0){let ct=0;if(D){let $=!1;if(H!==null){const Lt=H.texture.format;$=Lt===Hm||Lt===Fm||Lt===Bm}if($){const Lt=H.texture.type,Yt=Lt===ba||Lt===_s||Lt===jl||Lt===Zl||Lt===Pm||Lt===Im,Gt=ee.getClearColor(),Bt=ee.getClearAlpha(),ne=Gt.r,se=Gt.g,re=Gt.b;Yt?(E[0]=ne,E[1]=se,E[2]=re,E[3]=Bt,F.clearBufferuiv(F.COLOR,0,E)):(C[0]=ne,C[1]=se,C[2]=re,C[3]=Bt,F.clearBufferiv(F.COLOR,0,C))}else ct|=F.COLOR_BUFFER_BIT}j&&(ct|=F.DEPTH_BUFFER_BIT),ut&&(ct|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),ee.dispose(),dt.dispose(),Wt.dispose(),Ct.dispose(),le.dispose(),ce.dispose(),J.dispose(),Mt.dispose(),_e.dispose(),ft.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",un),Ot.removeEventListener("sessionend",yn),Li.stop()};function Ft(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const D=Et.autoReset,j=Kt.enabled,ut=Kt.autoUpdate,ct=Kt.needsUpdate,$=Kt.type;k(),Et.autoReset=D,Kt.enabled=j,Kt.autoUpdate=ut,Kt.needsUpdate=ct,Kt.type=$}function bt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function St(D){const j=D.target;j.removeEventListener("dispose",St),Jt(j)}function Jt(D){ve(D),Ct.remove(D)}function ve(D){const j=Ct.get(D).programs;j!==void 0&&(j.forEach(function(ut){ft.releaseProgram(ut)}),D.isShaderMaterial&&ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,ut,ct,$,Lt){j===null&&(j=Nt);const Yt=$.isMesh&&$.matrixWorld.determinant()<0,Gt=Hr(D,j,ut,ct,$);pt.setMaterial(ct,Yt);let Bt=ut.index,ne=1;if(ct.wireframe===!0){if(Bt=b.getWireframeAttribute(ut),Bt===void 0)return;ne=2}const se=ut.drawRange,re=ut.attributes.position;let ye=se.start*ne,Fe=(se.start+se.count)*ne;Lt!==null&&(ye=Math.max(ye,Lt.start*ne),Fe=Math.min(Fe,(Lt.start+Lt.count)*ne)),Bt!==null?(ye=Math.max(ye,0),Fe=Math.min(Fe,Bt.count)):re!=null&&(ye=Math.max(ye,0),Fe=Math.min(Fe,re.count));const $e=Fe-ye;if($e<0||$e===1/0)return;Mt.setup($,ct,Gt,ut,Bt);let ze,Pe=Vt;if(Bt!==null&&(ze=L.get(Bt),Pe=ue,Pe.setIndex(ze)),$.isMesh)ct.wireframe===!0?(pt.setLineWidth(ct.wireframeLinewidth*qt()),Pe.setMode(F.LINES)):Pe.setMode(F.TRIANGLES);else if($.isLine){let oe=ct.linewidth;oe===void 0&&(oe=1),pt.setLineWidth(oe*qt()),$.isLineSegments?Pe.setMode(F.LINES):$.isLineLoop?Pe.setMode(F.LINE_LOOP):Pe.setMode(F.LINE_STRIP)}else $.isPoints?Pe.setMode(F.POINTS):$.isSprite&&Pe.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)$l("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const oe=$._multiDrawStarts,He=$._multiDrawCounts,xe=$._multiDrawCount,mn=Bt?L.get(Bt).bytesPerElement:1,jn=Ct.get(ct).currentProgram.getUniforms();for(let Ie=0;Ie<xe;Ie++)jn.setValue(F,"_gl_DrawID",Ie),Pe.render(oe[Ie]/mn,He[Ie])}else if($.isInstancedMesh)Pe.renderInstances(ye,$e,$.count);else if(ut.isInstancedBufferGeometry){const oe=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,He=Math.min(ut.instanceCount,oe);Pe.renderInstances(ye,$e,He)}else Pe.render(ye,$e)};function Be(D,j,ut){D.transparent===!0&&D.side===_i&&D.forceSinglePass===!1?(D.side=yi,D.needsUpdate=!0,Hn(D,j,ut),D.side=Pr,D.needsUpdate=!0,Hn(D,j,ut),D.side=_i):Hn(D,j,ut)}this.compile=function(D,j,ut=null){ut===null&&(ut=D),x=Wt.get(ut),x.init(j),U.push(x),ut.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),D!==ut&&D.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const ct=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Lt=$.material;if(Lt)if(Array.isArray(Lt))for(let Yt=0;Yt<Lt.length;Yt++){const Gt=Lt[Yt];Be(Gt,ut,$),ct.add(Gt)}else Be(Lt,ut,$),ct.add(Lt)}),x=U.pop(),ct},this.compileAsync=function(D,j,ut=null){const ct=this.compile(D,j,ut);return new Promise($=>{function Lt(){if(ct.forEach(function(Yt){Ct.get(Yt).currentProgram.isReady()&&ct.delete(Yt)}),ct.size===0){$(D);return}setTimeout(Lt,10)}xt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Ae=null;function rn(D){Ae&&Ae(D)}function un(){Li.stop()}function yn(){Li.start()}const Li=new fS;Li.setAnimationLoop(rn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(D){Ae=D,Ot.setAnimationLoop(D),D===null?Li.stop():Li.start()},Ot.addEventListener("sessionstart",un),Ot.addEventListener("sessionend",yn),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(j),j=Ot.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,j,H),x=Wt.get(D,U.length),x.init(j),U.push(x),it.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V.setFromProjectionMatrix(it,Ta,j.reversedDepth),tt=this.localClippingEnabled,mt=It.init(this.clippingPlanes,tt),M=dt.get(D,N.length),M.init(),N.push(M),Ot.enabled===!0&&Ot.isPresenting===!0){const Lt=T.xr.getDepthSensingMesh();Lt!==null&&Yi(Lt,j,-1/0,T.sortObjects)}Yi(D,j,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(ht,Rt),Ut=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Ut&&ee.addToRenderList(M,D),this.info.render.frame++,mt===!0&&It.beginShadows();const ut=x.state.shadowsArray;Kt.render(ut,D,j),mt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=M.opaque,$=M.transmissive;if(x.setupLights(),j.isArrayCamera){const Lt=j.cameras;if($.length>0)for(let Yt=0,Gt=Lt.length;Yt<Gt;Yt++){const Bt=Lt[Yt];Ln(ct,$,D,Bt)}Ut&&ee.render(D);for(let Yt=0,Gt=Lt.length;Yt<Gt;Yt++){const Bt=Lt[Yt];Fr(M,D,Bt,Bt.viewport)}}else $.length>0&&Ln(ct,$,D,j),Ut&&ee.render(D),Fr(M,D,j);H!==null&&O===0&&(Pt.updateMultisampleRenderTarget(H),Pt.updateRenderTargetMipmap(H)),D.isScene===!0&&D.onAfterRender(T,D,j),Mt.resetDefaultState(),w=-1,R=null,U.pop(),U.length>0?(x=U[U.length-1],mt===!0&&It.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function Yi(D,j,ut,ct){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)ut=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||V.intersectsSprite(D)){ct&&zt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(it);const Yt=J.update(D),Gt=D.material;Gt.visible&&M.push(D,Yt,Gt,ut,zt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||V.intersectsObject(D))){const Yt=J.update(D),Gt=D.material;if(ct&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),zt.copy(D.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),zt.copy(Yt.boundingSphere.center)),zt.applyMatrix4(D.matrixWorld).applyMatrix4(it)),Array.isArray(Gt)){const Bt=Yt.groups;for(let ne=0,se=Bt.length;ne<se;ne++){const re=Bt[ne],ye=Gt[re.materialIndex];ye&&ye.visible&&M.push(D,Yt,ye,ut,zt.z,re)}}else Gt.visible&&M.push(D,Yt,Gt,ut,zt.z,null)}}const Lt=D.children;for(let Yt=0,Gt=Lt.length;Yt<Gt;Yt++)Yi(Lt[Yt],j,ut,ct)}function Fr(D,j,ut,ct){const $=D.opaque,Lt=D.transmissive,Yt=D.transparent;x.setupLightsView(ut),mt===!0&&It.setGlobalState(T.clippingPlanes,ut),ct&&pt.viewport(B.copy(ct)),$.length>0&&Oi($,j,ut),Lt.length>0&&Oi(Lt,j,ut),Yt.length>0&&Oi(Yt,j,ut),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ln(D,j,ut,ct){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new ys(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?oc:ba,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const Lt=x.state.transmissionRenderTarget[ct.id],Yt=ct.viewport||B;Lt.setSize(Yt.z*T.transmissionResolutionScale,Yt.w*T.transmissionResolutionScale);const Gt=T.getRenderTarget(),Bt=T.getActiveCubeFace(),ne=T.getActiveMipmapLevel();T.setRenderTarget(Lt),T.getClearColor(lt),rt=T.getClearAlpha(),rt<1&&T.setClearColor(16777215,.5),T.clear(),Ut&&ee.render(ut);const se=T.toneMapping;T.toneMapping=zr;const re=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),mt===!0&&It.setGlobalState(T.clippingPlanes,ct),Oi(D,ut,ct),Pt.updateMultisampleRenderTarget(Lt),Pt.updateRenderTargetMipmap(Lt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Fe=0,$e=j.length;Fe<$e;Fe++){const ze=j[Fe],Pe=ze.object,oe=ze.geometry,He=ze.material,xe=ze.group;if(He.side===_i&&Pe.layers.test(ct.layers)){const mn=He.side;He.side=yi,He.needsUpdate=!0,hn(Pe,ut,ct,oe,He,xe),He.side=mn,He.needsUpdate=!0,ye=!0}}ye===!0&&(Pt.updateMultisampleRenderTarget(Lt),Pt.updateRenderTargetMipmap(Lt))}T.setRenderTarget(Gt,Bt,ne),T.setClearColor(lt,rt),re!==void 0&&(ct.viewport=re),T.toneMapping=se}function Oi(D,j,ut){const ct=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Lt=D.length;$<Lt;$++){const Yt=D[$],Gt=Yt.object,Bt=Yt.geometry,ne=Yt.group;let se=Yt.material;se.allowOverride===!0&&ct!==null&&(se=ct),Gt.layers.test(ut.layers)&&hn(Gt,j,ut,Bt,se,ne)}}function hn(D,j,ut,ct,$,Lt){D.onBeforeRender(T,j,ut,ct,$,Lt),D.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(T,j,ut,ct,D,Lt),$.transparent===!0&&$.side===_i&&$.forceSinglePass===!1?($.side=yi,$.needsUpdate=!0,T.renderBufferDirect(ut,j,ct,$,D,Lt),$.side=Pr,$.needsUpdate=!0,T.renderBufferDirect(ut,j,ct,$,D,Lt),$.side=_i):T.renderBufferDirect(ut,j,ct,$,D,Lt),D.onAfterRender(T,j,ut,ct,$,Lt)}function Hn(D,j,ut){j.isScene!==!0&&(j=Nt);const ct=Ct.get(D),$=x.state.lights,Lt=x.state.shadowsArray,Yt=$.state.version,Gt=ft.getParameters(D,$.state,Lt,j,ut),Bt=ft.getProgramCacheKey(Gt);let ne=ct.programs;ct.environment=D.isMeshStandardMaterial?j.environment:null,ct.fog=j.fog,ct.envMap=(D.isMeshStandardMaterial?ce:le).get(D.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,ne===void 0&&(D.addEventListener("dispose",St),ne=new Map,ct.programs=ne);let se=ne.get(Bt);if(se!==void 0){if(ct.currentProgram===se&&ct.lightsStateVersion===Yt)return ci(D,Gt),se}else Gt.uniforms=ft.getUniforms(D),D.onBeforeCompile(Gt,T),se=ft.acquireProgram(Gt,Bt),ne.set(Bt,se),ct.uniforms=Gt.uniforms;const re=ct.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(re.clippingPlanes=It.uniform),ci(D,Gt),ct.needsLights=Es(D),ct.lightsStateVersion=Yt,ct.needsLights&&(re.ambientLightColor.value=$.state.ambient,re.lightProbe.value=$.state.probe,re.directionalLights.value=$.state.directional,re.directionalLightShadows.value=$.state.directionalShadow,re.spotLights.value=$.state.spot,re.spotLightShadows.value=$.state.spotShadow,re.rectAreaLights.value=$.state.rectArea,re.ltc_1.value=$.state.rectAreaLTC1,re.ltc_2.value=$.state.rectAreaLTC2,re.pointLights.value=$.state.point,re.pointLightShadows.value=$.state.pointShadow,re.hemisphereLights.value=$.state.hemi,re.directionalShadowMap.value=$.state.directionalShadowMap,re.directionalShadowMatrix.value=$.state.directionalShadowMatrix,re.spotShadowMap.value=$.state.spotShadowMap,re.spotLightMatrix.value=$.state.spotLightMatrix,re.spotLightMap.value=$.state.spotLightMap,re.pointShadowMap.value=$.state.pointShadowMap,re.pointShadowMatrix.value=$.state.pointShadowMatrix),ct.currentProgram=se,ct.uniformsList=null,se}function Cn(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=pf.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function ci(D,j){const ut=Ct.get(D);ut.outputColorSpace=j.outputColorSpace,ut.batching=j.batching,ut.batchingColor=j.batchingColor,ut.instancing=j.instancing,ut.instancingColor=j.instancingColor,ut.instancingMorph=j.instancingMorph,ut.skinning=j.skinning,ut.morphTargets=j.morphTargets,ut.morphNormals=j.morphNormals,ut.morphColors=j.morphColors,ut.morphTargetsCount=j.morphTargetsCount,ut.numClippingPlanes=j.numClippingPlanes,ut.numIntersection=j.numClipIntersection,ut.vertexAlphas=j.vertexAlphas,ut.vertexTangents=j.vertexTangents,ut.toneMapping=j.toneMapping}function Hr(D,j,ut,ct,$){j.isScene!==!0&&(j=Nt),Pt.resetTextureUnits();const Lt=j.fog,Yt=ct.isMeshStandardMaterial?j.environment:null,Gt=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:zo,Bt=(ct.isMeshStandardMaterial?ce:le).get(ct.envMap||Yt),ne=ct.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,se=!!ut.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),re=!!ut.morphAttributes.position,ye=!!ut.morphAttributes.normal,Fe=!!ut.morphAttributes.color;let $e=zr;ct.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&($e=T.toneMapping);const ze=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Pe=ze!==void 0?ze.length:0,oe=Ct.get(ct),He=x.state.lights;if(mt===!0&&(tt===!0||D!==R)){const fe=D===R&&ct.id===w;It.setState(ct,D,fe)}let xe=!1;ct.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==He.state.version||oe.outputColorSpace!==Gt||$.isBatchedMesh&&oe.batching===!1||!$.isBatchedMesh&&oe.batching===!0||$.isBatchedMesh&&oe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&oe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&oe.instancing===!1||!$.isInstancedMesh&&oe.instancing===!0||$.isSkinnedMesh&&oe.skinning===!1||!$.isSkinnedMesh&&oe.skinning===!0||$.isInstancedMesh&&oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&oe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&oe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&oe.instancingMorph===!1&&$.morphTexture!==null||oe.envMap!==Bt||ct.fog===!0&&oe.fog!==Lt||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==It.numPlanes||oe.numIntersection!==It.numIntersection)||oe.vertexAlphas!==ne||oe.vertexTangents!==se||oe.morphTargets!==re||oe.morphNormals!==ye||oe.morphColors!==Fe||oe.toneMapping!==$e||oe.morphTargetsCount!==Pe)&&(xe=!0):(xe=!0,oe.__version=ct.version);let mn=oe.currentProgram;xe===!0&&(mn=Hn(ct,j,$));let jn=!1,Ie=!1,Wi=!1;const je=mn.getUniforms(),gt=oe.uniforms;if(pt.useProgram(mn.program)&&(jn=!0,Ie=!0,Wi=!0),ct.id!==w&&(w=ct.id,Ie=!0),jn||R!==D){pt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),je.setValue(F,"projectionMatrix",D.projectionMatrix),je.setValue(F,"viewMatrix",D.matrixWorldInverse);const me=je.map.cameraPosition;me!==void 0&&me.setValue(F,wt.setFromMatrixPosition(D.matrixWorld)),vt.logarithmicDepthBuffer&&je.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&je.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,Ie=!0,Wi=!0)}if($.isSkinnedMesh){je.setOptional(F,$,"bindMatrix"),je.setOptional(F,$,"bindMatrixInverse");const fe=$.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),je.setValue(F,"boneTexture",fe.boneTexture,Pt))}$.isBatchedMesh&&(je.setOptional(F,$,"batchingTexture"),je.setValue(F,"batchingTexture",$._matricesTexture,Pt),je.setOptional(F,$,"batchingIdTexture"),je.setValue(F,"batchingIdTexture",$._indirectTexture,Pt),je.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&je.setValue(F,"batchingColorTexture",$._colorsTexture,Pt));const Qt=ut.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Dt.update($,ut,mn),(Ie||oe.receiveShadow!==$.receiveShadow)&&(oe.receiveShadow=$.receiveShadow,je.setValue(F,"receiveShadow",$.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(gt.envMap.value=Bt,gt.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&j.environment!==null&&(gt.envMapIntensity.value=j.environmentIntensity),Ie&&(je.setValue(F,"toneMappingExposure",T.toneMappingExposure),oe.needsLights&&Ms(gt,Wi),Lt&&ct.fog===!0&&Tt.refreshFogUniforms(gt,Lt),Tt.refreshMaterialUniforms(gt,ct,Y,nt,x.state.transmissionRenderTarget[D.id]),pf.upload(F,Cn(oe),gt,Pt)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(pf.upload(F,Cn(oe),gt,Pt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&je.setValue(F,"center",$.center),je.setValue(F,"modelViewMatrix",$.modelViewMatrix),je.setValue(F,"normalMatrix",$.normalMatrix),je.setValue(F,"modelMatrix",$.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const fe=ct.uniformsGroups;for(let me=0,qe=fe.length;me<qe;me++){const Ye=fe[me];_e.update(Ye,mn),_e.bind(Ye,mn)}}return mn}function Ms(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Es(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(D,j,ut){const ct=Ct.get(D);ct.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Ct.get(D.texture).__webglTexture=j,Ct.get(D.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ut,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){const ut=Ct.get(D);ut.__webglFramebuffer=j,ut.__useDefaultFramebuffer=j===void 0};const Ja=F.createFramebuffer();this.setRenderTarget=function(D,j=0,ut=0){H=D,P=j,O=ut;let ct=!0,$=null,Lt=!1,Yt=!1;if(D){const Bt=Ct.get(D);if(Bt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(F.FRAMEBUFFER,null),ct=!1;else if(Bt.__webglFramebuffer===void 0)Pt.setupRenderTarget(D);else if(Bt.__hasExternalTextures)Pt.rebindTextures(D,Ct.get(D.texture).__webglTexture,Ct.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const re=D.depthTexture;if(Bt.__boundDepthTexture!==re){if(re!==null&&Ct.has(re)&&(D.width!==re.image.width||D.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(D)}}const ne=D.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Yt=!0);const se=Ct.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(se[j])?$=se[j][ut]:$=se[j],Lt=!0):D.samples>0&&Pt.useMultisampledRTT(D)===!1?$=Ct.get(D).__webglMultisampledFramebuffer:Array.isArray(se)?$=se[ut]:$=se,B.copy(D.viewport),K.copy(D.scissor),ot=D.scissorTest}else B.copy(Ht).multiplyScalar(Y).floor(),K.copy(pe).multiplyScalar(Y).floor(),ot=de;if(ut!==0&&($=Ja),pt.bindFramebuffer(F.FRAMEBUFFER,$)&&ct&&pt.drawBuffers(D,$),pt.viewport(B),pt.scissor(K),pt.setScissorTest(ot),Lt){const Bt=Ct.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,ut)}else if(Yt){const Bt=j;for(let ne=0;ne<D.textures.length;ne++){const se=Ct.get(D.textures[ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ne,se.__webglTexture,ut,Bt)}}else if(D!==null&&ut!==0){const Bt=Ct.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,ut)}w=-1},this.readRenderTargetPixels=function(D,j,ut,ct,$,Lt,Yt,Gt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Ct.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Yt!==void 0&&(Bt=Bt[Yt]),Bt){pt.bindFramebuffer(F.FRAMEBUFFER,Bt);try{const ne=D.textures[Gt],se=ne.format,re=ne.type;if(!vt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ct&&ut>=0&&ut<=D.height-$&&(D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Gt),F.readPixels(j,ut,ct,$,ie.convert(se),ie.convert(re),Lt))}finally{const ne=H!==null?Ct.get(H).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(D,j,ut,ct,$,Lt,Yt,Gt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Ct.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Yt!==void 0&&(Bt=Bt[Yt]),Bt)if(j>=0&&j<=D.width-ct&&ut>=0&&ut<=D.height-$){pt.bindFramebuffer(F.FRAMEBUFFER,Bt);const ne=D.textures[Gt],se=ne.format,re=ne.type;if(!vt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.bufferData(F.PIXEL_PACK_BUFFER,Lt.byteLength,F.STREAM_READ),D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Gt),F.readPixels(j,ut,ct,$,ie.convert(se),ie.convert(re),0);const Fe=H!==null?Ct.get(H).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Fe);const $e=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await h1(F,$e,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Lt),F.deleteBuffer(ye),F.deleteSync($e),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,ut=0){const ct=Math.pow(2,-ut),$=Math.floor(D.image.width*ct),Lt=Math.floor(D.image.height*ct),Yt=j!==null?j.x:0,Gt=j!==null?j.y:0;Pt.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,ut,0,0,Yt,Gt,$,Lt),pt.unbindTexture()};const xi=F.createFramebuffer(),Vr=F.createFramebuffer();this.copyTextureToTexture=function(D,j,ut=null,ct=null,$=0,Lt=null){Lt===null&&($!==0?($l("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=$,$=0):Lt=0);let Yt,Gt,Bt,ne,se,re,ye,Fe,$e;const ze=D.isCompressedTexture?D.mipmaps[Lt]:D.image;if(ut!==null)Yt=ut.max.x-ut.min.x,Gt=ut.max.y-ut.min.y,Bt=ut.isBox3?ut.max.z-ut.min.z:1,ne=ut.min.x,se=ut.min.y,re=ut.isBox3?ut.min.z:0;else{const Qt=Math.pow(2,-$);Yt=Math.floor(ze.width*Qt),Gt=Math.floor(ze.height*Qt),D.isDataArrayTexture?Bt=ze.depth:D.isData3DTexture?Bt=Math.floor(ze.depth*Qt):Bt=1,ne=0,se=0,re=0}ct!==null?(ye=ct.x,Fe=ct.y,$e=ct.z):(ye=0,Fe=0,$e=0);const Pe=ie.convert(j.format),oe=ie.convert(j.type);let He;j.isData3DTexture?(Pt.setTexture3D(j,0),He=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Pt.setTexture2DArray(j,0),He=F.TEXTURE_2D_ARRAY):(Pt.setTexture2D(j,0),He=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),jn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ie=F.getParameter(F.UNPACK_SKIP_ROWS),Wi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,se),F.pixelStorei(F.UNPACK_SKIP_IMAGES,re);const je=D.isDataArrayTexture||D.isData3DTexture,gt=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){const Qt=Ct.get(D),fe=Ct.get(j),me=Ct.get(Qt.__renderTarget),qe=Ct.get(fe.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,me.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ye=0;Ye<Bt;Ye++)je&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,$,re+Ye),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(j).__webglTexture,Lt,$e+Ye)),F.blitFramebuffer(ne,se,Yt,Gt,ye,Fe,Yt,Gt,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if($!==0||D.isRenderTargetTexture||Ct.has(D)){const Qt=Ct.get(D),fe=Ct.get(j);pt.bindFramebuffer(F.READ_FRAMEBUFFER,xi),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vr);for(let me=0;me<Bt;me++)je?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qt.__webglTexture,$,re+me):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qt.__webglTexture,$),gt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fe.__webglTexture,Lt,$e+me):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,Lt),$!==0?F.blitFramebuffer(ne,se,Yt,Gt,ye,Fe,Yt,Gt,F.COLOR_BUFFER_BIT,F.NEAREST):gt?F.copyTexSubImage3D(He,Lt,ye,Fe,$e+me,ne,se,Yt,Gt):F.copyTexSubImage2D(He,Lt,ye,Fe,ne,se,Yt,Gt);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gt?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(He,Lt,ye,Fe,$e,Yt,Gt,Bt,Pe,oe,ze.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(He,Lt,ye,Fe,$e,Yt,Gt,Bt,Pe,ze.data):F.texSubImage3D(He,Lt,ye,Fe,$e,Yt,Gt,Bt,Pe,oe,ze):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Lt,ye,Fe,Yt,Gt,Pe,oe,ze.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Lt,ye,Fe,ze.width,ze.height,Pe,ze.data):F.texSubImage2D(F.TEXTURE_2D,Lt,ye,Fe,Yt,Gt,Pe,oe,ze);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,jn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ie),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wi),Lt===0&&j.generateMipmaps&&F.generateMipmap(He),pt.unbindTexture()},this.initRenderTarget=function(D){Ct.get(D).__webglFramebuffer===void 0&&Pt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Pt.setTextureCube(D,0):D.isData3DTexture?Pt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Pt.setTexture2DArray(D,0):Pt.setTexture2D(D,0),pt.unbindTexture()},this.resetState=function(){P=0,O=0,H=null,pt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ge._getUnpackColorSpace()}}const sc=[{id:"back",name:"背面印刷",detail:"同心圆图案",color:"#253752"},{id:"core",name:"卡芯",detail:"卡片基材",color:"#c4ad8e"},{id:"front",name:"正面印刷",detail:"几何色块",color:"#e27955"},{id:"foil",name:"局部烫印",detail:"圆形与十字",color:"#d1a040"},{id:"film",name:"透明覆膜",detail:"表面保护",color:"#e1e8ea"}],_x=1.24,fw=new Aa().setFromEuler(new la(-.13,.73,-.03));function hw(s,t,i,r){const l=new oa;l.visible=!1;const c=[-r,0,r,r+.002,r+.004],h=new rc({color:"#baa489",roughness:.7}),d=new Ro({color:"#fff1c5",map:i,transparent:!0,alphaTest:.12,roughness:.3,metalness:.55,side:_i}),m=new Ro({color:"#dde9ed",transparent:!0,depthWrite:!1,roughness:.3,clearcoat:.8,side:_i}),p=new df({color:"#b9a784",transparent:!0,depthWrite:!1}),v=new df({color:"#8a9fa8",transparent:!0,depthWrite:!1}),g=new df({color:"#b94b30",transparent:!0,depthWrite:!1}),_=new Af({color:"#ffc779",transparent:!0,opacity:.12,depthWrite:!1,side:_i}),S=[t,h,s,d,m].map(T=>new Dn(void 0,T));S.forEach(T=>{T.geometry.dispose(),l.add(T)});const E=new bp(void 0,p),C=new bp(void 0,v);E.geometry.dispose(),C.geometry.dispose(),S[3].add(E),S[4].add(C),E.position.z=.001,C.position.z=.001;const M=new oa,x=new bp(void 0,g),N=new Dn(void 0,_);x.geometry.dispose(),N.geometry.dispose(),N.renderOrder=2,x.renderOrder=3,M.add(N,x),M.visible=!1,l.add(M);let U;return{group:l,core:S[1],setGeometry(T,z){U?.dispose(),U=new G1(z),S.forEach((P,O)=>{P.geometry=O===1?T:z}),E.geometry=C.geometry=x.geometry=U,N.geometry=z},pick(T){if(!l.visible)return null;l.updateMatrixWorld(!0);const[z]=T.intersectObjects(S,!1);return z?sc[S.indexOf(z.object)].id:null},update(T,z,P,O,H,w,R){if(l.visible=T>.025,!l.visible)return S.forEach(q=>{q.position.y=0}),M.visible=!1,!0;const B=O+_x*2.9,K=Math.min(1,H*.83/B),ot=Xl.lerp(.41,_x,z);l.position.copy(P.position).multiplyScalar(1-T),l.position.x-=ot*T*.17,l.position.y-=.08*T,l.quaternion.copy(P.quaternion).slerp(fw,T),l.scale.setScalar(Xl.lerp(1,K,T));const lt=sc.findIndex(q=>q.id===w);let rt=!0;return S.forEach((q,nt)=>{const Y=nt===lt?.075*T:0,ht=q.position.y;q.position.y=R&&Math.abs(ht-Y)>.002?Xl.damp(ht,Y,20,R):Y,q.position.y!==Y&&(rt=!1),q.position.z=c[nt]+(nt-2)*ot*T}),d.opacity=T,m.opacity=.48*T,p.opacity=.58*T,v.opacity=.83*T,M.visible=lt>=0,M.visible&&(M.position.copy(S[lt].position),M.position.z+=lt===1?r+.005:.005,g.opacity=T),rt},dispose(){U?.dispose(),[h,d,m,p,v,g,_].forEach(T=>T.dispose())}}}function dw(s,t){const i=new oa,r=new rc({color:"#29323c",metalness:.62,roughness:.42}),l=new rc({color:"#d4d6d6",metalness:.74,roughness:.27}),c=[],h=(S,E,C,M,x,N=0)=>{const U=new Dn(E,C);return U.position.set(M,x,N),S.add(U),c.push(E),U};h(i,new kl(.019,.019,.058,18),l,0,.019),h(i,new kl(.025,.025,.014,18),s,0,.029);const d=new oa;i.add(d);const m=new Zm([[.037,-.136],[.025,-.163],[-.023,-.165],[-.047,-.144],[-.053,-.041],[-.04,-.014],[-.007,-.007],[.029,-.014],[.043,-.036]].map(([S,E])=>new G(S,E,0)));h(d,new Jm(m,48,.012,12,!1),s,0,0);const p=new oa;p.position.set(.037,-.136,0),d.add(p);const v=h(p,new Ym(.012,.079,5,12),r,.003,.051);v.rotation.z=-.057;const g=h(d,new kl(.013,.013,.029,18),r,.037,-.136);g.rotation.x=Math.PI/2;const _=[-1,1].map(S=>({slit:h(i,new Ho(1,.009,.004),r,0,t-.016,S*.025),rivets:[-1,1].map(E=>h(i,new Qm(.008,12,8),r,E,t+.023,S*.025))}));return{group:i,setWidth(S){for(const E of _)E.slit.scale.x=S*.53,E.rivets[0].position.x=-S*.36,E.rivets[1].position.x=S*.36},setGate(S){p.rotation.z=-.7*S,d.rotation.y=-.36-.22*S},dispose(){c.forEach(S=>S.dispose()),r.dispose(),l.dispose()}}}const yx={portrait:[1.6,2.25],landscape:[2.25,1.6]},pw={left:.27,center:.5,right:.73},Ef=.018,vi=.007,Wl=Ef/2+vi+6e-4,Rn=4,xx=1/.05,mw=1/960,gw=2,Ya=72,Sx=24,Ip=.36,vw=.17,gS=.15,rf=.105,Mx=1.18,Ex=1024,Tx={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},mf=[0,.07,.93,1],_w=[-.95,-.28,.28,.95],yw=9,xw=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,Sw=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,Mw=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,Ew=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,bx={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},ja=(s,t,i)=>Math.min(i,Math.max(t,s)),Vl=(s,t,i)=>s+(t-s)*i,Bp=(s,t)=>{try{const i=document.createElement("canvas").getContext("2d");if(!i)return t;i.fillStyle="#000000",i.fillStyle=s;const r=i.fillStyle;if(r.startsWith("#")){const c=parseInt(r.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]}const l=r.match(/[\d.]+/g);return!l||l.length<3?t:[Number(l[0])/255,Number(l[1])/255,Number(l[2])/255]}catch{return t}},Tw=s=>.2126*s[0]+.7152*s[1]+.0722*s[2],gf=(s,t=1)=>`rgba(${Math.round(s[0]*255)}, ${Math.round(s[1]*255)}, ${Math.round(s[2]*255)}, ${t})`,vS=s=>{let t=s>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}},Fp=(s,t,i,r,l,c)=>{const h=Math.max(0,Math.min(c,r/2,l/2)),d=h*.4477;s.moveTo(t+h,i),s.lineTo(t+r-h,i),s.bezierCurveTo(t+r-d,i,t+r,i+d,t+r,i+h),s.lineTo(t+r,i+l-h),s.bezierCurveTo(t+r,i+l-d,t+r-d,i+l,t+r-h,i+l),s.lineTo(t+h,i+l),s.bezierCurveTo(t+d,i+l,t,i+l-d,t,i+l-h),s.lineTo(t,i+h),s.bezierCurveTo(t,i+d,t+d,i,t+h,i)},sf=(s,t)=>{if(!t)return Promise.resolve(null);const i=s.get(t);if(i)return i;const r=new Promise(l=>{const c=new Image;c.crossOrigin="anonymous",c.decoding="async",c.onload=()=>l(c),c.onerror=()=>l(null),c.src=t});return s.set(t,r),r},Ax=(s,t)=>{const[i,r]=yx[s]||yx.portrait,l=Vl(.03,Math.min(i,r)*.2,ja(t,0,1)),c={width:.34,height:.07,y:r/2-.13};return{width:i,height:r,radius:l,slot:c,hangY:c.y+vw}},bw=s=>{const{width:t,height:i,radius:r,slot:l}=s,c=new tc;Fp(c,-t/2+vi,-i/2+vi,t-vi*2,i-vi*2,Math.max(r-vi,.005));const h=new Rm;Fp(h,-l.width/2-vi,l.y-l.height/2-vi,l.width+vi*2,l.height+vi*2,l.height/2+vi),c.holes.push(h);const d=new ac(c,{depth:Ef,bevelEnabled:!0,bevelThickness:vi,bevelSize:vi,bevelSegments:5,curveSegments:24});d.translate(0,0,-Ef/2);const m=new Km(c,24),p=m.getAttribute("position"),v=m.getAttribute("uv");for(let C=0;C<p.count;C++)v.setXY(C,(p.getX(C)+t/2)/t,(p.getY(C)+i/2)/i);v.needsUpdate=!0;const g=new tc,_=l.width+.053,S=l.height+.047;Fp(g,-_/2,l.y-S/2,_,S,S/2),g.holes.push(h);const E=new ac(g,{depth:2*Wl,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:2,curveSegments:12});return E.translate(0,0,-Wl),{body:d,face:m,rim:E}},Rx=s=>{const t=new tc,i=gS/2-.013,r=s*.54-.014,l=s*.42-.014;t.moveTo(-r+.019,i),t.lineTo(r-.019,i),t.quadraticCurveTo(r,i,r-.003,i-.019),t.lineTo(l,-i+.019),t.quadraticCurveTo(l-.004,-i,l-.024,-i),t.lineTo(-l+.024,-i),t.quadraticCurveTo(-l+.004,-i,-l,-i+.019),t.lineTo(-r+.003,i-.019),t.quadraticCurveTo(-r,i,-r+.019,i);const c=new ac(t,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return c.translate(0,0,-.01),c},Aw=s=>{const t=mf.length,i=new ti;i.setAttribute("position",new Ni(new Float32Array(s*t*3),3)),i.setAttribute("normal",new Ni(new Float32Array(s*t*3),3)),i.setAttribute("uv",new Ni(new Float32Array(s*t*2),2));const r=[];for(let l=0;l<s-1;l++)for(let c=0;c<t-1;c++){const h=l*t+c;r.push(h,h+t,h+1,h+1,h+t,h+t+1)}return i.setIndex(r),i},Rw=s=>{const t=new Jx;t.background=new De(.035,.035,.04);const i=new cc(1,1),r=[],l=(d,m,p,v=0)=>{const g=new Af({color:new De(d,d,d),side:_i});r.push(g);const _=new Dn(i,g);_.position.set(...m),_.scale.set(p[0],p[1],1),_.lookAt(0,0,0),_.rotateZ(v),t.add(_)};l(2.6,[0,4.5,8],[9,4]),l(6,[-5.5,.5,7],[.9,14]),l(4,[5,-.5,8],[.6,14]),l(3.5,[0,-1,9],[24,.35],Math.PI/3),l(2.5,[1,2.5,9],[24,.2],Math.PI/3),l(1.4,[0,6,-6],[12,4]),l(.5,[0,-7,1],[16,6]),l(.9,[8,0,-2],[4,10]);const c=new Um(s),h=c.fromScene(t,.035);return c.dispose(),i.dispose(),r.forEach(d=>d.dispose()),h},of=(s,t)=>{const i=new Am(s);return i.colorSpace=li,i.anisotropy=t,i},Cw=()=>{const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)return new Am(t);const r=vS(7),l=Float32Array.from({length:16384},()=>r()),c=(m,p)=>{let v=0;for(let g=-1;g<=1;g++)for(let _=-1;_<=1;_++)v+=l[(p+g+128)%128*128+(m+_+128)%128];return v/9*1.6},h=i.createImageData(128,128);for(let m=0;m<128;m++)for(let p=0;p<128;p++){const v=c((p-1+128)%128,m)-c((p+1)%128,m),g=c(p,(m-1+128)%128)-c(p,(m+1)%128),_=Math.hypot(v,g,1),S=(m*128+p)*4;h.data[S]=(v/_*.5+.5)*255,h.data[S+1]=(g/_*.5+.5)*255,h.data[S+2]=(1/_*.5+.5)*255,h.data[S+3]=255}i.putImageData(h,0,0);const d=new Am(t);return d.wrapS=Ir,d.wrapT=Ir,d.repeat.set(5,7),d},ww=()=>{const i=vS(19),r=Float32Array.from({length:16384},()=>i()),l=m=>Math.sqrt(Math.max(0,1-4*m*m)),c=(m,p)=>{const v=(m%128+128)%128,g=(p%128+128)%128,_=v/128*8,S=g/128*8,E=Math.floor(_),C=Math.floor(S),M=_-E-.5,x=S-C-.5,N=(E+C)%2===0,U=l(M)*(.55+.45*Math.cos(x*Math.PI*(N?1:.6))),T=l(x)*(.55+.45*Math.cos(M*Math.PI*(N?.6:1)));return(N?Math.max(U,T*.7):Math.max(T,U*.7))+r[g*128+v]*.08},h=new Uint8Array(16384*4);for(let m=0;m<128;m++)for(let p=0;p<128;p++){const v=(c(p-1,m)-c(p+1,m))*1.6,g=(c(p,m-1)-c(p,m+1))*1.6,_=Math.hypot(v,g,1),S=(m*128+p)*4;h[S]=(v/_*.5+.5)*255,h[S+1]=(g/_*.5+.5)*255,h[S+2]=(1/_*.5+.5)*255,h[S+3]=255}const d=new I1(h,128,128);return d.wrapS=Ir,d.wrapT=Ir,d.magFilter=ra,d.minFilter=Lr,d.generateMipmaps=!0,d.needsUpdate=!0,d},_S=(s,t,i,r,l)=>{const c=(l==="contain"?Math.min:Math.max)(i/t.width,r/t.height),h=t.width*c,d=t.height*c;s.drawImage(t,(i-h)/2,(r-d)/2,h,d)},Cx=(s,t,i,r)=>{const l=s.getContext("2d");l&&(l.fillStyle=gf(i),l.fillRect(0,0,s.width,s.height),t&&_S(l,t,s.width,s.height,r))},Dw=(s,t,i)=>{const l=t?Math.max(64,Math.round(t.width/t.height*192)):384;s.width=192,s.height=l;const c=s.getContext("2d");if(!c)return l/192;if(c.fillStyle=gf(i),c.fillRect(0,0,192,l),t)return c.save(),c.translate(192,0),c.rotate(Math.PI/2),c.drawImage(t,0,0,l,192),c.restore(),l/192;const h=Tw(i)>.5?[0,0,0]:[1,1,1];c.fillStyle=gf(h,.05);for(let d=0;d<l;d+=4)c.fillRect(0,d,192,1);c.fillStyle=gf(h,.2);for(let d=0;d<l;d+=14)c.fillRect(192*.075,d,2,8),c.fillRect(192*.925-2,d,2,8);return l/192},Uw=()=>{const s=()=>Array.from({length:Rn+1},()=>new G);return{nodes:s(),previous:s(),velocities:s(),lengths:new Float64Array(Rn),impulses:new Float64Array(Rn),rest:1,anchor:new G,body:{position:new G,previous:new G,velocity:new G,quaternion:new Aa,previousQuaternion:new Aa,angular:new G,mass:1,inverseInertia:new G(1,1,1),hang:new G},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Je={a:new G,b:new G,c:new G,d:new G,e:new G,f:new G,g:new G,pin:new G,q:new Aa,r:new Aa},tg=(s,t,i)=>(Je.r.copy(s.quaternion).invert(),i.copy(t).applyQuaternion(Je.r),i.set(i.x*s.inverseInertia.x,i.y*s.inverseInertia.y,i.z*s.inverseInertia.z),i.applyQuaternion(s.quaternion)),yS=(s,t)=>{const{x:i,y:r,z:l,w:c}=s;s.x+=.5*(t.x*c+t.y*l-t.z*r),s.y+=.5*(t.y*c+t.z*i-t.x*l),s.z+=.5*(t.z*c+t.x*r-t.y*i),s.w+=.5*(-t.x*i-t.y*r-t.z*l),s.normalize()},xS=(s,t,i)=>{const r=Je.c.crossVectors(t,i);return 1/s.mass+r.dot(tg(s,r,Je.d))},SS=(s,t,i)=>{s.position.addScaledVector(i,1/s.mass),yS(s.quaternion,tg(s,Je.e.crossVectors(t,i),Je.f))},Nw=(s,t,i,r)=>{const{nodes:l,body:c}=s,h=l[t],d=t===0?0:xx,m=t===Rn-1,p=Je.g;let v=l[t+1];m&&(p.copy(c.hang).applyQuaternion(c.quaternion),v=Je.b.copy(c.position).add(p));const g=Je.a.subVectors(v,h),_=g.length(),S=_-s.rest;if(S<=0||_<1e-9)return;const E=g.divideScalar(_),C=m?xS(c,p,E):xx,M=(_-s.lengths[t])/i,N=(r.hold*Math.tanh(r.stiffness*S/r.hold)+r.spring*S+r.bandDamping*Math.max(0,M))*i*i-s.impulses[t];if(N<=0)return;const U=Math.min(S/(d+C),N);s.impulses[t]+=U,d&&h.addScaledVector(E,U*d),m?SS(c,p,E.multiplyScalar(-U)):v.addScaledVector(E,-U*C)},Lw=(s,t,i)=>{const r=Je.g.copy(t.local).applyQuaternion(s.quaternion),l=Je.a.copy(i).sub(s.position).sub(r),c=l.length();if(c<1e-9)return;const h=l.divideScalar(c),d=c/xS(s,r,h);SS(s,r,h.multiplyScalar(d))},lf=(s,t,i)=>{const{nodes:r,previous:l,velocities:c,body:h,anchor:d}=s;r[0].copy(d);for(let p=1;p<=Rn;p++)r[p].copy(r[p-1]),i?r[p].x+=s.rest:r[p].y-=s.rest;h.quaternion.identity(),i&&h.quaternion.setFromAxisAngle(new G(0,0,1),Math.PI/2),h.hang.set(0,t.hangY,0);const m=Je.a.copy(h.hang).applyQuaternion(h.quaternion);h.position.copy(r[Rn]).sub(m),h.previous.copy(h.position),h.previousQuaternion.copy(h.quaternion),h.velocity.set(0,0,0),h.angular.set(0,0,0);for(let p=0;p<=Rn;p++)l[p].copy(r[p]),c[p].set(0,0,0);s.lengths.fill(s.rest),s.turn=0,s.twist=0,s.twistRaw=0,s.calm=0},Ow=(s,t,i)=>{s.rest=i/Rn;const{width:r,height:l}=t,c=s.body,h=Ef+vi*2;c.mass=1,c.inverseInertia.set(12/(l*l+h*h),12/(r*r+h*h),12/(r*r+l*l)),c.hang.set(0,t.hangY,0)},zw=(s,t,i,r)=>{const l=Math.max(1,Math.ceil(t/mw-1e-6)),c=t/l,{nodes:h,previous:d,velocities:m,body:p}=s,v=i.breeze*(Math.sin(r*.53)*.7+Math.sin(r*1.31+1.7)*.3)*3,g=i.breeze*Math.sin(r*.37+.6)*2,_=s.grab,S=Je.pin,E=Math.exp(-2*c),C=Math.exp(-i.linearDrag*c),M=Math.exp(-i.angularDrag*c);for(let N=0;N<l;N++){for(let R=1;R<Rn;R++){const B=m[R];B.y-=i.gravity*c,B.x+=v*c,B.z+=g*c,d[R].copy(h[R]),h[R].addScaledVector(B,c)}p.previous.copy(p.position),p.previousQuaternion.copy(p.quaternion);const U=p.quaternion;if(_){const R=Je.q.copy(_.rotation).multiply(Je.r.copy(U).invert());R.w<0&&R.set(-R.x,-R.y,-R.z,-R.w);const B=Je.a.set(R.x,R.y,R.z).multiplyScalar(2*i.grip);B.addScaledVector(p.angular,-6),p.angular.addScaledVector(tg(p,B,Je.b),c)}const T=Je.a.set(0,1,0).applyQuaternion(U),z=Je.b.set(-T.x*T.z,-T.y*T.z,1-T.z*T.z);if(z.lengthSq()>.001){const R=Je.d.set(0,0,1).applyQuaternion(U),B=Math.atan2(Je.e.crossVectors(z,R).dot(T),z.dot(R));let K=B-s.twistRaw;K>Math.PI?K-=Math.PI*2:K<-Math.PI&&(K+=Math.PI*2),s.twist+=K,s.twistRaw=B}if(!_){const R=p.angular.dot(T);p.angular.addScaledVector(T,(i.twist*(s.turn-s.twist)-i.twistDamping*R)*c)}p.velocity.y-=i.gravity*c,p.velocity.x+=v*.35*c,p.velocity.z+=g*.35*c,p.position.addScaledVector(p.velocity,c),yS(p.quaternion,Je.f.copy(p.angular).multiplyScalar(c)),s.impulses.fill(0),_&&S.lerpVectors(_.from,_.target,(N+1)/l);for(let R=0;R<gw;R++){for(let B=0;B<Rn;B++)Nw(s,B,c,i);_&&Lw(p,_,S)}for(let R=1;R<Rn;R++){const B=m[R].subVectors(h[R],d[R]).divideScalar(c).multiplyScalar(E);B.multiplyScalar(1/(1+i.nodeAir*B.length()*c))}p.velocity.subVectors(p.position,p.previous).divideScalar(c);const P=Je.q.copy(p.previousQuaternion).invert().premultiply(p.quaternion);p.angular.set(P.x,P.y,P.z).multiplyScalar(2/c*(P.w<0?-1:1));const O=Je.a.set(0,0,1).applyQuaternion(p.quaternion),H=p.velocity.dot(O),w=Je.b.copy(p.velocity).addScaledVector(O,-H);w.multiplyScalar(1/(1+i.air*w.length()*c)),p.velocity.copy(w).addScaledVector(O,H/(1+i.broadside*Math.abs(H)*c)).multiplyScalar(C),p.angular.multiplyScalar(M/(1+i.spinAir*p.angular.length()*c)),p.velocity.lengthSq()>3600&&p.velocity.setLength(60),p.angular.lengthSq()>1600&&p.angular.setLength(40),h[Rn].copy(p.hang).applyQuaternion(p.quaternion).add(p.position);for(let R=0;R<Rn;R++)s.lengths[R]=h[R].distanceTo(h[R+1])}_&&_.from.copy(_.target);let x=p.velocity.lengthSq()+p.angular.lengthSq()*.3;for(let N=1;N<Rn;N++)x+=m[N].lengthSq()*.05;s.calm=x<2e-4?s.calm+t:0},Pw=({frontImage:s,backImage:t,foilImage:i,layerView:r=!1,layerSpacing:l=.6,activeLayer:c,onLayerHover:h,imageFit:d="cover",cardColor:m="#ffffff",orientation:p="portrait",finish:v="glossy",cornerRadius:g=.3,size:_=.6,anchor:S="center",strapLength:E=.5,strapImage:C,strapColor:M="#111111",strapWidth:x=.65,metal:N="silver",gravity:U=1,damping:T=.5,elasticity:z=.5,breeze:P=.5,interactive:O=!0,intro:H=!0,controlsRef:w,onUnavailable:R,className:B="",style:K})=>{const ot=Fn.useRef(null),lt=Fn.useRef(null),rt=Fn.useRef(null),q=Fn.useRef(null);return lt.current={frontImage:s,backImage:t,foilImage:i,layerView:r,layerSpacing:ja(l,0,1),activeLayer:c,onLayerHover:h,imageFit:d==="contain"?"contain":"cover",cardColor:m,orientation:p==="landscape"?"landscape":"portrait",finish:v,cornerRadius:g,size:_,anchor:S,strapLength:E,strapImage:C,strapColor:M,strapWidth:x,metal:N,gravity:U,damping:T,elasticity:z,breeze:P,interactive:O,intro:H,onUnavailable:R},Fn.useImperativeHandle(w,()=>({flip:()=>q.current?.flip(),reset:()=>q.current?.reset()}),[]),Fn.useEffect(()=>{rt.current?.()}),Fn.useEffect(()=>{const nt=ot.current;if(!nt)return;let Y;try{Y=new uw({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{lt.current.onUnavailable?.();return}Y.setClearColor(0,0),Y.outputColorSpace=li,Y.toneMapping=Nx,Y.toneMappingExposure=1;const ht=Y.domElement;ht.className="lanyard-canvas",ht.setAttribute("aria-hidden","true"),nt.appendChild(ht);const Rt=Math.min(8,Y.capabilities.getMaxAnisotropy()),Ht=new Jx,pe=Rw(Y);Ht.environment=pe.texture;const de=new ki(Sx,1,.1,200),V=new qy(16777215,1.6);V.position.set(-2.5,4,6);const mt=new qy(16777215,.35);mt.position.set(3,-1,4),Ht.add(V,mt);const tt=new Map,it={front:null,back:null,foil:null,strap:null},wt=document.createElement("canvas"),zt=document.createElement("canvas"),Nt=document.createElement("canvas"),Ut=document.createElement("canvas"),qt=of(wt,Rt),F=of(zt,Rt),At=of(Nt,Rt),xt=of(Ut,Rt);xt.wrapS=Nr,xt.wrapT=Ir;const vt=Cw(),pt=ww(),Et={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new G},foilFill:{value:new G},foilTop:{value:new G}},Ct=gt=>{Object.assign(gt.uniforms,Et),gt.vertexShader=gt.vertexShader.replace("#include <common>",`#include <common>
${xw}`).replace("#include <project_vertex>",`#include <project_vertex>
${Sw}`),gt.fragmentShader=gt.fragmentShader.replace("#include <common>",`#include <common>
${Mw}`).replace("#include <opaque_fragment>",`${Ew}
#include <opaque_fragment>`)},Pt=new Ro({map:qt,normalMap:vt,normalScale:new Xt(.06,.06)}),le=new Ro({map:F,normalMap:vt,normalScale:new Xt(.06,.06)});Pt.onBeforeCompile=Ct,le.onBeforeCompile=Ct;const ce=new Ro,L=new rc({metalness:1}),b=new Ro({map:xt,normalMap:pt,normalScale:new Xt(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new De(.32,.32,.34),side:_i}),J=new oa,ft=new Dn(void 0,ce),Tt=new Dn(void 0,Pt),dt=new Dn(void 0,le),Wt=new Dn(void 0,L),It=Wt.clone();J.add(ft,Tt,dt,Wt),Ht.add(J);const Kt=hw(Pt,le,At,Wl);Kt.core.add(It),Ht.add(Kt.group);const ee=Aw(Ya),Dt=new Dn(ee,b);Dt.frustumCulled=!1,Ht.add(Dt);const Vt=new oa,ue=new Dn(Rx(Ip),L);ue.position.y=rf;const ie=dw(L,rf);Vt.add(ue,ie.group),Ht.add(Vt);const Mt=Uw(),_e=[],k=new G,Ot=new G,Ft=new Zm(_e,!1,"centripetal"),jt={width:1,height:1};let bt=Ax("portrait",.3),St={},Jt=Ip,ve=2,Be=0,Ae=performance.now(),rn=0,un=!0,yn=!0,Li=!1,Yi=!1,Fr=null,Ln=null,Oi=0,hn=0,Hn=lt.current.layerSpacing,Cn=1;const ci=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Hr=()=>{const gt=lt.current,Qt=Bp(gt.cardColor,[1,1,1]),fe=Ex,me=Math.round(Ex*bt.height/bt.width);(wt.width!==fe||wt.height!==me)&&(wt.width=fe,wt.height=me,zt.width=fe,zt.height=me,Nt.width=fe,Nt.height=me,qt.dispose(),F.dispose(),At.dispose()),Cx(wt,it.front,Qt,gt.imageFit),Cx(zt,it.back||it.front,Qt,gt.imageFit);const qe=Nt.getContext("2d");qe&&(qe.clearRect(0,0,fe,me),it.foil&&_S(qe,it.foil,fe,me,gt.imageFit)),qt.needsUpdate=!0,F.needsUpdate=!0,At.needsUpdate=!0,Gt()},Ms=()=>{const gt=lt.current;ve=Dw(Ut,it.strap,Bp(gt.strapColor,[.07,.07,.07])),pt.repeat.set(2,2*ve),xt.dispose(),xt.needsUpdate=!0,Gt()},Es=()=>{const gt=lt.current,Qt=jt.width/jt.height;Cn=bt.height/ja(gt.size,.15,.9);const fe=bt.width/.72;Cn*Qt<fe&&(Cn=fe/Qt);const me=Cn*Qt;de.aspect=Qt,de.position.set(0,0,Cn/2/Math.tan(Sx*Math.PI/360)),de.lookAt(0,0,0),de.updateProjectionMatrix(),de.updateMatrixWorld(),Et.foilKey.value.set(-2.5,4,6).normalize().transformDirection(de.matrixWorldInverse),Et.foilFill.value.set(3,-1,4).normalize().transformDirection(de.matrixWorldInverse),Et.foilTop.value.set(.5,4.5,8).normalize().transformDirection(de.matrixWorldInverse);const qe=((pw[gt.anchor]??.5)-.5)*me,Ye=Cn/2+.2,Me=Cn/2-Cn*Vl(.12,.42,ja(gt.strapLength,0,1))+(bt.hangY-bt.height/2);Mt.anchor.set(qe,Ye,0),Ow(Mt,bt,Ye-Me),Mt.nodes[0].copy(Mt.anchor),Mt.previous[0].copy(Mt.anchor)},Ja=()=>{const gt=lt.current,Qt=`${gt.orientation}|${gt.cornerRadius}`;if(Qt!==St.layoutKey){bt=Ax(gt.orientation,gt.cornerRadius);const Xe=bw(bt);ft.geometry.dispose(),Tt.geometry.dispose(),dt.geometry.dispose(),Wt.geometry.dispose(),ft.geometry=Xe.body,Tt.geometry=Xe.face,dt.geometry=Xe.face.clone(),Wt.geometry=It.geometry=Xe.rim,Tt.position.z=Wl,dt.rotation.y=Math.PI,dt.position.z=-Wl,Kt.setGeometry(Xe.body,Xe.face),St.framingKey=""}const fe=`${Qt}|${gt.size}|${gt.anchor}|${gt.strapLength}|${jt.width}|${jt.height}`;fe!==St.framingKey&&(Es(),Li?Qt!==St.layoutKey&&lf(Mt,bt,!1):(lf(Mt,bt,gt.intro&&!ci),Li=!0));const me=`${gt.frontImage}|${gt.backImage}|${gt.foilImage}|${gt.strapImage}`;if(me!==St.imageKey){const Xe=++Oi;Promise.all([sf(tt,gt.frontImage),sf(tt,gt.backImage),sf(tt,gt.foilImage),sf(tt,gt.strapImage)]).then(([fi,ji,ei,On])=>{!yn||Xe!==Oi||(it.front=fi,it.back=ji,it.foil=ei,it.strap=On,Hr(),Ms())})}const qe=`${Qt}|${gt.cardColor}|${gt.imageFit}`;qe!==St.faceKey&&Hr(),gt.strapColor!==St.strapColor&&Ms();const Ye=Tx[gt.finish]||Tx.glossy,ui=Bp(gt.cardColor,[1,1,1]);[Pt,le].forEach(Xe=>{Xe.roughness=Ye.roughness,Xe.metalness=Ye.metalness,Xe.clearcoat=Ye.clearcoat,Xe.clearcoatRoughness=Ye.clearcoatRoughness,Xe.anisotropy=Ye.anisotropy}),Et.foilStrength.value=Ye.foil,Et.foilAspect.value=bt.height/bt.width,ce.color.setRGB(ui[0]*.92,ui[1]*.92,ui[2]*.92,li),ce.roughness=Math.min(Ye.roughness,.35),ce.metalness=Ye.metalness,ce.clearcoat=1,ce.clearcoatRoughness=.08;const Me=bx[gt.metal]||bx.silver;if(L.color.set(Me.color),L.roughness=Me.roughness,Jt=Ip*ja(gt.strapWidth,.4,2),Jt!==St.strapScale&&(ue.geometry.dispose(),ue.geometry=Rx(Jt),ie.setWidth(Jt)),gt.layerView&&!St.layerView){const Xe=Mt.grab?.pointerId;Mt.grab=null,Ln=null,Yi=!1,ye(""),Xe!==void 0&&ht.hasPointerCapture(Xe)&&ht.releasePointerCapture(Xe)}!gt.layerView&&St.layerView&&(Fe(null),ye("")),ht.style.touchAction=gt.interactive&&!gt.layerView?"pan-y":"auto",St={layoutKey:Qt,framingKey:fe,imageKey:me,faceKey:qe,strapColor:gt.strapColor,strapScale:Jt,layerView:gt.layerView},Gt()},xi=Array.from({length:Ya},()=>new G),Vr=Array.from({length:Ya},()=>new G),D=_w.map(gt=>[Math.cos(gt),Math.sin(gt)]),j={tangent:new G,toCamera:new G,basis:new cn,up:new G,across:new G,facing:new G,end:new G},ut=()=>{const gt=Mt.nodes[Rn],Qt=rf+gS*.85;let fe=Rn-1;for(;fe>0&&Mt.nodes[fe].distanceTo(gt)<Qt*1.1;)fe--;const me=j.up.subVectors(Mt.nodes[fe],gt);me.lengthSq()<1e-8&&me.set(0,1,0).applyQuaternion(Mt.body.quaternion),me.normalize(),k.copy(gt).addScaledVector(me,Qt),Ot.copy(gt).addScaledVector(me,rf-.016),_e.length=0;for(let ln=0;ln<=fe;ln++)_e.push(Mt.nodes[ln]);_e.push(k,Ot),Ft.updateArcLengths();for(let ln=0;ln<Ya;ln++)Ft.getPointAt(ln/(Ya-1),xi[ln]);const qe=Ft.getLength(),Ye=1-k.distanceTo(Ot)/Math.max(qe,.001),ui=ee.getAttribute("position"),Me=ee.getAttribute("normal"),Xe=ee.getAttribute("uv"),fi=mf.length,ji=Mt.rest*Rn,ei=ji/(Jt*ve),On=Jt/Math.pow(Math.max(1,qe/Math.max(ji,.001)),.35),{tangent:ca,toCamera:uc,across:Zn,facing:Zi}=j;for(let ln=0;ln<Ya;ln++){ca.subVectors(xi[Math.min(Ya-1,ln+1)],xi[Math.max(0,ln-1)]),ca.lengthSq()<1e-12&&ca.set(0,-1,0),ca.normalize(),uc.subVectors(de.position,xi[ln]).normalize();const Sn=Vr[ln].crossVectors(uc,ca);Sn.lengthSq()<1e-10&&Sn.copy(ln>0?Vr[ln-1]:Je.a.set(1,0,0)),Sn.normalize(),ln>0&&Sn.dot(Vr[ln-1])<0&&Sn.negate();const Ts=-Mt.twist*Math.pow(Math.min(1,ln/(Ya-1)/Ye),1.3);Zi.crossVectors(ca,Sn),Zn.copy(Sn).multiplyScalar(Math.cos(Ts)).addScaledVector(Zi,Math.sin(Ts)),Zi.crossVectors(ca,Zn);const bs=xi[ln],Go=(1-ln/(Ya-1))*ei;for(let Si=0;Si<fi;Si++){const As=ln*fi+Si,Rs=(mf[Si]-.5)*On,[ua,Xo]=D[Si];ui.setXYZ(As,bs.x+Zn.x*Rs,bs.y+Zn.y*Rs,bs.z+Zn.z*Rs),Me.setXYZ(As,Zi.x*ua+Zn.x*Xo,Zi.y*ua+Zn.y*Xo,Zi.z*ua+Zn.z*Xo),Xe.setXY(As,mf[Si],Go)}}j.end.copy(Zn),ui.needsUpdate=!0,Me.needsUpdate=!0,Xe.needsUpdate=!0,Zn.copy(j.end).addScaledVector(me,-j.end.dot(me)).normalize(),Zi.crossVectors(Zn,me).normalize(),j.basis.makeBasis(Zn,me,Zi),Vt.quaternion.setFromRotationMatrix(j.basis),Vt.position.copy(gt)},ct=(gt=0)=>{const Qt=Xl.smoothstep,fe=Qt(hn,.17,.67),me=Qt(hn,.035,.13)*(1-Qt(hn,.3,.44)),qe=Qt(hn,.38,.98),Ye=Qt(hn,.12,.37)*(1-qe);J.position.copy(Mt.body.position),J.position.y-=Cn*.055*Ye,J.quaternion.copy(Mt.body.quaternion);const{layerView:ui,activeLayer:Me}=lt.current,Xe=Kt.update(qe,Hn,J,bt.width,Cn*de.aspect,ui?Me:null,ci?0:gt);if(ft.visible=Tt.visible=dt.visible=Wt.visible=!Kt.group.visible,Dt.visible=Vt.visible=fe<1,Dt.visible){ut();const fi=Cn*fe*.42;Dt.position.y=fi,Vt.position.y+=fi,ie.setGate(me)}return Y.render(Ht,de),Xe},$=()=>{const gt=lt.current,Qt=40*ja(gt.gravity,0,3),fe=Math.max(Qt,20),me=ja(gt.elasticity,0,1),qe=ja(gt.damping,0,1);return{gravity:Qt,hold:fe*Vl(2.2,5.5,me),stiffness:fe*10*Rn,spring:fe*Vl(.1,.4,me)*Rn,bandDamping:fe*Vl(.3,.08,me)*Rn,linearDrag:.25*Math.pow(16,qe),angularDrag:.5*Math.pow(12,qe),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:ci?0:ja(gt.breeze,0,1)}},Lt=(gt,Qt,fe)=>ci||Math.abs(gt-Qt)<.002?Qt:Xl.damp(gt,Qt,10,fe),Yt=gt=>{if(Be=0,!yn)return;const Qt=Math.max(1/240,(gt-Ae)/1e3),fe=Math.min(1/30,Qt),me=Math.min(.1,Qt);Ae=gt,rn+=fe;const{layerView:qe,layerSpacing:Ye}=lt.current,ui=qe?1:0;ci?hn=ui:qe?hn=Math.min(1,hn+me/Mx):hn=Math.max(0,hn-me/Mx),Hn=hn>0?Lt(Hn,Ye,me):Ye;const Me=$();hn===0&&zw(Mt,fe,Me,rn);const Xe=Mt.body;Number.isFinite(Xe.position.x+Xe.position.y+Xe.position.z+Xe.quaternion.w)||(Mt.grab=null,lf(Mt,bt,!1));const fi=ct(me),ji=hn===ui&&Hn===Ye,ei=Mt.calm>1.2&&!Mt.grab&&Me.breeze===0;un&&!(ji&&fi&&(qe||ei))&&(Be=requestAnimationFrame(Yt))},Gt=()=>{Be||!un||!yn||(Mt.calm=0,Ae=performance.now(),Be=requestAnimationFrame(Yt))},Bt=new Rb,ne=new Xt,se=gt=>{const Qt=ht.getBoundingClientRect();ne.set((gt.clientX-Qt.left)/Qt.width*2-1,-((gt.clientY-Qt.top)/Qt.height)*2+1),Bt.setFromCamera(ne,de)},re=()=>(J.updateMatrixWorld(),Bt.intersectObjects([ft,Tt,dt],!1)[0]||null),ye=gt=>{ht.style.cursor!==gt&&(ht.style.cursor=gt)},Fe=gt=>{gt!==Fr&&(Fr=gt,lt.current.onLayerHover?.(gt))},$e=gt=>{const Qt=Mt.body,fe=Je.a.set(0,1,0).applyQuaternion(Qt.quaternion);let me=Mt.turn>0?-1:1;if(Mt.turn===0){const qe=Je.c.subVectors(gt,de.position).normalize();me=Je.b.subVectors(gt,Qt.position).cross(qe).dot(fe)<0?-1:1}Mt.turn=Mt.turn===0?Math.PI*me:0,Qt.angular.addScaledVector(fe,yw*me)},ze=()=>lt.current.interactive&&!lt.current.layerView&&hn<=.025,Pe=gt=>{if(!ze()||gt.button>0)return;se(gt);const Qt=re();Qt&&(Mt.grab={pointerId:gt.pointerId,local:Qt.point.clone().sub(Mt.body.position).applyQuaternion(Mt.body.quaternion.clone().invert()),rotation:Mt.body.quaternion.clone(),reach:Qt.distance,from:Qt.point.clone(),target:Qt.point.clone()},Ln={x:gt.clientX,y:gt.clientY,time:performance.now(),point:Qt.point.clone()},ht.setPointerCapture?.(gt.pointerId),ye("grabbing"),gt.preventDefault(),Gt())},oe=gt=>{if(lt.current.layerView){if(gt.pointerType!=="touch"&&hn>.88){se(gt);const Qt=Kt.pick(Bt);Fe(Qt),ye(Qt?"help":"")}return}if(ze()){if(se(gt),Mt.grab){Ln&&Math.hypot(gt.clientX-Ln.x,gt.clientY-Ln.y)>6&&(Ln=null),Bt.ray.at(Mt.grab.reach,Mt.grab.target),Gt();return}gt.pointerType!=="touch"&&(Yi=!!re(),ye(Yi?"grab":""))}},He=()=>{Fe(null),Mt.grab||(Yi=!1,ye(""))},xe=gt=>{Mt.grab&&(Mt.grab=null,Ln&&gt.type==="pointerup"&&performance.now()-Ln.time<450&&$e(Ln.point),Ln=null,ht.releasePointerCapture?.(gt.pointerId),ye(Yi&&gt.pointerType!=="touch"?"grab":""),Gt())},mn=gt=>{!ze()||gt.touches.length!==1||(se(gt.touches[0]),re()&&gt.preventDefault())};ht.addEventListener("pointerdown",Pe),ht.addEventListener("pointermove",oe),ht.addEventListener("pointerleave",He),ht.addEventListener("pointerup",xe),ht.addEventListener("pointercancel",xe),ht.addEventListener("lostpointercapture",xe),ht.addEventListener("touchstart",mn,{passive:!1});const jn=()=>{jt.width=Math.max(1,nt.clientWidth),jt.height=Math.max(1,nt.clientHeight),Y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Y.setSize(jt.width,jt.height,!1),Ja(),ct()},Ie=new ResizeObserver(jn);Ie.observe(nt);const Wi=new IntersectionObserver(([gt])=>{un=gt.isIntersecting,un&&Gt()});Wi.observe(nt);const je=()=>{document.hidden||Gt()};return document.addEventListener("visibilitychange",je),rt.current=Ja,q.current={flip(){lt.current.layerView||Mt.grab||($e(Mt.body.position),Gt())},reset(){lt.current.layerView||Mt.grab||(lf(Mt,bt,!1),ct(),Gt())}},jn(),()=>{yn=!1,cancelAnimationFrame(Be),rt.current=null,q.current=null,Ie.disconnect(),Wi.disconnect(),document.removeEventListener("visibilitychange",je),ht.removeEventListener("pointerdown",Pe),ht.removeEventListener("pointermove",oe),ht.removeEventListener("pointerleave",He),ht.removeEventListener("pointerup",xe),ht.removeEventListener("pointercancel",xe),ht.removeEventListener("lostpointercapture",xe),ht.removeEventListener("touchstart",mn),[ft,Tt,dt,Wt,ue,Dt].forEach(gt=>gt.geometry?.dispose()),[Pt,le,ce,L,b].forEach(gt=>gt.dispose()),ie.dispose(),Kt.dispose(),[qt,F,At,xt,vt,pt].forEach(gt=>gt.dispose()),pe.dispose(),Y.dispose(),ht.parentNode&&ht.parentNode.removeChild(ht)}},[]),$t.jsx("div",{ref:ot,className:`lanyard ${B}`.trim(),style:K})},Ma={front:"/BIRTH2026TSH/card-front.png",back:"/BIRTH2026TSH/card-back.png",foil:"/BIRTH2026TSH/card-foil.png",strap:"/BIRTH2026TSH/band.png"};function wx({image:s,label:t}){return $t.jsxs("figure",{className:"face-sample",children:[$t.jsx("img",{src:s,alt:"",width:"62",height:"87"}),$t.jsx("figcaption",{children:t})]})}function Iw({spacing:s,onSpacing:t,activeLayer:i,pinnedLayer:r,onPreview:l,onPin:c}){return $t.jsxs($t.Fragment,{children:[$t.jsx("ol",{className:"layer-list","aria-label":"卡片层级，由背面到正面",children:sc.map(({id:h,name:d,detail:m,color:p})=>$t.jsx("li",{children:$t.jsxs("button",{type:"button",className:"layer-option","data-active":h===i,"aria-pressed":h===r,onClick:()=>c(h),onPointerEnter:v=>{v.pointerType!=="touch"&&l(h)},onPointerLeave:()=>l(null),onFocus:v=>{v.currentTarget.matches(":focus-visible")&&l(h)},onBlur:()=>l(null),children:[$t.jsx("span",{className:"layer-dot",style:{backgroundColor:p},"aria-hidden":"true"}),$t.jsx("span",{children:d}),$t.jsx("span",{className:"layer-detail",children:m})]})},h))}),$t.jsxs("div",{className:"layer-spacing",children:[$t.jsxs("div",{className:"layer-spacing-label",children:[$t.jsx("label",{htmlFor:"layer-spacing",children:"层距"}),$t.jsxs("span",{"aria-hidden":"true",children:[s,"%"]})]}),$t.jsx("input",{id:"layer-spacing",type:"range",min:"0",max:"100",value:s,"aria-valuetext":`${s}%`,onChange:h=>t(h.target.valueAsNumber)})]})]})}function Bw({spacing:s,activeLayer:t,onLayerHover:i}){return $t.jsx("div",{className:"static-layer-view",role:"img","aria-label":"工牌五层分解图，从左到右从背面到表面",children:$t.jsx("div",{className:"static-layer-stack",style:{"--gap-scale":.43+s*.007},children:sc.map(({id:r},l)=>$t.jsx("div",{className:`static-layer static-layer-${r}`,style:{"--depth":l-2},"data-active":r===t,onPointerEnter:c=>{c.pointerType!=="touch"&&i(r)},onPointerLeave:()=>i(null),children:Ma[r]&&$t.jsx("img",{src:Ma[r],alt:""})},r))})})}function Fw(){const s=Fn.useRef(null),t=Fn.useRef(null),[i,r]=Fn.useState(!1),[l,c]=Fn.useState(!1),[h,d]=Fn.useState(!1),[m,p]=Fn.useState(60),[v,g]=Fn.useState(null),[_,S]=Fn.useState(null),[E,C]=Fn.useState(null),M=v??_??E,x=h&&sc.find(z=>z.id===M),N=Fn.useCallback(()=>{d(!1),g(null),S(null),C(null)},[]);Fn.useEffect(()=>{if(!h)return;const z=P=>{P.key==="Escape"&&(N(),t.current?.focus())};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[h,N]);function U(){i?c(z=>!z):s.current?.flip()}function T(){i?c(!1):s.current?.reset()}return $t.jsxs("div",{className:"page",children:[$t.jsxs("header",{className:"masthead",children:[$t.jsxs("span",{className:"wordmark",children:[$t.jsx("span",{className:"wordmark-shape","aria-hidden":"true"}),"形状研究所"]}),$t.jsxs("a",{className:"source-link",href:"https://reactbits.dev/components/lanyard",target:"_blank",rel:"noreferrer",children:["React Bits ",$t.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),$t.jsxs("main",{className:"layout",children:[$t.jsxs("section",{className:"intro","aria-labelledby":"heading",children:[$t.jsxs("div",{className:"intro-copy",children:[$t.jsx("h1",{id:"heading",children:"几何挂绳"}),$t.jsx("p",{className:"description",id:"instructions",children:h?$t.jsxs($t.Fragment,{children:[$t.jsx("span",{className:"hover-hint",children:"悬停层片查看材质。"}),$t.jsx("span",{className:"touch-hint",children:"点选层级查看材质。"}),$t.jsx("span",{className:"no-break",children:"拖动滑块调整层距。"})]}):i?"当前浏览器无法显示 3D。可以翻面或查看分层。":$t.jsxs($t.Fragment,{children:["拖动卡片，松手让它自然摆动。",$t.jsx("span",{className:"no-break",children:"点击卡片可以翻面。"})]})}),$t.jsxs("div",{className:"view-switch",role:"group","aria-label":"预览模式",children:[$t.jsx("button",{ref:t,type:"button","aria-pressed":!h,onClick:N,children:"挂绳预览"}),$t.jsx("button",{type:"button","aria-pressed":h,onClick:()=>d(!0),children:"分层展示"})]})]}),$t.jsx("div",{className:"intro-tools",children:h?$t.jsx(Iw,{spacing:m,onSpacing:p,activeLayer:M,pinnedLayer:E,onPreview:S,onPin:z=>C(P=>P===z?null:z)}):$t.jsxs($t.Fragment,{children:[$t.jsxs("div",{className:"samples",role:"group","aria-label":"卡面图案",children:[$t.jsx(wx,{image:Ma.front,label:"正面"}),$t.jsx(wx,{image:Ma.back,label:"背面"})]}),$t.jsxs("div",{className:"controls",role:"group","aria-label":"卡片操作",children:[$t.jsxs("button",{className:"button button-primary",type:"button",onClick:U,children:[$t.jsx("span",{className:"button-icon","aria-hidden":"true",children:"⇄"}),"翻面"]}),$t.jsxs("button",{className:"button",type:"button",onClick:T,children:[$t.jsx("span",{className:"button-icon","aria-hidden":"true",children:"↺"}),"重置"]})]})]})})]}),$t.jsxs("section",{className:"stage","aria-label":h?"工牌分层图":"挂绳预览画面","aria-describedby":"instructions",children:[$t.jsxs("div",{className:"stage-guides","aria-hidden":"true",children:[$t.jsx("i",{}),$t.jsx("i",{}),$t.jsx("i",{}),$t.jsx("i",{})]}),i&&h&&$t.jsx(Bw,{spacing:m,activeLayer:M,onLayerHover:g}),i&&!h&&$t.jsxs("div",{className:"static-lanyard",children:[$t.jsx("div",{className:"static-band","aria-hidden":"true"}),$t.jsx("img",{src:l?Ma.back:Ma.front,alt:l?"卡片背面":"卡片正面"})]}),!i&&$t.jsx(Pw,{frontImage:Ma.front,backImage:Ma.back,foilImage:Ma.foil,layerView:h,layerSpacing:m/100,activeLayer:M,onLayerHover:g,strapImage:Ma.strap,cardColor:"#f5e7d0",finish:"matte",size:.52,strapLength:.56,strapWidth:.82,breeze:0,intro:!1,controlsRef:s,onUnavailable:()=>r(!0)}),x&&$t.jsxs("div",{className:"stage-layer-label","aria-hidden":"true",children:[$t.jsx("span",{className:"layer-dot",style:{backgroundColor:x.color}}),$t.jsx("strong",{children:x.name}),$t.jsx("span",{className:"layer-detail",children:x.detail})]})]})]})]})}lT.createRoot(document.getElementById("root")).render($t.jsx(Fw,{}));
