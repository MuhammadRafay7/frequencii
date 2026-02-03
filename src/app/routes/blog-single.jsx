import { useEffect } from 'react';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import AnnouncementBanner from '@components/layout/announcement-banner';
import PlaceholderContent from '@components/ui/placeholder-content';
import CTASection from '@components/ui/cta-section';

function BlogSinglePage() {
  useEffect(() => {
    document.title = 'Visit www.pixelrocket.store to learn how to become a frontend web developer';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBanner />
      <Header />

      <PlaceholderContent />

      <CTASection />
      <Footer />
    </div>
  );
}

export default BlogSinglePage;