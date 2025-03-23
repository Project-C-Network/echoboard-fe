export const ebContentSplit = (type: string | RegExp, content: string = ''): string[] => {
  return content.split(type);
};
