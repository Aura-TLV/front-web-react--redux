import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <NavLink to="/">
      <img src={logo} width={'335px'} height={'96px'} alt="logo" className="float-start my-100" style={{margin: '12px 150px'}}/>
    </NavLink>
  )
}

export default Logo