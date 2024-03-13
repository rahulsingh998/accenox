
import { connectToDatabase } from "@/src/utils/db";

export default async (req, res) => {
    try {
        if (req.method === "POST") {
            
                const { db } = await connectToDatabase();
                    const blog = { ...req.body,  };
                    await db.collection("blogs").insertOne(blog);
                    return res
                        .status(200)
                        .json({ message: "blog added successfully" });
        } else {
            return res.status(400).json({ message: "Bad Request" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
