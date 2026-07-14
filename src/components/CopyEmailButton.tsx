"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  className?: string;
};

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-ink shadow-clay transition-shadow hover:shadow-clay-hover ${className}`}
      aria-label={copied ? "Email kopiran" : `Kopiraj ${email}`}
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-accent" strokeWidth={2} />
          <span>Kopirano</span>
        </>
      ) : (
        <>
          <Copy className="size-3.5 text-ink-muted" strokeWidth={1.75} />
          <span>{email}</span>
        </>
      )}
    </motion.button>
  );
}
