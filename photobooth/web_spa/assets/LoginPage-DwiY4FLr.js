import{v as q,N as F,r as k,a0 as E,a1 as $,a2 as I,a3 as A,t as R,P as j,a4 as D,a5 as Q,a6 as L,a7 as N,a8 as O,j as T,c as K,a9 as M,aa as U,_ as Y,f as z,n as G,p as f,q as d,ab as b,B as g,D as h,I as H,C as J,Y as W}from"./index-B4qxsTvi.js";import{Q as X}from"./QInput-DLdNCidP.js";import{Q as Z}from"./QPage-CXG8IJr_.js";import"./use-key-composition-YGkdf06J.js";import"./use-id-DTuIs2Hk.js";const ee=q({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(o,{slots:m,emit:c}){const i=F(),u=k(null);let s=0;const a=[];function _(e){const l=typeof e=="boolean"?e:o.noErrorFocus!==!0,v=++s,w=(t,n)=>{c(`validation${t===!0?"Success":"Error"}`,n)},C=t=>{const n=t.validate();return typeof n.then=="function"?n.then(r=>({valid:r,comp:t}),r=>({valid:!1,comp:t,err:r})):Promise.resolve({valid:n,comp:t})};return(o.greedy===!0?Promise.all(a.map(C)).then(t=>t.filter(n=>n.valid!==!0)):a.reduce((t,n)=>t.then(()=>C(n).then(r=>{if(r.valid===!1)return Promise.reject(r)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return v===s&&w(!0),!0;if(v===s){const{comp:n,err:r}=t[0];if(r!==void 0&&console.error(r),w(!1,n),l===!0){const V=t.find(({comp:B})=>typeof B.focus=="function"&&D(B.$)===!1);V!==void 0&&V.comp.focus()}}return!1})}function x(){s++,a.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function y(e){e!==void 0&&Q(e);const l=s+1;_().then(v=>{l===s&&v===!0&&(o.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function S(e){e!==void 0&&Q(e),c("reset"),L(()=>{x(),o.autofocus===!0&&o.noResetFocus!==!0&&p()})}function p(){N(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),l=>l.tabIndex!==-1);e?.focus({preventScroll:!0})})}E(O,{bindComponent(e){a.push(e)},unbindComponent(e){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}});let P=!1;return $(()=>{P=!0}),I(()=>{P===!0&&o.autofocus===!0&&p()}),A(()=>{o.autofocus===!0&&p()}),Object.assign(i.proxy,{validate:_,resetValidation:x,submit:y,reset:S,focus:p,getValidationComponents:()=>a}),()=>R("form",{class:"q-form",ref:u,onSubmit:y,onReset:S},j(m.default))}}),te=T({__name:"LoginPage",setup(o,{expose:m}){m();const c=K(),i=M({username:"admin",password:null}),s={router:c,user:i,submit:async()=>{try{await U(i),c.push("/admin")}catch(a){console.error(a)}}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),oe={class:"text-h5 text-weight-bold"},ae={class:""},ne={class:""},se={href:"http://photobooth-app.org/setup/admincenter/",target:"_blank",class:"text-weight-bold",style:{"text-decoration":"none"}};function re(o,m,c,i,u,s){return z(),G(Z,{id:"login-page",class:"flex flex-center"},{default:f(()=>[d(W,{class:"q-pa-md no-shadow login-card",bordered:""},{default:f(()=>[d(ee,{ref:"form",class:"q-gutter-md",onSubmit:i.submit},{default:f(()=>[d(b,{class:"text-center"},{default:f(()=>[g("div",oe,h(o.$t("Sign in")),1),g("div",ae,h(o.$t("Sign in below to access the admin dashboard.")),1)]),_:1}),d(b,null,{default:f(()=>[d(X,{modelValue:i.user.password,"onUpdate:modelValue":m[0]||(m[0]=a=>i.user.password=a),filled:"",type:"password",label:"Password"},null,8,["modelValue"])]),_:1}),d(b,null,{default:f(()=>[d(H,{rounded:"",color:"dark",label:"Sign in",class:"full-width",type:"submit"})]),_:1}),d(b,{class:"text-center"},{default:f(()=>[g("div",ne,[J(h(o.$t("Looking for the default password or issues signing in?"))+" ",1),g("a",se,h(o.$t("Check the documentation.")),1)])]),_:1})]),_:1},512)]),_:1})]),_:1})}const me=Y(te,[["render",re],["__file","LoginPage.vue"]]);export{me as default};