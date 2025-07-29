import LinkButton from "./LinkButton.tsx";

export default function AboutDescription() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
            <div>
                <p className="mb-4">In web development, a <code className="font-medium italic">&lt;div&gt;</code> is a
                    fundamental building block, a versatile container that holds content and structure together. It’s
                    the backbone of layout design, allowing developers to group elements, apply styles, and much more.
                </p>
                <p className="mb-4">A <code className="font-medium italic">&lt;div class="crispy"&gt;</code> is a clean,
                    lean, and purposefully styled container—no clutter, no hacks, just sharp, intentional markup. It’s
                    how a website should feel: precise, elegant, and under control.</p>
                <p><code className="font-medium italic">tl;dr</code> &middot; It's a fun way to say "efficient web development".</p>
            </div>
            <div>
                <p className="mb-4">Crispy Div (the brand) is simply a web development entity&mdash;a way for me to position my web development services for your consumption. Feel free to just call me Sean. In fact, I'd prefer you not call me a crispy div.</p>
                <p className="mb-4">If you would like assistance with a web development project, this website is a great starting point. Reach out. Let's discuss details.</p>
                <LinkButton
                    url="#contact"
                    text="Get In Touch with Sean"
                    customClasses="mt-2.5"
                    fill={false}
                />
            </div>
        </div>
    )
}