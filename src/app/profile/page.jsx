// "use client";

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import {
//   setUser,
//   logout,
//   fetchUserData,
// } from "../../app/redux/slices/authSlice";
// import Navbar from "../components/navbar/Navbar";

// const Page = () => {
//   const auth = getAuth();
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const user = useSelector((state) => state.auth.user);
//   const userData = useSelector((state) => state.auth.userData);
//   const isLoading = useSelector((state) => state.auth.isLoading);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         const userData = {
//           displayName: currentUser.displayName,
//           email: currentUser.email,
//           uid: currentUser.uid,
//         };
//         dispatch(setUser(userData));
//         dispatch(fetchUserData(currentUser.uid));
//       } else {
//         router.push("/login");
//       }
//     });

//     return unsubscribe; // Cleanup subscription on unmount
//   }, [dispatch, router]);

//   const handleSignOut = async () => {
//     await signOut(auth);
//     dispatch(logout());
//     router.push("/login");
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!user || !userData) {
//     return null; // Prevent rendering before user data is fetched
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="bg-white overflow-hidden shadow rounded-lg border mt-20 lg:px-16 px-4">
//         <div className="py-5 sm:px-6">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">
//             User Profile
//           </h3>
//           <p className="mt-1 max-w-2xl text-sm text-gray-500">
//             This is some information about the user.
//           </p>
//         </div>
//         <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
//           <dl className="sm:divide-y sm:divide-gray-200">
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Full name</dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                 {userData.displayName}
//               </dd>
//             </div>
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">
//                 Email address
//               </dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                 {userData.email}
//               </dd>
//             </div>
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">
//                 Phone number
//               </dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                 {userData.phoneNumber || "(123) 456-7890"}
//               </dd>
//             </div>
//             <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//               <dt className="text-sm font-medium text-gray-500">Address</dt>
//               <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                 {userData.address || "123 Main St, Anytown, USA 12345"}
//               </dd>
//             </div>
//           </dl>
//         </div>
//         <button
//           onClick={handleSignOut}
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Sign Out
//         </button>
//       </div>
//     </>
//   );
// };

// export default Page;

"use client"; 
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  setUser,
  logout,
  fetchUserData,
} from "../../app/redux/slices/authSlice";
import Navbar from "../components/navbar/Navbar";
import { TreeSpinner } from "../components/sleleton/Skeleton";

const Page = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const userData = useSelector((state) => state.auth.userData);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          displayName: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
        };
        dispatch(setUser(userData));
        dispatch(fetchUserData(currentUser.uid));
      } else {
        router.push("/login");
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, [dispatch, router]);

  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(logout());
    router.push("/login");
  };

  if (isLoading) {
    return <TreeSpinner/>;
  }

  if (!user || !userData) {
    return null; // Prevent rendering before user data is fetched
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <div className="bg-white overflow-hidden shadow rounded-lg border w-full sm:w-96">
          <div className="px-6 py-5">
            <h3 className="text-lg font-medium text-gray-900">User Profile</h3>
            <p className="mt-1 text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <dl>
              <div className="py-2 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">
                  Full name:
                </dt>
                <dd className="text-sm text-gray-900">
                  {userData.displayName}
                </dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">
                  Email address:
                </dt>
                <dd className="text-sm text-gray-900">{userData.email}</dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">
                  Phone number:
                </dt>
                <dd className="text-sm text-gray-900">
                  {userData.phoneNumber || ""}
                </dd>
              </div>
              <div className="py-2 flex justify-between">
                <dt className="text-sm font-medium text-gray-500">Address:</dt>
                <dd className="text-sm text-gray-900">
                  {userData.address || ""}
                </dd>
              </div>
            </dl>
          </div>
          <div className="px-6 py-4">
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 bg-red-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
