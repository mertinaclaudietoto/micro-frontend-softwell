import React,{useState} from 'react';
export default function RenderMenuHorizontal({ menus, defaultActiveItem ,tailwinddefault ,tailwindActif }) {
  console.log(menus)
  const [activeItem, setActiveItem] = useState(defaultActiveItem);
  return (
    <>
      {menus.map((menu) => (
        <a
          key={menu}
          href="#"
          onClick={() => setActiveItem(menu)}
          className={`${tailwinddefault} ${
          activeItem === menu ? tailwindActif : ""
        }`}

        >
          {menu}
        </a>
      ))}
    </>
  );
}

