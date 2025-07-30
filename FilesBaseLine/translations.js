const translations = {
    en: {
        // Login page
        emailPlaceholder: "Email",
        nextButton: "Next >",
        
        // Language selection
        selectLanguage: "Select Language",
        
        // Module 1 - Social Engineering
        socialEngineeringTitle: "Social Engineering",
        socialEngineeringContent: "Imagine a clever con artist who doesn't hack computers but hacks your trust! Social engineering is all about tricking you into giving away secrets, like a smooth talker convincing you to lend them your house key by asking for a cup of sugar.",
        quickQuestion: "Quick Question",
        questionText: "Which of the following is a scenario trying to trick you?",
        option1: "You receive an email from ceo@iq.zian.com welcoming you and give you link to boarding video",
        option2: "Someone follows you when you open the automatic door on the 7 floor",
        option3: "A coworker forgets their ID badge in the break room, and someone finds it and enters restricted areas after hours",
        option4: "You notice a stranger rummaging through the office's discarded paperwork behind the building",
        
        // Module 2 - Password Hygiene
        passwordHygieneTitle: "Password Hygiene",
        passwordHygieneContent: "Good password hygiene is your first line of defense in the digital world, just like locking your front door. Using strong, unique passwords can keep hackers at bay and protect your personal information.",
        bestPractices: "Best practices include:",
        practice1: "Passwords should be long and complex.",
        practice2: "Ensure the password is random.",
        practice3: "Implement multi-factor authentication.",
        practice4: "Do not reuse the same password.",
        passwordTester: "Password Tester",
        passwordPlaceholder: "Enter your password",
        submitButton: "Submit",
        
        // Password messages
        passwordWeak: "Your password needs: ",
        passwordStrong: "This is a strong password!",
        needsCharacters: "10+ characters",
        needsNumber: "a number",
        needsSymbol: "a symbol",
        
        // Module 3 - Device Security
        deviceSecurityTitle: "Device Security",
        deviceSecurityContent: "Malware is malicious software designed to damage or gain unauthorized access to your devices. Keeping your system updated, using antivirus software, and following safe browsing habits can help protect you.",
        stayAlert: "Stay alert – a secure device is your best defense!",
        malwareExamples: "Malware Examples: File Extensions",
        lessSuspicious: "Less Suspicious Extensions",
        moreSuspicious: "More Suspicious Extensions",
        spotMalware: "Spot the Malware Game",
        spotMalwareText: "Select the file that is more likely to be infected with malware.",
        zipContents: "Contents of Archive.zip",
        
        // Module 4 - Network Security
        networkSecurityTitle: "Network Security",
        networkSecurityContent: "Network security involves protecting data as it travels over networks and preventing unauthorized access to your systems. Implementing strong firewalls, secure Wi‑Fi settings, and using VPNs are crucial to safeguard your network.",
        networkBestPractices: "Best practices include:",
        networkPractice1: "Changing default passwords on routers and network devices",
        networkPractice2: "Enabling WPA3 (or at least WPA2) encryption on Wi‑Fi networks",
        networkPractice3: "Using a Virtual Private Network (VPN) for remote connections",
        networkPractice4: "Regularly updating firmware and monitoring network activity",
        wifiChallenge: "Wi‑Fi Security Challenge",
        wifiChallengeText: "Drag and drop the Wi‑Fi networks to arrange them from most secure to least secure.",
        finishButton: "Finish",
        
        // Congratulations
        congratulations: "Congratulations!"
    },
    
    ar: {
        // Login page
        emailPlaceholder: "البريد الإلكتروني",
        nextButton: "التالي >",
        
        // Language selection
        selectLanguage: "اختر اللغة",
        
        // Module 1 - Social Engineering
        socialEngineeringTitle: "الهندسة الإجتماعية",
        socialEngineeringContent: "تخيل أن هناك محتالاً ماكراً لا يخترق أجهزة الحاسوب، ولكنه يخترق ثقتك! الهندسة الاجتماعية هي فن الخداع، مثل متحدث معسول اللسان يجعلك تتنازل عن أسرارك، بنفس الطريقة التي ستسلم بها مفتاح منزلك، وكل ذلك بينما يطلبون فقط كوباً من السكر.",
        quickQuestion: "إختبار سريع",
        questionText: "أي من السيناريوهات التالية مصمم لخداعك؟",
        option1: "ستتلقى رسالة بريد إلكتروني من ceo@iq.zian.com يرحب بك ويوفر رابطًا لمقطع فيديو توجيهي.",
        option2: " عندما تفتح الباب الأوتوماتيكي للطابق السابع ويتبعك شخص عبر البوابة .",
        option3: "ينسى أحد زملاء العمل بطاقة هويته في غرفة الاستراحة، ويستخدمها شخص ما للوصول إلى المناطق المحظورة بعد ساعات العمل.",
        option4: "لاحظتَ شخصاً غير مألوف يبحث في مستندات المكتب المهملة خلف المبنى.",

        // Module 2 - Password Hygiene
        passwordHygieneTitle: "رصانة كلمة السر",
        passwordHygieneContent: "يُعدّ الحفاظ على كلمة مرور آمنة خط دفاعك الأول في العالم الرقمي، تماماً مثل قفل باب منزلك. يساعد استخدام كلمات مرور قوية وفريدة على إبعاد المتسللين وحماية معلوماتك الشخصية.",
        bestPractices: "تتضمن أفضل الممارسات ما يلي:",
        practice1: "يجب أن تكون كلمة السر طويلة ومُركّبة",
        practice2: "تأكد من أن كلمة السر عشوائية",
        practice3: "أضف خيار التحقّق من صحة الحساب",
        practice4: "لا تستخدم كلمة السر نفسها",
        passwordTester: "إختبار كلمة المرور",
        passwordPlaceholder: "أدخل كلمة المرور الخاصة بك",
        submitButton: "أرسل",
        
        // Password messages
        passwordWeak: "كلمة المرور الخاصة بك تحتاج إلى: ",
        passwordStrong: "هذه كلمة مرور قوية!",
        needsCharacters: "10+ أحرف",
        needsNumber: "رقم",
        needsSymbol: "رمز",
        
        // Module 3 - Device Security
        deviceSecurityTitle: "حماية الجهاز",
        deviceSecurityContent: "البرمجيات الخبيثة هي برمجيات مصممة لإلحاق الضرر بأجهزتك أو الوصول إليها دون تصريح. تحديث نظامك باستمرار، وتشغيل برنامج مكافحة الفيروسات، وممارسة التصفح الآمن، كلها عوامل تساعد في حمايتك.",
        stayAlert: "إبقَ متيقظاً - الجهاز الآمن هو أفضل دفاع لديك!",
        malwareExamples: "أمثلة على البرامج الضارة: ملحقات الملفات",
        lessSuspicious: "ملحقات آمنة",
        moreSuspicious: "ملحقات ضارة",
        spotMalware: "لعبة إكتشف البرمجيات الخبيثة",
        spotMalwareText: "حدد الملف المصاب بالبرامج الضارة.",
        zipContents: "محتويات Archive.zip",
        
        // Module 4 - Network Security
        networkSecurityTitle: "أمن الشبكات",
        networkSecurityContent: "أمن الشبكة يعني حماية البيانات أثناء انتقالها عبر الشبكات ومنع الوصول غير المصرح به إلى أنظمتك. يُعدّ تطبيق جدران حماية قوية، وتأمين إعدادات Wi-Fi، واستخدام شبكات VPN أمراً أساسياً لحماية شبكتك.",
        networkBestPractices: "تتضمن أفضل الممارسات ما يلي:",
        networkPractice1: "تغيير كلمات المرور الإفتراضية على أجهزة التوجيه (راوتر) وأجهزة الشبكة",
        networkPractice2: "تمكين تشفير WPA3 (أو على الأقل WPA2) على شبكات Wi-Fi",
        networkPractice3: "إستخدام شبكة خاصة افتراضية (VPN) للاتصالات عن بعد",
        networkPractice4: "تحديث البرامج الثابتة ومراقبة نشاط الشبكة بانتظام",
        wifiChallenge: "تحدي أمان شبكة Wi-Fi",
        wifiChallengeText: "رتّب شبكات Wi-Fi من الأكثر أماناً إلى الأقل أماناً",
        finishButton: "إنهاء",
        
        // Congratulations
        congratulations: "تهانينا!"
    },
    
    ku: {
        // Login page
        emailPlaceholder: "ئیمەیڵ",
        nextButton: "دواتر >",
        
        // Language selection
        selectLanguage: "زمان دیاری بکە",
        
        // Module 1 - Social Engineering
        socialEngineeringTitle: "ئەندازیاری کۆمەڵایەتی",
        socialEngineeringContent: "بێنە بەرچاوی خۆت فریودەرێکی تەڵەکەباز هەیە ئامێرەکانی کۆمپیوتەر هاك ناکات، بەڵکو متمانەکەت هاك دەکات! ئەندازیاری کۆمەڵایەتی هونەری فێڵکردنە، وەک قسەکەرێکی شیرینزمان وات لێدەکات نهێنییەکانت بدرکێنیت، وەك ئەوەی کلیلی ماڵەکەتی تەسلیم بکەیت، و هەموو ئەمانەش لەکاتێکدایە کە تەنها داوای کوپێك شەکر دەکەن",
        quickQuestion: "تاقیکردنەوەیەکی خێرا",
        questionText: "کام لە سیناریۆیانەی خوارەوە بۆ فریودانت دانراون؟",
        option1: "ئیمەیڵێکت بۆ دێت لە ceo@iq.zian.com کە بەخێرهاتنت دەکات و لینکێك بۆ ڤیدیۆیەکی ڕێنماییکاری تێدایە.",
        option2: "کاتێک دەرگا ئۆتۆماتیکییەکەی نهۆمی حەوتەم دەکەیتەوە.",
        option3: "یەکێک لە هاوکارانت ناسنامەکەی لە ژوورێکی پشوودان لە بیر دەکات، کەسێکی دیکە لەدوای کاتژمێرەکانی کارکردندا بەکاری دەهێنێت بۆ ئەوەی خۆی بگەیەنێتە شوێنە قەدەغەکراوەکان.",
        option4: "تێبینی کەسێکی نامۆت کردووە لە پشتی باڵەخانەکەوە بەدوای بەڵگەنامە پشتگوێخراوەکانی ئۆفیسەکەتدا دەگەڕێت",
        
        // Module 2 - Password Hygiene
        passwordHygieneTitle: "پتەوی پاسوۆرد",
        passwordHygieneContent: "پاراستنی پاسوۆرد و وشەی نهێنی پارێزراو لە جیهانی دیجیتاڵیدا یەکەم هێڵی بەرگریت دەبێت، وەك قفڵکردنی دەرگای ماڵەکەت وایە. بەکارهێنانی پاسوۆرد و وشەی نهێنی بەهێز و جیاواز یارمەتیت دەدات بۆ دوورخستنەوەی هاککەران و پاراستنی زانیاری کەسیەکانت.",
        bestPractices: "باشترین ڕێکارەکان ئەمانەن:",
        practice1: "پێویستە پاسوۆرد درێژ و ئاڵۆز بێت",
        practice2: "دڵنیابە لەوەی پاسوۆردەکە هەڕەمەکی نەبێت",
        practice3: "بژاردەی پشتڕاستکردنەوەی دروستی هەژمار زیاد بکە",
        practice4: "هەمان پاسوۆرد بەکارمەهێنە",
        passwordTester: "تاقیکردنەوەی پاسوۆرد",
        passwordPlaceholder: "پاسوۆردی تایبەتی خۆت بنووسە",
        submitButton: "بینێرە",
        
        // Password messages
        passwordWeak: "پاسوۆردەکەت پێویستی بەمانەیە: ",
        passwordStrong: "ئەمە پاسوۆردێکی بەهێزە!",
        needsCharacters: "10+ پیت",
        needsNumber: "ژمارەیەک",
        needsSymbol: "نیشانەیەک",
        
        // Module 3 - Device Security
        deviceSecurityTitle: "پاراستنی ئامێر",
        deviceSecurityContent: "پرۆگرامی زیانبەخش سۆفتوێری دروستکراوە بۆ زیانگەیاندن بە ئامێرەکانت یان گەیشتن پێیان بەبێ ڕێگەپێدان. نوێکردنەوەی سیستەمەکەت بە بەردەوامی، کارپێکردنی پرۆگرامەکانی دژە ڤایرۆس، و بەکارهێنانی پارێزراو، هەموو ئەمانە دەتپارێزن.",
        stayAlert: "ئاگاداربە - ئامێری پارێزراو باشترین بەرگری تۆیە!",
        malwareExamples: "نموونە لە پرۆگرامە زیانبەخشەکان: پاشکۆی فایلەکان",
        lessSuspicious: "پاشکۆی پارێزراو",
        moreSuspicious: "پاشکۆی زیانبەخش",
        spotMalware: "یاری دۆزینەوە پرۆگرامە زیانبەخشەکان",
        spotMalwareText: "فایلی تووشبوو بە پرۆگرامی زیانبەخش دەستنیشان بکە.",
        zipContents: "ناوەڕۆکی Archive.zip",
        
        // Module 4 - Network Security
        networkSecurityTitle: "ئاسایشی تۆڕەکان",
        networkSecurityContent: "ئاسایشی تۆڕ واتە پاراستنی داتاکان لە کاتی گواستنەوەیان بە ناو تۆڕەکاندا و ڕێگرتن لە گەیشتنی بێ پرس بۆ سیستەمەکانت. جێبەجێکردنی دیواری پاراستنی بەهێز، پارێزراوکردنی ڕێکخستنەکانی Wi-Fi، و بەکارهێنانی تۆڕی VPN کاری بنەڕەتین بۆ پاراستنی تۆڕەکەت.",
        networkBestPractices: "باشترین ڕێکارەکان ئەمانە لەخۆدەگرن:",
        networkPractice1: "گۆڕینی پاسوۆردی گریمانەیی لەسەر ئامێرەکانی (ڕاوتەر) و ئامێرەکانی تۆڕ",
        networkPractice2: "کاراکردنی شیفرەکردنی WPA3 (یان لانیکەم WPA2) لەسەر تۆڕەکانی Wi-Fi",
        networkPractice3: "بەکارهێنانی تۆڕی تایبەتی گریمانەیی (VPN) بۆ پەیوەندیکردن لە دوورەوە.",
        networkPractice4: "بە رێکوپێکی نوێکردنەوەی سۆفتوێرە جێگیرەکان و چاودێریکردنی چالاکی تۆڕ",
        wifiChallenge: "ئالنگاریی ئاسایشی تۆڕی Wi-Fi",
        wifiChallengeText: "تۆڕەکانی Wi-Fi ڕێکبخە لە پارێزراوترینەوە بۆ کەم پارێزراوترین",
        finishButton: "تەواوکردن",
        
        // Congratulations
        congratulations: "پیرۆزبایی!"
    }
};
