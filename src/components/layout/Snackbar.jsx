"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./snackbar.css";

export default function Snackbar() {
  const pathname = usePathname();

  const normalize = (url) =>
    url.split("?")[0].split("#")[0].replace(/\/$/, "");

  const cleanPath = normalize(pathname);

  const isActive = (path) => cleanPath.startsWith(path);

  return (
    <>
      <div className="snackbar">
        <div className="snackbar-links">
          <Link href="/projects/aquacasa" className={isActive("/projects/aquacasa") ? "active" : ""}>
            Aquacasa
          </Link>
          <Link href="/projects/palaceheights" className={isActive("/projects/palaceheights") ? "active" : ""}>
            Palace Heights
          </Link>
          <Link href="/projects/pavoreal" className={isActive("/projects/pavoreal") ? "active" : ""}>
            Pavo Real
          </Link>
          <Link href="/projects/skytrack" className={isActive("/projects/skytrack") ? "active" : ""}>
            Skytrack
          </Link>
          <Link href="/projects/uno" className={isActive("/projects/uno") ? "active" : ""}>
            Uno
          </Link>
        </div>
      </div>

      <div className="floating-actions">
        <a href="#" className="enquiry-rotate">
          Enquiry Now
        </a>
      </div>
    </>
  );
}