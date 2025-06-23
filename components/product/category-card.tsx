import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group">
      <div className="relative bg-gray-100 rounded-lg pt-20 pb-6 px-4 text-center hover:bg-gray-200 transition-colors">
        {/* Image overlaps the card and has a shadow */}
        <div className="absolute left-1/2 -top-16 transform -translate-x-1/2">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={120}
            height={120}
            className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            priority
          />
        </div>

        {/* Spacer for 36px between image and title */}
        <div className="h-[36px]" />

        <h3 className="text-base font-bold uppercase mb-2">{title}</h3>

        <div className="flex items-center justify-center text-gray-600 group-hover:text-orange-500 transition-colors">
          <span className="text-xs font-bold tracking-widest mr-2">SHOP</span>
          <ChevronRight className="h-4 w-4 text-[#D87D4A]" />
        </div>
      </div>
    </Link>
  );
}
