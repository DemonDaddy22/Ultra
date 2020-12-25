import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: #101522;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4rem 0 2rem 0;
`;

export const FooterSubscription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    color: #FFFFFF;
`;

export const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
`;

export const FooterSubText = styled.p`
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    color: #A9B3C1;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    font-size: 1rem;
    flex: 1;
    border: 1px solid #FFFFFF;
    &::placeholder {
        color: #444444;
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
        margin-right: 0;
    }
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding-top: 2rem;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    width: 10rem;
    color: #FFFFFF;
    @media only screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.2s ease;
    &:hover {
        color: #0467FB;
    }
`;

export const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #FFFFFF;
    display: flex;
    justify-self: start;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 1rem; 
`;

export const SocialIcon = styled(FaMagento)`
    margin-right: 1rem;
`;

export const WebisteRights = styled.small`
    color: #A9B3C1;
    margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15rem;
`;

export const SocialIconLink = styled.a`
    color: #FFFFFF;
    font-size: 1rem;
`;