"use client";
import React, { useState, useEffect } from "react";

export default function ClientOnly({
  children
}: {
  children: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return null;

  return <div className="w-full">{children}</div>;
}
