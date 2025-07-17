import { Button } from '@/components/ui/button'
import PhotoCard from './PhotoCard'

const FeaturedPhotos = () => {
  // Mock data para fotos em destaque
  const featuredPhotos = [
    {
      id: 1,
      title: 'Gol decisivo no Maracanã',
      category: 'Futebol',
      photographer: 'João Silva',
      state: 'RJ',
      price: 25.00,
      image: '/src/assets/futebol.jpg',
      tags: ['futebol', 'gol', 'maracana', 'brasil'],
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Treino intenso de CrossFit',
      category: 'Crossfit',
      photographer: 'Maria Santos',
      state: 'SP',
      price: 20.00,
      image: '/src/assets/crossfit.jpg',
      tags: ['crossfit', 'treino', 'fitness', 'academia'],
      date: '2024-01-14'
    },
    {
      id: 3,
      title: 'Competição de ciclismo',
      category: 'Ciclismo',
      photographer: 'Pedro Costa',
      state: 'MG',
      price: 30.00,
      image: '/src/assets/ciclismo.jpg',
      tags: ['ciclismo', 'competicao', 'bicicleta', 'esporte'],
      date: '2024-01-13'
    },
    {
      id: 4,
      title: 'Beach Tennis na praia',
      category: 'Beach Tennis',
      photographer: 'Ana Lima',
      state: 'RJ',
      price: 22.00,
      image: '/src/assets/beach-tennis.jpg',
      tags: ['beach tennis', 'praia', 'areia', 'esporte'],
      date: '2024-01-12'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Fotos em Destaque
            </h2>
            <p className="text-gray-600">
              As melhores fotos selecionadas pelos nossos editores
            </p>
          </div>
          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
            Ver todas
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPhotos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou suas fotos?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Use nossa tecnologia de reconhecimento facial para encontrar suas fotos automaticamente. 
              Basta fazer o upload de uma selfie e deixar nossa IA fazer o trabalho!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                Buscar por Reconhecimento Facial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                Contatar Fotógrafo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPhotos

