import { Card, Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const CustomCard = styled(Card)`
    &:hover{
        cursor: pointer;
        opacity: .90;
    }
`

const News = () => {
    return (
        <Grid columns='four' divided>
            <Grid.Row>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/3.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Zagraniczne publikacje naukowe - wystawa online</Card.Header>
                            <Card.Description>
                                Szanowni Państwo, aby umożliwić całej społeczności akademickiej w okresie pandemii dostęp…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/4.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Aktualne zasady funkcjonowania CINiB-y</Card.Header>
                            <Card.Description>
                                Szanowni Czytelnicy! Uprzejmie informujemy, że od 4 października CINiBA dostępna będzie…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/5.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Gra miejska "Cyfrowe Śl@skie" w CINiB-ie</Card.Header>
                            <Card.Description>
                                Szanowni Czytelnicy, zachęcamy do udziału w 30-dniowej grze miejskiej "Cyfrowe Śl@skie" -…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/6.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Pierwsze kroki w CINiB-ie</Card.Header>
                            <Card.Description>
                                Drodzy Czytelnicy, wiemy, że korzystanie z zasobów CINiB-y może wydawać się skomplikowane…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/7.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Wystawa plakatów w ramach Międzynarodowego Konkursu Plakatu Lemland 2021</Card.Header>
                            <Card.Description>
                                Szanowni Czytelnicy, zachęcamy do zapoznania się z wystawą poświęconą Stanisławowi…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/8.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Co nowego w CINiB-ie?</Card.Header>
                            <Card.Description>
                                Drodzy Czytelnicy, docierają do nas słuchy, że nie wszyscy Użytkownicy biblioteki wiedzą,…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/9.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Charytatywny Kiermasz Książek w CINiB-ie</Card.Header>
                            <Card.Description>
                                Drodzy Czytelnicy, serdecznie zapraszamy do udziału w kolejnej edycji charytatywnego…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
                <Grid.Column>
                    <CustomCard>
                        <Image src={process.env.PUBLIC_URL + '/image/10.jpg'} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Erich Maria Remarque czytany współcześnie. W pięćdziesiątą rocznicę śmierci pisarza – konferencja</Card.Header>
                            <Card.Description>
                                Miło nam poinformować, że w dniach 11 października - 13 października 2021 r. w Centrum…
                            </Card.Description>
                        </Card.Content>
                    </CustomCard>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default News;