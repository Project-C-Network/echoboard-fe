import React from 'react';
import EBReactScan from '../common/common/components/EBReactScan';

export default function LiveBlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <EBReactScan />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
