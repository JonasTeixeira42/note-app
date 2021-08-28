import React, { useState } from 'react'

import Modal from 'components/Modal'
import FormNote from 'components/FormNote'

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(!showModal)

  return (
    <>
      <button onClick={toggleModal}>modal</button>
      <Modal
        title={'Add note'}
        isOpen={showModal}
        onClose={toggleModal}
        onAdd={() => console.log('added')}
      >
        <FormNote />
      </Modal>
    </>
  )
}

export default Home
