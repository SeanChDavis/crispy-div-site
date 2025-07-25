import LinkButton from "./LinkButton.tsx";

export default function AboutDescription() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
            <div>
                <p className="mb-4">In web development, a <code className="font-semibold">&lt;div&gt;</code> is a
                    fundamental building block, a versatile container that holds content and structure together. It’s
                    the backbone of layout design, allowing developers to group elements, apply styles, and much more.
                </p>
                <p className="mb-4">A <code className="font-semibold">&lt;div class="crispy"&gt;</code> is a clean,
                    lean, and purposefully styled container—no clutter, no hacks, just sharp, intentional markup. It’s
                    how a website should feel: precise, elegant, and under control.</p>
                <p><code className="font-semibold">tl;dr</code> &middot; It's a fun way to say "efficient web
                    development".</p>
            </div>
            <div>
                <p className="mb-4">Okay. "But why this site," you ask? The answer is pretty simple. Crispy Div is a web
                    development entity&mdash;a workspace filled with the tools needed for web development. This site
                    presents those tools and showcases what they were used to build.</p>
                <p className="mb-4">For those looking for assistance with a web development project, this site is the
                    starting point. Reach out to discuss details.</p>
                <LinkButton
                    url="#"
                    text="Contact Crispy Div"
                    style="outline"
                    customClasses="mt-2.5"
                />
            </div>
        </div>
    )
}