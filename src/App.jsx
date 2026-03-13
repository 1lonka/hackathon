import React, { useState, useEffect } from 'react';
import Hero from './Hero';

// --- DATA FOTOAPARÁTŮ (Přidali jsme barvy pozadí - bgColor) ---
const CAMERAS = [
  { id: 'daguerre', name: 'Daguerre', year: '1839',img: '/camera-daguerre.jpg', devTime: 7000, bgColor: '#2b1d0e', filter: 'sepia(1) contrast(1.1) grayscale(0.2) blur(0.5px)', view: { transform: 'rotate(180deg) blur(1.5px) brightness(0.7)' }, data: { f: '--', t: '5m', iso: '0.01' }, sound: 'daguerete.wav', realTime: "Zajímavost: Vyvolání trvalo až 60 minut nad jedovatou rtutí." },
  { id: 'kodak', name: 'Kodak No.1', year: '1888',img: '/kodak', devTime: 5000, bgColor: '#1a1a1a', filter: 'grayscale(1) contrast(0.8) sepia(0.3)', view: { transform: 'scale(1.1) brightness(0.8)' }, data: { f: '9.0', t: '1/25', iso: '25' }, sound: 'kodak.wav', realTime: "Zajímavost: Na fotky se čekalo 2 týdny, než přišly poštou z továrny." },
  { id: 'leica', name: 'Leica I', year: '1925',img: '/leica.png', devTime: 3000, bgColor: '#121212', filter: 'grayscale(1) contrast(1.5) brightness(1.1)', data: { f: '3.5', t: '1/200', iso: '50' }, sound: 'leica.mp3', realTime: "Zajímavost: Film se musel složitě vyvíjet v temné komoře." },
  { id: 'nikon', name: 'Nikon F', year: '1959',img: '/nikon.jpg', devTime: 1500, bgColor: '#1d1b2d', filter: 'contrast(1.2) saturate(0.8)', data: { f: '2.8', t: '1/500', iso: '200' }, sound: 'nikon.wav', realTime: "Zajímavost: Fotky byly k vyzvednutí ve sběrně nejdříve druhý den." },
  { id: 'polaroid', name: 'Polaroid SX-72', year: '1972',img: '/polaroid.png', devTime: 4000, bgColor: '#2d1b24', filter: 'sepia(0.2) saturate(1.8) hue-rotate(-10deg)', data: { f: '8.0', t: '1/125', iso: '640' }, sound: 'polaroid.wav', realTime: "Zajímavost: Snímek se vybarvoval cca 60 sekund přímo před očima." },
  { id: 'sony', name: 'Sony A7', year: '2013',img: '/sony-a7.png', devTime: 0, bgColor: '#0d1117', filter: 'contrast(1.1) saturate(1.1)', data: { f: '1.8', t: '1/2000', iso: '1600' }, sound: 'sonya7.wav', realTime: "Digitální revoluce: Snímač zpracuje obraz za méně než 0.01 s." },
  { id: 'smartphone', name: 'iPhone', year: '2024', devTime: 0, bgColor: '#000000', filter: 'none', data: { f: '1.6', t: '1/4000', iso: '3200' }, sound: 'iphone.wav', realTime: "Současnost: Fotka je vylepšena miliardami operací pomocí AI." }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [flash, setFlash] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDeveloping, setIsDeveloping] = useState(false);

  const activeCam = CAMERAS[index];

  const playSound = (file) => {
    if (!file) return;
    const audio = new Audio(`/${file}`);
    audio.play().catch(e => console.log("Audio blocked", e));
  };

  useEffect(() => {
    let interval;
    if (showResult && activeCam.devTime > 0) {
      setIsDeveloping(true);
      setProgress(0);
      const step = 100 / (activeCam.devTime / 50);
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setIsDeveloping(false);
            return 100;
          }
          return p + step;
        });
      }, 50);
    } else {
      setProgress(100);
      setIsDeveloping(false);
    }
    return () => clearInterval(interval);
  }, [showResult, activeCam]);

  const takePhoto = () => {
    playSound(activeCam.sound);
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      setShowResult(true);
    }, 150);
  };

  return (
    // HLAVNÍ OBAL - Tady se mění barva pozadí plynule (transition)
    <div style={{ 
      backgroundColor: activeCam.bgColor, 
      transition: 'background-color 1.2s ease-in-out', 
      minHeight: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      color: '#fff', 
      fontFamily: 'serif' 
    }}>
      
      <Hero />

      {/* 2. HLAVNÍ OBRAZ ÉRY (Ten jeden, co jsi chtěla) */}
      <section style={{ padding: '60px 0', textAlign: 'center', width: '100%', maxWidth: '800px' }}>
        <h2 style={{ color: '#d4af37', letterSpacing: '4px', marginBottom: '20px' }}>ATMOSFÉRA ROKU {activeCam.year}</h2>
        
        <div style={{ width: '100%', height: '450px', overflow: 'hidden', borderRadius: '20px', border: '1px solid #333', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <img 
              src={activeCam.img} 
              alt={activeCam.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.8s ease-in-out' }} 
            />
        </div>

        {/* JEDNODUCHÁ ČASOVÁ OSA PŘÍMO POD OBRAZEM */}
        <div style={{ width: '100%', height: '2px', background: '#333', marginTop: '40px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'absolute', top: '-10px' }}>
            {CAMERAS.map((cam, i) => (
              <div 
                key={cam.id} 
                onClick={() => setIndex(i)}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ width: '2px', height: '20px', background: i === index ? '#d4af37' : '#555', transition: '0.3s' }} />
                <span style={{ marginTop: '10px', fontSize: '0.8rem', color: i === index ? '#d4af37' : '#666' }}>{cam.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TVŮJ PERFEKTNÍ FOŤÁK (Beze změn uvnitř) --- */}
      <div style={{ width: '850px', height: '550px', backgroundColor: '#1a1a1a', borderRadius: '40px', border: '12px solid #111', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 50px 100px rgba(0,0,0,0.9)', marginBottom: '50px' }}>
        <div style={{ height: '70px', background: 'linear-gradient(#444, #222)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 60px', borderBottom: '5px solid #000', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
          <div onClick={takePhoto} style={{ cursor: 'pointer', width: '60px', height: '60px', backgroundColor: '#bbb', borderRadius: '50%', border: '4px solid #888', boxShadow: '0 5px 0 #555' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '20px' }}>
          <button onClick={() => setIndex((i) => (i - 1 + CAMERAS.length) % CAMERAS.length)} style={{ background: '#222', border: '1px solid #444', color: '#d4af37', padding: '15px', borderRadius: '50%', cursor: 'pointer' }}>❮</button>
          <div style={{ width: '580px', height: '380px', backgroundColor: '#000', border: '10px solid #252525', borderRadius: '15px', position: 'relative', overflow: 'hidden' }}>
            {flash && <div style={{ position: 'absolute', inset: 0, backgroundColor: '#fff', zIndex: 10 }} />}
            <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s', ...(activeCam.view || { transform: 'none' }) }} />
          </div>
          <button onClick={() => setIndex((i) => (i + 1) % CAMERAS.length)} style={{ background: '#222', border: '1px solid #444', color: '#d4af37', padding: '15px', borderRadius: '50%', cursor: 'pointer' }}>❯</button>
        </div>

        <div style={{ width: '140px', height: '70px', backgroundColor: '#152015', position: 'absolute', bottom: '25px', right: '40px', borderRadius: '5px', border: '3px solid #333', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#2f2', fontFamily: 'monospace' }}>
          <div style={{ fontSize: '10px' }}>ISO {activeCam.data.iso}</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{activeCam.year}</div>
        </div>
      </div>

      <h1 style={{ color: '#d4af37', marginBottom: '100px', letterSpacing: '12px', textTransform: 'uppercase', fontSize: '4.5rem', fontWeight: 'bold' }}>{activeCam.name}</h1>

      {/* --- MODAL (Beze změn) --- */}
      {showResult && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.98)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <h2 style={{ color: '#d4af37', letterSpacing: '3px', marginBottom: '10px' }}>
             {isDeveloping ? `💡 Vyvíjení: ${Math.round(progress)}%` : (activeCam.id === 'sony' || activeCam.id === 'smartphone' ? 'DIGITÁLNÍ VÝSLEDEK' : '💡 ZAJÍMAVOST')}
          </h2>
          <p style={{ color: '#fff', marginBottom: '30px', fontSize: '1.2rem', textAlign: 'center' }}>{activeCam.realTime}</p>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '15px 15px 50px 15px', boxShadow: '0 20px 40px #000', width: '350px' }}>
              <div style={{ overflow: 'hidden', height: '350px', backgroundColor: '#fff' }}>
                <img 
                  src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isDeveloping ? `brightness(${2.5 - (progress/100)}) contrast(${progress/100}) ${activeCam.filter}` : activeCam.filter, opacity: isDeveloping ? (progress/100) : 1, ...(activeCam.view || { transform: 'none' }) }} 
                />
              </div>
              <p style={{ color: '#000', textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>{activeCam.name.toUpperCase()} ({activeCam.year})</p>
            </div>
            {!isDeveloping && activeCam.id !== 'smartphone' && (
              <div style={{ backgroundColor: '#fff', padding: '15px 15px 50px 15px', boxShadow: '0 20px 40px #000', width: '350px', border: '4px solid #d4af37' }}>
                <div style={{ overflow: 'hidden', height: '350px' }}>
                  <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ color: '#000', textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>IPHONE 15 PRO (2024)</p>
              </div>
            )}
          </div>
          {!isDeveloping && <button onClick={() => setShowResult(false)} style={{ marginTop: '40px', padding: '12px 40px', background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', cursor: 'pointer', fontWeight: 'bold' }}>ZAVŘÍT</button>}
        </div>
      )}
    </div>
  );
}