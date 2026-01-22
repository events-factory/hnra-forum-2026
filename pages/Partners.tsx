import React from 'react';
import { useTranslation } from 'react-i18next';
import { PARTNERS } from '../constants';
import { Handshake, HelpCircle, ExternalLink } from 'lucide-react';

const Partners: React.FC = () => {
  const { t } = useTranslation();

  const organizer = PARTNERS.filter((p) => p.type === 'Organizer');
  const host = PARTNERS.filter((p) => p.type === 'Host');
  const others = PARTNERS.filter(
    (p) => p.type !== 'Organizer' && p.type !== 'Host'
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-ama-gold py-20 text-ama-maroon text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-down">
            {t('partners.title')}
          </h1>
          <p className="text-xl text-ama-maroon/80 max-w-3xl mx-auto font-medium animate-fade-in-up animate-delay-200">
            {t('partners.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Organizers */}
          <div className="mb-24 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12 animate-fade-in">
              {t('partners.organizingEntity')}
            </h2>
            <div className="flex justify-center">
              {organizer.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 max-w-sm flex flex-col items-center hover-lift transition-all animate-scale-in cursor-pointer"
                >
                  <div className="w-48 h-32 flex items-center justify-center mb-6 overflow-hidden hover-scale">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-w-[160px] transition-all"
                    />
                  </div>
                  <h4 className="text-xl font-bold">{p.name}</h4>
                  <p className="text-sm text-ama-maroon font-bold mt-2">
                    {p.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Host */}
          <div className="mb-24 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12 animate-fade-in">
              {t('partners.host')}
            </h2>
            <div className="flex justify-center">
              {host.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 max-w-sm flex flex-col items-center hover-lift transition-all animate-scale-in animate-delay-200 cursor-pointer"
                >
                  <div className="w-48 h-32 flex items-center justify-center mb-6 overflow-hidden hover-scale">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-w-[160px] transition-all"
                    />
                  </div>
                  <h4 className="text-xl font-bold">{p.name}</h4>
                  <p className="text-sm text-ama-green font-bold mt-2">
                    {t('partners.officialHostEntity')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic & Technical */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12 animate-fade-in">
              {t('partners.strategicPartners')}
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-5xl">
              {others.map((p, idx) => (
                <div
                  key={p.id}
                  className={`bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 w-80 flex flex-col items-center hover:shadow-xl hover-lift transition-all cursor-pointer animate-fade-in-up animate-delay-${Math.min((idx + 1) * 100, 600)}`}
                >
                  <div className="w-60 h-24 flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-w-[180px] transition-all"
                    />
                  </div>
                  <h4 className="text-lg font-bold">{p.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase mt-2 tracking-widest">
                    {p.type} {t('partners.partnerLabel')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Handshake className="text-ama-gold mb-6" size={64} />
              <h2 className="text-4xl font-extrabold mb-6">{t('partners.partnerWithUs.title')}</h2>
              <p className="text-slate-400 text-lg mb-8">
                {t('partners.partnerWithUs.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-ama-gold/20 flex items-center justify-center text-ama-gold">
                    <ExternalLink size={14} />
                  </div>
                  <span>{t('partners.partnerWithUs.benefit1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-ama-gold/20 flex items-center justify-center text-ama-gold">
                    <ExternalLink size={14} />
                  </div>
                  <span>{t('partners.partnerWithUs.benefit2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-ama-gold/20 flex items-center justify-center text-ama-gold">
                    <ExternalLink size={14} />
                  </div>
                  <span>{t('partners.partnerWithUs.benefit3')}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="text-ama-gold" size={24} /> {t('partners.inquiry.title')}
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t('partners.inquiry.fullName')}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-ama-gold outline-none"
                />
                <input
                  type="email"
                  placeholder={t('partners.inquiry.email')}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-ama-gold outline-none"
                />
                <input
                  type="text"
                  placeholder={t('partners.inquiry.organization')}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-ama-gold outline-none"
                />
                <textarea
                  placeholder={t('partners.inquiry.message')}
                  rows={4}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-ama-gold outline-none resize-none"
                ></textarea>
                <button className="w-full bg-ama-gold text-ama-maroon font-bold py-4 rounded-xl hover:shadow-xl transition-all">
                  {t('partners.inquiry.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
