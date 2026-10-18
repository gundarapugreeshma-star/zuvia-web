import Link from 'next/link';

export default function ExamPrepPage() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <h1>Exam Preparation</h1>
      <p>Plan your revision, practice mock tests, and focus on the most important topics.</p>

      <div style={{ display: 'grid', gap: 18, marginTop: 20 }}>
        <section style={{ border: '1px solid #dfe7f1', borderRadius: 12, padding: 18 }}>
          <h3>Revision Checklist</h3>
          <ul>
            <li>Review notes each day</li>
            <li>Practice short quizzes</li>
            <li>Focus on weak subjects</li>
            <li>Use timed mock exams</li>
          </ul>
        </section>

        <section style={{ border: '1px solid #dfe7f1', borderRadius: 12, padding: 18 }}>
          <h3>Exam Tips</h3>
          <ul>
            <li>Read the question carefully</li>
            <li>Manage your time</li>
            <li>Use key terms and examples</li>
            <li>Review your answers before finishing</li>
          </ul>
        </section>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/">← Back home</Link>
      </div>
    </main>
  );
}
