import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/product/category-card"
import { ProductCard } from "@/components/product/product-card"
import { products } from "@/lib/data"

export default function HomePage() {
  const featuredProducts = products.slice(0, 5)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4 py-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pt-[145px] pl-4 lg:pb-[158px]">
              <p className="text-white text-sm font-normal tracking-[10px] uppercase mb-6">New Product</p>
              <h1 className="text-4xl lg:text-[56px] mb-6 font-bold uppercase leading-tight">
                XX99 Mark II
                <br />
                Headphones
              </h1>
              <p className="text-white text-[15px] font-medium leading-relaxed mb-10">
                Experience natural, lifelike audio and exceptional<br/> build quality made for the passionate music<br/>
                enthusiast.
              </p>
              <Link href="/headphones/xx99-mark-ii-headphones">
                <Button className="bg-[#D87D4A] hover:bg-orange-600 text-white px-8 py-3 text-sm font-bold tracking-wider text-[13px] rounded-none">
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
            <div className="flex justify-center pt-[100px]">
              <Image
                src="/images/headset-hero.png"
                alt="XX99 Mark II Headphones"
                width={600}
                height={600}
                className="max-w-full h-auto object-cover"
              />
            </div>
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

      {/* Featured Products */}
      <section className="py-20 font-sans"> 
        <div className="container mx-auto px-4 space-y-32">
         
          <ProductCard
            product={featuredProducts[1]}
            backgroundImage="/images/orange-bg.png"
            reverse={false}
            showDescription={true}
            buttonColor="bg-black text-white hover:bg-gray-800"
            titleFontSize="text-4xl lg:text-5xl text-white"
          />

         
          <ProductCard
            product={{ ...featuredProducts[1], image: "" }} 
            backgroundImage="/images/radio-bg.png"
            reverse={true}
            showDescription={false}
            buttonColor="bg-white !text-black hover:bg-gray-100 !border !border-black"
            titleFontSize="text-2xl lg:text-3xl"
          />

          
          <ProductCard
            product={featuredProducts[3]}
            reverse={false}
            showDescription={false}
            buttonColor="bg-white !text-black hover:bg-gray-100 !border !border-black"
            titleFontSize="text-xl lg:text-2xl"
            imageFullWidth={true}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase">
                Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
                available for you to browse and experience a wide range of our products. Stop by our store to meet some
                of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </p>
            </div>
            <div>
              <Image
                src="/images/man-with-headset.png"
                alt="Best audio gear"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
        {/* <ProductCard
            product={featuredProducts[4]}
            reverse={true}
            showDescription={true}
            buttonColor="bg-white !text-black hover:bg-gray-100 !border !border-black"
            titleFontSize="text-xl lg:text-2xl"
            imageFullWidth={true}
            showButton={false}
            nameColorClass="text-black [&>span]:text-orange-500" // Example: use <span> in product.name for two colors
          /> */}
      </section>
    </div>
  )
}
