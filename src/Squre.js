
const Squre = ({colorValue , hexValue,isDarkText}) => {
  return (
    <section
      className="squre"
      style={{backgroundColor:colorValue,
              color:isDarkText ? "#000":"#FFF"
      }}
    >
      <p>{colorValue ? colorValue :"Empty Value"}</p>
      <p>{hexValue ? hexValue :null}</p>
    </section>
  )
}

Squre.defaultProps = {
  colorValue : "Empty Color Value"
}

export default Squre