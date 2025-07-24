export default function SectionHeader({title, subtitle}:{
    title?: string,
    subtitle?: string
}) {
    return (
        <div className="mb-10 md:mb-14 text-center">
            <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
            <p className="mt-2">{subtitle}</p>
        </div>
    )
}