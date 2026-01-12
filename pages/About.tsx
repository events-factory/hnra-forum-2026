
import React from 'react';
import { Shield, Target, Award, CheckCircle2 } from 'lucide-react';
import { EVENT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-ama-maroon py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-down">About the Forum</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Establishing a high-level continental platform for regulatory leadership and policy dialogue.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Executive Summary</h2>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  <p>
                    The Heads of National Regulatory Authorities Forum is a high-level continental platform convening Heads of National Medicines Regulatory Authorities (NRAs) from African Union Member States.
                  </p>
                  <p>
                    Organised annually by the African Medicines Agency (AMA) in collaboration with a host government, the Forum provides strategic leadership, policy dialogue, and collective decision-making to advance regulatory harmonisation and strengthen Africa’s medicines regulatory ecosystem.
                  </p>
                  <p>
                    The inaugural Forum will take place on 29–30 January 2026 at the Kigali Convention Centre, Rwanda. It will bring together senior regulatory leaders, policymakers, and selected partners to align on priority regulatory reforms.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Background & Context</h2>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  <p>
                    Fragmented regulatory systems and uneven capacity across Africa continue to delay access to quality-assured medicines, vaccines, medical devices, and diagnostics. 
                  </p>
                  <p>
                    The African Medicines Agency was established by the African Union to strengthen coordination, promote harmonisation, and support regulatory reliance across AU Member States. The Forum addresses the need for sustained high-level leadership engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover-lift transition-all animate-fade-in-up animate-delay-300">
                <h3 className="text-xl font-bold text-ama-maroon mb-6 flex items-center gap-2">
                  <Target size={20} className="hover-scale" /> Forum Objectives
                </h3>
                <ul className="space-y-4">
                  {[
                    "Provide a platform for leadership dialogue",
                    "Review harmonisation progress",
                    "Strengthen AMA & NRA collaboration",
                    "Agree on priority policy actions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 text-sm hover:text-ama-maroon hover:translate-x-2 transition-all cursor-pointer">
                      <CheckCircle2 size={16} className="text-ama-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ama-green text-white p-8 rounded-3xl shadow-lg hover-lift transition-all animate-fade-in-up animate-delay-400">
                <h3 className="text-xl font-bold mb-4">Event Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="hover-scale transition-transform cursor-pointer">
                    <p className="text-ama-gold font-bold uppercase tracking-tighter text-[10px]">Dates</p>
                    <p className="font-semibold">{EVENT_INFO.dates}</p>
                  </div>
                  <div className="hover-scale transition-transform cursor-pointer">
                    <p className="text-ama-gold font-bold uppercase tracking-tighter text-[10px]">Venue</p>
                    <p className="font-semibold">{EVENT_INFO.venue}</p>
                  </div>
                  <div className="hover-scale transition-transform cursor-pointer">
                    <p className="text-ama-gold font-bold uppercase tracking-tighter text-[10px]">Frequency</p>
                    <p className="font-semibold">{EVENT_INFO.frequency}</p>
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
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Expected Results & Impact</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Establishing the foundation for a resilient health system through coordinated regulatory efforts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-ama-maroon/10 rounded-2xl flex items-center justify-center text-ama-maroon mx-auto mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Institutionalisation</h4>
              <p className="text-slate-600 text-sm">Institutionalise the Forum as an annual flagship convening of regulatory leaders.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-ama-green/10 rounded-2xl flex items-center justify-center text-ama-green mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">System Resilience</h4>
              <p className="text-slate-600 text-sm">Stronger regulatory systems foundational to resilient health systems across Africa.</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-ama-gold/10 rounded-2xl flex items-center justify-center text-ama-gold mx-auto mb-6">
                <Target size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Strategic Guidance</h4>
              <p className="text-slate-600 text-sm">Provide clear strategic guidance to AMA and increase adoption of reliance mechanisms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
