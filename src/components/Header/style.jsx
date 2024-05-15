import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3px 13px;
`;

const InstagramWordmark = styled.img`
    width: 109px;
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 14px;
`;

const PublishIcon = styled.img`
    cursor: pointer;
`;

const HeartImage = styled.img`
    width: 27px;
    cursor: pointer;
`;

export { HeaderContainer, InstagramWordmark, IconsContainer, PublishIcon, HeartImage };