import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Wallet, 
  Settings, 
  Lock,
  CreditCard,
  Package,
  Menu,
  Home
} from "lucide-react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { id: "profile", label: "Profile Board", icon: User },
    { id: "orders", label: "My Orders", icon: ShoppingBag },
    { id: "cart", label: "Shopping Cart", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "biography", label: "Biography", icon: User },
    { id: "password", label: "Change Password", icon: Lock },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const walletStats = [
    { title: "Wallet Balance", value: "₦25,000", icon: Wallet },
    { title: "Total Spent", value: "₦156,000", icon: CreditCard },
    { title: "Total Orders", value: "23", icon: ShoppingBag },
    { title: "Wishlist Items", value: "12", icon: Heart },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>john.doe@example.com</CardDescription>
                    <Badge variant="secondary" className="mt-1">Verified User</Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {walletStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <CardDescription className="text-sm">{stat.title}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">Order #PM{order}001</p>
                          <p className="text-sm text-muted-foreground">₦{15000 + order * 5000}</p>
                        </div>
                        <Badge>Delivered</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Wallet Top-up", "Order Payment", "Refund"].map((transaction, index) => (
                      <div key={transaction} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{transaction}</p>
                          <p className="text-sm text-muted-foreground">2 days ago</p>
                        </div>
                        <Badge variant={index === 2 ? "secondary" : "default"}>
                          {index === 2 ? "+ ₦5,000" : "- ₦10,000"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{sidebarItems.find(item => item.id === activeTab)?.label}</CardTitle>
              <CardDescription>This section is under development</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Content for {activeTab} will be implemented here.</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`bg-card border-r transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PM</span>
            </div>
            {sidebarOpen && <span className="font-bold text-lg">PrimeMart</span>}
          </div>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'px-2'}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="h-4 w-4" />
                  {sidebarOpen && <span className="ml-2">{item.label}</span>}
                </Button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-card border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
              <h1 className="text-xl font-semibold">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-1" />
                Back to Shop
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>

        {/* Small Footer */}
        <footer className="bg-muted p-4 text-center text-sm text-muted-foreground border-t">
          <p>&copy; 2024 PrimeMart. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default UserDashboard;