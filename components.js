const UI = {
    // 1. Asosiy SOS Dashboard
    renderHome: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-slate-50 relative">
            
            <!-- Yuqori qism (Header) -->
            <div class="flex justify-between items-center w-full pt-1 pb-3">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-tr from-red-600 via-rose-600 to-red-500 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-red-500/25 ring-4 ring-red-100">
                        ⚡
                    </div>
                    <div>
                        <h1 class="font-extrabold text-slate-900 text-lg leading-tight tracking-tight">Smart Emergency</h1>
                        <div class="flex items-center gap-1.5 mt-0.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                            <p class="text-[11px] text-emerald-600 font-bold">103 Dispetcher Ulanishi Faol</p>
                        </div>
                    </div>
                </div>
                
                <button onclick="App.showScreen('profile')" class="glass-card px-3.5 py-2 rounded-2xl text-xs font-bold text-slate-700 shadow-sm active:scale-95 transition-all flex items-center gap-1.5 border border-slate-200/80">
                    <span class="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>Tibbiy Karta</span>
                </button>
            </div>

            <!-- SOS Asosiy Tugmalar Bloki -->
            <div class="flex flex-col space-y-4 my-auto w-full py-2">
                
                <!-- O'zimga Yordam (Katta qizil karta) -->
                <button onclick="App.initiateCall('my_card', 'home')" class="pulse-red group w-full py-5 px-5 bg-gradient-to-r from-red-600 via-rose-600 to-red-500 active:scale-[0.98] text-white rounded-[28px] flex items-center justify-between shadow-xl shadow-red-600/30 transition-all border border-red-400/30">
                    <div class="flex items-center space-x-4 text-left">
                        <div class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner">
                            🚨
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-xl font-extrabold tracking-tight block">O'zimga Yordam</span>
                                <span class="bg-white/25 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full">Kritik</span>
                            </div>
                            <span class="text-xs text-red-100 font-medium mt-0.5 block">Shaxsiy kasallik va GPS uzatiladi</span>
                        </div>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                        &rarr;
                    </div>
                </button>

                <!-- Oilamga Yordam -->
                <button onclick="App.showScreen('family')" class="w-full py-4.5 px-5 bg-white active:scale-[0.98] rounded-[26px] flex items-center justify-between shadow-sm border border-slate-200/90 hover:border-amber-400 transition-all group">
                    <div class="flex items-center space-x-4 text-left">
                        <div class="w-13 h-13 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-amber-100 p-2.5">
                            👨‍👩‍👧‍👦
                        </div>
                        <div>
                            <span class="text-base font-extrabold text-slate-800 tracking-tight block">Oilamga Yordam</span>
                            <span class="text-xs text-slate-400 font-medium">Oila a'zosi tibbiy profilini tanlash</span>
                        </div>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-100 text-slate-400 group-hover:text-amber-700 flex items-center justify-center font-bold text-sm transition-colors">
                        &rarr;
                    </div>
                </button>

                <!-- Begonaga Yordam -->
                <button onclick="App.showScreen('stranger')" class="w-full py-4.5 px-5 bg-white active:scale-[0.98] rounded-[26px] flex items-center justify-between shadow-sm border border-slate-200/90 hover:border-blue-400 transition-all group">
                    <div class="flex items-center space-x-4 text-left">
                        <div class="w-13 h-13 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl shrink-0 border border-blue-100 p-2.5">
                            👤
                        </div>
                        <div>
                            <span class="text-base font-extrabold text-slate-800 tracking-tight block">Begona Shaxsga Yordam</span>
                            <span class="text-xs text-slate-400 font-medium">Tezkor vizual holatni belgilash</span>
                        </div>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-400 group-hover:text-blue-700 flex items-center justify-center font-bold text-sm transition-colors">
                        &rarr;
                    </div>
                </button>

            </div>

            <!-- Suzuvchi Zamonaviy Pastki Menyu (Floating Bottom Bar) -->
            <div class="glass-card w-full py-2.5 px-4 rounded-3xl flex justify-around items-center shadow-lg shadow-slate-200/50 mt-auto border border-slate-200/80">
                <button class="flex flex-col items-center text-red-600 font-bold text-[11px] transition-all">
                    <div class="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-base mb-0.5">
                        🏠
                    </div>
                    <span>Asosiy</span>
                </button>

                <button onclick="App.showScreen('history_panel')" class="flex flex-col items-center text-slate-400 font-semibold text-[11px] hover:text-slate-700 transition-all active:scale-95">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-base mb-0.5">
                        📋
                    </div>
                    <span>Daftarcha</span>
                </button>

                <button onclick="App.showScreen('admin_menu')" class="flex flex-col items-center text-slate-400 font-semibold text-[11px] hover:text-slate-700 transition-all active:scale-95">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-base mb-0.5">
                        ⚙️
                    </div>
                    <span>Panellar</span>
                </button>
            </div>
        </div>
    `,

    // 2. Maxsus Panellar Menusi
    renderAdminMenu: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-slate-50">
            <div class="flex justify-between items-center pb-3 border-b border-slate-200/80">
                <div>
                    <h3 class="font-extrabold text-slate-900 text-base">Tizim va Xodimlar Paneli</h3>
                    <p class="text-[11px] text-slate-500">Shifokor va Laboratoriya boshqaruvi</p>
                </div>
                <button onclick="App.showScreen('home')" class="text-xs text-slate-600 font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm active:scale-95">Orqaga</button>
            </div>

            <div class="space-y-3.5 my-auto w-full">
                <button onclick="App.showScreen('doctor_panel')" class="w-full p-5 bg-gradient-to-r from-slate-950 to-slate-900 text-white rounded-3xl flex items-center space-x-4 active:scale-[0.98] transition-all text-left shadow-xl shadow-slate-900/20 border border-slate-800">
                    <div class="w-13 h-13 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md shrink-0 p-2.5">🚑</div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h4 class="font-extrabold text-white text-sm">Shifokor / Brigada Plansheti</h4>
                            <span class="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-md">Jonli</span>
                        </div>
                        <p class="text-xs text-slate-400 mt-0.5">Navigatsiya va SOS chaqiruvlarni qabul qilish</p>
                    </div>
                </button>

                <button onclick="App.showScreen('lab_panel')" class="w-full p-5 bg-white border border-indigo-100 rounded-3xl flex items-center space-x-4 active:scale-[0.98] transition-all text-left shadow-sm hover:border-indigo-300">
                    <div class="w-13 h-13 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md shadow-indigo-200 shrink-0 p-2.5">🧪</div>
                    <div>
                        <h4 class="font-extrabold text-slate-900 text-sm">Laboratoriya Tizimi</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Bemor JSHSHIR orqali yangi tahlillarni yuklash</p>
                    </div>
                </button>

                <button onclick="App.showScreen('history_panel')" class="w-full p-5 bg-white border border-blue-100 rounded-3xl flex items-center space-x-4 active:scale-[0.98] transition-all text-left shadow-sm hover:border-blue-300">
                    <div class="w-13 h-13 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl shadow-md shadow-blue-200 shrink-0 p-2.5">📋</div>
                    <div>
                        <h4 class="font-extrabold text-slate-900 text-sm">Chaqiruvlar Tarixi & E-Retsept</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Avvalgi barcha tez tibbiy xulosalar arxivi</p>
                    </div>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3.5 bg-slate-200/80 text-slate-700 rounded-2xl font-bold text-xs active:scale-95">
                Bosh sahifaga qaytish
            </button>
        </div>
    `,

    // 3. Oilamga Yordam
    renderFamily: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-slate-50">
            <div class="flex justify-between items-center pb-3 border-b border-slate-200/80">
                <div>
                    <h3 class="font-extrabold text-slate-900 text-base">Oila a'zongizni tanlang</h3>
                    <p class="text-[11px] text-slate-500">Tibbiy karta avtomatik biriktiriladi</p>
                </div>
                <button onclick="App.showScreen('home')" class="text-xs text-slate-600 font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm active:scale-95">Orqaga</button>
            </div>
            
            <div class="space-y-3.5 my-auto w-full py-2">
                <button onclick="App.initiateCall('father_card', 'family')" class="w-full p-4 bg-white border border-red-200/80 rounded-3xl flex items-center justify-between text-left active:scale-[0.98] shadow-sm transition-all hover:border-red-400">
                    <div>
                        <div class="flex items-center gap-2">
                            <p class="font-extrabold text-slate-900 text-sm">Otam (58 yosh)</p>
                            <span class="bg-red-100 text-red-700 text-[9px] font-black px-2 py-0.5 rounded-md">🔴 O'TKIR XAVF</span>
                        </div>
                        <p class="text-xs text-slate-500 mt-1 font-medium">Avval insult o'tkazgan | Qon: B(III) Rh+</p>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">&rarr;</span>
                </button>

                <button onclick="App.initiateCall('mother_card', 'family')" class="w-full p-4 bg-white border border-amber-200/80 rounded-3xl flex items-center justify-between text-left active:scale-[0.98] shadow-sm transition-all hover:border-amber-400">
                    <div>
                        <div class="flex items-center gap-2">
                            <p class="font-extrabold text-slate-900 text-sm">Onam (54 yosh)</p>
                            <span class="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-0.5 rounded-md">🟡 SURUNKALI</span>
                        </div>
                        <p class="text-xs text-slate-500 mt-1 font-medium">Qandli diabet, Gipertoniya | A(II) Rh+</p>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">&rarr;</span>
                </button>

                <button onclick="App.initiateCall('child_card', 'family')" class="w-full p-4 bg-white border border-emerald-200/80 rounded-3xl flex items-center justify-between text-left active:scale-[0.98] shadow-sm transition-all hover:border-emerald-400">
                    <div>
                        <div class="flex items-center gap-2">
                            <p class="font-extrabold text-slate-900 text-sm">Farzandim (4 yosh)</p>
                            <span class="bg-emerald-100 text-emerald-700 text-[9px] font-black px-2 py-0.5 rounded-md">🟢 STANDART</span>
                        </div>
                        <p class="text-xs text-slate-500 mt-1 font-medium">Surunkali kasallik yo'q</p>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">&rarr;</span>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3.5 bg-slate-200/80 text-slate-700 rounded-2xl font-bold text-xs active:scale-95">
                Bekor qilish
            </button>
        </div>
    `,

    // 4. Begonaga Yordam
    renderStranger: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-slate-50">
            <div class="flex justify-between items-center pb-3 border-b border-slate-200/80">
                <div>
                    <h3 class="font-extrabold text-slate-900 text-base">Bemor holatini belgilang</h3>
                    <p class="text-[11px] text-slate-500">To'g'ri brigada turini yuborish uchun</p>
                </div>
                <button onclick="App.showScreen('home')" class="text-xs text-slate-600 font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm active:scale-95">Orqaga</button>
            </div>

            <div class="grid grid-cols-2 gap-3 my-auto w-full py-2">
                <button onclick="App.initiateCall('stranger_red', 'stranger')" class="p-5 bg-white border border-red-200 rounded-3xl text-left active:scale-95 transition-all shadow-sm hover:border-red-500">
                    <div class="text-2xl mb-2">😵</div>
                    <p class="font-extrabold text-slate-900 text-xs">Hushsiz Holat</p>
                    <span class="text-[10px] text-red-600 font-bold mt-1 block">Reanimatsiya talab</span>
                </button>

                <button onclick="App.initiateCall('stranger_red_car', 'stranger')" class="p-5 bg-white border border-red-200 rounded-3xl text-left active:scale-95 transition-all shadow-sm hover:border-red-500">
                    <div class="text-2xl mb-2">🚗</div>
                    <p class="font-extrabold text-slate-900 text-xs">YTH / Avariya</p>
                    <span class="text-[10px] text-red-600 font-bold mt-1 block">Shoshilinch travma</span>
                </button>

                <button onclick="App.initiateCall('stranger_yellow', 'stranger')" class="p-5 bg-white border border-amber-200 rounded-3xl text-left active:scale-95 transition-all shadow-sm hover:border-amber-500">
                    <div class="text-2xl mb-2">🩸</div>
                    <p class="font-extrabold text-slate-900 text-xs">Qon Ketish</p>
                    <span class="text-[10px] text-amber-600 font-bold mt-1 block">Jarohatni to'xtatish</span>
                </button>

                <button onclick="App.initiateCall('stranger_green', 'stranger')" class="p-5 bg-white border border-blue-200 rounded-3xl text-left active:scale-95 transition-all shadow-sm hover:border-blue-500">
                    <div class="text-2xl mb-2">❓</div>
                    <p class="font-extrabold text-slate-900 text-xs">Boshqa Holat</p>
                    <span class="text-[10px] text-blue-600 font-bold mt-1 block">Umumiy ko'rik</span>
                </button>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3.5 bg-slate-200/80 text-slate-700 rounded-2xl font-bold text-xs active:scale-95">
                Bekor qilish
            </button>
        </div>
    `,

    // 5. 3 Soniyalik Taymer
    renderCountdown: (data) => `
        <div class="flex flex-col justify-between h-full w-full p-6 text-center py-10 bg-white">
            <div>
                <h2 class="text-2xl font-black text-slate-900 tracking-tight">SOS Chaqiruv Yuborilmoqda</h2>
                <p class="text-xs text-slate-500 mt-1">Noto'g'ri bosilgan bo'lsa darhol to'xtating</p>
            </div>

            <div class="my-auto flex flex-col items-center">
                <div id="countdownCircle" class="w-40 h-40 rounded-full border-4 border-red-500 bg-red-50/80 flex items-center justify-center text-7xl font-black text-red-600 shadow-2xl shadow-red-500/20 animate-pulse">
                    3
                </div>
                <div class="mt-6 space-y-1">
                    <p class="text-base font-extrabold text-slate-900">${data.name}</p>
                    <p class="text-xs text-slate-500 max-w-xs mx-auto">${data.history}</p>
                </div>
            </div>

            <button onclick="App.cancelCountdown()" class="w-full py-4 bg-slate-100 active:bg-slate-200 text-slate-800 rounded-2xl font-extrabold text-sm border border-slate-200 shadow-sm">
                To'xtatish (Bekor qilish)
            </button>
        </div>
    `,

    // 6. Shaxsiy Tibbiy Karta
    renderProfile: () => {
        const labRaw = localStorage.getItem('se_lab_31201991234567');
        const lab = labRaw ? JSON.parse(labRaw) : { testType: "Koagulyatsiya (D-Dimer)", risk: "🔴 Xavf chegarasida", note: "Laboratoriya nazorati tavsiya etiladi" };

        return `
            <div class="flex flex-col justify-between h-full w-full p-5 bg-slate-50 overflow-y-auto">
                <div>
                    <div class="flex justify-between items-center pb-3 border-b border-slate-200/80 mb-4">
                        <h2 class="font-extrabold text-slate-900 text-base">Mening Tibbiy Kartam</h2>
                        <button onclick="App.showScreen('home')" class="text-xs text-slate-600 font-bold bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm active:scale-95">Orqaga</button>
                    </div>

                    <div class="flex flex-col space-y-3.5 w-full">
                        <!-- Profil bosh kartasi -->
                        <div class="bg-white p-4.5 rounded-3xl border border-slate-200 flex items-center space-x-4 shadow-sm">
                            <div class="w-14 h-14 bg-gradient-to-tr from-red-600 to-rose-500 text-white font-black rounded-2xl flex items-center text-xl justify-center shadow-lg shadow-red-500/20">
                                SE
                            </div>
                            <div>
                                <h3 class="font-extrabold text-slate-900 text-sm">Shaxsiy Profil</h3>
                                <p class="text-xs text-slate-500 mt-0.5">Qon guruh