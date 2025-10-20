/*! For license information please see 793.e9e3dc45.chunk.js.LICENSE.txt */
(self.webpackChunkdashboard_pumaisdue=self.webpackChunkdashboard_pumaisdue||[]).push([[793],{1793:(e,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>I});var n=o(5043),t=o(5464),r=o(5469);const s=(0,o(7784).A)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var a=o(4919),l=o(3782),d=o(108),c=o(2291),p=o(7734),u=o(2185),x=o(6026),m=o(6150),g=o(1327),h=o(8763),f=o(1519),v=o(9682);const y=async(e,i)=>{console.log("getMonthData chiamata con parametri:",{yearOrYearMonth:e,month:i});try{let o;if("string"===typeof e&&e.includes("-"))o=e,console.log(`Analisi parametro stringa: yearMonthStr=${o}`);else{if("undefined"===typeof e||"undefined"===typeof i){const o="Formato parametri non valido per getMonthData";throw console.error(o,{yearOrYearMonth:e,month:i}),new Error(o)}{const n=e.toString();o=`${n}-${i.toString().padStart(2,"0")}`,console.log(`Analisi parametri separati: yearMonthStr=${o}`)}}console.log(`Utilizzo originalGetMonthData con: ${o}`);const n=(0,v.tD)(o);if(!n)throw console.warn(`Nessun dato trovato per ${o}`),new Error(`NO_DATA:${o}`);return console.log(`Dati ottenuti per ${o}:`,n),Promise.resolve(n)}catch(o){throw console.error("Errore in getMonthData:",o),o}};var b=o(579);const j=t.Ay.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`,$=t.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,A=t.Ay.button`
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
`,T=t.Ay.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #1F2937;
`,E=t.Ay.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,z=t.Ay.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 600px;
  overflow-y: auto;
`,k=t.Ay.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  color: #1F2937;
`,F=t.Ay.button`
  background-color: ${e=>e.$isSelected?1===e.$panel?"#8884d8":"#82ca9d":"#E5E7EB"};
  color: ${e=>e.$isSelected?"white":"#4B5563"};
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: ${e=>e.$isSelected?"bold":"normal"};
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all 0.2s;
  margin-bottom: 8px;
  opacity: ${e=>e.$disabled?.5:1};

  &:hover {
    background-color: ${e=>e.$isSelected?1===e.$panel?"#7b77c2":"#6ebe8a":e.$disabled?"#E5E7EB":"#D1D5DB"};
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
`,M=t.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,N=t.Ay.div`
  background-color: #F3F4F6;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`,D=t.Ay.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1F2937;
`,C=t.Ay.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`,O=t.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: ${e=>e.$isPositive?"#10B981":"#EF4444"};
`,L=t.Ay.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E5E7EB;
`,_=t.Ay.div`
  text-align: center;
  padding: 20px;
  color: #4B5563;
`,P=t.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #FEE2E2;
  color: #EF4444;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
`,B=t.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #E0F2FE;
  color: #0369A1;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
`,R=t.Ay.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  font-size: 14px;
  color: #6b7280;
`,I=e=>{let{setView:i}=e;const{currentYear:o,currentMonth:t}=(0,v.K4)(),I=(0,v.JC)();console.log("Mesi restituiti da getAvailableMonths():",I);const[K,U]=(0,n.useState)(I),[G,W]=(0,n.useState)(null),[V,Y]=(0,n.useState)(null),[H,Z]=(0,n.useState)(null),[q,J]=(0,n.useState)(null),[Q,X]=(0,n.useState)(!1),[ee,ie]=(0,n.useState)(!1),[oe,ne]=(0,n.useState)(null),[te,re]=(0,n.useState)(null),[se,ae]=(0,n.useState)([]),[le,de]=(0,n.useState)(null),[ce,pe]=(0,n.useState)(null),ue=e=>{if(!e)return!1;const[i,o]=e.split("-").map(Number),n=new Date,t=n.getFullYear(),r=n.getMonth()+1,s=i>t||i===t&&o>r;return s&&console.log(`Mese ${e} identificato come mese futuro`),s},xe=e=>{const i=se.includes(e);return i&&console.log(`Mese ${e} presente nella lista dei mesi falliti`),i};(0,n.useEffect)((()=>{if(I.length>0){const e=I[0].value;console.log(`Impostazione mese 1 predefinito: ${e}`),W(e)}if(I.length>1){const e=I[1].value;console.log(`Impostazione mese 2 predefinito: ${e}`),Y(e)}}),[]),(0,n.useEffect)((()=>{if(G){if(xe(G))return console.log(`Mese ${G} gi\xe0 fallito in precedenza, non riprovo il caricamento`),void ne(`File dati mancante per ${me(G)}`);if(console.log("Tentativo di caricamento dati per mese 1:",G),X(!0),ne(null),ue(G))return ne(`I dati per il mese ${me(G)} non sono ancora disponibili`),Z(null),void X(!1);try{"string"===typeof G&&G.includes("-")?y(G).then((e=>{e?0===e.totaleTurni&&0===e.giorniLavorativi?(console.log(`Dati vuoti ricevuti per ${G}`),ne(`Nessun dato disponibile per il mese: ${me(G)}`),Z(null),ae((e=>[...e,G]))):(console.log("Dati ricevuti per mese 1:",e),Z(e)):(console.log(`Nessun dato trovato per mese 1: ${G}`),ne(`Nessun dato trovato per il mese: ${me(G)}`),ae((e=>[...e,G])))})).catch((e=>{console.log("Errore dettagliato per mese 1:",e),e&&e.message?e.message.includes("Cannot find module")||e.message.includes("FILE_NOT_FOUND")||e.message.includes("NO_DATA")?(ne(`Dati non disponibili per ${me(G)}`),ae((e=>[...e,G]))):e.message.includes("NETWORK_ERROR")?ne("Errore di connessione durante il caricamento dei dati. Verifica la connessione di rete e riprova."):ne(`Errore nel recupero dei dati per il mese ${me(G)}`):ne(`Errore nel recupero dei dati per il mese ${me(G)}`)})).finally((()=>{X(!1)})):(ne(`Formato mese non valido: ${G}`),X(!1))}catch(e){console.log("Errore try/catch per mese 1:",e),ne(`Errore nel recupero dei dati per il mese ${me(G)}`),X(!1)}}}),[G,se]),(0,n.useEffect)((()=>{if(V){if(xe(V))return console.log(`Mese ${V} gi\xe0 fallito in precedenza, non riprovo il caricamento`),void re(`File dati mancante per ${me(V)}`);if(ie(!0),re(null),ue(V))return re(`I dati per il mese ${me(V)} non sono ancora disponibili`),J(null),void ie(!1);try{"string"===typeof V&&V.includes("-")?y(V).then((e=>{e?0===e.totaleTurni&&0===e.giorniLavorativi?(console.log(`Dati vuoti ricevuti per ${V}`),re(`Nessun dato disponibile per il mese: ${me(V)}`),J(null),ae((e=>[...e,V]))):J(e):(console.log(`Nessun dato trovato per mese 2: ${V}`),re(`Nessun dato trovato per il mese: ${me(V)}`),ae((e=>[...e,V])))})).catch((e=>{e&&e.message?e.message.includes("Cannot find module")||e.message.includes("FILE_NOT_FOUND")||e.message.includes("NO_DATA")?(re(`Dati non disponibili per ${me(V)}`),ae((e=>[...e,V]))):e.message.includes("NETWORK_ERROR")?re("Errore di connessione durante il caricamento dei dati. Verifica la connessione di rete e riprova."):re(`Errore nel recupero dei dati per il mese ${me(V)}`):re(`Errore nel recupero dei dati per il mese ${me(V)}`)})).finally((()=>{ie(!1)})):(re(`Formato mese non valido: ${V}`),ie(!1))}catch(e){re(`Errore nel recupero dei dati per il mese ${me(V)}`),ie(!1)}}}),[V,se]);const me=e=>{if(!e)return"";const[i,o]=e.split("-").map(Number);return`${n=o,["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"][n-1]} ${i}`;var n},ge=(()=>{if(!H||!q)return[];return[{name:"Turni Totali",[`Turni ${me(G)}`]:H.totaleTurni||0,[`Turni ${me(V)}`]:q.totaleTurni||0}]})(),he=(()=>{if(!H||!q)return[0,600];const e=Math.max(H.totaleTurni||0,q.totaleTurni||0);return[0,100*Math.ceil(e/100)+100]})(),fe=(e,i)=>{console.log(`Tentativo di selezionare ${i} per il pannello ${e}`),ue(i)?console.log(`Mese ${i} \xe8 un mese futuro, non pu\xf2 essere selezionato`):1===e?(console.log(`Impostando selectedMonth1 a ${i}`),W(i)):2===e&&(console.log(`Impostando selectedMonth2 a ${i}`),Y(i))};return(0,n.useEffect)((()=>{(()=>{const e=K.map((e=>y(e.value).then((i=>i&&i.totaleTurni?{month:e.value,label:e.label,turni:i.totaleTurni}:null)).catch((()=>null))));Promise.all(e).then((e=>{const i=e.filter((e=>null!==e));if(i.length>0){const e=i.reduce(((e,i)=>i.turni>e.turni?i:e),i[0]),o=i.reduce(((e,i)=>i.turni<e.turni?i:e),i[0]);de(e),pe(o)}}))})()}),[]),(0,b.jsx)(j,{children:(0,b.jsxs)($,{children:[(0,b.jsxs)(A,{onClick:()=>i("main"),children:[(0,b.jsx)(r.A,{size:20,style:{marginRight:"8px"}}),"Torna alla Dashboard"]}),(0,b.jsx)(T,{children:"Confronta Mesi"}),(0,b.jsxs)(B,{children:[(0,b.jsx)(s,{size:16}),(0,b.jsx)("span",{children:"I mesi futuri o senza dati disponibili sono disabilitati. Seleziona solo i mesi disponibili."})]}),(0,b.jsxs)(E,{children:[(0,b.jsxs)(z,{children:[(0,b.jsx)(k,{children:"Seleziona il primo mese"}),oe&&(0,b.jsxs)(P,{children:[(0,b.jsx)(s,{size:16}),(0,b.jsx)("span",{children:oe})]}),K.map((e=>{const i=ue(e.value)||xe(e.value);return(0,b.jsx)(F,{$isSelected:e.value===G,$disabled:i,$panel:1,onClick:()=>fe(1,e.value),children:e.label},e.value)})),Q?(0,b.jsx)(_,{children:"Caricamento dati..."}):H&&(0,b.jsxs)(L,{children:[(0,b.jsx)(D,{children:me(G)}),(0,b.jsxs)(C,{children:["Turni totali: ",H.totaleTurni||0]}),(0,b.jsxs)(C,{children:["Giorni lavorativi: ",H.giorniLavorativi||0]}),(0,b.jsxs)(C,{children:["Media giornaliera: ",H.giorniLavorativi?(H.totaleTurni/H.giorniLavorativi).toFixed(1):"N/A"]})]})]}),(0,b.jsx)(w,{children:Q||ee?(0,b.jsx)(_,{children:"Caricamento dati per il confronto..."}):oe||te?(0,b.jsx)("div",{style:{textAlign:"center",padding:"40px 0"},children:"Seleziona due mesi validi per visualizzare il confronto"}):ge.length>0?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(S,{children:(0,b.jsx)(d.u,{width:"100%",height:"100%",children:(0,b.jsxs)(c.E,{data:ge,margin:{top:20,right:30,left:20,bottom:5},children:[(0,b.jsx)(p.d,{strokeDasharray:"3 3"}),(0,b.jsx)(u.W,{dataKey:"name"}),(0,b.jsx)(x.h,{domain:he,label:{value:"Turni",angle:-90,position:"insideLeft"}}),(0,b.jsx)(m.m,{}),(0,b.jsx)(g.s,{}),(0,b.jsx)(h.y,{dataKey:`Turni ${me(G)}`,fill:"#8884d8",name:me(G),children:(0,b.jsx)(f.Z,{dataKey:`Turni ${me(G)}`,position:"center",fill:"#ffffff",fontSize:14,fontWeight:"bold"})}),(0,b.jsx)(h.y,{dataKey:`Turni ${me(V)}`,fill:"#82ca9d",name:me(V),children:(0,b.jsx)(f.Z,{dataKey:`Turni ${me(V)}`,position:"center",fill:"#ffffff",fontSize:14,fontWeight:"bold"})})]})})}),(0,b.jsx)(M,{style:{gridTemplateColumns:"1fr"},children:(0,b.jsxs)(N,{children:[(0,b.jsx)(D,{children:"Differenza turni totali"}),(()=>{const{diff:e,percentage:i,isPositive:o}=function(e,i){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("number"!==typeof e||"number"!==typeof i)return{diff:"N/A",percentage:"N/A",isPositive:!0};const n=e-i,t=0!==i?(n/i*100).toFixed(1):"N/A";return{diff:o?n.toFixed(1):n.toFixed(0),percentage:"N/A"!==t?`${t}%`:"N/A",isPositive:n>=0}}(H.totaleTurni||0,q.totaleTurni||0),n=me(G),t=me(V),r=(H.totaleTurni,q.totaleTurni,o?`Nel mese ${n} ci sono stati ${e} turni in pi\xf9 del mese ${t}.`:`Nel mese ${n} ci sono stati ${Math.abs(e)} turni in meno del mese ${t}.`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C,{children:e}),(0,b.jsxs)(O,{$isPositive:o,children:[o?(0,b.jsx)(a.A,{size:16}):(0,b.jsx)(l.A,{size:16}),(0,b.jsx)("span",{children:i})]}),(0,b.jsx)("div",{style:{marginTop:"12px",padding:"10px",backgroundColor:o?"rgba(16, 185, 129, 0.1)":"rgba(239, 68, 68, 0.1)",borderRadius:"6px",fontSize:"16px",textAlign:"center"},children:r})]})})()]})}),(0,b.jsxs)("div",{style:{marginTop:"24px"},children:[(0,b.jsx)(D,{style:{textAlign:"center",marginBottom:"16px"},children:"Statistiche Globali"}),(0,b.jsxs)(M,{children:[(0,b.jsxs)(N,{style:{backgroundColor:"#f0f7ff"},children:[(0,b.jsx)(D,{children:"Mese con pi\xf9 turni"}),le?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C,{children:me(le.month)}),(0,b.jsxs)(O,{$isPositive:!0,children:[(0,b.jsx)(a.A,{size:16}),(0,b.jsxs)("span",{children:[le.turni," turni totali"]})]})]}):(0,b.jsx)("div",{children:"Caricamento in corso..."})]}),(0,b.jsxs)(N,{style:{backgroundColor:"#fff0f0"},children:[(0,b.jsx)(D,{children:"Mese con meno turni"}),ce?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C,{children:me(ce.month)}),(0,b.jsxs)(O,{$isPositive:!1,children:[(0,b.jsx)(l.A,{size:16}),(0,b.jsxs)("span",{children:[ce.turni," turni totali"]})]})]}):(0,b.jsx)("div",{children:"Caricamento in corso..."})]})]})]})]}):(0,b.jsx)("div",{style:{textAlign:"center",padding:"40px 0"},children:"Seleziona due mesi per visualizzare il confronto"})}),(0,b.jsxs)(z,{children:[(0,b.jsx)(k,{children:"Seleziona il secondo mese"}),te&&(0,b.jsxs)(P,{children:[(0,b.jsx)(s,{size:16}),(0,b.jsx)("span",{children:te})]}),K.map((e=>{const i=ue(e.value)||xe(e.value);return(0,b.jsx)(F,{$isSelected:e.value===V,$disabled:i,$panel:2,onClick:()=>fe(2,e.value),children:e.label},e.value)})),ee?(0,b.jsx)(_,{children:"Caricamento dati..."}):q&&(0,b.jsxs)(L,{children:[(0,b.jsx)(D,{children:me(V)}),(0,b.jsxs)(C,{children:["Turni totali: ",q.totaleTurni||0]}),(0,b.jsxs)(C,{children:["Giorni lavorativi: ",q.giorniLavorativi||0]}),(0,b.jsxs)(C,{children:["Media giornaliera: ",q.giorniLavorativi?(q.totaleTurni/q.giorniLavorativi).toFixed(1):"N/A"]})]})]})]}),(0,b.jsx)(R,{children:(0,b.jsx)("p",{children:"\xa9 StudioStats 2025 Marco Augusto Comba | Versione 1.6.1"})})]})})}},5469:(e,i,o)=>{"use strict";o.d(i,{A:()=>n});const n=(0,o(7784).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},3782:(e,i,o)=>{"use strict";o.d(i,{A:()=>n});const n=(0,o(7784).A)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]])},4919:(e,i,o)=>{"use strict";o.d(i,{A:()=>n});const n=(0,o(7784).A)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},2291:(e,i,o)=>{"use strict";o.d(i,{E:()=>l});var n=o(3014),t=o(8763),r=o(2185),s=o(6026),a=o(3831),l=(0,n.gu)({chartName:"BarChart",GraphicalChild:t.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:r.W},{axisType:"yAxis",AxisComp:s.h}],formatAxisMap:a.pr})},2567:(e,i,o)=>{var n={"./year2024.js":[9432,432],"./year2025.js":[4047,47]};function t(e){if(!o.o(n,e))return Promise.resolve().then((()=>{var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}));var i=n[e],t=i[0];return o.e(i[1]).then((()=>o(t)))}t.keys=()=>Object.keys(n),t.id=2567,e.exports=t},433:e=>{function i(e){return Promise.resolve().then((()=>{var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}))}i.keys=()=>[],i.resolve=i,i.id=433,e.exports=i}}]);
//# sourceMappingURL=793.e9e3dc45.chunk.js.map