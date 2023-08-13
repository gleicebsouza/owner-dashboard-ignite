import { Container } from './styles'

export function TransactionTable(){
  return(
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Hamburguer</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
    </table>
    </Container>
)
}