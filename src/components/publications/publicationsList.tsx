const publicationsList: React.FC<PublicationsItemList> = ({ publications }) => {
  return (
    <section className="mx-auto max-w-screen-lg px-10 py-3">
      <div className="flex w-full flex-col">
        <h2 className="py-2 text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          Impact
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-gray-200">
        {publications.map((publication) => (
          <div
            className="mb-4 flex flex-col py-4 font-sans"
            key={publication.url}
          >
            <a
              href={publication.url}
              target="_blank"
              className="my-2"
              data-umami-event="Publication link"
              data-umami-event-url={publication.url}
              rel="noopener"
            >
              <p className="text-url text-xl font-semibold">
                {publication.title}
              </p>

              {publication.subtitle && (
                <span className="text-url text-sm font-medium ">
                  {publication.subtitle}
                </span>
              )}
            </a>
            <div className="m2-3 relative rounded bg-gray-100 p-3">
              <p className="font-lato text-xs text-gray-600">Citation</p>
              <p className="font-asap text-base text-black">
                {publication.citation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default publicationsList;
