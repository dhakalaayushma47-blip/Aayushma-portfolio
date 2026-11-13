import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">
          AD.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">AI & SOFTWARE DEVELOPER</p>

            <h1>
              I build intelligent
              <span> software.</span>
            </h1>

            <p className="hero-description">
              I'm Aayushma Dhakal, an emerging AI & software developer focused
              on turning real-world problems into intelligent, practical and
              scalable digital products.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View my work
              </a>

              <a href="#contact" className="button secondary">
                Let's connect
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="status">
              <span></span>
              Available for opportunities
            </div>

            <p className="hero-number">01</p>
          </div>
        </section>

        {/* WHAT I BRING */}
        <section className="section capabilities">
          <p className="section-label">01 — WHAT I BRING</p>

          <div className="capabilities-intro">
            <h2>
              From ideas to
              <span> intelligent products.</span>
            </h2>

            <p>
              I combine artificial intelligence, software development and
              problem-solving to build technology that is useful beyond the
              classroom.
            </p>
          </div>

          <div className="capabilities-grid">
            <article className="capability">
              <span className="capability-number">01</span>

              <h3>AI & Machine Learning</h3>

              <p>
                Building predictive models and exploring practical AI
                applications that turn data into useful insights.
              </p>

              <div className="capability-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Data</span>
              </div>
            </article>

            <article className="capability">
              <span className="capability-number">02</span>

              <h3>Software Engineering</h3>

              <p>
                Developing practical applications across frontend, backend,
                databases and software systems.
              </p>

              <div className="capability-tags">
                <span>React</span>
                <span>Python</span>
                <span>SQL</span>
              </div>
            </article>

            <article className="capability">
              <span className="capability-number">03</span>

              <h3>Problem Solving</h3>

              <p>
                Breaking down real-world problems and turning them into
                structured, usable and scalable technology solutions.
              </p>

              <div className="capability-tags">
                <span>Analysis</span>
                <span>Systems</span>
                <span>Innovation</span>
              </div>
            </article>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <p className="section-label">02 — ABOUT</p>

          <div className="section-grid">
            <h2>
              Technology with a
              <span> purpose.</span>
            </h2>

            <div>
              <p>
                I'm currently pursuing a BSc (Hons) in Artificial Intelligence
                and developing my skills across software engineering, machine
                learning and full-stack development.
              </p>

              <p>
                I enjoy turning real-world problems into practical software —
                from business systems and analytics platforms to
                machine-learning applications.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
          <p className="section-label">03 — SELECTED WORK</p>

          <div className="project-list">
            <article className="project">
              <div className="project-number">01</div>

              <div className="project-info">
                <p>AI · SOFTWARE · BUSINESS</p>

                <h3>InvoiceX</h3>

                <p>
                  Enterprise retail and strategic inventory system designed to
                  modernize billing, inventory management and business
                  analytics.
                </p>

                <div className="tags">
                  <span>Python</span>
                  <span>AI</span>
                  <span>Analytics</span>
                  <span>Web</span>
                </div>
              </div>
            </article>

            <article className="project">
              <div className="project-number">02</div>

              <div className="project-info">
                <p>FULL-STACK DEVELOPMENT</p>

                <h3>World Hotels</h3>

                <p>
                  A hotel booking platform built with a Python backend,
                  database integration and responsive web interface.
                </p>

                <div className="tags">
                  <span>Flask</span>
                  <span>Python</span>
                  <span>MySQL</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </article>

            <article className="project">
  <div className="project-number">03</div>

  <div className="project-info">
    <p>REAL-WORLD BUSINESS · WEB DEVELOPMENT</p>

    <h3>KHUSHI PHARMA & CLINIC</h3>

    <p>
      A professional digital presence designed and developed for a
      real pharmaceutical and healthcare business, showcasing its
      services, pharmacy and clinic offerings through a modern,
      user-focused website.
    </p>

    <div className="tags">
      <span>Web Development</span>
      <span>UI / UX</span>
      <span>Healthcare</span>
      <span>Business</span>
    </div>
  </div>
</article>

<article className="project">
  <div className="project-number">04</div>

  <div className="project-info">
    <p>MACHINE LEARNING</p>

    <h3>Diabetes Prediction</h3>

    <p>
      Machine-learning classification project exploring diabetes
      prediction using support vector machines and model evaluation.
    </p>

    <div className="tags">
      <span>Python</span>
      <span>Scikit-learn</span>
      <span>SVM</span>
      <span>ML</span>
    </div>
  </div>
</article>

                
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills" id="skills">
          <p className="section-label">04 — SKILLS</p>

          <div className="skills-grid">
            <div>
              <h3>Development</h3>
              <p>Python</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>HTML / CSS</p>
              <p>SQL</p>
              <p>Git / GitHub</p>
            </div>

            <div>
              <h3>AI & Data</h3>
              <p>Machine Learning</p>
              <p>Scikit-learn</p>
              <p>Data Analysis</p>
              <p>AI Applications</p>
              <p>Predictive Modelling</p>
            </div>

            <div>
              <h3>Currently Exploring</h3>
              <p>FastAPI</p>
              <p>Backend Development</p>
              <p>Cloud Deployment</p>
              <p>AI Engineering</p>
              <p>System Design</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section experience" id="experience">
          <p className="section-label">05 — EXPERIENCE</p>

          <div className="experience-row">
            <div>
              <p className="experience-date">2026 — PRESENT</p>
            </div>

            <div>
              <h3>BSc (Hons) Artificial Intelligence</h3>

              <p>The British College · Kathmandu</p>

              <p>
                Developing a foundation across artificial intelligence,
                software development, algorithms, databases and applied
                computing.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <p className="section-label">06 — CONTACT</p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            I'm open to internships, graduate opportunities, collaborations
            and interesting technology projects.
          </p>

          <a className="contact-link" href="mailto:your@email.com">
            your@email.com →
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Aayushma Dhakal</p>
        <p>AI · Software · Technology</p>
      </footer>
    </div>
  );
}

export default App;