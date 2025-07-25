import d from "../../data/siteData.json";
import Module from "./Module.tsx";

export default function ModulesGrid() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12">
            {(d.modulesSection['technologies'] as Array<{
                name: string;
                crispyDivUrl: string;
                technologyUrl: string;
                description: string
            }>).map((module, index) => (
                <Module
                    key={index}
                    name={module['name']}
                    crispyDivUrl={module['crispyDivUrl']}
                    technologyUrl={module['technologyUrl']}
                    description={module['description']}
                />
            ))}
        </div>
    )
}