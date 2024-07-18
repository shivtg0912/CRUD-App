import {AppBar,Toolbar} from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
const Header=styled(AppBar)`
    background:#111111
`;
const Tabs=styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration: none;
`;
const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>TeeGee's CRUD</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add User</Tabs>
                <Tabs to='/delete'>Delete User</Tabs>
            </Toolbar>
        </Header>
    )
}
export default NavBar;