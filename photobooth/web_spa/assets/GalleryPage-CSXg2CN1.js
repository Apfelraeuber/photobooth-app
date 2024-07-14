import{G as y,Q as P}from"./GalleryImageDetail-CZBdO_Fj.js";import{S as k,T as q,v as C,r as _,U as p,d as m,t as h,V as B,W as G,P as E,_ as M,J as Q,l as V,R as j,m as L,f as l,n as S,p as g,h as c,F as T,G as N,q as v,X as F,Y as H,B as b,Z as O,$ as R}from"./index-DRjrqP2n.js";import{Q as U}from"./QPage-DehTzyWC.js";import"./QHeader-R0Sb2Hib.js";import"./QLayout-Cvi1VVsC.js";import"./QLinearProgress-BOAkyrW0.js";import"./use-panel-Bu0Y81GG.js";import"./QMenu-B6l-unom.js";import"./format-CJebrXOQ.js";import"./open-url-DucgKAqh.js";import"./QPageSticky-Boo_bK7O.js";import"./QBtnDropdown-D18y_1nA.js";import"./use-id-Bn6bWqLW.js";const I={threshold:0,root:null,rootMargin:"0px"};function D(e,t,i){let o,s,n;typeof i=="function"?(o=i,s=I,n=t.cfg===void 0):(o=i.handler,s=Object.assign({},I,i.cfg),n=t.cfg===void 0||q(t.cfg,s)===!1),t.handler!==o&&(t.handler=o),n===!0&&(t.cfg=s,t.observer!==void 0&&t.observer.unobserve(e),t.observer=new IntersectionObserver(([a])=>{if(typeof t.handler=="function"){if(a.rootBounds===null&&document.body.contains(e)===!0){t.observer.unobserve(e),t.observer.observe(e);return}(t.handler(a,t.observer)===!1||t.once===!0&&a.isIntersecting===!0)&&w(e)}},s),t.observer.observe(e))}function w(e){const t=e.__qvisible;t!==void 0&&(t.observer!==void 0&&t.observer.unobserve(e),delete e.__qvisible)}const Y=k({name:"intersection",mounted(e,{modifiers:t,value:i}){const o={once:t.once===!0};D(e,o,i),e.__qvisible=o},updated(e,t){const i=e.__qvisible;i!==void 0&&D(e,i,t.value)},beforeUnmount:w}),A=C({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:t,emit:i}){const o=_(p.value===!0?e.ssrPrerender:!1),s=m(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:d,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:d),n=m(()=>e.disable!==!0&&(p.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),a=m(()=>[[Y,s.value,void 0,{once:e.once}]]),r=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function d(u){o.value!==u.isIntersecting&&(o.value=u.isIntersecting,e.onVisibility!==void 0&&i("visibility",o.value))}function f(){if(o.value===!0)return[h("div",{key:"content",style:r.value},E(t.default))];if(t.hidden!==void 0)return[h("div",{key:"hidden",style:r.value},t.hidden())]}return()=>{const u=e.transition?[h(B,{name:"q-transition--"+e.transition},f)]:f();return G(e.tag,{class:"q-intersection"},u,"main",n.value,()=>a.value)}}}),z={components:{GalleryImageDetail:y},setup(){const e=Q(),t=V(),i=j();return{store:e,configurationStore:t,mediacollectionStore:i,GalleryImageDetail:y,indexSelected:_(null),showImageDetail:_(!1)}},computed:{itemId(){return this.$route.params.id},isGalleryEmpty(){return this.mediacollectionStore.collection_number_of_items==0}},watch:{itemId(e){const t=this.mediacollectionStore.getIndexOfItemId(e);t==-1?console.error(`image id not found ${e}`):this.openPic(t)}},mounted(){},methods:{getImageDetail(e,t="thumbnail"){return this.mediacollectionStore.collection[e][t]},openPic(e){this.indexSelected=e,this.showImageDetail=!0}}},J=e=>(O("data-v-056b5c3b"),e=e(),R(),e),W={key:0,class:"row justify-center q-gutter-sm"},X={key:0},Z={key:1},x=J(()=>b("div",{style:{"padding-bottom":"100%"}},null,-1)),K={class:"absolute-full"},$=["src"],ee=["innerHTML"];function te(e,t,i,o,s,n){const a=L("gallery-image-detail");return l(),S(U,{id:"gallery-page",padding:""},{default:g(()=>[n.isGalleryEmpty?(l(),c("div",{key:1,innerHTML:o.configurationStore.getConfigElement("uisettings.GALLERY_EMPTY_MSG")},null,8,ee)):(l(),c("div",W,[(l(!0),c(T,null,N(o.mediacollectionStore.collection,(r,d)=>(l(),S(A,{key:r.id,once:"",class:"preview-item"},{default:g(()=>[v(H,{class:"q-ma-xs no-shadow",onClick:f=>n.openPic(d)},{default:g(()=>[r.media_type!="video"?(l(),c("div",X,[v(P,{src:n.getImageDetail(d),loading:"eager","no-transition":"","no-spinner":"",ratio:1,class:"rounded-borders"},null,8,["src"])])):(l(),c("div",Z,[x,b("div",K,[b("video",{style:{width:"100%",height:"100%","object-fit":"cover","object-position":"50% 50%"},autoplay:"",loop:"",muted:"",playsinline:"",src:n.getImageDetail(d),class:"rounded-borders"},null,8,$)])]))]),_:2},1032,["onClick"])]),_:2},1024))),128))])),v(F,{modelValue:o.showImageDetail,"onUpdate:modelValue":t[1]||(t[1]=r=>o.showImageDetail=r),"transition-show":"jump-up","transition-hide":"jump-down",maximized:""},{default:g(()=>[v(a,{"item-repository":o.mediacollectionStore.collection,"index-selected":o.indexSelected,class:"full-height",onCloseEvent:t[0]||(t[0]=r=>o.showImageDetail=!1)},null,8,["item-repository","index-selected"])]),_:1},8,["modelValue"])]),_:1})}const fe=M(z,[["render",te],["__scopeId","data-v-056b5c3b"],["__file","GalleryPage.vue"]]);export{fe as default};
