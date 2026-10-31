// كل محتوى الموقع هنا. عدّل القيم فقط. الحقول {ar, en} نص بكل لغة.
// Edit the values only. {ar, en} fields hold text for each language.
// ⚠️ كل ما يحتوي على "مثال" أو "sample" أو ⚠️ هو محتوى مؤقت — استبدله بالبيانات الحقيقية قبل النشر.
// ⚠️ Anything marked "sample", "مثال" or ⚠️ is placeholder content — replace it with real details before going live.
// الصور في مجلد public/images — اكتب المسار بدون / في البداية، مثل "images/photo.jpg".
// Images live in public/images — write paths without a leading /, e.g. "images/photo.jpg".
export default {
  name: { ar: "ماهر وهاشم الصوفي للاستشارات والخدمات العامة", en: "Maher & Hashem Al-Soufi Consulting & General Services" }, // ⚠️ مأخوذ من الشعار / taken from the logo
  shortName: { ar: "ماهر وهاشم الصوفي", en: "Maher & Hashem Al-Soufi" },
  tagline: { ar: "كل ما يحتاجه عملك من حلول محاسبية وتقنية وتدريبية في مكان واحد", en: "Everything your business needs in accounting, technology and training, in one place" },
  intro: {
    ar: "نساعدك على إدارة أعمالك بكفاءة من خلال الأنظمة المحاسبية، التدريب الاحترافي، أجهزة نقاط البيع، والحلول التقنية المتكاملة.",
    en: "We help you run your business efficiently with accounting systems, professional training, point-of-sale equipment and complete technology solutions."
  },
  // الشعار (الخيار 2): نسخة لكل لغة، ونسخة للخلفيات الداكنة / Logo (option 2): one per language, plus versions for dark backgrounds
  logo: { ar: "images/logo/ar.svg", en: "images/logo/en.svg" },                       // الترويسة / header
  logoOnDark: { ar: "images/logo/ar-on-dark.svg", en: "images/logo/en-on-dark.svg" }, // التذييل / footer
  // شرائح الواجهة المتحركة. الشريحة الأولى تستخدم tagline و intro إذا تُرك title/text فارغًا.
  // Hero slideshow. The first slide falls back to tagline and intro when title/text are left out.
  heroSlides: [
    { image: "images/accounting-desk.jpg" },
    { image: "images/accounting-calc.jpg",
      title: { ar: "أكثر من 45 عامًا من الخبرة المحاسبية", en: "More than 45 years of accounting expertise" },
      text: { ar: "إشراف محاسبي، تقارير مالية دقيقة، واستشارات مالية وضريبية للشركات والمؤسسات والأفراد منذ عام 1981.", en: "Accounting supervision, accurate financial reports, and financial and tax advice for companies, institutions and individuals since 1981." },
      link: "#svc-accounting" },
    { image: "images/alameen-erp-soft.png", fit: "banner",
      title: { ar: "برنامج الأمين ", en: "Al-Ameen software" },
      text: { ar: "موزّع برنامج الأمين للمحاسبة والمستودعات منذ 1997.", en: "Al-Ameen accounting and warehouse software partner since 1997." },
      link: "#svc-software" },
    { image: "images/pos-handheld.jpg",
      title: { ar: "أجهزة وحلول تقنية متكاملة", en: "Complete hardware and technology solutions" },
      text: { ar: "أجهزة نقاط بيع حديثة، حواسيب وشاشات تفاعلية، وتركيبها وربطها مع أنظمتك المحاسبية والإدارية.", en: "Modern POS devices, laptops and interactive screens, installed and connected to your accounting and management systems." },
      link: "#svc-tech" }
  ],
  web3formsKey: "ضع_مفتاح_Web3Forms_هنا", // ⚠️ من web3forms.com
  phone: "+963947412914",
  phone2: "+963930767442", // رقم تواصل ثانٍ / second contact number
  // الاسم الظاهر بجانب كل رقم / Name shown next to each number
  phoneNames: {
    "+963947412914": { ar: "هاشم الصوفي", en: "Hashem Al-Soufi" },
    "+963930767442": { ar: "ماهر الصوفي", en: "Maher Al-Soufi" }
  },
  whatsapp: "963947412914", // بدون + أو أصفار / no + or leading zeros
  email: "ameen.hsoufi@gmail.com",
  address: { ar: "اللاذقية، سوق التجار، عبارة باريس، محلات M1، الطابق الرابع", en: "Paris Passage, M1 Shops, 4th Floor, Souq al-Tujjar, Lattakia, Syria" },
  hours: { ar: "من السبت إلى الخميس", en: "Saturday to Thursday" }, // أيام الدوام / working days
  mapEmbed: "https://www.google.com/maps?q=35.516361,35.776444&z=16&output=embed",
  // روابط التواصل الاجتماعي أسفل الصفحة. "#" = رابط مؤقت. اترك الحقل فارغًا "" لإخفاء الأيقونة.
  // Social links at the bottom of the page. "#" = placeholder link. Leave a field empty "" to hide its icon.
  hashtag: "", // ⚠️ مثال: "#الصوفي" — اتركه فارغًا لإخفائه / e.g. "#AlSoufi"; leave empty to hide
  social: { linkedin: "#", instagram: "#", x: "#", facebook: "#", youtube: "#", tiktok: "#" }, // ⚠️ ضع الروابط الحقيقية / add real links

  // أرقام سريعة تحت الواجهة / Quick stats under the hero
  stats: [
    { value: "45+", label: { ar: "سنة من الخبرة", en: "Years of experience" } },
    { value: "1000+", label: { ar: "عميل", en: "Clients" } },
    { value: "1981", label: { ar: "سنة التأسيس", en: "Founded" } },
    { value: "1997", label: { ar: "موزّع برنامج الأمين منذ", en: "Al-Ameen software partner since" } }
  ],

  // الخدمات: icon يظهر عند عدم وجود صورة. featured:true تظهر أيضًا في "خدمات مميزة" مع details.
  // Services: icon shows when there is no image. featured:true also shows in "Featured services" with details.
  services: [
    { id: "software", icon: "💻", image: "images/alameen-erp.jpg", featured: true, featuredImage: "images/alameen-erp.jpg",
      title: { ar: "حلول برنامج الأمين للمحاسبة والمستودعات", en: "Al-Ameen Accounting & Warehouse Software" },
      text: { ar: "توزيع وتركيب وتهيئة برنامج الأمين مع دعم فني مستمر.", en: "Supply, installation and setup of Al-Ameen software, with ongoing support." },
      details: { ar: "نحن من أوائل موزعي برنامج الأمين في محافظة اللاذقية منذ عام 1997. نركّب البرنامج ونهيّئه حسب احتياجات منشأتك، ونرافقك بالدعم الفني والاستشارات.", en: "We have been one of the first distributors of Al-Ameen software in Lattakia since 1997. We install it, set it up around your business, and stay with you for support and advice." },
      items: [
        { ar: "توزيع وتركيب برنامج الأمين للمحاسبة والمستودعات.", en: "Supply and installation of Al-Ameen accounting and warehouse software." },
        { ar: "تهيئة البرنامج وربطه مع احتياجات المنشأة.", en: "Setting up the software and tailoring it to your business needs." },
        { ar: "الدعم الفني والاستشارات المتعلقة بالبرنامج.", en: "Technical support and advice on using the software." },
        { ar: "تطوير وإعداد قواعد البيانات الخاصة بالنظام.", en: "Building and preparing the system's databases." }
      ] },
    { id: "training", icon: "🎓", image: "images/training.svg",
      title: { ar: "التدريب والتأهيل", en: "Training & Qualification" },
      text: { ar: "دورات عملية على برنامج الأمين والأنظمة المحاسبية لجميع المستويات.", en: "Practical courses on Al-Ameen and accounting systems for every level." },
      items: [
        { ar: "دورات تدريبية على برنامج الأمين لجميع المستويات.", en: "Al-Ameen software courses for all levels." },
        { ar: "تدريب المحاسبين وموظفي المستودعات على استخدام الأنظمة المحاسبية.", en: "Training accountants and warehouse staff to use accounting systems." },
        { ar: "برامج تأهيل لسوق العمل واكتساب المهارات العملية.", en: "Job-readiness programmes to build practical skills." }
      ] },
    { id: "accounting", icon: "📊", image: "images/accounting-calc.jpg",
      title: { ar: "الخدمات المحاسبية والمالية", en: "Accounting & Financial Services" },
      text: { ar: "إشراف محاسبي وتقارير دقيقة واستشارات مالية للشركات والمؤسسات.", en: "Accounting supervision, accurate reports and financial advice for companies." },
      items: [
        { ar: "الإشراف المحاسبي للشركات والمؤسسات.", en: "Accounting supervision for companies and institutions." },
        { ar: "تنظيم الدورة المستندية والمالية.", en: "Organising document and financial workflows." },
        { ar: "إعداد ومراجعة البيانات والتقارير المحاسبية.", en: "Preparing and reviewing accounting statements and reports." },
        { ar: "الاستشارات المالية والمحاسبية.", en: "Financial and accounting advice." }
      ] },
    { id: "inventory", icon: "📦", image: "images/warehouse-erp.jpg",
      title: { ar: "خدمات إدارة المستودعات والجرد", en: "Warehouse & Inventory Management" },
      text: { ar: "جرد دقيق وتنظيم بيانات المخزون وأنظمة الباركود.", en: "Accurate stocktaking, organised inventory data and barcode systems." },
      items: [
        { ar: "جرد المستودعات والأصول.", en: "Stocktaking of warehouses and assets." },
        { ar: "تنظيم وإدارة بيانات المخزون.", en: "Organising and managing inventory data." },
        { ar: "إعداد أنظمة الباركود وإدارة الأصناف.", en: "Setting up barcode systems and item management." },
        { ar: "تقديم الحلول التقنية لزيادة دقة الجرد والمتابعة.", en: "Technology solutions for more accurate stocktaking and tracking." }
      ] },
    { id: "pos", icon: "🖨", image: "images/pos-counter.jpg", featured: true, featuredImage: "images/pos-handheld.jpg",
      title: { ar: "أجهزة ومستلزمات نقاط البيع", en: "Point-of-Sale Devices & Supplies" },
      text: { ar: "أجهزة كاشير وطابعات فواتير وقارئات باركود وملحقاتها.", en: "Cash registers, receipt printers, barcode scanners and accessories." },
      details: { ar: "منذ عام 2010 نوفّر أنظمة نقاط البيع كاملة: أجهزة الكاشير، طابعات الفواتير والملصقات، وقارئات الباركود، ونربطها مع برنامج المحاسبة لتعمل كمنظومة واحدة.", en: "Since 2010 we have supplied complete point-of-sale systems: cash registers, receipt and label printers and barcode scanners, all connected to your accounting software so they work as one." },
      items: [
        { ar: "أجهزة الكاشير (POS).", en: "Cash register (POS) terminals." },
        { ar: "طابعات الفواتير الحرارية.", en: "Thermal receipt printers." },
        { ar: "أجهزة قراءة الباركود.", en: "Barcode scanners." },
        { ar: "طابعات الملصقات والباركود.", en: "Label and barcode printers." },
        { ar: "ملحقات وأنظمة نقاط البيع.", en: "POS accessories and systems." }
      ] },
    { id: "tech", icon: "🖥", image: "images/pos-handheld.jpg",
      title: { ar: "الأجهزة والحلول التقنية", en: "Hardware & Technology Solutions" },
      text: { ar: "حواسيب وشاشات تفاعلية وتجهيز متكامل للشركات.", en: "Laptops, interactive screens and complete setups for companies." },
      items: [
        { ar: "أجهزة الكمبيوتر المحمولة (Laptop).", en: "Laptops." },
        { ar: "الشاشات التفاعلية الذكية.", en: "Smart interactive screens." },
        { ar: "تجهيز الشركات والمؤسسات بالحلول التقنية المتكاملة.", en: "Complete technology setups for companies and institutions." },
        { ar: "تركيب وربط الأجهزة مع الأنظمة المحاسبية والإدارية.", en: "Installing devices and connecting them to accounting and management systems." }
      ] },
    { id: "careers", icon: "💼", image: "images/careers.svg",
      title: { ar: "خدمات التوظيف والتأهيل المهني", en: "Recruitment & Career Development" },
      text: { ar: "نربط أصحاب الأعمال بالمحاسبين والكوادر المؤهلة.", en: "We connect employers with qualified accountants and staff." },
      items: [
        { ar: "تأمين فرص عمل للمحاسبين والكوادر الإدارية.", en: "Finding jobs for accountants and administrative staff." },
        { ar: "ربط أصحاب الأعمال بالكفاءات المؤهلة.", en: "Connecting employers with qualified talent." },
        { ar: "تأهيل الخريجين لسوق العمل من خلال التدريب العملي والتطبيقي.", en: "Preparing graduates for work through hands-on training." }
      ] }
  ],

  about: {
    image: "images/logo/icon-on-dark.svg", // ⚠️ يمكن استبدالها بصورة للمكتب / can be replaced with an office photo
    story: {
      ar: "تأسس مكتبنا عام 1981 على يد الأستاذ محمد هاشم الصوفي، الذي شغل سابقًا منصب مدير مالية اللاذقية، مستندًا إلى خبرة واسعة في المجالات المحاسبية والمالية والضريبية. انطلقت مسيرة المكتب كمكتب متخصص في المحاسبة والاستشارات المالية والضريبية، وركّز منذ تأسيسه على مسك الدفاتر المحاسبية، وإعداد الميزانيات الختامية، والإشراف والمتابعة المحاسبية للشركات والمؤسسات والأفراد وفق أعلى معايير الدقة والمهنية.",
      en: "Our office was founded in 1981 by Mr. Mohammed Hashem Al-Soufi, former Director of Finance for Lattakia, building on deep experience in accounting, finance and tax. It began as an office specialising in accounting and financial and tax advice, focused on bookkeeping, year-end financial statements, and accounting supervision for companies, institutions and individuals, to the highest standards of accuracy and professionalism."
    },
    history: [
      { year: "1981", text: { ar: "تأسيس المكتب على يد الأستاذ محمد هاشم الصوفي كمكتب متخصص في المحاسبة والاستشارات المالية والضريبية.", en: "Founded by Mr. Mohammed Hashem Al-Soufi as an accounting, financial and tax advisory office." } },
      { year: "1997", text: { ar: "إدخال أنظمة الحاسوب وبدء توزيع برنامج الأمين للمحاسبة والمستودعات في محافظة اللاذقية، كأحد أوائل المكاتب التي قدّمت الحلول البرمجية المحاسبية المتكاملة.", en: "Brought computers into the office and began distributing Al-Ameen accounting and warehouse software in Lattakia, one of the first offices to offer complete accounting software solutions." } },
      { year: "2010", text: { ar: "إضافة ملحقات وأنظمة نقاط البيع: أجهزة الباركود والكاشير وطابعات الفواتير والملصقات، لنقدّم البرمجيات والأجهزة والخدمات المهنية تحت سقف واحد.", en: "Added point-of-sale systems and accessories: barcode scanners, cash registers, and receipt and label printers, bringing software, hardware and professional services under one roof." } },
      { year: { ar: "اليوم", en: "Today" }, text: { ar: "أكثر من أربعة عقود من الخبرة في الحلول المحاسبية والضريبية، وبرنامج الأمين، والإشراف المحاسبي، وإدارة المستودعات، وأنظمة نقاط البيع، والحلول التقنية الحديثة.", en: "More than four decades of experience across accounting and tax, Al-Ameen software, accounting supervision, warehouse management, point-of-sale systems and modern technology." } }
    ],
    vision: { ar: "أن نكون الشريك الأول للشركات والمؤسسات في مجال الحلول المحاسبية والتقنية، من خلال تقديم خدمات احترافية تجمع بين الخبرة العريقة والتكنولوجيا الحديثة.", en: "To be the first-choice partner for companies and institutions in accounting and technology solutions, through professional services that combine long experience with modern technology." },
    mission: { ar: "توفير حلول متكاملة تساعد عملاءنا على إدارة أعمالهم بكفاءة ودقة، وتحقيق نمو مستدام من خلال الخبرة المهنية والدعم المستمر.", en: "To provide complete solutions that help our clients run their businesses efficiently and accurately, and grow sustainably through professional expertise and ongoing support." },
    team: [] // { name:{ar,en}, role:{ar,en}, image:"images/..." }
  },

  // ⚠️ عملاء مثال — انشر أسماء العملاء فقط بموافقتهم. / Sample clients — only list real clients with their permission.
  clients: [
    { name: { ar: "عميل ١ (مثال)", en: "Client 1 (sample)" }, logo: "" },
    { name: { ar: "عميل ٢ (مثال)", en: "Client 2 (sample)" }, logo: "" },
    { name: { ar: "عميل ٣ (مثال)", en: "Client 3 (sample)" }, logo: "" },
    { name: { ar: "عميل ٤ (مثال)", en: "Client 4 (sample)" }, logo: "" }
  ],

  // ⚠️ آراء مثال — لا تنشر إلا آراء حقيقية بموافقة أصحابها. / Sample reviews — publish only real reviews, with permission.
  testimonials: [
    { quote: { ar: "نص رأي العميل هنا (مثال).", en: "Client review text goes here (sample)." }, name: { ar: "اسم العميل (مثال)", en: "Client name (sample)" }, role: { ar: "صاحب شركة", en: "Business owner" } },
    { quote: { ar: "نص رأي العميل هنا (مثال).", en: "Client review text goes here (sample)." }, name: { ar: "اسم العميل (مثال)", en: "Client name (sample)" }, role: { ar: "مدير مالي", en: "Finance manager" } },
    { quote: { ar: "نص رأي العميل هنا (مثال).", en: "Client review text goes here (sample)." }, name: { ar: "اسم العميل (مثال)", en: "Client name (sample)" }, role: { ar: "رائد أعمال", en: "Entrepreneur" } }
  ],

  // ⚠️ أخبار مثال / sample news. date بصيغة YYYY-MM-DD
  news: [
    { title: { ar: "عنوان الخبر (مثال)", en: "News headline (sample)" }, date: "2026-10-01", text: { ar: "ملخص قصير للخبر أو التحديث.", en: "A short summary of the news or update." }, image: "images/pos-kit.jpg" },
    { title: { ar: "دورة تدريبية جديدة على برنامج الأمين (مثال)", en: "New Al-Ameen training course (sample)" }, date: "2026-09-15", text: { ar: "ملخص قصير للخبر أو التحديث.", en: "A short summary of the news or update." }, image: "images/accounting-calc.jpg" },
    { title: { ar: "وصول أجهزة نقاط بيع جديدة (مثال)", en: "New POS devices in stock (sample)" }, date: "2026-09-01", text: { ar: "ملخص قصير للخبر أو التحديث.", en: "A short summary of the news or update." }, image: "images/pos-counter.jpg" }
  ],

  cta: {
    title: { ar: "جاهز تبدأ؟ تواصل معنا اليوم", en: "Ready to get started? Talk to us today" },
    text: { ar: "أخبرنا عن عملك، وسنساعدك في اختيار الحل المحاسبي أو التقني المناسب.", en: "Tell us about your business, and we'll help you choose the right accounting or technology solution." }
  }
};
