import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6 text-center">
      <Logo xl />
      {/* <NavbarTwoColumns logo={}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          {` `}
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns> */}
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            Connect with <span className="text-green-500">Indie Hackers</span> &{' '}
            {`\n`}
            finish your project{` `}
            <span className="text-primary-500">FAST</span>
            🚀
          </>
        }
        description="Use the method of joint accountability to get straight to your goal."
        button={
          <>
            <p className="text-lg mb-6">
              Don&apos;t miss our weekly progress updates!
            </p>
            <Link href="https://www.getrevue.co/profile/anker" passHref>
              <Button xl>👉 Subscribe now!</Button>
            </Link>
            {/* <Subscribe /> */}
            <p className="text-sm text-center mt-3">
              Anker.build is currently in closed alpha. Subscribe to get early
              access
            </p>
          </>
        }
      />
    </Section>
  </Background>
);

export { Hero };
