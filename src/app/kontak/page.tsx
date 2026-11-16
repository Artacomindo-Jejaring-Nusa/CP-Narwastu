// src/app/kontak/page.tsx
'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactCards = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Head Office",
      content: (
        <p className="text-gray-600 text-sm leading-relaxed">
          Eighty Eight@Kasablanka Office Tower, Lantai 36 Unit A-D, Jl. Casablanca Kav. 88, Jakarta Selatan, 12870
        </p>
      ),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Operational Office",
      content: (
        <p className="text-gray-600 text-sm leading-relaxed">
          Perkantoran Grand Prima Bintara No. 8, Jalan Terusan I Gusti Ngurah Rai, Kel. Bintara, Kec. Bekasi Barat 17134
        </p>
      ),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Kontak Langsung",
      content: (
        <div className="space-y-1.5 text-sm">
          <p>
            <a href="tel:02189452514" className="text-red-600 hover:text-red-700 font-medium">
              +62 896-0602-5227
            </a>
          </p>
          <p>
            <a href="mailto:info@narwastuarthatama.com" className="text-gray-600 hover:text-red-600 transition-colors">
              info@narwastuarthatama.com
            </a>
          </p>
          <p>
            <a href="mailto:etang.agung@narwastuarthatama.com" className="text-gray-600 hover:text-red-600 transition-colors break-all">
              etang.agung@narwastuarthatama.com
            </a>
          </p>
        </div>
      ),
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Jam Operasional",
      content: (
        <div className="space-y-1 text-sm text-gray-600">
          <p className="font-medium text-gray-800">Setiap Hari: 09:00 - 18:00 WIB</p>
          <p className="text-red-600 font-medium text-xs">Layanan 24 jam untuk darurat</p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/90 to-slate-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hubungi <span className="text-amber-300">Kami</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Siap membantu mewujudkan visi digital Anda. Mari berkolaborasi menciptakan solusi IT terdepan.
          </p>
          <div>
            <a
              href="#contact-form"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-red-900 font-semibold text-sm rounded-lg transition-colors shadow-sm"
            >
              <span>Mulai Konsultasi</span>
              <svg className="ml-2 w-4 h-4 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Informasi Kontak
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Berbagai cara untuk terhubung dengan tim kami
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactCards.map((card, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.08}
                className="h-full"
              >
                <div className="group p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-red-600 transition-colors">
                      {card.title}
                    </h3>
                    {card.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Mari Berkolaborasi
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Ceritakan proyek Anda, dan mari kita wujudkan bersama
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200/80 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors text-sm text-gray-900 bg-white"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors text-sm text-gray-900 bg-white"
                        placeholder="email@perusahaan.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors text-sm text-gray-900 bg-white"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors text-sm text-gray-900 bg-white"
                        placeholder="PT. Nama Perusahaan"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Topik Konsultasi <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors text-sm text-gray-900 bg-white"
                    >
                      <option value="">Pilih topik konsultasi</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="system-integration">System Integration</option>
                      <option value="cloud-solution">Cloud Solutions</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan Anda <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors text-sm text-gray-900 bg-white resize-none"
                      placeholder="Ceritakan tentang proyek atau kebutuhan IT Anda..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <span>Kirim Pesan</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Lokasi Kantor
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Kunjungi kantor kami untuk berdiskusi langsung
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm bg-white">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.195655787602!2d106.9405623!3d-6.2377317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d0365112027%3A0x6d8c8d5622039642!2sJl.%20Grand%20Prima%20Bintara%20Blok%20A1%20No.8%2C%20Bintara%2C%20Kec.%20Bekasi%20Bar.%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017134!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor PT. Narwastu Artha Tama"
                />
              </div>

              {/* Map Overlay Card */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-200/80 shadow-sm max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center text-white shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Operational Office</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mt-0.5">
                      Perkantoran Grand Prima Bintara No. 8, Bekasi Barat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Butuh Bantuan Segera?
            </h2>
            <p className="text-red-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Tim ahli kami siap membantu Anda 24/7 untuk kebutuhan darurat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:02189452514"
                className="inline-flex items-center px-6 py-3.5 bg-white text-red-700 font-semibold text-sm rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Telepon Sekarang
              </a>
              <a
                href="mailto:info@narwastuarthatama.com"
                className="inline-flex items-center px-6 py-3.5 bg-transparent border border-white text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
