import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const FAQs = () => {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is PrimeMart?",
          answer: "PrimeMart is Nigeria's premier multi-vendor marketplace where customers can discover and purchase products from verified vendors across the country. We connect buyers with trusted sellers to provide a seamless shopping experience."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is easy! Click the 'Sign Up' button in the top right corner, fill in your details, and verify your email address. You'll be able to start shopping immediately after verification."
        },
        {
          question: "Is PrimeMart available nationwide?",
          answer: "Yes! PrimeMart operates across Nigeria. We have vendors and delivery services in major cities including Lagos, Abuja, Port Harcourt, Kano, Ibadan, and many more locations."
        }
      ]
    },
    {
      title: "Orders & Shipping",
      faqs: [
        {
          question: "How can I track my order?",
          answer: "After placing an order, you'll receive a tracking number via email and SMS. You can also track your order by logging into your account and visiting the 'My Orders' section."
        },
        {
          question: "What are the delivery options?",
          answer: "We offer standard delivery (3-7 business days) and express delivery (1-3 business days) depending on your location. Delivery fees vary based on the delivery option and your location."
        },
        {
          question: "Can I change or cancel my order?",
          answer: "You can modify or cancel your order within 1 hour of placing it, provided it hasn't been processed by the vendor. Contact our customer service team for assistance."
        }
      ]
    },
    {
      title: "Payments & Wallet",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major payment methods including bank transfers, card payments (Visa, Mastercard), Paystack, Flutterwave, and wallet payments. You can also top up your PrimeMart wallet for quick checkout."
        },
        {
          question: "How does the wallet system work?",
          answer: "The PrimeMart wallet allows you to store money securely for quick purchases. You can top up your wallet using bank transfer or card payment, and use it to pay for orders instantly."
        },
        {
          question: "Are my payment details secure?",
          answer: "Absolutely! We use industry-standard encryption and work with certified payment processors like Paystack and Flutterwave to ensure your payment information is completely secure."
        }
      ]
    },
    {
      title: "Vendors & Selling",
      faqs: [
        {
          question: "How do I become a vendor on PrimeMart?",
          answer: "To become a vendor, click 'Become a Vendor' on our homepage, complete the registration form, and submit required documents for verification. Our team will review your application within 3-5 business days."
        },
        {
          question: "What are the commission rates?",
          answer: "Our commission rates vary by product category, typically ranging from 3-10%. You'll see the exact commission rate for your category during the vendor registration process."
        },
        {
          question: "How do I get paid as a vendor?",
          answer: "Vendor payments are processed weekly. Once a customer confirms receipt of their order, the payment (minus commission) is transferred to your registered bank account within 7 business days."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 14-day return policy for most products. Items must be in original condition with tags attached. Electronics and personal care items may have different return policies."
        },
        {
          question: "How do I return an item?",
          answer: "To return an item, go to 'My Orders', select the item you want to return, and follow the return process. We'll arrange pickup and process your refund once we receive the item."
        },
        {
          question: "How long do refunds take?",
          answer: "Refunds are processed within 5-7 business days after we receive the returned item. The refund will be credited to your original payment method or PrimeMart wallet."
        }
      ]
    }
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
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions about PrimeMart
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search FAQs..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-3 space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Track My Order
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Return Policy
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Become a Vendor
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Payment Methods
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Delivery Information
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Still Need Help?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Our support team is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-sm text-muted-foreground">+234 800 PRIME (77463)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">support@primemart.ng</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Have a specific question? Send us a message and we'll get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full">Send Message</Button>
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

export default FAQs;