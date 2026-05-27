
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { usePathname } from "next/navigation";
import {HiChartPie,HiShoppingBag, HiUser,  } from "react-icons/hi";

export function 
AsideDashboardComponent() {

  const pathName = usePathname();
  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          
          {/* Blogs */}
          <SidebarItem href="/dashboard/blogs" icon={HiUser} className= {pathName === "/dashboard/blogs"? 'bg-blue-200 rounded': " "}>
            Blogs
          </SidebarItem>

          {/* products */}
          <SidebarItem href="/dashboard/products" icon={HiShoppingBag} className={pathName === "/dashboard/products" ? 'bg-blue-200 rounded' : " "}>
            Products
          </SidebarItem>
          
          {/* setting */}
          <SidebarItem href="/dashboard/setting" icon={HiShoppingBag} className={pathName === "/dashboard/setting" ? 'bg-blue-200 rounded' : " "}>
            Setting
          </SidebarItem>
          
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
