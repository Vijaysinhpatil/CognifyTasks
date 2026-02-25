import { jobQueue } from "../queues/job.queue.js";

jobQueue.process( async (job) => {
   if(job.data.type === "LOG_PRODUCT"){
    console.log("Background Job:" , job.data.name);
   }
})