import{_ as T,f as b,n as A,p as s,q as e,H as $,j as S,E as B,F as g,r as u,m as w,B as r,D as m,W as _,X as d,a1 as p,a2 as f,a3 as L,z as n,Q as t,a4 as i}from"./index-qCctZCbU.js";import{Q as I}from"./QPage-DqKdug05.js";import{Q as V}from"./QSelect-Dq0zKYJq.js";import{u as y}from"./vue-i18n.runtime-ChQ4012G.js";import"./rtl-CF_aSVsN.js";import"./QItemLabel-MGwupz4a.js";import"./selection-T5ipdNyY.js";import"./format-CJebrXOQ.js";const R={setup(){const{locale:l,availableLocales:a}=y({useScope:"global"}),v=new Intl.DisplayNames(["en"],{type:"language",languageDisplay:"standard"}),c=a.map(function(C){return{value:C,label:v.of(C)}});return{locale:l,localeOptions:c}},methods:{storeLocale(l){localStorage.setItem("locale",l),console.log("Stored locale: ",l)}}};function q(l,a,v,c,C,N){return b(),A(V,{modelValue:c.locale,"onUpdate:modelValue":[a[0]||(a[0]=E=>c.locale=E),a[1]||(a[1]=E=>N.storeLocale(E))],options:c.localeOptions,label:"Language","emit-value":"","map-options":""},{prepend:s(()=>[e($,{name:"language"})]),_:1},8,["modelValue","options"])}const O=T(R,[["render",q],["__file","LanguageSwitcher.vue"]]),M=S({name:"MainLayout",components:{LanguageSwitcher:O},setup(){return{store:B(),remoteProcedureCall:g,confirm_reboot:u(!1),confirm_shutdown:u(!1),confirm_restart_service:u(!1),confirm_reload_service:u(!1),confirm_install_service:u(!1),confirm_uninstall_service:u(!1),confirm_delete_all:u(!1)}}}),D={class:"text-h5"},k={class:"row"},U={class:"q-ma-sm"},P={class:"text-no-wrap"},Q={class:"q-ml-sm"},h={class:"q-ml-sm"},F={class:"q-ml-sm"},G={class:"q-ml-sm"},H={class:"q-ml-sm"},W={class:"q-ml-sm"},j={class:"text-h5"},z={class:"row"},X={class:"q-ma-sm"},Y={class:"text-no-wrap"},J={class:"q-ml-sm"},K={class:"text-h5"},Z={class:"row"};function x(l,a,v,c,C,N){const E=w("language-switcher");return b(),A(I,{padding:""},{default:s(()=>[e(d,{class:"q-pa-md"},{default:s(()=>[r("div",D,m(l.$t("TITLE_SERVER_CONTROL")),1),r("div",k,[r("div",U,[r("div",P,[e(_,{modelValue:l.confirm_reboot,"onUpdate:modelValue":a[1]||(a[1]=o=>l.confirm_reboot=o)},{default:s(()=>[e(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:s(()=>[e(p,{class:"row items-center"},{default:s(()=>[e(f,{icon:"restart_alt",color:"primary","text-color":"white"}),r("span",Q,m(l.$t("MSG_CONFIRM_REBOOT")),1)]),_:1}),e(L,{align:"right"},{default:s(()=>[n(e(t,{flat:"",label:l.$t("BTN_LABEL_CANCEL"),color:"primary"},null,8,["label"]),[[i]]),n(e(t,{label:l.$t("BTN_LABEL_REBOOT"),color:"primary",onClick:a[0]||(a[0]=o=>l.remoteProcedureCall("/api/system/server/reboot"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:l.confirm_shutdown,"onUpdate:modelValue":a[3]||(a[3]=o=>l.confirm_shutdown=o)},{default:s(()=>[e(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:s(()=>[e(p,{class:"row items-center"},{default:s(()=>[e(f,{icon:"power_settings_new",color:"primary","text-color":"white"}),r("span",h,m(l.$t("MSG_CONFIRM_SHUTDOWN")),1)]),_:1}),e(L,{align:"right"},{default:s(()=>[n(e(t,{flat:"",label:l.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(e(t,{label:l.$t("BTN_LABEL_SHUTDOWN"),color:"primary",onClick:a[2]||(a[2]=o=>l.remoteProcedureCall("/api/system/server/shutdown"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:l.confirm_restart_service,"onUpdate:modelValue":a[5]||(a[5]=o=>l.confirm_restart_service=o)},{default:s(()=>[e(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:s(()=>[e(p,{class:"row items-center"},{default:s(()=>[e(f,{icon:"restart_alt",color:"primary","text-color":"white"}),r("span",F,m(l.$t("MSG_CONFIRM_RESTART_SERVICE")),1)]),_:1}),e(L,{align:"right"},{default:s(()=>[n(e(t,{flat:"",label:l.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(e(t,{label:l.$t("BTN_LABEL_RESTART_SERVICE"),color:"primary",onClick:a[4]||(a[4]=o=>l.remoteProcedureCall("/api/system/service/restart"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:l.confirm_reload_service,"onUpdate:modelValue":a[7]||(a[7]=o=>l.confirm_reload_service=o)},{default:s(()=>[e(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:s(()=>[e(p,{class:"row items-center"},{default:s(()=>[e(f,{icon:"restart_alt",color:"primary","text-color":"white"}),r("span",G,m(l.$t("MSG_CONFIRM_RELOAD_SERVICE")),1)]),_:1}),e(L,{align:"right"},{default:s(()=>[n(e(t,{flat:"",label:l.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(e(t,{label:l.$t("BTN_LABEL_RELOAD_SERVICE"),color:"primary",onClick:a[6]||(a[6]=o=>l.remoteProcedureCall("/api/system/service/reload"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:l.confirm_install_service,"onUpdate:modelValue":a[9]||(a[9]=o=>l.confirm_install_service=o)},{default:s(()=>[e(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:s(()=>[e(p,{class:"row items-center"},{default:s(()=>[e(f,{icon:"add_circle",color:"primary","text-color":"white"}),r("span",H,m(l.$t("MSG_CONFIRM_INSTALL_SERVICE")),1)]),_:1}),e(L,{align:"right"},{default:s(()=>[n(e(t,{flat:"",label:l.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(e(t,{label:l.$t("BTN_LABEL_INSTALL_SERVICE"),color:"primary",onClick:a[8]||(a[8]=o=>l.remoteProcedureCall("/api/system/service/install"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(_,{modelValue:l.confirm_uninstall_service,"onUpdate:modelValue":a[11]||(a[11]=o=>l.confirm_uninstall_service=o)},{default:s(()=>[e(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:s(()=>[e(p,{class:"row items-center"},{default:s(()=>[e(f,{icon:"cancel",color:"primary","text-color":"white"}),r("span",W,m(l.$t("MSG_CONFIRM_UNINSTALL_SERVICE")),1)]),_:1}),e(L,{align:"right"},{default:s(()=>[n(e(t,{flat:"",label:l.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(e(t,{label:l.$t("BTN_LABEL_UNINSTALL_SERVICE"),color:"primary",onClick:a[10]||(a[10]=o=>l.remoteProcedureCall("/api/system/service/uninstall"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(t,{class:"q-mr-sm",label:l.$t("BTN_LABEL_REBOOT_HOST"),onClick:a[12]||(a[12]=o=>l.confirm_reboot=!0)},null,8,["label"]),e(t,{class:"q-mr-sm",label:l.$t("BTN_LABEL_SHUTDOWN_HOST"),onClick:a[13]||(a[13]=o=>l.confirm_shutdown=!0)},null,8,["label"]),e(t,{class:"q-mr-sm",label:l.$t("BTN_LABEL_RESTART_SERVICE"),onClick:a[14]||(a[14]=o=>l.confirm_restart_service=!0)},null,8,["label"]),e(t,{class:"q-mr-sm",label:l.$t("BTN_LABEL_INSTALL_SERVICE"),onClick:a[15]||(a[15]=o=>l.confirm_install_service=!0)},null,8,["label"]),e(t,{class:"q-mr-sm",label:l.$t("BTN_LABEL_UNINSTALL_SERVICE"),onClick:a[16]||(a[16]=o=>l.confirm_uninstall_service=!0)},null,8,["label"])])])])]),_:1}),e(d,{class:"q-pa-md q-mt-md"},{default:s(()=>[r("div",j,m(l.$t("TITLE_MAINTAIN_GALLERY")),1),r("div",z,[r("div",X,[r("div",Y,[e(_,{modelValue:l.confirm_delete_all,"onUpdate:modelValue":a[18]||(a[18]=o=>l.confirm_delete_all=o)},{default:s(()=>[e(d,{class:"q-pa-sm"},{default:s(()=>[e(p,{class:"row items-center"},{default:s(()=>[e(f,{icon:"delete",color:"primary","text-color":"white"}),r("span",J,m(l.$t("MSG_CONFIRM_DELETE_ALL_MEDIA_FILES")),1)]),_:1}),e(L,{align:"right"},{default:s(()=>[n(e(t,{flat:"",label:"Cancel",color:"primary"},null,512),[[i]]),n(e(t,{label:"Delete all",color:"primary",onClick:a[17]||(a[17]=o=>l.remoteProcedureCall("/api/mediacollection/delete_all"))},null,512),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(t,{class:"q-mr-sm",label:l.$t("BTN_LABEL_DELETE_ALL_MEDIA_FILES"),onClick:a[19]||(a[19]=o=>l.confirm_delete_all=!0)},null,8,["label"])])])])]),_:1}),e(d,{class:"q-pa-md q-mt-md"},{default:s(()=>[r("div",K,m(l.$t("TITLE_LOCAL_UI_SETTINGS")),1),r("div",Z,[e(E)])]),_:1})]),_:1})}const il=T(M,[["render",x],["__file","AdminPage.vue"]]);export{il as default};
