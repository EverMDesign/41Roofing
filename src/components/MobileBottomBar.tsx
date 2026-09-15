export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-black border-t border-white/10 z-50 flex">
      <a
        href="tel:817-266-9433"
        className="flex-1 py-4 text-center font-heading font-bold text-xs tracking-widest uppercase text-brand-white border-r border-white/10"
      >
        CALL
      </a>
      <a
        href="#contact"
        className="flex-1 py-4 text-center font-heading font-bold text-xs tracking-widest uppercase text-brand-black bg-brand-aqua"
      >
        FREE INSPECTION
      </a>
    </div>
  );
}
