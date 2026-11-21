# La compra: cómo publicarla

Tiempo: unos 20 minutos. Coste: 0 €. Es más cómodo hacerlo desde un ordenador, pero también se puede desde el iPhone.

## Qué hay en este paquete

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app |
| `config.js` | **Lo único que tienes que editar**: claves de Firebase y vuestros emails |
| `firestore.rules` | Reglas de seguridad para pegar en Firebase |
| `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Icono y nombre en la pantalla de inicio |

---

## 1. Crear el proyecto en Firebase

1. Entra en https://console.firebase.google.com con tu cuenta de Google.
2. **Crear un proyecto**, por ejemplo con el nombre `la-compra`. Google Analytics no hace falta, puedes desactivarlo.
3. En la página del proyecto, pulsa el icono **`</>`** (Web) para añadir una app web. Ponle un apodo, por ejemplo `compra`, y **no** marques Firebase Hosting.
4. Te mostrará un bloque `const firebaseConfig = { ... }`. **Déjalo a mano**: lo pegarás en el paso 4.
   (Si lo pierdes: ⚙️ Configuración del proyecto → General → Tus apps.)

## 2. Activar el inicio de sesión y crear vuestras cuentas

1. Menú izquierdo: **Compilación → Authentication → Comenzar**.
2. Pestaña **Método de inicio de sesión → Correo electrónico/contraseña → Habilitar → Guardar**.
3. Pestaña **Usuarios → Añadir usuario**. Crea dos: tu email con una contraseña, y el email de tu pareja con otra.

## 3. Crear la base de datos con sus reglas

1. Menú izquierdo: **Compilación → Firestore Database → Crear base de datos**.
2. Ubicación: una europea, por ejemplo `europe-southwest1 (Madrid)`. Esto no se puede cambiar después.
3. Elige **modo de producción** y crea la base de datos.
4. Pestaña **Reglas**: borra lo que haya y pega el contenido de `firestore.rules`.
   **Cambia los dos emails** por los vuestros y pulsa **Publicar**.

> Estas reglas hacen que solo vosotros dos podáis entrar, y que la lista personal y las recetas de cada uno no las pueda ver ni el otro.

## 4. Subir la app a GitHub

1. Crea una cuenta en https://github.com si no tienes.
2. **+ → New repository**. Nombre: `compra`, visibilidad **Public** (en el plan gratuito, GitHub Pages solo funciona con repositorios públicos) y **Create repository**.
3. En la página del repositorio vacío, pulsa **uploading an existing file**. Arrastra **todos los archivos sueltos** de este paquete (no la carpeta) y pulsa **Commit changes**.
4. Abre `config.js` en GitHub y pulsa el lápiz ✏️ para editarlo:
   - Sustituye el bloque `firebaseConfig` por el que copiaste en el paso 1.
   - En `MEMBERS`, pon vuestros emails (los mismos del paso 2) y vuestros nombres.
   - Pulsa **Commit changes**.

> ¿Es un problema que `config.js` sea público? La `apiKey` de Firebase no es secreta: está pensada para ir en la web. La seguridad la dan las reglas del paso 3. Eso sí, **vuestros emails quedarán visibles** en el repositorio público.

## 5. Activar GitHub Pages

1. En el repositorio: **Settings → Pages**.
2. **Source: Deploy from a branch**, **Branch: `main`**, carpeta **`/ (root)`**, y **Save**.
3. Espera 1 o 2 minutos y recarga la página: aparecerá tu dirección, del tipo
   `https://TU-USUARIO.github.io/compra/`

## 6. Autorizar tu dominio en Firebase

Firebase → **Authentication → Configuración → Dominios autorizados → Añadir dominio** y escribe `TU-USUARIO.github.io`. Hace falta, por ejemplo, para que funcione el email de "He olvidado la contraseña".

## 7. Instalarla en los dos iPhone

1. Abre la dirección en **Safari** (tiene que ser Safari).
2. Entra con tu email y tu contraseña.
3. **Compartir (□↑) → Añadir a pantalla de inicio → Añadir**.
4. Tu pareja hace lo mismo en su iPhone con su cuenta.

Ya está: abre la app desde el icono 🛒❤️.

---

## Cambios en el futuro

- Para modificar la app, edita o vuelve a subir `index.html` en GitHub. A los 1 o 2 minutos estará publicada. En el iPhone, cierra la app del todo y vuelve a abrirla.
- La app funciona aunque haya poca cobertura en el súper: guarda los cambios y los envía en cuanto vuelve la conexión. Eso sí, la primera vez que la abres necesita internet.

## Si algo falla

| Síntoma | Causa probable |
|---|---|
| "Falta configurar la app" | No has pegado `firebaseConfig` en `config.js`, o aún no se ha publicado el cambio |
| "Email o contraseña incorrectos" | El usuario no existe en Authentication, o la contraseña está mal |
| "Esta cuenta no está en la lista de miembros" | El email de `MEMBERS` en `config.js` no coincide con el del usuario |
| "Error de conexión (permission-denied)" | Los emails de las reglas no coinciden, o las reglas no se publicaron |
| Página 404 en GitHub | Pages aún se está publicando, o los archivos quedaron dentro de una carpeta en lugar de en la raíz |
