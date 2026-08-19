const UI = {
    // 1. Asosiy SOS Dashboard
    renderHome: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-white">
            <div class="flex justify-between items-center w-full pb-2">
                <div class="flex items-center space-x-3">
                    <div class="w-11 h-11 bg-red-600 rounded-2xl flex items-center text-white font-black text-lg justify-center shadow-lg shadow-red-200">
                        SE
                    </div>
                    <div>
                        <h1 class="font-extrabold text-gray-900 text-base leading-tight">Smart Emergency</h1>
                        <p class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> GPS Faol
                        </p>
                    </div>
                </div>
                <button onclick="App.showScreen('profile')" class="text-xs font-bold text-red-600 bg-red-50 border border-red-100 px-3.5 py-2 rounded-xl active:scale-95 transition-all">
                    Tibbiy karta
                </button>
            </div>

            <div class="flex flex-col space-y-4 my-auto w-full">
                <button onclick="App.initiateCall('my_card', 'home')" class="w-full py-5 bg-gradient-to-r from-red-600 to-rose-600 active:scale-95 text-white rounded-3xl flex items-center px-5 shadow-xl shadow-red-200 transition-all">
                    <div class="w-13 h-13 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mr-4 shrink-0 p-2.5">🚨</div>
                    <div class="text-left">
                        <span class="text-xl font-extrabold block leading-tight">O'zimga Yordam</span>
                        <span class="text-xs text-red-100 font-medium">Karta ma'lumotlari to'liq uzatiladi</span>
                    </div>
                </button>

                <button onclick="App.showScreen('family')" class="w-full py-4.5 bg-gradient-to-r from-amber-500 to-orange-500 active:scale-95 text-white rounded-3xl flex items-center px-5 shadow-xl shadow-amber-200 transition-all">
                    <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mr-4 shrink-0 p-2">👨‍👩‍👧‍👦</div>
                    <div class="text-left">
                        <span class="text-lg font-bold block leading-tight">Oilamga Yordam</span>
                        <span class="text-xs text-amber-100 font-medium">Oila a'zosi kartasini tanlash</span>
                    </div>
                </button>

                <button onclick="App.showScreen('stranger')" class="w-full py-4.5 bg-gradient-to-r from-blue-600 to-indigo-600 active:scale-95 text-white rounded-3xl flex items-center px-5 shadow-xl shadow-blue-200 transition-all">
                    <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mr-4 shrink-0 p-2">👤</div>
                    <div class="text-left">
                        <span class="text-lg font-bold block leading-tight">Begonaga Yordam</span>
                        <span class="text-xs text-blue-100 font-medium">Tezkor vaziyatni belgilash</span>
                    </div>
                </button>
            </div>

            <!-- Pastki menyu -->
            <div class="flex justify-around items-center w-full border-t border-gray-100 pt-3">
                <button class="text-red-600 font-bold text-xs flex flex-col items-center">
                    <span class="text-lg">🏠</span>
                    <span class="mt-0.5">Bosh sahifa</span>
                </button>
                <button onclick="App.showScreen('history_panel')" class="text-gray-400 font-medium text-xs flex flex-col items-center">
                    <span class="text-lg">📋</span>
                    <span class="mt-0.5">Daftarcha</span>
                </button>
                <button onclick="App.showScreen('admin_menu')" class="text-gray-400 font-medium text-xs flex flex-col items-center">
                    <span class="text-lg">⚙️</span>
                    <span class="mt-0.5">Panellar</span>
                </button>
            </div>
        </div>
    `,

    // Maxsus Panellar Menusi
    renderAdminMenu: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-white">
            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
                <h3 class="font-bold text-gray-900 text-base">Tizim Panellari</h3>
                <button onclick="App.showScreen('home')" class="text-xs text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-xl">Orqaga</button>
            </div>

            <div class="space-y-3.5 my-auto w-full">
                <button onclick="App.showScreen('history_panel')" class="w-full p-4.5 bg-blue-50 border border-blue-200 rounded-3xl flex items-center space-x-4 active:scale-95 transition-all text-left">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md">📋</div>
                    <div>
                        <h4 class="font-bold text-gray-900 text-sm">Chaqiruvlar Tarixi va E-Retseptlar</h4>
                        <p class="text-xs text-gray-500">Avvalgi chaqiruvlar arxivi</p>
                    </div>
                </button>

                <button onclick="App.showScreen('lab_panel')" class="w-full p-4.5 bg-indigo-50 border border-indigo-200 rounded-3xl flex items-center space-x-4 active:scale-95 transition-all text-left">
                    <div class="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md">🧪</div>
                    <div>
                        <h4 class="font-bold text-gray-900 text-sm">Laboratoriya Xodimi Paneli</h4>
                        <p class="text-xs text-gray-500">Tahlil natijalarini kiritish</p>
                    </div>
                </button>

                <button onclick="App.showScreen('doctor_panel')" class="w-full p-4.5 bg-slate-900 text-white rounded-3xl flex items-center space-x-4 active:scale-95 transition-all text-left shadow-xl shadow-slate-300">
                    <div class="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md">🚑</div>
                    <div>
                        <h4 class="font-bold text-white text-sm">Shifokor / Brigada Plansheti</h4>
                        <p class="text-xs text-slate-400">Navigatsiya va qabul qilish</p>
                    </div>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3.5 bg-gray-100 text-gray-700 rounded-2xl font-bold text-xs">
                Bosh sahifaga qaytish
            </button>
        </div>
    `,

    // 2. Oilamga Yordam
    renderFamily: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-white">
            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
                <h3 class="font-bold text-gray-900 text-base">Oila a'zongizni tanlang:</h3>
                <button onclick="App.showScreen('home')" class="text-xs text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-xl">Orqaga</button>
            </div>
            
            <div class="space-y-3.5 my-auto w-full">
                <button onclick="App.initiateCall('father_card', 'family')" class="w-full p-4 bg-red-50/80 border border-red-200 rounded-3xl flex items-center justify-between text-left active:scale-95 transition-all">
                    <div>
                        <p class="font-bold text-gray-800 text-sm">Otam (58 yosh) <span class="text-red-600 text-[10px] font-black ml-1">● O'TKIR XAVF</span></p>
                        <p class="text-xs text-gray-500 mt-0.5">Avval insult o'tkazgan | Qon: B(III) Rh+</p>
                    </div>
                    <span class="text-red-600 font-bold text-base">&rarr;</span>
                </button>

                <button onclick="App.initiateCall('mother_card', 'family')" class="w-full p-4 bg-amber-50/80 border border-amber-200 rounded-3xl flex items-center justify-between text-left active:scale-95 transition-all">
                    <div>
                        <p class="font-bold text-gray-800 text-sm">Onam (54 yosh) <span class="text-amber-600 text-[10px] font-black ml-1">● SURUNKALI</span></p>
                        <p class="text-xs text-gray-500 mt-0.5">Qandli diabet, Gipertoniya | A(II) Rh+</p>
                    </div>
                    <span class="text-amber-600 font-bold text-base">&rarr;</span>
                </button>

                <button onclick="App.initiateCall('child_card', 'family')" class="w-full p-4 bg-emerald-50/80 border border-emerald-200 rounded-3xl flex items-center justify-between text-left active:scale-95 transition-all">
                    <div>
                        <p class="font-bold text-gray-800 text-sm">Farzandim (4 yosh) <span class="text-emerald-600 text-[10px] font-black ml-1">● STANDART</span></p>
                        <p class="text-xs text-gray-500 mt-0.5">Surunkali kasallik yo'q</p>
                    </div>
                    <span class="text-emerald-600 font-bold text-base">&rarr;</span>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3.5 bg-gray-100 text-gray-700 rounded-2xl font-bold text-xs">
                Bekor qilish
            </button>
        </div>
    `,

    // 3. Begonaga Yordam
    renderStranger: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-white">
            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
                <h3 class="font-bold text-gray-900 text-base">Bemor holatini tanlang:</h3>
                <button onclick="App.showScreen('home')" class="text-xs text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-xl">Orqaga</button>
            </div>

            <div class="grid grid-cols-2 gap-3 my-auto w-full">
                <button onclick="App.initiateCall('stranger_red', 'stranger')" class="p-4 bg-red-50 border border-red-200 rounded-3xl text-left font-bold text-xs text-red-700 active:scale-95 transition-all">
                    😵 Hushsiz holatda
                </button>
                <button onclick="App.initiateCall('stranger_red_car', 'stranger')" class="p-4 bg-red-50 border border-red-200 rounded-3xl text-left font-bold text-xs text-red-700 active:scale-95 transition-all">
                    🚗 YTH / Avariya
                </button>
                <button onclick="App.initiateCall('stranger_yellow', 'stranger')" class="p-4 bg-amber-50 border border-amber-200 rounded-3xl text-left font-bold text-xs text-amber-700 active:scale-95 transition-all">
                    🩸 Qon ketish
                </button>
                <button onclick="App.initiateCall('stranger_green', 'stranger')" class="p-4 bg-blue-50 border border-blue-200 rounded-3xl text-left font-bold text-xs text-blue-700 active:scale-95 transition-all">
                    ❓ Boshqa holat
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3.5 bg-gray-100 text-gray-700 rounded-2xl font-bold text-xs">
                Bekor qilish
            </button>
        </div>
    `,

    // 4. 3 Soniyalik Taymer
    renderCountdown: (data) => `
        <div class="flex flex-col justify-between h-full w-full p-6 text-center py-10 bg-white">
            <div>
                <h2 class="text-2xl font-black text-gray-900">SOS Chaqiruv Yuborilmoqda</h2>
                <p class="text-xs text-gray-500 mt-1">Noto'g'ri bosilgan bo'lsa to'xtating</p>
            </div>

            <div class="my-auto flex flex-col items-center">
                <div id="countdownCircle" class="w-36 h-36 rounded-full border-4 border-red-500 bg-red-50 flex items-center justify-center text-6xl font-black text-red-600 shadow-inner animate-pulse">
                    3
                </div>
                <p class="text-base font-bold text-gray-800 mt-5">${data.name}</p>
                <p class="text-xs text-gray-500 mt-0.5">${data.history}</p>
            </div>

            <button onclick="App.cancelCountdown()" class="w-full py-4 bg-gray-100 active:bg-gray-200 text-gray-800 rounded-2xl font-bold text-sm border border-gray-200">
                To'xtatish (Bekor qilish)
            </button>
        </div>
    `,

    // 5. Shaxsiy Tibbiy Karta
    renderProfile: () => {
        const labRaw = localStorage.getItem('se_lab_31201991234567');
        const lab = labRaw ? JSON.parse(labRaw) : { testType: "Koagulyatsiya (Qon quyulishi)", risk: "Xavf chegarasida", note: "Laboratoriya nazorati tavsiya etiladi" };

        return `
            <div class="flex flex-col justify-between h-full w-full p-5 bg-white overflow-y-auto">
                <div class="flex justify-between items-center pb-3 border-b border-gray-100">
                    <h2 class="font-bold text-gray-900 text-base">Mening Tibbiy Kartam</h2>
                    <button onclick="App.showScreen('home')" class="text-xs text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-xl">Orqaga</button>
                </div>

                <div class="flex flex-col space-y-3.5 my-auto w-full">
                    <div class="bg-gray-50 p-4 rounded-3xl border border-gray-200 flex items-center space-x-3.5">
                        <div class="w-12 h-12 bg-red-600 text-white font-black rounded-2xl flex items-center text-lg justify-center shadow-md">SE</div>
                        <div>
                            <h3 class="font-bold text-gray-800 text-sm">Shaxsiy Profil</h3>
                            <p class="text-xs text-gray-500">Qon: <b>A(II) Rh+</b> | Yoshi: 32</p>
                        </div>
                    </div>

                    <div class="bg-red-50 p-4 rounded-3xl border border-red-200 text-xs">
                        <p class="font-bold text-red-700 uppercase">🔴 Muhim Tibbiy Tarix:</p>
                        <p class="text-gray-800 mt-1 font-semibold text-xs">• 2025-yil: Ishemik Insult o'tkazilgan (Kritik xavf)</p>
                        <p class="text-gray-700 mt-0.5">• Allergiya: Penitsillin</p>
                    </div>

                    <div class="bg-indigo-50/70 p-4 rounded-3xl border border-indigo-200 text-xs space-y-1 shadow-sm">
                        <div class="flex justify-between items-center">
                            <p class="font-bold text-indigo-900">🧪 Laboratoriya Tahlili:</p>
                            <span class="text-[10px] font-bold text-indigo-600">${lab.testType}</span>
                        </div>
                        <p class="text-gray-700 mt-1 font-semibold">Holat: <b class="text-amber-600">${lab.risk}</b></p>
                        <p class="text-[11px] text-gray-500">Izoh: ${lab.note}</p>
                    </div>
                </div>

                <button onclick="App.showScreen('home')" class="w-full py-3 bg-gray-100 text-gray-700 rounded-2xl font-bold text-xs">
                    Orqaga qaytish
                </button>
            </div>
        `;
    },

    // 6. Tracking Sahifasi
    renderTracking: (data) => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-white overflow-y-auto">
            <div class="flex justify-between items-center pb-2 border-b border-gray-100">
                <div>
                    <h2 class="font-bold text-gray-900 text-sm leading-tight">Tez Yordam Kuzatuvi</h2>
                    <p class="text-[10px] text-gray-400">Brigada yo'lga chiqdi</p>
                </div>
                <button onclick="App.showScreen('home')" class="text-[11px] text-red-600 font-bold bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
                    Bekor qilish
                </button>
            </div>

            <div class="flex flex-col space-y-3 my-2 w-full">
                <div class="p-4 rounded-3xl text-white font-black text-xs shadow-md ${data.bg}">
                    ${data.badgeText}
                </div>

                <div class="bg-gray-50 p-3.5 rounded-3xl border border-gray-200 text-left space-y-1 text-xs text-gray-700">
                    <p><b>Bemor:</b> <span class="font-bold text-gray-900">${data.name}</span></p>
                    <p><b>Qabul qilgan:</b> <span class="font-bold text-blue-700">1-son Markaziy Podstansiya</span></p>
                    <p><b>Mas'ul brigada:</b> <span class="font-bold text-gray-900">14-Reanimatsiya Brigadasi</span></p>
                    <p><b>Yetib borish vaqti:</b> <span class="font-black text-emerald-600">~4 daqiqa</span></p>
                    
                    <div class="bg-white p-2.5 rounded-2xl border border-gray-200 mt-1.5">
                        <p class="text-[10px] text-gray-400 font-bold uppercase">Kiritilgan izoh:</p>
                        <p class="text-xs text-gray-800 font-semibold">${data.userComment || "Qo'shimcha izoh kiritilmadi"}</p>
                    </div>
                </div>

                ${AIAssistant.renderInstructionCard(data.cardKey)}

                <div class="rounded-3xl overflow-hidden border border-gray-200 w-full shadow-inner">
                    <div id="map" class="h-36 w-full"></div>
                </div>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3 bg-gray-100 text-gray-700 rounded-2xl font-bold text-xs mt-2">
                Bosh sahifaga qaytish
            </button>
        </div>
    `
};
