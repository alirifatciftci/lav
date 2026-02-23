import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProjectData {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  scope: string;
  description: string;
  details: string[];
  images: string[];
  units?: string;
  status?: string;
  client?: string;
}

const projectsData: Record<string, ProjectData> = {
  'marin-loft': {
    id: 1,
    title: 'Marin Loft',
    location: 'Kartal, İstanbul',
    year: '2025',
    category: 'Konut',
    scope: 'Mimari Proje, Ruhsat',
    description: 'Marin Loft, modern mimari anlayışı ve fonksiyonel yaşam alanlarını bir araya getiren prestijli bir konut projesidir. Kartal\'ın gelişen bölgesinde konumlanan proje, deniz manzarası ve şehir yaşamının avantajlarını bir arada sunmaktadır.',
    details: [
      'Modern ve estetik mimari tasarım',
      'Geniş balkonlar ve teraslar',
      'Sosyal yaşam alanları',
      'Kapalı otopark',
      'Güvenlik sistemleri',
      'Peyzaj düzenlemesi'
    ],
    images: [
      '/assets/marin/marinloft1.png',
      '/assets/marin/marinloft2.png',
      '/assets/marin/marinloft3.png',
      '/assets/marin/marinloft4.png',
      '/assets/marin/marinloft5.png',
      '/assets/marin/marinloft6.png',
      '/assets/marin/marinloft7.png'
    ],
    units: '120 Konut',
    status: 'Proje Aşamasında'
  },
  'hatay-koy-evleri': {
    id: 2,
    title: 'Hatay Köy Evleri',
    location: 'Kumlu, Hatay',
    year: '2025',
    category: 'Kamu',
    scope: '299 Adet Köy Evi - Anahtar Teslim',
    description: 'Hatay deprem bölgesinde 299 adet köy evinin tasarım ve inşaatını kapsayan sosyal sorumluluk projesidir. Geleneksel mimari dokuya uygun, depreme dayanıklı ve modern yaşam standartlarını karşılayan köy evleri tasarlanmıştır.',
    details: [
      'Depreme dayanıklı yapı sistemi',
      'Geleneksel mimari dokuya uygun tasarım',
      'Anahtar teslim uygulama',
      'Hızlı inşaat süreci',
      'Enerji verimli yapı',
      'Yerel malzeme kullanımı'
    ],
    images: [
      '/assets/hatay kumlu/hatay1.png',
      '/assets/hatay kumlu/hatay2.png',
      '/assets/hatay kumlu/hatay3.png',
      '/assets/hatay kumlu/hatay4.png',
      '/assets/hatay kumlu/hatay5.png',
      '/assets/hatay kumlu/hatay6.png',
      '/assets/hatay kumlu/hatay7.png',
      '/assets/hatay kumlu/hatay8.png',
      '/assets/hatay kumlu/hatay9.png'
    ],
    units: '299 Konut',
    status: 'Yapım Aşamasında'
  },
  'imga-portall': {
    id: 3,
    title: 'İmga Portall',
    location: 'Pendik, İstanbul',
    year: '2024',
    category: 'Ticari',
    scope: 'Otel & Ofis Danışmanlığı',
    description: 'Karma kullanımlı ticari proje olarak tasarlanan İmga Portall, otel ve ofis fonksiyonlarını bir arada barındırmaktadır. Modern iş merkezi konsepti ile Pendik\'in prestijli projelerinden biri olarak öne çıkmaktadır.',
    details: [
      'Otel ve ofis karma kullanım',
      'Modern iş merkezi konsepti',
      'Konferans salonları',
      'Restoran ve cafe alanları',
      'Kapalı otopark',
      'Güvenlik sistemleri',
      'Peyzaj düzenlemesi'
    ],
    images: [
      '/assets/imga/imga1.png',
      '/assets/imga/imga2.png',
      '/assets/imga/imga3.png',
      '/assets/imga/imga4.png',
      '/assets/imga/imga5.png',
      '/assets/imga/imga6.png',
      '/assets/imga/imga7.png',
      '/assets/imga/imga8.png'
    ],
    status: 'Tamamlandı'
  },
  'dky-business-ofis': {
    id: 4,
    title: 'DKY Business Ofis',
    location: 'Kartal, İstanbul',
    year: '2024',
    category: 'Ofis',
    scope: 'Tasarım ve Uygulama',
    description: 'DKY Business Ofis, modern iş yaşamının gereksinimlerini karşılayan, estetik ve fonksiyonel ofis tasarımı projesidir. Kartal\'da konumlanan proje, çalışma alanlarına yeni bir soluk getirmektedir.',
    details: [
      'Modern ofis tasarımı',
      'Ergonomik çalışma alanları',
      'Toplantı odaları',
      'Sosyal alanlar',
      'Akıllı bina sistemleri',
      'Enerji verimliliği'
    ],
    images: [
      '/assets/dky/dky1.jpeg',
      '/assets/dky/dky2.png',
      '/assets/dky/dky3.png',
      '/assets/dky/dky4.png',
      '/assets/dky/dky5.png',
      '/assets/dky/dky6.png'
    ],
    status: 'Tamamlandı'
  },
  'white-residence': {
    id: 5,
    title: 'White Residence',
    location: 'Kartal, İstanbul',
    year: '2023',
    category: 'Konut',
    scope: 'Mimari Proje',
    description: 'White Residence, minimalist ve modern mimari anlayışıyla öne çıkan bir konut projesidir. Beyaz tonların hakimiyetindeki tasarım, ferah ve aydınlık yaşam alanları sunmaktadır.',
    details: [
      'Minimalist mimari tasarım',
      'Geniş balkonlar',
      'Modern yaşam alanları',
      'Kapalı otopark',
      'Güvenlik sistemleri',
      'Peyzaj düzenlemesi'
    ],
    images: [
      '/assets/white/white1.png',
      '/assets/white/white2.png',
      '/assets/white/white3.png',
      '/assets/white/white4.png'
    ],
    units: '48 Konut',
    status: 'Tamamlandı'
  },
  'sipahi-konutlari': {
    id: 6,
    title: 'Sipahi Konutları',
    location: 'Kuşadası, Aydın',
    year: '2023',
    category: 'Konut',
    scope: 'Tasarım ve Uygulama',
    description: 'Sipahi Konutları, Kuşadası\'nın eşsiz doğal güzellikleri içinde konumlanan, deniz manzaralı lüks bir konut projesidir. Modern mimari ve konforlu yaşam alanları ile tatil ve yaşam konseptini bir araya getirmektedir.',
    details: [
      'Deniz manzaralı konumlar',
      'Modern mimari tasarım',
      'Geniş teraslar ve balkonlar',
      'Yüzme havuzu',
      'Peyzaj düzenlemesi',
      'Güvenlik sistemleri',
      'Kapalı otopark'
    ],
    images: [
      '/assets/sipahi/sipahi1.png',
      '/assets/sipahi/sipahi2.png',
      '/assets/sipahi/sipahi3.png'
    ],
    units: '36 Konut',
    status: 'Tamamlandı'
  },
  'mehmet-ozhasar-evi': {
    id: 7,
    title: 'Mehmet Özhasar Evi',
    location: 'Pütürge, Malatya',
    year: '2023',
    category: 'Villa',
    scope: 'Tasarım ve Danışmanlık',
    description: 'Mehmet Özhasar Evi, Malatya\'nın Pütürge ilçesinde konumlanan, yerel mimari dokuya saygılı, modern yaşam standartlarını karşılayan bir villa projesidir. Doğal malzemeler ve çağdaş tasarım anlayışı bir araya getirilmiştir.',
    details: [
      'Yerel mimari dokuya uygun tasarım',
      'Doğal malzeme kullanımı',
      'Modern yaşam alanları',
      'Geniş bahçe düzenlemesi',
      'Enerji verimliliği',
      'Manzara odaklı tasarım'
    ],
    images: [
      '/assets/ozhasar/oz1.png',
      '/assets/ozhasar/oz2.png',
      '/assets/ozhasar/oz3.png'
    ],
    status: 'Tamamlandı'
  },
  'murat-aydin-villasi': {
    id: 8,
    title: 'Murat Aydın Villası',
    location: 'Bodrum, Muğla',
    year: '2022',
    category: 'Villa',
    scope: 'Tasarım ve Taahhüt',
    description: 'Murat Aydın Villası, Bodrum\'un eşsiz manzarasına sahip, lüks ve modern bir villa projesidir. Deniz manzarası, infinity havuz ve geniş yaşam alanlarıyla Bodrum\'un prestijli villalarından biridir.',
    details: [
      'Deniz manzaralı konum',
      'Infinity havuz',
      'Modern lüks tasarım',
      'Geniş teraslar',
      'Peyzaj düzenlemesi',
      'Akıllı ev sistemleri',
      'Özel plaj erişimi'
    ],
    images: [
      '/assets/murat/gorsel-1.jpg',
      '/assets/murat/gorsel-2.jpg',
      '/assets/murat/gorsel-3.jpg',
      '/assets/murat/gorsel-4.jpg',
      '/assets/murat/gorsel-5.jpg',
      '/assets/murat/gorsel-6.jpg',
      '/assets/murat/gorsel-7.jpg',
      '/assets/murat/gorsel-8.jpg',
      '/assets/murat/gorsel-9.jpg',
      '/assets/murat/gorsel-12.jpg'
    ],
    status: 'Tamamlandı'
  },
  'onur-sertkaya-villasi': {
    id: 9,
    title: 'Onur Sertkaya Villası',
    location: 'Söke, Aydın',
    year: '2022',
    category: 'Villa',
    scope: 'Tasarım ve Proje',
    description: 'Onur Sertkaya Villası, Aydın\'ın Söke ilçesinde konumlanan, modern mimari çizgilere sahip lüks bir villa projesidir. Geniş yaşam alanları ve doğayla iç içe tasarımıyla öne çıkmaktadır.',
    details: [
      'Modern villa tasarımı',
      'Geniş yaşam alanları',
      'Özel havuz',
      'Bahçe düzenlemesi',
      'Panoramik pencereler',
      'Akıllı ev sistemleri'
    ],
    images: [
      '/assets/onur/gorsel-1.jpg',
      '/assets/onur/gorsel-2.jpg',
      '/assets/onur/gorsel-3.jpg',
      '/assets/onur/gorsel-4.jpg',
      '/assets/onur/gorsel-5.jpg',
      '/assets/onur/gorsel-6.jpg',
      '/assets/onur/gorsel-7.jpg',
      '/assets/onur/gorsel-8.jpg'
    ],
    status: 'Tamamlandı'
  },
  'kentsel-donusum-kusadasi': {
    id: 10,
    title: 'Kentsel Dönüşüm 130 Konut',
    location: 'Kuşadası, Aydın',
    year: '2021',
    category: 'Konut',
    scope: 'Kentsel Dönüşüm Projesi',
    description: 'Kuşadası\'nda gerçekleştirilen 130 konutluk kentsel dönüşüm projesi, modern yaşam standartlarını ve depreme dayanıklı yapı sistemlerini bir araya getirmektedir. Bölgenin kentsel dokusuna uygun, çağdaş bir konut projesidir.',
    details: [
      'Kentsel dönüşüm projesi',
      'Depreme dayanıklı yapı',
      'Modern konut tasarımı',
      'Sosyal yaşam alanları',
      'Kapalı otopark',
      'Güvenlik sistemleri',
      'Peyzaj düzenlemesi'
    ],
    images: [
      '/assets/kent/gorsel-1.jpg',
      '/assets/kent/gorsel-2.jpg',
      '/assets/kent/gorsel-3.jpg',
      '/assets/kent/gorsel-4.jpg',
      '/assets/kent/gorsel-5.jpg',
      '/assets/kent/gorsel-6.jpg',
      '/assets/kent/gorsel-7.jpg',
      '/assets/kent/gorsel-8.jpg',
      '/assets/kent/gorsel-9.jpg',
      '/assets/kent/gorsel-10.jpg',
      '/assets/kent/gorsel-11.jpg',
      '/assets/kent/gorsel-12.jpg',
      '/assets/kent/gorsel-13.jpg'
    ],
    units: '130 Konut',
    status: 'Tamamlandı'
  },
  'dogal-yasam-villalari': {
    id: 11,
    title: 'Doğal Yaşam Villaları',
    location: 'Çiftlikköy, Yalova',
    year: '2021',
    category: 'Villa',
    scope: 'Tasarım ve Proje',
    description: 'Doğal Yaşam Villaları, Yalova\'nın Çiftlikköy ilçesinde doğayla iç içe, sürdürülebilir yaşam konseptiyle tasarlanmış villa projesidir. Yeşil alanlar, organik bahçeler ve modern yaşam standartlarını bir araya getirmektedir.',
    details: [
      'Doğayla iç içe tasarım',
      'Sürdürülebilir mimari',
      'Organik bahçe alanları',
      'Enerji verimli yapı',
      'Geniş yaşam alanları',
      'Modern villa konsepti',
      'Peyzaj düzenlemesi'
    ],
    images: [
      '/assets/dogal/gorsel-1.jpg',
      '/assets/dogal/gorsel-2.jpg',
      '/assets/dogal/gorsel-3.jpg',
      '/assets/dogal/gorsel-4.jpg',
      '/assets/dogal/gorsel-5.jpg',
      '/assets/dogal/gorsel-6.jpg',
      '/assets/dogal/gorsel-7.jpg',
      '/assets/dogal/gorsel-8.jpg',
      '/assets/dogal/gorsel-9.jpg',
      '/assets/dogal/gorsel-10.jpg',
      '/assets/dogal/gorsel-11.jpg',
      '/assets/dogal/gorsel-12.jpg'
    ],
    units: '12 Villa',
    status: 'Tamamlandı'
  },
  'cinar-villasi': {
    id: 12,
    title: 'Çınar Villası',
    location: 'Bodrum, Muğla',
    year: '2021',
    category: 'Villa',
    scope: 'Tasarım ve Proje',
    description: 'Çınar Villası, Bodrum\'da konumlanan modern ve lüks bir villa projesidir. Akdeniz mimarisinden esinlenen tasarım, geniş yaşam alanları ve deniz manzarasıyla öne çıkmaktadır.',
    details: [
      'Modern villa tasarımı',
      'Akdeniz mimarisi',
      'Geniş yaşam alanları',
      'Deniz manzarası',
      'Özel havuz',
      'Peyzaj düzenlemesi',
      'Lüks iç mekan tasarımı'
    ],
    images: [
      '/assets/cınar/1.jpg',
      '/assets/cınar/2.jpg',
      '/assets/cınar/3.jpg',
      '/assets/cınar/4.jpg',
      '/assets/cınar/5.jpg',
      '/assets/cınar/6.jpg',
      '/assets/cınar/7.jpg',
      '/assets/cınar/8.jpg',
      '/assets/cınar/9.jpg'
    ],
    status: 'Tamamlandı'
  },
  'ofis-ic-dizayn-tuzla': {
    id: 12,
    title: 'Ofis İç Dizayn Proje ve Uygulama',
    location: 'Tuzla, İstanbul',
    year: '2021',
    category: 'Ofis',
    scope: 'İç Dizayn ve Uygulama',
    description: 'Tuzla\'da konumlanan ofis iç dizayn projesi, modern çalışma alanları ve fonksiyonel tasarım anlayışıyla öne çıkmaktadır. Ergonomik çalışma alanları, toplantı odaları ve sosyal alanlarla verimli bir iş ortamı yaratılmıştır.',
    details: [
      'Modern ofis iç dizaynı',
      'Ergonomik çalışma alanları',
      'Toplantı ve konferans odaları',
      'Sosyal alanlar ve dinlenme bölümleri',
      'Akıllı aydınlatma sistemleri',
      'Akustik çözümler',
      'Özel mobilya tasarımı'
    ],
    images: [
      '/assets/ofis/ofis5.png',
      '/assets/ofis/ofis.png',
      '/assets/ofis/ofis2.png',
      '/assets/ofis/ofis3.png',
      '/assets/ofis/ofis4.png',
      '/assets/ofis/ofis6.png',
      '/assets/ofis/ofis7.png'
    ],
    status: 'Tamamlandı'
  },
  'ilker-talu-villasi': {
    id: 13,
    title: 'İlker Talu Villası',
    location: 'Foça, İzmir',
    year: '2021',
    category: 'Villa',
    scope: 'Tasarım ve Danışmanlık',
    description: 'İlker Talu Villası, İzmir\'in Foça ilçesinde deniz manzaralı, modern ve lüks bir villa projesidir. Akdeniz mimarisinden esinlenen tasarım, geniş teraslar ve açık yaşam alanlarıyla öne çıkmaktadır.',
    details: [
      'Deniz manzaralı konum',
      'Akdeniz mimarisi',
      'Geniş teraslar',
      'Açık yaşam alanları',
      'Özel havuz',
      'Peyzaj düzenlemesi',
      'Modern villa tasarımı'
    ],
    images: [
      '/assets/ilker/ilk1.png',
      '/assets/ilker/ilk2.png',
      '/assets/ilker/ilk3.png'
    ],
    status: 'Tamamlandı'
  },
  'villa-ic-dizayn-yalikavak': {
    id: 14,
    title: 'Villa İç Dizayn Yenileme',
    location: 'Yalıkavak, Bodrum',
    year: '2020',
    category: 'Villa',
    scope: 'İç Dizayn Yenileme',
    description: 'Bodrum Yalıkavak\'ta konumlanan villa iç dizayn yenileme projesi, modern ve lüks bir yaşam alanı yaratmak için gerçekleştirilmiştir. Akdeniz estetiği ile çağdaş tasarım anlayışı bir araya getirilmiştir.',
    details: [
      'Komple iç dizayn yenileme',
      'Modern ve lüks tasarım',
      'Özel mobilya tasarımı',
      'Akdeniz estetiği',
      'Yüksek kalite malzeme kullanımı',
      'Aydınlatma tasarımı',
      'Dekorasyon danışmanlığı'
    ],
    images: [
      '/assets/villa/vil1.png',
      '/assets/villa/vil2.png',
      '/assets/villa/vil3.png'
    ],
    status: 'Tamamlandı'
  },
  'mall-of-felluce': {
    id: 15,
    title: 'Mall of Felluce',
    location: 'Felluce, Irak',
    year: '2019',
    category: 'Ticari',
    client: 'İkon Tasarım',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Danışmanlık',
    description: 'Mall of Felluce, Irak\'ın Felluce şehrinde İkon Tasarım için gerçekleştirilen modern bir alışveriş merkezi projesidir. Tasarım ve proje aşamasından uygulama detay çizimlerine ve danışmanlık hizmetine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Uygulama Detay Çizimleri',
      'Danışmanlık',
      'Modern AVM tasarımı',
      'Geniş alışveriş alanları',
      'Restoran ve eğlence bölümleri',
      'Kapalı otopark'
    ],
    images: [
      '/assets/felluce/fel1.png',
      '/assets/felluce/fel2.png',
      '/assets/felluce/fel3.png'
    ],
    status: 'Tamamlandı'
  },
  'aydin-dogan-evi': {
    id: 16,
    title: 'Aydın Doğan Evi',
    location: 'Erzincan',
    year: '2020',
    category: 'Villa',
    client: 'Aydın Doğan',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Taahhüt',
    description: 'Aydın Doğan Evi, Erzincan\'da Aydın Doğan için gerçekleştirilen bir konut projesidir. Tasarım ve proje aşamasından uygulama detay çizimlerine ve taahhüt sürecine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Uygulama Detay Çizimleri',
      'Taahhüt',
      'Modern yaşam alanları',
      'Yerel mimari dokuya uygun tasarım',
      'Doğal malzeme kullanımı',
      'Bahçe düzenlemesi'
    ],
    images: [
      '/assets/aydindogan/görsel-1.jpg',
      '/assets/aydindogan/görsel-2.jpg',
      '/assets/aydindogan/görsel-3.jpg',
      '/assets/aydindogan/görsel-4.jpg',
      '/assets/aydindogan/görsel-5.jpg',
      '/assets/aydindogan/görsel-6.jpg',
      '/assets/aydindogan/görsel-7.jpg',
      '/assets/aydindogan/görsel-8.jpg',
      '/assets/aydindogan/görsel-9.jpg',
      '/assets/aydindogan/görsel-10.jpg',
      '/assets/aydindogan/görsel-11.jpg',
      '/assets/aydindogan/görsel-12.jpg',
      '/assets/aydindogan/görsel-13.jpg',
      '/assets/aydindogan/görsel-14.jpg',
      '/assets/aydindogan/görsel-15.jpg',
      '/assets/aydindogan/görsel-16.jpg',
      '/assets/aydindogan/görsel-17.jpg',
      '/assets/aydindogan/görsel-18.jpg',
      '/assets/aydindogan/görsel-19.jpg',
      '/assets/aydindogan/görsel-20.jpg'
    ],
    status: 'Tamamlandı'
  },
  'alisveris-merkezi-felluce': {
    id: 17,
    title: 'Alışveriş Merkezi',
    location: 'Felluce, Irak',
    year: '2019',
    category: 'Ticari',
    client: 'İkon Tasarım',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Danışmanlık',
    description: 'Felluce Alışveriş Merkezi, Irak\'ın Felluce şehrinde İkon Tasarım için gerçekleştirilen modern bir ticari merkez projesidir. Tasarım ve proje aşamasından uygulama detay çizimlerine ve danışmanlık hizmetine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Uygulama Detay Çizimleri',
      'Danışmanlık',
      'Modern AVM tasarımı',
      'Çok katlı alışveriş alanları',
      'Restoran ve cafe bölümleri',
      'Kapalı otopark'
    ],
    images: [
      '/assets/felluce2/GÖR-1.jpg',
      '/assets/felluce2/GÖR2.jpg',
      '/assets/felluce2/GÖR5.jpg',
      '/assets/felluce2/GÖR7.jpg',
      '/assets/felluce2/GÖRSEL-3.jpg',
      '/assets/felluce2/GÖRSEL-4.jpg',
      '/assets/felluce2/GÖRSEL-6.jpg',
      '/assets/felluce2/GÖRSEL-8.jpg'
    ],
    status: 'Tamamlandı'
  },
  'kartal-residence': {
    id: 20,
    title: 'Kartal Residence',
    location: 'Kartal, İstanbul',
    year: '2024',
    category: 'Konut',
    scope: 'Mimari Proje, İç Mimari Tasarım',
    description: 'Kartal Residence, modern yaşam alanları ve estetik tasarım anlayışıyla öne çıkan prestijli bir konut projesidir. İç mimari tasarımdan mimari projeye kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Modern mimari tasarım',
      'İç mimari planlama',
      'Geniş yaşam alanları',
      'Özel yatak odası tasarımları',
      'Cam balkon sistemleri',
      'Estetik detaylar',
      'Fonksiyonel mekan kullanımı'
    ],
    images: [
      '/assets/kartal_residance/kartalresidance.jpg',
      '/assets/kartal_residance/cam001.jpg',
      '/assets/kartal_residance/cam002.jpg',
      '/assets/kartal_residance/edayatakodası_1-Photo.jpg',
      '/assets/kartal_residance/edayatakodası_2-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_3-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_4-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_5-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_6-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_7-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_8-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_9-Foto.jpg',
      '/assets/kartal_residance/edayatakodası_10-Foto.jpg'
    ],
    status: 'Tamamlandı'
  },
  'mehmet-say-koy-evi': {
    id: 18,
    title: 'Mehmet Say Köy Evi',
    location: 'Erzincan',
    year: '2019',
    category: 'Villa',
    client: 'Mehmet Say',
    scope: 'Tasarım ve Proje, Taahhüt',
    description: 'Mehmet Say Köy Evi, Erzincan\'da Mehmet Say için gerçekleştirilen bir köy evi projesidir. Tasarım ve proje aşamasından taahhüt sürecine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Taahhüt',
      'Geleneksel köy evi mimarisi',
      'Modern yaşam standartları',
      'Yerel malzeme kullanımı',
      'Doğal taş ve ahşap detaylar',
      'Bahçe düzenlemesi'
    ],
    images: [
      '/assets/mehmetsay/mehmet1.png',
      '/assets/mehmetsay/mehmet2.png'
    ],
    status: 'Tamamlandı'
  },
  'ofis-binasi-cephe-ic-dizayn': {
    id: 19,
    title: 'Ofis Binası Cephe ve İç Dizayn Yenileme',
    location: 'Mutlu Sanayi Sitesi, Tuzla, İstanbul',
    year: '2019',
    category: 'Ofis',
    client: 'Simge Endüstriyel Mühendislik',
    scope: 'Tasarım ve Proje, Taahhüt',
    description: 'Tuzla Mutlu Sanayi Sitesi\'nde Simge Endüstriyel Mühendislik için gerçekleştirilen ofis binası cephe ve iç dizayn yenileme projesi. Tasarım ve proje aşamasından taahhüt sürecine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Taahhüt',
      'Cephe yenileme',
      'İç mekan yenileme',
      'Modern ofis tasarımı',
      'Ergonomik çalışma alanları',
      'Aydınlatma tasarımı'
    ],
    images: [
      '/assets/ic/ic1.png',
      '/assets/ic/ic2.png',
      '/assets/ic/ic3.png'
    ],
    status: 'Tamamlandı'
  },
  'ofis-dis-mekan-dinlenme-alani': {
    id: 20,
    title: 'Ofis Dış Mekan Dinlenme Alanı Tasarımı',
    location: 'Mutlu Sanayi Sitesi, Tuzla, İstanbul',
    year: '2019',
    category: 'Ofis',
    client: 'İsar Mühendislik A.Ş.',
    scope: 'Tasarım ve Proje, Taahhüt',
    description: 'Tuzla Mutlu Sanayi Sitesi\'nde İsar Mühendislik A.Ş. için gerçekleştirilen dış mekan dinlenme alanı tasarımı. Tasarım ve proje aşamasından taahhüt sürecine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Taahhüt',
      'Dış mekan tasarımı',
      'Dinlenme alanları',
      'Peyzaj düzenlemesi',
      'Oturma grupları',
      'Aydınlatma tasarımı'
    ],
    images: [
      '/assets/off/off1.png',
      '/assets/off/off2.png',
      '/assets/off/off3.png',
      '/assets/off/off5.png'
    ],
    status: 'Tamamlandı'
  },
  'bahar-apartmani': {
    id: 21,
    title: 'Bahar Apartmanı',
    location: 'Kadıköy, İstanbul',
    year: '2019',
    category: 'Konut',
    client: 'Artos A.Ş.',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Taahhüt Hizmeti',
    description: 'Bahar Apartmanı, Kadıköy\'de Artos A.Ş. için gerçekleştirilen modern bir konut projesidir. Tasarım ve proje aşamasından uygulama detay çizimlerine ve taahhüt hizmetine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Uygulama Detay Çizimleri',
      'Taahhüt Hizmeti',
      'Modern apartman tasarımı',
      'Konforlu daireler',
      'Şehir merkezinde konum',
      'Kaliteli malzeme kullanımı'
    ],
    images: [
      '/assets/bahar/bahar1.png',
      '/assets/bahar/bahar2.png',
      '/assets/bahar/bahar3.png',
      '/assets/bahar/bahar4.png',
      '/assets/bahar/bahar5.png',
      '/assets/bahar/bahar6.png'
    ],
    status: 'Tamamlandı'
  },
  'zinar-dag-evi': {
    id: 22,
    title: 'Zinar Dağ Evi',
    location: 'Mardin',
    year: '2019',
    category: 'Villa',
    client: 'Özel',
    scope: 'Tasarım ve Proje, Uygulama Detay Çizimleri, Taahhüt Hizmeti',
    description: 'Zinar Dağ Evi, Mardin\'de gerçekleştirilen özel bir villa projesidir. Tasarım ve proje aşamasından uygulama detay çizimlerine ve taahhüt hizmetine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Uygulama Detay Çizimleri',
      'Taahhüt Hizmeti',
      'Dağ evi tasarımı',
      'Doğal malzeme kullanımı',
      'Manzara odaklı tasarım',
      'Modern villa konsepti'
    ],
    images: [
      '/assets/zinar/mountain-house-1.jpg',
      '/assets/zinar/dgfg.png',
      '/assets/zinar/ergt.jpg',
      '/assets/zinar/gorsel-2.jpg',
      '/assets/zinar/gorsel-4.jpg',
      '/assets/zinar/img-1.jpg',
      '/assets/zinar/img-2.jpg',
      '/assets/zinar/yhju.jpg'
    ],
    status: 'Tamamlandı'
  },
  'arif-karabiyik-evi': {
    id: 23,
    title: 'Arif Karabıyık Evi',
    location: 'Kemalpaşa, İzmir',
    year: '2019',
    category: 'Villa',
    client: 'Arif Karabıyık',
    scope: 'Tasarım ve Proje, Taahhüt',
    description: 'Arif Karabıyık Evi, İzmir\'in Kemalpaşa ilçesinde Arif Karabıyık için gerçekleştirilen modern bir villa projesidir. Tasarım ve proje aşamasından taahhüt sürecine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Taahhüt',
      'Modern villa tasarımı',
      'Geniş yaşam alanları',
      'Bahçe düzenlemesi',
      'Fonksiyonel iç mekan',
      'Kaliteli malzeme kullanımı'
    ],
    images: [
      '/assets/servet/servet1.png',
      '/assets/servet/servet2.png',
      '/assets/servet/servet3.png',
      '/assets/servet/servet4.png',
      '/assets/servet/servet5.png'
    ],
    status: 'Tamamlandı'
  },
  'ilker-residence': {
    id: 21,
    title: 'İlker Residence',
    location: 'İstanbul',
    year: '2023',
    category: 'Konut',
    scope: 'Mimari Proje, İç Mimari Tasarım',
    description: 'İlker Residence, modern yaşam alanları ve estetik tasarım anlayışıyla öne çıkan prestijli bir konut projesidir. İç mimari tasarımdan mimari projeye kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Modern mimari tasarım',
      'İç mimari planlama',
      'Geniş yaşam alanları',
      'Estetik detaylar',
      'Fonksiyonel mekan kullanımı',
      'Kaliteli malzeme seçimi'
    ],
    images: [
      '/assets/ilker2/GÖRSEL7.jpg',
      '/assets/ilker2/GÖRSEL1.jpg',
      '/assets/ilker2/GÖRSEL2.jpg',
      '/assets/ilker2/GÖRSEL3.jpg',
      '/assets/ilker2/GÖRSEL4.jpg',
      '/assets/ilker2/GÖRSEL5.jpg',
      '/assets/ilker2/GÖRSEL6.jpg',
      '/assets/ilker2/GÖRSEL8.jpg',
      '/assets/ilker2/GÖRSEL9.jpg',
      '/assets/ilker2/GÖRSEL10.jpg'
    ],
    status: 'Tamamlandı'
  },
  'simge-residence': {
    id: 28,
    title: 'Simge Residence',
    location: 'İstanbul',
    year: '2023',
    category: 'Konut',
    scope: 'Mimari Proje, İç Mimari Tasarım',
    description: 'Simge Residence, modern mimari anlayış ve konforlu yaşam alanlarıyla öne çıkan prestijli bir konut projesidir. İç mimari tasarımdan mimari projeye kadar tüm detaylarıyla planlanmış kapsamlı bir çalışmadır.',
    details: [
      'Modern mimari tasarım',
      'İç mimari planlama',
      'Geniş balkon alanları',
      'Estetik ve fonksiyonel mekanlar',
      'Kaliteli malzeme kullanımı',
      'Konforlu yaşam alanları'
    ],
    images: [
      '/assets/simge/x-7-foto.jpg',
      '/assets/simge/as-1-photo.jpg',
      '/assets/simge/as-2-foto.jpg',
      '/assets/simge/as-3-foto.jpg',
      '/assets/simge/as-4-foto.jpg',
      '/assets/simge/as-5-foto.jpg',
      '/assets/simge/as-6-foto.jpg',
      '/assets/simge/balkon-1.jpg',
      '/assets/simge/balkon-2.jpg',
      '/assets/simge/balkon-3.jpg',
      '/assets/simge/balkon-4.jpg',
      '/assets/simge/balkon-5.jpg',
      '/assets/simge/görsel-1.jpg',
      '/assets/simge/görsel-2.jpg',
      '/assets/simge/görsel-3.jpg',
      '/assets/simge/görsel-5.jpg',
      '/assets/simge/görsel-8.jpg',
      '/assets/simge/h-1-photo.jpg',
      '/assets/simge/h-2-foto.jpg',
      '/assets/simge/h-3-foto.jpg',
      '/assets/simge/h-4-foto.jpg',
      '/assets/simge/h-5-foto.jpg'
    ],
    status: 'Tamamlandı'
  },
  'zaho-residence': {
    id: 29,
    title: 'Zaho Residence',
    location: 'Zaho, Irak',
    year: '2023',
    category: 'Konut',
    scope: 'Mimari Proje, İç Mimari Tasarım',
    description: 'Zaho Residence, Irak\'ın Zaho şehrinde gerçekleştirilen modern bir konut projesidir. Bölgenin mimari dokusuna uygun, çağdaş yaşam standartlarını karşılayan bir tasarım anlayışıyla hayata geçirilmiştir.',
    details: [
      'Modern mimari tasarım',
      'Bölgesel mimari uyum',
      'Fonksiyonel mekan planlaması',
      'Kaliteli malzeme seçimi',
      'Konforlu yaşam alanları',
      'Estetik detaylar'
    ],
    images: [
      '/assets/zaho/zaho-2.jpg',
      '/assets/zaho/zaho-1.jpg',
      '/assets/zaho/zaho-3.jpg',
      '/assets/zaho/zaho-gorsel-1.jpg',
      '/assets/zaho/zaho.jpg'
    ],
    status: 'Tamamlandı'
  },
  'ofis-ic-mimari': {
    id: 30,
    title: 'İsar Mühendislik',
    location: 'İstanbul',
    year: '2023',
    category: 'Ofis',
    scope: 'İç Mimari Tasarım ve Uygulama',
    description: 'İsar Mühendislik ofis iç mimari projesi, fonksiyonel çalışma alanları ve estetik tasarım anlayışıyla öne çıkan kapsamlı bir çalışmadır. Müdür odaları, toplantı salonları, çalışma alanları ve ortak kullanım mekanlarının detaylı tasarımını içermektedir.',
    details: [
      'Modern ofis tasarımı',
      'Fonksiyonel mekan planlaması',
      'Müdür odası tasarımı',
      'Toplantı salonu düzenlemesi',
      'Çalışma alanları',
      'Koridor ve ortak alan tasarımı',
      'Teknik ofis düzenlemesi',
      'Muhasebe ve sekreter odaları',
      'Ergonomik mobilya seçimi',
      'Aydınlatma tasarımı'
    ],
    images: [
      '/assets/ofis/giris-1.jpg',
      '/assets/ofis/giris-2.jpg',
      '/assets/ofis/giris-3.jpg',
      '/assets/ofis/bina-girisi.jpg',
      '/assets/ofis/koridor.jpg',
      '/assets/ofis/mudur-odasi-1.jpg',
      '/assets/ofis/mudur-odasi-2.jpg',
      '/assets/ofis/mudur-odasi-3.jpg',
      '/assets/ofis/toplanti-odasi-1.jpg',
      '/assets/ofis/toplanti-odasi-2.jpg',
      '/assets/ofis/toplanti-odasi-7.jpg',
      '/assets/ofis/isa-oda-12.jpg',
      '/assets/ofis/isa-oda-13.jpg',
      '/assets/ofis/isa-oda-14.jpg',
      '/assets/ofis/muhasebe.jpg',
      '/assets/ofis/sekreter.jpg',
      '/assets/ofis/teknik-ofis.jpg',
      '/assets/ofis/teknik-ofis-muhasebe.jpg',
      '/assets/ofis/plan.jpg',
      '/assets/ofis/mmm.jpg',
      '/assets/ofis/sss.jpg',
      '/assets/ofis/o.jpg'
    ],
    status: 'Tamamlandı'
  },
  'arif-residence': {
    id: 31,
    title: 'Arif Residence',
    location: 'İstanbul',
    year: '2023',
    category: 'Konut',
    scope: 'Mimari Proje, İç Mimari Tasarım',
    description: 'Arif Residence, modern mimari anlayış ve detaylı iç mekan tasarımıyla öne çıkan prestijli bir konut projesidir. Dış cephe tasarımından iç mimari detaylara kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Modern mimari tasarım',
      'Detaylı dış cephe çalışması',
      'İç mimari planlama',
      'Fonksiyonel mekan kullanımı',
      'Estetik detaylar',
      'Kaliteli malzeme seçimi',
      'Konforlu yaşam alanları',
      'Aydınlatma tasarımı'
    ],
    images: [
      '/assets/arif/discephe-2.jpg',
      '/assets/arif/discephe-1.jpg',
      '/assets/arif/discephe-3.jpg',
      '/assets/arif/discephe-4.jpg',
      '/assets/arif/discephe-5.jpg',
      '/assets/arif/discephe-6.jpg',
      '/assets/arif/discephe-7.jpg',
      '/assets/arif/discephe-8.jpg',
      '/assets/arif/discephe-9.jpg',
      '/assets/arif/discephe-10.jpg',
      '/assets/arif/discephe-11.jpg',
      '/assets/arif/ic-gorsel-1.jpg',
      '/assets/arif/ic-gorsel-2.jpg',
      '/assets/arif/ic-gorsel-3.jpg',
      '/assets/arif/ic-gorsel-4.jpg',
      '/assets/arif/ic-gorsel-5.jpg',
      '/assets/arif/ic-gorsel-6.jpg',
      '/assets/arif/ic-gorsel-7.jpg',
      '/assets/arif/ic-gorsel-8.jpg',
      '/assets/arif/ic-gorsel-9.jpg',
      '/assets/arif/ic-gorsel-10.jpg',
      '/assets/arif/instagram-1.jpg'
    ],
    status: 'Tamamlandı'
  },
  'ilker-tastekin-evi': {
    id: 25,
    title: 'İlker Taştekin Evi',
    location: 'Foça, İzmir',
    year: '2015',
    category: 'Villa',
    client: 'İlker Taştekin',
    scope: 'Tasarım ve Proje, Taahhüt',
    description: 'İlker Taştekin Evi, İzmir\'in Foça ilçesinde İlker Taştekin için gerçekleştirilen modern bir villa projesidir. Tasarım ve proje aşamasından taahhüt sürecine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Taahhüt',
      'Deniz manzaralı konum',
      'Modern villa tasarımı',
      'Geniş teraslar',
      'Özel havuz',
      'Peyzaj düzenlemesi'
    ],
    images: [
      '/assets/ilker/gorsel-1.jpg',
      '/assets/ilker/gorsel-2.jpg',
      '/assets/ilker/gorsel-3.jpg',
      '/assets/ilker/gorsel-4.jpg',
      '/assets/ilker/gorsel-5.jpg',
      '/assets/ilker/gorsel-6.jpg',
      '/assets/ilker/gorsel-7.jpg',
      '/assets/ilker/gorsel-8.jpg',
      '/assets/ilker/gorsel-9.jpg',
      '/assets/ilker/gorsel-10.jpg',
      '/assets/ilker/gorsel-11.jpg',
      '/assets/ilker/gorsel-12.jpg',
      '/assets/ilker/gorsel-13.jpg',
      '/assets/ilker/gorsel-14.jpg',
      '/assets/ilker/gorsel-15.jpg',
      '/assets/ilker/gorsel-16.jpg',
      '/assets/ilker/gorsel-17.jpg',
      '/assets/ilker/gorsel-18.jpg',
      '/assets/ilker/gorsel-19.jpg',
      '/assets/ilker/gorsel-20.jpg',
      '/assets/ilker/gorsel-21.jpg',
      '/assets/ilker/insta.jpg',
      '/assets/ilker/instagram1.jpg'
    ],
    status: 'Tamamlandı'
  },

  'mimoza-apartmani': {
    id: 27,
    title: 'Mimoza Apartmanı',
    location: 'Kadıköy, İstanbul',
    year: '2018',
    category: 'Konut',
    client: 'Artos İnşaat A.Ş.',
    scope: 'Tasarım ve Proje, Taahhüt',
    description: 'Mimoza Apartmanı, Kadıköy\'de Artos İnşaat A.Ş. için gerçekleştirilen modern bir konut projesidir. Tasarım ve proje aşamasından taahhüt sürecine kadar tüm aşamaları kapsayan kapsamlı bir çalışmadır.',
    details: [
      'Tasarım ve Proje',
      'Taahhüt',
      'Modern apartman tasarımı',
      'Konforlu daireler',
      'Şehir merkezinde konum',
      'Kapalı otopark',
      'Güvenlik sistemleri'
    ],
    images: [
      '/assets/mimoza/mimozaa.jpg',
      '/assets/mimoza/banyo-1.jpg',
      '/assets/mimoza/banyo-2.jpg',
      '/assets/mimoza/koridor1.jpg',
      '/assets/mimoza/koridor2.jpg',
      '/assets/mimoza/koridor3.jpg',
      '/assets/mimoza/koridor4.jpg'
    ],
    units: '18 Konut',
    status: 'Tamamlandı'
  },
  'green-land-luxury-mansion': {
    id: 28,
    title: 'Green Land Luxury Mansion',
    location: 'Khanzad, Erbil / Irak',
    year: '2013',
    category: 'Villa',
    client: 'Rekan Group',
    units: '105 Adet Villa',
    scope: 'Mimari Uygulama ve Mekanik Uygulama',
    description: 'Green Land Luxury Mansion, Erbil\'in Khanzad bölgesinde Rekan Group için gerçekleştirilen 105 adet lüks villadan oluşan kapsamlı bir konut projesidir. Mimari uygulama ve mekanik sistemlerin kurulumunu içeren bu proje, modern yaşam standartlarıyla öne çıkmaktadır.',
    details: [
      'Mimari Uygulama',
      'Mekanik Sistem Cephe Giydirme',
      'İç Dekorasyon Tasarım ve Uygulama',
      'VRV ve HVAC Sistemleri',
      'Sıhhi Tesisat',
      'Otomatik Bahçe Sulama',
      '105 adet lüks villa',
      'Modern villa tasarımı'
    ],
    images: [
      '/assets/green/Resim4.jpeg',
      '/assets/green/Resim1.jpg',
      '/assets/green/Resim2.jpg',
      '/assets/green/Resim3.jpg'
    ],
    status: 'Tamamlandı'
  },
  'kemer-country-kemerburgaz': {
    id: 29,
    title: 'Kemer Country / Kemerburgaz Villaları',
    location: 'Göktürk, İstanbul',
    year: '2018',
    category: 'Villa',
    client: 'Murat Erkan',
    scope: 'Güneş Enerjisi Sistemi Projelendirme ve Uygulama, Isıtma Soğutma Sistemi Yenileme, İç Dekorasyon Yenileme, Genel Alt Yapı Yenileme',
    description: 'Kemer Country / Kemerburgaz Villaları, Göktürk\'te Murat Erkan için gerçekleştirilen kapsamlı bir villa yenileme projesidir. Güneş enerjisi sisteminden iç dekorasyona kadar tüm altyapı ve sistemlerin modernizasyonunu içermektedir.',
    details: [
      'Güneş Enerjisi Sistemi Projelendirme ve Uygulama',
      'Isıtma Soğutma Sistemi Yenileme',
      'İç Dekorasyon Yenileme',
      'Genel Alt Yapı Yenileme',
      'Modern villa yenileme',
      'Enerji verimliliği',
      'Sürdürülebilir çözümler'
    ],
    images: [
      '/assets/cınar/cınar1.png',
      '/assets/cınar/cınar2.png',
      '/assets/cınar/cınar3.png'
    ],
    status: 'Tamamlandı'
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!slug || !projectsData[slug]) {
    return <Navigate to="/projeler" replace />;
  }

  const project = projectsData[slug];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black min-h-screen">
        
        <div className="max-w-7xl mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projeler"
              className="inline-flex items-center text-gray-300 hover:text-yellow-400 mb-12 transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Projelere Dön</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden mb-6 border border-gray-800">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-yellow-400 transition-colors"
                    >
                      <ChevronLeft className="text-gray-900" size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-yellow-400 transition-colors"
                    >
                      <ChevronRight className="text-gray-900" size={24} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-1 transition-all ${
                            index === currentImageIndex ? 'bg-white w-12' : 'bg-white/50 w-8'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {project.images.length > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6"
                >
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {project.images.map((image: string, index: number) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative flex-shrink-0 w-24 h-24 overflow-hidden transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'ring-2 ring-white ring-offset-2 ring-offset-black' 
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {index === currentImageIndex && (
                          <motion.div
                            layoutId="activeImage"
                            className="absolute inset-0 border-2 border-white"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                  <div className="text-center mt-4 text-sm text-gray-500 font-body">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-xs font-bold bg-white text-black uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-8">
                {project.title}
              </h1>

              <div className="space-y-4 mb-10 text-gray-400 font-body">
                <div className="flex items-center text-sm">
                  <MapPin size={18} className="mr-3 text-white" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar size={18} className="mr-3 text-white" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Briefcase size={18} className="mr-3 text-white" />
                  <span>{project.scope}</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 mb-10">
                <h2 className="text-2xl font-display font-light text-white mb-6">
                  Proje Hakkında
                </h2>
                <p className="text-gray-400 leading-relaxed text-base font-body">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-xl font-display font-light text-white mb-6">
                  Özellikler
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-400 bg-gray-900 p-4 border border-gray-800 hover:border-gray-700 transition-colors">
                      <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm font-body">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

