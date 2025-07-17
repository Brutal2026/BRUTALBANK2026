import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         <div className="flex items-center space-x-3">
            className="h-10 w-10 rounded-lg object-cover"
            />
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
              BRUTAL BANK IMAGEM
            </h1>
          </div>

          {/* Barra de Pesquisa - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Pesquise suas fotos..."
                className="pl-10 pr-4 py-2 w-full"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Serviços
            </Button>
            <Button variant="ghost" className="text-gray-700">
              Entrar
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Criar conta
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <UserIcon className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Barra de Pesquisa Mobile */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Pesquise suas fotos..."
              className="pl-10 pr-4 py-2 w-full"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden border-t pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Button variant="ghost" className="justify-start text-gray-700">
                Serviços
              </Button>
              <Button variant="ghost" className="justify-start text-gray-700">
                Entrar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Criar conta
              </Button>
              <div className="flex items-center space-x-4 pt-2">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

