//Libraries
import React, { Component } from 'react'
import MastheadWithImg from "../Global/components/reusuable/Hero/mastHead-withImg"
import ContentPanelWithImg from "../Global/components/reusuable/contentPanel/contentPanelWithImg"
import "./scss/home.scss"
class Home extends Component {
      render() {
            return (
                  <div>
                        <MastheadWithImg
                              sectionClass="randomppl jumbotron"
                              title="Random People"
                              titleClass="titleColor"
                              subTitleClass="subTitleColor"
                              subTitle="Most popular place to meet random people from around the world"
                              buttonClass="btn btn-primary btn-lg adjBtn btn-light"
                              button="Get Started"
                        />
                        <ContentPanelWithImg
                              sectionClass="whyRandomppl"
                              img="content1Img"
                              title="Why Random People"
                              content={[
                                    "Random people is the place to meet other ppl",
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                              ]}

                        />

                  </div>
            )
      }
}

export default Home
