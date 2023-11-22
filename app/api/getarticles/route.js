import { app } from "@/config/firebase";
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request) {
  const db = getFirestore(app);
  const q = query(collection(db, "blogs"), orderBy("title", "asc"));
  const querySnapshot = await getDocs(q);
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  console.log(docs, "these are docs you are looking for");
  return Response.json({ message: docs }, { status: 200 });
}
