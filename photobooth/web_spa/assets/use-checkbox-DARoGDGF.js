import{j as de,g as ue,k as fe,l as ve,m as ge,n as me,o as ne,p as he,h as ke}from"./QSelect-D0kh798T.js";import{r as W,w as N,ax as H,aY as xe,d as g,v as ee,a2 as G,e as ye,a5 as be,t as P,al as we,ad as le,a$ as Me,ag as te,ah as ae,S as se,aA as Se,a9 as Ce,az as Ve,b0 as U,ae as re}from"./index-DqFHTPDN.js";const ie={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},X={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ce=Object.keys(X);ce.forEach(e=>{X[e].regex=new RegExp(X[e].pattern)});const Fe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ce.join("")+"])|(.)","g"),oe=/[.*+?^${}()|[\]\\]/g,S="",Re={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ee(e,b,r,k){let s,c,w,$,F,h;const M=W(null),f=W(R());function z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,T),N(()=>e.mask,l=>{if(l!==void 0)O(f.value,!0);else{const n=A(f.value);T(),e.modelValue!==n&&b("update:modelValue",n)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{M.value===!0&&O(f.value,!0)}),N(()=>e.unmaskedValue,()=>{M.value===!0&&O(f.value)});function R(){if(T(),M.value===!0){const l=_(A(e.modelValue));return e.fillMask!==!1?Z(l):l}return e.modelValue}function V(l){if(l<s.length)return s.slice(-l);let n="",i=s;const t=i.indexOf(S);if(t!==-1){for(let o=l-i.length;o>0;o--)n+=S;i=i.slice(0,t)+n+i.slice(t)}return i}function T(){if(M.value=e.mask!==void 0&&e.mask.length!==0&&z(),M.value===!1){$=void 0,s="",c="";return}const l=ie[e.mask]===void 0?e.mask:ie[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=n.replace(oe,"\\$&"),t=[],o=[],u=[];let y=e.reverseFillMask===!0,d="",v="";l.replace(Fe,(C,a,x,j,I)=>{if(j!==void 0){const q=X[j];u.push(q),v=q.negate,y===!0&&(o.push("(?:"+v+"+)?("+q.pattern+"+)?(?:"+v+"+)?("+q.pattern+"+)?"),y=!1),o.push("(?:"+v+"+)?("+q.pattern+")?")}else if(x!==void 0)d="\\"+(x==="\\"?"":x),u.push(x),t.push("([^"+d+"]+)?"+d+"?");else{const q=a!==void 0?a:I;d=q==="\\"?"\\\\\\\\":q.replace(oe,"\\\\$&"),u.push(q),t.push("([^"+d+"]+)?"+d+"?")}});const K=new RegExp("^"+t.join("")+"("+(d===""?".":"[^"+d+"]")+"+)?"+(d===""?"":"["+d+"]*")+"$"),D=o.length-1,m=o.map((C,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+C):a===D?new RegExp("^"+C+"("+(v===""?".":v)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+C));w=u,$=C=>{const a=K.exec(e.reverseFillMask===!0?C:C.slice(0,u.length+1));a!==null&&(C=a.slice(1).join(""));const x=[],j=m.length;for(let I=0,q=C;I<j;I++){const Q=m[I].exec(q);if(Q===null)break;q=q.slice(Q.shift().length),x.push(...Q)}return x.length!==0?x.join(""):C},s=u.map(C=>typeof C=="string"?C:S).join(""),c=s.split(S).join(n)}function O(l,n,i){const t=k.value,o=t.selectionEnd,u=t.value.length-o,y=A(l);n===!0&&T();const d=_(y),v=e.fillMask!==!1?Z(d):d,K=f.value!==v;t.value!==v&&(t.value=v),K===!0&&(f.value=v),document.activeElement===t&&H(()=>{if(v===c){const m=e.reverseFillMask===!0?c.length:0;t.setSelectionRange(m,m,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const m=t.selectionEnd;let C=o-1;for(let a=F;a<=C&&a<m;a++)s[a]!==S&&C++;E.right(t,C);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)!==-1){const m=e.reverseFillMask===!0?o===0?v.length>d.length?1:0:Math.max(0,v.length-(v===c?0:Math.min(d.length,u)+1))+1:o;t.setSelectionRange(m,m,"forward");return}if(e.reverseFillMask===!0)if(K===!0){const m=Math.max(0,v.length-(v===c?0:Math.min(d.length,u+1)));m===1&&o===1?t.setSelectionRange(m,m,"forward"):E.rightReverse(t,m)}else{const m=v.length-u;t.setSelectionRange(m,m,"backward")}else if(K===!0){const m=Math.max(0,s.indexOf(S),Math.min(d.length,o)-1);E.right(t,m)}else{const m=o-1;E.right(t,m)}});const D=e.unmaskedValue===!0?A(v):v;String(e.modelValue)!==D&&(e.modelValue!==null||D!=="")&&r(D,!0)}function Y(l,n,i){const t=_(A(l.value));n=Math.max(0,s.indexOf(S),Math.min(t.length,n)),F=n,l.setSelectionRange(n,i,"forward")}const E={left(l,n){const i=s.slice(n-1).indexOf(S)===-1;let t=Math.max(0,n-1);for(;t>=0;t--)if(s[t]===S){n=t,i===!0&&n++;break}if(t<0&&s[n]!==void 0&&s[n]!==S)return E.right(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},right(l,n){const i=l.value.length;let t=Math.min(i,n+1);for(;t<=i;t++)if(s[t]===S){n=t;break}else s[t-1]===S&&(n=t);if(t>i&&s[n-1]!==void 0&&s[n-1]!==S)return E.left(l,i);l.setSelectionRange(n,n,"forward")},leftReverse(l,n){const i=V(l.value.length);let t=Math.max(0,n-1);for(;t>=0;t--)if(i[t-1]===S){n=t;break}else if(i[t]===S&&(n=t,t===0))break;if(t<0&&i[n]!==void 0&&i[n]!==S)return E.rightReverse(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},rightReverse(l,n){const i=l.value.length,t=V(i),o=t.slice(0,n+1).indexOf(S)===-1;let u=Math.min(i,n+1);for(;u<=i;u++)if(t[u-1]===S){n=u,n>0&&o===!0&&n--;break}if(u>i&&t[n-1]!==void 0&&t[n-1]!==S)return E.leftReverse(l,i);l.setSelectionRange(n,n,"forward")}};function p(l){b("click",l),h=void 0}function L(l){if(b("keydown",l),xe(l)===!0||l.altKey===!0)return;const n=k.value,i=n.selectionStart,t=n.selectionEnd;if(l.shiftKey||(h=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&h===void 0&&(h=n.selectionDirection==="forward"?i:t);const o=E[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),o(n,h===i?t:i),l.shiftKey){const u=n.selectionStart;n.setSelectionRange(Math.min(h,u),Math.max(h,u),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===t?(E.left(n,i),n.setSelectionRange(n.selectionStart,t,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===t&&(E.rightReverse(n,t),n.setSelectionRange(i,n.selectionEnd,"forward"))}function _(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return B(l);const n=w;let i=0,t="";for(let o=0;o<n.length;o++){const u=l[i],y=n[o];if(typeof y=="string")t+=y,u===y&&i++;else if(u!==void 0&&y.regex.test(u))t+=y.transform!==void 0?y.transform(u):u,i++;else return t}return t}function B(l){const n=w,i=s.indexOf(S);let t=l.length-1,o="";for(let u=n.length-1;u>=0&&t!==-1;u--){const y=n[u];let d=l[t];if(typeof y=="string")o=y+o,d===y&&t--;else if(d!==void 0&&y.regex.test(d))do o=(y.transform!==void 0?y.transform(d):d)+o,t--,d=l[t];while(i===u&&d!==void 0&&y.regex.test(d));else return o}return o}function A(l){return typeof l!="string"||$===void 0?typeof l=="number"?$(""+l):l:$(l)}function Z(l){return c.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?c.slice(0,-l.length)+l:l+c.slice(l.length)}return{innerValue:f,hasMask:M,moveCursorForPaste:Y,updateMaskValue:O,onMaskedKeydown:L,onMaskedClick:p}}function Ae(e,b){function r(){const k=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(k)===k&&("length"in k?Array.from(k):[k]).forEach(c=>{s.items.add(c)}),{files:s.files}}catch{return{files:void 0}}}return b===!0?g(()=>{if(e.type==="file")return r()}):g(r)}const Be=ee({name:"QInput",inheritAttrs:!1,props:{...de,...Re,...ue,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...fe,"paste","change","keydown","click","animationend"],setup(e,{emit:b,attrs:r}){const{proxy:k}=G(),{$q:s}=k,c={};let w=NaN,$,F,h=null,M;const f=W(null),z=ve(e),{innerValue:R,hasMask:V,moveCursorForPaste:T,updateMaskValue:O,onMaskedKeydown:Y,onMaskedClick:E}=Ee(e,b,d,f),p=Ae(e,!0),L=g(()=>ne(R.value)),_=he(u),B=ge(),A=g(()=>e.type==="textarea"||e.autogrow===!0),Z=g(()=>A.value===!0||["text","search","url","tel","password"].includes(e.type)),l=g(()=>{const a={...B.splitAttrs.listeners.value,onInput:u,onPaste:o,onChange:K,onBlur:D,onFocus:le};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=_,V.value===!0&&(a.onKeydown=Y,a.onClick=E),e.autogrow===!0&&(a.onAnimationend=y),a}),n=g(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:z.value,...B.splitAttrs.attributes.value,id:B.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return A.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});N(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),N(()=>e.modelValue,a=>{if(V.value===!0){if(F===!0&&(F=!1,String(a)===w))return;O(a)}else R.value!==a&&(R.value=a,e.type==="number"&&c.hasOwnProperty("value")===!0&&($===!0?$=!1:delete c.value));e.autogrow===!0&&H(v)}),N(()=>e.autogrow,a=>{a===!0?H(v):f.value!==null&&r.rows>0&&(f.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&H(v)});function i(){Me(()=>{const a=document.activeElement;f.value!==null&&f.value!==a&&(a===null||a.id!==B.targetUid.value)&&f.value.focus({preventScroll:!0})})}function t(){f.value!==null&&f.value.select()}function o(a){if(V.value===!0&&e.reverseFillMask!==!0){const x=a.target;T(x,x.selectionStart,x.selectionEnd)}b("paste",a)}function u(a){if(!a||!a.target)return;if(e.type==="file"){b("update:modelValue",a.target.files);return}const x=a.target.value;if(a.target.qComposing===!0){c.value=x;return}if(V.value===!0)O(x,!1,a.inputType);else if(d(x),Z.value===!0&&a.target===document.activeElement){const{selectionStart:j,selectionEnd:I}=a.target;j!==void 0&&I!==void 0&&H(()=>{a.target===document.activeElement&&x.indexOf(a.target.value)===0&&a.target.setSelectionRange(j,I)})}e.autogrow===!0&&v()}function y(a){b("animationend",a),v()}function d(a,x){M=()=>{h=null,e.type!=="number"&&c.hasOwnProperty("value")===!0&&delete c.value,e.modelValue!==a&&w!==a&&(w=a,x===!0&&(F=!0),b("update:modelValue",a),H(()=>{w===a&&(w=NaN)})),M=void 0},e.type==="number"&&($=!0,c.value=a),e.debounce!==void 0?(h!==null&&clearTimeout(h),c.value=a,h=setTimeout(M,e.debounce)):M()}function v(){requestAnimationFrame(()=>{const a=f.value;if(a!==null){const x=a.parentNode.style,{scrollTop:j}=a,{overflowY:I,maxHeight:q}=s.platform.is.firefox===!0?{}:window.getComputedStyle(a),Q=I!==void 0&&I!=="scroll";Q===!0&&(a.style.overflowY="hidden"),x.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",Q===!0&&(a.style.overflowY=parseInt(q,10)<a.scrollHeight?"auto":"hidden"),x.marginBottom="",a.scrollTop=j}})}function K(a){_(a),h!==null&&(clearTimeout(h),h=null),M!==void 0&&M(),b("change",a.target.value)}function D(a){a!==void 0&&le(a),h!==null&&(clearTimeout(h),h=null),M!==void 0&&M(),$=!1,F=!1,delete c.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=R.value!==void 0?R.value:"")})}function m(){return c.hasOwnProperty("value")===!0?c.value:R.value!==void 0?R.value:""}ye(()=>{D()}),be(()=>{e.autogrow===!0&&v()}),Object.assign(B,{innerValue:R,fieldClass:g(()=>`q-${A.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:g(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:d,hasValue:L,floatingLabel:g(()=>L.value===!0&&(e.type!=="number"||isNaN(R.value)===!1)||ne(e.displayValue)),getControl:()=>P(A.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...l.value,...e.type!=="file"?{value:m()}:p.value}),getShadowControl:()=>P("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(A.value===!0?"":" text-no-wrap")},[P("span",{class:"invisible"},m()),P("span",e.shadowText)])});const C=me(B);return Object.assign(k,{focus:i,select:t,getNativeElement:()=>f.value}),we(k,"nativeEl",()=>f.value),C}}),qe={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},J={xs:2,sm:4,md:8,lg:16,xl:24},Pe=ee({name:"QSeparator",props:{...te,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const b=G(),r=ae(e,b.proxy.$q),k=g(()=>e.vertical===!0?"vertical":"horizontal"),s=g(()=>` q-separator--${k.value}`),c=g(()=>e.inset!==!1?`${s.value}-${qe[e.inset]}`:""),w=g(()=>`q-separator${s.value}${c.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?" q-separator--dark":"")),$=g(()=>{const F={};if(e.size!==void 0&&(F[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const h=e.spaced===!0?`${J.md}px`:e.spaced in J?`${J[e.spaced]}px`:e.spaced,M=e.vertical===!0?["Left","Right"]:["Top","Bottom"];F[`margin${M[0]}`]=F[`margin${M[1]}`]=h}return F});return()=>P("hr",{class:w.value,style:$.value,"aria-orientation":k.value})}}),ze=ee({name:"QList",props:{...te,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:b}){const r=G(),k=ae(e,r.proxy.$q),s=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(k.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>P(e.tag,{class:s.value},se(b.default))}});function $e(e,b){const r=W(null),k=g(()=>e.disable===!0?null:P("span",{ref:r,class:"no-outline",tabindex:-1}));function s(c){const w=b.value;c!==void 0&&c.type.indexOf("key")===0?w!==null&&document.activeElement!==w&&w.contains(document.activeElement)===!0&&w.focus():r.value!==null&&(c===void 0||w!==null&&w.contains(c.target)===!0)&&r.value.focus()}return{refocusTargetEl:k,refocusTarget:s}}const Te={xs:30,sm:35,md:40,lg:50,xl:60},je={...te,...Ve,...ue,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},_e=["update:modelValue"];function De(e,b){const{props:r,slots:k,emit:s,proxy:c}=G(),{$q:w}=c,$=ae(r,w),F=W(null),{refocusTargetEl:h,refocusTarget:M}=$e(r,F),f=Se(r,Te),z=g(()=>r.val!==void 0&&Array.isArray(r.modelValue)),R=g(()=>{const t=U(r.val);return z.value===!0?r.modelValue.findIndex(o=>U(o)===t):-1}),V=g(()=>z.value===!0?R.value!==-1:U(r.modelValue)===U(r.trueValue)),T=g(()=>z.value===!0?R.value===-1:U(r.modelValue)===U(r.falseValue)),O=g(()=>V.value===!1&&T.value===!1),Y=g(()=>r.disable===!0?-1:r.tabindex||0),E=g(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(r.disable===!0?" disabled":"")+($.value===!0?` q-${e}--dark`:"")+(r.dense===!0?` q-${e}--dense`:"")+(r.leftLabel===!0?" reverse":"")),p=g(()=>{const t=V.value===!0?"truthy":T.value===!0?"falsy":"indet",o=r.color!==void 0&&(r.keepColor===!0||(e==="toggle"?V.value===!0:T.value!==!0))?` text-${r.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${t}${o}`}),L=g(()=>{const t={type:"checkbox"};return r.name!==void 0&&Object.assign(t,{".checked":V.value,"^checked":V.value===!0?"checked":void 0,name:r.name,value:z.value===!0?r.val:r.trueValue}),t}),_=ke(L),B=g(()=>{const t={tabindex:Y.value,role:e==="toggle"?"switch":"checkbox","aria-label":r.label,"aria-checked":O.value===!0?"mixed":V.value===!0?"true":"false"};return r.disable===!0&&(t["aria-disabled"]="true"),t});function A(t){t!==void 0&&(re(t),M(t)),r.disable!==!0&&s("update:modelValue",Z(),t)}function Z(){if(z.value===!0){if(V.value===!0){const t=r.modelValue.slice();return t.splice(R.value,1),t}return r.modelValue.concat([r.val])}if(V.value===!0){if(r.toggleOrder!=="ft"||r.toggleIndeterminate===!1)return r.falseValue}else if(T.value===!0){if(r.toggleOrder==="ft"||r.toggleIndeterminate===!1)return r.trueValue}else return r.toggleOrder!=="ft"?r.trueValue:r.falseValue;return r.indeterminateValue}function l(t){(t.keyCode===13||t.keyCode===32)&&re(t)}function n(t){(t.keyCode===13||t.keyCode===32)&&A(t)}const i=b(V,O);return Object.assign(c,{toggle:A}),()=>{const t=i();r.disable!==!0&&_(t,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const o=[P("div",{class:p.value,style:f.value,"aria-hidden":"true"},t)];h.value!==null&&o.push(h.value);const u=r.label!==void 0?Ce(k.default,[r.label]):se(k.default);return u!==void 0&&o.push(P("div",{class:`q-${e}__label q-anchor--skip`},u)),P("div",{ref:F,class:E.value,...B.value,onClick:A,onKeydown:l,onKeyup:n},o)}}export{ze as Q,_e as a,De as b,Pe as c,Be as d,je as u};