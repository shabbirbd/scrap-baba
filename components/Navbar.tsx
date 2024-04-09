import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "Search" },
  { src: "/assets/icons/black-heart.svg", alt: "Heart" },
  { src: "/assets/icons/user.svg", alt: "Userz" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={27}
            height={27}
          />
          <p className="nav-logo">
            Scrap<span className="text-primary">Baba</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon, i) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
