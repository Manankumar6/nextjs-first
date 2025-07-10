'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/moving-border'


export default function FeaturedProjectCard() {
    const [show, setShow] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1200)
        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => setShow(false)
    const handleClick = () => {
        router.push('/services/food-cafe')
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="fixed inset-0 z-40 bg-black pointer-events-none"
                />
            )}

            {show && (
                <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{
                        rotateY: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                            ease: 'easeOut',
                        },
                    }}
                    exit={{
                        rotateY: 90,
                        opacity: 0,
                        transition: {
                            duration: 0.5,
                            ease: 'easeIn',
                        },
                    }}
                    className="fixed z-[10000] max-w-sm w-[90%] md:w-[360px] bg-slate-800 rounded-3xl p-5 shadow-2xl border border-slate-700 text-white flex flex-col justify-between perspective-1000"
                    style={{
                        bottom: '2rem',
                        left: '5%',
                        transform: 'translateX(-50%)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* Responsive position (override on desktop) */}
                    <style jsx>{`
            @media (min-width: 768px) {
              div[class*='z-50'] {
                left: 2rem !important;
                transform: none !important;
                bottom: 50%;
                transform: translateY(50%);
              }
            }
          `}</style>

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                    >
                        <X size={18} />
                    </button>

                    {/* Card Content */}
                    <div onClick={handleClick} className="cursor-pointer pt-4">
                        <img
                            src="/image/foodcafe.png"
                            alt="Cool Caffé"
                            className="rounded-xl w-full mb-4 border border-white/10"
                        />
                        <h3 className="text-xl font-bold mb-2">🔥 Latest Project: Food Café</h3>
                        <p className="text-sm text-gray-300 mb-4 leading-snug">
                            Step into the future of food ordering! From live menu updates to seamless cart & admin controls —
                            Food Café delivers a complete, real-time experience crafted with tech precision.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="/about#food-cafe"
                               
                            >
                                <Button
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    Tap to view
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
