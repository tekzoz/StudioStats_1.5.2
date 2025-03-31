// Script per importare i dati dei direttori
const path = require('path');
const fs = require('fs');
const { importDirettoriData } = require('../utils/importDirettori');

// Funzione per verificare se un file esiste
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Cerca il file di input con diverse possibili estensioni
function findInputFile() {
  const dataDir = path.resolve(__dirname, '../../data');
  const possibleFileNames = [
    'direttori_input.xlsx',
    'direttori.xlsx',
    'direttori_dati.xlsx',
    'dati_direttori.xlsx',
    'direttori_input.xls',
    'direttori.xls',
    'direttori_input.json',
    'direttori.json'
  ];
  
  for (const fileName of possibleFileNames) {
    const filePath = path.join(dataDir, fileName);
    if (fileExists(filePath)) {
      return filePath;
    }
  }
  
  return null;
}

// Funzione principale per eseguire l'importazione
async function runImport() {
  try {
    console.log('Inizio importazione dati direttori...');
    
    // Cerca il file di input
    const inputFilePath = findInputFile();
    
    if (!inputFilePath) {
      console.error('Nessun file di input trovato nella cartella "data".');
      console.error('Assicurati di avere un file Excel o JSON con uno dei seguenti nomi:');
      console.error('- direttori_input.xlsx/.xls/.json');
      console.error('- direttori.xlsx/.xls/.json');
      console.error('- direttori_dati.xlsx/.xls/.json');
      console.error('- dati_direttori.xlsx/.xls/.json');
      process.exit(1);
    }
    
    const outputFilePath = path.resolve(__dirname, '../dataDirettori.js');
    
    console.log(`File di input: ${inputFilePath}`);
    console.log(`File di output: ${outputFilePath}`);
    
    // Importa i dati
    const importedData = await importDirettoriData(inputFilePath, outputFilePath);
    
    console.log(`Importazione completata con successo!`);
    console.log(`Numero di record importati: ${importedData.length}`);
  } catch (error) {
    console.error('Errore durante l\'importazione dei dati:', error.message);
    process.exit(1);
  }
}

// Esegui l'importazione
runImport(); 