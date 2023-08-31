import { Model, createServer } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

/**Rotas da API */
createServer({
  //banco de dados do miragejs
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Developer',
          amount: 10000,
          createdAt: new Date('2023-01-01 19:00:00')
        },
        {
          id: 2,
          title: 'Freelancer ',
          type: 'deposit',
          category: 'Developer',
          amount: 8000,
          createdAt: new Date('2023-01-08 19:00:00')
        },
         {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Home',
          amount: -2000,
          createdAt: new Date('2023-01-08 19:00:00')
        }
      ]
    })
  },

  //conectar as duas rotas, listando as transações
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    // retornando os dados que foram enviados na nossa transaction no mirage
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
