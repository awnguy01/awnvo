export interface UsesInfoObject {
  header: string;
  dataList: UsesInfoListItem[];
}

export interface UsesInfoListItem {
  label: string;
  desc: string;
  link?: string;
  dataList?: UsesInfoListItem[];
}
