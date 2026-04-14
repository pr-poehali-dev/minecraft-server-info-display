import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const CARD_NUMBER = "2202 2062 6446 5738";

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
  const [copied, setCopied] = useState(false);

  const copyCard = () => {
    navigator.clipboard.writeText(CARD_NUMBER.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="text-6xl mb-4">🙏</div>
        <h1
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 18,
            color: "#FFD700",
            textShadow: "4px 4px 0 #000, 0 0 20px #FFD700",
            lineHeight: 1.8,
          }}
        >
          ПОЖЕРТВОВАНИЕ
        </h1>
        <PixelDivider />
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 22,
            color: "#b0c8a0",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          Как вы знаете, на сервере нет платных возможностей. Но если вы хотите поддержать наш проект — вы можете пожертвовать во благо сервера.
        </p>
      </div>

      {/* Main card */}
      <div className="max-w-lg mx-auto px-4 pb-16 flex flex-col gap-6">

        {/* Card block */}
        <div
          className="pixel-card p-8 text-center"
          style={{ borderColor: "#FFD700", boxShadow: "0 0 30px rgba(255,215,0,0.2)" }}
        >
          <div className="text-4xl mb-4">💳</div>
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 9,
              color: "#8aad70",
              marginBottom: 16,
            }}
          >
            Карта Сбербанка
          </div>
          <div
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 20,
              color: "#d4e8c2",
              marginBottom: 16,
            }}
          >
            Киреев Всеволод Александрович
          </div>

          {/* Card number */}
          <div
            className="pixel-card px-6 py-4 mb-6 flex items-center justify-between gap-4"
            style={{ background: "#111820", borderColor: "#3d5a2a" }}
          >
            <span
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 14,
                color: "#FFD700",
                textShadow: "2px 2px 0 #000",
                letterSpacing: 2,
              }}
            >
              {CARD_NUMBER}
            </span>
            <button
              onClick={copyCard}
              className="hover:opacity-70 transition-opacity flex-shrink-0"
              title="Скопировать"
            >
              <Icon name={copied ? "Check" : "Copy"} size={20} color={copied ? "#5aaa3a" : "#8aad70"} />
            </button>
          </div>

          {copied && (
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: 20,
                color: "#5aaa3a",
                marginBottom: 12,
              }}
            >
              ✓ Номер скопирован!
            </div>
          )}

          <p
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 19,
              color: "#b0c8a0",
              lineHeight: 1.5,
            }}
          >
            Переведи любую сумму на карту через приложение Сбербанка.
            После перевода напиши нам в Telegram — скажем спасибо!
          </p>
        </div>

        {/* How to block */}
        <div className="pixel-card p-6">
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 9,
              color: "#5aaa3a",
              marginBottom: 16,
              textShadow: "2px 2px 0 #000",
            }}
          >
            Как перевести?
          </div>
          {[
            { n: "1", text: "Открой приложение Сбербанк Онлайн" },
            { n: "2", text: "Переводы → По номеру карты" },
            { n: "3", text: `Введи номер: ${CARD_NUMBER}` },
            { n: "4", text: "Укажи любую сумму и подтверди" },
            { n: "5", text: "Напиши нам в Telegram — мы скажем спасибо!" },
          ].map((step) => (
            <div key={step.n} className="flex items-start gap-3 mb-3">
              <div
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: 9,
                  color: "#FFD700",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {step.n}.
              </div>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: 20, color: "#b0c8a0" }}>
                {step.text}
              </div>
            </div>
          ))}
        </div>

        {/* Contacts */}
        <div className="flex gap-4">
          <a
            href="https://t.me/grifmineg"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn flex-1 text-center"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8 }}
          >
            Telegram
          </a>
          <a
            href="https://vk.ru/club237363875"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn flex-1 text-center"
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
  );
}