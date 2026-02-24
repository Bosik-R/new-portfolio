export async function register() {
  process.on('unhandledRejection', (reason) => {
    console.error('🔴 UNHANDLED REJECTION:', reason);
  });

  process.on('uncaughtException', (err) => {
    console.error('🔴 UNCAUGHT EXCEPTION:', err);
  });
}
