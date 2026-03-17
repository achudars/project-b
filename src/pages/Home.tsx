import PageIllustration from "../partials/PageIllustration";
import FeaturesZigZag from "../partials/TextAndImageContainerRows.tsx";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gray-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:outline-none" style={{ color: 'deeppink' }}
      >
        Skip to main content
      </a>

      <PageIllustration />

      {/* Hero */}
      <section aria-label="Introduction" className="relative pt-24 pb-16 px-4 sm:px-6 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Heading */}
          <h1 className="h1 mb-6 text-gray-100">
            Bikes I{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, deeppink 0%, #ff6eb4 60%, #ffb3d1 100%)",
              }}
            >
              Like
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
      <main id="main-content" className="grow">
        <FeaturesZigZag />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-8 px-4">
        <p className="text-center text-sm text-gray-400">
          Crafted with passion for riding
        </p>
      </footer>
    </div>
  );
}

export default Home;
