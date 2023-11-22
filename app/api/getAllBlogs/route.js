import { app } from "@/config/firebase";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
  limit,
} from "firebase/firestore";

export async function GET(req, res) {
  const db = getFirestore(app);
  let q;
  // const { category, slug, limit} = req.query;

//  if (category) {
//     q = query(collection(db, "blogs"), where("category", "==", category), orderBy("title", "asc"), limit(limit));
//   } else if (slug) {
//     q = query(collection(db, "blogs"), where("slug", "==", slug));
//   } else {
    q = query(collection(db, "blogs"), orderBy("createdAt", "asc"));
  // }////////

  const querySnapshot = await getDocs(q);
  const docs = [];

  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  console.log(docs);

  return Response.json({ message: docs }, { status: 200 });
}
