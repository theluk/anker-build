import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';

type ICTABannerProps = {
  title: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-gray-700 text-center pb-16">{props.title}</div>
      <div className="text-center">
        <Link href="https://www.getrevue.co/profile/anker" passHref>
          <Button xl>👉 Subscribe now!</Button>
        </Link>
      </div>
      <p className="text-sm text-center mt-3">
        Anker.build is currently in closed alpha. Subscribe to get early access
      </p>
    </div>
  </div>
);

export { CTABanner };
