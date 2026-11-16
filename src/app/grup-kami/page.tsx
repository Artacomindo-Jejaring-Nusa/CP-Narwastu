import Image from 'next/image';
import type { Metadata } from 'next';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: "Grup Perusahaan",
  description: "Grup perusahaan PT. Narwastu Artha Tama: PT. Artacomindo Jejaring Nusa dan PT. Artacomindotama. Sinergi kekuatan untuk layanan yang lebih luas dan terintegrasi.",
  keywords: ["Grup Perusahaan", "Anak Perusahaan", "Artacomindo", "Artacomindotama", "VSAT", "ICT", "Narwastu Group"],
  alternates: {
    canonical: 'https://narwastuarthatama.com/grup-kami',
  },
  openGraph: {
    title: "Grup Perusahaan | PT. Narwastu Artha Tama",
    description: "Mengenal dua pilar utama grup Narwastu: PT. Artacomindo Jejaring Nusa (VSAT & Internet) dan PT. Artacomindotama (ICT Services).",
    url: "https://narwastuarthatama.com/grup-kami",
    type: "website",
  },
};

export default function GrupKamiPage() {
  const companies = [
    {
      name: "PT. Artacomindo Jejaring Nusa",
      founded: "05 Desember 2014",
      logo: "/logos/ARTACOM-LOGO.png",
      logoAlt: "Logo PT. Artacomindo Jejaring Nusa",
      businessField: "Jasa Layanan VSAT dan Internet dengan Izin Jaringan Tetap Tertutup (JarTapTup) dari Kominfo",
      ownership: "89% Saham perusahaan dimiliki oleh PT. Narwastu Artha Tama",
      mainClients: "Jaringan Retail Modern AlfaMart se-Indonesia, BAKTI",
      isLandscape: true,
    },
    {
      name: "PT. Artacomindotama",
      founded: "14 Mei 2012",
      logo: "/logos/ARTACOMINDOTAMA-LOGO.png",
      logoAlt: "Logo PT. Artacomindotama",
      businessField: "ICT (Information, Communication and Technology)",
      ownership: "90% Saham perusahaan dimiliki oleh PT. Narwastu Artha Tama",
      mainClients: "Bank Syariah Indonesia",
      isLandscape: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-red-900/95 to-slate-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
            Grup Perusahaan Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sinergi kekuatan untuk memberikan layanan yang lebih luas dan terintegrasi
          </p>
        </div>
      </section>

      {/* Company Cards Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Anak Perusahaan
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Dua pilar utama yang mendukung ekosistem teknologi informasi dan komunikasi
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {companies.map((company, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.12}
                className="h-full"
              >
                <div className="group p-8 md:p-10 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    {/* Equalized Logo Stage with Custom Balance */}
                    <div className="w-full h-32 flex items-center justify-center p-6 bg-gray-50/80 rounded-xl border border-gray-100 mb-8">
                      {company.isLandscape ? (
                        <div className="relative w-48 h-14">
                          <Image
                            src={company.logo}
                            alt={company.logoAlt}
                            fill
                            sizes="192px"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="relative w-32 h-20">
                          <Image
                            src={company.logo}
                            alt={company.logoAlt}
                            fill
                            sizes="128px"
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>

                    {/* Company Info */}
                    <div className="text-center mb-8 pb-6 border-b border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                        {company.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        Didirikan {company.founded}
                      </p>
                    </div>

                    {/* Company Details (Clean, Unified, Anti-Slop) */}
                    <div className="space-y-3.5">
                      {/* Bidang Usaha */}
                      <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                          Bidang Usaha
                        </span>
                        <p className="text-sm font-medium text-gray-800 leading-relaxed">
                          {company.businessField}
                        </p>
                      </div>

                      {/* Kepemilikan Saham */}
                      <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                          Kepemilikan Saham
                        </span>
                        <p className="text-sm font-medium text-gray-800 leading-relaxed">
                          {company.ownership}
                        </p>
                      </div>

                      {/* Pelanggan Utama */}
                      <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                          Pelanggan Utama
                        </span>
                        <p className="text-sm font-medium text-gray-800 leading-relaxed">
                          {company.mainClients}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">2</div>
              <p className="text-sm uppercase tracking-wider text-red-200">Anak Perusahaan</p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">10+</div>
              <p className="text-sm uppercase tracking-wider text-red-200">Tahun Pengalaman</p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">1000+</div>
              <p className="text-sm uppercase tracking-wider text-red-200">Klien Terlayani</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
