import React, { useState, useEffect, useRef, useContext } from "react";
import Users from "./Users";
import { SearchContext } from "./SearchContext";
import { useHistory, useLocation } from "react-router-dom";
import { searchUsers } from "../../api";
import { message } from "antd";

const Search = () => {
  const history = useHistory();
  const location = useLocation();
  const { query, setQuery } = useContext(SearchContext);
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get("q");
    if (queryParam) {
      setQuery(queryParam);
      searchUsers(queryParam).then((result) => setUsers(result));
    } else {
      setUsers([]);
    }
  }, [location.search, setQuery]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (query === "") {
      message.error("Please enter the information");
    } else {
      history.push(`/?q=${query}`);
      const userData = await searchUsers(query);
      setUsers(userData);
    }
  };
  const clearUsers = () => {
    setUsers([]);
    setQuery("");
    history.push("/");
    inputRef.current.focus();
  };
  const onChange = (e) => setQuery(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          ref={inputRef}
          type="text"
          name="text"
          placeholder="Search User"
          value={query}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};
export default Search;
