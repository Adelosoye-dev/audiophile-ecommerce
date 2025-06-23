import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  reverse?: boolean
  backgroundImage?: string
  showDescription?: boolean
  buttonColor?: string
  titleFontSize?: string
  imageFullWidth?: boolean
  showButton?: boolean // Add this prop
  nameColorClass?: string // Add this prop
}

export function ProductCard({
  product,
  reverse = false,
  backgroundImage,
  showDescription = true,
  buttonColor = "bg-orange-500 hover:bg-orange-600",
  titleFontSize = "text-3xl lg:text-4xl",
  imageFullWidth = false,
  showButton = true, // Default to true
  nameColorClass = "", // Default to no extra color
}: ProductCardProps) {
  // Helper to render name or nameParts
  const renderProductName = () => {
    if (product.nameParts) {
      return product.nameParts.map((part, idx) =>
        typeof part === "string" ? (
          <span key={idx}>{part}</span>
        ) : (
          <span key={idx} className={part.color}>{part.text}</span>
        )
      )
    }
    return product.name
  }

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reverse ? "lg:grid-flow-col-dense" : ""} rounded-xl `}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className={`${reverse ? "lg:col-start-2" : ""} flex justify-center `}>
        {product.image && (
          <div className={imageFullWidth ? "w-full" : "w-full max-w-[350px]"}>
            <Image
              src={product.image}
              alt={product.name ?? "Product image"}
              width={imageFullWidth ? 800 : 350}
              height={imageFullWidth ? 500 : 350}
              className={`rounded-lg object-cover ${imageFullWidth ? "w-full h-auto" : "w-full h-auto"}`}
              quality={90}
              priority
            />
          </div>
        )}
      </div>

      <div className={`space-y-6 ${reverse ? "lg:col-start-1" : ""} p-40`}>
        {/* {product.new && (
          <p className="text-orange-500 text-sm font-medium tracking-[10px] uppercase">
            New Product
          </p>
        )} */}

        <h2 className={`${titleFontSize} font-bold uppercase`}>
          {renderProductName()}
        </h2>

        {showDescription && product.description && (
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>
        )}

        {showButton && (
          <Link href={`/${product.category}/${product.slug}`}>
            <Button className={`${buttonColor} text-white px-8 py-3`}>
              See Product
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
