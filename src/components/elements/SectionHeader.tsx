export default function SectionHeader({title, subtitle, sectionStyle}:{
    title?: string,
    subtitle?: string,
    sectionStyle?: string
}) {
    let titleClasses = "";

    if (sectionStyle && sectionStyle === 'dark') {
        titleClasses = "text-white";
    }

    return (
        <div className="mb-10 md:mb-14 text-center">
            <h1 className={`${titleClasses} dark:text-white text-xl md:text-2xl font-semibold`}>{title}</h1>
            <p className="mt-2">{subtitle}</p>
        </div>
    )
}