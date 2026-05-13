import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PLANETA_URL = "https://planeta.ru/campaigns/244619";

const raccoons = [
  {
    name: "Енотыч",
    emoji: "🎣",
    role: "Хранитель набережной",
    ritual: "Встречает рассветы и провожает закаты над морем",
    color: "#8B5A1A",
    photo: "https://cdn.poehali.dev/projects/898bd4ed-32e3-4e08-862f-895318af938b/bucket/ff4e51b2-f6e2-43a9-a04a-ca9e02a20012.jpg",
  },
  {
    name: "Енофья",
    emoji: "🌊",
    role: "Хранительница пляжа",
    ritual: "Собирает морские камешки для загадывания желаний",
    color: "#2E8B8B",
  },
  {
    name: "Туапсей",
    emoji: "🏔️",
    role: "Хранитель горных троп",
    ritual: "Указывает путь заблудившимся путникам",
    color: "#5A7A3A",
  },
  {
    name: "Енира",
    emoji: "🌸",
    role: "Хранительница парка",
    ritual: "Подкармливает птиц в любую погоду",
    color: "#9B4A6A",
  },
  {
    name: "Еновей",
    emoji: "🚂",
    role: "Хранитель вокзала",
    ritual: "Провожает гостей и встречает возвращающихся домой",
    color: "#4A5A8A",
  },
  {
    name: "Еносик",
    emoji: "⭐",
    role: "Хранитель ночного неба",
    ritual: "Считает звёзды над Туапсе каждую ночь",
    color: "#6A3A8A",
  },
  {
    name: "Еноша",
    emoji: "🎭",
    role: "Хранитель историй",
    ritual: "Рассказывает легенды города детям",
    color: "#8A5A3A",
  },
  {
    name: "Тыдочка",
    emoji: "🍊",
    role: "Хранительница рынка",
    ritual: "Приносит удачу торговцам на местном базаре",
    color: "#CD6A2E",
  },
];

const rewards = [
  { amount: "500 ₽", title: "Имя в летописи", desc: "Ваше имя попадёт на страницу благодарностей проекта" },
  { amount: "1 500 ₽", title: "Мини-фигурка", desc: "Один сувенирный еноток 5–7 см — на выбор один из восьми" },
  { amount: "5 000 ₽", title: "Вся семья", desc: "Комплект всех 8 Туапсенотов + открытка с автографом автора" },
  { amount: "15 000 ₽", title: "Меценат", desc: "Полный комплект + имя на бронзовой табличке у одной из скульптур" },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        heroRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EC", fontFamily: "'Golos Text', sans-serif" }}>

      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3"
        style={{
          background: "rgba(250, 245, 236, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(205, 127, 50, 0.2)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦝</span>
          <span
            className="font-bold tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#8B5A1A", fontSize: "1.3rem" }}
          >
            Туапсеноты
          </span>
        </div>
        <a
          href={PLANETA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-sm transition-all hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #CD7F32, #E8A85A)", color: "#FAF5EC" }}
        >
          Поддержать
          <Icon name="Heart" size={15} />
        </a>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ paddingTop: "72px" }}>
        <div ref={heroRef} className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/898bd4ed-32e3-4e08-862f-895318af938b/files/ca622195-986a-48eb-a4cf-167118d9c46e.jpg"
            alt="Закат над Туапсе с силуэтом енота"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(42,26,10,0.1) 0%, rgba(42,26,10,0.2) 50%, rgba(42,26,10,0.75) 100%)",
            }}
          />
        </div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              background: i % 2 === 0 ? "#E8A85A" : "#4AACAC",
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animation: `float ${3 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        <div className="relative z-10 px-5 pb-16 max-w-2xl mx-auto w-full text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-sm font-medium"
            style={{
              background: "rgba(205, 127, 50, 0.25)",
              border: "1px solid rgba(205, 127, 50, 0.5)",
              color: "#F5DEB3",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#E8A85A] inline-block animate-pulse" />
            Краудфандинг на Planeta.ru
          </div>
          <h1
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 8vw, 4rem)",
              color: "#FAF5EC",
              textShadow: "0 2px 20px rgba(42,26,10,0.5)",
            }}
          >
            Туапсеноты — новая душа{" "}
            <em style={{ color: "#E8A85A", fontStyle: "italic" }}>Черноморского побережья</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "rgba(245, 222, 179, 0.9)", textShadow: "0 1px 10px rgba(42,26,10,0.5)" }}
          >
            8 бронзовых хранителей Туапсе ждут своего места на набережной, в парке и у вокзала.
            Помогите им появиться — и стать символом города.
          </p>
          <a
            href={PLANETA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold transition-all hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #CD7F32 0%, #E8A85A 100%)",
              color: "#FAF5EC",
              boxShadow: "0 8px 32px rgba(205, 127, 50, 0.4)",
            }}
          >
            <Icon name="Heart" size={20} />
            Поддержать проект
          </a>
          <p className="mt-4 text-sm" style={{ color: "rgba(245, 222, 179, 0.6)" }}>
            Сбор на Planeta.ru · Сарбаев Эдуард
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
          <span className="text-xs text-[#F5DEB3]">листайте вниз</span>
          <div className="w-5 h-8 rounded-full border-2 border-[#F5DEB3] flex items-start justify-center pt-1">
            <div
              className="w-1 h-2 rounded-full bg-[#F5DEB3]"
              style={{ animation: "float 1.5s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* WHO ARE TUAPSENOTY */}
      <section className="py-20 px-5" style={{ background: "#FAF5EC" }}>
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#CD7F32" }}
            >
              О проекте
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "#2A1A0A",
              }}
            >
              Кто такие Туапсеноты?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="reveal-left rounded-2xl p-7"
              style={{
                background: "rgba(205, 127, 50, 0.07)",
                border: "1.5px solid rgba(205, 127, 50, 0.2)",
              }}
            >
              <div className="text-3xl mb-4">🤔</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#8B5A1A" }}
              >
                Проблема
              </h3>
              <p className="leading-relaxed" style={{ color: "#4A3520" }}>
                Туапсе — важный транзитный город Черноморского побережья. Через него проезжают миллионы
                туристов, но почти никто не останавливается. У города нет яркого символа, нет
                «лица», которое хотелось бы запомнить и сфотографировать.
              </p>
            </div>

            <div
              className="reveal-right rounded-2xl p-7"
              style={{
                background: "rgba(46, 139, 139, 0.07)",
                border: "1.5px solid rgba(46, 139, 139, 0.2)",
              }}
            >
              <div className="text-3xl mb-4">✨</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2E8B8B" }}
              >
                Решение
              </h3>
              <p className="leading-relaxed" style={{ color: "#4A3520" }}>
                Семья из 8 бронзовых енотов-хранителей. Каждый займёт своё место в городе:
                набережная, парк, пляж, вокзал. Они станут душой Туапсе — добрыми, уютными
                символами, к которым захочется вернуться.
              </p>
            </div>
          </div>

          <div
            className="reveal mt-8 rounded-2xl p-7 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(205,127,50,0.1), rgba(46,139,139,0.1))",
              border: "1.5px solid rgba(205,127,50,0.25)",
            }}
          >
            <p
              className="text-xl font-medium italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#5A3A10" }}
            >
              «Енот — символ мудрости, хитрости и уюта. Он не чужой на побережье — он здесь давно,
              просто его ещё не отлили в бронзе.»
            </p>
            <p className="mt-3 text-sm font-semibold" style={{ color: "#CD7F32" }}>
              — Эдуард Сарбаев, автор проекта
            </p>
          </div>
        </div>
      </section>

      {/* CHARACTERS GALLERY */}
      <section className="py-20 px-5" style={{ background: "#F5EDD8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-14">
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#CD7F32" }}
            >
              Семья хранителей
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "#2A1A0A",
              }}
            >
              Познакомьтесь с каждым
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#6A5A40" }}>
              Каждый еноток имеет своё имя, роль и ритуал. Каждый — часть большой истории Туапсе.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {raccoons.map((r, i) => (
              <div
                key={r.name}
                className="raccoon-card reveal rounded-2xl p-5 cursor-pointer"
                style={{
                  background: "#FFFBF3",
                  border: `1.5px solid ${r.color}30`,
                  boxShadow: "0 4px 16px rgba(42,26,10,0.07)",
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center text-3xl mb-3 mx-auto"
                  style={{ background: `${r.color}15` }}
                >
                  {"photo" in r && r.photo ? (
                    <img src={r.photo as string} alt={r.name} className="w-full h-full object-cover" />
                  ) : (
                    r.emoji
                  )}
                </div>
                <h3
                  className="text-center font-bold mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: r.color, fontSize: "1.15rem" }}
                >
                  {r.name}
                </h3>
                <p className="text-center text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "#9A8060" }}>
                  {r.role}
                </p>
                <p className="text-center text-xs leading-relaxed" style={{ color: "#6A5A40" }}>
                  {r.ritual}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 text-center">
            <img
              src="https://cdn.poehali.dev/projects/898bd4ed-32e3-4e08-862f-895318af938b/files/42adde3f-3a3f-4e1e-9229-b761ee78f9f0.jpg"
              alt="Семья Туапсенотов"
              className="rounded-3xl mx-auto shadow-2xl max-w-lg w-full"
              style={{ border: "3px solid rgba(205, 127, 50, 0.3)" }}
            />
            <p className="mt-4 text-sm italic" style={{ color: "#9A8060" }}>
              Все 8 хранителей — вместе
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO HELP */}
      <section className="py-20 px-5" style={{ background: "#FAF5EC" }}>
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-14">
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#2E8B8B" }}
            >
              Участие
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "#2A1A0A",
              }}
            >
              Как помочь
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "#6A5A40" }}>
              Собранные средства пойдут на производство сувенирных мини-фигурок 5–7 см.
              Каждый сможет увезти кусочек Туапсе домой.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {rewards.map((rw, i) => (
              <div
                key={rw.title}
                className="reveal rounded-2xl p-6"
                style={{
                  background: i === 2 ? "linear-gradient(135deg, rgba(205,127,50,0.12), rgba(232,168,90,0.12))" : "#FFFBF3",
                  border: i === 2 ? "2px solid rgba(205,127,50,0.4)" : "1.5px solid rgba(205,127,50,0.15)",
                  boxShadow: i === 2 ? "0 8px 24px rgba(205,127,50,0.15)" : "0 4px 12px rgba(42,26,10,0.05)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {i === 2 && (
                  <div
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wider uppercase"
                    style={{ background: "linear-gradient(135deg, #CD7F32, #E8A85A)", color: "#FAF5EC" }}
                  >
                    Популярный выбор
                  </div>
                )}
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#CD7F32" }}
                >
                  {rw.amount}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#2A1A0A" }}>
                  {rw.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6A5A40" }}>
                  {rw.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal text-center">
            <a
              href={PLANETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-glow inline-flex items-center gap-3 rounded-full px-10 py-5 text-xl font-bold transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #CD7F32 0%, #E8A85A 100%)",
                color: "#FAF5EC",
                boxShadow: "0 8px 32px rgba(205, 127, 50, 0.4)",
              }}
            >
              <Icon name="ExternalLink" size={22} />
              Перейти на Planeta.ru
            </a>
            <p className="mt-4 text-sm" style={{ color: "#9A8060" }}>
              Безопасный платёж через проверенную платформу
            </p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 px-5" style={{ background: "#F0E8D0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="reveal text-center mb-10">
            <span
              className="text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: "#CD7F32" }}
            >
              Новости
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: "#2A1A0A",
              }}
            >
              Уже в работе
            </h2>
          </div>

          <div
            className="reveal rounded-2xl overflow-hidden"
            style={{
              background: "#FFFBF3",
              border: "1.5px solid rgba(205, 127, 50, 0.25)",
              boxShadow: "0 8px 32px rgba(42,26,10,0.08)",
            }}
          >
            <div
              className="px-6 py-3 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, #CD7F32, #8B5A1A)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5DEB3] animate-pulse" />
              <span className="text-sm font-semibold tracking-wide text-[#FAF5EC] uppercase">Горячая новость</span>
              <span className="ml-auto text-xs text-[#F5DEB3] opacity-80">Май 2025</span>
            </div>
            <div className="p-7">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    src="https://cdn.poehali.dev/projects/898bd4ed-32e3-4e08-862f-895318af938b/bucket/ff4e51b2-f6e2-43a9-a04a-ca9e02a20012.jpg"
                    alt="Енотыч — бронзовая скульптура"
                    className="raccoon-card rounded-2xl shadow-xl"
                    style={{
                      width: "180px",
                      height: "200px",
                      objectFit: "cover",
                      border: "3px solid rgba(205,127,50,0.35)",
                    }}
                  />
                  <p className="text-center text-xs mt-2 italic font-medium" style={{ color: "#CD7F32" }}>Енотыч готов!</p>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "#5A3A10" }}
                  >
                    Енотыч отлит в бронзе!
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#4A3520" }}>
                    Первый из восьми хранителей — Енотыч — уже прошёл отливку и сейчас проходит
                    стадию патинирования. Бронза приобретает свой неповторимый тёплый цвет.
                    Совсем скоро он встанет на набережной Туапсе.
                  </p>
                  <p className="mt-3 leading-relaxed text-sm" style={{ color: "#6A5040" }}>
                    Смотрите: морской капитан с удочкой и ведёрком — настоящий хозяин причала.
                    Именно таким и должен быть хранитель набережной.
                  </p>
                  <div
                    className="inline-flex items-center gap-2 mt-4 rounded-full px-4 py-1.5 text-sm font-semibold"
                    style={{ background: "rgba(46, 139, 139, 0.12)", color: "#2E8B8B", border: "1px solid rgba(46,139,139,0.3)" }}
                  >
                    <Icon name="CheckCircle" size={16} />
                    Патинирование в процессе
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-5"
        style={{
          background: "linear-gradient(135deg, #2A1A0A 0%, #1A0A00 100%)",
          color: "#F5DEB3",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <span className="text-3xl">🦝</span>
                <span
                  className="font-bold text-2xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#E8A85A" }}
                >
                  Туапсеноты
                </span>
              </div>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(245,222,179,0.65)" }}>
                Проект по созданию символов Туапсе — 8 бронзовых хранителей Черноморского побережья
              </p>
            </div>

            <div className="text-center md:text-right space-y-2">
              <p className="font-semibold" style={{ color: "#E8A85A" }}>Сарбаев Эдуард</p>
              <a
                href="mailto:sen555551@mail.ru"
                className="flex items-center gap-2 justify-center md:justify-end text-sm hover:text-[#E8A85A] transition-colors"
                style={{ color: "rgba(245,222,179,0.75)" }}
              >
                <Icon name="Mail" size={14} />
                sen555551@mail.ru
              </a>
              <a
                href="tel:+79185051617"
                className="flex items-center gap-2 justify-center md:justify-end text-sm hover:text-[#E8A85A] transition-colors"
                style={{ color: "rgba(245,222,179,0.75)" }}
              >
                <Icon name="Phone" size={14} />
                8-918-505-16-17
              </a>
              <a
                href="https://t.me/tuapsenoty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center md:justify-end text-sm hover:text-[#E8A85A] transition-colors"
                style={{ color: "rgba(245,222,179,0.75)" }}
              >
                <Icon name="Send" size={14} />
                @tuapsenoty в Telegram
              </a>
            </div>
          </div>

          <div
            className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderColor: "rgba(205,127,50,0.2)" }}
          >
            <p className="text-xs" style={{ color: "rgba(245,222,179,0.4)" }}>
              © 2025 Туапсеноты. Все права защищены.
            </p>
            <a
              href={PLANETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #CD7F32, #E8A85A)",
                color: "#FAF5EC",
              }}
            >
              <Icon name="Heart" size={14} />
              Поддержать на Planeta.ru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}