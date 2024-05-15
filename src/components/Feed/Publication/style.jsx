import styled from "styled-components";

const PublicationContainer = styled.div`

`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
`;

const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const PerfilImage = styled.img`
    width: 45px;
    border: 1px solid red;
    padding: 2px;
    border-radius: 50%
`;

const PerfilName = styled.p`
    font-weight: bold;
`;

const DotsOptions = styled.img`
    cursor: pointer;
`;

const Content = styled.div`
    img {
        width: 100vw;
    }
`;

const Footer = styled.div`
    padding: 10px 18px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 10px;

`;

const Comments = styled.div`
    cursor: pointer;
`;

const Translation = styled.p`
    font-size: 13px;
`;

const CommentsView = styled.p`
    color: #808080;
`;

export { PublicationContainer, Header, ContentHeader, PerfilImage, PerfilName, DotsOptions, Content, Footer, Icons, Description, Comments, Translation, CommentsView };