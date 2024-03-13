import Link from 'next/link';

const NavBar: React.FC = () => (
  <header className="fixed bg-blueBg text-blueText w-full flex justify-end">
    <nav className="p-6 pb-2 flex justify-end">
      <Link href="#about" className="nav-link">About Me</Link>
      <Link href="#experience" className="nav-link">Experience</Link>
      <Link href="#ideas" className="nav-link">Ideas</Link>
      <Link href="#contact" className="nav-link">Contact</Link>
    </nav>
  </header>
);

export default NavBar;