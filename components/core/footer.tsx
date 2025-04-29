import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 w-full">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">HaveSomeFund</h3>
            <p className="text-sm text-gray-400">
              Connecting passionate creators with generous supporters since
              2023.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">For Creators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/campaigns/create"
                  className="hover:text-white transition-colors"
                >
                  Start a Campaign
                </Link>
              </li>
              <li>
                <Link
                  href="/creator-resources"
                  className="hover:text-white transition-colors"
                >
                  Creator Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/creator-faq"
                  className="hover:text-white transition-colors"
                >
                  Creator FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">For Donors</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/campaigns"
                  className="hover:text-white transition-colors"
                >
                  Discover Campaigns
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/donor-faq"
                  className="hover:text-white transition-colors"
                >
                  Donor FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/trust-safety"
                  className="hover:text-white transition-colors"
                >
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} HaveSomeFund. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
