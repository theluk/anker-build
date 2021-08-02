import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={
        <>
          Set your weekly goals, set weekly deadlines, and{' '}
          <span className="text-green-500">get stuff done</span>. Having someone
          to hold you accountable will help you achieve your goals.
        </>
      }
    />
  </Section>
);

export { Banner };
