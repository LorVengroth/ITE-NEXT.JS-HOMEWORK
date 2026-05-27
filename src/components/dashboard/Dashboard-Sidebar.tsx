'use client'
import { useState } from "react";

type SidebarProps = {
  className?: string;
};

export default function DashboardSidebar({ className = "" }: SidebarProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
   <aside className="left-0 h-fit top-[73px] w-64   ">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="#"
            className="flex items-center rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100"
          >
            <span className="ms-3">Dashboard</span>
          </a>
        </li>


        {["Products", "Create Product", "Edit Product", "Blog" , "Setting" ].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="flex items-center rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span className="ms-3 flex-1 whitespace-nowrap">{item}</span>

              {item === "Kanban" && (
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                  Pro
                </span>
              )}

              {item === "Inbox" && (
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-600">
                  2
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}