import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1 all about the wedding and the party",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, velit id placerat luctus, metus velit consectetur neque, vel ultricies nunc massa vel velit. Donec facilisis, mauris at posuere rutrum, massa neque sagittis purus, at consectetur risus libero at velit.",
      img: "assets/pp.jpg",
    },
    {
      id: 2,
      title: "Post 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, velit id placerat luctus, metus velit consectetur neque, vel ultricies nunc massa vel velit. Donec facilisis, mauris at posuere rutrum, massa neque sagittis purus, at consectetur risus libero at velit.",
      img: "assets/bl4.jpg",
    },
    {
      id: 3,
      title: "Post 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, velit id placerat luctus, metus velit consectetur neque, vel ultricies nunc massa vel velit. Donec facilisis, mauris at posuere rutrum, massa neque sagittis purus, at consectetur risus libero at velit.",
      img: "/assets/bl1.jpg",
    },
    {
      id: 4,
      title: "Post 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, velit id placerat luctus, metus velit consectetur neque, vel ultricies nunc massa vel velit. Donec facilisis, mauris at posuere rutrum, massa neque sagittis purus, at consectetur risus libero at velit.",
      img: "assets/bl2.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt={post.title} />
              </div>

              <div className="content">
                <Link to={`/post/${post.id}`} className="link">
                  <h1>{post.title}</h1>
                </Link>
                <div className="">
                <p>{post.desc}</p>
                </div>
                <button><Link to={"/single"} className="link">Read More</Link></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
