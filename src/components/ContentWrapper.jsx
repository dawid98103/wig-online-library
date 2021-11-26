import React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled(Container)`
    background-color: white;
    margin-top: 1rem;
`

const ContentWrapper = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default ContentWrapper;