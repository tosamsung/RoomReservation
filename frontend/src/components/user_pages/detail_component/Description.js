import React, { useState } from "react";
import { Button, Modal } from "antd";

const Description = ({ about, space, access }) => {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <div className="mb-4">
      <div className="mb-4">
        <h4 className="f-robo fw700">About this space</h4>
        <p>
          {about}
          {(space || access) && (
            <Button
              type="link"
              className="p-0 f-robo fw700 text-black"
              onClick={handleOpenModal}
              style={{ textDecoration: 'underline' }}
            >
              ...Read more
            </Button>
          )}
        </p>
      </div>

      {/* Modal with additional information */}
      <Modal
        title="Full Description"
        visible={visible}
        onCancel={handleCloseModal}
        footer={<Button onClick={handleCloseModal}>Close</Button>}
      >
        <div>
          {about && <div><h4>About this space</h4><p>{about}</p></div>}
          {space && <div><h4>The space</h4><p>{space}</p></div>}
          {access && <div><h4>Guest access</h4><p>{access}</p></div>}
        </div>
      </Modal>
    </div>
  );
};

export default Description;
