import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import useUserStore from "../store/users";
import { v4 } from "uuid";


const HomePage = () => {
 const [params, setParams] = useState([{ id: v4(), type: "name", value: "" }]);
  const { getUser, user, hasErrors } = useUserStore();

  const handleParamChange = (index, key, value) => {
    const updatedParams = [...params];
    updatedParams[index][key] = value;
    setParams(updatedParams);
  };

  const handleSearch = async () => {
    const query = params.reduce((acc, { type, value }) => {
      if (value.trim()) {
        acc[type] = value.trim();
      }
      return acc;
    }, {});
    
    if (Object.keys(query).length > 0) {
      try {
        await getUser(query);
        console.log("User fetched successfully with query:", query);
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      console.log("No valid search parameters provided");
    }
  };

  const addParam = () => {
    setParams((prev) => [...prev, { id: v4(), type: "name", value: "" }]);
  };

  const removeParam = (id) => {
    setParams((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container  text-center d-flex flex-column justify-content-center "> 
      <Link to={"/users"} className="btn btn-primary my-5 w-25 align-self-center">show all Users</Link>
      <div className="fs-5 fw-medium my-2">or you can search for a certain user</div>
      {params.map((param, index) => (
       
        <div key={param.id} className="d-flex justify-content-center align-items-center gap-2">
          <select name="search pram" value={param.type}
            onChange={(e) => handleParamChange(index, "type", e.target.value)}
            className="form-select my-2 w-25">
            <option value="email">email</option>
            <option value="name">name</option>
            <option value="id">id</option>
            <option value="phone">phone</option>
          </select>
          <input type="search" value={param.value} onChange={(e) => handleParamChange(index, 'value', e.target.value)} className="form-control w-50" placeholder="search input" />
        <button
            onClick={handleSearch}
            className="btn btn-primary"
            disabled={!param.value.trim()}
            aria-label="Perform search"
          >
            Search
          </button>
          <button onClick={(e) => removeParam(param.id)} className="btn btn-danger">X</button>
        </div>
      ))}
      <button onClick={addParam} className="btn btn-secondary my-5 w-25 align-self-center">
        add more parm
      </button>

      {user && <UserCard {...user} />}
      {hasErrors ? <p>{hasErrors.message}</p> : null}
    </div>
  );
};
export default HomePage;

          