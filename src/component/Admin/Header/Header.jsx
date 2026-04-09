import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6 pb-4 border-b">
      <h2 className="text-2xl font-semibold text-gray-800">
        Управление прайсами
      </h2>
      <div className="text-sm text-gray-500">
        Сегодня: {new Date().toLocaleDateString("ru-RU")}
      </div>
    </header>
  );
};

export default Header;