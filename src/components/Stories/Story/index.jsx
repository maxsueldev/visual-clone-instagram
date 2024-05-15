import { StoryContainer, ImageStory, NameParagrapher } from './style';

function Story({ srcImage, name }) {
    return (
        <StoryContainer>
            <ImageStory src={srcImage} alt={name} />
            <NameParagrapher>{name}</NameParagrapher>
        </StoryContainer>
    );
}

export default Story;