"use strict";(self.webpackChunkdashboard_pumaisdue=self.webpackChunkdashboard_pumaisdue||[]).push([[808],{1808:(e,i,n)=>{n.r(i),n.d(i,{default:()=>W});var t=n(5043),o=n(5464),a=n(108),r=n(5748),l=n(7734),s=n(2185),c=n(6026),d=n(6150),u=n(168),p=n(8306),m=n(516),g=n(2313),h=n(764),f=n(6213),x=n(4510),v=n(9682);const I={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GEMINI_API_KEY||"AIzaSyDrAMa3wyG_9BanK8E7t-8DAWiVGWSLYGA",b=e=>({contents:[{parts:[{text:e}]}],generationConfig:{temperature:.9,topK:40,topP:.95,maxOutputTokens:4096}});var A=n(579);const z=o.Ay.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`,T=o.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,y=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,S=o.Ay.button`
  background-color: #E0E7FF;
  color: #4B5563;
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
    background-color: #C7D2FE;
  }
`,E=o.Ay.button`
  background-color: #3B82F6;
  color: white;
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
    background-color: #2563EB;
  }
`,C=o.Ay.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #1F2937;
`,$=o.Ay.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`,j=o.Ay.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`,P=o.Ay.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1F2937;
`,O=o.Ay.div`
  font-size: 16px;
  line-height: 1.5;
  color: #4B5563;
  white-space: pre-wrap;
`,w=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`,N=o.Ay.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
`,k=o.Ay.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${e=>e.color};
`,R=o.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`,M=o.Ay.button`
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563EB;
  }

  &:disabled {
    background-color: #93C5FD;
    cursor: not-allowed;
  }
`,D=o.Ay.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,L=o.Ay.div`
  font-size: 16px;
  line-height: 1.6;
  color: #4B5563;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 16px;
    color: #1F2937;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 12px;
    color: #1F2937;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
    color: #1F2937;
  }

  p {
    margin-bottom: 16px;
  }

  ul, ol {
    margin-bottom: 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    font-weight: 600;
    color: #1F2937;
  }

  em {
    font-style: italic;
  }

  a {
    color: #3B82F6;
    text-decoration: underline;
  }

  blockquote {
    border-left: 4px solid #E5E7EB;
    padding-left: 16px;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    color: #6B7280;
  }

  code {
    font-family: monospace;
    background-color: #F3F4F6;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 14px;
  }

  hr {
    border: 0;
    height: 1px;
    background-color: #E5E7EB;
    margin: 24px 0;
  }
`,F=e=>["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"][e-1],G=e=>new Intl.NumberFormat("it-IT").format(Math.round(e)),_=e=>new Promise((i=>setTimeout(i,e))),U=async function(e){var i;let n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if("LA_TUA_CHIAVE_API"===I)return"# \u26a0\ufe0f Configurazione API Gemini richiesta\n\nPer utilizzare questa funzionalit\xe0, \xe8 necessario configurare una chiave API Gemini valida.\n\n## Istruzioni per la configurazione:\n\n1. Ottieni una chiave API da [Google AI Studio](https://makersuite.google.com/app/apikey)\n2. Apri il file `src/geminiConfig.js`\n3. Sostituisci `LA_TUA_CHIAVE_API` con la tua chiave API\n4. Salva il file e riavvia l'applicazione";for(let r=0;r<t;r++)try{const i=b(e);return(await f.A.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${I}`,i,{timeout:3e4,headers:{"Content-Type":"application/json"}})).data.candidates[0].content.parts[0].text}catch(a){if(console.error(`Errore nella chiamata API Gemini (tentativo ${r+1}/${t}):`,a),n=a,a.response){var o;if(401===a.response.status)return"# \u26a0\ufe0f Errore di autenticazione\n\nLa chiave API Gemini non \xe8 valida. Verifica la tua chiave in `src/geminiConfig.js`.";if(429===a.response.status){if(r<t-1){const e=1e3*Math.pow(2,r)+1e3*Math.random();console.log(`Rate limit raggiunto. Ritento tra ${Math.round(e/1e3)} secondi...`),await _(e);continue}return`# \u26a0\ufe0f Limite di richieste persistente\n\nHai superato il limite di richieste per la tua chiave API Gemini dopo ${t} tentativi.\n\n## Cosa puoi fare:\n\n1. **Attendi**: I limiti si resetteranno automaticamente (solitamente entro 1 ora)\n2. **Verifica la quota**: Controlla la tua quota API su [Google AI Studio](https://makersuite.google.com/app/apikey)\n3. **Upgrade**: Considera l'aggiornamento a un piano con limiti pi\xf9 elevati\n4. **Riduci le chiamate**: Usa la cache o riduci la frequenza delle richieste\n\nLa prossima volta che generi l'analisi, dovrebbe funzionare se i limiti si sono resettati.`}if(a.response.status>=500&&a.response.status<600&&r<t-1){const e=1e3*Math.pow(2,r);console.log(`Errore del server. Ritento tra ${Math.round(e/1e3)} secondi...`),await _(e);continue}return`# \u26a0\ufe0f Errore nella chiamata API\n\nSi \xe8 verificato un errore (${a.response.status}) durante la chiamata all'API Gemini.\n\n**Dettagli**: ${(null===(o=a.response.data.error)||void 0===o?void 0:o.message)||"Errore sconosciuto"}\n\n**Suggerimenti**:\n- Controlla la validit\xe0 della chiave API\n- Verifica la tua connessione internet\n- Riprova tra qualche minuto`}if(("ECONNABORTED"===a.code||"ENOTFOUND"===a.code||a.message.includes("timeout"))&&r<t-1){const e=1e3*Math.pow(2,r);console.log(`Errore di rete. Ritento tra ${Math.round(e/1e3)} secondi...`),await _(e);continue}break}return`# \u26a0\ufe0f Errore di connessione\n\nNon \xe8 stato possibile contattare l'API Gemini dopo ${t} tentativi.\n\n**Possibili cause**:\n- Problemi di connessione internet\n- Server API temporaneamente non disponibile\n- Limiti di rate raggiunti\n\n**Cosa fare**:\n- Controlla la tua connessione internet\n- Riprova tra qualche minuto\n- Se il problema persiste, potrebbe essere un'interruzione temporanea del servizio\n\n**Ultimo errore**: ${(null===(i=n)||void 0===i?void 0:i.message)||"Errore sconosciuto"}`},B=(e,i,n,t)=>{const o=i>1?i-1:12,a=new Date;return`# REPORT STRATEGICO SULL'ANDAMENTO DEI TURNI DI DOPPIAGGIO\n## Data generazione: ${r=a,r.toLocaleDateString("it-IT",{year:"numeric",month:"long",day:"numeric"})}\n\n> \u26a0\ufe0f **Nota**: Questa \xe8 un'analisi simulata generata localmente perch\xe9 l'API Gemini non \xe8 attualmente disponibile a causa di limiti di utilizzo.\n\n## Riepilogo Esecutivo\nL'analisi dei dati di performance fino a ${F(o)} ${e} mostra una tendenza complessivamente positiva rispetto agli anni precedenti. La produttivit\xe0, misurata in turni di lavoro (${n} turni totali), evidenzia un andamento stagionale con picchi nel periodo primaverile e autunnale.\n\n## Confronto con Gli Anni Precedenti\nIl totale dei turni completati finora (${n}) con una media mensile di ${t.toFixed(2)} turni rappresenta un buon risultato rispetto agli anni precedenti.\n\n## Tendenze Stagionali\nL'analisi trimestrale rivela un pattern coerente con gli anni precedenti, con le seguenti caratteristiche:\n- Primo trimestre: Performance in linea con le aspettative\n- Secondo trimestre: Picco di produttivit\xe0 \n- Terzo trimestre: Stabilizzazione dei valori\n\n## Previsioni per il Resto dell'Anno\nBasandoci sui pattern osservati, ci aspettiamo che la produttivit\xe0 totale dell'anno si attesti intorno ai ${Math.round(12*n/o)} turni, assumendo che il trend attuale continui.\n\n## Raccomandazioni\nPer ottimizzare ulteriormente la performance, suggeriamo di:\n1. Pianificare un incremento strategico della capacit\xe0 produttiva nei mesi tipicamente pi\xf9 deboli\n2. Valutare l'efficienza operativa dei turni nei periodi di picco\n3. Considerare l'espansione delle risorse nei periodi di maggiore domanda\n\n## Nota Tecnica\nPer utilizzare l'analisi AI reale:\n1. Attendi che i limiti di richieste Gemini si azzerino (solitamente dopo alcune ore)\n2. Considera l'aggiornamento del tuo piano Gemini per limiti pi\xf9 elevati\n3. Implementa strategie di caching per ridurre le chiamate API necessarie\n\n---\n\n*Questa analisi simulata \xe8 stata generata localmente. Per analisi pi\xf9 accurate e dettagliate, utilizza la funzionalit\xe0 AI quando sar\xe0 nuovamente disponibile.*`;var r},V=()=>{try{const e=[];for(let i=0;i<localStorage.length;i++){const n=localStorage.key(i);if(n&&n.startsWith("aiAnalysis_")){const i=localStorage.getItem(n);if(i){const t=JSON.parse(i),o=Date.now();o-t.timestamp>6048e5&&e.push(n)}}}e.forEach((e=>localStorage.removeItem(e))),e.length>0&&console.log(`Rimossi ${e.length} elementi dalla cache scaduti`)}catch(e){console.error("Errore nella pulizia della cache:",e)}},q=function(e,i,n){let t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=`aiAnalysis_${e}_${i}`,a={timestamp:Date.now(),analysis:n,isRealAnalysis:t,yearToAnalyze:e,month:i,version:"1.1"};try{localStorage.setItem(o,JSON.stringify(a)),Math.random()<.1&&V()}catch(r){if(console.error("Errore nel salvataggio dell'analisi in cache:",r),"QuotaExceededError"===r.name)try{V(),localStorage.setItem(o,JSON.stringify(a))}catch(l){console.error("Errore anche dopo la pulizia della cache:",l)}}},W=e=>{let{setView:i}=e;const[n,o]=(0,t.useState)({}),[f,I]=(0,t.useState)(""),[b,_]=(0,t.useState)(""),[V,W]=(0,t.useState)(""),[K,H]=(0,t.useState)(!1),[J,Q]=(0,t.useState)(!1),Y=(0,t.useMemo)((()=>(0,v.qe)().map((e=>parseInt(e.value)))),[]),Z=(0,t.useMemo)((()=>(e=>{const i=360/e;return Array.from({length:e},((e,n)=>`hsl(${n*i}, 70%, 50%)`))})(Y.length)),[Y]),{currentYear:X,currentMonth:ee}=(0,v.K4)(),ie=(0,t.useCallback)(((e,i,n,t)=>{const o=i>1?i-1:12,a=12===o?e-1:e,r=n[a]||{},l=Object.values(r).slice(0,o).reduce(((e,i)=>e+((null===i||void 0===i?void 0:i.totaleTurni)||0)),0),s=Object.values(r).slice(0,o).filter((e=>e&&e.totaleTurni>0)).length,c=s>0?l/s:0,d=Object.entries(t).filter((e=>{let[i]=e;return parseInt(i)<a&&parseInt(i)>=2021})).map((e=>{let[i,n]=e;const t=Object.values(n).slice(0,o).reduce(((e,i)=>e+((null===i||void 0===i?void 0:i.totaleTurni)||0)),0);return{year:parseInt(i),totalTurni:t}})),u=d.reduce(((e,i)=>e+i.totalTurni),0)/d.length;let p=`Considerazioni sull'anno in corso ${a} (fino a ${F(o)}):\n\n`;p+=`Nel periodo analizzato, sono stati effettuati un totale di ${G(l)} turni, `,p+=`con una media mensile di ${G(c)} turni. `;const m=(l-u)/u*100;p+=`Questo rappresenta un ${m>0?"aumento":"diminuzione"} del ${G(Math.abs(m))}% `,p+="rispetto alla media di tutti gli anni precedenti nello stesso periodo. ",p+="\n\nAnalisi stagionale:\n";const g=Object.values(r).slice(0,o).map((e=>e?e.totaleTurni:void 0)),h=[g.slice(0,3).filter((e=>void 0!==e)),g.slice(3,6).filter((e=>void 0!==e)),g.slice(6,9).filter((e=>void 0!==e)),g.slice(9,12).filter((e=>void 0!==e))].map((e=>e.length>0?e.reduce(((e,i)=>e+i),0)/e.length:null)),f=["primo","secondo","terzo","quarto"];h.forEach(((e,i)=>{if(null!==e){const n=(e-u/12)/(u/12)*100;p+=`Il ${f[i]} trimestre mostra una media di ${G(e)} turni al mese, `,p+=`${n>0?"superiore":"inferiore"} del ${G(Math.abs(n))}% rispetto alla media degli anni passati.\n`}}));const x=Object.entries(t).map((e=>{let[i,n]=e;return{year:parseInt(i),totalTurni:Object.values(n).slice(0,o).reduce(((e,i)=>e+((null===i||void 0===i?void 0:i.totaleTurni)||0)),0)}})).sort(((e,i)=>i.totalTurni-e.totalTurni)),v=x.findIndex((e=>e.year===a))+1,I=x.length;return p+="\nConclusione:\n",p+="Con le informazioni attuali possiamo determinare che la produttivit\xe0 dell'anno in corso \xe8 ",p+=`${m>0?"superiore":"inferiore"} alla media degli anni passati del ${G(Math.abs(m))}%. `,p+=`Si posiziona al ${v}\xb0 posto su ${I} nella classifica generale. `,p+="Questo posizionamento tiene conto di tutti gli anni disponibili nei dati, ",p+=`mentre il confronto con la media considera solo il periodo analizzato fino ad ora (${F(o)}). `,o<12&&(p+="C'\xe8 ancora tempo per migliorare la performance complessiva dell'anno."),p}),[]),ne=(0,t.useCallback)(((e,i,n)=>{let t="";const o=[];let a=0,r=0;for(let d=0;d<12;d++){const t=n[e][d];if(d<i-1)a+=t?t.totaleTurni:0;else{let i=0,t=0;if(Y.forEach((o=>{if(2020!==o&&o!==e){const e=n[o];e&&e[d]&&e[d].totaleTurni>0&&(i+=e[d].totaleTurni,t++)}})),t>0){const e=Math.round(i/t);r+=e,o.push(`\u2022 ${F(d+1)}: ${G(e)} turni`)}}}const l=a+r,s=Y.map((i=>{if(i===e)return{year:i,totalTurni:l};{const e=Object.values(n[i]).reduce(((e,i)=>e+(i?i.totaleTurni:0)),0);return{year:i,totalTurni:e}}})).sort(((e,i)=>i.totalTurni-e.totalTurni));t+=`Turni effettivi (fino a ${F(i-1)}): ${G(a)}\n`,t+=`Turni previsti (da ${F(i)} a Dicembre): ${G(r)}\n`,t+=`Totale complessivo stimato per l'anno ${e}: ${G(l)}\n\n`,t+=`Previsione per i mesi rimanenti (in base alla media degli anni precedenti):\n${o.join("\n")}\n\n`,t+="Classifica di produttivit\xe0 (totale turni per anno):\n",s.forEach(((i,n)=>{t+=`${n+1}. ${i.year}: ${G(i.totalTurni)} turni`,i.year===e&&(t+=" (proiezione)"),t+="\n"}));const c=s.findIndex((i=>i.year===e))+1;return t+=`\nL'anno ${e} si posiziona attualmente al ${c}\xb0 posto nella classifica di produttivit\xe0.`,t+=1===c?" Questo suggerisce un anno particolarmente produttivo, potenzialmente superando i risultati degli anni precedenti.":c<=3?" Questa \xe8 una performance solida, indicando un anno di buona produttivit\xe0.":" C'\xe8 potenziale per migliorare la produttivit\xe0 nei mesi rimanenti per salire nella classifica.",t}),[Y]),te=(0,t.useCallback)((()=>{const e=[],i=e=>{const i=Y.filter((e=>2020!==e&&e!==X)),t=i.reduce(((i,t)=>{const o=n[t];return i+(o&&o[e]?o[e].totaleTurni:0)}),0);return Math.round(t/i.length)};for(let t=0;t<12;t++){const o={month:F(t+1)};Y.forEach((e=>{const a=n[e];e===X?t<ee-1?(o[e]=a&&a[t]?Math.round(a[t].totaleTurni):0,o[`${e}IsPrediction`]=!1):(o[e]=i(t),o[`${e}IsPrediction`]=!0):o[e]=a&&a[t]?Math.round(a[t].totaleTurni):0})),e.push(o)}return e}),[n,Y,X,ee]),oe=async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];H(!0);try{const t=ee>1?ee-1:12,o=12===t?X-1:X,a=n[o]||{};if(!e){const e=((e,i)=>{try{const n=`aiAnalysis_${e}_${i}`,t=localStorage.getItem(n);if(!t)return null;const o=JSON.parse(t),a=Date.now(),r=o.timestamp;return a-r>(o.isRealAnalysis?6048e5:72e5)?(localStorage.removeItem(n),null):(console.log(`Cache hit per ${e}/${i} - Tipo: ${o.isRealAnalysis?"Reale":"Simulata"}, Et\xe0: ${Math.round((a-r)/6e4)} minuti`),o.analysis)}catch(n){return console.error("Errore nel recupero dell'analisi dalla cache:",n),null}})(o,t);if(e)return W(e),void H(!1)}const r=Object.values(a).slice(0,t).reduce(((e,i)=>e+((null===i||void 0===i?void 0:i.totaleTurni)||0)),0),l=Object.values(a).slice(0,t).filter((e=>e&&e.totaleTurni>0)).length,s=l>0?r/l:0,c=Object.entries(n).filter((e=>{let[i]=e;return parseInt(i)<o&&parseInt(i)>=2021})),d={},u={};for(let e=0;e<12;e++){const i=e+1;let n=0,t=0;c.forEach((i=>{let[o,a]=i;a[e]&&a[e].totaleTurni&&(n+=a[e].totaleTurni,t++)}));const o=t>0?n/t:0;d[i]=o,u[i]={monthName:F(i),mediaStorica:Math.round(o),anniConDati:t}}const p=[];for(let e=0;e<t;e++){const i=a[e],n=e+1,t=(null===i||void 0===i?void 0:i.totaleTurni)||0,o=d[n]||0;if(t>0){const e=o>0?(t-o)/o*100:0;let i="";i=e>15?"Significativamente superiore alla media storica":e>5?"Superiore alla media storica":e>-5?"In linea con la media storica":e>-15?"Inferiore alla media storica":"Significativamente inferiore alla media storica",p.push({month:n,monthName:F(n),turniAttuali:t,mediaStorica:Math.round(o),variazione:Math.round(100*e)/100,performance:i})}}const m=[];c.forEach((e=>{let[i,n]=e;const t=Object.values(n).reduce(((e,i)=>e+((null===i||void 0===i?void 0:i.totaleTurni)||0)),0);m.push({year:parseInt(i),totalTurni:t,note:"(anno completo)"})}));const g=Object.values(a).slice(0,t).reduce(((e,i)=>e+((null===i||void 0===i?void 0:i.totaleTurni)||0)),0);m.push({year:o,totalTurni:g,note:`(fino a ${F(t)})`}),m.sort(((e,i)=>e.year-i.year));const h=new Date,f=`\n        Sei un esperto analista di dati del settore audiovisivo con specifiche competenze nel doppiaggio. La tua analisi \xe8 richiesta dal board dello Studio Pumaisdue, un prestigioso studio di doppiaggio italiano. Esamina attentamente i seguenti dati sui turni di lavoro e produci un report strategico dettagliato.\n        \n        IMPORTANTE: Il report deve iniziare OBBLIGATORIAMENTE con il titolo esatto:\n        # REPORT STRATEGICO SULL'ANDAMENTO DEI TURNI DI DOPPIAGGIO\n        ## Data generazione: ${(e=>e.toLocaleDateString("it-IT",{year:"numeric",month:"long",day:"numeric"}))(h)}\n        \n        ===DATI DI BASE===\n        Anno in analisi: ${o}\n        Mese attuale: ${F(t)}\n        Turni totali completati fino a ${F(t)}: ${r}\n        Media mensile dei turni: ${s.toFixed(2)}\n        \n        ===CONFRONTO MENSILE DETTAGLIATO (${o} vs Media Storica)===\n        I seguenti dati mostrano il confronto preciso tra i turni dell'anno corrente e le medie storiche calcolate:\n        ${JSON.stringify(p,null,2)}\n        \n        ===DATI STORICI RIASSUNTIVI===\n        Totali annuali di tutti gli anni disponibili (per contesto nelle previsioni):\n        NOTA: Gli anni precedenti mostrano i totali completi (12 mesi), l'anno corrente mostra solo i dati fino al mese analizzato.\n        ${JSON.stringify(m,null,2)}\n        \n        ===MEDIE STORICHE MENSILI (TUTTI I 12 MESI)===\n        Le seguenti sono le medie storiche reali calcolate per ogni mese dell'anno basate sui dati degli anni precedenti:\n        ${JSON.stringify(u,null,2)}\n        \n        ===ISTRUZIONI SPECIFICHE===\n        IMPORTANTE: \n        1. Usa ESCLUSIVAMENTE i dati del confronto mensile dettagliato sopra riportato per le tue valutazioni di performance dei mesi gi\xe0 trascorsi.\n        2. Per le PREVISIONI dei mesi futuri, usa ESCLUSIVAMENTE le medie storiche mensili fornite nella sezione "MEDIE STORICHE MENSILI". NON inventare o ipotizzare valori.\n        3. Ogni mese ha gi\xe0 il calcolo preciso della variazione percentuale e la classificazione della performance rispetto alla media storica.\n        \n        La tua analisi deve essere COMPLETA e APPROFONDITA, includendo:\n        \n        1. **RIEPILOGO ESECUTIVO**: \n           - Panoramica concisa basata sui confronti mensili gi\xe0 calcolati\n           - Sintesi dei punti chiave per il management\n           - Riassunto delle performance mese per mese come riportato nei dati\n        \n        2. **ANALISI COMPARATIVA**: \n           - Utilizza le variazioni percentuali gi\xe0 calcolate per ogni mese\n           - Analizza i trend di crescita/diminuzione basandoti sui dati forniti\n           - Posizionamento dell'anno corrente rispetto alla storia dello studio\n           - Pattern comuni identificabili nei diversi mesi\n        \n        3. **ANALISI STAGIONALE**:\n           - Pattern trimestrali e mensili basati sui confronti forniti\n           - Identificazione di periodi di alta/bassa produttivit\xe0\n           - Confronto della stagionalit\xe0 evidenziata dai dati\n        \n        4. **PREVISIONI FUTURE**:\n           - Per i mesi rimanenti dell'anno, usa ESCLUSIVAMENTE i valori delle medie storiche mensili fornite sopra\n           - NON utilizzare valori ipotetici o inventati come "Luglio: 350, Agosto: 300" ecc.\n           - Calcola la stima della produttivit\xe0 annuale totale sommando i turni effettivi gi\xe0 realizzati alle medie storiche reali per i mesi mancanti\n           - Specifica chiaramente che le previsioni sono basate sulle medie storiche reali degli anni precedenti\n           - Per il posizionamento rispetto alla storia dello studio, USA ESCLUSIVAMENTE i dati storici riassuntivi forniti che mostrano i totali completi degli anni precedenti\n           - IMPORTANTE: I totali annuali degli anni precedenti nei dati storici riassuntivi sono COMPLETI (12 mesi), quindi usali per confronti accurati\n           - Considerazioni sui fattori che potrebbero influenzare le previsioni\n        \n        5. **RACCOMANDAZIONI STRATEGICHE**:\n           - Strategie basate sui pattern identificati\n           - Suggerimenti per ottimizzare le risorse nei diversi periodi, specificando quando togliere o aggiungere risorse lavorative al team\n           - Indicazioni su quando aumentare o diminuire collaboratori esterni\n        \n        Formatta il tuo report in Markdown con una struttura chiara e professionale. Usa titoli (##), sottotitoli (###), elenchi puntati e, dove appropriato, enfasi (**testo**) per evidenziare concetti chiave. Il linguaggio deve essere professionale ma accessibile, orientato all'azione e specifico per il settore del doppiaggio.\n        \n        Lo studio utilizzer\xe0 questo report per decisioni strategiche importanti, quindi sii preciso, obiettivo e basati SOLO sui dati di confronto forniti.\n      `;try{const e=await U(f);if(e.includes("# \u26a0\ufe0f")){const e=B(o,ee,r,s);W(e),q(o,t,e,!1)}else W(e),q(o,t,e,!0)}catch(i){console.error("Errore nella chiamata API:",i);const e=B(o,ee,r,s);W(e),q(o,t,e,!1)}}catch(i){console.error("Errore nella preparazione dei dati:",i);const e=X,n=B(e,ee,0,0);W(n);q(e,ee>1?ee-1:12,n,!1)}finally{H(!1)}};(0,t.useEffect)((()=>{(async()=>{const e={};for(const t of Y)e[t]=await(0,v.vz)(t);o(e);const i=ie(X,ee,e,e);I(i);const n=ne(X,ee,e);_(n)})()}),[Y,X,ee,ie,ne]);const ae=(0,t.useMemo)((()=>te()),[te]),re=()=>{const e=`Performance Trend ${X}\n\n${f}\n\n${b}`;navigator.share?navigator.share({title:"Performance Trend",text:e}).catch(console.error):alert("La condivisione non \xe8 supportata su questo browser. Copia e incolla il testo seguente:\n\n"+e)};return(0,A.jsxs)(z,{children:[(0,A.jsxs)(T,{children:[(0,A.jsxs)(y,{children:[(0,A.jsx)(S,{onClick:()=>i("main"),children:"\u2190 Torna alla dashboard"}),(0,A.jsxs)(E,{onClick:re,children:[(0,A.jsx)(p.A,{size:18})," Condividi"]})]}),(0,A.jsx)(C,{children:"Performance Trend"}),(0,A.jsxs)($,{children:[(0,A.jsx)(P,{children:"Trend annuale"}),(0,A.jsx)(a.u,{width:"100%",height:400,children:(0,A.jsxs)(r.b,{data:ae,children:[(0,A.jsx)(l.d,{strokeDasharray:"3 3"}),(0,A.jsx)(s.W,{dataKey:"month"}),(0,A.jsx)(c.h,{}),(0,A.jsx)(d.m,{}),Y.map(((e,i)=>e===X?(0,A.jsxs)(t.Fragment,{children:[(0,A.jsx)(u.N,{type:"monotone",dataKey:i=>i[`${e}IsPrediction`]?void 0:i[e],stroke:Z[i],strokeWidth:3,dot:!1,connectNulls:!0}),(0,A.jsx)(u.N,{type:"monotone",dataKey:i=>{if(i[`${e}IsPrediction`])return i[e];const n=ae.findIndex((i=>i[`${e}IsPrediction`]))-1;return i===ae[n]?i[e]:void 0},stroke:Z[i],strokeWidth:3,strokeDasharray:"5 5",dot:!1,connectNulls:!0})]},e):(0,A.jsx)(u.N,{type:"monotone",dataKey:e.toString(),stroke:Z[i],strokeWidth:1,dot:!1},e)))]})}),(0,A.jsx)(w,{children:Y.map(((e,i)=>(0,A.jsxs)(N,{children:[(0,A.jsx)(k,{color:Z[i]}),(0,A.jsx)("span",{children:e===X?`${e} (linea continua: dati reali, tratteggiata: previsione)`:e})]},e)))})]}),(0,A.jsxs)(j,{children:[(0,A.jsx)(P,{children:"Considerazioni sull'anno in corso (AI)"}),V?(0,A.jsxs)("div",{children:[(0,A.jsx)(L,{children:(0,A.jsx)(x.oz,{children:V})}),(0,A.jsxs)("div",{style:{display:"flex",gap:"12px",marginTop:"16px",flexWrap:"wrap"},children:[(0,A.jsx)(M,{onClick:()=>oe(!0),disabled:K,children:K?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(D,{})," Rigenerazione in corso..."]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m.A,{size:18})," Forza aggiornamento"]})}),(0,A.jsxs)(M,{onClick:()=>{try{const e=V.replace(/#{1,6}\s(.*)/g,"$1\n").replace(/\*\*(.*?)\*\*/g,"$1").replace(/_(.*?)_/g,"$1").replace(/\[(.*?)\]\((.*?)\)/g,"$1 ($2)");navigator.clipboard.writeText(e).then((()=>{alert("Report copiato negli appunti!")})).catch((e=>{console.error("Errore durante la copia negli appunti:",e),alert("Impossibile copiare il report. Controlla le autorizzazioni del browser.")}))}catch(e){console.error("Errore nella formattazione del testo:",e)}},disabled:K,style:{backgroundColor:"#4CAF50"},children:[(0,A.jsx)(g.A,{size:18})," Copia report"]}),(0,A.jsxs)(M,{onClick:()=>{const e=`Analisi Performance Studio Pumaisdue - ${X}`,i=`Analisi delle performance dello Studio Pumaisdue per l'anno ${X}. Dati aggiornati al ${F(ee)}.`;if(navigator.share)navigator.share({title:e,text:i}).then((()=>console.log("Condivisione completata"))).catch((e=>console.error("Errore durante la condivisione:",e)));else{const n=`${e}\n\n${i}\n\nDati analizzati con StudioStats.`;window.confirm("La condivisione diretta non \xe8 supportata in questo browser. Vuoi copiare il testo per condividerlo manualmente?")&&navigator.clipboard.writeText(n).then((()=>alert("Testo copiato negli appunti! Ora puoi incollarlo sul social che preferisci."))).catch((e=>console.error("Errore durante la copia:",e)))}},disabled:K,style:{backgroundColor:"#2196F3"},children:[(0,A.jsx)(h.A,{size:18})," Condividi report"]})]})]}):(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{children:"Genera un'analisi dettagliata sull'anno in corso utilizzando l'intelligenza artificiale."}),(0,A.jsx)("p",{children:"Questa funzionalit\xe0 utilizza l'API Gemini per analizzare i dati e fornire insight approfonditi."}),(0,A.jsxs)("div",{style:{backgroundColor:"#F0F9FF",border:"1px solid #0EA5E9",borderRadius:"8px",padding:"12px",margin:"16px 0",fontSize:"14px",color:"#0369A1"},children:[(0,A.jsx)("strong",{children:"\ud83d\udca1 Sistema migliorato:"}),(0,A.jsxs)("ul",{style:{margin:"8px 0",paddingLeft:"16px"},children:[(0,A.jsx)("li",{children:"Retry automatico con backoff esponenziale in caso di rate limits"}),(0,A.jsx)("li",{children:"Cache intelligente per ridurre le chiamate API"}),(0,A.jsx)("li",{children:"Gestione migliorata degli errori con messaggi pi\xf9 specifici"}),(0,A.jsx)("li",{children:"Timeout ottimizzato per evitare attese eccessive"})]}),(0,A.jsxs)("div",{style:{marginTop:"12px",borderTop:"1px solid #BAE6FD",paddingTop:"12px"},children:[(0,A.jsx)("button",{onClick:()=>Q(!J),style:{background:"none",border:"none",color:"#0369A1",cursor:"pointer",fontSize:"13px",textDecoration:"underline"},children:J?"\ud83d\udd27 Nascondi diagnostica":"\ud83d\udd27 Mostra strumenti diagnostica"}),J&&(0,A.jsxs)("div",{style:{marginTop:"12px"},children:[(0,A.jsxs)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,A.jsx)("button",{onClick:async()=>{try{const e="Test di connessione API. Rispondi semplicemente con 'OK'.",i=await U(e,1);i.includes("# \u26a0\ufe0f")?alert("\u274c Test API fallito:\n\n"+i.replace(/[#*]/g,"")):alert("\u2705 Test API riuscito! L'API Gemini \xe8 funzionante.")}catch(e){alert("\u274c Errore nel test API:\n\n"+e.message)}},style:{backgroundColor:"#059669",color:"white",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer"},children:"Test API"}),(0,A.jsx)("button",{onClick:()=>{try{const e=[];for(let i=0;i<localStorage.length;i++){const n=localStorage.key(i);n&&n.startsWith("aiAnalysis_")&&e.push(n)}e.forEach((e=>localStorage.removeItem(e))),alert(`Cache pulita! Rimossi ${e.length} elementi.`)}catch(e){console.error("Errore nella pulizia della cache:",e),alert("Errore durante la pulizia della cache.")}},style:{backgroundColor:"#DC2626",color:"white",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer"},children:"Pulisci Cache"}),(0,A.jsx)("button",{onClick:()=>{const e=(()=>{try{const e={totalItems:0,realAnalysis:0,simulatedAnalysis:0,totalSize:0,oldestItem:null,newestItem:null};for(let i=0;i<localStorage.length;i++){const n=localStorage.key(i);if(n&&n.startsWith("aiAnalysis_")){const i=localStorage.getItem(n);if(i){const n=JSON.parse(i);e.totalItems++,e.totalSize+=i.length,n.isRealAnalysis?e.realAnalysis++:e.simulatedAnalysis++,(!e.oldestItem||n.timestamp<e.oldestItem)&&(e.oldestItem=n.timestamp),(!e.newestItem||n.timestamp>e.newestItem)&&(e.newestItem=n.timestamp)}}}return e}catch(e){return console.error("Errore nel recupero delle statistiche della cache:",e),null}})();if(e){const i=e.oldestItem?new Date(e.oldestItem).toLocaleDateString("it-IT"):"N/A",n=e.newestItem?new Date(e.newestItem).toLocaleDateString("it-IT"):"N/A";alert(`Statistiche Cache:\n\nTotale elementi: ${e.totalItems}\nAnalisi reali: ${e.realAnalysis}\nAnalisi simulate: ${e.simulatedAnalysis}\nDimensione totale: ${Math.round(e.totalSize/1024)} KB\nPi\xf9 vecchia: ${i}\nPi\xf9 recente: ${n}`)}else alert("Errore nel recupero delle statistiche cache")},style:{backgroundColor:"#7C3AED",color:"white",border:"none",borderRadius:"4px",padding:"6px 12px",fontSize:"12px",cursor:"pointer"},children:"Info Cache"})]}),(0,A.jsx)("p",{style:{fontSize:"11px",margin:"8px 0 0 0",color:"#64748B"},children:"Usa questi strumenti per diagnosticare problemi con l'API Gemini"})]})]})]}),(0,A.jsx)(M,{onClick:()=>oe(!1),disabled:K,children:K?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(D,{})," Generazione in corso..."]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m.A,{size:18})," Genera analisi AI"]})})]})]}),(0,A.jsxs)(j,{children:[(0,A.jsx)(P,{children:"Previsione per i prossimi mesi"}),(0,A.jsx)(O,{children:b})]}),(0,A.jsxs)(R,{children:[(0,A.jsx)(M,{onClick:()=>i("main"),children:"Torna alla Dashboard"}),(0,A.jsxs)(M,{onClick:re,children:[(0,A.jsx)(p.A,{size:20}),"Condividi"]})]})]}),(0,A.jsx)("div",{style:{textAlign:"center",marginTop:"30px",paddingTop:"20px",borderTop:"1px solid #e5e7eb",fontSize:"14px",color:"#6b7280"},children:(0,A.jsx)("p",{children:"\xa9 StudioStats 2025 Marco Augusto Comba | Versione 1.6.1"})})]})}}}]);
//# sourceMappingURL=808.e7c3129a.chunk.js.map