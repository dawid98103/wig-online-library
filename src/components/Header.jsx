import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import RegisterModal from "./modal/RegisterModal";
import LoginModal from "./modal/LoginModal";
import { Menu } from "semantic-ui-react";
import { HOME_PAGE, CATALOG_PAGE, FAVORITE_PAGE } from "../page/Pages";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = styled(Menu.Item)`
    &:hover{
        opacity: .65;
        cursor: pointer;
    }
`

const Header = () => {
    const { currentPage, currentUser, logoutUser } = useContext(GlobalContext)

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
                    Strona główna
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

            {currentUser &&
                <MenuItem
                    name='sign-in'
                    active={currentPage === FAVORITE_PAGE}
                >
                    <Link to={`/favorite`}>
                        Ulubione
                    </Link>
                </MenuItem>
            }

            <Menu.Menu position='right'>
                {currentUser ?
                    <MenuItem onClick={() => logoutUser()}>
                        Wyloguj
                    </MenuItem>
                    :
                    <>
                        <MenuItem>
                            <LoginModal />
                        </MenuItem>
                        <MenuItem>
                            <RegisterModal />
                        </MenuItem>
                    </>
                }
            </Menu.Menu>
        </Menu>
    )
}

export default Header;