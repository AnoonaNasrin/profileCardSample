import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data ">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="Red_Kitten.jpg" alt="photo" />;
}
function Intro() {
  return (
    <div>
      <h1>Kitty</h1>
      <p>
        What is a JPEG file? JPEG stands for Joint Photographic Experts Group.
        The JPEG file type is one of the world's most widely used image file
        formats. Able to compress impressive detail into a shareable file size,
        JPEGs are most helpful in storing and sharing digital images.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React " emoji="💪 " color="blue" />
      <Skill skill="Github" emoji="💪 " color="orangered" />
      <Skill skill="Typescript" emoji="💪 " color="orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
