import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function TransactionTable() {
  const { transactions } = useTransactions()

  /**Conexão feita com a api
   * api.get('transactions').then(response => console.log(response.data))
   * Requisição da API retorna um objeto, não retornou direto o array de transações.
   * Por isso usamos 'response.data.transactions' e não só "response.data"
   */

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
