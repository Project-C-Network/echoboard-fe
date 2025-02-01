export const ebContentSplit = (content: string = '', type: string | RegExp): string[] => {
  return content.split(type);
};
