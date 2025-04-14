import activities from "@/lib/activities.json";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  for (const activity of Object.values(activities)) {
    const { name, location, activity: act, image, members } = activity;
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 h-screen w-screen">
        <Link
          href={`/activities/${activity.name}`}
          className="flex items-center justify-center text-center p-2 gap-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          <Image
            src={activity.image}
            alt={activity.name}
            width={64}
            height={64}
            className="rounded-full aspect-square"
          />
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <p>
              {name} - {location}
            </p>
            <p>{act}</p>
          </div>
        </Link>
      </div>
    );
  }
}
