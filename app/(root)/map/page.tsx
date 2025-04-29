export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-center">
      <div className="rounded-xl h-full w-full overflow-hidden shadow-lg">
      <iframe className="h-full w-full p-12 rounded-xl overflow-hidden" src="https://www.google.fr/maps/d/embed?mid=1pkCyfhoxjBbva0yj0MwzmrCJGHjy0Q0&ehbc=2E312F&noprof=1"></iframe>
      </div>
    </div>
  );
}
