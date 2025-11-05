import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Phone, MapPin, Clock, CheckCircle2, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-pressure-washing.jpg";
import productImage from "@/assets/pressure-washer-product.jpg";
import areaImage from "@/assets/kasaragod-area.jpg";

const Index = () => {
  const track = (event: string, params: Record<string, any> = {}) => {
    (window as any).gtag?.("event", event, params);
  };

  const handleBookNow = () => {
    const msg = "Hi, I'd like to rent equipment";
    const url = `https://wa.me/919526673206?text=${encodeURIComponent(msg)}`;
    track("whatsapp_click", { location: "hero_primary" });
    window.open(url, "_blank", "noopener");
  };

  const handleCall = () => {
    track("call_click", { location: "hero_secondary" });
    window.location.href = "tel:+919526673206";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-[2px] border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Area - Replace with your actual logo */}
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-bold text-2xl text-white backdrop-blur-sm">
                KL
              </div>
              <div>
                <h1 className="text-xl font-bold text-white drop-shadow">KL Rentals</h1>
                <p className="text-xs text-white/80">Equipment Rentals in Kasaragod</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-white hover:text-[#99B8FF] transition-colors font-medium">About</a>
              <a href="#machines" className="text-white hover:text-[#99B8FF] transition-colors font-medium">Equipment</a>
              <a href="#delivery" className="text-white hover:text-[#99B8FF] transition-colors font-medium">Service Area</a>
              <Button
                onClick={handleBookNow}
                size="sm"
                className="bg-[#0056D2] hover:bg-[#0043A5] text-white shadow-sm"
              >
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
            {/* Tagline */}
            <div
              className="inline-block backdrop-blur-sm text-background px-4 py-2 rounded-full mb-4 font-semibold"
              style={{ backgroundColor: "#00B67A" }}
            >
              Professional Equipment Rentals
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
              Rent Quality Equipment — Fast, Reliable, Hassle-Free.
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-background/95 mb-4 font-medium">
              24/7 Delivery • Easy Booking • Trusted Service
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl">
              From pressure washers to garden tools and drilling machines — KL Rentals delivers professional-grade equipment for homes, businesses, and everything in between.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="hero"
                size="xl"
                onClick={handleBookNow}
                className="animate-scale-in bg-[#00B67A] hover:bg-[#009963] text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <Phone className="mr-2" />
                Book Now on WhatsApp
              </Button>

              <Button
                variant="hero-outline"
                size="xl"
                onClick={handleCall}
                className="animate-scale-in border-2 hover:bg-[#00B67A] hover:border-[#00B67A] hover:text-white hover:shadow-md hover:scale-105 transition-transform duration-200"
              >
                <Phone className="mr-2" />
                Call Us
              </Button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 text-background/90">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">24/7 Service</span>
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

          {/* SEO paragraph (visible, subtle) */}
          <p className="text-sm md:text-base text-white/85 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            KL Rentals is Kasaragod’s trusted local equipment rental service. We provide high-performance pressure washers, garden machines, and drilling tools with same-day delivery and reliable support.
          </p>
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
              KL Rentals is a professional equipment rental platform providing high-quality tools and machines for residential, commercial, and industrial use.
              Our mission is to make reliable, professional-grade equipment easily accessible to everyone.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you need cleaning tools, garden machinery, or power equipment — we deliver trusted solutions that help you get the job done efficiently and safely.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#00B67A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#00B67A]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reliable & Trusted</h3>
                  <p className="text-muted-foreground">Trusted by households and professionals for quality service and dependable equipment.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#00B67A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-[#00B67A]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">Quick doorstep delivery with flexible rental durations to match your needs.</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#00B67A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#00B67A]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
                  <p className="text-muted-foreground">All machines are maintained and tested for safety, performance, and reliability.</p>
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
            {/* Pressure Washer Card */}
            <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative pt-10 mt-10  pe-10 ps-10 ms-5 me-5 pb-10 h-64 md:h-auto">
                  <img
                    src={productImage}
                    alt="High-pressure washer available for rent"
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    High-Pressure Washer
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professional-grade washer ideal for cleaning vehicles, driveways, patios, and building exteriors.
                    Powerful, efficient, and easy to operate — delivering spotless results every time.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0056D2] mt-0.5 flex-shrink-0" />
                      <span><strong>Max Pressure:</strong> up to 240 bar for deep cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0056D2] mt-0.5 flex-shrink-0" />
                      <span><strong>Water Flow:</strong> up to 12 L/min for steady high output</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0056D2] mt-0.5 flex-shrink-0" />
                      <span><strong>Motor Power:</strong> 2800W induction motor for reliable performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0056D2] mt-0.5 flex-shrink-0" />
                      <span><strong>Hose Length:</strong> 8-meter reinforced high-pressure hose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0056D2] mt-0.5 flex-shrink-0" />
                      <span><strong>Spray Gun:</strong> ergonomic design with quick-connect adjustable nozzles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0056D2] mt-0.5 flex-shrink-0" />
                      <span><strong>Safety Features:</strong> auto-stop and thermal protection system</span>
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      onClick={handleBookNow}
                      className="bg-[#0056D2] hover:bg-[#0043A5] text-white"
                    >
                      Book Now
                    </Button>
                    {/* Outline button kept commented as per your last version */}
                    {/* <Button
                      size="lg"
                      variant="outline"
                      onClick={handleCall}
                      className="border-2 border-[#0056D2] text-[#0056D2] hover:bg-[#0056D2] hover:text-white"
                    >
                      Get Pricing
                    </Button> */}
                  </div>

                  {/* <p className="text-xs text-muted-foreground mt-4">
                    Specifications are approximate and may vary slightly by unit. Usage and safety instructions provided with every rental.
                  </p> */}
                </CardContent>
              </div>
            </Card>

            {/* Coming Soon Section */}
            <Card className="mt-8 bg-primary-light border-2 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Expanding Our Range
                </h4>
                <p className="text-muted-foreground mb-4">
                  More categories are being added soon to meet all your home, garden, and maintenance needs:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0056D2] flex-shrink-0" />
                    <span className="text-sm">Grass Cutting Machines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0056D2] flex-shrink-0" />
                    <span className="text-sm">Tree Cutting Tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0056D2] flex-shrink-0" />
                    <span className="text-sm">Drilling Machines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0056D2] flex-shrink-0" />
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
                Fast, reliable equipment delivery across Kasaragod district
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Card className="border-2 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="w-6 h-6 text-[#0056D2] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Coverage in Kasaragod</h3>
                        <p className="text-muted-foreground">
                          We currently provide 24-hour delivery and pickup across Kasaragod district.
                          From coastal areas to town centers, we ensure fast and reliable service.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-[#0056D2]/10 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#0056D2] flex-shrink-0" />
                        <span className="font-medium">Kasaragod Town</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-[#0056D2]/10 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#0056D2] flex-shrink-0" />
                        <span className="font-medium">Kanhangad</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-[#0056D2]/10 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#0056D2] flex-shrink-0" />
                        <span className="font-medium">Nearby Villages & Localities</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-6 italic">
                      Not sure if we deliver to your area? Send us a WhatsApp message to confirm instantly.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src={areaImage}
                  alt="Kasaragod district service coverage map"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Ready to Rent?
            </h2>
            <p className="text-xl text-background/95 mb-8 max-w-2xl mx-auto">
              Serving all of Kasaragod district with 24-hour delivery and easy booking.
              Contact us today to get your equipment delivered right to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="hero-outline"
                size="xl"
                onClick={handleBookNow}
                className="border-2 border-white/70 text-white hover:bg-white hover:text-foreground"
              >
                <Phone className="mr-2" />
                WhatsApp: +91 95266 73206
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={handleCall}
                className="border-2 border-white/70 text-white hover:bg-white hover:text-foreground"
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
                    <span className="font-medium">Monday – Sunday</span>
                    <span className="text-muted-foreground">24 hrs</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      Open all 7 days • 24-hour advance booking recommended for guaranteed availability
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
                  Reliable equipment rentals across Kasaragod district. From cleaning tools to garden and power equipment — fast, affordable, and professional.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-background/80">
                  <li><a href="#about" className="hover:text-[#99B8FF] transition-colors">About Us</a></li>
                  <li><a href="#machines" className="hover:text-[#99B8FF] transition-colors">Available Equipment</a></li>
                  <li><a href="#delivery" className="hover:text-[#99B8FF] transition-colors">Service Area</a></li>
                  <li><a href="#contact" className="hover:text-[#99B8FF] transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-3 text-background/80">
                  <li className="flex items-start gap-2">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>+91 95266 73206</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Kasaragod, Kerala</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-background/20 pt-6 text-center text-background/70">
              <p>&copy; {new Date().getFullYear()} KL Rentals. All rights reserved. | Serving Kasaragod District</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
