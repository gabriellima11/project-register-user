import express from 'express';
import { PrismaClient } from '@prisma/client'

import cors from 'cors'

const prisma = new PrismaClient()
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());


app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    return res.send(users)
})

app.post('/users', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    return res.status(201).json(user)
})

app.put('/users/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    return res.status(200).json(user)
})

app.delete('/users/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    return res.status(200).json({ message: "Usuário deletado!" })
})


app.listen(port, () => {
    console.log(`Server iniciado em porta ${port}`)
})