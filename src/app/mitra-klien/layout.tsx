import type { Metadata } from 'next';
import MitraKlienPage from './page';

export const metadata: Metadata = {
  title: "Mitra & Klien",
  description: "Mitra teknologi dan klien PT. Narwastu Artha Tama. Bekerja sama dengan Peplink, Maipu, dan melayani Alfamart, Bank Syariah Indonesia, Jakpro, dan lainnya.",
  keywords: ["Mitra Teknologi", "Klien", "Partner", "Peplink", "Maipu", "Alfamart", "BSI", "Jakpro", "Narwastu"],
  alternates: {
    canonical: 'https://narwastuarthatama.com/mitra-klien',
  },
  openGraph: {
    title: "Mitra & Klien Kami | PT. Narwastu Artha Tama",
    description: "Dipercaya oleh 100+ klien dari berbagai industri. Kolaborasi dengan pemimpin teknologi global untuk menghadirkan solusi inovatif.",
    url: "https://narwastuarthatama.com/mitra-klien",
    type: "website",
  },
};

export default function Layout() {
  return <MitraKlienPage />;
}
