import { useState } from 'react'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header/Header'
import { GlobalStyles } from './styles/global'

//Make sure to bind modal to your appElement(https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export function App() {
  /**Estado do Modal
   * Funções para ações do usuário */
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  )
}
