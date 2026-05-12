export const metadata = {
  title: 'Privacy Policy — xperc',
  description: 'xperc Privacy Policy. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="section-spacing px-4 pt-12 md:pt-16">
        <div className="container-max max-w-3xl">
          <h1 className="font-display text-5xl font-bold mb-8 text-text-primary">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-12">
            Last updated: December 2025
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                1. Introduction
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                xperc ("we," "us," "our," or "Company") operates the xperc.com website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                2. Information Collection and Use
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                      <li>Email address</li>
                      <li>Full name</li>
                      <li>Phone number</li>
                      <li>Job title and company name</li>
                      <li>Cookies and Usage Data</li>
                    </ul>
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                3. Use of Data
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                xperc uses the collected data for various purposes:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex gap-2">
                  <span className="text-accent">•</span> To provide and maintain our Service
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> To notify you about changes to our Service
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> To allow you to participate in interactive features of our Service
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> To provide customer support
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> To gather analysis or valuable information so that we can improve our Service
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                4. Security of Data
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                5. Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-bg-secondary rounded-lg border border-border p-6">
                <p className="text-text-primary font-semibold">xperc</p>
                <p className="text-text-secondary">Email: hello@xperc.com</p>
                <p className="text-text-secondary">Ho Chi Minh City, Vietnam</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
