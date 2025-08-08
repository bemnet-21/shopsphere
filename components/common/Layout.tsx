import Footer from './Footer'
import Header from './Header'
import { LayoutProps } from '@/interface'
import SideBar from './SideBar'

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
  return (
    <div className="flex flex-col  bg-darkBlue">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 overflow-y-auto scrollbar-hidden p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>

  )
}

export default Layout