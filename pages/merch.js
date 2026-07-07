import Link from 'next/link'

export default function Merch() {
  const storeUrl = 'https://www.wavygoods.com/'

  return (
    <div className="page merch-page">
      <header className="topbar">
        <div className="brand">Merch — WavyGoods</div>
        <nav>
          <Link href="/"><a>Home</a></Link>
        </nav>
      </header>

      <main className="merch-container">
        <div className="merch-note">
          <strong>Shop WavyGoods Collection</strong> — Browse exclusive merchandise and apparel
        </div>

        <iframe
          title="WavyGoods Store"
          src={storeUrl}
          className="merch-iframe"
          sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-top-navigation"
        />
      </main>

      <footer className="footer">© {new Date().getFullYear()} WavyGoods</footer>
    </div>
  )
}