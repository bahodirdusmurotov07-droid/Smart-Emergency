const Comment = {
    // 1. Izoh kiritish oynasi
    render: (data) => {
        const safeData = data || { name: "Shoshilinch yordam", fromScreen: "home" };
        return `
            <div class="flex flex-col justify-between h-full w-full p-6 bg-white">
                <div>
                    <div class="flex justify-between items-center pb-3 border-b border-gray-100 mb-4">
                        <h3 class="font-black text-gray-900 text-base">Qo'shimcha izoh</h3>
                        <button onclick="App.showScreen('${safeData.fromScreen || 'home'}')" class="text-xs text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-xl">Orqaga</button>
                    </div>

                    <div class="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 mb-4">
                        <p class="text-[11px] text-gray-500 font-medium">Chaqiruv turi:</p>
                        <p class="text-sm font-black text-gray-800">${safeData.name}</p>
                    </div>

                    <label class="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Vaziyat yoki manzil bo'yicha izoh:</label>
                    <textarea id="callCommentInput" rows="4" placeholder="Masalan: Bemorning chap qo'li uvishgan, xonadon kodi: #123..." class="w-full p-3.5 border border-gray-200 rounded-2xl text-xs focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50/50 resize-none font-medium"></textarea>
                </div>

                <div class="space-y-2.5">
                    <button onclick="Comment.submit(true)" class="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 active:scale-95 text-white rounded-2xl font-bold text-sm shadow-xl shadow-red-200 transition-all">
                        Chaqiruvni Yuborish &rarr;
                    </button>
                    <button onclick="Comment.submit(false)" class="w-full py-3 bg-gray-100 active:bg-gray-200 text-gray-700 rounded-2xl font-bold text-xs">
                        Izohsiz davom etish
                    </button>
                </div>
            </div>
        `;
    },

    // 2. Izohni yuborish
    submit: (withComment) => {
        const inputEl = document.getElementById('callCommentInput');
        const text = (withComment && inputEl) ? inputEl.value.trim() : '';
        
        if (!App.pendingData) {
            App.pendingData = MedicalData.my_card;
        }
        
        App.pendingData.userComment = text || "Qo'shimcha izoh kiritilmadi";
        App.startCountdown();
    }
};
