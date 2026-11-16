import type { Metadata } from 'next';
import TentangKamiPage from './page';

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "PT. Narwastu Artha Tama - Perusahaan IT Solution yang Inovatif, Terdepan dan Terpercaya sejak 2014. Pelajari visi, misi, dan nilai-nilai perusahaan kami.",
  keywords: ["Tentang Narwastu", "Profil Perusahaan", "Visi Misi", "IT Company", "Sejarah Perusahaan", "Narwastu Artha Tama"],
  alternates: {
    canonical: 'https://narwastuarthatama.com/tentang-kami',
  },
  openGraph: {
    title: "Tentang Kami | PT. Narwastu Artha Tama",
    description: "Mengenal lebih dekat PT. Narwastu Artha Tama - perusahaan IT solution dengan 10+ tahun pengalaman, 500+ proyek selesai, dan 100+ klien puas.",
    url: "https://narwastuarthatama.com/tentang-kami",
    type: "website",
  },
};

export default function Layout() {
  return <TentangKamiPage />;
}
