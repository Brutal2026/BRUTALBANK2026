import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PhotoCard from '../components/PhotoCard'
import FilterSidebar from '../components/FilterSidebar'
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  const [filteredPhotos, setFilteredPhotos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedState, setSelectedState] = useState('all')
  const [selectedPhotographer, setSelectedPhotographer] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [showFilters, setShowFilters] = useState(false)

  // Mock data - em produção viria do Firebase/Supabase
  const mockPhotos = [
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
    },
    {
      id: 5,
      title: 'Maratona de São Paulo',
      category: 'Corrida',
      photographer: 'Carlos Oliveira',
      state: 'SP',
      price: 28.00,
      image: '/src/assets/corrida.jpg',
      tags: ['corrida', 'maratona', 'sao paulo', 'atletismo'],
      date: '2024-01-11'
    },
    {
      id: 6,
      title: 'Competição de natação',
      category: 'Natação',
      photographer: 'Lucia Ferreira',
      state: 'RS',
      price: 26.00,
      image: '/src/assets/natacao.jpg',
      tags: ['natacao', 'piscina', 'competicao', 'agua'],
      date: '2024-01-10'
    }
  ]

  useEffect(() => {
    setPhotos(mockPhotos)
    setFilteredPhotos(mockPhotos)
  }, [])

  useEffect(() => {
    let filtered = photos

    if (searchTerm) {
      filtered = filtered.filter(photo =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(photo => photo.category === selectedCategory)
    }

    if (selectedState !== 'all') {
      filtered = filtered.filter(photo => photo.state === selectedState)
    }

    if (selectedPhotographer !== 'all') {
      filtered = filtered.filter(photo => photo.photographer === selectedPhotographer)
    }

    // Ordenação
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        // Mock: ordenar por popularidade (em produção seria baseado em views/downloads)
        filtered.sort((a, b) => b.id - a.id)
        break
    }

    setFilteredPhotos(filtered)
  }, [searchTerm, selectedCategory, selectedState, selectedPhotographer, sortBy, photos])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da Galeria */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Galeria de Fotos</h1>
          
          {/* Barra de Pesquisa e Filtros */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Pesquisar fotos, eventos, fotógrafos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <FunnelIcon className="h-4 w-4" />
                Filtros
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais recentes</SelectItem>
                  <SelectItem value="popular">Mais populares</SelectItem>
                  <SelectItem value="price-low">Menor preço</SelectItem>
                  <SelectItem value="price-high">Maior preço</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filtros Rápidos */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              Todas
            </Button>
            {['Futebol', 'Crossfit', 'Ciclismo', 'Beach Tennis', 'Corrida', 'Natação'].map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar de Filtros */}
          {showFilters && (
            <div className="w-64 flex-shrink-0">
              <FilterSidebar
                selectedState={selectedState}
                setSelectedState={setSelectedState}
                selectedPhotographer={selectedPhotographer}
                setSelectedPhotographer={setSelectedPhotographer}
              />
            </div>
          )}

          {/* Grid de Fotos */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-gray-600">
              {filteredPhotos.length} foto{filteredPhotos.length !== 1 ? 's' : ''} encontrada{filteredPhotos.length !== 1 ? 's' : ''}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>

            {filteredPhotos.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-2">Nenhuma foto encontrada</div>
                <div className="text-gray-400">Tente ajustar os filtros ou termos de pesquisa</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

