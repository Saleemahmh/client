import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  const footerLinks = [
    {
      title: "Plan Your Trip",
      links: [
        { label: "Flight Bookings", href: "/pagenotfound" },
        { label: "Local Transportation", href: "/pagenotfound" },
        { label: "Itinerary Planner", href: "/pagenotfound" },
        { label: "Travel Tips", href: "/pagenotfound" },
      ],
    },
    {
      title: "Customer Support",
      links: [
        { label: "Contact Us", href: "/pagenotfound" },
        { label: "FAQs", href: "/pagenotfound" },
        { label: "Terms & Conditions", href: "/pagenotfound" },
        { label: "Privacy Policy", href: "/pagenotfound" },
      ],
    },
    {
      title: "Connect With Us",
      links: [
        { label: "Facebook", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} 
  transition={{ duration: 0.8, delay: 0.2 }} 
      className="bg-amber-950 backdrop-blur-lg border-t border-white/20 text-amber-200 font-amarante "
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-2">
        <img className="md:size-25 size-18" src={logo} alt="logo"/>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-amber-700 hover:text-amber-600 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t border-white/10">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
