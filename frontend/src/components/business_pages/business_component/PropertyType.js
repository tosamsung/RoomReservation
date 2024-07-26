function PropertyType({ image, value, name, active, setValue }) {
  return (
    <div className="col-4 mb-2 px-2">
      <div
        className={`border-gray cs-rounded py-1 px-2 cursor-pointer ${
          active===name ? "border-orange bg-gray" : ""
        }`}
        onClick={() => {
          if (name && setValue) {
            setValue((prev) => ({
              ...prev,
              propertyType: name,
            }));
          }
        }}
      >
        <img src={image} alt="" className="category-icon" />
        <h6 className={`f-robo fwbolder m-0 ${ active===name ? "text-orange" : ""}`}>{name}</h6>
      </div>
    </div>
  );
}
export default PropertyType;
