import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #FFFFFF;
    padding: 10rem 0;
    background-color: ${({ lightBackground }) => lightBackground ? '#FFFFFF' : '#101522'};
`;

export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ imageFirst }) => imageFirst ? 'row-reverse' : 'row'};
    flex-wrap: wrap;
    margin: 0 -1rem -1rem -1rem;
`;

export const InfoColumn = styled.div`
    margin: 0 0 1rem;
    padding: 0 1rem;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 0 0 3.75rem;
    @media only screen and (max-width: 768px) {
        padding-bottom: 4rem;
    }
`;

export const SubHeading = styled.div`
    font-size: 1.1rem;
    line-height: 1rem;
    letter-spacing: 1.4px;
    margin-bottom: 1rem;
    color: ${({ lightSubHeading }) => lightSubHeading ? '#A9B3C1' : '#4B59F7'};
`;

export const Heading = styled.div`
    margin-bottom: 1.5rem;
    font-size: 3rem;
    line-height: 1.1;
    color: ${({ lightHeading }) => lightHeading ? '#F7F8FA' : '#1C2237'};
`;

export const Subtitle = styled.div`
    max-width: 440px;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
    color: ${({ lightSubtitle }) => lightSubtitle ? '#A9B3C1' : '#1C2237'};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => start ? 'flex-start' : 'flex-end'};
`;

export const Img = styled.img`
    border: 0;
    padding-right: 0;
    max-width: 100%;
    display: inline-block;
    max-width: 500px;
`;