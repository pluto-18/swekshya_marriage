import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, CalendarDays, MapPin, Sparkles, Flower2, Flame, Gem, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    title: "Siddhyant",
    date: "2 July",
    place: "Janakpur",
    icon: Gem,
    note: "A sacred beginning, blessed by tradition and family.",
  },
  {
    title: "Mehndi",
    date: "10 July",
    place: "Janakpur",
    icon: Flower2,
    note: "An evening of colors, laughter, music, and joyful hands.",
  },
  {
    title: "Haldi",
    date: "11 July",
    place: "Janakpur",
    icon: Sparkles,
    note: "Golden blessings, warm smiles, and playful celebrations.",
  },
  {
    title: "Wedding Night",
    date: "12 July",
    place: "Janakpur",
    icon: Flame,
    note: "Two hearts, one promise, under a sky full of blessings.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

const softReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

function FloatingPetal({ className, delay = 0, duration = 8 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[1px] ${className}`}
      animate={{ y: [-12, 18, -12], x: [-6, 10, -6], rotate: [0, 12, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function MithilaPattern() {
  const dots = useMemo(() => Array.from({ length: 48 }), []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full border border-[#d6a84f]/30 bg-[radial-gradient(circle_at_center,rgba(255,214,232,.55),transparent_65%)]" />
      <div className="absolute -right-28 bottom-24 h-80 w-80 rounded-full border border-[#d6a84f]/30 bg-[radial-gradient(circle_at_center,rgba(220,202,255,.45),transparent_64%)]" />
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#c7943e]/40"
          style={{
            left: `${(i * 19) % 100}%`,
            top: `${(i * 31) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#b9853f]">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-[#5b2f39] md:text-5xl">{title}</h2>
      {children && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#77545c] md:text-lg">{children}</p>}
    </motion.div>
  );
}

export default function WeddingInvitation() {
  const scrollToInvite = () => {
    document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f2] text-[#5b2f39]">
      <style>{`
        html { scroll-behavior: smooth; }
        .serif { font-family: Georgia, 'Times New Roman', serif; }
        .mithila-border {
          background-image: linear-gradient(90deg, rgba(207,151,65,.0), rgba(207,151,65,.85), rgba(207,151,65,.0));
        }
      `}</style>

      <section className="relative flex min-h-screen items-center justify-center px-5 py-20">
        <MithilaPattern />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,225,218,.88),rgba(255,248,242,.74)_42%,rgba(236,224,255,.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.9),transparent_35%)]" />

        <FloatingPetal className="left-[8%] top-[18%] h-16 w-10 bg-[#f7b7c8]/60" delay={0.4} />
        <FloatingPetal className="right-[10%] top-[22%] h-20 w-12 bg-[#f8d7a9]/60" delay={1.1} duration={9} />
        <FloatingPetal className="bottom-[18%] left-[15%] h-14 w-9 bg-[#d9c6ff]/55" delay={1.8} duration={10} />
        <FloatingPetal className="bottom-[24%] right-[18%] h-12 w-8 bg-[#ffd5dd]/60" delay={0.8} duration={7.5} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#d7ad5f]/40 bg-white/45 shadow-2xl shadow-pink-200/40 backdrop-blur-md"
          >
            <div className="text-center">
              <div className="text-3xl">ॐ</div>
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#9a7138]">Shree Ganesh</p>
            </div>
          </motion.div>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#ad7c3a]">With blessings & love</p>
          <h1 className="serif mx-auto max-w-4xl text-6xl leading-tight text-[#5a2733] drop-shadow-sm md:text-8xl lg:text-9xl">
            Swekshya<span className="mx-3 inline-block text-4xl text-[#c44f73] md:text-6xl">❤️</span>Sumit
          </h1>
          <div className="mithila-border mx-auto my-7 h-px w-72" />
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#724955] md:text-2xl">
            Two hearts, two families, and a lifetime of love begin with your blessings.
          </p>

          <Button
            onClick={scrollToInvite}
            className="mt-10 rounded-full bg-[#b9853f] px-8 py-6 text-base font-semibold text-white shadow-xl shadow-[#d7ad5f]/30 transition hover:-translate-y-1 hover:bg-[#9f7133] hover:shadow-2xl"
          >
            Celebrate With Us
            <Heart className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </motion.div>
      </section>

      <section id="invitation" className="relative px-5 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,205,217,.42),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(221,206,255,.35),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle eyebrow="Our Invitation" title="A Celebration Written in Love">
            In the sacred city of Janakpurdham, where stories of devotion and togetherness live forever, we invite you to join us as Swekshya and Sumit step into a new journey. Your presence will make every ritual warmer, every smile brighter, and every blessing more meaningful.
          </SectionTitle>

          <motion.div
            variants={softReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl rounded-[2rem] border border-white/70 bg-white/45 p-8 text-center shadow-2xl shadow-pink-100/70 backdrop-blur-md md:p-12"
          >
            <Flower2 className="mx-auto mb-5 h-8 w-8 text-[#bd8a43]" />
            <p className="serif text-2xl leading-10 text-[#5b2f39] md:text-3xl">
              “Come with your love, your laughter, and your blessings — let us celebrate a beautiful beginning together.”
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 py-24 md:py-32">
        <div className="absolute inset-0 bg-[#fff3ed]" />
        <div className="relative mx-auto max-w-6xl">
          <SectionTitle eyebrow="Wedding Functions" title="Moments We Will Cherish">
            Each ceremony carries its own joy — from sacred promises to golden laughter, from floral colors to a night of forever.
          </SectionTitle>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden rounded-[2rem] border-[#f2d8cb] bg-white/70 shadow-xl shadow-[#f3c3ce]/30 backdrop-blur-sm transition group-hover:shadow-2xl group-hover:shadow-[#d7ad5f]/30">
                    <CardContent className="relative flex h-full flex-col p-7">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ffd7df]/50 blur-2xl transition group-hover:bg-[#f6d18f]/50" />
                      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#b9853f] shadow-lg shadow-pink-100">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="serif text-3xl text-[#5a2733]">{event.title}</h3>
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#a77537]">
                        <CalendarDays className="h-4 w-4" /> {event.date}
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm text-[#77545c]">
                        <MapPin className="h-4 w-4" /> {event.place}
                      </div>
                      <p className="mt-6 leading-7 text-[#77545c]">{event.note}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden px-5 py-24 md:py-32">
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(76,35,45,.85),rgba(167,113,65,.58)),url('https://images.unsplash.com/photo-1605106715994-18d3fecffb98?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,234,211,.24),transparent_45%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center text-white">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#ffe3ad]"
          >
            Venue
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="serif text-5xl md:text-7xl"
          >
            Janakpurdham
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl"
          >
            A city of devotion, culture, and timeless love — the perfect place to begin a forever story.
          </motion.p>

          <motion.div
            variants={softReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-12 w-full max-w-2xl rounded-[2rem] border border-white/30 bg-white/15 p-6 shadow-2xl backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-between gap-5 rounded-[1.5rem] bg-white/15 p-6 md:flex-row">
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ffe3ad]">Location</p>
                <p className="mt-2 text-2xl font-semibold">Janakpur, Nepal</p>
              </div>
              <Button className="rounded-full bg-white px-7 py-5 text-[#7b4931] hover:bg-[#fff1e0]">
                Map Placeholder
                <MapPin className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 py-24 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8f2,#ffeef3)]" />
        <FloatingPetal className="left-[7%] top-[20%] h-16 w-10 bg-[#ffd2de]/60" delay={0.1} />
        <FloatingPetal className="right-[9%] bottom-[22%] h-16 w-10 bg-[#e0ccff]/60" delay={1.2} />

        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto max-w-4xl rounded-[2.5rem] border border-[#efd5c7] bg-white/55 px-7 py-14 text-center shadow-2xl shadow-pink-100/70 backdrop-blur-md md:px-14 md:py-20"
        >
          <div className="absolute inset-x-10 top-5 h-px bg-gradient-to-r from-transparent via-[#d7ad5f] to-transparent" />
          <PartyPopper className="mx-auto mb-7 h-10 w-10 text-[#b9853f]" />
          <h2 className="serif text-4xl leading-tight md:text-6xl">Your Presence Is Our Blessing</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#77545c]">
            With grateful hearts and endless excitement, our families invite you to be part of these precious days. Come celebrate love, tradition, and the beautiful union of Swekshya and Sumit.
          </p>
          <Button className="mt-10 rounded-full bg-[#5b2f39] px-8 py-6 text-base font-semibold text-white shadow-xl shadow-[#5b2f39]/20 hover:-translate-y-1 hover:bg-[#47242d]">
            Join Us in Celebration
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
          <div className="absolute inset-x-10 bottom-5 h-px bg-gradient-to-r from-transparent via-[#d7ad5f] to-transparent" />
        </motion.div>
      </section>
    </main>
  );
}
