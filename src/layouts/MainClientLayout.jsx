import Header from '@/common/components/Header'
import Footer from '@/common/components/Footer'
export default function MainClientLayout({ children, isFixedHeader }) {
  return (
    <div>
      <Header isFixedHeader={isFixedHeader}></Header>
      {children}
      <Footer />
    </div>
  )
}
