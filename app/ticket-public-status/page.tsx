'use client';
import React, { useEffect, useState } from 'react';

export default function TicketPublicStatus() {
  const [data, setData] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/admin-tickets?password=admin123');
      const json = await res.json();
      setData(json);
    }
    load();
  }, []);

  return (
    <main style={{ padding: '2rem', background: '#000', color: '#00ffe1', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>🎟️ Live Ticket Count</h1>
      {!data ? <p>Loading...</p> : (
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '500px', margin: '0 auto' }}>
          {Object.entries(data).map(([k, v]) => (
            <li key={k} style={{ marginBottom: '1.5rem', background: '#111', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 10px #00ffe1aa' }}>
              <strong>{k}</strong><br />
              <span style={{ fontSize: '1.2rem' }}>{v.toLocaleString()} tickets left</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}