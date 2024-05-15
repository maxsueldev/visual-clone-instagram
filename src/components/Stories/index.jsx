import Story from './Story';

import { StoriesContainer } from './style';

import maxsuelImage from '../../img/stories/maxsuelfernandob.jpg';
import joaoAntonioImage from '../../img/stories/joaoantonio.jpg';
import duarteBrImage from '../../img/stories/duarteBr.jpg';
import karolFImage from '../../img/stories/karolf.jpg';
import maria05Image from '../../img/stories/maria05.jpg';
import ritaSilvaImage from '../../img/stories/rita_silva.jpg';
import rodriguesMiguelImage from '../../img/stories/rodriguesmiguel.jpg';
 
function Stories() {
    return (
        <StoriesContainer>
            <Story srcImage={maxsuelImage} name="Seu story" /> 
            <Story srcImage={joaoAntonioImage} name="joaontonio" />
            <Story srcImage={duarteBrImage} name="duartebr" />
            <Story srcImage={karolFImage} name="karolf" />
            <Story srcImage={maria05Image} name="maria05" />
            <Story srcImage={ritaSilvaImage} name="ritasilva" />
            <Story srcImage={rodriguesMiguelImage} name="rodriguesmiguel" />
        </StoriesContainer>
    );
}

export default Stories;