import React from "react";  
import "./WidgetTeams.css";  
  
function WidgetTeams() {  
  return (  
    <div className="widget">  
      <h2>Microsoft Teams</h2>  
      <p>Teams を使用してリモートワーカーをサポートする</p>  
      <ul>  
        <li>Teams は組織に対して有効になっています</li>  
        <li>新しい Teams ユーザーのセットアップ状態を確認する</li>  
        <li>ゲストアクセスは許可されています</li>  
      </ul>  
      <button>Teams を管理する</button>  
      <button>詳細情報</button>  
    </div>  
  );  
}  
  
export default WidgetTeams;  
