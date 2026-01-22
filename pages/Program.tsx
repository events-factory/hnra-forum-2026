
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PROGRAM } from '../constants';
import { Clock, MapPin, Download } from 'lucide-react';

const Program: React.FC = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState(1);

  const filteredProgram = PROGRAM.filter(item => item.day === activeDay);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-ama-green py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-down">{t('program.title')}</h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            {t('program.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Day Selector */}
          <div className="flex justify-center gap-4 mb-16 animate-fade-in-up animate-delay-100">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all hover-lift ${
                activeDay === 1
                ? 'bg-ama-maroon text-white shadow-xl scale-105 hover-glow'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-ama-maroon'
              }`}
            >
              {t('program.day1Label')}
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all hover-lift ${
                activeDay === 2
                ? 'bg-ama-maroon text-white shadow-xl scale-105 hover-glow'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-ama-maroon'
              }`}
            >
              {t('program.day2Label')}
            </button>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {filteredProgram.map((item, idx) => (
              <div key={item.id} className={`relative pl-12 border-l-2 border-slate-200 group animate-fade-in-up animate-delay-${Math.min((idx + 1) * 100, 600)}`}>
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-200 group-hover:bg-ama-maroon group-hover:scale-150 transition-all ring-4 ring-slate-50"></div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover-lift transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2 text-ama-maroon font-bold hover-scale">
                      <Clock size={18} />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium hover-scale">
                      <MapPin size={16} />
                      <span>{t('program.venueLabel')}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-ama-maroon transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>

                  {item.speakers && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block w-full mb-2">{t('program.speakersLabel')}:</span>
                      {item.speakers.map((s, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-ama-maroon hover:text-white transition-all cursor-pointer">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center animate-fade-in">
            <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 hover-lift hover-glow transition-all shadow-lg group">
              <Download size={20} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform" /> {t('program.downloadPdf')}
            </button>
            <p className="text-slate-500 mt-4 text-sm">{t('program.lastUpdated')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
