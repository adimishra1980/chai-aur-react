export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    }
    let newStyles = {
        fontWeight: "900"
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "31px",
        marginTop: "90px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px"
    }
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
