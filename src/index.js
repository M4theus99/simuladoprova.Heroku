import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

app.get('/matricula', async (req, resp) => {
    try {
        let alunos = await db.tb_matricula.findAll();
        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})

app.post('/matricula', async(req, resp) => {
    try {
        let alunos = req.body;

        let r = await db.tb_matricula.create({
         nm_aluno: alunos.nm_aluno,
         nr_chamada: alunos.nr_chamada,
         nm_curso: alunos.nm_curso,
         nm_turma: alunos.nm_turma

        })
        resp.send(r);
    } catch(e) {
        resp.send({ erro: e.toString()  })
    }
})


app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))