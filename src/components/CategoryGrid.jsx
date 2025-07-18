import { Button } from '@/components/ui/button'



const categories = [

  
  

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

