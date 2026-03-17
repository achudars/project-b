import PageIllustration from "../partials/PageIllustration";
import FeaturesZigZag from "../partials/TextAndImageContainerRows.tsx";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageIllustration />

      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow pill */}
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-5 py-2 text-sm font-semibold text-purple-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
              </span>
              Curated Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="h1 mb-6 text-gray-100">
            Bikes I{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ABABFF 0%, #5BADFF 55%, #67e8f9 100%)",
              }}
            >
              Love
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-400 font-light md:text-2xl">
            A curated selection of mountain bikes that push the boundaries of
            what&apos;s possible on two wheels.
          </p>
        </div>
      </section>

      {/* Bikes */}
      <main className="grow">
        <FeaturesZigZag />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 px-4">
        <p className="text-center text-sm text-gray-600">
          Crafted with passion for riding
        </p>
      </footer>
    </div>
  );
}

export default Home;
