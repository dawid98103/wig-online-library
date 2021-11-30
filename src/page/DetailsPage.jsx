import React, { useState, useEffect, useContext } from "react";
import ContentWrapper from "../components/ContentWrapper";
import { Grid, Image, Loader, Segment, Card, List, Button, Icon } from "semantic-ui-react";
import { useParams } from 'react-router-dom';
import { GlobalContext } from "../store/GlobalState";
import styled from "styled-components";

const RightPanelWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const LeftPanelWrapper = styled.div`
    padding-left: 18px;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5em 0 1.5em 0;
`

const ListItemWithPadding = styled(List.Item)`
    padding: 0.8rem 0 0.8rem 0 !important;
`

const DetailsPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null)
    const [inFavorite, setInFavorite] = useState(false)
    const { getItemFromList, addFavorite, currentUser, isInFavorite, deleteFavorite } = useContext(GlobalContext)

    useEffect(() => {
        const selectedBook = getItemFromList(Number.parseInt(id));
        setInFavorite(isInFavorite(selectedBook.id))
        setBook(selectedBook);
    }, [getItemFromList, id])

    const addToFavorite = () => {
        addFavorite(book)
    }

    const deleteFromFavorite = () => {
        deleteFavorite(book.id)
    }

    return (
        <ContentWrapper>
            {book == null ?
                <Loader />
                :
                <Grid columns={2} divided style={{ marginTop: '0px' }}>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <LeftPanelWrapper>
                                <HeaderWrapper>
                                    <h1>{book.name}</h1>
                                </HeaderWrapper>
                                <Segment>
                                    {book.description}
                                </Segment>
                                {currentUser?.role === 2 &&
                                    <Segment>
                                        {inFavorite ?
                                            <Button color='red' onClick={() => deleteFromFavorite()}>
                                                <Icon name='delete' />
                                                Usuń z ulubionych
                                            </Button>
                                            :
                                            <Button color='red' onClick={() => addToFavorite()}>
                                                <Icon name='heart' />
                                                Dodaj do ulubionych
                                            </Button>
                                        }

                                    </Segment>
                                }
                            </LeftPanelWrapper>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <RightPanelWrapper>
                                <Card>
                                    <Image src={`${book.image}`} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Description>
                                            <List divided>
                                                <ListItemWithPadding>
                                                    Autor: {book.author}
                                                </ListItemWithPadding>
                                                <ListItemWithPadding>
                                                    Wydawnictwo: {book.publishedBy}
                                                </ListItemWithPadding>
                                                <ListItemWithPadding>
                                                    Data wydania: {book.releaseDate}
                                                </ListItemWithPadding>
                                                <ListItemWithPadding>
                                                    Seria: {book.series}
                                                </ListItemWithPadding>
                                                <ListItemWithPadding>
                                                    Strony: {book.numberOfPages}
                                                </ListItemWithPadding>
                                            </List>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </RightPanelWrapper>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }
        </ContentWrapper>
    )
}

export default DetailsPage;