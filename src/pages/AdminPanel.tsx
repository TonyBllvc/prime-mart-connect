import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Wallet, 
  Settings, 
  HelpCircle,
  Tags,
  Star,
  Menu
} from "lucide-react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "categories", label: "Categories", icon: Tags },
    { id: "brands", label: "Brands", icon: Star },
    { id: "products", label: "Products Control", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "transactions", label: "Transactions", icon: Wallet },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "users", label: "Users", icon: Users },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    { title: "Total Sales", value: "₦2,450,000", change: "+12.5%", positive: true },
    { title: "Active Vendors", value: "156", change: "+8", positive: true },
    { title: "Total Orders", value: "1,247", change: "+23%", positive: true },
    { title: "Pending Orders", value: "89", change: "-5", positive: false },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardDescription className="text-sm">{stat.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <Badge variant={stat.positive ? "default" : "destructive"} className="mt-1">
                      {stat.change}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            
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
                          <p className="text-sm text-muted-foreground">Customer {order}</p>
                        </div>
                        <Badge>Pending</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Vendors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["TechStore Nigeria", "Fashion Hub", "FitLife Store"].map((vendor, index) => (
                      <div key={vendor} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{vendor}</p>
                          <p className="text-sm text-muted-foreground">{50 - index * 10} products</p>
                        </div>
                        <Badge variant="secondary">Active</Badge>
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
            {sidebarOpen && <span className="font-bold text-lg">PrimeMart Admin</span>}
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
              <Badge variant="secondary">Super Admin</Badge>
              <Button variant="outline" size="sm">
                Profile
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;