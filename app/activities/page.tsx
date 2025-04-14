import ActivityButton from "@/components/activityButton";
import activities from "@/lib/activities.json";
import { Activities } from "@/types/Activity";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 h-screen w-screen">
      {Object.entries(activities).map(([key, activity]) => (
        <ActivityButton activity={activity} key={key} activityId={key} />
      ))}
    </div>
  );
}
