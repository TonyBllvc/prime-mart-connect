import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, MessageCircle, Eye, TrendingUp } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Electronics Trends in Nigeria for 2024",
      excerpt: "Discover the latest electronic gadgets and tech trends that are taking Nigeria by storm this year.",
      author: "TechReviewer",
      date: "Dec 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      views: 1234,
      comments: 45,
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Fashion Forward: Nigerian Designers Making Waves",
      excerpt: "Meet the talented Nigerian fashion designers who are revolutionizing the local fashion scene.",
      author: "FashionGuru",
      date: "Dec 14, 2024",
      category: "Fashion",
      readTime: "7 min read",
      views: 987,
      comments: 32,
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "Small Business Success: How to Start Selling on PrimeMart",
      excerpt: "A comprehensive guide for entrepreneurs looking to become vendors on our platform.",
      author: "BusinessExpert",
      date: "Dec 13, 2024",
      category: "Business",
      readTime: "10 min read",
      views: 2156,
      comments: 78,
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "Home Decor Ideas That Won't Break the Bank",
      excerpt: "Transform your living space with these affordable home decoration tips and tricks.",
      author: "HomeDesigner",
      date: "Dec 12, 2024",
      category: "Home & Living",
      readTime: "6 min read",
      views: 1567,
      comments: 29,
      image: "/placeholder.svg",
      featured: false
    },
  ];

  const categories = [
    { name: "Technology", count: 45 },
    { name: "Fashion", count: 32 },
    { name: "Business", count: 28 },
    { name: "Home & Living", count: 21 },
    { name: "Health & Wellness", count: 19 },
    { name: "Food & Lifestyle", count: 15 },
  ];

  const trendingTopics = [
    "Online Shopping Tips",
    "Nigerian Entrepreneurs",
    "Sustainable Fashion",
    "Tech Reviews",
    "Small Business Growth",
    "Digital Marketing"
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
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">PrimeMart Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, tips, and stories from Nigeria's marketplace community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button>Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Regular Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg mb-2 line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <Separator className="mb-4" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Read More</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <Button variant="ghost" className="p-0 h-auto justify-start">
                        {category.name}
                      </Button>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-muted">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest stories and insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 mt-16">
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

export default Blog;