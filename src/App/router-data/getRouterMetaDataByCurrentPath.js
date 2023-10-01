export function getRouterMetaDataByCurrentPath(
  currentPathname = '',
  blockRouterMetaData = []
) {
  const pathElements = currentPathname.split('/');

  const exercisePathKey = pathElements[pathElements.length - 1];

  const exerciseRouteData = blockRouterMetaData.find((routerMetaData) => {
    return routerMetaData.path === exercisePathKey;
  });

  if (exerciseRouteData) {
    return exerciseRouteData;
  }

  return {
    path: '-',
    date: '-',
    linkLabel: '-',
    blockNo: null,
    element: null,
    tags: [],
  };
}
