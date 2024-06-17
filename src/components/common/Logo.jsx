import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <NavLink to="/">
      <img src={logo} width={'300px'} height={'90px'} alt="logo" className="float-start my-100" style={{margin: '20px 100px'}}/>
    </NavLink>
  )
}

export default Logo