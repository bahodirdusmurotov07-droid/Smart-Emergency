const UI = {
    // 1. Asosiy SOS Dashboard (Ultra Zamonaviy MedTech Dizayn)
    renderHome: () => {
        const labRaw = localStorage.getItem('se_lab_31201991234567');
        const lab = labRaw ? JSON.parse(labRaw) : { testType: "Koagulyatsiya", risk: "🔴 Yuqori xavf" };

        return `
            <div class="flex flex-col justify-between h-full w-full p-4 bg-slate-900 text-slate-100 overflow-y-auto">
                
                <!-- Yuqori qism: Header & Profil -->
                <div>
                    <div class="flex justify-between items-center pb-3 pt-1 border-b border-slate-800">
                        <div class="flex items-center space-x-3">
                            <div class="w-11 h-11 bg-gradient-to-tr from-red-600 to-rose-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-red-600/30">
                                ⚡
                            </div>
                            <div>
                                <h1 class="font-extrabold text-white text-base leading-tight tracking-tight">Smart Emergency</h1>
                                <div class="flex items-center gap-1.5 mt-0.5">
                                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                    <p class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">103 Dispetcher Ulandi</p>
                                </div>
                            </div>
                        </div>

                        <button onclick="App.showScreen('profile')" class="bg-slate-800/90 border border-slate-700/80 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-200 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm">
                            <span class="w-2 h-2 rounded-full bg-red-500"></span>
                            <span>Karta</span>
                        </button>
                    </div>

                    <!-- Tezkor Tibbiy Holat Vidjeti (Bo'shliqni to'ldiruvchi) -->
                    <div class="mt-3.5 bg-gradient-to-r from-slate-800/90 to-slate-850 p-3.5 rounded-3xl border border-slate-700/70 shadow-lg space-y-2">
                        <div class="flex justify-between items-center text-xs">
                            <span class="text-slate-400 font-semibold flex items-center gap-1">
                                <span>📍</span> Toshkent, Amir Temur xiyoboni
                            </span>
                            <span class="text-red-400 font-black text-[10px] bg-red-950/80 px-2 py-0.5 rounded-md border border-red-800/50">3-SHKALA (KRITIK)</span>
                        </div>
                        <div class="flex justify-between items-center pt-1 border-t border-slate-750 text-[11px]">
                            <span class="text-slate-300">Oxirgi lab nazorati: <b>${lab.testType}</b></span>
                            <span class="text-amber-400 font-bold">${lab.risk}</span>
                        </div>
                    </div>
                </div>

                <!-- SOS Asosiy Chaqiruv Tugmalari -->
                <div class="space-y-3 my-auto py-2">
                    
                    <!-- O'zimga Yordam (Markaziy Asosiy Karta) -->
                    <button onclick="App.initiateCall('my_card', 'home')" class="w-full p-4.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-500 active:scale-[0.98] text-white rounded-3xl flex items-center justify-between shadow-xl shadow-red-600/30 border border-red-400/40 transition-all">
                        <div class="flex items-center space-x-3.5 text-left">
                            <div class="w-13 h-13 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner p-2">
                                🚨
                            </div>
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="text-lg font-black tracking-tight block">O'zimga Yordam</span>
                                    <span class="bg-white/25 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full">Kritik</span>
                                </div>
                                <span class="text-[11px] text-red-100 font-medium block mt-0.5">Shaxsiy insult tarixi va GPS to'liq uzatiladi</span>
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm shrink-0">
                            &rarr;
                        </div>
                    </button>

                    <!-- Oilamga Yordam -->
                    <button onclick="App.showScreen('family')" class="w-full p-4 bg-slate-800 active:scale-[0.98] rounded-3xl flex items-center justify-between shadow-md border border-slate-700/80 hover:border-amber-500/50 transition-all">
                        <div class="flex items-center space-x-3.5 text-left">
                            <div class="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-amber-500/30 p-2">
                                👨‍👩‍👧‍👦
                            </div>
                            <div>
                                <span class="text-base font-extrabold text-white tracking-tight block">Oilamga Yordam</span>
                                <span class="text-[11px] text-slate-400 font-medium">Oila a'zosi tibbiy kartasini tanlash</span>
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                            &rarr;
                        </div>
                    </button>

                    <!-- Begonaga Yordam -->
                    <button onclick="App.showScreen('stranger')" class="w-full p-4 bg-slate-800 active:scale-[0.98] rounded-3xl flex items-center justify-between shadow-md border border-slate-700/80 hover:border-blue-500/50 transition-all">
                        <div class="flex items-center space-x-3.5 text-left">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-blue-500/30 p-2">
                                👤
                            </div>
                            <div>
                                <span class="text-base font-extrabold text-white tracking-tight block">Begonaga Yordam</span>
                                <span class="text-[11px] text-slate-400 font-medium">Tezkor vizual holatni belgilash (YTH, Travma)</span>
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">
                            &rarr;
                        </div>
                    </button>

                </div>

                <!-- Zamonaviy Suzuvchi Pastki Menyu (Floating Dark Bar) -->
                <div class="w-full py-2.5 px-4 bg-slate-850/90 backdrop-blur-md rounded-3xl flex justify-around items-center shadow-2xl border border-slate-700/80 mt-auto">
                    <button class="flex flex-col items-center text-red-500 font-bold text-[10px]">
                        <div class="w-8 h-8 rounded-xl bg-red-600/20 flex items-center justify-center text-base mb-0.5 border border-red-500/30">
                            🏠
                        </div>
                        <span>Asosiy</span>
                    </button>

                    <button onclick="App.showScreen('history_panel')" class="flex flex-col items-center text-slate-400 font-semibold text-[10px] hover:text-slate-200 transition-all active:scale-95">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-base mb-0.5">
                            📋
                        </div>
                        <span>Daftarcha</span>
                    </button>

                    <button onclick="App.showScreen('admin_menu')" class="flex flex-col items-center text-slate-400 font-semibold text-[10px] hover:text-slate-200 transition-all active:scale-95">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-base mb-0.5">
                            ⚙️
                        </div>
                        <span>Panellar</span>
                    </button>
                </div>
            </div>
        `;
    },

    // 2. Maxsus Panellar Menusi
    renderAdminMenu: () => `
        <div class="flex flex-col justify-between h-full w-full p-4 bg-slate-900 text-white overflow-y-auto">
            <div class="flex justify-between items-center pb-3 border-b border-slate-800">
                <div>
                    <h3 class="font-black text-white text-base">Tizim va Xodimlar Paneli</h3>
                    <p class="text-[11px] text-slate-400">Shifokor va Laboratoriya boshqaruvi</p>
                </div>
                <button onclick="App.showScreen('home')" class="text-xs text-slate-300 font-bold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 active:scale-95">Orqaga</button>
            </div>

            <div class="space-y-3.5 my-auto w-full py-2">
                <button onclick="App.showScreen('doctor_panel')" class="w-full p-4.5 bg-slate-800 border border-slate-700 rounded-3xl flex items-center space-x-3.5 active:scale-[0.98] transition-all text-left shadow-lg">
                    <div class="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md shrink-0">🚑</div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h4 class="font-extrabold text-white text-sm">Shifokor / Brigada Plansheti</h4>
                            <span class="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-md">Jonli</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-0.5">Navigatsiya va SOS chaqiruvlarni qabul qilish</p>
                    </div>
                </button>

                <button onclick="App.showScreen('lab_panel')" class="w-full p-4.5 bg-slate-800 border border-slate-700 rounded-3xl flex items-center space-x-3.5 active:scale-[0.98] transition-all text-left shadow-lg">
                    <div class="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md shrink-0">🧪</div>
                    <div>
                        <h4 class="font-extrabold text-white text-sm">Laboratoriya Tizimi</h4>
                        <p class="text-xs text-slate-400 mt-0.5">Bemor JSHSHIR orqali yangi tahlillarni yuklash</p>
                    </div>
                </button>

                <button onclick="App.showScreen('history_panel')" class="w-full p-4.5 bg-slate-800 border border-slate-700 rounded-3xl flex items-center space-x-3.5 active:scale-[0.98] transition-all text-left shadow-lg">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md shrink-0">📋</div>
                    <div>
                        <h4 class="font-extrabold text-white text-sm">Chaqiruvlar Tarixi & Retseptlar</h4>
                        <p class="text-xs text-slate-400 mt-0.5">Avvalgi barcha tez tibbiy xulosalar arxivi</p>
                    </div>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3 bg-slate-800 text-slate-300 rounded-2xl font-bold text-xs border border-slate-700 active:scale-95">
                Bosh sahifaga qaytish
            </button>
        </div>
    `,

    // 3. Oilamga Yordam
    renderFamily: () => `
        <div class="flex flex-col justify-between h-full w-full p-4 bg-slate-900 text-white overflow-y-auto">
            <div class="flex justify-between items-center pb-3 border-b border-slate-800">
                <div>
                    <h3 class="font-black text-white text-base">Oila a'zongizni tanlang</h3>
                    <p class="text-[11px] text-slate-400">Tibbiy karta avtomatik biriktiriladi</p>
                </div>
                <button onclick="App.showScreen('home')" class="text-xs text-slate-300 font-bold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 active:scale-95">Orqaga</button>
            </div>
            
            <div class="space-y-3 my-auto w-full py-2">
                <button onclick="App.initiateCall('father_card', 'family')" class="w-full p-4 bg-slate-800 border border-red-500/40 rounded-3xl flex items-center justify-between text-left active:scale-[0.98] shadow-md transition-all">
                    <div>
                        <div class="flex items-center gap-2">
                            <p class="font-extrabold text-white text-sm">Otam (58 yosh)</p>
                            <span class="bg-red-950 text-red-400 text-[9px] font-black px-2 py-0.5 rounded-md border border-red-800">🔴 O'TKIR XAVF</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-1 font-medium">Avval insult o'tkazgan | Qon: B(III) Rh+</p>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-red-950 text-red-400 flex items-center justify-center font-bold text-sm">&rarr;</span>
                </button>

                <button onclick="App.initiateCall('mother_card', 'family')" class="w-full p-4 bg-slate-800 border border-amber-500/40 rounded-3xl flex items-center justify-between text-left active:scale-[0.98] shadow-md transition-all">
                    <div>
                        <div class="flex items-center gap-2">
                            <p class="font-extrabold text-white text-sm">Onam (54 yosh)</p>
                            <span class="bg-amber-950 text-amber-400 text-[9px] font-black px-2 py-0.5 rounded-md border border-amber-800">🟡 SURUNKALI</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-1 font-medium">Qandli diabet, Gipertoniya | A(II) Rh+</p>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-amber-950 text-amber-400 flex items-center justify-center font-bold text-sm">&rarr;</span>
                </button>

                <button onclick="App.initiateCall('child_card', 'family')" class="w-full p-4 bg-slate-800 border border-emerald-500/40 rounded-3xl flex items-center justify-between text-left active:scale-[0.98] shadow-md transition-all">
                    <div>
                        <div class="flex items-center gap-2">
                            <p class="font-extrabold text-white text-sm">Farzandim (4 yosh)</p>
                            <span class="bg-emerald-950 text-emerald-400 text-[9px] font-black px-2 py-0.5 rounded-md border border-emerald-800">🟢 STANDART</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-1 font-medium">Surunkali kasallik yo'q</p>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-sm">&rarr;</span>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3 bg-slate-800 text-slate-300 rounded-2xl font-bold text-xs border border-slate-700 active:scale-95">
                Bekor qilish
            </button>
        </div>
    `,

    // 4. Begonaga Yordam
    renderStranger: () => `
        <div class="flex flex-col justify-between h-full w-full p-4 bg-slate-900 text-white overflow-y-auto">
            <div class="flex justify-between items-center pb-3 border-b border-slate-800">
                <div>
                    <h3 class="font-black text-white text-base">Bemor holatini belgilang</h3>
                    <p class="text-[11px] text-slate-400">To'g'ri brigada turini yuborish uchun</p>
                </div>
                <button onclick="App.showScreen('home')" class="text-xs text-slate-300 font-bold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 active:scale-95">Orqaga</button>
            </div>

            <div class="grid grid-cols-2 gap-3 my-auto w-full py-2">
                <button onclick="App.initiateCall('stranger_red', 'stranger')" class="p-4 bg-slate-800 border border-red-500/40 rounded-3xl text-left active:scale-95 transition-all shadow-md">
                    <div class="text-2xl mb-1.5">😵</div>
                    <p class="font-extrabold text-white text-xs">Hushsiz Holat</p>
                    <span class="text-[10px] text-red-400 font-bold mt-0.5 block">Reanimatsiya</span>
                </button>

                <button onclick="App.initiateCall('stranger_red_car', 'stranger')" class="p-4 bg-slate-800 border border-red-500/40 rounded-3xl text-left active:scale-95 transition-all shadow-md">
                    <div class="text-2xl mb-1.5">🚗</div>
                    <p class="font-extrabold text-white text-xs">YTH / Avariya</p>
                    <span class="text-[10px] text-red-400 font-bold mt-0.5 block">Shoshilinch travma</span>
                </button>

                <button onclick="App.initiateCall('stranger_yellow', 'stranger')" class="p-4 bg-slate-800 border border-amber-500/40 rounded-3xl text-left active:scale-95 transition-all shadow-md">
                    <div class="text-2xl mb-1.5">🩸</div>
                    <p class="font-extrabold text-white text-xs">Qon Ketish</p>
                    <span class="text-[10px] text-amber-400 font-bold mt-0.5 block">O'tkir jarohat</span>
                </button>

                <button onclick="App.initiateCall('stranger_green', 'stranger')" class="p-4 bg-slate-800 border border-blue-500/40 rounded-3xl text-left active:scale-95 transition-all shadow-md">
                    <div class="text-2xl mb-1.5">❓</div>
                    <p class="font-extrabold text-white text-xs">Boshqa Holat</p>
                    <span class="text-[10px] text-blue-400 font-bold mt-0.5 block">Umumiy yordam</span>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3 bg-slate-800 text-slate-300 rounded-2xl font-bold text-xs border border-slate-700 active:scale-95">
                Bekor qilish
            </button>
        </div>
    `,

    // 5. 3 Soniyalik Taymer
    renderCountdown: (data) => `
        <div class="flex flex-col justify-between h-full w-full p-6 text-center py-10 bg-slate-900 text-white">
            <div>
                <h2 class="text-2xl font-black text-white tracking-tight">SOS Chaqiruv Yuborilmoqda</h2>
                <p class="text-xs text-slate-400 mt-1">Noto'g'ri bosilgan bo'lsa darhol to'xtating</p>
            </div>

            <div class="my-auto flex flex-col items-center">
                <div id="countdownCircle" class="w-40 h-40 rounded-full border-4 border-red-500 bg-red-950/80 flex items-center justify-center text-7xl font-black text-red-500 shadow-2xl shadow-red-500/30 animate-pulse">
                    3
                </div>
                <div class="mt-6 space-y-1">
                    <p class="text-base font-extrabold text-white">${data.name}</p>
                    <p class="text-xs text-slate-400 max-w-xs mx-auto">${data.history}</p>
                </div>
            </div>

            <button onclick="App.cancelCountdown()" class="w-full py-4 bg-slate-800 active:bg-slate-700 text-white rounded-2xl font-extrabold text-sm border border-slate-700 shadow-sm">
                To'xtatish (Bekor qilish)
            </button>
        </div>
    `,

   