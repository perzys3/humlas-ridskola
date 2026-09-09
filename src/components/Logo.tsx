import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export default function Logo({
  variant = "light",
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Humlas Ridskola"
      width={160}
      height={120}
      priority={priority}
      className={`h-12 w-auto ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
