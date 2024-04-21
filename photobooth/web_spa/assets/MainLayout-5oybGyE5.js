import{Q as D,a as O}from"./QLayout-BUNcLbTd.js";import{i as $,r as d,w,g as N,o as x,u as I,a as V,_ as q,c as W,d as M,e as B,f as A,h as P,j as Q,k as G,l as U,m as k,n as C,p as E,q as R,s as H}from"./index-qCctZCbU.js";import{u as z}from"./use-quasar-IbWlUTST.js";function h(e){return N()?(x(e),!0):!1}function _(e){return typeof e=="function"?e():I(e)}const S=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const J=Object.prototype.toString,K=e=>J.call(e)==="[object Object]",g=()=>+Date.now(),T=()=>{};function X(e,i){function t(...n){return new Promise((o,s)=>{Promise.resolve(e(()=>i.apply(this,n),{fn:i,thisArg:this,args:n})).then(o).catch(s)})}return t}function Y(...e){let i=0,t,n=!0,o=T,s,a,r,u,c;!$(e[0])&&typeof e[0]=="object"?{delay:a,trailing:r=!0,leading:u=!0,rejectOnCancel:c=!1}=e[0]:[a,r=!0,u=!0,c=!1]=e;const l=()=>{t&&(clearTimeout(t),t=void 0,o(),o=T)};return f=>{const p=_(a),v=Date.now()-i,y=()=>s=f();return l(),p<=0?(i=Date.now(),y()):(v>p&&(u||!n)?(i=Date.now(),y()):r&&(s=new Promise((F,j)=>{o=c?j:F,t=setTimeout(()=>{i=Date.now(),n=!0,F(y()),l()},Math.max(0,p-v))})),!u&&!t&&(t=setTimeout(()=>n=!0,p)),n=!1,s)}}function Z(e,i=1e3,t={}){const{immediate:n=!0,immediateCallback:o=!1}=t;let s=null;const a=d(!1);function r(){s&&(clearInterval(s),s=null)}function u(){a.value=!1,r()}function c(){const l=_(i);l<=0||(a.value=!0,o&&e(),r(),s=setInterval(e,l))}if(n&&S&&c(),$(i)||typeof i=="function"){const l=w(i,()=>{a.value&&S&&c()});h(l)}return h(u),{isActive:a,pause:u,resume:c}}function ee(e){var i;const t=_(e);return(i=t?.$el)!=null?i:t}const b=S?window:void 0;function L(...e){let i,t,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,n,o]=e,i=b):[i,t,n,o]=e,!i)return T;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const s=[],a=()=>{s.forEach(l=>l()),s.length=0},r=(l,m,f,p)=>(l.addEventListener(m,f,p),()=>l.removeEventListener(m,f,p)),u=w(()=>[ee(i),_(o)],([l,m])=>{if(a(),!l)return;const f=K(m)?{...m}:m;s.push(...t.flatMap(p=>n.map(v=>r(l,p,v,f))))},{immediate:!0,flush:"post"}),c=()=>{u(),a()};return h(c),c}function te(e,i={}){const{immediate:t=!0,fpsLimit:n=void 0,window:o=b}=i,s=d(!1),a=n?1e3/n:null;let r=0,u=null;function c(f){if(!s.value||!o)return;r||(r=f);const p=f-r;if(a&&p<a){u=o.requestAnimationFrame(c);return}r=f,e({delta:p,timestamp:f}),u=o.requestAnimationFrame(c)}function l(){!s.value&&o&&(s.value=!0,r=0,u=o.requestAnimationFrame(c))}function m(){s.value=!1,u!=null&&o&&(o.cancelAnimationFrame(u),u=null)}return t&&l(),h(m),{isActive:V(s),pause:m,resume:l}}const ne=["mousemove","mousedown","resize","keydown","touchstart","wheel"],oe=6e4;function ie(e=oe,i={}){const{initialState:t=!1,listenForVisibilityChange:n=!0,events:o=ne,window:s=b,eventFilter:a=Y(50)}=i,r=d(t),u=d(g());let c;const l=()=>{r.value=!1,clearTimeout(c),c=setTimeout(()=>r.value=!0,e)},m=X(a,()=>{u.value=g(),l()});if(s){const f=s.document;for(const p of o)L(s,p,m,{passive:!0});n&&L(f,"visibilitychange",()=>{f.hidden||m()}),l()}return{idle:r,lastActive:u,reset:l}}function se(e={}){const{controls:i=!1,offset:t=0,immediate:n=!0,interval:o="requestAnimationFrame",callback:s}=e,a=d(g()+t),r=()=>a.value=g()+t,u=s?()=>{r(),s(a.value)}:r,c=o==="requestAnimationFrame"?te(u,{immediate:n}):Z(u,o,{immediate:n});return i?{timestamp:a,...c}:a}const re={__name:"RouteAfterTimeout",props:{route:{type:String,required:!0},timeoutMs:{type:Number,required:!0},warningMessage:{type:String,default:"Auto-starting slideshow... Click anywhere to stay on this page."},warningTimeMs:{type:Number,default:1e4}},setup(e){const i=z(),t=W(),n=e,{idle:o,lastActive:s}=ie(n.timeoutMs),a=se({interval:1e3}),r=M(()=>n.timeoutMs-(a.value-s.value)),u=M(()=>n.warningTimeMs>r.value);let c=null;function l(){c=i.notify({progress:!0,message:n.warningMessage,type:"info",multiline:!0,timeout:r.value,icon:"slideshow"})}function m(){c&&c()}return B(()=>{m()}),w(u,f=>{f?l():m()}),w(o,f=>{f&&(m(),t.push({path:n.route}))}),(f,p)=>(A(),P("div"))}},ae=q(re,[["__file","RouteAfterTimeout.vue"]]),ue=Q({name:"MainLayout",components:{RouteAfterTimeout:ae},setup(){const e=G(),i=U(),t=W();return e.$subscribe((n,o)=>{o.state=="counting"&&t.path!="/"&&(console.log("counting state received, pushing to index page to countdown"),t.push("/")),o.state=="present_capture"&&t.push({path:"/itempresenter"}),o.state=="approve_capture"&&o.ask_user_for_approval&&t.push({path:"/itemapproval"})}),{uiSettingsStore:i}},computed:{}});function le(e,i,t,n,o,s){const a=k("router-view"),r=k("RouteAfterTimeout");return A(),C(O,{view:"hHh lpR fFf"},{default:E(()=>[R(D,null,{default:E(()=>[R(a),e.uiSettingsStore.uiSettings.show_automatic_slideshow_timeout>0?(A(),C(r,{key:0,route:"/slideshow/random","timeout-ms":e.uiSettingsStore.uiSettings.show_automatic_slideshow_timeout*1e3,"warning-message":e.$t("MSG_WARN_BEFORE_AUTO_SLIDESHOW")},null,8,["timeout-ms","warning-message"])):H("",!0)]),_:1})]),_:1})}const pe=q(ue,[["render",le],["__file","MainLayout.vue"]]);export{pe as default};
