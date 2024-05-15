import styled from "styled-components";

const StoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`;

const ImageStory = styled.img`
    width: 61px;
    border-radius: 50%;
    border: 1px solid red;
    padding: 2px;
`;

const NameParagrapher = styled.p`
    font-size: 12.5px;
    font-weight: 400;
`;

export { ImageStory, StoryContainer, NameParagrapher };