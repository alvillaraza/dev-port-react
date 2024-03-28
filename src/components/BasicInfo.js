import Contact from './Contact';
import TechStack from './TechStack';

export default function BasicInfo() {
  return (
    <section className='basic-info-container'>
    <div className='resume-basic-info'>
      <Contact />
      <TechStack />
      </div>
      </section>
  );
}
