import Publication from './Publication';

import maxsuelImage from '../../img/stories/maxsuelfernandob.jpg';
import post1 from '../../img/feed/post1.jpg';

import karolFImage from '../../img/stories/karolf.jpg';
import post2 from '../../img/feed/post2.jpg';

function Feed() {
    return (
        <>
            <Publication imageSrc={maxsuelImage}
                name="maxsuelfernandob"
                content={post1}
                likesValue={26}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                commentsValue={8}
                datePostage="2 dias" />

            <Publication imageSrc={karolFImage}
                name="karolF"
                content={post2}
                likesValue={55}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                commentsValue={3}
                datePostage="1 dia" />
        </>
    );
}

export default Feed;