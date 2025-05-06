import { useState } from "react";
import BlogCard from "./blogCard/BlogCard";
import Fade from "./Fade";
import "./blogs.style.css";

const blogs1 = [
  {
    imgSrc:
      "https://winworldrealty.in/wp-content/uploads/2023/11/Why-New-Gurgaon-Become-The-Hotspot-Real-Estate-Destination-In-Delhi-NCR.jpg",
    title: "Babul Tree in Sarson Ke Khet – Rural Gurgaon",
    text: "The Tree of Life: In Sarson Ke Khets of Gurgaon Don’t get me wrong, I am aware that the tree of life is a mythical tree depicted in art that transcends religion from Jainism, Buddhism, Hind.......",
    userImg:
      "https://image.pngaaa.com/988/4213988-middle.png",
    userName: "John Doe",
    userJob: "Engineer",
  },
  {
    imgSrc:
      "https://images.wanderon.in/blogs/new/2023/12/leh-ladakh.jpg",
    title:
      "10 Less Visited Offbeat Places in Ladakh That You Must Visit On Your Trip",
    text: "Ladakh, the land of the Lamas, is in itself quite offbeat. While tourism here has picked up, especially for us wanderer folks – there’s still a bunch of infor....",
    userImg:
      "https://www.pinpng.com/pngs/m/375-3759779_customer-testimonial-travis-caldwell-sitting-hd-png-download.png",
    userName: "Smith ends",
    userJob: "Lawyer",
  },
  {
    imgSrc:
      "https://static.toiimg.com/thumb/62251292.cms?resizemode=75&width=1200&height=900",
    title: "Chindi & Karsog – An Offbeat Place Travel Guide [Himachal Pradesh]",
    text: "Chindi, a hamlet in Karsog Valley is unknown and an offbeat place in Himachal Pradesh. And, that is its biggest advantage. Untouched by tourism, Chindi maintains ....",
    userImg:
      "https://w7.pngwing.com/pngs/547/728/png-transparent-shoot-graphy-testimony-black-hair-photography-smile.png",
    userName: "Sarah Smith",
    userJob: "Traveller",
  },
];

const blogs2 = [
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgXKBT50sX7Pr373Bp-NZGAOu4fmEDp1LsA&s",
    title: "My Trip to Ooty, Tamilnadu: A Mesmerizing Experience",
    text: "Ooty, one of the famous tourist places for the honeymooners; the hill station about which we heard for the umpteenth time since childhood; the shooting spot for so many movies; ....",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5Bs5_hXdt1-NyxAE1ES5oHth0aGGaEMEf7Fsbsh4H1CN5va1_H3-bdcPQ7Bk75zyPB4&usqp=CAU",
    userName: "Bilal Sahoo",
    userJob: "Traveller",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuXLL81u6oiY0BKwSJrS6fjJg-BYn8oZP9Q&s",
    title: "The thriving port town of Kochi, Already want to",
    text: "Once the main centre of India’s spice trade, is a unique amalgamation of the old and the new. Take a walk down the rambling alleys of Kochi’s historic Jewish Colony, lined with brightly-painted houses....",
    userImg:
      "https://png.pngitem.com/pimgs/s/650-6507339_jackie-testimonial-girl-hd-png-download.png",
    userName: "Saaho Doe",
    userJob: "Traveller",
  },
  {
    imgSrc:
      "https://www.thepinkcityholidays.com/wp-content/uploads/2022/12/places-to-visit-in-rajasthan.jpg",
    title: "Jaipur–Off the beaten trail in The ‘Pink’ City",
    text: "India’s official ‘pink city’, there’s much more to Rajasthan’s capital than its pink-red-tinged buildings and historic splendour. This majestic home to erstwhile royals ....",
    userImg:
      "https://cdn2.iconfinder.com/data/icons/male-users-2/512/2-512.png",
    userName: "John Doe",
    userJob: "Traveller",
  },
];

const Blogs = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="blogs" id="blog">
      <div className="text">
        <h1>Popular Blogs</h1>
        <p>Blogs by the travellers around the globe</p>
      </div>
      <div className="blog-container">
        {blogs1.map((blog, id) => (
          <BlogCard
            key={id}
            imgSrc={blog.imgSrc}
            title={blog.title}
            text={blog.text}
            userImg={blog.userImg}
            userName={blog.userName}
            userJob={blog.userJob}
          />
        ))}
      </div>

      <Fade show={show}>
        <div className="blog-container">
          {blogs2.map((blog, id) => (
            <BlogCard
              key={id}
              imgSrc={blog.imgSrc}
              title={blog.title}
              text={blog.text}
              userImg={blog.userImg}
              userName={blog.userName}
              userJob={blog.userJob}
            />
          ))}
        </div>
      </Fade>

      <div className="view-more" onClick={() => setShow(!show)}>
        <h3> {!show ? "View More" : "Close"}</h3>
        <i className={!show ? "far fa-chevron-down" : "far fa-chevron-up"}></i>
      </div>
    </div>
  );
};

export default Blogs;
