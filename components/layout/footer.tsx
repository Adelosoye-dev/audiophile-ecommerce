import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              audiophile
            </Link>
            <p className="text-gray-400 mb-6">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
              specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
              facility - we're open 7 days a week.
            </p>
            <p className="text-gray-400">Copyright 2021. All Rights Reserved</p>
          </div>
        <div>
          <div>
            <nav className="flex gap-8">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                HOME
              </Link>
              <Link href="/headphones" className="hover:text-orange-500 transition-colors">
                HEADPHONES
              </Link>
              <Link href="/speakers" className="hover:text-orange-500 transition-colors">
                SPEAKERS
              </Link>
              <Link href="/earphones" className="hover:text-orange-500 transition-colors">
                EARPHONES
              </Link>
            </nav>
          </div>

          <div className="flex space-x-4 md:justify-end">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
