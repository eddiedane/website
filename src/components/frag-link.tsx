'use client';

import React, { AnchorHTMLAttributes, useEffect, useRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface FragLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Partial<LinkProps> {
  name?: string;
  strict?: boolean;
  children?: React.ReactNode;
  onIntersecting?: (eventObject: OnIntersectingEventObject) => void;
  className?: string;
}

type OnIntersectingEventObject = {
  name: string;
};

export default function FragLink({
  name = '',
  strict = true,
  href,
  onIntersecting,
  children,
  ...props
}: FragLinkProps) {
  const { hash, href: hrefResolved } = resolveFragment(name, href);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!linkRef.current) return;

    if (strict && linkRef.current.pathname !== pathname) {
      onIntersecting?.({ name: '' });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === hash) {
            onIntersecting?.({ name: hash });
          }
        });
      },
      { threshold: 0.6 },
    );

    const target = document.getElementById(hash);
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [onIntersecting, hash, pathname]);

  return (
    <Link ref={linkRef} href={hrefResolved} {...props}>
      {children}
    </Link>
  );
}

function resolveFragment(hash: string | undefined, href: any): { href: any; hash: string } {
  let hrefHash: string = '';
  const hashRegex = /#((?:\w|-)+)/;

  if (typeof href === 'string') {
    const match = href.match(hashRegex);
    hrefHash = match ? match[1] : '';
  } else if (typeof href === 'object' && href !== null) {
    hrefHash = href.hash || '';
  } else {
    hrefHash = hash || '';
  }

  if (!hrefHash) {
    return { href: '#', hash: '' };
  }

  if (!href) {
    return { href: hrefHash ? `#${hrefHash}` : '', hash: hrefHash };
  } else if (typeof href === 'string') {
    return hashRegex.test(href)
      ? { href, hash: hrefHash }
      : { href: `${href}#${hrefHash}`, hash: hrefHash };
  } else if (typeof href === 'object' && href !== null) {
    href.hash = hrefHash;

    return { href, hash: hrefHash };
  }

  return { hash: '', href: '#' };
}
