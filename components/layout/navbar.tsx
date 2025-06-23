"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { CartModal } from "@/components/cart/cart-modal";
import { useState } from "react";
import { navigationLinks } from "@/constants/navigation";

export function NavBar() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0E0E0E] text-white fixed top-0 left-0 w-full z-50 shadow-md px-[165px]">
        <div className="flex items-center justify-between container mx-auto  pt-8 pb-9">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>

            <Link href="/" className="text-3xl font-extrabold">
              audiophile
            </Link>

            <nav className="hidden md:flex space-x-[34px] ml-[197px]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="hover:text-[#D87D4A] transition-colors font-bold text-[13px] text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D87D4a] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
        <span className="block h-[1px] border-b border-b-white w-full"></span>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
