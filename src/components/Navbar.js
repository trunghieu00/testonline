import "../Styles/main.css";

function Navbar() {
    return (
 <header>
       <nav className="myDIV">
          <button className="btn active"><a href="#">All</a></button>
          <button className="btn" ><a href="#">Manpower Supply</a></button>
          <button className="btn" ><a href="#">Mobile App / Websites</a></button>
          <button className="btn" ><a href="#">UI/UX Design</a></button>
      </nav>
 </header>
    );
  
  }
  export default Navbar;