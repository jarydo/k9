"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { dogProfiles, DogProfile } from "../data";
import DogCard from "./DogCard";
import SwipeButtons from "./SwipeButton";

export default function SwipeStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(
    null
  );
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState<"like" | "pass" | null>(
    null
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const passOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (isProcessing) return;

    const threshold = 100;

    if (info.offset.x > threshold) {
      // Swipe right - like
      setIsProcessing(true);
      setExitDirection("right");
      setAnimationType("like");
      setShowAnimation(true);
      setTimeout(() => nextCard(), 200);
    } else if (info.offset.x < -threshold) {
      // Swipe left - pass
      setIsProcessing(true);
      setExitDirection("left");
      setAnimationType("pass");
      setShowAnimation(true);
      setTimeout(() => nextCard(), 200);
    } else {
      // Reset position if threshold not met
      x.set(0);
    }
  };

  const nextCard = () => {
    setCurrentIndex((prev) => prev + 1);
    setExitDirection(null);
    x.set(0);
    setIsProcessing(false);
  };

  const handleButtonAction = (action: "like" | "pass") => {
    if (isProcessing) return;

    setIsProcessing(true);
    setExitDirection(action === "like" ? "right" : "left");
    setAnimationType(action);
    setShowAnimation(true);
    setTimeout(() => nextCard(), 200);
  };

  // Clean up animation after it finishes
  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
        setAnimationType(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  if (currentIndex >= dogProfiles.length) {
    return (
      <div className="no-more-cards">
        <h2>No more pups! 🐕</h2>
      </div>
    );
  }

  return (
    <div className="swipe-container">
      {/* Animation overlay */}
      {showAnimation && (
        <div className="animation-overlay">
          {animationType === "like" && (
            <>
              {/* Confetti */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti"
                  initial={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 300 + 200, // Originate from right side (bone button)
                    y: -150 - Math.random() * 200,
                    rotate: Math.random() * 360,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: Math.random() * 0.5,
                    ease: "easeOut",
                  }}
                >
                  {["🎉", "✨", "🎊", "💫"][Math.floor(Math.random() * 4)]}
                </motion.div>
              ))}
            </>
          )}

          {animationType === "pass" && (
            <>
              {/* Negative emojis */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="negative-emoji"
                  initial={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 300 - 200, // Originate from left side (poop button)
                    y: -150 - Math.random() * 150,
                    rotate: Math.random() * 360,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: Math.random() * 0.3,
                    ease: "easeOut",
                  }}
                >
                  {
                    ["😢", "👎", "😞", "😔", "😕", "😟", "😰", "😭"][
                      Math.floor(Math.random() * 8)
                    ]
                  }
                </motion.div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Current card */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -200, right: 200 }}
        style={{ x, rotate, opacity }}
        animate={
          exitDirection
            ? {
                x: exitDirection === "right" ? 200 : -200,
                opacity: 0,
              }
            : {}
        }
        onDragEnd={handleDragEnd}
        className="current-card"
      >
        <DogCard profile={dogProfiles[currentIndex]} />

        {/* Swipe indicators */}
        <motion.div className="like-indicator" style={{ opacity: likeOpacity }}>
          ❤️ LIKE
        </motion.div>
        <motion.div className="pass-indicator" style={{ opacity: passOpacity }}>
          ❌ PASS
        </motion.div>
      </motion.div>

      <SwipeButtons onAction={handleButtonAction} disabled={isProcessing} />
    </div>
  );
}
