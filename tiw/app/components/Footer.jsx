import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Tasks Now</h3>
            <p className="text-zinc-400">Your personal task management solution.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Facebook</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</Link></li>
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

