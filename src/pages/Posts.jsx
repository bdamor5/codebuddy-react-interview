import { authenticateUser, clearStore } from "../store/actions/formActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useCallback, useState } from "react";
import { fetchPosts } from "../store/actions/postActions";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Posts = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { allPostsLists } = useSelector((state) => state.postsReducer);
  const loader = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadMorePosts = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        dispatch(fetchPosts());
      }
    },
    [dispatch],
  );

  //handles infinite loading of posts
  useEffect(() => {
    const observer = new IntersectionObserver(loadMorePosts, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loadMorePosts]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    dispatch(authenticateUser(false));
    dispatch(clearStore());
  };

  return (
    <div className="relative h-full">
      <h1 className="mb-7 text-center text-xl font-bold text-white md:text-4xl">Posts</h1>
      <div className="absolute right-[-5px] top-[-5px] md:right-5 md:top-0">
        <button
          type="button"
          className="mb-2 me-2 scale-75 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 md:scale-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {allPostsLists?.map((post, index) => (
          <div key={post?.id} className="rounded-lg bg-white p-7 shadow-lg">
            <div className="flex items-center justify-center gap-4">
              <img className="h-10 w-10 rounded-full" src={post?.avatar} alt="" loading="lazy" />
              <div className="font-medium">{`${post?.firstName} ${post?.lastName}`}</div>
            </div>
            <p className="py-1 text-gray-700">{post?.writeup}</p>
          </div>
        ))}
      </div>
      <div ref={loader} className="loading-indicator py-2 text-center">
        <p>Loading more posts...</p>
      </div>
      {showScrollToTop && ( // Conditional rendering based on the scroll position
        <button
          id="scroll-to-top"
          type="button"
          onClick={handleScrollToTop}
          className="fixed bottom-0 right-10 mb-2 me-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
        >
          <ArrowUpwardIcon />
        </button>
      )}
    </div>
  );
};

export default Posts;
