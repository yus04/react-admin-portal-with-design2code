import React from "react";  
import Header from "./Header";  
import Sidebar from "./Sidebar";  
import WidgetTeams from "./WidgetTeams";  
import WidgetUserManagement from "./WidgetUserManagement";  
import WidgetBilling from "./WidgetBilling";  
import WidgetTrainingGuide from "./WidgetTrainingGuide";  
import WidgetOfficeApp from "./WidgetOfficeApp";  
import "./App.css";  
  
function App() {  
  return (  
    <div className="app">  
      <Header />  
      <div className="content">  
        <Sidebar />  
        <div className="dashboard">  
          <WidgetTeams />  
          <WidgetUserManagement />  
          <WidgetBilling />  
          <WidgetTrainingGuide />  
          <WidgetOfficeApp />  
        </div>  
      </div>  
    </div>  
  );  
}  
  
export default App;  
