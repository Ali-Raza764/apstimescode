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
  q = query(collection(db, "blogs"), orderBy("createdAt", "asc"));

  const querySnapshot = await getDocs(q);
  const docs = [];

  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });

  return Response.json({ message: docs }, { status: 200 });
}
