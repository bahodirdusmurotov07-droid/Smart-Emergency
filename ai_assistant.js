const AIAssistant = {
    // Har bir holat uchun maxsus AI birinchi yordam ko'rsatmalari
    protocols: {
        my_card: {
            title: "Insult shubhasi bo'yicha AI protokoli",
            urgency: "Kritik holat — Har bir daqiqa muhim!",
            dos: [
                "Bemorni zudlik bilan chalqancha yotqizing va boshini 30° balandlikda tuting.",
                "Nafas yo'llari erkin bo'lishi uchun yoqa tugmalari va kamarni bo'shating.",
                "Xonaga toza havo kirishi uchun darhol derazalarni oching."
            ],
            donts: [
                "Qat'iyan suv, dori vositalari yoki ovqat bermang (yutish refleksi buzilgan bo'lishi mumkin)!",
                "Bemorning o'rnidan turishiga yoki harakatlanishiga yo'l qo'ymang."
            ],
            allergyWarning: "⚠️ Eslatma: Bemorning Penitsillinga allergiyasi bor!"
        },
        father_card: {
            title: "Yurak / Qon bosimi xuruji protokoli",
            urgency: "O'tkir holat — Tinchlik ta'minlansin",
            dos: [
                "Bemorni to'liq tinch holatda yotqizing, harakatlanishiga yo'l qo'ymang.",
                "Peshona va bo'yin sohasiga sovuq nam mato qo'ying.",
                "Nafas olish tezligi va pulsni muntazam tekshirib turing."
            ],
            donts: [
                "Shifokor ko'rsatmasisiz o'zboshimchalik bilan kuchli dori ichirmang.",
                "Bemorni vahimaga soladigan harakatlardan saqlaning."
            ],
            allergyWarning: null
        },
        mother_card: {
            title: "Qandli diabet / Gipertoniya protokoli",
            urgency: "Surunkali kasallik nazorati",
            dos: [
                "Bemorni qulay yarim o'tirgan holatda joylashtiring.",
                "Agar tonometr bo'lsa, qon bosimini o'lchab qo'ying.",
                "Agar hushida bo'lsa va qand tushishi (gipoglikemiya) alomati bo'lsa, ozgina shirin choy bering."
            ],
            donts: [
                "Bemor holsiz yoki hushsiz bo'lsa, og'ziga suyuqlik quymang."
            ],
            allergyWarning: "⚠️ Eslatma: Bemorning Aspirin guruhiga sezgirligi mavjud."
        },
        child_card: {
            title: "Bolalar uchun tezkor yordam",
            urgency: "Tana harorati / Umumiy holat",
            dos: [
                "Bolaning ortiqcha qalin kiyimlarini yeching.",
                "Tana harorati yuqori bo'lsa, peshona va qo'ltiq osti sohasini iliq nam mato bilan arting.",
                "Bolani tinchlantiring va ko'proq suyuqlik (iliq suv) ichiring."
            ],
            donts: [
                "Bolaga kattalar dozasidagi dori vositalarini bermang.",
                "Spirt yoki sirka bilan badanini artmang."
            ],
            allergyWarning: null
        },
        stranger_red: {
            title: "Hushsiz holatdagi bemor protokoli",
            urgency: "Shoshilinch reanimatsiya holati",
            dos: [
                "Nafas yo'llari ochiqligini tekshiring (boshni ehtiyotkorlik bilan yon tomonga buring).",
                "Puls va ko'krak qafasining ko'tarilib-tushishini tekshiring.",
                "Tez yordam yetib kelguncha bemorning yonidan ketmang."
            ],
            donts: [
                "Umurtqa pog'onasi shikastlangan bo'lishi ehtimoli bor, keskin qimirlatmang!",
                "Hushsiz bemorning og'ziga suv quymang yoki tabletka solmang."
            ],
            allergyWarning: null
        },
        stranger_red_car: {
            title: "Avtohalokat / YTH jarohati protokoli",
            urgency: "Travma va sinish xavfi",
            dos: [
                "Avtomobil xavfsiz holatda ekaniga ishonch hosil qiling (alangalanish xavfi yo'qligi).",
                "Bemorning qon ketayotgan joylarini aniqlang va bosuvchi bog'lam qo'ying."
            ],
            donts: [
                "Zaruratsiz bemorni mashinadan tortib sug'urib olmang (boyin va umurtqa sinishi xavfi)."
            ],
            allergyWarning: null
        },
        stranger_yellow: {
            title: "O'tkir qon ketish protokoli",
            urgency: "Gemostaz (Qon to'xtatish)",
            dos: [
                "Qon oqayotgan joyga toza mato yoki bint bilan qattiq bosib turing.",
                "Zararlangan a'zoni (qo'l yoki oyoq) yurak sathidan balandroq ko'taring."
            ],
            donts: [
                "Yaraga begona vositalar (kul, tuproq va h.k.) sepmang."
            ],
            allergyWarning: null
        },
        stranger_green: {
            title: "Umumiy birinchi yordam protokoli",
            urgency: "Standart kuzatuv",
            dos: [
                "Bemorni xavfsiz va toza havosi bor joyga o'tqazing.",
                "Holatini doimiy so'rab turing va tinchlantiring."
            ],
            donts: [],
            allergyWarning: null
        }
    },

    // AI Ko'rsatma blokining vizual qismi (HTML)
    renderInstructionCard: (cardKey) => {
        const proto = AIAssistant.protocols[cardKey] || AIAssistant.protocols.stranger_green;

        const dosList = proto.dos.map(item => `
            <li class="flex items-start space-x-2 text-emerald-900 text-xs">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>${item}</span>
            </li>
        `).join('');

        const dontsList = proto.donts.length > 0 ? proto.donts.map(item => `
            <li class="flex items-start space-x-2 text-rose-900 text-xs">
                <span class="text-rose-600 font-bold">✗</span>
                <span>${item}</span>
            </li>
        `).join('') : '';

        return `
            <div class="bg-gradient-to-br from-red-50/90 via-amber-50/50 to-white p-4 rounded-3xl border border-red-100/80 shadow-sm text-left space-y-3 w-full">
                <!-- Header -->
                <div class="flex items-center justify-between border-b border-red-100 pb-2.5">
                    <div class="flex items-center space-x-2">
                        <div class="w-7 h-7 bg-red-600 rounded-xl flex items-center justify-center text-white text-xs shadow-md shadow-red-200">
                            🤖
                        </div>
                        <div>
                            <h4 class="font-black text-gray-900 text-xs leading-tight">${proto.title}</h4>
                            <p class="text-[10px] text-red-600 font-bold tracking-tight">${proto.urgency}</p>
                        </div>
                    </div>
                    <span class="text-[10px] bg-red-100/80 text-red-700 font-black px-2 py-0.5 rounded-lg uppercase tracking-wider">AI Live</span>
                </div>

                <!-- Bajarilishi kerak bo'lganlar (DOs) -->
                <div>
                    <p class="text-[11px] font-bold text-emerald-800 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                        <span>🟢</span> Tezkorlik bilan bajaring:
                    </p>
                    <ul class="space-y-1.5 pl-1">
                        ${dosList}
                    </ul>
                </div>

                <!-- Qat'iyan taqiqlanganlar (DONTs) -->
                ${dontsList ? `
                <div class="pt-2 border-t border-red-50">
                    <p class="text-[11px] font-bold text-rose-800 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                        <span>🔴</span> Qat'iyan taqiqlanadi:
                    </p>
                    <ul class="space-y-1.5 pl-1">
                        ${dontsList}
                    </ul>
                </div>
                ` : ''}

                <!-- Allergiya ogohlantirishi -->
                ${proto.allergyWarning ? `
                <div class="bg-amber-100/80 p-2.5 rounded-2xl border border-amber-200 text-[11px] font-bold text-amber-900">
                    ${proto.allergyWarning}
                </div>
                ` : ''}
            </div>
        `;
    }
};
