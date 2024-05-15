import styled from "styled-components";

const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;

const ImageStory = styled.img`
    width: 60px;
    border-radius: 50%;
    border: 1px solid red;
    padding: 2px;
`;

const NameParagrapher = styled.p`
    font-size: 14px;
    font-weight: 100;
`;

export { ImageStory, StoryContainer, NameParagrapher };