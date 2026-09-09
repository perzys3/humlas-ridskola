import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-forest py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <Logo variant="light" className="h-10" />
        <p className="text-sm">
          Islandshästar · Ridutbildning · Äventyrsturer · Järvsö
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Humlas Ridskola AB
        </p>
      </div>
    </footer>
  );
}
