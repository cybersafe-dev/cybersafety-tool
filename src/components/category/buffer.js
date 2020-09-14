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
      <Modal.Content className="buffer-content">
        <Modal.Description>
          You will have one opportunity to answer each question. Please read the statement carefully and select the answer which matches your opinion best!
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
