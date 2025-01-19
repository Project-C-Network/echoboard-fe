import React from "react";

export default function FeedbackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor: 'teal', color: '#fff'}}>{children}</body>
    </html>
  );
}
