import activities from "@/lib/activities.json";
import { Activities } from "@/types/Activity";

const typedActivities: Activities = activities;

// Export a dummy component to make Next.js recognize this as a proper module
export default function PageStatic() {
  return null;
}

export async function generateStaticParams() {
  return Object.keys(typedActivities).map(mountain => ({
    mountain: mountain
  }));
}