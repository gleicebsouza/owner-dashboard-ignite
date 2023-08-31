import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyles } from './styles/global'
import { Header } from './components/Header/Header'
import { Dashboard } from './components/Dashboard'

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen }
        onRequestClose={handleCloseNewTransactionModal}
        />
      <GlobalStyles />
    </>
  )
}
