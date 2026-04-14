import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const DONATE_TIERS = [
  {
    icon: "🪨",
    name: "Камень",
    price: "50 ₽",
    color: "#7a7a7a",
    perks: ["Префикс [Камень] в чате", "Доступ к /kit stone раз в день"],
  },
  {
    icon: "🪵",
    name: "Дерево",
    price: "150 ₽",
    color: "#8B5E3C",
    perks: ["Префикс [Дерево] в чате", "Доступ к /kit wood", "Цветной ник"],
  },
  {
    icon: "💎",
    name: "Алмаз",
    price: "300 ₽",
    color: "#44cccc",
    perks: [
      "Префикс [Алмаз] в чате",
      "Доступ к /kit diamond",
      "Цветной ник",
      "Полёт в мирных зонах",
    ],
  },
  {
    icon: "✨",
    name: "Незерит",
    price: "600 ₽",
    color: "#FFD700",
    perks: [
      "Префикс [Незерит] в чате",
      "Полный набор /kit netherite",
      "Цветной ник + эффекты",
      "Полёт везде",
      "Доп. дом /sethome",
    ],
  },
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
        <PixelBlock key={i} color={i % 2 === 0 ? "#5aaa3a" : "#3d7a28"} size={20} />
      ))}
    </div>
  );
}

export default function Donate() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen text-[#d4e8c2]"
      style={{ background: "#0d1117", fontFamily: "'Rubik', sans-serif" }}
    >
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: "rgba(13,17,23,0.97)", borderBottom: "4px solid #2d4020" }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <PixelBlock color="#5aaa3a" size={18} />
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 11,
              color: "#5aaa3a",
              textShadow: "2px 2px 0 #000",
            }}
          >
            <span style={{ color: "#FFD700" }}>GRIF</span>MINE
          </span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 8,
            color: "#8aad70",
          }}
        >
          <Icon name="ArrowLeft" size={14} />
          Назад
        </button>
      </nav>

      {/* Hero */}
      <div className="pt-24 pb-8 text-center px-4">
        <div className="text-6xl mb-4">💰</div>
        <h1
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 20,
            color: "#FFD700",
            textShadow: "4px 4px 0 #000, 0 0 20px #FFD700",
            lineHeight: 1.6,
          }}
        >
          ПОДДЕРЖИ СЕРВЕР
        </h1>
        <PixelDivider />
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 22,
            color: "#b0c8a0",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Твой донат помогает нам держать сервер онлайн, обновлять плагины и развивать проект.
          Получи уникальные привилегии в благодарность!
        </p>
      </div>

      {/* Tiers */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DONATE_TIERS.map((tier) => (
            <div
              key={tier.name}
              className="pixel-card p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-3">{tier.icon}</div>
              <div
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 10,
                  color: tier.color,
                  textShadow: `2px 2px 0 #000, 0 0 10px ${tier.color}`,
                  marginBottom: 6,
                }}
              >
                {tier.name}
              </div>
              <div
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 14,
                  color: "#FFD700",
                  textShadow: "2px 2px 0 #000",
                  marginBottom: 14,
                }}
              >
                {tier.price}
              </div>
              <ul className="w-full mb-6 flex flex-col gap-2">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 text-left"
                    style={{ fontFamily: "'VT323', monospace", fontSize: 18, color: "#b0c8a0" }}
                  >
                    <span style={{ color: "#5aaa3a", flexShrink: 0 }}>▶</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <button
                className="pixel-btn w-full mt-auto"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8 }}
                disabled
              >
                Скоро
              </button>
            </div>
          ))}
        </div>

        {/* Info block */}
        <div
          className="pixel-card p-6 text-center"
          style={{ borderColor: "#FFD700", boxShadow: "0 0 20px rgba(255,215,0,0.15)" }}
        >
          <div className="text-3xl mb-3">📢</div>
          <p
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 9,
              color: "#FFD700",
              textShadow: "2px 2px 0 #000",
              marginBottom: 10,
            }}
          >
            Оплата скоро будет доступна
          </p>
          <p
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 20,
              color: "#b0c8a0",
            }}
          >
            Система доната находится в разработке. Следи за новостями в нашем Telegram и ВКонтакте!
          </p>
          <div className="flex justify-center gap-4 mt-5">
            <a
              href="https://t.me/grifmineg"
              target="_blank"
              rel="noreferrer"
              className="pixel-btn"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8 }}
            >
              Telegram
            </a>
            <a
              href="https://vk.ru/club237363875"
              target="_blank"
              rel="noreferrer"
              className="pixel-btn"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 8,
                background: "#4a76a8",
                boxShadow: "inset -4px -4px 0px #2a4a6a, inset 4px 4px 0px #6a96c8",
              }}
            >
              ВКонтакте
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
