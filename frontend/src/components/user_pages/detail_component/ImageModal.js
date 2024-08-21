import React from "react";
import { Modal, Image } from "antd";

const ImageModal = ({ isVisible, onClose, images }) => (
  <Modal
    open={isVisible}
    onCancel={onClose}
    footer={null}
    width={800}
    title="More Images"
    centered
  >
    <div className="row">
      {images.map((image, index) => (
        <div key={index} className="col-6 mb-2">
          <Image
            src={image}
            className="img-fluid rounded shadow-sm"
            alt={`Additional Gallery Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  </Modal>
);

export default ImageModal;
