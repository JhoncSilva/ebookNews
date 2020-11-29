import { NowRequest, NowResponse } from '@vercel/node'
import connectToDatabase from '../../utils/database'

export default async (request: NowRequest, response: NowResponse) => {
  if (request.method === 'POST') {
    const { email, nome } = request.body;

    if (!nome || !email) {
      response.status(400).json({ message: 'Erro, informação incompleta!' })
      return;
    }

    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection('subscribers');

    await collection.insertOne({
      nome,
      email,
      subscribedAt: new Date(),
    })

    return response.status(201).json({ message: `usuário criado com sucesso` });
  }

  else {
    response.status(400).json({ message: 'Erro no método da requisição!' })
  }
}