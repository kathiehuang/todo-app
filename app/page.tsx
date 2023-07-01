import Image from 'next/image'
import Layout from './index/layout';
import HomePage from './components/home';
import Footer from './components/footer';

export default function Home() {
  return (
      <Layout>
        <div className="relative px-6 lg:px-8">
          <div className="absolute inset-0 bg-emerald-50" style={{ mixBlendMode: "multiply", opacity: "1", zIndex: "-1" }} />
          <HomePage />
          <Footer />
        </div>
      </Layout>
  )
}
