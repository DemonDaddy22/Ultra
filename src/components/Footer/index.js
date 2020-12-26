import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinkItem, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, SocialIcons, SocialIcon, SocialIconLink, WebisteRights } from './Footer.elements';

const Footer = () => {
    return <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive the latest news and trends
            </FooterSubHeading>
            <FooterSubText>You can unsubscribe at any time</FooterSubText>
            <Form>
                <FormInput name='email' type='email' placeholder='Your email address' />
                <Button>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItem>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/ultra'>How it works</FooterLink>
                    <FooterLink to='/ultra'>Testimonials</FooterLink>
                    <FooterLink to='/ultra'>Careers</FooterLink>
                    <FooterLink to='/ultra'>Investors</FooterLink>
                    <FooterLink to='/ultra'>Terms of Service</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/ultra'>Contact</FooterLink>
                    <FooterLink to='/ultra'>Support</FooterLink>
                    <FooterLink to='/ultra'>Destinations</FooterLink>
                    <FooterLink to='/ultra'>Sponsorships</FooterLink>
                </FooterLinkItem>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItem>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/ultra'>Submit Video</FooterLink>
                    <FooterLink to='/ultra'>Ambassadors</FooterLink>
                    <FooterLink to='/ultra'>Agency</FooterLink>
                    <FooterLink to='/ultra'>Influencer</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLinkTitle>Social</FooterLinkTitle>
                    <FooterLink to='/ultra'>Facebook</FooterLink>
                    <FooterLink to='/ultra'>Instagram</FooterLink>
                    <FooterLink to='/ultra'>YouTube</FooterLink>
                    <FooterLink to='/ultra'>Twitter</FooterLink>
                    <FooterLink to='/ultra'>LinkedIn</FooterLink>
                </FooterLinkItem>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrapper>
                <SocialLogo to='/ultra'>
                    <SocialIcon />
                    ULTRA
                </SocialLogo>
                <WebisteRights>ULTRA ©️ 2020</WebisteRights>
                <SocialIcons>
                    <SocialIconLink href='/ultra' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/ultra' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/ultra' target='_blank' aria-label='YouTube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='https://twitter.com/Showstopper_RG' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.linkedin.com/in/rohangupta22/' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrapper>
        </SocialMedia>
    </FooterContainer>;
}

export default Footer;