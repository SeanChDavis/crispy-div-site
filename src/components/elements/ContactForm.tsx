import {useForm, ValidationError} from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xblkokzj");
    if (state.succeeded) {
        return <p className="text-center italic">Thanks for reaching out. You'll receive a response soon.</p>;
    }
    return (
        <form className="max-w-xl mx-auto text-white" onSubmit={handleSubmit}>
            <div className="mb-6 lg:mb-5">
                <label className="block font-semibold" htmlFor="name">Name</label>
                <input
                    className="w-full outline-zinc-400 border-2 border-zinc-600 rounded-md py-2 px-2.5"
                    id="name"
                    type="text"
                    name="name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors}/>
            </div>
            <div className="mb-6 lg:mb-5">
                <label className="block font-semibold" htmlFor="email">Email Address</label>
                <input
                    className="w-full outline-zinc-400 border-2 border-zinc-600 rounded-md py-2 px-2.5"
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </div>
            <div className="mb-4 lg:mb-5">
                <label className="block font-semibold" htmlFor="message">Message</label>
                <textarea
                    className="w-full outline-zinc-400 border-2 border-zinc-600 rounded-md py-2 px-2.5"
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
                className="inline-block outline-zinc-400 border-2 border-zinc-950 text-sm font-semibold rounded-full px-4 py-2 cursor-pointer bg-white text-zinc-950 hover:bg-zinc-200"
            >
                Send Message
            </button>
        </form>
    );
}