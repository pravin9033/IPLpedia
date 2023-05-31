import { React } from 'react';
import {Link} from "react-router-dom";
import './YearSelector.css';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const YearSelector = ({teamName}) => {
    let years = [];
    const startYear = 2008;
    const endYear = 2022;

    for(let i = startYear; i <= endYear; i++) {
        years.push(i);
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Select Year
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {years.map(year => (
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href={`/teams/${teamName}/matches/${year}`}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-3 py-2 text-sm'
                                    )}
                                >
                                    {year}
                                </a>
                            )}
                        </Menu.Item>
                        )
                    )}
                </Menu.Items>
            </Transition>
        </Menu>


        // <ol className="YearSelector">
        //     {years.map(year => (
        //         <li>
        //             <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
        //         </li>
        //         )
        //     )}
        // </ol>
    );
}