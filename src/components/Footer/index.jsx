import homeImage from '../../img/footer/home.svg';
import searchImage from '../../img/footer/search.svg';
import reelsImage from '../../img/footer/reels.svg';
import directImage from '../../img/footer/direct.svg';
import profileImage from '../../img/stories/maxsuelfernandob.jpg';

import { FooterContainer, ProfileImage } from './style';

function Footer() {
    return (
        <FooterContainer>
            <img src={homeImage} alt="home icon" />
            <img src={searchImage} alt="search icon" />
            <img src={reelsImage} alt="reels icon" />
            <img src={directImage} alt="direct icon" />
            <ProfileImage src={profileImage} alt="profile icon" />
        </FooterContainer> 
    );
}

export default Footer;