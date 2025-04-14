import activities from "@/lib/activities.json";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 h-screen w-screen">
      {Object.entries(activities).map(([key, activity]) => {
        const { name, location, activity: act, image } = activity;
        return (
          <Link
            key={key}
            href={`/activities/${key}`}
            className="flex items-center justify-center text-center p-2 gap-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <Image
              src={image}
              alt={name}
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
        );
      })}
    </div>
  );
}
