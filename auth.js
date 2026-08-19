const Auth = {
    currentRoleTab: 'user', // 'user' yoki 'staff'
    generatedCode: null,
    userPhone: "",
    userJshshir: "",
    isNewUser: true,

    // Tizimga kirish sahifasi (2 xil rejim bilan)
    render: () => `
        <div class="flex flex-col justify-between h-full p-6 bg-white overflow-y-auto">
            <div class="my-auto flex flex-col items-center text-center">
                <div class="w-18 h-18 bg-red-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl mb-4 shadow-xl shadow-red-200">
                    SE
                </div>
                <h2 class="text-2xl font-black text-gray-900 mb-1">Smart Emergency</h2>
                <p class="text-xs text-gray-500 mb-5">Yagona tibbiy tezkor tizim portali</p>
                
                <!-- Rollarni tanlash TAB tugmalari -->
                <div class="w-full grid grid-cols-2 p-1 bg-gray-100 rounded-2xl mb-5">
                    <button onclick="Auth.switchTab('user')" class="py-2.5 rounded-xl font-bold text-xs transition-all ${Auth.currentRoleTab === 'user' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-500'}">
                        👤 Fuqaro (Bemor)
                    </button>
                    <button onclick="Auth.switchTab('staff')" class="py-2.5 rounded-xl font-bold text-xs transition-all ${Auth.currentRoleTab === 'staff' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500'}">
                        🩺 Tibbiy Xodim (Med-ID)
                    </button>
                </div>

                <!-- 1. FUQAROLAR UCHUN SHAKL -->
                ${Auth.currentRoleTab === 'user' ? `
                    <div class="w-full space-y-3.5 animate-fadeIn">
                        <div class="text-left">
                            <label class="text-xs font-bold text-gray-700 ml-1">Telefon raqam:</label>
                            <input id="authPhone" type="tel" value="+998" placeholder="+998 90 123 45 67" class="w-full p-3.5 mt-1 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50/50 font-medium">
                        </div>

                        <div class="text-left">
                            <label class="text-xs font-bold text-gray-700 ml-1">JSHSHIR (14 xonali kod):</label>
                            <input id="authJshshir" type="number" placeholder="31201991234567" class="w-full p-3.5 mt-1 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-red-500 focus:outline-none bg-gray-50/50 font-medium">
                        </div>

                        <p id="authError" class="text-xs text-red-600 font-bold text-center hidden">Telefon va 14 xonali JSHSHIR ni to'liq kiriting!</p>
                        <button onclick="Auth.sendSMS()" class="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 active:scale-95 text-white rounded-2xl font-bold text-sm shadow-xl shadow-red-200 transition-all mt-2">
                            SMS Kodni olish &rarr;
                        </button>
                    </div>
                ` : `
                <!-- 2. TIBBIY XODIMLAR (LABORANT / SHIFOKOR) UCHUN SHAKL -->
                    <div class="w-full space-y-3.5 animate-fadeIn">
                        <div class="p-3 bg-blue-50 border border-blue-200 rounded-2xl text-left text-[11px] text-blue-900 mb-2">
                            🔒 <b>Xizmat kirishi:</b> Faqat litsenziyaga ega shifokor va laboratoriya xodimlari uchun.
                        </div>

                        <div class="text-left">
                            <label class="text-xs font-bold text-gray-700 ml-1">Xodim Login / Med-ID:</label>
                            <input id="staffLogin" type="text" placeholder="doc_103 yoki lab_innova" class="w-full p-3.5 mt-1 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-gray-50/50 font-medium">
                        </div>

                        <div class="text-left">
                            <label class="text-xs font-bold text-gray-700 ml-1">Xizmat paroli:</label>
                            <input id="staffPassword" type="password" placeholder="••••••••" class="w-full p-3.5 mt-1 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none bg-gray-50/50 font-medium">
                        </div>

                        <p id="staffError" class="text-xs text-red-600 font-bold text-center hidden">Login yoki parol noto'g'ri!</p>
                        <button onclick="Auth.loginStaff()" class="w-full py-4 bg-gradient-to-r from-blue-700 to-indigo-700 active:scale-95 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-200 transition-all mt-2">
                            Tizimga Kirish (Med-Portal) &rarr;
                        </button>

                        <div class="text-[11px] text-gray-400 mt-3">
                            Demo hisoblar: <br>
                            <b>Shifokor:</b> doc_103 (parol: 1234) | <b>Laborant:</b> lab_innova (parol: 1234)
                        </div>
                    </div>
                `}
            </div>
        </div>
    `,

    switchTab: (tab) => {
        Auth.currentRoleTab = tab;
        App.showScreen('auth');
    },

    // Fuqaro SMS jo'natish
    sendSMS: () => {
        const phone = document.getElementById('authPhone').value.trim();
        const jshshir = document.getElementById('authJshshir').value.trim();
        const errorEl = document.getElementById('authError');

        if (phone.length >= 9 && jshshir.length === 14) {
            errorEl.classList.add('hidden');
            Auth.userPhone = phone;
            Auth.userJshshir = jshshir;
            Auth.generatedCode = Math.floor(1000 + Math.random() * 9000);
            
            const saved = localStorage.getItem('se_user_' + jshshir);
            Auth.isNewUser = !saved;

            App.showScreen('auth_verify');
        } else {
            errorEl.classList.remove('hidden');
        }
    },

    // SMS tasdiqlash
    renderVerify: () => `
        <div class="flex flex-col justify-between h-full p-6 bg-white">
            <div class="my-auto flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-3xl mb-4">📩</div>
                <h2 class="text-xl font-black text-gray-900 mb-1">SMS Tasdiqlash</h2>
                <p class="text-xs text-gray-500 mb-4 font-mono">${Auth.userPhone}</p>
                
                <div class="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-2xl text-xs mb-5 w-full text-center animate-pulse">
                    🔔 <b>SMS keldi:</b> Kod: <b class="text-sm text-red-600 font-mono tracking-widest">${Auth.generatedCode}</b>
                </div>

                <div class="w-full">
                    <input id="smsCodeInput" type="number" maxlength="4" placeholder="••••" class="w-full p-3.5 border border-gray-300 rounded-2xl text-center text-2xl font-black tracking-widest focus:ring-2 focus:ring-red-500 focus:outline-none">
                </div>
            </div>

            <div>
                <p id="smsError" class="text-xs text-red-600 font-bold text-center mb-3 hidden">Kiritilgan kod xato!</p>
                <button onclick="Auth.verifySMS()" class="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl font-bold text-sm shadow-lg mb-2">
                    Kodni tasdiqlash
                </button>
                <button onclick="App.showScreen('auth')" class="w-full py-2 text-xs text-gray-500 font-semibold">Orqaga qaytish</button>
            </div>
        </div>
    `,

    verifySMS: () => {
        const inputCode = document.getElementById('smsCodeInput').value.trim();
        if (inputCode == Auth.generatedCode) {
            if (Auth.isNewUser) {
                App.showScreen('auth_register');
            } else {
                App.showScreen('auth_login');
            }
        } else {
            document.getElementById('smsError').classList.remove('hidden');
        }
    },

    renderRegister: () => `
        <div class="flex flex-col justify-between h-full p-6 bg-white overflow-y-auto">
            <div class="my-auto flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center text-3xl mb-3">✨</div>
                <h2 class="text-xl font-black text-gray-900 mb-1">Hisob Yaratish</h2>
                <p class="text-xs text-gray-500 mb-5">Login va parolingizni belgilang</p>
                
                <div class="w-full space-y-3 text-left">
                    <input id="regLogin" type="text" placeholder="Login nomi" class="w-full p-3.5 border rounded-2xl text-sm">
                    <input id="regPassword" type="password" placeholder="Parol yarating" class="w-full p-3.5 border rounded-2xl text-sm">
                    <input id="regPasswordConfirm" type="password" placeholder="Parolni takrorlang" class="w-full p-3.5 border rounded-2xl text-sm">
                </div>
            </div>

            <div class="mt-4">
                <p id="regError" class="text-xs text-red-600 font-bold text-center mb-3 hidden"></p>
                <button onclick="Auth.saveNewUser()" class="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl font-bold text-sm shadow-xl">
                    Saqlash va Kirish
                </button>
            </div>
        </div>
    `,

    saveNewUser: () => {
        const login = document.getElementById('regLogin').value.trim();
        const pass = document.getElementById('regPassword').value.trim();
        const passConfirm = document.getElementById('regPasswordConfirm').value.trim();
        const errorEl = document.getElementById('regError');

        if (login.length < 3 || pass.length < 4 || pass !== passConfirm) {
            errorEl.innerText = "Ma'lumotlar to'liq yoki parollar mos emas!";
            errorEl.classList.remove('hidden');
            return;
        }

        localStorage.setItem('se_user_' + Auth.userJshshir, JSON.stringify({ login, pass }));
        App.showScreen('home');
    },

    renderLogin: () => `
        <div class="flex flex-col justify-between h-full p-6 bg-white">
            <div class="my-auto flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center text-3xl mb-3">🔐</div>
                <h2 class="text-xl font-black text-gray-900 mb-1">Xush kelibsiz!</h2>
                <p class="text-xs text-gray-500 mb-6">Parolingizni kiriting</p>
                <input id="loginPassword" type="password" placeholder="••••••••" class="w-full p-3.5 border rounded-2xl text-sm">
            </div>

            <div>
                <p id="loginError" class="text-xs text-red-600 font-bold text-center mb-3 hidden">Parol noto'g'ri!</p>
                <button onclick="Auth.checkUserLogin()" class="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl font-bold text-sm shadow-xl">
                    Kirish
                </button>
            </div>
        </div>
    `,

    checkUserLogin: () => {
        const pass = document.getElementById('loginPassword').value.trim();
        const saved = JSON.parse(localStorage.getItem('se_user_' + Auth.userJshshir));
        if (saved && saved.pass === pass) {
            App.showScreen('home');
        } else {
            document.getElementById('loginError').classList.remove('hidden');
        }
    },

    // 3. TIBBIY XODIMLARNI TEKSHIRISH VA YO'NALTIRISH
    loginStaff: () => {
        const login = document.getElementById('staffLogin').value.trim();
        const pass = document.getElementById('staffPassword').value.trim();
        const errorEl = document.getElementById('staffError');

        // Laborant kirishi
        if (login === 'lab_innova' && pass === '1234') {
            errorEl.classList.add('hidden');
            App.currentRole = 'lab';
            App.showScreen('lab_panel');
        } 
        // Tez yordam shifokori kirishi
        else if (login === 'doc_103' && pass === '1234') {
            errorEl.classList.add('hidden');
            App.currentRole = 'doctor';
            App.showScreen('doctor_panel');
        } 
        else {
            errorEl.classList.remove('hidden');
        }
    }
};
