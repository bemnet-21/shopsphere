import Footer from './Footer'
import Header from './Header'
import { LayoutProps } from '@/interface'
import SideBar from './SideBar'

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
  return (
    <div className='flex flex-col  bg-darkBlue'>
        <Header />
        <div className='relative overflow-y-auto scrollbar-hide'>
          <div className='flex'>
            <SideBar />
            <main className='flex-1'>{children}</main>
          </div>
        <Footer />
        </div>
    </div>
  )
}

export default Layout