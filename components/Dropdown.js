import React, { useState } from 'react';
import Link from 'next/link';

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = item.children || [];

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="hover:text-blue-400" onClick={toggle}>
        {item.name}
      </button>
      <div className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${isOpen ? 'flex' : 'hidden'}`}>
        {menuItems.map((child, index) => (
          <React.Fragment key={index}>
            {child.url ? (
              <Link href={child.url} className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1" onClick={toggle}>
                {child.name}
              </Link>
            ) : (
              <span className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1">{child.name}</span>
            )}
          </React.Fragment>
        ))}
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40" onClick={toggle}></div>
      )}
    </div>
  );
};

export default Dropdown;