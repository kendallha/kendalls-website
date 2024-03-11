import Link from 'next/link';

const NavBar: React.FC = () => (
  <header>
    <nav className="flex justify-space-around">
      <Link href="/">About Me</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/ideas">Ideas</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

export default NavBar;