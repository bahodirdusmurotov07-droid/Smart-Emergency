const DoctorPanel = {
    patientLat: 41.3111,
    patientLng: 69.2797,
    ambulanceLat: 41.3015,
    ambulanceLng: 69.2640,

    render: () => {
        // Laboratoriya kiritgan oxirgi jonli tahlilni o'qib olish
        const labData = typeof UI !== 'undefined' ? UI.getLabData() : {
            testType: "Koagulyatsiya (D-Dimer)",
            risk: "🔴 Yuqori xavf (Kritik)",
            note: "Insult takrorlanish xavfi mavjud, qon quyulgan.",
            date: "Bugun"
        };

        const yandexNavUrl = `https://yandex.uz/maps/?rtext=${DoctorPanel.ambulanceLat},${DoctorPanel.ambulanceLng}~${DoctorPanel.patientLat},${DoctorPanel.patientLng}&rtt=auto`;
        const googleNavUrl = `https://www.google.com/maps/dir/?api=1&origin=${DoctorPanel.ambulanceLat},${DoctorPanel.ambulanceLng}&destination=${DoctorPanel.patientLat},${DoctorPanel.patientLng}&travelmode=driving`;

        return `
            <div class="flex flex-col justify-between h-full w-full p-4 bg-slate-950 text-white overflow-y-auto">
                <div class="space-y-3">
                    <!-- Yuqori qism (Header) -->
                    <div class="flex justify-between items-center pb-2.5 border-b border-slate-800">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center text-white text-sm shadow-md">
                                🚑
                            </div>
                            <div>
                                <h3 class="font-black text-white text-sm leading-tight">14-Reanimatsiya Brigadasi</h3>
                                <p class="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> GPS Navigatsiya Faol
                                </p>
                            </div>
                        </div>
                        <button onclick="App.showScreen('home')" class="text-xs text-slate-400 font-bold bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 active:scale-95">Chiqish</button>
                    </div>

                    <!-- Jonli Xarita va Marshrut -->
                    <div class="relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
                        <div id="doctorMap" style="height: 180px; width: 100%;"></div>
                        
                        <!-- Marshrut haqida tezkor bildirishnoma -->
                        <div class="absolute top-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 flex justify-between items-center text-[11px] z-[500]">
                            <span class="text-slate-300">Tirbandlik hisobi bilan:</span>
                            <span class="font-black text-emerald-400">~1.4 km (3 daqiqa)</span>
                        </div>
                    </div>

                    <!-- Tashqi Navigatsiya Tugmalari -->
                    <div class="grid grid-cols-2 gap-2">
                        <a href="${yandexNavUrl}" target="_blank" class="py-2.5 bg-yellow-500 active:scale-95 text-slate-950 rounded-2xl font-black text-[11px] flex items-center justify-center gap-1.5 shadow-md shadow-yellow-500/20">
                            <span>📍</span> Yandex Navigator
                        </a>
                        <a href="${googleNavUrl}" target="_blank" class="py-2.5 bg-blue-600 active:scale-95 text-white rounded-2xl font-black text-[11px] flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20">
                            <span>🧭</span> Google Maps
                        </a>
                    </div>

                    <!-- Bemor Kartochkasi -->
                    <div class="bg-slate-900 p-3.5 rounded-2xl border border-red-500/30 space-y-2 text-xs">
                        <div class="flex justify-between items-start">
                            <div>
                                <h4 class="text-sm font-black text-white">Bemor: Shaxsiy Profil (32 yosh)</h4>
                                <p class="text-[11px] text-slate-400">Qon guruhi: <b class="text-red-400">A(II) Rh+</b> | JSHSHIR: 31201991234567</p>
                            </div>
                            <span class="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase">3-SHKALA</span>
                        </div>

                        <!-- Taqiqlangan dori va tashxis -->
                        <div class="bg-red-950/50 border border-red-800/60 p-2.5 rounded-xl text-[11px] text-red-200">
                            <p class="font-bold text-red-400">🔴 TIBBIY OGOHLANTIRISH:</p>
                            <p class="mt-0.5">• 2025: Ishemik Insult tarixi (Kritik guruh)</p>
                            <p class="font-bold text-amber-300">• Taqiqlangan dori: Penitsillin (Kuchli allergiya)</p>
                        </div>

                        <!-- Laboratoriya Tahlili Natijasi (Sinxronlangan) -->
                        <div class="bg-slate-950/70 border border-slate-800 p-2.5 rounded-xl text-[11px] space-y-1">
                            <div class="flex justify-between items-center">
                                <span class="text-indigo-300 font-bold">🧪 ${labData.testType}:</span>
                                <span class="text-amber-400 font-bold text-[10px]">${labData.risk}</span>
                            </div>
                            <p class="text-slate-300 text-[10px] leading-relaxed"><b>Xulosa:</b> ${labData.note}</p>
                            <p class="text-slate-500 text-[9px] text-right">Sana: ${labData.date || 'Bugun'}</p>
                        </div>
                    </div>
                </div>

                <!-- Pastki Boshqaruv Tugmalari -->
                <div class="space-y-2 mt-3">
                    <button onclick="alert('Bemor manziliga yetib borilgani shtabga xabar qilindi.')" class="w-full py-3 bg-emerald-600 active:scale-95 text-white rounded-2xl font-bold text-xs shadow-lg shadow-emerald-950">
                        ✓ Manzilga yetib keldik
                    </button>
                    <button onclick="alert('Bemor reanimobilga qabul qilindi. Shifoxonaga yo\'l olindi.')" class="w-full py-2.5 bg-slate-900 active:bg-slate-800 text-slate-300 rounded-2xl font-bold text-xs border border-slate-800">
                        Bemor qabul qilindi / Yakunlash
                    </button>
                </div>
            </div>
        `;
    },

    // Xaritani yuklash va marshrutni chizish
    initMap: () => {
        setTimeout(() => {
            try {
                const mapEl = document.getElementById('doctorMap');
                if (!mapEl) return;

                const map = L.map('doctorMap', { zoomControl: false }).setView([41.3063, 69.2718], 14);
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap'
                }).addTo(map);

                // Brigada markeri
                const ambulanceMarker = L.marker([DoctorPanel.ambulanceLat, DoctorPanel.ambulanceLng]).addTo(map)
                    .bindPopup("🚑 14-Brigada (Siz)").openPopup();

                // Bemor markeri
                L.marker([DoctorPanel.patientLat, DoctorPanel.patientLng]).addTo(map)
                    .bindPopup("🚨 Bemor manzili (SOS)");

                // Yo'l marshruti chizig'i
                const routeCoordinates = [
                    [DoctorPanel.ambulanceLat, DoctorPanel.ambulanceLng],
                    [41.3050, 69.2680],
                    [41.3080, 69.2740],
                    [DoctorPanel.patientLat, DoctorPanel.patientLng]
                ];

                const routeLine = L.polyline(routeCoordinates, {
                    color: '#ef4444',
                    weight: 5,
                    opacity: 0.85,
                    dashArray: '8, 8',
                    lineJoin: 'round'
                }).addTo(map);

                map.fitBounds(routeLine.getBounds(), { padding: [25, 25] });

                // Avtomobil harakati simulyatsiyasi
                let currentLat = DoctorPanel.ambulanceLat;
                let currentLng = DoctorPanel.ambulanceLng;
                setInterval(() => {
                    currentLat += (DoctorPanel.patientLat - currentLat) * 0.05;
                    currentLng += (DoctorPanel.patientLng - currentLng) * 0.05;
                    ambulanceMarker.setLatLng([currentLat, currentLng]);
                }, 2500);

            } catch (e) {
                console.log("Shifokor xaritasi xatoligi:", e);
            }
        }, 300);
    }
};
