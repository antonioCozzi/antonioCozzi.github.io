import { useEffect, useState } from 'react';
import './App.scss';
import Contacts from './components/contacts/contacts';
import Education from './components/edcucation/education';
import Header from './components/header';
import Homepage from './components/homepage/homepage';
import Languages from './components/languages/languages';
import Section from './components/section/section';
import Skills from './components/skills/skills';
import WorkExperience from './components/work-experience/work-experience';

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  })

  return (
    <>
      <div className='fixed-background'></div>
      <div id='header' className={scroll ? 'shadow' : ''}>
        <Header />
      </div>
      <div
        className='app'
      >
        <section>
          <Homepage />
        </section>
        <section>
          <Section isStarEmpty title={'Proffile'}>
            <p><span className='highlight'>Mobile</span> & <span className='highlight'>web developer</span>. I like to experiment and try all out in <span className='highlight'>digital com&zwnj;munications</span>. I love learning new technologies. I worked as a <span className='highlight'>videomaker</span>, <span className='highlight'>video animator</span> and <span className='highlight'>UI designer</span>, that al&zwnj;lowed me to gain knowledge with the Adobe suite.</p>
          </Section>
        </section>
        <section>
          <Section isStarEmpty title={'EEducation'}>
            <Education
              startYear={2016}
              endYear={2021}
              title="UTIU Computer Engine&zwnj;ering"
              description="Bachelor’s degre&zwnj;e. Proposed thesis: “Identification with chatbots: a revolution in users’ privacy”"
            />
            <Education
              startYear={2016}
              endYear={2018}
              title="ELIS Col&zwnj;lege"
              description="Postgraduate master in Multimedia Languages & Technologies."
            />
          </Section>
        </section>
        <section>
          <Section isStarEmpty title={'Work Experiencce'}>
            <WorkExperience
              company="Docebo"
              startYear={2021}
              endYear="Now"
              description="Web development. Maintanance of serverles&zwnj;s projects in AWS CDK."
            />
            <WorkExperience
              company="Softlab"
              startYear={2020}
              endYear={2021}
              description="Web development."
            />
            <WorkExperience
              company="Alten"
              startYear={2018}
              endYear={2020}
              description="Mobile & web development. Maintanance of Django BE projects."
            />
          </Section>
        </section>
        <section>
          <Section isStarEmpty title={'Skillss'}>
            <Skills />
          </Section>
        </section>
        <section>
          <Section isStarEmpty title={'Laanguages'}>
            <Languages />
          </Section>
        </section>
        <section>
          <Section isStarEmpty title={'Contactts'}>
            <Contacts />
          </Section>
        </section>
      </div>
    </>
  );
}

export default App;
