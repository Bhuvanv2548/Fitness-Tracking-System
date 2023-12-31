import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";

import Dashboard from "./Dashboardpages/Dashboard";
import Diary from "./Dashboardpages/Diary";
import Help from "./Dashboardpages/Help";
import Plans from "./Dashboardpages/Plans";

import About from "./DatasPage/About";

import Login from "../Components/Login/LoginPage";
import SignupCard from "../Components/Login/SignupPage";
import Fhome from "../Components/support/Faq/Fhome";
import Request from "../Components/support/home/Request";
import Shome from "../Components/support/home/Shome";
import MHome from "../Components/support/mobileapp/MHome";
import Mdashboard from "../Components/support/mobileapp/Mdashboard";
import Mquick from "../Components/support/mobileapp/Mquick";
import Phome from "../Components/support/professional/Phome";
import Subsciption from "../Components/support/professional/Subsciption";
import Quick from "../Components/support/web version/Quick";
import WDashboard from "../Components/support/web version/WDashboard";
import Whome from "../Components/support/web version/Whome";
import WDairy from "../Components/support/web version/subcomponent/WDairy";
import AppUpdatePage from "./DatasPage/AppUpdatePage";
import FeaturesPage from "./DatasPage/FeaturesPage";
import FitnessPage from "./DatasPage/FitnessPage";
import Forms from "./DatasPage/Forms";
import KnowYourselfPage from "./DatasPage/KnowYourselfPage";
import NutritionPage from "./DatasPage/NutritionPage";
import RecentPostPage from "./DatasPage/RecentPostPage";
import RecipesPage from "./DatasPage/RecipesPage";
import TipsPage from "./DatasPage/TipsPage";
import SingleAppUpdatePage from "./SingleDataPage/SingleAppUpdatePage";
import SingleFeaturesPage from "./SingleDataPage/SingleFeaturesPage";
import SingleFitnessPage from "./SingleDataPage/SingleFitnessPage";
import SingleKnowYourSelfPage from "./SingleDataPage/SingleKnowYourSelfPage";
import SingleNutritionPage from "./SingleDataPage/SingleNutritionPage";
import SingleRecentPostPage from "./SingleDataPage/SingleRecentPostPage";
import SingleRecipesPage from "./SingleDataPage/SingleRecipesPage";
import SingleSearchPage from "./SingleDataPage/SingleSearchPage";
import SingleTipsPage from "./SingleDataPage/SingleTipsPage";

import Formscategory from "../Components/ForumsComponents/Formscategory";
import Formsdiscusion from "../Components/ForumsComponents/Formsdiscusion";
import Home from "../Components/Home/Home";
import ProductPro from "../Components/Product/ProductPro";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productPro" element={<ProductPro/>} />

      <Route path="/blog" element={<Blog />} />

      {/* data page routes  */}
      <Route path="/blog/recentPost" element={<RecentPostPage />} />
      <Route path="/blog/nutrition" element={<NutritionPage />} />
      <Route path="/blog/fitness" element={<FitnessPage />} />
      <Route path="/blog/features" element={<FeaturesPage />} />
      <Route path="/blog/recipes" element={<RecipesPage />} />
      <Route path="/blog/appUpdate" element={<AppUpdatePage />} />

      <Route path="/blog/tips" element={<TipsPage />} />
      <Route path="/blog/knowYourself" element={<KnowYourselfPage />} />

      {/* single page routes  */}
      <Route path="/blog/recentPost/:id" element={<SingleRecentPostPage />} />
      <Route path="/blog/nutrition/:id" element={<SingleNutritionPage />} />
      <Route path="/blog/fitness/:id" element={<SingleFitnessPage />} />
      <Route path="/blog/features/:id" element={<SingleFeaturesPage />} />
      <Route path="/blog/recipes/:id" element={<SingleRecipesPage />} />
      <Route path="/blog/appUpdate/:id" element={<SingleAppUpdatePage />} />

      <Route path="/blog/tips/:id" element={<SingleTipsPage />} />
      <Route
        path="/blog/knowYourself/:id"
        element={<SingleKnowYourSelfPage />}
      />
      <Route path="/blog/:id" element={<SingleSearchPage />} />

      {/* Bhuvan  */}

      <Route path="/support" element={<Shome />} />
      <Route path="/request" element={<Request />} />
      <Route path="/web" element={<Whome />} />
      <Route path="/web/dashboard" element={<WDashboard />} />
      <Route path="/web/quick" element={<Quick />} />
      <Route path="/web/dairy" element={<WDairy />} />

      <Route path="/mobile" element={<MHome />} />
      <Route path="/mobile/dashboard" element={<Mdashboard />} />
      <Route path="/mobile/quick" element={<Mquick />} />

      <Route path="/professional" element={<Phome />} />
      <Route path="/prof/sub" element={<Subsciption />} />
      <Route path="/faq" element={<Fhome />} />

      {/* Dashboard Routes  */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/help" element={<Help />} />

      <Route path="/about" element={<About />} />
      <Route path="/forms" element={<Forms />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignupCard />}></Route>
     
     

      <Route path="/forms/element" element={<Formscategory />}></Route>
      <Route path="/forms/discusion" element={<Formsdiscusion />}></Route>

    </Routes>
  );
}
