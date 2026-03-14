import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function Admin() {
  const [content, setContent] = useState('');
  const [pageId, setPageId] = useState('home');

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, 'pageContents', pageId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data().content);
      }
    };
    fetchContent();
  }, [pageId]);

  const handleSave = async () => {
    await setDoc(doc(db, 'pageContents', pageId), { pageId, content });
    alert('Saved!');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Admin Control Panel</h1>
      <select value={pageId} onChange={e => setPageId(e.target.value)} className="mb-4 p-2 border">
        <option value="home">Home</option>
        <option value="about">About</option>
      </select>
      <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full h-64 p-2 border mb-4" />
      <button onClick={handleSave} className="bg-green-500 text-white p-2">Save</button>
    </div>
  );
}
