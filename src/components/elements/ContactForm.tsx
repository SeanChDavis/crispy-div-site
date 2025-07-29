import {useForm, ValidationError} from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xblkokzj");
    if (state.succeeded) {
        return <p className="text-center italic">Thanks for reaching out. You'll receive a response soon.</p>;
    }
    const inputClasses = "w-full outline-zinc-400 border-2 border-zinc-600 rounded-md py-2 px-2.5 focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 focus:ring-offset-zinc-950";
    const selectClasses = "w-full outline-zinc-400 border-2 border-zinc-600 rounded-md py-2 px-2.5 bg-zinc-950 text-white focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 focus:ring-offset-zinc-950";

    return (
        <form className="max-w-xl mx-auto text-white" onSubmit={handleSubmit}>
            <div className="mb-6 lg:mb-5">
                <label className="block font-semibold" htmlFor="name">Name</label>
                <input
                    className={inputClasses}
                    id="name"
                    type="text"
                    name="name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors}/>
            </div>
            <div className="mb-6 lg:mb-5">
                <label className="block font-semibold" htmlFor="email">Email Address</label>
                <input
                    className={inputClasses}
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </div>
            <div className="mb-6 lg:mb-5">
                <label className="block font-semibold" htmlFor="projectType">What are you looking to build?</label>
                <select
                    className={selectClasses}
                    id="projectType"
                    name="projectType"
                    required
                >
                    <option value="">-- Select project type --</option>
                    <option value="new-website">A brand new website</option>
                    <option value="site-redesign">A redesign of an existing website</option>
                    <option value="component-library">A component system / design system</option>
                    <option value="platform-conversion">Conversion from one platform to another</option>
                    <option value="ecommerce">Maintenance or feature request</option>
                    <option value="other">Something else</option>
                </select>
                <ValidationError prefix="Project Type" field="projectType" errors={state.errors}/>
            </div>
            <div className="mb-6 lg:mb-5">
                <label className="block font-semibold" htmlFor="budget">Estimated Budget</label>
                <select
                    className={selectClasses}
                    id="budget"
                    name="budget"
                    required
                >
                    <option value="">-- Select range --</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="under-2k">$1,000 – $2,000</option>
                    <option value="2k-5k">$2,000 – $5,000</option>
                    <option value="5k-10k">$5,000 – $10,000</option>
                    <option value="10k+">Above $10,000</option>
                    <option value="not-sure">Not sure yet</option>
                </select>
                <ValidationError prefix="Budget" field="budget" errors={state.errors}/>
            </div>
            <div className="mb-4 lg:mb-5">
                <label className="block font-semibold" htmlFor="message">Message</label>
                <textarea
                    className={inputClasses}
                    id="message"
                    name="message"
                    rows={5}
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className="inline-block border-2 text-sm font-semibold rounded-full px-4 py-2 cursor-pointer tracking-tight border-white bg-white hover:bg-transparent text-zinc-950 hover:text-white transition-all duration-300 ease-in-out active:scale-[.97] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600  focus:ring-offset-zinc-950 dark:focus:ring-offset-white"
            >
                Send Message
            </button>
        </form>
    );
}