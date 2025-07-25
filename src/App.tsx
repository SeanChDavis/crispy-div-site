import './styles.css';
import d from "./data/siteData.json";
import Wrapper from "./components/layout/Wrapper.tsx";
import ModulesGrid from "./components/elements/ModulesGrid.tsx";
import Section from "./components/layout/Section.tsx";
import ContactForm from "./components/elements/ContactForm.tsx";
import AboutDescription from "./components/elements/AboutDescription.tsx";
import SettingsPanel from "./components/ui/SettingsPanel.tsx";

function App() {

    return (
        <Wrapper>

            {/* Test Size Toggle */}
            <SettingsPanel />

            {/* Modules Section */}
            <Section
                sectionHeaderTitle={d.modulesSection.sectionHeader['title']}
                sectionHeaderSubtitle={d.modulesSection.sectionHeader['subtitle']}
            >
                <ModulesGrid/>
            </Section>

            {/* About Section */}
            <Section
                sectionHeaderTitle={d.aboutSection.sectionHeader['title']}
                sectionHeaderSubtitle={d.aboutSection.sectionHeader['subtitle']}
                sectionStyle={'gray'}
            >
                <AboutDescription />
            </Section>

            {/* Contact Section */}
            <Section
                sectionHeaderTitle={d.contactSection.sectionHeader['title']}
                sectionHeaderSubtitle={d.contactSection.sectionHeader['subtitle']}
                sectionStyle={'dark'}
                sectionAnchor={'contact'}
            >
                <ContactForm/>
            </Section>

        </Wrapper>
    )
}

export default App
