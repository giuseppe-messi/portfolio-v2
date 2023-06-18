interface Panel {
  id: number;
  title: string;
  text: string;
}

export const usePanelsAboutSection = () => {
  const panels: Panel[] = [
    {
      id: 0,
      title: "first",
      text: "Phasellus ut lorem eu libero facilisis ultricies. Sed vitae lorem in purus suscipit rhoncus ac quis mi. Aenean luctus diam vulputate lacus convallis, gravida pharetra enim faucibus.",
    },
    {
      id: 1,
      title: "second",
      text: "Duis fringilla odio non imperdiet pretium. Suspendisse sagittis nisi nunc, nec lobortis nisl iaculis sed. Ut malesuada convallis tellus. Etiam et mauris id turpis finibus porta a eget nisi. Curabitur ultrices enim justo, quis euismod purus mattis a.",
    },
    {
      id: 2,
      title: "third",
      text: "Praesent at sapien consectetur mauris tempus feugiat. Suspendisse semper ipsum ut ligula posuere, in faucibus nisi accumsan. Nam nec risus sollicitudin, bibendum lorem sed, commodo eros. Suspendisse maximus semper volutpat. Phasellus placerat consequat purus, vitae scelerisque nunc dictum nec. Vestibulum id blandit est. Nunc pretium consequat elit tempor pellentesque.",
    },
  ];

  return { panels };
};
