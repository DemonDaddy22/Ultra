import { InfoSection, Pricing } from '../../components';
import { InfoSectionObj1, InfoSectionObj2, InfoSectionObj3 } from './data';

const Products = () => {
    return <>
        <InfoSection {...InfoSectionObj1}></InfoSection>
        <InfoSection {...InfoSectionObj2}></InfoSection>
        <Pricing />
        <InfoSection {...InfoSectionObj3}></InfoSection>
    </>;
}

export default Products;