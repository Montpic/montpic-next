"use client";

import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">
          Montpic
        </Link>
        <Button outline color="dark" onClick={() => setIsOpen(true)}>
          <TbMenu2 className="text-2xl" />
        </Button>
      </div>

      <Drawer open={isOpen} onClose={handleClose} position="right">
        <DrawerHeader title="Montpic" />
        <DrawerItems>
          <Link href="/map" className="flex items-center gap-2">
            Carte
          </Link>
          <Link href="/activities" className="flex items-center gap-2">
            Activités
          </Link>
          <p className="flex items-center gap-2 hover:cursor-pointer">
            Mon compte
          </p>
        </DrawerItems>
      </Drawer>
    </header>
  );
}
