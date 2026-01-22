
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SPEAKERS } from '../constants';
import { Linkedin, Twitter } from 'lucide-react';

const Speakers: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-down">{t('speakers.title')}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            {t('speakers.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SPEAKERS.map((speaker, idx) => (
              <div key={speaker.id} className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover-lift transition-all border border-slate-100 group animate-fade-in-up animate-delay-${Math.min((idx + 1) * 100, 600)}`}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-ama-maroon hover:bg-ama-maroon hover:text-white hover-scale transition-all">
                      <Linkedin size={18} />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-lg text-ama-maroon hover:bg-ama-maroon hover:text-white hover-scale transition-all">
                      <Twitter size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-ama-maroon transition-colors">{speaker.name}</h3>
                  <p className="text-ama-maroon font-semibold text-sm mb-4">{speaker.title}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 border-b border-slate-50 pb-4">
                    {speaker.organization}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ama-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">{t('speakers.callForAbstracts.title')}</h2>
          <p className="text-slate-200 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            {t('speakers.callForAbstracts.description')}
          </p>
          <button className="bg-ama-gold text-ama-maroon px-8 py-3 rounded-full font-bold hover:scale-105 hover-glow transition-all shadow-lg animate-fade-in-up animate-delay-200">
            {t('speakers.callForAbstracts.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
