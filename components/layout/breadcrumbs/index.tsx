import ShowIf from '@components/utils/layout/showConditional/showIf';
import Link from 'next/link';

interface IBreadCrumbItem {
  label: string;
  href: string;
}

export const Breadcrumbs = ({
  items,
  includeHome = true,
}: {
  items: IBreadCrumbItem[];
  includeHome?: boolean;
}): JSX.Element => {
  return (
    <nav
      className="flex rounded-lg border border-gray-200 bg-gray-50 py-3 px-5 text-gray-700 dark:border-gray-900 dark:bg-background-dark"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <ShowIf if={includeHome}>
          <li className="inline-flex items-center">
            <Link href="/" passHref>
              <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </Link>
          </li>
        </ShowIf>
        {items.map((item, index) => (
          <li
            key={index}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            <div className="flex items-center">
              <ShowIf if={index !== 0 || includeHome}>
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </ShowIf>
              <Link
                href={index !== items.length - 1 ? item.href : '#'}
                passHref
              >
                <a
                  className={
                    index === items.length - 1
                      ? 'ml-1 text-sm font-medium text-primary dark:text-primary md:ml-2'
                      : 'ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:ml-2'
                  }
                >
                  {item.label}
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
