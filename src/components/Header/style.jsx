import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13px;
`;

const InstagramWordmark = styled.img`
    width: 109px;
    padding-top: 2px;
`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
`;

const PublishIcon = styled.img`
    width: 22px;
    cursor: pointer;
`;

const HeartImage = styled.img`
    width: 27px;
    cursor: pointer;
`;

export { HeaderContainer, InstagramWordmark, IconsContainer, PublishIcon, HeartImage };