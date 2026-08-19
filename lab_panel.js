const LabPanel = {
    render: () => `
        <div class="flex flex-col justify-between h-full w-full p-5 bg-gray-50 overflow-y-auto">
            <div>
                <div class="flex justify-between items-center pb-3 border-b border-gray-200 mb-4">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-sm shadow-md">
                            🧪
                        </div>
                        <div>
                            <h3 class="font-black text-gray-900 text-sm">Laboratoriya Tizimi</h3>
                            <p class="text-[10px] text-gray-500">Innova Lab / Markaziy Tahlil</p>
                        </div>
                    </div>
                    <button onclick="App.showScreen('home')" class="text-xs text-gray-500 font-bold bg-white px-3 py-1.5 rounded-xl border border-gray-200">Orqaga</button>
                </div>

                <!-- Bemor qidirish -->
                <div class="bg-white p-4 rounded-2xl border border-gray-200 mb-4 shadow-sm">
                    <label class="block text-xs font-bold text-gray-700 mb-1">Bemor JSHSHIR raqami:</label>
                    <div class="flex gap-2">
                        <input id="labJshshir" type="number" placeholder="31201991234567" class="w-full p-3 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50 font-mono">
                        <button onclick="LabPanel.searchPatient()" class="px-4 bg-indigo-600 active:scale-95 text-white rounded-xl text-xs font-bold shrink-0 shadow-md shadow-indigo-100">Qidirish</button>
                    </div>
                </div>

                <!-- Tahlil kiritish formasi -->
                <div id="labFormContainer" class="bg-white p-4 rounded-2xl border border-gray-200 space-y-3 shadow-sm">
                    <h4 class="font-bold text-xs text-gray-900 border-b pb-2">Yangi Tahlil Natijasini Kiritish:</h4>
                    
                    <div>
                        <label class="text-[11px] font-bold text-gray-600">Tahlil turi:</label>
                        <select id="labTestType" class="w-full p-2.5 mt-1 border border-gray-200 rounded-xl text-xs bg-gray-50 focus:outline-none">
                            <option value="Koagulyatsiya (Qon quyulishi)">Koagulyatsiya (Qon quyulishi - D-Dimer)</option>
                            <option value="Troponin I / T (Yurak infarkti)">Troponin I / T (Yurak infarkti)</option>
                            <option value="Qand miqdori (Glyukoza)">Qand miqdori (Glyukoza)</option>
                            <option value="Umumiy qon tahlili">Umumiy qon tahlili</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[11px] font-bold text-gray-600">Xavf darajasi / Natija:</label>
                        <select id="labRiskLevel" class="w-full p-2.5 mt-1 border border-gray-200 rounded-xl text-xs bg-gray-50 focus:outline-none font-bold">
                            <option value="🔴 Yuqori xavf (Kritik chegarada)" class="text-red-600 font-bold">🔴 Yuqori xavf (Kritik chegarada)</option>
                            <option value="🟡 O'rtacha xavf (Nazoratda)" class="text-amber-600 font-bold">🟡 O'rtacha xavf (Nazoratda)</option>
                            <option value="🟢 Norma (Xavfsiz)" class="text-emerald-600 font-bold">🟢 Norma (Xavfsiz)</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[11px] font-bold text-gray-600">Shifokor / Laborant xulosasi:</label>
                        <textarea id="labNote" rows="2" placeholder="Masalan: Qon quyulish darajasi yuqori, insult takrorlanish xavfi mavjud..." class="w-full p-2.5 mt-1 border border-gray-200 rounded-xl text-xs bg-gray-50 focus:outline-none resize-none"></textarea>
                    </div>

                    <button onclick="LabPanel.saveLabResult()" class="w-full py-3 bg-indigo-600 active:scale-95 text-white rounded-xl font-bold text-xs shadow-md shadow-indigo-100 transition-all">
                        Tahlilni Bazaga Saqlash &rarr;
                    </button>
                    <p id="labSuccessMsg" class="text-[11px] text-emerald-600 font-bold text-center hidden">✓ Natija muvaffaqiyatli yuklandi va kartaga ulandi!</p>
                </div>
            </div>

            <button onclick="App.showScreen('home')" class="w-full py-3 bg-gray-200 text-gray-700 rounded-2xl font-bold text-xs mt-3">
                Bosh menyuga qaytish
            </button>
        </div>
    `,

    searchPatient: () => {
        const jshshir = document.getElementById('labJshshir').value.trim();
        if (jshshir.length === 14) {
            alert(`Bemor topildi (JSHSHIR: ${jshshir}). Endi tahlilni kiritishingiz mumkin.`);
        } else {
            alert("Iltimos, to'g'ri 14 xonali JSHSHIR kiriting!");
        }
    },

    saveLabResult: () => {
        const jshshir = document.getElementById('labJshshir').value.trim() || "31201991234567";
        const testType = document.getElementById('labTestType').value;
        const risk = document.getElementById('labRiskLevel').value;
        const note = document.getElementById('labNote').value.trim() || "Xulosa kiritilmadi";

        const resultData = {
            testType,
            risk,
            note,
            date: new Date().toLocaleDateString('uz-UZ')
        };

        localStorage.setItem('se_lab_' + jshshir, JSON.stringify(resultData));

        const msg = document.getElementById('labSuccessMsg');
        if (msg) {
            msg.classList.remove('hidden');
            setTimeout(() => msg.classList.add('hidden'), 3000);
        }
    }
};
