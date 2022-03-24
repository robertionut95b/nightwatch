import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { Pagination } from './pagination';

type Column<T> = {
  id: keyof T;
  label?: string;
  accesor?: (row: T) => JSX.Element | ReactNode;
};

const CreateOption = (): JSX.Element => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </button>
  );
};

const UpdateOption = (): JSX.Element => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    </button>
  );
};

const DeleteOption = (): JSX.Element => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
};

const NTable = <T,>({
  cols,
  data,
  totalItems,
  onPageChange,
  createRowLink,
  updateRowLink,
  deleteRowLink,
}: {
  cols: Column<T>[];
  data: T[];
  totalItems: number;
  onPageChange: (page: number) => void;
  createRowLink?: (Row: T) => string;
  updateRowLink?: (Row: T) => string;
  deleteRowLink?: (Row: T) => string;
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange?.(pageNumber);
  };

  const defaultAccessor = (col: Column<T>, row: T): JSX.Element | ReactNode =>
    String(row[col.id]);

  return (
    <div className="overflow-auto">
      <Table variant="simple" className="rounded-lg border border-gray-200">
        <TableCaption
          style={{ padding: '5px', marginBottom: '0.35rem' }}
          placement="bottom"
        >
          <div className="table-options flex justify-end">
            <Pagination
              className="flex items-center justify-center gap-x-2 text-black dark:text-white"
              currentPage={currentPage}
              totalItems={totalItems}
              handlePageChange={handlePageChange}
            />
          </div>
        </TableCaption>
        <Thead>
          <Tr>
            {cols.map((col, idx) => (
              <Th key={idx} className="dark:text-white">
                {col.label || col.id}
              </Th>
            ))}
            <Th className="dark:text-white">Options</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((d, idx) => (
            <Tr key={idx}>
              {cols.map((col, jdx) => {
                return (
                  <Td key={jdx} className="dark:text-white" maxWidth={'64'}>
                    {col?.accesor?.(d) || defaultAccessor(col, d)}
                  </Td>
                );
              })}
              <Td>
                <div className="btn-group flex gap-x-2">
                  <ShowIfElse if={createRowLink} else={<CreateOption />}>
                    <Link href={createRowLink?.(d) as string} passHref>
                      <a>
                        <CreateOption />
                      </a>
                    </Link>
                  </ShowIfElse>
                  <ShowIfElse if={updateRowLink} else={<UpdateOption />}>
                    <Link href={updateRowLink?.(d) as string} passHref>
                      <a>
                        <UpdateOption />
                      </a>
                    </Link>
                  </ShowIfElse>
                  <ShowIfElse if={deleteRowLink} else={<DeleteOption />}>
                    <Link href={deleteRowLink?.(d) as string} passHref>
                      <a>
                        <DeleteOption />
                      </a>
                    </Link>
                  </ShowIfElse>
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default NTable;
