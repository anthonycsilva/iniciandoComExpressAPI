module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        console.log('Pedido Enviado');
        res.send('Você está na rota de atendimentos e está realizando um GET')})

    app.post('/atendimentos', (req, res) => {
        console.log('Pedido Recebido pelo servidor')

        console.log(req.body);
        res.send('Post atendimento')
    })
     
     
}