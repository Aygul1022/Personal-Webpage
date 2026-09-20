import { useEffect, useState } from 'react'
import './App.css'

const profile = {
  name: 'AYGÜL RANA ÖZCAN',
  title: 'Computer Engineering Student',

summary: (
  <>
    Third-year Computer Engineering student at Doğuş University, ranking as the
    <strong> top student in the department</strong>, with a strong interest in{' '}
    <strong>software development</strong>, <strong>artificial intelligence</strong>,{' '}
    <strong>data science</strong>, <strong>machine learning</strong>, and{' '}
    <strong>cloud technologies</strong>. I enjoy turning what I learn into{' '}
    practical projects and gaining experience through real-world systems,{' '}
    analysis, and software development. With a strong foundation in{' '}
    <strong>programming</strong>, <strong>data analysis</strong>, and{' '}
    <strong>problem-solving</strong>, I continuously develop my technical skills{' '}
    through academic projects and specialized training, with a particular interest{' '}
    in applying <strong>data-driven and AI-based approaches</strong> to real-world problems.
  </>
),
  roles: [
    {
      date: 'August 2026 - September 2026',
      title: 'Computer Engineering Intern',
      company:
        'Turkish Technic · Training Technologies and Business Planning Chief',
      description:
        'Contributed to the analysis process of transitioning from an existing internal employee training tracking structure to a more practical and centralized application. Prepared and organized analysis reports, worked with requirements and documentation, and observed internal data management and organization processes.',
      tags: [
        'System Analysis',
        'Requirements Analysis',
        'Documentation',
        'Data Management',
      ],
    },
    {
      date: '2025 - Present',
      title: 'Junior Software Developer',
      company:
        'LOOP "Yazılım ve Fikir Geliştirme Takımı"',
      description: 
      'Loop Software Development A Team Member, Junior Developer ',
      tags: [
        'Software Development',
        'Problem Analysis',
        'Team Work',
        'Engineering Applications',
      ],
    },
    {
      date: 'March 2024 - May 2024',
      title: 'Online Intership',
      company:
        'DenizBank',
      description: 
      'Denizaşırı Online Internship Program',
      tags: [
        'Banking',
        'Problem Analysis',
        'Sales',
        'Finance',
      ],
    }

  ],


  projects: [
    {
      number: '01 / 04',
      title: 'MediGuide – AI Knowledge Management Agent',
      description:
        'MediGuide is an AI-driven knowledge management agent designed for the MediSync Health Network. The system transforms scattered clinical data into actionable knowledge, providing a Human-AI Symbiosis where the agent assists the physicians clinical wisdom rather than replacing it.',
      type: 'Full-Stack Project · Erasmus Exchange Project · In Progress',
      link: 'https://github.com/Aygul1022/MediGuide',
    },
   
    {
      number: '02 / 04',
      title: 'LettersBox - Movie Selection App',
      description:
      'A react project where user can select favorite movies from the API which gives access to newly released movies',
      type: 'Software Development · LOOP Team',
      link: 'http://letters-box-react-project-fr9046o79-ayguel.vercel.app/',
    },

 {
      number: '03 / 04',
      title: 'Notepad Application',
      description:
        'A Java-based HTTP server and web application supporting note creation, deletion, searching, and filtering through an HTML and JavaScript interface.',
      type: 'Java · HTML · JavaScript',
      link: 'https://github.com/Aygul1022/NotepadApplication',
    },

    {
      number: '04 / 04',
      title: 'Hero Arena',
      description:
        'A game project developed using Sui Move, focusing on smart contract logic and object-oriented game mechanics on the Sui ecosystem.',
      type: 'Sui Move · Blockchain',
      link: 'https://github.com/Aygul1022/AygulRanaOzcan-Challenge'
    },
  ],

  education: [
    {
      title: 'B.Sc. Computer Engineering',
      place: 'Doğuş University · 100% Scholarship',
      year: '2023 — 2028',
    },
    {
      title: 'Erasmus+ Exchange Programme',
      place: 'Roma Tre University · Rome, Italy',
      year: '2026',
    },
  ],

  certifications: [
    {
      title: 'Data Analysis School – AI Development Module',
      place: 'Marmara University',
      year: 'Certificate',
    },
    {
      title: 'AI Development / AI4Future',
      place: 'IBM',
      year: 'Certificate',
    },
    {
      title: 'Analyzing and Visualizing Data with Microsoft Excel',
      place: 'SistersLab',
      year: 'Certificate',
    },
    {
      title: 'Artificial Intelligence’s Impact on the Business World',
      place: 'SistersLab',
      year: 'Certificate',
    },
    {
      title:'Denizaşırı Staj Programı Başarı Sertifikası',
      place:'DenizBank',
      year: 'Certificate',
    }

  ],

  skills: [
    ['C++', '01'],
    ['Java', '02'],
    ['Python', '03'],
    ['SQL', '04'],
    ['JavaScript', '05'],
    ['React', '06'],
    ['HTML & CSS', '07'],
    ['NumPy & Pandas', '08'],
    ['SQLite', '09'],
    ['Git & GitHub', '10'],
    ['Data Analysis', '11'],
    ['Artificial Intelligence', '12'],
  ],
}

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark">👩🏻‍💻</span>
          {profile.name}
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Contact <Arrow />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero reveal">
          <div className="hero-copy">
            <div className="eyebrow">
              Istanbul, Türkiye 
            </div>

            <h1>
              Building my path in <em>software & AI.</em>
            </h1>

            <p className="hero-intro">⋆˚✮˖°⋆｡🖥️˖ ࣪ ⊹⋆.˚</p>
            <p className="hero-intro">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Get in touch <Arrow />
              </a>
              <a className="button secondary" href="#projects">
                View projects
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="availability">
              <span className="pulse"></span>
              Open to opportunities
            </div>

            <div className="card-meta">
              <span>Computer Engineering</span>
              <span>3rd Year</span>
            </div>
          </aside>
        </section>

        <div className="layout">

          <section className="section reveal" id="experience">
            <div className="section-heading">
              <div className="section-kicker">02 / Experience</div>
              <h2>Experiences</h2>
            </div>

            <div className="timeline">
              {profile.roles.map((role) => (
                <article className="role" key={role.title}>
                  <div className="role-date">{role.date}</div>

                  <div className="role-body">
                    <h3>{role.title}</h3>
                    <div className="role-company">{role.company}</div>
                    <p>{role.description}</p>

                    <div className="tag-list">
                      {role.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section reveal" id="projects">
            <div className="section-heading">
              <div className="section-kicker">03 / Selected work</div>
              <h2>Featured projects</h2>
            </div>

            <div className="project-grid">
              {profile.projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="project-index">{project.number}</div>

                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>

                  <a
                    className="project-footer"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="project-link">{project.type}</span>
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="section reveal" id="education">
            <div className="section-heading">
              <div className="section-kicker">04 / Education</div>
              <h2>Education</h2>
            </div>

            <div className="education-grid">
              {profile.education.map((item) => (
                <article className="education-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <span>{item.year}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="section reveal" id="certifications">
            <div className="section-heading">
              <div className="section-kicker">05 / Certifications</div>
              <h2>Certifications</h2>
            </div>

            <div className="certification-grid">
              {profile.certifications.map((item) => (
                <article className="education-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <span>{item.year}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="section reveal" id="skills">
            <div className="section-heading">
              <div className="section-kicker">06 / Technical skills</div>
              <h2>Technical skills</h2>
            </div>

            <div className="skills">
              {profile.skills.map(([skill, number]) => (
                <div className="skill" key={skill}>
                  {skill}
                  <small>{number}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="contact reveal" id="contact">
            <div className="section-kicker">07 / Contact</div>

            <div className="contact-actions">
              <a
                className="button primary"
                href="https://www.linkedin.com/in/aygulranaozcan"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
              <a
                className = 'button primary'
                href = "https://github.com/Aygul1022"
                target = "blank"
                rel = "noreferrer"
              >
                GitHub <Arrow />
              </a>

              <a className="button primary" href="mailto:aygulozcan450@gmail.com">
                aygulozcan450@gmail.com <Arrow />
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <span>© 2026 Aygül Rana Özcan</span>
        <span>Computer Engineering Student</span>
      </footer>
    </div>
  )
}

export default App
