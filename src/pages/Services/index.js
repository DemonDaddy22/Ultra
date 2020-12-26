import { InfoSection, Pricing } from '../../components';
import { InfoSectionObj1, InfoSectionObj2 } from './data';

const Services = () => {
    return <>
        <InfoSection {...InfoSectionObj1}></InfoSection>
        <InfoSection {...InfoSectionObj2}></InfoSection>
        <Pricing />
    </>;
}

export default Services;