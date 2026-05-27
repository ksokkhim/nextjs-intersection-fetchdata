import { AsideDashboardComponent } from '@/Components/dashboard/AsideDashboardComponent'
import React from 'react'

export default function DashboardLayout({
    children,
    products,
    blogs,
    setting
}:{
    children: React.ReactNode,
    products: React.ReactNode,
    blogs: React.ReactNode,
    setting: React.ReactNode

}) {
  return (
    <section className='grid grid-cols-4 gap-4'>
        <AsideDashboardComponent/>
        {/* render components as slot  */}
        <section className='grid col-span-3'>

            <div className = "bg-red-200 p-8">{children}</div>

            {/* slot products */}
            <div className = "bg-blue-200 p-8">{products}</div>

            {/* slot blogs */}
            <div className = "bg-yellow-200 p-8">{blogs}</div>

            {/* slot setting */}
            <div className = "bg-green-200 p-8">{setting}</div>

        </section>

        {/* {children}
        {products}
        {blogs}
        {setting} */}
    </section>
  )
}
