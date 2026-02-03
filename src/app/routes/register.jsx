import { useEffect } from 'react';
import AnnouncementBanner from '@components/layout/announcement-banner';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import PlaceholderContent from '@components/ui/placeholder-content';
import CTASection from '@components/ui/cta-section';

function RegisterPage() {
  useEffect(() => {
    document.title = 'Visit www.pixelrocket.store to learn how to become a frontend web developer';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <div>
        <AnnouncementBanner />
        <div>
          <div>
            <div>
              <div>
                <section>
                  <Header />
                </section>
              </div>
            </div>
          </div>
        </div>
        <PlaceholderContent />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default RegisterPage;