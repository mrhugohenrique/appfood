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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Descubra os melhores restaurantes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre seu próximo restaurante favorito e faça seu pedido com apenas alguns cliques
          </p>
        </div>

        {/* Seção de Busca */}
        <div className="flex flex-col gap-4 mb-12 bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex gap-3">
            <Input 
              placeholder="Buscar por nome do restaurante ou cidade..."
              className="flex-1 h-12 text-lg"
            />
            <Button variant="default" className="h-12 px-6 text-lg">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
