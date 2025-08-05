
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, MapPin, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  fisherman: string;
  location: string;
  rating: number;
  available: boolean;
  category: string;
}

const ProductCard = ({ 
  name, 
  price, 
  image, 
  fisherman, 
  location, 
  rating, 
  available, 
  category 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <Badge variant={available ? "default" : "secondary"} className="ocean-gradient text-white">
            {available ? "Disponible" : "Agotado"}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-white/90">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-ocean-blue">
              S/. {price.toFixed(2)}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">{rating}</span>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">Pescador: {fisherman}</p>
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full ocean-gradient hover:opacity-90" 
          disabled={!available}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {available ? "Agregar al carrito" : "No disponible"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
