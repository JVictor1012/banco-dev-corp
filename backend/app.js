const express = require('express')
const app = express()
const mssql = require('mssql/msnodesqlv8')
const { NText } = require('mssql/msnodesqlv8')
var cors = require('cors')

const port = 3000

app.use(cors())
app.use(express.json())

const conn = new mssql.ConnectionPool({
  driver: 'msnodesqlv8',
  server: 'DESKTOP-VICTOR',
  //server: 'PAR156010',
  database: 'BANCO',
  user: 'sql',
  password: '1234'
})


app.get('/correntistas', function (req, res) {
    conn.connect().then((pool) => {
      const queryStr = 'SELECT * FROM Correntista'
      pool.query(queryStr).then((rows) => {
        res.send(rows.recordset)
        
      })
    })
  })

app.get('/correntistas/:id', function (req, res) {
  const id = req.params.id
  conn.connect().then((pool) => {
    const queryStr = `SELECT * FROM Correntista WHERE IdCorrentista= ${id}`
    pool.query(queryStr).then((rows) => {
      res.send(rows.recordset)
        
    })
  })
})

app.get('/extrato', function (req, res) {
    conn.connect().then((pool) => {
      const queryStr = 'select * from vwEstratoCorrentista'
      pool.query(queryStr).then((rows) => {
        res.send(rows.recordset)
      })
    })
  })

app.get('/extrato/:id', function (req, res) {
  const id = req.params.id
  conn.connect().then((pool) => {
    const queryStr = `SELECT * FROM Movimentacao WHERE IdCorrentista= ${id}`
    pool.query(queryStr).then((rows) => {
      res.send(rows.recordset)
        
    })
  })
})
  

app.post('/transferencia', function (req, res) {
  conn.connect().then((pool) => {
    const IdOrigem = req.body.IdCorrentistaOrigem
    const IdDestino = req.body.IdCorrentistaDestino
    const Valor = req.body.valor
    const queryStr = `EXEC spTransferencia ${IdOrigem}, ${IdDestino}, ${Valor}`
    pool.query(queryStr).then((rows) => {
      res.status(201).send()
    })
  })
})

app.post('/saque', function (req, res) {
  conn.connect().then((pool) => {
    const IdOrigem = req.body.IdCorrentistaOrigem
    const Valor = req.body.valor
    const queryStr = `EXEC spSaque ${IdOrigem}, ${Valor}`
    pool.query(queryStr).then((rows) => {
      res.status(201).send()
    })
  })
})

app.post('/Pagamento', function (req, res) {
  conn.connect().then((pool) => {
    const IdOrigem = req.body.IdCorrentistaOrigem
    const Valor = req.body.valor
    const queryStr = `EXEC spPagamento ${IdOrigem}, ${Valor}`
    pool.query(queryStr).then((rows) => {
      res.status(201).send("Pagamento concluido!")
    })
  })
})

app.post('/deposito', function (req, res) {
  conn.connect().then((pool) => {
    const IdDestino = req.body.IdCorrentistaDestino
    const Valor = req.body.valor
    const queryStr = `EXEC spDeposito ${IdDestino}, ${Valor}`
    pool.query(queryStr).then((rows) => {
      res.status(201).send()
    })
  })
})

app.post('/correntistas', (req, res) => {
  conn.connect().then((pool) => {
    const nome =  req.body.NomeCorrentista ;
    const email =  req.body.Email ;
    const saldo =  req.body.Saldo;
    const queryStr = `insert into correntista (NomeCorrentista, EmailCorrentista, Data, Saldo) values('${nome}', '${email}', GETDATE(), '${saldo}')`
    pool.query(queryStr).then((rows) => {
      res.status(201).send()
    })
  })
})

app.delete('/correntistas/:id', (req, res) => {
  conn.connect().then((pool) => {
    const id = req.params.id;
    const queryStr = `DELETE FROM correntista WHERE IdCorrentista = ${id}`
    pool.query(queryStr).then((rows) => {
      res.status(204).send('ok')
    })
  })
})

app.listen(3000, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})



