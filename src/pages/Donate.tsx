
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, Heart, Users, BookOpen, Stethoscope, Trees } from 'lucide-react';

const Donate = () => {
  const impactItems = [
    {
      amount: '₹100',
      impact: '5 notebooks for underprivileged students',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      amount: '₹500',
      impact: 'Meals for 5 families in need',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      amount: '₹1000',
      impact: 'Basic medical supplies for health camps',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-600'
    },
    {
      amount: '₹2000',
      impact: '10 saplings for environmental projects',
      icon: Trees,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your generous donation helps us create lasting impact in our community through 
              education, health, environment, and leadership development initiatives.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white px-12 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </Button>
          </div>
        </section>

        {/* Impact Visualization */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Your Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how your contribution directly translates to positive change in our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactItems.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} mb-6`}>
                      <item.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-accent-pink">
                      {item.amount}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.impact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  How to Donate
                </h2>
                <p className="text-xl text-gray-300">
                  Choose your preferred donation method for a secure and convenient experience.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* QR Code Payment */}
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-highlight to-button-active mb-6">
                      <QrCode size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">UPI Payment</h3>
                    <p className="text-gray-300 mb-6">
                      Scan the QR code below to make a quick and secure donation using any UPI app.
                    </p>
                    
                    {/* QR Code Placeholder */}
                    <div className="bg-white p-8 rounded-lg inline-block mb-6">
                      <div className="w-48 h-48 bg-gray-900 rounded-lg flex items-center justify-center">
                        <QrCode size={64} className="text-white" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4">
                      UPI ID: rotaract.bmsy@upi
                    </p>
                    
                    <Button 
                      className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-semibold px-8"
                    >
                      Download QR Code
                    </Button>
                  </CardContent>
                </Card>

                {/* Online Payment Gateway */}
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-pink to-purple-highlight mb-6">
                      <Heart size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Online Payment</h3>
                    <p className="text-gray-300 mb-6">
                      Use our secure online payment gateway to donate using cards, net banking, or wallets.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="bg-gradient-to-r from-purple-highlight/10 to-button-active/10 p-4 rounded-lg border border-accent-pink/20">
                        <p className="text-white font-semibold mb-2">Accepted Payment Methods:</p>
                        <p className="text-gray-300 text-sm">
                          Credit Cards, Debit Cards, Net Banking, UPI, Wallets (Paytm, PhonePe, etc.)
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-accent-pink/10 to-maroon-accent/10 p-4 rounded-lg border border-accent-pink/20">
                        <p className="text-white font-semibold mb-2">Secure & Safe:</p>
                        <p className="text-gray-300 text-sm">
                          All transactions are encrypted and processed through Razorpay
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-gradient-to-r from-accent-pink to-button-active hover:from-button-active hover:to-accent-pink text-white font-semibold px-8"
                    >
                      Donate Online
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Transparency & Accountability
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                We believe in complete transparency about how your donations are utilized.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent-pink mb-2">85%</div>
                    <p className="text-white font-semibold mb-2">Direct Impact</p>
                    <p className="text-gray-300 text-sm">
                      Goes directly to projects and beneficiaries
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent-pink mb-2">10%</div>
                    <p className="text-white font-semibold mb-2">Operations</p>
                    <p className="text-gray-300 text-sm">
                      For logistics and operational expenses
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent-pink mb-2">5%</div>
                    <p className="text-white font-semibold mb-2">Technology</p>
                    <p className="text-gray-300 text-sm">
                      For maintaining digital infrastructure
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-12">
                <Button 
                  variant="outline"
                  className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                >
                  View Financial Reports
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Thank You for Your Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Every donation, no matter the size, makes a significant difference in someone's life. 
              Together, we can build a better future for our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Make a Donation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Share Our Mission
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;
