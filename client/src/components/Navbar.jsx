import logo from '../../images/navbar_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
  return (
    <>
    <div className="navbar">
        {/* logo */}
    <div className="logo">
     <img src={logo} alt="saviour_logo" />
     <h1>Saviour</h1>
     </div>

     {/* navbar */}
     <div className='link-navbar'>
         <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">IDO</a></li>
             <li><a href="#">Takenomics</a></li>
             <li><a href="#">Roadmap</a></li>
             <li><a href="#">Coming Soon    <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '5px' }}/></a></li>
         </ul>
     </div>


     {/* wallet */}
     <button className='wallet'>Connect wallet</button>
    </div>
    
    </>
  )
}

