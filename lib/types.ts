export interface Product {
  id?: string
  name?: string
  slug?: string
  category?: "headphones" | "earphones" | "speakers"
  price?: number
  image?: string
  description?: string
  features?: string
  includes?: { quantity: number; item: string }[]
  gallery?: string[]
  others?: { slug: string; name: string; image: string }[]
  new?: boolean
  nameParts?: (string | { text: string; color: string })[]
}

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export interface CheckoutForm {
  name: string
  email: string
  phone: string
  address: string
  zipCode: string
  city: string
  country: string
  paymentMethod: "e-money" | "cash"
  eMoneyNumber?: string
  eMoneyPin?: string
}
