import React, { useContext, useState, useMemo, useEffect } from "react";
import ContentWrapper from "../components/ContentWrapper";
import { GlobalContext } from "../store/GlobalState";
import { Button, Card, Image, Pagination, Search } from 'semantic-ui-react'
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

let PageSize = 10;

const CatalogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTableData, setCurrentTableData] = useState([]);
    const { avaliableBooks } = useContext(GlobalContext);

    useEffect(() => {
        const elementsOnPage = elementsToRender();
        console.log("Items on page:");
        console.log(elementsOnPage);
        setCurrentTableData(elementsOnPage)
    }, [currentPage])

    const calculatePagesCount = () => {
        return Math.ceil(avaliableBooks.length / PageSize);
    }

    const onChangePage = (e, { activePage }) => {
        console.log(`Active page: ${activePage}`);
        setCurrentPage(activePage)
    }

    const elementsToRender = () => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return avaliableBooks.slice(firstPageIndex, lastPageIndex);
    }

    const shortDescription = (desc) => {
        return desc.substring(0, 50) + "..."
    }

    const renderCardsPage = () => {
        return currentTableData.map(book => {
            return (
                <ResizedCard
                    href='#card-example-link-card'
                    image={book.image}
                    header={book.name}
                    meta={`${book.price} zł`}
                    description={shortDescription(book.description)}
                />
            )
        })
    }

    return (
        <ContentWrapper>
            <SearchBar>
                <Search />
            </SearchBar>
            <ContentCenter>
                <Card.Group itemsPerRow={5}>
                    {renderCardsPage()}
                </Card.Group>
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