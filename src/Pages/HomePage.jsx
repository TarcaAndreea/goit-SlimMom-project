import React from 'react';
import ResponsiveAppBar from 'components/NavBar/NavBar';
import HomePageDesign from 'components/Design/HomePageDesign';

import DailyCalorieIntake from 'components/DailyCalorieIntake/dailyCalorieIntake';
export default function HomePage() {
  return (
    <div className="homepage">
      <HomePageDesign>
        <ResponsiveAppBar />
        <DailyCalorieIntake />
      </HomePageDesign>
    </div>
  );
}
