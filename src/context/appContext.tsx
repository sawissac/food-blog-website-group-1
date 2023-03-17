import { ReactElement, createContext, useState } from "react";
import { BlogData, MockData, mockData } from "./mock-data";

export const AppContext = createContext<MockData>(mockData);


type Props = {
  children: ReactElement[] | ReactElement;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [mkData, setMockData] = useState(mockData);

  const setMainBanner = (props: number) => {
    setMockData((i) => ({ ...i, mainBanner: props }));
  };

  const setBlogData = (id: number, data: BlogData) => {
    const updatedData = mkData.blogData.map((i) => {
      if (i.id === id) {
        return { ...i, ...data };
      } else {
        return i;
      }
    });
    setMockData((i) => ({ ...i, blogData: updatedData }));
  };

  const createBlogData = (data: BlogData) => {
    const updatedData = [...mkData.blogData];
    updatedData.push(data);
    setMockData((i) => ({ ...i, blogData: updatedData, uniqueId: mkData.uniqueId + 1 }));
  };

  const deleteBlogData = (id: number) => {
    const updatedData = mkData.blogData.filter((i) => i.id !== id);
    setMockData((i) => ({ ...i, blogData: updatedData }));
  };

  const isBlogExist = (id: number) => {
    return mkData.blogData.filter((i) => i.id === id).length > 0;
  };
  
  return (
    <AppContext.Provider value={{ ...mkData, createBlogData, setMainBanner, deleteBlogData, setBlogData, isBlogExist }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
  
