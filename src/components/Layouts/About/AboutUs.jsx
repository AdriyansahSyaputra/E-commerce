import React from "react";
import {
  Users,
  Target,
  Trophy,
  Clock,
  Building2,
  Globe2,
  Heart,
  Star,
  Award,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Parallax Effect */}
      {/* <section className="relative py-32 overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
              Mengubah Cara Indonesia Berbelanja Online
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Kami memadukan inovasi teknologi dengan pemahaman mendalam tentang
              kebutuhan konsumen Indonesia untuk menciptakan pengalaman
              e-commerce yang tak tertandingi.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-opacity-90 transition">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Values Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Nilai-Nilai Utama Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Kepuasan Pelanggan",
                desc: "Mengutamakan kebutuhan dan kepuasan pelanggan dalam setiap aspek layanan kami",
              },
              {
                icon: CheckCircle,
                title: "Kualitas Terbaik",
                desc: "Memastikan standar kualitas tertinggi dalam produk dan layanan",
              },
              {
                icon: Award,
                title: "Inovasi Berkelanjutan",
                desc: "Terus berinovasi untuk menghadirkan solusi terbaik bagi pengguna",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 hover:bg-gray-50 rounded-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-6">
                  <value.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Vision Mission Section with Modern Design */}
      {/* <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform rotate-1 opacity-10"></div>
              <div className="relative p-8 bg-white rounded-3xl shadow-lg">
                <Target className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Visi Kami
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi platform e-commerce terkemuka di Asia Tenggara yang
                  menghadirkan revolusi dalam cara masyarakat berbelanja dan
                  berbisnis online, dengan fokus pada inovasi teknologi dan
                  pemberdayaan UMKM.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform -rotate-1 opacity-10"></div>
              <div className="relative p-8 bg-white rounded-3xl shadow-lg">
                <Building2 className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Misi Kami
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Membangun ekosistem digital yang inklusif dan berkelanjutan
                  dengan:
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
                      <span>Menghadirkan solusi teknologi terdepan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
                      <span>Memberdayakan UMKM Indonesia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
                      <span>Menciptakan lapangan kerja berkualitas</span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Tim Kepemimpinan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Ahmad Wijaya",
                position: "Chief Executive Officer",
                image: "/api/placeholder/400/400",
              },
              {
                name: "Sarah Chen",
                position: "Chief Technology Officer",
                image: "/api/placeholder/400/400",
              },
              {
                name: "Budi Santoso",
                position: "Chief Operating Officer",
                image: "/api/placeholder/400/400",
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-indigo-600 rounded-xl transform group-hover:rotate-6 transition-all duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative rounded-xl w-full object-cover aspect-square"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline Section with Modern Design */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Perjalanan Kami
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2020",
                title: "Awal Mula",
                desc: "Berdirinya perusahaan dengan fokus pada marketplace lokal",
              },
              {
                year: "2021",
                title: "Pertumbuhan Pesat",
                desc: "Mencapai 500,000 pengguna aktif dan peluncuran mobile app",
              },
              {
                year: "2022",
                title: "Ekspansi Nasional",
                desc: "Memperluas jangkauan ke seluruh Indonesia",
              },
              {
                year: "2023",
                title: "Inovasi Teknologi",
                desc: "Implementasi AI untuk personalisasi pengalaman berbelanja",
              },
              {
                year: "2024",
                title: "Pencapaian Besar",
                desc: "Mencapai 1 juta pengguna aktif dan pembukaan pusat distribusi baru",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-indigo-200 last:border-0"
              >
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600"></div>
                <div className="transform hover:-translate-x-2 transition-all duration-300">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold text-indigo-600 mb-2">
                      {milestone.year}
                    </h4>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h5>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Hubungi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { icon: Mail, info: "hello@ecommerce.id", label: "Email" },
              { icon: Phone, info: "(021) 1234-5678", label: "Telepon" },
              { icon: MapPin, info: "Jakarta, Indonesia", label: "Lokasi" },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-4">
                  <contact.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.label}
                </h3>
                <p className="text-gray-600">{contact.info}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-indigo-100 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-gray-600 hover:text-indigo-600" />
              </a>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
