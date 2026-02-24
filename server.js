import { createServer } from 'http';
import next from 'next';

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

// 🔥 GLOBALNE HANDLERY
process.on('unhandledRejection', (reason) => {
  console.error('🔴 UNHANDLED REJECTION:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('🔴 UNCAUGHT EXCEPTION:', err);
});

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(3000, () => {
    console.log('> Server ready on http://localhost:3000');
  });
});
