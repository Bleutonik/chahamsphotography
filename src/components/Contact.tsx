import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.png';
const Contact = () => {
  return <section id="contacto" className="py-20 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
              Contáctanos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hagamos Magia Juntos
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-10 leading-relaxed">
              Estoy listo para capturar tus momentos más especiales. Contáctame hoy y convirtamos tu visión en realidad.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Ubicaciones</h4>
                  <p className="font-body text-muted-foreground">Puerto Rico & Estados Unidos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:info@chahamsphotography.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    info@chahamsphotography.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Teléfono</h4>
                  <a className="font-body text-muted-foreground hover:text-primary transition-colors" href="tel:+1 (787)-363-0620">
                    +1 (787)-363-0620
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-lg p-8 md:p-10 shadow-elegant">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                    Nombre
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block font-body text-sm text-foreground mb-2">
                  Servicio de Interés
                </label>
                <select id="service" className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                  <option value="">Selecciona un servicio</option>
                  <option value="wedding">Fotografía de Bodas</option>
                  <option value="quince">Quinceañeras</option>
                  <option value="portrait">Retratos</option>
                  <option value="family">Familias</option>
                  <option value="video">Videografía</option>
                  <option value="event">Eventos</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                  Mensaje
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Cuéntanos sobre tu evento o sesión..." />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;