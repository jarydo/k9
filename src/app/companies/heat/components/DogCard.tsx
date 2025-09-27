import { DogProfile } from "../data.js";

interface Props {
  profile: DogProfile;
  style?: React.CSSProperties;
}

export default function DogCard({ profile, style }: Props) {
  return (
    <div className="dog-card" style={style}>
      <div className="card-content">
        <img src={profile.image} alt={profile.name} />
        <div className="card-info">
          <h2>
            {profile.name}, {profile.age}
          </h2>
          <p className="breed">{profile.breed}</p>
          <p className="bio">{profile.bio}</p>

          <div className="tags">
            {profile.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="status-info">
            <p className="relationship-status">
              <span className="status-label">Status:</span>{" "}
              {profile.relationshipStatus}
            </p>
            <p className="occupation">
              <span className="status-label">Job:</span> {profile.occupation}
            </p>
          </div>

          <div className="worst-habit">
            <p className="habit-label">Worst Habit:</p>
            <p className="habit-text">{profile.worstHabit}</p>
          </div>

          <p className="distance">{profile.distance} km away</p>
        </div>
      </div>
    </div>
  );
}
