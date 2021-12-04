const porta = 3003;

const express = require('express')
const crud = express()
const crudFuncao = require('./funcoesBanco')
const bodyParser = require('body-parser')

crud.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}!`)
})

crud.use(bodyParser.urlencoded({extended: true}))

crud.get('/cursos', (req, res) => {
    res.send(crudFuncao.getCursos()) // Converte pra JSON automaticamente!
})

crud.get('/cursos/:id', (req, res) => {
    res.send(crudFuncao.getCurso(req.params.id)) // Converte pra JSON automaticamente!
})

crud.post('/cursos', (req, res) => {
    const curso = crudFuncao.salvarCurso({
        curso: req.body.curso,
        preco: req.body.preco
    })
    res.send(curso) // Gera um JSON!
})

crud.put('/cursos/:id', (req, res) => {
    const curso = crudFuncao.salvarCurso({
        id: req.params.id,
        curso: req.body.curso,
        preco: req.body.preco
    })
    res.send(curso) // Gera um JSON!
})

crud.delete('/cursos/:id', (req, res) => {
    const curso = crudFuncao.excluirCurso(req.params.id)
    res.send(curso) // Gera um JSON!
})