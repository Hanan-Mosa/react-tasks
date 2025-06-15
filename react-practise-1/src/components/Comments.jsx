import { useContext } from "react";
import { VideosContext } from "../context/videos";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Comments = () => {
  const{comments}=  useContext(VideosContext);
    if (!comments || comments.length === 0) {
        return <> <h3 className="mt-3">Comments</h3> <p className="text-muted">No comments yet.</p></>;
    }

    return (
        <div>
            <h3 className="mt-3">Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id} className="card mb-2">
                    <div className="card-body">
                        <h4 className="card-text"><i class="bi bi-person-circle text-secondary"></i> {comment.name}</h4>
                        <p className="card-text"> <i class="bi bi-chat-left-dots-fill ms-3 me-2 text-primary"></i> {comment.body}</p>

                    </div>
                </div>
            ))}
        </div>
    );
}   
export default Comments;