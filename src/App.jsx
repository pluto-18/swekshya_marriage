import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  CalendarDays,
  MapPin,
  Sparkles,
  Flower2,
  Flame,
  Gem,
  PartyPopper,
} from "lucide-react";

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

function Button({ children, onClick, dark = false }) {
  return (
    <button onClick={onClick} className={dark ? "btn btn-dark" : "btn"}>
      {children}
    </button>
  );
}

function FloatingPetal({ className = "", delay = 0, duration = 8 }) {
  return (
    <motion.div
      className={`petal ${className}`}
      animate={{ y: [-12, 18, -12], x: [-6, 10, -6], rotate: [0, 12, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function MithilaPattern() {
  return (
    <div className="mithila-pattern">
      {Array.from({ length: 52 }).map((_, i) => (
        <span
          key={i}
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
      className="section-title"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-subtitle">{children}</p>}
    </motion.div>
  );
}

export default function App() {
  const scrollToInvite = () => {
    document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero">
        <MithilaPattern />
        <div className="hero-gradient" />
        <FloatingPetal className="p1" delay={0.4} />
        <FloatingPetal className="p2" delay={1.1} duration={9} />
        <FloatingPetal className="p3" delay={1.8} duration={10} />
        <FloatingPetal className="p4" delay={0.8} duration={7.5} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="ganesh"
          >
            <div className="om">ॐ</div>
            <p>Shree Ganesh</p>
          </motion.div>

          <p className="hero-kicker">With blessings & love</p>
          <h1>
            Swekshya<span>❤️</span>Sumit
          </h1>
          <div className="gold-line" />
          <p className="hero-text">
            Two hearts, two families, and a lifetime of love begin with your blessings.
          </p>

          <Button onClick={scrollToInvite}>
            Celebrate With Us <Heart size={17} fill="white" />
          </Button>
        </motion.div>
      </section>

      <section id="invitation" className="invite-section">
        <SectionTitle eyebrow="Our Invitation" title="A Celebration Written in Love">
          In the sacred city of Janakpurdham, where stories of devotion and togetherness live
          forever, we invite you to join us as Swekshya and Sumit step into a new journey.
          Your presence will make every ritual warmer, every smile brighter, and every blessing
          more meaningful.
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="quote-card"
        >
          <Flower2 size={34} />
          <p>
            “Come with your love, your laughter, and your blessings — let us celebrate a
            beautiful beginning together.”
          </p>
        </motion.div>
      </section>

      <section className="events-section">
        <SectionTitle eyebrow="Wedding Functions" title="Moments We Will Cherish">
          Each ceremony carries its own joy — from sacred promises to golden laughter,
          from floral colors to a night of forever.
        </SectionTitle>

        <div className="events-grid">
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
                className="event-card"
              >
                <div className="event-icon">
                  <Icon size={30} />
                </div>
                <h3>{event.title}</h3>
                <div className="event-info">
                  <CalendarDays size={16} /> {event.date}
                </div>
                <div className="event-place">
                  <MapPin size={16} /> {event.place}
                </div>
                <p>{event.note}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="venue-section">
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="venue-bg"
        />
        <div className="venue-overlay" />
        <div className="venue-content">
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="venue-kicker">
            Venue
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Janakpurdham
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            A city of devotion, culture, and timeless love — the perfect place to begin a forever story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="map-card"
          >
            <div>
              <p>Location</p>
              <h3>Janakpur, Nepal</h3>
            </div>
            <a className="map-btn" href="https://www.google.com/maps/search/Janakpurdham" target="_blank" rel="noreferrer">
              Open Map <MapPin size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="closing-section">
        <FloatingPetal className="p5" delay={0.1} />
        <FloatingPetal className="p6" delay={1.2} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="closing-card"
        >
          <PartyPopper size={42} />
          <h2>Your Presence Is Our Blessing</h2>
          <p>
            With grateful hearts and endless excitement, our families invite you to be part
            of these precious days. Come celebrate love, tradition, and the beautiful union
            of Swekshya and Sumit.
          </p>
          <Button dark>
            Join Us in Celebration <Sparkles size={16} />
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
