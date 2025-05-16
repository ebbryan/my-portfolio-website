import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const footerData = {
  branding: {
    year: 2025,
    name: "Earl Bryan S. Bura-ay",
    builtWith: ["Next.js", "Tailwind CSS", "ShadCN UI"]
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ebbryan",
      icon: FaGithub
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/earl-bryan-bura-ay-b59555239",
      icon: FaLinkedin
    },
    {
      label: "Email",
      href: "mailto:earlbryanburaay@email.com",
      icon: FaEnvelope
    }
  ]
};

const SiteFooter = () => {
  return (
    <footer className="px-4 md:px-16 py-8 bg-orange-500 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold text-lg">
            © {footerData.branding.year} {footerData.branding.name}
          </p>
          <p className="text-sm text-orange-100">
            Built with {footerData.branding.builtWith.join(", ")}
          </p>
        </div>
        <div className="flex gap-6 text-xl">
          {footerData.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
