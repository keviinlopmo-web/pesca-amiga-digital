
import { Fish, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="ocean-gradient rounded-full p-2">
              <Fish className="h-6 w-6 text-white animate-pulse" />
            </div>
            <span className="text-xl font-bold text-deep-blue">pescart</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-ocean-blue transition-colors">
              Productos
            </a>
            <a href="#" className="text-foreground hover:text-ocean-blue transition-colors">
              Pescadores
            </a>
            <a href="#" className="text-foreground hover:text-ocean-blue transition-colors">
              Pedidos
            </a>
            <a href="#" className="text-foreground hover:text-ocean-blue transition-colors">
              Ayuda
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center ocean-gradient text-white">
                  {cartItems}
                </Badge>
              )}
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <a href="#" className="py-2 text-foreground hover:text-ocean-blue transition-colors">
                Productos
              </a>
              <a href="#" className="py-2 text-foreground hover:text-ocean-blue transition-colors">
                Pescadores
              </a>
              <a href="#" className="py-2 text-foreground hover:text-ocean-blue transition-colors">
                Pedidos
              </a>
              <a href="#" className="py-2 text-foreground hover:text-ocean-blue transition-colors">
                Ayuda
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
