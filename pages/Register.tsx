
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, User, Briefcase, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  // Personal Information
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  nationality: string;

  // Contact & Professional
  email: string;
  organization: string;
  position: string;
  countryOfResidence: string;

  // Event Preferences
  dietaryRestrictions: string;
  medicalConditions: string;
  specialRequirements: string;
  photoConsent: boolean;
}

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    nationality: '',
    email: '',
    organization: '',
    position: '',
    countryOfResidence: '',
    dietaryRestrictions: '',
    medicalConditions: '',
    specialRequirements: '',
    photoConsent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const totalSteps = 4;

  const titles = ['Dr.', 'Prof.', 'Mr.', 'Mrs.', 'Ms.', 'Mx.'];
  const genders = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.title) newErrors.title = 'Title is required';
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
    }

    if (step === 2) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
      if (!formData.position.trim()) newErrors.position = 'Position is required';
      if (!formData.countryOfResidence.trim()) newErrors.countryOfResidence = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Registration submitted successfully! (This is a demo - no data was actually sent)');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-ama-maroon py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center animate-fade-in-down">
            Delegate Registration
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto text-center animate-fade-in-up animate-delay-200">
            Join us at the Heads of National Regulatory Authorities Forum 2026
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        step < currentStep
                          ? 'bg-ama-green text-white'
                          : step === currentStep
                          ? 'bg-ama-maroon text-white scale-110 shadow-lg'
                          : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {step < currentStep ? <Check size={20} /> : step}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${step === currentStep ? 'text-ama-maroon' : 'text-slate-500'}`}>
                      {step === 1 && 'Personal'}
                      {step === 2 && 'Professional'}
                      {step === 3 && 'Preferences'}
                      {step === 4 && 'Review'}
                    </span>
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded transition-all ${
                        step < currentStep ? 'bg-ama-green' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12 animate-fade-in-up">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-ama-maroon/10 rounded-xl">
                        <User className="text-ama-maroon" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
                        <p className="text-slate-500 text-sm">Tell us about yourself</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="md:col-span-1">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Title <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.title ? 'border-red-500' : 'border-slate-300'
                          } bg-white focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:border-ama-maroon`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                            paddingRight: '2.5rem'
                          }}
                        >
                          <option value="">Select</option>
                          {titles.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        {errors.title && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.title}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-4">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.firstName ? 'border-red-500' : 'border-slate-300'
                          } focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.firstName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Middle Name <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.middleName}
                          onChange={(e) => handleInputChange('middleName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon"
                          placeholder="Enter your middle name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.lastName ? 'border-red-500' : 'border-slate-300'
                          } focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.gender ? 'border-red-500' : 'border-slate-300'
                          } bg-white focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all appearance-none cursor-pointer hover:border-ama-maroon`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                            paddingRight: '2.5rem'
                          }}
                        >
                          <option value="">Select gender</option>
                          {genders.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                        {errors.gender && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.gender}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Nationality <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.nationality ? 'border-red-500' : 'border-slate-300'
                          } focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon`}
                          placeholder="Enter your nationality"
                        />
                        {errors.nationality && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.nationality}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Professional Information */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-ama-maroon/10 rounded-xl">
                        <Briefcase className="text-ama-maroon" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">Professional Details</h2>
                        <p className="text-slate-500 text-sm">Your work and contact information</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        } focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.organization ? 'border-red-500' : 'border-slate-300'
                        } focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon`}
                        placeholder="Your organization name"
                      />
                      {errors.organization && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.organization}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Position/Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.position ? 'border-red-500' : 'border-slate-300'
                        } focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon`}
                        placeholder="Your job title or position"
                      />
                      {errors.position && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.position}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Country of Residence <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.countryOfResidence}
                        onChange={(e) => handleInputChange('countryOfResidence', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.countryOfResidence ? 'border-red-500' : 'border-slate-300'
                        } focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon`}
                        placeholder="Country where you currently reside"
                      />
                      {errors.countryOfResidence && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.countryOfResidence}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Event Preferences & Requirements */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Event Preferences</h2>
                      <p className="text-slate-500 text-sm">Help us accommodate your needs</p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Dietary Restrictions <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <textarea
                        value={formData.dietaryRestrictions}
                        onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon resize-none"
                        rows={3}
                        placeholder="E.g., Vegetarian, Vegan, Halal, allergies to nuts, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Medical Conditions <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <textarea
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon resize-none"
                        rows={3}
                        placeholder="Any medical conditions or accessibility needs we should be aware of"
                      />
                      <p className="text-xs text-slate-500 mt-1">This information will be kept confidential and used only for your safety</p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Special Requirements <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <textarea
                        value={formData.specialRequirements}
                        onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ama-maroon focus:border-transparent outline-none transition-all hover:border-ama-maroon resize-none"
                        rows={3}
                        placeholder="Any other special requirements or accommodations needed"
                      />
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.photoConsent}
                          onChange={(e) => handleInputChange('photoConsent', e.target.checked)}
                          className="mt-1 w-5 h-5 rounded border-slate-300 text-ama-maroon focus:ring-2 focus:ring-ama-maroon cursor-pointer"
                        />
                        <div>
                          <span className="text-sm font-bold text-slate-900 group-hover:text-ama-maroon transition-colors">
                            Photography & Media Consent
                          </span>
                          <p className="text-xs text-slate-600 mt-1">
                            I consent to being photographed and recorded during the forum. Photos and videos may be used for promotional purposes by the African Medicines Agency and event partners.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Review Your Information</h2>
                      <p className="text-slate-500 text-sm">Please verify all details before submitting</p>
                    </div>

                    <div className="space-y-6">
                      {/* Personal Info Summary */}
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <User size={18} className="text-ama-maroon" />
                          Personal Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-slate-500 font-medium">Full Name</p>
                            <p className="text-slate-900 font-semibold">
                              {formData.title} {formData.firstName} {formData.middleName} {formData.lastName}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium">Gender</p>
                            <p className="text-slate-900 font-semibold">{formData.gender}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium">Nationality</p>
                            <p className="text-slate-900 font-semibold">{formData.nationality}</p>
                          </div>
                        </div>
                      </div>

                      {/* Professional Info Summary */}
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Briefcase size={18} className="text-ama-maroon" />
                          Professional Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-slate-500 font-medium">Email</p>
                            <p className="text-slate-900 font-semibold break-all">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium">Organization</p>
                            <p className="text-slate-900 font-semibold">{formData.organization}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium">Position</p>
                            <p className="text-slate-900 font-semibold">{formData.position}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 font-medium">Country of Residence</p>
                            <p className="text-slate-900 font-semibold">{formData.countryOfResidence}</p>
                          </div>
                        </div>
                      </div>

                      {/* Preferences Summary */}
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Event Preferences</h3>
                        <div className="space-y-3 text-sm">
                          {formData.dietaryRestrictions && (
                            <div>
                              <p className="text-slate-500 font-medium">Dietary Restrictions</p>
                              <p className="text-slate-900">{formData.dietaryRestrictions}</p>
                            </div>
                          )}
                          {formData.medicalConditions && (
                            <div>
                              <p className="text-slate-500 font-medium">Medical Conditions</p>
                              <p className="text-slate-900">{formData.medicalConditions}</p>
                            </div>
                          )}
                          {formData.specialRequirements && (
                            <div>
                              <p className="text-slate-500 font-medium">Special Requirements</p>
                              <p className="text-slate-900">{formData.specialRequirements}</p>
                            </div>
                          )}
                          <div className="flex items-center gap-2 pt-2">
                            {formData.photoConsent ? (
                              <CheckCircle size={18} className="text-ama-green" />
                            ) : (
                              <AlertCircle size={18} className="text-slate-400" />
                            )}
                            <span className={formData.photoConsent ? 'text-ama-green font-medium' : 'text-slate-500'}>
                              {formData.photoConsent ? 'Consented to photography' : 'No photo consent provided'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-ama-gold/10 border border-ama-gold/30 p-4 rounded-xl">
                        <p className="text-sm text-slate-700">
                          <strong>Note:</strong> By submitting this form, you confirm that all information provided is accurate and complete. You will receive a confirmation email at <strong>{formData.email}</strong> with further details.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
                      currentStep === 1
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300 hover-lift'
                    }`}
                  >
                    <ChevronLeft size={20} />
                    Previous
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-ama-maroon text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 hover-lift hover-glow transition-all shadow-lg"
                    >
                      Continue
                      <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-ama-green text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 hover-lift hover-glow transition-all shadow-lg"
                    >
                      <Check size={20} />
                      Submit Registration
                    </button>
                  )}
                </div>

                {/* Step Indicator Text */}
                <div className="text-center mt-4">
                  <p className="text-sm text-slate-500">
                    Step {currentStep} of {totalSteps}
                  </p>
                </div>
              </form>
            </div>

            {/* Help Section */}
            <div className="mt-8 text-center">
              <p className="text-slate-600 text-sm">
                Need assistance? Contact us at{' '}
                <a href="mailto:registration@ama.africa" className="text-ama-maroon font-bold hover:underline">
                  registration@ama.africa
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
