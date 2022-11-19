import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Navbar'


const Header = () => {
  return (
    <div>
          <MainHeader>
              <NavLink to="/">
                  <img className='logo' src=".\images\logo1.jpeg" alt="logo"   />
                 
              </NavLink>
        {/* <Navbar /> */}
        <Nav/>
      </MainHeader>
    </div>
  )
}
const MainHeader = styled.header`
padding: 0 4rem;
height: 8rem;
background-color: ${({ theme }) => theme.colors.bg};
display:flex;
justify-content: space-between;
align-items: center;
position : relative;

.logo{
    height:8rem;
}

 `;
export default Header
