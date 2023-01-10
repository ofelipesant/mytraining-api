import express from 'express'
import mongoose from 'mongoose';
import { router } from './router';

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://mytraining:mytraining@mytraining.yn2m9br.mongodb.net/?retryWrites=false&w=majority')
    .then(() => {
        const app = express();
        const port = 8000
        
        app.use(express.json())
        app.use(router)
        
        app.listen(port, () => {
            console.log(`o server está rodando na porta ${port}`)
        })
    })
    .catch(() => console.log('erro ao conectar no mongodb'))

