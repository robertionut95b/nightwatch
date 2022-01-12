import Link from 'next/link';

export default function Logo(): JSX.Element {
  return (
    <div className="nav-logo">
      <Link href="/" passHref>
        <h1 className="font-bold text-lg cursor-pointer">
          {process.env.APP_SITE_NAME}
        </h1>
      </Link>
    </div>
  );
}
