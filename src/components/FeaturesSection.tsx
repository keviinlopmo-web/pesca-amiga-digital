
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, Clock, Users, CreditCard, Fish } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Fish,
      title: "Pescado Fresco",
      description: "Productos recién pescados, directo del mar a tu mesa con la máxima frescura."
    },
    {
      icon: Users,
      title: "Pescadores Locales",
      description: "Apoya a pescadores artesanales de tu región y fortalece la economía local."
    },
    {
      icon: Truck,
      title: "Delivery Rápido",
      description: "Entrega el mismo día en horarios convenientes para mantener la frescura."
    },
    {
      icon: CreditCard,
      title: "Pagos Fáciles",
      description: "Paga con Yape, Plin, tarjeta o efectivo. Múltiples opciones para tu comodidad."
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Productos verificados y pescadores certificados para tu tranquilidad."
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Realiza tus pedidos cuando quieras, entregas programadas según disponibilidad."
    }
  ];

  return (
    <section className="py-16 bg-light-wave/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            ¿Por qué elegir PescaAmiga?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Somos la plataforma que conecta a pescadores artesanales con consumidores, 
            garantizando frescura, calidad y apoyo a la pesca local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 ocean-gradient rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
