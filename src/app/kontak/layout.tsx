import type { Metadata } from 'next';
import KontakPage from './page';

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Hubungi PT. Narwastu Artha Tama untuk konsultasi IT. Kantor di Jakarta Selatan dan Bekasi. Telepon: +62 896-0602-5227, Email: info@narwastuarthatama.com",
  keywords: ["Kontak", "Hubungi Kami", "Konsultasi IT", "Alamat Kantor", "Telepon", "Email", "Narwastu"],
  alternates: {
    canonical: 'https://narwastuarthatama.com/kontak',
  },
  openGraph: {
    title: "Hubungi Kami | PT. Narwastu Artha Tama",
    description: "Siap membantu mewujudkan visi digital Anda. Hubungi kami untuk konsultasi gratis tentang solusi IT terbaik untuk bisnis Anda.",
    url: "https://narwastuarthatama.com/kontak",
    type: "website",
  },
};

export default function Layout() {
  return <KontakPage />;
}
