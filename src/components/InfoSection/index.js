import { Link } from 'react-router-dom';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, SubHeading, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';

const InfoSection = ({ lightBackground, imageFirst, lightSubHeading, subHeading, lightHeading, heading,
    lightSubtitle, subtitle, primary, buttonLabel, img, alt, start }) => <InfoSec lightBackground={lightBackground}>
        <Container>
            <InfoRow imageFirst={imageFirst}>
                <InfoColumn>
                    <TextWrapper>
                        <SubHeading lightSubHeading={lightSubHeading}>{subHeading}</SubHeading>
                        <Heading lightHeading={lightHeading}>{heading}</Heading>
                        <Subtitle lightSubtitle={lightSubtitle}>{subtitle}</Subtitle>
                        <Link to='/sign-up'>
                            <Button large primary={primary}>{buttonLabel}</Button>
                        </Link>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                    <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
    </InfoSec>;

export default InfoSection;