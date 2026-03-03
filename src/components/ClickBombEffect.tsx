import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bomb {
    id: number;
    x: number;
    y: number;
}

export default function ClickBombEffect() {
    const [bombs, setBombs] = useState<Bomb[]>([]);

    const addBomb = useCallback((e: MouseEvent) => {
        const newBomb = {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY
        };
        setBombs((prev) => [...prev, newBomb]);
        setTimeout(() => {
            setBombs((prev) => prev.filter(b => b.id !== newBomb.id));
        }, 1000);
    }, []);

    useEffect(() => {
        window.addEventListener('click', addBomb);
        return () => window.removeEventListener('click', addBomb);
    }, [addBomb]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <AnimatePresence>
                {bombs.map((bomb) => (
                    <motion.div
                        key={bomb.id}
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            left: bomb.x - 20,
                            top: bomb.y - 20,
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
