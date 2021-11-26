import React, { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import { Segment, Divider, Grid, Image } from "semantic-ui-react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from "styled-components";
import News from "../components/News";

const CarouselWrapper = styled.div`
    padding: 25px;
    button {
        background-color: black;
        &:hover:enabled {
            background-color: black;
        }
    };
`

const HeaderWrapper = styled.div`
    padding: 0 0 2.5rem 0;
    display: flex;
    justify-content: center;
`

const NewsWrapper = styled.div`
    padding: 20px;
`

const HomePage = () => {
    return (
        <ContentWrapper>
            <Segment>
                <CarouselWrapper>
                    <Carousel>
                        <img src={process.env.PUBLIC_URL + "/image/2.jpg"} />
                        <img src={process.env.PUBLIC_URL + "/image/2.jpg"} />
                    </Carousel>
                </CarouselWrapper>
            </Segment>
            <Divider />
            <NewsWrapper>
                <HeaderWrapper>
                    <h1>
                        Aktualności
                    </h1>
                </HeaderWrapper>
                <News />
            </NewsWrapper>
        </ContentWrapper>
    );
}

export default HomePage;