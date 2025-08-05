
import { Button } from "@/components/ui/button";
import { Search, Fish, Waves } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 ocean-gradient opacity-10"></div>
      <div className="absolute inset-0">
        <Waves className="absolute top-10 left-10 w-20 h-20 text-sea-green/20 animate-pulse" />
        <Fish className="absolute top-20 right-20 w-16 h-16 text-ocean-blue/20 wave-animation" />
        <Waves className="absolute bottom-20 left-1/4 w-24 h-24 text-sea-green/10 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-deep-blue">
            Conectamos el
            <span className="block ocean-gradient bg-clip-text text-transparent">
              Mar con tu Mesa
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pescado fresco directamente de pescadores artesanales a tu hogar. 
            Apoya a la pesca local y disfruta de productos del mar de calidad.
          </p>
          
          <div className="max-w-lg mx-auto flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Busca pescado, mariscos..." 
                className="pl-10"
              />
            </div>
            <Button className="ocean-gradient hover:opacity-90 px-6">
              Buscar
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="ocean-gradient hover:opacity-90">
              Ver Productos
            </Button>
            <Button variant="outline" size="lg">
              Registrarse como Pescador
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
