import { Activities } from "@/types/Activity";
import Link from "next/link";
import Image from "next/image";

export default function ActivityButton({
  activity,
}: {
  activity: Activities[string];
}) {
  return (
    <Link
      href={`/activities/roule`}
      className="flex items-center justify-center text-center p-2 gap-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 w-64 min-w-[400px] h-32"
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
        {activity.name} - {activity.location}
      </p>
      <p>{activity.activity}</p>
      </div>
    </Link>
  );
}
