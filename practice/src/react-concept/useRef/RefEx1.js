import React, { useState } from "react";

const RefEx1 = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);

  const getPost = () => {
    let baseUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });

      let baseUrl1 = "https://jsonplaceholder.typicode.com/comments";

      fetch(baseUrl1)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setComment(data);
        });
      
  };
  // const getComment = () => {
  //   let baseUrl1 = "https://jsonplaceholder.typicode.com/comments";

  //   fetch(baseUrl1)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setComment(data);
  //     });
  // };

 const finalPost=data.filter(item=>item.id<5)
 const finalComment=comment.filter(item=>item.id<9)
 console.log(finalPost,"i am final post data")

  return (
    <div>
      <button onClick={() => {getPost()}}>Get Post</button>
      {/* <button onClick={() => getComment()}>Get Comment</button> */}

      <div className="row my-5">
        {finalPost.map((item) => {
          return (
            <div className="col-md-4 card" key={item?.id}>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
      <div className="row my-5">
        {finalComment.map((item) => {
          return (
            <div className="col-md-4 card" key={item?.id}>
              <p>{item.email}</p>
              <p>{item.name}</p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RefEx1;
