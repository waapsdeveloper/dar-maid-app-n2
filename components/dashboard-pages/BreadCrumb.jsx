const BreadCrumb = ({ title = "" }) => {
  return (
    <div
      className="upper-title-box"
      style={{
        marginBottom: "0.2rem", // Remove margin
        padding: "0.7rem", // Remove all padding
      }}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
  );
};

export default BreadCrumb;