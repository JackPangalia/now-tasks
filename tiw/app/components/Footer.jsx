import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-8 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">T.N</h3>
            <p className="text-zinc-400">YOUR NO NONSENSE TASK MANAGMENT APP FOCUSED ON TODAY AND TOMORROW</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-zinc-400 hover:text-white transition-colors">ABOUT</Link></li>

            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">X</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Tiktok</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; 2023 Tasks Now. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

