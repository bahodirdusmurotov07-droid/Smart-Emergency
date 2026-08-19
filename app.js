// Tibbiy ma'lumotlar bazasi
const MedicalData = {
    my_card: {
        cardKey: "my_card",
        name: "Mening profilim",
        bg: "bg-red-600",
        badgeText: "🔴 3-SHKALA: KRITIK XAVF (Insult Tarixi)",
        history: "2025-yil Ishemik insult o'tkazilgan. Reanimatsiya brigadasi yo'lda."
    },
    father_card: {
        cardKey: "father_card",
        name: "Otam (58 yosh)",
        bg: "bg-red-600",
        badgeText: "🔴 3-SHKALA: KRITIK XAVF (Avval insult bo'lgan)",
        history: "Gipertoniya va insult tarixi mavjud. Shoshilinch brigada yo'naltirildi."
    },
    mother_card: {
        cardKey: "mother_card",
        name: "Onam (54 yosh)",
        bg: "bg-amber-500",
        badgeText: "🟡 2-SHKALA: SURUNKALI KASALLIK",
        history: "Qandli diabet, Gipertoniya. Maxsus dori-darmonlar bilan brigada yo'lda."
    },
    child_card: {
        cardKey: "child_card",
        name: "Farzandim (4 yosh)",
        bg: "bg-emerald-600",
        badgeText: "🟢 1-SHKALA: STANDART CHAQIRUV",
        history: "Surunkali kasallik yo'q. Eng yaqin navbatdagi brigada yo'naltirildi."
    },
    stranger_red: {
        cardKey: "stranger_red",
        name: "Begona shaxs (Hushsiz)",
        bg: "bg-red-600",
        badgeText: "🔴 3-SHKALA: KRITIK TRAVMA",
        history: "Bemor hushsiz holatda topilgan. Reanimatsiya brigadasi chaqirildi."
    },
    stranger_red_car: {
        cardKey: "stranger_red_car",
        name: "Begona shaxs (YTH)",
        bg: "bg-red-600",
        badgeText: "🔴 3-SHKALA: AVTOHALOKAT JAROHATI",
        history: "YTH jarohati qayd etildi. Shoshilinch yordam brigadasi yo'lda."
    },
    stranger_yellow: {
        cardKey: "stranger_yellow",
        name: "Begona shaxs (Qon ketish)",
        bg: "bg-amber-500",
        badgeText: "🟡 2-SHKALA: O'TKIR QON KETISH",
        history: "Tashqi jarohat va qon ketish holati. Maxsus to'plam bilan yo'lda."
    },
    stranger_green: {
        cardKey: "stranger_green",
        name: "Begona shaxs (Umumiy)",
        bg: "bg-blue-600",
        badgeText: "🟢 1-SHKALA: UMUMIY TIBBIY YORDAM",
        history: "Standart shoshilinch yordam brigadasi yo'naltirildi."
    }
};

const App = {
    timerId: null,
    pendingData: null,

    showScreen: (screenName, data = null) => {
        const app = document.getElementById('app');
        if (!app) return;

        if (App.timerId) {
            clearInterval(App.timerId);
            App.timerId = null;
        }

        if (screenName === 'auth') app.innerHTML = Auth.render();
        else if (screenName === 'auth_verify') app.innerHTML = Auth.renderVerify();
        else if (screenName === 'auth_register') app.innerHTML = Auth.renderRegister();
        else if (screenName === 'auth_login') app.innerHTML = Auth.renderLogin();
        else if (screenName === 'home') app.innerHTML = UI.renderHome();
        else if (screenName === 'family') app.innerHTML = UI.renderFamily();
        else if (screenName === 'stranger') app.innerHTML = UI.renderStranger();
        else if (screenName === 'profile') app.innerHTML = UI.renderProfile();
        else if (screenName === 'admin_menu') app.innerHTML = UI.renderAdminMenu();
        else if (screenName === 'history_panel') app.innerHTML = HistoryPanel.render();
        else if (screenName === 'lab_panel') app.innerHTML = LabPanel.render();
        else if (screenName === 'doctor_panel') {
            app.innerHTML = DoctorPanel.render();
            DoctorPanel.initMap();
        }
        else if (screenName === 'comment') app.innerHTML = Comment.render(data);
        else if (screenName === 'countdown') app.innerHTML = UI.renderCountdown(data);
        else if (screenName === 'offline_sos_screen') app.innerHTML = OfflineSOS.render(data);
        else if (screenName === 'tracking') {
            app.innerHTML = UI.renderTracking(data);
            App.initMap();
        }

        if (!navigator.onLine) {
            OfflineSOS.showBanner(true);
        }
    },

    initiateCall: (cardKey, fromScreen = 'home') => {
        const selected = MedicalData[cardKey] || MedicalData.stranger_green;
        App.pendingData = { ...selected, fromScreen: fromScreen };

        if (!navigator.onLine) {
            App.showScreen('offline_sos_screen', App.pendingData);
            return;
        }

        App.showScreen('comment', App.pendingData);
    },

    startCountdown: () => {
        if (!App.pendingData) {
            App.pendingData = MedicalData.my_card;
        }

        if (!navigator.onLine) {
            App.showScreen('offline_sos_screen', App.pendingData);
            return;
        }

        App.showScreen('countdown', App.pendingData);

        let count = 3;
        const circleEl = document.getElementById('countdownCircle');
        if (circleEl) circleEl.innerText = count;

        if (App.timerId) clearInterval(App.timerId);

        App.timerId = setInterval(() => {
            count--;
            const el = document.getElementById('countdownCircle');
            if (el) el.innerText = count;

            if (count <= 0) {
                clearInterval(App.timerId);
                App.timerId = null;

                // Yangi chaqiruvni avtomatik tarixga yozish
                HistoryPanel.addRecord(App.pendingData);

                if (!navigator.onLine) {
                    App.showScreen('offline_sos_screen', App.pendingData);
                } else {
                    App.showScreen('tracking', App.pendingData);
                }
            }
        }, 1000);
    },

    cancelCountdown: () => {
        if (App.timerId) {
            clearInterval(App.timerId);
            App.timerId = null;
        }
        App.showScreen('home');
    },

    initMap: () => {
        setTimeout(() => {
            try {
                const userLat = 41.3111, userLng = 69.2797;
                let map = L.map('map').setView([userLat, userLng], 14);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap'
                }).addTo(map);

                L.marker([userLat, userLng]).addTo(map).bindPopup("Siz turgan manzil").openPopup();
                L.marker([41.3030, 69.2690]).addTo(map).bindPopup("🚑 14-Brigada");
            } catch (e) {
                console.log("Xarita xatoligi:", e);
            }
        }, 300);
    }
};

OfflineSOS.init();
App.showScreen('auth');
