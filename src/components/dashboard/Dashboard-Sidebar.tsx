'use client';

import Link from "next/link";

type SidebarProps = {
  className?: string;
};

const menuItems = [
  { label: "Dashboard", path: "..//dashboard" },
  { label: "Products", path: "..//dashboard/products" },
  { label: "Create Product", path: "..//dashboard/create" },
  { label: "Edit Product", path: "../dashboard/edit" },
  { label: "Blog", path: "../dashboard/blog" },
  { label: "Setting", path: "../dashboard/setting" },
];

export default function DashboardSidebar({ className = "" }: SidebarProps) {
  return (
    <aside className={`left-0 h-fit top-[73px] w-64 ${className}`}>
      <ul className="space-y-2 font-medium">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="flex items-center rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span className="ms-3 flex-1 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}