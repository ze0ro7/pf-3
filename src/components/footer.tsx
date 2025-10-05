import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t bg-gray-900 text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand and Description */}
          <div className="text-center md:text-left md:pl-8">
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="text-blue-500">MA</span> RIZWAN
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Building something crazy with code.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0 md:pl-4">
            <a
              href="https://github.com/InFiNiTy0639"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:text-blue-500"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:text-blue-400"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ma-rizwan-61a000284/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:text-pink-500"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} MA RIZWAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
