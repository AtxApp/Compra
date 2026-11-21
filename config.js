// ⚙️ CONFIGURACIÓN — el único archivo que tienes que editar.

// 1) Pega aquí los datos de tu app web de Firebase
//    (Consola de Firebase → ⚙️ Configuración del proyecto → Tus apps → SDK setup → Config)
export const firebaseConfig = {
  apiKey: "PEGA_AQUI_TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.firebasestorage.app",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

// 2) Vuestros emails (los mismos que crees en Firebase Authentication) y cómo os llamáis.
//    El orden importa: no lo cambies una vez empecéis a usar la app.
export const MEMBERS = [
  { email: "tu@email.com",     name: "Tú" },
  { email: "pareja@email.com", name: "Pareja" }
];
