import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  X,
  Calendar,
  MapPin,
  ExternalLink,
  Mail,
  Phone,
  Globe,
} from 'lucide-react';
import logoColor from '../HoNRAF logo Landscape FC(1).png';
import logoWhite from '../HoNRAF logo Landscape White.png';
import { EVENT_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { name: t('nav.home'), path: '/', end: true },
    { name: t('nav.about'), path: '/about', end: false },
    { name: t('nav.speakers'), path: '/speakers', end: false },
    { name: t('nav.program'), path: '/program', end: false },
    { name: t('nav.destination'), path: '/destination', end: false },
    { name: t('nav.partners'), path: '/partners', end: false },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Banner */}
      <div className="bg-ama-maroon text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1 font-medium">
              <Calendar size={14} /> {EVENT_INFO.dates}
            </span>
            <span className="flex items-center gap-1 font-medium">
              <MapPin size={14} /> {EVENT_INFO.location}
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={closeMenu}
            >
              <img
                src={logoColor}
                alt="HoNRAF Forum logo"
                className="h-12 object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `font-bold text-sm transition-all hover:text-ama-maroon hover:scale-105 relative py-2 ${
                      isActive
                        ? 'text-ama-maroon after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-ama-maroon'
                        : 'text-slate-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Language Switcher */}
              <div className="flex items-center gap-1 border-l border-slate-200 pl-6">
                <Globe size={16} className="text-slate-400" />
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 text-sm font-bold rounded transition-all ${
                    i18n.language === 'en'
                      ? 'text-ama-maroon bg-ama-maroon/10'
                      : 'text-slate-500 hover:text-ama-maroon'
                  }`}
                >
                  EN
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`px-2 py-1 text-sm font-bold rounded transition-all ${
                    i18n.language === 'fr'
                      ? 'text-ama-maroon bg-ama-maroon/10'
                      : 'text-slate-500 hover:text-ama-maroon'
                  }`}
                >
                  FR
                </button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-ama-maroon focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-300 transform ${
            isMenuOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col p-10 pt-24 gap-4 h-full">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `text-2xl font-bold p-4 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-ama-maroon text-white shadow-xl'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
            <hr className="my-4 border-slate-100" />
            {/* <Link
              to="/register"
              className="bg-ama-maroon text-white text-center py-5 rounded-2xl font-bold shadow-2xl mt-4 text-xl"
              onClick={closeMenu}
            >
              {t('nav.register')}
            </Link> */}

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Globe size={20} className="text-slate-400" />
              <button
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 text-lg font-bold rounded-xl transition-all ${
                  i18n.language === 'en'
                    ? 'text-white bg-ama-maroon'
                    : 'text-slate-500 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-4 py-2 text-lg font-bold rounded-xl transition-all ${
                  i18n.language === 'fr'
                    ? 'text-white bg-ama-maroon'
                    : 'text-slate-500 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                Français
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-42 h-10 flex items-center">
                  <img
                    src={logoWhite}
                    alt="HoNRAF Forum logo"
                    className="h-10 object-contain"
                  />
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:info@ama.africa"
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-ama-maroon hover-lift transition-all group"
                >
                  <Mail
                    size={18}
                    className="group-hover:scale-110 group-hover:rotate-12 transition-transform"
                  />
                </a>
                <a
                  href="tel:+250123456789"
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-ama-maroon hover-lift transition-all group"
                >
                  <Phone
                    size={18}
                    className="group-hover:scale-110 group-hover:rotate-12 transition-transform"
                  />
                </a>
                <a
                  href="https://au-ama.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-ama-maroon hover-lift transition-all group"
                >
                  <Globe
                    size={18}
                    className="group-hover:scale-110 group-hover:rotate-12 transition-transform"
                  />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">{t('footer.quickLinks')}</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-ama-gold hover:translate-x-2 transition-all flex items-center gap-2"
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-ama-gold hover:translate-x-2 transition-all flex items-center gap-2"
                  >
                    {t('footer.aboutForum')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/speakers"
                    className="hover:text-ama-gold hover:translate-x-2 transition-all flex items-center gap-2"
                  >
                    {t('nav.speakers')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/program"
                    className="hover:text-ama-gold hover:translate-x-2 transition-all flex items-center gap-2"
                  >
                    {t('footer.eventProgram')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destination"
                    className="hover:text-ama-gold hover:translate-x-2 transition-all flex items-center gap-2"
                  >
                    {t('footer.destinationGuide')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="hover:text-ama-gold hover:translate-x-2 transition-all flex items-center gap-2"
                  >
                    {t('footer.partnersSponsors')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">{t('footer.contactUs')}</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-ama-maroon shrink-0" />
                  <span className="text-slate-400">
                    Kigali Convention Centre,
                    <br />
                    Kigali, Rwanda
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-ama-maroon shrink-0" />
                  <a
                    href="mailto:info@ama.africa"
                    className="text-slate-400 hover:text-ama-gold transition-colors"
                  >
                    info@ama.africa
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-ama-maroon shrink-0" />
                  <a
                    href="tel:250788154800"
                    className="text-slate-400 hover:text-ama-gold transition-colors"
                  >
                    (+250) 788 154 800
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">{t('footer.newsletter.title')}</h4>
              <p className="text-sm mb-4 text-slate-400">
                {t('footer.newsletter.description')}
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="bg-slate-800 border-none rounded-l-xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-ama-maroon outline-none text-white transition-all"
                />
                <button className="bg-ama-maroon text-white px-5 py-3 rounded-r-xl text-sm font-bold hover:bg-opacity-90 hover-scale transition-all">
                  {t('footer.newsletter.button')}
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
            <p>
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6">
              <a
                href="https://smartevent.rw/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {t('footer.privacyPolicy')}
              </a>
              <a
                href="https://smartevent.rw/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {t('footer.termsOfUse')}
              </a>
              <a
                href="https://au-ama.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                {t('footer.amaWebsite')} <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
