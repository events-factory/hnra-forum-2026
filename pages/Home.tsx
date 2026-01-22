import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Calendar,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe,
  Building2,
  Clock,
} from 'lucide-react';
import { EVENT_INFO, SPEAKERS } from '../constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-29T09:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/3.jpeg"
            alt="Kigali Convention Centre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ama-maroon/95 via-ama-maroon/75 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-block bg-ama-gold text-ama-maroon font-bold px-4 py-1 rounded-full mb-6 text-sm uppercase tracking-wider animate-fade-in-down">
              {t('home.hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up animate-delay-100">
              {t('event.name')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-100 font-light leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
              {t('home.hero.description')}
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-12 max-w-md animate-fade-in-up animate-delay-300">
              {[
                { label: t('home.countdown.days'), value: timeLeft.days },
                { label: t('home.countdown.hours'), value: timeLeft.hours },
                { label: t('home.countdown.mins'), value: timeLeft.minutes },
                { label: t('home.countdown.secs'), value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center hover-lift"
                  style={{ backdropFilter: 'blur(70px)' }}
                >
                  <span className="block text-2xl md:text-3xl font-extrabold text-ama-gold">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in-up animate-delay-400">
              <div className="flex items-center gap-3 hover-scale cursor-pointer">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-xl">
                  <Calendar className="text-ama-gold" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-300 font-bold tracking-wider">
                    {t('home.hero.date')}
                  </p>
                  <p className="font-semibold">{EVENT_INFO.dates}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover-scale cursor-pointer">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-xl">
                  <MapPin className="text-ama-gold" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-slate-300 font-bold tracking-wider">
                    {t('home.hero.venue')}
                  </p>
                  <p className="font-semibold">{EVENT_INFO.venue}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-500">
              <Link
                to="/about"
                className="bg-ama-gold text-ama-maroon px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 hover-glow transition-all flex items-center gap-2 group"
              >
                {t('common.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Quick Info */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up animate-delay-100 hover-lift cursor-pointer p-4 rounded-xl">
              <h3 className="text-4xl font-extrabold text-ama-maroon mb-1">
                31
              </h3>
              <p className="text-slate-500 font-medium">{t('home.stats.memberStates')}</p>
            </div>
            <div className="animate-fade-in-up animate-delay-200 hover-lift cursor-pointer p-4 rounded-xl">
              <h3 className="text-4xl font-extrabold text-ama-maroon mb-1">
                80-100
              </h3>
              <p className="text-slate-500 font-medium">{t('home.stats.policyMakers')}</p>
            </div>
            <div className="animate-fade-in-up animate-delay-300 hover-lift cursor-pointer p-4 rounded-xl">
              <h3 className="text-4xl font-extrabold text-ama-maroon mb-1">
                20+
              </h3>
              <p className="text-slate-500 font-medium">{t('home.stats.partners')}</p>
            </div>
            <div className="animate-fade-in-up animate-delay-400 hover-lift cursor-pointer p-4 rounded-xl">
              <h3 className="text-4xl font-extrabold text-ama-maroon mb-1">
                {t('home.stats.annualValue')}
              </h3>
              <p className="text-slate-500 font-medium">{t('home.stats.flagshipEvent')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-ama-maroon font-bold text-sm uppercase tracking-widest mb-4">
                {t('home.introduction.label')}
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                {t('home.introduction.title')}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t('home.introduction.description')}
              </p>
              <div className="space-y-4">
                {[
                  t('home.introduction.point1'),
                  t('home.introduction.point2'),
                  t('home.introduction.point3'),
                  t('home.introduction.point4'),
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 animate-slide-in-right animate-delay-${(idx + 1) * 100} hover-scale cursor-pointer`}
                  >
                    <div className="w-6 h-6 rounded-full bg-ama-green/10 flex items-center justify-center text-ama-green">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="text-ama-maroon font-bold flex items-center gap-2 group"
                >
                  {t('home.introduction.readMore')}{' '}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/4.jpeg"
                  alt="Summit"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-ama-green text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="italic text-lg mb-4">
                  "{t('home.introduction.quote')}"
                </p>
                <p className="font-bold text-ama-gold">
                  — {t('home.introduction.quoteAuthor')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-24 bg-ama-maroon text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-6">
              {t('home.whyAttend.title')}
            </h2>
            <p className="text-slate-200 text-lg">
              {t('home.whyAttend.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 hover-lift transition-all cursor-pointer animate-fade-in-up animate-delay-100">
              <Users className="text-ama-gold mb-6 hover-scale" size={48} />
              <h4 className="text-2xl font-bold mb-4">{t('home.whyAttend.card1.title')}</h4>
              <p className="text-slate-300">
                {t('home.whyAttend.card1.description')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 hover-lift transition-all cursor-pointer animate-fade-in-up animate-delay-200">
              <Globe className="text-ama-gold mb-6 hover-scale" size={48} />
              <h4 className="text-2xl font-bold mb-4">{t('home.whyAttend.card2.title')}</h4>
              <p className="text-slate-300">
                {t('home.whyAttend.card2.description')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 hover-lift transition-all cursor-pointer animate-fade-in-up animate-delay-300">
              <Building2 className="text-ama-gold mb-6 hover-scale" size={48} />
              <h4 className="text-2xl font-bold mb-4">{t('home.whyAttend.card3.title')}</h4>
              <p className="text-slate-300">
                {t('home.whyAttend.card3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-ama-maroon font-bold text-sm uppercase tracking-widest mb-4">
                {t('home.speakers.label')}
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                {t('home.speakers.title')}
              </h3>
            </div>
            <Link
              to="/speakers"
              className="bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              {t('home.sections.speakers.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPEAKERS.slice(0, 4).map((speaker, idx) => (
              <div
                key={speaker.id}
                className={`group animate-fade-in-up animate-delay-${(idx + 1) * 100}`}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 hover-lift cursor-pointer">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-ama-maroon transition-colors">
                  {speaker.name}
                </h4>
                <p className="text-ama-maroon font-medium text-sm">
                  {speaker.title}
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  {speaker.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-ama-maroon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-ama-green/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-ama-maroon rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/partners"
                className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-xl hover:bg-white/20 transition-all"
              >
                {t('home.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
