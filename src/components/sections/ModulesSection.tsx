import SectionHeader from "../elements/SectionHeader.tsx";
import d from "../../data/siteData.json";
import ModulesGrid from "../elements/ModulesGrid.tsx";

export default function ModulesSection() {

    return (
        <section>
            <div className="max-w-xl lg:max-w-4xl mx-auto px-4 py-12 md:py-24">
                <SectionHeader
                    title={d.modules.sectionHeader['title']}
                    subtitle={d.modules.sectionHeader['subtitle']}
                />
                <ModulesGrid/>
            </div>
        </section>
    )
}