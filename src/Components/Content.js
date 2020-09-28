import React, { Component } from 'react';
import Workflow from './Workflow';
import FeatureTileIconOne from '../Assets/icons/feature-tile-icon-01.png';
import FeatureTileIconTwo from '../Assets/icons/feature-tile-icon-02.png';
import FeatureTileIconThree from '../Assets/icons/feature-tile-icon-03.png';
import FeatureTileIconFour from '../Assets/icons/feature-tile-icon-04.png';
import FeatureTileIconFive from '../Assets/icons/feature-tile-icon-05.png';
import FeatureTileIconSix from '../Assets/icons/feature-tile-icon-06.png';
import SplitWrapText from './SplitWrapText';
import SplitWrapImg from './SplitWrapImg';
import FeatureSplitImgOne from '../Assets/imgs/features-split-image-01.png';
import FeatureSplitImgTwo from '../Assets/imgs/features-split-image-02.png';
import FeatureSplitImgThree from '../Assets/imgs/features-split-image-02.png';
import Testmonials from './Testmonials';
import BlockQuoteIcon from '../Assets/icons/blockquote.png'

export default class Content extends Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="row contnet-wrapper">
                        <div className="col-12 wrapper">
                            <div className="content">
                            <h1 className="text-center">Welcome To React App</h1>
                            <p className="text-center">Our React App works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                            <p className="text-center">
                                <a href="#">Get Started</a>
                                <a href="#">Get Tutorial</a>
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 wrapper pt-5 pb-5">
                            <h1 className="text-center">Build up the whole picture</h1>
                            <p className="text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
                        </div>
                        <Workflow heading="Business App" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." img={FeatureTileIconOne} />
                        <Workflow heading="Games App" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." img={FeatureTileIconTwo} />
                        <Workflow heading="Education App" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." img={FeatureTileIconThree} />
                        <Workflow heading="Book App" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." img={FeatureTileIconFour} />
                        <Workflow heading="Lifestyle App" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." img={FeatureTileIconFive} />
                        <Workflow heading="Travel App" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat." img={FeatureTileIconSix} />
                    </div>

                    <div className="row">
                        <div className="col-12 wrapper pt-5 pb-5">
                            <h1 className="text-center">Workflow that just works</h1>
                            <p className="text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
                        </div>
                    </div>

                    <div className="row split-wrapper">
                        <SplitWrapText subheading="LIGHTNING FAST WORKFLOW" heading="Data-driven insights" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        <SplitWrapImg  img={FeatureSplitImgOne} />
                    </div>

                    <div className="row split-wrapper">
                        <SplitWrapImg  img={FeatureSplitImgTwo} />
                        <SplitWrapText subheading="LIGHTNING FAST WORKFLOW" heading="Data-driven insights" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>

                    <div className="row split-wrapper">
                        <SplitWrapText subheading="LIGHTNING FAST WORKFLOW" heading="Data-driven insights" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        <SplitWrapImg  img={FeatureSplitImgThree} />
                    </div>

                    <div className="row">
                        <div className="col-12 wrapper pt-5 pb-5">
                            <h1 className="text-center">Customer testimonials</h1>
                            <p className="text-center">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
                        </div>
                    </div>

                    <div className="row pt-t pb-5">
                        <Testmonials text="— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat." clientname="Roman Level" appname="AppName" img={BlockQuoteIcon} />
                        <Testmonials text="— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat." clientname="Ben Stafford" appname="AppName" img={BlockQuoteIcon} />
                        <Testmonials text="— Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat." clientname="Diana Rynzhuk" appname="AppName" img={BlockQuoteIcon} />
                    </div>

                </div>
            </div>
        )
    }
}
