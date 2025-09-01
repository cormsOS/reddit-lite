import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import { Suspense } from "react";

export default function Header() {
  return (
    <Navbar 
      className="shadow-soft mb-8 bg-white/80 backdrop-blur-md border-b border-custom-border"
      height="72px"
      maxWidth="full"
    >
      <NavbarBrand>
        <Link 
          href="/" 
          className="font-bold text-2xl bg-gradient-orange bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
        >
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-orange rounded-full flex items-center justify-center text-white text-sm font-bold">
              R
            </div>
            redditLite
          </span>
        </Link>
      </NavbarBrand>
      
      <NavbarContent justify="center">
        <NavbarItem className="w-full max-w-lg">
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
