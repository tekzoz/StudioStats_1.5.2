/*! For license information please see 300.c7414c10.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdashboard_pumaisdue=self.webpackChunkdashboard_pumaisdue||[]).push([[300],{4300:(e,i,n)=>{n.r(i),n.d(i,{default:()=>G});var o=n(5043),t=n(5464),r=n(5469),a=n(4919),l=n(3782),s=n(108),d=n(2291),c=n(7734),x=n(2185),p=n(6026),u=n(6150),h=n(1327),g=n(8763),f=n(1519),m=n(9682),j=n(579);const y=t.Ay.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`,b=t.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,v=t.Ay.button`
  background: #4B5563;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #374151;
  }
`,A=t.Ay.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #1F2937;
`,$=t.Ay.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 24px;
`,T=t.Ay.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,k=t.Ay.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  color: #1F2937;
`,z=t.Ay.button`
  background-color: ${e=>e.$isSelected?1===e.$panel?"#8884d8":"#82ca9d":"#E5E7EB"};
  color: ${e=>e.$isSelected?"white":"#4B5563"};
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: ${e=>e.$isSelected?"bold":"normal"};
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 8px;

  &:hover {
    background-color: ${e=>e.$isSelected?1===e.$panel?"#7b77c2":"#6ebe8a":"#D1D5DB"};
  }
`,w=t.Ay.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
`,S=t.Ay.div`
  width: 100%;
  height: 400px;
  margin-bottom: 24px;
`,C=t.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`,F=t.Ay.div`
  background-color: #F3F4F6;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`,D=t.Ay.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1F2937;
`,E=t.Ay.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`,Y=t.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: ${e=>e.$isPositive?"#10B981":"#EF4444"};
`,M=t.Ay.p`
  font-size: 14px;
  color: #6B7280;
  font-style: italic;
  text-align: center;
  margin-top: 8px;
`,G=e=>{let{setView:i}=e;const{currentYear:n,currentMonth:t}=(0,m.K4)(),G=(0,m.qe)(),[N,B]=(0,o.useState)(null),[P,K]=(0,o.useState)(null),[I,W]=(0,o.useState)(0),[L,H]=(0,o.useState)(!1),[R,V]=(0,o.useState)(!1),[Z,_]=(0,o.useState)(null),[q,O]=(0,o.useState)(null),[U,J]=(0,o.useState)(null),[Q,X]=(0,o.useState)(null),ee=(e,i)=>{console.log(`Tentativo di selezionare ${i} per il pannello ${e}`),1===e?(console.log(`Impostando selectedYear1 a ${i}`),B(i)):2===e&&(console.log(`Impostando selectedYear2 a ${i}`),K(i))};(0,o.useEffect)((()=>{if(N){H(!0),console.log(`Chiamata a getYearData per anno ${N}`);try{const e=(0,m.Yw)(N,I>0?I:12);console.log(`Dati ottenuti per anno ${N}:`,e),e&&"object"===typeof e&&"totaleTurni"in e?_(e):console.error(`Dati non validi per anno ${N}:`,e)}catch(e){console.error(`Errore in getYearData per anno ${N}:`,e)}finally{H(!1)}}}),[N,I]),(0,o.useEffect)((()=>{if(P){V(!0),console.log(`Chiamata a getYearData per anno ${P}`);try{const e=(0,m.Yw)(P,I>0?I:12);console.log(`Dati ottenuti per anno ${P}:`,e),e&&"object"===typeof e&&"totaleTurni"in e?O(e):console.error(`Dati non validi per anno ${P}:`,e)}catch(e){console.error(`Errore in getYearData per anno ${P}:`,e)}finally{V(!1)}}}),[P,I]);(0,o.useEffect)((()=>{G.length>0&&B(G[0].value),G.length>1&&K(G[1].value),(()=>{console.log("Esecuzione findGlobalMaxMinYears");const e=[];for(const n of G){console.log(`Verifico anno: ${n.value}`);try{const i=(0,m.Yw)(n.value);console.log(`Dati trovati per anno ${n.value}:`,i?"Presenti":"Assenti"),i&&"object"===typeof i&&"totaleTurni"in i&&(console.log(`Stats per anno ${n.value}:`,i),e.push({year:n.value,turni:i.totaleTurni}))}catch(i){console.error(`Errore nell'elaborazione dei dati per l'anno ${n.value}:`,i)}}if(console.log("Anni elaborati:",e.length,e),e.length>0){const i=e.reduce(((e,i)=>i.turni>e.turni?i:e),e[0]),n=e.reduce(((e,i)=>i.turni<e.turni?i:e),e[0]);console.log("maxYear:",i,"minYear:",n),J(i),X(n)}})()}),[]),(0,o.useEffect)((()=>{N&&parseInt(N)===n||P&&parseInt(P)===n?W(t):W(0)}),[N,P]),(0,o.useEffect)((()=>{console.log("selectedYear1 cambiato:",N)}),[N]),(0,o.useEffect)((()=>{console.log("selectedYear2 cambiato:",P)}),[P]);const ie=e=>e&&"object"===typeof e?"totaleTurni"in e&&"mediaMensile"in e?{totaleTurni:e.totaleTurni,mediaGiornaliera:e.mediaMensile}:{totaleTurni:e.totaleTurni||0,mediaGiornaliera:e.mediaMensile||0}:{totaleTurni:0,mediaGiornaliera:0},ne=Z?ie(Z):null,oe=q?ie(q):null,te=[];return ne&&oe&&(te.push({name:"Confronto",[`Turni ${N}`]:ne.totaleTurni,[`Turni ${P}`]:oe.totaleTurni}),console.log("Dati per il grafico:",te)),(0,j.jsx)(y,{children:(0,j.jsxs)(b,{children:[(0,j.jsxs)(v,{onClick:()=>i("main"),children:[(0,j.jsx)(r.A,{size:20,style:{marginRight:"8px"}}),"Torna alla Dashboard"]}),(0,j.jsx)(A,{children:"Confronta Anni"}),(0,j.jsxs)($,{children:[(0,j.jsxs)(T,{children:[(0,j.jsx)(k,{children:"Seleziona il primo anno"}),G.map((e=>(0,j.jsx)(z,{$isSelected:e.value===N,$panel:1,onClick:()=>ee(1,e.value),children:e.value},e.value))),L?(0,j.jsx)("div",{children:"Caricamento dati..."}):ne&&(0,j.jsxs)("div",{children:[(0,j.jsx)(D,{children:N}),(0,j.jsxs)(E,{children:["Turni totali: ",ne.totaleTurni]}),(0,j.jsxs)(E,{children:["Media giornaliera: ",ne.mediaGiornaliera.toFixed(1)]})]})]}),(0,j.jsx)(w,{children:L||R?(0,j.jsx)("div",{style:{textAlign:"center",padding:"40px 0"},children:"Caricamento dati..."}):ne&&oe?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S,{children:(0,j.jsx)(s.u,{width:"100%",height:"100%",children:(0,j.jsxs)(d.E,{data:te,margin:{top:20,right:30,left:20,bottom:5},children:[(0,j.jsx)(c.d,{strokeDasharray:"3 3"}),(0,j.jsx)(x.W,{dataKey:"name"}),(0,j.jsx)(p.h,{label:{value:"Turni",angle:-90,position:"insideLeft"}}),(0,j.jsx)(u.m,{}),(0,j.jsx)(h.s,{}),(0,j.jsx)(g.y,{dataKey:`Turni ${N}`,fill:"#8884d8",name:`Anno ${N}`,children:(0,j.jsx)(f.Z,{dataKey:`Turni ${N}`,position:"center",fill:"#ffffff",fontSize:14,fontWeight:"bold"})}),(0,j.jsx)(g.y,{dataKey:`Turni ${P}`,fill:"#82ca9d",name:`Anno ${P}`,children:(0,j.jsx)(f.Z,{dataKey:`Turni ${P}`,position:"center",fill:"#ffffff",fontSize:14,fontWeight:"bold"})})]})})}),I>0&&(0,j.jsxs)(M,{children:["* I dati dell'anno ",n," sono limitati fino al mese di ",(re=I,["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"][re-1]),"."]}),(0,j.jsx)(C,{style:{gridTemplateColumns:"1fr"},children:(0,j.jsxs)(F,{children:[(0,j.jsx)(D,{children:"Differenza turni totali"}),(()=>{const{diff:e,percentage:i,isPositive:n}=function(e,i){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("number"!==typeof e||"number"!==typeof i)return{diff:"N/A",percentage:"N/A",isPositive:!0};const o=e-i,t=0!==i?(o/i*100).toFixed(1):"N/A";return{diff:n?o.toFixed(1):o.toFixed(0),percentage:"N/A"!==t?`${t}%`:"N/A",isPositive:o>=0}}(ne.totaleTurni,oe.totaleTurni),o=P,t=n?`Nell'anno ${N} ci sono stati ${e} turni in pi\xf9 dell'anno ${o}.`:`Nell'anno ${N} ci sono stati ${Math.abs(e)} turni in meno dell'anno ${o}.`;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(E,{children:e}),(0,j.jsxs)(Y,{$isPositive:n,children:[n?(0,j.jsx)(a.A,{size:16}):(0,j.jsx)(l.A,{size:16}),(0,j.jsx)("span",{children:i})]}),(0,j.jsx)("div",{style:{marginTop:"12px",padding:"10px",backgroundColor:n?"rgba(16, 185, 129, 0.1)":"rgba(239, 68, 68, 0.1)",borderRadius:"6px",fontSize:"16px",textAlign:"center"},children:t})]})})()]})}),(0,j.jsxs)("div",{style:{marginTop:"24px"},children:[(0,j.jsx)(D,{style:{textAlign:"center",marginBottom:"16px"},children:"Statistiche Globali"}),(0,j.jsxs)(C,{children:[(0,j.jsxs)(F,{style:{backgroundColor:"#f0f7ff"},children:[(0,j.jsx)(D,{children:"Anno con pi\xf9 turni"}),U?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(E,{children:U.year}),(0,j.jsxs)(Y,{$isPositive:!0,children:[(0,j.jsx)(a.A,{size:16}),(0,j.jsxs)("span",{children:[U.turni," turni totali"]})]})]}):(0,j.jsx)("div",{children:"Caricamento in corso..."})]}),(0,j.jsxs)(F,{style:{backgroundColor:"#fff0f0"},children:[(0,j.jsx)(D,{children:"Anno con meno turni"}),Q?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(E,{children:Q.year}),(0,j.jsxs)(Y,{$isPositive:!1,children:[(0,j.jsx)(l.A,{size:16}),(0,j.jsxs)("span",{children:[Q.turni," turni totali"]})]})]}):(0,j.jsx)("div",{children:"Caricamento in corso..."})]})]})]})]}):(0,j.jsx)("div",{style:{textAlign:"center",padding:"40px 0"},children:"Seleziona due anni per visualizzare il confronto"})}),(0,j.jsxs)(T,{children:[(0,j.jsx)(k,{children:"Seleziona il secondo anno"}),G.map((e=>(0,j.jsx)(z,{$isSelected:e.value===P,$panel:2,onClick:()=>ee(2,e.value),children:e.value},e.value))),R?(0,j.jsx)("div",{children:"Caricamento dati..."}):oe&&(0,j.jsxs)("div",{children:[(0,j.jsx)(D,{children:P}),(0,j.jsxs)(E,{children:["Turni totali: ",oe.totaleTurni]}),(0,j.jsxs)(E,{children:["Media giornaliera: ",oe.mediaGiornaliera.toFixed(1)]})]})]})]})]})});var re}},5469:(e,i,n)=>{n.d(i,{A:()=>o});const o=(0,n(7784).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},3782:(e,i,n)=>{n.d(i,{A:()=>o});const o=(0,n(7784).A)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]])},4919:(e,i,n)=>{n.d(i,{A:()=>o});const o=(0,n(7784).A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},2291:(e,i,n)=>{n.d(i,{E:()=>s});var o=n(3014),t=n(8763),r=n(2185),a=n(6026),l=n(3831),s=(0,o.gu)({chartName:"BarChart",GraphicalChild:t.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:r.W},{axisType:"yAxis",AxisComp:a.h}],formatAxisMap:l.pr})}}]);
//# sourceMappingURL=300.c7414c10.chunk.js.map