import dotsImage from '../../../img/feed/dots-horizontal.svg';
import heartImage from '../../../img/feed/heart.svg';
import commentImage from '../../../img/feed/comment.svg';
import shareImage from '../../../img/feed/share.svg';
import saveImage from '../../../img/feed/save.svg';

import { PublicationContainer, Header, ContentHeader, PerfilImage, PerfilName, DotsOptions, Content, Footer, Icons, Description, Comments } from './style';

function Publication({ imageSrc, name, content, likesValue, description, commentsValue, datePostage }) {
    return (
        <PublicationContainer>
            <Header>
                <ContentHeader>
                    <PerfilImage src={imageSrc} alt={name} />
                    <PerfilName>{name}</PerfilName>
                </ContentHeader>
                <DotsOptions src={dotsImage} alt="options image"/>
            </Header>
            <Content>
                <img src={content} alt="image post" /> 
            </Content>
            <Footer>
                <Icons>
                    <div>
                        <img src={heartImage} alt="like icon" />
                        <img src={commentImage} alt="comment icon" />
                        <img src={shareImage} alt="share icon" />
                    </div>
                    <img src={saveImage} alt="save icon" />
                </Icons>
                <Description>
                    <p>{likesValue} curtidas</p>
                    <p>{name} {description}</p>
                </Description>
                <Comments>
                    <p>Ver todos os {commentsValue} comentários</p>
                    <p>Há {datePostage} . <b>Ver tradução</b></p>
                </Comments>
            </Footer>
        </PublicationContainer>
    );
}

export default Publication;