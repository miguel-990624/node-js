import axios from 'axios';

export async function getRandomTrivia(): Promise<string> {
  try {
    const { data } = await axios.get('http://numbersapi.com/random/trivia', {
      responseType: 'text',
    });
    return data;
  } catch (error) {
    console.error('Error fetching trivia from Numbers API:', error);
    throw new Error('No se pudo obtener el dato de la Numbers API');
  }
}