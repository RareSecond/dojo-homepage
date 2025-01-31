"use client";

import { Wave } from "./Wave";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { SingleGame } from "./SingleGame";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Text } from "@/components/Text";

const allGames = [
  {
    name: "Eykar",
    image: "/images/games/game1.png",
  },
  {
    name: "Eykar",
    image: "/images/games/game2.png",
  },
  {
    name: "Eykar",
    image: "/images/games/game3.png",
  },
  {
    name: "Eykar",
    image: "/images/games/game4.png",
  },
  {
    name: "Eykar",
    image: "/images/games/game5.png",
  },
  {
    name: "Eykar",
    image: "/images/games/game6.png",
  },
  {
    name: "Eykar",
    image: "/images/games/game7.png",
  },
  {
    name: "Eykar",
    image: "/images/games/game8.png",
  },
];

export default function Games() {
  const wrapper = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start center", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const gamesTranslate = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <Container>
      <Wave />
      <div className="relative h-screen pb-32 pt-[25vh]" ref={wrapper}>
        <div className="sticky top-[50%] flex translate-y-[-50%] items-center gap-[28]">
          <motion.div style={{ opacity: textOpacity }} className="basis-[30%]">
            <div className="mb-7">
              <Badge
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    fill="none"
                  >
                    <path
                      fill="#03152E"
                      d="M16.145 7.526a3.468 3.468 0 0 1-2.475 3.323v3.112h-1.98V10.85a3.466 3.466 0 1 1 4.455-3.323Zm-4.207-.495a.74.74 0 0 0 .742-.742.74.74 0 0 0-.742-.743.74.74 0 0 0-.743.743.74.74 0 0 0 .742.742Zm-4.208 7.92a.989.989 0 1 1 1.98 0h7.92c1.092 0 1.98.888 1.98 1.98v.99c0 1.092-.888 1.98-1.98 1.98h-9.9a1.982 1.982 0 0 1-1.98-1.98v-.99c0-1.092.888-1.98 1.98-1.98Z"
                    />
                  </svg>
                }
                text="On Dojo"
                color="badge-yellow"
              />
            </div>
            <Text textStyle="headline2">Press start</Text>
            <Text textStyle="bodyText">
              Here is a medium length paragraph about our games. We can discuss
              how they’re created or other relevant details in this section.
            </Text>
          </motion.div>
          <motion.div
            style={{
              x: "-50%",
              left: gamesTranslate,
            }}
            className="absolute grid grid-cols-[repeat(4,294px)] gap-5"
          >
            {allGames.map((game, i) => (
              <SingleGame key={i} game={game} />
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
