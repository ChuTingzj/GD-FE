import type { FC, CSSProperties } from 'react'
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { useArticleList } from '@/pages/Home/hooks'
import { HotTag, HotContent } from './components'
const LOADING = 1;
const LOADED = 2;
let itemStatusMap: Record<any, any> = {};
interface RowProps {
  index: number
  style: CSSProperties
}
const Row: React.FC<RowProps> = (props) => {
  const { index, style } = props;
  let label;
  if (itemStatusMap[index] === LOADED) {
    label = `Row ${index}`;
  } else {
    label = "Loading...";
  }
  return (
    <div className="ListItem dark:color-light normal-transition" style={style}>
      {label}
    </div>
  );
}

const isItemLoaded = (index: number) => !!itemStatusMap[index];
const loadMoreItems = (startIndex: number, stopIndex: number) => {
  for (let index = startIndex; index <= stopIndex; index++) {
    itemStatusMap[index] = LOADING;
  }
  return (new Promise(resolve =>
    setTimeout(() => {
      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADED;
      }
      resolve();
    }, 2500)
  ) as Promise<void>)
};
export const ArticleList: FC = () => {
  const { listHeight, hotTag: { tagList, colorList }, hotContent: { imgList } } = useArticleList()
  return (
    <div className='relative mt-4'>
      <div className='absolute left-1/2 -translate-x-1/2 w-960p'>
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={1000}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              className="List bg-white dark:bg-dark"
              height={listHeight}
              itemCount={1000}
              itemSize={141}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={700}
            >
              {Row}
            </List>
          )}
        </InfiniteLoader>
        <div className='absolute -right-12 top-0 w-281p'>
          <HotTag tagList={tagList} colorList={colorList} />
          <HotContent imgList={imgList} />
        </div>
      </div>
    </div>
  )
}