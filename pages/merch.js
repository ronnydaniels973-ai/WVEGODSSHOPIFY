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
          <strong>Note:</strong> If the store prevents embedding, follow the README to wire a headless integration.
        </div>

        <iframe
          title="WavyGoods Store"
          src={storeUrl}
          className="merch-iframe"
          sandbox="allow-forms allow-popups allow-scripts allow-same-origin"
        />

        <div className="api-alternative">
          <h3>Better option: Headless integration</h3>
          <p>
            Use Shopify Storefront API / Buy Button or the store's REST API to fetch products and render them natively for a faster, UX-friendly experience.
          </p>
        </div>
      </main>

      <footer className="footer">© {new Date().getFullYear()} WavyGoods</footer>
    </div>
  )
}
