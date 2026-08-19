const LabPanel = {
    render: () => `
        <div class="flex flex-col justify-between h-full w-full p-4 bg-slate-900 text-white overflow-y-auto">
            <div>
                <!-- Yuqori panel -->
                <div class="flex justify-between items-center pb-3 border-b border-slate-800 mb-3">
                    <div class="flex items-center space-x-2.5">
                        <div class="w-9 h-9 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-base shadow-md">
                            🧪
                        </div>
                        <div>
                            <h3 class="font-extrabold text-white text-sm leading-tight">Laboratoriya Tizimi</h3>
                            <p class="text-[10px] text-indigo-300">Innova Lab / Markaziy Tahlil</p>
                        </div>
                    </div>
                    <button onclick="App.showScreen('home')" class="text-xs text-slate-300 font-bold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 active:scale-95">Orqaga</button>
                </div>

                <!-- Bemor JSHSHIR -->
                <div class="bg-slate-800 p-3.5 rounded-3xl border border-slate-700 mb-3 shadow-sm">
                    <label class="block text-[11px] font-bold text-slate-300 mb-1">Bemor JSHSHIR raqami:</label>
                    <div class="flex gap-2">
                        <input id="labJshshir" type="text" value="31201991234567" class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-indigo-500">
                        <button onclick="LabPanel.searchPatient()" class="px-3.5 bg-indigo-600 active:scale-95 text-white rounded-xl text-xs font-bold shrink-0 shadow-md">Tekshirish</button>
                    </div>
                </div>

                <!-- Tahlil kiritish formasi -->
                <div class="bg-slate-800 p-4 rounded-3xl border border-slate-700 space-y-3 shadow-sm">
                    <h4 class="font-extrabold text-xs text-white border-b border-slate-700 pb-2 flex items-center gap-1.5">
                        <span>📝</span> Yangi Tahlil Natijasi:
                    </h4>
                    
                    <div>
                        <label class="text-[11px] font-bold text-slate-300">Tahlil turi:</label>
                        <select id="labTestType" class="w-full p-2.5 mt-1 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 appearance-none">
                            <optgroup label="🚨 Shoshilinch / Kardiologik">
                                <option value="Troponin I / T (Yurak infarkti)">Troponin I / T (Yurak infarkti)</option>
                                <option value="Koagulyatsiya (D-Dimer, Fibrinogen)">Koagulyatsiya (D-Dimer, Fibrinogen)</option>
                                <option value="KFK-MB (Kardiomarker)">KFK-MB (Kardiomarker)</option>
                            </optgroup>

                            <optgroup label="📋 Umumiy Klinik Tahlillar">
                                <option value="Umumiy qon tahlili (UAK/OAK)">Umumiy qon tahlili (UAK / OAK)</option>
                                <option value="Umumiy siydik tahlili (OAM)">Umumiy siydik tahlili (OAM)</option>
                                <option value="Najas tahlili (Koprogramma)">Najas tahlili (Koprogramma)</option>
                            </optgroup>

                            <optgroup label="🧪 Biokimyoviy Tahlillar">
                                <option value="Qand miqdori (Glyukoza)">Qand miqdori (Glyukoza)</option>
                                <option value="Glikosirlangan gemoglobin (HbA1c)">Glikosirlangan gemoglobin (HbA1c)</option>
                                <option value="Jigar sinamalari (ALT, AST, Bilirubin)">Jigar sinamalari (ALT, AST, Bilirubin)</option>
                                <option value="Buyrak sinamalari (Kreatinin, Mochevina)">Buyrak sinamalari (Kreatinin, Mochevina, Siydik kislotasi)</option>
                                <option value="Lipid spektri (Xolesterin, Triglitserid)">Lipid spektri (Xolesterin, Triglitserid)</option>
                                <option value="Umumiy oqsil (Protein)">Umumiy oqsil (Protein)</option>
                                <option value="Elektrolitlar (K, Na, Ca, Mg)">Elektrolitlar (Kaliy, Natriy, Kalsiy, Magniy)</option>
                                <option value="Temir (Ferritin, Zardob temiri)">Temir (Ferritin, Zardob temiri)</option>
                            </optgroup>

                            <optgroup label="🧬 Gormonlar va Endokrinologiya">
                                <option value="Qalqonsimon bez (TTG, T3, T4 erkin)">Qalqonsimon bez (TTG, T3, T4 erkin)</option>
                                <option value="Jinsiy gormonlar (Testosteron, Prolaktin, Estrogen)">Jinsiy gormonlar (Testosteron, Prolaktin, Estrogen)</option>
                                <option value="Vitamin D (25-OH)">Vitamin D (25-OH)</option>
                            </optgroup>

                            <optgroup label="🦠 Infeksion Kasalliklar va Immunologiya">
                                <option value="C-reaktiv oqsil (CRO / CRP)">C-reaktiv oqsil (CRO / CRP)</option>
                                <option value="Revmatoid omil (RF)">Revmatoid omil (RF)</option>
                                <option value="Gepatit B (HBsAg)">Gepatit B (HBsAg)</option>
                                <option value="Gepatit C (Anti-HCV)">Gepatit C (Anti-HCV)</option>
                                <option value="OIV / SPID (VICh-infeksiya)">OIV / SPID (VICh-infeksiya)</option>
                                <option value="Zaxm (Sifilis / RW)">Zaxm (Sifilis / RW)</option>
                                <option value="TORCH infeksiyalari (IgM, IgG)">TORCH infeksiyalari (IgM, IgG)</option>
                            </optgroup>

                            <optgroup label="🎗 Onkomarkerlar">
                                <option value="PSA (Prostata onkomarkeri)">PSA (Prostata)</option>
                                <option value="CA-125 (Tuxumdon onkomarkeri)">CA-125 (Tuxumdon)</option>
                                <option value="AFP, CEA (Oshqozon, Jigar onkomarkeri)">AFP, CEA (Oshqozon, Jigar)</option>
                            </optgroup>
                        </select>
                    </div>

                    <div>
                        <label class="text-[11px] font-bold text-slate-300">Xavf darajasi / Natija:</label>
                        <select id="labRiskLevel" class="w-full p-2.5 mt-1 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-amber-400 focus:outline-none">
                            <option value="🔴 Yuqori xavf (Kritik)">🔴 Yuqori xavf (Kritik chegarada)</option>
                            <option value="🟡 O'rtacha xavf (Nazoratda)">🟡 O'rtacha xavf (Nazoratda)</option>
                            <option value="🟢 Norma (Xavfsiz)">🟢 Norma (Xavfsiz)</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[11px] font-bold text-slate-300">Laborant / Shifokor xulosasi:</label>
                        <textarea id="labNote" rows="2" placeholder="Masalan: Natija normadan 2 barobar yuqori, qayta tekshiruv talab etiladi..." class="w-full p-2.5 mt-1 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"></textarea>
                    </div>

                    <button onclick="LabPanel.saveLabResult()" class="w-full py-3.5 bg-indigo-600 active:scale-95 text-white rounded-2xl font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all">
                        Tahlilni Kartaga Biriktirish &rarr;
                    </button>
                    
                    <div id="labSuccessAlert" class="hidden p-2.5 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-center mt-2">
                        <p class="text-xs text-emerald-400 font-bold">✓ Tahlil saqlandi va Tibbiy Kartaga yangilandi!</p>
                    </div>
                </div>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3 bg-slate-800 text-slate-300 rounded-2xl font-bold text-xs border border-slate-700 mt-3 active:scale-95">
                Bosh menyuga qaytish
            </button>
        </div>
    `,

    searchPatient: () => {
        const jshshir = document.getElementById('labJshshir').value.trim();
        if (jshshir.length >= 10) {
            alert(`Bemor topildi (JSHSHIR: ${jshshir})\nIsm: Shaxsiy Profil (32 yosh)\nTahlilni kiritishingiz mumkin.`);
        } else {
            alert("Iltimos, to'g'ri JSHSHIR raqamini kiriting!");
        }
    },

    saveLabResult: () => {
        const testTypeEl = document.getElementById('labTestType');
        const riskEl = document.getElementById('labRiskLevel');
        const noteEl = document.getElementById('labNote');

        const testType = testTypeEl ? testTypeEl.value : "Koagulyatsiya (D-Dimer)";
        const risk = riskEl ? riskEl.value : "🔴 Yuqori xavf (Kritik)";
        const note = (noteEl && noteEl.value.trim()) ? noteEl.value.trim() : "Qon tahlili normadan chetlashgan, zudlik bilan nazorat talab qilinadi.";

        const now = new Date();
        const dateStr = `${now.toLocaleDateString('uz-UZ')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        const resultData = {
            testType: testType,
            risk: risk,
            note: note,
            date: dateStr
        };

        // Barcha panellar uchun yagona umumiy kalitga saqlash
        localStorage.setItem('se_latest_lab_result', JSON.stringify(resultData));

        // Bildirishnomani ko'rsatish
        const alertEl = document.getElementById('labSuccessAlert');
        if (alertEl) {
            alertEl.classList.remove('hidden');
            setTimeout(() => {
                alertEl.classList.add('hidden');
            }, 3000);
        }
    }
};
