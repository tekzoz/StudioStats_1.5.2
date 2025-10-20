/*! For license information please see 91.16bff1ef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard_pumaisdue=self.webpackChunkdashboard_pumaisdue||[]).push([[91],{3342:(e,i,t)=>{t.d(i,{BV:()=>w,D4:()=>C,HX:()=>v,QT:()=>T,UC:()=>g,ZB:()=>f,Zp:()=>A,bg:()=>S,hE:()=>j,mc:()=>u,oq:()=>b,xA:()=>y});var n=t(5043),a=t(5464),s=t(4919),r=t(3782),o=t(108),d=t(2291),l=t(7734),x=t(2185),p=t(6026),m=t(6150),c=t(8763),h=t(579);const u=a.Ay.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 24px;
  }
`,g=a.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,j=a.Ay.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  color: #1F2937;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`,b=a.Ay.button`
  background: #4B5563;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #374151;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 24px;
  }
`,y=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,A=a.Ay.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 20px;
  }
`,f=a.Ay.h2`
  font-size: 18px;
  font-weight: 600;
  color: #4B5563;
  margin-bottom: 12px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`,w=a.Ay.ol`
  list-style-position: inside;
  padding: 0;
`,T=a.Ay.li`
  font-size: 14px;
  margin-bottom: 6px;
  display: grid;
  grid-template-columns: 24px 1fr 20px 70px;
  align-items: center;

  &:nth-child(1) { font-weight: bold; color: #FFA500; }
  &:nth-child(2) { font-weight: bold; color: #A9A9A9; }
  &:nth-child(3) { font-weight: bold; color: #CD7F32; }

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
    grid-template-columns: 30px 1fr 24px 80px;
  }
`,v=a.Ay.span`
  text-align: right;
`,z=a.Ay.div`
  background-color: rgba(0, 128, 0, 0.1); // Sfondo verde trasparente
  border: 2px solid rgba(0, 128, 0, 0.5); // Verde con trasparenza media
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`,k=(0,n.memo)((e=>{let{item:i,index:t,rank:n,isAnnual:a,showTrend:o}=e;return(0,h.jsxs)(T,{rank:n,isAnnual:a,children:[(0,h.jsxs)("span",{children:[n,"."]}),(0,h.jsx)("span",{children:i.nome}),o&&i.trend&&(0,h.jsxs)("span",{children:["up"===i.trend&&(0,h.jsx)(s.A,{size:16,color:"#10B981"}),"down"===i.trend&&(0,h.jsx)(r.A,{size:16,color:"#EF4444"}),"stable"===i.trend&&(0,h.jsx)("span",{style:{width:"16px",display:"inline-block"}})]}),!o&&(0,h.jsx)("span",{}),(0,h.jsxs)(v,{children:[i.turni," turni"]})]})}));k.displayName="ClassificaItemComponent";const C=(0,n.memo)((e=>{let{data:i=[],title:t,highlightTopN:n,isAnnual:a,showTrend:s=!1}=e;return(0,h.jsxs)(A,{children:[(0,h.jsx)(f,{children:t}),i.length>0?(0,h.jsx)(h.Fragment,{children:n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(z,{children:(0,h.jsx)(w,{children:i.slice(0,n).map(((e,i)=>(0,h.jsx)(k,{item:e,index:i,rank:i+1,isAnnual:a,showTrend:s},e.nome)))})}),(0,h.jsx)(w,{children:i.slice(n).map(((e,i)=>(0,h.jsx)(k,{item:e,index:i,rank:n+i+1,isAnnual:a,showTrend:s},e.nome)))})]}):(0,h.jsx)(w,{children:i.map(((e,i)=>(0,h.jsx)(k,{item:e,index:i,rank:i+1,isAnnual:a,showTrend:s},e.nome)))})}):(0,h.jsx)("p",{children:"Nessun dato disponibile"})]})}));C.displayName="Classifica";const S=(0,n.memo)((e=>{let{data:i,title:t}=e;return(0,h.jsxs)(A,{style:{height:"400px"},children:[(0,h.jsx)(f,{children:t}),(0,h.jsx)(o.u,{width:"100%",height:"90%",children:(0,h.jsxs)(d.E,{data:i,layout:"vertical",margin:{top:5,right:30,left:20,bottom:5},children:[(0,h.jsx)(l.d,{strokeDasharray:"3 3"}),(0,h.jsx)(x.W,{type:"number"}),(0,h.jsx)(p.h,{dataKey:"nome",type:"category",width:100,tick:{fontSize:10}}),(0,h.jsx)(m.m,{}),(0,h.jsx)(c.y,{dataKey:"turni",fill:"#8884d8"})]})})]})}));S.displayName="ChartRecharts";(0,n.memo)((e=>{let{title:i,value:t,comparison:n}=e;return(0,h.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow",children:[(0,h.jsx)("h3",{className:"text-lg font-semibold mb-2",children:i}),(0,h.jsx)("p",{className:"text-2xl font-bold",children:t}),void 0!==n&&(0,h.jsxs)("p",{className:"text-sm "+(n>=0?"text-green-500":"text-red-500"),children:[n>=0?"\u25b2":"\u25bc"," ",Math.abs(n).toFixed(2),"%"]})]})})).displayName="StatsCard";(0,n.memo)((e=>{let{data:i}=e})).displayName="Chart"},7091:(e,i,t)=>{t.r(i),t.d(i,{default:()=>x});var n=t(5043),a=t(5469),s=t(9682),r=t(3342),o=t(579);const d=e=>{let{data:i,title:t}=e;return(0,o.jsxs)(r.Zp,{children:[(0,o.jsx)(r.ZB,{children:t}),(0,o.jsx)(r.BV,{children:i.map(((e,i)=>(0,o.jsxs)(r.QT,{children:[(0,o.jsxs)("span",{children:[i+1,"."]}),(0,o.jsx)("span",{children:e.sala}),(0,o.jsxs)(r.HX,{children:[e.turni," turni"]})]},e.sala)))})]})},l=e=>{let{data:i,averageTurni:t}=e;return(0,o.jsxs)(r.Zp,{children:[(0,o.jsx)(r.ZB,{children:"Bilanciamento Turni - Team Pumaisdue"}),(0,o.jsxs)("p",{children:["Media turni annuale: ",t]}),(0,o.jsx)(r.BV,{children:i.map(((e,i)=>(0,o.jsxs)(r.QT,{children:[(0,o.jsxs)("span",{children:[i+1,"."]}),(0,o.jsx)("span",{children:e.nome}),(0,o.jsxs)(r.HX,{children:[e.differenza>0?`+${e.differenza.toFixed(0)}`:e.differenza.toFixed(0)," ","turni"]})]},e.nome)))})]})},x=e=>{let{setView:i}=e;const[t,x]=(0,n.useState)(null),[p,m]=(0,n.useState)(null),[c,h]=(0,n.useState)(null),[u,g]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{const e=(0,s.$9)(),i=(0,s.cT)("quadrimestre"),t=(0,s.cT)("anno"),n=(0,s.qn)("mese"),a=(0,s.qn)("quadrimestre"),r=(0,s.qn)("anno"),{bilanciamento:o,averageTurni:d}=(0,s.zS)();h({bilanciamento:o,averageTurni:d}),x({ultimoMese:e,ultimoQuadrimestre:i,ultimoAnno:t}),m({ultimoMese:n,ultimoQuadrimestre:a,ultimoAnno:r}),g(!1)}),[]),u?(0,o.jsx)("div",{children:"Caricamento..."}):(0,o.jsx)(r.mc,{children:(0,o.jsxs)(r.UC,{children:[(0,o.jsxs)(r.oq,{onClick:()=>i("main"),children:[(0,o.jsx)(a.A,{size:20,style:{marginRight:"8px"}}),"Torna alla Dashboard"]}),(0,o.jsx)(r.hE,{children:"Statistiche Fonici e Sale"}),(0,o.jsxs)(r.xA,{children:[(0,o.jsx)(r.D4,{title:"Ultimo Mese",data:t.ultimoMese,showTrend:!0}),(0,o.jsx)(r.D4,{title:"Ultimo Quadrimestre",data:t.ultimoQuadrimestre}),(0,o.jsx)(r.D4,{title:"Da inizio Anno",data:t.ultimoAnno,highlightTopN:8})]}),(0,o.jsxs)(r.xA,{children:[(0,o.jsx)(d,{title:"Utilizzo Sale - Ultimo Mese",data:p.ultimoMese}),(0,o.jsx)(d,{title:"Utilizzo Sale - Ultimo Quadrimestre",data:p.ultimoQuadrimestre}),(0,o.jsx)(d,{title:"Utilizzo Sale - Da inizio Anno",data:p.ultimoAnno})]}),(0,o.jsx)(r.xA,{children:(0,o.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,o.jsx)(r.bg,{data:t.ultimoAnno,title:"Distribuzione Turni Anno"})})}),(0,o.jsx)(r.xA,{children:(0,o.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,o.jsx)(l,{data:c.bilanciamento,averageTurni:c.averageTurni})})}),(0,o.jsx)("div",{style:{textAlign:"center",marginTop:"30px",paddingTop:"20px",borderTop:"1px solid #e5e7eb",fontSize:"14px",color:"#6b7280"},children:(0,o.jsx)("p",{children:"\xa9 StudioStats 2025 Marco Augusto Comba | Versione 1.6.1"})})]})})}},5469:(e,i,t)=>{t.d(i,{A:()=>n});const n=(0,t(7784).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},3782:(e,i,t)=>{t.d(i,{A:()=>n});const n=(0,t(7784).A)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]])},4919:(e,i,t)=>{t.d(i,{A:()=>n});const n=(0,t(7784).A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},2291:(e,i,t)=>{t.d(i,{E:()=>d});var n=t(3014),a=t(8763),s=t(2185),r=t(6026),o=t(3831),d=(0,n.gu)({chartName:"BarChart",GraphicalChild:a.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:s.W},{axisType:"yAxis",AxisComp:r.h}],formatAxisMap:o.pr})}}]);
//# sourceMappingURL=91.16bff1ef.chunk.js.map