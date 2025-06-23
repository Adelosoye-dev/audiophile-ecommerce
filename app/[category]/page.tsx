import { notFound } from "next/navigation"
import { ProductCard } from "@/components/product/product-card"
import { CategoryCard } from "@/components/product/category-card"
import { getProductsByCategory } from "@/lib/data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const validCategories = ["headphones", "speakers", "earphones"]

  // Await params in case it's a Promise
  const category = params.category

  if (!validCategories.includes(category)) {
    notFound()
  }

  const products = getProductsByCategory(category)

  return (
    <div>
      {/* Header */}
      <section className="bg-black text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-wider">{category}</h1>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-32">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} reverse={index % 2 === 1} />
          ))}
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
    </div>
  )
}
