import React, {useState,useEffect ,useContext} from "react";
import ContentWrapper from "../components/ContentWrapper";
import { Grid, Image, Loader, Segment, Card, List } from "semantic-ui-react";
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
    const {id} = useParams();
    const [book, setBook] = useState(null)
    const {getItemFromList} = useContext(GlobalContext)

    useEffect(() => {
        const selectedBook = getItemFromList(Number.parseInt(id));
        console.log(selectedBook);
        setBook(selectedBook);
    }, [getItemFromList, id])

    return (
        <ContentWrapper>
            {book == null ? 
            <Loader />
            :
            <Grid columns={2} divided style={{marginTop: '0px'}}>
            <Grid.Row>
                <Grid.Column width={11}>
                    <LeftPanelWrapper>
                        <HeaderWrapper>
                            <h1>{book.name}</h1>
                        </HeaderWrapper>
                        <Segment>
                            {book.description}
                        </Segment>
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