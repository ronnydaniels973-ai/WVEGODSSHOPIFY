import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">WaveGod × WavyGoods</div>
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/merch"><a>Merch</a></Link>
        </nav>
      </header>

      {/* Horizontal scroll container */}
      <main className="h-scroll" role="main" aria-label="Horizontal sections">
        <section className="panel hero">
          <img src="https://wavegodmaxb.com/hero.jpg" alt="WaveGod Hero" className="panel-image" />
          <div className="panel-overlay">
            <h1>Welcome — WaveGodMaxB</h1>
            <p>Dark, dynamic, side-scrolling landing experience</p>
          </div>
        </section>

        <section className="panel about">
          <img src="https://wavegodmaxb.com/about.jpg" alt="About" className="panel-image" />
          <div className="panel-overlay">
            <h2>About</h2>
            <p>Explore the creative vision and story behind WaveGod</p>
          </div>
        </section>

        <section className="panel gallery">
          <img src="https://wavegodmaxb.com/gallery.jpg" alt="Gallery" className="panel-image" />
          <div className="panel-overlay">
            <h2>Gallery / Media</h2>
            <p>Curated collection of visuals, videos, and creative work</p>
          </div>
        </section>

        <section className="panel merch-preview">
          <img src="https://wavegodmaxb.com/merch.jpg" alt="Merch" className="panel-image" />
          <div className="panel-overlay">
            <h2>Exclusive Merch</h2>
            <p>Tap Merch to explore WavyGoods collection</p>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} WaveGodMaxB</footer>
    </div>
  )
}