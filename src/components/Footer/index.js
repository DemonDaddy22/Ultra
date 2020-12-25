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
                    <FooterLink to='/'>How it works</FooterLink>
                    <FooterLink to='/'>Testimonials</FooterLink>
                    <FooterLink to='/'>Careers</FooterLink>
                    <FooterLink to='/'>Investors</FooterLink>
                    <FooterLink to='/'>Terms of Service</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'>Contact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorships</FooterLink>
                </FooterLinkItem>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItem>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/'>Submit Video</FooterLink>
                    <FooterLink to='/'>Ambassadors</FooterLink>
                    <FooterLink to='/'>Agency</FooterLink>
                    <FooterLink to='/'>Influencer</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLinkTitle>Social</FooterLinkTitle>
                    <FooterLink to='/'>Facebook</FooterLink>
                    <FooterLink to='/'>Instagram</FooterLink>
                    <FooterLink to='/'>YouTube</FooterLink>
                    <FooterLink to='/'>Twitter</FooterLink>
                    <FooterLink to='/'>LinkedIn</FooterLink>
                </FooterLinkItem>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrapper>
                <SocialLogo to='/'>
                    <SocialIcon />
                    ULTRA
                </SocialLogo>
                <WebisteRights>ULTRA ©️ 2020</WebisteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
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