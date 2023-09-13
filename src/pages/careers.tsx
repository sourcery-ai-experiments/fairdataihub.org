import Head from 'next/head';

import LottieAnimation from '@/components/lotties';

import careerLottie from '../assets/lotties/careers.json';

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Careers - Fair Data Innovations Hub</title>
        <meta
          property="og:title"
          content="Careers - Fair Data Innovations Hub"
        />
        <meta
          name="twitter:title"
          content="Careers - Fair Data Innovations Hub"
        />

        <link rel="canonical" href="https://fairdataihub.org/careers" />
        <meta property="og:url" content="https://fairdataihub.org/careers" />
        <meta name="twitter:url" content="https://fairdataihub.org/careers" />

        <meta name="description" content="View careers of fairdataihub.org" />
        <meta
          property="og:description"
          content="View careers of fairdataihub.org"
        />
        <meta
          name="twitter:description"
          content="View careers of fairdataihub.org"
        />

        <meta
          property="og:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
        <meta
          name="twitter:image"
          content="https://fairdataihub.org/thumbnails/index.png"
        />
      </Head>

      <div className="bg-haikeiWavy bg-cover bg-top bg-no-repeat md:bg-right-top 2xl:bg-contain">
        <section className="mb-10 pt-12 sm:pt-16">
          <section className="careers-hero">
            <div className="container mx-auto max-w-screen-lg px-6 py-8">
              <div className="items-center justify-center md:flex">
                <div className="w-full p-2 lg:w-1/2 lg:max-w-lg">
                  <h1 className="w-full text-center text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                    Join our wonderful team!
                  </h1>
                </div>

                <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/2 lg:p-2 xs:hidden">
                  <LottieAnimation
                    animationData={careerLottie}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="py-10">
          <div>
            <h1 className="w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
              Open Positions
            </h1>
          </div>
        </section>

        <section className="bg-gray-50 py-10">
          <div>Internship Opportunities</div>
        </section>
      </div>
    </>
  );
}
