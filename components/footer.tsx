import { Code, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { legalLinks, siteMapLinks } from "@/lib/links";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full mt-15">
      {/* main container */}
      <div className="flex flex-col md:flex-row gap-6 w-full px-4 py-6 max-w-5xl mx-auto">
        {/* social */}
        <div className="flex flex-col gap-7 items-center md:items-start">
          <Link
            href="https://reynaldomolina.github.io/"
            className="inline-flex gap-3 items-center text-lg font-semibold hover:underline"
          >
            <Image
              src="/me.png"
              height={421}
              width={420}
              alt="Me"
              className="rounded-full size-10 bg-muted"
            />
            Reynaldo Molina
          </Link>

          <p className="text-muted-foreground max-w-70 text-center md:text-left">
            Desarrollador web con experiencia en clubes adventistas.
          </p>

          <div className="inline-flex gap-3 items-center">
            <Button asChild className="rounded-full" size="icon">
              <Link href="mailto:molinareynaldo952@gmail.com">
                <Mail />
              </Link>
            </Button>
            <Button asChild className="rounded-full" size="icon">
              <Link href="https://www.linkedin.com/in/reynaldo-molina/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  className="fill-white dark:fill-black"
                >
                  <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" />
                </svg>
              </Link>
            </Button>
            <Button asChild className="rounded-full" size="icon">
              <Link href="https://github.com/ReynaldoMolina">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white dark:fill-black"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>

        {/* links */}
        <div className="flex flex-col md:flex-row md:ml-auto gap-10 mt-10 md:mt-0">
          <div className="flex w-full md:w-fit flex-col gap-3 md:items-start">
            <span className="font-bold text-center md:text-left md:mx-3">
              Links
            </span>
            {siteMapLinks.map((e) => (
              <Button key={e.label} variant="link" asChild className="">
                <Link href={e.url}>{e.label}</Link>
              </Button>
            ))}
          </div>

          <div className="flex w-full md:w-fit flex-col gap-3 md:items-start">
            <span className="font-bold text-center md:text-left md:mx-3">
              Legal
            </span>
            {legalLinks.map((e) => (
              <Button key={e.label} variant="link" asChild>
                <Link href={e.url}>{e.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
