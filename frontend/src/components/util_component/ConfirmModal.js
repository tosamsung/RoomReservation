import React from "react";
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";

function ConfirmModal({
  icon,
  iconYes,
  iconNo,
  button,
  title,
  titleYes,
  titleNo,
  content,
  handleYes,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      className=""
      basic
      onClose={() => setOpen(false)}
      onOpen={() => {
        setOpen(true);
      }}
      open={open}
      size="small"
      trigger={button}
    >
      <Header icon>
        {icon}
        {title}
      </Header>
      <ModalContent className="text-center">{content}</ModalContent>
      <ModalActions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          {iconYes} {titleNo || "No"}
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => {
            handleYes()
            setOpen(false);
          }}
        >
          {iconNo} {titleYes || "Yes"}
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default ConfirmModal;
