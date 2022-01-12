import { useMemo, useState } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';

export type IDropdownItem<T> = {
  label: string;
  value: T;
};

export type IDropdownProps<T> = {
  items: IDropdownItem<T>[];
  label: string;
  defaultValue?: IDropdownItem<T>;
  header?: string;
  subHeader?: string;
  onChange?: (item: IDropdownItem<string>) => void;
};

export type IDropdownListProps<T> = {
  items: IDropdownItem<T>[];
  label: string;
  defaultValues?: IDropdownItem<T>[];
  header?: string;
  subHeader?: string;
  onChange?: (items: IDropdownItem<string>[]) => void;
};

const ALL_OPTION = { label: 'All', value: '' };

export const StringDropdown = ({
  items,
  label,
  header,
  subHeader,
  onChange,
  defaultValue,
}: IDropdownProps<string>): JSX.Element => {
  const itms = useMemo<IDropdownItem<string>[]>(
    () => [ALL_OPTION, ...items] || [ALL_OPTION],
    [items],
  );
  const [selected, setSelected] = useState<IDropdownItem<string>>(
    defaultValue || ALL_OPTION,
  );
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onChangeEvent = (item: IDropdownItem<string>): void => {
    setSelected(item);
    onChange?.(item);
    setIsComponentVisible?.(false);
  };

  return (
    <div className="dropdown relative" ref={ref}>
      <button
        className="text-gray-500 bg-backgroundSecondary font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        data-dropdown-toggle="dropdown"
      >
        {label}:{' '}
        <span
          className={`ml-1.5 ${
            selected !== ALL_OPTION ? 'text-primary' : 'text-gray-500'
          }`}
        >
          {selected?.label}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`${
          isComponentVisible ? 'block' : 'hidden'
        } bg-backgroundSecondary text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 absolute w-full max-h-96 overflow-y-auto border border-gray-800`}
      >
        {header && (
          <div className="px-4 py-3">
            <span className="block text-sm">{header}</span>
            {subHeader && (
              <span className="block text-sm font-medium text-gray-900 truncate">
                {subHeader}
              </span>
            )}
          </div>
        )}
        <ul className="py-1" aria-labelledby="dropdown">
          {itms.map((item, index) => (
            <li key={index}>
              <span
                className="text-sm hover:bg-background text-gray-500 hover:text-primary no-underline block px-4 py-2 cursor-pointer"
                onClick={() => onChangeEvent(item)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const StringListDropdown = ({
  items,
  label,
  header,
  subHeader,
  onChange,
  defaultValues,
}: IDropdownListProps<string>): JSX.Element => {
  const itms = useMemo<IDropdownItem<string>[]>(() => items, [items]);
  const [selected, setSelected] = useState<IDropdownItem<string>[]>(
    defaultValues || [],
  );
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onChangeEvent = (item: IDropdownItem<string>): void => {
    if (selected.find((i) => i.value === item.value)) {
      setSelected(selected.filter((i) => i.value !== item.value));
      return;
    }
    setSelected([...selected, item]);
  };

  const onSubmitChanges = (): void => {
    onChange?.([...selected]);
    setIsComponentVisible?.(false);
  };

  const clearSelection = (): void => {
    setSelected([]);
    onChange?.([]);
    setIsComponentVisible?.(false);
  };

  return (
    <div className="dropdown relative" ref={ref}>
      <button
        className="text-gray-500 bg-backgroundSecondary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
        type="button"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        data-dropdown-toggle="dropdown"
      >
        {label}{' '}
        {selected.length > 0 && (
          <input className="ml-2" type="checkbox" checked readOnly />
        )}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`${
          isComponentVisible ? 'block' : 'hidden'
        } bg-backgroundSecondary absolute max-w-max text-base z-50 list-none rounded shadow my-4`}
        style={{ minWidth: '9rem' }}
      >
        <div className="w-full max-h-96 overflow-y-auto border border-gray-800">
          {header && (
            <div className="px-4 py-3">
              <span className="block text-sm">{header}</span>
              {subHeader && (
                <span className="block text-sm font-medium text-gray-900 truncate">
                  {subHeader}
                </span>
              )}
            </div>
          )}
          <ul className="py-1" aria-labelledby="dropdown">
            {itms.map((item, index) => (
              <li
                className="flex flex-row w-full items-center hover:bg-background text-gray-500 hover:text-primary"
                key={index}
                onClick={() => onChangeEvent(item)}
              >
                <input
                  className="ml-4 accent-primary"
                  type="checkbox"
                  name={`checkbox-${label}`}
                  checked={
                    selected.find((i) => i.value === item.value) !== undefined
                  }
                  onChange={() => onChangeEvent(item)}
                />
                <label
                  htmlFor={`checkbox-${label}`}
                  className="text-sm no-underline block px-4 py-2 cursor-pointer"
                >
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown-submit p-2 flex gap-x-1">
          <button
            className="btn-primary p-0.5 text-sm w-full"
            onClick={() => onSubmitChanges()}
          >
            Submit
          </button>
          <button
            className="btn-primary p-0.5 text-sm w-full"
            onClick={() => clearSelection()}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
