export const formatTimestamp = (timestamp: string): string => {
  const now = Date.now();
  const date = new Date(timestamp).getTime();
  const diffInSeconds = Math.floor((now - date) / 1000);

  const intervals = [
    { label: 'w', seconds: 604800 },
    { label: 'd', seconds: 86400 },
    { label: 'h', seconds: 3600 },
    { label: 'm', seconds: 60 },
    { label: 's', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count}${interval.label} ago`;
    }
  }

  return 'Just now';
};
