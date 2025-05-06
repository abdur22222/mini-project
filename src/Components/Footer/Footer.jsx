import "./footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Designed By</h1>
      <div className="links">
        <a href="#">Abdur</a>
        <a href="#">Rasheed</a>
      </div>
      <h1>Made with &#10084; by Abdur Rasheed</h1>
      <div className="links">
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
