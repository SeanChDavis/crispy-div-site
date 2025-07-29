import './styles.css';
import d from "./data/siteData.json";
import Wrapper from "./components/layout/Wrapper.tsx";
import TechnologiesGrid from "./components/elements/TechnologiesGrid.tsx";
import Section from "./components/layout/sections/Section.tsx";
import ContactForm from "./components/elements/ContactForm.tsx";
import AboutDescription from "./components/elements/AboutDescription.tsx";
import LogoMarkDivider from "./components/layout/LogoMarkDivider.tsx";

function App() {

    return (
        <Wrapper>

            {/* Technology Section */}
            <Section
                title={d.technologiesSection.header["title"]}
                subtitle={d.technologiesSection.header["subtitle"]}
            >
                <TechnologiesGrid/>
            </Section>

            {/* About Section */}
            <Section
                title={d.aboutSection.header["title"]}
                subtitle={d.aboutSection.header["subtitle"]}
                theme={"gray"}
                headingAlignment={"left"}
            >
                <AboutDescription/>
            </Section>

            <LogoMarkDivider shiftDirection={"down"}/>

            {/* Contact Section */}
            <Section
                title={d.contactSection.header["title"]}
                subtitle={d.contactSection.header["subtitle"]}
                theme={"dark"}
                anchor={"contact"}
            >
                <ContactForm/>
            </Section>

        </Wrapper>
    )
}

export default App
