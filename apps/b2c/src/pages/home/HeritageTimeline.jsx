const EVENTS = [
  { year: '1999', title: 'The First Spark', body: 'Amstela was founded in the heart of Surat, the diamond capital of India.' },
  { year: '2008', title: 'Global Artistry', body: 'We began exporting our unique fusion of Indian heritage and global design.' },
  { year: '2015', title: 'Bespoke Excellence', body: 'Launched our private consultation suite for bridal masterpieces.' },
  { year: 'Today', title: 'Digital Brilliance', body: 'Bringing the Amstela experience to discerning clients worldwide.' },
]

export default function HeritageTimeline() {
  return (
    <section className="section wrap">
       <div className="section-head" style={{ marginBottom: 60 }}>
          <span className="eyebrow">Our Journey</span>
          <h2>A Legacy of Brilliance</h2>
       </div>
       
       <div className="timeline">
         {EVENTS.map(e => (
           <div key={e.year} className="tl-row">
             <div className="tl-year">{e.year}</div>
             <div className="tl-body">
               <h4>{e.title}</h4>
               <p>{e.body}</p>
             </div>
           </div>
         ))}
       </div>
    </section>
  )
}
