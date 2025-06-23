"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import type { CartItem as CartItemType } from "@/lib/types"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity } = useCart()

  return (
    <div className="flex items-center space-x-4">
      <Image src={item.image || "/placeholder.svg"} alt={item.name} width={60} height={60} className="rounded-lg" />

      <div className="flex-1">
        <h3 className="font-medium text-sm">{item.name}</h3>
        <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
      </div>

      <div className="flex items-center space-x-2 bg-gray-100 rounded">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="h-8 w-8 p-0"
        >
          -
        </Button>
        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="h-8 w-8 p-0"
        >
          +
        </Button>
      </div>
    </div>
  )
}
