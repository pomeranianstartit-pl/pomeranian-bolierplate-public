const getParsedRouterDataItem = (itemData) => {
  const { date, blockNo, tags, linkLabel, ...routerData } = itemData;

  return routerData;
};

export const getParsedRouterDataList = (routerMetaDataList) => {
  return routerMetaDataList.map((item) => getParsedRouterDataItem(item));
};
