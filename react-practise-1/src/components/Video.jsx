import { Link } from 'react-router-dom';
import '../videos.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Video = ({ video }) => {
  return (
   <Link to={`/${video.id}`} className="text-decoration-none">
    <div className="card col-3 m-3 " style={{ width: '18rem', height: '18rem' }}>
      <div><img src={video.thumbnailUrl} className="card-img-top " alt={`${video.title} thumbnail`} />
        <button className="play-button btn btn-dark position-absolute">
          <span role="img" aria-label="Play"><i className="bi bi-play-circle-fill"></i></span>
        </button></div>
      <div className="card-body">
        <h5 className="card-title title-text">{video.title}</h5>
      </div>
    </div>
</Link>
  );
};

export default Video;
