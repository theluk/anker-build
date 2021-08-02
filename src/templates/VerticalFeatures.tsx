import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section yPadding="py-8" title="How can ⚓ Anker help?">
      {/* <p className="mt-8 text-2xl text-center p-6 bg-gray-100 rounded-xl">
        set your weekly goals, set weekly deadlines, and get stuff done. Having
        someone to hold you accountable will help you achieve your goals.
      </p> */}
      <div className="mt-4 text-xl md:px-20 text-center">
        <p>
          Joint accountability is an amazing method to get motivated. It&apos;s
          based on the simple idea that if two people have a set of similar
          goals and want to improve at the same time, they&apos;ll work harder
          to achieve them.
        </p>

        <ul className="text-left flex flex-col md:flex-row flex-wrap mt-16 space-y-6 md:space-y-0">
          <li className="w-full md:w-1/3 text-left md:border-r border-gray-300 pr-6">
            <h3 className="text-3xl font-extrabold text-center text-green-500">
              1.
            </h3>
            <span className="text-2xl font-bold block my-3 text-center">
              Prepare
            </span>
            <p className="mb-3">
              Describe your project and methods you apply along the way.
            </p>
            <ul className="list-decimal list-inside text-left">
              <li>Project timeline</li>
              <li>Method (e.g Agile)</li>
              <li>Weekly / Daily updates</li>
            </ul>
          </li>
          <li className="w-full md:w-1/3 text-left md:border-r border-gray-300 pr-6 pl-6">
            <h3 className="text-3xl font-extrabold text-center text-green-500">
              2.
            </h3>
            <span className="text-2xl font-bold block my-3 text-center">
              Connect
            </span>
            <p className="mb-3">
              Find a buddy who has a similar project setup.
            </p>
            <p>
              Both of you commit to define goals and meet in daily or weekly
              review sessions.
            </p>
          </li>
          <li className="w-full md:w-1/3 text-left pr-6 pl-6">
            <h3 className="text-3xl font-extrabold text-center text-green-500">
              3.
            </h3>
            <span className="text-2xl font-bold block my-3 text-center">
              Commit & Repeat
            </span>
            <p>
              Meet with your buddy, set your goals together, share your progress
              and finish each sprint in time. Repeat!
            </p>
          </li>
        </ul>
      </div>
    </Section>
  </>
);

/*     
    <ul className="flex flex-col md:flex-row flex-wrap">
      <li className="w-full md:w-1/3 text-center">
        <h3 className="text-3xl font-extrabold text-green-500">1.</h3>
        <span className="text-2xl font-bold block my-3">Describe</span>
        <p>Describe </p>
      </li>
      <li className="w-full md:w-1/3">hi</li>
      <li className="w-full md:w-1/3">hi</li>
    </ul>
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */

export { VerticalFeatures };
