import figma from "./../assets/figma.jpg";
import nodejs from "./../assets/nodejs.svg";
import canva from "./../assets/canva.jpg";
import illustrato from "./../assets/illustrator.jpg";
import htdcs from "./../assets/htmlcss.png";
import jslogo from "./../assets/js.png";
import reactlogo from "./../assets/react.png";
import git from "./../assets/git.svg";
import docker from "./../assets/docker.svg";
import mongodb from "./../assets/mongodb.svg";
import mysql from "./../assets/mysql.svg";
import "./skill.css";
const Skill = () => {
  return (
    <div className="skill-container">
      <div className="skill-header">Skills</div>
      <div className="skill-list">
        <div className="skill-lists">
          <div className="list-header">Design</div>
          <div className="dif-skills">
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={figma} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div> 
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={illustrato} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={canva} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
          </div>
        </div>
        <div className="skill-lists">
          <div className="list-header">Frontend</div>
          <div className="dif-skills">
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={htdcs} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={jslogo} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={reactlogo} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
          </div>
        </div>
        <div className="skill-lists">
          <div className="list-header">Backend</div>
          <div className="dif-skills">
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={nodejs} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={mysql} alt="html and css logo" />
              </div>
              
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={mongodb} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
          </div>
        </div>
        <div className="skill-lists">
          <div className="list-header">Dev Ops</div>
          <div className="dif-skills">
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={git} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={docker} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
            <div className="list-dif-skill">
              <div className="skill-logo">
                <img src={reactlogo} alt="html and css logo" />
              </div>
              <div className="skill-disc">
                I have done some project using vanilla js and React.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
