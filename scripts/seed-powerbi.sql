-- =============================================
-- Seed: Practical Power BI For Data Analysis Course
-- =============================================

-- 1. INSERT event
INSERT INTO events (
  navigable,
  name,
  hero_description,
  card_description,
  register_link,
  video_url,
  date,
  location_name,
  location_subtext,
  location_latitude,
  location_longitude,
  color_primary,
  color_secondary,
  color_accent,
  color_background,
  color_text
) VALUES (
  true,
  'Practical Power BI For Data Analysis Course',
  'Sıfırdan başlayarak Power BI ile veri analizi dünyasını keşfet; veri görselleştirme, dashboard tasarımı ve veri modellemeyi temelden öğren, gerçek veri setleriyle çalışarak analitik düşünme becerini geliştir.',
  '💻 %100 online, esnek ve uygulama odaklı öğrenme deneyimi. 🤝 Topluluk desteği, mentor rehberliği ve gerçek proje pratiği. 🎓 Certification Access''e sahip olan katılımcılarımız için, programı başarıyla tamamlayan katılımcılar, paylaşılabilir sertifika almaya hak kazanır. Veri çağında fark yaratmak, raporlayan değil içgörü üreten bir profesyonel olmak için şimdi yerini al.',
  'https://togather.lodos.io/events/practical-power-bi-for-data-analysis-certification-course-92408168621499537800',
  '',
  '2026-04-06T20:00:00+03:00',
  'Online',
  'Platform: Online • Zaman Dilimi: UTC+3',
  NULL,
  NULL,
  '244.29, 100%, 97.25%',
  '250, 6.98%, 16.86%',
  '199.53, 75.44%, 77.65%',
  '0, 0%, 100%',
  '250, 6.98%, 16.86%'
);

-- 2. INSERT speakers
INSERT INTO speakers (event_id, full_name, title, company, sort_order) VALUES
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Oğuzhan Öz', ' Business Intelligence Engineer ', 'lc-waikiki', 1),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Turgay Esen', 'Senior Data Engineer', 'abdi-bio', 2),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Hasan Fehmi Barun', 'IT Manager', 'ozgun', 3),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Sarp Oğul Çalı', 'Technical Team Lead', 'prodigi', 4),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Serkan Alc', 'Community Lead', 'multigroup', 5);

-- 3. INSERT organizers
INSERT INTO organizers (event_id, name, designation, image, sort_order) VALUES
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Nuriye Dezcan', 'Organizer', '/images/organizers/nuriye-dezcan.webp', 1),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Nurhan Uzun', 'Organizer', '/images/organizers/nurhan-uzun.webp', 2),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Hatice Rana Yamaç', 'Organizer ', '/images/organizers/rana-yamac.webp', 3);

-- 4. INSERT sessions
INSERT INTO sessions (event_id, room, speaker_name, topic, start_time, end_time, event_date, sort_order) VALUES
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Serkan Alc', 'Keynote - Bootcamp Opening', '20.00', '22.00', NULL, 1),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Oğuzhan Öz', 'Session 1 : Power BI''a Giriş & BI Mantığı', '20.00', '22.00', NULL, 2),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Turgay Esen', 'Session 2 : Power Query: Veri Yükleme & Temizleme', '20.00', '22.00', NULL, 3),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Oğuzhan Öz', 'Session 3 : Veri Modelleme (Data Modeling)', '20.00', '22.00', NULL, 4),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Turgay Esen', 'Session 4 : DAX Temelleri', '20.00', '22.00', NULL, 5),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Hasan Fehmi Barun', 'Session 5 : CALCULATE ve Context Mantığı', '20.00', '22.00', NULL, 6),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Hasan Fehmi Barun', 'Session 6 : Time Intelligence & İleri DAX', '20.00', '22.00', NULL, 7),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ana Salon', 'Sarp Oğul Çalı', 'Session 7 : Veri Görselleştirme Temelleri', '20.00', '22.00', NULL, 8);

-- 5. INSERT sponsors
INSERT INTO sponsors (event_id, tier, sponsor_slug, sort_order) VALUES
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), '', 'lc-waikiki', 1),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), '', 'abdi-bio', 2),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), '', 'ozgun', 3),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), '', 'prodigi', 4);

-- 6. INSERT tickets
INSERT INTO tickets (event_id, type, description, price, link, perks, sort_order) VALUES
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Standart Ticket', '🎫 Standart Ticket – Öğrenme Deneyimine Tam Erişim

Standart Ticket, bootcamp sürecine eksiksiz şekilde dahil olmanızı ve öğrenme deneyimini kendi temponuzda sürdürmenizi sağlar.', 0, 'https://togather.lodos.io/events/foundations-frontend-web-development-certification-course-99241793086215583681/tickets', '["🎥 Canlı eğitim kayıtlarına tam erişim elde edersiniz. Kaçırdığınız ya da tekrar etmek istediğiniz oturumları dilediğiniz zaman izleyebilirsiniz.","📄 Eğitmenler tarafından hazırlanan kapsamlı eğitim dökümantasyonlarına erişerek öğrenme sürecinizi derinleştirir, bilgilerinizi kalıcı hâle getirebilirsiniz.","Standart Ticket, esnek, erişilebilir ve odaklı bir öğrenme deneyimi sunar. Bootcamp''e dahil olun, süreci kendi ritminizde takip edin."]', 1),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Certification Access Ticket', '🏅 Certification Ticket, program sürecine resmi, ölçümlenebilir ve mentör destekli olarak dahil olmanızı sağlar. Süreci bitirmeniz sonucu sertifika almaya hak kazanacaksınız.', 500, 'https://togather.lodos.io/events/foundations-frontend-web-development-certification-course-99241793086215583681/tickets', '["🍀 Gerçek proje ödevleri üzerinde çalışır, çıktılarınız için detaylı ve nitelikli geri bildirim alırsınız.","🧠 Süreç boyunca teknik destek ve mentörlük erişimine sahip olursunuz.","🎓 Program kriterlerini başarıyla tamamlamanız halinde sertifika almaya ve seçili programlarımız için burs olanaklarına hak kazanırsınız.","Certification Ticket, yalnızca bir katılım bileti değil; değerlendirilen, desteklenen ve belgelendirilen bir öğrenme deneyimidir."]', 2);

-- 7. INSERT initial_metrics
INSERT INTO initial_metrics (event_id, title, value, sort_order) VALUES
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Ders sayısı', 10, 1),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Eğitmen Sayısı', 7, 2),
  ((SELECT id FROM events WHERE name = 'Practical Power BI For Data Analysis Course'), 'Eğitim Süresi (Saat)', 30, 3);

-- =============================================
-- UPDATE existing events'' sessions with eventDate
-- =============================================

-- Foundations of Web Development Certification Course
UPDATE sessions SET event_date = '2026-03-09' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Keynote - Bootcamp Opening';
UPDATE sessions SET event_date = '2026-03-11' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'HTML & CSS Fundamentals';
UPDATE sessions SET event_date = '2026-03-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Modern JavaScript Fundamentals';
UPDATE sessions SET event_date = '2026-03-16' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Webinar Session';
UPDATE sessions SET event_date = '2026-03-17' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Advanced JavaScript & Async Programming';
UPDATE sessions SET event_date = '2026-03-23' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'UI/UX for Developers';
UPDATE sessions SET event_date = '2026-03-25' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'TypeScript Introduction & Fundamentals';
UPDATE sessions SET event_date = '2026-03-28' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Advanced TypeScript';
UPDATE sessions SET event_date = '2026-03-30' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'React Components & Architecture';
UPDATE sessions SET event_date = '2026-04-01' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'React State Management & Events';
UPDATE sessions SET event_date = '2026-04-04' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'React Side Effects & Persistence';
UPDATE sessions SET event_date = '2026-04-06' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Frameworks Overview Webinar';
UPDATE sessions SET event_date = '2026-04-08' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'React Context API & Advanced State';
UPDATE sessions SET event_date = '2026-04-11' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'HTTP Requests & Async Operations';
UPDATE sessions SET event_date = '2026-04-13' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'React Router & Performance';
UPDATE sessions SET event_date = '2026-04-15' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Next.js App Router & Routing';
UPDATE sessions SET event_date = '2026-04-18' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Next.js Server Components & Data Fetching';
UPDATE sessions SET event_date = '2026-04-20' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Next.js Alternative Session';
UPDATE sessions SET event_date = '2026-04-22' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Next.js Client Components & Interactivity';
UPDATE sessions SET event_date = '2026-04-25' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Next.js Server Actions & Mutations';
UPDATE sessions SET event_date = '2026-04-29' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Next.js Authentication ve Database';
UPDATE sessions SET event_date = '2026-05-02' WHERE event_id = (SELECT id FROM events WHERE name = 'Foundations of Web Development Certification Course') AND topic = 'Next.js Route Handlers ve Deployment';

-- Web Developer Conference 2025
UPDATE sessions SET event_date = '2025-09-27' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Conference 2025') AND topic = 'Açılış Konuşması';
UPDATE sessions SET event_date = '2025-09-27' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Conference 2025') AND topic = 'Yapay Zeka Çağında Junior Olmak';
UPDATE sessions SET event_date = '2025-09-27' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Conference 2025') AND topic = 'Backend Süreçlerinde Deneyimin İzleri';
UPDATE sessions SET event_date = '2025-09-27' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Conference 2025') AND topic = 'Siber Tehditlere Karşı Web/Mobil Uygulama Güvenliği';
UPDATE sessions SET event_date = '2025-09-27' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Conference 2025') AND topic = 'Bulutta Güçlü Altyapı: AWS Web Çözümleri';
UPDATE sessions SET event_date = '2025-09-27' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Conference 2025') AND topic = 'Beyond UUIDs: Smarter Identifier Strategies for Modern Systems';
UPDATE sessions SET event_date = '2025-09-27' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Conference 2025') AND topic = 'MCP Fundamentals';

-- Data Science Summit 2025
UPDATE sessions SET event_date = '2025-09-06' WHERE event_id = (SELECT id FROM events WHERE name = 'Data Science Summit 2025') AND topic = 'Açılış Konuşması';
UPDATE sessions SET event_date = '2025-09-06' WHERE event_id = (SELECT id FROM events WHERE name = 'Data Science Summit 2025') AND topic = '1. Oturum';
UPDATE sessions SET event_date = '2025-09-06' WHERE event_id = (SELECT id FROM events WHERE name = 'Data Science Summit 2025') AND topic = '2. Oturum';
UPDATE sessions SET event_date = '2025-09-06' WHERE event_id = (SELECT id FROM events WHERE name = 'Data Science Summit 2025') AND topic = '3. Oturum';
UPDATE sessions SET event_date = '2025-09-06' WHERE event_id = (SELECT id FROM events WHERE name = 'Data Science Summit 2025') AND topic = '4. Oturum';
UPDATE sessions SET event_date = '2025-09-06' WHERE event_id = (SELECT id FROM events WHERE name = 'Data Science Summit 2025') AND topic = '5. Oturum';

-- Web Developer Summit 2025
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND topic = 'Açılış Konuşması';
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND topic = 'The Future of Frontend Architecture ';
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND topic = 'Think. Train. Deploy. Docker''s AI-Powered ModelOps Workflow';
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND topic = 'Strangler Pattern & Beyond: Modernizing Legacy Architectures ';
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND topic = 'GraphQL - The Future of APIs';
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND topic = 'Angular SSR ';
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND speaker_name = 'Furkan Portakal' AND room = 'Network';
UPDATE sessions SET event_date = '2025-06-14' WHERE event_id = (SELECT id FROM events WHERE name = 'Web Developer Summit 2025') AND speaker_name = 'Emine Gürcü' AND room = 'Network';

-- Mobile Developer Conference 2025
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Açılış Konuşması';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Geleceğin Yazılımcısı 101';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Jetpack Compose ve Compose Multiplatform Farkları';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'The Journey of Creating Scalable Tech Products';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Scaling Up with Apple Ads: Developer''s Guide to App Store Growth';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'AI: Friend or Threat to Software Teams? Our Journey and Predictions';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Thread Safe or Sorry: Swift''te Actor ve Sendable ile Modern Eşzamanlılık';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Kapanış Konuşması';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Flutter + AI: Mobilde Akıllı Deneyimler';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Design Handoffs: Tips Processes and Trends';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Bir fikir nasıl doğar';
UPDATE sessions SET event_date = '2025-05-31' WHERE event_id = (SELECT id FROM events WHERE name = 'Mobile Developer Conference 2025') AND topic = 'Korku: En iyi itici güç';
