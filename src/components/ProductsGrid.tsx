
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
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
    },
    {
      name: "Langostinos Jumbo",
      price: 55.00,
      image: "/placeholder.svg",
      fisherman: "Pedro García",
      location: "Piura",
      rating: 4.9,
      available: true,
      category: "Mariscos"
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
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Productos Frescos del Día
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre la mejor selección de pescados y mariscos frescos, 
            directamente de pescadores artesanales verificados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="ocean-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
            Ver Más Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
