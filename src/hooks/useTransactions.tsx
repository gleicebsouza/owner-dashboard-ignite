import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}
interface TransactionsProviderProps {
  children: ReactNode
}
interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

/*interface TransactionInput{
  title:string;
  amount:number;
  type:string;
  category:string;
}
type TransactionInput = Pick< Transaction, 'title' | 'amount' | 'type'| 'category'>; 
 */
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

// Informa um objeto vazio e força a tipagem do Typescript
 const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data

    /* Imutabilidade: Criar um novo vetor de transações, copio o que tenho e adiciono o que tenho no final
     */
    setTransactions([...transactions, transaction])
  }

  /*  Acessar a função 'createTransaction', e retornar a função como um objeto.
   A variável retorna mais de uma informação*/
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
