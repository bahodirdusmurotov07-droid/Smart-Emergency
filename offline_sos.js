const OfflineSOS = {
    isOffline: !navigator.onLine,

    // Offline holatni kuzatib turuvchi tinglovchi
    init: () => {
        window.addEventListener('offline', () => {
            OfflineSOS.isOffline = true;
            OfflineSOS.showBanner(true);
        });
        window.addEventListener('online', () => {
            OfflineSOS.isOffline = false;
            OfflineSOS.showBanner(false);
        });
    },

    // Yuqori ogohlantirish lentasi
    showBanner: (show) => {
        let banner = document.getElementById('offlineBanner');
        if (show) {
            if (!banner) {
                banner = document.createElement('div');
                banner.id = 'offlineBanner';
                banner.className = 'w-full bg-stone-900 text-white text-[11px] font-bold py-1.5 px-3 flex items-center justify-between shrink-0 shadow-md';
                banner.innerHTML = `
                    <div class="flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                        <span>⚠️ Internet yo'q: Offline SMS rejimi faol</span>
                    </div>
                    <button onclick="App.showScreen('offline_sos_screen')" class="text-amber-300 underline text-[10px]">Batafsil</button>
                `;
                document.getElementById('app').prepend(banner);
            }
        } else {
            if (banner) banner.remove();
        }
    },

    // Offline SOS Ekran ko'rinishi
    render: (data) => {
        const safeData = data || MedicalData.my_card;
        const comment = safeData.userComment || "Izohsiz";
        
        // 103 dispetcheriga yuboriladigan siqilgan SMS shabloni
        const smsBody = `[SE-SOS] Bemor: ${safeData.name} | Xavf: ${safeData.badgeText} | Tarix: ${safeData.history} | Izoh: ${comment} | GPS: 41.3111, 69.2797`;
        const encodedSms = encodeURIComponent(smsBody);

        return `
            <div class="flex flex-col justify-between h-full w-full p-5 bg-white overflow-y-auto">
                <div>
                    <div class="flex justify-between items-center pb-3 border-b border-gray-100 mb-4">
                        <div class="flex items-center space-x-2">
                            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                            <h3 class="font-black text-gray-900 text-base">Offline SOS Rejimi</h3>
                        </div>
                        <button onclick="App.showScreen('home')" class="text-xs text-gray-500 font-bold bg-gray-100 px-3 py-1.5 rounded-xl">Chiqish</button>
                    </div>

                    <div class="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl mb-4 text-xs text-amber-900 space-y-1">
                        <p class="font-bold">📡 Internet aloqasi mavjud emas!</p>
                        <p class="text-[11px] text-amber-800">Chaqiruv ma'lumotlari to'g'ridan-to'g'ri 103 dispetcheriga shifrlangan SMS va Favqulodda qo'ng'iroq orqali uzatiladi.</p>
                    </div>

                    <!-- Tayyorlangan SMS paketi -->
                    <div class="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 mb-4 text-left">
                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Yuboriladigan SMS paketi:</p>
                        <p class="text-xs font-mono text-gray-800 bg-white p-2.5 rounded-xl border border-gray-100 select-all">${smsBody}</p>
                    </div>

                    <!-- Offline AI Ko'rsatmasi -->
                    ${typeof AIAssistant !== 'undefined' ? AIAssistant.renderInstructionCard(safeData.cardKey || 'my_card') : ''}
                </div>

                <div class="space-y-2.5 mt-4">
                    <!-- SMS orqali yuborish -->
                    <a href="sms:103?body=${encodedSms}" class="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 active:scale-95 text-white rounded-2xl font-bold text-sm shadow-xl shadow-amber-200 flex items-center justify-center gap-2">
                        <span>💬</span>
                        <span>103 ga SMS SOS Yuborish</span>
                    </a>

                    <!-- 103 ga to'g'ridan-to'g'ri qo'ng'iroq -->
                    <a href="tel:103" class="w-full py-3.5 bg-red-600 active:scale-95 text-white rounded-2xl font-bold text-sm shadow-xl shadow-red-200 flex items-center justify-center gap-2">
                        <span>📞</span>
                        <span>103 ga Favqulodda Qo'ng'iroq</span>
                    </a>

                    <button onclick="App.showScreen('home')" class="w-full py-2.5 text-xs text-gray-400 font-semibold">
                        Bosh sahifaga qaytish
                    </button>
                </div>
            </div>
        `;
    }
};
