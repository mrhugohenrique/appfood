import { SearchIcon } from "lucide-react";

import Header from "@/components/header";
import RestaurantItem from "@/components/restaurant-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";

export default async function Home() {
  const restaurants = await db.restaurant.findMany({
    include: {
      menuCategories: true
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <div className="px-5 py-8 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Descubra a Excelência em Delivery
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Conectamos você aos melhores restaurantes da sua região, oferecendo uma experiência gastronômica excepcional
          </p>
        </div>

        {/* Seção de Busca */}
        <div className="flex flex-col gap-4 mb-12 bg-white p-4 md:p-6 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-3">
            <Input 
              placeholder="Buscar por nome do restaurante ou cidade..."
              className="flex-1 h-10 md:h-12 text-base md:text-lg"
            />
            <Button variant="default" className="h-10 md:h-12 px-4 md:px-6 text-base md:text-lg w-full md:w-auto">
              <SearchIcon className="w-5 h-5 mr-2" />
              Buscar
            </Button>
          </div>
          
          {/* Filtros por categoria com scroll suave */}
          <div className="flex gap-3 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {Array.from(new Set(restaurants.flatMap(r => r.menuCategories.map(c => c.name)))).map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                className="whitespace-nowrap hover:bg-primary hover:text-white transition-colors text-sm px-6"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de Restaurantes com Grid Responsivo */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Restaurantes em Destaque</h2>
            <Button variant="link" className="text-primary font-semibold">
              Ver todos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {restaurants.map((restaurant) => (
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
                className="min-w-full transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 border-t border-gray-100 bg-white py-8">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-sm text-gray-600">
            Desenvolvido com ❤️ por Hugo Henrique | 
            <a 
              href="https://github.com/mrhugohenrique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-primary hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
