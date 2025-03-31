const fs = require('fs');
const path = require('path');

// Percorso del file
const filePath = path.resolve(__dirname, '../dataDirettori.js');

// Leggi il file
let content = fs.readFileSync(filePath, 'utf8');

// Estrai la parte dell'array di dati
const arrayStartMatch = content.match(/export const direttoriData = \[/);
const arrayEndMatch = content.match(/\];[\r\n\s]*export const get/);

if (!arrayStartMatch || !arrayEndMatch) {
  console.error('Non è stato possibile trovare l\'array dei dati nel file');
  process.exit(1);
}

const arrayStartIndex = arrayStartMatch.index + arrayStartMatch[0].length;
const arrayEndIndex = arrayEndMatch.index + 2; // +2 per includere i caratteri "];"

// Estrai il contenuto dell'array
const arrayContent = content.substring(arrayStartIndex, arrayEndIndex);

// Trasforma in un array JavaScript valido
try {
  // Converti il contenuto in un array JavaScript
  const dataArray = eval(`[${arrayContent.slice(0, -2)}]`); // Rimuovi "];" alla fine

  // Formatta ogni elemento con indentazione di 2 spazi
  const formattedEntries = dataArray.map(entry => {
    return `  {
    "nome": "${entry.nome}",
    "mese": "${entry.mese}",
    "turni": ${entry.turni}
  }`;
  }).join(',\n');

  // Ricostruisci il contenuto del file
  const beforeArray = content.substring(0, arrayStartMatch.index);
  const exportStatement = 'export const direttoriData = [\n';
  const afterArray = content.substring(arrayEndIndex);

  const newContent = `${beforeArray}${exportStatement}${formattedEntries}\n];${afterArray}`;

  // Scrivi il file
  fs.writeFileSync(filePath, newContent);
  console.log('File formattato con successo!');

} catch (error) {
  console.error('Errore durante la formattazione del file:', error);
} 