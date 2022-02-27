import { FormEvent } from 'react';
import { signIn } from 'next-auth/client';

export default function SignInForm(): JSX.Element {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & { email: { value: string } };
    await signIn('email', { email: target.email.value });
  };

  return (
    <form
      className="flex flex-col gap-2 md:flex-row"
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        className="min-w-[20rem] rounded-md border border-gray-200 bg-white bg-clip-padding px-4 py-1 text-black shadow-md backdrop-blur-sm backdrop-filter"
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
        required
      />
      <button
        className="btn-primary ml-2 rounded-lg bg-primary py-1.5 px-4 text-white"
        type="submit"
      >
        Get started
      </button>
    </form>
  );
}
