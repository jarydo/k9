"use client";
import SwipeStack from "./components/SwipeStack";

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-center">
          <img src="/heat.png" alt="HEAT" className="logo" />
          <h1>HEAT</h1>
        </div>
      </header>
      <SwipeStack />
      <nav className="bottom-nav">
        <button className="nav-icon filter-icon" title="Filter">
          🔍
        </button>
        <button className="nav-icon home-icon" title="Discover">
          🏠
        </button>
        <button className="nav-icon matches-icon" title="Your Matches">
          💕
        </button>
        <button className="nav-icon settings-icon" title="Settings">
          ⚙️
        </button>
      </nav>
    </div>
  );
}
