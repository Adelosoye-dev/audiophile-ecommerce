"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Modal } from "@/components/ui/modal"
import { useCart } from "@/contexts/cart-context"
import type { CheckoutForm } from "@/lib/types"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  })

  const shipping = 50
  const vat = Math.round(total * 0.2)
  const grandTotal = total + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsOrderComplete(true)
  }

  const handleOrderComplete = () => {
    clearCart()
    setIsOrderComplete(false)
    router.push("/")
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Button onClick={() => router.push("/")}>Continue Shopping</Button>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8">
          Go Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8">
              <h1 className="text-2xl font-bold uppercase mb-8">Checkout</h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Billing Details */}
                <div>
                  <h2 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">Billing Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div>
                  <h2 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">Shipping Info</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Your Address</Label>
                      <Input
                        id="address"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={form.zipCode}
                        onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h2 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">Payment Details</h2>
                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <RadioGroup
                      value={form.paymentMethod}
                      onValueChange={(value: "e-money" | "cash") => setForm({ ...form, paymentMethod: value })}
                    >
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="e-money" id="e-money" />
                        <Label htmlFor="e-money">e-Money</Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash">Cash on Delivery</Label>
                      </div>
                    </RadioGroup>

                    {form.paymentMethod === "e-money" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="eMoneyNumber">e-Money Number</Label>
                          <Input
                            id="eMoneyNumber"
                            value={form.eMoneyNumber}
                            onChange={(e) => setForm({ ...form, eMoneyNumber: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="eMoneyPin">e-Money PIN</Label>
                          <Input
                            id="eMoneyPin"
                            value={form.eMoneyPin}
                            onChange={(e) => setForm({ ...form, eMoneyPin: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-lg font-bold uppercase mb-6">Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
                    </div>
                    <span className="text-gray-500">x{item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span>TOTAL</span>
                  <span className="font-bold">$ {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>SHIPPING</span>
                  <span className="font-bold">$ {shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (INCLUDED)</span>
                  <span className="font-bold">$ {vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg border-t pt-2">
                  <span>GRAND TOTAL</span>
                  <span className="font-bold text-orange-500">$ {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <Button onClick={handleSubmit} className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                CONTINUE & PAY
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <Modal isOpen={isOrderComplete} onClose={() => {}} className="max-w-lg">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase mb-4">
              Thank you
              <br />
              for your order
            </h2>
            <p className="text-gray-600">You will receive an email confirmation shortly.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              {items.slice(0, 1).map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
                  </div>
                  <span className="text-gray-500">x{item.quantity}</span>
                </div>
              ))}
              {items.length > 1 && (
                <p className="text-gray-500 text-sm border-t pt-2">and {items.length - 1} other item(s)</p>
              )}
            </div>

            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">GRAND TOTAL</span>
                <span className="font-bold">$ {grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Button onClick={handleOrderComplete} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            BACK TO HOME
          </Button>
        </div>
      </Modal>
    </div>
  )
}
