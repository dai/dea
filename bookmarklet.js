// ページ情報コピー ブックマークレット
// このコードをブックマークのURLとして保存してください

javascript:(function(){
  // ページタイトルを取得
  const title = document.title;
  
  // meta descriptionを取得
  const metaDescription = document.querySelector('meta[name="description"]');
  const description = metaDescription ? metaDescription.getAttribute('content') : '';
  
  // 現在のURLを取得
  const url = window.location.href;
  
  // コピーするテキストを作成
  const textToCopy = title + '\n' + description + '\n' + url;
  
  // クリップボードにコピー
  navigator.clipboard.writeText(textToCopy).then(function() {
    // 成功時の通知を表示
    const notification = document.createElement('div');
    notification.textContent = 'コピーしました!';
    notification.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:15px 20px;border-radius:5px;box-shadow:0 4px 6px rgba(0,0,0,0.1);z-index:10000;font-family:sans-serif;font-size:14px;';
    document.body.appendChild(notification);
    
    // 2秒後に通知を削除
    setTimeout(function() {
      notification.style.transition = 'opacity 0.5s';
      notification.style.opacity = '0';
      setTimeout(function() {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 500);
    }, 2000);
  }).catch(function(err) {
    // エラー時の処理
    alert('コピーに失敗しました: ' + err);
  });
})();
