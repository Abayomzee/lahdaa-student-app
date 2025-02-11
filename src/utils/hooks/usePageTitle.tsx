const usePageTitle = (title: string) => {
  document.title = `Fudtraka | ${title}`;
  return null;
};

export default usePageTitle;
