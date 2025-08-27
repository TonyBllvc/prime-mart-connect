import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, List, Search, Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Categories = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popular");

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "₦45,000",
      originalPrice: "₦55,000",
      image: "/placeholder.svg",
      rating: 4.5,
      vendor: "TechStore Nigeria",
      category: "Electronics",
      discount: "18%"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "₦35,000",
      originalPrice: "₦42,000",
      image: "/placeholder.svg",
      rating: 4.8,
      vendor: "FitLife Store",
      category: "Electronics",
      discount: "17%"
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: "₦25,000",
      originalPrice: "₦30,000",
      image: "/placeholder.svg",
      rating: 4.3,
      vendor: "Fashion Hub",
      category: "Fashion",
      discount: "17%"
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "₦28,000",
      originalPrice: "₦35,000",
      image: "/placeholder.svg",
      rating: 4.6,
      vendor: "AudioMax",
      category: "Electronics",
      discount: "20%"
    },
    {
      id: 5,
      name: "Running Shoes",
      price: "₦32,000",
      originalPrice: "₦40,000",
      image: "/placeholder.svg",
      rating: 4.4,
      vendor: "SportZone",
      category: "Sports",
      discount: "20%"
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: "₦55,000",
      originalPrice: "₦65,000",
      image: "/placeholder.svg",
      rating: 4.7,
      vendor: "HomeEssentials",
      category: "Home & Garden",
      discount: "15%"
    },
  ];

  const categories = [
    "All Categories",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Health & Beauty"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">PrimeMart</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              Home
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

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
          <p className="text-muted-foreground">Discover amazing products from verified vendors</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
          </div>
          
          <div className="flex gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>

            <div className="flex border rounded-lg">
              <Button 
                variant={viewMode === "grid" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === "list" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Categories */}
          <div className="w-64 hidden lg:block">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="w-full justify-start"
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Min" />
                    <Input placeholder="Max" />
                  </div>
                  <Button className="w-full" size="sm">Apply</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {products.map((product) => (
                <Card key={product.id} className={`hover:shadow-lg transition-shadow ${viewMode === "list" ? "flex-row" : ""}`}>
                  {viewMode === "grid" ? (
                    <>
                      <CardHeader className="p-0">
                        <div className="relative">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                            {product.discount} OFF
                          </Badge>
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
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </>
                  ) : (
                    <CardContent className="p-4 flex gap-4 w-full">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{product.name}</h3>
                          <Button size="sm" variant="ghost">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">by {product.vendor}</p>
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
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">PrimeMart</h3>
          <p className="text-sm text-muted-foreground">
            Nigeria's Premier Multi-Vendor Marketplace
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Categories;