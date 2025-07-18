import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  HeartIcon, 
  ShoppingCartIcon, 
  EyeIcon,
  MapPinIcon,
  CameraIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

const PhotoCard = ({ photo }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e) => {
    e.stopPropagation()
    // Implementar lógica do carrinho
    console.log('Adicionado ao carrinho:', photo.id)
  }

  const handleLike = (e) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleViewPhoto = () => {
    // Implementar navegação para detalhes da foto
    console.log('Ver foto:', photo.id)
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewPhoto}
    >
      
        />
        
        {/* Overlay com ações */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={handleViewPhoto}
              className="bg-white/90 hover:bg-white text-gray-900"
            >
              <EyeIcon className="h-4 w-4 mr-1" />
              Ver
            </Button>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ShoppingCartIcon className="h-4 w-4 mr-1" />
              R$ {photo.price.toFixed(2)}
            </Button>
          </div>
        </div>

        {/* Badge da categoria */}
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-white/90 text-gray-900">
            {photo.category}
          </Badge>
        </div>

        {/* Botão de curtir */}
        <button
          onClick={handleLike}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
        >
          {isLiked ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Informações */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {photo.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <CameraIcon className="h-4 w-4 mr-1" />
          <span>{photo.photographer}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>{photo.state}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {photo.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {photo.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{photo.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Preço e ação */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-blue-600">
            R$ {photo.price.toFixed(2)}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            Comprar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard

