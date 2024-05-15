import { HeaderContainer, InstagramWordmark, IconsContainer, PublishIcon, HeartImage } from './style';

import wordmarkImage from '../../img/header/instagram-wordmark.svg';
import publishIcon from '../../img/header/publishIcon.svg';
import heartImage from '../../img/header/heart.svg';

function Header() {
    return (
        <HeaderContainer>
            <a href="./index.html"><InstagramWordmark src={wordmarkImage} alt="instagram wordmark" /></a>
            <IconsContainer>
                <PublishIcon src={publishIcon} alt="publish icon" />
                <HeartImage src={heartImage} alt="heart icon" />
            </IconsContainer>
        </HeaderContainer>
    );    
}

export default Header;