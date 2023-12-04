import Carousels from './Carousels'
import About from './About/About'
import Advantages from './About/Advantages'
import FeaturedProducts from './Products/FeaturedProducts'

export default function Home() {
  return (
    <main>
    <div>
      <Carousels />
    </div>
    <div>
      <About />
      <Advantages />
    </div>
    <div>
      <FeaturedProducts />
    </div>
    </main>
  )
}