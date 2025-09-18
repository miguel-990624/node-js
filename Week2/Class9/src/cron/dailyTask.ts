import cron from 'node-cron';
import { getRandomTrivia } from '../services/apiService.ts';
import { sendSummaryEmail } from '../services/emailService.ts';

// Ejecutar todos los días a las 8:00 AM
cron.schedule('0 8 * * *', async () => {
  console.log('⏰ Ejecutando tarea diaria 8:00 AM...');
  try {
    const fact = await getRandomTrivia();
    await sendSummaryEmail(fact);
    console.log('✅ Correo enviado con éxito');
  } catch (error) {
    console.error('❌ Error en tarea diaria:', error);
  }
});