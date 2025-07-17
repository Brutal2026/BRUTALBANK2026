import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { XMarkIcon } from '@heroicons/react/24/outline'

const FilterSidebar = ({ 
  selectedState, 
  setSelectedState, 
  selectedPhotographer, 
  setSelectedPhotographer 
}) => {
  const states = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ]

  const photographers = [
    'João Silva',
    'Maria Santos', 
    'Pedro Costa',
    'Ana Lima',
    'Carlos Oliveira',
    'Lucia Ferreira',
    'Roberto Alves',
    'Fernanda Souza'
  ]

  const priceRanges = [
    { label: 'Até R$ 20', value: '0-20' },
    { label: 'R$ 20 - R$ 50', value: '20-50' },
    { label: 'R$ 50 - R$ 100', value: '50-100' },
    { label: 'Acima de R$ 100', value: '100+' }
  ]

  const clearFilters = () => {
    setSelectedState('all')
    setSelectedPhotographer('all')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-4 w-4 mr-1" />
          Limpar
        </Button>
      </div>

      <div className="space-y-6">
        {/* Filtro por Estado */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estado
          </label>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os estados</SelectItem>
              {states.map(state => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Filtro por Fotógrafo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fotógrafo
          </label>
          <Select value={selectedPhotographer} onValueChange={setSelectedPhotographer}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um fotógrafo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os fotógrafos</SelectItem>
              {photographers.map(photographer => (
                <SelectItem key={photographer} value={photographer}>
                  {photographer}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Filtro por Faixa de Preço */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Faixa de Preço
          </label>
          <div className="space-y-2">
            {priceRanges.map(range => (
              <label key={range.value} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  value={range.value}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtros Ativos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filtros Ativos
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedState !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Estado: {selectedState}
                <button
                  onClick={() => setSelectedState('all')}
                  className="ml-1 hover:text-red-500"
                >
                  <XMarkIcon className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedPhotographer !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedPhotographer}
                <button
                  onClick={() => setSelectedPhotographer('all')}
                  className="ml-1 hover:text-red-500"
                >
                  <XMarkIcon className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="pt-4 border-t">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Estatísticas</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div>Total de fotos: 1,234</div>
            <div>Fotógrafos ativos: 156</div>
            <div>Estados cobertos: 27</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar

