export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-stone-light tracking-wider">
          Aastha Sharma
        </p>
        <p className="text-[11px] text-stone-light/60 font-sans tracking-widest uppercase">
          © {year} · New Delhi, India
        </p>
        <div className="flex gap-5">
          {[
            { label: "About", href: "#about" },
            { label: "Publications", href: "#publications" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] tracking-[0.2em] text-stone-light/60 hover:text-gold uppercase font-sans transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
