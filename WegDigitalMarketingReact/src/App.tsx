import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ArrowRight, Hash, Scissors, Fingerprint, Palette, Code, Feather,
  Instagram, Mail, Phone, Play, Sparkles, Rocket, Target, Zap, Cpu, Terminal
} from 'lucide-react'

const services = [
  { icon: Hash, title: "SOCIAL_MEDIA", desc: "Community building & content calendars that engage" },
  { icon: Scissors, title: "VIDEO_EDIT", desc: "Reels, TikToks & long-form content edited to perfection" },
  { icon: Fingerprint, title: "BRANDING", desc: "Complete visual identity systems including voice & tone" },
  { icon: Palette, title: "GRAPHIC_DESIGN", desc: "Marketing materials, social assets, and print design" },
  { icon: Code, title: "WEB_DEV", desc: "Responsive, fast, and SEO-optimized websites" },
  { icon: Feather, title: "SCRIPT_WRITE", desc: "Compelling narratives for ads & brand stories" },
]

const process = [
  { icon: Target, title: "STRATEGY", desc: "Data-driven insights to position your brand ahead" },
  { icon: Sparkles, title: "CREATIVITY", desc: "Artistic direction that breaks the mold" },
  { icon: Zap, title: "PRODUCTION", desc: "High-end execution in video, design, and dev" },
  { icon: Rocket, title: "GROWTH", desc: "Continuous optimization to scale your reach" },
]

// Google Drive video URLs 
const portfolioVideos = [
  { id: "01", url: "https://drive.google.com/file/d/1E13U61V-ZCcDwotc04ws1yweJLvKSzEl/preview", title: "BRAND_STORY" },
  { id: "02", url: "https://drive.google.com/file/d/1M_20Qw3DMKtmTbr_zRHjkMM_7ZAi8AWK/preview", title: "PRODUCT_LAUNCH" },
  { id: "03", url: "https://drive.google.com/file/d/13q1R1jJJI22Iek51JAtV71W6ktzwc8Sp/preview", title: "SOCIAL_CAMPAIGN" },
  { id: "04", url: "https://drive.google.com/file/d/1pvtTtpT170xKOL8kZVwcalJogXbrNwJ9/preview", title: "MOTION_DESIGN" },
  { id: "05", url: "https://drive.google.com/file/d/1yynTVLqa2CWjRmCs_S6n4VXmRjErfWrp/preview", title: "COMMERCIAL_EDIT" },
  { id: "06", url: "https://drive.google.com/file/d/1oKhhlaSnGBLuzK0IFONkBNgOdznLKkRl/preview", title: "REEL_CONTENT" },
  { id: "07", url: "https://drive.google.com/file/d/1pdaM1Xx0PKWffRugJTYqmrnhWjfE2TDO/preview", title: "PROMO_VIDEO" },
  { id: "08", url: "https://drive.google.com/file/d/1l6ZsmZRtn2SH6UhIlxznz__GOwDCfvx4/preview", title: "EVENT_COVERAGE" },
  { id: "09", url: "https://drive.google.com/file/d/1RwFZ8tWBryydk6uq5BySiy6l9QGldvDz/preview", title: "FEATURED_WORK" },
]

const brandingProjects = [
  { title: "LUMINA_TECH", cat: "BRANDING", desc: "Complete brand identity design", accent: "cyan" },
  { title: "APEX_FITNESS", cat: "IDENTITY", desc: "Logo & visual identity system", accent: "fuchsia" },
  { title: "ECO_PRODUCTS", cat: "PACKAGING", desc: "Sustainable packaging design", accent: "yellow" },
]

const websiteProjects = [
  { title: "AFRO_HEAT_FITNESS", url: "https://afroheatfitness.com/", cat: "WEBSITE", desc: "Fitness brand website with modern design", accent: "cyan", thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" },
  { title: "WINGS_OF_ETHIOPIA", url: "https://wingsofethiopia.com/", cat: "WEBSITE", desc: "Travel & tourism website", accent: "fuchsia", thumbnail: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&h=400&fit=crop" },
  { title: "NATTY_TATTOO", url: "https://www.nattytattoo.com/", cat: "PORTFOLIO", desc: "Tattoo artist portfolio", accent: "yellow", thumbnail: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=400&fit=crop" },
  { title: "GOLD_TECHNOLOGIES", url: "https://gold-technologies-web.vercel.app/", cat: "PLATFORM", desc: "Tech company website", accent: "cyan", thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" },
]

// Terminal-style Loading Component
const TerminalLoader = () => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 10))
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-xs">
      <motion.div 
        className="text-cyan-400 mb-2"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        &gt; INITIALIZING_VIDEO_STREAM...
      </motion.div>
      <div className="flex items-center gap-2 text-fuchsia-400">
        <span>[</span>
        <div className="w-32 h-2 bg-cyan-900/50 relative overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-cyan-400"
            animate={{ width: [`${progress}%`] }}
          />
        </div>
        <span>]</span>
        <span>{progress}%</span>
      </div>
      <motion.div 
        className="text-cyan-400 mt-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        _
      </motion.div>
    </div>
  )
}

// Video Player with Drive preview
const VideoPlayer = ({ url, title }: { url: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!isLoading) return

    const timer = window.setTimeout(() => {
      setIsLoading(false)
      setIsReady(true)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [isLoading])

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      {isReady ? (
        <iframe
          src={url}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
        ></iframe>
      ) : (
        <button
          type="button"
          onClick={() => setIsLoading(true)}
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050508] text-cyan-400 transition-colors hover:bg-cyan-500/10"
          aria-label={`Load ${title}`}
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            <Play size={28} fill="currentColor" />
          </span>
          <span className="font-mono text-xs tracking-[0.35em] text-fuchsia-400">
            {isLoading ? 'LOADING_VIDEO' : 'PLAY_VIDEO'}
          </span>
        </button>
      )}

      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#050508] border border-cyan-500/30 p-4">
          <TerminalLoader />
        </div>
      )}

    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'videos' | 'branding' | 'websites'>('videos')
  const [scrolled, setScrolled] = useState(false)
  const [heroLoading, setHeroLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#050508] text-white font-['Rajdhani'] overflow-x-hidden relative cyber-grid">
      {/* Scanline overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-50" />
      
      {/* Animated grid lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-fuchsia-500/30 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300 ${
          scrolled ? 'bg-[#050508]/90 border-b border-cyan-500/30' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-3xl font-['Orbitron'] font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            WEG<span className="text-cyan-400">.</span><span className="text-fuchsia-500">exe</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-8">
            {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold tracking-wider text-white/70 hover:text-cyan-400 transition-colors relative glitch-hover"
                whileHover={{ y: -2 }}
              >
                [{item}]
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-cyan-500 text-black px-6 py-2 font-bold text-sm tracking-wider btn-cyber"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Terminal size={16} /> INIT_CONTACT
          </motion.a>

          <button 
            className="md:hidden p-2 border border-cyan-500/50 text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#050508] border border-cyan-500/50 mt-4 mx-4"
            >
              {['HOME', 'ABOUT', 'SERVICES', 'WORK', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-6 py-4 font-semibold tracking-wider border-b border-cyan-500/30 last:border-b-0 text-cyan-400 hover:bg-cyan-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &gt; {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with YouTube Video */}
      <section id="home" className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 border border-fuchsia-500/50 px-4 py-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Cpu size={16} className="text-cyan-400" />
                <span className="text-sm font-mono text-fuchsia-400">SYSTEM.ONLINE</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-['Orbitron'] font-bold leading-[1.1] mb-6">
                <span className="text-cyan-400 neon-cyan">CREATIVE</span><br />
                MARKETING<br />
                <span className="text-fuchsia-500 neon-pink">THAT MAKES</span><br />
                <span className="text-yellow-400 neon-yellow">BRANDS STAND OUT</span>
              </h1>
              
              <p className="text-lg text-white/60 mb-8 max-w-md font-mono border-l-2 border-cyan-500 pl-4">
                &gt; We are WEG. A digital agency crafting bold strategies, stunning visuals, and growth-focused campaigns for the modern world.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 bg-cyan-500 text-black px-8 py-4 font-bold tracking-wider btn-cyber"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ACCESS_WORK <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-2 border border-fuchsia-500 text-fuchsia-400 px-8 py-4 font-bold tracking-wider btn-cyber hover:bg-fuchsia-500/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW_SERVICES
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative corner-accent p-1">
                <motion.div 
                  className="border-2 border-cyan-500/50 p-4"
                  whileHover={{ borderColor: '#00ffff' }}
                >
                  <div className="w-full max-w-[280px] mx-auto overflow-hidden relative bg-black" style={{ aspectRatio: '9/16' }}>
                    <AnimatePresence>
                      {heroLoading && (
                        <motion.div
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-[#050508] border border-cyan-500/30 flex items-center justify-center z-10 p-4"
                        >
                          <TerminalLoader />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <iframe
                      src="https://www.youtube.com/embed/Pz1xDlh2Nt4?rel=0&modestbranding=1"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Featured Work"
                      onLoad={() => setHeroLoading(false)}
                    ></iframe>
                    <div className="absolute top-2 left-2 font-mono text-xs text-cyan-400 bg-black/50 px-2 py-1">
                      CAM_01 [REC]
                    </div>
                    <div className="absolute bottom-2 right-2 font-mono text-xs text-fuchsia-400 bg-black/50 px-2 py-1">
                      00:04:20:15
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-3 -right-3 bg-fuchsia-500 text-black px-3 py-1 font-mono text-sm font-bold"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  NEW
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <span className="text-cyan-400 font-mono text-sm">&lt;ABOUT_US /&gt;</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold mb-6 text-center">
              WE DONT JUST CREATE.<br />
              WE <span className="text-fuchsia-500 neon-pink">INNOVATE.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-center font-mono">
              &gt; WEG is a team of strategists, designers, and storytellers. We believe that great design isn't just about looking good—it's about solving problems and driving results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((item, idx) => (
              <motion.div
                key={item.title}
                className="border border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-colors corner-accent"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <item.icon size={24} className="text-cyan-400" />
                  <span className="text-xs font-mono text-fuchsia-400">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-['Orbitron'] font-bold mb-2 text-cyan-400">{item.title}</h3>
                <p className="text-white/60 text-sm font-mono">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 border-t border-fuchsia-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-fuchsia-500/50" />
              <span className="text-fuchsia-400 font-mono text-sm">&lt;SERVICES /&gt;</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-fuchsia-500/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold">OUR EXPERTISE</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                className="group border border-cyan-500/30 p-6 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all corner-accent cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon size={28} className="text-cyan-400" />
                  <span className="text-xs font-mono text-white/30">[{idx + 1}/06]</span>
                </div>
                <h3 className="text-lg font-['Orbitron'] font-bold mb-2 text-fuchsia-400">{service.title}</h3>
                <p className="text-white/60 text-sm font-mono">{service.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>&gt; EXECUTE</span>
                  <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Real Videos */}
      <section id="portfolio" className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <span className="text-cyan-400 font-mono text-sm">&lt;PORTFOLIO /&gt;</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold text-center">
              OUR <span className="text-cyan-400 neon-cyan">WORK</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(['videos', 'branding', 'websites'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-mono text-sm tracking-wider border transition-all ${
                  activeTab === tab 
                    ? 'bg-cyan-500 text-black border-cyan-500' 
                    : 'border-cyan-500/50 text-cyan-400 hover:border-cyan-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                [{tab.toUpperCase()}]
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'videos' && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {portfolioVideos.map((video, idx) => (
                  <motion.div
                    key={video.id}
                    className="border border-cyan-500/30 overflow-hidden relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ borderColor: '#00ffff' }}
                  >
                    <VideoPlayer url={video.url} title={video.title} />
                    <div className="p-4 border-t border-cyan-500/30 bg-[#050508]">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-mono text-xs">VID_{video.id}</span>
                        <span className="text-fuchsia-400 font-mono text-xs">{video.title}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {activeTab === 'branding' && (
              <motion.div
                key="branding"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {brandingProjects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    className="border border-fuchsia-500/30 overflow-hidden group cursor-pointer corner-accent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ borderColor: '#ff00ff' }}
                  >
                    <div className="aspect-[3/2] overflow-hidden relative">
                      <div className={`w-full h-full flex items-center justify-center ${
                        project.accent === 'cyan' ? 'bg-cyan-900/50' : 
                        project.accent === 'fuchsia' ? 'bg-fuchsia-900/50' : 'bg-yellow-900/50'
                      }`}>
                        <div className="text-6xl font-['Orbitron'] font-bold text-white/30">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-fuchsia-500/30">
                      <span className="text-cyan-400 font-mono text-xs">{project.cat}</span>
                      <h4 className="font-['Orbitron'] font-bold text-fuchsia-400">{project.title}</h4>
                      <p className="text-white/60 text-xs font-mono mt-1">{project.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {activeTab === 'websites' && (
              <motion.div
                key="websites"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {websiteProjects.map((project, idx) => (
                  <motion.a
                    key={idx}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-500/30 overflow-hidden group cursor-pointer corner-accent block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ borderColor: '#00ffff' }}
                  >
                    <div className="aspect-[3/2] overflow-hidden relative">
                      <div className={`w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${
                        project.accent === 'cyan' ? 'bg-cyan-900/50' : 
                        project.accent === 'fuchsia' ? 'bg-fuchsia-900/50' : 'bg-yellow-900/50'
                      }`}>
                        <div className="text-center px-6">
                          <div className="font-['Orbitron'] text-5xl font-bold text-white/40 mb-2">
                            {project.title.slice(0, 2)}
                          </div>
                          <div className="text-xs font-mono tracking-[0.35em] text-white/70">WEBSITE</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-cyan-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-cyan-400 font-mono text-xs border border-cyan-400 px-3 py-2">[ACCESS_SITE]</span>
                      </div>
                    </div>
                    <div className="p-4 border-t border-cyan-500/30">
                      <span className="text-fuchsia-400 font-mono text-xs">{project.cat}</span>
                      <h4 className="font-['Orbitron'] font-bold text-cyan-400">{project.title}</h4>
                      <p className="text-white/60 text-xs font-mono mt-1">{project.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-cyan-500/50 p-8 md:p-12 corner-accent"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <span className="text-cyan-400 font-mono text-sm">&lt;CONTACT /&gt;</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold mb-4 text-center">
              ESTABLISH <span className="text-cyan-400 neon-cyan">CONNECTION</span>
            </h2>
            <p className="text-white/60 mb-12 max-w-lg mx-auto text-center font-mono">
              &gt; Ready to elevate your brand? Initialize contact protocol.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <motion.a
                href="https://www.instagram.com/weg.digital.marketing?igsh=MXgzZGI4bTFtbHhpcA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-fuchsia-500/50 px-6 py-4 font-mono text-fuchsia-400 hover:bg-fuchsia-500/10 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Instagram size={20} /> @weg.digital.marketing
              </motion.a>
              <motion.a
                href="mailto:Wegdigitalmarketing@gmail.com"
                className="flex items-center justify-center gap-3 border border-cyan-500/50 px-6 py-4 font-mono text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Mail size={20} /> WegDigitalMarketing@gmail.com
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/60 font-mono mb-6">
              <span className="flex items-center gap-2">
                <Phone size={18} className="text-cyan-400" /> +251 972 521 305
              </span>
              <span className="flex items-center gap-2">
                <Phone size={18} className="text-cyan-400" /> +251 966 689 366
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
              <motion.a
                href="https://tiktok.com/@weg.digital.marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-fuchsia-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                [TIKTOK: @weg.digital.marketing]
              </motion.a>
              <motion.a
                href="https://t.me/WegDM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-cyan-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                [TELEGRAM: @wegDM]
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-['Orbitron'] font-bold">WEG<span className="text-cyan-400">.</span><span className="text-fuchsia-500">exe</span></span>
          <p className="text-white/40 text-sm font-mono">&gt; 2024 WEG Agency. All systems operational.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
