const HistoryPanel = {
    // Standart arxiv ma'lumotlari (agar bo'sh bo'lsa)
    getDefaultHistory: () => [
        {
            id: "SE-9021",
            date: "12.06.2025 | 14:20",
            title: "O'zimga yordam (Insult shubhasi)",
            doctor: "14-Brigada (Dr. Aliyev)",
            diagnosis: "Tranzitor ishemik ataka (TIA), Gipertonik kriz",
            prescription: ["Magneziya 25% — 5.0 i/m", "Kaptopril 25mg — til ostiga", "Kardiolog / Nevrolog nazorati"],
            status: "Gospitalizatsiya qilingan (1-Shahar Shifoxonasi)"
        },
        {
            id: "SE-7840",
            date: "04.02.2025 | 09:15",
            title: "Otamga yordam (Qon bosimi ko'tarilishi)",
            doctor: "08-Kardiologik Brigada",
            diagnosis: "Arterial gipertenziya 3-daraja",
            prescription: ["Enalapril 10mg — 1 mahal", "Asparkam — 1 tab x 2 mahal"],
            status: "Joyida yordam ko'rsatildi"
        }
    ],

    // Tarixni olish
    getRecords: () => {
        const data = localStorage.getItem('se_call_history');
        if (!data) {
            const defaults = HistoryPanel.getDefaultHistory();
            localStorage.setItem('se_call_history', JSON.stringify(defaults));
            return defaults;
        }
        return JSON.parse(data);
    },

    // Yangi chaqiruvni arxivga yozish
    addRecord: (callData) => {
        const list = HistoryPanel.getRecords();
        const now = new Date();
        const dateStr = `${now.toLocaleDateString('uz-UZ')} | ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const newEntry = {
            id: "SE-" + Math.floor(1000 + Math.random() * 9000),
            date: dateStr,
            title: `${callData.name} (${callData.badgeText.split(':')[0]})`,
            doctor: "14-Reanimatsiya Brigadasi",
            diagnosis: callData.history || "Shoshilinch tibbiy yordam",
            prescription: ["Brigada ko'rigi asosida belgilanadi"],
            status: "Bajarilmoqda / Faol chaqiruv"
        };

        list.unshift(newEntry);
        localStorage.setItem('se_call_history', JSON.stringify(list));
    },

    // Tarix va E-Retseptlar sahifasini chizish
    render: () => {
        const records = HistoryPanel.getRecords();

        const cardsHTML = records.map(rec => `
            <div class="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm space-y-2.5 text-left">
                <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span class="font-mono text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">${rec.id}</span>
                    <span class="text-[10px] text-gray-400 font-semibold">${rec.date}</span>
                </div>

                <div>
                    <h4 class="text-sm font-black text-gray-900 leading-tight">${rec.title}</h4>
                    <p class="text-[11px] text-blue-700 font-semibold mt-0.5">Brigada: ${rec.doctor}</p>
                </div>

                <div class="bg-gray-50 p-2.5 rounded-2xl border border-gray-100 text-xs">
                    <p class="text-[10px] font-bold text-gray-500 uppercase">Dastlabki tashxis:</p>
                    <p class="text-gray-800 font-medium mt-0.5">${rec.diagnosis}</p>
                </div>

                <!-- E-Retseptlar -->
                <div class="bg-emerald-50/70 p-2.5 rounded-2xl border border-emerald-100 text-xs space-y-1">
                    <p class="text-[10px] font-bold text-emerald-900 uppercase flex items-center gap-1">
                        <span>💊</span> Elektron Retsept / Tavsiya:
                    </p>
                    <ul class="pl-3 space-y-0.5 text-[11px] text-emerald-950 list-disc">
                        ${rec.prescription.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>

                <div class="flex justify-between items-center text-[10px] pt-1">
                    <span class="text-gray-500 font-medium">Holat:</span>
                    <span class="font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded-md">${rec.status}</span>
                </div>
            </div>
        `).join('');

        return `
            <div class="flex flex-col justify-between h-full w-full p-5 bg-gray-50 overflow-y-auto">
                <div>
                    <div class="flex justify-between items-center pb-3 border-b border-gray-200 mb-4">
                        <div class="flex items-center space-x-2">
                            <div class="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-base shadow-md">
                                📋
                            </div>
                            <div>
                                <h3 class="font-black text-gray-900 text-sm leading-tight">Chaqiruvlar Tarixi</h3>
                                <p class="text-[10px] text-gray-500">Elektron retseptlar va xulosalar</p>
                            </div>
                        </div>
                        <button onclick="App.showScreen('home')" class="text-xs text-gray-500 font-bold bg-white px-3 py-1.5 rounded-xl border border-gray-200">Orqaga</button>
                    </div>

                    <div class="space-y-3">
                        ${cardsHTML}
                    </div>
                </div>

                <button onclick="App.showScreen('home')" class="w-full py-3.5 bg-gray-200 text-gray-800 rounded-2xl font-bold text-xs mt-4">
                    Bosh sahifaga qaytish
                </button>
            </div>
        `;
    }
};
