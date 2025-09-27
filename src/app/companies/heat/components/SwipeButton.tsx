interface Props {
  onAction: (action: "like" | "pass") => void;
  disabled?: boolean;
}

export default function SwipeButtons({ onAction, disabled = false }: Props) {
  return (
    <div className="swipe-buttons">
      <button
        className={`pass-btn ${disabled ? "disabled" : ""}`}
        onClick={() => !disabled && onAction("pass")}
        disabled={disabled}
      >
        💩
      </button>
      <button
        className={`like-btn ${disabled ? "disabled" : ""}`}
        onClick={() => !disabled && onAction("like")}
        disabled={disabled}
      >
        🦴
      </button>
    </div>
  );
}
