import "./header.css"
import { Link } from "react-router-dom";
import Logo from "/Logo.svg"


 
  
function Header() {
  function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
      
    }
    else {
      menuMobile.classList.add('open');
      
    }
  }
  
  
  return (
    <header>
    <nav className="navi">
     <div className="logo">
      <Link to={"/"}><img src={Logo} alt="" /> </Link>
     </div>
     <div className="nav-list-cont">
     <ul className="nav-list">
        <li><Link to={"/"}>Home</Link></li>
       <li><Link to={"/equipamentos"}>Equipamentos</Link></li>
       <li><Link to={"/bibliografia"}>Bibliografia</Link></li>
       <li><Link to={"/aplicativo"}>Download</Link></li>
      
       <Link to={"/login"}>
        <button className="btn-web">Login</button> 
       </Link>
      

     </ul>

     </div>
     <div className="mobile-icon" onClick={menuShow}>
       <div className="line"></div>
       <div className="line"></div>
       <div className="line"></div>
     </div>
    </nav>
    <div className="mobile-menu">
    <ul>
    <li><Link to={"/"}>Home</Link></li>
       <li><Link to={"/equipamentos"}>Equipamentos</Link></li>
       <li><Link to={"/bibliografia"}>Bibliografia</Link></li>
       <li><Link to={"/aplicativo"}>Download</Link></li>
       <Link to={"/login"}>
        <button className="btn-mobile">Login</button> 
       </Link>
    </ul>
    </div>
 </header>
  )
}

export default Header