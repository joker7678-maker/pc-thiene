// CONFIGURAZIONE CENTRALE APP VOLONTARI (GithHub)

window.APP_CONFIG = {
    // 1. Scegli qui il PIN per sbloccare l'app sui telefoni
    pinAccesso: "1234",
    
    // 2. Incolla qui ESATTAMENTE il blocco di Firebase
    firebaseSettings: {
  apiKey: "AIzaSyDMcnP_3TD1h9fYobsN6PN5aNGDGHe1y0c",
  authDomain: "so-pcthiene.firebaseapp.com",
  databaseURL: "https://so-pcthiene-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "so-pcthiene",
  storageBucket: "so-pcthiene.firebasestorage.app",
  messagingSenderId: "383344731618",
  appId: "1:383344731618:web:5bb0f9b30d100381bc85bb"
}
};

// Inizializza automaticamente Firebase per i telefoni
if (window.APP_CONFIG.firebaseSettings && typeof firebase !== 'undefined') {
    firebase.initializeApp(window.APP_CONFIG.firebaseSettings);
    window.db = firebase.database();
}