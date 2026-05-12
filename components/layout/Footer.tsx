import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="container-max section-spacing">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 uppercase text-sm tracking-wide">Contact</h4>
            <div className="space-y-3 text-text-secondary">
              <p className="text-sm">hello@xperc.com</p>
              <p className="text-sm">+84 (0) 123 456 789</p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-accent hover:text-accent-hover transition-colors">LinkedIn</a>
                <a href="#" className="text-accent hover:text-accent-hover transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 uppercase text-sm tracking-wide">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://xcorp.app" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  xcorp.app
                </a>
              </li>
              <li>
                <a href="https://syrix.ai" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  syrix.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Office */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 uppercase text-sm tracking-wide">Office</h4>
            <p className="text-text-secondary text-sm">Ho Chi Minh City, Vietnam</p>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 uppercase text-sm tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/chinh-sach/privacy" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach/terms" className="text-text-secondary hover:text-accent transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs md:text-sm">© {currentYear} xperc. All rights reserved.</p>
          <div className="flex gap-6 text-text-secondary text-xs md:text-sm">
            <Link href="/chinh-sach/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/chinh-sach/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
