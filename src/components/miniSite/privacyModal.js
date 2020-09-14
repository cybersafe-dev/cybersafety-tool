import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import '../../styling/survey/modal.css'
const PrivacyModal = () => {
  const [open, setOpen] = React.useState(false)

  return (

    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button className="open-modal-btn">Privacy Policy</Button>}
    >
    <section className="modal-container">
    <Modal.Header className="privacy-title">Privacy Policy</Modal.Header>
      <Modal.Content className="privacy-modal-content">
        <Modal.Description>
        For now, please link to this <a className="privacy-link" href="https://cybersafeireland.org/privacy-policy-and-data-protection/" target="_blank">existing page on our site</a>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="modal-btn" onClick={() => setOpen(false)}>close</Button>
      </Modal.Actions>
      </section>
    </Modal>

  )
}

export default PrivacyModal
