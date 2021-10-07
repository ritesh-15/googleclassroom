const loader = {
  width: "70px",
  height: "70px",
  border: "4px solid #ebf2ff",
  borderLeft: "4px solid var(--blue)",
  borderRight: "4px solid var(--blue)",
  borderBottom: "4px solid var(--blue)",
  borderRadius: "50%",
  animation: "spin linear infinite 1s",
};

const parentLoader = {
  width: "100%",
  height: "100vh",
  left: "0",
  right: "0",
  bottom: "0",
  top: "0",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Loading = () => {
  return (
    <div style={parentLoader}>
      <div style={loader}></div>
    </div>
  );
};

export default Loading;
