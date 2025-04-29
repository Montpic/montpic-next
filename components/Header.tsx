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
        <Button color="light" onClick={() => setIsOpen(true)}>
          <TbMenu2 className="text-2xl" />
        </Button>
      </div>

      <Drawer open={isOpen} onClose={handleClose} position="right">
        <DrawerHeader title="Montpic" />
        <DrawerItems>
          <Link href="/card" className="flex items-center gap-2">
            Carte
          </Link>
          <Link href="/activities" className="flex items-center gap-2">
            Activités
          </Link>
        </DrawerItems>
      </Drawer>
    </header>
  );
}
