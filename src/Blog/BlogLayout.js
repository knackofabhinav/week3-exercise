import {Navigation} from './Navigation';
import {Hero} from './Hero';
import {HeadSection} from './HeadSection';
import { MiddleSection } from './MiddleSection';
import {BottomSection} from './BottomSection';

export const BlogLayout = () => {
    return(
        <div>
            <div className="head">
                <Navigation />
                <Hero />
                <HeadSection />
                <hr />
                <MiddleSection />
                <BottomSection />
            </div>
        </div>
    )
}