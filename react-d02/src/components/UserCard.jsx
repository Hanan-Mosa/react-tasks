import { Link } from "react-router-dom";

const userCard = ({ name, id, phone, email ,website}) => {
  return (
    <div className="card shadow-sm mb-3" style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name} </h5>
        <p className="card-text mb-1">Phone: {phone}</p>
        <p className="card-text mb-1">Email: {email} </p>
        <p className="card-text mb-3">Website: {website} </p>
        {id && (
          <Link to={`/users/${id}`} className="btn btn-primary mt-auto">
            Show More Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default userCard;
