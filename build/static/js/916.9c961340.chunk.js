"use strict";(self.webpackChunkdashboard_pumaisdue=self.webpackChunkdashboard_pumaisdue||[]).push([[916],{916:(e,r,t)=>{t.r(r),t.d(r,{default:()=>N});var o=t(5043),s=t(5464),i=t(108),n=t(2291),a=t(7734),c=t(2185),l=t(6026),d=t(6150),p=t(1327),x=t(8763),j=t(5748),h=t(168),y=t(823),u=t(579);const _={qc_report_data:{updated_on:"2025-03-31",description:"Cumulative QC audio data - Jan-Mar 2025",notes:"Tutti i dati si riferiscono a errori audio esclusivamente di progetti Deluxe; aggiornamento manuale."},months:[{year:2025,month:1,projects_analyzed:10,total_rejections:40,rejections_severity_3:12,top_error_types:[{type:"Missing Dialogue",occurrences:10},{type:"Dialogue sync \u2013 long",occurrences:8},{type:"Extraneous efforts",occurrences:6},{type:"True peak out of spec",occurrences:3},{type:"Pop, tick, click",occurrences:3}],top_projects_by_errors:[{project_name:"Morphle and the Magic Pets",episodes_counted:2,total_errors:14,severity_3_errors:5},{project_name:"EARTH ABIDES",episodes_counted:2,total_errors:10,severity_3_errors:4},{project_name:"Reacher",episodes_counted:1,total_errors:5,severity_3_errors:2}]},{year:2025,month:2,projects_analyzed:15,total_rejections:52,rejections_severity_3:14,top_error_types:[{type:"Missing Dialogue",occurrences:12},{type:"Dialogue sync \u2013 long",occurrences:9},{type:"Extraneous efforts",occurrences:7},{type:"Missing walla",occurrences:5},{type:"Pop, tick, click",occurrences:3}],top_projects_by_errors:[{project_name:"EARTH ABIDES",episodes_counted:2,total_errors:18,severity_3_errors:7},{project_name:"Cometierra",episodes_counted:2,total_errors:12,severity_3_errors:4},{project_name:"Reacher",episodes_counted:1,total_errors:5,severity_3_errors:3}]},{year:2025,month:3,projects_analyzed:12,total_rejections:50,rejections_severity_3:15,top_error_types:[{type:"Missing Dialogue",occurrences:10},{type:"Dialogue sync \u2013 long",occurrences:8},{type:"True peak out of spec",occurrences:3},{type:"Extraneous efforts",occurrences:3},{type:"Pop, tick, click",occurrences:2}],top_projects_by_errors:[{project_name:"Another Simple Favor",episodes_counted:1,total_errors:8,severity_3_errors:2},{project_name:"Primos",episodes_counted:2,total_errors:12,severity_3_errors:3}]}]},m=s.Ay.div`
  background-color: #f0f9ff;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`,g=s.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,f=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,v=s.Ay.h1`
  font-size: 28px;
  font-weight: bold;
  color: #1f2937;
`,b=s.Ay.div`
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
`,A=s.Ay.button`
  background-color: #e0e7ff;
  color: #4b5563;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c7d2fe;
  }
`,z=s.Ay.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`,P=s.Ay.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
`,E=s.Ay.p`
  font-size: 16px;
  color: #4b5563;
  margin-bottom: 20px;
`,k=s.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`,C=s.Ay.div`
  background-color: ${e=>e.bgColor||"#eef2ff"};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,S=s.Ay.div`
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`,w=s.Ay.div`
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
`,T=s.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`,I=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,M=s.Ay.div`
  font-size: 15px;
  font-weight: 500;
  color: #4b5563;
`,D=s.Ay.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.isPositive?"#16a34a":"#dc2626"};
  display: flex;
  align-items: center;
  gap: 4px;
`,K=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`,q=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #4b5563;
`,$=s.Ay.div`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
`,R=s.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 24px;
  margin-bottom: 20px;
`,F=s.Ay.div`
  height: 300px;
  margin-bottom: 20px;
`,G=s.Ay.div`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`,N=e=>{let{setView:r}=e;const[t,s]=(0,o.useState)(null),[N,Q]=(0,o.useState)(null),[W,B]=(0,o.useState)(null),[H,O]=(0,o.useState)([]),[V,Y]=(0,o.useState)(null);(0,o.useEffect)((()=>{const e=e=>{if(s(e),e&&e.months&&e.months.length>0){const r=e.months.length-1,t=e.months[r];Q(t),r>0&&B(e.months[r-1]);const o=e.months.map((e=>{const r=Math.round(e.total_rejections/e.projects_analyzed),t=+(e.rejections_severity_3/e.projects_analyzed).toFixed(2),o=+(e.rejections_severity_3/e.total_rejections*100).toFixed(1),s=+(10-2*t).toFixed(1);return{name:`${e.month}/${e.year}`,projects:e.projects_analyzed,errors:e.total_rejections,severity3:e.rejections_severity_3,errorsPerProject:r,severity3PerProject:t,severity3Percentage:o,qualityIndex:s<0?0:s>10?10:s}}));O(o);const s={totalProjects:e.months.reduce(((e,r)=>e+r.projects_analyzed),0),totalErrors:e.months.reduce(((e,r)=>e+r.total_rejections),0),totalSeverity3:e.months.reduce(((e,r)=>e+r.rejections_severity_3),0),errorTypes:J(e.months)};Y(s)}};try{e(_)}catch(r){console.error("Errore nel processamento dei dati:",r),e(_)}}),[]);const J=e=>{const r={};return e.forEach((e=>{e.top_error_types.forEach((e=>{r[e.type]?r[e.type]+=e.occurrences:r[e.type]=e.occurrences}))})),Object.entries(r).map((e=>{let[r,t]=e;return{type:r,occurrences:t}})).sort(((e,r)=>r.occurrences-e.occurrences)).slice(0,5)},L=e=>["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"][e-1],U=(e,r)=>r?Math.round((e-r)/r*100):0,X=()=>{r("main")};if(!N)return(0,u.jsx)(m,{children:(0,u.jsxs)(g,{children:[(0,u.jsxs)(f,{children:[(0,u.jsx)(v,{children:"Analizzatore di Rejection"}),(0,u.jsx)(A,{onClick:X,children:"\u2190 Torna alla dashboard"})]}),(0,u.jsx)(z,{children:(0,u.jsx)(P,{children:"Caricamento dati in corso..."})})]})});const Z=Math.round(N.total_rejections/N.projects_analyzed),ee=W?N.projects_analyzed-W.projects_analyzed:0,re=W?N.total_rejections-W.total_rejections:0,te=W?N.rejections_severity_3-W.rejections_severity_3:0,oe=U(N.projects_analyzed,null===W||void 0===W?void 0:W.projects_analyzed),se=U(N.total_rejections,null===W||void 0===W?void 0:W.total_rejections),ie=U(N.rejections_severity_3,null===W||void 0===W?void 0:W.rejections_severity_3);return(0,u.jsx)(m,{children:(0,u.jsxs)(g,{children:[(0,u.jsxs)(f,{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)(v,{children:["Report Mensile QC Audio \u2013 ",L(N.month)," ",N.year]}),(0,u.jsxs)(b,{children:["Aggiornato al ",t.qc_report_data.updated_on]}),(0,u.jsx)(E,{children:t.qc_report_data.notes})]}),(0,u.jsx)(A,{onClick:X,children:"\u2190 Torna alla dashboard"})]}),(0,u.jsxs)(z,{children:[(0,u.jsx)(P,{children:"Informazioni Principali"}),(0,u.jsxs)(k,{children:[(0,u.jsxs)(C,{bgColor:"#dbeafe",children:[(0,u.jsxs)(S,{children:[(0,u.jsx)(y.yd7,{})," Progetti Analizzati"]}),(0,u.jsx)(w,{children:N.projects_analyzed})]}),(0,u.jsxs)(C,{bgColor:"#dcfce7",children:[(0,u.jsxs)(S,{children:[(0,u.jsx)(y.BS8,{})," Errori Totali"]}),(0,u.jsx)(w,{children:N.total_rejections})]}),(0,u.jsxs)(C,{bgColor:"#fee2e2",children:[(0,u.jsxs)(S,{children:[(0,u.jsx)(y.TNq,{})," Errori Gravit\xe0 3"]}),(0,u.jsx)(w,{children:N.rejections_severity_3})]}),(0,u.jsxs)(C,{bgColor:"#f3e8ff",children:[(0,u.jsxs)(S,{children:[(0,u.jsx)(y.YYR,{})," Errori/Progetto"]}),(0,u.jsx)(w,{children:Z})]})]}),W&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(P,{children:["Confronto con ",L(W.month)]}),(0,u.jsxs)(T,{children:[(0,u.jsxs)(I,{children:[(0,u.jsx)(M,{children:"Progetti:"}),(0,u.jsxs)(D,{isPositive:ee>=0,children:[ee>=0?(0,u.jsx)(y.uCC,{}):(0,u.jsx)(y.$TP,{}),ee>=0?"+":"",ee," (",oe,"%)"]})]}),(0,u.jsxs)(I,{children:[(0,u.jsx)(M,{children:"Errori Totali:"}),(0,u.jsxs)(D,{isPositive:re<0,children:[re>=0?(0,u.jsx)(y.uCC,{}):(0,u.jsx)(y.$TP,{}),re>=0?"+":"",re," (",se,"%)"]})]}),(0,u.jsxs)(I,{children:[(0,u.jsx)(M,{children:"Errori Gravit\xe0 3:"}),(0,u.jsxs)(D,{isPositive:te<0,children:[te>=0?(0,u.jsx)(y.uCC,{}):(0,u.jsx)(y.$TP,{}),te>=0?"+":"",te," (",ie,"%)"]})]})]})]})]}),(0,u.jsxs)(z,{children:[(0,u.jsx)(P,{children:"Indice di Qualit\xe0 Audio"}),(0,u.jsx)(E,{children:"Questo grafico rappresenta indici qualitativi slegati dal volume di progetti. I valori mostrano: errori di severit\xe0 3 per progetto, percentuale di errori gravi sul totale, e indice di qualit\xe0 (scala 0-10, dove 10 \xe8 la massima qualit\xe0)."}),(0,u.jsx)(F,{children:(0,u.jsx)(i.u,{width:"100%",height:"100%",children:(0,u.jsxs)(n.E,{data:H,margin:{top:5,right:30,left:20,bottom:5},children:[(0,u.jsx)(a.d,{strokeDasharray:"3 3"}),(0,u.jsx)(c.W,{dataKey:"name"}),(0,u.jsx)(l.h,{yAxisId:"left",orientation:"left"}),(0,u.jsx)(l.h,{yAxisId:"right",orientation:"right",domain:[0,10]}),(0,u.jsx)(d.m,{formatter:(e,r)=>"qualityIndex"===r?[e+"/10","Indice Qualit\xe0"]:"severity3PerProject"===r?[e,"Errori Sev.3/Progetto"]:"severity3Percentage"===r?[e+"%","% Errori Sev.3"]:[e,r]}),(0,u.jsx)(p.s,{}),(0,u.jsx)(x.y,{yAxisId:"right",dataKey:"qualityIndex",name:"Indice Qualit\xe0",fill:"#22c55e",barSize:35}),(0,u.jsx)(x.y,{yAxisId:"left",dataKey:"severity3Percentage",name:"% Errori Sev.3",fill:"#f97316",barSize:15}),(0,u.jsx)(x.y,{yAxisId:"left",dataKey:"severity3PerProject",name:"Errori Sev.3/Progetto",fill:"#ef4444",barSize:15})]})})})]}),(0,u.jsxs)(z,{children:[(0,u.jsx)(P,{children:"Andamento Mensile"}),(0,u.jsx)(F,{children:(0,u.jsx)(i.u,{width:"100%",height:"100%",children:(0,u.jsxs)(j.b,{data:H,margin:{top:5,right:30,left:20,bottom:5},children:[(0,u.jsx)(a.d,{strokeDasharray:"3 3"}),(0,u.jsx)(c.W,{dataKey:"name"}),(0,u.jsx)(l.h,{}),(0,u.jsx)(d.m,{}),(0,u.jsx)(p.s,{}),(0,u.jsx)(h.N,{type:"monotone",dataKey:"projects",stroke:"#3b82f6",name:"Progetti",strokeWidth:2}),(0,u.jsx)(h.N,{type:"monotone",dataKey:"errors",stroke:"#22c55e",name:"Errori Totali",strokeWidth:2}),(0,u.jsx)(h.N,{type:"monotone",dataKey:"severity3",stroke:"#ef4444",name:"Errori Gravit\xe0 3",strokeWidth:2})]})})})]}),(0,u.jsxs)(R,{children:[(0,u.jsxs)(z,{children:[(0,u.jsxs)(P,{children:["Top 5 Errori Audio (",L(N.month)," ",N.year,")"]}),N.top_error_types.map(((e,r)=>(0,u.jsxs)(K,{children:[(0,u.jsxs)(q,{children:[r+1,". ",e.type]}),(0,u.jsx)($,{children:e.occurrences})]},`error-${r}`)))]}),(0,u.jsxs)(z,{children:[(0,u.jsxs)(P,{children:["Progetti con pi\xf9 errori (",L(N.month)," ",N.year,")"]}),N.top_projects_by_errors.map(((e,r)=>(0,u.jsxs)(K,{children:[(0,u.jsxs)(q,{children:[r+1,". ",e.project_name," (",e.episodes_counted," ",1===e.episodes_counted?"episodio":"episodi",")"]}),(0,u.jsxs)($,{children:[e.total_errors," ",(0,u.jsxs)("span",{style:{fontSize:"14px",color:"#dc2626"},children:["(",e.severity_3_errors," grav. 3)"]})]})]},`project-${r}`)))]})]}),(0,u.jsxs)(z,{children:[(0,u.jsxs)(P,{children:["Analisi Dettagliata Progetti (",L(N.month)," ",N.year,")"]}),(0,u.jsx)(F,{children:(0,u.jsx)(i.u,{width:"100%",height:"100%",children:(0,u.jsxs)(n.E,{data:N.top_projects_by_errors,layout:"vertical",margin:{top:5,right:30,left:100,bottom:5},children:[(0,u.jsx)(a.d,{strokeDasharray:"3 3"}),(0,u.jsx)(c.W,{type:"number"}),(0,u.jsx)(l.h,{type:"category",dataKey:"project_name",tick:{fontSize:14}}),(0,u.jsx)(d.m,{}),(0,u.jsx)(p.s,{}),(0,u.jsx)(x.y,{dataKey:"total_errors",name:"Errori Totali",fill:"#3b82f6"}),(0,u.jsx)(x.y,{dataKey:"severity_3_errors",name:"Errori Gravit\xe0 3",fill:"#ef4444"})]})})})]}),V&&(0,u.jsxs)(z,{children:[(0,u.jsxs)(P,{children:["Riassunto Annuale (",N.year,")"]}),(0,u.jsxs)(R,{children:[(0,u.jsx)("div",{children:(0,u.jsxs)(k,{children:[(0,u.jsxs)(C,{bgColor:"#f3f4f6",children:[(0,u.jsxs)(S,{children:["Progetti Totali ",N.year]}),(0,u.jsx)(w,{children:V.totalProjects})]}),(0,u.jsxs)(C,{bgColor:"#f3f4f6",children:[(0,u.jsxs)(S,{children:["Errori Totali ",N.year]}),(0,u.jsx)(w,{children:V.totalErrors})]}),(0,u.jsxs)(C,{bgColor:"#f3f4f6",children:[(0,u.jsxs)(S,{children:["Errori Gravit\xe0 3 ",N.year]}),(0,u.jsx)(w,{children:V.totalSeverity3})]})]})}),(0,u.jsxs)("div",{children:[(0,u.jsxs)(P,{children:["Top 5 Errori (Anno ",N.year,")"]}),V.errorTypes.map(((e,r)=>(0,u.jsxs)(K,{children:[(0,u.jsxs)(q,{children:[r+1,". ",e.type]}),(0,u.jsx)($,{children:e.occurrences})]},`annual-error-${r}`)))]})]})]}),(0,u.jsxs)(G,{children:[(0,u.jsx)("p",{children:"Fonte dati: QC report estratti Sferastudios (solo audio). Aggiornato manualmente ogni fine mese."}),(0,u.jsx)("p",{children:"Nessun errore video incluso."}),(0,u.jsx)("p",{children:"\xa9 StudioStats 2025 Marco Augusto Comba | Versione 1.6.1"})]})]})})}}}]);
//# sourceMappingURL=916.9c961340.chunk.js.map