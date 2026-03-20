import { IntlLink } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-muted-foreground">Stranica nije pronađena.</p>
      <IntlLink href="/">
        <button className="mt-6 rounded-lg bg-primary px-6 py-2 text-primary-foreground hover:bg-primary/90">
          Natrag na početnu
        </button>
      </IntlLink>
    </div>
  );
}
