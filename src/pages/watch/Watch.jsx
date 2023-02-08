import "./Watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
   const movie = location.movie;
   console.log(location);
  return (
    <Link to="/">
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
    </Link>
  );
}
