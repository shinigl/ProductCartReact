import cartLogo from '../assets/cart.svg'

const Header = ({ totalItems }) => {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px 20px", backgroundColor: "#645cff", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{color:"#fff"}}>ProductCart</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img  src={cartLogo} alt="cart" style={{ width: "30px", height: "30px",filter:"invert(1)", marginRight: "10px" }} />
          <p style={{ fontSize: "1.2rem", fontWeight: "600", color: "#fff" }}>{totalItems}</p>
        </div>
      </header>
    </>
  );
}

export default Header;
