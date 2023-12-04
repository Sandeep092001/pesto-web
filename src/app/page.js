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
    <section>
      <About />
      <Advantages />
    </section>
    <section>
      <FeaturedProducts />
    </section>
    </main>
  )
}