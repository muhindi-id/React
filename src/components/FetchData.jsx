import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    const api = "https://dummyjson.com/products";
    const response = await fetch(api);
      const results1 = await response.json();
      const results2 =  results1.products;
      setdata(results2);

  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data)

  return (
    <div className="tech">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            
            <img src={item.images[0]} alt={item.title} />
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default FetchData;
