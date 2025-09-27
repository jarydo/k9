Dog Tinder Demo - 2-Hour Speed Coding Plan
Senior Developer Mentoring Guide for Mobile Web Interface

Time Allocation
Setup & Data: 30 minutes
Core Swipe Logic: 60 minutes
UI Polish: 30 minutes
Step 1: Project Setup (10 minutes)
bash
# Create React app with TypeScript
npx create-react-app dog-tinder-demo --template typescript
cd dog-tinder-demo

# Install dependencies
npm install framer-motion lucide-react

# Start dev server
npm start
What you're doing: Setting up a clean React environment with animation library and icons.

Step 2: Create Mock Data (20 minutes)
Create src/data.ts:

typescript
export interface DogProfile {
  id: number;
  name: string;
  age: number;
  breed: string;
  image: string;
  bio: string;
  distance: number;
}

export const dogProfiles: DogProfile[] = [
  {
    id: 1,
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    image: "https://picsum.photos/400/600?random=1",
    bio: "Love long walks and tennis balls!",
    distance: 2
  },
  // Add 9 more profiles with different random numbers
];
Junior Dev Tip: Use picsum.photos for placeholder images. Change the random number for each profile to get different images.

Step 3: Mobile Container Setup (10 minutes)
Update src/App.tsx:

tsx
import './App.css';
import SwipeStack from './components/SwipeStack';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🐕 PupMatch</h1>
      </header>
      <SwipeStack />
    </div>
  );
}

export default App;
Update src/App.css:

css
.app-container {
  max-width: 414px; /* iPhone Pro Max width */
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(135deg, #ff6b6b, #ffa726);
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5rem;
}
What you're doing: Creating a mobile-first container that looks like a phone app.

Step 4: Basic Card Component (20 minutes)
Create src/components/DogCard.tsx:

tsx
import { DogProfile } from '../data';

interface Props {
  profile: DogProfile;
  style?: React.CSSProperties;
}

export default function DogCard({ profile, style }: Props) {
  return (
    <div className="dog-card" style={style}>
      <img src={profile.image} alt={profile.name} />
      <div className="card-info">
        <h2>{profile.name}, {profile.age}</h2>
        <p className="breed">{profile.breed}</p>
        <p className="bio">{profile.bio}</p>
        <p className="distance">{profile.distance} km away</p>
      </div>
    </div>
  );
}
Add to src/App.css:

css
.dog-card {
  width: 350px;
  height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  position: absolute;
  overflow: hidden;
  cursor: grab;
}

.dog-card img {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.card-info {
  padding: 20px;
}

.card-info h2 {
  margin: 0 0 8px 0;
  font-size: 1.5rem;
}

.breed {
  color: #666;
  margin: 0 0 8px 0;
}

.bio {
  margin: 8px 0;
  color: #333;
}

.distance {
  color: #999;
  font-size: 0.9rem;
}
Junior Dev Note: Start with static styling first. We'll add animations next.

Step 5: Swipe Stack Container (30 minutes)
Create src/components/SwipeStack.tsx:

tsx
import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { dogProfiles, DogProfile } from '../data';
import DogCard from './DogCard';
import SwipeButtons from './SwipeButtons';

export default function SwipeStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      // Swipe right - like
      setExitDirection('right');
      setTimeout(() => nextCard(), 200);
    } else if (info.offset.x < -threshold) {
      // Swipe left - pass
      setExitDirection('left');
      setTimeout(() => nextCard(), 200);
    }
  };

  const nextCard = () => {
    setCurrentIndex(prev => prev + 1);
    setExitDirection(null);
    x.set(0);
  };

  const handleButtonAction = (action: 'like' | 'pass') => {
    setExitDirection(action === 'like' ? 'right' : 'left');
    setTimeout(() => nextCard(), 200);
  };

  if (currentIndex >= dogProfiles.length) {
    return (
      <div className="no-more-cards">
        <h2>No more pups! 🐕</h2>
        <button onClick={() => setCurrentIndex(0)}>
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="swipe-container">
      {/* Background cards */}
      {dogProfiles.slice(currentIndex + 1, currentIndex + 3).map((profile, index) => (
        <DogCard
          key={profile.id}
          profile={profile}
          style={{
            zIndex: -index,
            scale: 1 - index * 0.05,
            y: index * 10,
          }}
        />
      ))}
      
      {/* Current card */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x, rotate, opacity }}
        animate={exitDirection ? {
          x: exitDirection === 'right' ? 200 : -200,
          opacity: 0
        } : {}}
        onDragEnd={handleDragEnd}
        className="current-card"
      >
        <DogCard profile={dogProfiles[currentIndex]} />
        
        {/* Swipe indicators */}
        <motion.div
          className="like-indicator"
          style={{ opacity: useTransform(x, [0, 100], [0, 1]) }}
        >
          ❤️ LIKE
        </motion.div>
        <motion.div
          className="pass-indicator"
          style={{ opacity: useTransform(x, [-100, 0], [1, 0]) }}
        >
          ❌ PASS
        </motion.div>
      </motion.div>
      
      <SwipeButtons onAction={handleButtonAction} />
    </div>
  );
}
What's happening: Using framer-motion for smooth drag animations with physics-based interactions.

Step 6: Swipe Buttons (15 minutes)
Create src/components/SwipeButtons.tsx:

tsx
import { X, Heart } from 'lucide-react';

interface Props {
  onAction: (action: 'like' | 'pass') => void;
}

export default function SwipeButtons({ onAction }: Props) {
  return (
    <div className="swipe-buttons">
      <button 
        className="pass-btn"
        onClick={() => onAction('pass')}
      >
        <X size={24} />
      </button>
      <button 
        className="like-btn"
        onClick={() => onAction('like')}
      >
        <Heart size={24} />
      </button>
    </div>
  );
}
Step 7: Final Styling (15 minutes)
Add to src/App.css:

css
.swipe-container {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.current-card {
  position: relative;
}

.like-indicator, .pass-indicator {
  position: absolute;
  top: 100px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 8px;
  border: 3px solid;
}

.like-indicator {
  right: 20px;
  color: #4CAF50;
  border-color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

.pass-indicator {
  left: 20px;
  color: #f44336;
  border-color: #f44336;
  background: rgba(244, 67, 54, 0.1);
}

.swipe-buttons {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;
}

.pass-btn, .like-btn {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s;
}

.pass-btn {
  background: white;
  color: #f44336;
  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);
}

.like-btn {
  background: white;
  color: #4CAF50;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.pass-btn:hover, .like-btn:hover {
  transform: scale(1.1);
}

.no-more-cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 20px;
}

.no-more-cards button {
  padding: 12px 24px;
  background: white;
  border: none;
  border-radius: 24px;
  font-size: 1rem;
  cursor: pointer;
}

/* Mobile responsiveness */
@media (max-width: 480px) {
  .app-container {
    max-width: 100%;
  }
  
  .dog-card {
    width: calc(100vw - 40px);
    max-width: 350px;
  }
}
Step 8: Add More Dog Data (10 minutes)
Go back to src/data.ts and add 9 more profiles:

typescript
// Copy the first profile and change:
// - id (2, 3, 4...)
// - name (different dog names)
// - age (1-8)
// - breed (different breeds)
// - image (random=2, random=3, etc.)
// - bio (different personalities)
// - distance (1-10 km)
Quick tip: Use ChatGPT to generate the remaining 9 profiles if you want to save time.

Final Checklist (5 minutes)
 Cards swipe left/right smoothly
 Visual indicators show during swipe
 Buttons work for like/pass
 Stack shows background cards
 "No more cards" state works
 Mobile-responsive design
 Looks good on phone-sized screen
Pro Tips for Speed Coding:
Don't perfect the data - Use simple, repeated patterns
Copy-paste CSS - Focus on functionality first
Use dev tools - Test swipe sensitivity quickly
Skip error handling - This is a demo, not production
Hardcode values - No need for configuration files
If You Have Extra Time:
Add match celebration animation
Smooth card shuffle animation
Sound effects on swipe
Better placeholder images
You've got this! Focus on getting the swipe feeling smooth and satisfying. That's what makes or breaks the demo experience.

