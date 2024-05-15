// import { useState } from 'react';
import { StoryContainer, ImageStory, NameParagrapher } from './style';

function Story({ srcImage, name }) {
    // const [nameFormated, setNameFormated] = useState('');

    // function formatName() {
    //     if(name.length > 10) {
    //         name = name.substr(0, 3);
    //     } 
    //     setNameFormated(name);
    //     return nameFormated;
    // }

    // setNameFormated();

    return (
        <StoryContainer>
            <ImageStory src={srcImage} alt={name} />
            <NameParagrapher>{name}</NameParagrapher>
        </StoryContainer>
    );
}

export default Story;