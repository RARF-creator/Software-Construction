export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-24 md:px-24 flex flex-col justify-center relative overflow-hidden border-t border-border">
      {}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm mb-4 md:mb-0">© 2026 NOMAD Smart Car Portal. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-white/40 hover:text-white transition-colors cursor-pointer text-sm font-medium">Privacy Policy</span>
            <span className="text-white/40 hover:text-white transition-colors cursor-pointer text-sm font-medium">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
