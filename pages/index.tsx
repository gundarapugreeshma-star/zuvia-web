import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 960, margin: '0 auto' }}>
      <header style={{ background: '#0f172a', color: 'white', padding: 24, borderRadius: 16 }}>
        <h1 style={{ margin: 0 }}>ZUVIA</h1>
        <p style={{ margin: '8px 0 0' }}>Smart learning for students</p>
      </header>

      <nav style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: '#0f172a', fontWeight: 700 }}>Home</Link>
        <Link href="/materials" style={{ color: '#0f172a', fontWeight: 700 }}>Study Materials</Link>
        <Link href="/quizzes" style={{ color: '#0f172a', fontWeight: 700 }}>Quizzes</Link>
        <Link href="/exam-prep" style={{ color: '#0f172a', fontWeight: 700 }}>Exam Preparation</Link>
      </nav>

      <section style={{ marginTop: 28 }}>
        <h2>Welcome to ZUVIA</h2>
        <p>
          A modern student portal for learning, revision, and exam preparation.
          Explore notes, take quizzes, and get ready for your next test.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginTop: 26 }}>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}>
          <h3>Study Materials</h3>
          <p>Review chapter notes, formulas, and key concepts in an easy-to-read format.</p>
          <Link href="/materials">Open materials →</Link>
        </div>

        <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}>
          <h3>Quizzes</h3>
          <p>Test yourself with short, interactive assessments and instant feedback.</p>
          <Link href="/quizzes">Take a quiz →</Link>
        </div>

        <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}>
          <h3>Exam Preparation</h3>
          <p>Track revision plans, mock tests, and the most important topics to focus on.</p>
          <Link href="/exam-prep">Prepare →</Link>
        </div>
      </section>
    </main>
  );
}
