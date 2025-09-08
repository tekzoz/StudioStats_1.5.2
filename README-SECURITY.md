# 🔐 Guida alla Sicurezza - StudioStats

## ⚠️ IMPORTANTE: Gestione delle Chiavi API

### 🚨 Problema Rilevato
È stata trovata una chiave API Gemini hardcoded nel codice sorgente. Questo rappresenta un **grave rischio di sicurezza**.

### ✅ Soluzione Implementata
Le chiavi API sono ora gestite tramite variabili d'ambiente sicure.

## 🔧 Configurazione Sicura

### 1. Crea il file .env
```bash
cp .env.example .env
```

### 2. Configura le tue chiavi API
Modifica il file `.env` e sostituisci i placeholder con le tue chiavi reali:

```env
REACT_APP_GEMINI_API_KEY=AIzaSyTUACHIAVEAPIKEYQUI
REACT_APP_OPENAI_API_KEY=sk-TUACHIAVEAPIKEYQUIse_necessaria
```

### 3. Ottieni le chiavi API

**Gemini API:**
1. Vai su [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea una nuova API Key
3. Copia la chiave nel file `.env`

**OpenAI API (opzionale):**
1. Vai su [OpenAI Platform](https://platform.openai.com/account/api-keys)
2. Crea una nuova API Key
3. Copia la chiave nel file `.env`

## 🛡️ Azioni di Sicurezza Urgenti

### ⚠️ CHIAVE COMPROMESSA
La chiave `AIzaSyAEBOnhBrvmm-9yCzyjWbTexOUO_4aK5S4` è stata esposta pubblicamente nel codice.

**DEVI IMMEDIATAMENTE:**

1. **Invalida la chiave compromessa:**
   - Vai su [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   - Trova la chiave `AIzaSyAEBOnhBrvmm-9yCzyjWbTexOUO_4aK5S4`
   - Elimina o disabilita la chiave

2. **Crea una nuova chiave:**
   - Genera una nuova chiave API Gemini
   - Configurala nel file `.env` (mai nel codice!)

3. **Controlla l'utilizzo:**
   - Verifica se ci sono stati accessi non autorizzati
   - Controlla le quote e l'utilizzo API

## 📋 Best Practices di Sicurezza

### ✅ FARE:
- Usare sempre variabili d'ambiente per dati sensibili
- Tenere il file `.env` nel .gitignore
- Usare `.env.example` per documentare le variabili necessarie
- Rotatre regolarmente le chiavi API
- Monitorare l'utilizzo delle API

### ❌ NON FARE:
- Mai hardcodare chiavi API nel codice
- Mai committare file `.env` su GitHub
- Mai condividere chiavi API in chat o email
- Mai usare la stessa chiave per ambienti diversi

## 🔄 Deployment Sicuro

### Per Vercel:
1. Vai nelle Settings del progetto
2. Sezione "Environment Variables"
3. Aggiungi: `REACT_APP_GEMINI_API_KEY` = `tua_nuova_chiave`

### Per altri provider:
Configura le variabili d'ambiente nel pannello di controllo del tuo hosting.

## 📞 In Caso di Problemi

Se sospetti che le tue chiavi siano compromesse:
1. Invalida immediatamente le chiavi
2. Genera nuove chiavi
3. Controlla i log di accesso
4. Cambia le chiavi in tutti gli ambienti

---
**Ricorda: La sicurezza è una responsabilità condivisa. Mantieni sempre le tue chiavi API al sicuro!**

