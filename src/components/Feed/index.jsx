import Publication from './Publication';

import maxsuelImage from '../../img/stories/maxsuelfernandob.jpg';
import post1 from '../../img/feed/post1.jpg';

import karolFImage from '../../img/stories/karolf.jpg';
import post2 from '../../img/feed/post2.jpg';

import maria05Image from '../../img/stories/maria05.jpg';
import post3 from '../../img/feed/post3.jpeg';

import ritaSilvaImage from '../../img/stories/rita_silva.jpg';
import post4 from '../../img/feed/post4.png';

import { FeedContainer } from './style';

function Feed() {
    return (
        <FeedContainer>
            <Publication imageSrc={maxsuelImage}
                name="maxsuelfernandob"
                content={post1}
                likesValue={26}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                commentsValue={8} />

            <Publication imageSrc={karolFImage}
                name="karolF"
                content={post2}
                likesValue={55}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                commentsValue={3} />

            <Publication imageSrc={maria05Image}
                name="maria05"
                content={post3}
                likesValue={18}
                description={"Beggining a new job with front-end programming"}
                commentsValue={2} />

            <Publication imageSrc={ritaSilvaImage}
                name="ritasilva"
                content={post4}
                likesValue={23}
                description={"Starting a new project at my job"}
                commentsValue={35} />
        </FeedContainer>
    );
}

export default Feed;