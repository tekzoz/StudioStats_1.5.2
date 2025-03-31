const fs = require('fs');
const path = require('path');

// Percorso del file
const filePath = path.resolve(__dirname, '../dataAssistenti.js');

try {
  console.log(`Tentativo di lettura del file: ${filePath}`);
  
  // Controlla se il file esiste
  if (!fs.existsSync(filePath)) {
    console.error(`Il file ${filePath} non esiste!`);
    process.exit(1);
  }
  
  // Leggi il file
  let fileContent = fs.readFileSync(filePath, 'utf8');
  console.log('File letto con successo');
  
  // Strategia più semplice: correggiamo direttamente l'indentazione
  // Trova ogni oggetto e riformattalo
  const formattedContent = fileContent.replace(
    /\s*\{\s*nome:\s*"([^"]+)",\s*mese:\s*"([^"]+)",\s*turni:\s*(\d+)\s*\}/g,
    `  {
    "nome": "$1",
    "mese": "$2",
    "turni": $3
  }`
  );
  
  // Sostituisci la spaziatura anomala tra oggetti
  const cleanedContent = formattedContent
    .replace(/,\s*\n\s*\n\s*/g, ',\n') // Rimuovi spazi extra tra oggetti
    .replace(/\n\s{4,}\{/g, '\n  {')   // Correggi indentazione delle parentesi graffe
    .replace(/\s{4,}"nome"/g, '    "nome"') // Correggi indentazione degli attributi
    .replace(/\n\s+\];/g, '\n];'); // Correggi indentazione della parentesi finale

  // Scrivi il contenuto formattato nel file
  fs.writeFileSync(filePath, cleanedContent);
  console.log('Formattazione completata con successo!');
  
} catch (error) {
  console.error('Errore durante la formattazione:', error);
} 