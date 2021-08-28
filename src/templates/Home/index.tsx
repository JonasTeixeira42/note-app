import React, { useState, useRef } from 'react'

import Modal from 'components/Modal'
import FormNote from 'components/FormNote'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const form = useRef<HTMLButtonElement>(null)

  const toggleModal = () => setShowModal(!showModal)

  const onSubmit = () => {
    if (form.current) {
      form.current.click()
    }
  }

  return (
    <>
      <button onClick={toggleModal}>modal</button>
      <Modal
        title={'Add note'}
        isOpen={showModal}
        onClose={toggleModal}
        onAdd={onSubmit}
      >
        <FormNote ref={form} />
      </Modal>
    </>
  )
}

export default Home
