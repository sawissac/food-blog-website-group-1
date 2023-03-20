import { 
  ReactElement, 
  createContext, 
  useState 
} from "react";
import { 
  BlogData, 
  MockDataType, 
  MockData
} from "./mock-data";

export const AppContext = createContext<MockDataType>(MockData);

interface Props{
  children: ReactElement[] | ReactElement;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [mockData, setMockData] = useState(MockData);
  const overRide: MockDataType = {
    ...mockData,
    setMainBanner: (blogId: number)=>{
      setMockData((data)=>{
        return {
          ...data,
          mainBannerId: blogId
        }
      })
    },
    setBlogData: (searchId: number, data: BlogData)=>{
      const updatedBlogData = mockData.blogData.map((blog)=>{
        if(blog.id === searchId)  {
          return {
            ...blog,
            ...data
          };
        }
        return blog;
      })
      setMockData((data)=>{
        return {
          ...data,
          blogData: updatedBlogData
        }
      })
    },
    createBlogData: (data: BlogData)=>{
      const updatedBlogData = [...mockData.blogData, data];
      setMockData((data)=>{
        return {
          ...data,
          blogData: updatedBlogData
        }
      })
    },
    deleteBlogData: (deleteId: number)=>{
      const updatedBlogData = mockData.blogData.filter((blog)=>{
        return blog.id !== deleteId;
      })
      setMockData((data)=>{
        return {
          ...data,
          blogData: updatedBlogData
        }
      })
    },
    isBlogExist: (blogId: number)=>{
      const searchedBlog = mockData.blogData.filter((blog)=>{
        return blog.id === blogId
      });
      return searchedBlog.length > 0;
    },
  }
  
  
  return (
    <AppContext.Provider value={overRide}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
  
