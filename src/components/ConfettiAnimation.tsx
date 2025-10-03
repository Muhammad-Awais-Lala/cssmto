import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  size: number;
}

export default function ConfettiAnimation() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];
    const newPieces: ConfettiPiece[] = [];

    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        size: Math.random() * 8 + 4,
      });
    }

    setPieces(newPieces);

    const timer = setTimeout(() => {
      setPieces([]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            borderRadius: '2px',
          }}
          initial={{
            x: piece.x,
            y: piece.y,
            rotate: piece.rotation,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 360,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
