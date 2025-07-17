import { Button } from '@/components/ui/button'
import futebolImg from '../assets/futebol.jpg'
import crossfitImg from '../assets/crossfit.jpg'
import ciclismoImg from '../assets/ciclismo.jpg'
import beachTennisImg from '../assets/beach-tennis.jpg'
import corridaImg from '../assets/corrida.jpg'
import natacaoImg from '../assets/natacao.jpg'
import voleiImg from '../assets/volei.jpg'
import basqueteImg from '../assets/basquete.jpg'
import surfImg from '../assets/surf.jpg'
import jiuJitsuImg from '../assets/jiu-jitsu.jpg'

const categories = [
  { name: 'Futebol', image: futebolImg, color: 'bg-red-500' },
  { name: 'Crossfit', image: crossfitImg, color: 'bg-blue-500' },
  { name: 'Ciclismo', image: ciclismoImg, color: 'bg-orange-500' },
  { name: 'Beach Tennis', image: beachTennisImg, color: 'bg-green-500' },
  { name: 'Futsal', image: futebolImg, color: 'bg-teal-500' },
  { name: 'Corrida', image: corridaImg, color: 'bg-blue-600' },
  { name: 'Natação', image: natacaoImg, color: 'bg-cyan-500' },
  { name: 'Vôlei', image: voleiImg, color: 'bg-purple-500' },
  { name: 'Futevôlei', image: voleiImg, color: 'bg-teal-600' },
  { name: 'Eventos', image: futebolImg, color: 'bg-pink-500' },
  { name: 'Basquete', image: basqueteImg, color: 'bg-blue-700' },
  { name: 'Artes Marciais', image: jiuJitsuImg, color: 'bg-red-600' },
  { name: 'Surf', image: surfImg, color: 'bg-yellow-500' },
  { name: 'Motociclismo', image: ciclismoImg, color: 'bg-red-700' },
  { name: 'Formaturas', image: futebolImg, color: 'bg-yellow-600' },
  { name: 'Jiu-jítsu', image: jiuJitsuImg, color: 'bg-red-800' }
]

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Categorias</h2>
          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
            Ver tudo
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white font-semibold text-sm md:text-base text-center px-2">
                  {category.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid

