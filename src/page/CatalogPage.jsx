import React, { useContext, useState, useEffect, useRef } from "react";
import ContentWrapper from "../components/ContentWrapper";
import { GlobalContext } from "../store/GlobalState";
import { Card, Pagination, Search, Button, Image } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
import AddModal from "../components/modal/AddModal";
import EditModal from "../components/modal/EditModal";
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

const CatalogPage = () => {
    const [pageSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableData, setCurrentTableData] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const [refresh, setRefresh] = useState(false)
    const { avaliableBooks, currentUser, deleteItemFromList } = useContext(GlobalContext);
    const searchRef = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (avaliableBooks !== undefined) {
            const filteredValues = () => {
                if (searchValue === "") {
                    return avaliableBooks;
                } else {
                    return avaliableBooks.filter(book => {
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
            console.log("Items on page:");
            console.log(elementsOnPage);
            setCurrentTableData(elementsOnPage);
        }
    }, [searchValue, currentPage, refresh])

    const handleDeleteBook = (id) => {
        deleteItemFromList(id)
        setRefresh(!refresh)
    }

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
                    {currentUser?.role === 1 &&
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <EditModal
                                    currentId={book.id}
                                    currentName={book.name}
                                    currentDescription={book.description}
                                    currentAuthor={book.author}
                                    currentPublishedBy={book.publishedBy}
                                    currentReleaseDate={book.releaseDate}
                                    currentSeries={book.series}
                                    currentNumberOfPages={book.numberOfPages}
                                    currentPrice={book.price}
                                    currentImage={book.image}
                                    refresh={() => setRefresh(!refresh)} />
                                <Button basic color='red' onClick={() => handleDeleteBook(book.id)}>
                                    Usu??
                                </Button>
                            </div>
                        </Card.Content>
                    }
                </ResizedCard>
            )
        })
    }

    return (
        <ContentWrapper>
            <SearchBar>
                {currentUser?.role === 1 &&
                    <AddModal>
                        Dodaj +
                    </AddModal>}
                <Search onSearchChange={onChangeSearchValue} value={searchValue} showNoResults={false} />
            </SearchBar>
            <ContentCenter>
                {searchRef.current.length === 0 ?
                    <div>
                        Brak wynik??w wyszukiwania...
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

export default CatalogPage;