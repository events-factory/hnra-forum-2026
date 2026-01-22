
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Target, Award, CheckCircle2 } from 'lucide-react';
import { EVENT_INFO } from '../constants';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-ama-maroon py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-down">{t('about.title')}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            {t('about.headerSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{t('about.executiveSummary.title')}</h2>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  <p>{t('about.executiveSummary.p1')}</p>
                  <p>{t('about.executiveSummary.p2')}</p>
                  <p>{t('about.executiveSummary.p3')}</p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{t('about.background.title')}</h2>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  <p>{t('about.background.p1')}</p>
                  <p>{t('about.background.p2')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover-lift transition-all animate-fade-in-up animate-delay-300">
                <h3 className="text-xl font-bold text-ama-maroon mb-6 flex items-center gap-2">
                  <Target size={20} className="hover-scale" /> {t('about.objectives.title')}
                </h3>
                <ul className="space-y-4">
                  {[
                    t('about.objectives.obj1'),
                    t('about.objectives.obj2'),
                    t('about.objectives.obj3'),
                    t('about.objectives.obj4'),
                    t('about.objectives.obj5'),
                    t('about.objectives.obj6')
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 text-sm hover:text-ama-maroon hover:translate-x-2 transition-all cursor-pointer">
                      <CheckCircle2 size={16} className="text-ama-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ama-green text-white p-8 rounded-3xl shadow-lg hover-lift transition-all animate-fade-in-up animate-delay-400">
                <h3 className="text-xl font-bold mb-4">{t('about.eventDetails.title')}</h3>
                <div className="space-y-4 text-sm">
                  <div className="hover-scale transition-transform cursor-pointer">
                    <p className="text-ama-gold font-bold uppercase tracking-tighter text-[10px]">{t('about.eventDetails.dates')}</p>
                    <p className="font-semibold">{EVENT_INFO.dates}</p>
                  </div>
                  <div className="hover-scale transition-transform cursor-pointer">
                    <p className="text-ama-gold font-bold uppercase tracking-tighter text-[10px]">{t('about.eventDetails.venue')}</p>
                    <p className="font-semibold">{EVENT_INFO.venue}</p>
                  </div>
                  <div className="hover-scale transition-transform cursor-pointer">
                    <p className="text-ama-gold font-bold uppercase tracking-tighter text-[10px]">{t('about.eventDetails.frequency')}</p>
                    <p className="font-semibold">{t('about.eventDetails.frequencyValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{t('about.impact.title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('about.impact.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-ama-maroon/10 rounded-2xl flex items-center justify-center text-ama-maroon mx-auto mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">{t('about.impact.card1.title')}</h4>
              <p className="text-slate-600 text-sm">{t('about.impact.card1.description')}</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-ama-green/10 rounded-2xl flex items-center justify-center text-ama-green mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">{t('about.impact.card2.title')}</h4>
              <p className="text-slate-600 text-sm">{t('about.impact.card2.description')}</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-ama-gold/10 rounded-2xl flex items-center justify-center text-ama-gold mx-auto mb-6">
                <Target size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">{t('about.impact.card3.title')}</h4>
              <p className="text-slate-600 text-sm">{t('about.impact.card3.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
