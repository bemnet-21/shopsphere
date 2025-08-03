import Footer from './Footer'
import Header from './Header'
import { LayoutProps } from '@/interface'

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout