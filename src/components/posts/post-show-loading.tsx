import { Skeleton } from "@nextui-org/react";

export default function PostShowLoading() {
  // Generate random widths for more realistic loading
  const randomWidths = [
    `${Math.floor(Math.random() * 40) + 60}%`, // 60-100%
    `${Math.floor(Math.random() * 30) + 50}%`, // 50-80%
    `${Math.floor(Math.random() * 50) + 40}%`, // 40-90%
  ];

  return (
    <div className="card-elevated p-8 m-4 rounded-xl animate-pulse">
      <div className="mb-6">
        <Skeleton className="h-8 rounded-lg mb-3" style={{ width: randomWidths[0] }} />
        <div className="flex items-center gap-2">
          <Skeleton className="w-2 h-2 rounded-full" />
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-4 w-16 rounded" />
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <Skeleton className="h-4 rounded" style={{ width: randomWidths[1] }} />
        <Skeleton className="h-4 rounded" style={{ width: randomWidths[2] }} />
        <Skeleton className="h-4 w-3/4 rounded" />
      </div>

      <div className="pt-6 border-t border-custom-border">
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-16 rounded-lg" />
          <Skeleton className="h-8 w-20 rounded-lg" />
          <Skeleton className="h-8 w-16 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
