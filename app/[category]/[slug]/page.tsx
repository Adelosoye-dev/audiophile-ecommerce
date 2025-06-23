"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/product/category-card"
import { AddToCartModal } from "@/components/product/add-to-cart-modal"
import { getProductBySlug } from "@/lib/data"

interface ProductPageProps {
  params: {
    category: string
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false)
  const product = getProductBySlug(params.slug)

  if (!product || product.category !== params.category) {
    notFound()
  }

  return (
    <div>
      {/* Back Button */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Link href={`/${params.category}`} className="text-gray-600 hover:text-orange-500">
            Go Back
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name || "Product image"}
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="space-y-6">
              {product.new && (
                <p className="text-orange-500 text-sm font-medium tracking-[10px] uppercase">New Product</p>
              )}

              <h1 className="text-3xl lg:text-4xl font-bold uppercase">{product.name}</h1>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              <p className="text-2xl font-bold">
                $ {typeof product.price === "number" ? product.price.toLocaleString() : "N/A"}
              </p>

              <Button
                onClick={() => setIsAddToCartOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase">Features</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{product.features}</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold uppercase">In the Box</h2>
              <ul className="space-y-2">
                {product.includes?.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <span className="text-orange-500 font-bold w-8">{item.quantity}x</span>
                    <span className="text-gray-600">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.gallery?.map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${product.name} gallery ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold uppercase text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.others?.map((item) => (
              <div key={item.slug} className="text-center space-y-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                <Link href={`/${product.category}/${item.slug}`}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">See Product</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard title="Headphones" image="/images/headphone.png" href="/headphones" />
            <CategoryCard title="Speakers" image="/images/speaker.png" href="/speakers" />
            <CategoryCard title="Earphones" image="/images/earphone.png" href="/earphones" />
          </div>
        </div>
      </section>

      <AddToCartModal isOpen={isAddToCartOpen} onClose={() => setIsAddToCartOpen(false)} product={product} />
    </div>
  )
}
