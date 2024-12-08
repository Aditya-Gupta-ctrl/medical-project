import { Brain, Activity, Search, Bell, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-4">
              <div className="flex items-center p-2 rounded-lg gradient-border">
                <Brain className="h-8 w-8 text-red-500 animate-pulse-slow" />
                <Activity className="h-6 w-6 text-red-500 ml-1" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                  NeuroScan AI
                </h1>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-red-500 transition-colors">Dashboard</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Patients</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">History</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <button className="hidden md:flex items-center space-x-2 text-gray-400 hover:text-white transition-colors p-2 px-4 hover:bg-white/10 rounded-full">
              <User className="h-5 w-5" />
              <span className="text-sm">Dr. Smith</span>
            </button>
            <button className="md:hidden text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}