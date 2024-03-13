import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import ProfileSection from "./components/ProfileSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen p-24 pt-0 text-blueText">
        <ProfileSection />
        <AboutMe />
      </main>
    </>
  );
}
