import activities from "@/lib/activities.json";
import { Activities } from "@/types/Activity";

const typedActivities: Activities = activities;

export async function generateStaticParams() {
  return Object.keys(typedActivities).map(mountain => ({
    mountain: mountain
  }));
}