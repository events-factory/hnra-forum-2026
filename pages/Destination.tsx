
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plane, Car, Hotel, Compass, Info, Map as MapIcon } from 'lucide-react';

const Destination: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banner1.jpg"
            alt="Kigali Cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{t('destination.hero.title')}</h1>
          <p className="text-xl md:text-2xl font-light">{t('destination.hero.subtitle')}</p>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-ama-maroon font-bold text-sm uppercase tracking-widest mb-4">{t('destination.travelGuide.label')}</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-8">{t('destination.travelGuide.title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t('destination.travelGuide.p1')}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t('destination.travelGuide.p2')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-ama-gold/10 rounded-xl flex items-center justify-center text-ama-gold shrink-0">
                    <Plane size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t('destination.travelGuide.visa.title')}</h5>
                    <p className="text-xs text-slate-500">{t('destination.travelGuide.visa.description')}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-ama-maroon/10 rounded-xl flex items-center justify-center text-ama-maroon shrink-0">
                    <MapIcon size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{t('destination.travelGuide.language.title')}</h5>
                    <p className="text-xs text-slate-500">{t('destination.travelGuide.language.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="/images/banner2.jpg" className="rounded-2xl w-full h-full object-cover shadow-lg" alt="Kigali" />
              <img src="/images/banner3.jpeg" className="rounded-2xl w-full h-full object-cover shadow-lg mt-8" alt="Kigali Culture" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <Hotel className="text-ama-maroon mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-4">{t('destination.cards.accommodation.title')}</h4>
              <p className="text-slate-600 mb-6">{t('destination.cards.accommodation.description')}</p>
              <a href="#" className="text-ama-maroon font-bold flex items-center gap-2">{t('destination.cards.accommodation.link')} <Info size={14} /></a>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <Car className="text-ama-maroon mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-4">{t('destination.cards.transport.title')}</h4>
              <p className="text-slate-600 mb-6">{t('destination.cards.transport.description')}</p>
              <a href="#" className="text-ama-maroon font-bold flex items-center gap-2">{t('destination.cards.transport.link')}</a>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <Compass className="text-ama-maroon mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-4">{t('destination.cards.attractions.title')}</h4>
              <p className="text-slate-600 mb-6">{t('destination.cards.attractions.description')}</p>
              <a href="https://gsteptours.com/" target="_blank" className="text-ama-maroon font-bold flex items-center gap-2">{t('destination.cards.attractions.link')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map / KCC Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="p-12 lg:p-20 lg:w-1/2">
              <h2 className="text-ama-gold font-bold text-sm uppercase tracking-widest mb-4">{t('destination.venue.label')}</h2>
              <h3 className="text-4xl font-extrabold text-white mb-8">{t('destination.venue.title')}</h3>
              <p className="text-slate-300 text-lg mb-8">
                {t('destination.venue.description')}
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-ama-gold"></div>
                  {t('destination.venue.feature1')}
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-ama-gold"></div>
                  {t('destination.venue.feature2')}
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-ama-gold"></div>
                  {t('destination.venue.feature3')}
                </li>
              </ul>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
                <a href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-convention-kigali/meeting-events?gallery=open&galleryId=HotelGalleryOMEBT%7CHeroRegion&mediaId=gallery-meetings-and-events-13" target="_blank" className="flex items-center gap-2">
                  {t('destination.venue.button')}
                </a>
              </button>
            </div>
            <div className="lg:w-1/2 min-h-[400px]">
              <img
                src="/images/Radisson-Blue-Kigali.jpg"
                className="w-full h-full object-cover object-right"
                alt="KCC Exterior"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
