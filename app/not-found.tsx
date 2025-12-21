'use client';

import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex flex-col mb-12 items-center justify-center min-h-[80vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]"
      >
        <Image
          src="/404.svg"
          alt="Cosplayer perdido"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold text-[#22d3ee] mb-4"
      >
        Página não encontrada!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-500 max-w-md mb-8"
      >
        Parece que este cosplay se perdeu no caminho... A página que procuras
        não existe ou foi movida.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link href="/">
          <Button className="cursor-pointer text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300">
            Voltar para o início
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
