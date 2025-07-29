import d from "../../data/siteData.json";
import Technology from "./Technology.tsx";

export default function TechnologiesGrid() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 lg:mt-16">
            {(d.technologiesSection['technologies'] as Array<{
                name: string;
                crispyDivUrl: string;
                technologyUrl: string;
                description: string
            }>).map((module, index) => (
                <Technology
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