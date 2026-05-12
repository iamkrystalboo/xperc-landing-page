export const metadata = {
  title: 'Terms of Service — xperc',
  description: 'xperc Terms of Service. Our terms and conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="section-spacing px-4 pt-12 md:pt-16">
        <div className="container-max max-w-3xl">
          <h1 className="font-display text-5xl font-bold mb-8 text-text-primary">
            Terms of Service
          </h1>
          <p className="text-text-secondary mb-12">
            Last updated: December 2025
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                1. Agreement to Terms
              </h2>
              <p className="text-text-secondary leading-relaxed">
                By accessing and using xperc.com (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                2. Use License
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on xperc.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex gap-2">
                  <span className="text-accent">•</span> Modify or copy the materials
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> Use the materials for any commercial purpose or for any public display
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> Attempt to reverse engineer any software contained on the Website
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> Remove any copyright or proprietary notations from the materials
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span> Transfer the materials to another person or "mirror" the materials on any other server
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                3. Disclaimer
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The materials on xperc.com are provided on an 'as is' basis. xperc makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                4. Limitations
              </h2>
              <p className="text-text-secondary leading-relaxed">
                In no event shall xperc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on xperc.com, even if xperc or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                5. Accuracy of Materials
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The materials appearing on xperc.com could include technical, typographical, or photographic errors. xperc does not warrant that any of the materials on the Website are accurate, complete, or current. xperc may make changes to the materials contained on the Website at any time without notice.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                6. Links
              </h2>
              <p className="text-text-secondary leading-relaxed">
                xperc has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by xperc of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                7. Modifications
              </h2>
              <p className="text-text-secondary leading-relaxed">
                xperc may revise these terms of service for its Website at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                8. Governing Law
              </h2>
              <p className="text-text-secondary leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Vietnam, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
                9. Contact Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
