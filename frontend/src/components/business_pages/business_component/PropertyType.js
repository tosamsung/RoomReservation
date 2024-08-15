function PropertyType({ image, value, name, active, setValue }) {
  const formattedName = name.toUpperCase().replace(/\s+/g, '_');

  const handleClick = () => {
    if (name && setValue) {
      setValue((prev) => ({
        ...prev,
        propertyType: formattedName,
      }));
    }
  };

  return (
    <div className="col-4 mb-2 px-2">
      <div
        className={`border-gray cs-rounded py-1 px-2 cursor-pointer ${
          active === formattedName ? "border-orange " : ""
        }`}
        onClick={handleClick}
      >
        <img src={image} alt="" className="category-icon" />
        <h6 className={`f-robo fwbolder m-0 ${active === formattedName ? "text-orange" : ""}`}>{name}</h6>
      </div>
    </div>
  );
}

export default PropertyType;
