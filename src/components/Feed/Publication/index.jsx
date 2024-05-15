import dotsImage from '../../../img/feed/dots-horizontal.svg';
import heartImage from '../../../img/feed/heart.svg';
import commentImage from '../../../img/feed/comment.svg';
import shareImage from '../../../img/feed/share.svg';
import saveImage from '../../../img/feed/save.svg';

import { PublicationContainer, Header, ContentHeader, PerfilImage, PerfilName, DotsOptions, Content, Footer, Icons, Description, Comments, Translation, CommentsView } from './style';

function Publication({ imageSrc, name, content, likesValue, description, commentsValue }) {
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
                    <p><b>{likesValue} curtidas</b></p>
                    <p><b>{name}</b> {description}</p>
                    <Translation><b>Ver tradução</b></Translation>
                </Description>
                <Comments>
                    <CommentsView>Ver todos os {commentsValue} comentários</CommentsView>
                </Comments>
            </Footer>
        </PublicationContainer>
    );
}

export default Publication;