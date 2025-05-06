import Card from "../Card/Card";
import "./culture-page.style.css";

const cultureImages = [
  {
    text: "Festivals",
    image:
      "https://www.flightgift.com/media/wp/FG/2024/05/Tomorrowland-1.webp",
  },
  {
    text: "Cities",
    image:
      "https://newsroom.haas.berkeley.edu/wp-content/uploads/2018/11/Kolkata-traffic.jpg",
  },
  {
    text: "Culture",
    image:
      "https://lefrehindi.com/wp-content/uploads/2024/08/m1-edited.jpg",
  },
  {
    text: "Food",
    image:
      "https://www.indiaeveryday.com/wp-content/uploads/2023/11/Indian-Food.jpg",
  },
  {
    text: "Architecture",
    image:
      "https://media.architecturaldigest.com/photos/5d23a8332124fc00097f54e6/16:9/w_2560%2Cc_limit/GettyImages-538992520.jpg",
  },
  {
    text: "Art",
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc1MjY4OTc0OTQ5OTAxNjk0/art-forms-of-india-that-have-survived-generations.jpg",
  },
  {
    text: "Temples",
    image:
      "https://www.easemytrip.com/travel/img/shiva-temples.jpg",
  },
  {
    text: "Beach",
    image:
      "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg",
  },
];

const CulturePage = () => {
  return (
    <div className="culture-page" id="culture">
      <h1>India's Culture</h1>
      <div className="card-grid">
        {cultureImages.map((element, id) => (
          <div key={id}>
            <Card imgSrc={element.image} cardText={element.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturePage;
