import { Link } from "react-router-dom";

function GroupHomepage() {
  return (
    <>
      <div className="container-fluid bg-business vh-100">
        <div className="container pt-2 px-5 ">
          <div className="row">
            <div className="col">
              <h4 className="fw700 f-robo">Group homepage</h4>
            </div>
            <Link to="listproperty" className="col d-flex justify-content-end">
              <button className="bg-button-blue text-white cs-rounded h-75 border">
              <i className="fas fa-plus-circle"></i> Add property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default GroupHomepage;
