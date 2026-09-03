import React from "react";
// 1. IMPORT FONT
import { Dancing_Script } from "next/font/google"; 
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  // Tambahan komponen dari Material Tailwind untuk Dropdown
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  XMarkIcon,
  Bars3Icon,
  // Tambahan icon panah bawah
  ChevronDownIcon, 
} from "@heroicons/react/24/solid";

// 2. INISIALISASI FONT
const dancingScript = Dancing_Script({ 
  subsets: ["latin"], 
  weight: ["700"] 
});

// 3. TAMBAHKAN DATA DROPDOWN DI DALAM NAV_MENU
const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "#home",
  },
  {
    name: "About",
    icon: UserIcon,
    // subItems ini yang akan dirender sebagai dropdown
    subItems: [
      { name: "Who I am", href: "#who-i-am" },
      { name: "Experiences", href: "#experiences" },
      { name: "Skills", href: "#skills" },
    ],
  },
  {
    name: "Project",
    icon: BriefcaseIcon,
    href: "#project",
  },
  {
    name: "Contact",
    icon: EnvelopeIcon,
    href: "#contact",
  },
];

interface NavItemProps {
  item: any;
  isMobile?: boolean;
}

// 4. LOGIKA RENDERING MENU STANDAR VS MENU DROPDOWN
function NavItem({ item, isMobile = false }: NavItemProps) {
  const { name, icon: Icon, href, subItems } = item;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // A. Jika item punya subItems (Dropdown) & ditayangkan di Desktop
  if (subItems && !isMobile) {
    return (
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-start">
        <MenuHandler>
          <li className="cursor-pointer">
            <Typography
              variant="paragraph"
              color="gray"
              className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition-colors"
            >
              <Icon className="h-5 w-5" />
              {name}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </Typography>
          </li>
        </MenuHandler>
        <MenuList className="hidden lg:block outline-none border border-gray-100 shadow-lg mt-2">
          {subItems.map((sub: any) => (
            <a href={sub.href} key={sub.name} className="outline-none">
              <MenuItem className="flex items-center gap-2 rounded-lg hover:bg-gray-50">
                <Typography variant="small" className="font-medium text-gray-900">
                  {sub.name}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </MenuList>
      </Menu>
    );
  }

  // B. Jika item punya subItems (Dropdown) & ditayangkan di HP (Mobile)
  if (subItems && isMobile) {
    return (
      <li className="flex flex-col gap-3">
        <Typography
          variant="paragraph"
          color="gray"
          className="flex items-center gap-2 font-medium text-gray-900"
        >
          <Icon className="h-5 w-5" />
          {name}
        </Typography>
        <ul className="ml-7 flex flex-col gap-3 border-l border-gray-200 pl-4">
          {subItems.map((sub: any) => (
            <li key={sub.name}>
              <Typography
                as="a"
                href={sub.href}
                variant="paragraph"
                color="gray"
                className="font-medium text-gray-600 hover:text-blue-500 transition-colors text-sm"
              >
                {sub.name}
              </Typography>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  // C. Jika menu biasa (Bukan Dropdown)
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition-colors"
      >
        <Icon className="h-5 w-5" />
        {name}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Typography 
          as="a" 
          href="#home" 
          color="blue-gray" 
          className={`text-2xl md:text-3xl font-bold ${dancingScript.className}`}
        >
          Yurista Indani
        </Typography>
        
        {/* Menu Desktop (Kirim props isMobile={false}) */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map((item) => (
            <NavItem key={item.name} item={item} isMobile={false} />
          ))}
        </ul>

        {/* Tombol Resume Desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          <a href="/CV-Yurista.pdf" target="_blank" rel="noopener noreferrer">
            <Button color="gray" className="flex items-center gap-2">
              <DocumentTextIcon className="h-5 w-5" />
              Resume
            </Button>
          </a>
        </div>

        {/* Tombol Hamburger Mobile */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Menu Mobile (Kirim props isMobile={true}) */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavItem key={item.name} item={item} isMobile={true} />
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="/CV-Yurista.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button color="gray" fullWidth className="flex items-center justify-center gap-2">
                <DocumentTextIcon className="h-5 w-5" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;