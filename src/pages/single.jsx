import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const Single = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1 all about the wedding and the party",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, velit id placerat luctus, metus velit consectetur neque, vel ultricies nunc massa vel velit. Donec facilisis, mauris at posuere rutrum, massa neque sagittis purus, at consectetur risus libero at velit.",
      img: "assets/bl3.jpg",
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
   <div className="container">
     <div className="singleContainer">
      <div className="single">
        <div className="content">
          <img src="/assets/pp.jpg" alt="" className="singleImg"/>
          <div className="flex">
          <div className="user">
            <img src="/assets/pic.jpg" alt="" className="imgContainer"/>
          <div className="info">
            <span>Morsh</span>
            <p>Posted 2 days ago</p>
          </div>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`} className="link">
              <CiEdit />
            </Link>
            <MdDelete className="link"/>
          </div>
          </div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere, aut id ad saepe minima!</h1>
          <div className="ptag">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore vel assumenda corrupti velit ipsum omnis quos amet molestias at expedita ullam consequatur laudantium voluptates ducimus aspernatur enim Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nisi labore eligendi alias autem sunt ipsum ipsam vel, provident veritatis exercitationem eveniet. Commodi, eum expedita. Id perferendis soluta corrupti debitis veritatis fuga, exercitationem ullam quia vero mollitia commodi sequi eos. Fugiat qui est, sapiente magnam ducimus sit in alias libero dolorem quas dignissimos quaerat quam assumenda sint, obcaecati animi id labore iste commodi neque saepe eaque quo, ipsum ipsa? Beatae veritatis alias numquam placeat quidem eligendi labore blanditiis, consectetur, quo ad corrupti voluptatem quis sequi a exercitationem deleniti illum voluptatibus. Suscipit molestiae deserunt aperiam tempore pariatur commodi consectetur, eos ducimus?  adipisci culpa voluptas suscipit facere ex sint, eligendi numquam laborum. Cupiditate molestiae obcaecati laudantium? Voluptatem laudantium est quam ex, quod, unde ipsam quisquam enim explicabo odio illum a quasi in doloremque aliquam veritatis voluptatibus nobis vel beatae eaque laboriosam officiis fugit! Distinctio illum ad soluta necessitatibus. Quisquam aliquid explicabo nobis accusamus rem consequatur nam, sequi perferendis quidem ex velit, quod molestias laborum blanditiis facilis autem. Labore modi sapiente temporibus laboriosam, voluptatum maxime quisquam?</p>
          </div>
        </div>
      </div>

      <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post =>(
            <div className="mpost" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Single;
