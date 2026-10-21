// كل محتوى الموقع هنا. عدّل القيم فقط. الحقول {ar, en} نص بكل لغة.
// Edit the values only. {ar, en} fields hold text for each language.
// ⚠️ كل ما يحتوي على "مثال" أو "sample" أو ⚠️ هو محتوى مؤقت — استبدله بالبيانات الحقيقية قبل النشر.
// ⚠️ Anything marked "sample", "مثال" or ⚠️ is placeholder content — replace it with real details before going live.
export default {
  name: { ar: "مكتب الامين للمحاسبه", en: "Al Ameen Accounting Office" }, // ⚠️ تأكد من الاسم الإنجليزي / confirm the English name
  tagline: { ar: "حلول محاسبية ومهنية بثقة ووضوح", en: "Accounting and professional services you can trust" },
  intro: {
    ar: "نقدّم خدمات المحاسبة والاستشارات للأفراد والشركات، بفريق يجمع الخبرة والدقة والالتزام بالمواعيد.",
    en: "We provide accounting and advisory services to individuals and companies, with an experienced team that is accurate and on time."
  },
  logo: "", // مثال: "/logo.png" (ضع الملف في مجلد public)
  heroImage: "", // مثال: "/hero.jpg"
  web3formsKey: "ضع_مفتاح_Web3Forms_هنا", // ⚠️ من web3forms.com
  phone: "+963947412914",
  whatsapp: "963947412914", // بدون + أو أصفار / no + or leading zeros
  email: "ameen.hsoufi@gmail.com",
  address: { ar: "اللاذقية، سوق التجار، مقابل الطيارة، سوريا", en: "Souq al-Tujjar, opposite the airplane, Lattakia, Syria" },
  hours: { ar: "الأحد – الخميس: 9 ص – 5 م", en: "Sun – Thu: 9 AM – 5 PM" }, // ⚠️
  mapEmbed: "https://www.google.com/maps?q=35.516361,35.776444&z=16&output=embed", // رابط التضمين من Google Maps
  social: { instagram: "", facebook: "", linkedin: "", youtube: "", x: "" }, // اترك الفارغ ليُخفى

  // أرقام سريعة تظهر تحت الواجهة. اترك القائمة فارغة لإخفائها. / Quick stats under the hero; empty list hides them.
  stats: [ // ⚠️ أرقام مثال / sample numbers
    { value: "30+", label: { ar: "سنوات خبرة", en: "Years of experience" } },
    { value: "200+", label: { ar: "عميل", en: "Clients served" } },
    { value: "24h", label: { ar: "زمن الرد", en: "Response time" } }
  ],

  // كل الخدمات تظهر في "خدماتنا". الخدمات التي فيها featured:true تظهر أيضًا في "خدمات مميزة" مع details.
  // All services appear in the overview. Those with featured:true also appear in "Featured services" with their details.
  services: [
    { title: { ar: "المحاسبة ومسك الدفاتر", en: "Accounting & Bookkeeping" }, text: { ar: "تسجيل يومي دقيق للحسابات وتقارير مالية شهرية واضحة.", en: "Accurate daily bookkeeping and clear monthly financial reports." },
      featured: true, details: { ar: "نتولى قيودك اليومية والتسويات البنكية والتقارير الشهرية، لتعرف وضع عملك المالي في أي وقت.", en: "We handle your daily entries, bank reconciliations and monthly reports, so you always know where your business stands." }, image: "" },
    { title: { ar: "الضرائب وضريبة القيمة المضافة", en: "Tax & VAT" }, text: { ar: "التسجيل الضريبي وإعداد الإقرارات وتقديمها في مواعيدها.", en: "Tax registration, and preparing and filing returns on time." },
      featured: true, details: { ar: "نتابع مواعيد الإقرارات ونجهزها بدقة لتجنب الغرامات، ونجيب عن استفساراتك الضريبية.", en: "We track filing deadlines and prepare returns carefully to avoid penalties, and answer your tax questions." }, image: "" },
    { title: { ar: "المراجعة والتدقيق", en: "Audit & Review" }, text: { ar: "مراجعة القوائم المالية والتأكد من سلامتها.", en: "Review of financial statements to confirm they are sound." },
      featured: true, details: { ar: "نراجع قوائمك المالية وأنظمتك الداخلية ونقدم توصيات عملية للتحسين.", en: "We review your financial statements and internal controls and give practical recommendations." }, image: "" },
    { title: { ar: "الاستشارات المالية", en: "Financial Advisory" }, text: { ar: "تخطيط الميزانيات والتدفقات النقدية ودراسات الجدوى.", en: "Budgeting, cash-flow planning and feasibility studies." }, image: "" },
    { title: { ar: "تأسيس الشركات", en: "Company Setup" }, text: { ar: "مساعدتك في تسجيل الشركة والتراخيص والمتطلبات النظامية.", en: "Help with company registration, licences and compliance." }, image: "" },
    { title: { ar: "الرواتب", en: "Payroll" }, text: { ar: "إعداد كشوف الرواتب وحساب المستحقات بدقة.", en: "Payroll preparation and accurate calculation of entitlements." }, image: "" }
  ],

  about: {
    story: { ar: "تأسس المكتب على فكرة بسيطة: خدمة واضحة ونتيجة يمكن الاعتماد عليها. نعمل مع عملائنا بشفافية من أول استشارة حتى التسليم.", en: "The office was founded on a simple idea: a clear service and a result you can rely on. We work transparently with clients from first consultation to delivery." },
    vision: { ar: "أن نكون الشريك المهني الأول لعملائنا.", en: "To be our clients' first choice of professional partner." },
    mission: { ar: "تقديم خدمات دقيقة وسريعة بمعايير مهنية عالية.", en: "To deliver accurate, timely services to high professional standards." },
    team: [ { name: { ar: "الاسم هنا (مثال)", en: "Name here (sample)" }, role: { ar: "المسمى الوظيفي", en: "Job title" }, image: "" } ] // ⚠️
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
    { title: { ar: "عنوان الخبر (مثال)", en: "News headline (sample)" }, date: "2026-10-01", text: { ar: "ملخص قصير للخبر أو التحديث.", en: "A short summary of the news or update." }, image: "" },
    { title: { ar: "تذكير بموعد الإقرار الضريبي (مثال)", en: "Tax filing deadline reminder (sample)" }, date: "2026-09-15", text: { ar: "ملخص قصير للخبر أو التحديث.", en: "A short summary of the news or update." }, image: "" },
    { title: { ar: "خدمة جديدة (مثال)", en: "New service (sample)" }, date: "2026-09-01", text: { ar: "ملخص قصير للخبر أو التحديث.", en: "A short summary of the news or update." }, image: "" }
  ],

  // قسم الدعوة للتواصل قبل نموذج الاتصال / Call-to-action band above the contact form
  cta: {
    title: { ar: "جاهز تبدأ؟ تواصل معنا اليوم", en: "Ready to get started? Talk to us today" },
    text: { ar: "احجز استشارة مجانية وسنرد عليك خلال يوم عمل.", en: "Book a free consultation and we'll reply within one working day." } // ⚠️ تأكد من العرض / confirm the offer
  }
};
