import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "₦45,000",
      originalPrice: "₦55,000",
      image: "/placeholder.svg",
      rating: 4.5,
      vendor: "TechStore Nigeria"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "₦35,000",
      originalPrice: "₦42,000",
      image: "/placeholder.svg",
      rating: 4.8,
      vendor: "FitLife Store"
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: "₦25,000",
      originalPrice: "₦30,000",
      image: "/placeholder.svg",
      rating: 4.3,
      vendor: "Fashion Hub"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">PrimeMart</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              Shop All
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              Categories
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              Blog
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              About
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to PrimeMart</h2>
          <p className="text-xl mb-8">Nigeria's Premier Multi-Vendor Marketplace</p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            Start Shopping
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-2">
                  by {product.vendor}
                </CardDescription>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="text-sm">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Health"].map((category) => (
              <Card key={category} className="text-center p-6 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Badge variant="secondary" className="text-xs">
                      {category.slice(0, 2)}
                    </Badge>
                  </div>
                  <h4 className="font-semibold">{category}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">PrimeMart</h3>
          <p className="text-sm text-muted-foreground">
            Nigeria's Premier Multi-Vendor Marketplace
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Button variant="link" className="text-background hover:text-background/80">
              About Us
            </Button>
            <Button variant="link" className="text-background hover:text-background/80">
              FAQs
            </Button>
            <Button variant="link" className="text-background hover:text-background/80">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;