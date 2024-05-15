import homeImage from '../../img/footer/home.svg';
import exploreImage from '../../img/footer/explore.svg';
import reelsImage from '../../img/footer/reels.svg';
import postImage from '../../img/footer/post.png';
import directImage from '../../img/footer/direct.svg';

import profileImage from '../../img/stories/maxsuelfernandob.jpg';

import { FooterContainer, ProfileImage } from './style';

function Footer() {
    return (
        <FooterContainer>
            <img src={homeImage} alt="home icon" />
            <img src={exploreImage} alt="explore icon" />
            <img src={reelsImage} alt="reels icon" />
            <img src={postImage} alt="post icon" width="24px" height="24px" />
            <img src={directImage} alt="direct icon" />
            <ProfileImage src={profileImage} alt="profile icon" />
        </FooterContainer> 
    );
}

export default Footer;