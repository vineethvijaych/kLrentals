import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Phone, MapPin, Clock, CheckCircle2, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-pressure-washing.jpg";
import productImage from "@/assets/pressure-washer-product.jpg";
import areaImage from "@/assets/kasaragod-area.jpg";

const Index = () => {
  const handleBookNow = () => {
    window.open("https://wa.me/919526673206?text=Hi, I'd like to rent a pressure washer", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919526673206";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Area - Replace with your actual logo */}
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center font-bold text-2xl text-background">
                KL
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">KL Rentals</h1>
                <p className="text-xs text-muted-foreground">Equipment Rentals in Kasaragod</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#machines" className="text-foreground hover:text-primary transition-colors font-medium">Equipment</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors font-medium">Service Area</a>
              <Button onClick={handleBookNow} size="sm">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 mt-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block bg-secondary/20 backdrop-blur-sm text-background px-4 py-2 rounded-full mb-4 font-semibold">
              Professional Equipment Rentals
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
              Rent Equipment in Kasaragod — Starting with Pressure Washers
            </h1>
            <p className="text-xl md:text-2xl text-background/95 mb-4 font-medium">
              24*7 delivery, hassle-free service
            </p>
            <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl">
              From pressure washers to garden tools and drilling machines — we bring professional equipment right to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleBookNow}
                className="animate-scale-in"
              >
                <Phone className="mr-2" />
                Book Now on WhatsApp
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                onClick={handleCall}
                className="animate-scale-in"
              >
                <Phone className="mr-2" />
                Call Us
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-background/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">24-Hour Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span className="font-medium">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Quality Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light-gradient scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About KL Rentals
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              KL Rentals is your trusted local partner for all kinds of equipment rentals in Kasaragod. We are a Kerala-based startup making professional tools and machinery accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>Currently available:</strong> Pressure washers for all your cleaning needs. <strong>Coming soon:</strong> Grass cutting machines, tree cutting tools, drilling equipment, and other essential household and garden machinery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Local & Trusted</h3>
                  <p className="text-muted-foreground">Serving Kasaragod with reliable, friendly service</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">24-hour delivery to your doorstep</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
                  <p className="text-muted-foreground">Well-maintained, professional-grade machines</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Available Machines Section */}
      <section id="machines" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Available Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade machinery for cleaning, gardening, and maintenance
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative pt-10 mt-10 mb-10 pe-10 ps-10 ms-5 me-5 pb-10 h-64 md:h-auto">
                  <img 
                    src={productImage} 
                    alt="High-pressure washer machine available for rent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    High-Pressure Washer
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our professional-grade pressure washers are perfect for cleaning house exteriors, driveways, vehicles, and more. Easy to use and highly effective.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>High-pressure cleaning for tough stains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Safe for all surfaces - walls, driveways, vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>24-hour rental period with flexible pickup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Complete instructions and safety guidelines included</span>
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" onClick={handleBookNow}>
                      Book Now
                    </Button>
                    <Button size="lg" variant="outline" onClick={handleCall}>
                      Get Pricing
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            <Card className="mt-8 bg-primary-light border-2 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Coming Soon
                </h4>
                <p className="text-muted-foreground mb-4">
                  We're expanding our equipment range to serve you better:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Grass Cutting Machines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Tree Cutting Tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Drilling Machines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">Garden Equipment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Area Section */}
      <section id="delivery" className="py-20 bg-light-gradient scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Service Area
              </h2>
              <p className="text-lg text-muted-foreground">
                Fast delivery across Kasaragod and nearby areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Service Coverage</h3>
                        <p className="text-muted-foreground">
                          We provide 24-hour delivery and pickup services across Kasaragod district.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-secondary-light rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-medium">Kasaragod Town</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-secondary-light rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-medium">Kanhangad</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-secondary-light rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-medium">Nearby Villages</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-6 italic">
                      Not sure if we deliver to your area? Contact us to confirm!
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 md:order-2">
                <img 
                  src={areaImage} 
                  alt="Kasaragod district coastal area with palm trees"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-background/95 mb-8 max-w-2xl mx-auto">
              Book your pressure washer today and experience professional cleaning made easy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="hero-outline" 
                size="xl"
                onClick={handleBookNow}
              >
                <Phone className="mr-2" />
                WhatsApp: +91 95266 73206
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                onClick={handleCall}
              >
                <Phone className="mr-2" />
                Call: +91 95266 73206
              </Button>
            </div>

            <Card className="max-w-2xl mx-auto border-2 bg-background/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Sunday</span>
                    <span className="text-muted-foreground">24 hrs</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      Open all 7 days a week • 24-hour advance booking recommended for guaranteed availability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center font-bold text-lg text-foreground">
                    KL
                  </div>
                  <h3 className="text-2xl font-bold">KL Rentals</h3>
                </div>
                <p className="text-background/80">
                  All kinds of equipment rentals in Kasaragod — from pressure washers to garden tools and drilling machines.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-background/80">
                  <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                  <li><a href="#machines" className="hover:text-secondary transition-colors">Available Equipment</a></li>
                  <li><a href="#delivery" className="hover:text-secondary transition-colors">Service Area</a></li>
                  <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-3 text-background/80">
                  <li className="flex items-start gap-2">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Kasaragod, Kerala</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-background/20 pt-6 text-center text-background/70">
              <p>&copy; 2025 KL Rentals. All rights reserved. | Serving Kasaragod & Nearby Areas</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
