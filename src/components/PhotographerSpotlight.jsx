import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

  StarIcon, 
  CameraIcon, 
  MapPinIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/solid'

const PhotographerSpotlight = () => {
  const featuredPhotographers = [
    {
      id: 1,
      name: 'João Silva',
      location: 'Rio de Janeiro, RJ',
      specialties: ['Futebol', 'Eventos Esportivos'],
      rating: 4.9,
      totalPhotos: 1250,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      coverPhoto: '/src/assets/futebol.jpg',
      description: 'Especialista em fotografia esportiva com mais de 10 anos de experiência cobrindo grandes eventos.',
      achievements: ['Fotógrafo Oficial Copa do Mundo 2022', 'Prêmio Melhor Foto Esportiva 2023']
    },
    {
      id: 2,
      name: 'Maria Santos',
      location: 'São Paulo, SP',
      specialties: ['CrossFit', 'Fitness'],
      rating: 4.8,
      totalPhotos: 890,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      coverPhoto: '/src/assets/crossfit.jpg',
      description: 'Apaixonada por capturar a intensidade e determinação dos atletas de CrossFit.',
      achievements: ['Top 10 Fotógrafos de Fitness 2023', '500+ Eventos Cobertos']
    },
    {
      id: 3,
      name: 'Pedro Costa',
      location: 'Belo Horizonte, MG',
      specialties: ['Ciclismo', 'Esportes Radicais'],
      rating: 4.7,
      totalPhotos: 650,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      coverPhoto: '/src/assets/ciclismo.jpg',
      description: 'Especializado em capturar a adrenalina dos esportes radicais e competições de ciclismo.',
      achievements: ['Fotógrafo Oficial Tour do Brasil', 'Especialista em Esportes Radicais']
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fotógrafos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais mais talentosos da nossa plataforma e veja seus trabalhos incríveis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPhotographers.map(photographer => (
            <div key={photographer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Cover Photo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={photographer.coverPhoto}
                  alt={`Trabalho de ${photographer.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Avatar */}
                <div className="absolute bottom-4 left-4 flex items-end space-x-3">
                  <div className="relative">
                    <img
                      src={photographer.avatar}
                      alt={photographer.name}
                      className="w-16 h-16 rounded-full border-4 border-white object-cover"
                    />
                    {photographer.verified && (
                      <CheckBadgeIcon className="absolute -bottom-1 -right-1 w-6 h-6 text-blue-500 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{photographer.name}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {photographer.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating and Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">{photographer.rating}</span>
                    <span className="text-gray-500 text-sm">({photographer.totalPhotos} fotos)</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CameraIcon className="w-4 h-4 mr-1" />
                    {photographer.totalPhotos}
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {photographer.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {photographer.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Conquistas</h4>
                  <ul className="space-y-1">
                    {photographer.achievements.map((achievement, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Ver Portfólio
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Contratar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action para Fotógrafos */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Você é fotógrafo?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Junte-se à maior plataforma de venda de fotos esportivas do Brasil. 
            Ganhe dinheiro com suas fotos e alcance milhares de clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
            >
              Cadastrar como Fotógrafo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 font-semibold"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotographerSpotlight

