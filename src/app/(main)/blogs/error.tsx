"use client";
import ErrorSection from "@/components/common/ErrorSection";
export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <ErrorSection error={error} reset={reset} />
    </>
  );
}
