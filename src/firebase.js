const { initializeApp } = require('firebase-admin/app');
const serviceAccount = require("./serviceAccountKey.json");

const app = initializeApp({ credential: admin.credential.cert(serviceAccount) });

export default app;