import "./hero.css";
import ProfilePic from "./../assets/pp.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="bio-container">
        <div className="image">
          <div className="bg-black"></div>
          <div className="bg-white"></div>
          <img src={ProfilePic} alt="Profile picture" />
        </div>
        <div className="name">Hi, I'm Birhanu Negash</div>
        <div className="work-type">Fullstack Web Developer</div>
        <div className="simple-bio">
          "Welcome to my personal portfolio! My name is <b>Birhanu Negash</b> and I am a 
          <b> Junior Fullstack Web Developer</b>. In this portfolio, you will find a
          collection of my work and projects that showcase my skills,
          experience, and passion for <b>Web Development</b>. Starting from
          <b> Web Design</b>, to Deployment, I
          am constantly striving to improve and expand my knowledge in the
          industry. Thank you for taking the time to view my portfolio, and I
          look forward to connecting with you."
        </div>
      </div>
    </div>
  );
};

export default Hero;
