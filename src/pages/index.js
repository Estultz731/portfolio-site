import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Calculator from '../images/Calculator.png';
import Weather from '../images/Weather.png';
import { HireMe, LinkButton, Button } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

require('particles.js');

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  componentDidMount() {
    window.particlesJS.load('particles-js', 'assets/particles.json');
  }
  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    console.log(this.props);
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Name Surname" className="avatar" />
            <t.H1 primary align="center">
              Elizabeth Stultz
            </t.H1>
            <t.LargeP align="center" max45>
              Hello! My name is Elizabeth. You can call me Elizabeth for short. I'm a junior web developer from
              Louisville, KY. My interests include: html, css, flexbox, css grid, styled components, and design. I have
              a passion for growing my skill set and have worked primarily on React projects. I'm very excited to meet
              you!
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <div id="particles-js" styles={{ maxHeight: '100px', width: '100%' }} />
            <t.H2 primary align="center" bold>
              Changing Lanes
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              Having graduated with a B.A. in Psychology from the University of Louisville in 2011, I initially pursued
              a career in childcare. Though I enjoyed my time working with children, I rediscovered an interest in web
              design that first developed in middle school. Though the landscape of web development has changed, I am
              nonetheless excited to pursue an early passion of mine. I would love to work with you!
            </t.P>
            <t.H2 primary align="center" bold className="portfolio">
              Projects
            </t.H2>
            <t.P align="center">
              <Button
                theme={'white'}
                primary
                bold
                as="a"
                target="_blank"
                href="https://github.com/Estultz731?tab=repositories"
              >
                My Github
              </Button>
            </t.P>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://kind-joliot-231c46.netlify.com/"
                >
                  <ItemImage src={Calculator} alt="Placeholder title" />
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <t.H2 primary align="center" bold>
                  Calculator App
                </t.H2>
                <t.P>Made using React with React hooks.</t.P>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 primary align="center" bold>
                  Weather App
                </t.H2>
                <t.P primary align="center">
                  Made using React.
                </t.P>
              </DivWrapper>
              <DivWrapper>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://dazzling-kalam-1869e5.netlify.com/"
                >
                  <ItemImage src={Weather} alt="Placeholder title" />
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
