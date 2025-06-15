import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { VideosContext } from '../context/videos';
import Comments from './Comments';
const VideoDetails = function () {
    const { videos } = useContext(VideosContext);
    const { id } = useParams();
    const video = videos.find(v => v.id === id);

    if (!video) return <div>Loading or Video not found...</div>;

    return (
        <div className="container ">
            <div>
                <div className="m-3 embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item text-center" controls autoPlay style={{ width: '80vw', height: '60vh' }}>
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{video.title}</h2>
                    <p className="text-muted mb-2">
                        <strong>Author:</strong> {video.author}
                    </p>
                    <p className="text-muted mb-2">
                        <strong>Date:</strong> {video.uploadTime}
                    </p>
                    <p className="text-muted mb-2">
                        <strong>Views:</strong> {video.views}
                    </p>
                    <p className="text-muted mb-2">
                        <strong>Subscriber:</strong> {video.subscriber}
                    </p>
                    <strong>Description:</strong>
                    <p className="card-text mt-2">{video.description}</p>
                </div>
                <div>
                   <Comments />
                </div>
            </div>
        </div>
    );
}
export default VideoDetails;