import { HeaderContent } from '../components/blocksPage/headerContent/headerContent';
import { ImageContent } from '../components/blocksPage/imageContent/imageContent';
import { AboutContent } from '../components/blocksPage/aboutContent/aboutContent';

import Link from 'next/link';
import { Buttons } from '../components/UI/buttons/buttons';

import journal from '../public/images/journal.jpg';
import journal1 from '../public/images/journal-1.jpg';
import journal2 from '../public/images/journal-2.jpg';

const Journal = () => {
  return (
    <>
      <ImageContent
        img={journal}
        heading="If you work at a computer all day, now’s the time to take a break."
        subtitle="After the break join our discussions below."
      />

      <AboutContent
        img={journal1}
        layout={true}
        title="What is the Use of HDMI Port in an LED TV?"
        subtitle="It is undoubtedly a blessing in the tech and electronics world that something as simple as an HDMI cable can be nothing less of a revolution. The way different devices can be connected with a high quality A/V signal is just a wonderful implication that makes HDMI cables a high time necessity in the recent times."
      >
        <Link href="/" passHref>
          <Buttons text="Read more" />
        </Link>
      </AboutContent>

      <AboutContent
        img={journal2}
        title="Are third party chargers harmful to Apple devices?"
        subtitle="When it comes to Apple devices, there are quite a lot of myths about how Apple products should only be used and linked to other Apple products. At this point, people steer away from buying any Apple product for fear of having to buy all the related Apple accessories. Yet, the truth is, as long as you make the right choices, you are safe."
      >
        <Link href="/" passHref>
          <Buttons text="Read more" />
        </Link>
      </AboutContent>
    </>
  );
};

export default Journal;
