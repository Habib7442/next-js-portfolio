"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { FaHome } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FcFeedback } from "react-icons/fc";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/"><FaHome className="w-6 h-6" /></HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Feedback">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/feedback"><FcFeedback className="w-6 h-6" /></HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact"><GrContact className="w-6 h-6" /></HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
