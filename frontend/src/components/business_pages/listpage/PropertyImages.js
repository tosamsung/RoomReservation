import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from 'antd';

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    onDrop: async (acceptedFiles) => {
      const updatedImages = await Promise.all(
        acceptedFiles.map(async (file) => {
          const preview = await getBase64(file); // Convert to base64
          return { file, preview };
        })
      );
      setSelectedImages((prevImages) => [...prevImages, ...updatedImages]);
    },
  });

  const handlePreview = (preview) => {
    setPreviewImage(preview);
    setPreviewVisible(true);
  };

  const handleCancel = () => setPreviewVisible(false);

  const handleDelete = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          border: "2px dashed #cccccc",
          borderRadius: "5px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop some images here, or click to select images</p>
      </div>
      <div className="image-preview">
        {selectedImages.map((img, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              display: "inline-block",
              margin: "10px",
            }}
          >
            <img
              src={img.preview}
              alt={`preview-${index}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => handlePreview(img.preview)}
            />
            <button
              onClick={() => handleDelete(index)}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "#003b95",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "14px",
                padding: "0",
                margin: "5px",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {previewVisible && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewVisible,
            onVisibleChange: (previewVisible) => setPreviewVisible(previewVisible),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

export default ImageUpload;
