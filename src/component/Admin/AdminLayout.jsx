import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header/Header";

const menuItems = [
  { name: "Все прайсы", path: "/AllUnload", icon: "📊" },
  { name: "Парсер прайсов", path: "/ParserPrice", icon: "🔍" },
];

const AdminLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex w-full h-full">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white fixed h-full shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-bold flex items-center gap-2">
            🛠️ Админка
          </h1>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-4 mx-2 rounded transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-white text-blue-900 font-medium"
                  : "hover:bg-blue-700"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Основной контент */}
      <main className="ml-64 flex-1 p-6 overflow-auto">
        <Header />
        <div className="content mt-6 bg-white rounded-lg shadow p-6 min-h-[80vh]">
          {/* Здесь рендерятся страницы */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;