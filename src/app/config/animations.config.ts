export class SearchContentStyle {
  constructor(
    public width: string,
    public height: string,
    top: string,
    left: string,
    borderRadius: string
  ) { }
}
export const getSearchContentStyle = (
  width: string,
  height: string,
  top: string,
  left: string,
  borderRadius: string
) => ({ width, height, top, left, borderRadius });

