// src/app/tentang-kami/page.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function TentangKamiPage() {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0
  });

  useEffect(() => {
    const targets = {
      experience: 10,
      projects: 500,
      clients: 100
    };

    const animateCounter = (key: keyof typeof counters, target: number) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    // Trigger animations with delay
    const timeouts = [
      setTimeout(() => animateCounter('experience', targets.experience), 500),
      setTimeout(() => animateCounter('projects', targets.projects), 700),
      setTimeout(() => animateCounter('clients', targets.clients), 900)
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const values = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Inovasi Berkesinambungan",
      description: "Melakukan inovasi tanpa henti agar setiap mitra memiliki kemampuan untuk berkembang secara optimal."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Orientasi Kemitraan",
      description: "Kami selalu menghargai dan menjaga kepercayaan dalam setiap bentuk kerjasama yang terjalin."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Kualitas & Profesionalisme",
      description: "Dengan tim handal, kami mampu memberikan jasa yang konsisten dan bernilai tambah tinggi."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Keamanan Terjamin",
      description: "Mengutamakan aspek keamanan dalam setiap solusi yang kami berikan untuk menjaga kepercayaan klien."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Respons Cepat",
      description: "Memberikan layanan support yang responsif dan cepat tanggap terhadap setiap kebutuhan klien."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Pertumbuhan Berkelanjutan",
      description: "Berkomitmen untuk terus berkembang dan mengikuti perkembangan teknologi terdepan."
    }
  ];

  const missionPoints = [
    "Memberikan Kualitas Produk dan Layanan IT Services Terbaik.",
    "Memfokuskan layanan di segmen Industri Financial Services, Sektor Government & industri lainnya.",
    "Memasarkan produk hardware dan software dengan dukungan principal sebagai mitra kerja utama.",
    "Melakukan penelitian, pengembangan dan pemasaran software milik sendiri.",
    "Menjalin kerjasama yang berorientasi pada profesionalisme, kemitraan dan komitmen."
  ];

  const advantages = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Implementasi Cepat",
      description: "Tim berpengalaman dengan metodologi yang terbukti untuk implementasi yang efisien dan tepat waktu."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Harga Kompetitif",
      description: "Solusi berkualitas tinggi dengan harga yang kompetitif dan ROI yang optimal untuk bisnis Anda."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Support 24/7",
      description: "Dukungan teknis yang tersedia 24 jam sehari, 7 hari seminggu untuk memastikan kelancaran operasional."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Keamanan Terjamin",
      description: "Standar keamanan tinggi dengan sertifikasi internasional untuk melindungi data dan sistem Anda."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Dokumentasi Lengkap",
      description: "Dokumentasi teknis yang komprehensif dan pelatihan untuk memastikan kemudahan penggunaan."
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Scalable Solutions",
      description: "Solusi yang dapat berkembang seiring pertumbuhan bisnis Anda dengan fleksibilitas tinggi."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/95 to-slate-900"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-red-700/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-300"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-red-600/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-500"></div>
        </div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-red-600/20 border border-red-400/30 rounded-full text-red-200 text-sm font-medium mb-8 backdrop-blur-sm">
              Sejak 2014 - Lebih dari 10 Tahun Pengalaman
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up delay-200">
            Tentang{' '}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Narwastu
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-400">
            Perusahaan IT Solution yang <strong>Inovatif</strong>, <strong>Terdepan</strong>, dan <strong>Terpercaya</strong> 
            <br className="hidden md:block" />
            dalam memberikan solusi teknologi terbaik untuk bisnis Anda.
          </p>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up delay-500">
            <div className="inline-flex flex-col items-center">
              <span className="text-gray-300 text-sm mb-4">Scroll untuk mengetahui lebih lanjut</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-300 rounded-full animate-bounce mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview with Enhanced Layout */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo/Image Section */}
            <div className="relative group animate-fade-in-left">
              <div className="absolute -inset-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <Image 
                  src="/logos/Picture7.png"
                  alt="Logo Narwastu di Halaman Tentang Kami"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 animate-fade-in-right">
              <div>
                {/* <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-6">
                  🏢 Profil Perusahaan
                </span> */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Perjalanan <span className="text-red-600">10+ Tahun</span> Kami
                </h2>
              </div>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong>PT. Narwastu Artha Tama</strong> adalah perusahaan yang bergerak dibidang jasa IT Services yang didirikan pada bulan Juni 2014 oleh praktisi yang ahli dan berpengalaman dalam bidang IT.
                </p>
                <p className="text-lg leading-relaxed">
                  Dengan profesionalisme kerja serta komitmen atas setiap pelayanannya, kami percaya mampu memberikan jasa yang berkualitas, konsisten dan memiliki nilai tambah demi tercapainya tujuan bersama.
                </p>
              </div>

              {/* Animated Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters.experience}+
                  </div>
                  <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters.projects}+
                  </div>
                  <div className="text-gray-600 font-medium">Proyek Selesai</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters.clients}+
                  </div>
                  <div className="text-gray-600 font-medium">Klien Terpusat</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="/kontak"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Mari Berkolaborasi</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Visi &amp; Misi
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Fondasi dan arah tujuan kami dalam memberikan layanan terbaik
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Visi Card */}
            <ScrollReveal delay={0} className="h-full">
              <div className="flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-gray-900/90 border border-gray-800 shadow-xl h-full">
                <div className="flex items-center space-x-4 pb-6 border-b border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Visi Kami</h3>
                </div>

                <div className="my-auto py-10 md:py-14">
                  <blockquote className="border-l-4 border-red-600 pl-6 text-2xl md:text-3xl font-medium text-gray-100 leading-relaxed">
                    &ldquo;Menjadi Perusahaan IT Solution yang <span className="text-red-400 font-semibold">Inovatif</span>, <span className="text-red-400 font-semibold">Terdepan</span> dan <span className="text-red-400 font-semibold">Terpercaya</span>.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-gray-800 flex flex-wrap gap-2.5">
                  <span className="px-3.5 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700/60 text-xs font-medium text-gray-300">
                    Inovatif
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700/60 text-xs font-medium text-gray-300">
                    Terdepan
                  </span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-gray-800/60 border border-gray-700/60 text-xs font-medium text-gray-300">
                    Terpercaya
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Misi Card */}
            <ScrollReveal delay={0.15} className="h-full">
              <div className="flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-gray-900/90 border border-gray-800 shadow-xl h-full">
                <div className="flex items-center space-x-4 pb-6 border-b border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Misi Kami</h3>
                </div>

                <div className="space-y-3.5 pt-6 flex-1 flex flex-col justify-between">
                  {missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-gray-800/40 border border-gray-800/80 flex items-start gap-4 transition-colors hover:border-gray-700"
                    >
                      <span className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Nilai-Nilai <span className="text-red-600">Kami</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Prinsip yang kami junjung tinggi dalam setiap aspek pekerjaan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.08}
                className="h-full"
              >
                <div className="group p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      {value.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-red-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up text-white">
              Siap Memulai <span className="text-amber-300">Proyek</span> Anda?
            </h2>
            <p className="text-xl md:text-2xl text-red-100 mb-12 leading-relaxed animate-fade-in-up delay-200">
              Bergabunglah dengan 100+ klien yang telah mempercayai solusi IT kami. 
              <br className="hidden md:block" />
              Mari wujudkan transformasi digital bisnis Anda bersama tim ahli kami.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up delay-300">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-red-200 text-sm uppercase tracking-wider">Tahun Pengalaman</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-red-200 text-sm uppercase tracking-wider">Proyek Selesai</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-red-200 text-sm uppercase tracking-wider">Klien Terpusat</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-red-200 text-sm uppercase tracking-wider">Support</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
              <a
                href="/kontak"
                className="group inline-flex items-center px-8 py-4 bg-white text-red-800 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Mulai Konsultasi</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/layanan"
                className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-red-800 transition-all duration-300"
              >
                <span>Lihat Layanan Kami</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-xl animate-pulse-slow delay-300"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Mengapa Memilih <span className="text-red-600">Narwastu</span>?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk solusi IT Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((item, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.08}
                className="h-full"
              >
                <div className="group p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      {item.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}