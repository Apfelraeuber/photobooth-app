"use strict";(globalThis["webpackChunkqPhotobooth"]=globalThis["webpackChunkqPhotobooth"]||[]).push([[765],{3288:(e,t,i)=>{i.d(t,{Z:()=>H});var l=i(9835),a=i(6970);const r={class:"q-mr-sm"},n={class:"q-mr-sm"},o={class:"absolute-bottom-left text-subtitle2"},s={class:"q-gutter-sm"};function d(e,t,i,d,m,g){const c=(0,l.up)("q-btn"),u=(0,l.up)("q-space"),h=(0,l.up)("q-icon"),p=(0,l.up)("q-toolbar"),w=(0,l.up)("q-linear-progress"),I=(0,l.up)("q-header"),y=(0,l.up)("q-img"),v=(0,l.up)("q-drawer"),S=(0,l.up)("q-carousel-slide"),f=(0,l.up)("q-carousel"),b=(0,l.up)("vue-qrcode"),q=(0,l.up)("q-page-sticky"),_=(0,l.up)("q-page-container"),x=(0,l.up)("q-layout"),D=(0,l.Q2)("close-popup"),k=(0,l.Q2)("touch-swipe");return(0,l.wg)(),(0,l.j4)(x,{view:"hhh Lpr ffr",onClick:g.abortTimer},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{elevated:"",class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(c,{flat:"",class:"q-mr-sm",icon:"delete",label:"Delete",onClick:t[0]||(t[0]=e=>g.deleteImage(d.currentSlideId))},null,512),[[D]]),(0,l.Wm)(c,{flat:"",class:"q-mr-sm",icon:"download",label:"Download",onClick:t[1]||(t[1]=e=>{d.openURL(d.store.gallery.images[d.currentSlideIndex]["full"])})}),(0,l.Wm)(c,{flat:"",class:"q-mr-sm",icon:"print",label:"Print"}),(0,l.Wm)(c,{flat:"",class:"q-mr-sm",icon:"filter",label:"Filter",onClick:d.toggleRightDrawer},null,8,["onClick"]),(0,l.Wm)(u),(0,l._)("div",r,[(0,l.Wm)(h,{name:"tag"}),(0,l._)("span",null,(0,a.zw)(d.currentSlideIndex+1)+" of "+(0,a.zw)(d.store.gallery.images.length)+" total",1)]),(0,l.Wm)(u),(0,l._)("div",n,[(0,l.Wm)(h,{name:"image"}),(0,l.Uk)(" "+(0,a.zw)(d.store.gallery.images[d.currentSlideIndex]["caption"]),1)]),(0,l.Wm)(u),(0,l.wy)((0,l.Wm)(c,{dense:"",flat:"",icon:"close"},null,512),[[D]])])),_:1}),m.displayLinearProgressBar&&m.remainingSeconds>0?((0,l.wg)(),(0,l.j4)(w,{key:0,value:m.remainingSecondsNormalized,"animation-speed":"200",color:"grey"},null,8,["value"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(v,{modelValue:d.rightDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=e=>d.rightDrawerOpen=e),side:"right",elevated:"",overlay:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.availableFilter,(e=>((0,l.wg)(),(0,l.j4)(y,{src:`/mediaprocessing/preview/${d.currentSlideId}/${e}`,key:e},{default:(0,l.w5)((()=>[(0,l._)("div",o,(0,a.zw)(e),1)])),_:2},1032,["src"])))),128))])),_:1},8,["modelValue"]),(0,l.Wm)(_,{class:"q-pa-none galleryimagedetail full-height"},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(f,{class:"bg-image",style:{width:"100%",height:"100%"},"control-type":"flat","control-color":"primary",swipeable:"",animated:"",modelValue:d.currentSlideId,"onUpdate:modelValue":t[3]||(t[3]=e=>d.currentSlideId=e),thumbnails:"",autoplay:d.autoplay,draggable:"false",arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onTransition:t[4]||(t[4]=(e,t)=>{d.currentSlideIndex=d.store.gallery.images.findIndex((t=>t.id===e)),g.abortTimer()})},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.slicedImages,(e=>((0,l.wg)(),(0,l.j4)(S,{"img-src":e.preview,key:e.id,name:e.id},null,8,["img-src","name"])))),128))])),_:1},8,["modelValue","autoplay"])),[[k,d.handleSwipeDown,void 0,{mouse:!0,down:!0}]]),(0,l.Wm)(q,{position:"top-right",offset:[30,30]},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(b,{type:"image/png",tag:"svg",margin:2,width:200,"error-correction-level":"low",color:{dark:"#111111",light:"#EEEEEE"},value:g.getImageQrData()},null,8,["value"])])])),_:1})])),_:1})])),_:1},8,["onClick"])}i(8964),i(9665);var m=i(528),g=i(499),c=i(7575),u=i(6694),h=i(3752);const p={props:{indexSelected:{type:Number,required:!0}},computed:{slicedImages(){this.store.gallery.images.length;var e=Math.max(0,this.currentSlideIndex-2),t=Math.max(0,this.currentSlideIndex+3);return this.store.gallery.images.slice(e,t)}},beforeCreate(){console.log(this.indexSelected),this.currentSlideIndex=this.indexSelected,this.currentSlideId=this.store.gallery.images[this.indexSelected].id},data(){return{intervalTimerId:null,remainingSeconds:0,remainingSecondsNormalized:0,displayLinearProgressBar:!0,availableFilter:["original","_1977","aden","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"]}},setup(){const e=(0,c.h)(),t=(0,u.R)(),i=(0,g.iH)(!1);return{store:e,uiSettingsStore:t,openURL:h.Z,fabRight:(0,g.iH)(!1),currentSlideId:(0,g.iH)(""),currentSlideIndex:(0,g.iH)(0),autoplay:(0,g.iH)(!1),showFilterDialog:(0,g.iH)(!1),rightDrawerOpen:i,toggleRightDrawer(){i.value=!i.value},handleSwipeDown({evt:e}){console.log("TODO: add method to close dialog programmatically")}}},components:{VueQrcode:m.ZP},mounted(){this.startTimer()},beforeUnmount(){clearInterval(this.intervalTimerId)},methods:{deleteImage(e){this.$api.get("/mediacollection/delete",{params:{image_id:e}}).then((e=>{console.log(e),this.store.gallery.images.splice(this.currentSlideIndex,1)})).catch((e=>console.log(e)))},getImageDetail(e,t="thumbnail"){return this.store.gallery.images[e][t]},getImageQrData(){const e=String(this.uiSettingsStore.uiSettings.EXT_DOWNLOAD_URL).replace("{filename}",this.store.gallery.images[this.currentSlideIndex]["filename"]);return e},abortTimer(){clearInterval(this.intervalTimerId),this.remainingSeconds=0,this.remainingSecondsNormalized=0},startTimer(){var e=this.uiSettingsStore.uiSettings["AUTOCLOSE_NEW_ITEM_ARRIVED"];console.log(`starting newitemarrived timer, duration=${e}`),this.remainingSeconds=e,this.intervalTimerId=setInterval((()=>{this.remainingSecondsNormalized=this.remainingSeconds/e,this.remainingSeconds-=.05,this.remainingSeconds<=0&&(clearInterval(this.intervalTimerId),this.$router.push({path:"/"}))}),50)}}};var w=i(1639),I=i(7605),y=i(6602),v=i(1663),S=i(8879),f=i(136),b=i(2857),q=i(8289),_=i(906),x=i(335),D=i(2133),k=i(7052),Z=i(1694),Q=i(627),W=i(2146),T=i(4871),C=i(9984),P=i.n(C);const j=(0,w.Z)(p,[["render",d],["__scopeId","data-v-0870448c"]]),H=j;P()(p,"components",{QLayout:I.Z,QHeader:y.Z,QToolbar:v.Z,QBtn:S.Z,QSpace:f.Z,QIcon:b.Z,QLinearProgress:q.Z,QDrawer:_.Z,QImg:x.Z,QPageContainer:D.Z,QCarousel:k.Z,QCarouselSlide:Z.Z,QPageSticky:Q.Z}),P()(p,"directives",{ClosePopup:W.Z,TouchSwipe:T.Z})},1765:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var l=i(9835),a=i(6970);const r={class:"row justify-center q-gutter-sm"},n={class:"absolute-bottom text-subtitle2"};function o(e,t,i,o,s,d){const m=(0,l.up)("q-img"),g=(0,l.up)("q-card"),c=(0,l.up)("q-intersection"),u=(0,l.up)("gallery-image-detail"),h=(0,l.up)("q-dialog"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{padding:""},{default:(0,l.w5)((()=>[(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.store.gallery.images,((e,t)=>((0,l.wg)(),(0,l.j4)(c,{key:e.id,once:"",class:"preview-item"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{class:"q-ma-sm",onClick:e=>d.openPic(t)},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{src:d.getImageDetail(t),loading:"eager","no-transition":"","no-spinner":"",ratio:1},{default:(0,l.w5)((()=>[(0,l._)("div",n,(0,a.zw)(this.store.gallery.images[t].caption),1)])),_:2},1032,["src"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))]),(0,l.Wm)(h,{"transition-show":"jump-up","transition-hide":"jump-down",modelValue:o.showImageDetail,"onUpdate:modelValue":t[0]||(t[0]=e=>o.showImageDetail=e),maximized:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{indexSelected:o.indexSelected,class:"full-height"},null,8,["indexSelected"])])),_:1},8,["modelValue"])])),_:1})}var s=i(7575),d=i(499),m=i(3288);const g={components:{GalleryImageDetail:m.Z},setup(){const e=(0,s.h)();return{store:e,GalleryImageDetail:m.Z,indexSelected:(0,d.iH)(null),showImageDetail:(0,d.iH)(!1)}},computed:{numberOfImages:{get(){return console.log(Object.keys(this.store.gallery["images"]).length),Object.keys(this.store.gallery["images"]).length}},itemId(){return this.$route.params.id}},mounted(){this.$api.get("/mediacollection/getitems").then((e=>{if(console.log(e),this.store.gallery.images=e.data,this.itemId){console.log(`initial id given, try loading image id: ${this.itemId}`);const e=this.store.gallery.images.findIndex((e=>e.id===this.itemId));-1!=e?(console.log(`found image at index no: ${e}`),this.openPic(e)):console.error(`initial id given not found: ${this.itemId}`)}})).catch((e=>console.log(e)))},methods:{getImageDetail(e,t="thumbnail"){return this.store.gallery.images[e][t]},openPic(e){console.log(e),this.indexSelected=e,this.showImageDetail=!0}}};var c=i(1639),u=i(9885),h=i(1517),p=i(4458),w=i(335),I=i(2074),y=i(9984),v=i.n(y);const S=(0,c.Z)(g,[["render",o],["__scopeId","data-v-65e2632c"]]),f=S;v()(g,"components",{QPage:u.Z,QIntersection:h.Z,QCard:p.Z,QImg:w.Z,QDialog:I.Z})}}]);