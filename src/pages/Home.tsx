import PageIllustration from "../partials/PageIllustration";
import FeaturesZigZag from "../partials/TextAndImageContainerRows.tsx";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        <FeaturesZigZag />
      </main>
    </div>
  );
}

export default Home;
