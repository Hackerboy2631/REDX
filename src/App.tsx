import { motion } from 'motion/react';
import { Youtube, Instagram, Twitter, Twitch, Play, Trophy, Crosshair, Users } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display text-3xl tracking-wider text-red-600">REDX</div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#stats" className="hover:text-white transition-colors">Stats</a>
            <a href="#content" className="hover:text-white transition-colors">Content</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-none font-bold tracking-wider uppercase text-sm transition-colors skew-x-[-10deg]">
            <div className="skew-x-[10deg]">Subscribe</div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/darktexture/1920/1080')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="flex flex-col items-start"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-red-600/30 bg-red-600/10 text-red-500 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Free Fire Creator
            </motion.div>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tight mb-6"
            >
              THE KING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">OF BOOYAH</span>
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              className="text-gray-400 text-lg md:text-xl max-w-md mb-8 border-l-2 border-red-600 pl-4"
            >
              Welcome to the official portfolio of REDX. Professional Free Fire player, content creator, and entertainer.
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-8 py-4 font-bold tracking-wider uppercase transition-colors flex items-center gap-2 skew-x-[-10deg]"
              >
                <div className="skew-x-[10deg]">
                  View Stats
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative flex justify-center lg:justify-end cursor-pointer"
          >
            {/* Logo Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-red-600/50 rounded-full animate-[spin_10s_linear_infinite] border-dashed group-hover:border-red-500 transition-colors"></div>
              <div className="absolute inset-4 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse] group-hover:border-white/40 transition-colors"></div>
              
              <div className="absolute inset-8 bg-gradient-to-br from-red-900 to-black rounded-full overflow-hidden border-4 border-red-600 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_80px_rgba(220,38,38,0.8)] transition-shadow duration-500">
                 <img 
                  src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop" 
                  alt="REDX Logo Placeholder" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="absolute font-display text-6xl text-white/90 tracking-widest drop-shadow-2xl"
                >
                  REDX
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Subscribers", value: "500K+", icon: Users },
              { label: "Headshot Rate", value: "85%", icon: Crosshair },
              { label: "Peak Rank", value: "Grandmaster", icon: Trophy },
              { label: "Total Views", value: "50M+", icon: Play },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-black/50 border border-white/5 hover:border-red-600/50 transition-colors group"
              >
                <stat.icon className="w-8 h-8 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-display text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-zinc-900 border border-white/10 p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" 
                alt="Gaming Setup" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 font-display text-3xl transform rotate-3 shadow-2xl">
                EST. 2021
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl mb-6">THE <span className="text-red-600">JOURNEY</span></h2>
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                Started from the bottom, now we're here. REDX isn't just a channel; it's a community of hardcore Free Fire enthusiasts who appreciate high-tier gameplay and unmatched sniper skills.
              </p>
              <p>
                Known for aggressive rush gameplay and impossible 1v4 clutches. When the crown is on the line, REDX delivers.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-red-600 pl-4">
                <div className="text-white font-bold mb-1">Role</div>
                <div className="text-gray-400">Sniper / Rusher</div>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <div className="text-white font-bold mb-1">Device</div>
                <div className="text-gray-400">iPhone 14 Pro Max</div>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <div className="text-white font-bold mb-1">Guild</div>
                <div className="text-gray-400">REDX ESPORTS</div>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <div className="text-white font-bold mb-1">UID</div>
                <div className="text-gray-400">123456789</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Content */}
      <section id="content" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-5xl md:text-7xl">LATEST <span className="text-red-600">DROPS</span></h2>
              <p className="text-gray-400 mt-2">Recent highlights and full gameplays</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors uppercase tracking-wider text-sm">
              View All <Play className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video bg-zinc-900 overflow-hidden mb-4 border border-white/10 group-hover:border-red-600/50 transition-colors">
                  <img 
                    src={`https://picsum.photos/seed/ff${item}/800/450`} 
                    alt="Video Thumbnail" 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10">
                    <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-125 group-hover:opacity-100 shadow-[0_0_0_rgba(220,38,38,0)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] transition-all duration-300">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                  </div>
                  
                  {/* Hover Overlay Info */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <div className="flex justify-between items-end gap-4">
                      <h3 className="text-sm font-bold text-white line-clamp-2 drop-shadow-md">
                        IMPOSSIBLE 1v4 CLUTCH IN GRANDMASTER LOBBY | FREE FIRE
                      </h3>
                      <span className="bg-red-600 text-white px-2 py-1 text-xs font-mono whitespace-nowrap shadow-lg">
                        12:45
                      </span>
                    </div>
                  </div>
                  
                  {/* Static duration (hides on hover) */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-mono group-hover:opacity-0 transition-opacity duration-300 z-20">
                    12:45
                  </div>
                </div>
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-red-500 transition-colors">
                  IMPOSSIBLE 1v4 CLUTCH IN GRANDMASTER LOBBY | FREE FIRE
                </h3>
                <div className="text-sm text-gray-500 mt-2">120K views • 2 days ago</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-4xl text-red-600">REDX</div>
          
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
              <Twitch className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} REDX GAMING. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
