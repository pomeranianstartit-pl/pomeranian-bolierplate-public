const getParsedRouterDataItem = (itemData) => {
  const { path, date, blockNo, tags, linkLabel, ...routerData } = itemData;

  return { path, date, linkLabel, ...routerData };
};

export const getParsedRouterDataList = (routerMetaDataList) => {
  return routerMetaDataList.map((item) => getParsedRouterDataItem(item));
};
