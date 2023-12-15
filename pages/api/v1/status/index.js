import database from "infra/database.js";

async function status(request, reply) {
    const result = await database.query("SELECT 1+1 as sum;");
    console.log(result.rows);
    reply.status(200).json({message: "Request executed successfully!"});
}

export default status;