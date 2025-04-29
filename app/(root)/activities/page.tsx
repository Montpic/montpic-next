import ActivityButton from "@/components/activityButton";
import activities from "@/lib/activities.json";

export default async function Page() {
  return (
    <div className="flex flex-col grow items-center justify-center text-center gap-4 h-screen w-screen">
      {Object.entries(activities).map(([key, activity]) => (
        <ActivityButton activity={activity} key={key} activityId={key} />
      ))}
    </div>
  );
}
