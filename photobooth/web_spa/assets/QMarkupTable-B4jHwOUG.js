import{v as o,M as n,N as u,O as d,d as b,t as e,P as c}from"./index-CRM5C-vp.js";const q=["horizontal","vertical","cell","none"],k=o({name:"QMarkupTable",props:{...n,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:a=>q.includes(a)}},setup(a,{slots:t}){const r=u(),l=d(a,r.proxy.$q),s=b(()=>`q-markup-table q-table__container q-table__card q-table--${a.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(a.dense===!0?" q-table--dense":"")+(a.flat===!0?" q-table--flat":"")+(a.bordered===!0?" q-table--bordered":"")+(a.square===!0?" q-table--square":"")+(a.wrapCells===!1?" q-table--no-wrap":""));return()=>e("div",{class:s.value},[e("table",{class:"q-table"},c(t.default))])}});export{k as Q};