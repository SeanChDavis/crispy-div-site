import './styles.css';
import d from "./data/siteData.json";
import Wrapper from "./components/layout/Wrapper.tsx";
import ModulesGrid from "./components/elements/ModulesGrid.tsx";
import Section from "./components/layout/Section.tsx";
import ContactForm from "./components/elements/ContactForm.tsx";
import AboutDescription from "./components/elements/AboutDescription.tsx";
import SettingsPanel from "./components/ui/SettingsPanel.tsx";
import LogoMark from "./components/branding/LogoMark.tsx";

function App() {

    return (
        <Wrapper>

            {/* Test Size Toggle */}
            <SettingsPanel/>

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
                <AboutDescription/>
            </Section>

            <section className="relative bg-zinc-950 text-zinc-400">
                <div className="max-w-xl lg:max-w-5xl mx-auto">
                    <p className="text-white align-top text-center">
                        <LogoMark additionalClasses="w-9 h-9 mt-[-14px] ml-[-18px] left-[50%] absolute" />
                    </p>
                </div>
            </section>

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
