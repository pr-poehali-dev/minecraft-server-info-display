import { useNavigate } from "react-router-dom";

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

const VOTE_SITES = [
  {
    name: "HotMC",
    url: "https://hotmc.ru/minecraft-server-288082",
    icon: "🔥",
    desc: "Проголосуй на HotMC и помоги серверу подняться в топе!",
    color: "#ff6b35",
  },
  {
    name: "Minecraft-Inside",
    url: "https://minecraft-inside.ru/top/server/24084/",
    icon: "⛏",
    desc: "Поддержи нас на Minecraft-Inside — каждый голос важен!",
    color: "#5aaa3a",
  },
];

export default function Vote() {
  const navigate = useNavigate();

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
            onClick={() => navigate("/")}
          >
            ⛏ GRIF<span style={{ color: "#FFD700" }}>MINE</span>
          </div>
          <button
            onClick={() => navigate("/")}
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8 }}
            className="text-gray-400 hover:text-[#5aaa3a] transition-all"
          >
            ← Назад
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
        <PixelDivider />
        <div className="text-center my-10">
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "clamp(16px, 4vw, 28px)",
              color: "#FFD700",
              textShadow: "3px 3px 0px rgba(0,0,0,0.9), 0 0 30px rgba(255,215,0,0.3)",
              marginBottom: 12,
            }}
          >
            🗳 ГОЛОСУЙТЕ ЗА НАС!
          </div>
          <p style={{ fontFamily: "'VT323', monospace", fontSize: 22, color: "#8aad70" }}>
            Ваш голос помогает серверу расти и привлекать новых игроков
          </p>
        </div>
        <PixelDivider />

        <div className="flex flex-col gap-8 mt-10">
          {VOTE_SITES.map((site) => (
            <div
              key={site.name}
              className="pixel-card p-8 flex flex-col sm:flex-row items-center gap-6"
              style={{ borderColor: site.color, boxShadow: `0 0 24px ${site.color}33` }}
            >
              <div style={{ fontSize: 64, lineHeight: 1 }}>{site.icon}</div>
              <div className="flex-1 text-center sm:text-left">
                <div
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 14,
                    color: site.color,
                    marginBottom: 8,
                  }}
                >
                  {site.name}
                </div>
                <p style={{ fontFamily: "'VT323', monospace", fontSize: 20, color: "#b0c8a0", marginBottom: 16 }}>
                  {site.desc}
                </p>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn inline-block"
                  style={{ fontSize: 10, padding: "10px 24px", background: site.color, border: "none" }}
                >
                  Проголосовать →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="pixel-card p-6 text-center mt-10"
          style={{ borderColor: "#3d5a2a", background: "rgba(13,17,23,0.7)" }}
        >
          <p style={{ fontFamily: "'VT323', monospace", fontSize: 20, color: "#8aad70" }}>
            Голосование можно повторять каждые 12–24 часа. Спасибо за поддержку! 💚
          </p>
        </div>

        <PixelDivider />
      </div>
    </div>
  );
}
