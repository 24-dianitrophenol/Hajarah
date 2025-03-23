import { Phone, Mail, MapPin, Apple as WhatsApp } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-pink-500" />
              <a href="tel:+256755504221" className="text-gray-600 hover:text-pink-500">
                +256 755 504221
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <WhatsApp className="h-5 w-5 text-pink-500" />
                  <a
                  href="https://wa.me/256755504221?text=Hello%20Hajarah%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500"
                  >
                  Message on WhatsApp
                  </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-pink-500" />
              <a href="mailto:hajarahmakeup@gmail.com" className="text-gray-600 hover:text-pink-500">
                hajarahmakeup@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-pink-500" />
              <span className="text-gray-600">Kireka, Kampala - Uganda</span>
            </div>
            
          </div>
          
            <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');

              window.location.href = `mailto:hajarahmakeup@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
              name as string
              )}%0AEmail:%20${encodeURIComponent(
              email as string
              )}%0AMessage:%20${encodeURIComponent(message as string)}`;

              e.currentTarget.reset(); // Reset the form after submission
            }}
            >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
              </label>
              <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
              </label>
              <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
              </label>
              <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Send Message
            </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;