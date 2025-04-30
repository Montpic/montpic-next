"use client";

import activities from "@/lib/activities.json";
import Image from "next/image";
import { Activities } from "@/types/Activity";
import { Button, Popover } from "flowbite-react";

const typedActivities: Activities = activities;

export default function Page() {
  const activity = typedActivities["roule"];
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex md:flex-row flex-col grow items-center justify-center text-center p-2 pt-10 gap-4">
        <div className="flex flex-col items-center justify-center text-center gap-4 rounded-lg shadow-md border p-4">
          <h1 className="text-3xl">{activity.name}</h1>
          <p>{activity.location}</p>
          <Image
            src={activity.image}
            alt={activity.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p>
            <u>Activité :</u> {activity.activity}
          </p>
          <p>
            Inscrits à la prochaine activité le{" "}
            {new Date(Date.now() + 86400000).toLocaleDateString("fr-FR")}:
          </p>
          {activity.members.map((member) => (
            <div
              key={member.pseudo}
              className="flex flex-col items-start lg:items-end lg:text-right"
            >
              <OverProfile memberName={member.pseudo}>
                {member.pseudo}
              </OverProfile>
            </div>
          ))}
        </div>
      </div>
      <Button size="xl" color="light" className="my-12">
        S&apos;inscrire
      </Button>
      <div className="mt-12 w-full max-w-2xl border rounded-xl p-4">
        <p>Chat d&apos;activité</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-500">Alice</span>
              <div className="bg-blue-100 rounded-lg p-3">
                <p className="text-sm text-black">
                  Salut tout le monde ! Qui vient demain ?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-500">Bob</span>
              <div className="bg-blue-100 rounded-lg p-3">
                <p className="text-sm text-black">
                  Moi ! Je viens de minscrire
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Écrivez un message..."
            className="flex-1 rounded-lg border border-gray-300 text-black p-2"
          />
          <Button color="light">Envoyer</Button>
        </div>
      </div>
    </div>
  );
}

function OverProfile({
  children,
  memberName,
}: {
  children: React.ReactNode;
  memberName: string;
}) {
  return (
    <Popover
      aria-labelledby={`${memberName}-profile`}
      content={
        <div className="w-64 p-3 flex flex-col items-center justify-center text-center gap-2">
          <div className="mb-2 flex items-center justify-center text-center">
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ajouter en ami
            </button>
          </div>
          <p className="mb-3 text-sm font-normal">@{memberName}</p>
        </div>
      }
    >
      <Button className="min-w-44" color="dark">
        {children}
      </Button>
    </Popover>
  );
}
