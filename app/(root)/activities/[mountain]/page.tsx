import activities from "@/lib/activities.json";
import Image from "next/image";
import { Activities } from "@/types/Activity";

const typedActivities: Activities = activities;
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { mountain: string };
}) {
  const { mountain } = params;
  if (!(mountain in typedActivities)) {
    notFound();
  }

  const activity = typedActivities[mountain];
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen p-2 pt-10 gap-4">
      <h1 className="text-3xl">{activity.name}</h1>
      <p>{activity.location}</p>
      <Image
        src={activity.image}
        alt={activity.name}
        width={500}
        height={500}
        className="rounded-lg"
      />
      <p>{activity.activity}</p>

      {activity.members.map((member) => (
        <p key={member.pseudo}>{member.pseudo}</p>
      ))}
    </div>
  );
}
