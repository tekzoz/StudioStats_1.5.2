// importDirettori.js
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

/**
 * Funzione per importare i dati dei direttori da un formato di input
 * e convertirli nel formato utilizzato dall'applicazione
 * 
 * @param {string} inputFilePath - Percorso del file di input contenente i dati dei direttori
 * @param {string} outputFilePath - Percorso del file di output dove salvare i dati convertiti
 * @returns {Promise<Object>} - Promessa che si risolve con i dati importati o si rifiuta con un errore
 */
function importDirettoriData(inputFilePath, outputFilePath = null) {
  return new Promise((resolve, reject) => {
    try {
      // Verifica che il file di input esista
      if (!fs.existsSync(inputFilePath)) {
        return reject(new Error(`Il file di input ${inputFilePath} non esiste`));
      }

      console.log(`File di input trovato: ${inputFilePath}`);
      
      // Determina il tipo di file in base all'estensione
      const fileExtension = path.extname(inputFilePath).toLowerCase();
      
      let parsedData;
      
      if (fileExtension === '.xlsx' || fileExtension === '.xls') {
        // Importazione da Excel
        console.log('Elaborazione file Excel...');
        try {
          // Leggi il file Excel
          const workbook = XLSX.readFile(inputFilePath);
          
          // Ottieni il nome del primo foglio
          const firstSheetName = workbook.SheetNames[0];
          console.log(`Foglio Excel trovato: ${firstSheetName}`);
          
          // Ottieni i dati dal foglio
          const worksheet = workbook.Sheets[firstSheetName];
          
          // Converti il foglio in JSON
          parsedData = XLSX.utils.sheet_to_json(worksheet);
          console.log(`Letti ${parsedData.length} record dal file Excel`);
        } catch (error) {
          return reject(new Error(`Errore nell'elaborazione del file Excel: ${error.message}`));
        }
      } else if (fileExtension === '.json') {
        // Importazione da JSON
        console.log('Elaborazione file JSON...');
        try {
          // Leggi il file di input
          const inputData = fs.readFileSync(inputFilePath, 'utf8');
          parsedData = JSON.parse(inputData);
          console.log(`Letti ${parsedData.length} record dal file JSON`);
        } catch (error) {
          return reject(new Error(`Errore nel parsing del file JSON: ${error.message}`));
        }
      } else {
        return reject(new Error(`Formato file non supportato: ${fileExtension}. Supportati: .xlsx, .xls, .json`));
      }

      // Trasformazione dei dati
      const transformedData = transformDirettoriData(parsedData);
      console.log(`Trasformati ${transformedData.length} record`);
      
      // Se è specificato un file di output, salva i dati
      if (outputFilePath) {
        // Formato di output basato sul file dataAssistenti.js
        const outputContent = generateOutputContent(transformedData);
        fs.writeFileSync(outputFilePath, outputContent);
        console.log(`Dati salvati nel file: ${outputFilePath}`);
      }
      
      // Restituisci i dati trasformati
      resolve(transformedData);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Trasforma i dati dal formato di input al formato richiesto dall'applicazione
 * 
 * @param {Array} inputData - Dati di input nel formato originale
 * @returns {Array} - Dati trasformati nel formato richiesto dall'applicazione
 */
function transformDirettoriData(inputData) {
  // Se non ci sono dati, restituisci un array vuoto
  if (!Array.isArray(inputData) || inputData.length === 0) {
    console.warn('Nessun dato da trasformare');
    return [];
  }
  
  // Verifica le proprietà disponibili nel primo record
  const firstRecord = inputData[0];
  console.log('Struttura del primo record:', Object.keys(firstRecord));
  
  // Qui applicheremo la logica di trasformazione basata sul formato effettivo
  // Per ora, creiamo una mappatura generica che dovrà essere aggiornata
  // quando vedremo il formato esatto del file Excel
  
  try {
    return inputData.map(record => {
      // Assumiamo che il file Excel abbia colonne con nomi specifici
      // Questo dovrà essere aggiornato in base al formato effettivo
      
      // Cerca possibili campi per il nome
      const nome = record.NOME || record.Nome || record.nome || 
                  record.DIRETTORE || record.Direttore || record.direttore || 
                  record.NOMINATIVO || record.Nominativo || record.nominativo || 
                  "Nome non trovato";
      
      // Cerca possibili campi per la data/mese
      let mese = record.MESE || record.Mese || record.mese || 
                record.DATA || record.Data || record.data || 
                record.PERIODO || record.Periodo || record.periodo;
      
      // Se mese è una data completa, estraiamo anno-mese
      if (mese instanceof Date) {
        mese = `${mese.getFullYear()}-${String(mese.getMonth() + 1).padStart(2, '0')}`;
      } else if (typeof mese === 'string') {
        // Prova a convertire vari formati di data in YYYY-MM
        const dateRegex = /(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/;
        const match = mese.match(dateRegex);
        
        if (match) {
          let [_, day, month, year] = match;
          // Aggiungi 2000 se l'anno è a due cifre
          if (year.length === 2) {
            year = parseInt(year) + 2000;
          }
          mese = `${year}-${String(parseInt(month)).padStart(2, '0')}`;
        }
      }
      
      // Se non è stato possibile determinare il mese, usa l'anno corrente e mese 1
      if (!mese || typeof mese !== 'string') {
        const now = new Date();
        mese = `${now.getFullYear()}-01`;
      }
      
      // Cerca possibili campi per i turni
      const turni = record.TURNI || record.Turni || record.turni || 
                   record.NUMERO_TURNI || record.NumeroTurni || record.numeroTurni || 
                   record.NUMERO || record.Numero || record.numero || 0;
      
      return {
        nome: String(nome).trim(),
        mese: String(mese).trim(),
        turni: parseInt(turni) || 0
      };
    });
  } catch (error) {
    console.error('Errore durante la trasformazione dei dati:', error);
    return [];
  }
}

/**
 * Genera il contenuto del file di output nel formato corretto
 * 
 * @param {Array} data - Dati trasformati da scrivere nel file
 * @returns {string} - Contenuto del file formattato
 */
function generateOutputContent(data) {
  const arrayString = data.map(item => {
    return `  {
    "nome": "${item.nome}",
    "mese": "${item.mese}",
    "turni": ${item.turni}
  }`;
  }).join(',\n');
  
  return `// dataDirettori.js - File generato automaticamente

export const direttoriData = [
${arrayString}
];

// Funzione per ottenere il conteggio dei turni per un periodo
export const getDirettoriTurnCountsForPeriod = (period) => {
  const today = new Date();

  let startDate;
  let endDate;

  if (period === 'mese') {
    // Ultimo mese completo
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const firstDayThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    startDate = lastMonth;
    endDate = firstDayThisMonth;
  } else if (period === 'quadrimestre') {
    // Ultimi quattro mesi completi precedenti
    startDate = new Date(today.getFullYear(), today.getMonth() - 4, 1);
    endDate = new Date(today.getFullYear(), today.getMonth(), 1);
  } else if (period === 'anno') {
    // Dall'inizio dell'anno fino ad oggi
    startDate = new Date(today.getFullYear(), 0, 1);
    endDate = today;
  }

  // Filtra i dati nel range di date
  const filteredData = direttoriData.filter(({ mese }) => {
    const dataMese = new Date(mese + '-01');
    return dataMese >= startDate && dataMese < endDate;
  });

  // Somma i turni per ogni direttore
  const counts = {};
  filteredData.forEach(({ nome, turni }) => {
    counts[nome] = (counts[nome] || 0) + turni;
  });

  // Converti in array e ordina
  return Object.entries(counts)
    .map(([nome, turni]) => ({ nome, turni }))
    .sort((a, b) => b.turni - a.turni);
};
`;
}

// Esporta le funzioni
module.exports = {
  importDirettoriData,
  transformDirettoriData
}; 