import React, { useState } from 'react';

// --- DATA OTÁZEK ---
const QUESTIONS = [
  { 
    q: "Která z těchto technologických legend vyžadovala k vyvolání obrazu vysoce toxické výpary rtuti?", 
    a: "Daguerreotype", 
    options: ["Camera Obscura", "Daguerreotype", "Polaroid SX-70"] 
  },
  { 
    q: "Představte si rok 1888. Pořídíte 100 snímků a musíte poslat celý přístroj poštou do továrny. Který to je?", 
    a: "Kodak No.1", 
    options: ["Leica I", "Kodak No.1", "Nikon F"] 
  },
  { 
    q: "Fyzikální hádanka: Proč je obraz v Camery Obscury promítán vzhůru nohama?", 
    a: "Kvůli křížení paprsků v malém otvoru", 
    options: ["Kvůli zakřivení čočky", "Kvůli křížení paprsků v malém otvoru", "Je to záměrná optická iluze"] 
  }
];

export default function Quiz({ onClose, onWin }) {
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (opt) => {
    const isCorrect = opt === QUESTIONS[quizIndex].a;
    const newScore = isCorrect ? score + 1 : score;
    
    if (isCorrect) setScore(newScore);

    if (quizIndex < QUESTIONS.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizFinished(true);
      // Pokud uživatel odpověděl na všechno správně, zavoláme onWin
      if (newScore === 3) {
        onWin();
      }
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      backgroundColor: 'rgba(0,0,0,0.96)', 
      zIndex: 2000, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
      padding: '20px'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '650px', 
        backgroundColor: '#111', 
        padding: '60px 40px', 
        borderRadius: '40px', 
        border: '2px solid #d4af37', 
        textAlign: 'center', 
        boxShadow: '0 0 60px rgba(212,175,55,0.15)',
        position: 'relative'
      }}>
        
        {/* Tlačítko pro zavření v rohu */}
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '25px', right: '30px', background: 'none', border: 'none', color: '#666', fontSize: '24px', cursor: 'pointer' }}
        >
          ✕
        </button>

        {!quizFinished ? (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <span style={{ color: '#d4af37', letterSpacing: '5px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Kurátorská Výzva: Snímek {quizIndex + 1} / {QUESTIONS.length}
            </span>
            
            <p style={{ 
              fontSize: '1.8rem', 
              margin: '40px 0', 
              fontWeight: 'bold', 
              lineHeight: '1.4',
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {QUESTIONS[quizIndex].q}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {QUESTIONS[quizIndex].options.map(opt => (
                <button 
                  key={opt} 
                  onClick={() => handleAnswer(opt)} 
                  className="quiz-option-btn"
                  style={{ 
                    padding: '20px', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(212,175,55,0.2)', 
                    color: '#fff', 
                    borderRadius: '15px', 
                    cursor: 'pointer', 
                    fontSize: '1.1rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(212,175,55,0.1)';
                    e.target.style.borderColor = '#d4af37';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.03)';
                    e.target.style.borderColor = 'rgba(212,175,55,0.2)';
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
            <h2 style={{ color: '#d4af37', fontSize: '3.5rem', marginBottom: '20px', letterSpacing: '3px' }}>
              {score === QUESTIONS.length ? "👑 EXCELENTNÍ" : "HOTOVO"}
            </h2>
            
            <p style={{ fontSize: '1.4rem', marginBottom: '40px', color: '#aaa' }}>
              Vaše kurátorská úspěšnost: <strong style={{ color: '#fff' }}>{score} / {QUESTIONS.length}</strong>
            </p>

            {score === QUESTIONS.length ? (
              <p style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Získali jste titul: Mistr historické optiky
              </p>
            ) : (
              <p style={{ marginBottom: '40px', color: '#666' }}>Pro titul mistra musíte odpovědět na všechny otázky správně.</p>
            )}

            <button 
              onClick={onClose} 
              style={{ 
                padding: '15px 50px', 
                background: '#d4af37', 
                color: '#000', 
                border: 'none', 
                borderRadius: '30px', 
                fontWeight: 'bold', 
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
              }}
            >
              Návrat k expozici
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}