"use client"

import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { CartItem } from "./cart-item"
import Link from "next/link"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, total, clearCart, itemCount } = useCart()

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">CART ({itemCount})</h2>
          {items.length > 0 && (
            <Button variant="ghost" onClick={clearCart} className="text-gray-500 hover:text-gray-700 underline">
              Remove all
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">TOTAL</span>
                <span className="text-lg font-bold">$ {total.toLocaleString()}</span>
              </div>

              <Link href="/checkout" onClick={onClose}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">CHECKOUT</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}
