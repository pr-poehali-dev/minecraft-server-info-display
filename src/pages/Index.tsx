import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7b9969f2-de2e-4368-ac9e-e901b14ff577/files/89275738-ebc6-48a6-bfc9-85549782a487.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О сервере" },
  { id: "connect", label: "Подключение" },
  { id: "contacts", label: "Контакты" },
  { id: "donate", label: "💰 Донат" },
];

const ACHIEVEMENTS = [
  { icon: "⚔️", name: "Первая кровь", desc: "Убить первого моба" },
  { icon: "🏠", name: "Домосед", desc: "Построить дом 10×10" },
  { icon: "💎", name: "Алмазный век", desc: "Найти 64 алмаза" },
  { icon: "🐉", name: "Драконоборец", desc: "Победить Эндер Дракона" },
  { icon: "🌋", name: "Выживший", desc: "Пережить 100 ночей" },
  { icon: "🔮", name: "Чародей", desc: "Изучить все зелья" },
];

const CRAFTS = [
  { icon: "⚡", name: "Молния в бутылке", desc: "Новый ресурс для зачарований" },
  { icon: "🛡️", name: "Кристальная броня", desc: "Броня из кристаллов Края" },
  { icon: "🌿", name: "Эликсир роста", desc: "Ускоряет фермы в 3 раза" },
  { icon: "🔩", name: "Нейтрониевый сплав", desc: "Прочнее алмаза в 5 раз" },
];

const RULES = [
  "Запрещены читы, x-ray и любые взломы",
  "Уважайте других игроков — без оскорблений",
  "Не разрушайте постройки других без разрешения",
  "Гриферство карается баном навсегда",
  "Реклама других серверов запрещена",
  "Слушайтесь администрации сервера",
];

function PixelBlock({ color = "#5aaa3a", size = 16 }: { color?: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: color,
        flexShrink: 0,
        boxShadow: `inset -${Math.max(2, size / 4)}px -${Math.max(2, size / 4)}px 0px rgba(0,0,0,0.4), inset ${Math.max(2, size / 4)}px ${Math.max(2, size / 4)}px 0px rgba(255,255,255,0.2)`,
        imageRendering: "pixelated",
      }}
    />
  );
}

function PixelDivider() {
  return (
    <div className="flex gap-0 justify-center my-2 overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <PixelBlock
          key={i}
          color={i % 2 === 0 ? "#5aaa3a" : "#3d7a28"}
          size={20}
        />
      ))}
    </div>
  );
}

function OnlineCounter() {
  const [count, setCount] = useState(247);
  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => Math.max(200, c + Math.floor(Math.random() * 3) - 1));
    }, 3000);
    return () => clearInterval(t);
  }, []);
  return <span style={{ color: "var(--mc-green)" }}>{count}</span>;
}

export default function Index() {
  const [active, setActive] = useState("home");
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (id === "donate") {
      navigate("/donate");
      return;
    }
    setActive(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyIp = () => {
    navigator.clipboard.writeText("grifmine963.mcsh.io");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--mc-dark-bg)", color: "#d4e8c2" }}>
      {/* NAV */}
      <nav
        style={{
          background: "rgba(13,17,23,0.97)",
          borderBottom: "4px solid var(--mc-border)",
          boxShadow: "0 4px 0px rgba(0,0,0,0.5)",
        }}
        className="fixed top-0 w-full z-50 px-4 md:px-8 py-3"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            className="animate-pixel-glow cursor-pointer"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "var(--mc-green)" }}
            onClick={() => scrollTo("home")}
          >
            ⛏ GRIF<span style={{ color: "#FFD700" }}>MINE</span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8 }}
                className={`transition-all hover:text-[#5aaa3a] ${active === item.id ? "nav-active" : "text-gray-400"}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className="hidden md:flex items-center gap-2 px-3 py-1 pixel-card"
            style={{ fontSize: 11, fontFamily: "'Press Start 2P', monospace" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
            <OnlineCounter /> онлайн
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-4 pb-4 border-t pt-4" style={{ borderColor: "var(--mc-border)" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9 }}
                className={`text-left px-4 ${active === item.id ? "nav-active" : "text-gray-400"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3) saturate(0.7)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 flex overflow-hidden" style={{ height: 20 }}>
          {Array.from({ length: 100 }).map((_, i) => (
            <PixelBlock key={i} color={i % 3 === 0 ? "#5aaa3a" : i % 3 === 1 ? "#4d9530" : "#3d7a28"} size={20} />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div
            className="mb-6 leading-tight"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "clamp(24px, 5vw, 52px)",
              color: "#FFD700",
              textShadow: "4px 4px 0px rgba(0,0,0,0.9), 0 0 40px rgba(255,215,0,0.3)",
            }}
          >
            GRIF<span style={{ color: "var(--mc-green)", textShadow: "4px 4px 0px rgba(0,0,0,0.9), 0 0 40px rgba(90,170,58,0.4)" }}>MINE</span>
          </div>

          <p style={{ fontFamily: "'VT323', monospace", fontSize: "clamp(18px, 3vw, 26px)", letterSpacing: 1, color: "#b0c8a0" }} className="mb-6">
            Уникальные крафты · Линейка достижений · Своё комьюнити · Сервер полностью без доната
          </p>

          <div
            className="inline-flex flex-col md:flex-row items-center gap-3 mb-8 px-6 py-4"
            style={{
              background: "rgba(13,17,23,0.9)",
              border: "4px solid var(--mc-green)",
              boxShadow: "inset -4px -4px 0px rgba(0,0,0,0.4), 0 0 24px rgba(90,170,58,0.25)",
            }}
          >
            <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#666" }}>IP:</span>
            <span className="animate-pixel-glow" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 14, color: "var(--mc-green)" }}>
              grifmine963.mcsh.io
            </span>
            <button className="pixel-btn" style={{ fontSize: 9, padding: "8px 16px" }} onClick={copyIp}>
              {copied ? "✓ скопировано" : "📋 копировать"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="pixel-btn" onClick={() => scrollTo("connect")}>▶ Присоединиться</button>
            <button className="pixel-btn pixel-btn-gold" onClick={() => scrollTo("about")}>📖 О сервере</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-4" style={{ background: "#0d1117" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(14px, 2.5vw, 22px)", color: "#FFD700", textShadow: "3px 3px 0px rgba(0,0,0,0.7)" }} className="mb-4">
              О сервере
            </h2>
            <PixelDivider />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="pixel-card p-6">
              <div className="text-3xl mb-3">⛏️</div>
              <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "var(--mc-green)" }} className="mb-3">
                Новые крафты
              </h3>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: 20, lineHeight: 1.4, color: "#b0c8a0" }}>
                На сервере добавлены десятки уникальных рецептов крафта, которых нет в ванильном Minecraft. Создавай предметы из редких ресурсов и удивляй других игроков!
              </p>
            </div>
            <div className="pixel-card p-6">
              <div className="text-3xl mb-3">🏆</div>
              <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "var(--mc-green)" }} className="mb-3">
                Линейка достижений
              </h3>
              <p style={{ fontFamily: "'VT323', monospace", fontSize: 20, lineHeight: 1.4, color: "#b0c8a0" }}>
                Проходи уникальную систему достижений от новичка до легенды. Каждое достижение открывает новые возможности и привилегии на сервере.
              </p>
            </div>
          </div>

          <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#FFD700", textShadow: "2px 2px 0px rgba(0,0,0,0.7)" }} className="text-center mb-8">
            ⚡ Уникальные крафты
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {CRAFTS.map((craft, i) => (
              <div key={i} className="pixel-card p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">{craft.icon}</div>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: "var(--mc-green)" }} className="mb-2">{craft.name}</div>
                <div style={{ fontFamily: "'VT323', monospace", fontSize: 16, color: "#8aad70" }}>{craft.desc}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#FFD700", textShadow: "2px 2px 0px rgba(0,0,0,0.7)" }} className="text-center mb-8">
            🏆 Линейка достижений
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((ach, i) => (
              <div key={i} className="pixel-card p-4 flex items-start gap-3 hover:scale-[1.02] transition-transform">
                <span className="text-2xl">{ach.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: "#FFD700" }} className="mb-1">{ach.name}</div>
                  <div style={{ fontFamily: "'VT323', monospace", fontSize: 17, color: "#8aad70" }}>{ach.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="py-20 px-4" style={{ background: "#0a0f16", borderTop: "4px solid var(--mc-border)", borderBottom: "4px solid var(--mc-border)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(14px, 2.5vw, 22px)", color: "#FFD700", textShadow: "3px 3px 0px rgba(0,0,0,0.7)" }} className="mb-4">
            Подключение
          </h2>
          <PixelDivider />

          <p style={{ fontFamily: "'VT323', monospace", fontSize: 22, color: "#b0c8a0" }} className="mt-6 mb-8">
            Подключиться к серверу очень просто — всего 3 шага!
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {[
              { step: "01", text: "Запусти Minecraft Java Edition 1.20+", icon: "🎮" },
              { step: "02", text: "Нажми «Сетевая игра» → «Добавить сервер»", icon: "🌐" },
              { step: "03", text: "Введи IP и нажми «Готово»", icon: "✅" },
            ].map((s) => (
              <div key={s.step} className="pixel-card p-5 flex items-center gap-4 text-left">
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 16, color: "var(--mc-green)", minWidth: 42 }}>{s.step}</div>
                <span className="text-2xl">{s.icon}</span>
                <span style={{ fontFamily: "'VT323', monospace", fontSize: 22, color: "#d0e8b0" }}>{s.text}</span>
              </div>
            ))}
          </div>

          <div
            className="p-6 mb-6"
            style={{
              background: "#0d1117",
              border: "4px solid var(--mc-green)",
              boxShadow: "0 0 30px rgba(90,170,58,0.2), inset -4px -4px 0px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#555", marginBottom: 12 }}>Адрес сервера:</div>
            <div className="animate-pixel-glow mb-4" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(12px, 3vw, 20px)", color: "var(--mc-green)" }}>
              grifmine963.mcsh.io
            </div>
            <button className="pixel-btn" onClick={copyIp}>{copied ? "✓ Скопировано!" : "📋 Скопировать IP"}</button>
          </div>

          <div style={{ fontFamily: "'VT323', monospace", fontSize: 18, color: "#555" }}>
            Версия: Java 1.20.x · Bedrock не поддерживается
          </div>
        </div>
      </section>



      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-4" style={{ background: "#0a0f16", borderTop: "4px solid var(--mc-border)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(14px, 2.5vw, 22px)", color: "#FFD700", textShadow: "3px 3px 0px rgba(0,0,0,0.7)" }} className="mb-4">
            Контакты
          </h2>
          <PixelDivider />

          <p style={{ fontFamily: "'VT323', monospace", fontSize: 22, color: "#b0c8a0" }} className="mt-6 mb-8">
            Есть вопросы? Свяжитесь с нами!
          </p>

          <div className="flex justify-center gap-4 mb-10">
            <div className="pixel-card p-5 hover:scale-105 transition-transform cursor-pointer w-48" onClick={() => window.open("https://t.me/grifmineg", "_blank")}>
              <div className="text-3xl mb-2">📱</div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: "var(--mc-green)", marginBottom: 8 }}>Telegram</div>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: 17, color: "#8aad70" }}>t.me/grifmineg</div>
            </div>
            <div className="pixel-card p-5 hover:scale-105 transition-transform cursor-pointer w-48" onClick={() => window.open("https://vk.ru/club237363875", "_blank")}>
              <div className="text-3xl mb-2">🔵</div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: "#4a76a8", marginBottom: 8 }}>ВКонтакте</div>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: 17, color: "#8aad70" }}>vk.ru/club237363875</div>
            </div>
          </div>

          <div className="pixel-card p-6 text-left">
            <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "var(--mc-green)", marginBottom: 20 }}>
              📝 Написать администрации
            </h3>
            <div className="flex flex-col gap-3">
              <input
                placeholder="Ваш никнейм"
                className="w-full p-3 outline-none"
                style={{
                  background: "#0d1117",
                  border: "4px solid #2d4020",
                  color: "#d4e8c2",
                  fontFamily: "'VT323', monospace",
                  fontSize: 20,
                  boxShadow: "inset 2px 2px 0px rgba(0,0,0,0.4)",
                }}
              />
              <textarea
                placeholder="Ваше сообщение..."
                rows={4}
                className="w-full p-3 outline-none resize-none"
                style={{
                  background: "#0d1117",
                  border: "4px solid #2d4020",
                  color: "#d4e8c2",
                  fontFamily: "'VT323', monospace",
                  fontSize: 20,
                  boxShadow: "inset 2px 2px 0px rgba(0,0,0,0.4)",
                }}
              />
              <button className="pixel-btn self-start">📨 Отправить</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center" style={{ background: "#060a0d", borderTop: "4px solid var(--mc-border)" }}>
        <div className="flex justify-center gap-0 mb-4 overflow-hidden">
          {Array.from({ length: 16 }).map((_, i) => (
            <PixelBlock key={i} color={["#5aaa3a", "#8B5E3C", "#555"][i % 3]} size={16} />
          ))}
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: "#2d4020" }}>
          © 2024 MINESERVER · Все права защищены
        </div>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 15, color: "#1e2e15", marginTop: 4 }}>
          grifmine963.mcsh.io
        </div>
      </footer>
    </div>
  );
}