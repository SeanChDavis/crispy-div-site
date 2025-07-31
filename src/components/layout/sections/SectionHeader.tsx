export default function SectionHeader({title, subtitle, theme, align, jumbo}: {
    title?: string,
    subtitle?: string,
    theme?: string,
    align?: "left" | "center" | "right",
    jumbo?: boolean
}) {
    const alignmentBase = "ms-auto me-auto text-center";
    let alignment = "";
    let titleClasses = "";
    let textSize = "text-xl md:text-2xl lg:text-3xl";

    if (theme && theme === 'dark') {
        titleClasses = "text-white";
    }

    if (jumbo) {
        textSize = "text-2xl md:text-4xl";
    }

    if (align === "left") {
        alignment = "lg:ms-0 lg:me-auto lg:text-left";
    } else if (align === "right") {
        alignment = "lg:me-0 lg:ms-auto lg:text-right";
    }

    return (
        <div className={`max-w-2xl ${alignmentBase} ${alignment} mb-10`}>
            {title && (
                <h1 className={`${textSize} ${titleClasses} dark:text-white font-semibold mb-2`}>{title}</h1>
            )}
            {subtitle &&
                <p className="md:text-lg">{subtitle}</p>
            }
        </div>
    )
}