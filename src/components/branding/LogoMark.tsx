import d from '../../data/siteData.json';

export default function LogoMark() {
    return (
        <img src="images/crispy-div-logo-mark-zinc-bg.svg" className="w-9 h-9 mb-[-14px] bg-zinc-950 rounded-full relative z-50" alt={d.siteDetails.title + ' Logo Mark'}/>
    );
}