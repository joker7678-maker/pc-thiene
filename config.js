// CONFIGURAZIONE CENTRALE APP VOLONTARI (GithHub)

window.APP_CONFIG = {
    // 1. Scegli qui il PIN per sbloccare l'app sui telefoni
    pinAccesso: "1234",
    
    // 2. Incolla qui ESATTAMENTE il blocco di Firebase
    firebaseSettings: {
  apiKey: "AIzaSyAWHRpXkth-UrnaDVo7GyeFNXpu10_fd54",
  authDomain: "realtime-database-6962f.firebaseapp.com",
  databaseURL: "https://realtime-database-6962f-default-rtdb.firebaseio.com",
  projectId: "realtime-database-6962f",
  storageBucket: "realtime-database-6962f.firebasestorage.app",
  messagingSenderId: "61041045277",
  appId: "1:61041045277:web:b6d0c456d47973db72fbf4",
  measurementId: "G-S9R5G5BNN1"
}
};

// Inizializza automaticamente Firebase per i telefoni
if (window.APP_CONFIG.firebaseSettings && typeof firebase !== 'undefined') {
    firebase.initializeApp(window.APP_CONFIG.firebaseSettings);
    window.db = firebase.database();
}