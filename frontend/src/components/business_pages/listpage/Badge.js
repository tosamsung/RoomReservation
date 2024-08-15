function Badge({active,name,handleClick}) {
  return (
    <>
      <span
        className={`badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2 ${
            active ? "bg-dark text-white" : ""
        }`}
        onClick={() => handleClick()}
      >
        {name}
      </span>
    </>
  );
}
export default Badge;
