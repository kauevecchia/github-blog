export function Loading() {
  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
      <div className="bg-base-post flex items-center justify-center gap-4 rounded-md px-6 py-4">
        <p className="text-base-text font-bold">Loading</p>
        <div className="border-base-label h-12 w-12 animate-spin rounded-full border-t-4 border-solid"></div>
      </div>
    </div>
  );
}
