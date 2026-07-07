import Link from 'next/link'

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
        <section className="panel">
          <h1>Welcome — WaveGodMaxB</h1>
          <p>Dark, dynamic, side-scrolling landing panel.</p>
        </section>

        <section className="panel alt">
          <h2>About</h2>
          <p>Use this panel to show biography, links, media, etc.</p>
        </section>

        <section className="panel alt2">
          <h2>Gallery / Media</h2>
          <p>Embed videos, audio, or a dynamic grid here.</p>
        </section>

        <section className="panel merch-preview">
          <h2>Merch Preview</h2>
          <p>Tap Merch to go to the full store page.</p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} WaveGodMaxB</footer>
    </div>
  )
}
