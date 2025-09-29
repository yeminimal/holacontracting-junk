import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Linkedin', icon: Linkedin, href: '#' },
];

const menuLinks = [
  { name: 'About', href: '#about-us' },
  { name: 'Services', href: '#services' },
];

const serviceLinks = [
  { name: 'Junk Removal', href: '#services' },
  { name: 'Post-Construction Cleaning', href: '#services' },
  { name: 'Demolition', href: '#services' },
  { name: 'Remodeling', href: '#services' },
  { name: 'Pallet Removal & Sales', href: '#services' },
];

const contactInfo = [
  { text: 'holacontractors@gmail.com', href: 'mailto:holacontractors@gmail.com' },
  { text: '7805048160', href: 'tel:+17805048160' },
  { text: 'Edmonton, Alberta, Canada', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground font-body">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h3 className="font-heading text-3xl text-primary-foreground">
              Hola Contracting Inc.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              Ready to clear out the mess, or refresh your space? Contact us today!
            </p>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-primary"
                  aria-label={`Follow on ${link.name}`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                  Menu
                </h4>
                <ul className="mt-4 space-y-3">
                  {menuLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-base text-primary-foreground/90 transition-colors hover:text-accent">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                  Services
                </h4>
                <ul className="mt-4 space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-base text-primary-foreground/90 transition-colors hover:text-accent">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                  Get in Touch
                </h4>
                <div className="mt-4 space-y-3">
                  {contactInfo.map((info) => (
                    <a
                      key={info.text}
                      href={info.href}
                      className="flex items-center justify-between rounded-md bg-white/5 p-3 text-sm transition-colors hover:bg-white/10"
                    >
                      <span className="truncate">{info.text}</span>
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 text-primary-foreground/50" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 border-t border-primary-foreground/10"></div>

        <div className="text-left">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Hola Contracting Inc. • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}