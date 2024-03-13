import AboutMe from "./AboutMe";
import Profile from "./Profile";
import ProfileImage from "./ProfileImage";

const AboutSection: React.FC = () => {

  return (
  <section className="h-100 flex items-center justify-between">
    <Profile />
    <ProfileImage/>
  </section>
)
  };

export default AboutSection;