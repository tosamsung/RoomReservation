import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <link rel="stylesheet" href="/css/404style.css" />
      <div id="notfound">
        <div className="notfound-bg" />
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>we are sorry, but the page you requested was not found</h2>
          <Link to="/" className="home-btn">
            Go Home
          </Link>
          <a href="#" className="contact-btn">
            Contact us
          </a>
        </div>
      </div>
    </>
  );
}

export default Page404;
