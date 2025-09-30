# ページ情報コピー ブックマークレット

ページのタイトル、説明文、URLを一括でクリップボードにコピーするブックマークレットです。

## 使い方

### 1. ブックマークレットの登録

1. ブラウザのブックマークバーを表示
2. 新しいブックマークを作成
3. 名前: 「ページ情報コピー」など好きな名前
4. URL: 以下のコード全体をコピーして貼り付け

```javascript
javascript:(function(){const t=document.title;const m=document.querySelector('meta[name="description"]');const d=m?m.getAttribute('content'):'';const u=window.location.href;const text=t+'\n'+d+'\n'+u;navigator.clipboard.writeText(text).then(function(){const n=document.createElement('div');n.textContent='コピーしました!';n.style.cssText='position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:15px 20px;border-radius:5px;box-shadow:0 4px 6px rgba(0,0,0,0.1);z-index:10000;font-family:sans-serif;font-size:14px;';document.body.appendChild(n);setTimeout(function(){n.style.transition='opacity 0.5s';n.style.opacity='0';setTimeout(function(){document.body.removeChild(n);},500);},2000);}).catch(function(err){alert('コピーに失敗しました: '+err);});})();
```

### 2. 使用方法

1. コピーしたいWebページを開く
2. ブックマークバーの登録したブックマークレットをクリック
3. 自動的にクリップボードにコピーされ、画面右上に「コピーしました!」と表示されます

### 3. コピーされる形式

```
ページタイトル
ページの説明文
https://example.com/page-url
```

※ meta descriptionが存在しない場合は空行になります。

## 動作要件

- モダンブラウザ（Chrome、Firefox、Safari、Edge など）
- クリップボードAPIをサポートするブラウザ
- HTTPS接続のページ（クリップボードAPIの制限により）

## 開発版コード

整形されたコードは [bookmarklet.js](./bookmarklet.js) を参照してください。
