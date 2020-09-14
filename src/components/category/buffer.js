import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import '../../styling/survey/buffer.css'
const Buffer = () => {
  const [open, setOpen] = React.useState(false)

  return (

    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Show Modal</Button>}
    >
    <section className="buffer-container">
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content className="buffer-content">
        <Modal.Description>
          The survey will start in a few seconds. Read the questions carefully and answer honestly!
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>CLOSE</Button>
      </Modal.Actions>
      </section>
    </Modal>

  )
}

export default Buffer
