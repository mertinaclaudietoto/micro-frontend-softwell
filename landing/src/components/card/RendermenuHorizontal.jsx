import React,{useState} from 'react';
export default function RenderMenuHorizontal({ menus, defaultActiveItem ,tailwinddefault ,tailwindActif }) {
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  return (
    <>
      {menus.map((menu) => (
        <a
          key={menu.item}
          href={menu.link}
          onClick={() => setActiveItem(menu.item)}
          className={`${tailwinddefault} ${
          activeItem === menu.item ? tailwindActif : ""
        }`}

        >
          {menu.item}
        </a>
      ))}
    </>
  );
}


