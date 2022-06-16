import { HeaderContent } from '../components/blocksPage/headerContent/headerContent';
import { AboutContent } from '../components/blocksPage/aboutContent/aboutContent';
import Image from 'next/image';
import styles from '../styles/about.module.scss';
import block3 from '../public/images/block-3.jpg';
import block4 from '../public/images/block-4.jpg';
import block5 from '../public/images/block-5.jpg';

const AboutPage = () => {
  return (
    <>
      <HeaderContent
        wideTitle={true}
        title="Dongle C is a tech accessories brand bringing high quality solutions that fit your lifestyle."
      >
        <p>
          Our love for a minimal design that considers your lifestyle and
          supports your goals.
        </p>
        <p>No distractions and more productivity.</p>
        <p>Who doesn’t love that?</p>
      </HeaderContent>

      <AboutContent
        img={block3}
        layout={true}
        title="A ZERO WASTE APPROACH."
        subtitle="Nationwide, food and packaging account for almost 45% of landfill materials. So we've decided that enough is enough, and this helps us help you keep waste down at home. "
      />

      <section className={`${styles.extract}`}>
        <Image src={block5} alt="img" />
        <h2>
          Exceptional quality. No distracting logos. Transparent pricing. Easy
          returns. Warranty included.
        </h2>
      </section>

      <AboutContent
        img={block4}
        title="We want the right choice to be as easy as going commando."
        subtitle="You’ll be charged and ready to go at any moment. So you can ‘empty trash’ on those other accessories brands. They mass produce only to leave you on 1%. "
      />
    </>
  );
};

export default AboutPage;
