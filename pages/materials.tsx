import Link from 'next/link';

const materials = [
  {
    id: 'algebra',
    title: 'Algebra Basics',
    summary: 'Linear equations, expressions, simplification, and solving for variables.'
  },
  {
    id: 'biology',
    title: 'Biology Fundamentals',
    summary: 'Cell structure, cells and tissues, body systems, and important concepts.'
  },
  {
    id: 'history',
    title: 'World History Overview',
    summary: 'Key events and turning points that shaped modern history.'
  },
  {
    id: 'english',
    title: 'English Grammar',
    summary: 'Sentence structure, punctuation, and common grammar rules.'
  }
];

export default function MaterialsPage() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <h1>Study Materials</h1>
      <p>Learn and revise key topics with organized notes and resources.</p>

      <div style={{ display: 'grid', gap: 18, marginTop: 20 }}>
        {materials.map((material) => (
          <article key={material.id} style={{ border: '1px solid #dfe7f1', borderRadius: 12, padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>{material.title}</h3>
            <p>{material.summary}</p>
            <Link href="/">← Back home</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
