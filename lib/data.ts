import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "XX99 Mark II Headphones",
    slug: "xx99-mark-ii-headphones",
    category: "headphones",
    price: 2999,
    image: "/images/speaker2.png",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who enjoy long listening sessions. In addition to a robust 20-hour battery, the XX99 Mark II headphones boast a durable aluminum construction, and 50mm drivers to deliver truly exceptional sound.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    others: [
      { slug: "xx99-mark-i-headphones", name: "XX99 Mark I", image: "/placeholder.svg?height=200&width=200" },
      { slug: "xx59-headphones", name: "XX59", image: "/placeholder.svg?height=200&width=200" },
    ],
    new: true,
  },
  {
    id: "2",
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    category: "speakers",
    price: 4500,
    image: "/images/speaker2.png",
    description:
      "Upgrade your sound system with the all new ZX9 active bookshelf speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to 5 wired source connections for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 10m audio cable" },
      { quantity: 1, item: "10m optical cable" },
    ],
    gallery: [
      "/images/speaker2.png",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    others: [
      { slug: "zx7-speaker", name: "ZX7 Speaker", image: "/placeholder.svg?height=200&width=200" },
      { slug: "xx99-mark-i-headphones", name: "XX99 Mark I", image: "/placeholder.svg?height=200&width=200" },
    ],
    new: true,
  },
  {
    id: "3",
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    category: "speakers",
    price: 3500,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 7.5m audio cable" },
      { quantity: 1, item: "7.5m optical cable" },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    others: [
      { slug: "zx9-speaker", name: "ZX9 Speaker", image: "/placeholder.svg?height=200&width=200" },
      { slug: "xx59-headphones", name: "XX59", image: "/placeholder.svg?height=200&width=200" },
    ],
  },
  {
    id: "4",
    name: "YX1 Wireless Earphones",
    slug: "yx1-wireless-earphones",
    category: "earphones",
    price: 599,
    image: "/images/earphone1.png",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort and exceptional noise isolation for truly immersive sound.",
    includes: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size earplugs" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "USB-C charging cable" },
      { quantity: 1, item: "Travel pouch" },
    ],
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    others: [
      { slug: "xx99-mark-ii-headphones", name: "XX99 Mark II", image: "/placeholder.svg?height=200&width=200" },
      { slug: "xx59-headphones", name: "XX59", image: "/placeholder.svg?height=200&width=200" },
    ],
    new: true,
  },
  // {
  //   id: "5",
  //   nameParts: [
  //     "BRINGING YOU THE ",
  //     { text: "BEST", color: "text-orange-500" },
  //     " AUDIO GEAR"
  //   ],
  //   image: "/images/man-with-headset.png",
  //   description:
  //     "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
  // },
]

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category)
}

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug)
}
