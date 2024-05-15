import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    background-color: var(--white-color);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid var(--gray-color);
    padding: 16px 0;
    // margin-top: 180px;
`;

const ProfileImage = styled.img`
    width: 32px;
    border-radius: 50%;
`;

export { FooterContainer, ProfileImage };