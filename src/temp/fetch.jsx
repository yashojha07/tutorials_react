import React, { useEffect, useState } from "react";

const URL = `https://jsonplaceholder.typicode.com/posts`;

export const Fetch = () => {

    const [data, setData] = useState(null);
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        if (showData) {
            fetch(URL)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setData(result);
                });
        }
    }, [showData]);

    return (
        <div>
            <h4>Here we will fetch API on button click</h4>
            <button onClick={() => { setShowData(!showData) }}>
                {showData ? "Hide Data" : "Show Data"}
            </button>
            {
                showData && data && (
                   
                     data.map((item) => (
                        <li key={item.id}>{item.body}</li>
                    ))
                   
                )
            }
        </div>
    );
};
