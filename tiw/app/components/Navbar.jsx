import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Tasks Now
        </Link>
        <div className="space-x-4">
          <Link href="#" className="text-white hover:text-zinc-300 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-zinc-300 transition-colors">
            Features
          </Link>
          <Link href="#" className="text-white hover:text-zinc-300 transition-colors">
            About
          </Link>
          <Link href="#" className="text-white hover:text-zinc-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

