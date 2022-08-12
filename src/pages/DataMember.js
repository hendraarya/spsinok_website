import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const DataMember = () => {
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [isMessageError, setisMessageError] = useState('');

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API kamu atau URL API MU
    // Method @{get, post, put, patch, delete}
    axios
      .get("http://localhost:3000/api/employees/")
      .then((response) => {
        setdata(response.data.data[0]);
        setisLoading(false);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
        setisMessageError(err);
        // console.log("error:", err);
      });
  }, []);

  if (isLoading) return <h1>Loading data</h1>;
  else if (data && !isError)
    return (
      <Fragment>
        <div className="app" style={{ marginLeft: "5em" }}>
          <h1>Tutorial Get API React Hooks Dengan Axios</h1>
          {/* <img
            src={data.avatar_url}
            alt="img"
            width="256"
            style={{ marginTop: "2em", borderRadius: 128 }}
          />
          <hr />
          <h2>Name: {data.name}</h2>
          <h2>
            Web : <a href={data.blog}>{data.blog}</a>{" "}
          </h2>
          <h2>Join Github : {new Date(data.created_at).getFullYear()}</h2>
          <h2>Bio: {data.bio}</h2> */}
          <h2>Location: {data.gender}</h2>
        </div>
      </Fragment>
    );
  else {
    return(
    // <h1>Something Went Wrong</h1>
    <h1>{isMessageError.message}</h1>
    );
  }
};
export default DataMember;
