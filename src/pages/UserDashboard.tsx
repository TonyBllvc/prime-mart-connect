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

      case "orders":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Orders</h2>
              <Button variant="outline">Filter Orders</Button>
            </div>
            {[1, 2, 3, 4].map((order) => (
              <Card key={order}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">Order #PM{order}00{order}</h3>
                      <p className="text-sm text-muted-foreground">Placed on Dec {order + 10}, 2024</p>
                    </div>
                    <Badge variant={order % 2 === 0 ? "default" : "secondary"}>
                      {order % 2 === 0 ? "Delivered" : "Processing"}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <img src="/placeholder.svg" alt="Product" className="w-16 h-16 rounded-lg" />
                      <div className="flex-1">
                        <p className="font-medium">Premium Wireless Headphones</p>
                        <p className="text-sm text-muted-foreground">Qty: 1</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₦{45000 + order * 5000}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">Track Order</Button>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "cart":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <Button variant="outline">Clear Cart</Button>
            </div>
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img src="/placeholder.svg" alt="Product" className="w-20 h-20 rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Smart Fitness Watch {item}</h3>
                      <p className="text-sm text-muted-foreground">by FitLife Store</p>
                      <p className="text-lg font-bold text-primary">₦{35000 + item * 3000}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">-</Button>
                      <span className="px-3 py-1 bg-muted rounded">{item}</span>
                      <Button size="sm" variant="outline">+</Button>
                    </div>
                    <Button size="sm" variant="destructive">Remove</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₦113,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>₦2,000</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>₦115,000</span>
                  </div>
                </div>
                <Button className="w-full mt-4" size="lg">Proceed to Checkout</Button>
              </CardContent>
            </Card>
          </div>
        );

      case "wishlist":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Wishlist</h2>
              <Button variant="outline">Clear Wishlist</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <img src="/placeholder.svg" alt="Product" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-semibold mb-2">Designer Backpack {item}</h3>
                    <p className="text-sm text-muted-foreground mb-2">by Fashion Hub</p>
                    <p className="text-lg font-bold text-primary mb-4">₦{25000 + item * 2000}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Add to Cart</Button>
                      <Button size="sm" variant="outline">Remove</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "wallet":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Wallet Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-4">₦25,000.00</div>
                <div className="flex gap-4">
                  <Button>Top Up Wallet</Button>
                  <Button variant="outline">Withdraw Funds</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Wallet Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "Credit", amount: "+₦10,000", desc: "Wallet Top-up", date: "Dec 15, 2024" },
                    { type: "Debit", amount: "-₦45,000", desc: "Order Payment #PM1001", date: "Dec 14, 2024" },
                    { type: "Credit", amount: "+₦5,000", desc: "Refund #PM1000", date: "Dec 13, 2024" },
                    { type: "Credit", amount: "+₦20,000", desc: "Wallet Top-up", date: "Dec 12, 2024" },
                  ].map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.desc}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                      <Badge variant={transaction.type === "Credit" ? "default" : "secondary"}>
                        {transaction.amount}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "transactions":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Transaction History</h2>
              <Button variant="outline">Export</Button>
            </div>
            {[
              { id: "TXN001", type: "Order Payment", amount: "₦45,000", status: "Completed", date: "Dec 15, 2024" },
              { id: "TXN002", type: "Wallet Top-up", amount: "₦20,000", status: "Completed", date: "Dec 14, 2024" },
              { id: "TXN003", type: "Refund", amount: "₦5,000", status: "Processed", date: "Dec 13, 2024" },
              { id: "TXN004", type: "Order Payment", amount: "₦35,000", status: "Completed", date: "Dec 12, 2024" },
            ].map((transaction) => (
              <Card key={transaction.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{transaction.type}</h3>
                      <p className="text-sm text-muted-foreground">Transaction ID: {transaction.id}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{transaction.amount}</p>
                      <Badge variant="default">{transaction.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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