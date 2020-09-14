import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import '../../styling/survey/modal.css'

const Buffer = () => {
  const [open, setOpen] = React.useState(false)

  return (

    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button className="temp-open-modal-btn">Temporary button</Button>}
    >
    <section className="modal-container">
      <Modal.Content className="modal-content">
        <Modal.Description>
          You will have one opportunity to answer each question. Please read the statements carefully and select the answer which matches your opinion best!
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="modal-btn" onClick={() => setOpen(false)}>Let's begin</Button>
      </Modal.Actions>
      </section>
    </Modal>

  )
}

export default Buffer
