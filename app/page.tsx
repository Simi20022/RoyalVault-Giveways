export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem', background: '#000', color: '#00ffe1' }}>
      <h1>Royal Giveaways</h1>
      <p>Every ticket holds a dream. Maybe yours.</p>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ background: '#111', padding: '1rem', borderRadius: '12px', boxShadow: '0 0 15px #00ffe1' }}>
          Mercedes CLS + €1000<br />
          <a href='/checkout?item=Mercedes CLS 400d AMG + 1000€ PoketMoney'>
            <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', background: '#00ffe1', color: '#000' }}>
              Enter
            </button>
          </a>
        </div>
        <div style={{ background: '#111', padding: '1rem', borderRadius: '12px', boxShadow: '0 0 15px #00ffe1' }}>
          iPhone 16 + €500<br />
          <a href='/checkout?item=iPhone 16 Pro Max 1TB + 500€ MoneyPocket'>
            <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', background: '#00ffe1', color: '#000' }}>
              Enter
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}