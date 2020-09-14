import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import '../../styling/survey/buffer.css'
const Buffer = () => {
  const [open, setOpen] = React.useState(false)

  return (

    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Show Modal</Button>}
    >
    <section className="buffer-container">
      <Modal.Content className="buffer-content">
        <Modal.Description>
          You will have one opportunity to answer each question. Please read the statements carefully and select the answer which matches your opinion best!
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="buffer-btn" onClick={() => setOpen(false)}>Let's begin!</Button>
      </Modal.Actions>
      </section>
    </Modal>

  )
}

export default Buffer
