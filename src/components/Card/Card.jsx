const Card = ({ emoji, heading, detail }) => {
  return (
    <div
      className="
        position-absolute
        flex-column gap-3
        text-center
        shadow rounded-4 px-3
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
      <p className="text-muted fw-medium px-2" style={{ fontSize: "14px" }}>
        {detail}
      </p>
    </div>
  );
};

export default Card;
