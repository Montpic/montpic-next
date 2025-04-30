import activities from "@/lib/activities.json";

export async function generateStaticParams() {
  return Object.keys(activities).map(mountain => ({
    mountain: mountain
  }));
}