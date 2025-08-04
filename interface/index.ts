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
  images: string[] | string
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

export interface CategoryModalProps {
  isVisible: boolean
  onClose: () => void
}