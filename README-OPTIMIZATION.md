# Ottimizzazione del caricamento dati in StudioStats

Questo documento descrive le ottimizzazioni implementate per migliorare le performance di caricamento dei dati nell'applicazione StudioStats.

## Problema

Il file `data.js` originale è molto grande (1.1MB) e viene caricato interamente all'avvio dell'applicazione, causando:
- Lentezza nell'avvio iniziale dell'applicazione
- Consumo eccessivo di memoria anche quando si utilizzano solo piccole porzioni dei dati
- Rischio di problemi di performance su dispositivi con risorse limitate

## Soluzione implementata

### 1. Suddivisione dei dati

I dati sono stati suddivisi in file più piccoli e organizzati secondo la seguente struttura:
- Un file per anno: `year[ANNO].js` (es. `year2023.js`)
- Un file per mese: `month[ANNO]-[MESE].js` (es. `month2023-05.js`)
- Un file di configurazione: `dataConfig.js` con informazioni sugli anni disponibili

### 2. Caricamento dinamico e lazy loading

- Utilizzo di `import()` dinamico per caricare i dati solo quando necessario
- Hook personalizzati React per gestire il caricamento asincrono (in `dataLoader.js`):
  - `useDynamicYearData`: Carica i dati di un anno specifico 
  - `useInitialData`: Carica i dati iniziali (configurazione e ultimi 2 anni)
  - `loadMonthData`: Funzione per caricare i dati di un mese specifico

### 3. Aggiornamento delle utility di accesso ai dati

- File `dataUtils.js` aggiornato per supportare sia il modo tradizionale che quello ottimizzato
- Variabile d'ambiente `REACT_APP_USE_LEGACY_DATA` per mantenere la retrocompatibilità

### 4. Stato di caricamento e feedback utente

- Indicatori di caricamento nelle interfacce per fornire feedback durante il caricamento dei dati
- Gestione degli errori migliorata

## Come utilizzare l'ottimizzazione

### Eseguire lo script di suddivisione

1. Assicurati di avere Node.js installato
2. Esegui lo script per suddividere i dati:
   ```
   node src/scripts/splitDataFile.js
   ```
3. Questa operazione creerà la cartella `src/data/` con tutti i file suddivisi

### Modificare l'applicazione per usare il caricamento dinamico

Ogni componente che utilizza i dati deve essere aggiornato per utilizzare i nuovi hook:

```javascript
// Prima
import { getYearData } from './dataUtils';

// Dopo
import { useDynamicYearData } from './dataLoader';

// Nel componente
const { data: yearData, loading, error } = useDynamicYearData(selectedYear);
```

### Gestire il caricamento asincrono nelle interfacce

Aggiungi indicatori di caricamento e gestione degli errori:

```jsx
{loading ? (
  <div>Caricamento dati in corso...</div>
) : error ? (
  <div>Errore nel caricamento dei dati: {error.message}</div>
) : (
  // Renderizza i dati
)}
```

## Vantaggi dell'ottimizzazione

- **Performance migliorata**: il bundle iniziale è più piccolo e l'applicazione si avvia più velocemente
- **Consumo di memoria ridotto**: vengono caricati solo i dati necessari
- **Migliore esperienza utente**: feedback durante il caricamento e tempi di risposta più rapidi
- **Scalabilità**: più facile aggiungere nuovi dati senza peggiorare le performance complessive

## Note tecniche

- Lo script di suddivisione è pensato per essere eseguito una tantum o periodicamente per aggiornare i dati
- La struttura di suddivisione può essere adattata in base ai pattern di utilizzo specifici dell'applicazione
- Per sviluppo e debug, è possibile utilizzare `REACT_APP_USE_LEGACY_DATA=true` per tornare alla modalità originale 