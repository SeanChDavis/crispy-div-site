import d from '../../data/siteData.json';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400 border-t-1 border-zinc-800 py-8">
            <div className="max-w-xl lg:max-w-4xl mx-auto px-4 text-center">
                <p className="text-sm">{d.siteDetails['copyrightSignifier']} {new Date().getFullYear()} {d.siteDetails['title']} &middot; {d.siteDetails['copyrightText']}</p>
            </div>
        </footer>
    )
}