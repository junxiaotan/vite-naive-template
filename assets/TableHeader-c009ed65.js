import{d as i,i as c,_ as l,b as a,ai as d,aj as _,o as n,az as p,av as m}from"./index-fb10a317.js";const u=i({name:"ProjectTableHeader",setup(){const e=c(()=>[{name:"项目名称"},{name:"创建日期",width:"18%"},{name:"状态",width:"19%"}]);function r(t){return{width:t.width,flex:t.width?"initial":1}}return{list:e,getHeadItem:r}}});const f={class:"project-table-header-container"};function b(e,r,t,h,y,g){return n(),a("ul",f,[(n(!0),a(d,null,_(e.list,(s,o)=>(n(),a("li",{key:o,style:p(e.getHeadItem(s)),class:"project-table-header-container__head-item"},m(s.name),5))),128))])}const w=l(u,[["render",b],["__scopeId","data-v-a62571b0"]]);export{w as default};