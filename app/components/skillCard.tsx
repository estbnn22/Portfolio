"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SkillCard({
  name,
  logo,
  level,
}: {
  name: string;
  logo: string;
  level: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-center shadow-sm transition hover:border-yellow-400"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full  ">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={75}
          height={75}
          className="object-contain"
        />
      </div>

      <h3 className="text-sm font-semibold text-slate-100">{name}</h3>

      <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-yellow-300">
        {level}
      </span>
    </motion.div>
  );
}
