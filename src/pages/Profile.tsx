
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Edit3, 
  Package, 
  Clock, 
  CheckCircle,
  XCircle,
  Star,
  Fish
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const recentOrders = [
    {
      id: "PED-001",
      date: "2024-01-15",
      total: 87.50,
      status: "Entregado",
      items: ["Lenguado Fresco (2kg)", "Corvina Premium (1.5kg)"]
    },
    {
      id: "PED-002", 
      date: "2024-01-18",
      total: 45.00,
      status: "En Camino",
      items: ["Conchas Negras (1kg)"]
    },
    {
      id: "PED-003",
      date: "2024-01-20",
      total: 55.00,
      status: "Preparando",
      items: ["Langostinos Jumbo (1kg)"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregado": return "bg-green-500";
      case "En Camino": return "bg-blue-500";
      case "Preparando": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Entregado": return <CheckCircle className="w-4 h-4" />;
      case "En Camino": return <Package className="w-4 h-4" />;
      case "Preparando": return <Clock className="w-4 h-4" />;
      default: return <XCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground text-lg">
            Gestiona tu información personal y revisa tus pedidos.
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full lg:w-[400px] grid-cols-2">
            <TabsTrigger value="profile">Información Personal</TabsTrigger>
            <TabsTrigger value="orders">Mis Pedidos</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <div className="mx-auto w-20 h-20 ocean-gradient rounded-full flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle>Juan Pérez</CardTitle>
                  <p className="text-muted-foreground">Cliente desde Enero 2024</p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-muted-foreground">(12 reseñas)</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <Badge className="ocean-gradient text-white">Cliente Premium</Badge>
                  </div>
                  <div className="text-sm text-center space-y-1">
                    <p className="font-medium">15 pedidos realizados</p>
                    <p className="text-muted-foreground">Último pedido: hace 2 días</p>
                  </div>
                </CardContent>
              </Card>

              {/* Information Form */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Información Personal</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    {isEditing ? "Cancelar" : "Editar"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombres</Label>
                      <Input 
                        id="firstName" 
                        value="Juan Carlos" 
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellidos</Label>
                      <Input 
                        id="lastName" 
                        value="Pérez González" 
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        id="email" 
                        value="juan.perez@email.com" 
                        className="pl-10"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        id="phone" 
                        value="+51 999 123 456" 
                        className="pl-10"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        id="address" 
                        value="Av. Los Pescadores 123, Miraflores, Lima" 
                        className="pl-10"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-3">
                      <Button className="ocean-gradient hover:opacity-90">
                        Guardar Cambios
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancelar
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Fish className="w-5 h-5" />
                  <span>Historial de Pedidos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <Card key={order.id} className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="outline" className="font-mono">
                              {order.id}
                            </Badge>
                            <Badge className={`${getStatusColor(order.status)} text-white flex items-center space-x-1`}>
                              {getStatusIcon(order.status)}
                              <span>{order.status}</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Fecha: {new Date(order.date).toLocaleDateString('es-PE')}
                          </p>
                          <div className="space-y-1">
                            {order.items.map((item, index) => (
                              <p key={index} className="text-sm">{item}</p>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-ocean-blue">
                            S/. {order.total.toFixed(2)}
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
