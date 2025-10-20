/*! For license information please see 419.7d4f96f4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard_pumaisdue=self.webpackChunkdashboard_pumaisdue||[]).push([[419],{3342:(e,n,m)=>{m.d(n,{BV:()=>p,D4:()=>D,HX:()=>L,QT:()=>x,UC:()=>a,ZB:()=>M,Zp:()=>d,bg:()=>F,hE:()=>T,mc:()=>N,oq:()=>l,xA:()=>S});var t=m(5043),A=m(5464),i=m(4919),r=m(3782),o=m(108),s=m(2291),I=m(7734),E=m(2185),u=m(6026),C=m(6150),O=m(8763),R=m(579);const N=A.Ay.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 24px;
  }
`,a=A.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,T=A.Ay.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  color: #1F2937;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`,l=A.Ay.button`
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
`,S=A.Ay.div`
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
`,d=A.Ay.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 20px;
  }
`,M=A.Ay.h2`
  font-size: 18px;
  font-weight: 600;
  color: #4B5563;
  margin-bottom: 12px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`,p=A.Ay.ol`
  list-style-position: inside;
  padding: 0;
`,x=A.Ay.li`
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
`,L=A.Ay.span`
  text-align: right;
`,c=A.Ay.div`
  background-color: rgba(0, 128, 0, 0.1); // Sfondo verde trasparente
  border: 2px solid rgba(0, 128, 0, 0.5); // Verde con trasparenza media
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`,h=(0,t.memo)((e=>{let{item:n,index:m,rank:t,isAnnual:A,showTrend:o}=e;return(0,R.jsxs)(x,{rank:t,isAnnual:A,children:[(0,R.jsxs)("span",{children:[t,"."]}),(0,R.jsx)("span",{children:n.nome}),o&&n.trend&&(0,R.jsxs)("span",{children:["up"===n.trend&&(0,R.jsx)(i.A,{size:16,color:"#10B981"}),"down"===n.trend&&(0,R.jsx)(r.A,{size:16,color:"#EF4444"}),"stable"===n.trend&&(0,R.jsx)("span",{style:{width:"16px",display:"inline-block"}})]}),!o&&(0,R.jsx)("span",{}),(0,R.jsxs)(L,{children:[n.turni," turni"]})]})}));h.displayName="ClassificaItemComponent";const D=(0,t.memo)((e=>{let{data:n=[],title:m,highlightTopN:t,isAnnual:A,showTrend:i=!1}=e;return(0,R.jsxs)(d,{children:[(0,R.jsx)(M,{children:m}),n.length>0?(0,R.jsx)(R.Fragment,{children:t?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(c,{children:(0,R.jsx)(p,{children:n.slice(0,t).map(((e,n)=>(0,R.jsx)(h,{item:e,index:n,rank:n+1,isAnnual:A,showTrend:i},e.nome)))})}),(0,R.jsx)(p,{children:n.slice(t).map(((e,n)=>(0,R.jsx)(h,{item:e,index:n,rank:t+n+1,isAnnual:A,showTrend:i},e.nome)))})]}):(0,R.jsx)(p,{children:n.map(((e,n)=>(0,R.jsx)(h,{item:e,index:n,rank:n+1,isAnnual:A,showTrend:i},e.nome)))})}):(0,R.jsx)("p",{children:"Nessun dato disponibile"})]})}));D.displayName="Classifica";const F=(0,t.memo)((e=>{let{data:n,title:m}=e;return(0,R.jsxs)(d,{style:{height:"400px"},children:[(0,R.jsx)(M,{children:m}),(0,R.jsx)(o.u,{width:"100%",height:"90%",children:(0,R.jsxs)(s.E,{data:n,layout:"vertical",margin:{top:5,right:30,left:20,bottom:5},children:[(0,R.jsx)(I.d,{strokeDasharray:"3 3"}),(0,R.jsx)(E.W,{type:"number"}),(0,R.jsx)(u.h,{dataKey:"nome",type:"category",width:100,tick:{fontSize:10}}),(0,R.jsx)(C.m,{}),(0,R.jsx)(O.y,{dataKey:"turni",fill:"#8884d8"})]})})]})}));F.displayName="ChartRecharts";(0,t.memo)((e=>{let{title:n,value:m,comparison:t}=e;return(0,R.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow",children:[(0,R.jsx)("h3",{className:"text-lg font-semibold mb-2",children:n}),(0,R.jsx)("p",{className:"text-2xl font-bold",children:m}),void 0!==t&&(0,R.jsxs)("p",{className:"text-sm "+(t>=0?"text-green-500":"text-red-500"),children:[t>=0?"\u25b2":"\u25bc"," ",Math.abs(t).toFixed(2),"%"]})]})})).displayName="StatsCard";(0,t.memo)((e=>{let{data:n}=e})).displayName="Chart"},9419:(e,n,m)=>{m.r(n),m.d(n,{default:()=>I});var t=m(5043),A=m(3342);const i=[{nome:"CARBINI ALICE",mese:"2024-01",turni:28},{nome:"CARBINI ALICE",mese:"2024-02",turni:30},{nome:"CARBINI ALICE",mese:"2024-03",turni:11},{nome:"CARBINI ALICE",mese:"2024-04",turni:48},{nome:"CARBINI ALICE",mese:"2024-05",turni:56},{nome:"CARBINI ALICE",mese:"2024-06",turni:34},{nome:"CARBINI ALICE",mese:"2024-07",turni:58},{nome:"CARBINI ALICE",mese:"2024-08",turni:6},{nome:"CARBINI ALICE",mese:"2024-09",turni:12},{nome:"CARBINI ALICE",mese:"2024-10",turni:50},{nome:"CARBINI ALICE",mese:"2024-11",turni:12},{nome:"CARBINI ALICE",mese:"2024-12",turni:32},{nome:"CARBINI ALICE",mese:"2025-01",turni:28},{nome:"CARBINI ALICE",mese:"2025-02",turni:38},{nome:"CARBINI ALICE",mese:"2025-03",turni:45},{nome:"CARBINI ALICE",mese:"2025-04",turni:22},{nome:"CARBINI ALICE",mese:"2025-05",turni:20},{nome:"CONTI FEDERICA",mese:"2024-01",turni:28},{nome:"CONTI FEDERICA",mese:"2024-02",turni:31},{nome:"CONTI FEDERICA",mese:"2024-03",turni:12},{nome:"CONTI FEDERICA",mese:"2024-04",turni:40},{nome:"CONTI FEDERICA",mese:"2024-05",turni:59},{nome:"CONTI FEDERICA",mese:"2024-06",turni:20},{nome:"CONTI FEDERICA",mese:"2024-07",turni:33},{nome:"CONTI FEDERICA",mese:"2024-09",turni:48},{nome:"CONTI FEDERICA",mese:"2024-10",turni:51},{nome:"CONTI FEDERICA",mese:"2024-11",turni:22},{nome:"CONTI FEDERICA",mese:"2024-12",turni:24},{nome:"CONTI FEDERICA",mese:"2025-01",turni:32},{nome:"CONTI FEDERICA",mese:"2025-02",turni:23},{nome:"CONTI FEDERICA",mese:"2025-03",turni:45},{nome:"CONTI FEDERICA",mese:"2025-04",turni:39},{nome:"CONTI FEDERICA",mese:"2025-05",turni:45},{nome:"CORTESE ELISABETTA",mese:"2024-04",turni:2},{nome:"CORTESE ELISABETTA",mese:"2024-05",turni:14},{nome:"CORTESE ELISABETTA",mese:"2024-06",turni:31},{nome:"CORTESE ELISABETTA",mese:"2024-07",turni:34},{nome:"CORTESE ELISABETTA",mese:"2024-08",turni:3},{nome:"CORTESE ELISABETTA",mese:"2024-10",turni:23},{nome:"CORTESE ELISABETTA",mese:"2024-11",turni:11},{nome:"CORTESE ELISABETTA",mese:"2024-12",turni:16},{nome:"CORTESE ELISABETTA",mese:"2025-01",turni:37},{nome:"CORTESE ELISABETTA",mese:"2025-02",turni:41},{nome:"CORTESE ELISABETTA",mese:"2025-03",turni:65},{nome:"CORTESE ELISABETTA",mese:"2025-04",turni:14},{nome:"CORTESE ELISABETTA",mese:"2025-05",turni:45},{nome:"FABRICATORE ANDREA",mese:"2024-05",turni:13},{nome:"FABRICATORE ANDREA",mese:"2024-06",turni:16},{nome:"FABRICATORE ANDREA",mese:"2024-07",turni:3},{nome:"FABRICATORE ANDREA",mese:"2024-10",turni:36},{nome:"FABRICATORE ANDREA",mese:"2024-11",turni:30},{nome:"FABRICATORE ANDREA",mese:"2024-12",turni:24},{nome:"FABRICATORE ANDREA",mese:"2025-01",turni:34},{nome:"FABRICATORE ANDREA",mese:"2025-02",turni:54},{nome:"FABRICATORE ANDREA",mese:"2025-03",turni:47},{nome:"FABRICATORE ANDREA",mese:"2025-04",turni:47},{nome:"FABRICATORE ANDREA",mese:"2025-05",turni:59},{nome:"FERRI  SILVIA",mese:"2024-01",turni:10},{nome:"FERRI  SILVIA",mese:"2024-02",turni:17},{nome:"FERRI  SILVIA",mese:"2024-04",turni:31},{nome:"FERRI  SILVIA",mese:"2024-05",turni:2},{nome:"GIRARDI ELISABETTA",mese:"2024-01",turni:30},{nome:"GIRARDI ELISABETTA",mese:"2024-02",turni:13},{nome:"GIRARDI ELISABETTA",mese:"2024-03",turni:25},{nome:"GIRARDI ELISABETTA",mese:"2024-04",turni:41},{nome:"GIRARDI ELISABETTA",mese:"2024-05",turni:32},{nome:"GIRARDI ELISABETTA",mese:"2024-06",turni:46},{nome:"GIRARDI ELISABETTA",mese:"2024-07",turni:15},{nome:"GIRARDI ELISABETTA",mese:"2024-08",turni:1},{nome:"GIRARDI ELISABETTA",mese:"2024-09",turni:37},{nome:"GIRARDI ELISABETTA",mese:"2024-10",turni:45},{nome:"GIRARDI ELISABETTA",mese:"2024-11",turni:32},{nome:"GIRARDI ELISABETTA",mese:"2024-12",turni:43},{nome:"GIRARDI ELISABETTA",mese:"2025-01",turni:26},{nome:"GIRARDI ELISABETTA",mese:"2025-02",turni:36},{nome:"GIRARDI ELISABETTA",mese:"2025-03",turni:39},{nome:"GIRARDI ELISABETTA",mese:"2025-04",turni:29},{nome:"GIRARDI ELISABETTA",mese:"2025-05",turni:23},{nome:"MECUCCI ANTONELLA",mese:"2025-05",turni:15},{nome:"NICODEMO GIOVANNA",mese:"2025-03",turni:27},{nome:"NICODEMO GIOVANNA",mese:"2025-04",turni:12},{nome:"NICODEMO GIOVANNA",mese:"2025-05",turni:14},{nome:"NICOLAI FRANCESCO",mese:"2025-03",turni:1},{nome:"NICOLOSI FRANCESCA",mese:"2024-01",turni:20},{nome:"NICOLOSI FRANCESCA",mese:"2024-02",turni:32},{nome:"NICOLOSI FRANCESCA",mese:"2024-03",turni:31},{nome:"NICOLOSI FRANCESCA",mese:"2024-04",turni:43},{nome:"NICOLOSI FRANCESCA",mese:"2024-05",turni:46},{nome:"NICOLOSI FRANCESCA",mese:"2024-06",turni:46},{nome:"NICOLOSI FRANCESCA",mese:"2024-07",turni:46},{nome:"NICOLOSI FRANCESCA",mese:"2024-08",turni:5},{nome:"NICOLOSI FRANCESCA",mese:"2024-09",turni:35},{nome:"NICOLOSI FRANCESCA",mese:"2024-10",turni:54},{nome:"NICOLOSI FRANCESCA",mese:"2024-11",turni:45},{nome:"NICOLOSI FRANCESCA",mese:"2024-12",turni:35},{nome:"NICOLOSI FRANCESCA",mese:"2025-01",turni:43},{nome:"NICOLOSI FRANCESCA",mese:"2025-02",turni:18},{nome:"NICOLOSI FRANCESCA",mese:"2025-03",turni:45},{nome:"NICOLOSI FRANCESCA",mese:"2025-04",turni:45},{nome:"NICOLOSI FRANCESCA",mese:"2025-05",turni:39},{nome:"NICODEMO GIOVANNA",mese:"2025-02",turni:1},{nome:"PARLATO JEANNE",mese:"2024-05",turni:3},{nome:"PARLATO JEANNE",mese:"2024-07",turni:5},{nome:"PARLATO JEANNE",mese:"2024-10",turni:5},{nome:"PARLATO JEANNE",mese:"2024-12",turni:2},{nome:"PARLATO JEANNE",mese:"2025-02",turni:6},{nome:"PARLATO JEANNE",mese:"2025-04",turni:4},{nome:"PICCHIO MAURIZIO",mese:"2024-01",turni:16},{nome:"PICCHIO MAURIZIO",mese:"2024-02",turni:21},{nome:"PICCHIO MAURIZIO",mese:"2024-03",turni:28},{nome:"PICCHIO MAURIZIO",mese:"2024-04",turni:37},{nome:"PICCHIO MAURIZIO",mese:"2024-05",turni:39},{nome:"PICCHIO MAURIZIO",mese:"2024-06",turni:47},{nome:"PICCHIO MAURIZIO",mese:"2024-07",turni:44},{nome:"PICCHIO MAURIZIO",mese:"2024-08",turni:23},{nome:"PICCHIO MAURIZIO",mese:"2024-09",turni:28},{nome:"PICCHIO MAURIZIO",mese:"2024-10",turni:57},{nome:"PICCHIO MAURIZIO",mese:"2024-11",turni:36},{nome:"PICCHIO MAURIZIO",mese:"2024-12",turni:35},{nome:"PICCHIO MAURIZIO",mese:"2025-01",turni:38},{nome:"PICCHIO MAURIZIO",mese:"2025-02",turni:32},{nome:"PICCHIO MAURIZIO",mese:"2025-03",turni:30},{nome:"PICCHIO MAURIZIO",mese:"2025-04",turni:35},{nome:"PICCHIO MAURIZIO",mese:"2025-05",turni:46},{nome:"RAZZI  SABINA",mese:"2024-04",turni:24},{nome:"RAZZI  SABINA",mese:"2024-05",turni:16},{nome:"RAZZI  SABINA",mese:"2024-06",turni:16},{nome:"RAZZI SABINA",mese:"2024-12",turni:17},{nome:"RAZZI SABINA",mese:"2025-01",turni:19},{nome:"RAZZI SABINA",mese:"2025-04",turni:3},{nome:"ROMA MANUELE",mese:"2024-01",turni:21},{nome:"ROMA MANUELE",mese:"2024-02",turni:26},{nome:"ROMA MANUELE",mese:"2024-03",turni:19},{nome:"ROMA MANUELE",mese:"2024-04",turni:44},{nome:"ROMA MANUELE",mese:"2024-05",turni:49},{nome:"ROMA MANUELE",mese:"2024-06",turni:48},{nome:"ROMA MANUELE",mese:"2024-07",turni:31},{nome:"ROMA MANUELE",mese:"2024-08",turni:8},{nome:"ROMA MANUELE",mese:"2024-09",turni:23},{nome:"ROMA MANUELE",mese:"2024-10",turni:39},{nome:"ROMA MANUELE",mese:"2024-11",turni:31},{nome:"ROMA MANUELE",mese:"2024-12",turni:40},{nome:"ROMA MANUELE",mese:"2025-01",turni:22},{nome:"ROMA MANUELE",mese:"2025-02",turni:33},{nome:"ROMA MANUELE",mese:"2025-03",turni:42},{nome:"ROMA MANUELE",mese:"2025-04",turni:28},{nome:"ROMA MANUELE",mese:"2025-05",turni:43},{nome:"ROMEO SIMONA",mese:"2024-01",turni:23},{nome:"ROMEO SIMONA",mese:"2024-02",turni:45},{nome:"ROMEO SIMONA",mese:"2024-03",turni:14},{nome:"ROMEO SIMONA",mese:"2024-04",turni:28},{nome:"ROMEO SIMONA",mese:"2024-05",turni:10},{nome:"ROMEO SIMONA",mese:"2024-06",turni:7},{nome:"ROMEO SIMONA",mese:"2024-07",turni:30},{nome:"ROMEO SIMONA",mese:"2024-08",turni:3},{nome:"ROMEO SIMONA",mese:"2024-09",turni:39},{nome:"ROMEO SIMONA",mese:"2024-10",turni:35},{nome:"ROMEO SIMONA",mese:"2024-11",turni:39},{nome:"ROMEO SIMONA",mese:"2024-12",turni:20},{nome:"ROMEO SIMONA",mese:"2025-01",turni:35},{nome:"ROMEO SIMONA",mese:"2025-02",turni:27},{nome:"ROMEO SIMONA",mese:"2025-03",turni:29},{nome:"ROMEO SIMONA",mese:"2025-04",turni:36},{nome:"ROMEO SIMONA",mese:"2025-05",turni:42},{nome:"SAITTA FIORENZA",mese:"2024-05",turni:5},{nome:"SAITTA FIORENZA",mese:"2024-06",turni:33},{nome:"SAITTA FIORENZA",mese:"2024-07",turni:1},{nome:"SAITTA FIORENZA",mese:"2024-08",turni:2},{nome:"SAITTA FIORENZA",mese:"2024-10",turni:15},{nome:"SAITTA FIORENZA",mese:"2024-11",turni:4},{nome:"SAITTA FIORENZA",mese:"2024-12",turni:7},{nome:"SAITTA FIORENZA",mese:"2025-01",turni:2},{nome:"SAITTA FIORENZA",mese:"2025-02",turni:10},{nome:"SAITTA FIORENZA",mese:"2025-03",turni:14},{nome:"SAITTA FIORENZA",mese:"2025-04",turni:24},{nome:"SAITTA FIORENZA",mese:"2025-05",turni:23},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-03",turni:14},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-04",turni:20},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-05",turni:22},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-06",turni:3},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-09",turni:5},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-10",turni:17},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-11",turni:22},{nome:"SCACCO DE SANTIS MANUELA",mese:"2024-12",turni:11},{nome:"SCACCO DE SANTIS MANUELA",mese:"2025-03",turni:11},{nome:"SCACCO DE SANTIS MANUELA",mese:"2025-04",turni:14},{nome:"SCACCO DE SANTIS MANUELA",mese:"2025-05",turni:20},{nome:"SIMONETTI MONICA",mese:"2024-04",turni:9},{nome:"SIMONETTI MONICA",mese:"2024-05",turni:13},{nome:"SIMONETTI MONICA",mese:"2024-06",turni:34},{nome:"SIMONETTI MONICA",mese:"2024-07",turni:35},{nome:"SIMONETTI MONICA",mese:"2024-08",turni:7},{nome:"SIMONETTI MONICA",mese:"2024-09",turni:1},{nome:"TUCCINARDI WANDA",mese:"2024-02",turni:2},{nome:"TUCCINARDI WANDA",mese:"2024-04",turni:3},{nome:"CARBINI ALICE",mese:"2025-06",turni:46},{nome:"CONTI FEDERICA",mese:"2025-06",turni:36},{nome:"CORTESE ELISABETTA",mese:"2025-06",turni:29},{nome:"FABRICATORE ANDREA",mese:"2025-06",turni:36},{nome:"GIRARDI ELISABETTA",mese:"2025-06",turni:32},{nome:"NICODEMO GIOVANNA",mese:"2025-06",turni:4},{nome:"NICOLOSI FRANCESCA",mese:"2025-06",turni:32},{nome:"PARLATO JEANNE",mese:"2025-06",turni:10},{nome:"PICCHIO MAURIZIO",mese:"2025-06",turni:39},{nome:"ROMA MANUELE",mese:"2025-06",turni:37},{nome:"ROMEO SIMONA",mese:"2025-06",turni:40},{nome:"SAITTA FIORENZA",mese:"2025-06",turni:31},{nome:"CARBINI ALICE",mese:"2025-07",turni:11},{nome:"CONTI FEDERICA",mese:"2025-07",turni:42},{nome:"CORTESE ELISABETTA",mese:"2025-07",turni:21},{nome:"FABRICATORE ANDREA",mese:"2025-07",turni:34},{nome:"GIRARDI ELISABETTA",mese:"2025-07",turni:40},{nome:"NICOLOSI FRANCESCA",mese:"2025-07",turni:33},{nome:"PARLATO JEANNE",mese:"2025-07",turni:3},{nome:"PICCHIO MAURIZIO",mese:"2025-07",turni:37},{nome:"ROMA MANUELE",mese:"2025-07",turni:37},{nome:"ROMEO SIMONA",mese:"2025-07",turni:40},{nome:"SAITTA FIORENZA",mese:"2025-07",turni:6},{nome:"SCACCO DE SANTIS MANUELA",mese:"2025-07",turni:1},{nome:"CORTESE ELISABETTA",mese:"2025-08",turni:27},{nome:"CORTESE FEDERICO",mese:"2025-08",turni:12},{nome:"FABRICATORE ANDREA",mese:"2025-08",turni:25},{nome:"GIRARDI ELISABETTA",mese:"2025-08",turni:7},{nome:"NICOLOSI FRANCESCA",mese:"2025-08",turni:4},{nome:"PARLATO JEANNE",mese:"2025-08",turni:8},{nome:"PICCHIO MAURIZIO",mese:"2025-08",turni:10},{nome:"ROMA MANUELE",mese:"2025-08",turni:10},{nome:"ROMEO SIMONA",mese:"2025-08",turni:13},{nome:"SAITTA FIORENZA",mese:"2025-08",turni:14},{nome:"CARBINI ALICE",mese:"2025-09",turni:21},{nome:"CONTI FEDERICA",mese:"2025-09",turni:6},{nome:"CORTESE ELISABETTA",mese:"2025-09",turni:13},{nome:"FABRICATORE ANDREA",mese:"2025-09",turni:23},{nome:"GIRARDI ELISABETTA",mese:"2025-09",turni:61},{nome:"PARLATO JEANNE",mese:"2025-09",turni:33},{nome:"PICCHIO MAURIZIO",mese:"2025-09",turni:5},{nome:"ROMA MANUELE",mese:"2025-09",turni:14},{nome:"ROMEO SIMONA",mese:"2025-09",turni:25},{nome:"SAITTA FIORENZA",mese:"2025-09",turni:5}],r=e=>{const n=new Date;let m,t;if("mese"===e){const e=new Date(n.getFullYear(),n.getMonth()-1,1),A=new Date(n.getFullYear(),n.getMonth(),1);m=e,t=A}else"quadrimestre"===e?(m=new Date(n.getFullYear(),n.getMonth()-4,1),t=new Date(n.getFullYear(),n.getMonth(),1)):"anno"===e&&(m=new Date(n.getFullYear(),0,1),t=n);const A=i.filter((e=>{let{mese:n}=e;const A=new Date(n+"-01");return A>=m&&A<t})),r={};return A.forEach((e=>{let{nome:n,turni:m}=e;r[n]=(r[n]||0)+m})),Object.entries(r).map((e=>{let[n,m]=e;return{nome:n,turni:m}})).sort(((e,n)=>n.turni-e.turni))},o=()=>{const e=r("mese"),n=new Date,m=(new Date(n.getFullYear(),n.getMonth()-1,1),new Date(n.getFullYear(),n.getMonth()-2,1)),t=new Date(n.getFullYear(),n.getMonth()-1,1),A=i.filter((e=>{let{mese:n}=e;const A=new Date(n+"-01");return A>=m&&A<t})),o={};A.forEach((e=>{let{nome:n,turni:m}=e;o[n]=(o[n]||0)+m}));return e.map((e=>{const n=o[e.nome]||0,m=e.turni>n?"up":e.turni<n?"down":"stable",t=e.turni-n;return{...e,trend:m,difference:t,prevTurni:n}}))};var s=m(579);const I=e=>{let{setView:n}=e;const[m,i]=(0,t.useState)(null),[I,E]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{const e=o(),n=r("quadrimestre"),m=r("anno");i({ultimoMese:e,ultimoQuadrimestre:n,ultimoAnno:m}),E(!1)}),[]),I?(0,s.jsx)("div",{children:"Caricamento..."}):(0,s.jsxs)(A.mc,{children:[(0,s.jsxs)(A.UC,{children:[(0,s.jsx)(A.oq,{onClick:()=>n("main"),children:"Torna alla Dashboard"}),(0,s.jsx)(A.hE,{children:"Statistiche Assistenti"}),(0,s.jsxs)(A.xA,{children:[(0,s.jsx)(A.D4,{title:"Ultimo Mese",data:m.ultimoMese,showTrend:!0}),(0,s.jsx)(A.D4,{title:"Ultimo Quadrimestre",data:m.ultimoQuadrimestre}),(0,s.jsx)(A.D4,{title:"Da Inizio Anno",data:m.ultimoAnno})]}),(0,s.jsx)(A.xA,{children:(0,s.jsx)("div",{style:{gridColumn:"1 / -1"},children:(0,s.jsx)(A.bg,{data:m.ultimoAnno,title:"Distribuzione Turni Anno"})})})]}),(0,s.jsx)("div",{style:{textAlign:"center",marginTop:"30px",paddingTop:"20px",borderTop:"1px solid #e5e7eb",fontSize:"14px",color:"#6b7280"},children:(0,s.jsx)("p",{children:"\xa9 StudioStats 2025 Marco Augusto Comba | Versione 1.6.1"})})]})}},3782:(e,n,m)=>{m.d(n,{A:()=>t});const t=(0,m(7784).A)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]])},4919:(e,n,m)=>{m.d(n,{A:()=>t});const t=(0,m(7784).A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},2291:(e,n,m)=>{m.d(n,{E:()=>s});var t=m(3014),A=m(8763),i=m(2185),r=m(6026),o=m(3831),s=(0,t.gu)({chartName:"BarChart",GraphicalChild:A.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:i.W},{axisType:"yAxis",AxisComp:r.h}],formatAxisMap:o.pr})}}]);
//# sourceMappingURL=419.7d4f96f4.chunk.js.map