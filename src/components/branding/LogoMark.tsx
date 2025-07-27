import d from '../../data/siteData.json';

export default function LogoMark({additionalClasses}: {
    additionalClasses?: string
} = {}) {
    return (
        <img
            src="images/crispy-div-logo-mark-zinc-bg.svg"
            className={`bg-zinc-950 rounded-full z-50 ${additionalClasses}`}
            alt={d.siteDetails.title + ' Logo Mark'}
        />
    );
}