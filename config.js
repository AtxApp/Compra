// ⚙️ CONFIGURACIÓN — el único archivo que tienes que editar.

// 1) Pega aquí los datos de tu app web de Firebase
//    (Consola de Firebase → ⚙️ Configuración del proyecto → Tus apps → SDK setup → Config)
export const firebaseConfig = {
 apiKey: "AIzaSyBKAi_CWsUuxznG_efSALs_EogWHCoEtqk",
  authDomain: "la-compra-d7168.firebaseapp.com",
  projectId: "la-compra-d7168",
  storageBucket: "la-compra-d7168.firebasestorage.app",
  messagingSenderId: "564767631051",
  appId: "1:564767631051:web:79f2a3d0ee6b64834bdd4e"
};

// 2) Vuestros emails (los mismos que crees en Firebase Authentication) y cómo os llamáis.
//    El orden importa: no lo cambies una vez empecéis a usar la app.
export const MEMBERS = [
  { email: "i.laraudogoitia@gmail.com",     name: "Tú" },
  { email: "asedano98@gmail.com", name: "Pareja" }
];
