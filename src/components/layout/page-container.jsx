import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnnouncementBanner from './announcement-banner';
import Header from './header';
import Footer from './footer';

/**
 * Main page layout container component
 * Provides consistent layout structure with header, footer, and page content
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to render
 * @param {string} [props.title] - Page title for document.title
 * @param {boolean} [props.showAnnouncement=true] - Whether to show announcement banner
 * @param {string} [props.className=''] - Additional CSS classes for main content
 * @param {Object} [props.seo] - SEO metadata object
 * @param {string} [props.seo.description] - Meta description
 * @param {string[]} [props.seo.keywords] - Meta keywords array
 */
const PageContainer = ({
  children,
  title,
  showAnnouncement = true,
  className = '',
  seo = {}
}) => {
  const location = useLocation();

  // Set document title
  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      // Default title based on route
      const routeTitles = {
        '/': 'Frequencii - Marketing Asset Management',
        '/about': 'About - Frequencii',
        '/pricing': 'Pricing - Frequencii',
        '/blog': 'Blog - Frequencii',
        '/contact': 'Contact - Frequencii',
        '/login': 'Login - Frequencii',
        '/register': 'Sign Up - Frequencii'
      };

      document.title = routeTitles[location.pathname] || 'Frequencii';
    }
  }, [title, location.pathname]);

  // Set meta description
  useEffect(() => {
    if (seo.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seo.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = seo.description;
        document.head.appendChild(meta);
      }
    }
  }, [seo.description]);

  // Set meta keywords
  useEffect(() => {
    if (seo.keywords && seo.keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      const keywordsString = seo.keywords.join(', ');

      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywordsString);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywordsString;
        document.head.appendChild(meta);
      }
    }
  }, [seo.keywords]);

  return (
    <div className="antialiased bg-body text-body font-body min-h-screen flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellowGreen-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-yellowGreen-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Announcement banner */}
      {showAnnouncement && <AnnouncementBanner />}

      {/* Header */}
      <Header />

      {/* Main content */}
      <main
        id="main-content"
        className={`flex-grow ${className}`}
        role="main"
        tabIndex="-1"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageContainer;