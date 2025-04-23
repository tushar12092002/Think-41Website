import { motion } from "framer-motion";

const rows = 50;
const cols = 60;

function generateTrapezoidalGrid() {
  const lines = [];

  // Vertical lines
  for (let i = 0; i <= cols; i++) {
    const t = i / cols;
    const xBottom = 100 * t;
    const xTop = 50 + (t - 0.5) * 20; // narrower top for trapezium
    lines.push(
      <line
        key={`v-${i}`}
        x1={`${xBottom}%`}
        y1="100%"
        x2={`${xTop}%`}
        y2="0%"
        stroke="white"
        strokeWidth="2"
      />
    );
  }

  // Horizontal lines
  for (let j = 1; j <= rows; j++) {
    const t = j / rows;
    const y = 100 - t * 100;
    const width = 100 - t * 60; // narrower as you go up
    lines.push(
      <line
        key={`h-${j}`}
        x1={`${50 - width / 2}%`}
        y1={`${y}%`}
        x2={`${50 + width / 2}%`}
        y2={`${y}%`}
        stroke="white"
        strokeWidth="2"
      />
    );
  }

  return lines;
}

export default function TrapezoidGrid() {
  return (
    <div className="w-full h-screen bg-black">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.g
          animate={{ y: ["0%", "-5%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "linear",
          }}
        >
          {generateTrapezoidalGrid()}
        </motion.g>
      </svg>
    </div>
  );
}
