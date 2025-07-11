import "./stories-section.style.css";

const StoriesSection = () => {
  return (
    <div className="stories-section">
      <div className="text">
        <h1>Stories</h1>
        <p>Read stories from our travellers around the world !</p>
      </div>
      <div className="story-wrapper">
        <div className="img">
          <img
            src="https://www.indiasinvitation.com/wp-content/uploads/2023/05/kkkkkkkkk.jpeg"
            alt="story"
          />
        </div>
        <div className="content">
          <h1>Forts and Places</h1>
          <p>
            India is blessed with heritage riches and a regal lineage. Vestiges
            of Indian royalty can be felt in the various forts and palaces
            speckled across the country. From hill forts in Rajasthan to...
          </p>
          <div className="user-wrapper">
            <div className="user">
              <img
                src="https://www.pngkey.com/png/detail/662-6623422_male-icon-testimonial-page.png"
                alt="user"
              />
              <div className="user-name">
                <h2>Ashutosh Sinha</h2>
                <p>Traveller</p>
              </div>
            </div>
            <button>Read More</button>
          </div>
          <p className="next">
            Next <i className="far fa-chevron-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
