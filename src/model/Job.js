const Database = require('../db/config');

module.exports = {
    async get(){
        const db = await Database();

        const jobs = await db.all(`SELECT * FROM jobs`);

        await db.close();

        return jobs.map(job => ({
            id: job.id,
            name: job.name,
            "daily-hours": job.daily_hours,
            "total-hours": job.total_hours,
            "name-contact": job.name_contact,
            "job-details": job.job_details,
            created_at: job.created_at
        }))
    },

    async update(updatedJob, jobId){
        const db = await Database()

        await db.run(`UPDATE jobs SET
        name = "${updatedJob.name}",
        daily_hours = ${updatedJob["daily-hours"]},
        total_hours = ${updatedJob["total-hours"]},
        name_contact = "${updatedJob["name-contact"]}",
        job_details = "${updatedJob["job-details"]}"
        WHERE id = ${jobId}
        `)

        await db.close();
    },

    async delete(id) {
        const db = await Database()

        await db.run(`DELETE FROM jobs WHERE ID = ${id}`)

        await db.close()
    },

    async create(newJob){
        const db = await Database()

        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            name_contact,
            job_details,
            created_at
        ) VALUES (
            "${newJob.name}",
            ${newJob["daily-hours"]},
            ${newJob["total-hours"]},
            "${newJob["name-contact"]}",
            "${newJob["job-details"]}",
            ${newJob.created_at}
        )`)

        await db.close()
    }
}