import { Outlet, useParams } from "react-router-dom";
import MyPost from "./my-posts/property";
import Header from "./header";
import Properties from "./properties";
import SectionTitle from "../../components/section-title";
import { useGetNestsByUserQuery } from "../../services/nest";
import { useSelector } from "react-redux";

const Home = () => {
  const { propertyId = "" } = useParams();

  const store = {
    user: useSelector((state) => state.authForm.user),
  };
  const { data: myPosts = [] } = useGetNestsByUserQuery(store.user.id, {
    refetchOnMountOrArgChange: true,
    skip: !store.user.id,
  });

  return propertyId ? (
    <Outlet />
  ) : (
    <div className="flex flex-col justify-center items-center w-full gap-5 pt-5">
      <Header />
      <Properties />
      {myPosts.length > 0 && <SectionTitle title="Your posts" />}
      <div className="flex flex-wrap justify-center gap-5 pb-5 w-full h-full">
        {myPosts.map((property) => (
          <MyPost key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
