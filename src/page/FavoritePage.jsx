import React, { useContext, useState, useEffect, useRef } from "react";
import ContentWrapper from "../components/ContentWrapper";
import { GlobalContext } from "../store/GlobalState";
import { Card, Pagination, Search, Button, Image } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PaginationFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0 2rem 0;
`

const ContentCenter = styled.div`
    padding: 20px;
    width:100%;
    display: flex;
    justify-content: center;
`

const SearchBar = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 1.5rem;
`

const ResizedCard = styled(Card)`
    width: 0.5em;
`

const FavoritePage = () => {
    const [pageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableData, setCurrentTableData] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const [refresh, setRefresh] = useState(false)
    const { favoriteBooks } = useContext(GlobalContext);
    const searchRef = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (favoriteBooks !== undefined) {
            const filteredValues = () => {
                if (searchValue === "") {
                    return favoriteBooks;
                } else {
                    return favoriteBooks.filter(book => {
                        return book.name.toLowerCase().includes(searchValue.toLowerCase())
                    })
                }
            }

            const elementsToRender = () => {
                const firstPageIndex = (currentPage - 1) * pageSize;
                const lastPageIndex = firstPageIndex + pageSize;
                return searchRef.current.slice(firstPageIndex, lastPageIndex);
            }

            searchRef.current = filteredValues();
            const elementsOnPage = elementsToRender();
            setCurrentTableData(elementsOnPage);
        }
    }, [searchValue, currentPage, refresh])

    const calculatePagesCount = () => {
        return Math.ceil(searchRef.current.length / pageSize);
    }

    const onChangePage = (e, { activePage }) => {
        console.log(`Active page: ${activePage}`);
        setCurrentPage(activePage)
    }

    const onChangeSearchValue = (event) => {
        setCurrentPage(1);
        setSearchValue(event.target.value);
    }

    const onCardClick = (id) => {
        navigate(`/details/${id}`);
    }

    const shortDescription = (desc) => {
        return desc.substring(0, 50) + "..."
    }

    const calculateItemsPerRow = () => {
        if (currentTableData.length === 1) {
            return 1;
        } else if (currentTableData.length === 2) {
            return 2;
        } else if (currentTableData.length === 3) {
            return 3;
        } else {
            return 5;
        }
    }

    const renderCardsPage = () => {
        return currentTableData.map(book => {
            return (
                <ResizedCard key={book.id} href='#card-example-link-card'>
                    <Image src={book.image} wrapped ui={false} onClick={() => onCardClick(book.id)} />
                    <Card.Content>
                        <Card.Header>{book.name}</Card.Header>
                        <Card.Description>
                            {shortDescription(book.description)}
                        </Card.Description>
                    </Card.Content>
                </ResizedCard>
            )
        })
    }

    return (
        <ContentWrapper>
            <SearchBar>
                <Search onSearchChange={onChangeSearchValue} value={searchValue} showNoResults={false} />
            </SearchBar>
            <ContentCenter>
                {searchRef.current.length === 0 ?
                    <div>
                        Brak wyników wyszukiwania...
                    </div>
                    :
                    <Card.Group itemsPerRow={calculateItemsPerRow()}>
                        {renderCardsPage()}
                    </Card.Group>
                }
            </ContentCenter>
            <PaginationFooter >
                <Pagination
                    activePage={currentPage}
                    onPageChange={(e, data) => onChangePage(e, data)}
                    totalPages={calculatePagesCount()}
                />
            </PaginationFooter>
        </ContentWrapper>
    )
}

export default FavoritePage;