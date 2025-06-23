"use client"

import { useState } from "react"
import Image from "next/image"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/types"

interface AddToCartModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}

export function AddToCartModal({ isOpen, onClose, product }: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })
    onClose()
    setQuantity(1)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-sm">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h3 className="font-bold text-sm">{product.name}</h3>
            <p className="text-gray-500">$ {product.price.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 bg-gray-100 rounded">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10 p-0"
            >
              -
            </Button>
            <span className="font-medium w-10 text-center">{quantity}</span>
            <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10 p-0">
              +
            </Button>
          </div>

          <Button onClick={handleAddToCart} className="bg-orange-500 hover:bg-orange-600 text-white px-6">
            ADD TO CART
          </Button>
        </div>
      </div>
    </Modal>
  )
}
