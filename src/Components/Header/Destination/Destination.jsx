import "./destination.style.css";
import Card from "../../Card/Card";

const Destination = () => {
  const destinationCards = [
    {
      cardText: "Delhi",
      cardImg:
        "https://etimg.etb2bimg.com/photo/87278130.cms",
    },
    {
      cardText: "Agra",
      cardImg:
        "https://foodandtravel.com/imager/hours/219609/Ministry-of-Tourism-Govt-of-India-595161_Taj-Mahal-Uttar-Pradesh-Aerial_821631bb23140209ea99c8f810f75634.jpg",
    },
    {
      cardText: "Jaipur",
      cardImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdMFZx_yta9YZSn2dG387UpzafK4JdKTORQ&s",
    },
    {
      cardText: "Mumbai",
      cardImg:
        "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
    },
    {
      cardText: "Kerala",
      cardImg:
        "https://lp-cms-production.imgix.net/2024-08/shutterstock2044878389.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    },
    {
      cardText: "Varanasi",
      cardImg:
        "https://s7ap1.scene7.com/is/image/incredibleindia/manikarnika-ghat-city-hero?qlt=82&ts=1727959374496",
    },
    {
      cardText: "Chennai",
      cardImg:
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
    },
    {
      cardText: "Kolkata",
      cardImg:
        "https://media.assettype.com/outlooktraveller/2024-04/4b6c5c58-610a-4294-82f2-7ed6b16fc1c0/kolkata7.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    },
    
  ];

  return (
    <div className="destination">
      <div className="destination-wrapper">
        <div className="destination-heading">
          <h2>Travel Destinations you would like to visit in India!</h2>
        </div>
        <div className="destination-card-container">
          {destinationCards.map((card, i) => (
            <Card key={i} cardText={card.cardText} imgSrc={card.cardImg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
