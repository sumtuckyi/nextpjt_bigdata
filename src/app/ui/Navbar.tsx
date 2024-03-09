"use client"

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css"

export default function NavigationBar() {
  // react hook 사용
  const path = usePathname();
  const [count, setCount] = useState(0);

  return (
    <Navbar className={styles.nav}>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">MatchUP</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link> {path === "/" ? "🍎" : ""}
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/article">
            MatchUP Zone
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/recommendation">
            Match
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
