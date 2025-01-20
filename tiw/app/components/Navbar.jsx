import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-zinc-950 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white  font-bold">
          T.N
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-white hover:text-zinc-300 transition-colors">
            ABOUT
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

