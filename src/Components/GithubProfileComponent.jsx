import React, { useState, useEffect } from "react";

const GithubProfileComponent = ({ username }) => {
  const token = "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";
  const [data, setdata] = useState({});
  const getData = async (username) => {
    const api = `https://api.github.com/users/${username}`;
    const response = await fetch(api, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    });
    const results = await response.json();
    setdata(results);
  };
  useEffect(() => {
    getData(username);
  }, [username]);


  return (
    <div>
        <br /><br />
      <img src={data.avatar_url} alt="Profile Picture" />
<br />
       <h2>{data.login}</h2>

    <h3>{data.type} </h3>
      <h2>{data.followers_url}</h2>
     <h2 style={{color:'purple'}}>Number of public repositories: {data.public_repos}</h2>
    </div>
  );
};

export default GithubProfileComponent;