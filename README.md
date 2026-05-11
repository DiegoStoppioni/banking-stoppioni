# 🏦 MiaHomeBanking

**MiaHomeBanking** è una Single Page Application (SPA) sviluppata con **Angular** progettata per la gestione semplificata delle finanze personali. Il sistema permette di monitorare il proprio patrimonio, registrare transazioni e visualizzare conversioni in tempo reale tra valute tradizionali e criptovalute.

---

## ✨ Funzionalità

### 💰 Gestione Finanziaria
- **Registrazione Movimenti**: Interfaccia intuitiva per inserire depositi (entrate) e prelievi (uscite).
- **Calcolo Saldo**: Aggiornamento automatico e dinamico del saldo attuale in base allo storico.
- **Lista e Storico**: Visualizzazione tabellare di tutti i movimenti effettuati.
- **Dettaglio Movimento**: Visualizzazione approfondita dei dati per ogni singola operazione.

### 🌍 Integrazioni Exchange
- **Convertitore Valute Fiat**: Conversione del saldo nelle principali valute mondiali tramite l'API di [Frankfurter](https://frankfurter.app).
- **Crypto Watch**: Quotazioni in tempo reale e conversione del saldo in asset digitali (BTC, ETH, ecc.) utilizzando le API di [Binance](https://github.io).

---

## 🛠️ Tecnologie Utilizzate

- **Core**: [Angular](https://angular.io)
- **Linguaggio**: TypeScript
- **HTTP Client**: Per la gestione delle chiamate asincrone alle API esterne
- **Routing**: Per la navigazione fluida tra lista movimenti e dettagli

---

## 🚀 Installazione

1. **Clona il progetto**
   ```bash
   git clone https://github.com
   ```

2. **Entra nella cartella**
   ```bash
   cd miahombanking
   ```

3. **Installa le dipendenze**
   ```bash
   npm install
   ```

4. **Avvia il server di sviluppo**
   ```bash
   ng serve
   ```
   L'applicazione sarà disponibile all'indirizzo `http://localhost:4200/`.

---

## 📁 Struttura della Cartella `src/app`

- `components/`: Contiene i componenti UI (dashboard, lista-movimenti, form-movimento).
- `services/`: Contiene i servizi per la logica di business e l'integrazione API (FrankfurterService, BinanceService).
- `models/`: Interfacce per la tipizzazione dei dati (Movimento, Valuta).

---

## 📄 Licenza

Distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.