import { useTheme } from "../../Context";

const Card = ({ emoji, heading, detail }) => {
  // context
  const { state } = useTheme();
  const { darkMode } = state;
  return (
    <div
      className="
        position-absolute
        flex-column gap-3
        text-center
        shadow rounded-4 px-2
      "
      style={{
        width: "16rem",
        height: "16rem",
        background: "rgba(255,255,255,0.26)",
        border: `7px solid var(--orangeCard)`,
      }}
    >
      <img
        src={emoji}
        alt="Emoji"
        className="img-fluid"
        style={{ transform: "scale(0.6)" }}
      />
      <h6 className="fw-semibold">{heading}</h6>
      <p
        className="card-decs fw-medium px-2"
        style={{ color: darkMode ? "white" : "", fontSize: "14px" }}
      >
        {detail}
      </p>
    </div>
  );
};

export default Card;
