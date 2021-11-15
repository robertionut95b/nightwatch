import { FormEvent } from 'react';
import { signIn } from 'next-auth/client';

export default function SignInForm() {

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & { email: { value: string }, };
        await signIn("email", { email: target.email.value, })
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input className="bg-white shadow-md bg-clip-padding px-4 py-1 backdrop-filter backdrop-blur-sm rounded-md text-black"
                type="email" name="email" id="email" placeholder="Your email" required />
            <button className="ml-2 bg-primary py-1.5 px-4 rounded-lg" type="submit">Get started</button>
        </form>
    )
}