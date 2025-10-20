# 📊 StudioStats - Dashboard Statistiche Studio Pumaisdue

<div align="center">

![Version](https://img.shields.io/badge/version-1.6.1-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-Private-red.svg)

*Dashboard professionale per il monitoraggio e l'analisi delle performance dello Studio Pumaisdue*

</div>

---

## 🎯 Panoramica

**StudioStats** è un'applicazione web moderna e interattiva progettata per fornire analisi approfondite e visualizzazioni dettagliate delle performance dello studio di produzione. Il sistema traccia e confronta metriche di performance per diversi ruoli (Assistenti, Direttori, Fonici) attraverso periodi temporali variabili.

### ✨ Caratteristiche Principali

- 📈 **Visualizzazioni Avanzate**: Grafici interattivi realizzati con Chart.js e Recharts
- 🔍 **Analisi Comparative**: Confronto mese per mese e anno per anno
- 🎭 **Multi-Ruolo**: Monitoraggio separato per Assistenti, Direttori e Fonici
- 🤖 **AI Integration**: Supporto per analisi avanzate tramite Google GenAI
- 📱 **Responsive Design**: Interfaccia ottimizzata per ogni dispositivo grazie a Tailwind CSS
- 📊 **Export Dati**: Gestione ed esportazione dati in formato Excel
- ⚡ **Performance Real-time**: Gauge e indicatori di performance in tempo reale
- 🔄 **Analisi Tendenze**: Visualizzazione trend di performance nel tempo

---

## 🚀 Installazione Rapida

### Prerequisiti

- **Node.js** (versione 14 o superiore)
- **npm** o **yarn**

### Passi di Installazione

```bash
# 1. Clona il repository
git clone https://github.com/tuousername/StudioStats.git

# 2. Entra nella directory del progetto
cd StudioStats_1.6.0

# 3. Installa le dipendenze
npm install

# 4. Avvia l'applicazione in modalità sviluppo
npm start
```

L'applicazione sarà disponibile su [http://localhost:3000](http://localhost:3000) 🎉

---

## 📦 Tecnologie Utilizzate

### Core Framework
- **React 18.3.1** - Framework JavaScript per UI moderne
- **React Router** - Navigazione single-page application

### Visualizzazione Dati
- **Chart.js 4.4.4** - Grafici dinamici e interattivi
- **Recharts 2.15.1** - Componenti grafici per React
- **React-ChartJS-2** - Wrapper React per Chart.js

### Stile e UI
- **Tailwind CSS 3.4.10** - Framework CSS utility-first
- **Styled Components 6.1.13** - CSS-in-JS
- **Lucide React** - Libreria di icone moderne
- **React Icons** - Set completo di icone

### AI e Analisi
- **Google GenAI 0.7.0** - Integrazione intelligenza artificiale
- **Axios 1.8.3** - Client HTTP per API

### Utilità
- **date-fns 4.1.0** - Manipolazione date JavaScript
- **XLSX 0.18.5** - Gestione file Excel
- **React Markdown** - Rendering markdown

---

## 🎨 Struttura del Progetto

```
StudioStats_1.6.0/
├── public/                    # File statici
├── src/
│   ├── Components.js          # Componenti UI riutilizzabili
│   ├── Dashboard.js           # Dashboard principale
│   ├── MainView.js            # Vista principale
│   ├── LastMonthView.js       # Visualizzazione ultimo mese
│   ├── LastYearView.js        # Visualizzazione ultimo anno
│   ├── CompareMonthsView.js   # Confronto tra mesi
│   ├── CompareYearsView.js    # Confronto tra anni
│   ├── PerformanceTrendView.js # Tendenze performance
│   ├── RejectionAnalyzerView.js # Analisi rifiuti
│   ├── StatisticheAssistenti.js # Statistiche assistenti
│   ├── StatisticheDirettori.js  # Statistiche direttori
│   ├── StatisticheFonici.js     # Statistiche fonici
│   ├── DataInputView.js       # Input e gestione dati
│   ├── data/                  # Dati storici e configurazioni
│   │   ├── dataConfig.js
│   │   ├── month2024-*.js     # Dati mensili 2024
│   │   ├── month2025-*.js     # Dati mensili 2025
│   │   ├── year2024.js        # Aggregati annuali
│   │   └── year2025.js
│   ├── scripts/               # Script di utilità
│   │   ├── splitDataFile.js
│   │   ├── formatDirettoriData.js
│   │   ├── formatAssistentiData.js
│   │   └── importDirettoriData.js
│   └── utils/                 # Funzioni di utilità
├── tailwind.config.js         # Configurazione Tailwind
├── craco.config.js            # Configurazione CRACO
└── package.json               # Dipendenze del progetto
```

---

## 🔧 Script Disponibili

### Sviluppo e Build

```bash
# Avvia server di sviluppo
npm start

# Crea build di produzione
npm run build

# Esegue i test
npm test
```

### Gestione Dati

```bash
# Dividi file dati per ottimizzazione
npm run split-data

# Formatta dati direttori
npm run format-direttori

# Formatta dati assistenti
npm run format-assistenti

# Importa dati direttori
npm run import-direttori

# Formatta file dati generici
npm run format-data
```

---

## 📊 Viste e Funzionalità

### 🏠 Dashboard Principale
Vista generale con accesso rapido a tutte le statistiche e confronti disponibili.

### 📅 Ultimo Mese
Analisi dettagliata delle performance del mese più recente con grafici e metriche chiave.

### 📆 Ultimo Anno
Panoramica annuale con trend, confronti e statistiche aggregate.

### 🔄 Confronto Mesi
Confronta performance tra diversi mesi per identificare pattern e tendenze.

### 🔄 Confronto Anni
Analisi comparativa anno su anno per valutare crescita e progressi.

### 📈 Analisi Tendenze
Visualizzazione grafica dell'evoluzione delle performance nel tempo.

### ❌ Analizzatore Rifiuti
Analisi approfondita dei rifiuti con identificazione delle cause principali.

### 👥 Statistiche per Ruolo
- **Assistenti**: Performance e metriche degli assistenti di studio
- **Direttori**: Statistiche e KPI dei direttori di produzione
- **Fonici**: Analisi delle performance dei tecnici del suono

---

## 🔐 Configurazione

### API Keys
Il progetto supporta l'integrazione con servizi AI. Per configurare le chiavi API:

1. Crea file di configurazione (se necessario)
2. Aggiungi le tue chiavi in `src/geminiConfig.js` o `src/openaiConfig.js`
3. **Non committare mai** le chiavi API nel repository

### Personalizzazione
- **Tema**: Modifica `tailwind.config.js` per personalizzare colori e stili
- **Dati**: Aggiorna i file in `src/data/` per inserire nuove statistiche
- **Componenti**: Estendi o modifica i componenti in `src/Components.js`

---

## 📱 Compatibilità Browser

StudioStats è compatibile con:

- ✅ Chrome (ultima versione)
- ✅ Firefox (ultima versione)
- ✅ Safari (ultima versione)
- ✅ Edge (ultima versione)

---

## 🤝 Contribuire

Questo è un progetto privato per Studio Pumaisdue. Per contribuire:

1. Crea un branch per la tua feature (`git checkout -b feature/NuovaFunzionalita`)
2. Committa le modifiche (`git commit -m 'Aggiunge nuova funzionalità'`)
3. Push del branch (`git push origin feature/NuovaFunzionalita`)
4. Apri una Pull Request

---

## 📝 Documentazione Aggiuntiva

- [README-OpenAI.md](./README-OpenAI.md) - Integrazione OpenAI
- [README-OPTIMIZATION.md](./README-OPTIMIZATION.md) - Ottimizzazioni performance
- [README-SECURITY.md](./README-SECURITY.md) - Best practice di sicurezza

---

## 🐛 Troubleshooting

### L'applicazione non parte?
```bash
# Pulisci la cache e reinstalla
rm -rf node_modules package-lock.json
npm install
npm start
```

### Errori di build?
```bash
# Verifica la versione di Node.js
node --version  # Dovrebbe essere >= 14

# Aggiorna React Scripts
npm install react-scripts@latest
```

### Problemi con Tailwind?
```bash
# Rigenera i file di configurazione
npx tailwindcss init -p
```

---

## 📄 Licenza

Questo progetto è privato e riservato a **Studio Pumaisdue**. Tutti i diritti riservati.

---

## 👨‍💻 Autore

Sviluppato con ❤️ per **Studio Pumaisdue**

---

<div align="center">

**StudioStats v1.6.0** - Dashboard Professionale per Studio di Produzione

*Trasformiamo i dati in decisioni intelligenti* 🚀

</div>
