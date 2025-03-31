// Script per formattare il file data.js
const fs = require('fs');
const path = require('path');

// Percorso del file
const dataFilePath = path.resolve(__dirname, '../data.js');

try {
  console.log(`Tentativo di lettura del file: ${dataFilePath}`);
  
  // Controlla se il file esiste
  if (!fs.existsSync(dataFilePath)) {
    console.error(`Il file ${dataFilePath} non esiste!`);
    process.exit(1);
  }
  
  // Leggi il file
  let fileContent = fs.readFileSync(dataFilePath, 'utf8');
  console.log('File letto con successo. Dimensione originale:', fileContent.length, 'bytes');

  // Trova l'inizio e la fine dell'array di dati
  const dataStartMatch = fileContent.match(/export const foniciData = \[/);
  const dataEndMatch = fileContent.match(/\];(\s*\/\/[^\n]*)?(\s*export)?/);
  
  if (!dataStartMatch || !dataEndMatch) {
    console.error('Non è stato possibile trovare l\'array di dati nel file');
    process.exit(1);
  }
  
  console.log('Array foniciData trovato nel file.');
  const dataStartIndex = dataStartMatch.index + dataStartMatch[0].length;
  const dataEndIndex = dataEndMatch.index;
  
  // Estrai le parti del file
  const preData = fileContent.substring(0, dataStartIndex);
  const data = fileContent.substring(dataStartIndex, dataEndIndex);
  const postData = fileContent.substring(dataEndIndex);
  
  console.log('Dati estratti. Inizio formattazione...');
  
  // Formatta gli oggetti nell'array
  const formattedData = formatFoniciData(data);
  
  // Ricostruisci il file
  const formattedContent = preData + "\n" + formattedData + "\n" + postData;
  
  // Scrivi il file formattato
  fs.writeFileSync(dataFilePath, formattedContent);
  console.log('File formattato con successo! Dimensione finale:', formattedContent.length, 'bytes');
  
} catch (error) {
  console.error('Errore durante la formattazione:', error);
}

/**
 * Formatta l'array di dati dei fonici con indentazione e spaziatura coerenti
 * @param {string} dataString - La stringa contenente l'array di dati
 * @returns {string} - L'array formattato
 */
function formatFoniciData(dataString) {
  // Divide la stringa in singoli oggetti
  const objects = dataString.split('},');
  
  // Formatta ogni oggetto
  const formattedObjects = objects.map((obj, index) => {
    // Salta gli oggetti vuoti
    if (!obj.trim()) return '';
    
    // Aggiungi la parentesi di chiusura se è l'ultimo oggetto
    if (index === objects.length - 1 && !obj.trim().endsWith('}')) {
      obj += '}';
    }
    
    // Formatta l'oggetto
    return formatFonicoObject(obj, index === objects.length - 1);
  });
  
  // Unisci gli oggetti formattati
  return formattedObjects.join(',\n');
}

/**
 * Formatta un singolo oggetto fonico con indentazione e spaziatura coerenti
 * @param {string} objString - La stringa contenente l'oggetto
 * @param {boolean} isLast - Indica se è l'ultimo oggetto nell'array
 * @returns {string} - L'oggetto formattato
 */
function formatFonicoObject(objString, isLast) {
  // Rimuovi spazi bianchi extra
  objString = objString.trim();
  
  // Cerca le proprietà e i loro valori
  const nomeMatch = objString.match(/nome:\s*"([^"]+)"/);
  const dataMatch = objString.match(/data:\s*"([^"]+)"/);
  const turnoMatch = objString.match(/turno:\s*"([^"]+)"/);
  const salaMatch = objString.match(/sala:\s*"([^"]+)"/);
  const turniMatch = objString.match(/turni:\s*(\d+)/);
  
  if (!nomeMatch || !dataMatch || !turnoMatch || !salaMatch || !turniMatch) {
    // Se non riusciamo a estrarre tutte le proprietà, restituisci l'oggetto originale
    return objString + (isLast ? '' : '}');
  }
  
  const nome = nomeMatch[1];
  const data = dataMatch[1];
  const turno = turnoMatch[1];
  const sala = salaMatch[1];
  const turni = turniMatch[1];
  
  // Costruisci l'oggetto formattato
  const formattedObj = `  {
    nome: "${nome}",
    data: "${data}",
    turno: "${turno}",
    sala: "${sala}",
    turni: ${turni}
  }`;
  
  return formattedObj;
} 