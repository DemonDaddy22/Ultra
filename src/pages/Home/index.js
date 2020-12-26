import { InfoSection, Pricing } from '../../components';
import { InfoSectionObj1, InfoSectionObj2, InfoSectionObj3, InfoSectionObj4 } from './data';

const H0me = () => {
    return <>
        <InfoSection {...InfoSectionObj1}></InfoSection>
        <InfoSection {...InfoSectionObj2}></InfoSection>
        <Pricing />
        <InfoSection {...InfoSectionObj3}></InfoSection>
        <InfoSection {...InfoSectionObj4}></InfoSection>
    </>;
}

export default H0me;