/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Welcome</h1>
      <button>
        <Link to="/home">Let's start!</Link>
      </button>
    </div>
  );
}

export default Landing;