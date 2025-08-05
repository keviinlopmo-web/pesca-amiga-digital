
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categories = ["Todos", "Pescado", "Mariscos", "Crustáceos", "Moluscos"];

  const products = [
    {
      name: "Lenguado Fresco",
      price: 25.50,
      image: "/placeholder.svg",
      fisherman: "Carlos Mendoza",
      location: "Chorrillos, Lima",
      rating: 4.8,
      available: true,
      category: "Pescado"
    },
    {
      name: "Corvina Premium",
      price: 32.00,
      image: "/placeholder.svg",
      fisherman: "María Santos",
      location: "Callao",
      rating: 4.9,
      available: true,
      category: "Pescado"
    },
    {
      name: "Conchas Negras",
      price: 45.00,
      image: "/placeholder.svg",
      fisherman: "José Ramirez",
      location: "Tumbes",
      rating: 4.7,
      available: false,
      category: "Moluscos"
    },
    {
      name: "Langostinos Jumbo",
      price: 55.00,
      image: "/placeholder.svg",
      fisherman: "Pedro García",
      location: "Piura",
      rating: 4.9,
      available: true,
      category: "Crustáceos"
    },
    {
      name: "Pulpo Fresco",
      price: 38.50,
      image: "/placeholder.svg",
      fisherman: "Rosa Vega",
      location: "Ica",
      rating: 4.5,
      available: true,
      category: "Mariscos"
    },
    {
      name: "Caballa Fresca",
      price: 18.00,
      image: "/placeholder.svg",
      fisherman: "Ana Torres",
      location: "Ventanilla",
      rating: 4.6,
      available: true,
      category: "Pescado"
    }
  ];

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Catálogo de Productos
          </h1>
          <p className="text-muted-foreground text-lg">
            Encuentra los mejores productos del mar, frescos y de calidad.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Buscar productos..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filtros Avanzados
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCategory === category 
                    ? "ocean-gradient text-white" 
                    : "hover:bg-accent"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No se encontraron productos en esta categoría.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
