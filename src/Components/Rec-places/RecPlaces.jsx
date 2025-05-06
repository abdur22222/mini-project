import "./RecPlaces.style.css";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const RecPlaces = () => {
  const places = [
    {
      name: "Taj Mahal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrDPCj9xtSS8IhE_scN8oF4XsFKufAro22w&s",
    },
    {
      name: "Statue of Unity",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Statue_of_Unity%2C_as_dedicated_on_October_31%2C_2018_%28cropped%29.jpg/250px-Statue_of_Unity%2C_as_dedicated_on_October_31%2C_2018_%28cropped%29.jpg",
    },
    {
      name: "India Gate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR-EEF5FtAPYrjYEyfMcmYqclyYvgi-WVTw&s",
    },
    {
      name: "St. Cajetan Church",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVcqlkE2KhJPCeek8XnY4xlltJ95Vdri-jQ&s",
    },
    {
      name: "Hawa Mahal",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/0a/06/0b/66/hawa-mahal-travels-day.jpg",
    },
    {
      name: "Mysore Palace",
      image:
        "https://cdn.britannica.com/27/242227-050-48358A10/Mysore-Palace-Mysuru-Karnataka-India.jpg",
    },
    {
      name: "Safdarjung Tomb",
      image:
        "https://i0.wp.com/travelshoebum.com/wp-content/uploads/2016/10/dsc_2232.jpg?resize=1200%2C823&ssl=1",
    },
    {
      name: "Jim Corbet Nationalpark",
      image:
        "https://www.corbettnationalpark.in/images/corbett-fauna.jpg",
    },
  ];

  return (
    <div className="RecPlaces">
      <div className="text">
        <h1>Places We Recommend !</h1>
        <p>Places worth visiting in India</p>
      </div>
      <div className="rec-places-list">
        <Carousel
          centerMode={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {places.map((place, id) => (
            <Card key={id} cardText={place.name} imgSrc={place.image} />
          ))}
        </Carousel>
      </div>
      <div className="btm-design">
        <button>View All</button>
      </div>
    </div>
  );
};

export default RecPlaces;
