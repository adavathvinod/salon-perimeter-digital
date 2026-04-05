export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-bold">
          <span className="text-primary">SS</span>{" "}
          <span className="text-foreground">Films</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SS Films. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
