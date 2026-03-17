const PageIllustration = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    {/* Top-right violet orb */}
    <div
      className="absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full opacity-25"
      style={{
        background: "radial-gradient(circle at center, #7c3aed 0%, #4f46e5 40%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
    {/* Bottom-left blue orb */}
    <div
      className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full opacity-20"
      style={{
        background: "radial-gradient(circle at center, #2563eb 0%, #1d4ed8 40%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />
    {/* Centre ambient glow */}
    <div
      className="absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-10"
      style={{
        background: "radial-gradient(ellipse at center, #5BADFF 0%, transparent 60%)",
        filter: "blur(100px)",
      }}
    />
  </div>
);

export default PageIllustration;
