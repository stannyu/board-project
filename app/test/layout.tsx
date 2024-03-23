interface TestLayoutProps {
  children: React.ReactNode;
}

export default function TestLayout({ children }: TestLayoutProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="text-xs p-1 bg-red-500 text-white">Reusable navbar</nav>
      <p>{children}</p>
    </div>
  );
}
