import DashboardSidebar from '@/components/dashboard/Dashboard-Sidebar'
import React from 'react'

export default function DashboardLayout({
    children,
    products,
    setting,
    blogs
}: {
    children: React.ReactNode
    products: React.ReactNode
    setting: React.ReactNode
    blogs: React.ReactNode
}) {
  return (
  <div className="flex w-full min-h-screen">

      <aside className="sticky top-0 h-screen w-72 shrink-0 border-r border-gray-200 bg-white">
        <DashboardSidebar />
      </aside>

      <main className="flex-1 p-6">
        {children}
        {products}
        {setting}
        {blogs}
      </main>

    </div>
  )
}
