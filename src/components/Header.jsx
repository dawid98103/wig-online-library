import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import { Menu } from "semantic-ui-react";
import { HOME_PAGE, CATALOG_PAGE } from "../page/Pages";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = styled(Menu.Item)`
    &:hover{
        opacity: .65;
        cursor: pointer;
    }
`

const Header = () => {
    const { currentPage } = useContext(GlobalContext)

    return (
        <Menu stackable>
            <Menu.Item>
                <img src={process.env.PUBLIC_URL + "/logo.png"} />
            </Menu.Item>

            <MenuItem
                name='home'
                active={currentPage === HOME_PAGE}
            >
                <Link to={`/`} >
                    Home
                </Link>
            </MenuItem>

            <MenuItem
                name='catalog'
                active={currentPage === CATALOG_PAGE}
            >
                <Link to={`/catalog`}>
                    Katalog
                </Link>
            </MenuItem>

            <MenuItem
                name='sign-in'
            >
                Moje wypożyczenia
            </MenuItem>

            <Menu.Menu position='right'>
                <MenuItem>
                    Zarejestruj
                </MenuItem>
            </Menu.Menu>
        </Menu>
    )
}

export default Header;