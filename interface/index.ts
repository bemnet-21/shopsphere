import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export interface Review {
    rating: number
    comment: string
    date: string
    reviewerEmail: string
    reviewerName: string
}

export interface ProductProps {
  id: number
  title: string
  availabilityStatus: string
  brand: string
  category: string
  description: string
  discountPercentage: number
  images: string[]
  minimumOrderQuantity: number
  price: number
  rating: number
  returnPolicy: string
  reviews: Review[]
  shippingInformation: string
  stock: number
  thumbnail: string
  warrantyInformation: string
}
export type ProductCardProps = Pick<ProductProps, 'id' | 'title' | 'category' | 'price' | 'stock' | 'rating' | 'thumbnail' >
export type ProductDetailProps = Pick<ProductProps, 'id' | 'title' | 'brand' | 'description' | 'discountPercentage' | 'images' | 'price' | 'stock' | 'warrantyInformation' | 'shippingInformation' | 'returnPolicy' | 'rating' | 'reviews' | 'thumbnail'>

export interface ModalProps {
  isVisible: boolean
  onClose: () => void
}

export interface CartCardProps {
  thumbnail: string
  title: string
  price: number
  id: number
}

export interface BuyModalProps {
  isVisible: boolean
  onClose: () => void
  id?: number
  src?: string
}